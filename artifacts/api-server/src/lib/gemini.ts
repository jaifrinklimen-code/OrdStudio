import { logger } from "./logger";
export interface GeneratedSticker {
  name: string;
  symbol: string;
  gradient: string;
}

export class AIServiceError extends Error {
  code: string;
  constructor(code: string, message: string) {
    super(message);
    this.name = "AIServiceError";
    this.code = code;
  }
}

/**
 * Sanitize user input before interpolating into AI prompts
 * to prevent prompt injection attacks.
 */
function sanitizePromptInput(input: string): string {
  return input
    .replace(/[\r\n]+/g, ' ')       // Remove newlines (prevent instruction injection)
    .replace(/["'`]/g, '')           // Remove quotes
    .replace(/[{}\[\]]/g, '')        // Remove brackets
    .slice(0, 500)                   // Limit length
    .trim();
}

let geminiKeyIndex = 0;
const geminiKeyCooldowns = new Map<string, number>();

function getGeminiApiKeys(): string[] {
  const keys: string[] = [];
  if (process.env.GEMINI_API_KEY) {
    keys.push(process.env.GEMINI_API_KEY);
  }
  let index = 1;
  while (true) {
    const key = process.env[`GEMINI_API_KEY_${index}`];
    if (key) {
      if (!keys.includes(key)) {
        keys.push(key);
      }
      index++;
    } else {
      break;
    }
  }
  for (const envKey in process.env) {
    if (envKey.startsWith("GEMINI_API_KEY_")) {
      const val = process.env[envKey];
      if (val && !keys.includes(val)) {
        keys.push(val);
      }
    }
  }
  return keys;
}

function getRotatedGeminiKeys(): string[] {
  const keys = getGeminiApiKeys();
  if (keys.length === 0) return [];
  
  const now = Date.now();
  for (const [k, expires] of geminiKeyCooldowns.entries()) {
    if (now >= expires) geminiKeyCooldowns.delete(k);
  }

  // Prioritize keys not currently in cooldown (e.g. not experiencing 503/429)
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

let nvidiaKeyIndex = 0;

function getNvidiaApiKeys(): string[] {
  const keys: string[] = [];
  if (process.env.NVIDIA_API_KEY) {
    keys.push(process.env.NVIDIA_API_KEY);
  }
  let index = 1;
  while (true) {
    const key = process.env[`NVIDIA_API_KEY_${index}`];
    if (key) {
      if (!keys.includes(key)) {
        keys.push(key);
      }
      index++;
    } else {
      break;
    }
  }
  for (const envKey in process.env) {
    if (envKey.startsWith("NVIDIA_API_KEY_")) {
      const val = process.env[envKey];
      if (val && !keys.includes(val)) {
        keys.push(val);
      }
    }
  }
  return keys;
}

function getRotatedNvidiaKeys(): string[] {
  const keys = getNvidiaApiKeys();
  if (keys.length === 0) return [];
  
  const rotated: string[] = [];
  for (let i = 0; i < keys.length; i++) {
    rotated.push(keys[(nvidiaKeyIndex + i) % keys.length]);
  }
  
  nvidiaKeyIndex = (nvidiaKeyIndex + 1) % keys.length;
  return rotated;
}

export async function generateStickerWithAI(prompt: string, style: string): Promise<GeneratedSticker | null> {
  const sanitizedPrompt = sanitizePromptInput(prompt);
  const sanitizedStyle = sanitizePromptInput(style);
  const geminiKeys = getRotatedGeminiKeys();
  const nvidiaKeys = getRotatedNvidiaKeys();
  const anthropicKey = process.env.ANTHROPIC_API_KEY;

  const promptText = `
You are an expert design assistant. The user wants to generate a custom 3D glossy vector sticker based on the prompt: "${sanitizedPrompt}" and visual style profile: "${sanitizedStyle}".

Choose:
1. A SINGLE emoji ONLY.
   - It MUST be a valid emoji.
   - Never return plain words such as "wings", "cat", "skull", etc.
   - If multiple concepts exist, choose the emoji that best represents the overall composition.

2. A premium sticker name (maximum 20 characters).

3. A premium CSS linear gradient that matches the style.

Return ONLY JSON:

{
  "name": string,
  "symbol": string,
  "gradient": string
}

IMPORTANT:
- The symbol MUST always be an emoji.
- Never return text as the symbol.
- Respond with raw JSON only.
Return a JSON object exactly conforming to this schema:
{
  "name": string,
  "symbol": string,
  "gradient": string
}
Do not include any explanations or markdown wrappers outside of the JSON. Respond with raw JSON ONLY.
`;

  // Define our provider attempts
  const attempts: Array<() => Promise<GeneratedSticker>> = [];

  for (let idx = 0; idx < geminiKeys.length; idx++) {
    const currentKey = geminiKeys[idx];
    attempts.push(async () => {
      const model = "gemini-2.5-flash";
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${currentKey}`;

      logger.info(`Attempting Gemini sticker generation using key index ${idx + 1}/${geminiKeys.length}`);
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptText }] }],
          generationConfig: { responseMimeType: "application/json" },
        }),
      });

      if (!response.ok) {
        const errText = await response.text();
        logger.error({ status: response.status, error: errText }, "Gemini API error response");
        let parsedErr;
        try { parsedErr = JSON.parse(errText); } catch (e) {}
        const msg = parsedErr?.error?.message || "";
        if (msg.includes("API key not valid")) {
          throw new AIServiceError("INVALID_API_KEY", "The configured Gemini API key is invalid.");
        }
        throw new Error(`Gemini API failed with status ${response.status}: ${msg}`);
      }

       const data: any = await response.json();
      const textResult = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!textResult) {
        throw new Error("Empty response from Gemini API");
      }

      const cleanJson = cleanJsonText(textResult);
      const parsed: GeneratedSticker = JSON.parse(cleanJson);
      if (!parsed.name || !parsed.symbol || !parsed.gradient) {
        throw new Error("Invalid output format from Gemini");
      }
      return parsed;
    });
  }

  for (let idx = 0; idx < nvidiaKeys.length; idx++) {
    const currentKey = nvidiaKeys[idx];
    attempts.push(async () => {
      const url = "https://integrate.api.nvidia.com/v1/chat/completions";
      logger.info(`Attempting Nvidia sticker generation using key index ${idx + 1}/${nvidiaKeys.length}`);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${currentKey}`
        },
        body: JSON.stringify({
          model: "meta/llama-3.1-8b-instruct",
          messages: [{ role: "user", content: promptText }],
          temperature: 0.2,
          max_tokens: 1024
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        logger.error({ status: response.status, error: errText }, "Nvidia API error response");
        let parsedErr;
        try { parsedErr = JSON.parse(errText); } catch (e) {}
        const msg = parsedErr?.detail || parsedErr?.message || "";
        if (response.status === 401 || msg.includes("Unauthorized")) {
          throw new AIServiceError("INVALID_API_KEY", "The configured Nvidia API key is invalid.");
        }
        throw new Error(`Nvidia API failed with status ${response.status}: ${msg}`);
      }

      const data = await response.json() as any;
      const textResult = data.choices?.[0]?.message?.content;
      if (!textResult) {
        throw new Error("Empty response from Nvidia API");
      }

const cleanJson = cleanJsonText(textResult);

let parsed: GeneratedSticker;

try {
  parsed = JSON.parse(cleanJson);
} catch {
  logger.warn("Nvidia returned invalid JSON. Falling back to local generator.");
  return await generateLocalSticker(sanitizedPrompt, sanitizedStyle);
}

if (
  !parsed.name ||
  !parsed.symbol ||
  !parsed.gradient ||
  typeof parsed.symbol !== "string" ||
  parsed.symbol.length > 5 ||
  !/\p{Emoji}/u.test(parsed.symbol)
) {
  logger.warn("Invalid Nvidia sticker output. Falling back to local generator.");
  return await generateLocalSticker(sanitizedPrompt, sanitizedStyle);
}

return parsed;
    });
  }

  if (anthropicKey) {
    attempts.push(async () => {
      const url = "https://api.anthropic.com/v1/messages";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": anthropicKey,
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
          model: "claude-3-5-haiku-20241022",
          max_tokens: 1024,
          messages: [{ role: "user", content: promptText }]
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        logger.error({ status: response.status, error: errText }, "Anthropic API error response");
        let parsedErr;
        try { parsedErr = JSON.parse(errText); } catch (e) {}
        const msg = parsedErr?.error?.message || "";
        if (msg.includes("credit balance is too low") || msg.includes("billing")) {
          throw new AIServiceError("CREDIT_BALANCE_LOW", "Your Anthropic API key has run out of credits. Please check your billing or configure a free GEMINI_API_KEY instead.");
        }
        throw new Error(`Anthropic API failed with status ${response.status}: ${msg}`);
      }

      const data = await response.json() as any;
      const textResult = data.content?.[0]?.text;
      if (!textResult) {
        throw new Error("Empty response from Anthropic API");
      }

      const cleanJson = cleanJsonText(textResult);
      const parsed: GeneratedSticker = JSON.parse(cleanJson);
      if (!parsed.name || !parsed.symbol || !parsed.gradient) {
        throw new Error("Invalid output format from Anthropic");
      }
      return parsed;
    });
  }

  // Local deterministic fallback generator — provides high-quality stickers
  // when external providers are unavailable or fail. This produces a
  // `GeneratedSticker` using heuristics and a seeded selection so results
  // are consistent per prompt.
  function hashString(s: string) {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return h;
  }

  function pick<T>(arr: T[], seed: number) {
    if (arr.length === 0) return arr[0];
    return arr[seed % arr.length];
  }

  async function generateLocalSticker(p: string, s: string): Promise<GeneratedSticker> {
    const seed = hashString(`${p}::${s}`);

    const emojiPools: Record<string, string[]> = {
      default: ["🪐", "💀", "🧁", "🌵", "🌙", "⭐", "⚡", "🔥", "🍭", "🌸", "🍀", "🎯", "🎵", "📦", "🧩"],
      cyberpunk: ["🪐", "⚡", "💠", "🔮", "🧿"],
      holo: ["✨", "🌈", "🔷", "🔶"],
      vector: ["⭐", "⬜", "🔺", "🔹"],
      comic: ["💥", "🤩", "😂", "😎"],
      pixel: ["🕹️", "👾", "🎮"],
    };

    const adjectives = [
      "Luminous",
      "Neon",
      "Ghost",
      "Emerald",
      "Crystal",
      "Velvet",
      "Orbit",
      "Nova",
      "Dream",
      "Prism",
      "Mint",
      "Solar",
      "Aster",
    ];
    const nouns = [
      "Skull",
      "Saturn",
      "Spark",
      "Blossom",
      "Byte",
      "Pulse",
      "Halo",
      "Droplet",
      "Comet",
      "Shard",
    ];

 const gradients = {
  cyberpunk: [
    "linear-gradient(135deg, #ff0080, #7928ca)",
    "linear-gradient(135deg, #06b6d4, #7c3aed)",
  ],
  holo: [
    "linear-gradient(135deg, #7dd3fc, #a78bfa)",
    "linear-gradient(135deg, #fbcfe8, #c7b2ff)",
  ],
  pixel: [
    "linear-gradient(135deg, #facc15, #f97316)",
    "linear-gradient(135deg, #22c55e, #16a34a)",
  ],
  vector: [
    "linear-gradient(135deg, #34d399, #10b981)",
    "linear-gradient(135deg, #60a5fa, #3b82f6)",
  ],
  default: [
    "linear-gradient(135deg, #ec4899, #8b5cf6)",
    "linear-gradient(135deg, #06b6d4, #3b82f6)",
    "linear-gradient(135deg, #f59e0b, #ef4444)",
  ],
};


    const styleKey = s?.toLowerCase()?.includes("cyber")
      ? "cyberpunk"
      : s?.toLowerCase()?.includes("holo")
      ? "holo"
      : s?.toLowerCase()?.includes("pixel")
      ? "pixel"
      : s?.toLowerCase()?.includes("vector")
      ? "vector"
      : "default";

    const pool = emojiPools[styleKey] || emojiPools.default;
let emoji = pick(pool, seed);

    // Prefer words from the prompt for the name if available
    const tokens = p
      .replace(/[^a-z0-9\s]/gi, " ")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 4);

    let name = "";
    if (tokens.length > 0) {
      name = tokens.slice(0, 2).map((t) => t[0].toUpperCase() + t.slice(1)).join(" ");
    }
    if (!name) {
      name = `${pick(adjectives, seed)} ${pick(nouns, seed >>> 3)}`;
    }
    // Ensure name <= 20 chars
    if (name.length > 20) name = name.slice(0, 20).trim();

const promptText = p.toLowerCase();

let gradient: string;

if (promptText.includes("rose") || promptText.includes("flower")) {
  gradient = pick([
    "linear-gradient(135deg, #f9a8d4, #c4b5fd)",
    "linear-gradient(135deg, #fbcfe8, #ddd6fe)",
    "linear-gradient(135deg, #f472b6, #a78bfa)"
  ], seed >>> 1);
}

else if (promptText.includes("wing") || promptText.includes("gold")) {
  gradient = pick([
    "linear-gradient(135deg, #fde68a, #f59e0b)",
    "linear-gradient(135deg, #facc15, #fb923c)",
    "linear-gradient(135deg, #fef08a, #f97316)"
  ], seed >>> 1);
}

else if (promptText.includes("arcade") || promptText.includes("retro")) {
  gradient = pick([
    "linear-gradient(135deg, #7c3aed, #06b6d4)",
    "linear-gradient(135deg, #8b5cf6, #ec4899)",
    "linear-gradient(135deg, #4f46e5, #22d3ee)"
  ], seed >>> 1);
}

else if (promptText.includes("cat") || promptText.includes("kawaii")) {
  gradient = pick([
    "linear-gradient(135deg, #fbcfe8, #fcd34d)",
    "linear-gradient(135deg, #f9a8d4, #fde68a)",
    "linear-gradient(135deg, #fda4af, #fcd34d)"
  ], seed >>> 1);
}

else if (promptText.includes("skull")) {
  gradient = pick([
    "linear-gradient(135deg, #db2777, #7c3aed)",
    "linear-gradient(135deg, #9333ea, #2563eb)",
    "linear-gradient(135deg, #be185d, #4f46e5)"
  ], seed >>> 1);
}

else if (promptText.includes("donut")) {
  gradient = pick([
    "linear-gradient(135deg, #f9a8d4, #c084fc)",
    "linear-gradient(135deg, #fda4af, #a78bfa)",
    "linear-gradient(135deg, #fbcfe8, #c4b5fd)"
  ], seed >>> 1);
}

else {
  gradient = pick(
    gradients[styleKey] || gradients.default,
    seed >>> 1
  );
}

// Prevent plain text like "wings" from appearing
if (!/\p{Emoji}/u.test(emoji)) {
  emoji = pick(pool, seed);
}

return {
  name,
  symbol: emoji,
  gradient,
};
  }

  // Always include the local fallback as the last attempt so the service
  // returns high-quality stickers even without external API keys.
  attempts.push(async () => {
    logger.info("Using local fallback generator for sticker (no external API used)");
    return await generateLocalSticker(sanitizedPrompt, sanitizedStyle);
  });

  if (attempts.length === 0) {
    logger.warn("No API keys (Gemini, Nvidia, Anthropic) are configured. Skipping AI generation.");
    return null;
  }

  let lastError: any = null;
  for (const attempt of attempts) {
    try {
      const result = await attempt();
      return result;
    } catch (err) {
      lastError = err;
      logger.warn({ err }, "Sticker AI generation attempt failed. Trying fallback if available...");
    }
  }

  // If all attempts failed, throw the last error
  throw lastError || new Error("AI Generation failed for all providers");
}

function cleanJsonText(text: string): string {
  const trimmed = text.trim();
  const startIdx = trimmed.indexOf('{');
  const endIdx = trimmed.lastIndexOf('}');
  if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
    return trimmed.substring(startIdx, endIdx + 1);
  }
  return trimmed;
}

function countWords(text: string): number {
  if (!text || typeof text !== 'string') return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function trimToSentenceBoundary(text: string, maxWords: number, minWords: number): string {
  const currentWords = countWords(text);
  if (currentWords <= maxWords) return text;
  const sentences = text.match(/[^.!?]+[.!?]+(\s+|$)|[^.!?]+$/g) || [text];
  let accumulated = '';
  let words = 0;
  for (const s of sentences) {
    const sWords = countWords(s);
    if (words + sWords <= maxWords || words < minWords) {
      accumulated += s;
      words += sWords;
    } else {
      break;
    }
  }
  const trimmed = accumulated.trim();
  return (countWords(trimmed) >= minWords) ? trimmed : text;
}

export async function generateContentWithAI(
  topic: string,
  format: string,
  tone: string,
  minWords: number,
  maxWords: number,
  targetWords?: number
): Promise<string> {
  const sanitizedTopic = sanitizePromptInput(topic);
  const sanitizedFormat = sanitizePromptInput(format);
  const sanitizedTone = sanitizePromptInput(tone);
  const targetW = targetWords || Math.round((minWords + maxWords) / 2);

  const geminiKeys = getRotatedGeminiKeys();
  const nvidiaKeys = getRotatedNvidiaKeys();
  const anthropicKey = process.env.ANTHROPIC_API_KEY;

  const toneGuidelines: Record<string, string> = {
    Professional: "Objective, authoritative, precise, structure-driven formatting.",
    Creative: "Vibrant, engaging, storytelling, rich in metaphor and analogy.",
    Casual: "Conversational, friendly, accessible, using contractions and analogies.",
    Academic: "Scholarly, citation-friendly, deep analysis, rigorous logic.",
    Marketing: "Highly persuasive, benefit-focused, call-to-action-driven copy.",
    Technical: "Code-like precision, feature-focused, clear specifications and structured formatting.",
  };

  const selectedToneGuide = toneGuidelines[sanitizedTone] || toneGuidelines["Professional"];

  const promptText = `
You are an expert copywriter and AI content generator. The user needs a high-quality document of format: "${sanitizedFormat}" on the topic: "${sanitizedTopic}".
The tone of the document should be: "${sanitizedTone}" (${selectedToneGuide}).

CRITICAL WORD COUNT INSTRUCTION:
Write approximately ${targetW} words of substantive content (acceptable range: ${minWords} to ${maxWords} words).
Do not stop early. Continue developing the topic until you reach the requested word count.

Your response MUST be written in beautiful, valid Markdown. Ensure that:
1. It has a clear title (using a single H1, e.g. # Title).
2. It uses appropriate heading hierarchy (H2, H3) for sections.
3. It has well-developed paragraphs, lists, or comparison tables as appropriate.
4. It is comprehensive, high-quality, clear, and highly relevant.
Do not include any explanations, preambles, or markdown block wrappers outside of the text itself. Start directly with the H1 heading.
`;

  const attempts: Array<() => Promise<string>> = [];

  for (let idx = 0; idx < geminiKeys.length; idx++) {
    const currentKey = geminiKeys[idx];
    attempts.push(async () => {
      const model = "gemini-2.5-flash";
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${currentKey}`;

      logger.info(`Attempting Gemini content generation using key index ${idx + 1}/${geminiKeys.length}`);
      
      let response: Response;
      try {
        response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: AbortSignal.timeout(15000),
          body: JSON.stringify({
            contents: [{ parts: [{ text: promptText }] }],
            generationConfig: {
              maxOutputTokens: Math.max(2048, Math.min(8192, Math.round(targetW * 2.5))),
              temperature: 0.7,
              thinkingConfig: {
                thinkingBudget: 0,
              },
            },
          }),
        });
      } catch (fetchErr: any) {
        if (fetchErr.name === 'TimeoutError' || fetchErr.name === 'AbortError') {
          geminiKeyCooldowns.set(currentKey, Date.now() + 60000);
          logger.warn(`Gemini key index ${idx + 1} timed out after 15s — failing over to next key immediately`);
          throw new AIServiceError("GEMINI_TIMEOUT", `Gemini API key index ${idx + 1} timed out after 15s`);
        }
        throw fetchErr;
      }

      if (!response.ok) {
        if (response.status === 503 || response.status === 429) {
          geminiKeyCooldowns.set(currentKey, Date.now() + 60000);
        }
        const errText = await response.text();
        let parsedErr: any = null;
        try { parsedErr = JSON.parse(errText); } catch (e) {}
        const msg = parsedErr?.error?.message || errText.slice(0, 300);
        logger.error({ provider: 'gemini', status: response.status, error: msg }, "Gemini API content generation error response");
        if (msg.includes("API key not valid")) {
          throw new AIServiceError("INVALID_API_KEY", "The configured Gemini API key is invalid.");
        }
        throw new AIServiceError(`GEMINI_${response.status}`, `Gemini API error (${response.status}): ${msg}`);
      }

      const data: any = await response.json();
      const textResult = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!textResult) {
        throw new AIServiceError("EMPTY_RESPONSE", "Empty response from Gemini API");
      }
      return textResult;
    });
  }

  for (let idx = 0; idx < nvidiaKeys.length; idx++) {
    const currentKey = nvidiaKeys[idx];
    attempts.push(async () => {
      const url = "https://integrate.api.nvidia.com/v1/chat/completions";
      logger.info(`Attempting Nvidia content generation using key index ${idx + 1}/${nvidiaKeys.length}`);
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${currentKey}`
        },
        body: JSON.stringify({
          model: "meta/llama-3.1-8b-instruct",
          messages: [{ role: "user", content: promptText }],
          temperature: 0.5,
          max_tokens: 2048
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        let parsedErr: any = null;
        try { parsedErr = JSON.parse(errText); } catch (e) {}
        const msg = parsedErr?.detail || parsedErr?.message || errText.slice(0, 300);
        logger.error({ provider: 'nvidia', status: response.status, error: msg }, "Nvidia API content generation error response");
        if (response.status === 401 || msg.includes("Unauthorized")) {
          throw new AIServiceError("INVALID_API_KEY", "The configured Nvidia API key is invalid.");
        }
        throw new AIServiceError(`NVIDIA_${response.status}`, `Nvidia API error (${response.status}): ${msg}`);
      }

      const data = await response.json() as any;
      const textResult = data.choices?.[0]?.message?.content;
      if (!textResult) {
        throw new Error("Empty response from Nvidia API");
      }
      return textResult;
    });
  }

  if (anthropicKey) {
    attempts.push(async () => {
      const url = "https://api.anthropic.com/v1/messages";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": anthropicKey,
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
          model: "claude-3-5-haiku-20241022",
          max_tokens: 2048,
          messages: [{ role: "user", content: promptText }]
        })
      });

      if (!response.ok) {
        const errText = await response.text();
        logger.error({ status: response.status, error: errText }, "Anthropic API content generation error response");
        let parsedErr;
        try { parsedErr = JSON.parse(errText); } catch (e) {}
        const msg = parsedErr?.error?.message || "";
        if (msg.includes("credit balance is too low") || msg.includes("billing")) {
          throw new AIServiceError("CREDIT_BALANCE_LOW", "Your Anthropic API key has run out of credits. Please check your billing or configure a free GEMINI_API_KEY instead.");
        }
        throw new Error(`Anthropic API failed with status ${response.status}: ${msg}`);
      }

      const data = await response.json() as any;
      const textResult = data.content?.[0]?.text;
      if (!textResult) {
        throw new Error("Empty response from Anthropic API");
      }
      return textResult;
    });
  }

  function generateLocalContent(t: string, f: string, toneStr: string): string {
    const formattedTopic = t.charAt(0).toUpperCase() + t.slice(1);
    return `# ${formattedTopic}

## Overview of ${formattedTopic}
This document covers key perspectives on **${formattedTopic}**, formatted as a **${f}** in a **${toneStr}** tone. 

### Key Pillars
1. **Strategic Intent:** Understanding the primary objectives and target audiences.
2. **Execution Excellence:** Adopting best practices, structural formatting, and cohesive layouts.
3. **Continuous Iteration:** Refining content through user feedback and performance analytics.

### Recommended Next Steps
- Review this content draft.
- Import the document into your active presentation slides.
- Export as print-ready PDF or high-density graphic assets.
`;
  }

  if (attempts.length === 0) {
    logger.warn("No API keys (Gemini, Nvidia, Anthropic) are configured for content generation.");
    throw new AIServiceError("NO_KEYS_CONFIGURED", "No API keys are configured. Please set GEMINI_API_KEY in your environment.");
  }

  let lastError: any = null;
  for (const attempt of attempts) {
    try {
      const result = await attempt();
      // Clean up markdown block wrapping if generated
      let processed = result.trim();
      if (processed.startsWith("```markdown")) {
        processed = processed.replace(/^```markdown\s*/, "");
        if (processed.endsWith("```")) {
          processed = processed.substring(0, processed.length - 3);
        }
      } else if (processed.startsWith("```")) {
        processed = processed.replace(/^```\s*/, "");
        if (processed.endsWith("```")) {
          processed = processed.substring(0, processed.length - 3);
        }
      }
      let words = countWords(processed);

      // If below tolerance, make 1 controlled continuation call
      if (words < minWords && processed.length > 0) {
        const remainingWords = targetW - words;
        const prompt2 = `
You are continuing the following article on the topic "${sanitizedTopic}" (Tone: ${sanitizedTone}, Format: ${sanitizedFormat}).
Existing content:
---
${processed}
---
INSTRUCTIONS:
1. Continue the article seamlessly from where it left off.
2. Add approximately ${remainingWords} additional substantive words.
3. Do not repeat existing content or introduction.
4. Conclude the piece naturally once the requested length is achieved.
Do not include any preambles or code fences. Provide only the continuation text.
`;
        try {
          const contTokens = Math.max(1024, Math.round(remainingWords * 2.5));
          for (let cIdx = 0; cIdx < geminiKeys.length; cIdx++) {
            const cKey = geminiKeys[cIdx];
            const cUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${cKey}`;
            const cRes = await fetch(cUrl, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              signal: AbortSignal.timeout(15000),
              body: JSON.stringify({
                contents: [{ parts: [{ text: prompt2 }] }],
                generationConfig: {
                  maxOutputTokens: contTokens,
                  temperature: 0.7,
                  thinkingConfig: { thinkingBudget: 0 },
                },
              }),
            });
            if (cRes.ok) {
              const cData: any = await cRes.json();
              const cText = cData.candidates?.[0]?.content?.parts?.[0]?.text;
              if (cText && cText.trim()) {
                processed = processed.trim() + "\n\n" + cText.trim();
                words = countWords(processed);
                break;
              }
            }
          }
        } catch (cErr) {
          // Proceed with initial text
        }
      }

      if (words > maxWords) {
        processed = trimToSentenceBoundary(processed, maxWords, minWords);
      }

      return processed.trim();
    } catch (err) {
      lastError = err;
      logger.warn({ err }, "Content AI generation attempt failed. Trying fallback if available...");
    }
  }

  throw lastError || new Error("AI Content Generation failed for all providers");
}

