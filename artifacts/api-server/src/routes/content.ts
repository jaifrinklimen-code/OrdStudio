import { Router, type IRouter } from "express";
import { generateContentWithAI, AIServiceError } from "../lib/gemini";
import { dataStore } from "../lib/dbFallback";
import { authMiddleware } from "../middleware/auth";
import { logger } from "../lib/logger";

const router: IRouter = Router();

const toneGuidelines: Record<string, string> = {
  Professional: "Objective, authoritative, precise, structure-driven formatting.",
  Creative: "Vibrant, engaging, storytelling, rich in metaphor and analogy.",
  Casual: "Conversational, friendly, accessible, using contractions and analogies.",
  Academic: "Scholarly, citation-friendly, deep analysis, rigorous logic.",
  Marketing: "Highly persuasive, benefit-focused, call-to-action driven.",
  Technical: "Code-like precision, feature-focused, clear specs.",
};

const formatStarters: Record<string, string> = {
  "Academic Essay": "# Research Thesis Analysis\n\n## Abstract\nThis paper explores the dimensions and dynamics of the target subject. The methodology involves systematic validation and analysis.\n\n## Discussion\nBased on preliminary data, we hypothesize a strong correlation between design consistency and user conversions...",
  "Blog Article": "# Mastering Modern Visual Creation\n\nWhether you are a seasoned designer or just getting started, creating assets that resonate is essential.\n\n## 3 Rules for Great Design\n1. **Contrast is Key:** Ensure text stands out against overlays.\n2. **Consistency:** Lock down your brand color palette.\n3. **Clarity:** Keep layout margins clean.\n\nRead on to learn more...",
  "Startup Pitch": "# Pitch Deck Executive Briefing\n\n## Problem Statement\nTraditional creative design platforms are disjointed, slow, and expensive.\n\n## The Solution\nVEX Creative Studio is a unified, lightning-fast design, generation, and search engine powered by AI.\n\n## Market Opportunity\nOver 100M digital creators need unified layout engines...",
  "Ad & Marketing": "# High-Converting Copy Block\n\n🚀 **Supercharge your creative workflow with VEX!**\n\nAre you tired of jumping between five different design tools? Create, write, search, and bake custom stickers—all in one gorgeous workspace.\n\n👉 **Join premium today at 30% off!**",
};

router.post("/content/generate", authMiddleware, async (req, res) => {
  try {
    const { topic, format, tone, minWords, maxWords } = req.body;
    if (
      typeof topic !== "string" ||
      (format && typeof format !== "string") ||
      (tone && typeof tone !== "string")
    ) {
      res.status(400).json({ error: "Invalid parameter types" });
      return;
    }

    const sanitizedTopic = topic.trim().replace(/<[^>]*>/g, '').slice(0, 300);
    if (!sanitizedTopic) {
      res.status(400).json({ error: "Topic is required" });
      return;
    }

    const selectedTone = (tone || "Professional").trim().replace(/<[^>]*>/g, '').slice(0, 50);
    const selectedFormat = (format || "Blog Article").trim().replace(/<[^>]*>/g, '').slice(0, 50);
    const minW = Math.max(1, Math.min(2000, Number(minWords) || 100));
    const maxW = Math.max(minW, Math.min(4000, Number(maxWords) || 500));

    const text = await generateContentWithAI(
      sanitizedTopic,
      selectedFormat,
      selectedTone,
      minW,
      maxW
    );

    // Save generated content draft to user projects (Recent files on dashboard)
    const formatGradients: Record<string, string> = {
      "Academic Essay": "linear-gradient(135deg, #6366f1, #4f46e5)",
      "Blog Article": "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      "Startup Pitch": "linear-gradient(135deg, #fbbf24, #d97706)",
      "Ad & Marketing": "linear-gradient(135deg, #ec4899, #db2777)",
    };
    const gradient = formatGradients[selectedFormat] || "linear-gradient(135deg, #8b5cf6, #6d28d9)";
    
    await dataStore.saveProject({
      name: sanitizedTopic.length > 30 ? sanitizedTopic.substring(0, 30) + "..." : sanitizedTopic,
      type: selectedFormat,
      gradient,
      progress: 100
    }).catch(err => {
      logger.warn({ err }, "Failed to save content project to DB");
    });

    res.json({
      success: true,
      text,
      stats: {
        words: text.split(/\s+/).length,
        characters: text.length,
        readingTimeMin: Math.max(1, Math.ceil(text.split(/\s+/).length / 200)),
      }
    });
  } catch (error) {
    if (error instanceof AIServiceError) {
      res.status(400).json({
        error: error.message,
        code: error.code
      });
    } else {
      res.status(500).json({ error: "AI Generation failed" });
    }
  }
});

export default router;
