import { Router, type IRouter } from "express";
import { dataStore } from "../lib/dbFallback";
import { logger } from "../lib/logger";

const router: IRouter = Router();

// GET /api/blog — fetch all blog posts
router.get("/blog", async (_req, res) => {
  try {
    const posts = await dataStore.getBlogPosts();
    // Parse tagsText back into tags array for the frontend
    const mapped = posts.map((post: any) => ({
      ...post,
      tags: post.tagsText.split(","),
      faqs: [], // Handled or empty for list view
    }));
    res.json(mapped);
  } catch (error) {
    logger.error({ err: error }, "Failed to fetch blog posts");
    res.status(500).json({ error: "Failed to fetch blog posts" });
  }
});

// GET /api/blog/:slug — fetch single blog post with comments
router.get("/blog/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    if (!slug) {
      res.status(400).json({ error: "Slug is required" });
      return;
    }
    const post = await dataStore.getBlogPostBySlug(slug);
    if (!post) {
      res.status(404).json({ error: "Blog post not found" });
      return;
    }
    const comments = await dataStore.getBlogComments(slug);

    res.json({
      ...post,
      tags: post.tagsText.split(","),
      faqs: [
        {
          question: "What is the significance of this topic?",
          answer: "It allows creators to align their design assets with professional standards, optimizing engagement."
        },
        {
          question: "How can OrdStudio help?",
          answer: "OrdStudio offers dedicated AI assistants, scalable vector canvases, and automated templates."
        }
      ],
      comments,
    });
  } catch (error) {
    logger.error({ err: error }, "Failed to fetch blog post details");
    res.status(500).json({ error: "Failed to fetch blog post details" });
  }
});

// POST /api/blog/:slug/like — like a blog post
router.post("/blog/:slug/like", async (req, res) => {
  try {
    const { slug } = req.params;
    if (!slug) {
      res.status(400).json({ error: "Slug is required" });
      return;
    }
    const updated = await dataStore.likeBlogPost(slug);
    if (!updated) {
      res.status(404).json({ error: "Blog post not found" });
      return;
    }
    res.json({ success: true, likes: updated.likes });
  } catch (error) {
    logger.error({ err: error }, "Failed to like blog post");
    res.status(500).json({ error: "Failed to like blog post" });
  }
});

// POST /api/blog/:slug/comment — add a comment to a blog post
router.post("/blog/:slug/comment", async (req, res) => {
  try {
    const { slug } = req.params;
    const { authorName, content } = req.body;

    if (!slug) {
      res.status(400).json({ error: "Slug is required" });
      return;
    }

    if (typeof authorName !== "string" || typeof content !== "string") {
      res.status(400).json({ error: "Invalid parameter types" });
      return;
    }

    const sanitizedAuthorName = authorName.trim().replace(/<[^>]*>/g, '').slice(0, 100);
    const sanitizedContent = content.trim().replace(/<[^>]*>/g, '').slice(0, 1000);

    if (!sanitizedAuthorName || !sanitizedContent) {
      res.status(400).json({ error: "Author name and content are required" });
      return;
    }

    const comment = await dataStore.addBlogComment(slug, sanitizedAuthorName, sanitizedContent);
    res.status(201).json({ success: true, comment });
  } catch (error) {
    logger.error({ err: error }, "Failed to add comment");
    res.status(500).json({ error: "Failed to add comment" });
  }
});

export default router;
