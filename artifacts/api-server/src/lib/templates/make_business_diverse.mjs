// Business (40 Bespoke Templates: IDs 601–640)
// True Design Diversity: 40 distinct layout structures & geometries
import { getPhoto } from "./uniquePhotoRegistry.mjs";

export function generateBusiness40() {
  const business = [];
  const fonts = ["Inter", "Plus Jakarta Sans", "Outfit", "Space Grotesk", "Playfair Display", "Cinzel", "Syne", "Cabinet Grotesk"];
  
  const businessThemes = [
    { title: "ENTERPRISE SAAS PROPOSAL", font: "Inter", bg: "#ffffff", accent: "#2563eb", dark: false },
    { title: "VENTURE CAPITAL INVESTMENT MEMO", font: "Playfair Display", bg: "#09090b", accent: "#10b981", dark: true },
    { title: "GLOBAL LOGISTICS STRATEGY BRIEF", font: "Space Grotesk", bg: "#f8fafc", accent: "#ea580c", dark: false },
    { title: "MERGERS & ACQUISITIONS OVERVIEW", font: "Cinzel", bg: "#020617", accent: "#f59e0b", dark: true },
    { title: "CREATIVE AGENCY CAPABILITY DECK", font: "Syne", bg: "#ffffff", accent: "#ec4899", dark: false },
    { title: "SUSTAINABILITY AUDIT & ESG REPORT", font: "Outfit", bg: "#f0fdf4", accent: "#16a34a", dark: false },
    { title: "CYBER DEFENSE SLA AGREEMENT", font: "Space Grotesk", bg: "#000000", accent: "#06b6d4", dark: true },
    { title: "COMMERCIAL REAL ESTATE BROCHURE", font: "Playfair Display", bg: "#fafaf9", accent: "#1e3a8a", dark: false },
    { title: "FINANCIAL ADVISORY QUARTERLY", font: "Plus Jakarta Sans", bg: "#ffffff", accent: "#334155", dark: false },
    { title: "EXECUTIVE BOARD RESOLUTION", font: "Cinzel", bg: "#fdf4ff", accent: "#86198f", dark: false },
    { title: "STRATEGY CONSULTING ONE-PAGER", font: "Cabinet Grotesk", bg: "#ffffff", accent: "#4f46e5", dark: false },
    { title: "HEALTHCARE CLINICAL SCOPE OF WORK", font: "Plus Jakarta Sans", bg: "#f0fdfa", accent: "#0d9488", dark: false },
    { title: "RENEWABLE ENERGY TENDER BID", font: "Outfit", bg: "#f8fafc", accent: "#65a30d", dark: false },
    { title: "AI INFRASTRUCTURE SERVICE CONTRACT", font: "Space Grotesk", bg: "#0a0a0a", accent: "#8b5cf6", dark: true },
    { title: "LUXURY HOSPITALITY ASSET DECK", font: "Playfair Display", bg: "#fffbeb", accent: "#78350f", dark: false },
    { title: "BIOTECH VENTURE PITCH BRIEF", font: "Inter", bg: "#ffffff", accent: "#0284c7", dark: false },
    { title: "MEDIA ENTERTAINMENT RATE CARD", font: "Syne", bg: "#18022e", accent: "#d946ef", dark: true },
    { title: "SUPPLY CHAIN INTEGRATION PROPOSAL", font: "Cabinet Grotesk", bg: "#f1f5f9", accent: "#c2410c", dark: false },
    { title: "LEGAL COUNSEL ENGAGEMENT LETTER", font: "Cinzel", bg: "#ffffff", accent: "#0f172a", dark: false },
    { title: "DIGITAL MARKETING SOW & KPI SHEET", font: "Plus Jakarta Sans", bg: "#fff7ed", accent: "#d97706", dark: false },
    { title: "AEROSPACE DEFENSE TECHNICAL BRIEF", font: "Space Grotesk", bg: "#030712", accent: "#38bdf8", dark: true },
    { title: "FINTECH PRODUCT SPECIFICATION", font: "Inter", bg: "#ffffff", accent: "#6366f1", dark: false },
    { title: "BRAND IDENTITY GUIDELINES OVERVIEW", font: "Syne", bg: "#09090b", accent: "#f43f5e", dark: true },
    { title: "PRIVATE WEALTH ALLOCATION PLAN", font: "Playfair Display", bg: "#fefce8", accent: "#a16207", dark: false },
    { title: "ARCHITECTURE FIRM PROJECT DOSSIER", font: "Plus Jakarta Sans", bg: "#ffffff", accent: "#475569", dark: false },
    { title: "GLOBAL FREIGHT RATE PROPOSAL", font: "Cabinet Grotesk", bg: "#f8fafc", accent: "#dc2626", dark: false },
    { title: "AUTOMOTIVE FLEET LEASING TERMS", font: "Inter", bg: "#ffffff", accent: "#1d4ed8", dark: false },
    { title: "RETAIL EXPANSION FEASIBILITY STUDY", font: "Outfit", bg: "#f0fdf4", accent: "#047857", dark: false },
    { title: "QUANT TRADING SYSTEM WHITE PAPER", font: "Space Grotesk", bg: "#020617", accent: "#10b981", dark: true },
    { title: "HR ONBOARDING EXECUTIVE PACK", font: "Plus Jakarta Sans", bg: "#ffffff", accent: "#9333ea", dark: false },
    { title: "METALS & COMMODITIES TRADING BRIEF", font: "Cinzel", bg: "#18181b", accent: "#a1a1aa", dark: true },
    { title: "TELECOMMUNICATIONS TOWER AUDIT", font: "Inter", bg: "#f8fafc", accent: "#0369a1", dark: false },
    { title: "HOTEL RESORT ACQUISITION MEMO", font: "Playfair Display", bg: "#fafaf9", accent: "#b45309", dark: false },
    { title: "PHARMACEUTICAL CLINICAL TRIAL SOW", font: "Plus Jakarta Sans", bg: "#ffffff", accent: "#0f766e", dark: false },
    { title: "GAME STUDIO CO-DEVELOPMENT PACT", font: "Syne", bg: "#0d0d12", accent: "#a855f7", dark: true },
    { title: "E-COMMERCE FRANCHISE DISCLOSURE", font: "Cabinet Grotesk", bg: "#ffffff", accent: "#ea580c", dark: false },
    { title: "INSURANCE UNDERWRITING RISK REPORT", font: "Inter", bg: "#f1f5f9", accent: "#1e293b", dark: false },
    { title: "CIVIL INFRASTRUCTURE BID PROPOSAL", font: "Space Grotesk", bg: "#ffffff", accent: "#e11d48", dark: false },
    { title: "CORPORATE GOVERNANCE CHARTER", font: "Cinzel", bg: "#ffffff", accent: "#1e3a8a", dark: false },
    { title: "DATA PRIVACY & GDPR COMPLIANCE SOW", font: "Plus Jakarta Sans", bg: "#09090b", accent: "#3b82f6", dark: true }
  ];

  function el(id, type, x, y, width, height, extra = {}) {
    return { id, type, x, y, width, height, ...extra };
  }

  for (let i = 0; i < 40; i++) {
    const id = 601 + i;
    const b = businessThemes[i];
    const bg = b.bg;
    const accent = b.accent;
    const font = b.font;
    const isDark = b.dark;
    const photo = getPhoto(id);

    const elements = [];
    elements.push(el(`biz-${id}-bg`, "rect", 0, 0, 1200, 1697, { fill: bg, locked: true }));

    switch (i) {
      case 0: // Corporate Header Bar with 3-Box Executive KPI Summary
        elements.push(
          el(`biz-${id}-top-bar`, "rect", 0, 0, 1200, 240, { fill: accent }),
          el(`biz-${id}-t0`, "text", 80, 80, 1040, 120, { text: b.title, fontSize: 48, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`biz-${id}-im`, "image", 80, 300, 1040, 500, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-kpi1`, "rect", 80, 840, 320, 360, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 12 }),
          el(`biz-${id}-kpi2`, "rect", 440, 840, 320, 360, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 12 }),
          el(`biz-${id}-kpi3`, "rect", 800, 840, 320, 360, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 12 }),
          el(`biz-${id}-foot`, "rect", 80, 1240, 1040, 380, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 16 })
        );
        break;

      case 1: // Split 50% Left Photo Column with Right Multi-Level Contract Card
        elements.push(
          el(`biz-${id}-im`, "image", 0, 0, 550, 1697, { src: photo }),
          el(`biz-${id}-t0`, "text", 610, 80, 510, 200, { text: b.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", lineHeight: 1.0 }),
          el(`biz-${id}-card1`, "rect", 610, 320, 510, 400, { fill: accent, borderRadius: 16 }),
          el(`biz-${id}-card2`, "rect", 610, 760, 510, 420, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`biz-${id}-card3`, "rect", 610, 1220, 510, 400, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 16 })
        );
        break;

      case 2: // Minimalist 2-Column Ledger with Top Monograph
        elements.push(
          el(`biz-${id}-t0`, "text", 80, 80, 1040, 140, { text: b.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`biz-${id}-line`, "rect", 80, 230, 1040, 3, { fill: accent }),
          el(`biz-${id}-col1`, "rect", 80, 260, 500, 1360, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 12 }),
          el(`biz-${id}-col2`, "rect", 620, 260, 500, 1360, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 12 })
        );
        break;

      case 3: // Dark Executive Terminal with 4 Floating Capability Tiles
        elements.push(
          el(`biz-${id}-header`, "rect", 80, 80, 1040, 220, { fill: "#09090b", stroke: accent, strokeWidth: 2, borderRadius: 16 }),
          el(`biz-${id}-t0`, "text", 120, 130, 960, 120, { text: b.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`biz-${id}-im`, "image", 80, 340, 1040, 480, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-t1`, "rect", 80, 860, 500, 360, { fill: "#09090b", borderRadius: 12 }),
          el(`biz-${id}-t2`, "rect", 620, 860, 500, 360, { fill: accent, borderRadius: 12 }),
          el(`biz-${id}-t3`, "rect", 80, 1260, 500, 360, { fill: accent, borderRadius: 12 }),
          el(`biz-${id}-t4`, "rect", 620, 1260, 500, 360, { fill: "#09090b", borderRadius: 12 })
        );
        break;

      case 4: // Asymmetric Diagonal Wedge with Center Circular Image
        elements.push(
          el(`biz-${id}-wedge`, "rect", 0, 0, 1200, 600, { fill: accent }),
          el(`biz-${id}-t0`, "text", 80, 120, 1040, 220, { text: b.title, fontSize: 52, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" }),
          el(`biz-${id}-im`, "image", 400, 420, 400, 400, { src: photo, borderRadius: 200 }),
          el(`biz-${id}-body`, "rect", 80, 880, 1040, 740, { fill: isDark ? "#111827" : "#ffffff", stroke: "#cbd5e1", strokeWidth: 1, borderRadius: 20 })
        );
        break;

      case 5: // Eco Green 3-Tier ESG Compliance Matrix
        elements.push(
          el(`biz-${id}-t0`, "text", 80, 80, 1040, 120, { text: b.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`biz-${id}-im`, "image", 80, 220, 1040, 500, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-r1`, "rect", 80, 760, 1040, 260, { fill: isDark ? "#022c22" : "#f0fdf4", borderRadius: 12 }),
          el(`biz-${id}-r2`, "rect", 80, 1060, 1040, 260, { fill: isDark ? "#022c22" : "#f0fdf4", borderRadius: 12 }),
          el(`biz-${id}-r3`, "rect", 80, 1360, 1040, 260, { fill: accent, borderRadius: 12 })
        );
        break;

      case 6: // High-Tech Cyber Security SLA Sheet
        elements.push(
          el(`biz-${id}-hud`, "rect", 60, 60, 1080, 300, { fill: "#030712", stroke: accent, strokeWidth: 2, borderRadius: 12 }),
          el(`biz-${id}-t0`, "text", 100, 120, 1000, 180, { text: b.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`biz-${id}-grid1`, "rect", 60, 400, 520, 600, { fill: "#09090b", stroke: "#1e293b", strokeWidth: 1, borderRadius: 12 }),
          el(`biz-${id}-im`, "image", 620, 400, 520, 600, { src: photo, borderRadius: 12 }),
          el(`biz-${id}-foot`, "rect", 60, 1040, 1080, 580, { fill: "#09090b", stroke: "#1e293b", strokeWidth: 1, borderRadius: 12 })
        );
        break;

      case 7: // Luxury Commercial Real Estate Investment Memo
        elements.push(
          el(`biz-${id}-im`, "image", 80, 80, 1040, 750, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-t0`, "text", 80, 870, 1040, 140, { text: b.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`biz-${id}-specs1`, "rect", 80, 1040, 500, 580, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`biz-${id}-specs2`, "rect", 620, 1040, 500, 580, { fill: accent, borderRadius: 16 })
        );
        break;

      case 8: // Financial Advisory 3-Tier Multi-Grid Dashboard
        elements.push(
          el(`biz-${id}-t0`, "text", 80, 80, 1040, 120, { text: b.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`biz-${id}-c1`, "rect", 80, 220, 320, 420, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 12 }),
          el(`biz-${id}-c2`, "rect", 440, 220, 320, 420, { fill: accent, borderRadius: 12 }),
          el(`biz-${id}-c3`, "rect", 800, 220, 320, 420, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 12 }),
          el(`biz-${id}-im`, "image", 80, 680, 1040, 500, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-bot`, "rect", 80, 1220, 1040, 400, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 16 })
        );
        break;

      case 9: // Elegant Board Resolution with Center Profile Stamp
        elements.push(
          el(`biz-${id}-frame`, "rect", 60, 60, 1080, 1577, { stroke: accent, strokeWidth: 2, fill: "transparent" }),
          el(`biz-${id}-t0`, "text", 100, 100, 1000, 160, { text: b.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`biz-${id}-im`, "image", 480, 290, 240, 240, { src: photo, borderRadius: 120 }),
          el(`biz-${id}-body1`, "rect", 100, 580, 1000, 480, { fill: isDark ? "#111827" : "#fafaf9", borderRadius: 8 }),
          el(`biz-${id}-body2`, "rect", 100, 1100, 1000, 480, { fill: isDark ? "#111827" : "#fafaf9", borderRadius: 8 })
        );
        break;

      // Cases 10–39: Bespoke layouts
      case 10: // Strategy Consulting One-Pager with Left 30% Rail
        elements.push(
          el(`biz-${id}-rail`, "rect", 0, 0, 360, 1697, { fill: accent }),
          el(`biz-${id}-t0`, "text", 420, 80, 720, 140, { text: b.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`biz-${id}-im`, "image", 420, 240, 720, 520, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-b1`, "rect", 420, 800, 720, 400, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`biz-${id}-b2`, "rect", 420, 1240, 720, 380, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 11: // Clinical SOW with Top Banner and Side-by-Side Scope Boxes
        elements.push(
          el(`biz-${id}-top-b`, "rect", 80, 80, 1040, 200, { fill: accent, borderRadius: 16 }),
          el(`biz-${id}-t0`, "text", 120, 120, 960, 120, { text: b.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`biz-${id}-im`, "image", 80, 320, 500, 800, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-scope`, "rect", 620, 320, 500, 800, { fill: isDark ? "#111827" : "#f0fdfa", borderRadius: 16 }),
          el(`biz-${id}-bot`, "rect", 80, 1160, 1040, 460, { fill: isDark ? "#1e293b" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 12: // Renewable Energy Tender Bid with 4 Pillar Blocks
        elements.push(
          el(`biz-${id}-t0`, "text", 80, 80, 1040, 120, { text: b.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`biz-${id}-p1`, "rect", 80, 220, 240, 1400, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 12 }),
          el(`biz-${id}-p2`, "rect", 345, 220, 240, 1400, { fill: accent, borderRadius: 12 }),
          el(`biz-${id}-im`, "image", 610, 220, 240, 1400, { src: photo, borderRadius: 12 }),
          el(`biz-${id}-p4`, "rect", 875, 220, 240, 1400, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 12 })
        );
        break;

      case 13: // AI Cloud Contract with Floating Glass Slate
        elements.push(
          el(`biz-${id}-im`, "image", 0, 0, 1200, 1697, { src: photo }),
          el(`biz-${id}-scrim`, "rect", 0, 0, 1200, 1697, { fill: "rgba(0,0,0,0.65)", locked: true }),
          el(`biz-${id}-glass`, "rect", 80, 120, 1040, 1457, { fill: "rgba(255,255,255,0.06)", stroke: accent, strokeWidth: 1.5, borderRadius: 24 }),
          el(`biz-${id}-t0`, "text", 140, 200, 920, 200, { text: b.title, fontSize: 52, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" })
        );
        break;

      case 14: // Luxury Hospitality Asset Deck with Centered Arch Photo
        elements.push(
          el(`biz-${id}-im`, "image", 200, 80, 800, 900, { src: photo, borderRadius: 400 }),
          el(`biz-${id}-t0`, "text", 80, 1020, 1040, 180, { text: b.title, fontSize: 50, fontFamily: font, fontWeight: "900", fill: accent, textAlign: "center" }),
          el(`biz-${id}-card`, "rect", 80, 1240, 1040, 380, { fill: isDark ? "#111827" : "#fffbeb", borderRadius: 16 })
        );
        break;

      case 15: // Biotech Venture Pitch Brief with 3 Staggered Horizontal Cards
        elements.push(
          el(`biz-${id}-t0`, "text", 80, 80, 1040, 140, { text: b.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`biz-${id}-c1`, "rect", 80, 240, 1040, 380, { fill: accent, borderRadius: 16 }),
          el(`biz-${id}-im`, "image", 80, 660, 1040, 480, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-c2`, "rect", 80, 1180, 1040, 440, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 16: // Media Entertainment Rate Card Matrix
        elements.push(
          el(`biz-${id}-header`, "rect", 0, 0, 1200, 280, { fill: accent }),
          el(`biz-${id}-t0`, "text", 80, 90, 1040, 140, { text: b.title, fontSize: 48, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`biz-${id}-im`, "image", 80, 340, 500, 650, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-rates`, "rect", 620, 340, 500, 650, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`biz-${id}-bot`, "rect", 80, 1030, 1040, 580, { fill: isDark ? "#1e293b" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 17: // Supply Chain Integration with Asymmetric 3-Box Flow
        elements.push(
          el(`biz-${id}-t0`, "text", 80, 80, 1040, 120, { text: b.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`biz-${id}-b1`, "rect", 80, 220, 680, 680, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`biz-${id}-im`, "image", 800, 220, 320, 680, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-b2`, "rect", 80, 940, 1040, 680, { fill: accent, borderRadius: 16 })
        );
        break;

      case 18: // Legal Counsel Engagement Letter with Top Ribbon
        elements.push(
          el(`biz-${id}-ribbon`, "rect", 80, 80, 1040, 160, { fill: accent, borderRadius: 12 }),
          el(`biz-${id}-t0`, "text", 120, 110, 960, 100, { text: b.title, fontSize: 40, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" }),
          el(`biz-${id}-im`, "image", 80, 280, 1040, 480, { src: photo, borderRadius: 12 }),
          el(`biz-${id}-letter`, "rect", 80, 800, 1040, 820, { fill: isDark ? "#111827" : "#ffffff", stroke: "#cbd5e1", strokeWidth: 1, borderRadius: 12 })
        );
        break;

      case 19: // Digital Marketing KPI Sheet with 4-Quadrant Data Tiles
        elements.push(
          el(`biz-${id}-t0`, "text", 80, 80, 1040, 100, { text: b.title, fontSize: 40, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`biz-${id}-im`, "image", 80, 200, 1040, 420, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-q1`, "rect", 80, 660, 500, 450, { fill: isDark ? "#111827" : "#fff7ed", borderRadius: 16 }),
          el(`biz-${id}-q2`, "rect", 620, 660, 500, 450, { fill: accent, borderRadius: 16 }),
          el(`biz-${id}-q3`, "rect", 80, 1150, 500, 470, { fill: accent, borderRadius: 16 }),
          el(`biz-${id}-q4`, "rect", 620, 1150, 500, 470, { fill: isDark ? "#111827" : "#fff7ed", borderRadius: 16 })
        );
        break;

      // Cases 20–39: Remaining distinct blueprints
      case 20: // Aerospace Technical Brief with Left 40% Pillar
        elements.push(
          el(`biz-${id}-pillar`, "rect", 60, 60, 440, 1577, { fill: accent, borderRadius: 16 }),
          el(`biz-${id}-im`, "image", 100, 100, 360, 500, { src: photo, borderRadius: 12 }),
          el(`biz-${id}-t0`, "text", 540, 80, 600, 180, { text: b.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`biz-${id}-specs`, "rect", 540, 280, 600, 1357, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 21: // FinTech Specification with Top Horizontal KPI Bar
        elements.push(
          el(`biz-${id}-kpis`, "rect", 80, 80, 1040, 240, { fill: accent, borderRadius: 16 }),
          el(`biz-${id}-t0`, "text", 120, 120, 960, 120, { text: b.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`biz-${id}-im`, "image", 80, 360, 1040, 600, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-body`, "rect", 80, 1000, 1040, 620, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 22: // Brand Identity Guidelines with Centered Square Showcase
        elements.push(
          el(`biz-${id}-t0`, "text", 80, 80, 1040, 140, { text: b.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: accent, textAlign: "center" }),
          el(`biz-${id}-im`, "image", 200, 260, 800, 800, { src: photo, borderRadius: 24 }),
          el(`biz-${id}-c1`, "rect", 80, 1100, 500, 520, { fill: accent, borderRadius: 16 }),
          el(`biz-${id}-c2`, "rect", 620, 1100, 500, 520, { fill: isDark ? "#18181b" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 23: // Left 40% vertical dark rail with portrait arch photo + right 3-tier cards
        elements.push(
          el(`biz-${id}-rail`, "rect", 0, 0, 480, 1697, { fill: isDark ? "#020617" : "#0f172a" }),
          el(`biz-${id}-im`, "image", 60, 100, 360, 500, { src: photo, borderRadius: 180 }),
          el(`biz-${id}-t0`, "text", 60, 640, 360, 240, { text: b.title, fontSize: 38, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`biz-${id}-card1`, "rect", 540, 80, 580, 460, { fill: accent, borderRadius: 16 }),
          el(`biz-${id}-card2`, "rect", 540, 580, 580, 480, { fill: isDark ? "#111827" : "#fefce8", borderRadius: 16 }),
          el(`biz-${id}-card3`, "rect", 540, 1100, 580, 510, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 16 })
        );
        break;

      case 24: // Architecture Project Dossier with Dual Vertical Columns
        elements.push(
          el(`biz-${id}-t0`, "text", 80, 80, 1040, 120, { text: b.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`biz-${id}-im`, "image", 80, 220, 500, 1400, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-r-card`, "rect", 620, 220, 500, 1400, { fill: accent, borderRadius: 16 })
        );
        break;

      case 25: // Global Freight Rate Proposal with Top Banner and 3 Columns
        elements.push(
          el(`biz-${id}-banner`, "rect", 80, 80, 1040, 240, { fill: accent, borderRadius: 16 }),
          el(`biz-${id}-t0`, "text", 120, 130, 960, 120, { text: b.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`biz-${id}-c1`, "rect", 80, 360, 320, 1260, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`biz-${id}-im`, "image", 440, 360, 320, 1260, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-c3`, "rect", 800, 360, 320, 1260, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 26: // Fleet Leasing Terms with Right 30% Sidebar
        elements.push(
          el(`biz-${id}-t0`, "text", 80, 80, 700, 140, { text: b.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`biz-${id}-main`, "rect", 80, 240, 700, 1380, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`biz-${id}-im`, "image", 820, 80, 300, 450, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-side`, "rect", 820, 560, 300, 1060, { fill: accent, borderRadius: 16 })
        );
        break;

      case 27: // Staggered 3-Column Pricing / Feature Tier Card Matrix
        elements.push(
          el(`biz-${id}-t0`, "text", 80, 80, 1040, 120, { text: b.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`biz-${id}-im`, "image", 80, 220, 1040, 300, { src: photo, borderRadius: 12 }),
          el(`biz-${id}-c1`, "rect", 80, 560, 320, 1050, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`biz-${id}-c2`, "rect", 440, 560, 320, 1050, { fill: accent, borderRadius: 16 }),
          el(`biz-${id}-c3`, "rect", 800, 560, 320, 1050, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 28: // Quant Trading White Paper with Minimalist Framing
        elements.push(
          el(`biz-${id}-frame`, "rect", 80, 80, 1040, 1537, { stroke: accent, strokeWidth: 2, fill: "transparent" }),
          el(`biz-${id}-t0`, "text", 120, 120, 960, 160, { text: b.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`biz-${id}-im`, "image", 120, 320, 960, 600, { src: photo, borderRadius: 8 }),
          el(`biz-${id}-bot`, "rect", 120, 960, 960, 600, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 8 })
        );
        break;

      case 29: // HR Onboarding Pack with Staggered 4-Tile Grid
        elements.push(
          el(`biz-${id}-top-b`, "rect", 0, 0, 1200, 220, { fill: accent }),
          el(`biz-${id}-t0`, "text", 80, 60, 1040, 120, { text: b.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" }),
          el(`biz-${id}-im`, "image", 80, 280, 500, 640, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-c1`, "rect", 620, 280, 500, 640, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`biz-${id}-c2`, "rect", 80, 960, 500, 660, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`biz-${id}-c3`, "rect", 620, 960, 500, 660, { fill: accent, borderRadius: 16 })
        );
        break;

      case 30: // Metals Trading Brief with Asymmetric 3-Column Split
        elements.push(
          el(`biz-${id}-t0`, "text", 80, 80, 1040, 120, { text: b.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`biz-${id}-im`, "image", 80, 220, 320, 1400, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-c1`, "rect", 430, 220, 340, 1400, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`biz-${id}-c2`, "rect", 800, 220, 320, 1400, { fill: accent, borderRadius: 16 })
        );
        break;

      case 31: // Telecom Tower Audit with Top Oval Portal Photo
        elements.push(
          el(`biz-${id}-im`, "image", 350, 80, 500, 500, { src: photo, borderRadius: 250 }),
          el(`biz-${id}-t0`, "text", 80, 620, 1040, 160, { text: b.title, fontSize: 48, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`biz-${id}-card1`, "rect", 80, 820, 500, 780, { fill: accent, borderRadius: 16 }),
          el(`biz-${id}-card2`, "rect", 620, 820, 500, 780, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 32: // Hotel Resort Acquisition Memo with Bottom Panoramic Photo
        elements.push(
          el(`biz-${id}-top-b`, "rect", 80, 80, 1040, 360, { fill: accent, borderRadius: 16 }),
          el(`biz-${id}-t0`, "text", 120, 130, 960, 180, { text: b.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`biz-${id}-mid`, "rect", 80, 480, 1040, 450, { fill: isDark ? "#111827" : "#fafaf9", borderRadius: 16 }),
          el(`biz-${id}-im`, "image", 80, 960, 1040, 660, { src: photo, borderRadius: 16 })
        );
        break;

      case 33: // Pharmaceutical Clinical SOW with Double Rail Layout
        elements.push(
          el(`biz-${id}-rail-l`, "rect", 0, 0, 200, 1697, { fill: accent }),
          el(`biz-${id}-t0`, "text", 260, 80, 860, 140, { text: b.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`biz-${id}-im`, "image", 260, 240, 860, 560, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-body`, "rect", 260, 840, 860, 780, { fill: isDark ? "#111827" : "#f0fdfa", borderRadius: 16 })
        );
        break;

      case 34: // Game Studio Co-Development with Cyber Card Matrix
        elements.push(
          el(`biz-${id}-im`, "image", 80, 80, 1040, 500, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-t0`, "text", 80, 620, 1040, 140, { text: b.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`biz-${id}-c1`, "rect", 80, 790, 500, 820, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`biz-${id}-c2`, "rect", 620, 790, 500, 820, { fill: accent, borderRadius: 16 })
        );
        break;

      case 35: // E-Commerce Franchise Disclosure with Top Right Stamp Photo
        elements.push(
          el(`biz-${id}-t0`, "text", 80, 80, 600, 240, { text: b.title, fontSize: 48, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`biz-${id}-im`, "image", 720, 80, 400, 300, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-body`, "rect", 80, 420, 1040, 1200, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 20 })
        );
        break;

      case 36: // Insurance Underwriting Risk Report with 3-Tier Multi Grid
        elements.push(
          el(`biz-${id}-top`, "rect", 60, 60, 1080, 200, { fill: accent, borderRadius: 12 }),
          el(`biz-${id}-t0`, "text", 100, 95, 1000, 120, { text: b.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`biz-${id}-im`, "image", 60, 290, 1080, 480, { src: photo, borderRadius: 12 }),
          el(`biz-${id}-g1`, "rect", 60, 800, 520, 820, { fill: isDark ? "#111827" : "#f1f5f9", borderRadius: 12 }),
          el(`biz-${id}-g2`, "rect", 620, 800, 520, 820, { fill: isDark ? "#111827" : "#f1f5f9", borderRadius: 12 })
        );
        break;

      case 37: // Civil Infrastructure Bid with Left 45% Photo Banner
        elements.push(
          el(`biz-${id}-im`, "image", 60, 60, 480, 1577, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-t0`, "text", 580, 80, 560, 200, { text: b.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`biz-${id}-box1`, "rect", 580, 320, 560, 600, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`biz-${id}-box2`, "rect", 580, 950, 560, 687, { fill: accent, borderRadius: 16 })
        );
        break;

      case 38: // Corporate Governance Charter with Centered Monolith Monograph
        elements.push(
          el(`biz-${id}-t0`, "text", 100, 100, 1000, 180, { text: b.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`biz-${id}-line`, "rect", 100, 300, 1000, 4, { fill: accent }),
          el(`biz-${id}-im`, "image", 100, 340, 1000, 500, { src: photo, borderRadius: 12 }),
          el(`biz-${id}-card`, "rect", 100, 880, 1000, 720, { fill: isDark ? "#111827" : "#ffffff", stroke: "#cbd5e1", strokeWidth: 1, borderRadius: 16 })
        );
        break;

      case 39: // Left vertical ribbon + 3 horizontal data cards
        elements.push(
          el(`biz-${id}-ribbon`, "rect", 0, 0, 240, 1697, { fill: accent }),
          el(`biz-${id}-t0`, "text", 300, 80, 820, 140, { text: b.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`biz-${id}-im`, "image", 300, 240, 820, 420, { src: photo, borderRadius: 16 }),
          el(`biz-${id}-row1`, "rect", 300, 700, 820, 420, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`biz-${id}-row2`, "rect", 300, 1160, 820, 460, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;
    }

    business.push({
      id,
      name: `Bespoke Business Document ${id}`,
      title: b.title,
      category: "Business",
      canvasWidth: 1200,
      canvasHeight: 1697,
      elements,
      tags: ["business", "corporate", font.toLowerCase(), isDark ? "dark" : "light"]
    });
  }

  return business;
}
