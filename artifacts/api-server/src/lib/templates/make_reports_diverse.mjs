// Reports (45 Bespoke Templates: IDs 701–745)
// True Design Diversity: 45 distinct layout structures & geometries
import { getPhoto } from "./uniquePhotoRegistry.mjs";

export function generateReports45() {
  const reports = [];
  const fonts = ["Inter", "Plus Jakarta Sans", "Outfit", "Space Grotesk", "Playfair Display", "Cinzel", "Syne", "Cabinet Grotesk"];
  
  const reportTitles = [
    { title: "ANNUAL FINANCIAL AUDIT 2026", font: "Inter", bg: "#ffffff", accent: "#2563eb", dark: false },
    { title: "GLOBAL ESG SUSTAINABILITY INDEX", font: "Outfit", bg: "#f0fdf4", accent: "#16a34a", dark: false },
    { title: "AI INFRASTRUCTURE BENCHMARK", font: "Space Grotesk", bg: "#020617", accent: "#06b6d4", dark: true },
    { title: "CYBER THREAT INTELLIGENCE REPORT", font: "Space Grotesk", bg: "#000000", accent: "#ef4444", dark: true },
    { title: "BIOTECH CLINICAL TRIAL OUTCOMES", font: "Plus Jakarta Sans", bg: "#f0fdfa", accent: "#0d9488", dark: false },
    { title: "MACROECONOMIC INFLATION OUTLOOK", font: "Playfair Display", bg: "#ffffff", accent: "#1e3a8a", dark: false },
    { title: "SUPPLY CHAIN DISRUPTION INDEX", font: "Cabinet Grotesk", bg: "#f8fafc", accent: "#ea580c", dark: false },
    { title: "COMMERCIAL REAL ESTATE VALUATION", font: "Playfair Display", bg: "#fafaf9", accent: "#0f172a", dark: false },
    { title: "VENTURE CAPITAL RETURNS AUDIT", font: "Inter", bg: "#ffffff", accent: "#4f46e5", dark: false },
    { title: "DEEP SPACE TELECOM EXPEDITION", font: "Space Grotesk", bg: "#030712", accent: "#818cf8", dark: true },
    { title: "RENEWABLE ENERGY GRID CAPACITY", font: "Outfit", bg: "#f8fafc", accent: "#65a30d", dark: false },
    { title: "FINTECH CONSUMER ADOPTION INDEX", font: "Plus Jakarta Sans", bg: "#ffffff", accent: "#7c3aed", dark: false },
    { title: "AEROSPACE DEFENSE COMPLIANCE", font: "Cabinet Grotesk", bg: "#0f172a", accent: "#38bdf8", dark: true },
    { title: "BOARD GOVERNANCE & RISK OVERSIGHT", font: "Cinzel", bg: "#ffffff", accent: "#1e3a8a", dark: false },
    { title: "SAAS PRODUCT ENGAGEMENT INDEX", font: "Inter", bg: "#ffffff", accent: "#f43f5e", dark: false },
    { title: "HEALTHCARE CLINICAL METRICS 2026", font: "Plus Jakarta Sans", bg: "#f0fdf4", accent: "#047857", dark: false },
    { title: "AEROSPACE FLIGHT SAFETY AUDIT", font: "Space Grotesk", bg: "#030712", accent: "#38bdf8", dark: true },
    { title: "SUSTAINABLE ARCHITECTURE SURVEY", font: "Inter", bg: "#ffffff", accent: "#334155", dark: false },
    { title: "URBAN HOUSING AFFORDABILITY STUDY", font: "Playfair Display", bg: "#fafaf9", accent: "#b45309", dark: false },
    { title: "GLOBAL ART MARKET AUCTION TRENDS", font: "Cinzel", bg: "#fdf4ff", accent: "#86198f", dark: false },
    { title: "DIGITAL PUBLISHING TYPOGRAPHY REPORT", font: "Inter", bg: "#ffffff", accent: "#0f172a", dark: false },
    { title: "DEVELOPER TOOLING PRODUCTIVITY", font: "Space Grotesk", bg: "#0a0a0a", accent: "#22c55e", dark: true },
    { title: "EXECUTIVE LEADERSHIP DIVERSITY", font: "Playfair Display", bg: "#f8fafc", accent: "#c2410c", dark: false },
    { title: "FLEXIBLE HYBRID OFFICE UTILIZATION", font: "Plus Jakarta Sans", bg: "#ffffff", accent: "#0284c7", dark: false },
    { title: "DATA PRIVACY COMPLIANCE AUDIT", font: "Inter", bg: "#ffffff", accent: "#1d4ed8", dark: false },
    { title: "INTERNATIONAL TRADE TARIFF IMPACT", font: "Cinzel", bg: "#09090b", accent: "#eab308", dark: true },
    { title: "DESIGN SYSTEM MATURITY INDEX", font: "Syne", bg: "#ffffff", accent: "#ec4899", dark: false },
    { title: "CIVIL INFRASTRUCTURE RESILIENCE", font: "Cabinet Grotesk", bg: "#f1f5f9", accent: "#475569", dark: false },
    { title: "LIVE ENTERTAINMENT ECONOMY 2026", font: "Syne", bg: "#18022e", accent: "#d946ef", dark: true },
    { title: "GLOBAL LUXURY GOODS FORECAST", font: "Playfair Display", bg: "#fff1f2", accent: "#be123c", dark: false },
    { title: "CORPORATE WELLNESS & MENTAL HEALTH", font: "Outfit", bg: "#f0fdf4", accent: "#15803d", dark: false },
    { title: "OPEN SOURCE SECURITY HEALTH", font: "Space Grotesk", bg: "#000000", accent: "#10b981", dark: true },
    { title: "ELECTRIC VEHICLE TRANSITION MAP", font: "Inter", bg: "#ffffff", accent: "#0ea5e9", dark: false },
    { title: "TELEMEDICINE PATIENT OUTCOMES", font: "Plus Jakarta Sans", bg: "#f0fdfa", accent: "#0d9488", dark: false },
    { title: "VETERINARY MEDICINE SPEND SURVEY", font: "Outfit", bg: "#fefce8", accent: "#ca8a04", dark: false },
    { title: "RESTAURANT SUPPLY INFLATION", font: "Cabinet Grotesk", bg: "#ffffff", accent: "#ea580c", dark: false },
    { title: "PREVENTATIVE LONGEVITY STUDY", font: "Plus Jakarta Sans", bg: "#f8fafc", accent: "#059669", dark: false },
    { title: "REGENERATIVE AGRICULTURE REPORT", font: "Playfair Display", bg: "#f0fdf4", accent: "#166534", dark: false },
    { title: "MOBILE APP MONETIZATION INDEX", font: "Inter", bg: "#ffffff", accent: "#6366f1", dark: false },
    { title: "CIRCULAR ECONOMY RETAIL AUDIT", font: "Outfit", bg: "#f8fafc", accent: "#d97706", dark: false },
    { title: "GRID BATTERY STORAGE INDEX", font: "Space Grotesk", bg: "#030712", accent: "#06b6d4", dark: true },
    { title: "SUSTAINABLE SEAFOOD SUPPLY", font: "Outfit", bg: "#ecfeff", accent: "#0891b2", dark: false },
    { title: "ARTS FUNDING & PHILANTHROPY", font: "Cinzel", bg: "#ffffff", accent: "#78350f", dark: false },
    { title: "COMMERCIAL FLORICULTURE EXPORT", font: "Playfair Display", bg: "#fff7ed", accent: "#c2410c", dark: false },
    { title: "GLOBAL CORPORATE TAXATION BENCHMARK", font: "Inter", bg: "#ffffff", accent: "#1e3a8a", dark: false }
  ];

  function el(id, type, x, y, width, height, extra = {}) {
    return { id, type, x, y, width, height, ...extra };
  }

  for (let i = 0; i < 45; i++) {
    const id = 701 + i;
    const r = reportTitles[i];
    const bg = r.bg;
    const accent = r.accent;
    const font = r.font;
    const isDark = r.dark;
    const photo = getPhoto(id);

    const elements = [];
    elements.push(el(`rep-${id}-bg`, "rect", 0, 0, 1200, 1697, { fill: bg, locked: true }));

    switch (i) {
      case 0: // Corporate Top Header Bar with 3-Column Data Tile Flow
        elements.push(
          el(`rep-${id}-bar`, "rect", 0, 0, 1200, 240, { fill: accent }),
          el(`rep-${id}-t0`, "text", 80, 80, 1040, 120, { text: r.title, fontSize: 48, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`rep-${id}-im`, "image", 80, 300, 1040, 520, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-c1`, "rect", 80, 860, 320, 360, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 12 }),
          el(`rep-${id}-c2`, "rect", 440, 860, 320, 360, { fill: accent, borderRadius: 12 }),
          el(`rep-${id}-c3`, "rect", 800, 860, 320, 360, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 12 }),
          el(`rep-${id}-bot`, "rect", 80, 1260, 1040, 360, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 16 })
        );
        break;

      case 1: // Eco Green 4-Quadrant ESG Grid
        elements.push(
          el(`rep-${id}-t0`, "text", 80, 80, 1040, 120, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`rep-${id}-im`, "image", 80, 220, 500, 680, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-q1`, "rect", 620, 220, 500, 680, { fill: isDark ? "#022c22" : "#f0fdf4", borderRadius: 16 }),
          el(`rep-${id}-q2`, "rect", 80, 940, 500, 680, { fill: accent, borderRadius: 16 }),
          el(`rep-${id}-q3`, "rect", 620, 940, 500, 680, { fill: isDark ? "#022c22" : "#f0fdf4", borderRadius: 16 })
        );
        break;

      case 2: // Dark Cyber HUD Risk Matrix
        elements.push(
          el(`rep-${id}-hud`, "rect", 80, 80, 1040, 220, { fill: "#030712", stroke: accent, strokeWidth: 2, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 120, 120, 960, 140, { text: r.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`rep-${id}-im`, "image", 80, 340, 1040, 600, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-table`, "rect", 80, 980, 1040, 640, { fill: "#09090b", stroke: "#1e293b", strokeWidth: 1, borderRadius: 16 })
        );
        break;

      case 3: // Brutalist Warning Threat Report with Heavy Outlines
        elements.push(
          el(`rep-${id}-strip`, "rect", 0, 0, 1200, 140, { fill: accent }),
          el(`rep-${id}-t0`, "text", 80, 40, 1040, 90, { text: r.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`rep-${id}-im`, "image", 60, 180, 1080, 650, { src: photo }),
          el(`rep-${id}-box1`, "rect", 60, 870, 520, 750, { fill: isDark ? "#111827" : "#ffffff", stroke: "#000000", strokeWidth: 3 }),
          el(`rep-${id}-box2`, "rect", 620, 870, 520, 750, { fill: accent, stroke: "#000000", strokeWidth: 3 })
        );
        break;

      case 4: // Clinical Research Report with Left 40% Sidebar
        elements.push(
          el(`rep-${id}-rail`, "rect", 0, 0, 440, 1697, { fill: accent }),
          el(`rep-${id}-im`, "image", 60, 80, 320, 440, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 500, 80, 640, 180, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`rep-${id}-main`, "rect", 500, 280, 640, 1340, { fill: isDark ? "#111827" : "#f0fdfa", borderRadius: 16 })
        );
        break;

      case 5: // Macroeconomic Financial White Paper with Centered Oval Image
        elements.push(
          el(`rep-${id}-t0`, "text", 80, 80, 1040, 160, { text: r.title, fontSize: 48, fontFamily: font, fontWeight: "900", fill: accent, textAlign: "center" }),
          el(`rep-${id}-im`, "image", 250, 270, 700, 700, { src: photo, borderRadius: 350 }),
          el(`rep-${id}-c1`, "rect", 80, 1020, 500, 600, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`rep-${id}-c2`, "rect", 620, 1020, 500, 600, { fill: accent, borderRadius: 16 })
        );
        break;

      case 6: // Left vertical 40% photo + right stacked 4 KPI blocks
        elements.push(
          el(`rep-${id}-im`, "image", 80, 80, 480, 1450, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 600, 80, 520, 180, { text: r.title, fontSize: 40, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`rep-${id}-k1`, "rect", 600, 280, 520, 280, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`rep-${id}-k2`, "rect", 600, 580, 520, 280, { fill: accent, borderRadius: 16 }),
          el(`rep-${id}-k3`, "rect", 600, 880, 520, 280, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`rep-${id}-k4`, "rect", 600, 1180, 520, 350, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;

      case 7: // Luxury Real Estate Valuation with Left Vertical Photo
        elements.push(
          el(`rep-${id}-im`, "image", 80, 80, 500, 1400, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 620, 80, 500, 220, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`rep-${id}-r-body`, "rect", 620, 340, 500, 1140, { fill: accent, borderRadius: 16 })
        );
        break;

      case 8: // Venture Capital Audit with 4 Pillar Blocks
        elements.push(
          el(`rep-${id}-t0`, "text", 80, 80, 1040, 120, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`rep-${id}-p1`, "rect", 80, 220, 240, 1400, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 12 }),
          el(`rep-${id}-p2`, "rect", 345, 220, 240, 1400, { fill: accent, borderRadius: 12 }),
          el(`rep-${id}-im`, "image", 610, 220, 240, 1400, { src: photo, borderRadius: 12 }),
          el(`rep-${id}-p4`, "rect", 875, 220, 240, 1400, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 12 })
        );
        break;

      case 9: // Deep Space Telecom with Full-Bleed Dark Hero Glass Card
        elements.push(
          el(`rep-${id}-im`, "image", 0, 0, 1200, 1697, { src: photo }),
          el(`rep-${id}-scrim`, "rect", 0, 0, 1200, 1697, { fill: "rgba(0,0,0,0.65)", locked: true }),
          el(`rep-${id}-glass`, "rect", 80, 120, 1040, 1457, { fill: "rgba(255,255,255,0.06)", stroke: accent, strokeWidth: 1.5, borderRadius: 24 }),
          el(`rep-${id}-t0`, "text", 140, 200, 920, 200, { text: r.title, fontSize: 52, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" })
        );
        break;

      case 10: // Renewable Energy with Top-Left Stamp Photo
        elements.push(
          el(`rep-${id}-im`, "image", 80, 80, 420, 360, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 540, 80, 580, 240, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`rep-${id}-body`, "rect", 80, 480, 1040, 1140, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 20 })
        );
        break;

      case 11: // FinTech Consumer Adoption with 2-Column Split
        elements.push(
          el(`rep-${id}-t0`, "text", 80, 80, 1040, 120, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`rep-${id}-col1`, "rect", 80, 220, 500, 1400, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 16 }),
          el(`rep-${id}-im`, "image", 620, 220, 500, 680, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-col2`, "rect", 620, 940, 500, 680, { fill: accent, borderRadius: 16 })
        );
        break;

      case 12: // Aerospace Defense with 3-Column Ledger
        elements.push(
          el(`rep-${id}-t0`, "text", 80, 80, 1040, 120, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`rep-${id}-c1`, "rect", 80, 220, 320, 1400, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 12 }),
          el(`rep-${id}-c2`, "rect", 440, 220, 320, 1400, { fill: accent, borderRadius: 12 }),
          el(`rep-${id}-im`, "image", 800, 220, 320, 1400, { src: photo, borderRadius: 12 })
        );
        break;

      case 13: // Board Governance Charter with Double Border
        elements.push(
          el(`rep-${id}-frame`, "rect", 60, 60, 1080, 1577, { stroke: accent, strokeWidth: 3, fill: "transparent" }),
          el(`rep-${id}-t0`, "text", 100, 120, 1000, 160, { text: r.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`rep-${id}-im`, "image", 100, 320, 1000, 550, { src: photo, borderRadius: 8 }),
          el(`rep-${id}-card`, "rect", 100, 920, 1000, 680, { fill: isDark ? "#111827" : "#fafaf9", borderRadius: 8 })
        );
        break;

      case 14: // 2-Column Alternating Matrix (Photo top-left & bot-right)
        elements.push(
          el(`rep-${id}-im1`, "image", 80, 80, 500, 450, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-c1`, "rect", 620, 80, 500, 750, { fill: accent, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 660, 120, 420, 200, { text: r.title, fontSize: 38, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`rep-${id}-c2`, "rect", 80, 570, 500, 1050, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`rep-${id}-c3`, "rect", 620, 870, 500, 750, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;

      case 15: // Bottom Panoramic Photo Drawer
        elements.push(
          el(`rep-${id}-im`, "image", 0, 0, 1200, 850, { src: photo }),
          el(`rep-${id}-drawer`, "rect", 0, 750, 1200, 947, { fill: bg, borderRadius: 32 }),
          el(`rep-${id}-t0`, "text", 80, 840, 1040, 180, { text: r.title, fontSize: 50, fontFamily: font, fontWeight: "900", fill: accent })
        );
        break;

      case 16: // Center Portrait Arch
        elements.push(
          el(`rep-${id}-im`, "image", 200, 80, 800, 850, { src: photo, borderRadius: 400 }),
          el(`rep-${id}-t0`, "text", 80, 980, 1040, 180, { text: r.title, fontSize: 52, fontFamily: font, fontWeight: "900", fill: accent, textAlign: "center" }),
          el(`rep-${id}-card`, "rect", 80, 1200, 1040, 420, { fill: isDark ? "#111827" : "#fdf4ff", borderRadius: 16 })
        );
        break;

      case 17: // Stark Minimal Typography Monument
        elements.push(
          el(`rep-${id}-t0`, "text", 80, 100, 1040, 360, { text: r.title, fontSize: 64, fontFamily: font, fontWeight: "900", fill: accent, lineHeight: 0.95 }),
          el(`rep-${id}-im`, "image", 80, 500, 1040, 550, { src: photo, borderRadius: 8 }),
          el(`rep-${id}-foot`, "rect", 80, 1100, 1040, 500, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 8 })
        );
        break;

      case 18: // Developer Terminal
        elements.push(
          el(`rep-${id}-header`, "rect", 60, 60, 1080, 160, { fill: "#0a0a0a", stroke: accent, strokeWidth: 2, borderRadius: 8 }),
          el(`rep-${id}-t0`, "text", 100, 90, 1000, 100, { text: `> ${r.title}`, fontSize: 36, fontFamily: font, fontWeight: "700", fill: accent }),
          el(`rep-${id}-im`, "image", 60, 260, 1080, 600, { src: photo, borderRadius: 8 }),
          el(`rep-${id}-grid`, "rect", 60, 900, 1080, 720, { fill: "#0a0a0a", stroke: "#27272a", strokeWidth: 1, borderRadius: 8 })
        );
        break;

      case 19: // Right 35% Rail
        elements.push(
          el(`rep-${id}-t0`, "text", 80, 80, 640, 160, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`rep-${id}-main`, "rect", 80, 280, 640, 1340, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`rep-${id}-im`, "image", 760, 80, 360, 480, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-rail`, "rect", 760, 600, 360, 1020, { fill: accent, borderRadius: 16 })
        );
        break;

      case 20: // Left 20% Narrow Ribbon
        elements.push(
          el(`rep-${id}-strip`, "rect", 0, 0, 240, 1697, { fill: accent }),
          el(`rep-${id}-t0`, "text", 300, 80, 820, 140, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`rep-${id}-im`, "image", 300, 240, 820, 550, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-body`, "rect", 300, 830, 820, 790, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 21: // Top Horizontal Badge
        elements.push(
          el(`rep-${id}-badge`, "rect", 80, 80, 1040, 240, { fill: accent, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 120, 130, 960, 120, { text: r.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`rep-${id}-im`, "image", 80, 360, 500, 1260, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-right`, "rect", 620, 360, 500, 1260, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 22: // Big Typographic Header + Bottom 3 Vertical Pillar Cards
        elements.push(
          el(`rep-${id}-t0`, "text", 80, 80, 1040, 240, { text: r.title, fontSize: 52, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`rep-${id}-c1`, "rect", 80, 360, 320, 1260, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`rep-${id}-im`, "image", 440, 360, 320, 1260, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-c3`, "rect", 800, 360, 320, 1260, { fill: accent, borderRadius: 16 })
        );
        break;

      case 23: // 3-Column Staggered Pricing / Spec Cards
        elements.push(
          el(`rep-${id}-t0`, "text", 80, 80, 1040, 120, { text: r.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`rep-${id}-im`, "image", 80, 220, 1040, 300, { src: photo, borderRadius: 12 }),
          el(`rep-${id}-c1`, "rect", 80, 560, 320, 1050, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`rep-${id}-c2`, "rect", 440, 560, 320, 1050, { fill: accent, borderRadius: 16 }),
          el(`rep-${id}-c3`, "rect", 800, 560, 320, 1050, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 24: // Bottom Panoramic with Top Dark Bar
        elements.push(
          el(`rep-${id}-top-b`, "rect", 80, 80, 1040, 360, { fill: accent, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 120, 130, 960, 180, { text: r.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`rep-${id}-mid`, "rect", 80, 480, 1040, 450, { fill: isDark ? "#111827" : "#18022e", borderRadius: 16 }),
          el(`rep-${id}-im`, "image", 80, 960, 1040, 660, { src: photo, borderRadius: 16 })
        );
        break;

      case 25: // Left Pill Photo
        elements.push(
          el(`rep-${id}-im`, "image", 80, 80, 420, 1450, { src: photo, borderRadius: 210 }),
          el(`rep-${id}-t0`, "text", 540, 80, 580, 200, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`rep-${id}-card1`, "rect", 540, 320, 580, 600, { fill: accent, borderRadius: 16 }),
          el(`rep-${id}-card2`, "rect", 540, 960, 580, 570, { fill: isDark ? "#111827" : "#f0fdfa", borderRadius: 16 })
        );
        break;

      case 26: // Diagonal Wedge Header
        elements.push(
          el(`rep-${id}-top-w`, "rect", 0, 0, 1200, 500, { fill: accent }),
          el(`rep-${id}-t0`, "text", 80, 100, 1040, 200, { text: r.title, fontSize: 48, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`rep-${id}-im`, "image", 80, 540, 1040, 600, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-bot-w`, "rect", 80, 1180, 1040, 440, { fill: isDark ? "#111827" : "#ecfeff", borderRadius: 16 })
        );
        break;

      case 27: // Double Archway
        elements.push(
          el(`rep-${id}-im`, "image", 80, 80, 500, 950, { src: photo, borderRadius: 250 }),
          el(`rep-${id}-arch2`, "rect", 620, 80, 500, 950, { fill: accent, borderRadius: 250 }),
          el(`rep-${id}-t0`, "text", 80, 1100, 1040, 240, { text: r.title, fontSize: 58, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`rep-${id}-bot`, "rect", 80, 1400, 1040, 220, { fill: isDark ? "#111827" : "#fff7ed", borderRadius: 12 })
        );
        break;

      case 28: // 2-Tier Stack: Top photo with 2 bot cards
        elements.push(
          el(`rep-${id}-im`, "image", 80, 80, 1040, 750, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 80, 870, 1040, 140, { text: r.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`rep-${id}-c1`, "rect", 80, 1040, 500, 580, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`rep-${id}-c2`, "rect", 620, 1040, 500, 580, { fill: accent, borderRadius: 16 })
        );
        break;

      case 29: // 3 Horizontal Stream Bands
        elements.push(
          el(`rep-${id}-t0`, "text", 80, 80, 1040, 120, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`rep-${id}-b1`, "rect", 80, 220, 1040, 380, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`rep-${id}-im`, "image", 80, 640, 1040, 500, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-b2`, "rect", 80, 1180, 1040, 440, { fill: accent, borderRadius: 16 })
        );
        break;

      case 30: // Right 45% Photo Banner
        elements.push(
          el(`rep-${id}-t0`, "text", 60, 80, 500, 200, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`rep-${id}-box1`, "rect", 60, 320, 500, 600, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`rep-${id}-box2`, "rect", 60, 950, 500, 687, { fill: accent, borderRadius: 16 }),
          el(`rep-${id}-im`, "image", 600, 60, 540, 1577, { src: photo, borderRadius: 16 })
        );
        break;

      case 31: // Cyber Matrix 3-Box
        elements.push(
          el(`rep-${id}-hud`, "rect", 80, 80, 1040, 200, { fill: "#030712", stroke: accent, strokeWidth: 2, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 120, 110, 960, 120, { text: r.title, fontSize: 40, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`rep-${id}-im`, "image", 80, 320, 480, 750, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-right-c`, "rect", 600, 320, 520, 750, { fill: "#09090b", stroke: "#27272a", strokeWidth: 1, borderRadius: 16 }),
          el(`rep-${id}-bot-c`, "rect", 80, 1110, 1040, 510, { fill: accent, borderRadius: 16 })
        );
        break;

      case 32: // Top dark hero with 3-tier horizontal cards
        elements.push(
          el(`rep-${id}-im`, "image", 80, 80, 1040, 400, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 80, 500, 1040, 100, { text: r.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`rep-${id}-t1`, "rect", 80, 620, 1040, 320, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 12 }),
          el(`rep-${id}-t2`, "rect", 80, 960, 1040, 320, { fill: accent, borderRadius: 12 }),
          el(`rep-${id}-t3`, "rect", 80, 1300, 1040, 320, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 12 })
        );
        break;

      case 33: // Left 50% Asymmetric Card Stack
        elements.push(
          el(`rep-${id}-im`, "image", 80, 80, 500, 800, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 620, 80, 500, 200, { text: r.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`rep-${id}-card-r`, "rect", 620, 320, 500, 1300, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`rep-${id}-card-l`, "rect", 80, 920, 500, 700, { fill: accent, borderRadius: 16 })
        );
        break;

      case 34: // Circular Porthole with 4 Corner Tiles
        elements.push(
          el(`rep-${id}-t0`, "text", 80, 80, 1040, 120, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`rep-${id}-q1`, "rect", 80, 240, 480, 640, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`rep-${id}-q2`, "rect", 640, 240, 480, 640, { fill: accent, borderRadius: 16 }),
          el(`rep-${id}-im`, "image", 400, 650, 400, 400, { src: photo, borderRadius: 200 }),
          el(`rep-${id}-q3`, "rect", 80, 920, 480, 700, { fill: accent, borderRadius: 16 }),
          el(`rep-${id}-q4`, "rect", 640, 920, 480, 700, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 35: // Top-Right Diagonal Photo Placement
        elements.push(
          el(`rep-${id}-left-pane`, "rect", 80, 80, 400, 1540, { fill: accent, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 120, 120, 320, 300, { text: r.title, fontSize: 38, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`rep-${id}-im`, "image", 520, 80, 600, 750, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-bot-r`, "rect", 520, 870, 600, 750, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 36: // Right 40% vertical photo pillar + left 60% 3-tier card stack
        elements.push(
          el(`rep-${id}-im`, "image", 700, 80, 420, 1540, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 80, 80, 580, 180, { text: r.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`rep-${id}-c1`, "rect", 80, 280, 580, 420, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`rep-${id}-c2`, "rect", 80, 730, 580, 420, { fill: accent, borderRadius: 16 }),
          el(`rep-${id}-c3`, "rect", 80, 1180, 580, 440, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;

      case 37: // Asymmetric Horizontal Wave
        elements.push(
          el(`rep-${id}-im`, "image", 80, 80, 1040, 480, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 80, 600, 680, 200, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`rep-${id}-card-rt`, "rect", 800, 600, 320, 500, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`rep-${id}-card-bt`, "rect", 80, 1140, 1040, 480, { fill: accent, borderRadius: 16 })
        );
        break;

      case 38: // 3-Box Alternating Checkerboard
        elements.push(
          el(`rep-${id}-im`, "image", 80, 80, 500, 600, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 620, 80, 500, 220, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`rep-${id}-c1`, "rect", 620, 340, 500, 340, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`rep-${id}-c2`, "rect", 80, 720, 500, 900, { fill: accent, borderRadius: 16 }),
          el(`rep-${id}-c3`, "rect", 620, 720, 500, 900, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 39: // Top Letterbox with Triple Footer Pill
        elements.push(
          el(`rep-${id}-im`, "image", 80, 80, 1040, 500, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 80, 620, 1040, 160, { text: r.title, fontSize: 48, fontFamily: font, fontWeight: "900", fill: accent, textAlign: "center" }),
          el(`rep-${id}-f1`, "rect", 80, 820, 1040, 240, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`rep-${id}-f2`, "rect", 80, 1100, 500, 520, { fill: accent, borderRadius: 16 }),
          el(`rep-${id}-f3`, "rect", 620, 1100, 500, 520, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 40: // Offset Floating Glass Slate
        elements.push(
          el(`rep-${id}-dark-pane`, "rect", 0, 0, 600, 1697, { fill: isDark ? "#030712" : "#0f172a" }),
          el(`rep-${id}-card`, "rect", 200, 200, 800, 1300, { fill: accent, borderRadius: 24 }),
          el(`rep-${id}-im`, "image", 250, 250, 700, 500, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 250, 800, 700, 200, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" })
        );
        break;

      case 41: // Narrow Center Column
        elements.push(
          el(`rep-${id}-rail-l`, "rect", 80, 80, 240, 1540, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`rep-${id}-im`, "image", 360, 80, 480, 1540, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 880, 80, 240, 300, { text: r.title, fontSize: 32, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`rep-${id}-rail-r`, "rect", 880, 420, 240, 1200, { fill: accent, borderRadius: 16 })
        );
        break;

      case 42: // Dual Concentric Card Deck
        elements.push(
          el(`rep-${id}-card-out`, "rect", 80, 80, 1040, 1540, { fill: isDark ? "#111827" : "#ffffff", stroke: accent, strokeWidth: 2, borderRadius: 24 }),
          el(`rep-${id}-im`, "image", 160, 160, 880, 600, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 160, 800, 880, 180, { text: r.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: accent, textAlign: "center" }),
          el(`rep-${id}-card-in`, "rect", 160, 1020, 880, 520, { fill: accent, borderRadius: 16 })
        );
        break;

      case 43: // Asymmetric Triad
        elements.push(
          el(`rep-${id}-im`, "image", 80, 80, 680, 600, { src: photo, borderRadius: 16 }),
          el(`rep-${id}-t0`, "text", 800, 80, 320, 240, { text: r.title, fontSize: 36, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`rep-${id}-c1`, "rect", 800, 360, 320, 320, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`rep-${id}-c2`, "rect", 80, 720, 320, 900, { fill: accent, borderRadius: 16 }),
          el(`rep-${id}-c3`, "rect", 440, 720, 680, 900, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 44: // Full-bleed background with 4 staggered frosted glass cards
        elements.push(
          el(`rep-${id}-im`, "image", 0, 0, 1200, 1697, { src: photo }),
          el(`rep-${id}-scrim`, "rect", 0, 0, 1200, 1697, { fill: "rgba(0,0,0,0.6)", locked: true }),
          el(`rep-${id}-t0`, "text", 80, 80, 1040, 120, { text: r.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" }),
          el(`rep-${id}-g1`, "rect", 80, 240, 500, 650, { fill: "rgba(255,255,255,0.08)", stroke: accent, strokeWidth: 1, borderRadius: 16 }),
          el(`rep-${id}-g2`, "rect", 620, 240, 500, 650, { fill: "rgba(255,255,255,0.08)", stroke: accent, strokeWidth: 1, borderRadius: 16 }),
          el(`rep-${id}-g3`, "rect", 80, 930, 500, 680, { fill: "rgba(255,255,255,0.08)", stroke: accent, strokeWidth: 1, borderRadius: 16 }),
          el(`rep-${id}-g4`, "rect", 620, 930, 500, 680, { fill: "rgba(255,255,255,0.08)", stroke: accent, strokeWidth: 1, borderRadius: 16 })
        );
        break;
    }

    reports.push({
      id,
      name: `Bespoke Report ${id}`,
      title: r.title,
      category: "Reports",
      canvasWidth: 1200,
      canvasHeight: 1697,
      elements,
      tags: ["report", "whitepaper", font.toLowerCase(), isDark ? "dark" : "light"]
    });
  }

  return reports;
}
