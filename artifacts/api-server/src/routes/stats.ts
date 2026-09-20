import { Router, type IRouter } from "express";
import { dataStore } from "../lib/dbFallback";

const router: IRouter = Router();

router.get("/stats", async (_req, res) => {
  try {
    const [templates, projects, stickers] = await Promise.all([
      dataStore.getTemplates().catch(() => []),
      dataStore.getProjects().catch(() => []),
      dataStore.getStickers().catch(() => [])
    ]);

    res.json({
      success: true,
      templatesCount: templates.length,
      projectsCount: projects.length,
      stickersCount: stickers.length,
      status: "Operational",
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage().heapUsed,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to load stats" });
  }
});

export default router;
