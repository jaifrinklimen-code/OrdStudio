// ─── Business, Resume & Invitation Template Elements ─────────────────────────
// 17 templates with rich, Canva-quality element data
// Canvas dimensions pre-calculated from design size → maxW=780, maxH=560

export const bizResumeInvTemplates = [

  // ══════════════════════════════════════════════════════════════════════════════
  // BUSINESS TEMPLATES (4)
  // ══════════════════════════════════════════════════════════════════════════════

  // ── 30: Vertical Card ── 600×1050 → cW=320, cH=560
  {
    id: 30,
    name: 'Vertical Card',
    category: 'Business',
    size: '600×1050',
    premium: false,
    likes: 1350,
    views: 8900,
    gradient: 'linear-gradient(135deg, #2dd4bf 0%, #0f766e 100%)',
    elements: [
      // Background – dark charcoal gradient
      { id: '30-bg', type: 'rect', x: 0, y: 0, width: 320, height: 560, fill: '#0f1419', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Teal accent strip (top)
      { id: '30-accent1', type: 'rect', x: 0, y: 0, width: 320, height: 6, fill: '#2dd4bf', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Profile image area
      { id: '30-img1', type: 'image', x: 110, y: 40, width: 100, height: 100, src: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=300', fill: 'transparent', stroke: '#2dd4bf', strokeWidth: 2, opacity: 1, visible: true, locked: false },
      // Name
      { id: '30-txt1', type: 'text', x: 30, y: 160, width: 260, height: 40, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'ALEXANDER REID', fontSize: 22, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Job title
      { id: '30-txt2', type: 'text', x: 30, y: 200, width: 260, height: 24, rotation: 0, fill: '#2dd4bf', stroke: 'transparent', strokeWidth: 0, text: 'Senior Product Designer', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Divider line
      { id: '30-line1', type: 'line', x: 30, y: 240, width: 60, height: 2, fill: '#2dd4bf', stroke: '#2dd4bf', strokeWidth: 2, opacity: 0.6, visible: true, locked: true },
      // Company name
      { id: '30-txt3', type: 'text', x: 30, y: 260, width: 260, height: 22, rotation: 0, fill: '#94a3b8', stroke: 'transparent', strokeWidth: 0, text: 'VERTEX DESIGN STUDIO', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Contact section header
      { id: '30-txt4', type: 'text', x: 30, y: 320, width: 260, height: 18, rotation: 0, fill: '#2dd4bf', stroke: 'transparent', strokeWidth: 0, text: 'CONTACT', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.7, visible: true, locked: true },
      // Email
      { id: '30-txt5', type: 'text', x: 30, y: 345, width: 260, height: 18, rotation: 0, fill: '#cbd5e1', stroke: 'transparent', strokeWidth: 0, text: 'alex.reid@vertexstudio.com', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Phone
      { id: '30-txt6', type: 'text', x: 30, y: 368, width: 260, height: 18, rotation: 0, fill: '#cbd5e1', stroke: 'transparent', strokeWidth: 0, text: '+1 (555) 234-8901', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Website
      { id: '30-txt7', type: 'text', x: 30, y: 391, width: 260, height: 18, rotation: 0, fill: '#cbd5e1', stroke: 'transparent', strokeWidth: 0, text: 'www.vertexstudio.com', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // QR code placeholder rect
      { id: '30-qr', type: 'rect', x: 230, y: 470, width: 60, height: 60, fill: '#1e293b', stroke: '#2dd4bf', strokeWidth: 1, opacity: 0.8, visible: true, locked: false },
      // QR label
      { id: '30-txt8', type: 'text', x: 235, y: 535, width: 55, height: 14, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: 'SCAN ME', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.6, visible: true, locked: true },
      // Bottom accent strip
      { id: '30-accent2', type: 'rect', x: 0, y: 554, width: 320, height: 6, fill: '#2dd4bf', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
    ]
  },

  // ── 31: Square Card ── 800×800 → cW=560, cH=560
  {
    id: 31,
    name: 'Square Card',
    category: 'Business',
    size: '800×800',
    premium: true,
    likes: 1120,
    views: 7200,
    gradient: 'linear-gradient(135deg, #f9a8d4 0%, #be185d 100%)',
    elements: [
      // Background – white base
      { id: '31-bg', type: 'rect', x: 0, y: 0, width: 560, height: 560, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Diagonal split – bottom right triangle area (simulated with rect)
      { id: '31-diag', type: 'rect', x: 280, y: 280, width: 280, height: 280, fill: '#be185d', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Top accent triangle
      { id: '31-tri1', type: 'triangle', x: 280, y: 0, width: 280, height: 280, fill: '#fce7f3', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: true },
      // Abstract image
      { id: '31-img1', type: 'image', x: 340, y: 30, width: 190, height: 190, src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=300', fill: 'transparent', stroke: 'transparent', strokeWidth: 0, opacity: 0.4, visible: true, locked: false },
      // Name – large
      { id: '31-txt1', type: 'text', x: 35, y: 60, width: 250, height: 50, rotation: 0, fill: '#1e1e1e', stroke: 'transparent', strokeWidth: 0, text: 'MAYA', fontSize: 42, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Last name
      { id: '31-txt2', type: 'text', x: 35, y: 105, width: 250, height: 40, rotation: 0, fill: '#be185d', stroke: 'transparent', strokeWidth: 0, text: 'JOHNSON', fontSize: 36, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Title
      { id: '31-txt3', type: 'text', x: 35, y: 155, width: 250, height: 22, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Creative Director & Brand Strategist', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Divider
      { id: '31-line1', type: 'line', x: 35, y: 195, width: 80, height: 2, fill: '#be185d', stroke: '#be185d', strokeWidth: 2, opacity: 0.7, visible: true, locked: true },
      // Contact details
      { id: '31-txt4', type: 'text', x: 35, y: 215, width: 220, height: 18, rotation: 0, fill: '#374151', stroke: 'transparent', strokeWidth: 0, text: 'maya@brandcraft.co', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      { id: '31-txt5', type: 'text', x: 35, y: 238, width: 220, height: 18, rotation: 0, fill: '#374151', stroke: 'transparent', strokeWidth: 0, text: '+1 (555) 876-4321', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      { id: '31-txt6', type: 'text', x: 35, y: 261, width: 220, height: 18, rotation: 0, fill: '#374151', stroke: 'transparent', strokeWidth: 0, text: 'www.brandcraft.co', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Social icons placeholders (circles)
      { id: '31-social1', type: 'circle', x: 35, y: 310, width: 28, height: 28, fill: '#be185d', stroke: 'transparent', strokeWidth: 0, opacity: 0.8, visible: true, locked: false },
      { id: '31-social2', type: 'circle', x: 72, y: 310, width: 28, height: 28, fill: '#be185d', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: false },
      { id: '31-social3', type: 'circle', x: 109, y: 310, width: 28, height: 28, fill: '#be185d', stroke: 'transparent', strokeWidth: 0, opacity: 0.4, visible: true, locked: false },
      // Bottom brand text
      { id: '31-txt7', type: 'text', x: 310, y: 520, width: 220, height: 20, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'BRANDCRAFT STUDIO', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.7, visible: true, locked: true },
    ]
  },

  // ── 33: Wordmark Logo ── 1200×400 → cW=780, cH=260
  {
    id: 33,
    name: 'Wordmark Logo',
    category: 'Business',
    size: '1200×400',
    premium: true,
    likes: 2780,
    views: 19800,
    gradient: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
    elements: [
      // Background – clean dark
      { id: '33-bg', type: 'rect', x: 0, y: 0, width: 780, height: 260, fill: '#0f172a', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Subtle grid dots (decorative rect pattern)
      { id: '33-deco1', type: 'rect', x: 0, y: 0, width: 780, height: 260, fill: 'transparent', stroke: 'rgba(255,255,255,0.03)', strokeWidth: 1, opacity: 0.4, visible: true, locked: true },
      // Icon element – abstract circle
      { id: '33-icon1', type: 'circle', x: 260, y: 60, width: 40, height: 40, fill: '#3b82f6', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // Icon inner dot
      { id: '33-icon2', type: 'circle', x: 272, y: 72, width: 16, height: 16, fill: '#0f172a', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      // Brand name – main wordmark
      { id: '33-txt1', type: 'text', x: 180, y: 80, width: 420, height: 70, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'NEXUS LABS', fontSize: 52, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Decorative underline accent
      { id: '33-line1', type: 'line', x: 310, y: 155, width: 160, height: 3, fill: '#3b82f6', stroke: '#3b82f6', strokeWidth: 3, opacity: 0.9, visible: true, locked: true },
      // Tagline
      { id: '33-txt2', type: 'text', x: 260, y: 170, width: 260, height: 24, rotation: 0, fill: '#94a3b8', stroke: 'transparent', strokeWidth: 0, text: 'INNOVATE · BUILD · SCALE', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // Decorative star left
      { id: '33-star1', type: 'star', x: 40, y: 110, width: 18, height: 18, fill: '#3b82f6', stroke: 'transparent', strokeWidth: 0, opacity: 0.3, visible: true, locked: true },
      // Decorative star right
      { id: '33-star2', type: 'star', x: 722, y: 110, width: 18, height: 18, fill: '#3b82f6', stroke: 'transparent', strokeWidth: 0, opacity: 0.3, visible: true, locked: true },
      // Corner accent top-left
      { id: '33-corner1', type: 'rect', x: 20, y: 20, width: 30, height: 2, fill: '#334155', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: true },
      { id: '33-corner2', type: 'rect', x: 20, y: 20, width: 2, height: 30, fill: '#334155', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: true },
      // Corner accent bottom-right
      { id: '33-corner3', type: 'rect', x: 730, y: 238, width: 30, height: 2, fill: '#334155', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: true },
      { id: '33-corner4', type: 'rect', x: 758, y: 208, width: 2, height: 30, fill: '#334155', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: true },
    ]
  },

  // ── 34: Brand Badge ── 800×800 → cW=560, cH=560
  {
    id: 34,
    name: 'Brand Badge',
    category: 'Business',
    size: '800×800',
    premium: false,
    likes: 1950,
    views: 13400,
    gradient: 'linear-gradient(135deg, #d946ef 0%, #7c3aed 100%)',
    elements: [
      // Background
      { id: '34-bg', type: 'rect', x: 0, y: 0, width: 560, height: 560, fill: '#1a1025', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Outer circle border
      { id: '34-outer', type: 'circle', x: 60, y: 60, width: 440, height: 440, fill: 'transparent', stroke: '#d946ef', strokeWidth: 3, opacity: 0.9, visible: true, locked: true },
      // Inner circle
      { id: '34-inner', type: 'circle', x: 100, y: 100, width: 360, height: 360, fill: 'transparent', stroke: '#7c3aed', strokeWidth: 2, opacity: 0.6, visible: true, locked: true },
      // Innermost filled circle
      { id: '34-center', type: 'circle', x: 160, y: 160, width: 240, height: 240, fill: 'rgba(217,70,239,0.08)', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Top star
      { id: '34-star1', type: 'star', x: 256, y: 120, width: 28, height: 28, fill: '#d946ef', stroke: 'transparent', strokeWidth: 0, opacity: 0.9, visible: true, locked: false },
      // Brand name line 1
      { id: '34-txt1', type: 'text', x: 130, y: 210, width: 300, height: 50, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'AURORA', fontSize: 40, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Brand name line 2
      { id: '34-txt2', type: 'text', x: 130, y: 260, width: 300, height: 35, rotation: 0, fill: '#d946ef', stroke: 'transparent', strokeWidth: 0, text: 'COLLECTIVE', fontSize: 24, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Est. date
      { id: '34-txt3', type: 'text', x: 200, y: 310, width: 160, height: 20, rotation: 0, fill: '#a78bfa', stroke: 'transparent', strokeWidth: 0, text: '— EST. 2019 —', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // Decorative stars (left & right)
      { id: '34-star2', type: 'star', x: 150, y: 265, width: 16, height: 16, fill: '#d946ef', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: true },
      { id: '34-star3', type: 'star', x: 394, y: 265, width: 16, height: 16, fill: '#d946ef', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: true },
      // Ribbon shape (simulated with rect)
      { id: '34-ribbon', type: 'rect', x: 170, y: 345, width: 220, height: 28, fill: '#7c3aed', stroke: 'transparent', strokeWidth: 0, opacity: 0.8, visible: true, locked: false },
      // Tagline inside ribbon
      { id: '34-txt4', type: 'text', x: 185, y: 348, width: 200, height: 22, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'DESIGN · CREATE · INSPIRE', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.95, visible: true, locked: false },
      // Bottom star
      { id: '34-star4', type: 'star', x: 256, y: 400, width: 28, height: 28, fill: '#d946ef', stroke: 'transparent', strokeWidth: 0, opacity: 0.9, visible: true, locked: false },
    ]
  },


  // ══════════════════════════════════════════════════════════════════════════════
  // RESUME TEMPLATES (5)
  // ══════════════════════════════════════════════════════════════════════════════

  // ── 35: Modern Resume ── 2480×3508 → cW=397, cH=560
  {
    id: 35,
    name: 'Modern Resume',
    category: 'Resume',
    size: '2480×3508',
    premium: false,
    likes: 4120,
    views: 32400,
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
    elements: [
      // Background
      { id: '35-bg', type: 'rect', x: 0, y: 0, width: 397, height: 560, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Left sidebar
      { id: '35-sidebar', type: 'rect', x: 0, y: 0, width: 130, height: 560, fill: '#1e40af', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Profile photo circle
      { id: '35-photo', type: 'circle', x: 30, y: 30, width: 70, height: 70, fill: '#3b82f6', stroke: '#ffffff', strokeWidth: 2, opacity: 1, visible: true, locked: false },
      // Name in sidebar
      { id: '35-txt1', type: 'text', x: 12, y: 112, width: 110, height: 28, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'JAMES\nWILSON', fontSize: 14, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Sidebar section – Contact
      { id: '35-txt2', type: 'text', x: 12, y: 175, width: 110, height: 14, rotation: 0, fill: '#93c5fd', stroke: 'transparent', strokeWidth: 0, text: 'CONTACT', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: true },
      { id: '35-line1', type: 'line', x: 12, y: 192, width: 40, height: 1, fill: '#60a5fa', stroke: '#60a5fa', strokeWidth: 1, opacity: 0.6, visible: true, locked: true },
      { id: '35-txt3', type: 'text', x: 12, y: 200, width: 110, height: 50, rotation: 0, fill: '#dbeafe', stroke: 'transparent', strokeWidth: 0, text: 'james@email.com\n+1 (555) 123-4567\nNew York, NY', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Sidebar section – Skills
      { id: '35-txt4', type: 'text', x: 12, y: 275, width: 110, height: 14, rotation: 0, fill: '#93c5fd', stroke: 'transparent', strokeWidth: 0, text: 'SKILLS', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: true },
      // Skill progress bar 1
      { id: '35-skill-bg1', type: 'rect', x: 12, y: 295, width: 100, height: 6, fill: '#1e3a8a', stroke: 'transparent', strokeWidth: 0, opacity: 0.8, visible: true, locked: true },
      { id: '35-skill1', type: 'rect', x: 12, y: 295, width: 85, height: 6, fill: '#60a5fa', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      { id: '35-skill-label1', type: 'text', x: 12, y: 304, width: 100, height: 12, rotation: 0, fill: '#bfdbfe', stroke: 'transparent', strokeWidth: 0, text: 'UI/UX Design', fontSize: 6, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Skill progress bar 2
      { id: '35-skill-bg2', type: 'rect', x: 12, y: 322, width: 100, height: 6, fill: '#1e3a8a', stroke: 'transparent', strokeWidth: 0, opacity: 0.8, visible: true, locked: true },
      { id: '35-skill2', type: 'rect', x: 12, y: 322, width: 72, height: 6, fill: '#60a5fa', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      { id: '35-skill-label2', type: 'text', x: 12, y: 331, width: 100, height: 12, rotation: 0, fill: '#bfdbfe', stroke: 'transparent', strokeWidth: 0, text: 'Figma / Sketch', fontSize: 6, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // ── Main content area ──
      // Experience header
      { id: '35-txt5', type: 'text', x: 145, y: 30, width: 240, height: 20, rotation: 0, fill: '#1e40af', stroke: 'transparent', strokeWidth: 0, text: 'EXPERIENCE', fontSize: 13, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      { id: '35-line2', type: 'line', x: 145, y: 50, width: 240, height: 1, fill: '#dbeafe', stroke: '#dbeafe', strokeWidth: 1, opacity: 0.8, visible: true, locked: true },
      // Job 1
      { id: '35-txt6', type: 'text', x: 145, y: 60, width: 240, height: 16, rotation: 0, fill: '#111827', stroke: 'transparent', strokeWidth: 0, text: 'Senior UX Designer', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '35-txt7', type: 'text', x: 145, y: 78, width: 240, height: 14, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Google · 2021 – Present', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      { id: '35-txt8', type: 'text', x: 145, y: 96, width: 240, height: 40, rotation: 0, fill: '#4b5563', stroke: 'transparent', strokeWidth: 0, text: 'Led design system overhaul for 3 product lines, improving consistency by 40%. Collaborated with engineering to build reusable components.', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Job 2
      { id: '35-txt9', type: 'text', x: 145, y: 148, width: 240, height: 16, rotation: 0, fill: '#111827', stroke: 'transparent', strokeWidth: 0, text: 'UX Designer', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '35-txt10', type: 'text', x: 145, y: 166, width: 240, height: 14, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Spotify · 2018 – 2021', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      { id: '35-txt11', type: 'text', x: 145, y: 184, width: 240, height: 40, rotation: 0, fill: '#4b5563', stroke: 'transparent', strokeWidth: 0, text: 'Redesigned onboarding flow increasing new user retention by 25%. Conducted 30+ usability tests to identify friction points.', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Education header
      { id: '35-txt12', type: 'text', x: 145, y: 245, width: 240, height: 20, rotation: 0, fill: '#1e40af', stroke: 'transparent', strokeWidth: 0, text: 'EDUCATION', fontSize: 13, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      { id: '35-line3', type: 'line', x: 145, y: 265, width: 240, height: 1, fill: '#dbeafe', stroke: '#dbeafe', strokeWidth: 1, opacity: 0.8, visible: true, locked: true },
      { id: '35-txt13', type: 'text', x: 145, y: 275, width: 240, height: 30, rotation: 0, fill: '#111827', stroke: 'transparent', strokeWidth: 0, text: 'B.F.A. in Graphic Design\nParsons School of Design · 2018', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
    ]
  },

  // ── 36: Classic CV ── 2480×3508 → cW=397, cH=560
  {
    id: 36,
    name: 'Classic CV',
    category: 'Resume',
    size: '2480×3508',
    premium: false,
    likes: 3560,
    views: 27800,
    gradient: 'linear-gradient(135deg, #64748b 0%, #1e293b 100%)',
    elements: [
      // Background – crisp white
      { id: '36-bg', type: 'rect', x: 0, y: 0, width: 397, height: 560, fill: '#fafafa', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Name – centered header
      { id: '36-txt1', type: 'text', x: 80, y: 25, width: 240, height: 35, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: 'ELIZABETH HARTWELL', fontSize: 20, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Horizontal rule
      { id: '36-line1', type: 'line', x: 30, y: 62, width: 337, height: 2, fill: '#1e293b', stroke: '#1e293b', strokeWidth: 2, opacity: 0.8, visible: true, locked: true },
      // Contact line
      { id: '36-txt2', type: 'text', x: 50, y: 70, width: 300, height: 16, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: 'elizabeth@email.com · +1 (555) 789-0123 · Boston, MA', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Profile Summary
      { id: '36-txt3', type: 'text', x: 30, y: 100, width: 337, height: 18, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: 'PROFILE SUMMARY', fontSize: 11, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      { id: '36-line2', type: 'line', x: 30, y: 118, width: 337, height: 1, fill: '#cbd5e1', stroke: '#cbd5e1', strokeWidth: 1, opacity: 0.6, visible: true, locked: true },
      { id: '36-txt4', type: 'text', x: 30, y: 125, width: 337, height: 40, rotation: 0, fill: '#475569', stroke: 'transparent', strokeWidth: 0, text: 'Results-driven marketing professional with 8+ years of experience in brand strategy, digital campaigns, and team leadership. Proven track record of delivering ROI-focused solutions.', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Experience
      { id: '36-txt5', type: 'text', x: 30, y: 180, width: 337, height: 18, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: 'PROFESSIONAL EXPERIENCE', fontSize: 11, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      { id: '36-line3', type: 'line', x: 30, y: 198, width: 337, height: 1, fill: '#cbd5e1', stroke: '#cbd5e1', strokeWidth: 1, opacity: 0.6, visible: true, locked: true },
      // Job 1
      { id: '36-txt6', type: 'text', x: 30, y: 206, width: 260, height: 14, rotation: 0, fill: '#0f172a', stroke: 'transparent', strokeWidth: 0, text: 'Marketing Director', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '36-txt7', type: 'text', x: 30, y: 222, width: 337, height: 12, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: 'Vertex Inc. · Boston, MA · 2020 – Present', fontSize: 7, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      { id: '36-txt8', type: 'text', x: 40, y: 238, width: 327, height: 35, rotation: 0, fill: '#475569', stroke: 'transparent', strokeWidth: 0, text: '• Managed $2.5M annual budget across digital and traditional channels\n• Grew organic traffic by 180% through strategic content marketing\n• Led a team of 4 marketing specialists and coordinated with agency partners', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Job 2
      { id: '36-txt9', type: 'text', x: 30, y: 285, width: 260, height: 14, rotation: 0, fill: '#0f172a', stroke: 'transparent', strokeWidth: 0, text: 'Senior Marketing Specialist', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '36-txt10', type: 'text', x: 30, y: 301, width: 337, height: 12, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: 'Beacon Digital · Cambridge, MA · 2016 – 2020', fontSize: 7, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      { id: '36-txt10-desc', type: 'text', x: 40, y: 317, width: 327, height: 25, rotation: 0, fill: '#475569', stroke: 'transparent', strokeWidth: 0, text: '• Executed multi-channel acquisition campaigns driving 35% user growth\n• Optimized paid search and social campaigns, lowering CAC by 15%', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Education
      { id: '36-txt11', type: 'text', x: 30, y: 345, width: 337, height: 18, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: 'EDUCATION', fontSize: 11, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      { id: '36-line4', type: 'line', x: 30, y: 363, width: 337, height: 1, fill: '#cbd5e1', stroke: '#cbd5e1', strokeWidth: 1, opacity: 0.6, visible: true, locked: true },
      { id: '36-txt12', type: 'text', x: 30, y: 370, width: 337, height: 28, rotation: 0, fill: '#334155', stroke: 'transparent', strokeWidth: 0, text: 'MBA, Marketing · Harvard Business School · 2016\nB.A., Communications · Boston University · 2013', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Skills
      { id: '36-txt13', type: 'text', x: 30, y: 415, width: 337, height: 18, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: 'SKILLS', fontSize: 11, fontFamily: 'Georgia', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      { id: '36-line5', type: 'line', x: 30, y: 433, width: 337, height: 1, fill: '#cbd5e1', stroke: '#cbd5e1', strokeWidth: 1, opacity: 0.6, visible: true, locked: true },
      { id: '36-txt14', type: 'text', x: 30, y: 440, width: 337, height: 20, rotation: 0, fill: '#475569', stroke: 'transparent', strokeWidth: 0, text: 'Brand Strategy · SEO/SEM · Content Marketing · Google Analytics · Team Leadership', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
    ]
  },

  // ── 37: Creative Portfolio ── 2480×3508 → cW=397, cH=560
  {
    id: 37,
    name: 'Creative Portfolio',
    category: 'Resume',
    size: '2480×3508',
    premium: true,
    likes: 5340,
    views: 38700,
    gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    elements: [
      // Background
      { id: '37-bg', type: 'rect', x: 0, y: 0, width: 397, height: 560, fill: '#fafafa', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Bold header block
      { id: '37-header', type: 'rect', x: 0, y: 0, width: 397, height: 140, fill: '#ec4899', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Name on header
      { id: '37-txt1', type: 'text', x: 25, y: 30, width: 350, height: 45, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'SOFIA MARTINEZ', fontSize: 28, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Creative title
      { id: '37-txt2', type: 'text', x: 25, y: 75, width: 350, height: 22, rotation: 0, fill: '#fce7f3', stroke: 'transparent', strokeWidth: 0, text: 'Visual Designer & Illustrator', fontSize: 13, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Contact on header
      { id: '37-txt3', type: 'text', x: 25, y: 105, width: 350, height: 16, rotation: 0, fill: '#fce7f3', stroke: 'transparent', strokeWidth: 0, text: 'sofia@portfolio.design · @sofiamakes · New York', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.75, visible: true, locked: false },
      // About Me section
      { id: '37-txt4', type: 'text', x: 25, y: 155, width: 350, height: 18, rotation: 0, fill: '#ec4899', stroke: 'transparent', strokeWidth: 0, text: 'ABOUT ME', fontSize: 10, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      { id: '37-txt5', type: 'text', x: 25, y: 175, width: 350, height: 36, rotation: 0, fill: '#475569', stroke: 'transparent', strokeWidth: 0, text: 'Multidisciplinary designer with a passion for vibrant visuals, brand identities, and illustration. 6+ years crafting memorable experiences for global brands.', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Portfolio grid – image placeholders
      { id: '37-txt6', type: 'text', x: 25, y: 225, width: 350, height: 18, rotation: 0, fill: '#ec4899', stroke: 'transparent', strokeWidth: 0, text: 'SELECTED WORK', fontSize: 10, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      { id: '37-port1', type: 'image', x: 25, y: 248, width: 110, height: 75, src: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=200', fill: 'transparent', stroke: '#e9d5ff', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '37-port2', type: 'image', x: 143, y: 248, width: 110, height: 75, src: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=200', fill: 'transparent', stroke: '#fbcfe8', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      { id: '37-port3', type: 'image', x: 261, y: 248, width: 110, height: 75, src: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=200', fill: 'transparent', stroke: '#ddd6fe', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      // Skills section
      { id: '37-txt7', type: 'text', x: 25, y: 340, width: 350, height: 18, rotation: 0, fill: '#ec4899', stroke: 'transparent', strokeWidth: 0, text: 'SKILLS', fontSize: 10, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      // Visual skill bars
      { id: '37-skillbar1-bg', type: 'rect', x: 25, y: 365, width: 160, height: 8, fill: '#f1f5f9', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      { id: '37-skillbar1', type: 'rect', x: 25, y: 365, width: 144, height: 8, fill: '#ec4899', stroke: 'transparent', strokeWidth: 0, opacity: 0.9, visible: true, locked: false },
      { id: '37-skill-label1', type: 'text', x: 195, y: 363, width: 80, height: 12, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Illustration · 90%', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      { id: '37-skillbar2-bg', type: 'rect', x: 25, y: 382, width: 160, height: 8, fill: '#f1f5f9', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      { id: '37-skillbar2', type: 'rect', x: 25, y: 382, width: 128, height: 8, fill: '#8b5cf6', stroke: 'transparent', strokeWidth: 0, opacity: 0.9, visible: true, locked: false },
      { id: '37-skill-label2', type: 'text', x: 195, y: 380, width: 80, height: 12, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Branding · 80%', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // Social links
      { id: '37-txt8', type: 'text', x: 25, y: 420, width: 350, height: 18, rotation: 0, fill: '#ec4899', stroke: 'transparent', strokeWidth: 0, text: 'FIND ME ONLINE', fontSize: 10, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      { id: '37-txt9', type: 'text', x: 25, y: 440, width: 350, height: 20, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'dribbble.com/sofia · behance.net/sofia · linkedin.com/in/sofia', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.75, visible: true, locked: false },
    ]
  },

  // ── 38: Cover Letter ── 2480×3508 → cW=397, cH=560
  {
    id: 38,
    name: 'Cover Letter',
    category: 'Resume',
    size: '2480×3508',
    premium: false,
    likes: 2890,
    views: 21300,
    gradient: 'linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)',
    elements: [
      // Background – clean white
      { id: '38-bg', type: 'rect', x: 0, y: 0, width: 397, height: 560, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Top accent bar
      { id: '38-accent', type: 'rect', x: 0, y: 0, width: 397, height: 5, fill: '#14b8a6', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Header – name & address
      { id: '38-txt1', type: 'text', x: 30, y: 25, width: 250, height: 24, rotation: 0, fill: '#0f172a', stroke: 'transparent', strokeWidth: 0, text: 'SARAH CHEN', fontSize: 18, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '38-txt2', type: 'text', x: 30, y: 50, width: 250, height: 28, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: '456 Elm Street, Suite 201\nSan Francisco, CA 94102', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Contact aligned right
      { id: '38-txt3', type: 'text', x: 260, y: 25, width: 120, height: 28, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: 'sarah@email.com\n+1 (555) 345-6789', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Divider
      { id: '38-line1', type: 'line', x: 30, y: 85, width: 337, height: 1, fill: '#e2e8f0', stroke: '#e2e8f0', strokeWidth: 1, opacity: 0.8, visible: true, locked: true },
      // Date
      { id: '38-txt4', type: 'text', x: 30, y: 95, width: 200, height: 14, rotation: 0, fill: '#475569', stroke: 'transparent', strokeWidth: 0, text: 'December 15, 2026', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Recipient
      { id: '38-txt5', type: 'text', x: 30, y: 120, width: 250, height: 35, rotation: 0, fill: '#334155', stroke: 'transparent', strokeWidth: 0, text: 'Hiring Manager\nVertex Technologies\n789 Innovation Blvd, Austin, TX', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Salutation
      { id: '38-txt6', type: 'text', x: 30, y: 170, width: 337, height: 16, rotation: 0, fill: '#0f172a', stroke: 'transparent', strokeWidth: 0, text: 'Dear Hiring Manager,', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Body paragraph 1
      { id: '38-txt7', type: 'text', x: 30, y: 195, width: 337, height: 50, rotation: 0, fill: '#475569', stroke: 'transparent', strokeWidth: 0, text: 'I am writing to express my strong interest in the Software Engineer position at Vertex Technologies. With over five years of experience building scalable web applications and leading cross-functional teams, I am confident in my ability to make a meaningful impact.', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Body paragraph 2
      { id: '38-txt8', type: 'text', x: 30, y: 255, width: 337, height: 50, rotation: 0, fill: '#475569', stroke: 'transparent', strokeWidth: 0, text: 'In my current role at TechNova Inc., I spearheaded a microservices migration that reduced deployment time by 60% and improved system reliability. I thrive in collaborative environments and am passionate about writing clean, maintainable code.', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Body paragraph 3
      { id: '38-txt9', type: 'text', x: 30, y: 315, width: 337, height: 40, rotation: 0, fill: '#475569', stroke: 'transparent', strokeWidth: 0, text: 'I would welcome the opportunity to discuss how my skills and experience align with your team\'s goals. Thank you for considering my application. I look forward to hearing from you.', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Closing
      { id: '38-txt10', type: 'text', x: 30, y: 370, width: 200, height: 14, rotation: 0, fill: '#0f172a', stroke: 'transparent', strokeWidth: 0, text: 'Sincerely,', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Signature line
      { id: '38-txt11', type: 'text', x: 30, y: 395, width: 200, height: 20, rotation: 0, fill: '#14b8a6', stroke: 'transparent', strokeWidth: 0, text: 'Sarah Chen', fontSize: 14, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Footer line
      { id: '38-line2', type: 'line', x: 30, y: 520, width: 337, height: 1, fill: '#14b8a6', stroke: '#14b8a6', strokeWidth: 1, opacity: 0.4, visible: true, locked: true },
      // Contact footer
      { id: '38-txt12', type: 'text', x: 30, y: 530, width: 337, height: 14, rotation: 0, fill: '#94a3b8', stroke: 'transparent', strokeWidth: 0, text: 'sarah@email.com · +1 (555) 345-6789 · linkedin.com/in/sarahchen', fontSize: 6, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.6, visible: true, locked: true },
    ]
  },

  // ── 39: Professional Resume ── 2480×3508 → cW=397, cH=560
  {
    id: 39,
    name: 'Professional Resume',
    category: 'Resume',
    size: '2480×3508',
    premium: true,
    likes: 4780,
    views: 35100,
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)',
    elements: [
      // Background
      { id: '39-bg', type: 'rect', x: 0, y: 0, width: 397, height: 560, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Dark header band
      { id: '39-header', type: 'rect', x: 0, y: 0, width: 397, height: 80, fill: '#0f172a', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Gold accent line under header
      { id: '39-gold-line', type: 'rect', x: 0, y: 80, width: 397, height: 3, fill: '#d4a843', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Name in header
      { id: '39-txt1', type: 'text', x: 25, y: 18, width: 350, height: 32, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'MARCUS WELLINGTON', fontSize: 22, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Title in header
      { id: '39-txt2', type: 'text', x: 25, y: 52, width: 350, height: 18, rotation: 0, fill: '#d4a843', stroke: 'transparent', strokeWidth: 0, text: 'Executive Director · Operations & Strategy', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Left column – Experience
      { id: '39-txt3', type: 'text', x: 25, y: 100, width: 230, height: 18, rotation: 0, fill: '#0f172a', stroke: 'transparent', strokeWidth: 0, text: 'EXPERIENCE', fontSize: 11, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      { id: '39-line1', type: 'line', x: 25, y: 118, width: 100, height: 1, fill: '#d4a843', stroke: '#d4a843', strokeWidth: 1, opacity: 0.7, visible: true, locked: true },
      // Timeline dot 1
      { id: '39-dot1', type: 'circle', x: 25, y: 128, width: 8, height: 8, fill: '#d4a843', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      { id: '39-txt4', type: 'text', x: 40, y: 126, width: 215, height: 14, rotation: 0, fill: '#0f172a', stroke: 'transparent', strokeWidth: 0, text: 'Chief Operating Officer', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '39-txt5', type: 'text', x: 40, y: 142, width: 215, height: 12, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: 'Pinnacle Global · 2020 – Present', fontSize: 7, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.75, visible: true, locked: false },
      { id: '39-txt6', type: 'text', x: 40, y: 158, width: 215, height: 35, rotation: 0, fill: '#475569', stroke: 'transparent', strokeWidth: 0, text: 'Oversaw $50M+ portfolio, streamlined operations across 12 departments, achieving 35% cost reduction. Pioneered cross-functional synergy initiatives.', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Timeline dot 2
      { id: '39-dot2', type: 'circle', x: 25, y: 204, width: 8, height: 8, fill: '#d4a843', stroke: 'transparent', strokeWidth: 0, opacity: 0.7, visible: true, locked: true },
      { id: '39-txt7', type: 'text', x: 40, y: 202, width: 215, height: 14, rotation: 0, fill: '#0f172a', stroke: 'transparent', strokeWidth: 0, text: 'VP of Operations', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '39-txt8', type: 'text', x: 40, y: 218, width: 215, height: 12, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: 'Summit Enterprises · 2016 – 2020', fontSize: 7, fontFamily: 'Inter', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.75, visible: true, locked: false },
      { id: '39-txt9', type: 'text', x: 40, y: 234, width: 215, height: 35, rotation: 0, fill: '#475569', stroke: 'transparent', strokeWidth: 0, text: 'Directed team of 150+ across supply chain and logistics. Launched operational excellence program that improved delivery efficiency by 22%.', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Right column – Education & Certs
      { id: '39-txt10', type: 'text', x: 270, y: 100, width: 110, height: 18, rotation: 0, fill: '#0f172a', stroke: 'transparent', strokeWidth: 0, text: 'EDUCATION', fontSize: 11, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      { id: '39-line2', type: 'line', x: 270, y: 118, width: 80, height: 1, fill: '#d4a843', stroke: '#d4a843', strokeWidth: 1, opacity: 0.7, visible: true, locked: true },
      { id: '39-txt11', type: 'text', x: 270, y: 126, width: 110, height: 35, rotation: 0, fill: '#334155', stroke: 'transparent', strokeWidth: 0, text: 'MBA, Strategy\nWharton School\n2015', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '39-txt12', type: 'text', x: 270, y: 170, width: 110, height: 30, rotation: 0, fill: '#334155', stroke: 'transparent', strokeWidth: 0, text: 'B.S. Business Admin\nUC Berkeley · 2012', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Certifications
      { id: '39-txt13', type: 'text', x: 270, y: 220, width: 110, height: 18, rotation: 0, fill: '#0f172a', stroke: 'transparent', strokeWidth: 0, text: 'CERTIFICATIONS', fontSize: 9, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: true },
      // Cert badges (small rects)
      { id: '39-cert1', type: 'rect', x: 270, y: 242, width: 100, height: 22, fill: '#f0fdf4', stroke: '#86efac', strokeWidth: 1, opacity: 0.9, visible: true, locked: false },
      { id: '39-cert-txt1', type: 'text', x: 275, y: 245, width: 90, height: 16, rotation: 0, fill: '#166534', stroke: 'transparent', strokeWidth: 0, text: 'PMP Certified', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '39-cert2', type: 'rect', x: 270, y: 270, width: 100, height: 22, fill: '#eff6ff', stroke: '#93c5fd', strokeWidth: 1, opacity: 0.9, visible: true, locked: false },
      { id: '39-cert-txt2', type: 'text', x: 275, y: 273, width: 90, height: 16, rotation: 0, fill: '#1e40af', stroke: 'transparent', strokeWidth: 0, text: 'Six Sigma Black Belt', fontSize: 7, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
    ]
  },


  // ══════════════════════════════════════════════════════════════════════════════
  // INVITATION TEMPLATES (8)
  // ══════════════════════════════════════════════════════════════════════════════

  // ── 41: Birthday Card ── 1400×2000 → cW=392, cH=560
  {
    id: 41,
    name: 'Birthday Card',
    category: 'Invitation',
    size: '1400×2000',
    premium: false,
    likes: 3210,
    views: 23400,
    gradient: 'linear-gradient(135deg, #fde047 0%, #f97316 100%)',
    elements: [
      // Background – warm yellow
      { id: '41-bg', type: 'rect', x: 0, y: 0, width: 392, height: 560, fill: '#fef3c7', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Confetti shapes
      { id: '41-conf1', type: 'circle', x: 30, y: 40, width: 14, height: 14, fill: '#f97316', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: true },
      { id: '41-conf2', type: 'rect', x: 320, y: 60, width: 10, height: 10, fill: '#ec4899', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: true, rotation: 45 },
      { id: '41-conf3', type: 'triangle', x: 180, y: 25, width: 16, height: 16, fill: '#8b5cf6', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: true },
      { id: '41-conf4', type: 'star', x: 350, y: 120, width: 20, height: 20, fill: '#f97316', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: true },
      { id: '41-conf5', type: 'circle', x: 60, y: 130, width: 10, height: 10, fill: '#3b82f6', stroke: 'transparent', strokeWidth: 0, opacity: 0.4, visible: true, locked: true },
      // Balloon shapes (circles with lines)
      { id: '41-balloon1', type: 'circle', x: 80, y: 60, width: 45, height: 55, fill: '#ef4444', stroke: 'transparent', strokeWidth: 0, opacity: 0.7, visible: true, locked: false },
      { id: '41-balloon2', type: 'circle', x: 280, y: 45, width: 40, height: 50, fill: '#3b82f6', stroke: 'transparent', strokeWidth: 0, opacity: 0.65, visible: true, locked: false },
      { id: '41-balloon3', type: 'circle', x: 180, y: 70, width: 35, height: 45, fill: '#22c55e', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: false },
      // Birthday image
      { id: '41-img1', type: 'image', x: 96, y: 130, width: 200, height: 130, src: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=300', fill: 'transparent', stroke: '#ffffff', strokeWidth: 3, opacity: 1, visible: true, locked: false },
      // HAPPY BIRTHDAY text
      { id: '41-txt1', type: 'text', x: 50, y: 280, width: 300, height: 40, rotation: 0, fill: '#f97316', stroke: 'transparent', strokeWidth: 0, text: 'HAPPY', fontSize: 36, fontFamily: 'Impact', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '41-txt2', type: 'text', x: 50, y: 315, width: 300, height: 45, rotation: 0, fill: '#ea580c', stroke: 'transparent', strokeWidth: 0, text: 'BIRTHDAY!', fontSize: 38, fontFamily: 'Impact', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Name/age area
      { id: '41-txt3', type: 'text', x: 80, y: 370, width: 240, height: 25, rotation: 0, fill: '#92400e', stroke: 'transparent', strokeWidth: 0, text: 'Dear Emma, you turn 25!', fontSize: 14, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Party details
      { id: '41-line1', type: 'line', x: 120, y: 405, width: 150, height: 2, fill: '#f97316', stroke: '#f97316', strokeWidth: 1, opacity: 0.5, visible: true, locked: true },
      { id: '41-txt4', type: 'text', x: 60, y: 420, width: 280, height: 60, rotation: 0, fill: '#78350f', stroke: 'transparent', strokeWidth: 0, text: 'Saturday, March 15th · 7:00 PM\nThe Rooftop Garden Lounge\n456 Sunset Boulevard, LA', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // RSVP
      { id: '41-txt5', type: 'text', x: 100, y: 500, width: 200, height: 22, rotation: 0, fill: '#f97316', stroke: 'transparent', strokeWidth: 0, text: 'RSVP: emma.party@email.com', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
    ]
  },

  // ── 42: Baby Shower ── 1400×2000 → cW=392, cH=560
  {
    id: 42,
    name: 'Baby Shower',
    category: 'Invitation',
    size: '1400×2000',
    premium: false,
    likes: 2740,
    views: 18900,
    gradient: 'linear-gradient(135deg, #a5f3fc 0%, #06b6d4 100%)',
    elements: [
      // Background – soft pastel blue
      { id: '42-bg', type: 'rect', x: 0, y: 0, width: 392, height: 560, fill: '#ecfeff', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Gentle border
      { id: '42-border', type: 'rect', x: 15, y: 15, width: 362, height: 530, fill: 'transparent', stroke: '#a5f3fc', strokeWidth: 2, opacity: 0.7, visible: true, locked: true },
      // Cloud shapes (decorative circles)
      { id: '42-cloud1', type: 'circle', x: 30, y: 30, width: 50, height: 30, fill: '#cffafe', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: true },
      { id: '42-cloud2', type: 'circle', x: 290, y: 40, width: 60, height: 35, fill: '#cffafe', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: true },
      // Stars
      { id: '42-star1', type: 'star', x: 160, y: 35, width: 18, height: 18, fill: '#fde68a', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: true },
      { id: '42-star2', type: 'star', x: 340, y: 85, width: 14, height: 14, fill: '#fde68a', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: true },
      // Baby shower image
      { id: '42-img1', type: 'image', x: 121, y: 65, width: 150, height: 120, src: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=300', fill: 'transparent', stroke: '#ffffff', strokeWidth: 3, opacity: 0.9, visible: true, locked: false },
      // Header text
      { id: '42-txt1', type: 'text', x: 70, y: 200, width: 260, height: 28, rotation: 0, fill: '#06b6d4', stroke: 'transparent', strokeWidth: 0, text: 'BABY SHOWER', fontSize: 24, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Subtitle
      { id: '42-txt2', type: 'text', x: 70, y: 230, width: 260, height: 20, rotation: 0, fill: '#0891b2', stroke: 'transparent', strokeWidth: 0, text: 'A little one is on the way!', fontSize: 12, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Divider
      { id: '42-line1', type: 'line', x: 146, y: 262, width: 100, height: 2, fill: '#67e8f9', stroke: '#67e8f9', strokeWidth: 1, opacity: 0.6, visible: true, locked: true },
      // Parents
      { id: '42-txt3', type: 'text', x: 70, y: 275, width: 260, height: 28, rotation: 0, fill: '#155e75', stroke: 'transparent', strokeWidth: 0, text: 'Join us in celebrating\nSARAH & MICHAEL', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Details
      { id: '42-txt4', type: 'text', x: 70, y: 330, width: 260, height: 60, rotation: 0, fill: '#164e63', stroke: 'transparent', strokeWidth: 0, text: 'Saturday, April 20th · 2:00 PM\nGarden View Tea Room\n123 Blossom Lane, Portland', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Registry info
      { id: '42-rect1', type: 'rect', x: 90, y: 410, width: 212, height: 35, fill: '#cffafe', stroke: '#67e8f9', strokeWidth: 1, opacity: 0.8, visible: true, locked: false },
      { id: '42-txt5', type: 'text', x: 100, y: 415, width: 192, height: 25, rotation: 0, fill: '#0e7490', stroke: 'transparent', strokeWidth: 0, text: 'Registry at BabyList.com\nSearch: Sarah & Michael', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // RSVP
      { id: '42-txt6', type: 'text', x: 100, y: 475, width: 200, height: 20, rotation: 0, fill: '#0891b2', stroke: 'transparent', strokeWidth: 0, text: 'RSVP by April 10th', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      { id: '42-txt7', type: 'text', x: 100, y: 498, width: 200, height: 16, rotation: 0, fill: '#64748b', stroke: 'transparent', strokeWidth: 0, text: 'sarah.shower@email.com', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
    ]
  },

  // ── 43: Thank You Card ── 1400×2000 → cW=392, cH=560
  {
    id: 43,
    name: 'Thank You Card',
    category: 'Invitation',
    size: '1400×2000',
    premium: false,
    likes: 1980,
    views: 14200,
    gradient: 'linear-gradient(135deg, #bbf7d0 0%, #16a34a 100%)',
    elements: [
      // Background – warm cream
      { id: '43-bg', type: 'rect', x: 0, y: 0, width: 392, height: 560, fill: '#fefce8', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Subtle border
      { id: '43-border', type: 'rect', x: 20, y: 20, width: 352, height: 520, fill: 'transparent', stroke: '#bbf7d0', strokeWidth: 1, opacity: 0.6, visible: true, locked: true },
      // Botanical shape (circle top-right)
      { id: '43-leaf1', type: 'circle', x: 300, y: 30, width: 50, height: 60, fill: '#bbf7d0', stroke: 'transparent', strokeWidth: 0, opacity: 0.4, visible: true, locked: true },
      { id: '43-leaf2', type: 'circle', x: 320, y: 55, width: 40, height: 50, fill: '#86efac', stroke: 'transparent', strokeWidth: 0, opacity: 0.3, visible: true, locked: true },
      // Botanical shape (bottom-left)
      { id: '43-leaf3', type: 'circle', x: 20, y: 450, width: 55, height: 65, fill: '#bbf7d0', stroke: 'transparent', strokeWidth: 0, opacity: 0.35, visible: true, locked: true },
      { id: '43-leaf4', type: 'circle', x: 45, y: 475, width: 40, height: 50, fill: '#86efac', stroke: 'transparent', strokeWidth: 0, opacity: 0.25, visible: true, locked: true },
      // Desk/office image
      { id: '43-img1', type: 'image', x: 96, y: 50, width: 200, height: 130, src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=300', fill: 'transparent', stroke: '#ffffff', strokeWidth: 2, opacity: 0.85, visible: true, locked: false },
      // "Thank You" script
      { id: '43-txt1', type: 'text', x: 60, y: 200, width: 280, height: 50, rotation: 0, fill: '#16a34a', stroke: 'transparent', strokeWidth: 0, text: 'Thank You', fontSize: 38, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Decorative line
      { id: '43-line1', type: 'line', x: 140, y: 255, width: 110, height: 2, fill: '#86efac', stroke: '#86efac', strokeWidth: 1, opacity: 0.7, visible: true, locked: true },
      // Message paragraph
      { id: '43-txt2', type: 'text', x: 50, y: 275, width: 300, height: 80, rotation: 0, fill: '#475569', stroke: 'transparent', strokeWidth: 0, text: 'Your kindness and generosity have meant\nthe world to us. We are truly grateful for\nyour thoughtful gift and warm wishes.\nYour presence made our celebration\neven more special.', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Sender name
      { id: '43-txt3', type: 'text', x: 120, y: 380, width: 160, height: 24, rotation: 0, fill: '#16a34a', stroke: 'transparent', strokeWidth: 0, text: 'With love,', fontSize: 13, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '43-txt4', type: 'text', x: 100, y: 405, width: 200, height: 24, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: 'The Anderson Family', fontSize: 14, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Decorative star
      { id: '43-star1', type: 'star', x: 182, y: 445, width: 20, height: 20, fill: '#86efac', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: true },
    ]
  },

  // ── 44: Holiday Card ── 1400×2000 → cW=392, cH=560
  {
    id: 44,
    name: 'Holiday Card',
    category: 'Invitation',
    size: '1400×2000',
    premium: true,
    likes: 4350,
    views: 31200,
    gradient: 'linear-gradient(135deg, #dc2626 0%, #15803d 100%)',
    elements: [
      // Background – deep red
      { id: '44-bg', type: 'rect', x: 0, y: 0, width: 392, height: 560, fill: '#7f1d1d', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Gold border
      { id: '44-border', type: 'rect', x: 14, y: 14, width: 364, height: 532, fill: 'transparent', stroke: '#d4a843', strokeWidth: 2, opacity: 0.7, visible: true, locked: true },
      // Inner border
      { id: '44-border2', type: 'rect', x: 22, y: 22, width: 348, height: 516, fill: 'transparent', stroke: '#d4a843', strokeWidth: 1, opacity: 0.3, visible: true, locked: true },
      // Snowflake/star decorations
      { id: '44-star1', type: 'star', x: 40, y: 40, width: 24, height: 24, fill: '#fde68a', stroke: 'transparent', strokeWidth: 0, opacity: 0.7, visible: true, locked: true },
      { id: '44-star2', type: 'star', x: 328, y: 45, width: 20, height: 20, fill: '#fde68a', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: true },
      { id: '44-star3', type: 'star', x: 180, y: 30, width: 16, height: 16, fill: '#fde68a', stroke: 'transparent', strokeWidth: 0, opacity: 0.4, visible: true, locked: true },
      { id: '44-star4', type: 'star', x: 50, y: 480, width: 18, height: 18, fill: '#fde68a', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: true },
      { id: '44-star5', type: 'star', x: 320, y: 490, width: 22, height: 22, fill: '#fde68a', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: true },
      // Holiday image
      { id: '44-img1', type: 'image', x: 96, y: 70, width: 200, height: 130, src: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=300', fill: 'transparent', stroke: '#d4a843', strokeWidth: 2, opacity: 0.9, visible: true, locked: false },
      // Happy Holidays
      { id: '44-txt1', type: 'text', x: 50, y: 220, width: 300, height: 40, rotation: 0, fill: '#fde68a', stroke: 'transparent', strokeWidth: 0, text: 'Happy Holidays', fontSize: 30, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Divider
      { id: '44-line1', type: 'line', x: 130, y: 268, width: 130, height: 2, fill: '#d4a843', stroke: '#d4a843', strokeWidth: 1, opacity: 0.6, visible: true, locked: true },
      // Family name
      { id: '44-txt2', type: 'text', x: 80, y: 285, width: 240, height: 24, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'FROM THE MORRISON FAMILY', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Year
      { id: '44-txt3', type: 'text', x: 150, y: 315, width: 100, height: 20, rotation: 0, fill: '#d4a843', stroke: 'transparent', strokeWidth: 0, text: '— 2026 —', fontSize: 12, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // Warm message
      { id: '44-txt4', type: 'text', x: 55, y: 355, width: 290, height: 60, rotation: 0, fill: '#fecaca', stroke: 'transparent', strokeWidth: 0, text: 'Wishing you and your loved ones\na season filled with warmth, joy,\nand wonderful memories.', fontSize: 11, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Green tree shape (triangle)
      { id: '44-tree', type: 'triangle', x: 176, y: 430, width: 40, height: 50, fill: '#15803d', stroke: 'transparent', strokeWidth: 0, opacity: 0.7, visible: true, locked: false },
    ]
  },

  // ── 45: Graduation Card ── 1400×2000 → cW=392, cH=560
  {
    id: 45,
    name: 'Graduation Card',
    category: 'Invitation',
    size: '1400×2000',
    premium: false,
    likes: 2460,
    views: 17600,
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #fbbf24 100%)',
    elements: [
      // Background – navy
      { id: '45-bg', type: 'rect', x: 0, y: 0, width: 392, height: 560, fill: '#1e3a8a', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Gold accent band top
      { id: '45-band', type: 'rect', x: 0, y: 0, width: 392, height: 4, fill: '#fbbf24', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Graduation cap shape (square + triangle)
      { id: '45-cap-base', type: 'rect', x: 166, y: 45, width: 60, height: 8, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: false },
      { id: '45-cap-top', type: 'rect', x: 150, y: 35, width: 92, height: 14, fill: '#0f172a', stroke: '#fbbf24', strokeWidth: 1, opacity: 1, visible: true, locked: false },
      // Tassel (line + circle)
      { id: '45-tassel-line', type: 'line', x: 242, y: 42, width: 30, height: 2, fill: '#fbbf24', stroke: '#fbbf24', strokeWidth: 2, opacity: 0.9, visible: true, locked: true },
      { id: '45-tassel-end', type: 'circle', x: 267, y: 48, width: 10, height: 10, fill: '#fbbf24', stroke: 'transparent', strokeWidth: 0, opacity: 0.9, visible: true, locked: true },
      // Graduation image
      { id: '45-img1', type: 'image', x: 96, y: 75, width: 200, height: 130, src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=300', fill: 'transparent', stroke: '#fbbf24', strokeWidth: 2, opacity: 0.9, visible: true, locked: false },
      // Congratulations
      { id: '45-txt1', type: 'text', x: 40, y: 225, width: 320, height: 35, rotation: 0, fill: '#fbbf24', stroke: 'transparent', strokeWidth: 0, text: 'CONGRATULATIONS', fontSize: 24, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Graduate name
      { id: '45-txt2', type: 'text', x: 60, y: 268, width: 280, height: 30, rotation: 0, fill: '#ffffff', stroke: 'transparent', strokeWidth: 0, text: 'JESSICA THOMPSON', fontSize: 20, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // School name
      { id: '45-txt3', type: 'text', x: 70, y: 305, width: 260, height: 20, rotation: 0, fill: '#93c5fd', stroke: 'transparent', strokeWidth: 0, text: 'Stanford University · Class of 2026', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Divider
      { id: '45-line1', type: 'line', x: 130, y: 340, width: 130, height: 2, fill: '#fbbf24', stroke: '#fbbf24', strokeWidth: 1, opacity: 0.5, visible: true, locked: true },
      // Ceremony details
      { id: '45-txt4', type: 'text', x: 60, y: 360, width: 280, height: 60, rotation: 0, fill: '#dbeafe', stroke: 'transparent', strokeWidth: 0, text: 'Commencement Ceremony\nSaturday, June 14th · 10:00 AM\nFrost Amphitheater, Stanford, CA', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Gold accent band bottom
      { id: '45-band2', type: 'rect', x: 0, y: 556, width: 392, height: 4, fill: '#fbbf24', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Decorative star
      { id: '45-star1', type: 'star', x: 182, y: 460, width: 28, height: 28, fill: '#fbbf24', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: true },
    ]
  },

  // ── 46: Party Invite ── 1400×2000 → cW=392, cH=560
  {
    id: 46,
    name: 'Party Invite',
    category: 'Invitation',
    size: '1400×2000',
    premium: false,
    likes: 3120,
    views: 22800,
    gradient: 'linear-gradient(135deg, #e879f9 0%, #6d28d9 100%)',
    elements: [
      // Background – dark purple/neon
      { id: '46-bg', type: 'rect', x: 0, y: 0, width: 392, height: 560, fill: '#1a0a2e', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Neon glow rects (decorative)
      { id: '46-glow1', type: 'circle', x: -30, y: 100, width: 120, height: 120, fill: '#7c3aed', stroke: 'transparent', strokeWidth: 0, opacity: 0.15, visible: true, locked: true },
      { id: '46-glow2', type: 'circle', x: 300, y: 380, width: 100, height: 100, fill: '#e879f9', stroke: 'transparent', strokeWidth: 0, opacity: 0.12, visible: true, locked: true },
      // Confetti shapes
      { id: '46-conf1', type: 'rect', x: 40, y: 60, width: 8, height: 18, fill: '#e879f9', stroke: 'transparent', strokeWidth: 0, opacity: 0.6, visible: true, locked: true, rotation: 30 },
      { id: '46-conf2', type: 'rect', x: 330, y: 80, width: 8, height: 18, fill: '#fbbf24', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: true, rotation: -20 },
      { id: '46-conf3', type: 'circle', x: 350, y: 150, width: 12, height: 12, fill: '#22d3ee', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: true },
      { id: '46-conf4', type: 'triangle', x: 60, y: 140, width: 14, height: 14, fill: '#f472b6', stroke: 'transparent', strokeWidth: 0, opacity: 0.4, visible: true, locked: true },
      // Event image
      { id: '46-img1', type: 'image', x: 96, y: 30, width: 200, height: 130, src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=300', fill: 'transparent', stroke: '#e879f9', strokeWidth: 2, opacity: 0.85, visible: true, locked: false },
      // YOU'RE INVITED
      { id: '46-txt1', type: 'text', x: 40, y: 180, width: 320, height: 40, rotation: 0, fill: '#e879f9', stroke: 'transparent', strokeWidth: 0, text: "YOU'RE INVITED", fontSize: 30, fontFamily: 'Impact', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Party theme
      { id: '46-txt2', type: 'text', x: 60, y: 225, width: 280, height: 24, rotation: 0, fill: '#c084fc', stroke: 'transparent', strokeWidth: 0, text: 'NEON NIGHTS PARTY 🎵', fontSize: 14, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // Divider
      { id: '46-line1', type: 'line', x: 100, y: 260, width: 190, height: 2, fill: '#7c3aed', stroke: '#7c3aed', strokeWidth: 2, opacity: 0.6, visible: true, locked: true },
      // Details
      { id: '46-txt3', type: 'text', x: 60, y: 280, width: 280, height: 55, rotation: 0, fill: '#e2e8f0', stroke: 'transparent', strokeWidth: 0, text: 'Friday, October 31st · 9:00 PM\nClub Atmosphere\n789 Neon Boulevard, Miami, FL', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Dress code
      { id: '46-rect1', type: 'rect', x: 90, y: 355, width: 212, height: 30, fill: 'rgba(124,58,237,0.2)', stroke: '#7c3aed', strokeWidth: 1, opacity: 0.8, visible: true, locked: false },
      { id: '46-txt4', type: 'text', x: 100, y: 360, width: 192, height: 18, rotation: 0, fill: '#c4b5fd', stroke: 'transparent', strokeWidth: 0, text: 'DRESS CODE: NEON & GLOW', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      // RSVP
      { id: '46-txt5', type: 'text', x: 80, y: 410, width: 240, height: 28, rotation: 0, fill: '#e879f9', stroke: 'transparent', strokeWidth: 0, text: 'RSVP', fontSize: 18, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      { id: '46-txt6', type: 'text', x: 80, y: 440, width: 240, height: 16, rotation: 0, fill: '#a78bfa', stroke: 'transparent', strokeWidth: 0, text: 'Text PARTY to (555) 123-GLOW', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.75, visible: true, locked: false },
    ]
  },

  // ── 47: RSVP Card ── 1000×600 → cW=780, cH=468
  {
    id: 47,
    name: 'RSVP Card',
    category: 'Invitation',
    size: '1000×600',
    premium: true,
    likes: 1540,
    views: 10300,
    gradient: 'linear-gradient(135deg, #fda4af 0%, #9f1239 100%)',
    elements: [
      // Background – elegant blush
      { id: '47-bg', type: 'rect', x: 0, y: 0, width: 780, height: 468, fill: '#fff1f2', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Decorative border
      { id: '47-border', type: 'rect', x: 16, y: 16, width: 748, height: 436, fill: 'transparent', stroke: '#fda4af', strokeWidth: 2, opacity: 0.6, visible: true, locked: true },
      // Inner border
      { id: '47-border2', type: 'rect', x: 24, y: 24, width: 732, height: 420, fill: 'transparent', stroke: '#fda4af', strokeWidth: 1, opacity: 0.3, visible: true, locked: true },
      // Image
      { id: '47-img1', type: 'image', x: 40, y: 50, width: 220, height: 280, src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=300', fill: 'transparent', stroke: '#fecdd3', strokeWidth: 2, opacity: 0.85, visible: true, locked: false },
      // Corner flowers
      { id: '47-flower1', type: 'circle', x: 35, y: 35, width: 20, height: 20, fill: '#fda4af', stroke: 'transparent', strokeWidth: 0, opacity: 0.4, visible: true, locked: true },
      { id: '47-flower2', type: 'circle', x: 725, y: 35, width: 20, height: 20, fill: '#fda4af', stroke: 'transparent', strokeWidth: 0, opacity: 0.4, visible: true, locked: true },
      // RSVP header
      { id: '47-txt1', type: 'text', x: 310, y: 45, width: 300, height: 50, rotation: 0, fill: '#9f1239', stroke: 'transparent', strokeWidth: 0, text: 'RSVP', fontSize: 42, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Subtitle
      { id: '47-txt2', type: 'text', x: 310, y: 95, width: 300, height: 20, rotation: 0, fill: '#be123c', stroke: 'transparent', strokeWidth: 0, text: 'We would be honored by your presence', fontSize: 11, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Divider
      { id: '47-line1', type: 'line', x: 310, y: 125, width: 200, height: 1, fill: '#fda4af', stroke: '#fda4af', strokeWidth: 1, opacity: 0.6, visible: true, locked: true },
      // Guest name line
      { id: '47-txt3', type: 'text', x: 310, y: 140, width: 300, height: 18, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Guest Name: ________________________', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Attending
      { id: '47-txt4', type: 'text', x: 310, y: 175, width: 300, height: 16, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Will you be attending?', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Yes / No boxes
      { id: '47-yes', type: 'rect', x: 310, y: 198, width: 100, height: 28, fill: '#fff1f2', stroke: '#fda4af', strokeWidth: 1, opacity: 0.9, visible: true, locked: false },
      { id: '47-yes-txt', type: 'text', x: 325, y: 201, width: 70, height: 22, rotation: 0, fill: '#9f1239', stroke: 'transparent', strokeWidth: 0, text: 'Joyfully Accept', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.9, visible: true, locked: false },
      { id: '47-no', type: 'rect', x: 425, y: 198, width: 100, height: 28, fill: '#fff1f2', stroke: '#fda4af', strokeWidth: 1, opacity: 0.9, visible: true, locked: false },
      { id: '47-no-txt', type: 'text', x: 435, y: 201, width: 80, height: 22, rotation: 0, fill: '#9f1239', stroke: 'transparent', strokeWidth: 0, text: 'Regretfully Decline', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.7, visible: true, locked: false },
      // Number of guests
      { id: '47-txt5', type: 'text', x: 310, y: 244, width: 300, height: 16, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Number of Guests: _____', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Meal preference
      { id: '47-txt6', type: 'text', x: 310, y: 275, width: 300, height: 16, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'Meal Preference: □ Chicken  □ Fish  □ Vegetarian', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.75, visible: true, locked: false },
      // Deadline
      { id: '47-line2', type: 'line', x: 310, y: 310, width: 200, height: 1, fill: '#fda4af', stroke: '#fda4af', strokeWidth: 1, opacity: 0.5, visible: true, locked: true },
      { id: '47-txt7', type: 'text', x: 310, y: 320, width: 300, height: 16, rotation: 0, fill: '#9f1239', stroke: 'transparent', strokeWidth: 0, text: 'Kindly respond by November 30, 2026', fontSize: 10, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Return address
      { id: '47-txt8', type: 'text', x: 310, y: 355, width: 300, height: 30, rotation: 0, fill: '#9ca3af', stroke: 'transparent', strokeWidth: 0, text: 'Please return to:\n456 Rose Garden Lane, Charleston, SC 29401', fontSize: 8, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.65, visible: true, locked: false },
    ]
  },

  // ── 50: Engagement Invite ── 1400×2000 → cW=392, cH=560
  {
    id: 50,
    name: 'Engagement Invite',
    category: 'Invitation',
    size: '1400×2000',
    premium: true,
    likes: 3780,
    views: 26400,
    gradient: 'linear-gradient(135deg, #fcd34d 0%, #b91c1c 100%)',
    elements: [
      // Background – warm blush
      { id: '50-bg', type: 'rect', x: 0, y: 0, width: 392, height: 560, fill: '#fef2f2', stroke: 'transparent', strokeWidth: 0, opacity: 1, visible: true, locked: true },
      // Gold ornamental border
      { id: '50-border', type: 'rect', x: 18, y: 18, width: 356, height: 524, fill: 'transparent', stroke: '#d4a843', strokeWidth: 2, opacity: 0.7, visible: true, locked: true },
      // Heart shapes (circles combined)
      { id: '50-heart1', type: 'circle', x: 170, y: 30, width: 22, height: 22, fill: '#fca5a5', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: true },
      { id: '50-heart2', type: 'circle', x: 200, y: 30, width: 22, height: 22, fill: '#fca5a5', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: true },
      { id: '50-heart3', type: 'triangle', x: 170, y: 38, width: 52, height: 30, fill: '#fca5a5', stroke: 'transparent', strokeWidth: 0, opacity: 0.5, visible: true, locked: true },
      // Engagement photo area
      { id: '50-img1', type: 'image', x: 71, y: 70, width: 250, height: 160, src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=300', fill: 'transparent', stroke: '#d4a843', strokeWidth: 2, opacity: 0.9, visible: true, locked: false },
      // "We're Engaged!" header
      { id: '50-txt1', type: 'text', x: 50, y: 245, width: 300, height: 35, rotation: 0, fill: '#b91c1c', stroke: 'transparent', strokeWidth: 0, text: "We're Engaged!", fontSize: 28, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Gold accent line
      { id: '50-line1', type: 'line', x: 130, y: 286, width: 130, height: 2, fill: '#d4a843', stroke: '#d4a843', strokeWidth: 1, opacity: 0.7, visible: true, locked: true },
      // Couple names
      { id: '50-txt2', type: 'text', x: 80, y: 300, width: 120, height: 28, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: 'OLIVIA', fontSize: 20, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Ampersand
      { id: '50-txt3', type: 'text', x: 175, y: 298, width: 40, height: 35, rotation: 0, fill: '#d4a843', stroke: 'transparent', strokeWidth: 0, text: '&', fontSize: 28, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: 'normal', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      // Second name
      { id: '50-txt4', type: 'text', x: 210, y: 300, width: 120, height: 28, rotation: 0, fill: '#1e293b', stroke: 'transparent', strokeWidth: 0, text: 'ETHAN', fontSize: 20, fontFamily: 'Syne', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 1, visible: true, locked: false },
      // Celebration details
      { id: '50-txt5', type: 'text', x: 60, y: 350, width: 280, height: 20, rotation: 0, fill: '#9f1239', stroke: 'transparent', strokeWidth: 0, text: 'Join us for an Engagement Celebration', fontSize: 11, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Date & venue
      { id: '50-txt6', type: 'text', x: 60, y: 385, width: 280, height: 50, rotation: 0, fill: '#374151', stroke: 'transparent', strokeWidth: 0, text: 'Saturday, February 14th · 6:00 PM\nThe Grand Ballroom\n100 Celebration Drive, Nashville, TN', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.85, visible: true, locked: false },
      // Gold decorative hearts (small)
      { id: '50-heart-deco1', type: 'circle', x: 50, y: 470, width: 12, height: 12, fill: '#d4a843', stroke: 'transparent', strokeWidth: 0, opacity: 0.4, visible: true, locked: true },
      { id: '50-heart-deco2', type: 'circle', x: 330, y: 470, width: 12, height: 12, fill: '#d4a843', stroke: 'transparent', strokeWidth: 0, opacity: 0.4, visible: true, locked: true },
      // RSVP
      { id: '50-txt7', type: 'text', x: 100, y: 490, width: 200, height: 20, rotation: 0, fill: '#b91c1c', stroke: 'transparent', strokeWidth: 0, text: 'RSVP by January 31, 2026', fontSize: 10, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', textDecoration: 'none', opacity: 0.8, visible: true, locked: false },
      { id: '50-txt8', type: 'text', x: 100, y: 512, width: 200, height: 16, rotation: 0, fill: '#6b7280', stroke: 'transparent', strokeWidth: 0, text: 'olivia.ethan@forever.com', fontSize: 9, fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', opacity: 0.65, visible: true, locked: false },
    ]
  },
];
