// Social Media Templates — Rich Element Data
// Each template has 8–15 Canva-quality elements, layered: bg → images → shapes → text

export const socialTemplates = [
  // ─── ID 3: Instagram Reel Cover ── 1080×1920 → cW=315, cH=560 ───────
  {
    id: 3,
    name: 'Instagram Reel Cover',
    category: 'Social',
    size: '1080×1920',
    premium: false,
    likes: 2134,
    views: 14300,
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    elements: [
      // 1. Background
      { id: '3-bg', type: 'rect', x: 0, y: 0, width: 315, height: 560, fill: '#0a0a0f', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 2. Full-bleed hero image
      { id: '3-img1', type: 'image', x: 0, y: 0, width: 315, height: 560, src: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&q=80&w=300', fill: 'transparent', stroke: 'transparent', strokeWidth: 0, opacity: 0.85, visible: true, locked: true },
      // 3. Gradient scrim at bottom
      { id: '3-scrim', type: 'rect', x: 0, y: 340, width: 315, height: 220, fill: 'rgba(0,0,0,0.65)', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 4. Top gradient scrim
      { id: '3-topscrim', type: 'rect', x: 0, y: 0, width: 315, height: 80, fill: 'rgba(0,0,0,0.4)', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 5. Profile avatar circle
      { id: '3-avatar', type: 'circle', x: 16, y: 16, width: 36, height: 36, fill: '#f093fb', stroke: '#ffffff', strokeWidth: 2, opacity: 1, visible: true, locked: false },
      // 6. Username text
      { id: '3-txt1', type: 'text', x: 60, y: 18, width: 180, height: 20, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'creative_studio', fontSize: 13, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 7. Story dots row
      { id: '3-dots', type: 'text', x: 60, y: 38, width: 120, height: 14, rotation: 0, fill: 'rgba(255,255,255,0.5)', stroke: 'transparent', strokeWidth: 0, text: '● ● ● ○ ○', fontSize: 8, fontFamily: 'Arial', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // 8. Bold overlay title
      { id: '3-txt2', type: 'text', x: 20, y: 370, width: 275, height: 50, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'NEON NIGHTS', fontSize: 36, fontFamily: 'Impact', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 9. Subtitle / tagline
      { id: '3-txt3', type: 'text', x: 20, y: 420, width: 260, height: 24, rotation: 0, fill: '#f093fb', stroke: 'transparent', strokeWidth: 0, text: 'Summer Vibes Collection', fontSize: 14, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.95, visible: true, locked: false },
      // 10. Accent neon line
      { id: '3-line1', type: 'rect', x: 20, y: 452, width: 60, height: 3, fill: '#f5576c', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 11. Swipe-up CTA
      { id: '3-txt4', type: 'text', x: 80, y: 510, width: 155, height: 22, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'SWIPE UP ↑', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // 12. Engagement heart icon
      { id: '3-heart', type: 'text', x: 270, y: 480, width: 30, height: 20, rotation: 0, fill: '#f5576c', stroke: 'transparent', strokeWidth: 0, text: '♥', fontSize: 20, fontFamily: 'Arial', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // 13. Share icon
      { id: '3-share', type: 'text', x: 270, y: 505, width: 30, height: 20, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: '↗', fontSize: 18, fontFamily: 'Arial', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
    ],
  },

  // ─── ID 4: Facebook Post ── 1200×630 → cW=780, cH=410 ───────────────
  {
    id: 4,
    name: 'Facebook Post',
    category: 'Social',
    size: '1200×630',
    premium: false,
    likes: 1756,
    views: 11200,
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    elements: [
      // 1. Background
      { id: '4-bg', type: 'rect', x: 0, y: 0, width: 780, height: 410, fill: '#f0f4f8', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 2. Left panel (text area)
      { id: '4-leftpanel', type: 'rect', x: 0, y: 0, width: 400, height: 410, fill: '#1a365d', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 3. Hero image right
      { id: '4-img1', type: 'image', x: 400, y: 0, width: 380, height: 410, src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300', fill: 'transparent', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 4. Brand logo circle
      { id: '4-logo', type: 'circle', x: 30, y: 28, width: 40, height: 40, fill: '#4facfe', stroke: '#ffffff', strokeWidth: 2, opacity: 1, visible: true, locked: false },
      // 5. Brand name
      { id: '4-txt1', type: 'text', x: 80, y: 32, width: 200, height: 24, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'OrdStudio', fontSize: 16, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 6. Headline
      { id: '4-txt2', type: 'text', x: 30, y: 110, width: 340, height: 70, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'Boost Your\nDigital Presence', fontSize: 30, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 7. Accent underline
      { id: '4-accent', type: 'rect', x: 30, y: 190, width: 50, height: 4, fill: '#4facfe', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 8. Description
      { id: '4-txt3', type: 'text', x: 30, y: 210, width: 340, height: 60, rotation: 0, fill: 'rgba(255,255,255,0.75)', stroke: 'transparent', strokeWidth: 0, text: 'Discover expert strategies to grow your audience and maximize engagement on social.', fontSize: 13, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 9. CTA button background
      { id: '4-cta-bg', type: 'rect', x: 30, y: 295, width: 140, height: 40, fill: '#4facfe', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 10. CTA button text
      { id: '4-txt4', type: 'text', x: 38, y: 300, width: 130, height: 30, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'Learn More →', fontSize: 14, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 11. Engagement bar bottom
      { id: '4-bar', type: 'rect', x: 0, y: 380, width: 400, height: 30, fill: 'rgba(0,0,0,0.2)', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 12. Like count
      { id: '4-txt5', type: 'text', x: 20, y: 384, width: 100, height: 18, rotation: 0, fill: 'rgba(255,255,255,0.7)', stroke: 'transparent', strokeWidth: 0, text: '❤ 1.7K  💬 245', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // 13. Website URL
      { id: '4-txt6', type: 'text', x: 250, y: 384, width: 140, height: 18, rotation: 0, fill: 'rgba(255,255,255,0.5)', stroke: 'transparent', strokeWidth: 0, text: 'www.ordstudio.com', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
    ],
  },

  // ─── ID 5: Facebook Cover ── 820×312 → cW=780, cH=297 ───────────────
  {
    id: 5,
    name: 'Facebook Cover',
    category: 'Social',
    size: '820×312',
    premium: true,
    likes: 2670,
    views: 19500,
    gradient: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
    elements: [
      // 1. Background
      { id: '5-bg', type: 'rect', x: 0, y: 0, width: 780, height: 297, fill: '#1e1145', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 2. Full-bleed image
      { id: '5-img1', type: 'image', x: 0, y: 0, width: 780, height: 297, src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400', fill: 'transparent', stroke: 'transparent', strokeWidth: 0, opacity: 0.35, visible: true, locked: true },
      // 3. Gradient overlay
      { id: '5-overlay', type: 'rect', x: 0, y: 0, width: 780, height: 297, fill: 'rgba(30,17,69,0.6)', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 4. Profile photo area (left circle placeholder)
      { id: '5-profile', type: 'circle', x: 30, y: 90, width: 100, height: 100, fill: 'rgba(167,139,250,0.3)', stroke: '#a78bfa', strokeWidth: 2, opacity: 0.9, visible: true, locked: false },
      // 5. Big centered headline
      { id: '5-txt1', type: 'text', x: 170, y: 75, width: 450, height: 50, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'CREATIVE AGENCY', fontSize: 38, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 6. Tagline below
      { id: '5-txt2', type: 'text', x: 170, y: 130, width: 450, height: 28, rotation: 0, fill: '#c4b5fd', stroke: 'transparent', strokeWidth: 0, text: 'Design · Develop · Deliver', fontSize: 16, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // 7. Decorative line left
      { id: '5-deco1', type: 'rect', x: 170, y: 168, width: 60, height: 3, fill: '#a78bfa', stroke: 'transparent', strokeWidth: 0, opacity: 0.8, visible: true, locked: false },
      // 8. Decorative line right
      { id: '5-deco2', type: 'rect', x: 240, y: 168, width: 60, height: 3, fill: '#7c3aed', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: false },
      // 9. Description
      { id: '5-txt3', type: 'text', x: 170, y: 185, width: 400, height: 40, rotation: 0, fill: 'rgba(255,255,255,0.6)', stroke: 'transparent', strokeWidth: 0, text: 'Transforming ideas into stunning digital experiences since 2018.', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 10. Right decorative star
      { id: '5-star1', type: 'star', x: 700, y: 30, width: 40, height: 40, fill: '#a78bfa', stroke: 'transparent', strokeWidth: 0, opacity: 0.3, visible: true, locked: false },
      // 11. Bottom accent bar
      { id: '5-bottom', type: 'rect', x: 0, y: 287, width: 780, height: 10, fill: '#7c3aed', stroke: 'transparent', strokeWidth: 0, opacity: 0.7, visible: true, locked: true },
      // 12. Website
      { id: '5-txt4', type: 'text', x: 580, y: 250, width: 180, height: 20, rotation: 0, fill: 'rgba(255,255,255,0.45)', stroke: 'transparent', strokeWidth: 0, text: 'ordstudio.com', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 13. Extra decorative star
      { id: '5-star2', type: 'star', x: 720, y: 220, width: 20, height: 20, fill: '#7c3aed', stroke: 'transparent', strokeWidth: 0, opacity: 0.25, visible: true, locked: false },
      // 14. Extra decorative circle
      { id: '5-circle2', type: 'circle', x: 670, y: 130, width: 10, height: 10, fill: '#a78bfa', stroke: 'transparent', strokeWidth: 0, opacity: 0.3, visible: true, locked: false },
    ],
  },

  // ─── ID 6: Twitter/X Post ── 1200×675 → cW=780, cH=439 ─────────────
  {
    id: 6,
    name: 'Twitter/X Post',
    category: 'Social',
    size: '1200×675',
    premium: false,
    likes: 1482,
    views: 9870,
    gradient: 'linear-gradient(135deg, #38bdf8 0%, #1d4ed8 100%)',
    elements: [
      // 1. Background
      { id: '6-bg', type: 'rect', x: 0, y: 0, width: 780, height: 439, fill: '#f8fafc', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 2. Featured image top half
      { id: '6-img1', type: 'image', x: 0, y: 0, width: 780, height: 250, src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300', fill: 'transparent', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 3. Card white area bottom
      { id: '6-card', type: 'rect', x: 0, y: 250, width: 780, height: 189, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 4. Blue accent top border
      { id: '6-accent', type: 'rect', x: 0, y: 248, width: 780, height: 4, fill: '#1d4ed8', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 5. Avatar circle
      { id: '6-avatar', type: 'circle', x: 24, y: 270, width: 44, height: 44, fill: '#1d4ed8', stroke: '#ffffff', strokeWidth: 3, opacity: 1, visible: true, locked: false },
      // 6. Handle @username
      { id: '6-txt1', type: 'text', x: 80, y: 272, width: 200, height: 20, rotation: 0, fill: '#0f172a', stroke: 'transparent', strokeWidth: 0, text: 'Tech Insights', fontSize: 16, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 7. Verified badge + handle
      { id: '6-txt2', type: 'text', x: 80, y: 293, width: 200, height: 18, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: '@tech_insights ✓', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // 8. Tweet text content
      { id: '6-txt3', type: 'text', x: 24, y: 330, width: 500, height: 50, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: 'The future of web development is here. AI-powered tools are changing how we build digital products. 🚀', fontSize: 14, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 9. Hashtags
      { id: '6-txt4', type: 'text', x: 24, y: 385, width: 400, height: 20, rotation: 0, fill: '#1d4ed8', stroke: 'transparent', strokeWidth: 0, text: '#WebDev  #AI  #TechTrends  #Coding', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // 10. Engagement icons row
      { id: '6-txt5', type: 'text', x: 24, y: 412, width: 350, height: 18, rotation: 0, fill: '#94a3b8', stroke: 'transparent', strokeWidth: 0, text: '💬 189    🔁 524    ♥ 2.1K    📊 45K', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // 11. Share/bookmark right
      { id: '6-share', type: 'text', x: 700, y: 280, width: 60, height: 20, rotation: 0, fill: '#38bdf8', stroke: 'transparent', strokeWidth: 0, text: '⋯', fontSize: 22, fontFamily: 'Arial', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.6, visible: true, locked: false },
      // 12. Time stamp
      { id: '6-txt6', type: 'text', x: 600, y: 412, width: 160, height: 18, rotation: 0, fill: '#94a3b8', stroke: 'transparent', strokeWidth: 0, text: '2:45 PM · Jun 4, 2026', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // 13. Extra decorative star
      { id: '6-star1', type: 'star', x: 730, y: 360, width: 14, height: 14, fill: '#38bdf8', stroke: 'transparent', strokeWidth: 0, opacity: 0.4, visible: true, locked: false },
      // 14. Extra decorative circle
      { id: '6-circle1', type: 'circle', x: 680, y: 390, width: 8, height: 8, fill: '#94a3b8', stroke: 'transparent', strokeWidth: 0, opacity: 0.3, visible: true, locked: false },
    ],
  },

  // ─── ID 7: Twitter Header ── 1500×500 → cW=780, cH=260 ─────────────
  {
    id: 7,
    name: 'Twitter Header',
    category: 'Social',
    size: '1500×500',
    premium: false,
    likes: 2198,
    views: 15600,
    gradient: 'linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)',
    elements: [
      // 1. Background
      { id: '7-bg', type: 'rect', x: 0, y: 0, width: 780, height: 260, fill: '#042f2e', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 2. Subtle dot pattern overlay
      { id: '7-pattern', type: 'rect', x: 0, y: 0, width: 780, height: 260, fill: 'rgba(34,211,238,0.05)', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 3. Large bold text left
      { id: '7-txt1', type: 'text', x: 50, y: 50, width: 380, height: 55, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'DIGITAL CREATOR', fontSize: 40, fontFamily: 'Impact', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 4. Tagline
      { id: '7-txt2', type: 'text', x: 50, y: 110, width: 350, height: 24, rotation: 0, fill: '#22d3ee', stroke: 'transparent', strokeWidth: 0, text: 'Building the future, one pixel at a time', fontSize: 14, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // 5. Accent line
      { id: '7-line1', type: 'rect', x: 50, y: 145, width: 80, height: 3, fill: '#22d3ee', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 6. Social handles
      { id: '7-txt3', type: 'text', x: 50, y: 165, width: 300, height: 20, rotation: 0, fill: 'rgba(255,255,255,0.5)', stroke: 'transparent', strokeWidth: 0, text: '𝕏 @creative_dev  ·  📧 hello@dev.io', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // 7. Geometric circle (right)
      { id: '7-geo1', type: 'circle', x: 580, y: 40, width: 160, height: 160, fill: 'rgba(34,211,238,0.12)', stroke: '#22d3ee', strokeWidth: 2, opacity: 0.7, visible: true, locked: false },
      // 8. Small inner circle
      { id: '7-geo2', type: 'circle', x: 620, y: 80, width: 80, height: 80, fill: 'rgba(8,145,178,0.2)', stroke: '#0891b2', strokeWidth: 1, opacity: 0.5, visible: true, locked: false },
      // 9. Triangle accent
      { id: '7-tri1', type: 'triangle', x: 520, y: 150, width: 50, height: 50, fill: 'rgba(34,211,238,0.15)', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: false },
      // 10. Star decoration
      { id: '7-star1', type: 'star', x: 490, y: 50, width: 30, height: 30, fill: '#22d3ee', stroke: 'transparent', strokeWidth: 0, opacity: 0.3, visible: true, locked: false },
      // 11. Bottom accent strip
      { id: '7-strip', type: 'rect', x: 0, y: 250, width: 780, height: 10, fill: '#0891b2', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: true },
      // 12. Top right small decorative rect
      { id: '7-deco', type: 'rect', x: 720, y: 20, width: 40, height: 4, fill: '#22d3ee', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: false },
      // 13. Extra decorative star
      { id: '7-star2', type: 'star', x: 440, y: 180, width: 18, height: 18, fill: '#22d3ee', stroke: 'transparent', strokeWidth: 0, opacity: 0.2, visible: true, locked: false },
      // 14. Extra decorative circle
      { id: '7-circle1', type: 'circle', x: 500, y: 110, width: 10, height: 10, fill: '#0891b2', stroke: 'transparent', strokeWidth: 0, opacity: 0.35, visible: true, locked: false },
    ],
  },

  // ─── ID 8: LinkedIn Post ── 1200×627 → cW=780, cH=408 ──────────────
  {
    id: 8,
    name: 'LinkedIn Post',
    category: 'Social',
    size: '1200×627',
    premium: false,
    likes: 1923,
    views: 12350,
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
    elements: [
      // 1. Background
      { id: '8-bg', type: 'rect', x: 0, y: 0, width: 780, height: 408, fill: '#f1f5f9', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 2. Left image panel
      { id: '8-img1', type: 'image', x: 0, y: 0, width: 340, height: 408, src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=300', fill: 'transparent', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 3. Right content area
      { id: '8-right', type: 'rect', x: 340, y: 0, width: 440, height: 408, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 4. Large quotation mark
      { id: '8-txt1', type: 'text', x: 370, y: 40, width: 80, height: 70, rotation: 0, fill: 'rgba(14,165,233,0.15)', stroke: 'transparent', strokeWidth: 0, text: '"', fontSize: 72, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      // 5. Quote text
      { id: '8-txt2', type: 'text', x: 380, y: 100, width: 360, height: 100, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: 'Great teams don\'t just happen. They are built through trust, communication, and a shared vision.', fontSize: 16, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 6. Divider line
      { id: '8-divider', type: 'rect', x: 380, y: 220, width: 50, height: 3, fill: '#0ea5e9', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 7. Author name
      { id: '8-txt3', type: 'text', x: 380, y: 240, width: 300, height: 24, rotation: 0, fill: '#0f172a', stroke: 'transparent', strokeWidth: 0, text: 'Sarah Mitchell', fontSize: 18, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 8. Author title
      { id: '8-txt4', type: 'text', x: 380, y: 266, width: 300, height: 20, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: 'VP of Engineering · TechCorp', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // 9. Company logo circle
      { id: '8-logo', type: 'circle', x: 380, y: 310, width: 36, height: 36, fill: '#0ea5e9', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 10. Company name
      { id: '8-txt5', type: 'text', x: 424, y: 316, width: 150, height: 22, rotation: 0, fill: '#0f172a', stroke: 'transparent', strokeWidth: 0, text: 'TechCorp Inc.', fontSize: 13, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // 11. CTA button
      { id: '8-cta', type: 'rect', x: 380, y: 360, width: 130, height: 34, fill: '#2563eb', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 12. CTA text
      { id: '8-txt6', type: 'text', x: 392, y: 365, width: 110, height: 24, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'Follow Us →', fontSize: 13, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 13. LinkedIn brand accent
      { id: '8-brand', type: 'rect', x: 340, y: 0, width: 4, height: 408, fill: '#0ea5e9', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
    ],
  },

  // ─── ID 9: LinkedIn Banner ── 1584×396 → cW=780, cH=195 ────────────
  {
    id: 9,
    name: 'LinkedIn Banner',
    category: 'Social',
    size: '1584×396',
    premium: true,
    likes: 1645,
    views: 10800,
    gradient: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)',
    elements: [
      // 1. Background
      { id: '9-bg', type: 'rect', x: 0, y: 0, width: 780, height: 195, fill: '#0f0f23', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 2. Subtle image background
      { id: '9-img1', type: 'image', x: 500, y: 0, width: 280, height: 195, src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400', fill: 'transparent', stroke: 'transparent', strokeWidth: 0, opacity: 0.2, visible: true, locked: true },
      // 3. Gradient overlay right
      { id: '9-overlay', type: 'rect', x: 450, y: 0, width: 330, height: 195, fill: 'rgba(15,15,35,0.7)', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 4. Profile photo circle placeholder (far left)
      { id: '9-profile', type: 'circle', x: 30, y: 45, width: 90, height: 90, fill: 'rgba(99,102,241,0.2)', stroke: '#6366f1', strokeWidth: 2, opacity: 0.8, visible: true, locked: false },
      // 5. Job title large
      { id: '9-txt1', type: 'text', x: 145, y: 35, width: 350, height: 35, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'SENIOR PRODUCT DESIGNER', fontSize: 22, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 6. Name
      { id: '9-txt2', type: 'text', x: 145, y: 75, width: 300, height: 24, rotation: 0, fill: '#a5b4fc', stroke: 'transparent', strokeWidth: 0, text: 'Alexandra Chen', fontSize: 16, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // 7. Decorative accent line
      { id: '9-accent', type: 'rect', x: 145, y: 108, width: 45, height: 3, fill: '#6366f1', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 8. Tagline
      { id: '9-txt3', type: 'text', x: 145, y: 120, width: 400, height: 20, rotation: 0, fill: 'rgba(255,255,255,0.5)', stroke: 'transparent', strokeWidth: 0, text: 'Crafting intuitive experiences for 10M+ users worldwide', fontSize: 11, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 9. Skills badges area
      { id: '9-badge1', type: 'rect', x: 145, y: 152, width: 65, height: 22, fill: 'rgba(99,102,241,0.2)', stroke: '#6366f1', strokeWidth: 1, opacity: 0.8, visible: true, locked: false },
      // 10. Badge text 1
      { id: '9-txt4', type: 'text', x: 152, y: 155, width: 55, height: 16, rotation: 0, fill: '#a5b4fc', stroke: 'transparent', strokeWidth: 0, text: 'UI/UX', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 11. Badge 2
      { id: '9-badge2', type: 'rect', x: 220, y: 152, width: 70, height: 22, fill: 'rgba(99,102,241,0.2)', stroke: '#6366f1', strokeWidth: 1, opacity: 0.8, visible: true, locked: false },
      // 12. Badge text 2
      { id: '9-txt5', type: 'text', x: 227, y: 155, width: 60, height: 16, rotation: 0, fill: '#a5b4fc', stroke: 'transparent', strokeWidth: 0, text: 'Figma', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 13. Decorative star right
      { id: '9-star1', type: 'star', x: 720, y: 145, width: 28, height: 28, fill: '#6366f1', stroke: 'transparent', strokeWidth: 0, opacity: 0.25, visible: true, locked: false },
    ],
  },

  // ─── ID 10: YouTube Thumbnail ── 1280×720 → cW=780, cH=439 ─────────
  {
    id: 10,
    name: 'YouTube Thumbnail',
    category: 'Social',
    size: '1280×720',
    premium: false,
    likes: 4215,
    views: 31800,
    gradient: 'linear-gradient(135deg, #f87171 0%, #dc2626 100%)',
    elements: [
      // 1. Background
      { id: '10-bg', type: 'rect', x: 0, y: 0, width: 780, height: 439, fill: '#0f0f0f', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 2. Reaction/face image (right side)
      { id: '10-img1', type: 'image', x: 420, y: 0, width: 360, height: 439, src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=300', fill: 'transparent', stroke: 'transparent', strokeWidth: 0, opacity: 0.9, visible: true, locked: false },
      // 3. Left dark panel for text
      { id: '10-panel', type: 'rect', x: 0, y: 0, width: 440, height: 439, fill: '#1a0505', stroke: 'transparent', strokeWidth: 0, opacity: 0.85, visible: true, locked: true },
      // 4. Red accent strip
      { id: '10-accent', type: 'rect', x: 0, y: 0, width: 8, height: 439, fill: '#dc2626', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 5. Huge bold title line 1
      { id: '10-txt1', type: 'text', x: 30, y: 80, width: 390, height: 60, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'THIS CHANGES', fontSize: 46, fontFamily: 'Impact', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 6. Title line 2 (highlighted)
      { id: '10-txt2', type: 'text', x: 30, y: 145, width: 390, height: 60, rotation: 0, fill: '#fca5a5', stroke: 'transparent', strokeWidth: 0, text: 'EVERYTHING', fontSize: 52, fontFamily: 'Impact', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 7. Red underline accent
      { id: '10-underline', type: 'rect', x: 30, y: 205, width: 200, height: 5, fill: '#dc2626', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 8. Subtitle
      { id: '10-txt3', type: 'text', x: 30, y: 230, width: 380, height: 30, rotation: 0, fill: 'rgba(255,255,255,0.6)', stroke: 'transparent', strokeWidth: 0, text: 'The ultimate guide you need to watch', fontSize: 14, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 9. Subscriber badge background
      { id: '10-badge-bg', type: 'rect', x: 30, y: 300, width: 120, height: 32, fill: '#dc2626', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 10. Subscriber count text
      { id: '10-txt4', type: 'text', x: 38, y: 304, width: 110, height: 24, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: '▶ 1.2M Subs', fontSize: 13, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 11. Play button overlay circle
      { id: '10-play', type: 'circle', x: 350, y: 350, width: 60, height: 60, fill: 'rgba(220,38,38,0.85)', stroke: '#ffffff', strokeWidth: 3, opacity: 0.9, visible: true, locked: false },
      // 12. Play triangle
      { id: '10-play-icon', type: 'triangle', x: 370, y: 365, width: 24, height: 30, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 13. Duration badge
      { id: '10-duration', type: 'rect', x: 685, y: 400, width: 70, height: 26, fill: 'rgba(0,0,0,0.8)', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 14. Duration text
      { id: '10-txt5', type: 'text', x: 695, y: 404, width: 55, height: 18, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: '12:34', fontSize: 13, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
    ],
  },

  // ─── ID 11: YouTube Banner ── 2560×1440 → cW=780, cH=439 ───────────
  {
    id: 11,
    name: 'YouTube Banner',
    category: 'Social',
    size: '2560×1440',
    premium: true,
    likes: 3012,
    views: 22400,
    gradient: 'linear-gradient(135deg, #fb923c 0%, #ea580c 100%)',
    elements: [
      // 1. Background
      { id: '11-bg', type: 'rect', x: 0, y: 0, width: 780, height: 439, fill: '#1c1107', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 2. Background image subtle
      { id: '11-img1', type: 'image', x: 0, y: 0, width: 780, height: 439, src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400', fill: 'transparent', stroke: 'transparent', strokeWidth: 0, opacity: 0.15, visible: true, locked: true },
      // 3. Center darken overlay
      { id: '11-center', type: 'rect', x: 150, y: 50, width: 480, height: 340, fill: 'rgba(0,0,0,0.5)', stroke: 'rgba(251,146,60,0.3)', strokeWidth: 1, opacity: 0.8, visible: true, locked: true },
      // 4. Channel name (big center)
      { id: '11-txt1', type: 'text', x: 190, y: 100, width: 400, height: 60, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'GAME MASTER', fontSize: 48, fontFamily: 'Impact', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 5. Tagline
      { id: '11-txt2', type: 'text', x: 230, y: 165, width: 320, height: 24, rotation: 0, fill: '#fb923c', stroke: 'transparent', strokeWidth: 0, text: 'GAMING · REVIEWS · TUTORIALS', fontSize: 13, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // 6. Center accent line
      { id: '11-accent1', type: 'rect', x: 330, y: 198, width: 120, height: 3, fill: '#fb923c', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 7. Schedule text
      { id: '11-txt3', type: 'text', x: 270, y: 215, width: 240, height: 22, rotation: 0, fill: 'rgba(255,255,255,0.6)', stroke: 'transparent', strokeWidth: 0, text: 'NEW VIDEOS EVERY FRIDAY', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 8. Subscribe button bg
      { id: '11-sub-bg', type: 'rect', x: 310, y: 260, width: 160, height: 40, fill: '#dc2626', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 9. Subscribe text
      { id: '11-txt4', type: 'text', x: 325, y: 266, width: 140, height: 28, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'SUBSCRIBE', fontSize: 16, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 10. Social icons area text
      { id: '11-txt5', type: 'text', x: 280, y: 320, width: 220, height: 20, rotation: 0, fill: 'rgba(255,255,255,0.4)', stroke: 'transparent', strokeWidth: 0, text: '𝕏  ·  📷  ·  💬  ·  🎮', fontSize: 14, fontFamily: 'Arial', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // 11. Left decorative triangle
      { id: '11-tri1', type: 'triangle', x: 50, y: 350, width: 60, height: 60, fill: 'rgba(251,146,60,0.15)', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: false },
      // 12. Right decorative star
      { id: '11-star1', type: 'star', x: 680, y: 60, width: 50, height: 50, fill: 'rgba(234,88,12,0.2)', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: false },
      // 13. Top accent bar
      { id: '11-topbar', type: 'rect', x: 150, y: 50, width: 480, height: 5, fill: '#fb923c', stroke: 'transparent', strokeWidth: 0, opacity: 0.8, visible: true, locked: true },
    ],
  },

  // ─── ID 12: Pinterest Pin ── 1000×1500 → cW=373, cH=560 ────────────
  {
    id: 12,
    name: 'Pinterest Pin',
    category: 'Social',
    size: '1000×1500',
    premium: false,
    likes: 2540,
    views: 16700,
    gradient: 'linear-gradient(135deg, #f472b6 0%, #db2777 100%)',
    elements: [
      // 1. Background
      { id: '12-bg', type: 'rect', x: 0, y: 0, width: 373, height: 560, fill: '#fdf2f8', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 2. Product image top 60%
      { id: '12-img1', type: 'image', x: 0, y: 0, width: 373, height: 336, src: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=300', fill: 'transparent', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 3. White content area
      { id: '12-content', type: 'rect', x: 0, y: 336, width: 373, height: 224, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 4. Category badge
      { id: '12-badge', type: 'rect', x: 20, y: 310, width: 75, height: 24, fill: '#db2777', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 5. Category text
      { id: '12-txt1', type: 'text', x: 28, y: 313, width: 65, height: 18, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'TRENDING', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 6. Title text
      { id: '12-txt2', type: 'text', x: 20, y: 352, width: 333, height: 50, rotation: 0, fill: '#1e1e2e', stroke: 'transparent', strokeWidth: 0, text: 'Aesthetic Color\nPalette Ideas', fontSize: 22, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 7. Description
      { id: '12-txt3', type: 'text', x: 20, y: 410, width: 333, height: 45, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Discover the most beautiful color combinations for your next design project. Save for inspiration!', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 8. Price tag shape
      { id: '12-price-bg', type: 'rect', x: 280, y: 352, width: 73, height: 30, fill: '#fecdd3', stroke: '#db2777', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      // 9. Price text
      { id: '12-txt4', type: 'text', x: 288, y: 355, width: 60, height: 22, rotation: 0, fill: '#db2777', stroke: 'transparent', strokeWidth: 0, text: '$19.99', fontSize: 15, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 10. Divider line
      { id: '12-divider', type: 'rect', x: 20, y: 465, width: 333, height: 1, fill: '#f3f4f6', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 11. Save icon circle
      { id: '12-save', type: 'circle', x: 310, y: 480, width: 36, height: 36, fill: '#db2777', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 12. Save text
      { id: '12-txt5', type: 'text', x: 318, y: 488, width: 24, height: 20, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: '📌', fontSize: 14, fontFamily: 'Arial', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 13. Source attribution
      { id: '12-txt6', type: 'text', x: 20, y: 490, width: 200, height: 18, rotation: 0, fill: '#9ca3af', stroke: 'transparent', strokeWidth: 0, text: 'via designstudio.com', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // 14. Heart / likes
      { id: '12-txt7', type: 'text', x: 20, y: 520, width: 120, height: 18, rotation: 0, fill: '#db2777', stroke: 'transparent', strokeWidth: 0, text: '♥ 2.5K saves', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
    ],
  },

  // ─── ID 48: Twitch Banner ── 1200×480 → cW=780, cH=312 ─────────────
  {
    id: 48,
    name: 'Twitch Banner',
    category: 'Social',
    size: '1200×480',
    premium: false,
    likes: 1890,
    views: 13500,
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
    elements: [
      // 1. Background
      { id: '48-bg', type: 'rect', x: 0, y: 0, width: 780, height: 312, fill: '#0c0a1a', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // 2. Background image
      { id: '48-img1', type: 'image', x: 400, y: 0, width: 380, height: 312, src: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=400', fill: 'transparent', stroke: 'transparent', strokeWidth: 0, opacity: 0.25, visible: true, locked: true },
      // 3. Neon purple glow left strip
      { id: '48-glow', type: 'rect', x: 0, y: 0, width: 6, height: 312, fill: '#7c3aed', stroke: 'transparent', strokeWidth: 0, opacity: 0.9, visible: true, locked: true },
      // 4. LIVE badge
      { id: '48-live-bg', type: 'rect', x: 30, y: 20, width: 60, height: 26, fill: '#dc2626', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 5. LIVE text
      { id: '48-txt1', type: 'text', x: 38, y: 23, width: 50, height: 20, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: '● LIVE', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 6. Gamer username large
      { id: '48-txt2', type: 'text', x: 30, y: 70, width: 400, height: 55, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'SHADOW_PIXEL', fontSize: 44, fontFamily: 'Impact', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 7. Neon accent underline
      { id: '48-neon', type: 'rect', x: 30, y: 128, width: 180, height: 3, fill: '#a78bfa', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // 8. Tagline
      { id: '48-txt3', type: 'text', x: 30, y: 142, width: 350, height: 22, rotation: 0, fill: '#a78bfa', stroke: 'transparent', strokeWidth: 0, text: 'FPS · Strategy · Indie Games', fontSize: 14, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // 9. Schedule heading
      { id: '48-txt4', type: 'text', x: 30, y: 185, width: 120, height: 18, rotation: 0, fill: '#7c3aed', stroke: 'transparent', strokeWidth: 0, text: 'STREAM SCHEDULE', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 10. Schedule list
      { id: '48-txt5', type: 'text', x: 30, y: 208, width: 300, height: 50, rotation: 0, fill: 'rgba(255,255,255,0.55)', stroke: 'transparent', strokeWidth: 0, text: 'MON / WED / FRI — 8PM EST\nSAT — 2PM EST (Special)', fontSize: 11, fontFamily: 'Courier', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // 11. Social links
      { id: '48-txt6', type: 'text', x: 30, y: 270, width: 300, height: 18, rotation: 0, fill: 'rgba(255,255,255,0.35)', stroke: 'transparent', strokeWidth: 0, text: '𝕏 @shadow_pixel  ·  Discord  ·  YouTube', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // 12. Decorative triangle
      { id: '48-tri1', type: 'triangle', x: 700, y: 230, width: 50, height: 50, fill: 'rgba(124,58,237,0.2)', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: false },
      // 13. Blue neon accent bottom
      { id: '48-bottom', type: 'rect', x: 0, y: 305, width: 780, height: 7, fill: '#4f46e5', stroke: 'transparent', strokeWidth: 0, opacity: 0.7, visible: true, locked: true },
      // 14. Decorative star
      { id: '48-star1', type: 'star', x: 660, y: 30, width: 35, height: 35, fill: '#7c3aed', stroke: 'transparent', strokeWidth: 0, opacity: 0.2, visible: true, locked: false },
    ],
  },
];
