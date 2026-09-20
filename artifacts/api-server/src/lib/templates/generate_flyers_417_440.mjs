// Flyers Generator (IDs 417 to 440) — 24 Bespoke Business Promotional Flyers
// 1200x1697 A4 Canvas, high-impact marketing layouts, actionable promos.

function el(id, type, x, y, width, height, props = {}) {
  return { visible: true, id, type, x, y, width, height, ...props };
}

export function generateFlyers417to440() {
  const flyers = [];
  const configs = [
    { id: 417, name: "Artisan Sourdough Bakery & Cafe Opening", sub: "Bakery", bg: "#fffbeb", accent: "#b45309", title: "CRUST & CRUMB\nARTISAN BAKERY", promo: "GRAND OPENING // 50% OFF ALL SOURDOUGH LOAVES", photo: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200" },
    { id: 418, name: "Luxury Waterfront Villa Property Listing", sub: "Real Estate", bg: "#0f172a", accent: "#38bdf8", title: "THE OCEAN VILLA\nEXCLUSIVE LISTING", promo: "PRIVATE BROKER SHOWCASE THIS SATURDAY 2-5 PM", photo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" },
    { id: 419, name: "CrossFit & High-Intensity Fitness Bootcamp", sub: "Fitness", bg: "#09090b", accent: "#ef4444", title: "IRON FORGE\nCROSSFIT BOOTCAMP", promo: "JOIN THE 6-WEEK TRANSFORMATION // FIRST WEEK FREE", photo: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200" },
    { id: 420, name: "Coding Academy & Data Science Bootcamp", sub: "Education", bg: "#030712", accent: "#10b981", title: "NEXTGEN CODE\nACADEMY 2026", promo: "FULL-STACK & AI BOOTCAMP // 100% JOB PLACEMENT GUARANTEE", photo: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200" },
    { id: 421, name: "Creative Design & Branding Agency Promo", sub: "Agency", bg: "#1e1b4b", accent: "#a855f7", title: "STUDIO NOVA\nCREATIVE AGENCY", promo: "BRAND IDENTITY & WEB DESIGN PACKAGES FOR SCALING STARTUPS", photo: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1200" },
    { id: 422, name: "Luxury Automotive Detail & Performance Spa", sub: "Automotive", bg: "#000000", accent: "#f59e0b", title: "APEX CERAMIC\nAUTO SPA", promo: "CERAMIC COATING & PAINT CORRECTION // BOOK VIP SLOT", photo: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200" },
    { id: 423, name: "Pediatric Dental & Family Wellness Clinic", sub: "Healthcare", bg: "#f0fdfa", accent: "#0d9488", title: "SMILE CARE\nPEDIATRIC DENTAL", promo: "NEW PATIENT SPECIAL // COMPREHENSIVE EXAM & CLEANING", photo: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" },
    { id: 424, name: "Boutique Pet Grooming & Spa Day", sub: "Pet Care", bg: "#fdf2f8", accent: "#db2777", title: "PAWS & BUBBLES\nLUXURY PET SPA", promo: "FULL GROOMING & HYDROBATH // 20% OFF FIRST VISIT", photo: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1200" },
    { id: 425, name: "Italian Trattoria Pizza & Pasta Tasting Night", sub: "Restaurant", bg: "#271406", accent: "#ea580c", title: "TRATTORIA ROMA\nTASTING NIGHT", promo: "5-COURSE TRUFFLE & HANDMADE PASTA TASTING MENU", photo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200" },
    { id: 426, name: "Contemporary Pilates & Sound Bath Workshop", sub: "Wellness", bg: "#fefce8", accent: "#ca8a04", title: "SANCTUARY\nPILATES & SOUND", promo: "REFORMER PILATES & CRYSTAL SOUND HEALING WORKSHOP", photo: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" },
    { id: 427, name: "Co-Working Hub & Private Office Tour", sub: "Co-Working", bg: "#f8fafc", accent: "#2563eb", title: "NEXUS COWORK\nINNOVATION HUB", promo: "PRIVATE DESKS & SUITES // FIRST MONTH FREE ON ANNUAL LEASE", photo: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" },
    { id: 428, name: "Weekend Farmer's Organic Produce Market", sub: "Market", bg: "#f0fdf4", accent: "#16a34a", title: "HARVEST ROW\nFARMERS MARKET", promo: "EVERY SATURDAY 8 AM — 2 PM // 60+ ORGANIC LOCAL GROWERS", photo: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&q=80&w=1200" },
    { id: 429, name: "Mobile App Launch & VIP Early Access", sub: "App Launch", bg: "#111827", accent: "#8b5cf6", title: "FLOW STATE\nMOBILE APP", promo: "DOWNLOAD ON APP STORE // 1 YEAR PRO SUBSCRIPTION FREE", photo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200" },
    { id: 430, name: "Vintage Flea Market & Antique Fair", sub: "Vintage", bg: "#fff7ed", accent: "#c2410c", title: "RETRO VAULT\nANTIQUE MARKET", promo: "OVER 100 VINTAGE CLOTHING, VINYL & MID-CENTURY VENDORS", photo: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1200" },
    { id: 431, name: "Solar Panel Installation & Clean Energy Rebate", sub: "Solar", bg: "#022c22", accent: "#f59e0b", title: "SOLAR ROOF\nENERGY REBATE", promo: "$0 DOWN INSTALLATION // CLAIM 30% FEDERAL TAX REBATE", photo: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=1200" },
    { id: 432, name: "Culinary Sushi & Omakase Dining Experience", sub: "Sushi", bg: "#09090b", accent: "#fb7185", title: "KAISEKI OMAKASE\nSUSHI BAR", promo: "EDOMAE CHEF'S OMAKASE TASTING // RESERVE YOUR SEAT", photo: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=1200" },
    { id: 433, name: "Music Academy Piano & Guitar Lessons", sub: "Music Lessons", bg: "#fafaf9", accent: "#4f46e5", title: "HARMONY ACADEMY\nOF MUSIC", promo: "PIANO, GUITAR & VIOLIN LESSONS // FREE TRIAL LESSON", photo: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=1200" },
    { id: 434, name: "Boutique Floral Arrangement Workshop", sub: "Florist", bg: "#fdf2f8", accent: "#ec4899", title: "BLOOM & WILD\nFLORAL ATELIER", promo: "SATURDAY BOTANICAL ARRANGING MASTERCLASS // FLOWERS INCLUDED", photo: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=1200" },
    { id: 435, name: "Corporate Tax & Financial Planning Advisory", sub: "Financial", bg: "#0f172a", accent: "#10b981", title: "APEX TAX &\nWEALTH ADVISORY", promo: "MAXIMIZE DEDUCTIONS // COMPLIMENTARY FINANCIAL TAX REVIEW", photo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200" },
    { id: 436, name: "City Marathon & 10K Charity Run Registration", sub: "Marathon", bg: "#18181b", accent: "#f97316", title: "METRO CITY\nMARATHON 2026", promo: "REGISTER FOR 42K / 21K / 10K // FINISHER MEDAL & RUNNER KIT", photo: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80&w=1200" },
    { id: 437, name: "Children's Summer Science & Robotics Camp", sub: "Summer Camp", bg: "#eff6ff", accent: "#2563eb", title: "ROBO KIDS\nSCIENCE CAMP", promo: "HANDS-ON LEGO ROBOTICS & DRONE CODING // AGES 7-14", photo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200" },
    { id: 438, name: "Barbershop & Grooming Lounge Grand Opening", sub: "Barbershop", bg: "#1c1917", accent: "#d97706", title: "THE NOBLE BLADE\nBARBERSHOP", promo: "HOT TOWEL SHAVE & PRECISION HAIRCUT // COMPLIMENTARY BOURBON", photo: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200" },
    { id: 439, name: "Language Immersion Academy French & Spanish", sub: "Languages", bg: "#fefce8", accent: "#0284c7", title: "GLOBAL TONGUE\nLANGUAGE ACADEMY", promo: "FLUENCY IN 90 DAYS // NATIVE SPEAKERS & CONVERSATIONAL CLUBS", photo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200" },
    { id: 440, name: "Eco-Friendly Car Wash & Ceramic Coating", sub: "Car Wash", bg: "#022c22", accent: "#38bdf8", title: "HYDRO CLEAN\nECO CAR WASH", promo: "WATERLESS BIO-FOAM WASH & WHEEL POLISH // UNLIMITED PASS $29/MO", photo: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=1200" }
  ];

  for (const cfg of configs) {
    const isDark = cfg.bg.startsWith("#0") || cfg.bg.startsWith("#1") || cfg.bg.startsWith("#2");
    const elements = [
      el(`fly-${cfg.id}-bg`, "rect", 0, 0, 1200, 1697, { fill: cfg.bg, locked: true }),
      el(`fly-${cfg.id}-img`, "image", 70, 70, 1060, 680, { src: cfg.photo, borderRadius: 16 }),
      el(`fly-${cfg.id}-tag`, "text", 70, 790, 1060, 32, { text: `${cfg.sub.toUpperCase()} PROMOTION`, fontSize: 16, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: cfg.accent, letterSpacing: 4 }),
      el(`fly-${cfg.id}-title`, "text", 70, 840, 1060, 180, { text: cfg.title, fontSize: 64, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", lineHeight: 1.05 }),
      el(`fly-${cfg.id}-banner`, "rect", 70, 1040, 1060, 100, { fill: cfg.accent, borderRadius: 12 }),
      el(`fly-${cfg.id}-promo`, "text", 90, 1075, 1020, 36, { text: cfg.promo, fontSize: 18, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: isDark && cfg.accent === "#ffffff" ? "#000000" : (cfg.bg.startsWith("#f") ? "#ffffff" : "#000000"), textAlign: "center", letterSpacing: 2 }),
      
      // Feature grid (2 columns)
      el(`fly-${cfg.id}-c1`, "rect", 70, 1170, 515, 320, { fill: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)", borderRadius: 12, stroke: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)", strokeWidth: 1 }),
      el(`fly-${cfg.id}-c1-t`, "text", 100, 1205, 455, 32, { text: "WHAT WE OFFER", fontSize: 20, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: cfg.accent }),
      el(`fly-${cfg.id}-c1-p`, "text", 100, 1250, 455, 210, { text: "• Premium certified materials and equipment\n• 100% satisfaction guarantee on all services\n• Experienced award-winning master staff\n• Transparent upfront pricing with zero hidden fees", fontSize: 16, fontFamily: "Inter", fill: isDark ? "#cbd5e1" : "#334155", lineHeight: 1.8 }),
      
      el(`fly-${cfg.id}-c2`, "rect", 615, 1170, 515, 320, { fill: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)", borderRadius: 12, stroke: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)", strokeWidth: 1 }),
      el(`fly-${cfg.id}-c2-t`, "text", 645, 1205, 455, 32, { text: "HOURS & LOCATION", fontSize: 20, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: cfg.accent }),
      el(`fly-${cfg.id}-c2-p`, "text", 645, 1250, 455, 210, { text: "Monday — Saturday: 8:00 AM — 8:00 PM\nSunday: 10:00 AM — 6:00 PM\n1420 Main Boulevard, Downtown Plaza\nCall: (555) 234-8900 · www.business.com", fontSize: 16, fontFamily: "Inter", fill: isDark ? "#cbd5e1" : "#334155", lineHeight: 1.8 }),

      // Bottom CTA
      el(`fly-${cfg.id}-foot`, "text", 70, 1550, 1060, 40, { text: "BRING THIS FLYER OR SCAN QR CODE TO REDEEM SPECIAL PROMOTION", fontSize: 14, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: isDark ? "#94a3b8" : "#64748b", textAlign: "center", letterSpacing: 2 })
    ];

    flyers.push({
      id: cfg.id,
      name: cfg.name,
      title: cfg.name.toUpperCase(),
      description: `Bespoke Canva-grade promotional marketing flyer for ${cfg.name}.`,
      category: "Flyers",
      subcategory: cfg.sub,
      size: "1200×1697",
      canvasWidth: 1200,
      canvasHeight: 1697,
      orientation: "portrait",
      tags: ["Flyer", "Marketing", "Promo", cfg.sub, "Business"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 3900 + (cfg.id * 9),
      views: 31000 + (cfg.id * 70),
      gradient: `linear-gradient(180deg, ${cfg.bg} 0%, ${cfg.bg} 100%)`,
      fonts: ["Plus Jakarta Sans", "Inter"],
      colors: [cfg.bg, cfg.accent, isDark ? "#ffffff" : "#0f172a", isDark ? "#cbd5e1" : "#334155"],
      elements
    });
  }

  return flyers;
}
