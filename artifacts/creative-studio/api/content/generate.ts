import type { IncomingMessage, ServerResponse } from 'node:http';

let geminiKeyIndex = 0;
const geminiKeyCooldowns = new Map<string, number>();

function sanitizePromptInput(input: string): string {
  return input
    .replace(/[\r\n]+/g, ' ')
    .replace(/["'`]/g, '')
    .replace(/[{}\[\]]/g, '')
    .slice(0, 500)
    .trim();
}

function getRotatedGeminiKeys(): string[] {
  const keys: string[] = [];
  if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim()) {
    keys.push(process.env.GEMINI_API_KEY.trim());
  }
  if (process.env.GEMINI_API_KEY_1 && process.env.GEMINI_API_KEY_1.trim()) {
    keys.push(process.env.GEMINI_API_KEY_1.trim());
  }
  if (process.env.GEMINI_API_KEY_2 && process.env.GEMINI_API_KEY_2.trim()) {
    keys.push(process.env.GEMINI_API_KEY_2.trim());
  }
  if (keys.length === 0) return [];

  const now = Date.now();
  for (const [k, expires] of geminiKeyCooldowns.entries()) {
    if (now >= expires) geminiKeyCooldowns.delete(k);
  }

  const healthy = keys.filter(k => !geminiKeyCooldowns.has(k));
  const cooling = keys.filter(k => geminiKeyCooldowns.has(k));
  const prioritized = healthy.length > 0 ? [...healthy, ...cooling] : keys;

  const rotated: string[] = [];
  for (let i = 0; i < prioritized.length; i++) {
    rotated.push(prioritized[(geminiKeyIndex + i) % prioritized.length]);
  }
  geminiKeyIndex = (geminiKeyIndex + 1) % prioritized.length;
  return rotated;
}

export default async function handler(req: any, res: any) {
  // CORS & Preflight
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    return;
  }

  try {
    // Parse body if needed (Vercel automatically parses JSON bodies, but handle stream/string just in case)
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Invalid JSON body' }));
        return;
      }
    } else if (!body && typeof req.on === 'function') {
      const buffers: any[] = [];
      for await (const chunk of req) {
        buffers.push(chunk);
      }
      const raw = Buffer.concat(buffers).toString();
      try {
        body = JSON.parse(raw);
      } catch (e) {
        body = {};
      }
    }

    body = body || {};
    const { topic, format, tone, minWords, maxWords } = body;

    if (typeof topic !== 'string' || !topic.trim()) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Topic is required' }));
      return;
    }

    const sanitizedTopic = sanitizePromptInput(topic);
    const sanitizedFormat = sanitizePromptInput(format || 'Blog Article');
    const sanitizedTone = sanitizePromptInput(tone || 'Professional');
    const minW = Math.max(1, Math.min(2000, Number(minWords) || 100));
    const maxW = Math.max(minW, Math.min(4000, Number(maxWords) || 500));

    const geminiKeys = getRotatedGeminiKeys();
    if (geminiKeys.length === 0) {
      res.statusCode = 503;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        error: 'GEMINI_API_KEY is not configured in Vercel Environment Variables. Please add GEMINI_API_KEY in Vercel Project Settings > Environment Variables.',
        code: 'NO_KEYS_CONFIGURED'
      }));
      return;
    }

    const toneGuidelines: Record<string, string> = {
      Professional: 'Objective, authoritative, precise, structure-driven formatting.',
      Creative: 'Vibrant, engaging, storytelling, rich in metaphor and analogy.',
      Casual: 'Conversational, friendly, accessible, using contractions and analogies.',
      Academic: 'Scholarly, citation-friendly, deep analysis, rigorous logic.',
      Marketing: 'Highly persuasive, benefit-focused, call-to-action-driven copy.',
      Technical: 'Code-like precision, feature-focused, clear specifications and structured formatting.',
    };

    const selectedToneGuide = toneGuidelines[sanitizedTone] || toneGuidelines['Professional'];

    const promptText = `
You are an expert copywriter and AI content generator. The user needs a high-quality document of format: "${sanitizedFormat}" on the topic: "${sanitizedTopic}".
The tone of the document should be: "${sanitizedTone}" (${selectedToneGuide}).

Target word count range: ${minW} to ${maxW} words.

Your response MUST be written in beautiful, valid Markdown. Ensure that:
1. It has a clear title (using a single H1, e.g. # Title).
2. It uses appropriate heading hierarchy (H2, H3) for sections.
3. It has well-developed paragraphs, lists, or comparison tables as appropriate.
4. It is comprehensive, high-quality, clear, and highly relevant.
Do not include any explanations, preambles, or markdown block wrappers (like \`\`\`markdown) outside of the text itself. Start directly with the H1 heading.
`;

    let generatedText = '';
    let lastError: any = null;

    for (let idx = 0; idx < geminiKeys.length; idx++) {
      const currentKey = geminiKeys[idx];
      const model = 'gemini-2.5-flash';
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${currentKey}`;

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          signal: AbortSignal.timeout(8000),
          body: JSON.stringify({
            contents: [{ parts: [{ text: promptText }] }],
            generationConfig: {
              maxOutputTokens: Math.min(2048, Math.max(500, maxW * 2)),
              temperature: 0.7,
            },
          }),
        });

        if (!response.ok) {
          if (response.status === 503 || response.status === 429) {
            geminiKeyCooldowns.set(currentKey, Date.now() + 60000);
          }
          const errText = await response.text();
          let parsedErr: any = null;
          try { parsedErr = JSON.parse(errText); } catch (e) {}
          const msg = parsedErr?.error?.message || errText.slice(0, 300);
          lastError = new Error(`Gemini API status ${response.status}: ${msg}`);
          continue; // Try next key
        }

        const data: any = await response.json();
        const textResult = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!textResult) {
          lastError = new Error('Empty response from Gemini API');
          continue;
        }

        generatedText = textResult;
        break; // Success!
      } catch (fetchErr: any) {
        if (fetchErr.name === 'TimeoutError' || fetchErr.name === 'AbortError') {
          geminiKeyCooldowns.set(currentKey, Date.now() + 60000);
          lastError = new Error(`Gemini key index ${idx + 1} timed out after 8s`);
          continue;
        }
        lastError = fetchErr;
      }
    }

    if (!generatedText) {
      res.statusCode = 502;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        error: lastError?.message || 'AI Content Generation failed for all available keys',
        code: 'GENERATION_FAILED'
      }));
      return;
    }

    const words = generatedText.split(/\s+/).length;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      text: generatedText,
      stats: {
        words,
        characters: generatedText.length,
        readingTimeMin: Math.max(1, Math.ceil(words / 200)),
      }
    }));
  } catch (err: any) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      error: err?.message || 'Internal Server Error during generation',
      code: 'SERVER_ERROR'
    }));
  }
}
