let geminiKeyIndex = 0;
const geminiKeyCooldowns = new Map();

function sanitizePromptInput(input) {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[\r\n]+/g, ' ')
    .replace(/["'`]/g, '')
    .replace(/[{}\[\]]/g, '')
    .slice(0, 500)
    .trim();
}

function countWords(text) {
  if (!text || typeof text !== 'string') return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function cleanTrailingMarkdown(text) {
  let cleaned = text.trim();
  // Strip trailing headings if no content follows them (e.g. ## Heading)
  cleaned = cleaned.replace(/\n\s*#{1,6}\s+[^\n]*$/g, '').trim();
  // Strip trailing unclosed bullet points or list markers
  cleaned = cleaned.replace(/\n\s*[-*+]\s*$/g, '').trim();
  return cleaned;
}

function trimToSentenceBoundary(text, maxWords) {
  if (!text || typeof text !== 'string') return '';
  const initialWordCount = countWords(text);
  if (initialWordCount <= maxWords) {
    return text.trim();
  }

  const blocks = text.split(/\n\n+/);
  const accumulatedBlocks = [];
  let currentWords = 0;

  for (const block of blocks) {
    const isHeading = /^\s*#{1,6}\s+/.test(block);
    const blockWords = countWords(block);

    // If entire block fits within maxWords, add it
    if (currentWords + blockWords <= maxWords) {
      accumulatedBlocks.push(block);
      currentWords += blockWords;
      continue;
    }

    // If it's a heading and adding it would leave no room for sentences, stop
    if (isHeading) {
      break;
    }

    // Split paragraph into complete sentences
    const sentenceRegex = /[^.!?]+(?:[.!?]+(?:["'”’)]*)?(?=\s+|$))/g;
    const sentences = block.match(sentenceRegex) || [];

    const paraSentences = [];
    for (const sent of sentences) {
      const sentWords = countWords(sent);
      if (currentWords + sentWords <= maxWords) {
        paraSentences.push(sent.trim());
        currentWords += sentWords;
      } else {
        // Adding next sentence would exceed maxWords — stop here
        break;
      }
    }

    if (paraSentences.length > 0) {
      accumulatedBlocks.push(paraSentences.join(' '));
    }
    break;
  }

  let result = accumulatedBlocks.join('\n\n').trim();
  result = cleanTrailingMarkdown(result);

  // Hard safety boundary: ensure result NEVER exceeds maxWords under any circumstances
  let finalCount = countWords(result);
  if (finalCount > maxWords) {
    const wordsArr = result.split(/\s+/).slice(0, maxWords);
    const sliceText = wordsArr.join(' ');
    const lastPunct = sliceText.search(/[,;:](?=[^,;:]*$)/);
    if (lastPunct > 50) {
      result = sliceText.substring(0, lastPunct) + '.';
    } else {
      result = sliceText + '.';
    }
    result = cleanTrailingMarkdown(result);
  }

  return result;
}

function getRotatedGeminiKeys() {
  const keys = [];
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

  const rotated = [];
  for (let i = 0; i < prioritized.length; i++) {
    rotated.push(prioritized[(geminiKeyIndex + i) % prioritized.length]);
  }
  geminiKeyIndex = (geminiKeyIndex + 1) % prioritized.length;
  return rotated;
}

async function executeGeminiRequest(promptText, maxTokens) {
  const geminiKeys = getRotatedGeminiKeys();
  if (geminiKeys.length === 0) {
    throw new Error('NO_KEYS_CONFIGURED');
  }

  let lastError = null;

  for (let idx = 0; idx < geminiKeys.length; idx++) {
    const currentKey = geminiKeys[idx];
    const model = 'gemini-2.5-flash';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${currentKey}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(15000),
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptText }] }],
          generationConfig: {
            maxOutputTokens: maxTokens,
            temperature: 0.7,
            thinkingConfig: {
              thinkingBudget: 0
            }
          },
        }),
      });

      if (!response.ok) {
        if (response.status === 503 || response.status === 429) {
          geminiKeyCooldowns.set(currentKey, Date.now() + 60000);
        }
        const errText = await response.text();
        let parsedErr = null;
        try { parsedErr = JSON.parse(errText); } catch (e) {}
        const msg = parsedErr?.error?.message || errText.slice(0, 300);
        lastError = new Error(`Gemini API status ${response.status}: ${msg}`);
        continue;
      }

      const data = await response.json();
      const textResult = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!textResult) {
        lastError = new Error('Empty response from Gemini API');
        continue;
      }

      return textResult;
    } catch (fetchErr) {
      if (fetchErr.name === 'TimeoutError' || fetchErr.name === 'AbortError') {
        geminiKeyCooldowns.set(currentKey, Date.now() + 60000);
        lastError = new Error(`Gemini key index ${idx + 1} timed out after 15s`);
        continue;
      }
      lastError = fetchErr;
    }
  }

  throw lastError || new Error('Failed to generate content with available Gemini keys');
}

export default async function handler(req, res) {
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
      const buffers = [];
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
    const { topic, format, tone, minWords, maxWords, targetWords: rawTargetWords } = body;

    if (typeof topic !== 'string' || !topic.trim()) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Topic is required' }));
      return;
    }

    const sanitizedTopic = sanitizePromptInput(topic);
    const sanitizedFormat = sanitizePromptInput(format || 'Blog Article');
    const sanitizedTone = sanitizePromptInput(tone || 'Professional');

    // ── Dynamic Word Count Rules ───────────────────────────────────────────
    const targetWords = Math.max(100, Math.min(2000, Number(rawTargetWords) || Number(maxWords) || 500));
    const minimumAllowed = Math.round(targetWords * 0.90);
    const maximumAllowed = Math.round(targetWords * 1.10);

    const toneGuidelines = {
      Professional: 'Objective, authoritative, precise, structure-driven formatting.',
      Creative: 'Vibrant, engaging, storytelling, rich in metaphor and analogy.',
      Casual: 'Conversational, friendly, accessible, using contractions and analogies.',
      Academic: 'Scholarly, citation-friendly, deep analysis, rigorous logic.',
      Marketing: 'Highly persuasive, benefit-focused, call-to-action-driven copy.',
      Technical: 'Code-like precision, feature-focused, clear specifications and structured formatting.',
    };

    const selectedToneGuide = toneGuidelines[sanitizedTone] || toneGuidelines['Professional'];

    // ── Step 1: Initial Prompt Construction ────────────────────────────────
    const prompt1 = `
You are an expert copywriter and AI content generator. The user needs a high-quality document of format: "${sanitizedFormat}" on the topic: "${sanitizedTopic}".
The tone of the document should be: "${sanitizedTone}" (${selectedToneGuide}).

CRITICAL WORD COUNT INSTRUCTION:
Write approximately ${targetWords} words of substantive content (acceptable range: ${minimumAllowed} to ${maximumAllowed} words).
Do not stop early. Continue developing the topic until you reach the requested word count.

Your response MUST be written in beautiful, valid Markdown. Ensure that:
1. It has a clear title (using a single H1, e.g. # Title).
2. It uses appropriate heading hierarchy (H2, H3) for sections.
3. It has well-developed paragraphs, lists, or comparison tables as appropriate.
4. It is comprehensive, high-quality, clear, and highly relevant.
Do not include any explanations, preambles, or markdown block wrappers outside of the text itself. Start directly with the H1 heading.
`;

    const initialTokens = Math.max(2048, Math.min(8192, Math.round(targetWords * 2.5)));
    let generatedText = await executeGeminiRequest(prompt1, initialTokens);
    
    // ── Step 2: Count Initial Words ────────────────────────────────────────
    let initialWordCount = countWords(generatedText);
    let continuationUsed = false;
    let combinedWordCount = initialWordCount;

    // ── Step 3: Continuation (at most ONE request if below minimum) ────────
    if (initialWordCount < minimumAllowed && generatedText.length > 0) {
      continuationUsed = true;
      const remaining = minimumAllowed - initialWordCount;
      const prompt2 = `
You are continuing the following article on the topic "${sanitizedTopic}" (Tone: ${sanitizedTone}, Format: ${sanitizedFormat}).
Existing content:
---
${generatedText}
---
INSTRUCTIONS:
1. Continue the article seamlessly from where it left off.
2. Add approximately ${remaining} additional substantive words.
3. Do not repeat existing content or introduction.
4. Conclude the piece naturally once the requested length is achieved.
Do not include any preambles or code fences. Provide only the continuation text.
`;
      try {
        const contTokens = Math.max(1024, Math.round(remaining * 2.5));
        const continuationText = await executeGeminiRequest(prompt2, contTokens);
        if (continuationText && continuationText.trim()) {
          // ── Step 4: Combine original + continuation ──────────────────────
          generatedText = generatedText.trim() + '\n\n' + continuationText.trim();
          combinedWordCount = countWords(generatedText);
        }
      } catch (contErr) {
        // If continuation fails, proceed with the initial text
      }
    }

    // ── Step 5 & 6: Sentence-aware Maximum Enforcement (HARD LIMIT) ─────────
    if (combinedWordCount > maximumAllowed) {
      generatedText = trimToSentenceBoundary(generatedText, maximumAllowed);
    }

    // ── Step 8: Recount Final Result ───────────────────────────────────────
    const finalWordCount = countWords(generatedText);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      success: true,
      text: generatedText,
      stats: {
        words: finalWordCount,
        characters: generatedText.length,
        readingTimeMin: Math.max(1, Math.ceil(finalWordCount / 200)),
        targetWords,
        minimumAllowed,
        maximumAllowed,
        continuationUsed,
      }
    }));
  } catch (err) {
    if (err?.message === 'NO_KEYS_CONFIGURED') {
      res.statusCode = 503;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        error: 'GEMINI_API_KEY is not configured in Vercel Environment Variables. Please add GEMINI_API_KEY in Vercel Project Settings > Environment Variables.',
        code: 'NO_KEYS_CONFIGURED'
      }));
      return;
    }
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      error: err?.message || 'Internal Server Error during generation',
      code: 'SERVER_ERROR'
    }));
  }
}
