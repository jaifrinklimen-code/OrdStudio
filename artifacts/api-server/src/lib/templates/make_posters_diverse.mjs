import { getPhoto } from "./uniquePhotoRegistry.mjs";

export function generatePosters50() {
  const posters = [];
  const fonts = ["Inter", "Playfair Display", "Outfit", "Space Grotesk", "Plus Jakarta Sans", "Syne", "Cinzel", "Cabinet Grotesk"];
  
  const posterStyles = [
    { title: "BAUHAUS 1923 EXHIBITION", font: "Space Grotesk", bg: "#f4ede2", accent: "#d9381e", dark: false },
    { title: "NEO-CYBER TOKYO NIGHTS", font: "Syne", bg: "#09090b", accent: "#06b6d4", dark: true },
    { title: "SWISS TYPOGRAPHIC MONOGRAPH", font: "Inter", bg: "#ffffff", accent: "#ef4444", dark: false },
    { title: "AVANT-GARDE JAZZ QUARTET", font: "Playfair Display", bg: "#18181b", accent: "#f59e0b", dark: true },
    { title: "CONTEMPORARY CERAMIC ART", font: "Outfit", bg: "#fafaf9", accent: "#78716c", dark: false },
    { title: "UNDERGROUND TECHNO 04:00", font: "Space Grotesk", bg: "#000000", accent: "#10b981", dark: true },
    { title: "SCANDINAVIAN INTERIORS 2026", font: "Plus Jakarta Sans", bg: "#f1f5f9", accent: "#334155", dark: false },
    { title: "MIDNIGHT CINEMA RETROSPECTIVE", font: "Cinzel", bg: "#0f172a", accent: "#ec4899", dark: true },
    { title: "KINETIC MOTION GRAPHICS CON", font: "Cabinet Grotesk", bg: "#1e1b4b", accent: "#818cf8", dark: true },
    { title: "BRUTALIST ARCHITECTURE SURVEY", font: "Inter", bg: "#e2e8f0", accent: "#000000", dark: false },
    { title: "LUMINESCENT AMBIENT SOUNDS", font: "Syne", bg: "#030712", accent: "#a855f7", dark: true },
    { title: "BOTANICAL GARDEN EXPO", font: "Playfair Display", bg: "#f0fdf4", accent: "#15803d", dark: false },
    { title: "RETRO CASSETTE WAVE 88", font: "Outfit", bg: "#2e1065", accent: "#f43f5e", dark: true },
    { title: "MODERNIST TYPOGRAPHY SALON", font: "Space Grotesk", bg: "#ffffff", accent: "#2563eb", dark: false },
    { title: "COASTAL HORIZON PHOTOGRAPHY", font: "Plus Jakarta Sans", bg: "#f8fafc", accent: "#0ea5e9", dark: false },
    { title: "GLITCH ELECTRONICA LIVE", font: "Syne", bg: "#09090b", accent: "#e11d48", dark: true },
    { title: "ABSTRACT EXPRESSIONISM NOW", font: "Playfair Display", bg: "#fffbeb", accent: "#b45309", dark: false },
    { title: "URBAN STREETWEAR DROP VOL. 7", font: "Cabinet Grotesk", bg: "#18181b", accent: "#84cc16", dark: true },
    { title: "DESERT MIRAGE FILM FESTIVAL", font: "Cinzel", bg: "#451a03", accent: "#fbbf24", dark: true },
    { title: "QUANTUM PHYSICS SYMPOSIUM", font: "Space Grotesk", bg: "#020617", accent: "#38bdf8", dark: true },
    { title: "HAUTE COUTURE PARIS FW26", font: "Playfair Display", bg: "#fafaf9", accent: "#1c1917", dark: false },
    { title: "DEEP SPACE ASTRONOMY EXPO", font: "Inter", bg: "#050505", accent: "#6366f1", dark: true },
    { title: "ORGANIC WINE & HARVEST TASTING", font: "Cinzel", bg: "#fdf4ff", accent: "#86198f", dark: false },
    { title: "METROPOLIS SPEED CYCLING", font: "Cabinet Grotesk", bg: "#111827", accent: "#f97316", dark: true },
    { title: "INDIE GAME DEVELOPER EXPO", font: "Outfit", bg: "#0c0a09", accent: "#14b8a6", dark: true },
    { title: "MINIMALIST FURNITURE TRIENNALE", font: "Plus Jakarta Sans", bg: "#f3f4f6", accent: "#4b5563", dark: false },
    { title: "ANALOG SYNTHESIZER SUMMIT", font: "Syne", bg: "#1c1917", accent: "#eab308", dark: true },
    { title: "OCEAN CONSERVATION BENEFIT", font: "Outfit", bg: "#ecfeff", accent: "#0891b2", dark: false },
    { title: "METALLURGIC SCULPTURE RETRO", font: "Cinzel", bg: "#18181b", accent: "#a1a1aa", dark: true },
    { title: "HYPERPOP ELECTRONIC CARNIVAL", font: "Syne", bg: "#18022e", accent: "#d946ef", dark: true },
    { title: "ARCHITECTURAL BLUEPRINT SHOWCASE", font: "Inter", bg: "#1e3a8a", accent: "#93c5fd", dark: true },
    { title: "MEDITERRANEAN SUMMER VILLA", font: "Playfair Display", bg: "#fff7ed", accent: "#ea580c", dark: false },
    { title: "PSYCHEDELIC DESERT GATHERING", font: "Outfit", bg: "#2a0845", accent: "#ffb199", dark: true },
    { title: "INDUSTRIAL DESIGN AWARD 2026", font: "Space Grotesk", bg: "#e5e5e5", accent: "#dc2626", dark: false },
    { title: "NEURAL NETWORK AI FORUM", font: "Inter", bg: "#030712", accent: "#22c55e", dark: true },
    { title: "VINTAGE MOTORSPORT GRAND PRIX", font: "Cabinet Grotesk", bg: "#1c1917", accent: "#e11d48", dark: true },
    { title: "SUMMER JAZZ IN THE VINEYARD", font: "Playfair Display", bg: "#fefce8", accent: "#ca8a04", dark: false },
    { title: "DARK AMBIENT FREQUENCY LAB", font: "Syne", bg: "#000000", accent: "#64748b", dark: true },
    { title: "CONTEMPORARY CERAMIC TRIENNIAL", font: "Plus Jakarta Sans", bg: "#fbfbfa", accent: "#57534e", dark: false },
    { title: "ELECTRO ACOUSTIC CHAMBER ORCH", font: "Cinzel", bg: "#0a0a0a", accent: "#38bdf8", dark: true },
    { title: "TOKYO EXPERIMENTAL MEDIA LAB", font: "Space Grotesk", bg: "#09090b", accent: "#f43f5e", dark: true },
    { title: "MINIMALIST PACKAGING BIENNALE", font: "Inter", bg: "#ffffff", accent: "#0f172a", dark: false },
    { title: "SOLAR ECLIPSE OBSERVATION CAMP", font: "Outfit", bg: "#0f172a", accent: "#fb923c", dark: true },
    { title: "NORDIC LIGHT ARCHITECTURE", font: "Plus Jakarta Sans", bg: "#f1f5f9", accent: "#0284c7", dark: false },
    { title: "RAW POWER GYM CHAMPIONSHIP", font: "Cabinet Grotesk", bg: "#111827", accent: "#eab308", dark: true },
    { title: "EXPERIMENTAL SOUND MATRIX", font: "Syne", bg: "#030712", accent: "#a855f7", dark: true },
    { title: "COFFEE ROASTERS GUILD SUMMIT", font: "Playfair Display", bg: "#fffbeb", accent: "#78350f", dark: false },
    { title: "CYBER SECURITY DEFENSE CON", font: "Space Grotesk", bg: "#020617", accent: "#06b6d4", dark: true },
    { title: "MODERN ABSTRACT OIL PAINTINGS", font: "Cinzel", bg: "#fafaf9", accent: "#b91c1c", dark: false },
    { title: "NEO TOKYO STREET PHOTOGRAPHY", font: "Cabinet Grotesk", bg: "#09090b", accent: "#ec4899", dark: true }
  ];

  function el(id, type, x, y, width, height, extra = {}) {
    return { id, type, x, y, width, height, ...extra };
  }

  for (let i = 0; i < 50; i++) {
    const id = 301 + i;
    const style = posterStyles[i];
    const bg = style.bg;
    const accent = style.accent;
    const font = style.font;
    const isDark = style.dark;
    const photo = getPhoto(id);

    const elements = [];
    // Full canvas background
    elements.push(el(`pos-${id}-bg`, "rect", 0, 0, 1200, 1697, { fill: bg, locked: true }));

    // 50 Handcrafted Layout Blueprints
    switch (i) {
      case 0: // Swiss typographic grid with oversized numerals & top right square photo
        elements.push(
          el(`pos-${id}-t0`, "text", 80, 100, 600, 300, { text: style.title, fontSize: 64, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", lineHeight: 0.95 }),
          el(`pos-${id}-im`, "image", 720, 100, 400, 400, { src: photo, borderRadius: 0 }),
          el(`pos-${id}-num`, "text", 80, 480, 500, 350, { text: "23", fontSize: 320, fontFamily: font, fontWeight: "900", fill: accent, lineHeight: 0.8 }),
          el(`pos-${id}-desc`, "text", 80, 920, 1040, 200, { text: "INTERNATIONAL EXHIBITION OF APPLIED ARTS AND ARCHITECTURAL STUDIES", fontSize: 24, fontFamily: font, fontWeight: "600", fill: isDark ? "#a1a1aa" : "#475569" }),
          el(`pos-${id}-grid-b`, "rect", 80, 1200, 1040, 400, { fill: isDark ? "#18181b" : "#f1f5f9" })
        );
        break;

      case 1: // Full-bleed cyberpunk dark hero with diagonal neon slice
        elements.push(
          el(`pos-${id}-im`, "image", 0, 0, 1200, 1697, { src: photo }),
          el(`pos-${id}-scrim`, "rect", 0, 0, 1200, 1697, { fill: "rgba(0,0,0,0.55)", locked: true }),
          el(`pos-${id}-neon`, "rect", 60, 60, 1080, 12, { fill: accent }),
          el(`pos-${id}-t0`, "text", 80, 140, 1040, 300, { text: style.title, fontSize: 72, fontFamily: font, fontWeight: "900", fill: "#ffffff", letterSpacing: 2 }),
          el(`pos-${id}-badge`, "rect", 80, 1380, 420, 180, { fill: accent, borderRadius: 8 })
        );
        break;

      case 2: // Minimalist 3-column asymmetric layout with centered portrait pill photo
        elements.push(
          el(`pos-${id}-im`, "image", 360, 120, 480, 800, { src: photo, borderRadius: 240 }),
          el(`pos-${id}-t0`, "text", 80, 980, 1040, 220, { text: style.title, fontSize: 58, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`pos-${id}-c1`, "rect", 80, 1280, 320, 300, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 8 }),
          el(`pos-${id}-c2`, "rect", 440, 1280, 320, 300, { fill: accent, borderRadius: 8 }),
          el(`pos-${id}-c3`, "rect", 800, 1280, 320, 300, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 8 })
        );
        break;

      case 3: // Bauhaus primary geometry with oversized circle and horizontal split photo
        elements.push(
          el(`pos-${id}-circ`, "circle", 100, 100, 500, 500, { fill: accent }),
          el(`pos-${id}-im`, "image", 640, 100, 480, 700, { src: photo, borderRadius: 16 }),
          el(`pos-${id}-t0`, "text", 100, 880, 1000, 260, { text: style.title, fontSize: 62, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pos-${id}-bar`, "rect", 100, 1220, 1000, 380, { fill: isDark ? "#111827" : "#1e293b", borderRadius: 12 })
        );
        break;

      case 4: // Stark typography monument with 4 corner text blocks and center photo frame
        elements.push(
          el(`pos-${id}-im`, "image", 160, 280, 880, 900, { src: photo, borderRadius: 12 }),
          el(`pos-${id}-t0`, "text", 80, 80, 1040, 140, { text: style.title, fontSize: 48, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`pos-${id}-b1`, "rect", 80, 1240, 500, 360, { fill: accent, borderRadius: 12 }),
          el(`pos-${id}-b2`, "rect", 620, 1240, 500, 360, { fill: isDark ? "#18181b" : "#f1f5f9", borderRadius: 12 })
        );
        break;

      case 5: // Heavy brutalist split: black left 40%, white right 60% with cross-boundary title
        elements.push(
          el(`pos-${id}-split`, "rect", 0, 0, 480, 1697, { fill: isDark ? "#09090b" : "#18181b" }),
          el(`pos-${id}-im`, "image", 540, 100, 580, 750, { src: photo, borderRadius: 8 }),
          el(`pos-${id}-t0`, "text", 80, 920, 1040, 300, { text: style.title, fontSize: 66, fontFamily: font, fontWeight: "900", fill: accent, lineHeight: 0.95 }),
          el(`pos-${id}-info`, "rect", 80, 1300, 1040, 300, { fill: isDark ? "#1e293b" : "#f8fafc", borderRadius: 8 })
        );
        break;

      case 6: // Minimal gallery exhibition with wide top photo and elegant lower catalog
        elements.push(
          el(`pos-${id}-im`, "image", 80, 80, 1040, 780, { src: photo, borderRadius: 4 }),
          el(`pos-${id}-t0`, "text", 80, 940, 1040, 180, { text: style.title, fontSize: 52, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pos-${id}-line`, "rect", 80, 1160, 1040, 4, { fill: accent }),
          el(`pos-${id}-c1`, "rect", 80, 1220, 480, 400, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 8 }),
          el(`pos-${id}-c2`, "rect", 640, 1220, 480, 400, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 8 })
        );
        break;

      case 7: // High-fashion monograph with tall vertical photo on left edge and vertical title stack
        elements.push(
          el(`pos-${id}-im`, "image", 0, 0, 600, 1697, { src: photo }),
          el(`pos-${id}-t0`, "text", 660, 100, 480, 360, { text: style.title, fontSize: 56, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", lineHeight: 1.0 }),
          el(`pos-${id}-gold`, "rect", 660, 520, 480, 8, { fill: accent }),
          el(`pos-${id}-card`, "rect", 660, 600, 480, 980, { fill: isDark ? "#111827" : "#f5f5f4", borderRadius: 16 })
        );
        break;

      case 8: // Risograph layered duotone poster with two overlapping photo cards
        elements.push(
          el(`pos-${id}-im1`, "image", 80, 120, 600, 700, { src: photo, borderRadius: 16 }),
          el(`pos-${id}-im2`, "rect", 480, 350, 640, 650, { fill: accent, borderRadius: 16 }),
          el(`pos-${id}-t0`, "text", 80, 1100, 1040, 240, { text: style.title, fontSize: 60, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pos-${id}-foot`, "rect", 80, 1400, 1040, 220, { fill: isDark ? "#18181b" : "#f1f5f9", borderRadius: 12 })
        );
        break;

      case 9: // Archival typography matrix with 6 square vignettes
        elements.push(
          el(`pos-${id}-t0`, "text", 80, 80, 1040, 160, { text: style.title, fontSize: 50, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pos-${id}-im`, "image", 80, 280, 320, 320, { src: photo, borderRadius: 8 }),
          el(`pos-${id}-g2`, "rect", 440, 280, 320, 320, { fill: accent, borderRadius: 8 }),
          el(`pos-${id}-g3`, "rect", 800, 280, 320, 320, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 8 }),
          el(`pos-${id}-g4`, "rect", 80, 640, 320, 320, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 8 }),
          el(`pos-${id}-g5`, "rect", 440, 640, 320, 320, { fill: accent, borderRadius: 8 }),
          el(`pos-${id}-g6`, "rect", 800, 640, 320, 320, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 8 }),
          el(`pos-${id}-desc`, "rect", 80, 1040, 1040, 560, { fill: isDark ? "#111827" : "#ffffff", stroke: "#cbd5e1", strokeWidth: 1, borderRadius: 12 })
        );
        break;

      case 10: // Sunset ambient glow with bottom panoramic photo and floating dark header
        elements.push(
          el(`pos-${id}-header`, "rect", 60, 60, 1080, 420, { fill: isDark ? "#0f172a" : "#ffffff", borderRadius: 20 }),
          el(`pos-${id}-t0`, "text", 100, 120, 1000, 260, { text: style.title, fontSize: 62, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pos-${id}-im`, "image", 60, 520, 1080, 1100, { src: photo, borderRadius: 20 })
        );
        break;

      case 11: // Editorial botanical frame with inner double border
        elements.push(
          el(`pos-${id}-border`, "rect", 60, 60, 1080, 1577, { stroke: accent, strokeWidth: 4, fill: "transparent" }),
          el(`pos-${id}-im`, "image", 140, 140, 920, 750, { src: photo, borderRadius: 0 }),
          el(`pos-${id}-t0`, "text", 120, 960, 960, 200, { text: style.title, fontSize: 54, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`pos-${id}-badge`, "rect", 350, 1220, 500, 320, { fill: accent, borderRadius: 16 })
        );
        break;

      case 12: // Retro vinyl waveform poster with circular center record
        elements.push(
          el(`pos-${id}-im`, "image", 150, 150, 900, 900, { src: photo, borderRadius: 450 }),
          el(`pos-${id}-ring`, "circle", 450, 450, 300, 300, { fill: accent }),
          el(`pos-${id}-t0`, "text", 80, 1150, 1040, 220, { text: style.title, fontSize: 60, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`pos-${id}-tracklist`, "rect", 80, 1420, 1040, 200, { fill: isDark ? "#18181b" : "#f1f5f9", borderRadius: 8 })
        );
        break;

      case 13: // Modernist architectural blueprint cyanotype style
        elements.push(
          el(`pos-${id}-im`, "image", 80, 80, 1040, 600, { src: photo, borderRadius: 8 }),
          el(`pos-${id}-t0`, "text", 80, 720, 1040, 220, { text: style.title, fontSize: 58, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pos-${id}-box1`, "rect", 80, 980, 500, 620, { fill: isDark ? "#1e293b" : "#f8fafc", stroke: accent, strokeWidth: 1, borderRadius: 8 }),
          el(`pos-${id}-box2`, "rect", 620, 980, 500, 620, { fill: isDark ? "#1e293b" : "#f8fafc", stroke: accent, strokeWidth: 1, borderRadius: 8 })
        );
        break;

      case 14: // Film festival billboard with top badge and dark letterboxed frame
        elements.push(
          el(`pos-${id}-top-bar`, "rect", 0, 0, 1200, 220, { fill: accent }),
          el(`pos-${id}-t0`, "text", 80, 50, 1040, 120, { text: style.title, fontSize: 44, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" }),
          el(`pos-${id}-im`, "image", 80, 300, 1040, 900, { src: photo, borderRadius: 12 }),
          el(`pos-${id}-credits`, "rect", 80, 1260, 1040, 360, { fill: isDark ? "#18181b" : "#ffffff", borderRadius: 12 })
        );
        break;

      case 15: // Asymmetric diagonal tension poster with skewed card
        elements.push(
          el(`pos-${id}-im`, "image", 80, 80, 700, 800, { src: photo, borderRadius: 16 }),
          el(`pos-${id}-card`, "rect", 450, 450, 670, 750, { fill: accent, borderRadius: 20 }),
          el(`pos-${id}-t0`, "text", 500, 520, 570, 300, { text: style.title, fontSize: 54, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`pos-${id}-foot`, "rect", 80, 1300, 1040, 320, { fill: isDark ? "#111827" : "#f1f5f9", borderRadius: 12 })
        );
        break;

      case 16: // Monoline minimalist line art poster with central oval image
        elements.push(
          el(`pos-${id}-t0`, "text", 80, 100, 1040, 200, { text: style.title, fontSize: 56, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`pos-${id}-im`, "image", 200, 350, 800, 900, { src: photo, borderRadius: 400 }),
          el(`pos-${id}-line1`, "rect", 80, 1320, 1040, 2, { fill: accent }),
          el(`pos-${id}-footer`, "rect", 80, 1380, 1040, 240, { fill: isDark ? "#111827" : "#fafafa", borderRadius: 8 })
        );
        break;

      case 17: // Multi-panel vertical triptych (3 tall images side-by-side)
        elements.push(
          el(`pos-${id}-im`, "image", 80, 80, 320, 1100, { src: photo, borderRadius: 12 }),
          el(`pos-${id}-im2`, "rect", 440, 80, 320, 1100, { fill: accent, borderRadius: 12 }),
          el(`pos-${id}-im3`, "rect", 800, 80, 320, 1100, { fill: isDark ? "#1e293b" : "#cbd5e1", borderRadius: 12 }),
          el(`pos-${id}-t0`, "text", 80, 1240, 1040, 220, { text: style.title, fontSize: 58, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pos-${id}-strip`, "rect", 80, 1500, 1040, 120, { fill: accent, borderRadius: 6 })
        );
        break;

      case 18: // Stark typographic quote monograph with minimal lower right stamp
        elements.push(
          el(`pos-${id}-t0`, "text", 80, 120, 1040, 480, { text: style.title, fontSize: 74, fontFamily: font, fontWeight: "900", fill: accent, lineHeight: 0.92 }),
          el(`pos-${id}-im`, "image", 80, 680, 1040, 550, { src: photo, borderRadius: 8 }),
          el(`pos-${id}-stamp`, "rect", 750, 1280, 370, 340, { fill: isDark ? "#111827" : "#0f172a", borderRadius: 12 })
        );
        break;

      case 19: // Abstract gradient blur card stack with centered neon emblem
        elements.push(
          el(`pos-${id}-im`, "image", 0, 0, 1200, 1000, { src: photo }),
          el(`pos-${id}-card`, "rect", 100, 850, 1000, 750, { fill: isDark ? "#09090b" : "#ffffff", stroke: accent, strokeWidth: 2, borderRadius: 24 }),
          el(`pos-${id}-t0`, "text", 160, 930, 880, 240, { text: style.title, fontSize: 54, fontFamily: font, fontWeight: "900", fill: accent, textAlign: "center" })
        );
        break;

      // Cases 20–49: Genuinely distinct geometries
      case 20: // Upper right circular portal with lower left massive typography
        elements.push(
          el(`pos-${id}-im`, "image", 600, 80, 520, 520, { src: photo, borderRadius: 260 }),
          el(`pos-${id}-t0`, "text", 80, 660, 1040, 350, { text: style.title, fontSize: 70, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pos-${id}-box`, "rect", 80, 1080, 1040, 520, { fill: accent, borderRadius: 16 })
        );
        break;

      case 21: // Split horizontal thirds with dual color block
        elements.push(
          el(`pos-${id}-top`, "rect", 0, 0, 1200, 550, { fill: accent }),
          el(`pos-${id}-t0`, "text", 80, 140, 1040, 280, { text: style.title, fontSize: 62, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`pos-${id}-im`, "image", 80, 610, 1040, 600, { src: photo, borderRadius: 16 }),
          el(`pos-${id}-bot`, "rect", 80, 1270, 1040, 360, { fill: isDark ? "#111827" : "#e2e8f0", borderRadius: 16 })
        );
        break;

      case 22: // Vertical pillar cards with center photo focus
        elements.push(
          el(`pos-${id}-t0`, "text", 80, 80, 1040, 160, { text: style.title, fontSize: 52, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`pos-${id}-c1`, "rect", 80, 280, 280, 1300, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 16 }),
          el(`pos-${id}-im`, "image", 390, 280, 420, 1300, { src: photo, borderRadius: 16 }),
          el(`pos-${id}-c2`, "rect", 840, 280, 280, 1300, { fill: accent, borderRadius: 16 })
        );
        break;

      case 23: // Floating glass plaque on full-canvas ambient photo
        elements.push(
          el(`pos-${id}-im`, "image", 0, 0, 1200, 1697, { src: photo }),
          el(`pos-${id}-scrim`, "rect", 0, 0, 1200, 1697, { fill: "rgba(0,0,0,0.6)", locked: true }),
          el(`pos-${id}-glass`, "rect", 120, 200, 960, 1297, { fill: "rgba(255,255,255,0.06)", stroke: accent, strokeWidth: 1.5, borderRadius: 24 }),
          el(`pos-${id}-t0`, "text", 180, 300, 840, 280, { text: style.title, fontSize: 62, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" })
        );
        break;

      case 24: // Swiss asymmetric 4-quadrant layout
        elements.push(
          el(`pos-${id}-q1`, "rect", 80, 80, 500, 600, { fill: accent, borderRadius: 12 }),
          el(`pos-${id}-im`, "image", 620, 80, 500, 600, { src: photo, borderRadius: 12 }),
          el(`pos-${id}-q3`, "rect", 80, 720, 500, 880, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 12 }),
          el(`pos-${id}-t0`, "text", 620, 740, 500, 400, { text: style.title, fontSize: 52, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" })
        );
        break;

      case 25: // Giant typography backdrop with foreground photo card
        elements.push(
          el(`pos-${id}-big`, "text", 40, 100, 1120, 450, { text: "CREATIVE", fontSize: 220, fontFamily: font, fontWeight: "900", fill: isDark ? "#1f2937" : "#e2e8f0", lineHeight: 0.8 }),
          el(`pos-${id}-im`, "image", 120, 400, 960, 780, { src: photo, borderRadius: 16 }),
          el(`pos-${id}-t0`, "text", 120, 1240, 960, 180, { text: style.title, fontSize: 56, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pos-${id}-bot`, "rect", 120, 1460, 960, 160, { fill: isDark ? "#111827" : "#0f172a", borderRadius: 8 })
        );
        break;

      case 26: // Japanese minimal offset layout with vertical accent stripe
        elements.push(
          el(`pos-${id}-stripe`, "rect", 100, 0, 16, 1697, { fill: accent }),
          el(`pos-${id}-t0`, "text", 160, 100, 960, 240, { text: style.title, fontSize: 54, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pos-${id}-im`, "image", 160, 380, 880, 750, { src: photo, borderRadius: 4 }),
          el(`pos-${id}-stamp`, "rect", 160, 1200, 400, 400, { fill: isDark ? "#18181b" : "#f1f5f9", borderRadius: 4 })
        );
        break;

      case 27: // Brutalist heavy boxed poster with stark black outlines
        elements.push(
          el(`pos-${id}-box1`, "rect", 60, 60, 1080, 300, { fill: accent, stroke: "#000000", strokeWidth: 3 }),
          el(`pos-${id}-t0`, "text", 100, 100, 1000, 200, { text: style.title, fontSize: 54, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`pos-${id}-im`, "image", 60, 400, 1080, 750, { src: photo }),
          el(`pos-${id}-box2`, "rect", 60, 1190, 1080, 440, { fill: isDark ? "#111827" : "#ffffff", stroke: "#000000", strokeWidth: 3 })
        );
        break;

      case 28: // Diagonal color wedge with floating photo circle
        elements.push(
          el(`pos-${id}-top-poly`, "rect", 0, 0, 1200, 700, { fill: accent }),
          el(`pos-${id}-t0`, "text", 80, 120, 1040, 260, { text: style.title, fontSize: 62, fontFamily: font, fontWeight: "900", fill: "#ffffff" }),
          el(`pos-${id}-im`, "image", 250, 450, 700, 700, { src: photo, borderRadius: 350 }),
          el(`pos-${id}-bot-card`, "rect", 80, 1220, 1040, 400, { fill: isDark ? "#111827" : "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 16 })
        );
        break;

      case 29: // Editorial magazine cover with bottom headline
        elements.push(
          el(`pos-${id}-im`, "image", 0, 0, 1200, 1200, { src: photo }),
          el(`pos-${id}-badge`, "rect", 80, 80, 280, 70, { fill: accent, borderRadius: 35 }),
          el(`pos-${id}-bot`, "rect", 0, 1100, 1200, 597, { fill: isDark ? "#09090b" : "#ffffff" }),
          el(`pos-${id}-t0`, "text", 80, 1180, 1040, 240, { text: style.title, fontSize: 60, fontFamily: font, fontWeight: "900", fill: accent })
        );
        break;

      case 30: // Double archway architectural exhibition poster
        elements.push(
          el(`pos-${id}-im`, "image", 80, 80, 500, 950, { src: photo, borderRadius: 250 }),
          el(`pos-${id}-arch2`, "rect", 620, 80, 500, 950, { fill: accent, borderRadius: 250 }),
          el(`pos-${id}-t0`, "text", 80, 1100, 1040, 240, { text: style.title, fontSize: 58, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`pos-${id}-bot`, "rect", 80, 1400, 1040, 220, { fill: isDark ? "#111827" : "#f1f5f9", borderRadius: 12 })
        );
        break;

      case 31: // Stark negative space monograph with bottom right tiny photo
        elements.push(
          el(`pos-${id}-t0`, "text", 80, 140, 1040, 450, { text: style.title, fontSize: 72, fontFamily: font, fontWeight: "900", fill: accent, lineHeight: 0.95 }),
          el(`pos-${id}-bar`, "rect", 80, 680, 300, 12, { fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pos-${id}-im`, "image", 540, 850, 580, 750, { src: photo, borderRadius: 12 })
        );
        break;

      case 32: // 4-column music festival lineup poster
        elements.push(
          el(`pos-${id}-im`, "image", 80, 80, 1040, 500, { src: photo, borderRadius: 12 }),
          el(`pos-${id}-t0`, "text", 80, 620, 1040, 160, { text: style.title, fontSize: 52, fontFamily: font, fontWeight: "900", fill: accent, textAlign: "center" }),
          el(`pos-${id}-c1`, "rect", 80, 820, 240, 780, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 8 }),
          el(`pos-${id}-c2`, "rect", 345, 820, 240, 780, { fill: accent, borderRadius: 8 }),
          el(`pos-${id}-c3`, "rect", 610, 820, 240, 780, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 8 }),
          el(`pos-${id}-c4`, "rect", 875, 820, 240, 780, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 8 })
        );
        break;

      case 33: // Full canvas image with circular central cutout card
        elements.push(
          el(`pos-${id}-im`, "image", 0, 0, 1200, 1697, { src: photo }),
          el(`pos-${id}-scrim`, "rect", 0, 0, 1200, 1697, { fill: "rgba(0,0,0,0.5)", locked: true }),
          el(`pos-${id}-circ`, "circle", 150, 400, 900, 900, { fill: isDark ? "#09090b" : "#ffffff" }),
          el(`pos-${id}-t0`, "text", 200, 680, 800, 300, { text: style.title, fontSize: 56, fontFamily: font, fontWeight: "900", fill: accent, textAlign: "center" })
        );
        break;

      case 34: // 2-column alternating checkerboard poster
        elements.push(
          el(`pos-${id}-im`, "image", 80, 80, 500, 700, { src: photo, borderRadius: 12 }),
          el(`pos-${id}-c1`, "rect", 620, 80, 500, 700, { fill: accent, borderRadius: 12 }),
          el(`pos-${id}-c2`, "rect", 80, 820, 500, 780, { fill: isDark ? "#111827" : "#f1f5f9", borderRadius: 12 }),
          el(`pos-${id}-t0`, "text", 640, 860, 460, 400, { text: style.title, fontSize: 48, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" })
        );
        break;

      case 35: // Top-left square stamp photo with giant right headline & bottom manifesto
        elements.push(
          el(`pos-${id}-im`, "image", 80, 80, 380, 380, { src: photo, borderRadius: 12 }),
          el(`pos-${id}-t0`, "text", 500, 80, 620, 380, { text: style.title, fontSize: 58, fontFamily: font, fontWeight: "900", fill: accent, lineHeight: 0.95 }),
          el(`pos-${id}-manifesto`, "rect", 80, 520, 1040, 1050, { fill: isDark ? "#111827" : "#f1f5f9", borderRadius: 16 })
        );
        break;

      case 36: // Horizontal 3-tier film strip with centered headline below
        elements.push(
          el(`pos-${id}-im1`, "image", 80, 120, 320, 500, { src: photo, borderRadius: 8 }),
          el(`pos-${id}-im2`, "rect", 440, 120, 320, 500, { fill: accent, borderRadius: 8 }),
          el(`pos-${id}-im3`, "rect", 800, 120, 320, 500, { fill: isDark ? "#1e293b" : "#cbd5e1", borderRadius: 8 }),
          el(`pos-${id}-t0`, "text", 80, 680, 1040, 240, { text: style.title, fontSize: 60, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`pos-${id}-card`, "rect", 80, 980, 1040, 600, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 37: // Bauhaus staggered stairs layout
        elements.push(
          el(`pos-${id}-im`, "image", 80, 80, 500, 500, { src: photo, borderRadius: 12 }),
          el(`pos-${id}-s1`, "rect", 620, 200, 500, 400, { fill: accent, borderRadius: 12 }),
          el(`pos-${id}-s2`, "rect", 80, 620, 500, 450, { fill: isDark ? "#111827" : "#f1f5f9", borderRadius: 12 }),
          el(`pos-${id}-t0`, "text", 620, 680, 500, 350, { text: style.title, fontSize: 50, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pos-${id}-foot`, "rect", 80, 1140, 1040, 480, { fill: accent, borderRadius: 16 })
        );
        break;

      case 38: // Left vertical pill photo with right 3-tier card stack
        elements.push(
          el(`pos-${id}-im`, "image", 80, 80, 440, 1450, { src: photo, borderRadius: 220 }),
          el(`pos-${id}-t0`, "text", 560, 80, 560, 260, { text: style.title, fontSize: 52, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pos-${id}-c1`, "rect", 560, 380, 560, 360, { fill: isDark ? "#111827" : "#f1f5f9", borderRadius: 16 }),
          el(`pos-${id}-c2`, "rect", 560, 780, 560, 360, { fill: accent, borderRadius: 16 }),
          el(`pos-${id}-c3`, "rect", 560, 1180, 560, 350, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;

      case 39: // Centered rounded oval portal with top & bottom dark banners
        elements.push(
          el(`pos-${id}-top-b`, "rect", 80, 80, 1040, 220, { fill: accent, borderRadius: 16 }),
          el(`pos-${id}-t0`, "text", 120, 130, 960, 140, { text: style.title, fontSize: 48, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" }),
          el(`pos-${id}-im`, "image", 120, 340, 960, 850, { src: photo, borderRadius: 480 }),
          el(`pos-${id}-bot-b`, "rect", 80, 1240, 1040, 360, { fill: isDark ? "#18181b" : "#f1f5f9", borderRadius: 16 })
        );
        break;

      case 40: // Retro isometric grid card layout
        elements.push(
          el(`pos-${id}-im`, "image", 80, 80, 450, 750, { src: photo, borderRadius: 16 }),
          el(`pos-${id}-t0`, "text", 570, 80, 550, 350, { text: style.title, fontSize: 54, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pos-${id}-mid`, "rect", 570, 480, 550, 350, { fill: isDark ? "#111827" : "#f1f5f9", borderRadius: 16 }),
          el(`pos-${id}-bot`, "rect", 80, 880, 1040, 720, { fill: isDark ? "#1e293b" : "#e2e8f0", borderRadius: 16 })
        );
        break;

      case 41: // Minimalist architectural drawing grid with slim horizontal photo band
        elements.push(
          el(`pos-${id}-t0`, "text", 80, 100, 1040, 260, { text: style.title, fontSize: 64, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pos-${id}-im`, "image", 80, 400, 1040, 450, { src: photo, borderRadius: 0 }),
          el(`pos-${id}-grid`, "rect", 80, 900, 1040, 700, { fill: isDark ? "#111827" : "#ffffff", stroke: accent, strokeWidth: 1 })
        );
        break;

      case 42: // High-energy asymmetric neon badges with slanted photo
        elements.push(
          el(`pos-${id}-im`, "image", 80, 80, 1040, 750, { src: photo, borderRadius: 20 }),
          el(`pos-${id}-badge1`, "rect", 80, 880, 400, 120, { fill: accent, borderRadius: 24 }),
          el(`pos-${id}-t0`, "text", 80, 1040, 1040, 240, { text: style.title, fontSize: 58, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pos-${id}-foot`, "rect", 80, 1320, 1040, 280, { fill: isDark ? "#1e293b" : "#f1f5f9", borderRadius: 16 })
        );
        break;

      case 43: // Vertical ribbon sidebar poster (left 25% accent rail)
        elements.push(
          el(`pos-${id}-rail`, "rect", 0, 0, 300, 1697, { fill: accent }),
          el(`pos-${id}-t0`, "text", 360, 80, 760, 260, { text: style.title, fontSize: 56, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pos-${id}-im`, "image", 360, 380, 760, 800, { src: photo, borderRadius: 16 }),
          el(`pos-${id}-foot`, "rect", 360, 1220, 760, 400, { fill: isDark ? "#111827" : "#f8fafc", borderRadius: 16 })
        );
        break;

      case 44: // Bold 3-tier horizontal sandwich poster
        elements.push(
          el(`pos-${id}-top`, "rect", 60, 60, 1080, 450, { fill: accent, borderRadius: 16 }),
          el(`pos-${id}-t0`, "text", 100, 120, 1000, 250, { text: style.title, fontSize: 58, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" }),
          el(`pos-${id}-im`, "image", 60, 540, 1080, 600, { src: photo, borderRadius: 16 }),
          el(`pos-${id}-bot`, "rect", 60, 1170, 1080, 450, { fill: isDark ? "#111827" : "#f1f5f9", borderRadius: 16 })
        );
        break;

      case 45: // Top text block with lower right square photo
        elements.push(
          el(`pos-${id}-t0`, "text", 80, 100, 1040, 400, { text: style.title, fontSize: 68, fontFamily: font, fontWeight: "900", fill: accent, lineHeight: 0.95 }),
          el(`pos-${id}-card`, "rect", 80, 560, 460, 950, { fill: isDark ? "#111827" : "#f1f5f9", borderRadius: 16 }),
          el(`pos-${id}-im`, "image", 580, 560, 540, 950, { src: photo, borderRadius: 16 })
        );
        break;

      case 46: // Vintage poster with top & bottom decorative rules
        elements.push(
          el(`pos-${id}-rule1`, "rect", 80, 80, 1040, 6, { fill: accent }),
          el(`pos-${id}-t0`, "text", 80, 110, 1040, 180, { text: style.title, fontSize: 52, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center" }),
          el(`pos-${id}-im`, "image", 80, 320, 1040, 900, { src: photo, borderRadius: 8 }),
          el(`pos-${id}-bot`, "rect", 80, 1260, 1040, 340, { fill: isDark ? "#111827" : "#f5f5f4", borderRadius: 8 }),
          el(`pos-${id}-rule2`, "rect", 80, 1620, 1040, 6, { fill: accent })
        );
        break;

      case 47: // High-tech circuit / dark HUD matrix poster
        elements.push(
          el(`pos-${id}-im`, "image", 80, 80, 1040, 650, { src: photo, borderRadius: 12 }),
          el(`pos-${id}-hud`, "rect", 80, 760, 1040, 480, { fill: isDark ? "#020617" : "#f0fdf4", stroke: accent, strokeWidth: 1.5, borderRadius: 12 }),
          el(`pos-${id}-t0`, "text", 120, 800, 960, 180, { text: style.title, fontSize: 52, fontFamily: font, fontWeight: "900", fill: accent }),
          el(`pos-${id}-foot`, "rect", 80, 1280, 1040, 320, { fill: accent, borderRadius: 12 })
        );
        break;

      case 48: // Modern museum monograph with left text spine & right photo stack
        elements.push(
          el(`pos-${id}-t0`, "text", 80, 100, 450, 400, { text: style.title, fontSize: 50, fontFamily: font, fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a" }),
          el(`pos-${id}-spine`, "rect", 80, 540, 450, 1050, { fill: isDark ? "#111827" : "#f1f5f9", borderRadius: 12 }),
          el(`pos-${id}-im`, "image", 570, 100, 550, 900, { src: photo, borderRadius: 12 }),
          el(`pos-${id}-bot-r`, "rect", 570, 1040, 550, 550, { fill: accent, borderRadius: 12 })
        );
        break;

      case 49: // Vibrant festival double pill overlay poster
        elements.push(
          el(`pos-${id}-im`, "image", 80, 80, 1040, 700, { src: photo, borderRadius: 24 }),
          el(`pos-${id}-pill1`, "rect", 80, 820, 500, 780, { fill: accent, borderRadius: 250 }),
          el(`pos-${id}-pill2`, "rect", 620, 820, 500, 780, { fill: isDark ? "#18181b" : "#f1f5f9", borderRadius: 250 }),
          el(`pos-${id}-t0`, "text", 120, 900, 960, 240, { text: style.title, fontSize: 58, fontFamily: font, fontWeight: "900", fill: "#ffffff", textAlign: "center" })
        );
        break;
    }

    posters.push({
      id,
      name: `Bespoke Poster ${id}`,
      title: style.title,
      category: "Posters",
      canvasWidth: 1200,
      canvasHeight: 1697,
      elements,
      tags: ["poster", "bespoke", font.toLowerCase(), isDark ? "dark" : "light"]
    });
  }

  return posters;
}
