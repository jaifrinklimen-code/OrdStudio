// Business Templates Generator (IDs 617 to 640) — 24 High-Grade Proposals & Decks
// Multi-page (2-4 slides each), 1200x1697 or 1920x1080, unique photography and typography.

function el(id, type, x, y, width, height, props = {}) {
  return { visible: true, id, type, x, y, width, height, ...props };
}

export function generateBusiness617to640() {
  const business = [];
  const configs = [
    { id: 617, name: "Next-Gen AI Infrastructure Pitch Deck", sub: "Artificial Intelligence", w: 1920, h: 1080, orient: "landscape", bg: "#090d16", accent: "#38bdf8", photo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200" },
    { id: 618, name: "Boutique Architecture Design Proposal", sub: "Architecture", w: 1200, h: 1697, orient: "portrait", bg: "#fafaf9", accent: "#b45309", photo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" },
    { id: 619, name: "Global Logistics Freight Master Contract", sub: "Logistics", w: 1200, h: 1697, orient: "portrait", bg: "#f8fafc", accent: "#1e3a8a", photo: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=1200" },
    { id: 620, name: "Enterprise Cybersecurity Audit Proposal", sub: "Cybersecurity", w: 1200, h: 1697, orient: "portrait", bg: "#0f172a", accent: "#10b981", photo: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" },
    { id: 621, name: "Luxury Real Estate Development Prospectus", sub: "Real Estate", w: 1920, h: 1080, orient: "landscape", bg: "#18181b", accent: "#d4d4d8", photo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" },
    { id: 622, name: "CleanTech Solar Farm Investment Memo", sub: "Energy", w: 1200, h: 1697, orient: "portrait", bg: "#f0fdf4", accent: "#16a34a", photo: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200" },
    { id: 623, name: "Digital Marketing & Performance Agency Pitch", sub: "Marketing", w: 1920, h: 1080, orient: "landscape", bg: "#1e1b4b", accent: "#a855f7", photo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" },
    { id: 624, name: "Hospitality Resort Franchise Expansion Brief", sub: "Hospitality", w: 1200, h: 1697, orient: "portrait", bg: "#fffbeb", accent: "#d97706", photo: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200" },
    { id: 625, name: "Autonomous Robotics Seed Round Pitch Deck", sub: "Robotics", w: 1920, h: 1080, orient: "landscape", bg: "#030712", accent: "#06b6d4", photo: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200" },
    { id: 626, name: "Management Consulting Transformation Plan", sub: "Consulting", w: 1200, h: 1697, orient: "portrait", bg: "#ffffff", accent: "#2563eb", photo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200" },
    { id: 627, name: "Healthcare Clinical Research Grant Proposal", sub: "Medical", w: 1200, h: 1697, orient: "portrait", bg: "#f8fafc", accent: "#0284c7", photo: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" },
    { id: 628, name: "Artisan Food & Beverage Distribution Agreement", sub: "Food & Beverage", w: 1200, h: 1697, orient: "portrait", bg: "#fff7ed", accent: "#c2410c", photo: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200" },
    { id: 629, name: "Fintech Mobile Banking Series A Deck", sub: "Fintech", w: 1920, h: 1080, orient: "landscape", bg: "#0f172a", accent: "#10b981", photo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200" },
    { id: 630, name: "SaaS Enterprise SLA & Partnership Contract", sub: "SaaS Contract", w: 1200, h: 1697, orient: "portrait", bg: "#ffffff", accent: "#4f46e5", photo: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1200" },
    { id: 631, name: "Commercial Interior Fit-Out Scope of Work", sub: "Interior Design", w: 1200, h: 1697, orient: "portrait", bg: "#fafaf9", accent: "#78716c", photo: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" },
    { id: 632, name: "Aerospace Component Supply Agreement", sub: "Manufacturing", w: 1200, h: 1697, orient: "portrait", bg: "#0b1329", accent: "#f59e0b", photo: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1200" },
    { id: 633, name: "Venture Capital Quarterly Fund Strategy", sub: "Venture Capital", w: 1920, h: 1080, orient: "landscape", bg: "#111827", accent: "#38bdf8", photo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1200" },
    { id: 634, name: "Event Production & Festival Master Plan", sub: "Event Production", w: 1200, h: 1697, orient: "portrait", bg: "#09090b", accent: "#f43f5e", photo: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200" },
    { id: 635, name: "Legal Retainer & Corporate Counsel Terms", sub: "Legal Counsel", w: 1200, h: 1697, orient: "portrait", bg: "#fafaf9", accent: "#1e3a8a", photo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" },
    { id: 636, name: "Biotech Drug Pipeline Licensing Proposal", sub: "Biotech Licensing", w: 1200, h: 1697, orient: "portrait", bg: "#f0fdfa", accent: "#0d9488", photo: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200" },
    { id: 637, name: "Public Relations Crisis Strategy Dossier", sub: "Communications", w: 1200, h: 1697, orient: "portrait", bg: "#ffffff", accent: "#dc2626", photo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200" },
    { id: 638, name: "E-Commerce Omnichannel Growth Roadmap", sub: "E-Commerce", w: 1920, h: 1080, orient: "landscape", bg: "#0f172a", accent: "#ec4899", photo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" },
    { id: 639, name: "Renewable Wind Farm EPC Proposal", sub: "Renewables EPC", w: 1200, h: 1697, orient: "portrait", bg: "#f0fdf4", accent: "#15803d", photo: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200" },
    { id: 640, name: "Global NGO Humanitarian Impact Brief", sub: "Non-Profit", w: 1200, h: 1697, orient: "portrait", bg: "#fffbeb", accent: "#b45309", photo: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200" }
  ];

  for (const cfg of configs) {
    const isDark = cfg.bg.startsWith("#0") || cfg.bg.startsWith("#1");
    const isWidescreen = cfg.w === 1920;

    let slides = [];
    if (isWidescreen) {
      slides = [
        {
          id: `biz-${cfg.id}-s1`,
          name: "Cover",
          elements: [
            el(`biz-${cfg.id}-s1-bg`, "rect", 0, 0, 1920, 1080, { fill: cfg.bg, locked: true }),
            el(`biz-${cfg.id}-s1-img`, "image", 960, 0, 960, 1080, { src: cfg.photo }),
            el(`biz-${cfg.id}-s1-tag`, "text", 120, 140, 760, 32, { text: `${cfg.sub.toUpperCase()} STRATEGIC BRIEF`, fontSize: 16, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: cfg.accent, letterSpacing: 4 }),
            el(`biz-${cfg.id}-s1-title`, "text", 120, 240, 760, 240, { text: cfg.name, fontSize: 68, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", lineHeight: 1.1 }),
            el(`biz-${cfg.id}-s1-sub`, "text", 120, 520, 740, 120, { text: "Executive commercial proposal and operational execution roadmap tailored for institutional partners.", fontSize: 22, fontFamily: "Inter", fill: isDark ? "#94a3b8" : "#475569", lineHeight: 1.6 }),
            el(`biz-${cfg.id}-s1-foot`, "text", 120, 900, 740, 30, { text: "CONFIDENTIAL // PREPARED BY ORD STUDIO STRATEGY GROUP", fontSize: 13, fontFamily: "Plus Jakarta Sans", fill: cfg.accent, letterSpacing: 2 })
          ]
        },
        {
          id: `biz-${cfg.id}-s2`,
          name: "Executive Summary & Deliverables",
          elements: [
            el(`biz-${cfg.id}-s2-bg`, "rect", 0, 0, 1920, 1080, { fill: cfg.bg, locked: true }),
            el(`biz-${cfg.id}-s2-tag`, "text", 120, 100, 1680, 32, { text: "SCOPE OF WORK & DELIVERABLES", fontSize: 16, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: cfg.accent, letterSpacing: 3 }),
            el(`biz-${cfg.id}-s2-title`, "text", 120, 150, 1680, 70, { text: "Key Operational Milestones", fontSize: 48, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: isDark ? "#ffffff" : "#0f172a" }),
            el(`biz-${cfg.id}-s2-c1`, "rect", 120, 260, 520, 640, { fill: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)", borderRadius: 12, stroke: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)", strokeWidth: 1 }),
            el(`biz-${cfg.id}-s2-c1-t`, "text", 160, 300, 440, 40, { text: "PHASE 1 // DIAGNOSTIC & AUDIT", fontSize: 22, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: cfg.accent }),
            el(`biz-${cfg.id}-s2-c1-p`, "text", 160, 360, 440, 480, { text: "Comprehensive assessment of baseline systems, regulatory compliance frameworks, and stakeholder requirements within 30 days of contract execution.", fontSize: 18, fontFamily: "Inter", fill: isDark ? "#cbd5e1" : "#334155", lineHeight: 1.7 }),
            el(`biz-${cfg.id}-s2-c2`, "rect", 700, 260, 520, 640, { fill: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)", borderRadius: 12, stroke: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)", strokeWidth: 1 }),
            el(`biz-${cfg.id}-s2-c2-t`, "text", 740, 300, 440, 40, { text: "PHASE 2 // EXECUTION & DEPLOY", fontSize: 22, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: cfg.accent }),
            el(`biz-${cfg.id}-s2-c2-p`, "text", 740, 360, 440, 480, { text: "Full rollout of primary deliverables, operational toolchains, and team enablement workshops with dedicated project management oversight.", fontSize: 18, fontFamily: "Inter", fill: isDark ? "#cbd5e1" : "#334155", lineHeight: 1.7 }),
            el(`biz-${cfg.id}-s2-c3`, "rect", 1280, 260, 520, 640, { fill: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)", borderRadius: 12, stroke: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)", strokeWidth: 1 }),
            el(`biz-${cfg.id}-s2-c3-t`, "text", 1320, 300, 440, 40, { text: "PHASE 3 // GOVERNANCE & SCALE", fontSize: 22, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: cfg.accent }),
            el(`biz-${cfg.id}-s2-c3-p`, "text", 1320, 360, 440, 480, { text: "Ongoing SLA maintenance, quarterly performance audits, executive reviews, and continuous optimization protocols.", fontSize: 18, fontFamily: "Inter", fill: isDark ? "#cbd5e1" : "#334155", lineHeight: 1.7 })
          ]
        }
      ];
    } else {
      // Portrait A4 multi-page
      slides = [
        {
          id: `biz-${cfg.id}-p1`,
          name: "Cover Page",
          elements: [
            el(`biz-${cfg.id}-p1-bg`, "rect", 0, 0, 1200, 1697, { fill: cfg.bg, locked: true }),
            el(`biz-${cfg.id}-p1-img`, "image", 80, 80, 1040, 700, { src: cfg.photo, borderRadius: 12 }),
            el(`biz-${cfg.id}-p1-tag`, "text", 80, 840, 1040, 32, { text: `${cfg.sub.toUpperCase()} PROPOSAL`, fontSize: 16, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: cfg.accent, letterSpacing: 4 }),
            el(`biz-${cfg.id}-p1-title`, "text", 80, 890, 1040, 180, { text: cfg.name, fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: isDark ? "#ffffff" : "#0f172a", lineHeight: 1.1 }),
            el(`biz-${cfg.id}-p1-sub`, "text", 80, 1090, 1040, 100, { text: "Comprehensive commercial scope of work, technical architecture, and investment pricing schedule.", fontSize: 20, fontFamily: "Inter", fill: isDark ? "#cbd5e1" : "#475569", lineHeight: 1.6 }),
            el(`biz-${cfg.id}-p1-card`, "rect", 80, 1250, 1040, 280, { fill: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)", borderRadius: 12 }),
            el(`biz-${cfg.id}-p1-meta1`, "text", 120, 1290, 480, 60, { text: "PREPARED FOR:\nBoard of Directors & Executive Sponsors", fontSize: 15, fontFamily: "Inter", fill: isDark ? "#94a3b8" : "#64748b", lineHeight: 1.5 }),
            el(`biz-${cfg.id}-p1-meta2`, "text", 640, 1290, 440, 60, { text: "DATE & VALIDITY:\nOctober 2026 · Valid for 60 Days", fontSize: 15, fontFamily: "Inter", fill: isDark ? "#94a3b8" : "#64748b", lineHeight: 1.5 })
          ]
        },
        {
          id: `biz-${cfg.id}-p2`,
          name: "Deliverables & Investment",
          elements: [
            el(`biz-${cfg.id}-p2-bg`, "rect", 0, 0, 1200, 1697, { fill: cfg.bg, locked: true }),
            el(`biz-${cfg.id}-p2-tag`, "text", 80, 80, 1040, 32, { text: "COMMERCIAL TERMS & TIMELINE", fontSize: 16, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: cfg.accent, letterSpacing: 3 }),
            el(`biz-${cfg.id}-p2-title`, "text", 80, 130, 1040, 60, { text: "Scope & Investment Summary", fontSize: 42, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: isDark ? "#ffffff" : "#0f172a" }),
            el(`biz-${cfg.id}-p2-c1`, "rect", 80, 220, 1040, 360, { fill: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)", borderRadius: 12, stroke: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)", strokeWidth: 1 }),
            el(`biz-${cfg.id}-p2-c1-t`, "text", 120, 260, 960, 36, { text: "1. Core Strategic Deliverables", fontSize: 22, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: cfg.accent }),
            el(`biz-${cfg.id}-p2-c1-p`, "text", 120, 310, 960, 230, { text: "• Turnkey deployment of end-to-end operational systems with guaranteed 99.9% SLA availability.\n• Multi-tier role-based access control and strict data privacy compliance.\n• 24/7 priority enterprise support and dedicated engineering liaison.\n• Bi-weekly steering committee syncs and quarterly executive KPI audits.", fontSize: 16, fontFamily: "Inter", fill: isDark ? "#cbd5e1" : "#334155", lineHeight: 1.8 }),
            el(`biz-${cfg.id}-p2-c2`, "rect", 80, 620, 1040, 360, { fill: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)", borderRadius: 12, stroke: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)", strokeWidth: 1 }),
            el(`biz-${cfg.id}-p2-c2-t`, "text", 120, 660, 960, 36, { text: "2. Commercial Pricing Structure", fontSize: 22, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: cfg.accent }),
            el(`biz-${cfg.id}-p2-c2-p`, "text", 120, 710, 960, 230, { text: "• Implementation & Customization: $120,000 fixed milestone fee.\n• Annual Platform Subscription: $48,000/year (billed annually).\n• Professional Services & Dedicated Training: Included in initial setup fee.\n• Payment terms: Net 30 days against verified deliverable acceptance.", fontSize: 16, fontFamily: "Inter", fill: isDark ? "#cbd5e1" : "#334155", lineHeight: 1.8 })
          ]
        }
      ];
    }

    business.push({
      id: cfg.id,
      name: cfg.name,
      title: cfg.name.toUpperCase(),
      description: `Bespoke Canva-grade business proposal and strategy deck tailored for ${cfg.sub}.`,
      category: "Business",
      subcategory: cfg.sub,
      size: `${cfg.w}×${cfg.h}`,
      canvasWidth: cfg.w,
      canvasHeight: cfg.h,
      orientation: cfg.orient,
      tags: ["Business", "Proposal", "Corporate", cfg.sub.split(" ")[0], "Strategy"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 4100 + (cfg.id * 8),
      views: 33000 + (cfg.id * 65),
      gradient: `linear-gradient(135deg, ${cfg.bg} 0%, ${cfg.accent} 100%)`,
      fonts: ["Plus Jakarta Sans", "Inter"],
      colors: [cfg.bg, cfg.accent, isDark ? "#ffffff" : "#0f172a", isDark ? "#94a3b8" : "#475569"],
      elements: slides[0].elements,
      slides
    });
  }

  return business;
}
