import { templateSeedData as seededTemplates } from "./templateSeedData";

export const fallbackTemplates = [...seededTemplates];

let inMemoryTemplates = [...seededTemplates];

let inMemoryProjects: any[] = [
  {
    id: "proj-demo-1",
    name: "Brand Pitch Deck",
    type: "Presentation",
    gradient: "from-blue-600 to-indigo-700",
    progress: 85,
    updatedAt: new Date().toISOString(),
    canvasWidth: 1920,
    canvasHeight: 1080,
    slides: inMemoryTemplates.find(t => t.id === 101)?.slides || []
  }
];

let inMemoryStickers: any[] = [
  { id: "stk-1", name: "Star Sparkle", url: "https://api.iconify.design/lucide:sparkles.svg?color=%236366f1", category: "Decor" },
  { id: "stk-2", name: "Flame", url: "https://api.iconify.design/lucide:flame.svg?color=%23ef4444", category: "Shapes" },
  { id: "stk-3", name: "Heart", url: "https://api.iconify.design/lucide:heart.svg?color=%23ec4899", category: "Icons" }
];

let inMemoryBlogPosts: any[] = [
  {
    id: "blog-1",
    title: "10 Design Principles for High-Converting Presentations",
    slug: "10-design-principles-high-converting-presentations",
    excerpt: "Master the subtle art of visual hierarchy, negative space, and storytelling in business decks.",
    content: "When presenting high-stakes ideas, clarity and structure always outperform visual noise...",
    author: "Alex Rivers",
    tagsText: "Design,Presentations,Storytelling",
    likes: 42,
    createdAt: new Date().toISOString()
  },
  {
    id: "blog-2",
    title: "The Future of Vector Canvas & Generative Graphics",
    slug: "future-of-vector-canvas-generative-graphics",
    excerpt: "How real-time canvas architectures are transforming professional design workflows.",
    content: "Vector-first workflows provide infinite scalability without degrading fidelity...",
    author: "Jordan Lee",
    tagsText: "Technology,Vectors,Creative",
    likes: 89,
    createdAt: new Date().toISOString()
  }
];

let inMemoryBlogComments: any[] = [
  {
    id: "c-1",
    slug: "10-design-principles-high-converting-presentations",
    author: "Elena Rostova",
    content: "The tip on high-contrast focal points immediately improved our seed round pitch deck!",
    createdAt: new Date().toISOString()
  }
];

let inMemoryContactSubmissions: any[] = [];

export const dataStore = {
  async getTemplates() { return [...inMemoryTemplates]; },
  async getTemplateById(id: string | number) {
    const numId = Number(id);
    return inMemoryTemplates.find(t => t.id === numId || String(t.id) === String(id)) || null;
  },
  async addTemplate(tpl: any) {
    const newTpl = { ...tpl, id: tpl.id || (Date.now()) };
    inMemoryTemplates.unshift(newTpl);
    return newTpl;
  },
  async updateTemplate(id: string | number, data: any) {
    const idx = inMemoryTemplates.findIndex(t => String(t.id) === String(id));
    if (idx !== -1) {
      inMemoryTemplates[idx] = { ...inMemoryTemplates[idx], ...data };
      return inMemoryTemplates[idx];
    }
    return null;
  },
  async deleteTemplate(id: string | number) {
    const idx = inMemoryTemplates.findIndex(t => String(t.id) === String(id));
    if (idx !== -1) {
      const removed = inMemoryTemplates.splice(idx, 1);
      return removed[0];
    }
    return null;
  },
  async seedTemplates() {
    inMemoryTemplates = [...seededTemplates];
    return inMemoryTemplates.length;
  },
  async getProjects() { return [...inMemoryProjects]; },
  async saveProject(data: any) {
    const id = data.id || "proj-" + Date.now();
    const idx = inMemoryProjects.findIndex(p => p.id === id);
    const proj = { ...data, id, updatedAt: new Date().toISOString() };
    if (idx !== -1) {
      inMemoryProjects[idx] = { ...inMemoryProjects[idx], ...proj };
    } else {
      inMemoryProjects.unshift(proj);
    }
    return proj;
  },
  async getStickers() { return [...inMemoryStickers]; },
  async addSticker(stk: any) {
    const created = { ...stk, id: stk.id || "stk-" + Date.now() };
    inMemoryStickers.unshift(created);
    return created;
  },
  async getBlogPosts() { return [...inMemoryBlogPosts]; },
  async getBlogPostBySlug(slug: string) {
    return inMemoryBlogPosts.find(b => b.slug === slug) || null;
  },
  async getBlogComments(slug: string) {
    return inMemoryBlogComments.filter(c => c.slug === slug);
  },
  async likeBlogPost(slug: string) {
    const post = inMemoryBlogPosts.find(b => b.slug === slug);
    if (post) {
      post.likes = (post.likes || 0) + 1;
      return post;
    }
    return null;
  },
  async addBlogComment(slug: string, author: string, content: string) {
    const comment = {
      id: "c-" + Date.now(),
      slug,
      author,
      content,
      createdAt: new Date().toISOString()
    };
    inMemoryBlogComments.push(comment);
    return comment;
  },
  async saveContactSubmission(data: any) {
    const sub = { ...data, id: "sub-" + Date.now(), createdAt: new Date().toISOString() };
    inMemoryContactSubmissions.push(sub);
    return sub;
  }
};
