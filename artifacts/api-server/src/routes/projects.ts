import { Router, type IRouter } from "express";
import { dataStore } from "../lib/dbFallback";
import { authMiddleware } from "../middleware/auth";

const router: IRouter = Router();

router.get("/projects", authMiddleware, async (_req, res) => {
  try {
    const list = await dataStore.getProjects();
    res.json(list);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

router.post("/projects", authMiddleware, async (req, res) => {
  try {
    const {
      id,
      name,
      type,
      gradient,
      progress,
      templateId,
      originalTemplateId,
      sourceTemplateId,
      pages,
      slides,
      elements,
      canvasWidth,
      canvasHeight,
      dimensions,
      size,
      thumbnail,
      thumbnailUrl,
    } = req.body;

    const rawName = typeof name === 'string' && name.trim() ? name.trim() : 'My Design';
    const rawType = typeof type === 'string' && type.trim() ? type.trim() : (typeof req.body.category === 'string' && req.body.category.trim() ? req.body.category.trim() : 'Presentation');
    const rawGradient = typeof gradient === 'string' && gradient.trim() ? gradient.trim() : '#0b131e';

    const sanitizedName = rawName.replace(/<[^>]*>/g, '').slice(0, 100);
    const sanitizedType = rawType.replace(/<[^>]*>/g, '').slice(0, 50);
    const sanitizedGradient = rawGradient.replace(/<[^>]*>/g, '').slice(0, 200);

    const numericProgress = Math.max(0, Math.min(100, Number(progress) || 0));

    const created = await dataStore.saveProject({
      id: id || ('proj-' + Date.now()),
      name: sanitizedName,
      type: sanitizedType,
      gradient: sanitizedGradient,
      progress: numericProgress,
      templateId: templateId || originalTemplateId || sourceTemplateId,
      originalTemplateId,
      sourceTemplateId,
      pages,
      slides,
      elements,
      canvasWidth: Number(canvasWidth) || undefined,
      canvasHeight: Number(canvasHeight) || undefined,
      dimensions,
      size,
      thumbnail: typeof thumbnail === 'string' ? thumbnail : undefined,
      thumbnailUrl: typeof thumbnailUrl === 'string' ? thumbnailUrl : undefined,
    });
    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({ error: "Failed to create project" });
  }
});

export default router;
