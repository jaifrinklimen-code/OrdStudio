// Presentations (50 Bespoke Multi-Slide Decks: IDs 101–150)
// True Design Diversity: 50 distinct layout structures & geometries, widescreen 1920x1080
import { getPhoto } from "./uniquePhotoRegistry.mjs";

export function generatePresentations50() {
  const presentations = [];
  const fonts = ["Inter", "Plus Jakarta Sans", "Outfit", "Space Grotesk", "Playfair Display", "Cinzel", "Syne", "Cabinet Grotesk"];
  
  const presentationThemes = [
    { title: "GLOBAL TECH KEYNOTE 2026", font: "Inter", bg: "#ffffff", accent: "#2563eb", dark: false },
    { title: "VENTURE CAPITAL SEED PITCH", font: "Playfair Display", bg: "#09090b", accent: "#10b981", dark: true },
    { title: "AI INFRASTRUCTURE ROADMAP", font: "Space Grotesk", bg: "#020617", accent: "#06b6d4", dark: true },
    { title: "LUXURY BRAND STRATEGY DECK", font: "Cinzel", bg: "#fff1f2", accent: "#be123c", dark: false },
    { title: "CREATIVE AGENCY SHOWREEL", font: "Syne", bg: "#000000", accent: "#ec4899", dark: true },
    { title: "SUSTAINABILITY & ESG SUMMIT", font: "Outfit", bg: "#f0fdf4", accent: "#16a34a", dark: false },
    { title: "FINTECH REVOLUTION PITCH", font: "Plus Jakarta Sans", bg: "#ffffff", accent: "#7c3aed", dark: false },
    { title: "AEROSPACE SYSTEMS BRIEFING", font: "Cabinet Grotesk", bg: "#0f172a", accent: "#38bdf8", dark: true },
    { title: "HEALTHCARE GENOMICS ADVANCE", font: "Plus Jakarta Sans", bg: "#f0fdfa", accent: "#0d9488", dark: false },
    { title: "GLOBAL SUPPLY CHAIN LOGISTICS", font: "Cabinet Grotesk", bg: "#f8fafc", accent: "#ea580c", dark: false },
    { title: "EXECUTIVE BOARD OF DIRECTORS", font: "Cinzel", bg: "#ffffff", accent: "#1e3a8a", dark: false },
    { title: "SAAS ENTERPRISE PRODUCT DEMO", font: "Inter", bg: "#ffffff", accent: "#f43f5e", dark: false },
    { title: "DEEP SPACE ASTRONOMY FORUM", font: "Space Grotesk", bg: "#030712", accent: "#818cf8", dark: true },
    { title: "RENEWABLE ENERGY TRANSITION", font: "Outfit", bg: "#f8fafc", accent: "#65a30d", dark: false },
    { title: "ARCHITECTURE DESIGN MASTERCLASS", font: "Playfair Display", bg: "#fafaf9", accent: "#0f172a", dark: false },
    { title: "CYBERSECURITY INCIDENT BRIEF", font: "Space Grotesk", bg: "#000000", accent: "#ef4444", dark: true },
    { title: "URBAN MOBILITY & SMART CITIES", font: "Inter", bg: "#ffffff", accent: "#0284c7", dark: false },
    { title: "MEDIA STREAMING ADOPTION", font: "Syne", bg: "#18022e", accent: "#d946ef", dark: true },
    { title: "PRIVATE WEALTH STRATEGY DECK", font: "Playfair Display", bg: "#fefce8", accent: "#a16207", dark: false },
    { title: "METAVERSE SPATIAL DESIGN", font: "Syne", bg: "#09090b", accent: "#06b6d4", dark: true },
    { title: "QUANTUM COMPUTING MILESTONE", font: "Space Grotesk", bg: "#020617", accent: "#a855f7", dark: true },
    { title: "COMMERCIAL REAL ESTATE FORUM", font: "Playfair Display", bg: "#ffffff", accent: "#1e3a8a", dark: false },
    { title: "AGILE PRODUCT MANAGEMENT SPRINT", font: "Plus Jakarta Sans", bg: "#ffffff", accent: "#2563eb", dark: false },
    { title: "HAUTE GASTRONOMY INVESTOR DECK", font: "Cinzel", bg: "#fffbeb", accent: "#78350f", dark: false },
    { title: "ROBOTICS AUTOMATION IN FACTORIES", font: "Cabinet Grotesk", bg: "#111827", accent: "#f59e0b", dark: true },
    { title: "DATA PRIVACY & GDPR COMPLIANCE", font: "Inter", bg: "#ffffff", accent: "#1d4ed8", dark: false },
    { title: "DEVSECOPS CLOUD ROADMAP", font: "Space Grotesk", bg: "#0a0a0a", accent: "#22c55e", dark: true },
    { title: "ELECTRIC VEHICLE CHARGING GRID", font: "Outfit", bg: "#f1f5f9", accent: "#0ea5e9", dark: false },
    { title: "CLINICAL TELEMEDICINE EXPANSION", font: "Plus Jakarta Sans", bg: "#f0fdf4", accent: "#059669", dark: false },
    { title: "FINE ART CURATORIAL OVERVIEW", font: "Cinzel", bg: "#fdfbf7", accent: "#92400e", dark: false },
    { title: "REGENERATIVE AGRICULTURE FORUM", font: "Playfair Display", bg: "#f0fdf4", accent: "#166534", dark: false },
    { title: "MOBILE GAME MONETIZATION DECK", font: "Syne", bg: "#0d0d12", accent: "#f43f5e", dark: true },
    { title: "CIRCULAR ECONOMY PACKAGING", font: "Outfit", bg: "#f8fafc", accent: "#d97706", dark: false },
    { title: "GRID BATTERY STORAGE CAPACITY", font: "Space Grotesk", bg: "#030712", accent: "#38bdf8", dark: true },
    { title: "GLOBAL LOGISTICS EXPEDITION", font: "Cabinet Grotesk", bg: "#ffffff", accent: "#c2410c", dark: false },
    { title: "ARTS PHILANTHROPY GALA BRIEF", font: "Cinzel", bg: "#ffffff", accent: "#86198f", dark: false },
    { title: "COMMERCIAL AIRLINE SAFETY AUDIT", font: "Inter", bg: "#0f172a", accent: "#38bdf8", dark: true },
    { title: "GLOBAL TAX POLICY BENCHMARK", font: "Playfair Display", bg: "#ffffff", accent: "#1e3a8a", dark: false },
    { title: "NEURAL NETWORK COMPILER DECK", font: "Space Grotesk", bg: "#000000", accent: "#10b981", dark: true },
    { title: "HOSPITALITY RESORT DEVELOPMENT", font: "Playfair Display", bg: "#fafaf9", accent: "#b45309", dark: false },
    { title: "INDIE GAME PUBLISHING PITCH", font: "Syne", bg: "#18022e", accent: "#ec4899", dark: true },
    { title: "CORPORATE WELLNESS STRATEGY", font: "Outfit", bg: "#f0fdf4", accent: "#15803d", dark: false },
    { title: "OPEN SOURCE SOFTWARE GOVERNANCE", font: "Space Grotesk", bg: "#0a0a0a", accent: "#6366f1", dark: true },
    { title: "VETERINARY CLINICAL NETWORK", font: "Plus Jakarta Sans", bg: "#fefce8", accent: "#ca8a04", dark: false },
    { title: "RESTAURANT FRANCHISE EXPANSION", font: "Cabinet Grotesk", bg: "#ffffff", accent: "#ea580c", dark: false },
    { title: "PREVENTATIVE LONGEVITY SUMMIT", font: "Plus Jakarta Sans", bg: "#f8fafc", accent: "#0d9488", dark: false },
    { title: "DEVELOPER TOOLING ECOSYSTEM", font: "Inter", bg: "#030712", accent: "#06b6d4", dark: true },
    { title: "GLOBAL ART AUCTION PREVIEW", font: "Cinzel", bg: "#fdf4ff", accent: "#701a75", dark: false },
    { title: "FLORICULTURE EXPORT CAPACITY", font: "Playfair Display", bg: "#fff7ed", accent: "#ea580c", dark: false },
    { title: "CORPORATE GOVERNANCE CHARTER", font: "Inter", bg: "#ffffff", accent: "#0f172a", dark: false }
  ];

  function el(id, type, x, y, width, height, extra = {}) {
    return { id, type, x, y, width, height, ...extra };
  }

  for (let i = 0; i < 50; i++) {
    const id = 101 + i;
    const p = presentationThemes[i];
    const bg = p.bg;
    const accent = p.accent;
    const font = p.font;
    const isDark = p.dark;
    const photo = getPhoto(id);

    // Build 5 diverse slides for each presentation deck
    const slide1Elements = []; // Slide 1 (Cover / Hero)
    const slide2Elements = []; // Slide 2 (Problem / Market Context)
    const slide3Elements = []; // Slide 3 (Solution / Architecture)
    const slide4Elements = []; // Slide 4 (Metrics / KPI Dashboard)
    const slide5Elements = []; // Slide 5 (Roadmap / Next Steps)

    // Base background for Slide 1
    slide1Elements.push(el(`pres-${id}-s1-bg`, "rect", 0, 0, 1920, 1080, { fill: bg, locked: true }));

    // 50 Handcrafted Cover Slide Blueprints (1920x1080 Widescreen)
    switch (i) {
      case 0: // Left 55% Title Block with Right 45% Portrait Photo Hero
        slide1Elements.push(
          el(`pres-${id}-t0`, "text", 120, 240, 900, 300, { text: p.title, fontSize: 72, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", lineHeight: 0.95 }),
          el(`pres-${id}-sub`, "text", 120, 580, 800, 100, { text: "Annual Keynote & Product Strategy Deck", fontSize: 28, fontFamily: font, fontWeight: "600", fill: accent }),
          el(`pres-${id}-im`, "image", 1080, 120, 720, 840, { src: photo, borderRadius: 24 })
        );
        break;

      case 1: // Full-Bleed Dark Cinematic Hero with Floating Left Glass Plaque
        slide1Elements.push(
          el(`pres-${id}-im`, "image", 0, 0, 1920, 1080, { src: photo }),
          el(`pres-${id}-scrim`, "rect", 0, 0, 1920, 1080, { fill: "rgba(0,0,0,0.65)", locked: true }),
          el(`pres-${id}-glass`, "rect", 120, 160, 960, 760, { fill: "rgba(255,255,255,0.08)", stroke: accent, strokeWidth: 1.5, borderRadius: 24 }),
          el(`pres-${id}-t0`, "text", 180, 280, 840, 260, { text: p.title, fontSize: 68, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`pres-${id}-badge`, "rect", 180, 600, 320, 80, { fill: accent, borderRadius: 40 })
        );
        break;

      case 2: // Widescreen 3-Tier Split (Top Bar, Left Photo, Right Cards)
        slide1Elements.push(
          el(`pres-${id}-top-bar`, "rect", 100, 80, 1720, 160, { fill: accent, borderRadius: 16 }),
          el(`pres-${id}-t0`, "text", 160, 120, 1600, 100, { text: p.title, fontSize: 54, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`pres-${id}-im`, "image", 100, 280, 900, 720, { src: photo, borderRadius: 16 }),
          el(`pres-${id}-c1`, "rect", 1040, 280, 780, 340, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-c2`, "rect", 1040, 660, 780, 340, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;

      case 3: // Swiss Minimalist Typography Monument with Centered Square Photo
        slide1Elements.push(
          el(`pres-${id}-t0`, "text", 120, 120, 1680, 180, { text: p.title, fontSize: 68, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`pres-${id}-im`, "image", 640, 340, 640, 640, { src: photo, borderRadius: 24 }),
          el(`pres-${id}-fl`, "rect", 120, 340, 480, 640, { fill: accent, borderRadius: 24 }),
          el(`pres-${id}-fr`, "rect", 1320, 340, 480, 640, { fill: isDark ? "#18181b" : "#f1f5f9", borderRadius: 24 })
        );
        break;

      case 4: // Asymmetric Diagonal Wedge with Right Photo Focus
        slide1Elements.push(
          el(`pres-${id}-wedge`, "rect", 0, 0, 1100, 1080, { fill: accent }),
          el(`pres-${id}-t0`, "text", 120, 260, 880, 320, { text: p.title, fontSize: 72, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`pres-${id}-im`, "image", 1160, 120, 640, 840, { src: photo, borderRadius: 24 })
        );
        break;

      case 5: // 4-Column Balanced Keynote Cards
        slide1Elements.push(
          el(`pres-${id}-t0`, "text", 100, 80, 1720, 120, { text: p.title, fontSize: 52, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-c1`, "rect", 100, 240, 390, 760, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-im`, "image", 530, 240, 390, 760, { src: photo, borderRadius: 16 }),
          el(`pres-${id}-c3`, "rect", 960, 240, 390, 760, { fill: accent, borderRadius: 16 }),
          el(`pres-${id}-c4`, "rect", 1390, 240, 430, 760, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 16 })
        );
        break;

      case 6: // Center Archway Photo with Top & Bottom Dark Floating Bars
        slide1Elements.push(
          el(`pres-${id}-top-b`, "rect", 120, 80, 1680, 160, { fill: isDark ? "#18181b" : "#ffffff", stroke: "#cbd5e1", strokeWidth: 1, borderRadius: 16 }),
          el(`pres-${id}-t0`, "text", 180, 120, 1560, 100, { text: p.title, fontSize: 50, fontFamily: font, fontWeight: "900", fill: accent, textAlign: "center" }),
          el(`pres-${id}-im`, "image", 560, 280, 800, 560, { src: photo, borderRadius: 280 }),
          el(`pres-${id}-bot-b`, "rect", 120, 880, 1680, 120, { fill: accent, borderRadius: 12 })
        );
        break;

      case 7: // Dark Cyber Matrix Widescreen Presentation
        slide1Elements.push(
          el(`pres-${id}-hud`, "rect", 80, 80, 1760, 200, { fill: "#030712", stroke: accent, strokeWidth: 2, borderRadius: 16 }),
          el(`pres-${id}-t0`, "text", 140, 120, 1640, 120, { text: p.title, fontSize: 56, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-im`, "image", 80, 320, 1000, 680, { src: photo, borderRadius: 16 }),
          el(`pres-${id}-right`, "rect", 1120, 320, 720, 680, { fill: "#09090b", stroke: "#1e293b", strokeWidth: 1, borderRadius: 16 })
        );
        break;

      case 8: // Left 30% Accent Rail with Massive Right Showcase
        slide1Elements.push(
          el(`pres-${id}-rail`, "rect", 0, 0, 480, 1080, { fill: accent }),
          el(`pres-${id}-t0`, "text", 560, 120, 1240, 180, { text: p.title, fontSize: 64, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pres-${id}-im`, "image", 560, 340, 1240, 640, { src: photo, borderRadius: 20 })
        );
        break;

      case 9: // Modern 2-Row Split Widescreen
        slide1Elements.push(
          el(`pres-${id}-top-half`, "rect", 80, 80, 1760, 420, { fill: accent, borderRadius: 24 }),
          el(`pres-${id}-t0`, "text", 140, 160, 1640, 220, { text: p.title, fontSize: 62, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`pres-${id}-im`, "image", 80, 540, 860, 460, { src: photo, borderRadius: 20 }),
          el(`pres-${id}-bot-r`, "rect", 980, 540, 860, 460, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 20 })
        );
        break;

      case 10: // Right 35% Vertical Photo Banner
        slide1Elements.push(
          el(`pres-${id}-im`, "image", 1200, 80, 640, 920, { src: photo, borderRadius: 24 }),
          el(`pres-${id}-t0`, "text", 80, 120, 1060, 240, { text: p.title, fontSize: 64, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-b1`, "rect", 80, 400, 1060, 260, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-b2`, "rect", 80, 700, 1060, 300, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;

      case 11: // 3-Column Asymmetric Showcase
        slide1Elements.push(
          el(`pres-${id}-c1`, "rect", 100, 100, 480, 880, { fill: accent, borderRadius: 20 }),
          el(`pres-${id}-im`, "image", 620, 100, 680, 880, { src: photo, borderRadius: 20 }),
          el(`pres-${id}-t0`, "text", 1340, 140, 480, 300, { text: p.title, fontSize: 48, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pres-${id}-c3`, "rect", 1340, 480, 480, 500, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 20 })
        );
        break;

      case 12: // Top-Left Square Stamp Photo with Giant Headline Below
        slide1Elements.push(
          el(`pres-${id}-im`, "image", 120, 120, 480, 480, { src: photo, borderRadius: 24 }),
          el(`pres-${id}-t0`, "text", 640, 120, 1160, 240, { text: p.title, fontSize: 64, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-box`, "rect", 640, 400, 1160, 200, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-bot`, "rect", 120, 640, 1680, 360, { fill: accent, borderRadius: 20 })
        );
        break;

      case 13: // Horizontal 3-Tier Film Strip
        slide1Elements.push(
          el(`pres-${id}-im1`, "image", 100, 100, 540, 480, { src: photo, borderRadius: 16 }),
          el(`pres-${id}-c1`, "rect", 680, 100, 540, 480, { fill: accent, borderRadius: 16 }),
          el(`pres-${id}-c2`, "rect", 1260, 100, 540, 480, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-t0`, "text", 100, 640, 1720, 340, { text: p.title, fontSize: 68, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" })
        );
        break;

      case 14: // Center Portrait Pill Photo
        slide1Elements.push(
          el(`pres-${id}-c1`, "rect", 100, 100, 600, 880, { fill: accent, borderRadius: 24 }),
          el(`pres-${id}-im`, "image", 760, 100, 400, 880, { src: photo, borderRadius: 200 }),
          el(`pres-${id}-t0`, "text", 1220, 160, 600, 300, { text: p.title, fontSize: 52, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pres-${id}-c2`, "rect", 1220, 500, 600, 480, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 24 })
        );
        break;

      case 15: // Bottom Panoramic Hero Drawer
        slide1Elements.push(
          el(`pres-${id}-im`, "image", 0, 0, 1920, 650, { src: photo }),
          el(`pres-${id}-drawer`, "rect", 0, 550, 1920, 530, { fill: bg, borderRadius: 36 }),
          el(`pres-${id}-t0`, "text", 120, 640, 1680, 200, { text: p.title, fontSize: 66, fontFamily: font, fontWeight: "900", fill: accent })
        );
        break;

      case 16: // Stark Brutalist Heavy Box
        slide1Elements.push(
          el(`pres-${id}-box1`, "rect", 80, 80, 860, 920, { fill: accent, stroke: "#000000", strokeWidth: 4 }),
          el(`pres-${id}-t0`, "text", 140, 140, 740, 400, { text: p.title, fontSize: 64, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`pres-${id}-im`, "image", 980, 80, 860, 920, { src: photo })
        );
        break;

      case 17: // Offset Floating Card on Left Dark Pane
        slide1Elements.push(
          el(`pres-${id}-pane`, "rect", 0, 0, 960, 1080, { fill: isDark ? "#030712" : "#0f172a" }),
          el(`pres-${id}-card`, "rect", 360, 140, 1200, 800, { fill: accent, borderRadius: 32 }),
          el(`pres-${id}-t0`, "text", 440, 240, 1040, 240, { text: p.title, fontSize: 60, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" }),
          el(`pres-${id}-im`, "image", 440, 520, 1040, 360, { src: photo, borderRadius: 16 })
        );
        break;

      case 18: // 3-Tier Multi-Level Widescreen Stack
        slide1Elements.push(
          el(`pres-${id}-t0`, "text", 100, 80, 1720, 140, { text: p.title, fontSize: 58, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-tier1`, "rect", 100, 240, 1720, 240, { fill: accent, borderRadius: 16 }),
          el(`pres-${id}-tier2`, "rect", 100, 510, 1720, 260, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-tier3`, "rect", 100, 800, 1720, 220, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;

      case 19: // Top Horizontal Pill
        slide1Elements.push(
          el(`pres-${id}-pill`, "rect", 100, 80, 1720, 180, { fill: accent, borderRadius: 90 }),
          el(`pres-${id}-t0`, "text", 160, 120, 1600, 100, { text: p.title, fontSize: 50, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" }),
          el(`pres-${id}-im`, "image", 100, 300, 1720, 440, { src: photo, borderRadius: 20 }),
          el(`pres-${id}-c1`, "rect", 100, 780, 540, 220, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-c2`, "rect", 680, 780, 540, 220, { fill: accent, borderRadius: 16 }),
          el(`pres-${id}-c3`, "rect", 1260, 780, 560, 220, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 20: // Right 50% Photo Pillar
        slide1Elements.push(
          el(`pres-${id}-im`, "image", 960, 0, 960, 1080, { src: photo }),
          el(`pres-${id}-t0`, "text", 120, 160, 780, 300, { text: p.title, fontSize: 62, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-k1`, "rect", 120, 520, 780, 220, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-k2`, "rect", 120, 780, 780, 220, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;

      case 21: // 4-Quadrant Data Matrix
        slide1Elements.push(
          el(`pres-${id}-t0`, "text", 100, 60, 1720, 90, { text: p.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-im`, "image", 100, 170, 840, 410, { src: photo, borderRadius: 16 }),
          el(`pres-${id}-q1`, "rect", 980, 170, 840, 410, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-q2`, "rect", 100, 610, 840, 410, { fill: accent, borderRadius: 16 }),
          el(`pres-${id}-q3`, "rect", 980, 610, 840, 410, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 22: // Top Full-Width Photo Band
        slide1Elements.push(
          el(`pres-${id}-im`, "image", 0, 0, 1920, 480, { src: photo }),
          el(`pres-${id}-t0`, "text", 100, 520, 1720, 120, { text: p.title, fontSize: 54, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-c1`, "rect", 100, 680, 540, 340, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-c2`, "rect", 680, 680, 540, 340, { fill: accent, borderRadius: 16 }),
          el(`pres-${id}-c3`, "rect", 1260, 680, 560, 340, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 23: // Center Diamond Portal
        slide1Elements.push(
          el(`pres-${id}-c1`, "rect", 100, 180, 500, 720, { fill: accent, borderRadius: 24 }),
          el(`pres-${id}-im`, "image", 660, 180, 600, 600, { src: photo, borderRadius: 300 }),
          el(`pres-${id}-t0`, "text", 660, 820, 600, 140, { text: p.title, fontSize: 40, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`pres-${id}-c2`, "rect", 1320, 180, 500, 720, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 24 })
        );
        break;

      case 24: // Left 20% Narrow Accent Stripe
        slide1Elements.push(
          el(`pres-${id}-stripe`, "rect", 0, 0, 320, 1080, { fill: accent }),
          el(`pres-${id}-t0`, "text", 380, 100, 1440, 140, { text: p.title, fontSize: 54, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pres-${id}-im`, "image", 380, 280, 700, 720, { src: photo, borderRadius: 20 }),
          el(`pres-${id}-stack`, "rect", 1120, 280, 700, 720, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 20 })
        );
        break;

      case 25: // Double Archway
        slide1Elements.push(
          el(`pres-${id}-im`, "image", 120, 100, 780, 880, { src: photo, borderRadius: 390 }),
          el(`pres-${id}-arch`, "rect", 980, 100, 820, 880, { fill: accent, borderRadius: 410 }),
          el(`pres-${id}-t0`, "text", 1040, 380, 700, 300, { text: p.title, fontSize: 56, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" })
        );
        break;

      case 26: // Diagonal Wedge Right
        slide1Elements.push(
          el(`pres-${id}-im`, "image", 100, 120, 680, 840, { src: photo, borderRadius: 24 }),
          el(`pres-${id}-wedge-r`, "rect", 820, 0, 1100, 1080, { fill: accent }),
          el(`pres-${id}-t0`, "text", 920, 260, 880, 320, { text: p.title, fontSize: 68, fontFamily: font, fontWeight: "900", fill: "#ffffff" })
        );
        break;

      case 27: // Top-Right Rounded Badge
        slide1Elements.push(
          el(`pres-${id}-t0`, "text", 100, 100, 940, 360, { text: p.title, fontSize: 66, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-im`, "image", 1100, 80, 720, 400, { src: photo, borderRadius: 24 }),
          el(`pres-${id}-bot`, "rect", 100, 520, 1720, 460, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 24 })
        );
        break;

      case 28: // 3-Column Alternating Checkerboard
        slide1Elements.push(
          el(`pres-${id}-t0`, "text", 100, 50, 1720, 80, { text: p.title, fontSize: 40, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-im`, "image", 100, 150, 540, 420, { src: photo, borderRadius: 16 }),
          el(`pres-${id}-c1`, "rect", 680, 150, 540, 420, { fill: accent, borderRadius: 16 }),
          el(`pres-${id}-c2`, "rect", 1260, 150, 540, 420, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-c3`, "rect", 100, 600, 540, 420, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-c4`, "rect", 680, 600, 540, 420, { fill: accent, borderRadius: 16 }),
          el(`pres-${id}-c5`, "rect", 1260, 600, 540, 420, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;

      case 29: // Center circular badge with left & right floating cards
        slide1Elements.push(
          el(`pres-${id}-t0`, "text", 100, 60, 1720, 100, { text: p.title, fontSize: 46, fontFamily: font, fontWeight: "900", fill: accent, textAlign: "center" }),
          el(`pres-${id}-c1`, "rect", 100, 190, 550, 750, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 24 }),
          el(`pres-${id}-im`, "image", 710, 190, 500, 500, { src: photo, borderRadius: 250 }),
          el(`pres-${id}-c2`, "rect", 1270, 190, 550, 750, { fill: accent, borderRadius: 24 })
        );
        break;

      case 30: // Bottom Horizontal Photo Banner
        slide1Elements.push(
          el(`pres-${id}-t0`, "text", 100, 100, 1720, 180, { text: p.title, fontSize: 62, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-c1`, "rect", 100, 320, 840, 220, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-c2`, "rect", 980, 320, 840, 220, { fill: accent, borderRadius: 16 }),
          el(`pres-${id}-im`, "image", 100, 580, 1720, 420, { src: photo, borderRadius: 20 })
        );
        break;

      case 31: // Monoline Frame with Centered Portrait
        slide1Elements.push(
          el(`pres-${id}-frame`, "rect", 80, 80, 1760, 920, { stroke: accent, strokeWidth: 3, fill: "transparent" }),
          el(`pres-${id}-t0`, "text", 140, 140, 1640, 120, { text: p.title, fontSize: 54, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`pres-${id}-im`, "image", 700, 300, 520, 620, { src: photo, borderRadius: 16 })
        );
        break;

      case 32: // Top-Left Ribbon with Right Title
        slide1Elements.push(
          el(`pres-${id}-rib`, "rect", 0, 0, 600, 240, { fill: accent }),
          el(`pres-${id}-t0`, "text", 660, 80, 1160, 200, { text: p.title, fontSize: 56, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pres-${id}-im`, "image", 100, 340, 840, 640, { src: photo, borderRadius: 20 }),
          el(`pres-${id}-c2`, "rect", 980, 340, 840, 640, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 20 })
        );
        break;

      case 33: // 3-Column Asymmetric: Left Photo + Center Manifesto + Right Stack
        slide1Elements.push(
          el(`pres-${id}-im`, "image", 100, 100, 480, 880, { src: photo, borderRadius: 20 }),
          el(`pres-${id}-t0`, "text", 620, 120, 680, 240, { text: p.title, fontSize: 50, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-mid`, "rect", 620, 400, 680, 580, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 20 }),
          el(`pres-${id}-r1`, "rect", 1340, 100, 480, 420, { fill: accent, borderRadius: 20 }),
          el(`pres-${id}-r2`, "rect", 1340, 560, 480, 420, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 20 })
        );
        break;

      case 34: // Left Pill Photo + Center Title + Right Stack
        slide1Elements.push(
          el(`pres-${id}-im`, "image", 100, 100, 420, 880, { src: photo, borderRadius: 210 }),
          el(`pres-${id}-t0`, "text", 560, 100, 740, 240, { text: p.title, fontSize: 52, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-c1`, "rect", 560, 380, 740, 600, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 20 }),
          el(`pres-${id}-c2`, "rect", 1340, 100, 480, 880, { fill: accent, borderRadius: 20 })
        );
        break;

      case 35: // High-Contrast Dark Monograph
        slide1Elements.push(
          el(`pres-${id}-t0`, "text", 120, 140, 1680, 360, { text: p.title, fontSize: 74, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-line`, "rect", 120, 540, 1680, 4, { fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pres-${id}-im`, "image", 120, 580, 800, 420, { src: photo, borderRadius: 16 }),
          el(`pres-${id}-bot`, "rect", 960, 580, 840, 420, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 36: // Staggered Diagonal Polaroid Cards
        slide1Elements.push(
          el(`pres-${id}-im1`, "image", 120, 120, 700, 500, { src: photo, borderRadius: 20 }),
          el(`pres-${id}-t0`, "text", 880, 120, 920, 240, { text: p.title, fontSize: 56, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-c1`, "rect", 880, 380, 920, 240, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-c2`, "rect", 120, 660, 1680, 340, { fill: accent, borderRadius: 20 })
        );
        break;

      case 37: // Right Vertical 40% Pillar
        slide1Elements.push(
          el(`pres-${id}-t0`, "text", 100, 80, 980, 240, { text: p.title, fontSize: 58, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-c1`, "rect", 100, 360, 980, 180, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-c2`, "rect", 100, 570, 980, 180, { fill: accent, borderRadius: 16 }),
          el(`pres-${id}-c3`, "rect", 100, 780, 980, 220, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 }),
          el(`pres-${id}-im`, "image", 1140, 80, 700, 920, { src: photo, borderRadius: 24 })
        );
        break;

      case 38: // Asymmetric Horizontal Wave
        slide1Elements.push(
          el(`pres-${id}-im`, "image", 100, 100, 800, 480, { src: photo, borderRadius: 20 }),
          el(`pres-${id}-t0`, "text", 940, 120, 880, 200, { text: p.title, fontSize: 52, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-c1`, "rect", 940, 340, 880, 240, { fill: accent, borderRadius: 16 }),
          el(`pres-${id}-c2`, "rect", 100, 620, 880, 360, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-c3`, "rect", 1020, 620, 800, 360, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;

      case 39: // Concentric Double Card Deck
        slide1Elements.push(
          el(`pres-${id}-card-out`, "rect", 80, 80, 1760, 920, { fill: isDark ? "#111827" : "#ffffff", stroke: accent, strokeWidth: 2, borderRadius: 32 }),
          el(`pres-${id}-im`, "image", 160, 160, 700, 760, { src: photo, borderRadius: 20 }),
          el(`pres-${id}-t0`, "text", 920, 220, 840, 280, { text: p.title, fontSize: 58, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-c1`, "rect", 920, 540, 840, 380, { fill: accent, borderRadius: 20 })
        );
        break;

      case 40: // Top Letterbox Panoramic Hero
        slide1Elements.push(
          el(`pres-${id}-im`, "image", 0, 80, 1920, 450, { src: photo }),
          el(`pres-${id}-t0`, "text", 100, 580, 1720, 180, { text: p.title, fontSize: 60, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-c1`, "rect", 100, 780, 840, 220, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-c2`, "rect", 980, 780, 840, 220, { fill: accent, borderRadius: 16 })
        );
        break;

      case 41: // 5-Pillar Vertical Stream
        slide1Elements.push(
          el(`pres-${id}-t0`, "text", 100, 50, 1720, 80, { text: p.title, fontSize: 42, fontFamily: font, fontWeight: "900", fill: accent, textAlign: "center" }),
          el(`pres-${id}-p1`, "rect", 100, 160, 300, 840, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-im`, "image", 430, 160, 300, 840, { src: photo, borderRadius: 16 }),
          el(`pres-${id}-p3`, "rect", 760, 160, 300, 840, { fill: accent, borderRadius: 16 }),
          el(`pres-${id}-p4`, "rect", 1090, 160, 300, 840, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-p5`, "rect", 1420, 160, 400, 840, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;

      case 42: // Left 45% Photo Banner
        slide1Elements.push(
          el(`pres-${id}-im`, "image", 60, 60, 780, 960, { src: photo, borderRadius: 24 }),
          el(`pres-${id}-t0`, "text", 880, 100, 960, 200, { text: p.title, fontSize: 56, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-b1`, "rect", 880, 340, 960, 300, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 20 }),
          el(`pres-${id}-b2`, "rect", 880, 680, 960, 340, { fill: accent, borderRadius: 20 })
        );
        break;

      case 43: // Center Circular Arch
        slide1Elements.push(
          el(`pres-${id}-top-b`, "rect", 100, 80, 1720, 160, { fill: accent, borderRadius: 16 }),
          el(`pres-${id}-t0`, "text", 160, 120, 1600, 100, { text: p.title, fontSize: 48, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" }),
          el(`pres-${id}-im`, "image", 660, 280, 600, 480, { src: photo, borderRadius: 240 }),
          el(`pres-${id}-bot-b`, "rect", 100, 800, 1720, 200, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 44: // Right 45% Photo Pillar + Left 3-Tier Horizontal Cards
        slide1Elements.push(
          el(`pres-${id}-t0`, "text", 100, 80, 900, 180, { text: p.title, fontSize: 56, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pres-${id}-c1`, "rect", 100, 280, 900, 220, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-c2`, "rect", 100, 530, 900, 220, { fill: accent, borderRadius: 16 }),
          el(`pres-${id}-c3`, "rect", 100, 780, 900, 220, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 }),
          el(`pres-${id}-im`, "image", 1060, 80, 760, 920, { src: photo, borderRadius: 24 })
        );
        break;

      case 45: // Staggered Chevron Widescreen
        slide1Elements.push(
          el(`pres-${id}-top-chev`, "rect", 0, 0, 1920, 280, { fill: accent }),
          el(`pres-${id}-t0`, "text", 100, 80, 1720, 140, { text: p.title, fontSize: 56, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`pres-${id}-im`, "image", 100, 320, 820, 680, { src: photo, borderRadius: 24 }),
          el(`pres-${id}-chev-r`, "rect", 960, 320, 860, 680, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 24 })
        );
        break;

      case 46: // Monolith Typography Centerpiece
        slide1Elements.push(
          el(`pres-${id}-t0`, "text", 120, 120, 1680, 240, { text: p.title, fontSize: 64, fontFamily: font, fontWeight: "900", fill: accent, textAlign: "center" }),
          el(`pres-${id}-r1`, "rect", 120, 400, 1680, 180, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-im`, "image", 120, 610, 1680, 240, { src: photo, borderRadius: 16 }),
          el(`pres-${id}-r3`, "rect", 120, 880, 1680, 140, { fill: accent, borderRadius: 16 })
        );
        break;

      case 47: // Right 30% Rail with Left Multi-Grid
        slide1Elements.push(
          el(`pres-${id}-t0`, "text", 100, 80, 1100, 140, { text: p.title, fontSize: 52, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pres-${id}-im`, "image", 100, 250, 1100, 450, { src: photo, borderRadius: 20 }),
          el(`pres-${id}-c1`, "rect", 100, 730, 530, 270, { fill: accent, borderRadius: 16 }),
          el(`pres-${id}-c2`, "rect", 670, 730, 530, 270, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`pres-${id}-rail`, "rect", 1240, 80, 580, 920, { fill: accent, borderRadius: 24 })
        );
        break;

      case 48: // Dual Diagonal Wedge
        slide1Elements.push(
          el(`pres-${id}-w1`, "rect", 0, 0, 960, 1080, { fill: isDark ? "#030712" : "#0f172a" }),
          el(`pres-${id}-w2`, "rect", 960, 0, 960, 1080, { fill: accent }),
          el(`pres-${id}-im`, "image", 160, 160, 740, 760, { src: photo, borderRadius: 24 }),
          el(`pres-${id}-t0`, "text", 980, 240, 780, 300, { text: p.title, fontSize: 58, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`pres-${id}-c1`, "rect", 980, 580, 780, 340, { fill: isDark ? "#111827" : "#ffffff", borderRadius: 20 })
        );
        break;

      case 49: // Floating Glass Plaque on Dark Full-Canvas
        slide1Elements.push(
          el(`pres-${id}-im`, "image", 0, 0, 1920, 1080, { src: photo }),
          el(`pres-${id}-scrim`, "rect", 0, 0, 1920, 1080, { fill: "rgba(0,0,0,0.6)", locked: true }),
          el(`pres-${id}-glass`, "rect", 200, 140, 1520, 800, { fill: "rgba(255,255,255,0.06)", stroke: accent, strokeWidth: 2, borderRadius: 32 }),
          el(`pres-${id}-t0`, "text", 260, 280, 1400, 240, { text: p.title, fontSize: 68, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" }),
          el(`pres-${id}-badge`, "rect", 760, 620, 400, 100, { fill: accent, borderRadius: 50 })
        );
        break;
    }

    // Handcraft Slide 2 (Problem & Solution)
    slide2Elements.push(
      el(`pres-${id}-s2-bg`, "rect", 0, 0, 1920, 1080, { fill: bg, locked: true }),
      el(`pres-${id}-s2-t0`, "text", 120, 100, 1680, 100, { text: "THE PROBLEM & MARKET OPPORTUNITY", fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
      el(`pres-${id}-s2-c1`, "rect", 120, 240, 800, 720, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
      el(`pres-${id}-s2-c2`, "rect", 1000, 240, 800, 720, { fill: accent, borderRadius: 16 })
    );

    // Handcraft Slide 3 (Solution Architecture)
    slide3Elements.push(
      el(`pres-${id}-s3-bg`, "rect", 0, 0, 1920, 1080, { fill: bg, locked: true }),
      el(`pres-${id}-s3-t0`, "text", 120, 100, 1680, 100, { text: "PRODUCT ARCHITECTURE & CAPABILITIES", fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
      el(`pres-${id}-s3-p1`, "rect", 120, 240, 520, 720, { fill: isDark ? "#111827" : "#f1f5f9", borderRadius: 16 }),
      el(`pres-${id}-s3-p2`, "rect", 680, 240, 560, 720, { fill: accent, borderRadius: 16 }),
      el(`pres-${id}-s3-p3`, "rect", 1280, 240, 520, 720, { fill: isDark ? "#111827" : "#f1f5f9", borderRadius: 16 })
    );

    // Handcraft Slide 4 (Metrics & KPI Dashboard)
    slide4Elements.push(
      el(`pres-${id}-s4-bg`, "rect", 0, 0, 1920, 1080, { fill: bg, locked: true }),
      el(`pres-${id}-s4-t0`, "text", 120, 100, 1680, 100, { text: "GROWTH METRICS & PERFORMANCE", fontSize: 44, fontFamily: font, fontWeight: "900", fill: accent }),
      el(`pres-${id}-s4-k1`, "rect", 120, 240, 390, 340, { fill: isDark ? "#1e293b" : "#f8fafc", borderRadius: 16 }),
      el(`pres-${id}-s4-k2`, "rect", 550, 240, 390, 340, { fill: accent, borderRadius: 16 }),
      el(`pres-${id}-s4-k3`, "rect", 980, 240, 390, 340, { fill: isDark ? "#1e293b" : "#f8fafc", borderRadius: 16 }),
      el(`pres-${id}-s4-k4`, "rect", 1410, 240, 390, 340, { fill: isDark ? "#1e293b" : "#f8fafc", borderRadius: 16 }),
      el(`pres-${id}-s4-chart`, "rect", 120, 620, 1680, 360, { fill: isDark ? "#111827" : "#ffffff", stroke: "#cbd5e1", strokeWidth: 1, borderRadius: 16 })
    );

    // Handcraft Slide 5 (Roadmap & Next Steps)
    slide5Elements.push(
      el(`pres-${id}-s5-bg`, "rect", 0, 0, 1920, 1080, { fill: bg, locked: true }),
      el(`pres-${id}-s5-t0`, "text", 120, 100, 1680, 100, { text: "STRATEGIC ROADMAP & NEXT STEPS", fontSize: 44, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
      el(`pres-${id}-s5-r1`, "rect", 120, 240, 1680, 220, { fill: accent, borderRadius: 16 }),
      el(`pres-${id}-s5-r2`, "rect", 120, 490, 1680, 220, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
      el(`pres-${id}-s5-r3`, "rect", 120, 740, 1680, 220, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
    );

    presentations.push({
      id,
      name: `Bespoke Presentation ${id}`,
      title: p.title,
      category: "Presentation",
      canvasWidth: 1920,
      canvasHeight: 1080,
      slides: [slide1Elements, slide2Elements, slide3Elements, slide4Elements, slide5Elements],
      elements: slide1Elements,
      tags: ["presentation", "deck", "keynote", font.toLowerCase(), isDark ? "dark" : "light"]
    });
  }

  return presentations;
}
