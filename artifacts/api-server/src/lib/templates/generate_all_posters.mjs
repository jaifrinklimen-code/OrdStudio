import fs from 'fs';
import path from 'path';
import { PHOTOS_POSTERS } from './uniquePhotoPool.ts';

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

export const POSTER_TEMPLATES = [
  // =========================================================================
  // 301: GIANT TYPOGRAPHIC MONOLITH (Huge 120px display text, center abstract photo)
  // =========================================================================
  {
    id: 301,
    name: "Monolithic Typography Design Poster",
    title: "INTERNATIONAL TYPOGRAPHY MONOLITH EXHIBITION",
    description: "Monumental editorial poster with oversized headline typography, abstract textural photo card, and stark grid hierarchy.",
    category: "Posters",
    subcategory: "Typography",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Typography", "Monolith", "Modernist", "Design", "Exhibition"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4120,
    views: 32400,
    gradient: "linear-gradient(180deg, #09090b 0%, #18181b 100%)",
    fonts: ["Space Grotesk", "Inter"],
    colors: ["#09090b", "#f43f5e", "#ffffff", "#71717a"],
    elements: [
      el("pos-301-bg", "rect", 0, 0, 1080, 1528, { fill: "#09090b", locked: true }),
      el("pos-301-tag", "text", 70, 70, 940, 24, { text: "TYPOGRAPHIC BIENNALE 2026 // BASEL · TOKYO · NEW YORK", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#f43f5e", letterSpacing: 4 }),
      el("pos-301-title", "text", 70, 110, 940, 240, { text: "MONO\nLITH", fontSize: 120, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#ffffff", lineHeight: 0.85, letterSpacing: -3 }),
      el("pos-301-sub", "text", 70, 360, 940, 40, { text: "THE ARCHITECTURE OF PRINTED THOUGHT AND MONUMENTAL FORM", fontSize: 15, fontFamily: "Inter", fontWeight: "600", fill: "#a1a1aa", letterSpacing: 2 }),
      el("pos-301-img", "image", 70, 420, 940, 620, { src: PHOTOS_POSTERS[301], borderRadius: 8 }),
      el("pos-301-c1-h", "text", 70, 1070, 290, 24, { text: "CURATORIAL", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#f43f5e", letterSpacing: 2 }),
      el("pos-301-c1-p", "text", 70, 1105, 290, 160, { text: "Examining the tectonic impact of blackletter, brutalist sans-serifs, and computational glyphs across 70 international master designers.", fontSize: 13, fontFamily: "Inter", fill: "#d4d4d8", lineHeight: 1.6 }),
      el("pos-301-c2-h", "text", 395, 1070, 290, 24, { text: "LOCATION", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#f43f5e", letterSpacing: 2 }),
      el("pos-301-c2-p", "text", 395, 1105, 290, 160, { text: "Museum of Modern Typography\nHardturmstrasse 110\n8005 Zürich, Switzerland\nOct 12 — Dec 20, 2026", fontSize: 13, fontFamily: "Inter", fill: "#d4d4d8", lineHeight: 1.6 }),
      el("pos-301-c3-h", "text", 720, 1070, 290, 24, { text: "ADMISSION", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#f43f5e", letterSpacing: 2 }),
      el("pos-301-c3-p", "text", 720, 1105, 290, 160, { text: "General Public: CHF 24\nStudents / Design Guild: CHF 14\nCatalog included with ticket.\nwww.monolith-typ.ch", fontSize: 13, fontFamily: "Inter", fill: "#d4d4d8", lineHeight: 1.6 }),
      el("pos-301-foot", "text", 70, 1420, 940, 24, { text: "SWISS GRAPHIC GUILD ACCREDITED EXHIBITION NO. 9904", fontSize: 11, fontFamily: "Space Grotesk", fill: "#52525b", letterSpacing: 3 })
    ]
  },

  // =========================================================================
  // 302: CINEMATIC HORIZON (Full-bleed landscape photo, bottom 30% scrim & type)
  // =========================================================================
  {
    id: 302,
    name: "Cinematic Wilderness Film Premiere",
    title: "SOLITUDE: AN ARCTIC CINEMATIC ODYSSEY",
    description: "Cinematic full-bleed documentary film poster. Expansive landscape photography, atmospheric bottom gradient, and delicate serif display typography.",
    category: "Posters",
    subcategory: "Film",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Film", "Cinematic", "Documentary", "Wilderness", "Premiere", "Arctic"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3890,
    views: 31000,
    gradient: "linear-gradient(180deg, #020617 0%, #0f172a 100%)",
    fonts: ["Cinzel", "Inter"],
    colors: ["#020617", "#38bdf8", "#ffffff", "#94a3b8"],
    elements: [
      el("pos-302-bg", "rect", 0, 0, 1080, 1528, { fill: "#020617", locked: true }),
      el("pos-302-img", "image", 0, 0, 1080, 1528, { src: PHOTOS_POSTERS[302] }),
      el("pos-302-scrim", "rect", 0, 700, 1080, 828, { fill: "#020617", opacity: 0.85 }),
      el("pos-302-laurel", "text", 70, 800, 940, 30, { text: "★ WINNER — BEST CINEMATOGRAPHY — CANNES 2026 ★", fontSize: 13, fontFamily: "Inter", fontWeight: "700", fill: "#38bdf8", textAlign: "center", letterSpacing: 4 }),
      el("pos-302-title", "text", 70, 850, 940, 120, { text: "SOLITUDE", fontSize: 84, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff", textAlign: "center", letterSpacing: 12 }),
      el("pos-302-sub", "text", 70, 980, 940, 36, { text: "AN ARCTIC CHRONICLE BY DIRECTOR ERIK LINDQVIST", fontSize: 15, fontFamily: "Inter", fontWeight: "600", fill: "#cbd5e1", textAlign: "center", letterSpacing: 3 }),
      el("pos-302-div", "rect", 390, 1050, 300, 2, { fill: "#38bdf8" }),
      el("pos-302-desc", "text", 120, 1080, 840, 90, { text: "Shot over three grueling winters in Svalbard with zero artificial illumination.\nA breathtaking testament to the raw fragility of earth's northernmost horizons.", fontSize: 16, fontFamily: "Cinzel", fill: "#e2e8f0", textAlign: "center", lineHeight: 1.6 }),
      el("pos-302-credits", "text", 70, 1220, 940, 80, { text: "MUSIC BY MAX RICHTER // CINEMATOGRAPHY BY CHAD KINNEAR // PRODUCED BY NORDIC LIGHT CINEMA\nEXCLUSIVE 70MM IMAX ENGAGEMENTS BEGIN NOVEMBER 14", fontSize: 13, fontFamily: "Inter", fill: "#94a3b8", textAlign: "center", lineHeight: 1.8 })
    ]
  },

  // =========================================================================
  // 303: BOTANICAL FOREST ASYMMETRIC (Left vertical photo, right text)
  // =========================================================================
  {
    id: 303,
    name: "Botanical Forest Conservation Poster",
    title: "OLD-GROWTH CANOPY CONSERVATION INITIATIVE",
    description: "Organic forest botanical conservation poster with Cormorant Garamond typography, earthy sage & pine tones, and scientific biodiversity manifesto.",
    category: "Posters",
    subcategory: "Environmental",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Botanical", "Forest", "Conservation", "Nature", "Environmental"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3670,
    views: 27900,
    gradient: "linear-gradient(180deg, #132018 0%, #1c3325 100%)",
    fonts: ["Cormorant Garamond", "Inter"],
    colors: ["#132018", "#a3e635", "#f7fee7", "#86efac"],
    elements: [
      el("pos-303-bg", "rect", 0, 0, 1080, 1528, { fill: "#132018", locked: true }),
      el("pos-303-border", "rect", 50, 50, 980, 1428, { fill: "transparent", stroke: "#a3e635", strokeWidth: 1 }),
      el("pos-303-img", "image", 90, 100, 440, 800, { src: PHOTOS_POSTERS[303], borderRadius: 12 }),
      el("pos-303-tag", "text", 560, 110, 430, 24, { text: "PACIFIC RAINFOREST ALLIANCE // 2026", fontSize: 13, fontFamily: "Inter", fontWeight: "700", fill: "#a3e635", letterSpacing: 3 }),
      el("pos-303-title", "text", 560, 150, 430, 160, { text: "CANOPY\nSANCTUARY", fontSize: 52, fontFamily: "Cormorant Garamond", fontWeight: "700", fill: "#f7fee7", lineHeight: 1.05 }),
      el("pos-303-sub", "text", 560, 330, 430, 50, { text: "PROTECTING 400,000 HECTARES OF TEMPERATE OLD-GROWTH REDWOODS", fontSize: 14, fontFamily: "Inter", fill: "#86efac", letterSpacing: 1 }),
      el("pos-303-div", "rect", 560, 395, 430, 2, { fill: "#a3e635" }),
      el("pos-303-manifesto", "text", 560, 425, 430, 460, { text: "Ancient trees are not solitary timber assets. They are complex mycorrhizal networks, breathing carbon reservoirs, and irreproducible havens of endangered avian and fungal life.\n\nEvery felled ancient redwood fractures an 800-year evolutionary ledger that human industry cannot reconstruct.\n\nJoin the frontline legal defense trust.", fontSize: 15, fontFamily: "Cormorant Garamond", fill: "#dcfce7", lineHeight: 1.8 }),
      el("pos-303-action-card", "rect", 90, 940, 900, 220, { fill: "#1c3325", stroke: "#a3e635", strokeWidth: 1, borderRadius: 8 }),
      el("pos-303-act-t", "text", 130, 970, 820, 30, { text: "THE CENTURY ENDOWMENT CAMPAIGN", fontSize: 18, fontFamily: "Cormorant Garamond", fontWeight: "700", fill: "#a3e635" }),
      el("pos-303-act-d", "text", 130, 1010, 820, 80, { text: "100% of public contributions purchase permanent conservation easements to halt industrial clear-cutting in the Clayoquot Sound corridor.", fontSize: 14, fontFamily: "Inter", fill: "#f7fee7", lineHeight: 1.6 }),
      el("pos-303-btn", "rect", 130, 1080, 360, 50, { fill: "#a3e635", borderRadius: 25 }),
      el("pos-303-btnt", "text", 130, 1095, 360, 20, { text: "SECURE ONE HECTARE →", fontSize: 13, fontFamily: "Inter", fontWeight: "800", fill: "#132018", textAlign: "center" })
    ]
  },

  // =========================================================================
  // 304: BAUHAUS CONSTRUCTIVIST PRIMARY (Primary color blocks, radical asymmetry)
  // =========================================================================
  {
    id: 304,
    name: "Bauhaus Primary Constructivism Poster",
    title: "BAUHAUS 107 DESSAU CONSTRUCTIVIST POSTER",
    description: "Stark constructivist Bauhaus poster. Cadmium red, cobalt blue, primary yellow blocks, strict geometric balance, and Archivo Black typography.",
    category: "Posters",
    subcategory: "Art Exhibition",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Bauhaus", "Constructivism", "Primary", "Geometric", "Art", "German"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4350,
    views: 34500,
    gradient: "linear-gradient(180deg, #f8fafc 0%, #edf2f7 100%)",
    fonts: ["Space Grotesk", "Inter"],
    colors: ["#f8fafc", "#ef4444", "#2563eb", "#0f172a"],
    elements: [
      el("pos-304-bg", "rect", 0, 0, 1080, 1528, { fill: "#f8fafc", locked: true }),
      el("pos-304-red-bar", "rect", 0, 0, 1080, 40, { fill: "#ef4444" }),
      el("pos-304-blue-col", "rect", 0, 0, 60, 1528, { fill: "#2563eb" }),
      el("pos-304-title-de", "text", 100, 80, 900, 160, { text: "STAATLICHES\nBAUHAUS", fontSize: 68, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#0f172a", lineHeight: 0.95 }),
      el("pos-304-yr-box", "rect", 100, 260, 220, 50, { fill: "#ef4444" }),
      el("pos-304-yr-txt", "text", 100, 272, 220, 26, { text: "1919 — 2026", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff", textAlign: "center" }),
      el("pos-304-img", "image", 360, 260, 640, 520, { src: PHOTOS_POSTERS[304] }),
      el("pos-304-yel-block", "rect", 100, 350, 220, 430, { fill: "#eab308" }),
      el("pos-304-yel-txt", "text", 120, 380, 180, 360, { text: "FORM\nFOLGT\nFUNKTION\n\nKUNST UND\nTECHNIK:\nEINE NEUE\nEINHEIT.", fontSize: 20, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#0f172a", lineHeight: 1.3 }),
      el("pos-304-c1", "text", 100, 840, 280, 300, { text: "MEISTER DER FORM\n\nWassily Kandinsky\nPaul Klee\nJohannes Itten\nLászló Moholy-Nagy\nOskar Schlemmer", fontSize: 14, fontFamily: "Inter", fontWeight: "600", fill: "#334155", lineHeight: 1.8 }),
      el("pos-304-c2", "text", 410, 840, 280, 300, { text: "WERKSTÄTTEN\n\nMetallwerkstatt\nWeberei & Textil\nTischlerei & Möbel\nWandmalerei\nDruck & Reklame", fontSize: 14, fontFamily: "Inter", fontWeight: "600", fill: "#334155", lineHeight: 1.8 }),
      el("pos-304-c3", "text", 720, 840, 280, 300, { text: "STANDORTE\n\nWeimar (1919–1925)\nDessau (1925–1932)\nBerlin (1932–1933)\nChicago New Bauhaus\nZürich Archive", fontSize: 14, fontFamily: "Inter", fontWeight: "600", fill: "#334155", lineHeight: 1.8 })
    ]
  },

  // =========================================================================
  // 305: MINIMALIST SCULPTURE EXHIBITION (Pure white gallery, huge margins)
  // =========================================================================
  {
    id: 305,
    name: "Minimalist Sculpture Museum Poster",
    title: "THE SHAPE OF SILENCE: CONTEMPORARY SCULPTURE",
    description: "Ultra-minimalist museum exhibition poster. Generous negative space, single sculptural photographic focus, and subtle typographic coordinates.",
    category: "Posters",
    subcategory: "Art Exhibition",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Minimalist", "Sculpture", "Museum", "Exhibition", "Gallery", "White"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3910,
    views: 29800,
    gradient: "linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)",
    fonts: ["Space Grotesk", "Inter"],
    colors: ["#ffffff", "#0f172a", "#64748b", "#cbd5e1"],
    elements: [
      el("pos-305-bg", "rect", 0, 0, 1080, 1528, { fill: "#ffffff", locked: true }),
      el("pos-305-coord", "text", 100, 80, 880, 24, { text: "LOUISIANA MUSEUM OF MODERN ART // HUMLEBÆK, DENMARK", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#64748b", letterSpacing: 4 }),
      el("pos-305-title", "text", 100, 120, 880, 130, { text: "THE SHAPE\nOF SILENCE", fontSize: 62, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#0f172a", lineHeight: 1.05 }),
      el("pos-305-img", "image", 180, 280, 720, 780, { src: PHOTOS_POSTERS[305], borderRadius: 8 }),
      el("pos-305-dates", "text", 100, 1140, 880, 36, { text: "OCTOBER 15, 2026 — FEBRUARY 28, 2027", fontSize: 20, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#0f172a" }),
      el("pos-305-artists", "text", 100, 1190, 880, 60, { text: "Works by Rachel Whiteread, Donald Judd, Richard Serra, and Simone Leigh.\nCurated by Kirsten Degel.", fontSize: 14, fontFamily: "Inter", fill: "#475569", lineHeight: 1.6 })
    ]
  },

  // =========================================================================
  // 306: CYBERPUNK NEON FESTIVAL (Top 65% photo, bottom title & lineup)
  // =========================================================================
  {
    id: 306,
    name: "Cyberpunk Neon Music Festival Poster",
    title: "NEON PROTOCOL 2026 ELECTRONIC FESTIVAL",
    description: "Electric cyberpunk music festival poster with glowing neon magenta pills, Syne display typography, and edge-to-edge dark aesthetics.",
    category: "Posters",
    subcategory: "Music",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Cyberpunk", "Neon", "Music", "Festival", "Electronic", "Rave"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4620,
    views: 37800,
    gradient: "linear-gradient(180deg, #090514 0%, #1a082b 100%)",
    fonts: ["Syne", "Inter"],
    colors: ["#090514", "#ec4899", "#a855f7", "#ffffff"],
    elements: [
      el("pos-306-bg", "rect", 0, 0, 1080, 1528, { fill: "#090514", locked: true }),
      el("pos-306-img", "image", 0, 0, 1080, 1000, { src: PHOTOS_POSTERS[306] }),
      el("pos-306-scrim", "rect", 0, 500, 1080, 1028, { fill: "#090514", opacity: 0.9 }),
      el("pos-306-badge", "rect", 70, 70, 240, 36, { fill: "#ec4899", borderRadius: 18 }),
      el("pos-306-badget", "text", 70, 80, 240, 18, { text: "TOKYO UNDERGROUND", fontSize: 11, fontFamily: "Syne", fontWeight: "800", fill: "#ffffff", textAlign: "center", letterSpacing: 2 }),
      el("pos-306-title", "text", 70, 820, 940, 160, { text: "NEON PROTOCOL:\nAUDIOVISUAL 2026", fontSize: 64, fontFamily: "Syne", fontWeight: "900", fill: "#ffffff", lineHeight: 1.0 }),
      el("pos-306-lineup", "text", 70, 1010, 940, 140, { text: "HEADLINERS: KOBOSIL // VTSS // BLAWAN // REINIER ZONNEVELD (LIVE)\nDAX J // PAULA TEMPLE // SPFDJ // HECTOR OAKS // ELLEN ALLIEN", fontSize: 17, fontFamily: "Inter", fontWeight: "800", fill: "#f472b6", lineHeight: 1.8 }),
      el("pos-306-loc", "text", 70, 1180, 940, 40, { text: "OCT 30–31 // SHIBUYA DOCKLANDS STORAGE TERMINAL 4 // 21+ STRICT", fontSize: 14, fontFamily: "Syne", fontWeight: "700", fill: "#ffffff", letterSpacing: 2 })
    ]
  },

  // =========================================================================
  // 307: BRUTALIST CONSTRUCTIVIST GRID (Strict vertical split, heavy rules)
  // =========================================================================
  {
    id: 307,
    name: "Brutalist Grid Manifesto Poster",
    title: "BRUTALIST ARCHITECTURAL GRID MANIFESTO",
    description: "Raw brutalist architectural manifesto poster. Monospaced typographic grid, heavy black rules, raw concrete photography, and zero ornamentation.",
    category: "Posters",
    subcategory: "Brutalist",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Brutalist", "Architecture", "Concrete", "Monochrome", "Grid", "Raw"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3820,
    views: 28400,
    gradient: "linear-gradient(180deg, #18181b 0%, #09090b 100%)",
    fonts: ["Space Grotesk", "Inter"],
    colors: ["#18181b", "#ffffff", "#71717a", "#27272a"],
    elements: [
      el("pos-307-bg", "rect", 0, 0, 1080, 1528, { fill: "#18181b", locked: true }),
      el("pos-307-title", "text", 70, 80, 940, 140, { text: "BETON BRUT:\nRAW CONCRETE 2026", fontSize: 58, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#ffffff", lineHeight: 1.05 }),
      el("pos-307-rule1", "rect", 70, 240, 940, 4, { fill: "#ffffff" }),
      el("pos-307-img", "image", 70, 270, 480, 780, { src: PHOTOS_POSTERS[307] }),
      el("pos-307-p1", "text", 580, 270, 430, 780, { text: "Brutalism does not ask for your affection. It commands attention through the uncompromising honesty of unfinished poured concrete, visible seams, and monumental scale.\n\nFrom the Barbican Estate in London to Habitat 67 in Montreal, this retrospective documents fifty icons of civic courage built between 1953 and 1979.\n\nNo cladding. No paint. Pure structure.\n\nEXHIBITION DATES:\nNovember 12, 2026 — January 30, 2027\nInstitute of Contemporary Arts, The Mall, London SW1", fontSize: 15, fontFamily: "Inter", fill: "#e4e4e7", lineHeight: 1.7 }),
      el("pos-307-rule2", "rect", 70, 1080, 940, 2, { fill: "#71717a" }),
      el("pos-307-foot", "text", 70, 1110, 940, 30, { text: "ICA LONDON // DEPARTMENT OF CIVIC ARCHITECTURE // ENTRY FREE ON TUESDAYS", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#a1a1aa", letterSpacing: 2 })
    ]
  },

  // =========================================================================
  // 308: HAUTE COUTURE FASHION (Vertical masthead left, narrow tall model)
  // =========================================================================
  {
    id: 308,
    name: "Haute Couture Editorial Fashion Poster",
    title: "MAISON DE L'OMBRE WINTER COUTURE POSTER",
    description: "High-fashion editorial runway poster. Vertical masthead along left edge, Bodoni serif typography, and striking haute couture portraiture.",
    category: "Posters",
    subcategory: "Fashion",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Fashion", "Couture", "Editorial", "Runway", "High Fashion", "Portrait"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4410,
    views: 35100,
    gradient: "linear-gradient(180deg, #09090b 0%, #18181b 100%)",
    fonts: ["Cinzel", "Inter"],
    colors: ["#09090b", "#ffffff", "#a1a1aa", "#d4d4d8"],
    elements: [
      el("pos-308-bg", "rect", 0, 0, 1080, 1528, { fill: "#09090b", locked: true }),
      el("pos-308-masthead-bg", "rect", 0, 0, 140, 1528, { fill: "#18181b" }),
      el("pos-308-masthead-txt", "text", -500, 700, 1200, 40, { text: "PARIS FASHION WEEK // COUTURE DIVISION 2026", fontSize: 16, fontFamily: "Inter", fontWeight: "800", fill: "#a1a1aa", letterSpacing: 8, rotation: 270 }),
      el("pos-308-title", "text", 200, 80, 820, 140, { text: "MAISON\nDE L'OMBRE", fontSize: 64, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff", lineHeight: 1.05 }),
      el("pos-308-sub", "text", 200, 235, 820, 30, { text: "WINTER CAPSULE COLLECTION // DIRECTED BY JEAN-LUC MOREAU", fontSize: 13, fontFamily: "Inter", fontWeight: "600", fill: "#a1a1aa", letterSpacing: 3 }),
      el("pos-308-img", "image", 200, 290, 820, 920, { src: PHOTOS_POSTERS[308], borderRadius: 8 }),
      el("pos-308-foot", "text", 200, 1240, 820, 40, { text: "EXCLUSIVELY AT PALAIS DE TOKYO, PARIS // INVITEES ONLY // FW26", fontSize: 13, fontFamily: "Cinzel", fontWeight: "700", fill: "#ffffff", letterSpacing: 2 })
    ]
  },

  // =========================================================================
  // 309: FILM NOIR (Letterbox slit photo in center, credits block bottom)
  // =========================================================================
  {
    id: 309,
    name: "Indie Cinema Festival Poster",
    title: "TORONTO INTERNATIONAL INDIE FILM FESTIVAL",
    description: "Prestige international film festival poster with golden festival laurels, dramatic cinema hall photography, and screening categories.",
    category: "Posters",
    subcategory: "Film",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Film", "Cinema", "Indie", "Festival", "Gold", "Movie"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3950,
    views: 30200,
    gradient: "linear-gradient(180deg, #0c0a09 0%, #1c1917 100%)",
    fonts: ["Cinzel", "Inter"],
    colors: ["#0c0a09", "#eab308", "#ffffff", "#a8a29e"],
    elements: [
      el("pos-309-bg", "rect", 0, 0, 1080, 1528, { fill: "#0c0a09", locked: true }),
      el("pos-309-laurel", "text", 70, 70, 940, 30, { text: "★ 28TH ANNUAL OFFICIAL SELECTION ★", fontSize: 14, fontFamily: "Cinzel", fontWeight: "700", fill: "#eab308", textAlign: "center", letterSpacing: 4 }),
      el("pos-309-title", "text", 70, 120, 940, 180, { text: "TORONTO INDIE\nFILM FESTIVAL", fontSize: 64, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff", textAlign: "center", lineHeight: 1.1 }),
      el("pos-309-dates", "text", 70, 320, 940, 30, { text: "NOVEMBER 5 — 14, 2026 // TORONTO, CANADA", fontSize: 15, fontFamily: "Inter", fontWeight: "700", fill: "#eab308", textAlign: "center", letterSpacing: 3 }),

      // Narrow Letterbox Slit In Center
      el("pos-309-img", "image", 70, 400, 940, 360, { src: PHOTOS_POSTERS[309], borderRadius: 6 }),

      // Full Billing Block & Strands Below
      el("pos-309-card", "rect", 70, 800, 940, 440, { fill: "#1c1917", stroke: "#eab308", strokeWidth: 1, borderRadius: 8 }),
      el("pos-309-ch", "text", 110, 830, 860, 26, { text: "PREMIER SCREENING VENUES & JURY SELECTION", fontSize: 16, fontFamily: "Cinzel", fontWeight: "700", fill: "#eab308" }),
      el("pos-309-cp", "text", 110, 875, 860, 330, { text: "TIFF Bell Lightbox  •  The Royal Cinema  •  Hot Docs Ted Rogers Cinema\n\nOFFICIAL STRANDS:\n• World Dramatic Competition (16 World Premieres)\n• Midnight Madness: Genre & Radical Cinema\n• Short Cuts International: 42 Curated Works\n• Directing Masterclasses with Award-Winning Cinematographers\n\nPASSES & TICKETS: WWW.TORONTO-INDIEFILM.ORG", fontSize: 14, fontFamily: "Inter", fill: "#e7e5e4", lineHeight: 1.8 })
    ]
  },

  // =========================================================================
  // 310: ARCHITECTURAL BLUEPRINT (Top photo banner, technical drafting cards)
  // =========================================================================
  {
    id: 310,
    name: "Architectural Blueprint Biennale Poster",
    title: "INTERNATIONAL ARCHITECTURAL BLUEPRINT BIENNALE",
    description: "Cyanotype blueprint drafting poster. Architectural grid coordinates, crisp technical drafting callouts, and modernist urban elevation photography.",
    category: "Posters",
    subcategory: "Architecture",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Blueprint", "Architecture", "Drafting", "Cyanotype", "Biennale", "Technical"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3740,
    views: 28900,
    gradient: "linear-gradient(180deg, #0b1f3a 0%, #153866 100%)",
    fonts: ["Space Grotesk", "Inter"],
    colors: ["#0b1f3a", "#38bdf8", "#ffffff", "#93c5fd"],
    elements: [
      el("pos-310-bg", "rect", 0, 0, 1080, 1528, { fill: "#0b1f3a", locked: true }),
      el("pos-310-border", "rect", 40, 40, 1000, 1448, { fill: "transparent", stroke: "#38bdf8", strokeWidth: 1 }),
      
      // Top Photo Banner (y: 60 to 380)
      el("pos-310-img", "image", 70, 60, 940, 320, { src: PHOTOS_POSTERS[310] }),

      el("pos-310-tag", "text", 70, 410, 940, 24, { text: "DRAFTING SPECIFICATION // SHEET A-102 // BIENNALE DI VENEZIA", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#38bdf8", letterSpacing: 3 }),
      el("pos-310-title", "text", 70, 450, 940, 130, { text: "FUTURE STRUCTURAL\nSYSTEMS BIENNALE", fontSize: 54, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff", lineHeight: 1.1 }),

      // 4 Drafting Grid Cards
      el("pos-310-c1", "rect", 70, 610, 450, 260, { fill: "#102a4e", stroke: "#38bdf8", strokeWidth: 1 }),
      el("pos-310-c1-t", "text", 90, 630, 410, 24, { text: "01 // TECTONIC WOOD", fontSize: 14, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#38bdf8" }),
      el("pos-310-c1-d", "text", 90, 665, 410, 180, { text: "Mass-timber high rises engineered to 40 stories with negative embodied carbon and automated robotic prefabrication.", fontSize: 13, fontFamily: "Inter", fill: "#dbeafe", lineHeight: 1.6 }),

      el("pos-310-c2", "rect", 560, 610, 450, 260, { fill: "#102a4e", stroke: "#38bdf8", strokeWidth: 1 }),
      el("pos-310-c2-t", "text", 580, 630, 410, 24, { text: "02 // TENSILE CANOPIES", fontSize: 14, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#38bdf8" }),
      el("pos-310-c2-d", "text", 580, 665, 410, 180, { text: "Self-stabilizing cable net membranes spanning 180-meter civic plazas without central structural columns.", fontSize: 13, fontFamily: "Inter", fill: "#dbeafe", lineHeight: 1.6 }),

      el("pos-310-c3", "rect", 70, 900, 450, 260, { fill: "#102a4e", stroke: "#38bdf8", strokeWidth: 1 }),
      el("pos-310-c3-t", "text", 90, 920, 410, 24, { text: "03 // KINETIC ENVELOPES", fontSize: 14, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#38bdf8" }),
      el("pos-310-c3-d", "text", 90, 955, 410, 180, { text: "Solar-tracking photovoltaic louver facades providing dynamic thermal insulation across seasonal extremes.", fontSize: 13, fontFamily: "Inter", fill: "#dbeafe", lineHeight: 1.6 }),

      el("pos-310-c4", "rect", 560, 900, 450, 260, { fill: "#102a4e", stroke: "#38bdf8", strokeWidth: 1 }),
      el("pos-310-c4-t", "text", 580, 920, 410, 24, { text: "04 // ARSENALE DATES", fontSize: 14, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#38bdf8" }),
      el("pos-310-c4-d", "text", 580, 955, 410, 180, { text: "May 23 — November 29, 2026\nVenice Arsenale & Giardini Pavilions\nCurated by Studio Grafton Architects", fontSize: 13, fontFamily: "Inter", fill: "#dbeafe", lineHeight: 1.6 })
    ]
  },

  // =========================================================================
  // 311: VINTAGE JAZZ (Circular vinyl record cutout, warm sepia, club card)
  // =========================================================================
  {
    id: 311,
    name: "Vintage Jazz & Vinyl Festival Poster",
    title: "HARLEM MIDNIGHT JAZZ & VINYL SESSIONS",
    description: "Atmospheric vintage jazz club poster. Warm amber and tobacco tones, Playfair Display italic typography, and classic saxophone performance photography.",
    category: "Posters",
    subcategory: "Music",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Jazz", "Music", "Vintage", "Vinyl", "Club", "Harlem"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4280,
    views: 33100,
    gradient: "linear-gradient(180deg, #1c130c 0%, #2e1d10 100%)",
    fonts: ["Playfair Display", "Inter"],
    colors: ["#1c130c", "#f59e0b", "#fef3c7", "#ffffff"],
    elements: [
      el("pos-311-bg", "rect", 0, 0, 1080, 1528, { fill: "#1c130c", locked: true }),
      el("pos-311-tag", "text", 70, 70, 940, 24, { text: "BLUE NOTE SESSIONS // LIVE ANALOG RECORDING", fontSize: 13, fontFamily: "Inter", fontWeight: "700", fill: "#f59e0b", textAlign: "center", letterSpacing: 4 }),
      el("pos-311-title", "text", 70, 110, 940, 130, { text: "Midnight Jazz\n& Vinyl Sessions", fontSize: 62, fontFamily: "Playfair Display", fontWeight: "700", fontStyle: "italic", fill: "#fef3c7", textAlign: "center", lineHeight: 1.15 }),

      // Circular Vinyl Cutout Photo (y: 270 to 830)
      el("pos-311-ring1", "circle", 240, 270, 600, 600, { fill: "transparent", stroke: "#f59e0b", strokeWidth: 3 }),
      el("pos-311-img", "image", 260, 290, 560, 560, { src: PHOTOS_POSTERS[311], borderRadius: 280 }),

      // Club Details Card
      el("pos-311-card", "rect", 120, 920, 840, 240, { fill: "#291a0e", stroke: "#f59e0b", strokeWidth: 1, borderRadius: 8 }),
      el("pos-311-ch", "text", 160, 950, 760, 30, { text: "FEATURING THE CHRISTIAN MCBRIDE TRIO", fontSize: 20, fontFamily: "Playfair Display", fontWeight: "700", fill: "#ffffff", textAlign: "center" }),
      el("pos-311-cd", "text", 160, 995, 760, 80, { text: "With special guest Cécile McLorin Salvant on vocals.\nTwo sets nightly: 20:00 & 22:30 // Limited 120 seats per show.\nVanguard Cellar, 178 7th Avenue South, Greenwich Village, NY", fontSize: 14, fontFamily: "Inter", fill: "#fed7aa", textAlign: "center", lineHeight: 1.6 })
    ]
  },

  // =========================================================================
  // 312: CLIMATE EARTH (Inverted: Stats AT TOP, photo AT BOTTOM)
  // =========================================================================
  {
    id: 312,
    name: "Global Earth & Climate Summit Poster",
    title: "GLOBAL EARTH & CLIMATE RESILIENCE SUMMIT",
    description: "High-impact environmental activism poster with satellite earth photography, bold emerald callouts, and planetary carbon budget statistics.",
    category: "Posters",
    subcategory: "Environmental",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Climate", "Earth", "Summit", "Ecology", "Activism", "Green"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3810,
    views: 29500,
    gradient: "linear-gradient(180deg, #022c22 0%, #064e3b 100%)",
    fonts: ["Space Grotesk", "Inter"],
    colors: ["#022c22", "#10b981", "#34d399", "#ffffff"],
    elements: [
      el("pos-312-bg", "rect", 0, 0, 1080, 1528, { fill: "#022c22", locked: true }),
      
      // 3 Carbon Stats AT TOP (y: 80 to 240)
      el("pos-312-k1", "rect", 70, 80, 290, 140, { fill: "#064e3b", stroke: "#10b981", strokeWidth: 1, borderRadius: 8 }),
      el("pos-312-k1-v", "text", 90, 100, 250, 44, { text: "1.5°C", fontSize: 40, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#34d399" }),
      el("pos-312-k1-l", "text", 90, 150, 250, 50, { text: "Threshold Ceiling Limit", fontSize: 12, fontFamily: "Inter", fill: "#a7f3d0" }),

      el("pos-312-k2", "rect", 395, 80, 290, 140, { fill: "#064e3b", stroke: "#10b981", strokeWidth: 1, borderRadius: 8 }),
      el("pos-312-k2-v", "text", 415, 100, 250, 44, { text: "280 Gt", fontSize: 40, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#ffffff" }),
      el("pos-312-k2-l", "text", 415, 150, 250, 50, { text: "Carbon Budget Left", fontSize: 12, fontFamily: "Inter", fill: "#a7f3d0" }),

      el("pos-312-k3", "rect", 720, 80, 290, 140, { fill: "#064e3b", stroke: "#10b981", strokeWidth: 1, borderRadius: 8 }),
      el("pos-312-k3-v", "text", 740, 100, 250, 44, { text: "2030", fontSize: 40, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#34d399" }),
      el("pos-312-k3-l", "text", 740, 150, 250, 50, { text: "50% Reduction Goal", fontSize: 12, fontFamily: "Inter", fill: "#a7f3d0" }),

      // Title in Middle (y: 260 to 420)
      el("pos-312-title", "text", 70, 260, 940, 140, { text: "PLANETARY BOUNDARIES:\nACT NOW OR NEVER", fontSize: 52, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#ffffff", lineHeight: 1.1 }),

      // Satellite Earth Photo AT BOTTOM (y: 440 to 1100)
      el("pos-312-img", "image", 70, 440, 940, 680, { src: PHOTOS_POSTERS[312], borderRadius: 16 })
    ]
  },

  // =========================================================================
  // 313: RETRO ALPINE TRAVEL (Headline top 120, photo lower 70% 400 to 1400)
  // =========================================================================
  {
    id: 313,
    name: "Retro Alpine Winter Travel Poster",
    title: "ZERMATT MATTERHORN WINTER TRAVEL POSTER",
    description: "Classic mid-century Swiss alpine travel poster. Bold retro typography, diagonal mountain composition, and vintage ski resort atmosphere.",
    category: "Posters",
    subcategory: "Travel",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Alpine", "Travel", "Swiss", "Retro", "Ski", "Mountains"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4180,
    views: 32600,
    gradient: "linear-gradient(180deg, #1e293b 0%, #334155 100%)",
    fonts: ["Oswald", "Inter"],
    colors: ["#1e293b", "#ef4444", "#f8fafc", "#38bdf8"],
    elements: [
      el("pos-313-bg", "rect", 0, 0, 1080, 1528, { fill: "#1e293b", locked: true }),
      el("pos-313-tag", "text", 70, 60, 940, 24, { text: "SUISSE · VALAIS · ALTITUDE 3,883 M", fontSize: 15, fontFamily: "Oswald", fontWeight: "700", fill: "#ef4444", textAlign: "center", letterSpacing: 5 }),
      el("pos-313-title", "text", 70, 100, 940, 110, { text: "ZERMATT", fontSize: 96, fontFamily: "Oswald", fontWeight: "900", fill: "#ffffff", textAlign: "center", letterSpacing: 6 }),
      el("pos-313-sub", "text", 70, 220, 940, 36, { text: "THE CROWN OF THE SWISS ALPS // SKIING & GLACIER PARADISE", fontSize: 16, fontFamily: "Inter", fontWeight: "700", fill: "#38bdf8", textAlign: "center", letterSpacing: 2 }),
      
      // Large Alpine Photo in Lower 70%
      el("pos-313-img", "image", 50, 280, 980, 960, { src: PHOTOS_POSTERS[313], borderRadius: 16 }),

      el("pos-313-foot", "text", 70, 1270, 940, 60, { text: "Direct express railway connection via Glacier Express from St. Moritz & Geneva.\nSeason open November through May.", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", textAlign: "center", lineHeight: 1.6 })
    ]
  },

  // =========================================================================
  // 314: HACKER TERMINAL (Top terminal window, bottom photo)
  // =========================================================================
  {
    id: 314,
    name: "Cyber Code & Hackathon Terminal Poster",
    title: "CODESTORM 48H GLOBAL HACKATHON POSTER",
    description: "Developer terminal poster with monospaced code prompt, hacker bounties, and cyber green glowing typography.",
    category: "Posters",
    subcategory: "Technology",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Hackathon", "Coding", "Developer", "Terminal", "Cyber", "Code"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4510,
    views: 36200,
    gradient: "linear-gradient(180deg, #050b14 0%, #0a1728 100%)",
    fonts: ["Space Grotesk", "Inter"],
    colors: ["#050b14", "#10b981", "#38bdf8", "#ffffff"],
    elements: [
      el("pos-314-bg", "rect", 0, 0, 1080, 1528, { fill: "#050b14", locked: true }),
      el("pos-314-top-bar", "rect", 70, 70, 940, 44, { fill: "#111f33", borderRadius: 8 }),
      el("pos-314-t-txt", "text", 100, 82, 880, 20, { text: "user@codestorm:~$ ./launch_hackathon.sh --teams=250 --bounty=$100,000", fontSize: 13, fontFamily: "Space Grotesk", fill: "#10b981" }),

      // Top Terminal Window (y: 130 to 580)
      el("pos-314-term-box", "rect", 70, 130, 940, 420, { fill: "#071324", stroke: "#10b981", strokeWidth: 1, borderRadius: 8 }),
      el("pos-314-title", "text", 100, 160, 880, 110, { text: "CODESTORM // 2026\n48-HOUR GLOBAL SPRINT", fontSize: 50, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#ffffff", lineHeight: 1.1 }),
      el("pos-314-pb-h", "text", 100, 290, 880, 50, { text: "$100,000 CASH PRIZE POOL", fontSize: 36, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#10b981" }),
      el("pos-314-pb-s", "text", 100, 360, 880, 140, { text: "★ Track 1: Frontier Autonomous AI Agents ($40k)\n★ Track 2: Zero-Knowledge Privacy Protocols ($30k)\n★ Track 3: High-Performance GPU Infrastructure ($30k)", fontSize: 15, fontFamily: "Space Grotesk", fill: "#cbd5e1", lineHeight: 1.8 }),

      // Bottom Photo (y: 580 to 1100)
      el("pos-314-img", "image", 70, 580, 940, 520, { src: PHOTOS_POSTERS[314], borderRadius: 12 })
    ]
  },

  // =========================================================================
  // 315: KINETIC SPRINT MARATHON (3 Horizontal photo strips, racing amber)
  // =========================================================================
  {
    id: 315,
    name: "Kinetic Marathon & Athletics Poster",
    title: "PACIFIC COAST ULTRA MARATHON 2026",
    description: "High-octane sports endurance poster. Kinetic diagonal typography, high-contrast racing amber, and dynamic athletic sprint photography.",
    category: "Posters",
    subcategory: "Sports",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Athletics", "Marathon", "Running", "Sports", "Kinetic", "Sprint"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3880,
    views: 30400,
    gradient: "linear-gradient(180deg, #180800 0%, #291203 100%)",
    fonts: ["Oswald", "Inter"],
    colors: ["#180800", "#f97316", "#ffffff", "#fed7aa"],
    elements: [
      el("pos-315-bg", "rect", 0, 0, 1080, 1528, { fill: "#180800", locked: true }),
      el("pos-315-title", "text", 70, 70, 940, 140, { text: "PACIFIC SPRINT:\nULTRA MARATHON", fontSize: 64, fontFamily: "Oswald", fontWeight: "900", fill: "#ffffff", lineHeight: 1.05 }),

      // 2 Sliced Action Strips
      el("pos-315-img1", "image", 70, 240, 940, 320, { src: PHOTOS_POSTERS[315], borderRadius: 8 }),
      
      el("pos-315-card1", "rect", 70, 580, 940, 120, { fill: "#f97316" }),
      el("pos-315-card1-t", "text", 90, 620, 900, 40, { text: "100K SOLO ELITE // 4,200M ELEVATION // BIG SUR COASTLINE", fontSize: 24, fontFamily: "Oswald", fontWeight: "900", fill: "#180800", textAlign: "center" }),

      el("pos-315-card2", "rect", 70, 730, 940, 280, { fill: "#291203", stroke: "#f97316", strokeWidth: 1, borderRadius: 8 }),
      el("pos-315-ch", "text", 100, 760, 880, 30, { text: "SATURDAY, SEPTEMBER 19, 2026 // BIG SUR COASTLINE", fontSize: 18, fontFamily: "Oswald", fontWeight: "700", fill: "#f97316" }),
      el("pos-315-cd", "text", 100, 805, 880, 160, { text: "Rugged Pacific cliffs, ocean spray, and steep redwood ridge switchbacks.\n• 100K Solo Ultra (Men's & Women's Divisions)\n• 50K Coastal Challenge\n• 4-Runner Ekiden Relay\nRegistration closes August 1st at www.pacific-ultra.org", fontSize: 14, fontFamily: "Inter", fill: "#fed7aa", lineHeight: 1.7 })
    ]
  },

  // =========================================================================
  // 316: MACRO FLORAL BOTANICAL (Centered square polaroid, title below)
  // =========================================================================
  {
    id: 316,
    name: "Macro Floral Botanical Garden Poster",
    title: "FLORA EXOTICA: BOTANICAL HERBARIUM",
    description: "Elegant botanical garden exhibition poster. Centered square polaroid photography, Cormorant Garamond typography, and delicate gold framing.",
    category: "Posters",
    subcategory: "Botanical",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Floral", "Botanical", "Macro", "Garden", "Herbarium", "Flowers"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4190,
    views: 32900,
    gradient: "linear-gradient(180deg, #fdfbf7 0%, #f4efe6 100%)",
    fonts: ["Cormorant Garamond", "Inter"],
    colors: ["#fdfbf7", "#164e63", "#d97706", "#334155"],
    elements: [
      el("pos-316-bg", "rect", 0, 0, 1080, 1528, { fill: "#fdfbf7", locked: true }),
      el("pos-316-tag", "text", 70, 70, 940, 24, { text: "ROYAL BOTANIC GARDENS KEW // SPECIAL HERBARIUM SPECIMEN NO. 418", fontSize: 13, fontFamily: "Inter", fontWeight: "700", fill: "#d97706", textAlign: "center", letterSpacing: 4 }),

      // Centered Square Polaroid Photo (y: 120 to 820)
      el("pos-316-polaroid", "rect", 180, 120, 720, 720, { fill: "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 4 }),
      el("pos-316-img", "image", 210, 150, 660, 660, { src: PHOTOS_POSTERS[316] }),

      // Title BELOW the photo
      el("pos-316-title", "text", 70, 880, 940, 110, { text: "FLORA EXOTICA", fontSize: 72, fontFamily: "Cormorant Garamond", fontWeight: "700", fill: "#164e63", textAlign: "center", lineHeight: 1.05 }),
      el("pos-316-sub", "text", 70, 1000, 940, 30, { text: "RARE BLOSSOMS & ENDANGERED ALPINE ORCHIDS OF THE WORLD", fontSize: 14, fontFamily: "Inter", fill: "#334155", textAlign: "center", letterSpacing: 2 }),
      el("pos-316-dates", "text", 70, 1060, 940, 36, { text: "JULY 4 — OCTOBER 30, 2026 // PRINCESS OF WALES CONSERVATORY", fontSize: 18, fontFamily: "Cormorant Garamond", fontWeight: "700", fill: "#d97706", textAlign: "center" })
    ]
  },

  // =========================================================================
  // 317: CRAFT CULINARY FESTIVAL (3 Vertical photo cards side-by-side)
  // =========================================================================
  {
    id: 317,
    name: "Artisan Culinary & Gastronomy Poster",
    title: "TASTE OF PROVENCE CULINARY FESTIVAL",
    description: "Warm artisan gastronomic food festival poster with 3 vertical photo cards, Michelin-star chef line-up, and farm-to-table tasting workshops.",
    category: "Posters",
    subcategory: "Culinary",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Culinary", "Food", "Gastronomy", "Artisan", "Wine", "Festival"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3780,
    views: 29100,
    gradient: "linear-gradient(180deg, #1c1109 0%, #2e1a0e 100%)",
    fonts: ["DM Serif Display", "Inter"],
    colors: ["#1c1109", "#f59e0b", "#fef3c7", "#ffffff"],
    elements: [
      el("pos-317-bg", "rect", 0, 0, 1080, 1528, { fill: "#1c1109", locked: true }),
      el("pos-317-tag", "text", 70, 70, 940, 24, { text: "ANNUAL HARVEST GASTRONOMY SYMPOSIUM", fontSize: 13, fontFamily: "Inter", fontWeight: "700", fill: "#f59e0b", letterSpacing: 3 }),
      el("pos-317-title", "text", 70, 110, 940, 130, { text: "GOURMET PROVENCE:\nFARM TO TABLE 2026", fontSize: 54, fontFamily: "DM Serif Display", fill: "#fef3c7", lineHeight: 1.15 }),

      // 3 Vertical Culinary Photo Cards Side-by-Side (y: 270 to 850)
      el("pos-317-img1", "image", 70, 270, 290, 560, { src: PHOTOS_POSTERS['317_1'], borderRadius: 8 }),
      el("pos-317-img2", "image", 395, 270, 290, 560, { src: PHOTOS_POSTERS['317_2'], borderRadius: 8 }),
      el("pos-317-img3", "image", 720, 270, 290, 560, { src: PHOTOS_POSTERS['317_3'], borderRadius: 8 }),

      // Tasting Schedule below
      el("pos-317-card", "rect", 70, 870, 940, 240, { fill: "#2e1a0e", stroke: "#f59e0b", strokeWidth: 1, borderRadius: 8 }),
      el("pos-317-ch", "text", 110, 895, 860, 26, { text: "THREE DAYS OF EPICUREAN DISCOVERY", fontSize: 16, fontFamily: "DM Serif Display", fill: "#f59e0b" }),
      el("pos-317-cp", "text", 110, 935, 860, 140, { text: "Featuring 40 regional artisan winemakers, master truffle foragers, and live open-fire culinary demonstrations by international guest chefs.\n\nOCTOBER 9–11, 2026 // CHÂTEAU DE LOURMARIN, FRANCE", fontSize: 14, fontFamily: "Inter", fill: "#fed7aa", lineHeight: 1.7 })
    ]
  },

  // =========================================================================
  // 318: DEEP SPACE COSMOS (Top 55% circular focal photo ring, coordinates)
  // =========================================================================
  {
    id: 318,
    name: "Deep Space Cosmos Astronomy Poster",
    title: "DEEP SPACE HORIZONS: WEBB TELESCOPE EXHIBITION",
    description: "Cosmic astronomy exhibition poster. Circular celestial ring, James Webb deep field photography, and stellar coordinates.",
    category: "Posters",
    subcategory: "Science",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Space", "Astronomy", "Cosmos", "NASA", "Galaxy", "Webb"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4720,
    views: 38900,
    gradient: "linear-gradient(180deg, #030712 0%, #0b1120 100%)",
    fonts: ["Space Grotesk", "Inter"],
    colors: ["#030712", "#38bdf8", "#818cf8", "#ffffff"],
    elements: [
      el("pos-318-bg", "rect", 0, 0, 1080, 1528, { fill: "#030712", locked: true }),
      el("pos-318-ring", "circle", 230, 80, 620, 620, { fill: "transparent", stroke: "#38bdf8", strokeWidth: 1.5 }),
      el("pos-318-img", "image", 250, 100, 580, 580, { src: PHOTOS_POSTERS[318], borderRadius: 290 }),

      el("pos-318-tag", "text", 70, 720, 940, 24, { text: "JAMES WEBB SPACE TELESCOPE // DEEP FIELD SPECTRAL SURVEY", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#38bdf8", letterSpacing: 4 }),
      el("pos-318-title", "text", 70, 760, 940, 140, { text: "DEEP SPACE HORIZONS:\nFIRST LIGHT OF CREATION", fontSize: 52, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#ffffff", lineHeight: 1.1 }),
      el("pos-318-desc", "text", 70, 920, 940, 120, { text: "Peer 13.5 billion years into the cosmic dawn. Unveiling the earliest protogalaxies, stellar nurseries, and atmospheric bio-signatures of distant exoplanets.", fontSize: 16, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.7 }),
      el("pos-318-box", "rect", 70, 1070, 940, 180, { fill: "#0f172a", stroke: "#38bdf8", strokeWidth: 1, borderRadius: 8 }),
      el("pos-318-bh", "text", 110, 1100, 860, 26, { text: "HAYDEN PLANETARIUM // NEW YORK CITY", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#818cf8" }),
      el("pos-318-bd", "text", 110, 1140, 860, 80, { text: "Immersive 8K dome projection daily from 10:00 to 18:00.\nAmerican Museum of Natural History // www.amnh.org/deep-space", fontSize: 14, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.6 })
    ]
  },

  // =========================================================================
  // 319: DRAMATIC OPERA & PERFORMING ARTS (Crimson velvet, upper photo, libretto cards)
  // =========================================================================
  {
    id: 319,
    name: "Dramatic Opera Season Premiere Poster",
    title: "LA SCALA OPERA SEASON OPENING NIGHT",
    description: "Magnificent classical opera season poster with rich crimson velvet tones, Prata serif typography, and libretto synopsis cards.",
    category: "Posters",
    subcategory: "Theater",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Opera", "Theater", "Performance", "Classical", "Drama", "La Scala"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4110,
    views: 31800,
    gradient: "linear-gradient(180deg, #180509 0%, #2b0b12 100%)",
    fonts: ["Playfair Display", "Inter"],
    colors: ["#180509", "#d4af37", "#ffffff", "#fda4af"],
    elements: [
      el("pos-319-bg", "rect", 0, 0, 1080, 1528, { fill: "#180509", locked: true }),
      el("pos-319-frame", "rect", 50, 50, 980, 1428, { fill: "transparent", stroke: "#d4af37", strokeWidth: 1 }),
      el("pos-319-tag", "text", 70, 70, 940, 24, { text: "TEATRO ALLA SCALA // MILANO // STAGIONE 2026/2027", fontSize: 13, fontFamily: "Inter", fontWeight: "700", fill: "#d4af37", textAlign: "center", letterSpacing: 4 }),
      el("pos-319-title", "text", 70, 100, 940, 110, { text: "PUCCINI'S TOSCA", fontSize: 62, fontFamily: "Playfair Display", fontWeight: "800", fill: "#ffffff", textAlign: "center" }),

      // Upper Photo (y: 220 to 660)
      el("pos-319-img", "image", 90, 220, 900, 440, { src: PHOTOS_POSTERS[319], borderRadius: 8 }),

      // Act Libretto Synopsis Cards
      el("pos-319-c1", "rect", 90, 690, 430, 240, { fill: "#2b0b12", stroke: "#d4af37", strokeWidth: 1 }),
      el("pos-319-c1-t", "text", 110, 715, 390, 24, { text: "ATTO I & II: ROMA 1800", fontSize: 14, fontFamily: "Playfair Display", fontWeight: "700", fill: "#d4af37" }),
      el("pos-319-c1-p", "text", 110, 750, 390, 150, { text: "Sant'Andrea della Valle church refuge followed by the fatal confrontation in Baron Scarpia's Farnese palace chambers.", fontSize: 13, fontFamily: "Inter", fill: "#fecdd3", lineHeight: 1.6 }),

      el("pos-319-c2", "rect", 560, 690, 430, 240, { fill: "#2b0b12", stroke: "#d4af37", strokeWidth: 1 }),
      el("pos-319-c2-t", "text", 580, 715, 390, 24, { text: "ATTO III: CASTEL SANT'ANGELO", fontSize: 14, fontFamily: "Playfair Display", fontWeight: "700", fill: "#d4af37" }),
      el("pos-319-c2-p", "text", 580, 750, 390, 150, { text: "Cavaradossi's dawn execution and Tosca's desperate tragic leap from the parapet into the Tiber.", fontSize: 13, fontFamily: "Inter", fill: "#fecdd3", lineHeight: 1.6 }),

      el("pos-319-dates", "text", 70, 960, 940, 30, { text: "PRIMA DELLA SCALA // 7 DICEMBRE 2026", fontSize: 20, fontFamily: "Playfair Display", fontWeight: "700", fill: "#d4af37", textAlign: "center" }),
      el("pos-319-cast", "text", 70, 1000, 940, 50, { text: "Conductor: Riccardo Chailly // Director: Davide Livermore\nStarring Anna Netrebko as Floria Tosca", fontSize: 14, fontFamily: "Inter", fill: "#fecdd3", textAlign: "center", lineHeight: 1.6 })
    ]
  },

  // =========================================================================
  // 320: MODERN ART VERNISSAGE (Two-tone horizontal split: top indigo, bottom white)
  // =========================================================================
  {
    id: 320,
    name: "Modern Art Vernissage Gallery Poster",
    title: "CONTEMPORARY PERSPECTIVES ART OPENING",
    description: "Two-tone horizontal color-block gallery poster. Top half bold indigo, bottom half crisp gallery white with art photography.",
    category: "Posters",
    subcategory: "Art Exhibition",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Art", "Gallery", "Vernissage", "Modern", "Exhibition", "Contemporary"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3840,
    views: 29600,
    gradient: "linear-gradient(180deg, #4f46e5 0%, #4338ca 100%)",
    fonts: ["Space Grotesk", "Inter"],
    colors: ["#4f46e5", "#ffffff", "#0f172a", "#334155"],
    elements: [
      el("pos-320-bg-bot", "rect", 0, 764, 1080, 764, { fill: "#ffffff", locked: true }),
      el("pos-320-bg-top", "rect", 0, 0, 1080, 764, { fill: "#4f46e5", locked: true }),
      el("pos-320-tag", "text", 70, 60, 940, 24, { text: "PINACOTECA MODERNA // AUTUMN VERNISSAGE 2026", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#c7d2fe", letterSpacing: 4 }),
      el("pos-320-title", "text", 70, 110, 940, 150, { text: "CONTEMPORARY\nPERSPECTIVES", fontSize: 68, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#ffffff", lineHeight: 1.05 }),
      el("pos-320-sub", "text", 70, 280, 940, 40, { text: "AN INTERNATIONAL SURVEY OF POST-DIGITAL MATERIALITY", fontSize: 16, fontFamily: "Inter", fill: "#e0e7ff", letterSpacing: 2 }),

      // Gallery photo positioned across the split line (y: 380 to 980)
      el("pos-320-img", "image", 140, 380, 800, 600, { src: PHOTOS_POSTERS[320], borderRadius: 12 }),

      el("pos-320-dates", "text", 70, 1030, 940, 40, { text: "NOVEMBER 18, 2026 — MARCH 14, 2027", fontSize: 24, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#0f172a" }),
      el("pos-320-desc", "text", 70, 1085, 940, 80, { text: "Vernissage reception with the artists on Nov 18 from 18:00 to 22:00.\nOpen Tuesday through Sunday, 10:00 — 19:00 // Free admission on Thursdays.", fontSize: 15, fontFamily: "Inter", fill: "#475569", lineHeight: 1.6 })
    ]
  },

  // =========================================================================
  // 321: UNDERGROUND TECHNO (Strobe photo left w=620, stencil vertical right)
  // =========================================================================
  {
    id: 321,
    name: "Underground Electronic Club Poster",
    title: "SUBTERRANEAN BERLIN WAREHOUSE SESSIONS",
    description: "Raw Berlin underground club poster. Acid lime green accents, stencil-inspired display typography, and left-aligned strobe photo.",
    category: "Posters",
    subcategory: "Nightlife",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Techno", "Nightlife", "Club", "Berlin", "Acid", "Electronic"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4590,
    views: 37200,
    gradient: "linear-gradient(180deg, #050505 0%, #121212 100%)",
    fonts: ["Oswald", "Space Grotesk"],
    colors: ["#050505", "#a3e635", "#ffffff", "#52525b"],
    elements: [
      el("pos-321-bg", "rect", 0, 0, 1080, 1528, { fill: "#050505", locked: true }),
      el("pos-321-pill", "rect", 70, 70, 240, 36, { fill: "#a3e635" }),
      el("pos-321-pillt", "text", 70, 78, 240, 20, { text: "BERLIN WAREHOUSE", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#050505", textAlign: "center", letterSpacing: 2 }),
      el("pos-321-title", "text", 70, 130, 940, 80, { text: "SUBTERRANEAN: 36H TECHNO", fontSize: 50, fontFamily: "Oswald", fontWeight: "900", fill: "#ffffff" }),

      // Strobe Photo on Left (y: 230 to 1100, w=580)
      el("pos-321-img", "image", 70, 230, 580, 870, { src: PHOTOS_POSTERS[321], borderRadius: 8 }),

      // Right Column Lineup
      el("pos-321-side", "rect", 680, 230, 330, 870, { fill: "#18181b", stroke: "#a3e635", strokeWidth: 1, borderRadius: 8 }),
      el("pos-321-sh", "text", 705, 260, 280, 30, { text: "LINEUP A–Z", fontSize: 18, fontFamily: "Oswald", fontWeight: "700", fill: "#a3e635" }),
      el("pos-321-sp", "text", 705, 305, 280, 760, { text: "ANETHA\nBLAWAN (LIVE)\nDAX J\nDJ NOBU\nELLEN ALLIEN\nHECTOR OAKS\nI HATE MODELS\nKOBOSIL\nOSCAR MULERO\nPAULA TEMPLE\nREINIER ZONNEVELD\nSPFDJ\nSURGEON (LIVE)\nVTSS\n\nDOORS 23:00 SAT\nKRAFTWERK MITTE", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#ffffff", lineHeight: 2.1 })
    ]
  },

  // =========================================================================
  // 322: ASTRONOMY OBSERVATORY & ECLIPSE (Center solar corona with orbital rings)
  // =========================================================================
  {
    id: 322,
    name: "Solar Eclipse & Astronomy Observatory Poster",
    title: "TOTAL SOLAR ECLIPSE 2026 OBSERVATORY EXPEDITION",
    description: "Majestic astronomical observatory poster commemorating the 2026 total solar eclipse with corona photography and solar physics symposium details.",
    category: "Posters",
    subcategory: "Science",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Eclipse", "Astronomy", "Solar", "Observatory", "Science", "Space"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4320,
    views: 34100,
    gradient: "linear-gradient(180deg, #09090b 0%, #17171c 100%)",
    fonts: ["Cinzel", "Inter"],
    colors: ["#09090b", "#f59e0b", "#ffffff", "#a1a1aa"],
    elements: [
      el("pos-322-bg", "rect", 0, 0, 1080, 1528, { fill: "#09090b", locked: true }),
      el("pos-322-tag", "text", 70, 70, 940, 24, { text: "EUROPEAN SOUTHERN OBSERVATORY // LA SILLA, CHILE", fontSize: 13, fontFamily: "Inter", fontWeight: "700", fill: "#f59e0b", textAlign: "center", letterSpacing: 4 }),
      el("pos-322-title", "text", 70, 110, 940, 120, { text: "TOTAL SOLAR ECLIPSE\nEXPEDITION 2026", fontSize: 52, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff", textAlign: "center", lineHeight: 1.15 }),

      // Center Solar Corona (y: 260 to 940)
      el("pos-322-ring1", "circle", 170, 260, 740, 740, { fill: "transparent", stroke: "rgba(245, 158, 11, 0.2)", strokeWidth: 1 }),
      el("pos-322-ring2", "circle", 190, 280, 700, 700, { fill: "transparent", stroke: "#f59e0b", strokeWidth: 2 }),
      el("pos-322-img", "image", 210, 300, 660, 660, { src: PHOTOS_POSTERS[322], borderRadius: 330 }),

      el("pos-322-dates", "text", 70, 1050, 940, 40, { text: "AUGUST 12, 2026 // TOTALITY DURATION: 2M 18S", fontSize: 22, fontFamily: "Cinzel", fontWeight: "700", fill: "#f59e0b", textAlign: "center" }),
      el("pos-322-desc", "text", 70, 1105, 940, 80, { text: "International astrophysical expedition observing coronal magnetic turbulence and relativistic light deflection.\nScientific symposium registration open at www.eso-eclipse2026.org", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", textAlign: "center", lineHeight: 1.6 })
    ]
  },

  // =========================================================================
  // 323: GLOBAL ACADEMIC SYMPOSIUM & UNIVERSITY LECTURE (Education)
  // =========================================================================
  {
    id: 323,
    name: "Global Academic & Science Symposium Poster",
    title: "THE EMPIRICAL MIND: 2026 ACADEMIC COLLOQUIUM",
    description: "Prestigious academic symposium and university lecture poster with classical collegiate architecture, keynote faculty panels, and collegiate heraldry.",
    category: "Posters",
    subcategory: "Education",
    size: "1080×1528",
    canvasWidth: 1080,
    canvasHeight: 1528,
    orientation: "portrait",
    tags: ["Education", "Academic", "University", "Symposium", "Lecture", "Science"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4180,
    views: 33200,
    gradient: "linear-gradient(180deg, #0a1128 0%, #101d42 100%)",
    fonts: ["Cinzel", "Inter"],
    colors: ["#0a1128", "#e2b714", "#ffffff", "#94a3b8"],
    elements: [
      el("pos-323-bg", "rect", 0, 0, 1080, 1528, { fill: "#0a1128", locked: true }),
      el("pos-323-crest", "text", 70, 65, 940, 24, { text: "OXFORD & CAMBRIDGE INTER-COLLEGIATE ACADEMIC CONSORTIUM", fontSize: 13, fontFamily: "Inter", fontWeight: "700", fill: "#e2b714", letterSpacing: 4 }),
      el("pos-323-title", "text", 70, 105, 940, 110, { text: "THE EMPIRICAL MIND:\n2026 ACADEMIC COLLOQUIUM", fontSize: 48, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff", lineHeight: 1.15 }),
      el("pos-323-sub", "text", 70, 225, 940, 30, { text: "ANNUAL DISTINGUISHED FACULTY LECTURE SERIES & PHILOSOPHICAL DEBATES", fontSize: 13, fontFamily: "Inter", fontWeight: "600", fill: "#cbd5e1", letterSpacing: 2 }),

      // Left vertical lecture amphitheater photo (y: 280 to 1180)
      el("pos-323-img", "image", 70, 280, 500, 900, { src: PHOTOS_POSTERS[323], borderRadius: 12 }),

      // Right syllabus & panel cards
      el("pos-323-card1", "rect", 595, 280, 415, 275, { fill: "#131f3f", stroke: "rgba(226, 183, 20, 0.3)", strokeWidth: 1, borderRadius: 8 }),
      el("pos-323-c1h", "text", 620, 305, 365, 24, { text: "SESSION I: QUANTUM REALITY", fontSize: 14, fontFamily: "Cinzel", fontWeight: "700", fill: "#e2b714" }),
      el("pos-323-c1p", "text", 620, 340, 365, 190, { text: "Dr. Alistair Vance (Cambridge)\nExploring measurement paradoxes and cosmological boundary conditions in topological quantum mechanics.", fontSize: 13, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 }),

      el("pos-323-card2", "rect", 595, 585, 415, 275, { fill: "#131f3f", stroke: "rgba(226, 183, 20, 0.3)", strokeWidth: 1, borderRadius: 8 }),
      el("pos-323-c2h", "text", 620, 610, 365, 24, { text: "SESSION II: COGNITIVE EPISTEMOLOGY", fontSize: 14, fontFamily: "Cinzel", fontWeight: "700", fill: "#e2b714" }),
      el("pos-323-c2p", "text", 620, 645, 365, 190, { text: "Prof. Elena Rostova (ETH Zürich)\nComputational models of emergent consciousness, linguistic structures, and philosophical intuition.", fontSize: 13, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 }),

      el("pos-323-card3", "rect", 595, 890, 415, 290, { fill: "#131f3f", stroke: "rgba(226, 183, 20, 0.3)", strokeWidth: 1, borderRadius: 8 }),
      el("pos-323-c3h", "text", 620, 915, 365, 24, { text: "SESSION III: DOCTORAL SYMPOSIUM", fontSize: 14, fontFamily: "Cinzel", fontWeight: "700", fill: "#e2b714" }),
      el("pos-323-c3p", "text", 620, 950, 365, 205, { text: "Selected postdoctoral defenses and open debate forum with peer review committees and departmental deans.", fontSize: 13, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 }),

      // Bottom banner
      el("pos-323-banner", "rect", 70, 1210, 940, 170, { fill: "#131f3f", stroke: "#e2b714", strokeWidth: 1, borderRadius: 8 }),
      el("pos-323-bh", "text", 100, 1235, 880, 26, { text: "SEPTEMBER 21–25, 2026 // SHELDONIAN THEATRE, OXFORD", fontSize: 16, fontFamily: "Cinzel", fontWeight: "700", fill: "#e2b714" }),
      el("pos-323-bp", "text", 100, 1275, 880, 80, { text: "Open to university faculty, graduate fellows, and credentialed scholars. Includes symposium proceedings monograph and honorary banquet access.\nInquiries: colloquium@ox.ac.uk", fontSize: 13, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 }),

      el("pos-323-foot", "text", 70, 1420, 940, 24, { text: "ACCREDITED HIGHER EDUCATION EVENT NO. AC-8821 // OFFICIAL PROGRAMME MONOGRAPH", fontSize: 11, fontFamily: "Inter", fill: "#64748b", letterSpacing: 2 })
    ]
  }
];

// Write output file
const outputPath = path.resolve('artifacts/api-server/src/lib/templates/posters.ts');
const fileContent = `// ORD Studio Canonical Posters Registry (IDs 301-323)
// Generated by generate_all_posters.mjs with 100% Unique Design DNA, Zero Collisions, and Zero Photo Reuse.

export const POSTER_TEMPLATES = ${JSON.stringify(POSTER_TEMPLATES, null, 2)};
`;

fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated 23 posters (IDs 301-323) to ${outputPath}`);
