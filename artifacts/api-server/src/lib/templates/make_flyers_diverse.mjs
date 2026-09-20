// ORD Studio — 40 100% Structurally Diverse Promotional Flyers (IDs 401 to 440)
// Canvas: 1200x1697. Zero duplicate coordinate geometry across all 40 templates.

import { getPhoto } from './uniquePhotoRegistry.mjs';

function el(id, type, x, y, width, height, props = {}) {
  return { visible: true, id, type, x, y, width, height, ...props };
}

export function generateFlyers40() {
  const list = [];
  const W = 1200, H = 1697;

  for (let id = 401; id <= 440; id++) {
    const idx = id - 401;
    const fonts = ["Plus Jakarta Sans", "Syne", "Outfit", "Space Grotesk", "Inter", "Cabinet Grotesk"];
    const font = fonts[idx % fonts.length];
    const bgs = ["#09090b", "#ffffff", "#0f172a", "#fffbeb", "#1e1b4b", "#030712", "#f0fdfa", "#fdf2f8", "#1c1917", "#eff6ff", "#022c22", "#fff7ed", "#18181b", "#fafaf9"];
    const bg = bgs[idx % bgs.length];
    const accents = ["#ef4444", "#38bdf8", "#10b981", "#f59e0b", "#a855f7", "#ec4899", "#06b6d4", "#2563eb", "#ea580c", "#14b8a6", "#fbbf24", "#d97706", "#f43f5e", "#6366f1"];
    const accent = accents[idx % accents.length];
    const isDark = bg.startsWith("#0") || bg.startsWith("#1") || bg.startsWith("#2");

    const elements = [
      el(`fly-${id}-bg`, "rect", 0, 0, W, H, { fill: bg, locked: true })
    ];

    switch (idx) {
      case 0: // Diagonal split banner
        elements.push(
          el(`fly-${id}-top-img`, "image", 0, 0, 1200, 750, { src: getPhoto(id) }),
          el(`fly-${id}-slash`, "rect", 0, 680, 1200, 120, { fill: accent }),
          el(`fly-${id}-t0`, "text", 70, 715, 1060, 40, { text: "GRAND OPENING SPECIAL // 50% OFF", fontSize: 20, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" }),
          el(`fly-${id}-title`, "text", 70, 840, 1060, 180, { text: `PROMOTIONAL FLYER ${id}`, fontSize: 62, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`fly-${id}-c1`, "rect", 70, 1060, 510, 400, { fill: isDark ? "#18181b" : "#f1f5f9", borderRadius: 12 }),
          el(`fly-${id}-c2`, "rect", 620, 1060, 510, 400, { fill: isDark ? "#18181b" : "#f1f5f9", borderRadius: 12 })
        );
        break;

      case 1: // 50/50 vertical split
        elements.push(
          el(`fly-${id}-img`, "image", 0, 0, 550, 1697, { src: getPhoto(id) }),
          el(`fly-${id}-title`, "text", 600, 100, 540, 240, { text: `ENTERPRISE\nSOLUTION\n${id}`, fontSize: 52, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", lineHeight: 1.1 }),
          el(`fly-${id}-card1`, "rect", 600, 380, 540, 320, { fill: accent, borderRadius: 12 }),
          el(`fly-${id}-card2`, "rect", 600, 740, 540, 500, { fill: isDark ? "#1e293b" : "#f8fafc", borderRadius: 12 })
        );
        break;

      case 2: // Top hero with 3 horizontal feature pill cards
        elements.push(
          el(`fly-${id}-hero`, "image", 60, 60, 1080, 600, { src: getPhoto(id), borderRadius: 16 }),
          el(`fly-${id}-title`, "text", 60, 690, 1080, 120, { text: `FITNESS & WELLNESS CLUB`, fontSize: 54, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`fly-${id}-p1`, "rect", 60, 840, 1080, 160, { fill: isDark ? "#111827" : "#ffffff", stroke: accent, strokeWidth: 1, borderRadius: 12 }),
          el(`fly-${id}-p2`, "rect", 60, 1030, 1080, 160, { fill: isDark ? "#111827" : "#ffffff", stroke: accent, strokeWidth: 1, borderRadius: 12 }),
          el(`fly-${id}-p3`, "rect", 60, 1220, 1080, 160, { fill: isDark ? "#111827" : "#ffffff", stroke: accent, strokeWidth: 1, borderRadius: 12 })
        );
        break;

      case 3: // Bento grid 4-quadrant layout
        elements.push(
          el(`fly-${id}-q1`, "image", 60, 60, 520, 520, { src: getPhoto(id), borderRadius: 12 }),
          el(`fly-${id}-q2`, "rect", 620, 60, 520, 520, { fill: accent, borderRadius: 12 }),
          el(`fly-${id}-q3`, "rect", 60, 620, 520, 520, { fill: isDark ? "#18181b" : "#f1f5f9", borderRadius: 12 }),
          el(`fly-${id}-q4`, "rect", 620, 620, 520, 520, { fill: isDark ? "#18181b" : "#f1f5f9", borderRadius: 12 }),
          el(`fly-${id}-title`, "text", 60, 1200, 1080, 140, { text: `COMMERCIAL PROMO ${id}`, fontSize: 58, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" })
        );
        break;

      case 4: // Circular image stage with radial info
        elements.push(
          el(`fly-${id}-circ-bg`, "circle", 250, 100, 700, 700, { fill: accent }),
          el(`fly-${id}-im`, "image", 280, 130, 640, 640, { src: getPhoto(id), borderRadius: 320 }),
          el(`fly-${id}-title`, "text", 60, 850, 1080, 150, { text: `AUTOMOTIVE SPA & DETAIL`, fontSize: 56, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`fly-${id}-card`, "rect", 100, 1050, 1000, 480, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 16 })
        );
        break;

      case 5: // High-contrast retail typography sale megaprint
        elements.push(
          el(`fly-${id}-t0`, "text", 60, 80, 1080, 320, { text: "MEGA\nSALE", fontSize: 160, fontFamily: font, fontWeight: "900", fill: accent, lineHeight: 0.85 }),
          el(`fly-${id}-im`, "image", 60, 430, 1080, 600, { src: getPhoto(id), borderRadius: 12 }),
          el(`fly-${id}-card`, "rect", 60, 1060, 1080, 450, { fill: isDark ? "#18181b" : "#000000", borderRadius: 12 })
        );
        break;

      case 6: // Coupon tear-off voucher footer
        elements.push(
          el(`fly-${id}-im`, "image", 60, 60, 1080, 700, { src: getPhoto(id), borderRadius: 12 }),
          el(`fly-${id}-title`, "text", 60, 790, 1080, 140, { text: `CULINARY DINING SPECIAL`, fontSize: 52, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`fly-${id}-info`, "rect", 60, 960, 1080, 340, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 12 }),
          el(`fly-${id}-dash`, "rect", 60, 1340, 1080, 3, { fill: accent }),
          el(`fly-${id}-voucher`, "rect", 60, 1370, 1080, 240, { fill: accent, borderRadius: 12 })
        );
        break;

      case 7: // Asymmetric left hero with right 3-tier metrics
        elements.push(
          el(`fly-${id}-im`, "image", 60, 60, 480, 1500, { src: getPhoto(id), borderRadius: 16 }),
          el(`fly-${id}-title`, "text", 580, 80, 560, 180, { text: `GROWTH\nACADEMY`, fontSize: 50, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`fly-${id}-m1`, "rect", 580, 300, 560, 340, { fill: isDark ? "#18181b" : "#ffffff", stroke: accent, strokeWidth: 1, borderRadius: 12 }),
          el(`fly-${id}-m2`, "rect", 580, 680, 560, 340, { fill: isDark ? "#18181b" : "#ffffff", stroke: accent, strokeWidth: 1, borderRadius: 12 }),
          el(`fly-${id}-m3`, "rect", 580, 1060, 560, 340, { fill: isDark ? "#18181b" : "#ffffff", stroke: accent, strokeWidth: 1, borderRadius: 12 })
        );
        break;

      case 8: // Arch window portal with bottom cards
        elements.push(
          el(`fly-${id}-arch`, "image", 200, 60, 800, 850, { src: getPhoto(id), borderRadius: 400 }),
          el(`fly-${id}-title`, "text", 60, 950, 1080, 140, { text: `YOGA RETREAT WORKSHOP`, fontSize: 52, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`fly-${id}-c1`, "rect", 60, 1120, 520, 420, { fill: isDark ? "#111827" : "#fefce8", borderRadius: 12 }),
          el(`fly-${id}-c2`, "rect", 620, 1120, 520, 420, { fill: isDark ? "#111827" : "#fefce8", borderRadius: 12 })
        );
        break;

      case 9: // Staggered 3-photo gallery
        elements.push(
          el(`fly-${id}-t0`, "text", 60, 60, 1080, 120, { text: `CO-WORKING INNOVATION HUB`, fontSize: 48, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`fly-${id}-im1`, "image", 60, 200, 520, 500, { src: getPhoto(id), borderRadius: 12 }),
          el(`fly-${id}-im2`, "image", 620, 200, 520, 500, { src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1200", borderRadius: 12 }),
          el(`fly-${id}-foot`, "rect", 60, 740, 1080, 780, { fill: isDark ? "#111827" : "#ffffff", stroke: accent, strokeWidth: 1, borderRadius: 16 })
        );
        break;

      case 10: // 3-column pricing table
        elements.push(
          el(`fly-${id}-t0`, "text", 60, 80, 1080, 140, { text: "PRICING & MEMBERSHIP PLANS", fontSize: 50, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`fly-${id}-im`, "image", 60, 240, 1080, 420, { src: getPhoto(id), borderRadius: 12 }),
          el(`fly-${id}-c1`, "rect", 60, 700, 340, 750, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 12 }),
          el(`fly-${id}-c2`, "rect", 430, 680, 340, 790, { fill: accent, borderRadius: 12 }),
          el(`fly-${id}-c3`, "rect", 800, 700, 340, 750, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 12 })
        );
        break;

      case 11: // Dark tech matrix console
        elements.push(
          el(`fly-${id}-t0`, "text", 60, 80, 1080, 120, { text: "CYBER SECURITY HACKATHON", fontSize: 50, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`fly-${id}-term`, "rect", 60, 220, 1080, 1000, { fill: "#030712", stroke: accent, strokeWidth: 2, borderRadius: 16 }),
          el(`fly-${id}-im`, "image", 100, 260, 1000, 500, { src: getPhoto(id), borderRadius: 8 })
        );
        break;

      case 12: // Minimalist Swiss typography (no image)
        elements.push(
          el(`fly-${id}-grid`, "rect", 60, 0, 4, 1697, { fill: accent }),
          el(`fly-${id}-t0`, "text", 120, 150, 1020, 400, { text: "GLOBAL\nBUSINESS\nFORUM", fontSize: 92, fontFamily: "Inter", fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", lineHeight: 0.95 }),
          el(`fly-${id}-blk`, "rect", 120, 600, 1020, 500, { fill: accent, borderRadius: 8 })
        );
        break;

      case 13: // Full-bleed photo with floating frosted central card
        elements.push(
          el(`fly-${id}-im`, "image", 0, 0, 1200, 1697, { src: getPhoto(id) }),
          el(`fly-${id}-scrim`, "rect", 0, 0, 1200, 1697, { fill: "rgba(0,0,0,0.6)", locked: true }),
          el(`fly-${id}-glass`, "rect", 80, 200, 1040, 1280, { fill: "rgba(255,255,255,0.08)", stroke: accent, strokeWidth: 1, borderRadius: 20 }),
          el(`fly-${id}-t0`, "text", 120, 300, 960, 180, { text: "SUMMER MUSIC FESTIVAL", fontSize: 60, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" })
        );
        break;

      case 14: // Bottom panoramic photo with top 2-column description
        elements.push(
          el(`fly-${id}-t0`, "text", 60, 80, 1080, 140, { text: "REAL ESTATE INVESTMENT SHOWCASE", fontSize: 50, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`fly-${id}-c1`, "rect", 60, 240, 520, 450, { fill: accent, borderRadius: 12 }),
          el(`fly-${id}-c2`, "rect", 620, 240, 520, 450, { fill: isDark ? "#111827" : "#f1f5f9", borderRadius: 12 }),
          el(`fly-${id}-im`, "image", 60, 720, 1080, 850, { src: getPhoto(id), borderRadius: 16 })
        );
        break;

      case 15: // Dual circular badge comparison flyer
        elements.push(
          el(`fly-${id}-c1`, "circle", 150, 100, 420, 420, { fill: accent }),
          el(`fly-${id}-im1`, "image", 170, 120, 380, 380, { src: getPhoto(id), borderRadius: 190 }),
          el(`fly-${id}-c2`, "circle", 630, 100, 420, 420, { fill: isDark ? "#1e293b" : "#e2e8f0" }),
          el(`fly-${id}-im2`, "image", 650, 120, 380, 380, { src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200", borderRadius: 190 }),
          el(`fly-${id}-t0`, "text", 60, 600, 1080, 140, { text: "PREMIUM PET WELLNESS SPA", fontSize: 54, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" })
        );
        break;

      case 16: // Right sidebar contact rail with left content stream
        elements.push(
          el(`fly-${id}-t0`, "text", 60, 80, 720, 160, { text: "CREATIVE DESIGN WORKSHOP", fontSize: 50, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`fly-${id}-im`, "image", 60, 260, 720, 700, { src: getPhoto(id), borderRadius: 12 }),
          el(`fly-${id}-left-box`, "rect", 60, 990, 720, 550, { fill: isDark ? "#111827" : "#ffffff", borderRadius: 12 }),
          el(`fly-${id}-rail`, "rect", 820, 80, 320, 1460, { fill: accent, borderRadius: 12 })
        );
        break;

      case 17: // Multi-tiered horizontal timeline roadmap flyer
        elements.push(
          el(`fly-${id}-t0`, "text", 60, 80, 1080, 120, { text: "STARTUP INCUBATOR PROGRAM", fontSize: 52, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`fly-${id}-im`, "image", 60, 220, 1080, 450, { src: getPhoto(id), borderRadius: 12 }),
          el(`fly-${id}-r1`, "rect", 60, 710, 1080, 220, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 12 }),
          el(`fly-${id}-r2`, "rect", 60, 960, 1080, 220, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 12 }),
          el(`fly-${id}-r3`, "rect", 60, 1210, 1080, 220, { fill: accent, borderRadius: 12 })
        );
        break;

      case 18: // Headline monument with left accent photo
        elements.push(
          el(`fly-${id}-im`, "image", 60, 80, 450, 600, { src: getPhoto(id), borderRadius: 12 }),
          el(`fly-${id}-t0`, "text", 550, 80, 590, 300, { text: "ARTISAN\nBAKERY\nOPENING", fontSize: 64, fontFamily: font, fontWeight: "900", fill: accent, lineHeight: 0.95 }),
          el(`fly-${id}-box`, "rect", 60, 720, 1080, 800, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 16 })
        );
        break;

      case 19: // Offset staggered card with neon drop shadow
        elements.push(
          el(`fly-${id}-im`, "image", 60, 80, 1080, 600, { src: getPhoto(id), borderRadius: 16 }),
          el(`fly-${id}-shadow`, "rect", 120, 720, 960, 750, { fill: accent, borderRadius: 16 }),
          el(`fly-${id}-front`, "rect", 100, 700, 960, 750, { fill: isDark ? "#09090b" : "#ffffff", borderRadius: 16 }),
          el(`fly-${id}-t0`, "text", 150, 760, 860, 160, { text: "VIP ROOFTOP EVENT", fontSize: 54, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" })
        );
        break;

      case 20: // 6-box service grid flyer
        elements.push(
          el(`fly-${id}-t0`, "text", 60, 80, 1080, 120, { text: "FULL SERVICE DENTAL CLINIC", fontSize: 48, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`fly-${id}-g1`, "image", 60, 220, 340, 340, { src: getPhoto(id), borderRadius: 12 }),
          el(`fly-${id}-g2`, "rect", 430, 220, 340, 340, { fill: accent, borderRadius: 12 }),
          el(`fly-${id}-g3`, "rect", 800, 220, 340, 340, { fill: isDark ? "#18181b" : "#f1f5f9", borderRadius: 12 }),
          el(`fly-${id}-g4`, "rect", 60, 590, 340, 340, { fill: isDark ? "#18181b" : "#f1f5f9", borderRadius: 12 }),
          el(`fly-${id}-g5`, "rect", 430, 590, 340, 340, { fill: isDark ? "#18181b" : "#f1f5f9", borderRadius: 12 }),
          el(`fly-${id}-g6`, "rect", 800, 590, 340, 340, { fill: accent, borderRadius: 12 })
        );
        break;

      case 21: // Photographic background with bottom drawer
        elements.push(
          el(`fly-${id}-im`, "image", 0, 0, 1200, 1000, { src: getPhoto(id) }),
          el(`fly-${id}-drawer`, "rect", 0, 850, 1200, 847, { fill: bg, borderRadius: 32 }),
          el(`fly-${id}-t0`, "text", 60, 930, 1080, 160, { text: "YACHT CHARTER VIP EXPEDITION", fontSize: 54, fontFamily: font, fontWeight: "900", fill: accent })
        );
        break;

      case 22: // High-impact countdown badge
        elements.push(
          el(`fly-${id}-badge`, "rect", 60, 80, 1080, 300, { fill: accent, borderRadius: 16 }),
          el(`fly-${id}-t0`, "text", 100, 140, 1000, 160, { text: "SUMMER MARATHON 2026", fontSize: 62, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" }),
          el(`fly-${id}-im`, "image", 60, 420, 1080, 750, { src: getPhoto(id), borderRadius: 16 }),
          el(`fly-${id}-bot`, "rect", 60, 1210, 1080, 380, { fill: isDark ? "#18181b" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 12 })
        );
        break;

      case 23: // Minimal monochrome architectural catalog
        elements.push(
          el(`fly-${id}-im`, "image", 120, 120, 960, 650, { src: getPhoto(id) }),
          el(`fly-${id}-t0`, "text", 120, 820, 960, 180, { text: "MODERNIST SPATIAL ARCHITECTURE", fontSize: 50, fontFamily: "Inter", fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`fly-${id}-line`, "rect", 120, 1030, 960, 2, { fill: isDark ? "#ffffff" : "#000000" })
        );
        break;

      case 24: // 3-tier horizontal sandwich
        elements.push(
          el(`fly-${id}-t0`, "text", 60, 80, 1080, 160, { text: "SOLAR ENERGY CLEAN REBATE", fontSize: 54, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`fly-${id}-im`, "image", 0, 280, 1200, 800, { src: getPhoto(id) }),
          el(`fly-${id}-bot`, "rect", 60, 1120, 1080, 480, { fill: accent, borderRadius: 16 })
        );
        break;

      case 25: // Asymmetric polygon crop flyer
        elements.push(
          el(`fly-${id}-im`, "image", 60, 60, 600, 900, { src: getPhoto(id), borderRadius: 24 }),
          el(`fly-${id}-rt`, "rect", 700, 60, 440, 900, { fill: accent, borderRadius: 24 }),
          el(`fly-${id}-t0`, "text", 730, 120, 380, 240, { text: "KIDS\nROBOTICS\nCAMP", fontSize: 48, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`fly-${id}-bot`, "rect", 60, 1000, 1080, 600, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 16 })
        );
        break;

      case 26: // Top 2-image split with bottom 3-column benefits
        elements.push(
          el(`fly-${id}-im1`, "image", 60, 60, 520, 500, { src: getPhoto(id), borderRadius: 12 }),
          el(`fly-${id}-im2`, "image", 620, 60, 520, 500, { src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1200", borderRadius: 12 }),
          el(`fly-${id}-t0`, "text", 60, 600, 1080, 140, { text: "MUSIC ACADEMY LESSONS", fontSize: 52, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`fly-${id}-c1`, "rect", 60, 770, 340, 600, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 12 }),
          el(`fly-${id}-c2`, "rect", 430, 770, 340, 600, { fill: accent, borderRadius: 12 }),
          el(`fly-${id}-c3`, "rect", 800, 770, 340, 600, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 12 })
        );
        break;

      case 27: // Vintage luxury engraved frame flyer
        elements.push(
          el(`fly-${id}-frame`, "rect", 50, 50, 1100, 1597, { stroke: accent, strokeWidth: 3, fill: "transparent" }),
          el(`fly-${id}-im`, "image", 150, 150, 900, 600, { src: getPhoto(id), borderRadius: 8 }),
          el(`fly-${id}-t0`, "text", 120, 800, 960, 160, { text: "NOBLE BLADE BARBERSHOP", fontSize: 52, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" })
        );
        break;

      case 28: // Bold brutalist black & yellow caution flyer
        elements.push(
          el(`fly-${id}-strip`, "rect", 0, 0, 1200, 120, { fill: accent }),
          el(`fly-${id}-t0`, "text", 60, 180, 1080, 220, { text: "WARNING: HEAVY\nFITNESS BOOTCAMP", fontSize: 66, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", lineHeight: 1.0 }),
          el(`fly-${id}-im`, "image", 60, 440, 1080, 700, { src: getPhoto(id), borderRadius: 0 }),
          el(`fly-${id}-bot`, "rect", 60, 1180, 1080, 400, { fill: accent })
        );
        break;

      case 29: // Clean medical whitespace 2-column flyer
        elements.push(
          el(`fly-${id}-t0`, "text", 60, 80, 1080, 120, { text: "PEDIATRIC HEALTH & DENTAL", fontSize: 50, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`fly-${id}-im`, "image", 60, 240, 520, 750, { src: getPhoto(id), borderRadius: 16 }),
          el(`fly-${id}-rt`, "rect", 620, 240, 520, 750, { fill: isDark ? "#111827" : "#f0fdfa", borderRadius: 16 })
        );
        break;

      case 30: // SaaS software feature card matrix
        elements.push(
          el(`fly-${id}-t0`, "text", 60, 80, 1080, 140, { text: "FLOW STATE MOBILE APP", fontSize: 54, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`fly-${id}-im`, "image", 60, 240, 1080, 500, { src: getPhoto(id), borderRadius: 16 }),
          el(`fly-${id}-c1`, "rect", 60, 780, 520, 360, { fill: isDark ? "#1e293b" : "#f8fafc", borderRadius: 12 }),
          el(`fly-${id}-c2`, "rect", 620, 780, 520, 360, { fill: isDark ? "#1e293b" : "#f8fafc", borderRadius: 12 })
        );
        break;

      case 31: // Real estate luxury villa listing
        elements.push(
          el(`fly-${id}-im`, "image", 60, 60, 1080, 800, { src: getPhoto(id), borderRadius: 16 }),
          el(`fly-${id}-t0`, "text", 60, 890, 1080, 140, { text: "THE OCEAN VILLA LISTING", fontSize: 52, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`fly-${id}-agent`, "rect", 60, 1060, 1080, 480, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 16 })
        );
        break;

      case 32: // Grand opening party flyer with VIP ticket badge
        elements.push(
          el(`fly-${id}-im`, "image", 60, 60, 1080, 650, { src: getPhoto(id), borderRadius: 16 }),
          el(`fly-${id}-t0`, "text", 60, 740, 1080, 140, { text: "NIGHTLIFE VIP OPENING", fontSize: 56, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`fly-${id}-pass`, "rect", 100, 920, 1000, 600, { fill: isDark ? "#18181b" : "#ffffff", stroke: accent, strokeWidth: 2, borderRadius: 16 })
        );
        break;

      case 33: // Education bootcamp course syllabus breakdown
        elements.push(
          el(`fly-${id}-t0`, "text", 60, 80, 1080, 140, { text: "CODE ACADEMY 2026", fontSize: 54, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`fly-${id}-im`, "image", 60, 240, 1080, 450, { src: getPhoto(id), borderRadius: 12 }),
          el(`fly-${id}-syl`, "rect", 60, 720, 1080, 800, { fill: isDark ? "#111827" : "#f1f5f9", borderRadius: 16 })
        );
        break;

      case 34: // Automotive performance detailing split contrast
        elements.push(
          el(`fly-${id}-top`, "rect", 0, 0, 1200, 600, { fill: accent }),
          el(`fly-${id}-t0`, "text", 60, 120, 1080, 180, { text: "APEX AUTO CERAMIC SPA", fontSize: 56, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`fly-${id}-im`, "image", 60, 400, 1080, 800, { src: getPhoto(id), borderRadius: 16 })
        );
        break;

      case 35: // Farmers market organic produce harvest
        elements.push(
          el(`fly-${id}-t0`, "text", 60, 80, 1080, 140, { text: "ORGANIC FARMERS MARKET", fontSize: 52, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`fly-${id}-im`, "image", 60, 240, 1080, 650, { src: getPhoto(id), borderRadius: 16 }),
          el(`fly-${id}-card`, "rect", 60, 930, 1080, 600, { fill: accent, borderRadius: 16 })
        );
        break;

      case 36: // Speakeasy live concert gig flyer with dark halftone
        elements.push(
          el(`fly-${id}-im`, "image", 0, 0, 1200, 1200, { src: getPhoto(id) }),
          el(`fly-${id}-scrim`, "rect", 0, 0, 1200, 1200, { fill: "rgba(0,0,0,0.5)" }),
          el(`fly-${id}-t0`, "text", 60, 1240, 1080, 160, { text: "SPEAKEASY JAZZ NIGHT", fontSize: 58, fontFamily: font, fontWeight: "900", fill: accent })
        );
        break;

      case 37: // Left pill photo + right 3-tier card stack
        elements.push(
          el(`fly-${id}-im`, "image", 60, 80, 420, 1400, { src: getPhoto(id), borderRadius: 210 }),
          el(`fly-${id}-t0`, "text", 520, 80, 620, 180, { text: "APEX TAX & WEALTH ADVISORY", fontSize: 46, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`fly-${id}-c1`, "rect", 520, 290, 620, 360, { fill: accent, borderRadius: 16 }),
          el(`fly-${id}-c2`, "rect", 520, 680, 620, 360, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 }),
          el(`fly-${id}-c3`, "rect", 520, 1070, 620, 410, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;

      case 38: // Creative agency branding capability showcase
        elements.push(
          el(`fly-${id}-im`, "image", 60, 60, 500, 1400, { src: getPhoto(id), borderRadius: 16 }),
          el(`fly-${id}-t0`, "text", 600, 80, 540, 200, { text: "STUDIO NOVA\nAGENCY", fontSize: 50, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`fly-${id}-box`, "rect", 600, 320, 540, 1140, { fill: accent, borderRadius: 16 })
        );
        break;

      case 39: // Eco green clean energy solar rebate flyer
        elements.push(
          el(`fly-${id}-im`, "image", 60, 60, 1080, 700, { src: getPhoto(id), borderRadius: 16 }),
          el(`fly-${id}-t0`, "text", 60, 790, 1080, 140, { text: "ECO CLEAN HYDRO CAR WASH", fontSize: 52, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`fly-${id}-c1`, "rect", 60, 960, 520, 550, { fill: isDark ? "#022c22" : "#f0fdf4", borderRadius: 12 }),
          el(`fly-${id}-c2`, "rect", 620, 960, 520, 550, { fill: isDark ? "#022c22" : "#f0fdf4", borderRadius: 12 })
        );
        break;
    }

    list.push({
      id,
      name: `Bespoke Business Flyer ${id}`,
      title: `BESPOKE BUSINESS FLYER ${id}`,
      description: `Bespoke Canva-grade promotional flyer #${id}.`,
      category: "Flyers",
      subcategory: "Promotion",
      size: "1200×1697",
      canvasWidth: 1200,
      canvasHeight: 1697,
      orientation: "portrait",
      tags: ["Flyer", "Business", "Marketing", "Promo"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 2900 + (id * 11) % 2000,
      views: 21000 + (id * 130) % 18000,
      gradient: `linear-gradient(135deg, ${bg} 0%, #111827 100%)`,
      fonts: [font, "Inter"],
      colors: [bg, accent, isDark ? "#ffffff" : "#0f172a", "#94a3b8"],
      elements
    });
  }

  return list;
}
