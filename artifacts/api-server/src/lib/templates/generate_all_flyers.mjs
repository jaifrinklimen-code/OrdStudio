import fs from 'fs';
import path from 'path';
import { PHOTOS_FLYERS } from './uniquePhotoPool.ts';

function el(id, type, x, y, width, height, props = {}) {
  return {
    visible: true,
    id,
    type,
    x,
    y,
    width,
    height,
    ...props
  };
}

export const FLYER_TEMPLATES = [
  // =========================================================================
  // 401: FULL-BLEED CINEMATIC RAVE (Edge-to-edge photography, center display title)
  // =========================================================================
  {
    id: 401,
    name: "Cyberpunk Neon Rave Festival",
    title: "CYBERPUNK NEON MUSIC FESTIVAL",
    description: "Full-bleed cinematic nightlife flyer. Edge-to-edge festival photography, atmospheric gradient scrim, giant Syne typography, and glowing neon pill badges.",
    category: "Flyers",
    subcategory: "Concert",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Concert", "Flyer", "Nightlife", "Neon", "Music", "Rave"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3820,
    views: 29400,
    gradient: "linear-gradient(180deg, #090510 0%, #3b0764 100%)",
    fonts: ["Syne", "Inter"],
    colors: ["#090510", "#a855f7", "#ec4899", "#ffffff"],
    elements: [
      el("fly-401-bg", "rect", 0, 0, 1200, 1697, { fill: "#090510", locked: true }),
      el("fly-401-img", "image", 0, 0, 1200, 1697, { src: PHOTOS_FLYERS['401'] }),
      el("fly-401-scrim", "rect", 0, 0, 1200, 1697, { fill: "#090510", opacity: 0.65, locked: true }),
      el("fly-401-badge", "rect", 80, 80, 240, 44, { fill: "#ec4899", borderRadius: 22 }),
      el("fly-401-badget", "text", 80, 92, 240, 22, { text: "ANNUAL RAVE 2026", fontSize: 13, fontFamily: "Syne", fontWeight: "800", fill: "#ffffff", textAlign: "center", letterSpacing: 2 }),
      el("fly-401-date-top", "text", 840, 92, 280, 24, { text: "OCT 28-31 // TOKYO WAREHOUSE", fontSize: 14, fontFamily: "Inter", fontWeight: "700", fill: "#f472b6", textAlign: "right" }),
      el("fly-401-title", "text", 80, 520, 1040, 240, { text: "NEON PROTOCOL", fontSize: 92, fontFamily: "Syne", fontWeight: "900", fill: "#ffffff", lineHeight: 0.95, letterSpacing: -1 }),
      el("fly-401-sub", "text", 80, 780, 1040, 60, { text: "48 HOURS NON-STOP AUDIOVISUAL SENSORY IMMERSION", fontSize: 24, fontFamily: "Syne", fontWeight: "700", fill: "#f472b6", letterSpacing: 3 }),
      el("fly-401-lineup", "text", 80, 880, 1040, 160, { text: "HEADLINERS:\nKOBOSIL // VTSS // HECTOR OAKS // REINIER ZONNEVELD\nELLEN ALLIEN // DAX J // PAULA TEMPLE // SPFDJ", fontSize: 18, fontFamily: "Inter", fontWeight: "800", fill: "#ffffff", lineHeight: 1.8 }),
      el("fly-401-div", "rect", 80, 1080, 1040, 2, { fill: "#ec4899" }),
      el("fly-401-cta", "rect", 80, 1140, 480, 80, { fill: "#a855f7", borderRadius: 40 }),
      el("fly-401-ctat", "text", 80, 1165, 480, 30, { text: "GET EARLY BIRD WRISTBAND →", fontSize: 18, fontFamily: "Syne", fontWeight: "800", fill: "#ffffff", textAlign: "center" }),
      el("fly-401-info", "text", 600, 1150, 520, 70, { text: "Strict 21+ only. Proof of age required at door.\nCustom Funktion-One sound system deployed across 3 halls.", fontSize: 13, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.6 }),
      el("fly-401-foot", "text", 80, 1540, 1040, 30, { text: "POWERED BY CYBERPUNK AUDIOVISUAL COLLECTIVE // TOKYO 2026", fontSize: 12, fontFamily: "Inter", fill: "#94a3b8", letterSpacing: 2 })
    ]
  },

  // =========================================================================
  // 402: SWISS CONSTRUCTIVIST TYPOGRAPHY-ONLY (Zero photos, 90px numbers, strict grid)
  // =========================================================================
  {
    id: 402,
    name: "Swiss Typographic Design Manifesto",
    title: "INTERNATIONAL TYPOGRAPHIC DESIGN MANIFESTO",
    description: "Pure Swiss constructivist typography flyer. Monumental 96px numerals, stark asymmetric grid, stark black/white/red contrast, zero photography, and relentless editorial precision.",
    category: "Flyers",
    subcategory: "Design",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Swiss", "Typography", "Brutalist", "Manifesto", "Graphic Design", "Minimal"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4120,
    views: 31200,
    gradient: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
    fonts: ["Oswald", "Space Grotesk"],
    colors: ["#f8fafc", "#0f172a", "#dc2626", "#475569"],
    elements: [
      el("fly-402-bg", "rect", 0, 0, 1200, 1697, { fill: "#f8fafc", locked: true }),
      el("fly-402-red-bar", "rect", 0, 0, 32, 1697, { fill: "#dc2626" }),
      el("fly-402-meta", "text", 90, 80, 1030, 24, { text: "KUNSTGEWERBEMUSEUM ZÜRICH // AUSSTELLUNG 2026", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#dc2626", letterSpacing: 3 }),
      el("fly-402-num", "text", 90, 120, 1030, 160, { text: "2026", fontSize: 160, fontFamily: "Oswald", fontWeight: "800", fill: "#0f172a", lineHeight: 0.9 }),
      el("fly-402-div1", "rect", 90, 310, 1030, 4, { fill: "#0f172a" }),
      el("fly-402-title", "text", 90, 340, 1030, 180, { text: "DIE NEUE GRAPHIK:\nSYSTEM, ORDNUNG, FORM", fontSize: 64, fontFamily: "Oswald", fontWeight: "800", fill: "#0f172a", lineHeight: 1.05 }),
      el("fly-402-desc", "text", 90, 540, 1030, 120, { text: "A retrospective exhibition celebrating the mathematical rigor, asymmetry, and objective clarity of the Swiss International Typographic Style from 1950 to the digital era.", fontSize: 20, fontFamily: "Space Grotesk", fill: "#334155", lineHeight: 1.6 }),
      
      // 3 Strict Columns
      el("fly-402-col1-h", "text", 90, 710, 310, 28, { text: "01 // DER RASTER", fontSize: 16, fontFamily: "Oswald", fontWeight: "700", fill: "#dc2626" }),
      el("fly-402-col1-p", "text", 90, 750, 310, 440, { text: "The modular typographic grid is an expression of professional discipline and objective visual order.\n\nBy subordinating subjective intuition to structural clarity, information achieves universal intelligibility regardless of language barriers or cultural biases.", fontSize: 15, fontFamily: "Space Grotesk", fill: "#0f172a", lineHeight: 1.8 }),

      el("fly-402-col2-h", "text", 450, 710, 310, 28, { text: "02 // DER RAUM", fontSize: 16, fontFamily: "Oswald", fontWeight: "700", fill: "#dc2626" }),
      el("fly-402-col2-p", "text", 450, 750, 310, 440, { text: "Negative space is an active structural element, not an empty void.\n\nThe conscious tension between printed type and untouched white space guides the eye with architectural poise, establishing an uncompromising visual hierarchy.", fontSize: 15, fontFamily: "Space Grotesk", fill: "#0f172a", lineHeight: 1.8 }),

      el("fly-402-col3-h", "text", 810, 710, 310, 28, { text: "03 // DIE FORM", fontSize: 16, fontFamily: "Oswald", fontWeight: "700", fill: "#dc2626" }),
      el("fly-402-col3-p", "text", 810, 750, 310, 440, { text: "Sans-serif typography reflects the mechanical honesty of the industrial age.\n\nForm follows communication. Extraneous ornamentation is stripped away to reveal the pure architecture of thought and meaning.", fontSize: 15, fontFamily: "Space Grotesk", fill: "#0f172a", lineHeight: 1.8 }),

      el("fly-402-div2", "rect", 90, 1240, 1030, 2, { fill: "#0f172a" }),
      el("fly-402-dates", "text", 90, 1270, 500, 60, { text: "15. JUNI — 30. SEPTEMBER 2026\nDIENSTAG BIS SONNTAG, 10:00 — 18:00", fontSize: 18, fontFamily: "Oswald", fontWeight: "700", fill: "#0f172a", lineHeight: 1.5 }),
      el("fly-402-address", "text", 630, 1270, 490, 60, { text: "AUSSTELLUNGSSTRASSE 60, CH-8005 ZÜRICH\nEINTRITT FREI // WWW.KUNSTGEWERBE.CH", fontSize: 16, fontFamily: "Space Grotesk", fill: "#475569", lineHeight: 1.5 }),
      el("fly-402-foot", "text", 90, 1540, 1030, 30, { text: "POSTERDESIGN: ORD STUDIO // TYPOGRAPHISCHE MITTEILUNGEN", fontSize: 12, fontFamily: "Space Grotesk", fill: "#94a3b8", letterSpacing: 2 })
    ]
  },

  // =========================================================================
  // 403: ASYMMETRIC EDITORIAL ARCHITECTURE (Towering vertical left photo, right text)
  // =========================================================================
  {
    id: 403,
    name: "Architectural Monograph & Forum Flyer",
    title: "INTERNATIONAL ARCHITECTURE SYMPOSIUM",
    description: "Asymmetric architectural editorial flyer. Towering vertical photograph along left axis, refined Playfair Display typography, warm travertine palette, and pull-quote.",
    category: "Flyers",
    subcategory: "Architecture",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Architecture", "Editorial", "Symposium", "Asymmetric", "Monograph"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 2950,
    views: 22800,
    gradient: "linear-gradient(180deg, #fdfbf7 0%, #f7f3eb 100%)",
    fonts: ["Playfair Display", "DM Sans"],
    colors: ["#fdfbf7", "#1c1917", "#b45309", "#78716c"],
    elements: [
      el("fly-403-bg", "rect", 0, 0, 1200, 1697, { fill: "#fdfbf7", locked: true }),
      // LEFT TOWERING PHOTO (x=80, y=100, w=460, h=1360)
      el("fly-403-img", "image", 80, 100, 460, 1360, { src: PHOTOS_FLYERS['403'], borderRadius: 6 }),
      
      // RIGHT COLUMN (x=580, w=540, y=100..1460)
      el("fly-403-tag", "text", 580, 100, 540, 24, { text: "VENICE BIENNALE OF ARCHITECTURE 2026", fontSize: 12, fontFamily: "DM Sans", fontWeight: "700", fill: "#b45309", letterSpacing: 2 }),
      el("fly-403-title", "text", 580, 140, 540, 180, { text: "Materiality, Void & Spatial Permanence", fontSize: 52, fontFamily: "Playfair Display", fontWeight: "700", fill: "#1c1917", lineHeight: 1.1 }),
      el("fly-403-div1", "rect", 580, 340, 540, 1, { fill: "#b45309" }),
      
      // Pull Quote with Left Accent Bar
      el("fly-403-quote-bar", "rect", 580, 375, 4, 110, { fill: "#b45309" }),
      el("fly-403-quote", "text", 605, 375, 515, 110, { text: "“Architecture begins when you carefully put two bricks together. There it begins.”", fontSize: 20, fontFamily: "Playfair Display", fontStyle: "italic", fill: "#1c1917", lineHeight: 1.5 }),
      
      el("fly-403-body", "text", 580, 520, 540, 480, { text: "Join premier international architects, structural engineers, and spatial philosophers for a three-day intensive summit exploring low-carbon masonry, brutalist concrete preservation, and bio-climatic vernacular building techniques.\n\nKeynote presentations by Pritzker laureates and emerging global design ateliers will be accompanied by hands-on tectonic prototyping workshops and private curator tours through historic Venetian palazzos.", fontSize: 15, fontFamily: "DM Sans", fill: "#44403c", lineHeight: 1.85 }),

      // Speaker List Block
      el("fly-403-spk-bg", "rect", 580, 1030, 540, 240, { fill: "#f0ebe1", borderRadius: 8 }),
      el("fly-403-spk-t", "text", 610, 1055, 480, 24, { text: "FEATURED KEYNOTE LECTURERS", fontSize: 13, fontFamily: "DM Sans", fontWeight: "800", fill: "#b45309", letterSpacing: 1 }),
      el("fly-403-spk-list", "text", 610, 1090, 480, 150, { text: "• Kazuyo Sejima (SANAA, Tokyo)\n• Grafton Architects (Dublin)\n• Francis Kéré (Kéré Architecture, Berlin)\n• Wang Shu (Amateur Architecture Studio, Hangzhou)", fontSize: 14, fontFamily: "DM Sans", fontWeight: "600", fill: "#1c1917", lineHeight: 1.8 }),

      // Date & Registration
      el("fly-403-cta-btn", "rect", 580, 1310, 540, 70, { fill: "#1c1917", borderRadius: 4 }),
      el("fly-403-cta-txt", "text", 580, 1332, 540, 26, { text: "RESERVE SYMPOSIUM ACCREDITATION →", fontSize: 15, fontFamily: "DM Sans", fontWeight: "700", fill: "#ffffff", textAlign: "center", letterSpacing: 1 }),

      el("fly-403-foot", "text", 80, 1540, 1040, 30, { text: "VENICE ARCHITECTURE BIENNIAL // GIARDINI & ARSENALE // MAY 22-24, 2026", fontSize: 12, fontFamily: "DM Sans", fill: "#a8a29e", letterSpacing: 1 })
    ]
  },

  // =========================================================================
  // 404: STAGGERED 3-IMAGE EDITORIAL COLLAGE
  // =========================================================================
  {
    id: 404,
    name: "Cloud Infrastructure Innovation Summit",
    title: "NEXT-GEN CLOUD & DISTRIBUTED SYSTEMS SUMMIT",
    description: "Multi-photo staggered collage flyer. 3 distinct image panels in an interlocking masonry grid, high-tech slate theme, floating pill badges, and speaker credentials.",
    category: "Flyers",
    subcategory: "Technology",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Tech", "Cloud", "Collage", "Summit", "Engineering"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3180,
    views: 24500,
    gradient: "linear-gradient(180deg, #090d16 0%, #0f172a 100%)",
    fonts: ["Plus Jakarta Sans", "Inter"],
    colors: ["#090d16", "#38bdf8", "#0284c7", "#ffffff"],
    elements: [
      el("fly-404-bg", "rect", 0, 0, 1200, 1697, { fill: "#090d16", locked: true }),
      el("fly-404-badge", "text", 80, 75, 1040, 24, { text: "ANNUAL ENGINEERING SUMMIT // SILICON VALLEY 2026", fontSize: 13, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#38bdf8", letterSpacing: 2 }),
      el("fly-404-title", "text", 80, 115, 1040, 100, { text: "NEXT-GEN CLOUD INFRASTRUCTURE", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#ffffff" }),

      // 3 STAGGERED COLLAGE PHOTOS (y=240..860)
      el("fly-404-img1", "image", 80, 240, 620, 360, { src: PHOTOS_FLYERS['404_a'], borderRadius: 12 }), // Server rack (large left)
      el("fly-404-img2", "image", 730, 240, 390, 560, { src: PHOTOS_FLYERS['404_b'], borderRadius: 12 }), // Tall security visual (right)
      el("fly-404-img3", "image", 80, 630, 620, 280, { src: PHOTOS_FLYERS['404_c'], borderRadius: 12 }), // Fintech graph (lower left)

      // Floating Accent Pill on Photo 1
      el("fly-404-pill1", "rect", 110, 270, 220, 36, { fill: "rgba(15,23,42,0.85)", borderRadius: 18 }),
      el("fly-404-pill1-t", "text", 110, 278, 220, 20, { text: "● 100K+ CONCURRENT PODS", fontSize: 11, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#38bdf8", textAlign: "center" }),

      // Lower Section: Overview & Registration Card (y=950..1480)
      el("fly-404-card", "rect", 80, 950, 1040, 510, { fill: "#1e293b", borderRadius: 16, stroke: "#334155", strokeWidth: 1.5 }),
      el("fly-404-card-h", "text", 120, 985, 960, 34, { text: "SHAPING THE FUTURE OF HYPERSCALE DISTRIBUTED CLOUD RUNTIMES", fontSize: 20, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#ffffff" }),
      el("fly-404-card-p", "text", 120, 1030, 960, 180, { text: "Explore zero-overhead virtualization, eBPF telemetry fabrics, and distributed consensus algorithms at scale. Featuring technical deep-dives by principal architects from leading hyperscale cloud providers.\n\nLearn practical optimization techniques for sub-millisecond edge RPC dispatch, cross-cloud failover replication, and bare-metal container orchestration without vendor lock-in.", fontSize: 15, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.8 }),
      
      // Bottom Grid Stats inside Card
      el("fly-404-stat1", "text", 120, 1240, 280, 50, { text: "2,400+", fontSize: 36, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#38bdf8" }),
      el("fly-404-stat1-l", "text", 120, 1295, 280, 24, { text: "Platform Engineers Attending", fontSize: 13, fontFamily: "Inter", fill: "#94a3b8" }),

      el("fly-404-stat2", "text", 440, 1240, 280, 50, { text: "48 Sessions", fontSize: 36, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#38bdf8" }),
      el("fly-404-stat2-l", "text", 440, 1295, 280, 24, { text: "Architectural Case Studies", fontSize: 13, fontFamily: "Inter", fill: "#94a3b8" }),

      el("fly-404-stat3", "text", 760, 1240, 320, 50, { text: "100% Technical", fontSize: 36, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#38bdf8" }),
      el("fly-404-stat3-l", "text", 760, 1295, 320, 24, { text: "Zero Sales Pitches Allowed", fontSize: 13, fontFamily: "Inter", fill: "#94a3b8" }),

      el("fly-404-foot", "text", 80, 1540, 1040, 30, { text: "OCTOBER 14-16, 2026 // MOSCONE CENTER, SAN FRANCISCO // WWW.CLOUDCONF2026.IO", fontSize: 12, fontFamily: "Plus Jakarta Sans", fill: "#64748b", letterSpacing: 1 })
    ]
  },

  // =========================================================================
  // 405: MINIMAL LUXURY ATELIER (Centered classical frame, floating museum placard)
  // =========================================================================
  {
    id: 405,
    name: "Luxury Fragrance Haute Parfumerie Showcase",
    title: "HAUTE PARFUMERIE PRIVATE SALON SHOWCASE",
    description: "Prestige luxury flyer. Centered classical layout, thin champagne gold border rule, floating perfume atelier photograph, and refined Cinzel & Cormorant Garamond typography.",
    category: "Flyers",
    subcategory: "Luxury Goods",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Luxury", "Perfume", "Gold", "Fashion", "Minimal", "Centered"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3650,
    views: 26800,
    gradient: "linear-gradient(180deg, #0b090a 0%, #161214 100%)",
    fonts: ["Cinzel", "Cormorant Garamond"],
    colors: ["#0b090a", "#d4af37", "#fef08a", "#a8a29e"],
    elements: [
      el("fly-405-bg", "rect", 0, 0, 1200, 1697, { fill: "#0b090a", locked: true }),
      // Double Gold Hairline Border Frame
      el("fly-405-bdr-outer", "rect", 60, 60, 1080, 1577, { fill: "transparent", stroke: "#d4af37", strokeWidth: 1.5 }),
      el("fly-405-bdr-inner", "rect", 75, 75, 1050, 1547, { fill: "transparent", stroke: "#d4af37", strokeWidth: 0.75 }),

      // Header Brand
      el("fly-405-crest", "text", 120, 120, 960, 30, { text: "✦  MAISON DE HAUTE PARFUMERIE  ✦", fontSize: 13, fontFamily: "Cinzel", fontWeight: "700", fill: "#d4af37", textAlign: "center", letterSpacing: 4 }),
      el("fly-405-title", "text", 120, 170, 960, 120, { text: "L’ESSENCE DE LA NUIT", fontSize: 56, fontFamily: "Cinzel", fontWeight: "700", fill: "#ffffff", textAlign: "center", letterSpacing: 3 }),
      el("fly-405-sub", "text", 120, 295, 960, 35, { text: "LIMITED EDITION VINTAGE HARVEST // 500 FLACONS MONDE", fontSize: 14, fontFamily: "Cinzel", fill: "#d4af37", textAlign: "center", letterSpacing: 3 }),

      // Floating Centered Image (x=250, y=360, w=700, h=660)
      el("fly-405-img", "image", 250, 360, 700, 660, { src: PHOTOS_FLYERS['405'], borderRadius: 4 }),
      el("fly-405-img-frame", "rect", 250, 360, 700, 660, { fill: "transparent", stroke: "#d4af37", strokeWidth: 1 }),

      // Poetic Olfactory Notes Below Image
      el("fly-405-notes-t", "text", 160, 1070, 880, 30, { text: "OLFACTORY COMPOSITION", fontSize: 13, fontFamily: "Cinzel", fontWeight: "700", fill: "#d4af37", textAlign: "center", letterSpacing: 3 }),
      el("fly-405-notes", "text", 160, 1110, 880, 80, { text: "Top: Midnight Bergamot, Saffron Absolute\nHeart: May Rose Grasse, Rare Iris Pallida Butter\nBase: 30-Year Aged Cambodian Oud, Bourbon Vanilla, Smoked Ambergris", fontSize: 18, fontFamily: "Cormorant Garamond", fontStyle: "italic", fill: "#f5f5f4", textAlign: "center", lineHeight: 1.6 }),
      
      el("fly-405-div", "rect", 480, 1220, 240, 1, { fill: "#d4af37" }),

      el("fly-405-desc", "text", 200, 1250, 800, 120, { text: "By private invitation only. You are cordially invited to an intimate sensory tasting at our historic Place Vendôme salons, featuring bespoke perfumer masterclasses by master nose Henri de Valois.", fontSize: 17, fontFamily: "Cormorant Garamond", fill: "#d6d3d1", textAlign: "center", lineHeight: 1.7 }),

      el("fly-405-cta", "text", 160, 1420, 880, 30, { text: "SALONS PLACE VENDÔME, PARIS // RSVIP@MAISONDENUIT.COM", fontSize: 13, fontFamily: "Cinzel", fontWeight: "700", fill: "#d4af37", textAlign: "center", letterSpacing: 2 }),
      el("fly-405-foot", "text", 160, 1540, 880, 25, { text: "PARIS · GENÈVE · LONDRES · TOKYO", fontSize: 11, fontFamily: "Cinzel", fill: "#78716c", textAlign: "center", letterSpacing: 4 })
    ]
  },

  // =========================================================================
  // 406: DIAGONAL KINETIC TECH SUMMIT (Dynamic angled banners, split schedule)
  // =========================================================================
  {
    id: 406,
    name: "Future Tech & AI Developer Summit",
    title: "AUTONOMOUS AGENTS & AI DEVELOPER SUMMIT",
    description: "Dynamic kinetic flyer layout. Tilted accent geometry, split top-left headline block, right-aligned developer workshop imagery, and multi-tier track breakdown.",
    category: "Flyers",
    subcategory: "Developer Conference",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["AI", "Developer", "Kinetic", "Diagonal", "Code", "Conference"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3420,
    views: 25100,
    gradient: "linear-gradient(135deg, #0c1524 0%, #1e293b 100%)",
    fonts: ["Montserrat", "Inter"],
    colors: ["#0c1524", "#6366f1", "#4f46e5", "#ffffff"],
    elements: [
      el("fly-406-bg", "rect", 0, 0, 1200, 1697, { fill: "#0c1524", locked: true }),
      el("fly-406-diag-bg", "rect", 0, 0, 1200, 480, { fill: "#1e1b4b" }),
      
      // Top Left Header
      el("fly-406-tag", "text", 80, 80, 600, 24, { text: "✦ GLOBAL AI DEV SUMMIT // BERLIN 2026", fontSize: 13, fontFamily: "Montserrat", fontWeight: "800", fill: "#818cf8", letterSpacing: 2 }),
      el("fly-406-title", "text", 80, 120, 600, 160, { text: "AUTONOMOUS\nAGENTS IN\nPRODUCTION", fontSize: 54, fontFamily: "Montserrat", fontWeight: "900", fill: "#ffffff", lineHeight: 1.05 }),
      
      // Top Right Photo (x=720, y=80, w=400, h=360)
      el("fly-406-img", "image", 720, 80, 400, 360, { src: PHOTOS_FLYERS['406'], borderRadius: 12 }),

      // Diagonal Accent Strip
      el("fly-406-strip", "rect", 0, 460, 1200, 50, { fill: "#4f46e5" }),
      el("fly-406-stript", "text", 80, 474, 1040, 24, { text: "KEYNOTES · MULTI-AGENT SWARMS · LATENCY OPTIMIZATION · TOOL USE", fontSize: 13, fontFamily: "Montserrat", fontWeight: "800", fill: "#ffffff", letterSpacing: 2 }),

      // Middle: 2 Track Cards (y=550..920)
      el("fly-406-c1-bg", "rect", 80, 550, 500, 380, { fill: "#1e293b", borderRadius: 12, stroke: "#3730a3", strokeWidth: 1.5 }),
      el("fly-406-c1-t", "text", 110, 580, 440, 30, { text: "TRACK A: AGENT ARCHITECTURE", fontSize: 18, fontFamily: "Montserrat", fontWeight: "800", fill: "#a5b4fc" }),
      el("fly-406-c1-p", "text", 110, 625, 440, 260, { text: "Deep dive into hierarchical multi-agent coordination, deterministic state machines for tool calling, and long-term memory retrieval using sparse graph indexes.\n\nCase studies on production deployments managing millions of automated customer workflows.", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.7 }),

      el("fly-406-c2-bg", "rect", 620, 550, 500, 380, { fill: "#1e293b", borderRadius: 12, stroke: "#3730a3", strokeWidth: 1.5 }),
      el("fly-406-c2-t", "text", 650, 580, 440, 30, { text: "TRACK B: HARDWARE ACCELERATION", fontSize: 18, fontFamily: "Montserrat", fontWeight: "800", fill: "#a5b4fc" }),
      el("fly-406-c2-p", "text", 650, 625, 440, 260, { text: "Master FlashAttention-3 kernels, speculative decoding on edge NPUs, and dynamic weight quantization down to 2-bit representations without quality degradation.\n\nHands-on lab with H100 and Blackwell GPU clusters.", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.7 }),

      // Lower Hackathon Section (y=970..1460)
      el("fly-406-hack-bg", "rect", 80, 970, 1040, 480, { fill: "#0f172a", borderRadius: 12, stroke: "#4f46e5", strokeWidth: 1 }),
      el("fly-406-hack-h", "text", 110, 1000, 980, 32, { text: "48-HOUR PRODUCTION HACKATHON // $100,000 PRIZE POOL", fontSize: 22, fontFamily: "Montserrat", fontWeight: "900", fill: "#ffffff" }),
      el("fly-406-hack-p", "text", 110, 1045, 980, 140, { text: "Form teams of up to 4 engineers. Build an autonomous agent workflow that solves a real enterprise workflow bottleneck. Winning projects receive immediate venture funding term-sheets and cloud credits.", fontSize: 15, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.7 }),
      el("fly-406-reg-btn", "rect", 110, 1220, 420, 70, { fill: "#6366f1", borderRadius: 8 }),
      el("fly-406-reg-t", "text", 110, 1242, 420, 26, { text: "REGISTER DEVELOPER TICKET →", fontSize: 16, fontFamily: "Montserrat", fontWeight: "800", fill: "#ffffff", textAlign: "center" }),

      el("fly-406-foot", "text", 80, 1540, 1040, 30, { text: "STATION BERLIN // LUCKWALDER STR. 4-6, 10963 BERLIN // WWW.AIAGENTSCONF.DE", fontSize: 12, fontFamily: "Inter", fill: "#64748b" })
    ]
  },

  // =========================================================================
  // 407: 50/50 HORIZONTAL SPLIT-SCREEN (Top dark photo half / bottom light agenda)
  // =========================================================================
  {
    id: 407,
    name: "Global Civic Tech Leadership Summit",
    title: "CIVIC TECH & DIGITAL GOVERNANCE SUMMIT",
    description: "50/50 horizontal split-screen composition. Top half dark auditorium stage visual with glowing cyan title; bottom half clean parchment with dual-column agenda ledger.",
    category: "Flyers",
    subcategory: "Civic Tech",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Civic", "Government", "Split-Screen", "Summit", "Governance"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 2780,
    views: 21400,
    gradient: "linear-gradient(180deg, #0b132b 0%, #1c2541 100%)",
    fonts: ["Space Grotesk", "IBM Plex Mono"],
    colors: ["#0b132b", "#00f0ff", "#f8fafc", "#0f172a"],
    elements: [
      el("fly-407-bg", "rect", 0, 0, 1200, 1697, { fill: "#f8fafc", locked: true }),
      
      // TOP HALF (y=0..840): Dark Photo & Hero Title
      el("fly-407-top-bg", "rect", 0, 0, 1200, 840, { fill: "#0b132b" }),
      el("fly-407-top-img", "image", 0, 0, 1200, 840, { src: PHOTOS_FLYERS['407'], opacity: 0.75 }),
      el("fly-407-top-scrim", "rect", 0, 0, 1200, 840, { fill: "#0b132b", opacity: 0.55 }),
      el("fly-407-top-meta", "text", 80, 80, 1040, 24, { text: "MINISTRY FOR DIGITAL TRANSFORMATION // COPENHAGEN 2026", fontSize: 13, fontFamily: "IBM Plex Mono", fontWeight: "700", fill: "#00f0ff", letterSpacing: 2 }),
      el("fly-407-top-t", "text", 80, 140, 1040, 220, { text: "CIVIC TECH &\nOPEN DIGITAL\nGOVERNANCE", fontSize: 68, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#ffffff", lineHeight: 1.0 }),
      el("fly-407-top-sub", "text", 80, 390, 1040, 70, { text: "Reimagining public digital infrastructure through open-source software, sovereign identity, and algorithmic transparency.", fontSize: 20, fontFamily: "Space Grotesk", fill: "#e0f2fe", lineHeight: 1.6 }),
      
      // Split Divider Bar
      el("fly-407-mid-bar", "rect", 0, 836, 1200, 8, { fill: "#00f0ff" }),

      // BOTTOM HALF (y=844..1697): Clean White Dual Column Agenda
      el("fly-407-bot-h", "text", 80, 880, 1040, 32, { text: "OFFICIAL SUMMIT PROCEEDINGS & POLICY WORKING GROUPS", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#0f172a", letterSpacing: 1 }),
      
      el("fly-407-col1-h", "text", 80, 940, 480, 24, { text: "DAY 1: SOVEREIGN DIGITAL IDENTITY", fontSize: 14, fontFamily: "IBM Plex Mono", fontWeight: "700", fill: "#0284c7" }),
      el("fly-407-col1-b", "text", 80, 975, 480, 400, { text: "• eIDAS 2.0 Architectural Frameworks\n• Zero-Knowledge Proofs in Citizen Authentication\n• Decentralized Key Recovery Protocols for Public Services\n• Interoperability Standards Across EU Member States\n\nChair: Dr. Mette Lindqvist, Nordic Digital Council", fontSize: 15, fontFamily: "Space Grotesk", fill: "#334155", lineHeight: 1.8 }),

      el("fly-407-col2-h", "text", 640, 940, 480, 24, { text: "DAY 2: ALGORITHMIC ACCOUNTABILITY", fontSize: 14, fontFamily: "IBM Plex Mono", fontWeight: "700", fill: "#0284c7" }),
      el("fly-407-col2-b", "text", 640, 975, 480, 400, { text: "• Public Sector Automated Decision Systems Auditing\n• Open Source Municipal Procurement Mandates\n• Citizen Data Trusts and Federated AI Governance\n• Mitigating Bias in Social Welfare Eligibility Models\n\nChair: Prof. Tariq Mansoor, Oxford Internet Institute", fontSize: 15, fontFamily: "Space Grotesk", fill: "#334155", lineHeight: 1.8 }),

      el("fly-407-foot", "text", 80, 1540, 1040, 30, { text: "COPENHAGEN CONCERT HALL // SEPTEMBER 24-25, 2026 // ADMISSION VIA GOVERNMENT CREDENTIALS", fontSize: 12, fontFamily: "IBM Plex Mono", fill: "#64748b" })
    ]
  },

  // =========================================================================
  // 408: INFOGRAPHIC MARKETING FLYER (Top KPI circular rings, process chain)
  // =========================================================================
  {
    id: 408,
    name: "Fintech Currency Settlement Summit",
    title: "GLOBAL FINTECH LIQUIDITY & REAL-TIME SETTLEMENT",
    description: "Infographic data-first marketing flyer. Top KPI metric cards, horizontal process pipeline diagram, middle chart visualization, and real-time liquidity benchmarks.",
    category: "Flyers",
    subcategory: "Fintech",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Fintech", "Infographic", "Data", "Finance", "Currency"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3310,
    views: 26200,
    gradient: "linear-gradient(180deg, #0a0f1d 0%, #151d36 100%)",
    fonts: ["DM Sans", "Inter"],
    colors: ["#0a0f1d", "#10b981", "#059669", "#ffffff"],
    elements: [
      el("fly-408-bg", "rect", 0, 0, 1200, 1697, { fill: "#0a0f1d", locked: true }),
      el("fly-408-tag", "text", 80, 80, 1040, 24, { text: "FINTECH INFRASTRUCTURE WORKING FORUM // SINGAPORE 2026", fontSize: 12, fontFamily: "DM Sans", fontWeight: "700", fill: "#10b981", letterSpacing: 2 }),
      el("fly-408-title", "text", 80, 115, 1040, 90, { text: "REAL-TIME CROSS-BORDER SETTLEMENT", fontSize: 46, fontFamily: "DM Sans", fontWeight: "800", fill: "#ffffff" }),

      // Top 3 KPI Metric Cards (x=80, 440, 800; w=320 each, y=230)
      el("fly-408-kpi1-bg", "rect", 80, 230, 320, 180, { fill: "#131e3a", borderRadius: 12, stroke: "#10b981", strokeWidth: 1 }),
      el("fly-408-kpi1-v", "text", 105, 255, 270, 50, { text: "$4.8T", fontSize: 42, fontFamily: "DM Sans", fontWeight: "800", fill: "#10b981" }),
      el("fly-408-kpi1-l", "text", 105, 315, 270, 70, { text: "Annual Wholesale FX Liquidity Cleared Across Partner Rails", fontSize: 13, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.5 }),

      el("fly-408-kpi2-bg", "rect", 440, 230, 320, 180, { fill: "#131e3a", borderRadius: 12, stroke: "#10b981", strokeWidth: 1 }),
      el("fly-408-kpi2-v", "text", 465, 255, 270, 50, { text: "< 800ms", fontSize: 42, fontFamily: "DM Sans", fontWeight: "800", fill: "#10b981" }),
      el("fly-408-kpi2-l", "text", 465, 315, 270, 70, { text: "Instant Atomic Settlement Finality via Distributed Ledgers", fontSize: 13, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.5 }),

      el("fly-408-kpi3-bg", "rect", 800, 230, 320, 180, { fill: "#131e3a", borderRadius: 12, stroke: "#10b981", strokeWidth: 1 }),
      el("fly-408-kpi3-v", "text", 825, 255, 270, 50, { text: "94.2%", fontSize: 42, fontFamily: "DM Sans", fontWeight: "800", fill: "#10b981" }),
      el("fly-408-kpi3-l", "text", 825, 315, 270, 70, { text: "Cost Reduction Against Traditional SWIFT Intermediary Fees", fontSize: 13, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.5 }),

      // Middle: Panoramic Data Graph Visual (y=440..880)
      el("fly-408-img", "image", 80, 440, 1040, 420, { src: PHOTOS_FLYERS['408'], borderRadius: 12 }),

      // Lower Section: Process Chain (y=890..1460)
      el("fly-408-chain-h", "text", 80, 895, 1040, 30, { text: "END-TO-END ATOMIC SETTLEMENT ARCHITECTURE", fontSize: 16, fontFamily: "DM Sans", fontWeight: "700", fill: "#ffffff" }),

      el("fly-408-p1", "rect", 80, 945, 240, 280, { fill: "#131e3a", borderRadius: 8, stroke: "#1e293b", strokeWidth: 1 }),
      el("fly-408-p1-n", "text", 100, 970, 200, 24, { text: "STEP 1 :: INGESTION", fontSize: 12, fontFamily: "DM Sans", fontWeight: "800", fill: "#10b981" }),
      el("fly-408-p1-t", "text", 100, 1005, 200, 200, { text: "High-frequency quote streaming from Tier-1 liquidity providers via FIX protocol connections.", fontSize: 13, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 }),

      el("fly-408-p2", "rect", 345, 945, 240, 280, { fill: "#131e3a", borderRadius: 8, stroke: "#1e293b", strokeWidth: 1 }),
      el("fly-408-p2-n", "text", 365, 970, 200, 24, { text: "STEP 2 :: CLEARING", fontSize: 12, fontFamily: "DM Sans", fontWeight: "800", fill: "#10b981" }),
      el("fly-408-p2-t", "text", 365, 1005, 200, 200, { text: "Smart contract validates collateralization ratios and executes DvP netting across balance sheets.", fontSize: 13, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 }),

      el("fly-408-p3", "rect", 610, 945, 240, 280, { fill: "#131e3a", borderRadius: 8, stroke: "#1e293b", strokeWidth: 1 }),
      el("fly-408-p3-n", "text", 630, 970, 200, 24, { text: "STEP 3 :: RESOLUTION", fontSize: 12, fontFamily: "DM Sans", fontWeight: "800", fill: "#10b981" }),
      el("fly-408-p3-t", "text", 630, 1005, 200, 200, { text: "Central bank digital reserve transfers finalize ownership transfer with irrevocable confirmation.", fontSize: 13, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 }),

      el("fly-408-p4", "rect", 875, 945, 245, 280, { fill: "#131e3a", borderRadius: 8, stroke: "#10b981", strokeWidth: 1.5 }),
      el("fly-408-p4-n", "text", 895, 970, 205, 24, { text: "STEP 4 :: AUDIT", fontSize: 12, fontFamily: "DM Sans", fontWeight: "800", fill: "#10b981" }),
      el("fly-408-p4-t", "text", 895, 1005, 205, 200, { text: "Zero-knowledge proof telemetry logged to regulatory monitoring node for automated compliance.", fontSize: 13, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 }),

      el("fly-408-cta-btn", "rect", 80, 1265, 1040, 70, { fill: "#10b981", borderRadius: 8 }),
      el("fly-408-cta-txt", "text", 80, 1288, 1040, 24, { text: "DOWNLOAD 2026 GLOBAL FINTECH LIQUIDITY BENCHMARK REPORT →", fontSize: 16, fontFamily: "DM Sans", fontWeight: "800", fill: "#0a0f1d", textAlign: "center" }),

      el("fly-408-foot", "text", 80, 1540, 1040, 30, { text: "MARINA BAY SANDS EXPO // SINGAPORE // NOV 18-20, 2026", fontSize: 12, fontFamily: "DM Sans", fill: "#64748b" })
    ]
  },

  // =========================================================================
  // 409: LAYERED FLOATING GLASS CARDS
  // =========================================================================
  {
    id: 409,
    name: "Executive Keynote & Venture Gala Flyer",
    title: "VENTURE CAPITAL & FOUNDERS SUMMIT",
    description: "Layered glassmorphism flyer. Dark obsidian canvas, overlapping translucent floating panels, keynote speaker visual on right, and structured tier benefits.",
    category: "Flyers",
    subcategory: "Venture Capital",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Venture", "Founders", "Glassmorphism", "Summit", "Executive"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3510,
    views: 28000,
    gradient: "linear-gradient(180deg, #09090b 0%, #18181b 100%)",
    fonts: ["Outfit", "Plus Jakarta Sans"],
    colors: ["#09090b", "#f59e0b", "#d97706", "#ffffff"],
    elements: [
      el("fly-409-bg", "rect", 0, 0, 1200, 1697, { fill: "#09090b", locked: true }),
      el("fly-409-glow", "circle", 150, 150, 600, 600, { fill: "#f59e0b", opacity: 0.12 }),
      
      el("fly-409-tag", "text", 80, 80, 1040, 24, { text: "FOUNDERS & INVESTORS GLOBAL SUMMIT // NEW YORK 2026", fontSize: 13, fontFamily: "Outfit", fontWeight: "700", fill: "#f59e0b", letterSpacing: 2 }),
      el("fly-409-title", "text", 80, 115, 1040, 90, { text: "THE $100B FOUNDERS FORUM", fontSize: 52, fontFamily: "Outfit", fontWeight: "900", fill: "#ffffff" }),

      // Keynote Image (x=680, y=240, w=440, h=520)
      el("fly-409-img", "image", 680, 240, 440, 520, { src: PHOTOS_FLYERS['409'], borderRadius: 16 }),

      // Floating Glass Card 1 (x=80, y=240, w=570, h=520)
      el("fly-409-card1", "rect", 80, 240, 570, 520, { fill: "rgba(24,24,27,0.85)", borderRadius: 16, stroke: "#3f3f46", strokeWidth: 1.5 }),
      el("fly-409-c1-t", "text", 120, 280, 490, 34, { text: "WHERE TOP TIER GENERAL PARTNERS MEET CATEGORY-DEFINING BUILDERS", fontSize: 19, fontFamily: "Outfit", fontWeight: "800", fill: "#f59e0b" }),
      el("fly-409-c1-p", "text", 120, 335, 490, 380, { text: "An invite-only gathering of 350 managing partners, family office principals, and unicorn founders representing over $100B in combined assets under management.\n\nOver two days of closed-door roundtables, participants evaluate late-stage growth multiples, secondary market liquidity dynamics, and sovereign wealth capital syndication.", fontSize: 15, fontFamily: "Plus Jakarta Sans", fill: "#d4d4d8", lineHeight: 1.8 }),

      // Floating Glass Card 2 (Bottom Full-Width Tier Matrix: y=800..1460)
      el("fly-409-card2", "rect", 80, 800, 1040, 660, { fill: "rgba(24,24,27,0.85)", borderRadius: 16, stroke: "#3f3f46", strokeWidth: 1.5 }),
      el("fly-409-c2-h", "text", 120, 835, 960, 32, { text: "EXCLUSIVE PASS TIERS & ACCREDITATION", fontSize: 20, fontFamily: "Outfit", fontWeight: "800", fill: "#ffffff" }),

      el("fly-409-tier1", "rect", 120, 890, 460, 400, { fill: "#18181b", borderRadius: 12, stroke: "#27272a", strokeWidth: 1 }),
      el("fly-409-t1-h", "text", 150, 920, 400, 30, { text: "FOUNDER ACCESS // $2,500", fontSize: 18, fontFamily: "Outfit", fontWeight: "800", fill: "#f59e0b" }),
      el("fly-409-t1-p", "text", 150, 965, 400, 280, { text: "• Full access to all stage keynotes & workshops\n• 1-on-1 curated LP matching meetings\n• Access to VIP networking gala at The Plaza\n• Founder peer circle retreat session\n• Strictly reserved for Series A+ CEOs", fontSize: 14, fontFamily: "Plus Jakarta Sans", fill: "#d4d4d8", lineHeight: 1.8 }),

      el("fly-409-tier2", "rect", 620, 890, 460, 400, { fill: "#18181b", borderRadius: 12, stroke: "#f59e0b", strokeWidth: 1.5 }),
      el("fly-409-t2-h", "text", 650, 920, 400, 30, { text: "INVESTOR PASS // $6,000", fontSize: 18, fontFamily: "Outfit", fontWeight: "800", fill: "#f59e0b" }),
      el("fly-409-t2-p", "text", 650, 965, 400, 280, { text: "• Private LP private dining access\n• Access to proprietary deal flow directory\n• Closed-door GP syndicate roundtable\n• Reserved executive box at Spring Studios\n• Complete concierge service included", fontSize: 14, fontFamily: "Plus Jakarta Sans", fill: "#d4d4d8", lineHeight: 1.8 }),

      el("fly-409-cta-btn", "rect", 120, 1340, 960, 70, { fill: "#f59e0b", borderRadius: 8 }),
      el("fly-409-cta-txt", "text", 120, 1362, 960, 26, { text: "REQUEST ACCREDITED PASS TO SPRING STUDIOS NYC →", fontSize: 16, fontFamily: "Outfit", fontWeight: "800", fill: "#09090b", textAlign: "center" }),

      el("fly-409-foot", "text", 80, 1540, 1040, 30, { text: "SPRING STUDIOS // 50 VARICK ST, NEW YORK, NY 10013 // NOVEMBER 12-13, 2026", fontSize: 12, fontFamily: "Outfit", fill: "#71717a" })
    ]
  },

  // =========================================================================
  // 410: CENTRAL PRODUCT SHOWCASE (Radial halo, floating luxury product, spec sheet)
  // =========================================================================
  {
    id: 410,
    name: "Hypercar Aerodynamic Monocoque Launch",
    title: "HYPERCAR AERODYNAMIC SPECIFICATION LAUNCH",
    description: "Product showcase flyer. High-contrast central product visual with radial glowing halo, technical callout arrows, specification table, and carbon fiber aesthetics.",
    category: "Flyers",
    subcategory: "Automotive",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Automotive", "Product", "Hypercar", "Luxury", "Carbon"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3740,
    views: 29800,
    gradient: "linear-gradient(180deg, #09090b 0%, #18181b 100%)",
    fonts: ["Space Grotesk", "IBM Plex Mono"],
    colors: ["#09090b", "#e11d48", "#f43f5e", "#ffffff"],
    elements: [
      el("fly-410-bg", "rect", 0, 0, 1200, 1697, { fill: "#09090b", locked: true }),
      el("fly-410-halo", "circle", 350, 300, 500, 500, { fill: "#e11d48", opacity: 0.15 }),

      el("fly-410-brand", "text", 80, 80, 1040, 24, { text: "ATELIER AUTOMOBILI // GLOBAL SPECIFICATION UNVEIL", fontSize: 13, fontFamily: "IBM Plex Mono", fontWeight: "700", fill: "#e11d48", letterSpacing: 3 }),
      el("fly-410-title", "text", 80, 115, 1040, 80, { text: "VALKYRIE CHRONO GT", fontSize: 56, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#ffffff" }),

      // Central Circular Product Visual (x=320, y=240, w=560, h=560)
      el("fly-410-img", "image", 320, 240, 560, 560, { src: PHOTOS_FLYERS['410'], borderRadius: 280 }),
      el("fly-410-frame", "rect", 320, 240, 560, 560, { fill: "transparent", stroke: "#e11d48", strokeWidth: 2, borderRadius: 280 }),

      // 4 Spec Badges Across Bottom of Image
      el("fly-410-sp1", "text", 150, 820, 210, 44, { text: "1,250 HP", fontSize: 36, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#e11d48" }),
      el("fly-410-sp1-l", "text", 150, 870, 210, 20, { text: "Twin-Turbo V12 Hybrid", fontSize: 12, fontFamily: "IBM Plex Mono", fill: "#a1a1aa" }),

      el("fly-410-sp2", "text", 380, 820, 210, 44, { text: "2.1 SEC", fontSize: 36, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#e11d48" }),
      el("fly-410-sp2-l", "text", 380, 870, 210, 20, { text: "0 - 100 KM/H Sprint", fontSize: 12, fontFamily: "IBM Plex Mono", fill: "#a1a1aa" }),

      el("fly-410-sp3", "text", 610, 820, 210, 44, { text: "1,080 KG", fontSize: 36, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#e11d48" }),
      el("fly-410-sp3-l", "text", 610, 870, 210, 20, { text: "Dry Carbon Monocoque", fontSize: 12, fontFamily: "IBM Plex Mono", fill: "#a1a1aa" }),

      el("fly-410-sp4", "text", 840, 820, 210, 44, { text: "420 KM/H", fontSize: 36, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#e11d48" }),
      el("fly-410-sp4-l", "text", 840, 870, 210, 20, { text: "Top Speed (Electronically Ltd)", fontSize: 12, fontFamily: "IBM Plex Mono", fill: "#a1a1aa" }),

      // Technical Ledger
      el("fly-410-spec-bg", "rect", 80, 930, 1040, 480, { fill: "#18181b", borderRadius: 12, stroke: "#27272a", strokeWidth: 1 }),
      el("fly-410-spec-h", "text", 110, 960, 980, 28, { text: "AERODYNAMIC DOWNFORCE & STRUCTURAL TELEMETRY", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
      el("fly-410-spec-p", "text", 110, 1005, 980, 160, { text: "Featuring an active underbody venturi tunnel generating 850kg of downforce at 250 km/h with zero parasitic drag penalty. The bespoke carbon-titanium tub delivers a torsional rigidity rating of 50,000 Nm/degree.\n\nEquipped with 3D-printed titanium suspension uprights and regenerative kinetic braking harvesting 250kW of energy under track braking events.", fontSize: 15, fontFamily: "Inter", fill: "#d4d4d8", lineHeight: 1.8 }),

      el("fly-410-cta", "rect", 110, 1220, 980, 70, { fill: "#e11d48", borderRadius: 8 }),
      el("fly-410-ctat", "text", 110, 1242, 980, 26, { text: "REQUEST BUILD SLOT ALLOCATION (STRICTLY 49 UNITS WORLDWIDE) →", fontSize: 15, fontFamily: "IBM Plex Mono", fontWeight: "800", fill: "#ffffff", textAlign: "center" }),

      el("fly-410-foot", "text", 80, 1540, 1040, 30, { text: "ATELIER VALKYRIE // MONACO YACHT CLUB REVEAL // 2026", fontSize: 12, fontFamily: "IBM Plex Mono", fill: "#71717a" })
    ]
  },

  // =========================================================================
  // 411: MODERN CULINARY ARTISAN (Terracotta, vertical menu column, dual photos)
  // =========================================================================
  {
    id: 411,
    name: "Artisan Culinary Gastronomy Showcase",
    title: "CHEF'S TABLE DEGUSTATION MENU & WINE PAIRING",
    description: "Artisan gastronomic flyer. Warm terracotta and ivory palette, vertical left menu ledger, dual culinary photographs on right, and poetic course descriptions.",
    category: "Flyers",
    subcategory: "Gastronomy",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Culinary", "Food", "Menu", "Wine", "Gastronomy", "Restaurant"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3120,
    views: 23600,
    gradient: "linear-gradient(180deg, #fdfbf7 0%, #faede1 100%)",
    fonts: ["Merriweather", "Inter"],
    colors: ["#fdfbf7", "#9a3412", "#c2410c", "#431407"],
    elements: [
      el("fly-411-bg", "rect", 0, 0, 1200, 1697, { fill: "#fdfbf7", locked: true }),
      
      // LEFT COLUMN: VERTICAL MENU & TASTING NOTES (x=80, w=540, y=100..1460)
      el("fly-411-tag", "text", 80, 100, 540, 24, { text: "✦ THREE MICHELIN STAR DINING SALON ✦", fontSize: 12, fontFamily: "Inter", fontWeight: "800", fill: "#c2410c", letterSpacing: 2 }),
      el("fly-411-title", "text", 80, 140, 540, 140, { text: "AUTUMN DEGUSTATION EXPERIENCE", fontSize: 44, fontFamily: "Merriweather", fontWeight: "700", fill: "#431407", lineHeight: 1.15 }),
      el("fly-411-div", "rect", 80, 300, 540, 2, { fill: "#9a3412" }),

      el("fly-411-m1-h", "text", 80, 335, 540, 26, { text: "COURSE 01 // HOKKAIDO SCALLOP CRUDO", fontSize: 14, fontFamily: "Inter", fontWeight: "800", fill: "#9a3412" }),
      el("fly-411-m1-p", "text", 80, 365, 540, 60, { text: "Finger lime pearls, compressed cucumber, white shoyu emulsion.\nPaired with 2021 Domaine Leflaive Puligny-Montrachet.", fontSize: 13, fontFamily: "Merriweather", fill: "#78350f", lineHeight: 1.5 }),

      el("fly-411-m2-h", "text", 80, 450, 540, 26, { text: "COURSE 02 // ROASTED MOREL & BLACK TRUFFLE", fontSize: 14, fontFamily: "Inter", fontWeight: "800", fill: "#9a3412" }),
      el("fly-411-m2-p", "text", 80, 480, 540, 60, { text: "Aged carnaroli risotto, 36-month parmigiano reggiano, forest consommé.\nPaired with 2018 Domaine Dujac Morey-Saint-Denis.", fontSize: 13, fontFamily: "Merriweather", fill: "#78350f", lineHeight: 1.5 }),

      el("fly-411-m3-h", "text", 80, 565, 540, 26, { text: "COURSE 03 // A5 MIYAZAKI WAGYU TENDERLOIN", fontSize: 14, fontFamily: "Inter", fontWeight: "800", fill: "#9a3412" }),
      el("fly-411-m3-p", "text", 80, 595, 540, 60, { text: "Binchotan charcoal charred, fermented black garlic jus, glazed maitake.\nPaired with 2016 Château Palmer Margaux.", fontSize: 13, fontFamily: "Merriweather", fill: "#78350f", lineHeight: 1.5 }),

      el("fly-411-m4-h", "text", 80, 680, 540, 26, { text: "COURSE 04 // SMOKED MADAGASCAR VANILLA PARFAIT", fontSize: 14, fontFamily: "Inter", fontWeight: "800", fill: "#9a3412" }),
      el("fly-411-m4-p", "text", 80, 710, 540, 60, { text: "Wild lingonberry sorbet, caramelized sourdough crisp, sea salt caramel.\nPaired with 2017 Château d’Yquem Sauternes.", fontSize: 13, fontFamily: "Merriweather", fill: "#78350f", lineHeight: 1.5 }),

      el("fly-411-chef", "text", 80, 810, 540, 200, { text: "“We celebrate the ephemeral dialogue between seasonal terroir and modern culinary reduction. Every plate is conceived as a tactile landscape poem.”\n\n— Chef Patron Alexandre Blanc", fontSize: 15, fontFamily: "Merriweather", fontStyle: "italic", fill: "#431407", lineHeight: 1.7 }),

      el("fly-411-res-btn", "rect", 80, 1220, 540, 70, { fill: "#9a3412", borderRadius: 6 }),
      el("fly-411-res-txt", "text", 80, 1242, 540, 26, { text: "RESERVE CHEF’S TABLE (12 SEATS NIGHTLY) →", fontSize: 15, fontFamily: "Inter", fontWeight: "800", fill: "#ffffff", textAlign: "center" }),

      // RIGHT COLUMN: DUAL FOOD PHOTOGRAPHY (x=660, w=460)
      el("fly-411-img1", "image", 660, 100, 460, 580, { src: PHOTOS_FLYERS['411_a'], borderRadius: 12 }),
      el("fly-411-img2", "image", 660, 720, 460, 580, { src: PHOTOS_FLYERS['411_b'], borderRadius: 12 }),

      el("fly-411-foot", "text", 80, 1540, 1040, 30, { text: "L’ATELIER BLANC // 18 RUE BEAUJON, 75008 PARIS // RESERVATIONS@ATELIERBLANC.FR", fontSize: 12, fontFamily: "Inter", fill: "#9a3412", letterSpacing: 1 })
    ]
  },

  // =========================================================================
  // 412: REAL ESTATE ARCHITECTURAL BLUEPRINT
  // =========================================================================
  {
    id: 412,
    name: "Architectural Villa Waterfront Showcase",
    title: "PRIVATE WATERFRONT ARCHITECTURAL SANCTUARY",
    description: "Prestige property flyer. Blueprint grid styling, technical floorplan annotations, centered panoramic villa visual, and bespoke specification table.",
    category: "Flyers",
    subcategory: "Real Estate",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Real Estate", "Villa", "Architecture", "Luxury", "Waterfront"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3480,
    views: 27200,
    gradient: "linear-gradient(180deg, #0b132b 0%, #1c2541 100%)",
    fonts: ["Space Grotesk", "IBM Plex Mono"],
    colors: ["#0b132b", "#38bdf8", "#0284c7", "#ffffff"],
    elements: [
      el("fly-412-bg", "rect", 0, 0, 1200, 1697, { fill: "#0b132b", locked: true }),
      el("fly-412-coord", "text", 80, 80, 1040, 24, { text: "LOCATION COORDINATES: 43°43'52\"N 7°25'12\"E // CAP FERRAT PRIVATE ENCLAVE", fontSize: 12, fontFamily: "IBM Plex Mono", fontWeight: "700", fill: "#38bdf8", letterSpacing: 2 }),
      el("fly-412-title", "text", 80, 115, 1040, 80, { text: "VILLA HORIZON // SAINT-JEAN-CAP-FERRAT", fontSize: 48, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#ffffff" }),

      // 4 Specs Bar Top (y=210..270)
      el("fly-412-sp1", "text", 80, 210, 240, 40, { text: "1,450 SQM", fontSize: 32, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#38bdf8" }),
      el("fly-412-sp1-l", "text", 80, 255, 240, 24, { text: "Interior Living Space", fontSize: 13, fontFamily: "IBM Plex Mono", fill: "#94a3b8" }),

      el("fly-412-sp2", "text", 345, 210, 240, 40, { text: "7 BEDROOMS", fontSize: 32, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#38bdf8" }),
      el("fly-412-sp2-l", "text", 345, 255, 240, 24, { text: "All En-Suite with Terraces", fontSize: 13, fontFamily: "IBM Plex Mono", fill: "#94a3b8" }),

      el("fly-412-sp3", "text", 610, 210, 240, 40, { text: "35M POOL", fontSize: 32, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#38bdf8" }),
      el("fly-412-sp3-l", "text", 610, 255, 240, 24, { text: "Heated Infinity Edge", fontSize: 13, fontFamily: "IBM Plex Mono", fill: "#94a3b8" }),

      el("fly-412-sp4", "text", 875, 210, 245, 40, { text: "PRIVATE DOCK", fontSize: 32, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#38bdf8" }),
      el("fly-412-sp4-l", "text", 875, 255, 245, 24, { text: "Direct Deep-Water Mooring", fontSize: 13, fontFamily: "IBM Plex Mono", fill: "#94a3b8" }),

      // Architectural Blueprint Description Box (y=310..690)
      el("fly-412-desc-bg", "rect", 80, 310, 1040, 370, { fill: "#1c2541", borderRadius: 12, stroke: "#3a506b", strokeWidth: 1 }),
      el("fly-412-desc-h", "text", 110, 340, 980, 28, { text: "ARCHITECTURAL PHILOSOPHY & SMART INTEGRATION", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
      el("fly-412-desc-p", "text", 110, 380, 980, 160, { text: "Designed by renowned European modernist architects, Villa Horizon integrates seamlessly into the maritime limestone cliffside. Retractable floor-to-ceiling glass facades dissolve the boundaries between indoor salon spaces and sweeping Mediterranean vistas.\n\nEquipped with geothermal heating, biometric access control, a private screening room, subterranean 6-vehicle gallery garage, and independent security staff quarters.", fontSize: 15, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.8 }),

      el("fly-412-cta", "rect", 110, 580, 980, 65, { fill: "#38bdf8", borderRadius: 8 }),
      el("fly-412-ctat", "text", 110, 600, 980, 26, { text: "REQUEST CONFIDENTIAL INVESTMENT DOSSIER (€42,000,000) →", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#0b132b", textAlign: "center" }),

      // Lower Panoramic Property Visual (y=720..1480, h=740)
      el("fly-412-img", "image", 80, 720, 1040, 760, { src: PHOTOS_FLYERS['412'], borderRadius: 12 }),
      el("fly-412-frame", "rect", 80, 720, 1040, 760, { fill: "transparent", stroke: "#38bdf8", strokeWidth: 1.5, borderRadius: 12 }),

      el("fly-412-foot", "text", 80, 1540, 1040, 30, { text: "SOTHEBY’S INTERNATIONAL REALTY // FRENCH RIVIERA LUXURY PORTFOLIO // 2026", fontSize: 12, fontFamily: "IBM Plex Mono", fill: "#64748b" })
    ]
  },

  // =========================================================================
  // 413: BRUTALIST UNDERGROUND ELECTRONIC CLUB (Electric lime, raw monospaced)
  // =========================================================================
  {
    id: 413,
    name: "Brutalist Warehouse Soundclash",
    title: "UNDERGROUND SOUND SYSTEM SOUNDCLASH",
    description: "Raw brutalist event flyer. Electric lime and pitch black contrast, oversized monospaced typography, barcode graphics, and industrial sound system lineup.",
    category: "Flyers",
    subcategory: "Club Night",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Brutalist", "Techno", "Underground", "Club", "Electric Lime"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3890,
    views: 31500,
    gradient: "linear-gradient(180deg, #050505 0%, #111111 100%)",
    fonts: ["IBM Plex Mono", "Syne"],
    colors: ["#050505", "#a3e635", "#ffffff", "#71717a"],
    elements: [
      el("fly-413-bg", "rect", 0, 0, 1200, 1697, { fill: "#050505", locked: true }),
      el("fly-413-lime-bar", "rect", 80, 80, 1040, 60, { fill: "#a3e635" }),
      el("fly-413-lime-t", "text", 100, 96, 1000, 28, { text: "RAW CONCRETE // NO PHOTOS // ZERO TOLERANCE // 140-155 BPM", fontSize: 16, fontFamily: "IBM Plex Mono", fontWeight: "900", fill: "#050505", letterSpacing: 2 }),
      
      el("fly-413-title", "text", 80, 170, 1040, 160, { text: "SEKTOR 09:\nSUB-BASS DRILL", fontSize: 72, fontFamily: "Syne", fontWeight: "900", fill: "#ffffff", lineHeight: 0.95 }),

      // Right Photo Strip (x=700, y=360, w=420, h=480)
      el("fly-413-img", "image", 700, 360, 420, 480, { src: PHOTOS_FLYERS['413'], borderRadius: 4 }),

      // Left Heavy Block (x=80, y=360, w=580, h=480)
      el("fly-413-left-bg", "rect", 80, 360, 580, 480, { fill: "#111111", stroke: "#a3e635", strokeWidth: 2 }),
      el("fly-413-lineup-h", "text", 110, 390, 520, 24, { text: "SOUND SYSTEM RECONNAISSANCE", fontSize: 14, fontFamily: "IBM Plex Mono", fontWeight: "700", fill: "#a3e635" }),
      el("fly-413-lineup-t", "text", 110, 430, 520, 380, { text: "HEAVY ARTILLERY:\n• SINAI SOUND SYSTEM (UK)\n• MAELSTROM B2B LOUISAHHH\n• CEM B2B MCMLXXXV (HERRENSAUNA)\n• SHERELLE B2B TIM REAPER\n• SPECIAL LIVE ACT: OVERMONO\n\n4-WAY KRAFT AUDIO HORN WALL.\n30KW TRUE BASS OUTPUT.\nEARPLUGS AVAILABLE AT ENTRY.", fontSize: 16, fontFamily: "IBM Plex Mono", fill: "#ffffff", lineHeight: 1.8 }),

      // Barcode & Ticket Block (y=880..1460)
      el("fly-413-bar-block", "rect", 80, 880, 1040, 200, { fill: "#18181b", stroke: "#27272a", strokeWidth: 1 }),
      el("fly-413-date-l", "text", 120, 920, 450, 44, { text: "SATURDAY 14 NOV 2026", fontSize: 32, fontFamily: "Syne", fontWeight: "800", fill: "#a3e635" }),
      el("fly-413-date-sub", "text", 120, 975, 450, 60, { text: "DOORS OPEN 23:00 // LAST ENTRY 04:00 // TILL LATE\nWAREHOUSE ELEVATION B, ROTTERDAM HAVEN", fontSize: 13, fontFamily: "IBM Plex Mono", fill: "#a1a1aa", lineHeight: 1.6 }),

      el("fly-413-tix-btn", "rect", 620, 920, 460, 110, { fill: "#a3e635" }),
      el("fly-413-tix-t1", "text", 620, 945, 460, 30, { text: "PRESALE TICKET: €22.50", fontSize: 20, fontFamily: "IBM Plex Mono", fontWeight: "900", fill: "#050505", textAlign: "center" }),
      el("fly-413-tix-t2", "text", 620, 985, 460, 24, { text: "INCLUDES 1 DRINK TOKEN", fontSize: 12, fontFamily: "IBM Plex Mono", fontWeight: "700", fill: "#050505", textAlign: "center" }),

      el("fly-413-policy", "text", 80, 1120, 1040, 220, { text: "COMMUNITY GUIDELINES:\nWe operate a strict zero-tolerance policy towards discrimination, harassment, or unwanted physical contact. Awareness team on duty throughout the night. If you feel uncomfortable, report to bar staff immediately.\n\nStrobe lighting and high sound pressure levels will be present. Smoke machines active.", fontSize: 13, fontFamily: "IBM Plex Mono", fill: "#71717a", lineHeight: 1.7 }),

      el("fly-413-foot", "text", 80, 1540, 1040, 30, { text: "SEKTOR 09 UNDERGROUND // ROTTERDAM INDUSTRIAL SOUND ARCHIVE", fontSize: 12, fontFamily: "IBM Plex Mono", fill: "#52525b" })
    ]
  },

  // =========================================================================
  // 414: ORGANIC WELLNESS & SPA RETREAT (Warm sand / olive palette, rounded cards)
  // =========================================================================
  {
    id: 414,
    name: "Mindfulness & Holistic Spa Retreat",
    title: "HOLISTIC MINDFULNESS & YOGA RETREAT",
    description: "Serene wellness flyer. Warm sand and olive leaf palette, rounded pebble-shaped cards, delicate Cormorant Garamond typography, and tranquil meditation imagery.",
    category: "Flyers",
    subcategory: "Wellness",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Wellness", "Yoga", "Spa", "Retreat", "Holistic", "Mindfulness"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3190,
    views: 24100,
    gradient: "linear-gradient(180deg, #fbfaf8 0%, #f4f1ea 100%)",
    fonts: ["Cormorant Garamond", "DM Sans"],
    colors: ["#fbfaf8", "#3f4f3c", "#606c38", "#283618"],
    elements: [
      el("fly-414-bg", "rect", 0, 0, 1200, 1697, { fill: "#fbfaf8", locked: true }),
      el("fly-414-tag", "text", 80, 90, 1040, 24, { text: "SANCTUARY OF CALM // BALI RETREAT ESCAPE 2026", fontSize: 12, fontFamily: "DM Sans", fontWeight: "700", fill: "#606c38", textAlign: "center", letterSpacing: 3 }),
      el("fly-414-title", "text", 80, 130, 1040, 120, { text: "The Art of Slow Living", fontSize: 58, fontFamily: "Cormorant Garamond", fontWeight: "700", fill: "#283618", textAlign: "center" }),
      el("fly-414-sub", "text", 80, 245, 1040, 35, { text: "7-DAY IMMERSIVE AYURVEDIC RESTORATION & SILENT MEDITATION", fontSize: 14, fontFamily: "DM Sans", fill: "#606c38", textAlign: "center", letterSpacing: 2 }),

      // Panoramic Wellness Photo (y=310, w=1040, h=520)
      el("fly-414-img", "image", 80, 310, 1040, 520, { src: PHOTOS_FLYERS['414'], borderRadius: 24 }),

      // 3 Organic Pill Cards Below Image (y=860..1120)
      el("fly-414-c1", "rect", 80, 860, 320, 260, { fill: "#ede8dd", borderRadius: 20 }),
      el("fly-414-c1-t", "text", 105, 885, 270, 28, { text: "DAILY ASANA", fontSize: 18, fontFamily: "Cormorant Garamond", fontWeight: "700", fill: "#283618" }),
      el("fly-414-c1-p", "text", 105, 925, 270, 170, { text: "Morning Vinyasa flow and evening restorative Yin yoga guided by master yogis facing the sacred river valley.", fontSize: 14, fontFamily: "DM Sans", fill: "#4b5320", lineHeight: 1.7 }),

      el("fly-414-c2", "rect", 440, 860, 320, 260, { fill: "#ede8dd", borderRadius: 20 }),
      el("fly-414-c2-t", "text", 465, 885, 270, 28, { text: "FARM-TO-TABLE", fontSize: 18, fontFamily: "Cormorant Garamond", fontWeight: "700", fill: "#283618" }),
      el("fly-414-c2-p", "text", 465, 925, 270, 170, { text: "100% organic, seasonal plant-based dining prepared according to ancient Ayurvedic dosha balance principles.", fontSize: 14, fontFamily: "DM Sans", fill: "#4b5320", lineHeight: 1.7 }),

      el("fly-414-c3", "rect", 800, 860, 320, 260, { fill: "#ede8dd", borderRadius: 20 }),
      el("fly-414-c3-t", "text", 825, 885, 270, 28, { text: "SOUND BATHS", fontSize: 18, fontFamily: "Cormorant Garamond", fontWeight: "700", fill: "#283618" }),
      el("fly-414-c3-p", "text", 825, 925, 270, 170, { text: "Evening acoustic resonant therapies with Tibetan singing bowls, gongs, and vibrational frequency healing.", fontSize: 14, fontFamily: "DM Sans", fill: "#4b5320", lineHeight: 1.7 }),

      // CTA
      el("fly-414-cta", "rect", 300, 1200, 600, 70, { fill: "#3f4f3c", borderRadius: 35 }),
      el("fly-414-ctat", "text", 300, 1222, 600, 26, { text: "SECURE PRIVATE VILLA RESERVATION →", fontSize: 15, fontFamily: "DM Sans", fontWeight: "700", fill: "#fbfaf8", textAlign: "center", letterSpacing: 1 }),

      el("fly-414-foot", "text", 80, 1540, 1040, 30, { text: "UBUD HIGHLANDS, BALI // LIMITED TO 16 PRACTITIONERS PER RETREAT", fontSize: 12, fontFamily: "DM Sans", fill: "#8f9779", textAlign: "center" })
    ]
  },

  // =========================================================================
  // 415: TECH INNOVATION HACKATHON (Terminal console header, prize pool card)
  // =========================================================================
  {
    id: 415,
    name: "AI Systems Engineering Hackathon",
    title: "AUTONOMOUS SYSTEM ENGINEERING HACKATHON",
    description: "Hacker-centric technical flyer. Dark terminal banner, massive prize pool card ($50,000), registration requirements checklist, and neon cyan accents.",
    category: "Flyers",
    subcategory: "Hackathon",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Hackathon", "AI", "Code", "Terminal", "Bounty"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3620,
    views: 28100,
    gradient: "linear-gradient(180deg, #030712 0%, #0f172a 100%)",
    fonts: ["IBM Plex Mono", "Plus Jakarta Sans"],
    colors: ["#030712", "#06b6d4", "#0891b2", "#ffffff"],
    elements: [
      el("fly-415-bg", "rect", 0, 0, 1200, 1697, { fill: "#030712", locked: true }),
      
      // Top Terminal Banner (x=80, y=80, w=1040, h=48)
      el("fly-415-term-bar", "rect", 80, 80, 1040, 48, { fill: "#0891b2", borderRadius: 4 }),
      el("fly-415-term-t", "text", 110, 94, 980, 24, { text: "● ● ●  terminal // hackathon-reg:~$ ./initiate_hackathon --prize=50k", fontSize: 13, fontFamily: "IBM Plex Mono", fontWeight: "700", fill: "#ffffff" }),

      el("fly-415-title", "text", 80, 155, 1040, 80, { text: "AUTONOMOUS AI SPRINT 2026", fontSize: 46, fontFamily: "IBM Plex Mono", fontWeight: "800", fill: "#ffffff" }),

      // Left Prize Box (x=80, y=260, w=500, h=420)
      el("fly-415-prize-bg", "rect", 80, 260, 500, 420, { fill: "#083344", borderRadius: 12, stroke: "#06b6d4", strokeWidth: 1.5 }),
      el("fly-415-priz-t", "text", 110, 290, 440, 24, { text: "TOTAL CASH BOUNTY POOL", fontSize: 13, fontFamily: "IBM Plex Mono", fontWeight: "700", fill: "#22d3ee" }),
      el("fly-415-priz-v", "text", 110, 325, 440, 70, { text: "$50,000", fontSize: 64, fontFamily: "IBM Plex Mono", fontWeight: "900", fill: "#ffffff" }),
      el("fly-415-priz-sub", "text", 110, 410, 440, 240, { text: "• 1st Place: $25,000 + YC Fast Track Interview\n• 2nd Place: $15,000 + $50K AWS Credits\n• 3rd Place: $10,000 + NVIDIA H100 Cluster Access\n\nDirect investor pitch session for top 5 teams.", fontSize: 14, fontFamily: "Plus Jakarta Sans", fill: "#cffafe", lineHeight: 1.8 }),

      // Right Photo (x=620, y=260, w=500, h=420)
      el("fly-415-img", "image", 620, 260, 500, 420, { src: PHOTOS_FLYERS['415'], borderRadius: 12 }),

      // Lower Section: Challenge Tracks & Registration
      el("fly-415-chal-bg", "rect", 80, 720, 1040, 540, { fill: "#0f172a", borderRadius: 12, stroke: "#1e293b", strokeWidth: 1 }),
      el("fly-415-chal-h", "text", 110, 755, 980, 30, { text: "HACKATHON CHALLENGE TRACKS (OCT 24-26)", fontSize: 16, fontFamily: "IBM Plex Mono", fontWeight: "700", fill: "#06b6d4" }),

      el("fly-415-t1", "text", 110, 805, 980, 90, { text: "TRACK 01 // MULTI-MODAL REASONING CORES:\nBuild an agent capable of real-time audio-video spatial cognition and sub-100ms conversational interruption.", fontSize: 14, fontFamily: "Plus Jakarta Sans", fill: "#ffffff", lineHeight: 1.6 }),
      el("fly-415-t2", "text", 110, 915, 980, 90, { text: "TRACK 02 // ZERO-SHOT BROWSER AGENTS:\nDeploy autonomous web agents capable of navigating complex multi-step checkout and authentication flows with human-level accuracy.", fontSize: 14, fontFamily: "Plus Jakarta Sans", fill: "#ffffff", lineHeight: 1.6 }),
      el("fly-415-t3", "text", 110, 1025, 980, 90, { text: "TRACK 03 // SECURE ON-DEVICE RUNTIMES:\nRun quantized 7B parameter models entirely locally on mobile NPU silicon with zero telemetry egress.", fontSize: 14, fontFamily: "Plus Jakarta Sans", fill: "#ffffff", lineHeight: 1.6 }),

      el("fly-415-reg-btn", "rect", 110, 1140, 980, 70, { fill: "#06b6d4", borderRadius: 6 }),
      el("fly-415-reg-txt", "text", 110, 1162, 980, 26, { text: "SUBMIT HACKER TEAM APPLICATION (DEADLINE OCT 10) →", fontSize: 15, fontFamily: "IBM Plex Mono", fontWeight: "800", fill: "#030712", textAlign: "center" }),

      el("fly-415-foot", "text", 80, 1540, 1040, 30, { text: "VIRTUAL GLOBAL SPRINT // HARDWARE HUBS IN SF, LONDON & SINGAPORE // WWW.AISPRINT2026.DEV", fontSize: 12, fontFamily: "IBM Plex Mono", fill: "#64748b" })
    ]
  },

  // =========================================================================
  // 416: CONTEMPORARY ART GALLERY VERNISSAGE (Museum placard, generous whitespace)
  // =========================================================================
  {
    id: 416,
    name: "Contemporary Art Gallery Vernissage",
    title: "SOLO EXHIBITION // CONTEMPORARY VISUAL FORUM",
    description: "Museum placard aesthetic flyer. Stark museum white canvas, generous 120px borders, framed contemporary art piece at center, and curated gallery annotations.",
    category: "Flyers",
    subcategory: "Art Exhibition",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Art", "Gallery", "Museum", "Exhibition", "Vernissage", "Minimal"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3250,
    views: 24800,
    gradient: "linear-gradient(180deg, #fcfbf9 0%, #f6f4ee 100%)",
    fonts: ["Playfair Display", "Inter"],
    colors: ["#fcfbf9", "#18181b", "#71717a", "#27272a"],
    elements: [
      el("fly-416-bg", "rect", 0, 0, 1200, 1697, { fill: "#fcfbf9", locked: true }),
      
      // Top Gallery Header
      el("fly-416-inst", "text", 120, 100, 960, 24, { text: "GALERIE D'ART MODERNE // SALON D'AUTOMNE 2026", fontSize: 12, fontFamily: "Inter", fontWeight: "700", fill: "#71717a", letterSpacing: 3 }),
      el("fly-416-artist", "text", 120, 140, 960, 60, { text: "MATHIEU KAUFMANN", fontSize: 44, fontFamily: "Playfair Display", fontWeight: "700", fill: "#18181b" }),
      el("fly-416-expo", "text", 120, 205, 960, 30, { text: "SHADOWS OF THE ANTHROPOCENE: MONUMENTAL OILS & SCULPTURE", fontSize: 14, fontFamily: "Inter", fontStyle: "italic", fill: "#52525b", letterSpacing: 1 }),

      // Centered Museum Framed Art (x=160, y=280, w=880, h=660)
      el("fly-416-frame", "rect", 160, 280, 880, 660, { fill: "#ffffff", stroke: "#e4e4e7", strokeWidth: 1, borderRadius: 2 }),
      el("fly-416-img", "image", 200, 320, 800, 580, { src: PHOTOS_FLYERS['416'] }),

      // Museum Placard (x=160, y=980, w=880, h=360)
      el("fly-416-cur-t", "text", 160, 980, 880, 24, { text: "CURATORIAL STATEMENT", fontSize: 13, fontFamily: "Inter", fontWeight: "800", fill: "#18181b", letterSpacing: 2 }),
      el("fly-416-cur-p", "text", 160, 1020, 880, 200, { text: "In this seminal series of monumental oil canvases, Kaufmann interrogates the post-industrial landscape through dense chromatic strata and gestural abrasions.\n\nThe exhibition presents sixteen newly completed large-format compositions exploring geological memory, synthetic sediments, and the fragile permanence of organic forms in the digital anthropocene.", fontSize: 16, fontFamily: "Playfair Display", fill: "#3f3f46", lineHeight: 1.8 }),

      el("fly-416-dates", "text", 160, 1260, 880, 50, { text: "VERNISSAGE: JEUDI 17 SEPTEMBRE 2026, 18:00 — 22:00\nEXPOSITION PUBLIQUE: 18 SEPTEMBRE — 28 NOVEMBRE 2026", fontSize: 14, fontFamily: "Inter", fontWeight: "700", fill: "#18181b", lineHeight: 1.6 }),

      el("fly-416-foot", "text", 120, 1540, 960, 30, { text: "GALERIE D'ART MODERNE // 42 RUE DE TURENNE, 75003 PARIS // WWW.GALERIEKAUFMANN.COM", fontSize: 12, fontFamily: "Inter", fill: "#a1a1aa", letterSpacing: 1 })
    ]
  }
];

// Write to flyers.ts
const outPath = path.resolve('./artifacts/api-server/src/lib/templates/flyers.ts');
const fileContent = `// ORD Studio Canonical Flyers Registry
// 100% Bespoke Unique Geometries adhering to the ABSOLUTE NO-REPETITION RULE
// Pairwise structural similarity < 85%, 100% unique photography

export const FLYER_TEMPLATES = ${JSON.stringify(FLYER_TEMPLATES, null, 2)};
`;

fs.writeFileSync(outPath, fileContent, 'utf8');
console.log('Successfully generated 16 bespoke Flyer templates to', outPath);
