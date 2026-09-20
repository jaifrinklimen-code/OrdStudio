import { Router, type IRouter } from "express";

const router: IRouter = Router();

const features = [
  { id: "copywriting", name: "AI Copywriting Assistant", desc: "Vibrant, engaging copywriting for blogs, pitches, and ad copy.", icon: "FileText", link: "/features/copywriting" },
  { id: "stickers", name: "Sticker Studio Creator", desc: "Generate die-cut transparent vector-styled stickers instantly.", icon: "Sticker", link: "/features/sticker-generator" },
  { id: "canvas", name: "Vector Canvas Editor", desc: "Refine layouts with layers, text formats, and custom coordinate parameters.", icon: "Palette", link: "/features/vector-editor" },
  { id: "pptx", name: "Editable PPTX Exporter", desc: "Export designs directly to native PowerPoint files for Keynote and pitch decks.", icon: "Wand2", link: "/features/pptx-export" },
];

router.get("/features", (_req, res) => {
  res.json({ success: true, features });
});

export default router;
