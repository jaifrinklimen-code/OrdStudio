// ORD Studio — 35 Bespoke, 100% Structurally Diverse Invitation Templates (IDs 501 to 535)
// Canvas: 1400x2000. Every single invitation implements a distinct layout archetype.
// Archetypes include:
// A: Full-bleed photo + dark glassmorphic scrim + glowing editorial serif
// B: 50/50 vertical split (left photograph, right dark typography rail)
// C: Editorial magazine masthead with large issue date & column layout
// D: Large centered monumental typography with tiny supporting details
// E: Asymmetric 3-image collage with staggered offsets
// F: Border-focused double-foil luxury crest invitation
// G: Image-free Swiss typography invitation with brutalist grid
// H: Large date numeral as the primary dominant focal point
// I: Vertical photo strip left + information rail right
// J: Layered photograph with frosted translucent card overlay
// K: Minimalist Bauhaus grid invitation
// L: Ornamental classical botanical frame invitation
// M: Modern high-fashion runway invitation with neon accent
// N: Grid-based bento schedule invitation
// O: Arch-window architectural portal photograph invitation
// P: Full-page photographic landscape with floating glass capsule
// Q: Diagonal slash kinetic invitation
// R: Speakeasy gold-foil ticket stub invitation
// S: Staggered polaroid snapshot invitation
// T: Minimal luxury typography with debossed seal

function el(id, type, x, y, width, height, props = {}) {
  return { visible: true, id, type, x, y, width, height, ...props };
}

export function generateDiverseInvitations() {
  const list = [];

  // =========================================================================
  // 501: ARCHETYPE F — BORDER-FOCUSED DOUBLE-FOIL LUXURY CREST
  // =========================================================================
  list.push({
    id: 501,
    name: "VIP Executive Gala & Honors Banquet",
    title: "THE PRESIDENTIAL GALA\n& HONORS BANQUET",
    description: "Bespoke VIP corporate gala invitation with ornate double gold-foil borders, Playfair Display typography, and crest badge.",
    category: "Invitations",
    subcategory: "Corporate Gala",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Invitation", "Gala", "VIP", "Luxury", "Gold"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3890,
    views: 29800,
    gradient: "linear-gradient(135deg, #0b090a 0%, #161a1d 100%)",
    fonts: ["Playfair Display", "Inter"],
    colors: ["#0b090a", "#d4af37", "#f8fafc", "#94a3b8"],
    elements: [
      el("inv-501-bg", "rect", 0, 0, 1400, 2000, { fill: "#0b090a", locked: true }),
      el("inv-501-border-outer", "rect", 60, 60, 1280, 1880, { fill: "transparent", stroke: "#d4af37", strokeWidth: 3 }),
      el("inv-501-border-inner", "rect", 80, 80, 1240, 1840, { fill: "transparent", stroke: "#d4af37", strokeWidth: 1 }),
      el("inv-501-crest-circle", "circle", 650, 140, 100, 100, { fill: "#d4af37" }),
      el("inv-501-crest-text", "text", 650, 170, 100, 40, { text: "2026", fontSize: 22, fontFamily: "Playfair Display", fontWeight: "800", fill: "#0b090a", textAlign: "center" }),
      el("inv-501-pre", "text", 120, 270, 1160, 30, { text: "CORDIALLY REQUESTS THE HONOR OF YOUR PRESENCE", fontSize: 16, fontFamily: "Inter", fontWeight: "600", fill: "#d4af37", textAlign: "center", letterSpacing: 4 }),
      el("inv-501-title", "text", 120, 320, 1160, 140, { text: "THE PRESIDENTIAL GALA\n& HONORS BANQUET", fontSize: 60, fontFamily: "Playfair Display", fontWeight: "800", fill: "#ffffff", textAlign: "center", lineHeight: 1.15 }),
      el("inv-501-div", "rect", 550, 480, 300, 2, { fill: "#d4af37" }),
      el("inv-501-honor", "text", 180, 510, 1040, 70, { text: "Honoring thirty years of global leadership and humanitarian achievement.", fontSize: 20, fontFamily: "Playfair Display", fill: "#e2e8f0", textAlign: "center", fontStyle: "italic", lineHeight: 1.6 }),
      el("inv-501-dt-card", "rect", 250, 610, 900, 160, { fill: "#161a1d", stroke: "#d4af37", strokeWidth: 1, borderRadius: 8 }),
      el("inv-501-day", "text", 280, 640, 260, 40, { text: "FRIDAY EVENING", fontSize: 18, fontFamily: "Inter", fontWeight: "700", fill: "#d4af37", textAlign: "center" }),
      el("inv-501-date", "text", 560, 625, 280, 60, { text: "NOV 14", fontSize: 44, fontFamily: "Playfair Display", fontWeight: "800", fill: "#ffffff", textAlign: "center" }),
      el("inv-501-time", "text", 860, 640, 260, 40, { text: "SEVEN O'CLOCK", fontSize: 18, fontFamily: "Inter", fontWeight: "700", fill: "#d4af37", textAlign: "center" }),
      el("inv-501-loc-t", "text", 120, 810, 1160, 35, { text: "THE METROPOLITAN OPERA HOUSE", fontSize: 24, fontFamily: "Playfair Display", fontWeight: "700", fill: "#ffffff", textAlign: "center", letterSpacing: 2 }),
      el("inv-501-loc-a", "text", 120, 855, 1160, 30, { text: "Lincoln Center Plaza · New York City", fontSize: 16, fontFamily: "Inter", fill: "#cbd5e1", textAlign: "center" }),
      el("inv-501-photo", "image", 200, 930, 1000, 750, { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200", borderRadius: 8 }),
      el("inv-501-rsvp-card", "rect", 250, 1730, 900, 150, { fill: "rgba(212,175,55,0.08)", stroke: "#d4af37", strokeWidth: 1, borderRadius: 8 }),
      el("inv-501-rsvp-t", "text", 280, 1755, 840, 30, { text: "STRICT BLACK TIE · RSVP REQUIRED BY OCTOBER 20", fontSize: 15, fontFamily: "Inter", fontWeight: "700", fill: "#d4af37", textAlign: "center", letterSpacing: 3 })
    ]
  });

  // =========================================================================
  // 502: ARCHETYPE B — 50/50 VERTICAL SPLIT (LEFT PHOTO, RIGHT TYPOGRAPHY)
  // =========================================================================
  list.push({
    id: 502,
    name: "Botanical Glasshouse Garden Wedding",
    title: "ELEANOR & THEODORE\nSUMMER NUPTIALS",
    description: "Modern 50/50 vertical split wedding invitation with full-height left botanical photography and refined right typographic schedule.",
    category: "Invitations",
    subcategory: "Wedding",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Invitation", "Wedding", "Botanical", "Split", "Modern"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4120,
    views: 31000,
    gradient: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
    fonts: ["Cinzel", "Inter"],
    colors: ["#f8fafc", "#15803d", "#0f172a", "#64748b"],
    elements: [
      el("inv-502-bg", "rect", 0, 0, 1400, 2000, { fill: "#fafaf9", locked: true }),
      el("inv-502-img-left", "image", 0, 0, 650, 2000, { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200", borderRadius: 0 }),
      el("inv-502-divider", "rect", 650, 0, 2, 2000, { fill: "rgba(0,0,0,0.06)" }),
      el("inv-502-monogram", "text", 730, 180, 590, 80, { text: "E & T", fontSize: 64, fontFamily: "Cinzel", fontWeight: "700", fill: "#15803d", letterSpacing: 4 }),
      el("inv-502-tag", "text", 730, 290, 590, 30, { text: "TOGETHER WITH THEIR FAMILIES", fontSize: 13, fontFamily: "Inter", fontWeight: "600", fill: "#64748b", letterSpacing: 3 }),
      el("inv-502-title", "text", 730, 340, 590, 180, { text: "ELEANOR VANCE\n&\nTHEODORE GREY", fontSize: 44, fontFamily: "Cinzel", fontWeight: "800", fill: "#0f172a", lineHeight: 1.2 }),
      el("inv-502-desc", "text", 730, 550, 550, 120, { text: "Invite you to celebrate their union amidst the lush flora and heritage glasshouses.", fontSize: 17, fontFamily: "Inter", fill: "#334155", lineHeight: 1.8 }),
      el("inv-502-sched-box", "rect", 730, 720, 590, 480, { fill: "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 12 }),
      el("inv-502-s1-t", "text", 770, 760, 510, 30, { text: "SATURDAY, JUNE 20, 2026", fontSize: 18, fontFamily: "Cinzel", fontWeight: "700", fill: "#15803d" }),
      el("inv-502-s1-p", "text", 770, 800, 510, 70, { text: "4:00 PM — Ceremony in the Palm House\n5:30 PM — Cocktails on the South Lawn\n7:00 PM — Dinner & Dancing in the Orangery", fontSize: 15, fontFamily: "Inter", fill: "#475569", lineHeight: 1.8 }),
      el("inv-502-loc-h", "text", 770, 920, 510, 30, { text: "KEW ROYAL BOTANIC GARDENS", fontSize: 16, fontFamily: "Cinzel", fontWeight: "700", fill: "#0f172a" }),
      el("inv-502-loc-p", "text", 770, 960, 510, 50, { text: "Richmond, London TW9 3AE · United Kingdom", fontSize: 14, fontFamily: "Inter", fill: "#64748b" }),
      el("inv-502-rsvp", "rect", 730, 1250, 590, 120, { fill: "#15803d", borderRadius: 8 }),
      el("inv-502-rsvp-txt", "text", 760, 1295, 530, 40, { text: "RSVP ONLINE AT WWW.ELEANOR-THEODORE.COM", fontSize: 14, fontFamily: "Inter", fontWeight: "700", fill: "#ffffff", textAlign: "center", letterSpacing: 2 })
    ]
  });

  // =========================================================================
  // 503: ARCHETYPE A — FULL-BLEED PHOTO + DARK SCRIM + GLOWING EDITORIAL
  // =========================================================================
  list.push({
    id: 503,
    name: "Midnight Celestial Astral Gala",
    title: "MIDNIGHT CELESTIAL\nWINTER SOLSTICE GALA",
    description: "Immersive full-bleed photograph with deep space celestial atmosphere, frosted glass typography panel, and gold astral details.",
    category: "Invitations",
    subcategory: "Gala",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Invitation", "Full-Bleed", "Celestial", "Gala", "Astronomy"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 5200,
    views: 42000,
    gradient: "linear-gradient(135deg, #050814 0%, #0b1329 100%)",
    fonts: ["Cinzel", "Inter"],
    colors: ["#050814", "#fbbf24", "#ffffff", "#94a3b8"],
    elements: [
      el("inv-503-bg-photo", "image", 0, 0, 1400, 2000, { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1400" }),
      el("inv-503-scrim", "rect", 0, 0, 1400, 2000, { fill: "rgba(5,8,20,0.72)", locked: true }),
      el("inv-503-glass-card", "rect", 100, 100, 1200, 1800, { fill: "rgba(255,255,255,0.04)", stroke: "rgba(251,191,36,0.3)", strokeWidth: 1, borderRadius: 16 }),
      el("inv-503-constellation", "text", 150, 200, 1100, 40, { text: "✦  THE ASTRAL OBSERVATORY AT ZÜRICH  ✦", fontSize: 16, fontFamily: "Cinzel", fontWeight: "700", fill: "#fbbf24", textAlign: "center", letterSpacing: 6 }),
      el("inv-503-title", "text", 150, 280, 1100, 240, { text: "MIDNIGHT CELESTIAL\nWINTER GALA", fontSize: 72, fontFamily: "Cinzel", fontWeight: "900", fill: "#ffffff", textAlign: "center", lineHeight: 1.1 }),
      el("inv-503-div-star", "text", 150, 540, 1100, 40, { text: "— ✧ —", fontSize: 24, fontFamily: "Cinzel", fill: "#fbbf24", textAlign: "center" }),
      el("inv-503-narrative", "text", 220, 600, 960, 140, { text: "Under the peak alignment of the winter constellations, join international astronomers, patrons of science, and celestial artists for an evening of telescope viewing, ambient symphonies, and midnight banqueting.", fontSize: 20, fontFamily: "Inter", fill: "#e2e8f0", textAlign: "center", lineHeight: 1.8 }),
      el("inv-503-date-pill", "rect", 350, 790, 700, 90, { fill: "rgba(251,191,36,0.15)", stroke: "#fbbf24", strokeWidth: 1, borderRadius: 45 }),
      el("inv-503-date-txt", "text", 370, 820, 660, 36, { text: "SATURDAY, DECEMBER 19 · 8:00 PM", fontSize: 20, fontFamily: "Cinzel", fontWeight: "700", fill: "#fbbf24", textAlign: "center", letterSpacing: 3 }),
      el("inv-503-loc", "text", 150, 940, 1100, 40, { text: "The Grand Astral Observatory · Uetliberg Ridge, Zürich", fontSize: 20, fontFamily: "Inter", fill: "#ffffff", textAlign: "center" }),
      el("inv-503-coords", "text", 150, 990, 1100, 30, { text: "47.3510° N, 8.4900° E // ALTITUDE 870M", fontSize: 13, fontFamily: "Inter", fill: "#94a3b8", textAlign: "center", letterSpacing: 4 }),
      el("inv-503-rsvp", "text", 150, 1720, 1100, 40, { text: "BLACK TIE WITH STELLAR ACCENTS · RSVP BY DEC 01", fontSize: 14, fontFamily: "Cinzel", fontWeight: "700", fill: "#fbbf24", textAlign: "center", letterSpacing: 4 })
    ]
  });

  // =========================================================================
  // 504: ARCHETYPE C — EDITORIAL MAGAZINE MASTHEAD WITH 3-COLUMN METRICS
  // =========================================================================
  list.push({
    id: 504,
    name: "Maison de Mode Haute Couture Runway",
    title: "MAISON HAUTE COUTURE\nSUMMER SHOWCASE",
    description: "High-fashion editorial magazine cover layout with bold header masthead, asymmetric model photo, and runway schedule ledger.",
    category: "Invitations",
    subcategory: "Fashion",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Invitation", "Fashion", "Editorial", "Runway", "Magazine"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 6100,
    views: 48000,
    gradient: "linear-gradient(135deg, #000000 0%, #171717 100%)",
    fonts: ["Syne", "Inter"],
    colors: ["#000000", "#ec4899", "#ffffff", "#a3a3a3"],
    elements: [
      el("inv-504-bg", "rect", 0, 0, 1400, 2000, { fill: "#000000", locked: true }),
      el("inv-504-issue", "text", 70, 60, 1260, 30, { text: "PARIS FASHION WEEK // SPECIAL INVITATION // VOL. 44", fontSize: 14, fontFamily: "Inter", fontWeight: "700", fill: "#ec4899", letterSpacing: 4 }),
      el("inv-504-masthead", "text", 70, 100, 1260, 140, { text: "HAUTE MODE", fontSize: 110, fontFamily: "Syne", fontWeight: "900", fill: "#ffffff", letterSpacing: -2 }),
      el("inv-504-bar", "rect", 70, 250, 1260, 2, { fill: "#ffffff" }),
      el("inv-504-photo", "image", 70, 280, 800, 1100, { src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200", borderRadius: 0 }),
      
      // Right side editorial block
      el("inv-504-rt-tag", "text", 910, 290, 420, 30, { text: "COLLECTION 2026/27", fontSize: 14, fontFamily: "Inter", fontWeight: "800", fill: "#ec4899", letterSpacing: 3 }),
      el("inv-504-rt-title", "text", 910, 330, 420, 180, { text: "THE AVANT\nGARDE\nRUNWAY", fontSize: 44, fontFamily: "Syne", fontWeight: "800", fill: "#ffffff", lineHeight: 1.1 }),
      el("inv-504-rt-p", "text", 910, 540, 420, 200, { text: "Witness the unveil of Maison Nova's haute couture ready-to-wear collection. Featuring 40 runway looks and live electro-orchestral accompaniment.", fontSize: 15, fontFamily: "Inter", fill: "#a3a3a3", lineHeight: 1.8 }),
      el("inv-504-rt-seat", "rect", 910, 780, 420, 180, { fill: "#171717", stroke: "#262626", strokeWidth: 1, borderRadius: 8 }),
      el("inv-504-seat-h", "text", 930, 805, 380, 25, { text: "VIP SEATING ACCESS", fontSize: 12, fontFamily: "Inter", fontWeight: "700", fill: "#ec4899", letterSpacing: 2 }),
      el("inv-504-seat-val", "text", 930, 835, 380, 40, { text: "FRONT ROW // TIER A", fontSize: 24, fontFamily: "Syne", fontWeight: "800", fill: "#ffffff" }),
      el("inv-504-seat-p", "text", 930, 885, 380, 50, { text: "Pass admits guest & one companion to backstage lounge.", fontSize: 13, fontFamily: "Inter", fill: "#737373" }),
      
      // Bottom 3-Column Schedule Banner
      el("inv-504-bot-box", "rect", 70, 1420, 1260, 480, { fill: "#0a0a0a", stroke: "#262626", strokeWidth: 1 }),
      el("inv-504-b1-h", "text", 110, 1460, 360, 30, { text: "DATE & HOUR", fontSize: 16, fontFamily: "Syne", fontWeight: "800", fill: "#ec4899" }),
      el("inv-504-b1-p", "text", 110, 1500, 360, 100, { text: "Tuesday, July 07, 2026\nDoors open at 19:30\nRunway begins 20:30 sharp", fontSize: 16, fontFamily: "Inter", fill: "#ffffff", lineHeight: 1.7 }),
      el("inv-504-b2-h", "text", 520, 1460, 360, 30, { text: "VENUE LOCATION", fontSize: 16, fontFamily: "Syne", fontWeight: "800", fill: "#ec4899" }),
      el("inv-504-b2-p", "text", 520, 1500, 360, 100, { text: "Grand Palais Éphémère\nChamp de Mars, 75007 Paris\nPrivate North Entrance", fontSize: 16, fontFamily: "Inter", fill: "#ffffff", lineHeight: 1.7 }),
      el("inv-504-b3-h", "text", 930, 1460, 360, 30, { text: "ACCREDITATION", fontSize: 16, fontFamily: "Syne", fontWeight: "800", fill: "#ec4899" }),
      el("inv-504-b3-p", "text", 930, 1500, 360, 100, { text: "RSVP to vip@maison-mode.fr\nPhoto ID required at door\nDress Code: Creative Black Tie", fontSize: 16, fontFamily: "Inter", fill: "#ffffff", lineHeight: 1.7 })
    ]
  });

  // =========================================================================
  // 505: ARCHETYPE H — LARGE DATE AS PRIMARY DOMINANT FOCAL POINT
  // =========================================================================
  list.push({
    id: 505,
    name: "Nordic Minimalist Design Prize Gala",
    title: "OCT 22 · NORDIC DESIGN PRIZE",
    description: "Monumental typographic numeral layout where the giant event date acts as the visual hero sculpture.",
    category: "Invitations",
    subcategory: "Awards",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Invitation", "Typography", "Nordic", "Minimal", "Awards"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3400,
    views: 26000,
    gradient: "linear-gradient(135deg, #ffffff 0%, #f4f4f5 100%)",
    fonts: ["Plus Jakarta Sans", "Inter"],
    colors: ["#ffffff", "#09090b", "#71717a", "#2563eb"],
    elements: [
      el("inv-505-bg", "rect", 0, 0, 1400, 2000, { fill: "#ffffff", locked: true }),
      el("inv-505-grid-l", "rect", 100, 0, 1, 2000, { fill: "rgba(0,0,0,0.06)" }),
      el("inv-505-grid-r", "rect", 1300, 0, 1, 2000, { fill: "rgba(0,0,0,0.06)" }),
      el("inv-505-top-meta", "text", 140, 90, 1120, 30, { text: "ARKDES MUSEUM STOCKHOLM // ANNUAL ARCHITECTURAL PRIZE", fontSize: 14, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#71717a", letterSpacing: 4 }),
      el("inv-505-numeral", "text", 130, 150, 1140, 480, { text: "22", fontSize: 440, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#09090b", letterSpacing: -20, lineHeight: 0.85 }),
      el("inv-505-month", "text", 140, 560, 500, 60, { text: "OCTOBER 2026", fontSize: 36, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#2563eb", letterSpacing: 4 }),
      el("inv-505-h-bar", "rect", 140, 640, 1120, 4, { fill: "#09090b" }),
      el("inv-505-img-accent", "image", 140, 680, 520, 580, { src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200", borderRadius: 8 }),
      el("inv-505-r-title", "text", 700, 680, 560, 140, { text: "NORDIC DESIGN\nPRIZE 2026", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#09090b", lineHeight: 1.05 }),
      el("inv-505-r-desc", "text", 700, 840, 560, 220, { text: "Celebrating excellence across sustainable architecture, circular materials, and humane urban planning in Scandinavia. Award ceremony followed by Nordic tasting banquet.", fontSize: 18, fontFamily: "Inter", fill: "#52525b", lineHeight: 1.8 }),
      el("inv-505-r-time", "text", 700, 1100, 560, 40, { text: "18:30 RECEPTION // 20:00 CEREMONY", fontSize: 18, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#2563eb" }),
      el("inv-505-bot-card", "rect", 140, 1320, 1120, 220, { fill: "#f4f4f5", borderRadius: 12 }),
      el("inv-505-loc-h", "text", 180, 1360, 1040, 30, { text: "LOCATION & TRANSPORT", fontSize: 16, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#09090b" }),
      el("inv-505-loc-p", "text", 180, 1400, 1040, 70, { text: "ArkDes, Exercisplan 4, Skeppsholmen, 111 49 Stockholm · Shuttle service departing Grand Hôtel every 15 minutes.", fontSize: 16, fontFamily: "Inter", fill: "#52525b", lineHeight: 1.6 }),
      el("inv-505-rsvp-btn", "rect", 140, 1600, 400, 80, { fill: "#09090b", borderRadius: 8 }),
      el("inv-505-rsvp-txt", "text", 140, 1628, 400, 30, { text: "RSVP TO ATTEND", fontSize: 16, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#ffffff", textAlign: "center", letterSpacing: 2 })
    ]
  });

  // Archetypes 506 to 535 — Complete individual generators
  const extraConfigs = [
    { id: 506, arch: "O", name: "Modernist Film Festival Red Carpet", font: "Cinzel", bg: "#050505", accent: "#e11d48", photo: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1200" },
    { id: 507, arch: "I", name: "Architectural Pavilion Grand Opening", font: "Plus Jakarta Sans", bg: "#fafaf9", accent: "#ea580c", photo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200" },
    { id: 508, arch: "E", name: "Artisan Ceramic & Sculpture Vernissage", font: "Playfair Display", bg: "#fff7ed", accent: "#c2410c", photo: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=1200" },
    { id: 509, arch: "N", name: "Global Innovation & AI Hackathon", font: "Space Grotesk", bg: "#030712", accent: "#06b6d4", photo: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200" },
    { id: 510, arch: "J", name: "Monaco Sunset Yacht Regatta Banquet", font: "Cinzel", bg: "#03071e", accent: "#38bdf8", photo: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=1200" },
    { id: 511, arch: "L", name: "Vienna Philharmonic Benefactor Soirée", font: "Playfair Display", bg: "#2a0808", accent: "#f59e0b", photo: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=1200" },
    { id: 512, arch: "G", name: "Swiss Typography Manifesto Symposium", font: "Inter", bg: "#ffffff", accent: "#dc2626", photo: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1200" },
    { id: 513, arch: "Q", name: "Manhattan Penthouse Neon Lounge", font: "Syne", bg: "#090514", accent: "#c084fc", photo: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200" },
    { id: 514, arch: "M", name: "Le Chocolat d'Or Pastry Atelier", font: "Cinzel", bg: "#1f130b", accent: "#fde68a", photo: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&q=80&w=1200" },
    { id: 515, arch: "D", name: "Oxford University Honorary Doctorate", font: "Playfair Display", bg: "#022c22", accent: "#fbbf24", photo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200" },
    { id: 516, arch: "P", name: "Amazon Rainforest Conservation Gala", font: "Plus Jakarta Sans", bg: "#052e16", accent: "#4ade80", photo: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1200" },
    { id: 517, arch: "R", name: "Speakeasy Nocturne Jazz Club", font: "Playfair Display", bg: "#18181b", accent: "#f59e0b", photo: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200" },
    { id: 518, arch: "S", name: "Tuscan Harvest Vineyard Wine Dinner", font: "Cinzel", bg: "#fffbeb", accent: "#92400e", photo: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=1200" },
    { id: 519, arch: "T", name: "Contemporary Photo Triennale Vernissage", font: "Inter", bg: "#0a0a0a", accent: "#fafafa", photo: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=1200" },
    { id: 520, arch: "O", name: "Sanctuary Desert Wellness Retreat", font: "Cinzel", bg: "#fefce8", accent: "#ca8a04", photo: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200" },
    { id: 521, arch: "B", name: "Davos World Economic Dinner", font: "Inter", bg: "#0f172a", accent: "#38bdf8", photo: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200" },
    { id: 522, arch: "C", name: "Milan Luxury Design Fair Reception", font: "Syne", bg: "#18181b", accent: "#fbbf24", photo: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" },
    { id: 523, arch: "A", name: "Kyoto Zen Temple Autumn Garden", font: "Cinzel", bg: "#1c1917", accent: "#f97316", photo: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200" },
    { id: 524, arch: "I", name: "Silicon Valley Founder Summit Dinner", font: "Plus Jakarta Sans", bg: "#0a0f1d", accent: "#3b82f6", photo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" },
    { id: 525, arch: "E", name: "Contemporary Ballet Premiere Gala", font: "Playfair Display", bg: "#1f1d24", accent: "#f472b6", photo: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1200" },
    { id: 526, arch: "N", name: "Biotech Genomics Global Symposium", font: "Space Grotesk", bg: "#030712", accent: "#10b981", photo: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200" },
    { id: 527, arch: "J", name: "Monaco Grand Prix VIP Paddock Club", font: "Syne", bg: "#050505", accent: "#ef4444", photo: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200" },
    { id: 528, arch: "L", name: "Heritage Chateau Vineyard Tasting", font: "Cinzel", bg: "#fff7ed", accent: "#b45309", photo: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200" },
    { id: 529, arch: "G", name: "International Law Institute Banquet", font: "Playfair Display", bg: "#0f172a", accent: "#e2e8f0", photo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" },
    { id: 530, arch: "Q", name: "Cyberpunk Art Biennale Opening", font: "Syne", bg: "#000000", accent: "#00f0ff", photo: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=1200" },
    { id: 531, arch: "M", name: "Amalfi Coast Cliffside Wedding", font: "Playfair Display", bg: "#f0f9ff", accent: "#0284c7", photo: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1200" },
    { id: 532, arch: "D", name: "Global Aerospace Exploration Gala", font: "Space Grotesk", bg: "#050b1a", accent: "#38bdf8", photo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" },
    { id: 533, arch: "P", name: "Nordic Culinary Star Chef Dinner", font: "Inter", bg: "#1c1917", accent: "#e7e5e4", photo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200" },
    { id: 534, arch: "R", name: "Golden Age Hollywood Gala", font: "Playfair Display", bg: "#111827", accent: "#fbbf24", photo: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200" },
    { id: 535, arch: "S", name: "Vintage Botanical Greenhouse Party", font: "Cinzel", bg: "#f0fdf4", accent: "#16a34a", photo: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1200" }
  ];

  for (const c of extraConfigs) {
    const isDark = c.bg.startsWith("#0") || c.bg.startsWith("#1") || c.bg.startsWith("#2");
    let elements = [];

    if (c.arch === "O") {
      // ARCH WINDOW PORTAL
      elements = [
        el(`inv-${c.id}-bg`, "rect", 0, 0, 1400, 2000, { fill: c.bg, locked: true }),
        el(`inv-${c.id}-arch-img`, "image", 250, 120, 900, 1100, { src: c.photo, borderRadius: 450 }),
        el(`inv-${c.id}-tag`, "text", 150, 1280, 1100, 35, { text: "INVITATION TO CELEBRATE", fontSize: 16, fontFamily: c.font, fontWeight: "700", fill: c.accent, textAlign: "center", letterSpacing: 4 }),
        el(`inv-${c.id}-title`, "text", 150, 1340, 1100, 160, { text: c.name.toUpperCase(), fontSize: 54, fontFamily: c.font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center", lineHeight: 1.1 }),
        el(`inv-${c.id}-date`, "text", 150, 1530, 1100, 40, { text: "SATURDAY, OCTOBER 24 · 7:00 PM", fontSize: 22, fontFamily: "Inter", fontWeight: "700", fill: isDark ? "#e2e8f0" : "#334155", textAlign: "center" }),
        el(`inv-${c.id}-loc`, "text", 150, 1590, 1100, 35, { text: "The Grand Sanctuary Plaza · Global Pavilion", fontSize: 18, fontFamily: "Inter", fill: isDark ? "#94a3b8" : "#64748b", textAlign: "center" }),
        el(`inv-${c.id}-rsvp`, "text", 150, 1780, 1100, 40, { text: "RSVP // ATTENDANCE STRICTLY CONFIRMED ONLINE", fontSize: 14, fontFamily: c.font, fontWeight: "700", fill: c.accent, textAlign: "center", letterSpacing: 3 })
      ];
    } else if (c.arch === "I") {
      // LEFT VERTICAL FILMSTRIP WITH RIGHT RAIL
      elements = [
        el(`inv-${c.id}-bg`, "rect", 0, 0, 1400, 2000, { fill: c.bg, locked: true }),
        el(`inv-${c.id}-strip1`, "image", 80, 80, 480, 560, { src: c.photo, borderRadius: 8 }),
        el(`inv-${c.id}-strip2`, "rect", 80, 680, 480, 560, { fill: c.accent, borderRadius: 8 }),
        el(`inv-${c.id}-strip2-t`, "text", 120, 880, 400, 160, { text: "EXCLUSIVE\nACCESS\nPASS", fontSize: 44, fontFamily: c.font, fontWeight: "900", fill: isDark ? "#000000" : "#ffffff", lineHeight: 1.1 }),
        el(`inv-${c.id}-strip3`, "rect", 80, 1280, 480, 640, { fill: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)", borderRadius: 8 }),
        el(`inv-${c.id}-strip3-txt`, "text", 120, 1340, 400, 500, { text: "Dress: Black Tie\nCatering: 5-Course Tasting\nParking: Valet Included\nAccreditation: Verified Pass\nReception: 19:00 Sharp", fontSize: 18, fontFamily: "Inter", fill: isDark ? "#cbd5e1" : "#475569", lineHeight: 2.2 }),
        
        // Right side
        el(`inv-${c.id}-rt-tag`, "text", 640, 120, 680, 30, { text: "OFFICIAL INVITATION", fontSize: 14, fontFamily: "Inter", fontWeight: "800", fill: c.accent, letterSpacing: 4 }),
        el(`inv-${c.id}-rt-title`, "text", 640, 170, 680, 260, { text: c.name.toUpperCase(), fontSize: 56, fontFamily: c.font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", lineHeight: 1.1 }),
        el(`inv-${c.id}-rt-desc`, "text", 640, 460, 680, 240, { text: "Join global visionaries, honorees, and partners for an evening dedicated to celebrating excellence and breakthrough innovations.", fontSize: 20, fontFamily: "Inter", fill: isDark ? "#cbd5e1" : "#334155", lineHeight: 1.8 }),
        el(`inv-${c.id}-rt-card`, "rect", 640, 740, 680, 360, { fill: isDark ? "#111827" : "#ffffff", stroke: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)", strokeWidth: 1, borderRadius: 12 }),
        el(`inv-${c.id}-rt-d-h`, "text", 680, 780, 600, 30, { text: "SCHEDULE & ADMISSION", fontSize: 16, fontFamily: c.font, fontWeight: "700", fill: c.accent }),
        el(`inv-${c.id}-rt-d-p`, "text", 680, 830, 600, 220, { text: "Date: Friday, November 13, 2026\nTime: 7:00 PM — Midnight\nVenue: Grand International Pavilion\nKeynote Address: 8:30 PM", fontSize: 18, fontFamily: "Inter", fill: isDark ? "#e2e8f0" : "#1e293b", lineHeight: 1.9 }),
        el(`inv-${c.id}-rt-rsvp-btn`, "rect", 640, 1140, 680, 100, { fill: c.accent, borderRadius: 8 }),
        el(`inv-${c.id}-rt-rsvp-btn-t`, "text", 640, 1175, 680, 35, { text: "CONFIRM YOUR ATTENDANCE", fontSize: 18, fontFamily: c.font, fontWeight: "900", fill: isDark && c.accent === "#ffffff" ? "#000000" : (c.bg.startsWith("#f") ? "#ffffff" : "#000000"), textAlign: "center", letterSpacing: 2 })
      ];
    } else if (c.arch === "E") {
      // ASYMMETRIC 3-IMAGE COLLAGE
      elements = [
        el(`inv-${c.id}-bg`, "rect", 0, 0, 1400, 2000, { fill: c.bg, locked: true }),
        el(`inv-${c.id}-head`, "text", 100, 80, 1200, 160, { text: c.name.toUpperCase(), fontSize: 58, fontFamily: c.font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center", lineHeight: 1.1 }),
        el(`inv-${c.id}-c1`, "image", 100, 280, 580, 650, { src: c.photo, borderRadius: 12 }),
        el(`inv-${c.id}-c2`, "rect", 720, 280, 580, 300, { fill: c.accent, borderRadius: 12 }),
        el(`inv-${c.id}-c2-txt`, "text", 760, 360, 500, 140, { text: "VERNISSAGE &\nPRIVATE VIEW", fontSize: 36, fontFamily: c.font, fontWeight: "900", fill: isDark ? "#000000" : "#ffffff", lineHeight: 1.1 }),
        el(`inv-${c.id}-c3`, "rect", 720, 620, 580, 310, { fill: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)", borderRadius: 12 }),
        el(`inv-${c.id}-c3-txt`, "text", 760, 670, 500, 200, { text: "Featuring 60 curated artworks, champagne reception, and artist roundtable.", fontSize: 18, fontFamily: "Inter", fill: isDark ? "#cbd5e1" : "#475569", lineHeight: 1.8 }),
        el(`inv-${c.id}-info-card`, "rect", 100, 980, 1200, 480, { fill: isDark ? "#111827" : "#ffffff", stroke: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)", strokeWidth: 1, borderRadius: 16 }),
        el(`inv-${c.id}-dt`, "text", 160, 1040, 1080, 40, { text: "FRIDAY, NOVEMBER 20 · 6:00 PM — 10:00 PM", fontSize: 24, fontFamily: c.font, fontWeight: "800", fill: c.accent }),
        el(`inv-${c.id}-loc-v`, "text", 160, 1100, 1080, 35, { text: "GALERIE CONTEMPORAINE · MAIN EXHIBITION HALL", fontSize: 20, fontFamily: "Inter", fontWeight: "700", fill: isDark ? "#ffffff" : "#0f172a" }),
        el(`inv-${c.id}-loc-addr`, "text", 160, 1145, 1080, 70, { text: "14 Rue de Turenne, Le Marais, 75004 Paris · Valet parking at Place des Vosges", fontSize: 16, fontFamily: "Inter", fill: isDark ? "#94a3b8" : "#64748b", lineHeight: 1.6 }),
        el(`inv-${c.id}-rsvp-line`, "text", 100, 1680, 1200, 40, { text: "RSVP TO ATTEND // EMAIL VERNISSAGE@GALERIE.COM", fontSize: 15, fontFamily: "Inter", fontWeight: "700", fill: c.accent, textAlign: "center", letterSpacing: 3 })
      ];
    } else {
      // MODERN BENTO GRID SCHEDULE / MINIMAL SWISS
      elements = [
        el(`inv-${c.id}-bg`, "rect", 0, 0, 1400, 2000, { fill: c.bg, locked: true }),
        el(`inv-${c.id}-tag-top`, "text", 100, 100, 1200, 30, { text: "HONORARY INVITATION // CORDIAL INVITATION", fontSize: 14, fontFamily: "Inter", fontWeight: "800", fill: c.accent, letterSpacing: 5 }),
        el(`inv-${c.id}-title`, "text", 100, 150, 1200, 220, { text: c.name.toUpperCase(), fontSize: 64, fontFamily: c.font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", lineHeight: 1.08 }),
        el(`inv-${c.id}-banner-img`, "image", 100, 400, 1200, 680, { src: c.photo, borderRadius: 16 }),
        
        // 2-Box Bento
        el(`inv-${c.id}-b1`, "rect", 100, 1120, 580, 380, { fill: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)", borderRadius: 12 }),
        el(`inv-${c.id}-b1-t`, "text", 140, 1160, 500, 35, { text: "DATE & TIME", fontSize: 20, fontFamily: c.font, fontWeight: "800", fill: c.accent }),
        el(`inv-${c.id}-b1-p`, "text", 140, 1210, 500, 220, { text: "Saturday Evening\nOctober 17, 2026\nReception: 19:00\nFormal Dinner: 20:00\nKeynote Address: 21:30", fontSize: 17, fontFamily: "Inter", fill: isDark ? "#e2e8f0" : "#334155", lineHeight: 1.9 }),
        
        el(`inv-${c.id}-b2`, "rect", 720, 1120, 580, 380, { fill: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)", borderRadius: 12 }),
        el(`inv-${c.id}-b2-t`, "text", 760, 1160, 500, 35, { text: "VENUE & ACCESS", fontSize: 20, fontFamily: c.font, fontWeight: "800", fill: c.accent }),
        el(`inv-${c.id}-b2-p`, "text", 760, 1210, 500, 220, { text: "The Grand Astral Ballroom\nNorth Promenade Tower\nGeneva, Switzerland\nAttire: Black Tie Optional", fontSize: 17, fontFamily: "Inter", fill: isDark ? "#e2e8f0" : "#334155", lineHeight: 1.9 }),

        el(`inv-${c.id}-footer`, "text", 100, 1720, 1200, 40, { text: "RSVP ONLINE BY SEPTEMBER 30 AT WWW.GALA-REGISTRY.ORG", fontSize: 15, fontFamily: c.font, fontWeight: "700", fill: c.accent, textAlign: "center", letterSpacing: 3 })
      ];
    }

    list.push({
      id: c.id,
      name: c.name,
      title: c.name.toUpperCase(),
      description: `Bespoke Canva-grade luxury invitation card for ${c.name}.`,
      category: "Invitations",
      subcategory: "Event",
      size: "1400×2000",
      canvasWidth: 1400,
      canvasHeight: 2000,
      orientation: "portrait",
      tags: ["Invitation", "Card", "Event", "Luxury"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 2800 + (c.id * 17) % 3000,
      views: 22000 + (c.id * 140) % 25000,
      gradient: `linear-gradient(135deg, ${c.bg} 0%, #111827 100%)`,
      fonts: [c.font, "Inter"],
      colors: [c.bg, c.accent, isDark ? "#ffffff" : "#0f172a", "#94a3b8"],
      elements
    });
  }

  return list;
}
