// ─── Presentation & Poster Template Elements ────────────────────────────────
// Rich, Canva-quality element data for 16 templates (8 Presentation + 8 Poster)
// Canvas sizes calculated from maxW=780, maxH=560

export const presPostTemplates = [

  // ═══════════════════════════════════════════════════════════════════════════
  // PRESENTATION TEMPLATES (8)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── ID 14: Classic 4:3 ─────────────────────────────────────────────────────
  // 1024×768 → scale=0.729 → cW=747, cH=560
  {
    id: 14,
    name: 'Classic 4:3',
    category: 'Presentation',
    size: '1024×768',
    premium: false,
    likes: 1870,
    views: 13200,
    gradient: 'linear-gradient(135deg, #a7f3d0 0%, #10b981 100%)',
    elements: [
      // Background
      { id: '14-bg', type: 'rect', x: 0, y: 0, width: 747, height: 560, fill: '#f0f4f8', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Left accent sidebar stripe
      { id: '14-sidebar', type: 'rect', x: 0, y: 0, width: 8, height: 560, fill: '#10b981', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Top title bar
      { id: '14-titlebar', type: 'rect', x: 0, y: 0, width: 747, height: 80, fill: '#065f46', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Title text
      { id: '14-txt1', type: 'text', x: 40, y: 18, width: 500, height: 45, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'Quarterly Business Review', fontSize: 32, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Subtitle
      { id: '14-txt2', type: 'text', x: 40, y: 56, width: 400, height: 22, rotation: 0, fill: '#a7f3d0', stroke: 'transparent', strokeWidth: 0, text: 'FY 2026 · Q3 Performance Summary', fontSize: 14, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Image on the right side
      { id: '14-img1', type: 'image', x: 440, y: 110, width: 270, height: 200, src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=300', fill: 'transparent', stroke: '#e2e8f0', strokeWidth: 2, opacity: 1, visible: true, locked: false },
      // Bullet point 1
      { id: '14-txt3', type: 'text', x: 40, y: 120, width: 380, height: 28, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: '● Revenue grew 24% year-over-year', fontSize: 18, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Bullet point 2
      { id: '14-txt4', type: 'text', x: 40, y: 160, width: 380, height: 28, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: '● Customer acquisition cost reduced 18%', fontSize: 18, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Bullet point 3
      { id: '14-txt5', type: 'text', x: 40, y: 200, width: 380, height: 28, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: '● NPS score improved to 72', fontSize: 18, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Bullet point 4
      { id: '14-txt6', type: 'text', x: 40, y: 240, width: 380, height: 28, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: '● Team expanded by 15 new hires', fontSize: 18, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Divider line
      { id: '14-div', type: 'line', x: 40, y: 500, width: 667, height: 2, fill: '#d1d5db', stroke: '#d1d5db', strokeWidth: 1, opacity: 0.5, visible: true, locked: true },
      // Footer - company
      { id: '14-txt7', type: 'text', x: 40, y: 520, width: 250, height: 20, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Acme Corp · Confidential', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // Footer - page number
      { id: '14-txt8', type: 'text', x: 660, y: 520, width: 60, height: 20, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Slide 01', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // Logo placeholder circle
      { id: '14-logo', type: 'circle', x: 660, y: 20, width: 44, height: 44, fill: '#10b981', stroke: '#ffffff', strokeWidth: 2, opacity: 0.9, visible: true, locked: false },
    ]
  },

  // ── ID 15: Keynote Deck ────────────────────────────────────────────────────
  // 1920×1080 → scale=min(780/1920, 560/1080)=min(0.406, 0.519)=0.406 → cW=780, cH=439
  {
    id: 15,
    name: 'Keynote Deck',
    category: 'Presentation',
    size: '1920×1080',
    premium: true,
    likes: 4580,
    views: 35200,
    gradient: 'linear-gradient(135deg, #818cf8 0%, #4f46e5 100%)',
    elements: [
      // Dark background
      { id: '15-bg', type: 'rect', x: 0, y: 0, width: 780, height: 439, fill: '#0a0a0f', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Decorative gradient orb
      { id: '15-orb', type: 'circle', x: 520, y: 60, width: 300, height: 300, fill: '#4f46e5', stroke: 'transparent', strokeWidth: 0, opacity: 0.08, visible: true, locked: true },
      // Hero image on right half
      { id: '15-img1', type: 'image', x: 400, y: 0, width: 380, height: 439, src: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=400', fill: 'transparent', stroke: 'transparent', strokeWidth: 0, opacity: 0.7, visible: true, locked: false },
      // Gradient overlay on image
      { id: '15-overlay', type: 'rect', x: 400, y: 0, width: 200, height: 439, fill: '#0a0a0f', stroke: 'transparent', strokeWidth: 0, opacity: 0.7, visible: true, locked: true },
      // Bold white title
      { id: '15-txt1', type: 'text', x: 50, y: 100, width: 380, height: 70, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'REDEFINE', fontSize: 52, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Title line 2
      { id: '15-txt2', type: 'text', x: 50, y: 165, width: 380, height: 60, rotation: 0, fill: '#818cf8', stroke: 'transparent', strokeWidth: 0, text: 'THE FUTURE', fontSize: 48, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Subtitle
      { id: '15-txt3', type: 'text', x: 50, y: 240, width: 340, height: 40, rotation: 0, fill: '#94a3b8', stroke: 'transparent', strokeWidth: 0, text: 'Annual Keynote Presentation 2026', fontSize: 16, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Divider accent line
      { id: '15-line', type: 'line', x: 50, y: 290, width: 60, height: 3, fill: '#818cf8', stroke: '#818cf8', strokeWidth: 3, opacity: 1, visible: true, locked: true },
      // Presenter name
      { id: '15-txt4', type: 'text', x: 50, y: 310, width: 300, height: 24, rotation: 0, fill: '#e2e8f0', stroke: 'transparent', strokeWidth: 0, text: 'Presented by Sarah Mitchell', fontSize: 14, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Presenter title
      { id: '15-txt5', type: 'text', x: 50, y: 336, width: 300, height: 20, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: 'Chief Innovation Officer', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // Navigation dots
      { id: '15-dot1', type: 'circle', x: 50, y: 410, width: 8, height: 8, fill: '#818cf8', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      { id: '15-dot2', type: 'circle', x: 66, y: 410, width: 8, height: 8, fill: '#334155', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      { id: '15-dot3', type: 'circle', x: 82, y: 410, width: 8, height: 8, fill: '#334155', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Brand mark
      { id: '15-brand', type: 'text', x: 660, y: 410, width: 100, height: 18, rotation: 0, fill: '#475569', stroke: 'transparent', strokeWidth: 0, text: 'ORDSTUDIO CREATIVE', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.5, visible: true, locked: true },
    ]
  },

  // ── ID 16: Pitch Deck ──────────────────────────────────────────────────────
  // 1920×1080 → cW=780, cH=439
  {
    id: 16,
    name: 'Pitch Deck',
    category: 'Presentation',
    size: '1920×1080',
    premium: true,
    likes: 5120,
    views: 38900,
    gradient: 'linear-gradient(135deg, #fbbf24 0%, #b45309 100%)',
    elements: [
      // Warm background
      {
        id: '16-bg',
        type: 'rect',
        x: 0,
        y: 0,
        width: 780,
        height: 439,
        fill: '#0f172a',
        stroke: 'transparent',
        strokeWidth: 0,
        opacity: 1,
        visible: true,
        locked: true
      },

// Decorative circle 1
{
  id: '16-deco1',
  type: 'circle',
  x: 540,
  y: -80,
  width: 220,
  height: 220,
  fill: '#2563eb',
  stroke: 'transparent',
  strokeWidth: 0,
  opacity: 0.15,
  visible: true,
  locked: true
},

// Decorative circle 2
{
  id: '16-deco2',
  type: 'circle',
  x: 620,
  y: 250,
  width: 180,
  height: 180,
  fill: '#60a5fa',
  stroke: 'transparent',
  strokeWidth: 0,
  opacity: 0.10,
  visible: true,
  locked: true
},

// Decorative circle 3
{
  id: '16-deco3',
  type: 'circle',
  x: -80,
  y: 300,
  width: 180,
  height: 180,
  fill: '#1d4ed8',
  stroke: 'transparent',
  strokeWidth: 0,
  opacity: 0.08,
  visible: true,
  locked: true
},

      // Top accent bar
      { id: '16-accent', type: 'rect', x: 0, y: 0, width: 780, height: 6, fill: '#f59e0b', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Company logo placeholder
      { id: '16-logo', type: 'circle', x: 30, y: 20, width: 36, height: 36, fill: '#f59e0b', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // Company name
      { id: '16-txt1', type: 'text', x: 76, y: 24, width: 200, height: 28, rotation: 0, fill: '#78350f', stroke: 'transparent', strokeWidth: 0, text: 'NovaTech', fontSize: 20, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Big revenue metric
      { id: '16-txt2', type: 'text', x: 160, y: 90, width: 460, height: 80, rotation: 0, fill: '#92400e', stroke: 'transparent', strokeWidth: 0, text: '$4.2M ARR', fontSize: 64, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Metric subtitle
      { id: '16-txt3', type: 'text', x: 250, y: 170, width: 280, height: 24, rotation: 0, fill: '#a16207', stroke: 'transparent', strokeWidth: 0, text: 'Annual Recurring Revenue · 142% YoY Growth', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Growth chart bar 1
      { id: '16-bar1', type: 'rect', x: 80, y: 280, width: 80, height: 50, fill: '#fde68a', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // Growth chart bar 2
      { id: '16-bar2', type: 'rect', x: 200, y: 250, width: 80, height: 80, fill: '#fbbf24', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // Growth chart bar 3
      { id: '16-bar3', type: 'rect', x: 320, y: 220, width: 80, height: 110, fill: '#f59e0b', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // Growth chart bar 4
      { id: '16-bar4', type: 'rect', x: 440, y: 210, width: 80, height: 120, fill: '#d97706', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // Chart labels
      { id: '16-txt4', type: 'text', x: 96, y: 335, width: 50, height: 16, rotation: 0, fill: '#78350f', stroke: 'transparent', strokeWidth: 0, text: 'Q1', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      { id: '16-txt5', type: 'text', x: 216, y: 335, width: 50, height: 16, rotation: 0, fill: '#78350f', stroke: 'transparent', strokeWidth: 0, text: 'Q2', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      { id: '16-txt6', type: 'text', x: 336, y: 335, width: 50, height: 16, rotation: 0, fill: '#78350f', stroke: 'transparent', strokeWidth: 0, text: 'Q3', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      { id: '16-txt7', type: 'text', x: 456, y: 335, width: 50, height: 16, rotation: 0, fill: '#78350f', stroke: 'transparent', strokeWidth: 0, text: 'Q4', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // Team headshot area
      { id: '16-img1', type: 'image', x: 580, y: 220, width: 80, height: 80, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400', fill: 'transparent', stroke: '#fbbf24', strokeWidth: 2, opacity: 1, visible: true, locked: false },
      // Funding ask
      { id: '16-txt8', type: 'text', x: 560, y: 310, width: 180, height: 24, rotation: 0, fill: '#92400e', stroke: 'transparent', strokeWidth: 0, text: 'Seeking $10M Series A', fontSize: 13, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Section dots
      { id: '16-dot1', type: 'circle', x: 360, y: 410, width: 8, height: 8, fill: '#f59e0b', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      { id: '16-dot2', type: 'circle', x: 376, y: 410, width: 8, height: 8, fill: '#e5e7eb', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      { id: '16-dot3', type: 'circle', x: 392, y: 410, width: 8, height: 8, fill: '#e5e7eb', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
    ]
  },

  // ── ID 17: Webinar Slide ───────────────────────────────────────────────────
  // 1920×1080 → cW=780, cH=439
  {
    id: 17,
    name: 'Webinar Slide',
    category: 'Presentation',
    size: '1920×1080',
    premium: false,
    likes: 2340,
    views: 17600,
    gradient: 'linear-gradient(135deg, #67e8f9 0%, #0e7490 100%)',
    elements: [
      // Background
      { id: '17-bg', type: 'rect', x: 0, y: 0, width: 780, height: 439, fill: '#f0fdfa', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Left panel
      { id: '17-panel', type: 'rect', x: 0, y: 0, width: 240, height: 439, fill: '#0e7490', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Speaker photo (circle)
      // Speaker photo (image)
      { id: '17-speaker', type: 'image', x: 60, y: 80, width: 120, height: 120, src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200', fill: 'transparent', stroke: '#67e8f9', strokeWidth: 3, opacity: 1, visible: true, locked: false },
      // Speaker name
      { id: '17-txt1', type: 'text', x: 30, y: 220, width: 180, height: 26, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'Dr. James Carter', fontSize: 16, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Speaker title
      { id: '17-txt2', type: 'text', x: 30, y: 248, width: 180, height: 20, rotation: 0, fill: '#a5f3fc', stroke: 'transparent', strokeWidth: 0, text: 'AI Research Lead, OpenTech', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // LIVE badge
      { id: '17-live', type: 'rect', x: 30, y: 290, width: 50, height: 22, fill: '#ef4444', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      { id: '17-txt3', type: 'text', x: 35, y: 293, width: 40, height: 18, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: '● LIVE', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      // Webinar date/time
      { id: '17-txt4', type: 'text', x: 30, y: 380, width: 180, height: 18, rotation: 0, fill: '#ccfbf1', stroke: 'transparent', strokeWidth: 0, text: 'June 15, 2026 · 2:00 PM EST', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Topic headline
      { id: '17-txt5', type: 'text', x: 280, y: 40, width: 460, height: 50, rotation: 0, fill: '#0e7490', stroke: 'transparent', strokeWidth: 0, text: 'The Future of AI in Healthcare', fontSize: 32, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Numbered bullet 1
      { id: '17-num1', type: 'circle', x: 280, y: 120, width: 28, height: 28, fill: '#0e7490', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      { id: '17-txt6', type: 'text', x: 284, y: 122, width: 20, height: 24, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: '1', fontSize: 14, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      { id: '17-txt7', type: 'text', x: 320, y: 124, width: 400, height: 22, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: 'Current landscape of AI-powered diagnostics', fontSize: 15, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Numbered bullet 2
      { id: '17-num2', type: 'circle', x: 280, y: 165, width: 28, height: 28, fill: '#0e7490', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      { id: '17-txt8', type: 'text', x: 284, y: 167, width: 20, height: 24, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: '2', fontSize: 14, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      { id: '17-txt9', type: 'text', x: 320, y: 169, width: 400, height: 22, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: 'Regulatory challenges and ethical frameworks', fontSize: 15, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Numbered bullet 3
      { id: '17-num3', type: 'circle', x: 280, y: 210, width: 28, height: 28, fill: '#0e7490', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      { id: '17-txt10', type: 'text', x: 284, y: 212, width: 20, height: 24, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: '3', fontSize: 14, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      { id: '17-txt11', type: 'text', x: 320, y: 214, width: 400, height: 22, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: 'Case studies: real-world patient outcomes', fontSize: 15, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Q&A section
      { id: '17-qa', type: 'rect', x: 280, y: 330, width: 460, height: 80, fill: '#ecfdf5', stroke: '#a7f3d0', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '17-txt12', type: 'text', x: 300, y: 345, width: 200, height: 22, rotation: 0, fill: '#0e7490', stroke: 'transparent', strokeWidth: 0, text: 'Q&A Session', fontSize: 16, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '17-txt13', type: 'text', x: 300, y: 370, width: 400, height: 20, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: 'Submit your questions in the chat panel below', fontSize: 12, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
    ]
  },

  // ── ID 18: Course Slide ────────────────────────────────────────────────────
  // 1920×1080 → cW=780, cH=439
  {
   // ── ID 18: Course Slide
// 1920x1080 → cW=780, cH=439

  id: 18,
  name: 'Course Slide',
  category: 'Presentation',
  size: '1920×1080',
  premium: false,
  likes: 1980,
  views: 14500,
  gradient: 'linear-gradient(135deg, #c4b5fd 0%, #7c3aed 100%)',
 elements: [
  {
    id: '18-bg',
    type: 'rect',
    x: 0,
    y: 0,
    width: 780,
    height: 439,
    fill: '#0f172a',
    stroke: 'transparent',
    strokeWidth: 0,
    opacity: 1,
    visible: true,
    locked: true
  },

  {
    id: '18-top',
    type: 'rect',
    x: 0,
    y: 0,
    width: 780,
    height: 90,
    fill: '#7c3aed',
    stroke: 'transparent',
    strokeWidth: 0,
    opacity: 1,
    visible: true,
    locked: true
  },

  {
    id: '18-title',
    type: 'text',
    x: 40,
    y: 25,
    width: 500,
    height: 40,
    text: 'Module 01: Introduction to AI',
    fill: '#ffffff',
    fontSize: 28,
    fontFamily: 'Syne',
    fontWeight: 'bold',
    visible: true
  },

  {
    id: '18-progress',
    type: 'rect',
    x: 40,
    y: 120,
    width: 700,
    height: 12,
    fill: '#1e293b',
    stroke: 'transparent',
    strokeWidth: 0,
    visible: true
  },

  {
    id: '18-progress-fill',
    type: 'rect',
    x: 40,
    y: 120,
    width: 280,
    height: 12,
    fill: '#8b5cf6',
    stroke: 'transparent',
    strokeWidth: 0,
    visible: true
  },

  {
    id: '18-card1',
    type: 'rect',
    x: 40,
    y: 170,
    width: 210,
    height: 180,
    fill: '#1e293b',
    stroke: '#334155',
    strokeWidth: 1,
    visible: true
  },

  {
    id: '18-card2',
    type: 'rect',
    x: 285,
    y: 170,
    width: 210,
    height: 180,
    fill: '#1e293b',
    stroke: '#334155',
    strokeWidth: 1,
    visible: true
  },

  {
    id: '18-card3',
    type: 'rect',
    x: 530,
    y: 170,
    width: 210,
    height: 180,
    fill: '#1e293b',
    stroke: '#334155',
    strokeWidth: 1,
    visible: true
  },

  {
    id: '18-topic1',
    type: 'text',
    x: 60,
    y: 200,
    width: 180,
    height: 30,
    text: 'Neural Nets 101',
    fill: '#ffffff',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    visible: true
  },
  {
    id: '18-topic1-desc',
    type: 'text',
    x: 60,
    y: 240,
    width: 170,
    height: 90,
    text: 'Introduction to neural networks, history of AI, and modern use cases.',
    fill: '#94a3b8',
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: 'normal',
    visible: true
  },

  {
    id: '18-topic2',
    type: 'text',
    x: 305,
    y: 200,
    width: 180,
    height: 30,
    text: 'Deep Learning',
    fill: '#ffffff',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    visible: true
  },
  {
    id: '18-topic2-desc',
    type: 'text',
    x: 305,
    y: 240,
    width: 170,
    height: 90,
    text: 'Understanding deep learning, algorithms, and training datasets.',
    fill: '#94a3b8',
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: 'normal',
    visible: true
  },

  {
    id: '18-topic3',
    type: 'text',
    x: 550,
    y: 200,
    width: 180,
    height: 30,
    text: 'AI Architectures',
    fill: '#ffffff',
    fontSize: 20,
    fontFamily: 'Inter',
    fontWeight: 'bold',
    visible: true
  },
  {
    id: '18-topic3-desc',
    type: 'text',
    x: 550,
    y: 240,
    width: 170,
    height: 90,
    text: 'Exploring ethics, future trends, and automated systems.',
    fill: '#94a3b8',
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: 'normal',
    visible: true
  }
]
},

  // ── ID 19: Infographic Slide ───────────────────────────────────────────────
  // 1080×1920 → scale=min(780/1080, 560/1920)=min(0.722, 0.292)=0.292 → cW=315, cH=560
  {
    id: 19,
    name: 'Infographic Slide',
    category: 'Presentation',
    size: '1080×1920',
    premium: true,
    likes: 3670,
    views: 28100,
    gradient: 'linear-gradient(135deg, #fca5a5 0%, #b91c1c 100%)',
    elements: [
      // Background
      { id: '19-bg', type: 'rect', x: 0, y: 0, width: 315, height: 560, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Colored header
      { id: '19-header', type: 'rect', x: 0, y: 0, width: 315, height: 90, fill: '#dc2626', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Header title
      { id: '19-txt1', type: 'text', x: 20, y: 18, width: 275, height: 30, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'DIGITAL TRENDS', fontSize: 22, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Header subtitle
      { id: '19-txt2', type: 'text', x: 20, y: 52, width: 275, height: 20, rotation: 0, fill: '#fecaca', stroke: 'transparent', strokeWidth: 0, text: '2026 Industry Report', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Stat block 1
      { id: '19-stat1bg', type: 'rect', x: 20, y: 110, width: 275, height: 65, fill: '#fef2f2', stroke: '#fecaca', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '19-txt3', type: 'text', x: 35, y: 118, width: 100, height: 30, rotation: 0, fill: '#dc2626', stroke: 'transparent', strokeWidth: 0, text: '87%', fontSize: 26, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '19-txt4', type: 'text', x: 35, y: 147, width: 240, height: 18, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Businesses adopted AI tools', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Connecting line
      { id: '19-line1', type: 'line', x: 157, y: 175, width: 2, height: 15, fill: '#fca5a5', stroke: '#fca5a5', strokeWidth: 2, opacity: 0.5, visible: true, locked: true },
      // Stat block 2
      { id: '19-stat2bg', type: 'rect', x: 20, y: 190, width: 275, height: 65, fill: '#fff7ed', stroke: '#fed7aa', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '19-txt5', type: 'text', x: 35, y: 198, width: 100, height: 30, rotation: 0, fill: '#ea580c', stroke: 'transparent', strokeWidth: 0, text: '3.2×', fontSize: 26, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '19-txt6', type: 'text', x: 35, y: 227, width: 240, height: 18, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Remote work productivity increase', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Connecting line
      { id: '19-line2', type: 'line', x: 157, y: 255, width: 2, height: 15, fill: '#fca5a5', stroke: '#fca5a5', strokeWidth: 2, opacity: 0.5, visible: true, locked: true },
      // Stat block 3
      { id: '19-stat3bg', type: 'rect', x: 20, y: 270, width: 275, height: 65, fill: '#faf5ff', stroke: '#e9d5ff', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '19-txt7', type: 'text', x: 35, y: 278, width: 100, height: 30, rotation: 0, fill: '#7c3aed', stroke: 'transparent', strokeWidth: 0, text: '$14T', fontSize: 26, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '19-txt8', type: 'text', x: 35, y: 307, width: 240, height: 18, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Global digital economy value', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Connecting line
      { id: '19-line3', type: 'line', x: 157, y: 335, width: 2, height: 15, fill: '#fca5a5', stroke: '#fca5a5', strokeWidth: 2, opacity: 0.5, visible: true, locked: true },
      // Stat block 4
      { id: '19-stat4bg', type: 'rect', x: 20, y: 350, width: 275, height: 65, fill: '#ecfdf5', stroke: '#a7f3d0', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '19-txt9', type: 'text', x: 35, y: 358, width: 100, height: 30, rotation: 0, fill: '#059669', stroke: 'transparent', strokeWidth: 0, text: '62%', fontSize: 26, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '19-txt10', type: 'text', x: 35, y: 387, width: 240, height: 18, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Consumers prefer mobile-first', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Connecting line
      { id: '19-line4', type: 'line', x: 157, y: 415, width: 2, height: 15, fill: '#fca5a5', stroke: '#fca5a5', strokeWidth: 2, opacity: 0.5, visible: true, locked: true },
      // Stat block 5
      { id: '19-stat5bg', type: 'rect', x: 20, y: 430, width: 275, height: 65, fill: '#eff6ff', stroke: '#bfdbfe', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '19-txt11', type: 'text', x: 35, y: 438, width: 100, height: 30, rotation: 0, fill: '#2563eb', stroke: 'transparent', strokeWidth: 0, text: '5B+', fontSize: 26, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '19-txt12', type: 'text', x: 35, y: 467, width: 240, height: 18, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Internet users worldwide', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Source citation
      { id: '19-txt13', type: 'text', x: 20, y: 520, width: 275, height: 30, rotation: 0, fill: '#9ca3af', stroke: 'transparent', strokeWidth: 0, text: 'Source: Global Digital Report 2026\n© TrendWatch Analytics', fontSize: 8, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.6, visible: true, locked: true },
    ]
  },

  // ── ID 20: Data Dashboard ──────────────────────────────────────────────────
  // 1920×1080 → cW=780, cH=439
  {
    id: 20,
    name: 'Data Dashboard',
    category: 'Presentation',
    size: '1920×1080',
    premium: true,
    likes: 4890,
    views: 36700,
    gradient: 'linear-gradient(135deg, #6ee7b7 0%, #047857 100%)',
    elements: [
      // Dark background
      { id: '20-bg', type: 'rect', x: 0, y: 0, width: 780, height: 439, fill: '#0f172a', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Brand mark
      { id: '20-brand', type: 'text', x: 20, y: 12, width: 120, height: 20, rotation: 0, fill: '#10b981', stroke: 'transparent', strokeWidth: 0, text: '◆ DataViz Pro', fontSize: 12, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      // Date range indicator
      { id: '20-date', type: 'text', x: 600, y: 14, width: 160, height: 16, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: 'Jan 1 – Jun 30, 2026', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // KPI Card 1 - Revenue
      { id: '20-kpi1', type: 'rect', x: 20, y: 45, width: 175, height: 80, fill: '#1e293b', stroke: '#334155', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '20-txt1', type: 'text', x: 35, y: 55, width: 140, height: 14, rotation: 0, fill: '#94a3b8', stroke: 'transparent', strokeWidth: 0, text: 'REVENUE', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      { id: '20-txt2', type: 'text', x: 35, y: 72, width: 140, height: 32, rotation: 0, fill: '#10b981', stroke: 'transparent', strokeWidth: 0, text: '$2.4M', fontSize: 26, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '20-txt3', type: 'text', x: 35, y: 100, width: 100, height: 14, rotation: 0, fill: '#34d399', stroke: 'transparent', strokeWidth: 0, text: '↑ 18.2%', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // KPI Card 2 - Users
      { id: '20-kpi2', type: 'rect', x: 210, y: 45, width: 175, height: 80, fill: '#1e293b', stroke: '#334155', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '20-txt4', type: 'text', x: 225, y: 55, width: 140, height: 14, rotation: 0, fill: '#94a3b8', stroke: 'transparent', strokeWidth: 0, text: 'ACTIVE USERS', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      { id: '20-txt5', type: 'text', x: 225, y: 72, width: 140, height: 32, rotation: 0, fill: '#38bdf8', stroke: 'transparent', strokeWidth: 0, text: '84.3K', fontSize: 26, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '20-txt6', type: 'text', x: 225, y: 100, width: 100, height: 14, rotation: 0, fill: '#34d399', stroke: 'transparent', strokeWidth: 0, text: '↑ 12.5%', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // KPI Card 3 - Conversion
      { id: '20-kpi3', type: 'rect', x: 400, y: 45, width: 175, height: 80, fill: '#1e293b', stroke: '#334155', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '20-txt7', type: 'text', x: 415, y: 55, width: 140, height: 14, rotation: 0, fill: '#94a3b8', stroke: 'transparent', strokeWidth: 0, text: 'CONVERSION', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      { id: '20-txt8', type: 'text', x: 415, y: 72, width: 140, height: 32, rotation: 0, fill: '#a78bfa', stroke: 'transparent', strokeWidth: 0, text: '4.8%', fontSize: 26, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '20-txt9', type: 'text', x: 415, y: 100, width: 100, height: 14, rotation: 0, fill: '#34d399', stroke: 'transparent', strokeWidth: 0, text: '↑ 0.7%', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // KPI Card 4 - Churn
      { id: '20-kpi4', type: 'rect', x: 590, y: 45, width: 170, height: 80, fill: '#1e293b', stroke: '#334155', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '20-txt10', type: 'text', x: 605, y: 55, width: 140, height: 14, rotation: 0, fill: '#94a3b8', stroke: 'transparent', strokeWidth: 0, text: 'CHURN RATE', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      { id: '20-txt11', type: 'text', x: 605, y: 72, width: 140, height: 32, rotation: 0, fill: '#f87171', stroke: 'transparent', strokeWidth: 0, text: '1.2%', fontSize: 26, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '20-txt12', type: 'text', x: 605, y: 100, width: 100, height: 14, rotation: 0, fill: '#f87171', stroke: 'transparent', strokeWidth: 0, text: '↓ 0.3%', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Large chart area placeholder
      { id: '20-chart', type: 'rect', x: 20, y: 145, width: 540, height: 260, fill: '#1e293b', stroke: '#334155', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '20-txt13', type: 'text', x: 35, y: 155, width: 200, height: 20, rotation: 0, fill: '#e2e8f0', stroke: 'transparent', strokeWidth: 0, text: 'Revenue Over Time', fontSize: 13, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Chart bars (mini bar chart)
      { id: '20-cbar1', type: 'rect', x: 60, y: 280, width: 40, height: 100, fill: '#10b981', stroke: 'transparent', strokeWidth: 0, opacity: 0.7, visible: true, locked: true },
      { id: '20-cbar2', type: 'rect', x: 130, y: 250, width: 40, height: 130, fill: '#10b981', stroke: 'transparent', strokeWidth: 0, opacity: 0.8, visible: true, locked: true },
      { id: '20-cbar3', type: 'rect', x: 200, y: 230, width: 40, height: 150, fill: '#10b981', stroke: 'transparent', strokeWidth: 0, opacity: 0.85, visible: true, locked: true },
      { id: '20-cbar4', type: 'rect', x: 270, y: 260, width: 40, height: 120, fill: '#10b981', stroke: 'transparent', strokeWidth: 0, opacity: 0.75, visible: true, locked: true },
      { id: '20-cbar5', type: 'rect', x: 340, y: 220, width: 40, height: 160, fill: '#10b981', stroke: 'transparent', strokeWidth: 0, opacity: 0.9, visible: true, locked: true },
      { id: '20-cbar6', type: 'rect', x: 410, y: 200, width: 40, height: 180, fill: '#6ee7b7', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Sidebar metrics
      { id: '20-side', type: 'rect', x: 580, y: 145, width: 180, height: 260, fill: '#1e293b', stroke: '#334155', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '20-txt14', type: 'text', x: 595, y: 160, width: 150, height: 16, rotation: 0, fill: '#94a3b8', stroke: 'transparent', strokeWidth: 0, text: 'TOP CHANNELS', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      { id: '20-txt15', type: 'text', x: 595, y: 190, width: 150, height: 16, rotation: 0, fill: '#e2e8f0', stroke: 'transparent', strokeWidth: 0, text: 'Organic Search    42%', fontSize: 10, fontFamily: 'Courier', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      { id: '20-txt16', type: 'text', x: 595, y: 212, width: 150, height: 16, rotation: 0, fill: '#e2e8f0', stroke: 'transparent', strokeWidth: 0, text: 'Direct              28%', fontSize: 10, fontFamily: 'Courier', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      { id: '20-txt17', type: 'text', x: 595, y: 234, width: 150, height: 16, rotation: 0, fill: '#e2e8f0', stroke: 'transparent', strokeWidth: 0, text: 'Social Media     18%', fontSize: 10, fontFamily: 'Courier', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      { id: '20-txt18', type: 'text', x: 595, y: 256, width: 150, height: 16, rotation: 0, fill: '#e2e8f0', stroke: 'transparent', strokeWidth: 0, text: 'Referral            12%', fontSize: 10, fontFamily: 'Courier', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Footer
      { id: '20-footer', type: 'text', x: 20, y: 418, width: 300, height: 14, rotation: 0, fill: '#475569', stroke: 'transparent', strokeWidth: 0, text: 'Dashboard · Last updated: Jun 4, 2026 14:00 UTC', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.5, visible: true, locked: true },
    ]
  },

  // ── ID 49: Workshop Slide ──────────────────────────────────────────────────
  // 1920×1080 → cW=780, cH=439
  {
    id: 49,
    name: 'Workshop Slide',
    category: 'Presentation',
    size: '1920×1080',
    premium: false,
    likes: 2150,
    views: 15800,
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    elements: [
      // Background
      { id: '49-bg', type: 'rect', x: 0, y: 0, width: 780, height: 439, fill: '#fffbeb', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Left panel - instructions
      { id: '49-leftpanel', type: 'rect', x: 0, y: 0, width: 380, height: 439, fill: '#ffffff', stroke: '#f3f4f6', strokeWidth: 1, opacity: 1, visible: true, locked: true },
      // Right panel - workspace
      { id: '49-rightpanel', type: 'rect', x: 390, y: 0, width: 390, height: 439, fill: '#fef3c7', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Top bar
      { id: '49-topbar', type: 'rect', x: 0, y: 0, width: 780, height: 50, fill: '#d97706', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Workshop title
      { id: '49-txt1', type: 'text', x: 20, y: 10, width: 350, height: 30, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'Design Thinking Workshop', fontSize: 22, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Timer display
      { id: '49-timer', type: 'rect', x: 660, y: 8, width: 100, height: 34, fill: '#92400e', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      { id: '49-txt2', type: 'text', x: 670, y: 14, width: 80, height: 24, rotation: 0, fill: '#fbbf24', stroke: 'transparent', strokeWidth: 0, text: '⏱ 15:00', fontSize: 18, fontFamily: 'Courier', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Exercise title on left
      { id: '49-txt3', type: 'text', x: 20, y: 70, width: 340, height: 28, rotation: 0, fill: '#92400e', stroke: 'transparent', strokeWidth: 0, text: 'Exercise: Empathy Mapping', fontSize: 20, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Step 1
      { id: '49-step1', type: 'circle', x: 20, y: 115, width: 24, height: 24, fill: '#f59e0b', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      { id: '49-txt4', type: 'text', x: 25, y: 118, width: 14, height: 18, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: '1', fontSize: 13, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      { id: '49-txt5', type: 'text', x: 55, y: 118, width: 300, height: 20, rotation: 0, fill: '#374151', stroke: 'transparent', strokeWidth: 0, text: 'Define your target user persona', fontSize: 14, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Step 2
      { id: '49-step2', type: 'circle', x: 20, y: 155, width: 24, height: 24, fill: '#f59e0b', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      { id: '49-txt6', type: 'text', x: 25, y: 158, width: 14, height: 18, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: '2', fontSize: 13, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      { id: '49-txt7', type: 'text', x: 55, y: 158, width: 300, height: 20, rotation: 0, fill: '#374151', stroke: 'transparent', strokeWidth: 0, text: 'List what they Think & Feel', fontSize: 14, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Step 3
      { id: '49-step3', type: 'circle', x: 20, y: 195, width: 24, height: 24, fill: '#f59e0b', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      { id: '49-txt8', type: 'text', x: 25, y: 198, width: 14, height: 18, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: '3', fontSize: 13, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      { id: '49-txt9', type: 'text', x: 55, y: 198, width: 300, height: 20, rotation: 0, fill: '#374151', stroke: 'transparent', strokeWidth: 0, text: 'Map their Pain Points & Gains', fontSize: 14, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Step 4
      { id: '49-step4', type: 'circle', x: 20, y: 235, width: 24, height: 24, fill: '#f59e0b', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      { id: '49-txt10', type: 'text', x: 25, y: 238, width: 14, height: 18, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: '4', fontSize: 13, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      { id: '49-txt11', type: 'text', x: 55, y: 238, width: 300, height: 20, rotation: 0, fill: '#374151', stroke: 'transparent', strokeWidth: 0, text: 'Share findings with your team', fontSize: 14, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Facilitator notes
      { id: '49-notes', type: 'rect', x: 20, y: 290, width: 340, height: 80, fill: '#fef9c3', stroke: '#fde68a', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '49-txt12', type: 'text', x: 35, y: 298, width: 200, height: 16, rotation: 0, fill: '#a16207', stroke: 'transparent', strokeWidth: 0, text: '📋 FACILITATOR NOTES', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '49-txt13', type: 'text', x: 35, y: 318, width: 310, height: 40, rotation: 0, fill: '#78350f', stroke: 'transparent', strokeWidth: 0, text: 'Encourage participants to use sticky notes. Allow 5 minutes per quadrant. Regroup for discussion.', fontSize: 11, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Workspace image on right
      { id: '49-img1', type: 'image', x: 410, y: 65, width: 340, height: 220, src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400', fill: 'transparent', stroke: '#fde68a', strokeWidth: 2, opacity: 0.9, visible: true, locked: false },
      // Workspace label
      { id: '49-txt14', type: 'text', x: 500, y: 300, width: 180, height: 22, rotation: 0, fill: '#92400e', stroke: 'transparent', strokeWidth: 0, text: 'YOUR WORKSPACE', fontSize: 14, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.6, visible: true, locked: true },
      // Footer
      { id: '49-footer', type: 'text', x: 20, y: 410, width: 350, height: 16, rotation: 0, fill: '#9ca3af', stroke: 'transparent', strokeWidth: 0, text: 'Workshop Series · Module 2 of 6 · Duration: 45 min', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.5, visible: true, locked: true },
    ]
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // POSTER TEMPLATES (8)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── ID 21: A4 Poster ───────────────────────────────────────────────────────
  // 2480×3508 → scale=min(780/2480, 560/3508)=min(0.315, 0.160)=0.160 → cW=397, cH=560
  {
    id: 21,
    name: 'A4 Poster',
    category: 'Posters',
    size: '2480×3508',
    premium: true,
    likes: 1567,
    views: 9870,
    gradient: 'linear-gradient(135deg, #fbbf24 0%, #d97706 100%)',
    elements: [
      // Background
      { id: '21-bg', type: 'rect', x: 0, y: 0, width: 397, height: 560, fill: '#1c1917', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Full-bleed image
      { id: '21-img1', type: 'image', x: 0, y: 0, width: 397, height: 350, src: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=1200', fill: 'transparent', stroke: 'transparent', strokeWidth: 0, opacity: 0.85, visible: true, locked: false },
      // Gradient overlay on image
      { id: '21-overlay', type: 'rect', x: 0, y: 250, width: 397, height: 100, fill: '#1c1917', stroke: 'transparent', strokeWidth: 0, opacity: 0.7, visible: true, locked: true },
      // Exhibition label
      { id: '21-txt1', type: 'text', x: 25, y: 30, width: 180, height: 16, rotation: 0, fill: '#fbbf24', stroke: 'transparent', strokeWidth: 0, text: 'ART EXHIBITION', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: true },
      // Large bold title
      { id: '21-txt2', type: 'text', x: 25, y: 360, width: 350, height: 50, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'ECHOES OF\nLIGHT', fontSize: 34, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Divider
      { id: '21-divider', type: 'line', x: 25, y: 420, width: 60, height: 3, fill: '#fbbf24', stroke: '#fbbf24', strokeWidth: 3, opacity: 1, visible: true, locked: true },
      // Artist name
      { id: '21-txt3', type: 'text', x: 25, y: 432, width: 300, height: 20, rotation: 0, fill: '#e2e8f0', stroke: 'transparent', strokeWidth: 0, text: 'By Marina Volkov', fontSize: 14, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Exhibition dates
      { id: '21-txt4', type: 'text', x: 25, y: 462, width: 300, height: 18, rotation: 0, fill: '#94a3b8', stroke: 'transparent', strokeWidth: 0, text: 'October 12 – November 30, 2026', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Venue
      { id: '21-txt5', type: 'text', x: 25, y: 485, width: 300, height: 18, rotation: 0, fill: '#94a3b8', stroke: 'transparent', strokeWidth: 0, text: 'The Modern Gallery · 42 Art Street, NYC', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // Ticket price
      { id: '21-price', type: 'rect', x: 280, y: 462, width: 90, height: 30, fill: '#fbbf24', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      { id: '21-txt6', type: 'text', x: 290, y: 466, width: 70, height: 22, rotation: 0, fill: '#1c1917', stroke: 'transparent', strokeWidth: 0, text: '$15 Entry', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Gallery logo placeholder
      { id: '21-logo', type: 'circle', x: 25, y: 520, width: 24, height: 24, fill: '#fbbf24', stroke: 'transparent', strokeWidth: 0, opacity: 0.8, visible: true, locked: false },
      { id: '21-txt7', type: 'text', x: 58, y: 524, width: 200, height: 16, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: 'THE MODERN GALLERY', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.6, visible: true, locked: true },
    ]
  },

  // ── ID 22: A3 Poster ───────────────────────────────────────────────────────
  // 3508×4961 → scale=min(780/3508, 560/4961)=0.113 → cW=396, cH=560
  {
    id: 22,
    name: 'A3 Poster',
    category: 'Posters',
    size: '3508×4961',
    premium: true,
    likes: 1230,
    views: 8400,
    gradient: 'linear-gradient(135deg, #e879f9 0%, #a21caf 100%)',
    elements: [
      // Gradient background
      { id: '22-bg', type: 'rect', x: 0, y: 0, width: 396, height: 560, fill: '#1e1b4b', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Abstract decorative shape 1
      { id: '22-shape1', type: 'circle', x: -40, y: -30, width: 200, height: 200, fill: '#7c3aed', stroke: 'transparent', strokeWidth: 0, opacity: 0.15, visible: true, locked: true },
      // Abstract decorative shape 2
      { id: '22-shape2', type: 'circle', x: 280, y: 380, width: 180, height: 180, fill: '#e879f9', stroke: 'transparent', strokeWidth: 0, opacity: 0.1, visible: true, locked: true },
      // Abstract decorative shape 3
      { id: '22-shape3', type: 'triangle', x: 300, y: 50, width: 80, height: 80, fill: '#a78bfa', stroke: 'transparent', strokeWidth: 0, opacity: 0.12, visible: true, locked: true },
      // Festival label
      { id: '22-txt1', type: 'text', x: 30, y: 40, width: 200, height: 16, rotation: 0, fill: '#e879f9', stroke: 'transparent', strokeWidth: 0, text: '★ SUMMER FESTIVAL 2026 ★', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: true },
      // Headliner name HUGE
      { id: '22-txt2', type: 'text', x: 20, y: 100, width: 360, height: 100, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'AURORA\nBOREALIS', fontSize: 48, fontFamily: 'Impact', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Divider
      { id: '22-div', type: 'line', x: 30, y: 210, width: 80, height: 3, fill: '#e879f9', stroke: '#e879f9', strokeWidth: 3, opacity: 0.8, visible: true, locked: true },
      // Supporting acts
      { id: '22-txt3', type: 'text', x: 30, y: 230, width: 340, height: 20, rotation: 0, fill: '#c4b5fd', stroke: 'transparent', strokeWidth: 0, text: 'NOVA DRIFT · LUNA PHASE · THE ECHOES', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '22-txt4', type: 'text', x: 30, y: 255, width: 340, height: 20, rotation: 0, fill: '#a78bfa', stroke: 'transparent', strokeWidth: 0, text: 'MIDNIGHT SUN · CRYSTAL VEIL · DJ PRISM', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // Image
      { id: '22-img1', type: 'image', x: 30, y: 295, width: 336, height: 120, src: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200', fill: 'transparent', stroke: '#a78bfa', strokeWidth: 1, opacity: 0.6, visible: true, locked: false },
      // Date / venue
      { id: '22-txt5', type: 'text', x: 30, y: 435, width: 340, height: 22, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'AUGUST 15-17 · RIVERSIDE AMPHITHEATER', fontSize: 13, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Ticket tiers
      { id: '22-tier1', type: 'rect', x: 30, y: 470, width: 100, height: 36, fill: '#7c3aed', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      { id: '22-txt6', type: 'text', x: 35, y: 473, width: 90, height: 12, rotation: 0, fill: '#e9d5ff', stroke: 'transparent', strokeWidth: 0, text: 'GENERAL', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      { id: '22-txt7', type: 'text', x: 35, y: 487, width: 90, height: 16, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: '$89', fontSize: 14, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '22-tier2', type: 'rect', x: 148, y: 470, width: 100, height: 36, fill: '#a21caf', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      { id: '22-txt8', type: 'text', x: 153, y: 473, width: 90, height: 12, rotation: 0, fill: '#f5d0fe', stroke: 'transparent', strokeWidth: 0, text: 'VIP', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      { id: '22-txt9', type: 'text', x: 153, y: 487, width: 90, height: 16, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: '$189', fontSize: 14, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '22-tier3', type: 'rect', x: 266, y: 470, width: 100, height: 36, fill: '#fbbf24', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      { id: '22-txt10', type: 'text', x: 271, y: 473, width: 90, height: 12, rotation: 0, fill: '#78350f', stroke: 'transparent', strokeWidth: 0, text: 'PLATINUM', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      { id: '22-txt11', type: 'text', x: 271, y: 487, width: 90, height: 16, rotation: 0, fill: '#1c1917', stroke: 'transparent', strokeWidth: 0, text: '$349', fontSize: 14, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Footer
      { id: '22-txt12', type: 'text', x: 30, y: 530, width: 340, height: 16, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: 'summerfest2026.com · #SummerFest26', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.5, visible: true, locked: true },
    ]
  },

  // ── ID 23: Movie Poster ────────────────────────────────────────────────────
  // 2400×3600 → scale=min(780/2400, 560/3600)=min(0.325, 0.156)=0.156 → cW=373, cH=560
  {
    id: 23,
    name: 'Movie Poster',
    category: 'Posters',
    size: '2400×3600',
    premium: true,
    likes: 5890,
    views: 39200,
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #4c1d95 100%)',
    elements: [
      // Dark background
      { id: '23-bg', type: 'rect', x: 0, y: 0, width: 373, height: 560, fill: '#0a0a0f', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Dark moody image (full bleed)
      { id: '23-img1', type: 'image', x: 0, y: 0, width: 373, height: 400, src: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1200', fill: 'transparent', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: false },
      // Gradient overlay for text readability
      { id: '23-overlay', type: 'rect', x: 0, y: 300, width: 373, height: 260, fill: '#0a0a0f', stroke: 'transparent', strokeWidth: 0, opacity: 0.85, visible: true, locked: true },
      // Top rating badge
      { id: '23-badge', type: 'rect', x: 20, y: 20, width: 40, height: 22, fill: '#dc2626', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      { id: '23-txt1', type: 'text', x: 24, y: 23, width: 32, height: 16, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'R', fontSize: 13, fontFamily: 'Impact', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      // Tagline
      { id: '23-txt2', type: 'text', x: 25, y: 340, width: 330, height: 20, rotation: 0, fill: '#94a3b8', stroke: 'transparent', strokeWidth: 0, text: 'Some truths are better left buried.', fontSize: 12, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Movie title dramatic
      { id: '23-txt3', type: 'text', x: 25, y: 365, width: 330, height: 60, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'SHADOW\nPROTOCOL', fontSize: 40, fontFamily: 'Impact', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Cast names
      { id: '23-txt4', type: 'text', x: 25, y: 440, width: 330, height: 16, rotation: 0, fill: '#e2e8f0', stroke: 'transparent', strokeWidth: 0, text: 'JAMES HARLOW · ELENA VASQUEZ · NOAH CHEN', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Divider
      { id: '23-line', type: 'line', x: 25, y: 465, width: 325, height: 1, fill: '#334155', stroke: '#334155', strokeWidth: 1, opacity: 0.4, visible: true, locked: true },
      // Director credit
      { id: '23-txt5', type: 'text', x: 25, y: 475, width: 200, height: 14, rotation: 0, fill: '#94a3b8', stroke: 'transparent', strokeWidth: 0, text: 'A FILM BY CHRISTOPHER VANCE', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // Release date
      { id: '23-txt6', type: 'text', x: 25, y: 500, width: 200, height: 24, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'DECEMBER 2026', fontSize: 16, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Production logos placeholders
      { id: '23-prod1', type: 'rect', x: 25, y: 535, width: 50, height: 14, fill: '#334155', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: true },
      { id: '23-prod2', type: 'rect', x: 85, y: 535, width: 50, height: 14, fill: '#334155', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: true },
      { id: '23-prod3', type: 'rect', x: 145, y: 535, width: 50, height: 14, fill: '#334155', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: true },
      // IMAX badge
      { id: '23-imax', type: 'rect', x: 300, y: 500, width: 50, height: 24, fill: 'transparent', stroke: '#818cf8', strokeWidth: 1, opacity: 0.8, visible: true, locked: true },
      { id: '23-txt7', type: 'text', x: 305, y: 504, width: 40, height: 16, rotation: 0, fill: '#818cf8', stroke: 'transparent', strokeWidth: 0, text: 'IMAX', fontSize: 11, fontFamily: 'Impact', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.8, visible: true, locked: true },
    ]
  },

  // ── ID 24: Event Flyer ─────────────────────────────────────────────────────
  // 1240×1748 → scale=min(780/1240, 560/1748)=min(0.629, 0.320)=0.320 → cW=397, cH=559
  {
    id: 24,
    name: 'Event Flyer',
    category: 'Posters',
    size: '1240×1748',
    premium: false,
    likes: 980,
    views: 6400,
    gradient: 'linear-gradient(135deg, #5eead4 0%, #0d9488 100%)',
    elements: [
      // Bright background
      { id: '24-bg', type: 'rect', x: 0, y: 0, width: 397, height: 559, fill: '#f0fdfa', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Top color block
      { id: '24-top', type: 'rect', x: 0, y: 0, width: 397, height: 200, fill: '#0d9488', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Featured image
      { id: '24-img1', type: 'image', x: 30, y: 50, width: 337, height: 180, src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1200', fill: 'transparent', stroke: '#ffffff', strokeWidth: 3, opacity: 1, visible: true, locked: false },
      // Event name
      { id: '24-txt1', type: 'text', x: 30, y: 248, width: 340, height: 40, rotation: 0, fill: '#0f766e', stroke: 'transparent', strokeWidth: 0, text: 'COMMUNITY\nSUMMER FEST', fontSize: 28, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Accent divider
      { id: '24-div', type: 'line', x: 30, y: 296, width: 50, height: 3, fill: '#14b8a6', stroke: '#14b8a6', strokeWidth: 3, opacity: 1, visible: true, locked: true },
      // Date/time/location
      { id: '24-txt2', type: 'text', x: 30, y: 310, width: 340, height: 18, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: '📅 Saturday, July 20, 2026 · 10:00 AM – 8:00 PM', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '24-txt3', type: 'text', x: 30, y: 332, width: 340, height: 16, rotation: 0, fill: '#475569', stroke: 'transparent', strokeWidth: 0, text: '📍 Central Park Pavilion, 123 Main Street', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Description
      { id: '24-txt4', type: 'text', x: 30, y: 365, width: 340, height: 50, rotation: 0, fill: '#374151', stroke: 'transparent', strokeWidth: 0, text: 'Join us for a day of live music, food trucks, kids activities, craft vendors, and community fun! Free entry for all ages.', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // RSVP box
      { id: '24-rsvp', type: 'rect', x: 30, y: 430, width: 200, height: 36, fill: '#0d9488', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      { id: '24-txt5', type: 'text', x: 55, y: 436, width: 150, height: 24, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'RSVP TODAY →', fontSize: 14, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // QR code placeholder
      { id: '24-qr', type: 'rect', x: 310, y: 430, width: 56, height: 56, fill: '#1e293b', stroke: '#e2e8f0', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '24-txt6', type: 'text', x: 322, y: 448, width: 32, height: 14, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'QR', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // Organizer logo
      { id: '24-logo', type: 'circle', x: 30, y: 510, width: 24, height: 24, fill: '#0d9488', stroke: 'transparent', strokeWidth: 0, opacity: 0.7, visible: true, locked: false },
      { id: '24-txt7', type: 'text', x: 62, y: 514, width: 200, height: 16, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Organized by Community First', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.6, visible: true, locked: true },
    ]
  },

  // ── ID 25: Concert Flyer ───────────────────────────────────────────────────
  // 1240×1748 → cW=397, cH=559
  {
    id: 25,
    name: 'Concert Flyer',
    category: 'Posters',
    size: '1240×1748',
    premium: false,
    likes: 2310,
    views: 16800,
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #881337 100%)',
    elements: [
      // Dark dramatic background
      { id: '25-bg', type: 'rect', x: 0, y: 0, width: 397, height: 559, fill: '#0f0f14', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Abstract graphic element
      { id: '25-gfx1', type: 'circle', x: 150, y: -50, width: 250, height: 250, fill: '#be123c', stroke: 'transparent', strokeWidth: 0, opacity: 0.08, visible: true, locked: true },
      { id: '25-gfx2', type: 'triangle', x: 10, y: 350, width: 120, height: 120, fill: '#f43f5e', stroke: 'transparent', strokeWidth: 0, opacity: 0.06, visible: true, locked: true },
      // Venue label
      { id: '25-txt1', type: 'text', x: 30, y: 30, width: 340, height: 16, rotation: 0, fill: '#f43f5e', stroke: 'transparent', strokeWidth: 0, text: 'ELECTRIC UNDERGROUND PRESENTS', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: true },
      // Background image
      { id: '25-img1', type: 'image', x: 30, y: 55, width: 337, height: 160, src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200', fill: 'transparent', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: false },
      // Band/artist name HUGE
      { id: '25-txt2', type: 'text', x: 20, y: 230, width: 360, height: 90, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'NEON\nPULSE', fontSize: 52, fontFamily: 'Impact', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Accent line
      { id: '25-line', type: 'line', x: 25, y: 330, width: 60, height: 3, fill: '#f43f5e', stroke: '#f43f5e', strokeWidth: 3, opacity: 1, visible: true, locked: true },
      // Supporting acts
      { id: '25-txt3', type: 'text', x: 25, y: 345, width: 340, height: 18, rotation: 0, fill: '#fda4af', stroke: 'transparent', strokeWidth: 0, text: 'with STATIC VOID · CHROME HEARTS', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Venue + Date
      { id: '25-txt4', type: 'text', x: 25, y: 385, width: 340, height: 22, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'THE WAREHOUSE · FRI AUG 22', fontSize: 16, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '25-txt5', type: 'text', x: 25, y: 410, width: 200, height: 16, rotation: 0, fill: '#94a3b8', stroke: 'transparent', strokeWidth: 0, text: 'Doors 8 PM · Show 9 PM', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // Ticket price
      { id: '25-price', type: 'rect', x: 25, y: 445, width: 120, height: 36, fill: '#f43f5e', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      { id: '25-txt6', type: 'text', x: 35, y: 450, width: 100, height: 24, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'TICKETS $35', fontSize: 14, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Age restriction badge
      { id: '25-age', type: 'rect', x: 310, y: 450, width: 56, height: 26, fill: 'transparent', stroke: '#f43f5e', strokeWidth: 2, opacity: 0.8, visible: true, locked: true },
      { id: '25-txt7', type: 'text', x: 322, y: 453, width: 32, height: 20, rotation: 0, fill: '#f43f5e', stroke: 'transparent', strokeWidth: 0, text: '18+', fontSize: 14, fontFamily: 'Impact', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      // Footer
      { id: '25-txt8', type: 'text', x: 25, y: 520, width: 340, height: 16, rotation: 0, fill: '#475569', stroke: 'transparent', strokeWidth: 0, text: 'neonpulse.live · @neonpulseband', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.5, visible: true, locked: true },
    ]
  },

  // ── ID 26: Sale Flyer ──────────────────────────────────────────────────────
  // 1240×1748 → cW=397, cH=559
  {
    id: 26,
    name: 'Sale Flyer',
    category: 'Posters',
    size: '1240×1748',
    premium: false,
    likes: 1780,
    views: 12300,
    gradient: 'linear-gradient(135deg, #facc15 0%, #ea580c 100%)',
    elements: [
      // Bold background
      { id: '26-bg', type: 'rect', x: 0, y: 0, width: 397, height: 559, fill: '#fef9c3', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Top accent block
      { id: '26-top', type: 'rect', x: 0, y: 0, width: 397, height: 70, fill: '#dc2626', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Store name
      { id: '26-txt1', type: 'text', x: 30, y: 15, width: 200, height: 22, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'URBAN STYLE CO.', fontSize: 14, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Bold SALE text
      { id: '26-txt2', type: 'text', x: 30, y: 40, width: 200, height: 28, rotation: 0, fill: '#fef08a', stroke: 'transparent', strokeWidth: 0, text: 'MEGA SALE', fontSize: 20, fontFamily: 'Impact', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      // Discount percentage HUGE
      { id: '26-txt3', type: 'text', x: 30, y: 90, width: 340, height: 120, rotation: 0, fill: '#dc2626', stroke: 'transparent', strokeWidth: 0, text: '70%\nOFF', fontSize: 72, fontFamily: 'Impact', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Product image
      { id: '26-img1', type: 'image', x: 30, y: 230, width: 337, height: 160, src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200', fill: 'transparent', stroke: '#dc2626', strokeWidth: 2, opacity: 1, visible: true, locked: false },
      // Original price
      { id: '26-txt4', type: 'text', x: 30, y: 405, width: 150, height: 22, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Was: $199.99', fontSize: 14, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'line-through', opacity: 0.7, visible: true, locked: false },
      // Sale price
      { id: '26-txt5', type: 'text', x: 30, y: 428, width: 200, height: 36, rotation: 0, fill: '#dc2626', stroke: 'transparent', strokeWidth: 0, text: 'NOW: $59.99', fontSize: 28, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Valid dates
      { id: '26-txt6', type: 'text', x: 30, y: 475, width: 340, height: 18, rotation: 0, fill: '#78350f', stroke: 'transparent', strokeWidth: 0, text: 'Valid: June 1 – June 30, 2026', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Star shapes for visual flair
      { id: '26-star1', type: 'star', x: 310, y: 85, width: 60, height: 60, fill: '#facc15', stroke: 'transparent', strokeWidth: 0, opacity: 0.4, visible: true, locked: true },
      { id: '26-star2', type: 'star', x: 340, y: 140, width: 30, height: 30, fill: '#fbbf24', stroke: 'transparent', strokeWidth: 0, opacity: 0.3, visible: true, locked: true },
      // Terms text
      { id: '26-txt7', type: 'text', x: 30, y: 505, width: 340, height: 30, rotation: 0, fill: '#9ca3af', stroke: 'transparent', strokeWidth: 0, text: '*Terms apply. While stocks last. Cannot combine with other offers.\nIn-store and online. Visit urbanstyle.com', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.5, visible: true, locked: true },
      // Bottom accent
      { id: '26-bottom', type: 'rect', x: 0, y: 545, width: 397, height: 14, fill: '#dc2626', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
    ]
  },

  // ── ID 27: Menu Design ─────────────────────────────────────────────────────
  // 2480×3508 → cW=397, cH=560
  {
    id: 27,
    name: 'Menu Design',
    category: 'Posters',
    size: '2480×3508',
    premium: true,
    likes: 1450,
    views: 9100,
    gradient: 'linear-gradient(135deg, #92400e 0%, #78350f 100%)',
    elements: [
      // Elegant background
      { id: '27-bg', type: 'rect', x: 0, y: 0, width: 397, height: 560, fill: '#fdf6e3', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Border
      { id: '27-border', type: 'rect', x: 12, y: 12, width: 373, height: 536, fill: 'transparent', stroke: '#92400e', strokeWidth: 1, opacity: 0.3, visible: true, locked: true },
      // Restaurant logo placeholder
      { id: '27-logo', type: 'circle', x: 170, y: 20, width: 56, height: 56, fill: '#92400e', stroke: '#fbbf24', strokeWidth: 2, opacity: 1, visible: true, locked: false },
      // Restaurant name
      { id: '27-txt1', type: 'text', x: 60, y: 85, width: 280, height: 30, rotation: 0, fill: '#78350f', stroke: 'transparent', strokeWidth: 0, text: 'LA MAISON', fontSize: 26, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Subtitle
      { id: '27-txt2', type: 'text', x: 100, y: 115, width: 200, height: 16, rotation: 0, fill: '#a16207', stroke: 'transparent', strokeWidth: 0, text: 'FINE DINING · EST. 1998', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.6, visible: true, locked: true },
      // Divider ornament
      { id: '27-div1', type: 'line', x: 140, y: 140, width: 120, height: 1, fill: '#92400e', stroke: '#92400e', strokeWidth: 1, opacity: 0.4, visible: true, locked: true },
      // STARTERS section
      { id: '27-txt3', type: 'text', x: 30, y: 158, width: 340, height: 18, rotation: 0, fill: '#92400e', stroke: 'transparent', strokeWidth: 0, text: 'STARTERS', fontSize: 13, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '27-txt4', type: 'text', x: 30, y: 180, width: 280, height: 14, rotation: 0, fill: '#44403c', stroke: 'transparent', strokeWidth: 0, text: 'French Onion Soup', fontSize: 10, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '27-price1', type: 'text', x: 330, y: 180, width: 40, height: 14, rotation: 0, fill: '#92400e', stroke: 'transparent', strokeWidth: 0, text: '$14', fontSize: 10, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '27-txt5', type: 'text', x: 30, y: 198, width: 280, height: 14, rotation: 0, fill: '#44403c', stroke: 'transparent', strokeWidth: 0, text: 'Truffle Arancini', fontSize: 10, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '27-price2', type: 'text', x: 330, y: 198, width: 40, height: 14, rotation: 0, fill: '#92400e', stroke: 'transparent', strokeWidth: 0, text: '$18', fontSize: 10, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '27-txt6', type: 'text', x: 30, y: 216, width: 280, height: 14, rotation: 0, fill: '#44403c', stroke: 'transparent', strokeWidth: 0, text: 'Burrata & Heirloom Tomatoes', fontSize: 10, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '27-price3', type: 'text', x: 330, y: 216, width: 40, height: 14, rotation: 0, fill: '#92400e', stroke: 'transparent', strokeWidth: 0, text: '$16', fontSize: 10, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Divider
      { id: '27-div2', type: 'line', x: 100, y: 240, width: 200, height: 1, fill: '#d6d3d1', stroke: '#d6d3d1', strokeWidth: 1, opacity: 0.4, visible: true, locked: true },
      // MAINS section
      { id: '27-txt7', type: 'text', x: 30, y: 255, width: 340, height: 18, rotation: 0, fill: '#92400e', stroke: 'transparent', strokeWidth: 0, text: 'MAINS', fontSize: 13, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '27-txt8', type: 'text', x: 30, y: 277, width: 280, height: 14, rotation: 0, fill: '#44403c', stroke: 'transparent', strokeWidth: 0, text: 'Pan-Seared Salmon', fontSize: 10, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '27-price4', type: 'text', x: 330, y: 277, width: 40, height: 14, rotation: 0, fill: '#92400e', stroke: 'transparent', strokeWidth: 0, text: '$32', fontSize: 10, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '27-txt9', type: 'text', x: 30, y: 295, width: 280, height: 14, rotation: 0, fill: '#44403c', stroke: 'transparent', strokeWidth: 0, text: 'Wagyu Beef Tenderloin', fontSize: 10, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '27-price5', type: 'text', x: 330, y: 295, width: 40, height: 14, rotation: 0, fill: '#92400e', stroke: 'transparent', strokeWidth: 0, text: '$48', fontSize: 10, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '27-txt10', type: 'text', x: 30, y: 313, width: 280, height: 14, rotation: 0, fill: '#44403c', stroke: 'transparent', strokeWidth: 0, text: 'Lobster Risotto', fontSize: 10, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '27-price6', type: 'text', x: 330, y: 313, width: 40, height: 14, rotation: 0, fill: '#92400e', stroke: 'transparent', strokeWidth: 0, text: '$42', fontSize: 10, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Divider
      { id: '27-div3', type: 'line', x: 100, y: 338, width: 200, height: 1, fill: '#d6d3d1', stroke: '#d6d3d1', strokeWidth: 1, opacity: 0.4, visible: true, locked: true },
      // DESSERTS section
      { id: '27-txt11', type: 'text', x: 30, y: 353, width: 340, height: 18, rotation: 0, fill: '#92400e', stroke: 'transparent', strokeWidth: 0, text: 'DESSERTS', fontSize: 13, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '27-txt12', type: 'text', x: 30, y: 375, width: 280, height: 14, rotation: 0, fill: '#44403c', stroke: 'transparent', strokeWidth: 0, text: 'Crème Brûlée', fontSize: 10, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '27-price7', type: 'text', x: 330, y: 375, width: 40, height: 14, rotation: 0, fill: '#92400e', stroke: 'transparent', strokeWidth: 0, text: '$12', fontSize: 10, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '27-txt13', type: 'text', x: 30, y: 393, width: 280, height: 14, rotation: 0, fill: '#44403c', stroke: 'transparent', strokeWidth: 0, text: 'Chocolate Lava Cake', fontSize: 10, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '27-price8', type: 'text', x: 330, y: 393, width: 40, height: 14, rotation: 0, fill: '#92400e', stroke: 'transparent', strokeWidth: 0, text: '$14', fontSize: 10, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Food image
      { id: '27-img1', type: 'image', x: 100, y: 425, width: 200, height: 80, src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200', fill: 'transparent', stroke: '#92400e', strokeWidth: 1, opacity: 0.8, visible: true, locked: false },
      // Footer
      { id: '27-txt14', type: 'text', x: 80, y: 525, width: 240, height: 24, rotation: 0, fill: '#a16207', stroke: 'transparent', strokeWidth: 0, text: 'Reservations: (555) 012-3456\nlamaison-dining.com', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.5, visible: true, locked: true },
    ]
  },

  // ── ID 28: Real Estate Flyer ───────────────────────────────────────────────
  // 1240×1748 → cW=397, cH=559
  {
    id: 28,
    name: 'Real Estate Flyer',
    category: 'Posters',
    size: '1240×1748',
    premium: false,
    likes: 1620,
    views: 11400,
    gradient: 'linear-gradient(135deg, #0369a1 0%, #075985 100%)',
    elements: [
      // Background
      { id: '28-bg', type: 'rect', x: 0, y: 0, width: 397, height: 559, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Property image top half
      { id: '28-img1', type: 'image', x: 0, y: 0, width: 397, height: 250, src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200', fill: 'transparent', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // FOR SALE badge
      { id: '28-badge', type: 'rect', x: 20, y: 20, width: 80, height: 28, fill: '#0369a1', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      { id: '28-txt1', type: 'text', x: 27, y: 24, width: 66, height: 20, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'FOR SALE', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      // Price tag
      { id: '28-pricebg', type: 'rect', x: 0, y: 220, width: 200, height: 40, fill: '#0369a1', stroke: 'transparent', strokeWidth: 0, opacity: 0.95, visible: true, locked: false },
      { id: '28-txt2', type: 'text', x: 15, y: 225, width: 175, height: 30, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: '$875,000', fontSize: 26, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Bed/Bath/SqFt stats
      { id: '28-stat1', type: 'rect', x: 20, y: 275, width: 105, height: 55, fill: '#f0f9ff', stroke: '#bae6fd', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '28-txt3', type: 'text', x: 35, y: 280, width: 80, height: 24, rotation: 0, fill: '#0369a1', stroke: 'transparent', strokeWidth: 0, text: '4', fontSize: 22, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '28-txt4', type: 'text', x: 35, y: 305, width: 80, height: 14, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: 'Bedrooms', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      { id: '28-stat2', type: 'rect', x: 145, y: 275, width: 105, height: 55, fill: '#f0f9ff', stroke: '#bae6fd', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '28-txt5', type: 'text', x: 160, y: 280, width: 80, height: 24, rotation: 0, fill: '#0369a1', stroke: 'transparent', strokeWidth: 0, text: '3', fontSize: 22, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '28-txt6', type: 'text', x: 160, y: 305, width: 80, height: 14, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: 'Bathrooms', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      { id: '28-stat3', type: 'rect', x: 270, y: 275, width: 105, height: 55, fill: '#f0f9ff', stroke: '#bae6fd', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '28-txt7', type: 'text', x: 285, y: 280, width: 80, height: 24, rotation: 0, fill: '#0369a1', stroke: 'transparent', strokeWidth: 0, text: '2,800', fontSize: 18, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '28-txt8', type: 'text', x: 285, y: 305, width: 80, height: 14, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: 'Sq Ft', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Description
      { id: '28-txt9', type: 'text', x: 20, y: 350, width: 357, height: 60, rotation: 0, fill: '#374151', stroke: 'transparent', strokeWidth: 0, text: 'Stunning modern home in a quiet neighborhood. Open floor plan with gourmet kitchen, hardwood floors, and a spacious backyard with pool. Minutes from top-rated schools.', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Address
      { id: '28-txt10', type: 'text', x: 20, y: 420, width: 357, height: 16, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: '📍 742 Evergreen Terrace, Springfield, IL 62704', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Divider
      { id: '28-div', type: 'line', x: 20, y: 450, width: 357, height: 1, fill: '#e2e8f0', stroke: '#e2e8f0', strokeWidth: 1, opacity: 0.6, visible: true, locked: true },
      // Agent info
      { id: '28-agent', type: 'circle', x: 20, y: 465, width: 44, height: 44, fill: '#0369a1', stroke: '#bae6fd', strokeWidth: 2, opacity: 1, visible: true, locked: false },
      { id: '28-txt11', type: 'text', x: 78, y: 468, width: 200, height: 18, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: 'Jennifer Reynolds', fontSize: 13, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '28-txt12', type: 'text', x: 78, y: 488, width: 200, height: 14, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: 'Licensed Realtor · DRE# 01234567', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // Agency logo
      { id: '28-logo', type: 'rect', x: 20, y: 520, width: 80, height: 24, fill: '#0369a1', stroke: 'transparent', strokeWidth: 0, opacity: 0.8, visible: true, locked: false },
      { id: '28-txt13', type: 'text', x: 25, y: 524, width: 70, height: 16, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'PRIME RE', fontSize: 10, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Contact number
      { id: '28-txt14', type: 'text', x: 230, y: 524, width: 150, height: 16, rotation: 0, fill: '#0369a1', stroke: 'transparent', strokeWidth: 0, text: '📞 (555) 987-6543', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
    ]
  },

];
