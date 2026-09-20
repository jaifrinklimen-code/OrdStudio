import { Router, type IRouter } from "express";
import { dataStore } from "../lib/dbFallback";
import { authMiddleware } from "../middleware/auth";

const router: IRouter = Router();

// GET /api/stickers — Public catalog (read-only, no user data)
// Templates and default stickers are public catalog data, safe to expose
router.get("/stickers", async (_req, res) => {
  try {
    const list = await dataStore.getStickers();
    res.json(list);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stickers" });
  }
});

// POST /api/stickers — Create sticker (authenticated)
router.post("/stickers", authMiddleware, async (req, res) => {
  try {
    const { name, style, gradient, symbol } = req.body;
    if (
      typeof name !== "string" ||
      typeof style !== "string" ||
      typeof gradient !== "string" ||
      typeof symbol !== "string"
    ) {
      res.status(400).json({ error: "Invalid parameter types" });
      return;
    }

    const sanitizedName = name.trim().replace(/<[^>]*>/g, '').slice(0, 100);
    const sanitizedStyle = style.trim().replace(/<[^>]*>/g, '').slice(0, 50);
    const sanitizedGradient = gradient.trim().replace(/<[^>]*>/g, '').slice(0, 200);
    const sanitizedSymbol = symbol.trim().replace(/<[^>]*>/g, '').slice(0, 10);

    if (!sanitizedName || !sanitizedStyle || !sanitizedGradient || !sanitizedSymbol) {
      res.status(400).json({ error: "Missing or invalid required fields" });
      return;
    }

    const created = await dataStore.addSticker({
      name: sanitizedName,
      style: sanitizedStyle,
      gradient: sanitizedGradient,
      symbol: sanitizedSymbol,
    });
    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({ error: "Failed to create sticker" });
  }
});

// POST /api/stickers/generate — AI sticker generation (authenticated)
router.post("/stickers/generate", authMiddleware, async (req, res) => {
  try {
    const { generateStickerWithAI } = await import("../lib/gemini");

    const { prompt, style } = req.body;
    if (typeof prompt !== "string" || typeof style !== "string") {
      res.status(400).json({ error: "Invalid parameter types" });
      return;
    }

    const sanitizedPrompt = prompt.trim().replace(/<[^>]*>/g, '').slice(0, 300);
    const sanitizedStyle = style.trim().replace(/<[^>]*>/g, '').slice(0, 50);

    if (!sanitizedPrompt || !sanitizedStyle) {
      res.status(400).json({ error: "Missing or invalid required fields" });
      return;
    }

    const generated = await generateStickerWithAI(sanitizedPrompt, sanitizedStyle);

    if (!generated) {
      res.status(500).json({
        error: "AI generation failed. Please try again."
      });
      return;
    }

    const enhancedPrompt = `
${sanitizedPrompt},
professional die-cut vinyl sticker,
transparent background,
centered object only,
bold white outline,
thick sticker border,
vector illustration,
cute mascot style,
dribbble quality,
behance quality,
clean edges,
vibrant colors,
isolated object,
no scene,
no background,
sticker sheet quality,
4k
`;
    const imageUrl =
      `https://image.pollinations.ai/prompt/${encodeURIComponent(
        enhancedPrompt.trim()
      )}?width=1024&height=1024&nologo=true`;

    // ── FIX: Use crypto.randomUUID() instead of predictable Date.now()
    res.status(201).json({
      id: crypto.randomUUID(),
      name: generated.name,
      style: sanitizedStyle,
      imageUrl,
      symbol: generated.symbol,
      gradient: generated.gradient
    }); 
  } catch (error: any) {
    if (error.name === "AIServiceError") {
      // ── FIX: Don't expose internal error codes
      res.status(400).json({ error: "AI generation request failed" });
    } else {
      res.status(500).json({ error: "Failed to generate sticker" });
    }
  }
});

export default router;
