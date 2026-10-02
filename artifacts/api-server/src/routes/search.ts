import { Router, type IRouter } from "express";
import { dataStore } from "../lib/dbFallback";
import { logger } from "../lib/logger";

const router: IRouter = Router();

interface SearchResult {
  id: string;
  type: 'Template' | 'Project' | 'Sticker' | 'Feature' | 'Guide';
  name: string;
  cat: string;
  size: string;
  gradient?: string;
  color?: string;
  symbol?: string;
}

// Static Features and Guides (to supplement database results)
const staticFeatures: SearchResult[] = [
  { id: "feat-copywriting", type: "Feature", name: "AI Copywriting Assistant", cat: "Content", size: "Smart Engine", color: "#8b5cf6" },
  { id: "feat-sticker", type: "Feature", name: "Sticker Studio Creator", cat: "Stickers", size: "Vector Engine", color: "#f59e0b" },
  { id: "feat-photo", type: "Feature", name: "Smart Photo Editor", cat: "Photo", size: "Visual Engine", color: "#3b82f6" },
];

const staticGuides: SearchResult[] = [
  { id: "guide-sticker", type: "Guide", name: "Designing Custom Vector Stickers", cat: "Help", size: "Doc", color: "#10b981" },
  { id: "guide-pitch", type: "Guide", name: "Creating High-Converting Pitch Decks", cat: "Pitch", size: "Doc", color: "#fb923c" },
  { id: "guide-viral", type: "Guide", name: "How to Write Viral Articles with AI", cat: "Copy", size: "Doc", color: "#ec4899" },
];

router.get("/search", async (req, res) => {
  try {
    const q = (req.query.q as string || "").trim().toLowerCase();
    const filter = (req.query.filter as string || "All");

    if (!q) {
      res.json([]);
      return;
    }

    // Fetch collections from DB/dataStore in parallel
    const [templates, projects, stickers] = await Promise.all([
      dataStore.getTemplates().catch(() => []),
      dataStore.getProjects().catch(() => []),
      dataStore.getStickers().catch(() => [])
    ]);

    // Map database models to standard search result formats
    const mappedTemplates: SearchResult[] = templates.map(t => ({
      id: `template-${t.id}`,
      type: "Template" as const,
      name: t.name || t.title || 'Untitled',
      cat: t.category || t.subcategory || 'Design',
      size: t.size || '1920×1080',
      gradient: t.gradient
    }));

    const mappedProjects: SearchResult[] = projects.map(p => ({
      id: `project-${p.id}`,
      type: "Project" as const,
      name: p.name || 'Untitled Project',
      cat: p.type || p.category || 'Design',
      size: `${p.progress ?? 0}% Completed`,
      gradient: p.gradient
    }));

    const mappedStickers: SearchResult[] = stickers.map(s => ({
      id: `sticker-${s.id}`,
      type: "Sticker" as const,
      name: s.name || 'Sticker',
      cat: s.style || s.category || 'Sticker',
      size: "Sticker",
      gradient: s.gradient,
      symbol: s.symbol
    }));

    // Combine all collections
    let catalog: SearchResult[] = [
      ...mappedTemplates,
      ...mappedProjects,
      ...mappedStickers,
      ...staticFeatures,
      ...staticGuides
    ];

    // Filter results based on search query match (null-safe)
    let filtered = catalog.filter(item => {
      const name = (item.name || '').toLowerCase();
      const cat = (item.cat || '').toLowerCase();
      const type = (item.type || '').toLowerCase();
      return name.includes(q) || cat.includes(q) || type.includes(q);
    });

    // Filter results based on category filters
    if (filter !== "All") {
      filtered = filtered.filter(item => {
        if (filter === "Templates") return item.type === "Template";
        if (filter === "Features") return item.type === "Feature";
        if (filter === "Guides") return item.type === "Guide";
        if (filter === "Projects") return item.type === "Project";
        if (filter === "Stickers") return item.type === "Sticker";
        return true;
      });
    }

    // Limit results to top 50 for performance
    res.json(filtered.slice(0, 50));
  } catch (error) {
    logger.error({ err: error }, "Search failed");
    res.status(500).json({ error: "Search failed" });
  }
});


export default router;
