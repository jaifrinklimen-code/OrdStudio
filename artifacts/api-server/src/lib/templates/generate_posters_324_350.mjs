// Posters Generator (IDs 324 to 350) — 27 Bespoke Art & Typography Posters
// 1080x1528 Canvas, monumental typography, distinct aesthetic styles.

function el(id, type, x, y, width, height, props = {}) {
  return { visible: true, id, type, x, y, width, height, ...props };
}

export function generatePosters324to350() {
  const posters = [];
  const configs = [
    { id: 324, name: "International Swiss Typography Biennale", sub: "Typography", bg: "#ffffff", accent: "#ef4444", text: "#000000", title: "SWISS TYPO\nBIENNALE", desc: "Zürich International Exhibition of Modern Grid Systems and Brutalist Type Design.", photo: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=1200" },
    { id: 325, name: "Deep Space Telescope Observatory Poster", sub: "Astronomy", bg: "#030712", accent: "#38bdf8", text: "#ffffff", title: "JAMES WEBB\nDEEP FIELD", desc: "Infrared Observations of First-Generation Galaxies at the Edge of Observable Spacetime.", photo: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&q=80&w=1200" },
    { id: 326, name: "Cyberpunk Underground Rave & Laser Sound", sub: "Music Gig", bg: "#090514", accent: "#ec4899", text: "#ffffff", title: "NEON MATRIX\nRAVE 2026", desc: "140 BPM Industrial Techno, Holographic Laser Arrays, and Modular Synth Soundscapes.", photo: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1200" },
    { id: 327, name: "Brutalist Concrete Architecture Exhibition", sub: "Architecture", bg: "#18181b", accent: "#f59e0b", text: "#ffffff", title: "RAW CONCRETE\nMONOLITHS", desc: "A Curatorial Retrospective on European Brutalism, Spatial Weight, and Formwork Textures.", photo: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200" },
    { id: 328, name: "Nordic Wildlife & Arctic Fox Expedition", sub: "Wildlife", bg: "#f0fdfa", accent: "#0d9488", text: "#134e4a", title: "ARCTIC SILENCE\nEXPEDITION", desc: "Svalbard Wildlife Photography & Glacier Habitat Conservation Documentary.", photo: "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&q=80&w=1200" },
    { id: 329, name: "Vintage Formula Racing Monaco Grand Prix", sub: "Motorsport", bg: "#fffbeb", accent: "#dc2626", text: "#1c1917", title: "GRAND PRIX\nDE MONACO", desc: "Historic Circuit de Monaco 1976 Retrospective Featuring 12-Cylinder Atmospheric Prototypes.", photo: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1200" },
    { id: 330, name: "Abstract Bauhaus Geometric Shapes & Color", sub: "Bauhaus", bg: "#ffffff", accent: "#2563eb", text: "#0f172a", title: "BAUHAUS 100\nFORM & COLOR", desc: "Exploring the Synthesis of Art, Craft, and Industrial Geometry in Modernist Design.", photo: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1200" },
    { id: 331, name: "Contemporary Dance & Kinetic Ballet", sub: "Dance", bg: "#000000", accent: "#f43f5e", text: "#ffffff", title: "KINETIC MOTION\nBALLET", desc: "Avant-Garde Choreography by Netherlands Dance Theater at Sadler's Wells.", photo: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1200" },
    { id: 332, name: "Ocean Plastic Clean-up Ecological Action", sub: "Environmental", bg: "#022c22", accent: "#10b981", text: "#ffffff", title: "OCEAN CLEANSE\nGLOBAL ACTION", desc: "Autonomous Solar Skimmers Removing 50,000 Tons of Marine Waste from the Pacific Gyre.", photo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200" },
    { id: 333, name: "Retro Synthwave Sunset Horizon", sub: "Synthwave", bg: "#1e1035", accent: "#f43f5e", text: "#ffffff", title: "SYNTHWAVE 84\nMIDNIGHT DRIVE", desc: "Analog Synthesizers, Neon Palm Horizons, and Outrun Electronic Soundtracks.", photo: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1200" },
    { id: 334, name: "Japanese Ukiyo-e Woodblock Modern Fusion", sub: "Japanese Art", bg: "#fafaf9", accent: "#991b1b", text: "#1c1917", title: "UKIYO-E WOOD\nPRINT REVIVAL", desc: "Centuries of Traditional Japanese Woodblock Craft Reimagined through Generative Algorithms.", photo: "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&q=80&w=1200" },
    { id: 335, name: "Indie Rock Summer Festival Lineup", sub: "Festival", bg: "#fef08a", accent: "#000000", text: "#000000", title: "SOUNDWAVE\nFESTIVAL 2026", desc: "Three Days of Independent Rock, Psych Pop, and Post-Punk in Victoria Park, London.", photo: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80&w=1200" },
    { id: 336, name: "Mid-Century Modern Furniture Exhibition", sub: "Design", bg: "#fefce8", accent: "#ca8a04", text: "#451a03", title: "MID-CENTURY\nMODERN ICONS", desc: "Eames, Wegner, Jacobsen, and Saarinen: The Masterpieces of 20th Century Living.", photo: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200" },
    { id: 337, name: "Extreme Alpine Mountain Climbing Documentary", sub: "Adventure", bg: "#0f172a", accent: "#38bdf8", text: "#ffffff", title: "NORTH FACE\nALPINE PEAKS", desc: "Solo Winter Ascent of the Matterhorn North Face Without Supplementary Oxygen.", photo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200" },
    { id: 338, name: "Psychedelic 70s Floral Art Showcase", sub: "Psychedelic", bg: "#431407", accent: "#fb923c", text: "#fff7ed", title: "PSYCHEDELIC\nBLOOM 1973", desc: "Vibrant Swirling Botanical Illustrations and Op-Art Patterns from San Francisco Summer.", photo: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1200" },
    { id: 339, name: "Urban Streetwear & Graffiti Art Launch", sub: "Streetwear", bg: "#09090b", accent: "#a3e635", text: "#ffffff", title: "STREET CULTURE\nCOLLECTIVE", desc: "Limited Edition Outerwear Capsule and Underground Stencil Exhibition in Tokyo Shibuya.", photo: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=1200" },
    { id: 340, name: "Fine Art Botanical Herbarium Print", sub: "Botanical", bg: "#fafaf9", accent: "#15803d", text: "#14532d", title: "HERBARIUM\nSYSTEMATICA", desc: "Scientific Pressed Flora of the Mediterranean Basin with Latin Taxonomical Nomenclature.", photo: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200" },
    { id: 341, name: "Avant-Garde Theater & Experimental Play", sub: "Theater", bg: "#000000", accent: "#dc2626", text: "#ffffff", title: "THE TRAGEDY OF\nPERCEPTION", desc: "An Immersive Staged Production of Samuel Beckett's Lost Post-War Fragments in Berlin.", photo: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1200" },
    { id: 342, name: "Solar Eclipse Astronomy Lecture Series", sub: "Astronomy", bg: "#030712", accent: "#f59e0b", text: "#ffffff", title: "TOTAL SOLAR\nCORONA 2026", desc: "Astrophysics Lecture Series on Solar Dynamics and Coronal Mass Ejections at Caltech.", photo: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&q=80&w=1200" },
    { id: 343, name: "Vintage Vinyl Record Fair & Audio Expo", sub: "Music", bg: "#fffbeb", accent: "#b45309", text: "#271406", title: "ANALOG VINYL\nCOLLECTORS FAIR", desc: "Over 50,000 Rare First Pressing Jazz, Soul, and Classical LPs at Brooklyn Expo Center.", photo: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1200" },
    { id: 344, name: "Modernist Sculpture & Kinetic Steel", sub: "Sculpture", bg: "#f4f4f5", accent: "#0284c7", text: "#0f172a", title: "KINETIC STEEL\nSCULPTURE", desc: "Balanced Calder-Inspired Windmobiles and Polished Stainless Steel Spatial Forms.", photo: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&q=80&w=1200" },
    { id: 345, name: "National Park Wilderness Conservation", sub: "Nature", bg: "#052e16", accent: "#86efac", text: "#ffffff", title: "YOSEMITE WILD\nCONSERVANCY", desc: "Preserving Old-Growth Sierra Redwood Canopies and Alpine Water Sheds for Future Generations.", photo: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&q=80&w=1200" },
    { id: 346, name: "Futuristic Drone & AI Robotics Expo", sub: "Robotics", bg: "#020617", accent: "#06b6d4", text: "#ffffff", title: "AUTONOMOUS\nROBOTICS EXPO", desc: "Next-Gen Humanoid Bipeds, Drone Swarm Delivery Systems, and Edge AI Hardware.", photo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200" },
    { id: 347, name: "Craft Brewing & Micro-Distillery Fest", sub: "Craft Beer", bg: "#451a03", accent: "#fbbf24", text: "#fef3c7", title: "HERITAGE HOP\nCRAFT FESTIVAL", desc: "Sixty Master Brewers Showcasing Barrel-Aged Stouts and Wild Fermentation Farmhouse Ales.", photo: "https://images.unsplash.com/photo-1518057111178-44a106bad636?auto=format&fit=crop&q=80&w=1200" },
    { id: 348, name: "Classical Film Noir Cinema Retrospective", sub: "Film Noir", bg: "#000000", accent: "#cbd5e1", text: "#ffffff", title: "SHADOW & SMOKE\nFILM NOIR 1948", desc: "Double Indemnity, Out of the Past, and The Third Man Screened in Archival 35mm Nitrate Prints.", photo: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200" },
    { id: 349, name: "Geometric Origami & Paper Architecture", sub: "Origami", bg: "#fff1f2", accent: "#e11d48", text: "#881337", title: "FOLDED SPACE\nORIGAMI FORMS", desc: "Mathematical Tesselations and Structural Paper Engineering by Contemporary Japanese Masters.", photo: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&q=80&w=1200" },
    { id: 350, name: "Cosmic Odyssey Planetarium Premiere", sub: "Planetarium", bg: "#030712", accent: "#a855f7", text: "#ffffff", title: "COSMIC HORIZONS\nODYSSEY 2026", desc: "8K 360-Degree Dome Journey Through Interstellar Dust Clouds and Supermassive Black Holes.", photo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" }
  ];

  for (const cfg of configs) {
    const isDark = cfg.bg.startsWith("#0") || cfg.bg.startsWith("#1") || cfg.bg.startsWith("#4");
    const elements = [
      el(`pos-${cfg.id}-bg`, "rect", 0, 0, 1080, 1528, { fill: cfg.bg, locked: true }),
      el(`pos-${cfg.id}-tag`, "text", 70, 70, 940, 24, { text: `${cfg.sub.toUpperCase()} // OFFICIAL EXHIBITION 2026`, fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "700", fill: cfg.accent, letterSpacing: 4 }),
      el(`pos-${cfg.id}-title`, "text", 70, 110, 940, 240, { text: cfg.title, fontSize: 88, fontFamily: "Space Grotesk", fontWeight: "900", fill: cfg.text, lineHeight: 0.9, letterSpacing: -2 }),
      el(`pos-${cfg.id}-sub`, "text", 70, 360, 940, 40, { text: cfg.desc, fontSize: 16, fontFamily: "Inter", fontWeight: "600", fill: isDark ? "#a1a1aa" : "#4b5563", letterSpacing: 1 }),
      el(`pos-${cfg.id}-img`, "image", 70, 420, 940, 680, { src: cfg.photo, borderRadius: 8 }),
      
      // Bottom Information Grid (3 columns)
      el(`pos-${cfg.id}-c1-h`, "text", 70, 1140, 290, 24, { text: "CURATORIAL", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "800", fill: cfg.accent, letterSpacing: 2 }),
      el(`pos-${cfg.id}-c1-p`, "text", 70, 1175, 290, 160, { text: "Curated by master practitioners examining the intersection of form, culture, and material craft.", fontSize: 13, fontFamily: "Inter", fill: isDark ? "#d4d4d8" : "#374151", lineHeight: 1.6 }),
      el(`pos-${cfg.id}-c2-h`, "text", 395, 1140, 290, 24, { text: "LOCATION", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "800", fill: cfg.accent, letterSpacing: 2 }),
      el(`pos-${cfg.id}-c2-p`, "text", 395, 1175, 290, 160, { text: "Center for Contemporary Arts\nMain Exhibition Hall\nOpen Daily 10:00 — 20:00", fontSize: 13, fontFamily: "Inter", fill: isDark ? "#d4d4d8" : "#374151", lineHeight: 1.6 }),
      el(`pos-${cfg.id}-c3-h`, "text", 720, 1140, 290, 24, { text: "ADMISSION", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "800", fill: cfg.accent, letterSpacing: 2 }),
      el(`pos-${cfg.id}-c3-p`, "text", 720, 1175, 290, 160, { text: "General Admission: $25\nStudents & Members Free\nCatalog included with ticket.", fontSize: 13, fontFamily: "Inter", fill: isDark ? "#d4d4d8" : "#374151", lineHeight: 1.6 }),
      el(`pos-${cfg.id}-foot`, "text", 70, 1440, 940, 24, { text: "ORD STUDIO CONTEMPORARY POSTER ARCHIVE NO. 2026", fontSize: 11, fontFamily: "Space Grotesk", fill: isDark ? "#71717a" : "#9ca3af", letterSpacing: 3 })
    ];

    posters.push({
      id: cfg.id,
      name: cfg.name,
      title: cfg.name.toUpperCase(),
      description: `Bespoke Canva-grade high-impact poster for ${cfg.name}.`,
      category: "Posters",
      subcategory: cfg.sub,
      size: "1080×1528",
      canvasWidth: 1080,
      canvasHeight: 1528,
      orientation: "portrait",
      tags: ["Poster", "Art", "Typography", cfg.sub, "Modern"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 4300 + (cfg.id * 8),
      views: 35000 + (cfg.id * 70),
      gradient: `linear-gradient(180deg, ${cfg.bg} 0%, ${cfg.bg} 100%)`,
      fonts: ["Space Grotesk", "Inter"],
      colors: [cfg.bg, cfg.accent, cfg.text, isDark ? "#a1a1aa" : "#4b5563"],
      elements
    });
  }

  return posters;
}
