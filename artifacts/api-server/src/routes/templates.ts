import fs from "node:fs/promises";
import path from "node:path";
import { Router, type IRouter } from "express";
import { dataStore } from "../lib/dbFallback";
import { authMiddleware } from "../middleware/auth";
import { discoverTemplateCatalog, getTemplateRoot, resolveTemplateFolderFromCategory } from "../lib/templateCatalog";

const router: IRouter = Router();

router.get("/templates", async (req, res) => {
  try {
    let folderTemplates: any[] = [];
    try {
      folderTemplates = await discoverTemplateCatalog();
    } catch (err) {
      console.warn("discoverTemplateCatalog warning:", err);
    }
    const list = await dataStore.getTemplates();
    let merged = [...(folderTemplates || []), ...(list || [])];

    // Query filters
    const category = String(req.query.category || "").trim().toLowerCase();
    const style = String(req.query.style || "").trim().toLowerCase();
    const orientation = String(req.query.orientation || "").trim().toLowerCase();
    const search = String(req.query.search || "").trim().toLowerCase();
    const premium = req.query.premium;

    if (category && category !== 'all') {
      merged = merged.filter(t => (t.category || '').toLowerCase() === category);
    }
    if (style && style !== 'all') {
      merged = merged.filter(t => (t.subcategory || t.style || '').toLowerCase().includes(style));
    }
    if (orientation && orientation !== 'all') {
      merged = merged.filter(t => (t.orientation || '').toLowerCase() === orientation);
    }
    if (premium !== undefined && premium !== 'all') {
      const isPrem = premium === 'true';
      merged = merged.filter(t => Boolean(t.premium) === isPrem);
    }
    if (search) {
      merged = merged.filter(t => {
        const str = `${t.name || ''} ${t.title || ''} ${t.category || ''} ${t.subcategory || ''} ${t.description || ''} ${(t.tags || []).join(' ')}`.toLowerCase();
        return str.includes(search);
      });
    }

    res.json(merged);
  } catch (error: any) {
    console.error("Failed to fetch templates:", error);
    res.status(500).json({ error: "Failed to fetch templates", details: String(error?.message || error) });
  }
});

router.get("/templates/seed", async (_req, res) => {
  try {
    const seeded = await (dataStore as any).seedTemplates();
    res.json({ message: "Seeding complete", count: seeded.length });
  } catch (error: any) {
    res.status(500).json({ error: "Failed to seed templates", details: String(error?.message || error) });
  }
});

router.post("/templates/seed", async (_req, res) => {
  try {
    const seeded = await (dataStore as any).seedTemplates();
    res.json({ message: "Seeding complete", count: seeded.length });
  } catch (error: any) {
    res.status(500).json({ error: "Failed to seed templates", details: String(error?.message || error) });
  }
});

router.get("/templates/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const template = await (dataStore as any).getTemplateById(id);
    if (!template) {
      res.status(404).json({ error: "Template not found" });
      return;
    }
    res.json(template);
  } catch (error: any) {
    res.status(500).json({ error: "Failed to fetch template", details: String(error?.message || error) });
  }
});

router.get("/templates/file", async (req, res) => {
  try {
    const category = String(req.query.category || "").trim();
    const name = String(req.query.name || "").trim();
    if (!category || !name) {
      res.status(400).json({ error: "Missing template category or name" });
      return;
    }

    const root = getTemplateRoot();
    if (!root) {
      res.status(404).json({ error: "Template root not found" });
      return;
    }

    const folder = path.join(root, resolveTemplateFolderFromCategory(category));
    const filePath = path.resolve(folder, name);
    const folderRoot = path.resolve(folder);
    if (!filePath.startsWith(folderRoot + path.sep) && filePath !== folderRoot) {
      res.status(400).json({ error: "Invalid template path" });
      return;
    }

    await fs.access(filePath);

    const extension = path.extname(filePath).toLowerCase();
    const fileName = path.basename(filePath);

    res.removeHeader('X-Frame-Options');
    res.setHeader('Content-Disposition', `inline; filename="${fileName}"`);
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; frame-ancestors 'self' http://127.0.0.1:5173 https://127.0.0.1:5173; object-src 'self';"
    );
    if (extension === '.pdf') {
      res.setHeader('Content-Type', 'application/pdf');
    }

    res.sendFile(filePath, {
      headers: {
        'Content-Disposition': `inline; filename="${fileName}"`,
      },
    });
  } catch (error) {
    res.status(404).json({ error: "Template file not found" });
  }
});

router.post("/templates", authMiddleware, async (req, res) => {
  try {
    const { name, category, size, premium, gradient, elements, slides } = req.body;
    if (
      typeof name !== "string" ||
      typeof category !== "string" ||
      typeof size !== "string" ||
      typeof gradient !== "string"
    ) {
      res.status(400).json({ error: "Invalid parameter types" });
      return;
    }

    const sanitizedName = name.trim().replace(/<[^>]*>/g, '').slice(0, 100);
    const sanitizedCategory = category.trim().replace(/<[^>]*>/g, '').slice(0, 50);
    const sanitizedSize = size.trim().replace(/<[^>]*>/g, '').slice(0, 30);
    const sanitizedGradient = gradient.trim().replace(/<[^>]*>/g, '').slice(0, 200);

    if (!sanitizedName || !sanitizedCategory || !sanitizedSize || !sanitizedGradient) {
      res.status(400).json({ error: "Missing or invalid required fields" });
      return;
    }

    if (sanitizedCategory.toLowerCase() === 'presentation') {
      const slideCount = Array.isArray(slides) ? slides.length : Array.isArray(req.body.pages) ? req.body.pages.length : 0;
      if (slideCount > 10) {
        res.status(400).json({ error: "Presentation templates are limited to a maximum of 10 slides." });
        return;
      }
    }

    const created = await dataStore.addTemplate({
      name: sanitizedName,
      category: sanitizedCategory,
      size: sanitizedSize,
      premium: !!premium,
      gradient: sanitizedGradient,
      elements: Array.isArray(elements) ? elements : undefined,
      slides: Array.isArray(slides) ? slides : undefined,
    });
    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({ error: "Failed to add template" });
  }
});

router.put("/templates/:id", authMiddleware, async (req, res) => {
  try {
    const { name, category, size, premium, gradient, elements, slides } = req.body;
    if (typeof name !== "string" || typeof category !== "string" || typeof size !== "string" || typeof gradient !== "string") {
      res.status(400).json({ error: "Invalid parameter types" });
      return;
    }
    if (category.trim().toLowerCase() === 'presentation') {
      const slideCount = Array.isArray(slides) ? slides.length : Array.isArray(req.body.pages) ? req.body.pages.length : 0;
      if (slideCount > 10) {
        res.status(400).json({ error: "Presentation templates are limited to a maximum of 10 slides." });
        return;
      }
    }

    const updated = await dataStore.updateTemplate(String(req.params.id), {
      name: name.trim().replace(/<[^>]*>/g, '').slice(0, 100),
      category: category.trim().replace(/<[^>]*>/g, '').slice(0, 50),
      size: size.trim().replace(/<[^>]*>/g, '').slice(0, 30),
      premium: !!premium,
      gradient: gradient.trim().replace(/<[^>]*>/g, '').slice(0, 200),
      elements: Array.isArray(elements) ? elements : undefined,
      slides: Array.isArray(slides) ? slides : undefined,
    });
    if (!updated) {
      res.status(404).json({ error: "Template not found" });
      return;
    }
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update template" });
  }
});

router.delete("/templates/:id", authMiddleware, async (req, res) => {
  try {
    const deleted = await dataStore.deleteTemplate(String(req.params.id));
    if (!deleted) {
      res.status(404).json({ error: "Template not found" });
      return;
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete template" });
  }
});

export default router;
