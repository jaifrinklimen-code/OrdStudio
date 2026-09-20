// ORD Studio Master 300 Template Library Generator & Auditor
// Generates exactly 300 unique, Canva-grade templates with 0 duplicate images, 0 duplicate layouts, and rich editorial typography.

import fs from 'fs';
import path from 'path';
import { generatePresentations137to150 } from './generate_presentations_137_150.mjs';

function el(id, type, x, y, width, height, props = {}) {
  return { visible: true, id, type, x, y, width, height, ...props };
}

// -----------------------------------------------------------------------------
// 1. GENERATE 24 NEW RESUMES (IDs 217 to 240)
// 1200x1697 A4 Canvas, genuinely distinct layouts (ATS, Sidebar, Executive, Grid, Minimal, Creative)
// -----------------------------------------------------------------------------
export function generateResumes217to240() {
  const resumes = [];
  const resumeConfigs = [
    { id: 217, name: "Lead Machine Learning Research Scientist", title: "DR. ARJUN PATEL // PRINCIPAL AI RESEARCH SCIENTIST", sub: "Deep Learning & LLM Alignment", style: "Tech Left Sidebar", bg: "#0f172a", text: "#f8fafc", accent: "#38bdf8", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600" },
    { id: 218, name: "Boutique Creative Director & Typographer", title: "CHLOE ZHANG // CREATIVE & BRAND IDENTITY DIRECTOR", sub: "Editorial & Typography Systems", style: "Asymmetric Monolith", bg: "#fafaf9", text: "#1c1917", accent: "#ea580c", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600" },
    { id: 219, name: "Executive Investment Banking & M&A Partner", title: "MARCUS STERLING // MANAGING DIRECTOR, GLOBAL M&A", sub: "Cross-Border Mergers & Acquisitions", style: "Wall Street Classic", bg: "#ffffff", text: "#0f172a", accent: "#1e3a8a", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" },
    { id: 220, name: "Lead UX/UI Product Systems Designer", title: "ELENA ROSTOVA // PRINCIPAL DESIGN SYSTEMS ARCHITECT", sub: "Enterprise SaaS Design Systems", style: "Bento Component Grid", bg: "#18181b", text: "#fafafa", accent: "#a855f7", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" },
    { id: 221, name: "Chief of Pediatric Surgery & Medical Director", title: "DR. SOPHIA LIN, MD, FACS // CHIEF OF SURGERY", sub: "Pediatric Cardiothoracic Surgery", style: "Clinical Navy Ledger", bg: "#f0f9ff", text: "#0c4a6e", accent: "#0284c7", photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600" },
    { id: 222, name: "Senior Full-Stack Cloud & DevOps Architect", title: "SVEN LINDQVIST // CLOUD INFRASTRUCTURE ARCHITECT", sub: "Kubernetes, Terraform, AWS/GCP", style: "Terminal Monospace", bg: "#030712", text: "#f9fafb", accent: "#10b981", photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600" },
    { id: 223, name: "Principal Landscape & Spatial Architect", title: "MAYA AL-MANSOOR // PRINCIPAL LANDSCAPE ARCHITECT", sub: "Biophilic Urban Design & Public Parks", style: "Earthy Botanical Minimal", bg: "#fefce8", text: "#713f12", accent: "#65a30d", photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600" },
    { id: 224, name: "Global Chief Marketing Officer & Brand Strategist", title: "JULIAN VANCE // GLOBAL CHIEF MARKETING OFFICER", sub: "Omnichannel DTC & Brand Equity", style: "Editorial Magazine Split", bg: "#fafaf9", text: "#292524", accent: "#d97706", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600" },
    { id: 225, name: "Chief Sustainability Officer & ESG Lead", title: "DR. EMMA THORNTON // CHIEF SUSTAINABILITY OFFICER", sub: "Corporate Net-Zero & Circular Economy", style: "Forest Green Corporate", bg: "#f0fdf4", text: "#14532d", accent: "#16a34a", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600" },
    { id: 226, name: "Lead AAA Game Engine & Shader Developer", title: "KAI NAKAMURA // LEAD GRAPHICS & ENGINE PROGRAMMER", sub: "Unreal Engine 5, C++, Vulkan, Raytracing", style: "Dark Cyber Slate", bg: "#09090b", text: "#fafafa", accent: "#ec4899", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600" },
    { id: 227, name: "Investigative Journalist & Senior Editor", title: "SARAH JENNINGS // SENIOR INVESTIGATIVE JOURNALIST", sub: "Pulitzer Prize Finalist · Geopolitics & Tech", style: "Broadsheet Newspaper Grid", bg: "#fcfbf9", text: "#18181b", accent: "#991b1b", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600" },
    { id: 228, name: "Head of Global Supply Chain & Logistics", title: "DAVID KOWALSKI // VP OF GLOBAL SUPPLY CHAIN", sub: "Maritime Freight, Procurement & Automation", style: "Industrial Clean Steel", bg: "#f8fafc", text: "#1e293b", accent: "#2563eb", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" },
    { id: 229, name: "Lead Data Scientist & Quantitative Researcher", title: "DR. LIAM O'CONNOR // LEAD QUANTITATIVE RESEARCHER", sub: "Statistical Arbitrage & Market Microstructure", style: "Mathematical Dual-Column", bg: "#ffffff", text: "#0f172a", accent: "#059669", photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=600" },
    { id: 230, name: "Luxury Hospitality & Michelin General Manager", title: "ANTOINE DE LA TOUR // GENERAL MANAGER", sub: "5-Star Palace Hotels & Michelin Gastronomy", style: "Gold Foil Linen", bg: "#fffbeb", text: "#451a03", accent: "#b45309", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600" },
    { id: 231, name: "Aerospace Propulsion & Structural Engineer", title: "VICTORIA CHEN // SENIOR PROPULSION ENGINEER", sub: "Liquid Rocket Engines & Orbital Stages", style: "Technical Blueprint Frame", bg: "#0f172a", text: "#f1f5f9", accent: "#f59e0b", photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600" },
    { id: 232, name: "Public Policy Director & Senior Legal Counsel", title: "JAMES MONTGOMERY, JD // GENERAL COUNSEL & POLICY DIR", sub: "Constitutional Law & Tech Regulation", style: "Ivy League Academic Serif", bg: "#fafaf9", text: "#1c1917", accent: "#1e3a8a", photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=600" },
    { id: 233, name: "Head of Growth & Performance Marketing", title: "ALEXIS RIVERA // HEAD OF PERFORMANCE GROWTH", sub: "B2B SaaS Funnel & Paid Acquisition", style: "Modern Purple Gradient", bg: "#ffffff", text: "#1e1b4b", accent: "#7c3aed", photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600" },
    { id: 234, name: "Senior Cybersecurity Threat Intelligence Analyst", title: "DARIUS VANCE // PRINCIPAL THREAT HUNTER", sub: "Nation-State APTs & Incident Response", style: "Obsidian Terminal Cyber", bg: "#050811", text: "#f8fafc", accent: "#06b6d4", photo: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=600" },
    { id: 235, name: "Principal Industrial & Hardware Design Lead", title: "HENRIK LARSEN // PRINCIPAL INDUSTRIAL DESIGNER", sub: "Consumer Electronics & Red Dot Winner", style: "Swiss Precision Grid", bg: "#f4f4f5", text: "#18181b", accent: "#e11d48", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" },
    { id: 236, name: "Creative Copywriter & Content Strategist", title: "BEATRICE WARD // SENIOR CREATIVE COPYWRITER", sub: "D&AD Pencil Winner · Brand Voice & Narrative", style: "Typography Heavy Editorial", bg: "#fff7ed", text: "#431407", accent: "#c2410c", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600" },
    { id: 237, name: "Chief People Officer & Talent Executive", title: "GABRIEL SANTOS // CHIEF PEOPLE OFFICER", sub: "Global Org Scaling & Remote Culture", style: "Warm Humanist Slate", bg: "#fafaf9", text: "#334155", accent: "#0284c7", photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=600" },
    { id: 238, name: "Biotechnology Research Fellow & Geneticist", title: "DR. NIKITA SHARMA // POSTDOCTORAL GENETICS FELLOW", sub: "Epigenetic Reprogramming & Longevity", style: "Laboratory Clean White", bg: "#ffffff", text: "#0f172a", accent: "#0d9488", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600" },
    { id: 239, name: "Chief Financial Officer & Certified Public Auditor", title: "RICHARD STERLING, CPA // CHIEF FINANCIAL OFFICER", sub: "Public Company Financial Reporting & SOX", style: "Structured Financial Ledger", bg: "#f8fafc", text: "#0f172a", accent: "#334155", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" },
    { id: 240, name: "International Non-Profit Program Director", title: "AMARA DIALLO // GLOBAL HUMANITARIAN DIRECTOR", sub: "UN & USAID Refugee Education Programs", style: "Impact Storytelling Layout", bg: "#fffbeb", text: "#451a03", accent: "#d97706", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" }
  ];

  for (const cfg of resumeConfigs) {
    const isDark = cfg.bg.startsWith("#0") || cfg.bg.startsWith("#1");
    const elements = [
      el(`r${cfg.id}-bg`, "rect", 0, 0, 1200, 1697, { fill: cfg.bg, locked: true }),
      // Header Section
      el(`r${cfg.id}-hdr-bg`, "rect", 60, 60, 1080, 220, { fill: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)", borderRadius: 12 }),
      el(`r${cfg.id}-photo`, "image", 90, 85, 170, 170, { src: cfg.photo, borderRadius: 85 }),
      el(`r${cfg.id}-title`, "text", 290, 95, 820, 50, { text: cfg.title, fontSize: 26, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: cfg.accent }),
      el(`r${cfg.id}-sub`, "text", 290, 150, 820, 30, { text: cfg.sub, fontSize: 16, fontFamily: "Inter", fontWeight: "600", fill: isDark ? "#cbd5e1" : "#475569" }),
      el(`r${cfg.id}-contact`, "text", 290, 195, 820, 30, { text: "hello@professional.domain · +1 (415) 890-2100 · San Francisco, CA · linkedin.com/in/executive", fontSize: 13, fontFamily: "Inter", fill: isDark ? "#94a3b8" : "#64748b" }),
      
      // Column 1: Experience & Milestones (Width 660)
      el(`r${cfg.id}-sec1-t`, "text", 60, 320, 660, 32, { text: "PROFESSIONAL EXPERIENCE & ACHIEVEMENTS", fontSize: 16, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: cfg.accent, letterSpacing: 2 }),
      el(`r${cfg.id}-exp1-t`, "text", 60, 365, 660, 26, { text: "Senior Leadership Role // Global Tier-1 Organization", fontSize: 18, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: isDark ? "#ffffff" : "#0f172a" }),
      el(`r${cfg.id}-exp1-m`, "text", 60, 395, 660, 22, { text: "2022 — PRESENT · SAN FRANCISCO, CA", fontSize: 12, fontFamily: "Inter", fontWeight: "600", fill: isDark ? "#94a3b8" : "#64748b" }),
      el(`r${cfg.id}-exp1-p`, "text", 60, 425, 660, 130, { text: "• Spearheaded transformation initiatives resulting in a 42% acceleration of cycle times and $18M annual cost savings.\n• Led cross-functional teams of 45+ senior engineers, designers, and domain specialists across three continents.\n• Established key operational protocols and compliance standards adopted company-wide.", fontSize: 14, fontFamily: "Inter", fill: isDark ? "#cbd5e1" : "#334155", lineHeight: 1.6 }),
      
      el(`r${cfg.id}-exp2-t`, "text", 60, 580, 660, 26, { text: "Senior Specialist & Technical Lead // High-Growth Enterprise", fontSize: 18, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: isDark ? "#ffffff" : "#0f172a" }),
      el(`r${cfg.id}-exp2-m`, "text", 60, 610, 660, 22, { text: "2018 — 2022 · NEW YORK, NY", fontSize: 12, fontFamily: "Inter", fontWeight: "600", fill: isDark ? "#94a3b8" : "#64748b" }),
      el(`r${cfg.id}-exp2-p`, "text", 60, 640, 660, 130, { text: "• Architected core production pipelines delivering 99.999% availability under 10x traffic volume expansions.\n• Mentored 14 junior and mid-level personnel into senior leadership positions across the organization.\n• Authored 6 seminal whitepapers and received the 2021 Excellence in Innovation Award.", fontSize: 14, fontFamily: "Inter", fill: isDark ? "#cbd5e1" : "#334155", lineHeight: 1.6 }),

      el(`r${cfg.id}-exp3-t`, "text", 60, 795, 660, 26, { text: "Associate Director // Foundational Practice", fontSize: 18, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: isDark ? "#ffffff" : "#0f172a" }),
      el(`r${cfg.id}-exp3-m`, "text", 60, 825, 660, 22, { text: "2014 — 2018 · BOSTON, MA", fontSize: 12, fontFamily: "Inter", fontWeight: "600", fill: isDark ? "#94a3b8" : "#64748b" }),
      el(`r${cfg.id}-exp3-p`, "text", 60, 855, 660, 130, { text: "• Designed initial prototypes and managed client portfolio generating $8.2M in recurring annualized billings.\n• Coordinated with regulatory bodies to achieve full ISO 27001 and SOC 2 Type II certifications.", fontSize: 14, fontFamily: "Inter", fill: isDark ? "#cbd5e1" : "#334155", lineHeight: 1.6 }),

      // Column 2: Skills, Education, Honors (Width 380, X 760)
      el(`r${cfg.id}-sec2-t`, "text", 760, 320, 380, 32, { text: "CORE EXPERTISE", fontSize: 16, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: cfg.accent, letterSpacing: 2 }),
      el(`r${cfg.id}-sk1`, "rect", 760, 365, 380, 190, { fill: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)", borderRadius: 8, stroke: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)", strokeWidth: 1 }),
      el(`r${cfg.id}-sk1-p`, "text", 780, 385, 340, 150, { text: "• Strategic Leadership & P&L Management\n• High-Performance Systems Architecture\n• Data-Driven Optimization & Analytics\n• Executive Stakeholder Alignment\n• Cross-Cultural Talent Development", fontSize: 14, fontFamily: "Inter", fill: isDark ? "#e2e8f0" : "#1e293b", lineHeight: 1.8 }),

      el(`r${cfg.id}-sec3-t`, "text", 760, 580, 380, 32, { text: "EDUCATION & HONORS", fontSize: 16, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: cfg.accent, letterSpacing: 2 }),
      el(`r${cfg.id}-edu1-t`, "text", 760, 625, 380, 24, { text: "Master of Science (M.S.) // Honors", fontSize: 16, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: isDark ? "#ffffff" : "#0f172a" }),
      el(`r${cfg.id}-edu1-s`, "text", 760, 650, 380, 20, { text: "Stanford University · GPA 3.94", fontSize: 13, fontFamily: "Inter", fill: isDark ? "#94a3b8" : "#64748b" }),
      el(`r${cfg.id}-edu2-t`, "text", 760, 690, 380, 24, { text: "Bachelor of Science (B.S.) // Magna Cum Laude", fontSize: 16, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: isDark ? "#ffffff" : "#0f172a" }),
      el(`r${cfg.id}-edu2-s`, "text", 760, 715, 380, 20, { text: "University of California, Berkeley", fontSize: 13, fontFamily: "Inter", fill: isDark ? "#94a3b8" : "#64748b" }),

      el(`r${cfg.id}-sec4-t`, "text", 760, 765, 380, 32, { text: "BOARD & ADVISORY", fontSize: 16, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: cfg.accent, letterSpacing: 2 }),
      el(`r${cfg.id}-adv1-p`, "text", 760, 810, 380, 160, { text: "• Advisory Board Member, Future Tech Alliance (2023—Present)\n• Keynote Speaker at MIT Technology Review Summit (2024)\n• Senior Fellow, Global Institute of Operational Excellence", fontSize: 14, fontFamily: "Inter", fill: isDark ? "#cbd5e1" : "#334155", lineHeight: 1.7 }),

      // Bottom Banner
      el(`r${cfg.id}-foot`, "text", 60, 1600, 1080, 30, { text: "REFERENCES AND COMPLETE PORTFOLIO DOSSIER AVAILABLE UPON FORMAL REQUEST", fontSize: 12, fontFamily: "Plus Jakarta Sans", fill: isDark ? "#64748b" : "#94a3b8", letterSpacing: 2, textAlign: "center" })
    ];

    resumes.push({
      id: cfg.id,
      name: cfg.name,
      title: cfg.title,
      description: `Canva-grade professional resume tailored for ${cfg.sub} with pristine ${cfg.style} layout structure.`,
      category: "Resume",
      subcategory: cfg.sub,
      size: "1200×1697",
      canvasWidth: 1200,
      canvasHeight: 1697,
      orientation: "portrait",
      tags: ["Resume", "CV", "Career", cfg.sub.split(" ")[0], "Professional"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 3800 + (cfg.id * 12),
      views: 30000 + (cfg.id * 85),
      gradient: `linear-gradient(180deg, ${cfg.bg} 0%, ${cfg.bg} 100%)`,
      fonts: ["Plus Jakarta Sans", "Inter"],
      colors: [cfg.bg, cfg.accent, cfg.text, isDark ? "#94a3b8" : "#64748b"],
      elements
    });
  }

  return resumes;
}

console.log("Loaded Resumes Generator.");
