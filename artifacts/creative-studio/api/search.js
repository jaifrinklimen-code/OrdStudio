/**
 * Vercel Serverless Function: /api/search
 *
 * Returns search results across templates, stickers, features, and guides.
 * This file runs as a Vercel Edge/Serverless Function in production so that
 * the static SPA can query /api/search without the Express api-server backend.
 */

// Static Features catalog
const STATIC_FEATURES = [
  { id: 'feat-copywriting', type: 'Feature', name: 'AI Copywriting Assistant', cat: 'Content', size: 'Smart Engine', color: '#8b5cf6' },
  { id: 'feat-sticker', type: 'Feature', name: 'Sticker Studio Creator', cat: 'Stickers', size: 'Vector Engine', color: '#f59e0b' },
  { id: 'feat-photo', type: 'Feature', name: 'Smart Photo Editor', cat: 'Photo', size: 'Visual Engine', color: '#3b82f6' },
  { id: 'feat-ai-writer', type: 'Feature', name: 'AI Content Writer', cat: 'Content', size: 'AI Engine', color: '#10b981' },
  { id: 'feat-export', type: 'Feature', name: 'PPTX & PDF Export', cat: 'Export', size: 'Format Engine', color: '#ef4444' },
  { id: 'feat-redesign', type: 'Feature', name: 'AI Redesign Engine', cat: 'Design', size: 'AI Engine', color: '#a855f7' },
];

const STATIC_GUIDES = [
  { id: 'guide-sticker', type: 'Guide', name: 'Designing Custom Vector Stickers', cat: 'Help', size: 'Doc', color: '#10b981' },
  { id: 'guide-pitch', type: 'Guide', name: 'Creating High-Converting Pitch Decks', cat: 'Pitch', size: 'Doc', color: '#fb923c' },
  { id: 'guide-viral', type: 'Guide', name: 'How to Write Viral Articles with AI', cat: 'Copy', size: 'Doc', color: '#ec4899' },
  { id: 'guide-resume', type: 'Guide', name: 'Building a Professional Resume', cat: 'Career', size: 'Doc', color: '#3b82f6' },
  { id: 'guide-branding', type: 'Guide', name: 'Brand Identity Design Principles', cat: 'Design', size: 'Doc', color: '#8b5cf6' },
];

// Curated template catalog for search (representative subset)
const TEMPLATE_CATALOG = [
  // Presentations
  { id: 'template-101', type: 'Template', name: 'Architectural Horizon Monograph', cat: 'Presentation', size: '1920×1080', gradient: 'linear-gradient(135deg, #0a0d14 0%, #f59e0b 100%)' },
  { id: 'template-102', type: 'Template', name: 'Neural Data Command Center', cat: 'Presentation', size: '1920×1080', gradient: 'linear-gradient(135deg, #0d1b2a 0%, #00f2fe 100%)' },
  { id: 'template-103', type: 'Template', name: 'Venture Capital Pitch Deck', cat: 'Presentation', size: '1920×1080', gradient: 'linear-gradient(135deg, #0a0a0f 0%, #a855f7 100%)' },
  { id: 'template-104', type: 'Template', name: 'Brand Identity Manifesto', cat: 'Presentation', size: '1920×1080', gradient: 'linear-gradient(135deg, #1e0533 0%, #ec4899 100%)' },
  { id: 'template-105', type: 'Template', name: 'ESG Sustainability Report', cat: 'Presentation', size: '1920×1080', gradient: 'linear-gradient(135deg, #052e16 0%, #22c55e 100%)' },
  { id: 'template-106', type: 'Template', name: 'Cybersecurity Operations Dashboard', cat: 'Presentation', size: '1920×1080', gradient: 'linear-gradient(135deg, #0f0f23 0%, #06b6d4 100%)' },
  { id: 'template-107', type: 'Template', name: 'Product Launch Strategy', cat: 'Presentation', size: '1920×1080', gradient: 'linear-gradient(135deg, #18181b 0%, #f43f5e 100%)' },
  { id: 'template-108', type: 'Template', name: 'Executive Leadership Summit', cat: 'Presentation', size: '1920×1080', gradient: 'linear-gradient(135deg, #0a0a0a 0%, #d4af37 100%)' },
  { id: 'template-109', type: 'Template', name: 'Quantum Computing Horizons', cat: 'Presentation', size: '1920×1080', gradient: 'linear-gradient(135deg, #000814 0%, #7c3aed 100%)' },
  { id: 'template-110', type: 'Template', name: 'Healthcare Innovation Roadmap', cat: 'Presentation', size: '1920×1080', gradient: 'linear-gradient(135deg, #f0fdf4 0%, #0f766e 100%)' },

  // Social Media
  { id: 'template-201', type: 'Template', name: 'Instagram Post — Neon Cyber', cat: 'Social', size: '1080×1080', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
  { id: 'template-202', type: 'Template', name: 'YouTube Thumbnail — Gaming', cat: 'Social', size: '1280×720', gradient: 'linear-gradient(135deg, #1a1a2e 0%, #e94560 100%)' },
  { id: 'template-203', type: 'Template', name: 'LinkedIn Banner Professional', cat: 'Social', size: '1584×396', gradient: 'linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)' },
  { id: 'template-204', type: 'Template', name: 'Twitter / X Post Banner', cat: 'Social', size: '1500×500', gradient: 'linear-gradient(135deg, #1DA1F2 0%, #0077b6 100%)' },
  { id: 'template-205', type: 'Template', name: 'Instagram Story Gradient', cat: 'Social', size: '1080×1920', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
  { id: 'template-206', type: 'Template', name: 'Facebook Event Cover', cat: 'Social', size: '1200×628', gradient: 'linear-gradient(135deg, #1877f2 0%, #42a5f5 100%)' },
  { id: 'template-207', type: 'Template', name: 'Pinterest Board Cover', cat: 'Social', size: '1000×1500', gradient: 'linear-gradient(135deg, #e60023 0%, #ff6b6b 100%)' },

  // Posters
  { id: 'template-301', type: 'Template', name: 'Concert Event Poster', cat: 'Poster', size: '1080×1528', gradient: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' },
  { id: 'template-302', type: 'Template', name: 'Music Festival Announce', cat: 'Poster', size: '1080×1528', gradient: 'linear-gradient(135deg, #ff8008 0%, #ffc837 100%)' },
  { id: 'template-303', type: 'Template', name: 'Art Exhibition Gallery', cat: 'Poster', size: '1080×1528', gradient: 'linear-gradient(135deg, #1a1a1a 0%, #f5f5f5 100%)' },
  { id: 'template-304', type: 'Template', name: 'Sports Tournament Flyer', cat: 'Poster', size: '1080×1528', gradient: 'linear-gradient(135deg, #002868 0%, #BF0A30 100%)' },

  // Resume & CV
  { id: 'template-401', type: 'Template', name: 'Modern Professional Resume', cat: 'Resume', size: '1200×1697', gradient: 'linear-gradient(135deg, #f8fafc 0%, #1e3a8a 100%)' },
  { id: 'template-402', type: 'Template', name: 'Creative Portfolio Resume', cat: 'Resume', size: '1200×1697', gradient: 'linear-gradient(135deg, #ffffff 0%, #9333ea 100%)' },
  { id: 'template-403', type: 'Template', name: 'Executive ATS Resume', cat: 'Resume', size: '1200×1697', gradient: 'linear-gradient(135deg, #fff 0%, #0f766e 100%)' },

  // Business Cards
  { id: 'template-501', type: 'Template', name: 'Executive Gold Business Card', cat: 'Business Card', size: '1050×600', gradient: 'linear-gradient(135deg, #0a0a0f 0%, #d4af37 100%)' },
  { id: 'template-502', type: 'Template', name: 'Minimal White Card', cat: 'Business Card', size: '1050×600', gradient: 'linear-gradient(135deg, #f8fafc 0%, #64748b 100%)' },
  { id: 'template-503', type: 'Template', name: 'Tech Startup Card', cat: 'Business Card', size: '1050×600', gradient: 'linear-gradient(135deg, #090912 0%, #8b5cf6 100%)' },

  // Flyers & Invitations
  { id: 'template-601', type: 'Template', name: 'Summer Festival Party Flyer', cat: 'Flyer', size: '1200×1697', gradient: 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)' },
  { id: 'template-602', type: 'Template', name: 'Wedding Invitation Card', cat: 'Invitation', size: '1400×2000', gradient: 'linear-gradient(135deg, #fdf4ff 0%, #ec4899 100%)' },
  { id: 'template-603', type: 'Template', name: 'Birthday Party Invite', cat: 'Invitation', size: '1400×2000', gradient: 'linear-gradient(135deg, #1a1a2e 0%, #e94560 100%)' },
  { id: 'template-604', type: 'Template', name: 'Corporate Event Flyer', cat: 'Flyer', size: '1200×1697', gradient: 'linear-gradient(135deg, #0f172a 0%, #3b82f6 100%)' },

  // Stickers
  { id: 'template-701', type: 'Sticker', name: 'Cyberpunk Skull', cat: 'Sticker', size: 'Vector', gradient: 'linear-gradient(135deg, #f43f5e 0%, #a855f7 100%)', symbol: '💀' },
  { id: 'template-702', type: 'Sticker', name: 'Neon Dragon', cat: 'Sticker', size: 'Vector', gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)', symbol: '🐉' },
  { id: 'template-703', type: 'Sticker', name: 'Pixel Heart', cat: 'Sticker', size: 'Vector', gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)', symbol: '❤️' },
  { id: 'template-704', type: 'Sticker', name: 'Vector Diamond', cat: 'Sticker', size: 'Vector', gradient: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)', symbol: '💎' },
];

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    return;
  }

  try {
    // Parse query params from URL
    const url = new URL(req.url, `https://${req.headers.host || 'localhost'}`);
    const q = (url.searchParams.get('q') || '').trim().toLowerCase();
    const filter = url.searchParams.get('filter') || 'All';

    if (!q) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify([]));
      return;
    }

    // Combine all catalogs
    const catalog = [...TEMPLATE_CATALOG, ...STATIC_FEATURES, ...STATIC_GUIDES];

    // Filter results based on search query
    let filtered = catalog.filter(item => {
      const name = (item.name || '').toLowerCase();
      const cat = (item.cat || '').toLowerCase();
      const type = (item.type || '').toLowerCase();
      return name.includes(q) || cat.includes(q) || type.includes(q);
    });

    // Apply category filter
    if (filter !== 'All') {
      filtered = filtered.filter(item => {
        if (filter === 'Templates') return item.type === 'Template';
        if (filter === 'Features') return item.type === 'Feature';
        if (filter === 'Guides') return item.type === 'Guide';
        if (filter === 'Projects') return item.type === 'Project';
        if (filter === 'Stickers') return item.type === 'Sticker';
        return true;
      });
    }

    // Limit to top 50 results
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(filtered.slice(0, 50)));
  } catch (error) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Search failed' }));
  }
}
