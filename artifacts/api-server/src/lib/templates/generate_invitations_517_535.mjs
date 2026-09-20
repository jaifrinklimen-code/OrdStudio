// Invitations Generator (IDs 517 to 535) — 19 Bespoke Event Cards
// 1400x2000 Canvas, luxury typography, unique photography and event themes.

function el(id, type, x, y, width, height, props = {}) {
  return { visible: true, id, type, x, y, width, height, ...props };
}

export function generateInvitations517to535() {
  const invitations = [];
  const configs = [
    { id: 517, name: "Midnight Celestial Winter Solstice Gala", sub: "Gala", bg: "#090d1e", accent: "#fbbf24", title: "THE CELESTIAL WINTER GALA", date: "SATURDAY, DECEMBER 19 · 8:00 PM", loc: "The Grand Astral Observatory · Zürich", photo: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1200" },
    { id: 518, name: "Tuscan Vineyard Harvest & Wine Tasting", sub: "Wine Tasting", bg: "#fffbeb", accent: "#92400e", title: "VINTAGE HARVEST DINNER", date: "FRIDAY, OCTOBER 16 · 6:30 PM", loc: "Castello di Fonterutoli · Siena, Italy", photo: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200" },
    { id: 519, name: "Modernist Film Festival Red Carpet Premiere", sub: "Film Premiere", bg: "#050505", accent: "#e11d48", title: "CINEMA LUMIÈRE PREMIERE", date: "THURSDAY, NOVEMBER 12 · 7:00 PM", loc: "Palais des Festivals · Cannes, France", photo: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=1200" },
    { id: 520, name: "Architectural Pavilion Grand Opening", sub: "Architecture", bg: "#fafaf9", accent: "#ea580c", title: "THE GLASS PAVILION OPENING", date: "SATURDAY, SEPTEMBER 26 · 5:00 PM", loc: "Nordic Center for Architecture · Copenhagen", photo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200" },
    { id: 521, name: "High-Fashion Summer Runway Showcase", sub: "Fashion", bg: "#fdf2f8", accent: "#db2777", title: "MAISON HAUTE COUTURE", date: "TUESDAY, JULY 07 · 8:30 PM", loc: "Grand Palais Éphémère · Paris, France", photo: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200" },
    { id: 522, name: "Annual Tech Innovation Summit & Hackathon", sub: "Technology", bg: "#030712", accent: "#06b6d4", title: "GLOBAL INNOVATION SUMMIT", date: "OCTOBER 24—26, 2026", loc: "Moscone Center West · San Francisco, CA", photo: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200" },
    { id: 523, name: "Botanical Glasshouse Garden Wedding", sub: "Wedding", bg: "#f0fdf4", accent: "#15803d", title: "SOPHIA & ALEXANDER", date: "SATURDAY, JUNE 20 · 4:30 PM", loc: "Kew Royal Botanic Gardens · London", photo: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" },
    { id: 524, name: "Artisan Ceramic & Sculpture Vernissage", sub: "Art Exhibition", bg: "#fff7ed", accent: "#c2410c", title: "TERRA FIRMA EXHIBITION", date: "FRIDAY, NOVEMBER 06 · 6:00 PM", loc: "Galerie Perrotin · Paris & Tokyo", photo: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=1200" },
    { id: 525, name: "Exclusive Yacht Club Sunset Regatta Dinner", sub: "Yacht Club", bg: "#03071e", accent: "#38bdf8", title: "ANNUAL REGATTA BANQUET", date: "SATURDAY, AUGUST 22 · 7:00 PM", loc: "Yacht Club de Monaco · Monte Carlo", photo: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200" },
    { id: 526, name: "Classical Symphony Orchestra Benefactor Evening", sub: "Orchestra", bg: "#2a0808", accent: "#f59e0b", title: "PHILHARMONIC GALA BENEFIT", date: "FRIDAY, DECEMBER 04 · 7:30 PM", loc: "Wiener Musikverein · Vienna, Austria", photo: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=1200" },
    { id: 527, name: "Global Leadership Economic Forum Reception", sub: "Corporate Dinner", bg: "#0f172a", accent: "#38bdf8", title: "ECONOMIC LEADERSHIP FORUM", date: "WEDNESDAY, JANUARY 20 · 7:00 PM", loc: "Davos Congress Centre · Switzerland", photo: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200" },
    { id: 528, name: "Modern Rooftop Neon Lounge Opening", sub: "Nightlife", bg: "#090514", accent: "#c084fc", title: "AURA ROOFTOP LOUNGE", date: "SATURDAY, SEPTEMBER 19 · 9:00 PM", loc: "Skyline Tower Penthouse · Manhattan, NY", photo: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=1200" },
    { id: 529, name: "Boutique Chocolatier & Pastry Masterclass", sub: "Culinary", bg: "#271406", accent: "#fde68a", title: "LE CHOCOLAT D'OR ATELIER", date: "SUNDAY, OCTOBER 25 · 2:00 PM", loc: "Maison du Chocolat · Brussels, Belgium", photo: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&q=80&w=1200" },
    { id: 530, name: "University Honorary Doctorate Convocation", sub: "Academic", bg: "#022c22", accent: "#fbbf24", title: "HONORARY DOCTORATE BANQUET", date: "FRIDAY, JUNE 12 · 6:00 PM", loc: "The Sheldonian Theatre · Oxford University", photo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200" },
    { id: 531, name: "Eco-Friendly Rainforest Conservation Banquet", sub: "Charity Gala", bg: "#052e16", accent: "#4ade80", title: "RAINFOREST GUARDIANS GALA", date: "SATURDAY, NOVEMBER 28 · 7:00 PM", loc: "Natural History Museum · London", photo: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200" },
    { id: 532, name: "Nordic Minimalist Design Awards Night", sub: "Awards", bg: "#ffffff", accent: "#0f172a", title: "NORDIC DESIGN PRIZE 2026", date: "THURSDAY, OCTOBER 22 · 6:30 PM", loc: "ArkDes Museum · Stockholm, Sweden", photo: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" },
    { id: 533, name: "Vintage Jazz & Speakeasy Cocktail Soirée", sub: "Cocktail Soirée", bg: "#18181b", accent: "#f59e0b", title: "SPEAKEASY NOCTURNE", date: "FRIDAY, OCTOBER 30 · 8:30 PM", loc: "The Cotton Club Vault · Chicago, IL", photo: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200" },
    { id: 534, name: "Contemporary Photography Triennale Opening", sub: "Photography", bg: "#0a0a0a", accent: "#fafafa", title: "PHOTO TRIENNALE OPENING", date: "THURSDAY, SEPTEMBER 17 · 7:00 PM", loc: "Museum Folkwang · Essen, Germany", photo: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1200" },
    { id: 535, name: "Luxury Wellness & Meditation Retreat", sub: "Retreat", bg: "#fefce8", accent: "#ca8a04", title: "SANCTUARY OF STILLNESS", date: "MAY 15—18, 2026", loc: "Amangiri Resort · Canyon Point, Utah", photo: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200" }
  ];

  for (const cfg of configs) {
    const isDark = cfg.bg.startsWith("#0") || cfg.bg.startsWith("#1") || cfg.bg.startsWith("#2");
    const elements = [
      el(`inv-${cfg.id}-bg`, "rect", 0, 0, 1400, 2000, { fill: cfg.bg, locked: true }),
      el(`inv-${cfg.id}-border`, "rect", 60, 60, 1280, 1880, { stroke: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)", strokeWidth: 1, fill: "transparent" }),
      el(`inv-${cfg.id}-img`, "image", 120, 120, 1160, 840, { src: cfg.photo, borderRadius: 8 }),
      el(`inv-${cfg.id}-tag`, "text", 120, 1020, 1160, 36, { text: `CORDIOUSLY INVITES YOU TO ATTEND THE`, fontSize: 16, fontFamily: "Cinzel", fontWeight: "700", fill: cfg.accent, textAlign: "center", letterSpacing: 6 }),
      el(`inv-${cfg.id}-title`, "text", 120, 1080, 1160, 180, { text: cfg.title, fontSize: 62, fontFamily: "Cinzel", fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", textAlign: "center", lineHeight: 1.1 }),
      el(`inv-${cfg.id}-div`, "rect", 550, 1290, 300, 2, { fill: cfg.accent }),
      el(`inv-${cfg.id}-date`, "text", 120, 1330, 1160, 44, { text: cfg.date, fontSize: 24, fontFamily: "Cinzel", fontWeight: "700", fill: isDark ? "#f8fafc" : "#1e293b", textAlign: "center", letterSpacing: 3 }),
      el(`inv-${cfg.id}-loc`, "text", 120, 1390, 1160, 40, { text: cfg.loc, fontSize: 20, fontFamily: "Inter", fill: isDark ? "#cbd5e1" : "#475569", textAlign: "center" }),
      el(`inv-${cfg.id}-desc`, "text", 200, 1470, 1000, 140, { text: "Join distinguished patrons, creators, and honorees for an evening of champagne receptions, curated tasting menus, and private musical performances.", fontSize: 18, fontFamily: "Inter", fill: isDark ? "#94a3b8" : "#64748b", textAlign: "center", lineHeight: 1.8 }),
      el(`inv-${cfg.id}-rsvp`, "text", 120, 1720, 1160, 40, { text: "BLACK TIE OPTIONAL // RSVP BY OCTOBER 01 TO RSVP@GALA-EVENTS.ORG", fontSize: 14, fontFamily: "Cinzel", fontWeight: "700", fill: cfg.accent, textAlign: "center", letterSpacing: 3 })
    ];

    invitations.push({
      id: cfg.id,
      name: cfg.name,
      title: cfg.title,
      description: `Bespoke Canva-grade luxury invitation card for ${cfg.name}.`,
      category: "Invitations",
      subcategory: cfg.sub,
      size: "1400×2000",
      canvasWidth: 1400,
      canvasHeight: 2000,
      orientation: "portrait",
      tags: ["Invitation", "Card", "Event", cfg.sub, "Luxury"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 4200 + (cfg.id * 10),
      views: 34000 + (cfg.id * 70),
      gradient: `linear-gradient(180deg, ${cfg.bg} 0%, ${cfg.bg} 100%)`,
      fonts: ["Cinzel", "Inter"],
      colors: [cfg.bg, cfg.accent, isDark ? "#ffffff" : "#0f172a", isDark ? "#cbd5e1" : "#475569"],
      elements
    });
  }

  return invitations;
}
