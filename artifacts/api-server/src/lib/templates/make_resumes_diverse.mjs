// Resumes (40 Bespoke Templates: IDs 201–240)
// True Design Diversity: 40 distinct layout structures & geometries
import { getPhoto } from "./uniquePhotoRegistry.mjs";

export function generateResumes40() {
  const resumes = [];
  const fonts = ["Inter", "Plus Jakarta Sans", "Outfit", "Space Grotesk", "Playfair Display", "Cinzel", "Syne", "Cabinet Grotesk"];
  
  const resumeRoles = [
    { title: "ALEXANDER VANCE", role: "CHIEF TECHNOLOGY OFFICER", font: "Inter", bg: "#ffffff", accent: "#2563eb", dark: false },
    { title: "SOPHIA CHEN", role: "SENIOR PRODUCT DESIGNER", font: "Outfit", bg: "#09090b", accent: "#f43f5e", dark: true },
    { title: "MARCUS STERLING", role: "INVESTMENT BANKING VP", font: "Playfair Display", bg: "#fafaf9", accent: "#0f172a", dark: false },
    { title: "ELENA ROSTOVA", role: "MACHINE LEARNING RESEARCHER", font: "Space Grotesk", bg: "#020617", accent: "#06b6d4", dark: true },
    { title: "LIAM KAUFMAN", role: "CREATIVE DIRECTOR & BRAND STRATEGIST", font: "Cabinet Grotesk", bg: "#ffffff", accent: "#ea580c", dark: false },
    { title: "ISABELLA DU PONT", role: "GENERAL COUNSEL & LEGAL ADVISOR", font: "Cinzel", bg: "#fdf4ff", accent: "#86198f", dark: false },
    { title: "NOAH ZIMMERMAN", role: "FULL STACK CLOUD ARCHITECT", font: "Space Grotesk", bg: "#030712", accent: "#22c55e", dark: true },
    { title: "CAMILA TORRES", role: "VP OF GLOBAL MARKETING", font: "Plus Jakarta Sans", bg: "#f8fafc", accent: "#6366f1", dark: false },
    { title: "JULIAN HAWTHORNE", role: "PRINCIPAL ARCHITECT (AIA)", font: "Inter", bg: "#f1f5f9", accent: "#334155", dark: false },
    { title: "VALERIE BLAKE", role: "CLINICAL RESEARCH SCIENTIST", font: "Plus Jakarta Sans", bg: "#f0fdf4", accent: "#15803d", dark: false },
    { title: "DARIUS THORNE", role: "FINANCIAL CONTROLLER (CPA)", font: "Playfair Display", bg: "#ffffff", accent: "#1e3a8a", dark: false },
    { title: "AMARA OKEKE", role: "SUSTAINABILITY & ESG DIRECTOR", font: "Outfit", bg: "#ecfeff", accent: "#0891b2", dark: false },
    { title: "VIKTOR KASPROV", role: "CYBERSECURITY INCIDENT LEAD", font: "Space Grotesk", bg: "#000000", accent: "#e11d48", dark: true },
    { title: "NATALIE WARD", role: "SENIOR UX RESEARCHER", font: "Inter", bg: "#faf5ff", accent: "#9333ea", dark: false },
    { title: "ETHAN ST. CLAIR", role: "STRATEGY MANAGEMENT CONSULTANT", font: "Playfair Display", bg: "#f8fafc", accent: "#b45309", dark: false },
    { title: "CHLOE ADDISON", role: "ECOMMERCE GROWTH SPECIALIST", font: "Outfit", bg: "#fff7ed", accent: "#d97706", dark: false },
    { title: "JASPER LINDQVIST", role: "INDUSTRIAL PRODUCT DESIGNER", font: "Plus Jakarta Sans", bg: "#ffffff", accent: "#475569", dark: false },
    { title: "MAYA LIN", role: "DATA SCIENCE & QUANT ANALYST", font: "Space Grotesk", bg: "#09090b", accent: "#10b981", dark: true },
    { title: "GABRIEL MONET", role: "FINE ART CURATOR & HISTORIAN", font: "Cinzel", bg: "#fdfbf7", accent: "#78350f", dark: false },
    { title: "TAYLOR BROOKS", role: "VP OF PEOPLE & TALENT ACQUISITION", font: "Inter", bg: "#f0fdfa", accent: "#0d9488", dark: false },
    { title: "LUCAS SILVA", role: "DEVSECOPS PLATFORM ENGINEER", font: "Space Grotesk", bg: "#030712", accent: "#38bdf8", dark: true },
    { title: "SERENA VANDENBERG", role: "HAUTE COUTURE APPAREL DESIGNER", font: "Playfair Display", bg: "#fafaf9", accent: "#1c1917", dark: false },
    { title: "DOMINIC CROSS", role: "AEROSPACE SYSTEMS ENGINEER", font: "Cabinet Grotesk", bg: "#0f172a", accent: "#38bdf8", dark: true },
    { title: "BEATRICE HOLLOWAY", role: "CHIEF OPERATING OFFICER", font: "Cinzel", bg: "#ffffff", accent: "#0f172a", dark: false },
    { title: "KAI TAKAHASHI", role: "INTERACTION & MOTION DESIGNER", font: "Syne", bg: "#09090b", accent: "#ec4899", dark: true },
    { title: "ZACHARY COLE", role: "COMMERCIAL REAL ESTATE BROKER", font: "Plus Jakarta Sans", bg: "#f8fafc", accent: "#0369a1", dark: false },
    { title: "HELENA MARROQUIN", role: "BIOCHEMICAL GENETICS LAB HEAD", font: "Outfit", bg: "#f0fdf4", accent: "#16a34a", dark: false },
    { title: "FELIX BAUMANN", role: "SUPPLY CHAIN & LOGISTICS VP", font: "Inter", bg: "#ffffff", accent: "#c2410c", dark: false },
    { title: "AALIYAH MANSOUR", role: "INTERNATIONAL RELATIONS ADVISOR", font: "Playfair Display", bg: "#fefce8", accent: "#a16207", dark: false },
    { title: "ROWAN KENNEDY", role: "GAME DESIGNER & 3D ARTIST", font: "Syne", bg: "#18022e", accent: "#d946ef", dark: true },
    { title: "CHRISTOPHER REID", role: "PUBLIC HEALTHCARE ADMINISTRATOR", font: "Plus Jakarta Sans", bg: "#f0fdf4", accent: "#047857", dark: false },
    { title: "GISELLE FONTAINE", role: "LUXURY BRAND COMMUNICATIONS DIR", font: "Cinzel", bg: "#fff1f2", accent: "#be123c", dark: false },
    { title: "ADRIAN NOVAK", role: "HARDWARE & ROBOTICS ENGINEER", font: "Space Grotesk", bg: "#0a0a0a", accent: "#f59e0b", dark: true },
    { title: "TARA BRENNAN", role: "ENTERPRISE SALES EXECUTIVE", font: "Inter", bg: "#ffffff", accent: "#1d4ed8", dark: false },
    { title: "MAXIMILIAN GRAF", role: "RENEWABLE ENERGY POLICY EXPERT", font: "Outfit", bg: "#f1f5f9", accent: "#0f766e", dark: false },
    { title: "YASMINE AL-SAYED", role: "FINTECH PRODUCT MANAGER", font: "Plus Jakarta Sans", bg: "#ffffff", accent: "#7c3aed", dark: false },
    { title: "SEBASTIAN CORTEZ", role: "AUDIO ENGINEER & SOUND DESIGNER", font: "Syne", bg: "#050505", accent: "#06b6d4", dark: true },
    { title: "EVELYN SINCLAIR", role: "MUSEUM EXHIBIT ARCHIVIST", font: "Playfair Display", bg: "#fafaf9", accent: "#57534e", dark: false },
    { title: "BENJAMIN HAYES", role: "CHIEF RISK OFFICER (CRO)", font: "Inter", bg: "#ffffff", accent: "#334155", dark: false },
    { title: "KATHERINE LI", role: "NEURAL NETWORK AI RESEARCHER", font: "Space Grotesk", bg: "#020617", accent: "#a855f7", dark: true }
  ];

  function el(id, type, x, y, width, height, extra = {}) {
    return { id, type, x, y, width, height, ...extra };
  }

  for (let i = 0; i < 40; i++) {
    const id = 201 + i;
    const r = resumeRoles[i];
    const bg = r.bg;
    const accent = r.accent;
    const font = r.font;
    const isDark = r.dark;
    const photo = getPhoto(id);

    const elements = [];
    // Canvas background
    elements.push(el(`res-${id}-bg`, "rect", 0, 0, 1200, 1697, { fill: bg, locked: true }));

    // 40 Handcrafted Blueprints with distinct bounding box geometries
    switch (i) {
      case 0: // Left Rail 30% Sidebar (Navy/Slate) with Right 70% Content Stream
        elements.push(
          el(`res-${id}-rail`, "rect", 0, 0, 360, 1697, { fill: accent }),
          el(`res-${id}-im`, "image", 70, 70, 220, 220, { src: photo, borderRadius: 110 }),
          el(`res-${id}-sidebar-txt`, "rect", 40, 340, 280, 1280, { fill: "rgba(255,255,255,0.08)", borderRadius: 12 }),
          el(`res-${id}-t0`, "text", 420, 80, 720, 140, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: "#0f172a" }),
          el(`res-${id}-role`, "text", 420, 200, 720, 50, { text: r.role, fontSize: 20, fontFamily: font, fontWeight: "700", fill: accent }),
          el(`res-${id}-exp1`, "rect", 420, 300, 720, 380, { fill: "#f8fafc", borderRadius: 12 }),
          el(`res-${id}-exp2`, "rect", 420, 720, 720, 420, { fill: "#f8fafc", borderRadius: 12 }),
          el(`res-${id}-exp3`, "rect", 420, 1180, 720, 440, { fill: "#f8fafc", borderRadius: 12 })
        );
        break;

      case 1: // Right Rail 32% Sidebar with Dark Left Hero Card Matrix
        elements.push(
          el(`res-${id}-rail`, "rect", 820, 0, 380, 1697, { fill: isDark ? "#18181b" : "#f1f5f9" }),
          el(`res-${id}-im`, "image", 890, 80, 240, 240, { src: photo, borderRadius: 12 }),
          el(`res-${id}-r-card`, "rect", 860, 360, 300, 1250, { fill: accent, borderRadius: 16 }),
          el(`res-${id}-t0`, "text", 80, 80, 700, 140, { text: r.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`res-${id}-role`, "text", 80, 210, 700, 50, { text: r.role, fontSize: 20, fontFamily: font, fontWeight: "700", fill: accent }),
          el(`res-${id}-c1`, "rect", 80, 320, 700, 400, { fill: isDark ? "#111827" : "#ffffff", stroke: "#27272a", strokeWidth: 1, borderRadius: 16 }),
          el(`res-${id}-c2`, "rect", 80, 760, 700, 400, { fill: isDark ? "#111827" : "#ffffff", stroke: "#27272a", strokeWidth: 1, borderRadius: 16 }),
          el(`res-${id}-c3`, "rect", 80, 1200, 700, 420, { fill: isDark ? "#111827" : "#ffffff", stroke: "#27272a", strokeWidth: 1, borderRadius: 16 })
        );
        break;

      case 2: // Executive 3-Column Financial Ledger Grid
        elements.push(
          el(`res-${id}-top-bar`, "rect", 80, 80, 1040, 160, { fill: accent, borderRadius: 12 }),
          el(`res-${id}-t0`, "text", 120, 110, 700, 100, { text: r.title, fontSize: 40, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`res-${id}-im`, "image", 960, 95, 130, 130, { src: photo, borderRadius: 65 }),
          el(`res-${id}-col1`, "rect", 80, 280, 320, 1340, { fill: isDark ? "#111827" : "#fdfbf7", borderRadius: 12 }),
          el(`res-${id}-col2`, "rect", 440, 280, 320, 1340, { fill: isDark ? "#111827" : "#fdfbf7", borderRadius: 12 }),
          el(`res-${id}-col3`, "rect", 800, 280, 320, 1340, { fill: isDark ? "#111827" : "#fdfbf7", borderRadius: 12 })
        );
        break;

      case 3: // Minimal Academic Monograph (Single column centered, no sidebar)
        elements.push(
          el(`res-${id}-t0`, "text", 100, 100, 1000, 140, { text: r.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`res-${id}-line1`, "rect", 100, 240, 1000, 3, { fill: accent }),
          el(`res-${id}-sec1`, "rect", 100, 280, 1000, 300, { fill: isDark ? "#09090b" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 8 }),
          el(`res-${id}-sec2`, "rect", 100, 620, 1000, 480, { fill: isDark ? "#09090b" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 8 }),
          el(`res-${id}-sec3`, "rect", 100, 1140, 1000, 480, { fill: isDark ? "#09090b" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 8 })
        );
        break;

      case 4: // Asymmetric Split: 50% Left Dark Showcase with 50% Right Timeline
        elements.push(
          el(`res-${id}-left-pane`, "rect", 0, 0, 580, 1697, { fill: accent }),
          el(`res-${id}-im`, "image", 80, 100, 420, 420, { src: photo, borderRadius: 24 }),
          el(`res-${id}-t0`, "text", 80, 560, 420, 200, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`res-${id}-bio`, "rect", 80, 780, 420, 840, { fill: "rgba(0,0,0,0.2)", borderRadius: 16 }),
          el(`res-${id}-r1`, "rect", 640, 100, 480, 450, { fill: isDark ? "#18181b" : "#f1f5f9", borderRadius: 16 }),
          el(`res-${id}-r2`, "rect", 640, 590, 480, 480, { fill: isDark ? "#18181b" : "#f1f5f9", borderRadius: 16 }),
          el(`res-${id}-r3`, "rect", 640, 1110, 480, 510, { fill: isDark ? "#18181b" : "#f1f5f9", borderRadius: 16 })
        );
        break;

      case 5: // Terminal / Code Monospace Developer Matrix
        elements.push(
          el(`res-${id}-header`, "rect", 60, 60, 1080, 140, { fill: "#1e1e1e", stroke: accent, strokeWidth: 2, borderRadius: 8 }),
          el(`res-${id}-t0`, "text", 100, 90, 800, 80, { text: `> ${r.title} --role="${r.role}"`, fontSize: 32, fontFamily: font, fontWeight: "700", fill: accent }),
          el(`res-${id}-im`, "image", 980, 80, 100, 100, { src: photo, borderRadius: 6 }),
          el(`res-${id}-grid1`, "rect", 60, 240, 520, 680, { fill: "#111827", stroke: "#374151", strokeWidth: 1, borderRadius: 8 }),
          el(`res-${id}-grid2`, "rect", 620, 240, 520, 680, { fill: "#111827", stroke: "#374151", strokeWidth: 1, borderRadius: 8 }),
          el(`res-${id}-bot-con`, "rect", 60, 960, 1080, 660, { fill: "#111827", stroke: "#374151", strokeWidth: 1, borderRadius: 8 })
        );
        break;

      case 6: // Circular Avatar Header with 4-Grid Modular Capability Cards
        elements.push(
          el(`res-${id}-im`, "image", 80, 80, 200, 200, { src: photo, borderRadius: 100 }),
          el(`res-${id}-t0`, "text", 320, 100, 800, 100, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`res-${id}-role`, "text", 320, 190, 800, 50, { text: r.role, fontSize: 20, fontFamily: font, fontWeight: "700", fill: accent }),
          el(`res-${id}-g1`, "rect", 80, 320, 500, 620, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`res-${id}-g2`, "rect", 620, 320, 500, 620, { fill: accent, borderRadius: 16 }),
          el(`res-${id}-g3`, "rect", 80, 980, 500, 640, { fill: accent, borderRadius: 16 }),
          el(`res-${id}-g4`, "rect", 620, 980, 500, 640, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 7: // Modern Executive 2/3 and 1/3 Split with Tinted Skill Chips
        elements.push(
          el(`res-${id}-t0`, "text", 80, 80, 1040, 120, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`res-${id}-main`, "rect", 80, 240, 680, 1380, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 16 }),
          el(`res-${id}-side`, "rect", 800, 240, 320, 1380, { fill: accent, borderRadius: 16 })
        );
        break;

      case 8: // Infographic Visual Metrics with Top KPI Header
        elements.push(
          el(`res-${id}-header`, "rect", 60, 60, 1080, 240, { fill: accent, borderRadius: 16 }),
          el(`res-${id}-t0`, "text", 100, 100, 750, 100, { text: r.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`res-${id}-im`, "image", 900, 90, 180, 180, { src: photo, borderRadius: 90 }),
          el(`res-${id}-kpi1`, "rect", 60, 340, 330, 200, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 12 }),
          el(`res-${id}-kpi2`, "rect", 435, 340, 330, 200, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 12 }),
          el(`res-${id}-kpi3`, "rect", 810, 340, 330, 200, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 12 }),
          el(`res-${id}-body`, "rect", 60, 580, 1080, 1040, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 16 })
        );
        break;

      case 9: // Swiss Brutalist Boxed Resume with Stark Outlines
        elements.push(
          el(`res-${id}-box-t`, "rect", 60, 60, 1080, 180, { fill: accent, stroke: "#000000", strokeWidth: 3 }),
          el(`res-${id}-t0`, "text", 100, 90, 1000, 120, { text: r.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`res-${id}-b-left`, "rect", 60, 280, 440, 1340, { fill: isDark ? "#111827" : "#ffffff", stroke: "#000000", strokeWidth: 3 }),
          el(`res-${id}-b-right`, "rect", 540, 280, 600, 1340, { fill: isDark ? "#111827" : "#ffffff", stroke: "#000000", strokeWidth: 3 })
        );
        break;

      case 10: // Dual-Tone Horizontal Band Resume
        elements.push(
          el(`res-${id}-band1`, "rect", 0, 0, 1200, 400, { fill: accent }),
          el(`res-${id}-t0`, "text", 80, 100, 750, 140, { text: r.title, fontSize: 48, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`res-${id}-im`, "image", 880, 100, 240, 240, { src: photo, borderRadius: 120 }),
          el(`res-${id}-c1`, "rect", 80, 460, 500, 1160, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`res-${id}-c2`, "rect", 620, 460, 500, 1160, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 11: // Editorial Serif CV with Center Profile Pill
        elements.push(
          el(`res-${id}-im`, "image", 480, 60, 240, 240, { src: photo, borderRadius: 120 }),
          el(`res-${id}-t0`, "text", 80, 320, 1040, 120, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`res-${id}-c1`, "rect", 80, 470, 1040, 520, { fill: isDark ? "#111827" : "#fdfbf7", borderRadius: 12 }),
          el(`res-${id}-c2`, "rect", 80, 1030, 1040, 590, { fill: isDark ? "#111827" : "#fdfbf7", borderRadius: 12 })
        );
        break;

      case 12: // Asymmetric Top Left Photo with Floating Hero Stat Badge
        elements.push(
          el(`res-${id}-im`, "image", 80, 80, 300, 380, { src: photo, borderRadius: 16 }),
          el(`res-${id}-t0`, "text", 420, 80, 700, 140, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`res-${id}-hero-badge`, "rect", 420, 240, 700, 220, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 12 }),
          el(`res-${id}-exp`, "rect", 80, 500, 1040, 1120, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 16 })
        );
        break;

      case 13: // Compact 3-Tier Multi-Level Resume
        elements.push(
          el(`res-${id}-t0`, "text", 80, 80, 1040, 120, { text: r.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`res-${id}-tier1`, "rect", 80, 220, 1040, 420, { fill: accent, borderRadius: 16 }),
          el(`res-${id}-tier2`, "rect", 80, 680, 1040, 440, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`res-${id}-tier3`, "rect", 80, 1160, 1040, 460, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;

      case 14: // Left 25% Narrow Accent Bar with Center 50% Experience & Right 25% Skills
        elements.push(
          el(`res-${id}-bar`, "rect", 60, 60, 240, 1577, { fill: accent, borderRadius: 16 }),
          el(`res-${id}-t0`, "text", 340, 80, 520, 140, { text: r.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`res-${id}-mid`, "rect", 340, 240, 520, 1397, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`res-${id}-right`, "rect", 890, 60, 250, 1577, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 16 })
        );
        break;

      case 15: // Floating Frosted Glass Card Resume
        elements.push(
          el(`res-${id}-card1`, "rect", 80, 80, 1040, 300, { fill: accent, borderRadius: 20 }),
          el(`res-${id}-t0`, "text", 120, 120, 700, 120, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`res-${id}-im`, "image", 880, 110, 200, 200, { src: photo, borderRadius: 100 }),
          el(`res-${id}-card2`, "rect", 80, 420, 1040, 1200, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 20 })
        );
        break;

      // Cases 16–39: Bespoke layouts
      case 16: // Staggered Diagonal Grid Resume
        elements.push(
          el(`res-${id}-t0`, "text", 80, 80, 1040, 120, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`res-${id}-c1`, "rect", 80, 220, 500, 680, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`res-${id}-im`, "image", 620, 220, 500, 320, { src: photo, borderRadius: 16 }),
          el(`res-${id}-c2`, "rect", 620, 580, 500, 1040, { fill: accent, borderRadius: 16 }),
          el(`res-${id}-c3`, "rect", 80, 940, 500, 680, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 16 })
        );
        break;

      case 17: // Monoline Boxed Minimal CV with Top Right Photo Badge
        elements.push(
          el(`res-${id}-frame`, "rect", 60, 60, 1080, 1577, { stroke: accent, strokeWidth: 2, fill: "transparent" }),
          el(`res-${id}-t0`, "text", 100, 100, 720, 140, { text: r.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`res-${id}-im`, "image", 880, 90, 220, 220, { src: photo, borderRadius: 8 }),
          el(`res-${id}-grid-a`, "rect", 100, 360, 480, 1220, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 8 }),
          el(`res-${id}-grid-b`, "rect", 620, 360, 480, 1220, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 8 })
        );
        break;

      case 18: // Horizontal Timeline Flow Resume
        elements.push(
          el(`res-${id}-top-pane`, "rect", 60, 60, 1080, 260, { fill: accent, borderRadius: 16 }),
          el(`res-${id}-t0`, "text", 100, 100, 960, 120, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`res-${id}-pipe1`, "rect", 60, 360, 1080, 380, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`res-${id}-pipe2`, "rect", 60, 780, 1080, 380, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`res-${id}-pipe3`, "rect", 60, 1200, 1080, 420, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;

      case 19: // Circular Center Badge Resume with 2-Column Split Below
        elements.push(
          el(`res-${id}-badge`, "circle", 480, 60, 240, 240, { fill: accent }),
          el(`res-${id}-im`, "image", 500, 80, 200, 200, { src: photo, borderRadius: 100 }),
          el(`res-${id}-t0`, "text", 80, 320, 1040, 100, { text: r.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`res-${id}-col-l`, "rect", 80, 450, 500, 1170, { fill: isDark ? "#111827" : "#fdfbf7", borderRadius: 16 }),
          el(`res-${id}-col-r`, "rect", 620, 450, 500, 1170, { fill: isDark ? "#111827" : "#fdfbf7", borderRadius: 16 })
        );
        break;

      case 20: // Upper Right Header Block with Massive Left Timeline
        elements.push(
          el(`res-${id}-tl`, "rect", 80, 80, 620, 1537, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 16 }),
          el(`res-${id}-tr-card`, "rect", 740, 80, 380, 480, { fill: accent, borderRadius: 16 }),
          el(`res-${id}-t0`, "text", 770, 120, 320, 160, { text: r.title, fontSize: 36, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`res-${id}-br-card`, "rect", 740, 600, 380, 1017, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 16 })
        );
        break;

      case 21: // 2-Column Balanced Executive CV with Gold Accent Line
        elements.push(
          el(`res-${id}-t0`, "text", 80, 80, 1040, 140, { text: r.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`res-${id}-line`, "rect", 80, 230, 1040, 4, { fill: accent }),
          el(`res-${id}-p1`, "rect", 80, 270, 500, 1350, { fill: isDark ? "#111827" : "#fdfbf7", borderRadius: 12 }),
          el(`res-${id}-p2`, "rect", 620, 270, 500, 1350, { fill: isDark ? "#111827" : "#fdfbf7", borderRadius: 12 })
        );
        break;

      case 22: // Dark Cyber Matrix Monospace Resume
        elements.push(
          el(`res-${id}-banner`, "rect", 0, 0, 1200, 240, { fill: "#030712" }),
          el(`res-${id}-t0`, "text", 80, 80, 800, 120, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`res-${id}-im`, "image", 940, 50, 160, 160, { src: photo, borderRadius: 80 }),
          el(`res-${id}-grid`, "rect", 80, 300, 1040, 1320, { fill: "#09090b", stroke: accent, strokeWidth: 1, borderRadius: 12 })
        );
        break;

      case 23: // Floating Asymmetric Cards with Left Avatar Spine
        elements.push(
          el(`res-${id}-im`, "image", 80, 80, 260, 260, { src: photo, borderRadius: 130 }),
          el(`res-${id}-spine`, "rect", 80, 380, 260, 1240, { fill: accent, borderRadius: 16 }),
          el(`res-${id}-t0`, "text", 380, 80, 740, 120, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`res-${id}-box1`, "rect", 380, 240, 740, 680, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`res-${id}-box2`, "rect", 380, 960, 740, 660, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 24: // 3-Tier Multi-Colored Horizon Resume
        elements.push(
          el(`res-${id}-top`, "rect", 80, 80, 1040, 340, { fill: accent, borderRadius: 20 }),
          el(`res-${id}-t0`, "text", 120, 120, 960, 120, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`res-${id}-mid`, "rect", 80, 460, 1040, 560, { fill: isDark ? "#111827" : "#ffffff", stroke: "#cbd5e1", strokeWidth: 1, borderRadius: 20 }),
          el(`res-${id}-bot`, "rect", 80, 1060, 1040, 560, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 20 })
        );
        break;

      case 25: // Left 40% Profile Photo Pane with Right 60% Multi-Section
        elements.push(
          el(`res-${id}-im`, "image", 0, 0, 480, 800, { src: photo }),
          el(`res-${id}-l-bot`, "rect", 0, 800, 480, 897, { fill: accent }),
          el(`res-${id}-t0`, "text", 540, 80, 580, 160, { text: r.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`res-${id}-r-card`, "rect", 540, 280, 580, 1340, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 26: // Minimalist 4-Row Capability Matrix Resume
        elements.push(
          el(`res-${id}-t0`, "text", 80, 80, 1040, 120, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`res-${id}-r1`, "rect", 80, 220, 1040, 320, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 12 }),
          el(`res-${id}-r2`, "rect", 80, 580, 1040, 320, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 12 }),
          el(`res-${id}-r3`, "rect", 80, 940, 1040, 320, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 12 }),
          el(`res-${id}-r4`, "rect", 80, 1300, 1040, 320, { fill: accent, borderRadius: 12 })
        );
        break;

      case 27: // Header Ribbon with Centered 2-Column Experience
        elements.push(
          el(`res-${id}-ribbon`, "rect", 0, 0, 1200, 180, { fill: accent }),
          el(`res-${id}-t0`, "text", 80, 50, 1040, 100, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" }),
          el(`res-${id}-col1`, "rect", 80, 240, 500, 1380, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 16 }),
          el(`res-${id}-col2`, "rect", 620, 240, 500, 1380, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 16 })
        );
        break;

      case 28: // Diagonal Accent Banner Resume
        elements.push(
          el(`res-${id}-banner`, "rect", 0, 0, 1200, 320, { fill: accent }),
          el(`res-${id}-t0`, "text", 80, 80, 800, 140, { text: r.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`res-${id}-im`, "image", 900, 80, 220, 220, { src: photo, borderRadius: 16 }),
          el(`res-${id}-body`, "rect", 80, 380, 1040, 1240, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 20 })
        );
        break;

      case 29: // High-Density Single-Page Corporate Index
        elements.push(
          el(`res-${id}-t0`, "text", 60, 60, 1080, 100, { text: r.title, fontSize: 40, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`res-${id}-line`, "rect", 60, 170, 1080, 2, { fill: accent }),
          el(`res-${id}-g1`, "rect", 60, 200, 340, 1420, { fill: isDark ? "#111827" : "#f1f5f9", borderRadius: 8 }),
          el(`res-${id}-g2`, "rect", 430, 200, 710, 1420, { fill: isDark ? "#111827" : "#ffffff", stroke: "#cbd5e1", strokeWidth: 1, borderRadius: 8 })
        );
        break;

      case 30: // 3-Column Asymmetric: Left Profile Rail + Center Experience + Right Skill Column
        elements.push(
          el(`res-${id}-rail`, "rect", 60, 60, 300, 1577, { fill: accent, borderRadius: 16 }),
          el(`res-${id}-im`, "image", 100, 100, 220, 220, { src: photo, borderRadius: 110 }),
          el(`res-${id}-t0`, "text", 390, 80, 750, 120, { text: r.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`res-${id}-center`, "rect", 390, 220, 480, 1417, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`res-${id}-right`, "rect", 900, 220, 240, 1417, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 16 })
        );
        break;

      case 31: // Dark Minimalist Terminal CV
        elements.push(
          el(`res-${id}-t0`, "text", 80, 80, 1040, 120, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`res-${id}-card`, "rect", 80, 220, 1040, 1400, { fill: "#09090b", stroke: "#27272a", strokeWidth: 1, borderRadius: 16 })
        );
        break;

      case 32: // Left Vertical Strip with Staggered 3-Box Right Matrix
        elements.push(
          el(`res-${id}-strip`, "rect", 0, 0, 200, 1697, { fill: accent }),
          el(`res-${id}-t0`, "text", 260, 80, 860, 140, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`res-${id}-b1`, "rect", 260, 240, 860, 420, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`res-${id}-b2`, "rect", 260, 700, 860, 420, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`res-${id}-b3`, "rect", 260, 1160, 860, 460, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;

      case 33: // Centered Editorial Monograph with Double Border
        elements.push(
          el(`res-${id}-frame`, "rect", 60, 60, 1080, 1577, { stroke: accent, strokeWidth: 3, fill: "transparent" }),
          el(`res-${id}-t0`, "text", 100, 120, 1000, 140, { text: r.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`res-${id}-c1`, "rect", 100, 300, 1000, 600, { fill: isDark ? "#111827" : "#fafaf9", borderRadius: 8 }),
          el(`res-${id}-c2`, "rect", 100, 940, 1000, 640, { fill: isDark ? "#111827" : "#fafaf9", borderRadius: 8 })
        );
        break;

      case 34: // Horizontal Pill Header with 3 Column Split
        elements.push(
          el(`res-${id}-pill`, "rect", 80, 80, 1040, 180, { fill: accent, borderRadius: 90 }),
          el(`res-${id}-t0`, "text", 140, 120, 920, 100, { text: r.title, fontSize: 40, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" }),
          el(`res-${id}-c1`, "rect", 80, 300, 320, 1320, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`res-${id}-c2`, "rect", 440, 300, 320, 1320, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`res-${id}-c3`, "rect", 800, 300, 320, 1320, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 35: // Staggered Horizontal Chevron CV with Top & Bottom Bands
        elements.push(
          el(`res-${id}-top-b`, "rect", 80, 80, 1040, 220, { fill: accent, borderRadius: 16 }),
          el(`res-${id}-t0`, "text", 120, 120, 960, 140, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`res-${id}-left-c`, "rect", 80, 340, 500, 950, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`res-${id}-right-c`, "rect", 620, 340, 500, 950, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`res-${id}-bot-b`, "rect", 80, 1330, 1040, 290, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;

      case 36: // Right 40% Dark Sidebar with Left 60% Portfolio
        elements.push(
          el(`res-${id}-side`, "rect", 720, 0, 480, 1697, { fill: accent }),
          el(`res-${id}-t0`, "text", 80, 80, 600, 140, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`res-${id}-main`, "rect", 80, 240, 600, 1380, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 37: // 4-Quadrant Balanced Matrix Resume
        elements.push(
          el(`res-${id}-t0`, "text", 80, 80, 1040, 100, { text: r.title, fontSize: 40, fontFamily: font, fontWeight: "900", fill: accent, textAlign: "center" }),
          el(`res-${id}-q1`, "rect", 80, 220, 500, 680, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`res-${id}-q2`, "rect", 620, 220, 500, 680, { fill: accent, borderRadius: 16 }),
          el(`res-${id}-q3`, "rect", 80, 940, 500, 680, { fill: accent, borderRadius: 16 }),
          el(`res-${id}-q4`, "rect", 620, 940, 500, 680, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 38: // Executive Horizon Bar Resume with Offset Card
        elements.push(
          el(`res-${id}-bar`, "rect", 0, 80, 1200, 220, { fill: accent }),
          el(`res-${id}-t0`, "text", 80, 120, 1040, 120, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`res-${id}-card`, "rect", 80, 360, 1040, 1260, { fill: isDark ? "#111827" : "#ffffff", stroke: "#cbd5e1", strokeWidth: 1, borderRadius: 20 })
        );
        break;

      case 39: // Centered Monolithic Monograph CV
        elements.push(
          el(`res-${id}-t0`, "text", 100, 100, 1000, 160, { text: r.title, fontSize: 48, fontFamily: font, fontWeight: "900", fill: accent, textAlign: "center" }),
          el(`res-${id}-card1`, "rect", 100, 300, 1000, 620, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`res-${id}-card2`, "rect", 100, 960, 1000, 660, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;
    }

    resumes.push({
      id,
      name: `Bespoke Resume ${id}`,
      title: `${r.title} — ${r.role}`,
      category: "Resume",
      canvasWidth: 1200,
      canvasHeight: 1697,
      elements,
      tags: ["resume", "cv", font.toLowerCase(), isDark ? "dark" : "light"]
    });
  }

  return resumes;
}
