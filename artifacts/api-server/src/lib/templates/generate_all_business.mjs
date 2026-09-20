import fs from 'fs';
import path from 'path';
import { PHOTOS_BUSINESS } from './uniquePhotoPool.ts';

function el(id, type, x, y, width, height, props = {}) {
  return {
    visible: true,
    id,
    type,
    x,
    y,
    width,
    height,
    ...props
  };
}

export const BUSINESS_TEMPLATES = [
  // =========================================================================
  // 601: ENTERPRISE CLOUD ARCHITECTURE PROPOSAL (Left title, Right vertical photo)
  // =========================================================================
  {
    id: 601,
    name: "Enterprise SaaS Cloud Migration Proposal",
    title: "CLOUD MIGRATION & DISTRIBUTED AI PLATFORM PROPOSAL",
    description: "Bespoke enterprise business proposal with clear deliverables matrix, investment breakdown, and custom typography (Space Grotesk).",
    category: "Business",
    subcategory: "SaaS Proposal",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["SaaS Proposal", "Business", "Proposal", "Enterprise", "Pitch", "Cloud"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3890,
    views: 29400,
    gradient: "linear-gradient(135deg, #0b0f19 0%, #1e293b 100%)",
    fonts: ["Space Grotesk", "Inter"],
    colors: ["#0b0f19", "#38bdf8", "#ffffff", "#94a3b8"],
    elements: [],
    slides: [
      {
        id: "biz-601-p1",
        name: "Cover & Scope",
        elements: [
          el("biz-601-p1-bg", "rect", 0, 0, 1200, 1697, { fill: "#0b0f19", locked: true }),
          el("biz-601-p1-badge", "rect", 80, 80, 260, 36, { fill: "#38bdf8", borderRadius: 18 }),
          el("biz-601-p1-badget", "text", 80, 90, 260, 18, { text: "ENTERPRISE PROPOSAL", fontSize: 11, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#0b0f19", textAlign: "center", letterSpacing: 2 }),
          el("biz-601-p1-title", "text", 80, 150, 580, 180, { text: "ENTERPRISE CLOUD\nMIGRATION &\nAI PLATFORM", fontSize: 44, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff", lineHeight: 1.1 }),
          el("biz-601-p1-sub", "text", 80, 350, 580, 60, { text: "Architectural blueprint, phased cutover strategy, and enterprise SLA framework.", fontSize: 16, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.6 }),
          el("biz-601-p1-div", "rect", 80, 430, 580, 2, { fill: "#38bdf8" }),
          el("biz-601-p1-client-l", "text", 80, 460, 260, 20, { text: "PREPARED FOR", fontSize: 12, fontFamily: "Space Grotesk", fill: "#64748b" }),
          el("biz-601-p1-client-v", "text", 80, 485, 260, 30, { text: "Meridian Financial Corp", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#ffffff" }),
          el("biz-601-p1-auth-l", "text", 360, 460, 260, 20, { text: "PREPARED BY", fontSize: 12, fontFamily: "Space Grotesk", fill: "#64748b" }),
          el("biz-601-p1-auth-v", "text", 360, 485, 260, 30, { text: "ORD Cloud Solutions Ltd", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#38bdf8" }),
          el("biz-601-p1-img", "image", 700, 140, 420, 680, { src: PHOTOS_BUSINESS['601_p1'], borderRadius: 16 }),
          el("biz-601-p1-card", "rect", 80, 880, 1040, 480, { fill: "#131926", stroke: "#1e3a5f", strokeWidth: 1, borderRadius: 16 }),
          el("biz-601-p1-c-h", "text", 120, 915, 960, 30, { text: "EXECUTIVE SUMMARY & TRANSFORMATION MANDATE", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#38bdf8", letterSpacing: 1 }),
          el("biz-601-p1-c-p", "text", 120, 960, 960, 360, { text: "This proposal establishes the technical and commercial framework for transitioning Meridian Financial Corp's mission-critical core banking services to a multi-region distributed hybrid cloud.\n\nKey Objectives:\n• 99.999% Service Level Availability across active-active redundant regions\n• Zero-downtime microservice migration for 45 legacy transactional workflows\n• Projected 42% operational expenditure reduction within 24 months\n• Enterprise SOC-2 Type II, ISO 27001, and PCI-DSS Level 1 compliance certification.", fontSize: 15, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.8 })
        ]
      },
      {
        id: "biz-601-p2",
        name: "Roadmap & Commercials",
        elements: [
          el("biz-601-p2-bg", "rect", 0, 0, 1200, 1697, { fill: "#0b0f19", locked: true }),
          el("biz-601-p2-h", "text", 80, 80, 1040, 50, { text: "02 // MIGRATION ROADMAP & INVESTMENT", fontSize: 32, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
          el("biz-601-p2-ph1", "rect", 80, 160, 320, 300, { fill: "#131926", stroke: "#38bdf8", strokeWidth: 1, borderRadius: 12 }),
          el("biz-601-p2-ph1-t", "text", 100, 185, 280, 30, { text: "PHASE 1: AUDIT", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#38bdf8" }),
          el("biz-601-p2-ph1-d", "text", 100, 225, 280, 200, { text: "Months 1-3\n\n• Codebase dependency audit\n• Kubernetes containerization\n• Network topography design\n• Sandbox CI/CD pipelines", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 }),
          el("biz-601-p2-ph2", "rect", 440, 160, 320, 300, { fill: "#131926", stroke: "#38bdf8", strokeWidth: 1, borderRadius: 12 }),
          el("biz-601-p2-ph2-t", "text", 460, 185, 280, 30, { text: "PHASE 2: CUTOVER", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#38bdf8" }),
          el("biz-601-p2-ph2-d", "text", 460, 225, 280, 200, { text: "Months 4-8\n\n• Dual-write database replication\n• Canary traffic shedding\n• Edge proxy DNS failover\n• Load testing at 25k req/sec", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 }),
          el("biz-601-p2-ph3", "rect", 800, 160, 320, 300, { fill: "#131926", stroke: "#38bdf8", strokeWidth: 1, borderRadius: 12 }),
          el("biz-601-p2-ph3-t", "text", 820, 185, 280, 30, { text: "PHASE 3: SCALE", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#38bdf8" }),
          el("biz-601-p2-ph3-d", "text", 820, 225, 280, 200, { text: "Months 9-12\n\n• Legacy server decommissioning\n• AI telemetry auto-scaling\n• Tier-3 disaster recovery live run\n• Final SLA sign-off handover", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 }),
          el("biz-601-p2-tbl", "rect", 80, 500, 1040, 340, { fill: "#131926", borderRadius: 12 }),
          el("biz-601-p2-tbl-h", "text", 120, 530, 960, 30, { text: "COMMERCIAL ENGAGEMENT STRUCTURE", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#ffffff" }),
          el("biz-601-p2-tbl-row1", "text", 120, 580, 960, 30, { text: "Architecture Assessment & Discovery ............................................. $125,000", fontSize: 15, fontFamily: "Space Grotesk", fill: "#94a3b8" }),
          el("biz-601-p2-tbl-row2", "text", 120, 620, 960, 30, { text: "Core Infrastructure Re-Platforming .............................................. $340,000", fontSize: 15, fontFamily: "Space Grotesk", fill: "#94a3b8" }),
          el("biz-601-p2-tbl-row3", "text", 120, 660, 960, 30, { text: "Security Hardening & SOC-2 Certification Support ......................... $110,000", fontSize: 15, fontFamily: "Space Grotesk", fill: "#94a3b8" }),
          el("biz-601-p2-tbl-row4", "text", 120, 700, 960, 30, { text: "Ongoing 24/7 SRE Support & Managed Operations (Annual) ............... $180,000", fontSize: 15, fontFamily: "Space Grotesk", fill: "#94a3b8" }),
          el("biz-601-p2-tbl-total", "text", 120, 760, 960, 40, { text: "TOTAL CONTRACT COMMITMENT: $755,000 USD", fontSize: 20, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#38bdf8" }),
          el("biz-601-p2-img", "image", 80, 880, 1040, 520, { src: PHOTOS_BUSINESS['601_p2'], borderRadius: 16 })
        ]
      }
    ]
  },

  // =========================================================================
  // 602: CORPORATE TURNAROUND & STRATEGY (Pinstripe navy/burgundy, bottom photo)
  // =========================================================================
  {
    id: 602,
    name: "Corporate Turnaround Strategy Plan",
    title: "CORPORATE TURNAROUND & OPERATIONAL RESTRUCTURING PLAN",
    description: "Senior management consulting report and strategy proposal with executive diagnostic summary and EBITDA expansion roadmap.",
    category: "Business",
    subcategory: "Strategy Proposal",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Strategy", "Turnaround", "Executive", "Consulting", "Restructuring"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3410,
    views: 26800,
    gradient: "linear-gradient(180deg, #091322 0%, #152438 100%)",
    fonts: ["DM Serif Display", "Inter"],
    colors: ["#091322", "#e2e8f0", "#991b1b", "#cbd5e1"],
    elements: [],
    slides: [
      {
        id: "biz-602-p1",
        name: "Executive Cover",
        elements: [
          el("biz-602-p1-bg", "rect", 0, 0, 1200, 1697, { fill: "#091322", locked: true }),
          el("biz-602-p1-border", "rect", 50, 50, 1100, 1597, { fill: "transparent", stroke: "#991b1b", strokeWidth: 2 }),
          el("biz-602-p1-ref", "text", 90, 90, 1020, 24, { text: "BOARD OF DIRECTORS // STRICTLY CONFIDENTIAL // REF-TR-2026", fontSize: 13, fontFamily: "Inter", fontWeight: "700", fill: "#991b1b", letterSpacing: 3 }),
          el("biz-602-p1-title", "text", 90, 140, 1020, 150, { text: "STRATEGIC TURNAROUND\n& VALUE CREATION PLAN", fontSize: 56, fontFamily: "DM Serif Display", fontWeight: "700", fill: "#ffffff", lineHeight: 1.1 }),
          el("biz-602-p1-sub", "text", 90, 310, 1020, 60, { text: "Comprehensive operational diagnosis, SG&A rationalization, and capital allocation strategy for FY 2026–2028.", fontSize: 18, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 }),
          el("biz-602-p1-c1", "rect", 90, 410, 320, 200, { fill: "#111f36", stroke: "#1e3354", strokeWidth: 1, borderRadius: 8 }),
          el("biz-602-p1-c1-t", "text", 110, 435, 280, 26, { text: "OPEX EFFICIENCY", fontSize: 15, fontFamily: "Inter", fontWeight: "700", fill: "#f87171" }),
          el("biz-602-p1-c1-p", "text", 110, 470, 280, 110, { text: "Eliminating $42M redundant middle-tier overhead across 4 regional operating units.", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.5 }),
          el("biz-602-p1-c2", "rect", 440, 410, 320, 200, { fill: "#111f36", stroke: "#1e3354", strokeWidth: 1, borderRadius: 8 }),
          el("biz-602-p1-c2-t", "text", 460, 435, 280, 26, { text: "GROSS MARGINS", fontSize: 15, fontFamily: "Inter", fontWeight: "700", fill: "#f87171" }),
          el("biz-602-p1-c2-p", "text", 460, 470, 280, 110, { text: "Renegotiating Tier-1 supplier master agreements to recover 380 bps in gross margin.", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.5 }),
          el("biz-602-p1-c3", "rect", 790, 410, 320, 200, { fill: "#111f36", stroke: "#1e3354", strokeWidth: 1, borderRadius: 8 }),
          el("biz-602-p1-c3-t", "text", 810, 435, 280, 26, { text: "CASH FLOW", fontSize: 15, fontFamily: "Inter", fontWeight: "700", fill: "#f87171" }),
          el("biz-602-p1-c3-p", "text", 810, 470, 280, 110, { text: "Optimizing inventory turns from 3.2x to 5.8x to unlock $65M trapped working capital.", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.5 }),
          el("biz-602-p1-img", "image", 90, 650, 1020, 780, { src: PHOTOS_BUSINESS['602_p1'], borderRadius: 12 })
        ]
      },
      {
        id: "biz-602-p2",
        name: "Execution Framework",
        elements: [
          el("biz-602-p2-bg", "rect", 0, 0, 1200, 1697, { fill: "#091322", locked: true }),
          el("biz-602-p2-h", "text", 90, 90, 1020, 44, { text: "02 // 100-DAY ACTION GANTT & VALUE CAPTURE", fontSize: 32, fontFamily: "DM Serif Display", fill: "#ffffff" }),
          el("biz-602-p2-box1", "rect", 90, 170, 1020, 180, { fill: "#111f36", borderRadius: 8 }),
          el("biz-602-p2-b1-h", "text", 120, 195, 960, 28, { text: "DAYS 1–30: LIQUIDITY STABILIZATION & CASH CONTROL", fontSize: 16, fontFamily: "Inter", fontWeight: "700", fill: "#f87171" }),
          el("biz-602-p2-b1-p", "text", 120, 230, 960, 90, { text: "Impose zero-based expenditure approvals across all business units. Freeze non-revenue discretionary hiring. Establish weekly rolling 13-week cash forecast overseen directly by the restructuring committee.", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 }),
          el("biz-602-p2-box2", "rect", 90, 380, 1020, 180, { fill: "#111f36", borderRadius: 8 }),
          el("biz-602-p2-b2-h", "text", 120, 405, 960, 28, { text: "DAYS 31–60: ORGANIZATIONAL REALIGNMENT & FOOTPRINT CONSOLIDATION", fontSize: 16, fontFamily: "Inter", fontWeight: "700", fill: "#f87171" }),
          el("biz-602-p2-b2-p", "text", 120, 440, 960, 90, { text: "Exit four unprofitable sub-scale European leased warehouses. Consolidate ERP licenses into unified cloud instance. Transition enterprise customer success teams into centralized regional delivery hubs.", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 }),
          el("biz-602-p2-box3", "rect", 90, 590, 1020, 180, { fill: "#111f36", borderRadius: 8 }),
          el("biz-602-p2-b3-h", "text", 120, 615, 960, 28, { text: "DAYS 61–100: PRICING DISCIPLINE & NEW GROWTH ENGINE", fontSize: 16, fontFamily: "Inter", fontWeight: "700", fill: "#f87171" }),
          el("biz-602-p2-b3-p", "text", 120, 650, 960, 90, { text: "Implement value-based contractual pricing tiers, eliminating negative-margin legacy client discounts. Deploy automated sales intelligence tooling to accelerate enterprise account expansion.", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 }),
          el("biz-602-p2-img", "image", 90, 810, 1020, 700, { src: PHOTOS_BUSINESS['602_p2'], borderRadius: 12 })
        ]
      }
    ]
  },

  // =========================================================================
  // 603: SERIES B VENTURE CAPITAL MEMO (Full-bleed photo top half, stats bottom)
  // =========================================================================
  {
    id: 603,
    name: "Series B Venture Capital Pitch Memo",
    title: "SERIES B INVESTMENT MEMORANDUM & CAP TABLE",
    description: "Venture capital investment memorandum with Cap table capitalization, ARR traction curve, and $25M growth round allocation.",
    category: "Business",
    subcategory: "Venture Capital",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Venture Capital", "Pitch", "Series B", "Investment", "Cap Table"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4120,
    views: 31200,
    gradient: "linear-gradient(180deg, #09090b 0%, #18181b 100%)",
    fonts: ["Oswald", "Inter"],
    colors: ["#09090b", "#10b981", "#ffffff", "#71717a"],
    elements: [],
    slides: [
      {
        id: "biz-603-p1",
        name: "Pitch Memo Cover",
        elements: [
          el("biz-603-p1-bg", "rect", 0, 0, 1200, 1697, { fill: "#09090b", locked: true }),
          el("biz-603-p1-img", "image", 0, 0, 1200, 750, { src: PHOTOS_BUSINESS['603_p1'] }),
          el("biz-603-p1-scrim", "rect", 0, 0, 1200, 750, { fill: "#09090b", opacity: 0.4 }),
          el("biz-603-p1-ticker", "rect", 80, 80, 240, 40, { fill: "#10b981", borderRadius: 4 }),
          el("biz-603-p1-tickert", "text", 80, 90, 240, 20, { text: "SERIES B // $25M ROUND", fontSize: 13, fontFamily: "Oswald", fontWeight: "700", fill: "#09090b", textAlign: "center", letterSpacing: 2 }),
          el("biz-603-p1-title", "text", 80, 480, 1040, 160, { text: "NEXUS AI SYSTEMS:\nSERIES B FINANCING", fontSize: 64, fontFamily: "Oswald", fontWeight: "800", fill: "#ffffff", lineHeight: 1.05 }),
          el("biz-603-p1-sub", "text", 80, 660, 1040, 40, { text: "INVESTMENT MEMORANDUM & COMMERCIAL SCALING SYNOPSIS", fontSize: 16, fontFamily: "Inter", fontWeight: "600", fill: "#10b981", letterSpacing: 2 }),
          
          // Metrics Cards
          el("biz-603-p1-m1", "rect", 80, 820, 320, 180, { fill: "#18181b", stroke: "#27272a", strokeWidth: 1, borderRadius: 8 }),
          el("biz-603-p1-m1-l", "text", 110, 845, 260, 20, { text: "CURRENT ARR", fontSize: 12, fontFamily: "Inter", fill: "#71717a", letterSpacing: 2 }),
          el("biz-603-p1-m1-v", "text", 110, 875, 260, 50, { text: "$18.4M", fontSize: 44, fontFamily: "Oswald", fontWeight: "800", fill: "#10b981" }),
          el("biz-603-p1-m1-sub", "text", 110, 935, 260, 30, { text: "+240% YoY Net Growth", fontSize: 13, fontFamily: "Inter", fill: "#a1a1aa" }),

          el("biz-603-p1-m2", "rect", 440, 820, 320, 180, { fill: "#18181b", stroke: "#27272a", strokeWidth: 1, borderRadius: 8 }),
          el("biz-603-p1-m2-l", "text", 470, 845, 260, 20, { text: "NET RETENTION", fontSize: 12, fontFamily: "Inter", fill: "#71717a", letterSpacing: 2 }),
          el("biz-603-p1-m2-v", "text", 470, 875, 260, 50, { text: "142%", fontSize: 44, fontFamily: "Oswald", fontWeight: "800", fill: "#ffffff" }),
          el("biz-603-p1-m2-sub", "text", 470, 935, 260, 30, { text: "Enterprise Tier Expansion", fontSize: 13, fontFamily: "Inter", fill: "#a1a1aa" }),

          el("biz-603-p1-m3", "rect", 800, 820, 320, 180, { fill: "#18181b", stroke: "#27272a", strokeWidth: 1, borderRadius: 8 }),
          el("biz-603-p1-m3-l", "text", 830, 845, 260, 20, { text: "GROSS MARGIN", fontSize: 12, fontFamily: "Inter", fill: "#71717a", letterSpacing: 2 }),
          el("biz-603-p1-m3-v", "text", 830, 875, 260, 50, { text: "78.5%", fontSize: 44, fontFamily: "Oswald", fontWeight: "800", fill: "#10b981" }),
          el("biz-603-p1-m3-sub", "text", 830, 935, 260, 30, { text: "Proprietary Inference Engine", fontSize: 13, fontFamily: "Inter", fill: "#a1a1aa" }),

          // Executive Summary Box
          el("biz-603-p1-sum", "rect", 80, 1040, 1040, 300, { fill: "#141416", borderRadius: 8, stroke: "#27272a", strokeWidth: 1 }),
          el("biz-603-p1-sum-t", "text", 120, 1070, 960, 30, { text: "THE INVESTMENT THESIS", fontSize: 18, fontFamily: "Oswald", fontWeight: "700", fill: "#ffffff" }),
          el("biz-603-p1-sum-p", "text", 120, 1115, 960, 190, { text: "Nexus AI delivers sovereign, air-gapped autonomous agents for Fortune 500 regulatory compliance and critical infrastructure.\n\nWith $18.4M ARR achieved on just $6M seed and Series A capital, capital efficiency exceeds 3.0x ARR/Capital Ratio. Series B will finance enterprise sales team scaling in EMEA and sovereign cloud infrastructure buildout.", fontSize: 15, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.7 })
        ]
      },
      {
        id: "biz-603-p2",
        name: "Cap Table & Use of Proceeds",
        elements: [
          el("biz-603-p2-bg", "rect", 0, 0, 1200, 1697, { fill: "#09090b", locked: true }),
          el("biz-603-p2-h", "text", 80, 80, 1040, 48, { text: "02 // CAP TABLE DILUTION & USE OF PROCEEDS", fontSize: 32, fontFamily: "Oswald", fontWeight: "800", fill: "#ffffff" }),
          el("biz-603-p2-tbl", "rect", 80, 160, 1040, 360, { fill: "#18181b", borderRadius: 8 }),
          el("biz-603-p2-th", "text", 120, 190, 960, 30, { text: "POST-SERIES B OWNERSHIP STRUCTURE (PRO-FORMA)", fontSize: 16, fontFamily: "Oswald", fontWeight: "700", fill: "#10b981" }),
          el("biz-603-p2-r1", "text", 120, 240, 960, 30, { text: "Founding Team & Employee Option Pool (Post-Pool) ........................... 54.2%", fontSize: 15, fontFamily: "Inter", fill: "#e2e8f0" }),
          el("biz-603-p2-r2", "text", 120, 280, 960, 30, { text: "Series Seed & Series A Investors (Lead: Lightspeed) ......................... 25.8%", fontSize: 15, fontFamily: "Inter", fill: "#e2e8f0" }),
          el("biz-603-p2-r3", "text", 120, 320, 960, 30, { text: "Series B New Lead Investor ($20M Primary) ..................................... 16.0%", fontSize: 15, fontFamily: "Inter", fill: "#10b981", fontWeight: "700" }),
          el("biz-603-p2-r4", "text", 120, 360, 960, 30, { text: "Series B Syndicate / Strategic Partners ($5M Primary) ..................... 4.0%", fontSize: 15, fontFamily: "Inter", fill: "#10b981", fontWeight: "700" }),
          el("biz-603-p2-r5", "text", 120, 420, 960, 30, { text: "POST-MONEY VALUATION: $125,000,000 USD", fontSize: 18, fontFamily: "Oswald", fontWeight: "700", fill: "#ffffff" }),
          el("biz-603-p2-img", "image", 80, 560, 1040, 680, { src: PHOTOS_BUSINESS['603_p2'], borderRadius: 12 })
        ]
      }
    ]
  },

  // =========================================================================
  // 604: OMNICHANNEL MARKETING CAMPAIGN (Top right photo, left typography)
  // =========================================================================
  {
    id: 604,
    name: "Omnichannel Marketing Strategy & Campaign Brief",
    title: "OMNICHANNEL MARKETING STRATEGY & CAMPAIGN BRIEF",
    description: "Vibrant full-funnel marketing brief with media spend distribution, conversion benchmarks, and creative asset roadmap.",
    category: "Business",
    subcategory: "Marketing Brief",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Marketing", "Campaign", "Omnichannel", "Strategy", "Media Brief"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3740,
    views: 28500,
    gradient: "linear-gradient(135deg, #180d2b 0%, #31134f 100%)",
    fonts: ["Syne", "Inter"],
    colors: ["#180d2b", "#d946ef", "#8b5cf6", "#ffffff"],
    elements: [],
    slides: [
      {
        id: "biz-604-p1",
        name: "Campaign Cover",
        elements: [
          el("biz-604-p1-bg", "rect", 0, 0, 1200, 1697, { fill: "#180d2b", locked: true }),
          el("biz-604-p1-badge", "rect", 80, 80, 240, 36, { fill: "#d946ef", borderRadius: 18 }),
          el("biz-604-p1-badget", "text", 80, 90, 240, 18, { text: "Q3 GLOBAL LAUNCH", fontSize: 11, fontFamily: "Syne", fontWeight: "800", fill: "#ffffff", textAlign: "center", letterSpacing: 2 }),
          
          // Left side: Title & Brief details
          el("biz-604-p1-title", "text", 80, 150, 560, 200, { text: "PULSE 2026:\nGLOBAL PRODUCT\nMARKETING BRIEF", fontSize: 46, fontFamily: "Syne", fontWeight: "800", fill: "#ffffff", lineHeight: 1.1 }),
          el("biz-604-p1-sub", "text", 80, 370, 560, 60, { text: "Cross-platform creator activation, performance ad matrix, and cultural moment hijacking.", fontSize: 15, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 }),
          
          // Right side: Top Right Photo Card
          el("biz-604-p1-img", "image", 680, 120, 440, 480, { src: PHOTOS_BUSINESS['604_p1'], borderRadius: 16 }),

          // Lower Full Width Funnel Cards
          el("biz-604-p1-f1", "rect", 80, 650, 320, 280, { fill: "#24143e", stroke: "#8b5cf6", strokeWidth: 1, borderRadius: 12 }),
          el("biz-604-p1-f1-h", "text", 110, 680, 260, 30, { text: "01 // AWARENESS", fontSize: 16, fontFamily: "Syne", fontWeight: "800", fill: "#d946ef" }),
          el("biz-604-p1-f1-p", "text", 110, 720, 260, 180, { text: "Top-of-funnel reach\n\n• 40M TikTok / Reel impressions\n• 12 Tier-1 YouTube sponsors\n• High-impact billboards in NYC & London", fontSize: 14, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.6 }),

          el("biz-604-p1-f2", "rect", 440, 650, 320, 280, { fill: "#24143e", stroke: "#8b5cf6", strokeWidth: 1, borderRadius: 12 }),
          el("biz-604-p1-f2-h", "text", 470, 680, 260, 30, { text: "02 // ENGAGEMENT", fontSize: 16, fontFamily: "Syne", fontWeight: "800", fill: "#d946ef" }),
          el("biz-604-p1-f2-p", "text", 470, 720, 260, 180, { text: "Mid-funnel community\n\n• Interactive AR filter challenges\n• Discord VIP alpha launch access\n• 150 micro-influencer seeding kits", fontSize: 14, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.6 }),

          el("biz-604-p1-f3", "rect", 800, 650, 320, 280, { fill: "#24143e", stroke: "#8b5cf6", strokeWidth: 1, borderRadius: 12 }),
          el("biz-604-p1-f3-h", "text", 830, 680, 260, 30, { text: "03 // CONVERSION", fontSize: 16, fontFamily: "Syne", fontWeight: "800", fill: "#d946ef" }),
          el("biz-604-p1-f3-p", "text", 830, 720, 260, 180, { text: "Bottom-funnel checkout\n\n• Retargeting CPA target: $32\n• Free shipping countdown timers\n• Day-1 pre-order exclusive drops", fontSize: 14, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.6 })
        ]
      },
      {
        id: "biz-604-p2",
        name: "Budget & KPI Targets",
        elements: [
          el("biz-604-p2-bg", "rect", 0, 0, 1200, 1697, { fill: "#180d2b", locked: true }),
          el("biz-604-p2-h", "text", 80, 80, 1040, 50, { text: "02 // MEDIA ALLOCATION & CAMPAIGN KPIS", fontSize: 32, fontFamily: "Syne", fontWeight: "800", fill: "#ffffff" }),
          el("biz-604-p2-box", "rect", 80, 160, 1040, 320, { fill: "#24143e", borderRadius: 12 }),
          el("biz-604-p2-th", "text", 120, 190, 960, 30, { text: "TOTAL CAMPAIGN SPEND: $1,200,000 USD", fontSize: 18, fontFamily: "Syne", fontWeight: "700", fill: "#d946ef" }),
          el("biz-604-p2-r1", "text", 120, 240, 960, 30, { text: "Paid Social & Programmatic Video (Meta, TikTok, YouTube) ........... $480,000 (40%)", fontSize: 15, fontFamily: "Inter", fill: "#cbd5e1" }),
          el("biz-604-p2-r2", "text", 120, 280, 960, 30, { text: "Influencer Partnerships & Creator Talent ...................................... $360,000 (30%)", fontSize: 15, fontFamily: "Inter", fill: "#cbd5e1" }),
          el("biz-604-p2-r3", "text", 120, 320, 960, 30, { text: "Out-of-Home Experiential Popups (NYC & LA) .............................. $240,000 (20%)", fontSize: 15, fontFamily: "Inter", fill: "#cbd5e1" }),
          el("biz-604-p2-r4", "text", 120, 360, 960, 30, { text: "PR & Earned Media Agency Retainer ........................................... $120,000 (10%)", fontSize: 15, fontFamily: "Inter", fill: "#cbd5e1" }),
          el("biz-604-p2-img", "image", 80, 520, 1040, 680, { src: PHOTOS_BUSINESS['604_p2'], borderRadius: 12 })
        ]
      }
    ]
  },

  // =========================================================================
  // 605: MASTER SERVICES AGREEMENT (Legal contract format, double rules)
  // =========================================================================
  {
    id: 605,
    name: "Master Services Agreement & Statement of Work",
    title: "MASTER SERVICES AGREEMENT & SCOPE OF WORK",
    description: "Formal enterprise legal agreement with SLA guarantees, confidentiality terms, IP ownership rights, and bilateral signature blocks.",
    category: "Business",
    subcategory: "Legal Agreement",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Legal", "Contract", "Agreement", "SOW", "Enterprise", "Terms"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3190,
    views: 24200,
    gradient: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
    fonts: ["DM Serif Display", "Inter"],
    colors: ["#ffffff", "#0f172a", "#334155", "#64748b"],
    elements: [],
    slides: [
      {
        id: "biz-605-p1",
        name: "Contract Cover",
        elements: [
          el("biz-605-p1-bg", "rect", 0, 0, 1200, 1697, { fill: "#ffffff", locked: true }),
          el("biz-605-p1-line1", "rect", 80, 80, 1040, 2, { fill: "#0f172a" }),
          el("biz-605-p1-line2", "rect", 80, 86, 1040, 1, { fill: "#0f172a" }),
          el("biz-605-p1-doc-ref", "text", 80, 110, 1040, 24, { text: "DOCUMENT REF: MSA-2026-ORD-8812 // BINDING LEGAL INSTRUMENT", fontSize: 13, fontFamily: "Inter", fontWeight: "700", fill: "#0f172a", letterSpacing: 2 }),
          el("biz-605-p1-title", "text", 80, 160, 1040, 130, { text: "MASTER SERVICES AGREEMENT\n& STATEMENT OF WORK", fontSize: 50, fontFamily: "DM Serif Display", fill: "#0f172a", lineHeight: 1.15 }),
          
          // Bilateral Columns
          el("biz-605-p1-c1-box", "rect", 80, 320, 500, 240, { fill: "#f1f5f9", borderRadius: 8 }),
          el("biz-605-p1-c1-h", "text", 110, 345, 440, 24, { text: "CLIENT (FIRST PARTY)", fontSize: 12, fontFamily: "Inter", fontWeight: "700", fill: "#64748b", letterSpacing: 2 }),
          el("biz-605-p1-c1-v", "text", 110, 380, 440, 140, { text: "Apex Capital Management LLC\n100 Wall Street, 28th Floor\nNew York, NY 10005\nContact: legal@apexcap.com", fontSize: 15, fontFamily: "Inter", fill: "#0f172a", lineHeight: 1.6 }),

          el("biz-605-p1-c2-box", "rect", 620, 320, 500, 240, { fill: "#f1f5f9", borderRadius: 8 }),
          el("biz-605-p1-c2-h", "text", 650, 345, 440, 24, { text: "SERVICE PROVIDER (SECOND PARTY)", fontSize: 12, fontFamily: "Inter", fontWeight: "700", fill: "#64748b", letterSpacing: 2 }),
          el("biz-605-p1-c2-v", "text", 650, 380, 440, 140, { text: "ORD Enterprise Technologies Inc.\n500 Howard Street, Suite 400\nSan Francisco, CA 94105\nContact: contracts@ordstudio.com", fontSize: 15, fontFamily: "Inter", fill: "#0f172a", lineHeight: 1.6 }),

          // Contract Overview clauses
          el("biz-605-p1-cl-h", "text", 80, 600, 1040, 30, { text: "SECTION 1: PURPOSE AND ENGAGEMENT SCOPE", fontSize: 18, fontFamily: "DM Serif Display", fill: "#0f172a" }),
          el("biz-605-p1-cl-p", "text", 80, 645, 1040, 180, { text: "This Master Services Agreement (\"Agreement\") is entered into as of the Effective Date by and between Client and Service Provider. Service Provider shall furnish specialized software engineering, enterprise platform architecture, and ongoing operational maintenance services as described in attached Statements of Work.\n\nNeither party may assign rights without prior written consent. All work product produced under this Agreement shall constitute 'Work Made for Hire' vesting exclusively in Client upon receipt of payment.", fontSize: 15, fontFamily: "Inter", fill: "#334155", lineHeight: 1.8 }),

          // Small photo card at bottom
          el("biz-605-p1-img", "image", 80, 860, 480, 400, { src: PHOTOS_BUSINESS['605_p1'], borderRadius: 8 }),
          el("biz-605-p1-side-box", "rect", 600, 860, 520, 400, { fill: "#f8fafc", stroke: "#cbd5e1", strokeWidth: 1, borderRadius: 8 }),
          el("biz-605-p1-side-h", "text", 630, 890, 460, 24, { text: "KEY PROVISIONS SUMMARY", fontSize: 14, fontFamily: "Inter", fontWeight: "700", fill: "#0f172a" }),
          el("biz-605-p1-side-t", "text", 630, 930, 460, 300, { text: "• Term: 36-Month Rolling Enterprise Commitment\n• Payment: Net 30 Days from milestone sign-off\n• SLA Target: 99.95% availability during market hours\n• Liquidated Damages: 5% fee credit per outage hour\n• Jurisdiction: State of New York Commercial Division\n• Mutual Confidentiality & NDA: 5-year survival period.", fontSize: 14, fontFamily: "Inter", fill: "#475569", lineHeight: 1.8 })
        ]
      },
      {
        id: "biz-605-p2",
        name: "Signatures & Execution",
        elements: [
          el("biz-605-p2-bg", "rect", 0, 0, 1200, 1697, { fill: "#ffffff", locked: true }),
          el("biz-605-p2-h", "text", 80, 80, 1040, 40, { text: "SECTION 8: AUTHORIZED EXECUTION & ATTESTATION", fontSize: 26, fontFamily: "DM Serif Display", fill: "#0f172a" }),
          el("biz-605-p2-p", "text", 80, 130, 1040, 80, { text: "IN WITNESS WHEREOF, the parties hereto have caused this Agreement to be executed by their duly authorized corporate officers as of the date first written above.", fontSize: 15, fontFamily: "Inter", fill: "#334155", lineHeight: 1.6 }),
          
          // Left Sig
          el("biz-605-p2-s1-box", "rect", 80, 240, 500, 300, { fill: "#f8fafc", stroke: "#cbd5e1", strokeWidth: 1, borderRadius: 8 }),
          el("biz-605-p2-s1-h", "text", 110, 265, 440, 24, { text: "FOR: APEX CAPITAL MANAGEMENT LLC", fontSize: 13, fontFamily: "Inter", fontWeight: "700", fill: "#0f172a" }),
          el("biz-605-p2-s1-line", "rect", 110, 420, 440, 1, { fill: "#94a3b8" }),
          el("biz-605-p2-s1-sig", "text", 110, 435, 440, 80, { text: "Authorized Signature: Marcus Sterling\nTitle: Chief Legal Officer & Managing Director\nDate: October 14, 2026", fontSize: 13, fontFamily: "Inter", fill: "#475569", lineHeight: 1.6 }),

          // Right Sig
          el("biz-605-p2-s2-box", "rect", 620, 240, 500, 300, { fill: "#f8fafc", stroke: "#cbd5e1", strokeWidth: 1, borderRadius: 8 }),
          el("biz-605-p2-s2-h", "text", 650, 265, 440, 24, { text: "FOR: ORD ENTERPRISE TECHNOLOGIES", fontSize: 13, fontFamily: "Inter", fontWeight: "700", fill: "#0f172a" }),
          el("biz-605-p2-s2-line", "rect", 650, 420, 440, 1, { fill: "#94a3b8" }),
          el("biz-605-p2-s2-sig", "text", 650, 435, 440, 80, { text: "Authorized Signature: Elena Rostova\nTitle: Chief Operating Officer\nDate: October 14, 2026", fontSize: 13, fontFamily: "Inter", fill: "#475569", lineHeight: 1.6 }),

          el("biz-605-p2-img", "image", 80, 580, 1040, 580, { src: PHOTOS_BUSINESS['605_p2'], borderRadius: 12 })
        ]
      }
    ]
  },

  // =========================================================================
  // 606: MANAGEMENT CONSULTING MECE (Top photo banner, 3 diagnostic boxes)
  // =========================================================================
  {
    id: 606,
    name: "Management Consulting MECE Diagnostic",
    title: "MANAGEMENT CONSULTING DIAGNOSTIC & STRATEGIC RECOMMENDATIONS",
    description: "Rigorous MECE diagnostic analysis with 2x2 prioritization matrix, cost-reduction drivers, and executive implementation milestones.",
    category: "Business",
    subcategory: "Management Consulting",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Consulting", "McKinsey", "Strategy", "MECE", "Diagnostic", "Matrix"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3880,
    views: 29900,
    gradient: "linear-gradient(180deg, #f8fafc 0%, #edf2f7 100%)",
    fonts: ["Inter", "Space Grotesk"],
    colors: ["#f8fafc", "#1e3a8a", "#0f172a", "#475569"],
    elements: [],
    slides: [
      {
        id: "biz-606-p1",
        name: "Diagnostic Cover",
        elements: [
          el("biz-606-p1-bg", "rect", 0, 0, 1200, 1697, { fill: "#f8fafc", locked: true }),
          
          // Top Photo Banner
          el("biz-606-p1-img", "image", 80, 80, 1040, 360, { src: PHOTOS_BUSINESS['606_p1'], borderRadius: 12 }),
          el("biz-606-p1-ref", "text", 80, 470, 1040, 24, { text: "MCKINSEY & STRATEGY PARTNERS // PROJECT AURORA // DIAGNOSTIC PHASE", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#1e3a8a", letterSpacing: 2 }),
          el("biz-606-p1-title", "text", 80, 510, 1040, 140, { text: "COMMERCIAL DIAGNOSTIC &\nOPERATIONAL ROADMAP", fontSize: 50, fontFamily: "Inter", fontWeight: "900", fill: "#0f172a", lineHeight: 1.1 }),
          el("biz-606-p1-sub", "text", 80, 670, 1040, 50, { text: "Independent evaluation of commercial go-to-market productivity and margin expansion drivers.", fontSize: 16, fontFamily: "Inter", fill: "#475569", lineHeight: 1.6 }),

          // 3 Diagnostic Boxes
          el("biz-606-p1-b1", "rect", 80, 750, 320, 280, { fill: "#ffffff", stroke: "#cbd5e1", strokeWidth: 1, borderRadius: 8 }),
          el("biz-606-p1-b1-h", "text", 105, 775, 270, 26, { text: "01 // REVENUE MIX", fontSize: 15, fontFamily: "Inter", fontWeight: "800", fill: "#1e3a8a" }),
          el("biz-606-p1-b1-p", "text", 105, 815, 270, 180, { text: "High reliance on non-recurring perpetual licenses creates lumpy quarterly forecasting and lowers public market valuation multiples by 4.2x.", fontSize: 14, fontFamily: "Inter", fill: "#334155", lineHeight: 1.6 }),

          el("biz-606-p1-b2", "rect", 440, 750, 320, 280, { fill: "#ffffff", stroke: "#cbd5e1", strokeWidth: 1, borderRadius: 8 }),
          el("biz-606-p1-b2-h", "text", 465, 775, 270, 26, { text: "02 // SALES EFFICIENCY", fontSize: 15, fontFamily: "Inter", fontWeight: "800", fill: "#1e3a8a" }),
          el("biz-606-p1-b2-p", "text", 465, 815, 270, 180, { text: "Sales cycle currently averages 184 days. Account executives spend only 28% of working hours in direct customer negotiations due to manual quoting.", fontSize: 14, fontFamily: "Inter", fill: "#334155", lineHeight: 1.6 }),

          el("biz-606-p1-b3", "rect", 800, 750, 320, 280, { fill: "#ffffff", stroke: "#cbd5e1", strokeWidth: 1, borderRadius: 8 }),
          el("biz-606-p1-b3-h", "text", 825, 775, 270, 26, { text: "03 // CHURN COHORTS", fontSize: 15, fontFamily: "Inter", fontWeight: "800", fill: "#1e3a8a" }),
          el("biz-606-p1-b3-p", "text", 825, 815, 270, 180, { text: "Mid-market cohort churn spikes at Month 11 due to lack of proactive customer onboarding. Fixing early onboarding will save $18M ARR annually.", fontSize: 14, fontFamily: "Inter", fill: "#334155", lineHeight: 1.6 })
        ]
      },
      {
        id: "biz-606-p2",
        name: "Prioritization Matrix",
        elements: [
          el("biz-606-p2-bg", "rect", 0, 0, 1200, 1697, { fill: "#f8fafc", locked: true }),
          el("biz-606-p2-h", "text", 80, 80, 1040, 48, { text: "02 // IMPACT VS. EFFORT PRIORITIZATION", fontSize: 32, fontFamily: "Inter", fontWeight: "800", fill: "#0f172a" }),
          el("biz-606-p2-box", "rect", 80, 150, 1040, 400, { fill: "#ffffff", borderRadius: 12, stroke: "#cbd5e1", strokeWidth: 1 }),
          el("biz-606-p2-q1", "text", 120, 180, 460, 150, { text: "QUICK WINS (High Impact / Low Effort)\n• Standardize enterprise pricing discount bands\n• Automate RFP response generation with AI\n• Implement mandatory customer success kickoffs", fontSize: 14, fontFamily: "Inter", fill: "#15803d", lineHeight: 1.8 }),
          el("biz-606-p2-q2", "text", 620, 180, 460, 150, { text: "STRATEGIC BETS (High Impact / High Effort)\n• Transition core product to pure consumption SaaS\n• Build native enterprise integrations with Salesforce\n• Establish EMEA regional headquarters in London", fontSize: 14, fontFamily: "Inter", fill: "#1e3a8a", lineHeight: 1.8 }),
          el("biz-606-p2-img", "image", 80, 590, 1040, 680, { src: PHOTOS_BUSINESS['606_p2'], borderRadius: 12 })
        ]
      }
    ]
  },

  // =========================================================================
  // 607: DEVELOPER API SPECIFICATION (Dark terminal mode, right photo card)
  // =========================================================================
  {
    id: 607,
    name: "Enterprise SaaS Architecture & API Specification",
    title: "ENTERPRISE SAAS ARCHITECTURE & API SPECIFICATION",
    description: "Technical engineering architecture proposal with microservice schemas, latency SLAs, and zero-trust security protocols.",
    category: "Business",
    subcategory: "Technical Proposal",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Developer", "API", "Architecture", "Microservices", "Engineering"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4210,
    views: 32400,
    gradient: "linear-gradient(180deg, #090d16 0%, #111827 100%)",
    fonts: ["Space Grotesk", "Inter"],
    colors: ["#090d16", "#10b981", "#38bdf8", "#ffffff"],
    elements: [],
    slides: [
      {
        id: "biz-607-p1",
        name: "API Spec Cover",
        elements: [
          el("biz-607-p1-bg", "rect", 0, 0, 1200, 1697, { fill: "#090d16", locked: true }),
          el("biz-607-p1-term-bar", "rect", 80, 80, 1040, 40, { fill: "#1f2937", borderRadius: 8 }),
          el("biz-607-p1-dot1", "circle", 100, 95, 12, 12, { fill: "#ef4444" }),
          el("biz-607-p1-dot2", "circle", 120, 95, 12, 12, { fill: "#eab308" }),
          el("biz-607-p1-dot3", "circle", 140, 95, 12, 12, { fill: "#10b981" }),
          el("biz-607-p1-term-txt", "text", 170, 92, 400, 20, { text: "ord-api-gateway // architecture-v3.4.json", fontSize: 12, fontFamily: "Space Grotesk", fill: "#9ca3af" }),
          
          // Left side: Title & Architecture code block
          el("biz-607-p1-title", "text", 80, 160, 600, 180, { text: "DISTRIBUTED API\nARCHITECTURE &\nENGINEERING SPEC", fontSize: 46, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff", lineHeight: 1.1 }),
          el("biz-607-p1-sub", "text", 80, 360, 600, 60, { text: "Scalable gRPC and REST mesh supporting 500,000 requests per second with sub-15ms p99 latency.", fontSize: 15, fontFamily: "Inter", fill: "#9ca3af", lineHeight: 1.6 }),
          
          // Code Box
          el("biz-607-p1-code", "rect", 80, 450, 600, 400, { fill: "#030712", stroke: "#10b981", strokeWidth: 1, borderRadius: 8 }),
          el("biz-607-p1-codet", "text", 110, 480, 540, 340, { text: "{\n  \"service\": \"nexus-event-bus\",\n  \"protocol\": \"gRPC / Protobuf v3\",\n  \"throughput_sla\": \"500k_rps\",\n  \"p99_latency\": \"<12ms\",\n  \"replication\": {\n    \"primary\": \"us-east-1\",\n    \"secondary\": \"eu-west-1\",\n    \"sync_interval\": \"5ms\"\n  },\n  \"security\": \"mTLS_1.3_Strict\"\n}", fontSize: 14, fontFamily: "Space Grotesk", fill: "#10b981", lineHeight: 1.6 }),

          // Right side: Portrait Photo
          el("biz-607-p1-img", "image", 720, 160, 400, 690, { src: PHOTOS_BUSINESS['607_p1'], borderRadius: 12 })
        ]
      },
      {
        id: "biz-607-p2",
        name: "Security & Benchmarks",
        elements: [
          el("biz-607-p2-bg", "rect", 0, 0, 1200, 1697, { fill: "#090d16", locked: true }),
          el("biz-607-p2-h", "text", 80, 80, 1040, 48, { text: "02 // PERFORMANCE BENCHMARKS & SECURITY SLA", fontSize: 32, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
          el("biz-607-p2-box", "rect", 80, 150, 1040, 320, { fill: "#111827", borderRadius: 12 }),
          el("biz-607-p2-bh", "text", 120, 180, 960, 30, { text: "END-TO-END SYSTEM RELIABILITY GUARANTEES", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#10b981" }),
          el("biz-607-p2-r1", "text", 120, 230, 960, 30, { text: "• Global DNS failover latency under 400 milliseconds via Anycast network.", fontSize: 15, fontFamily: "Inter", fill: "#e5e7eb" }),
          el("biz-607-p2-r2", "text", 120, 270, 960, 30, { text: "• Zero-trust service mesh with automated ephemeral token rotation every 15 mins.", fontSize: 15, fontFamily: "Inter", fill: "#e5e7eb" }),
          el("biz-607-p2-r3", "text", 120, 310, 960, 30, { text: "• Automated daily penetration testing and vulnerability patch integration.", fontSize: 15, fontFamily: "Inter", fill: "#e5e7eb" }),
          el("biz-607-p2-img", "image", 80, 510, 1040, 680, { src: PHOTOS_BUSINESS['607_p2'], borderRadius: 12 })
        ]
      }
    ]
  },

  // =========================================================================
  // 608: STARTUP GRANT PROPOSAL (Academic olive & cream, circular lab photo)
  // =========================================================================
  {
    id: 608,
    name: "Startup Research Grant & Lab Feasibility Proposal",
    title: "BIOTECHNOLOGY RESEARCH GRANT & CLINICAL LAB PROPOSAL",
    description: "Peer-reviewed research grant application with principal investigator credentials, NIH budget allocation, and clinical trial milestones.",
    category: "Business",
    subcategory: "Grant Proposal",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Grant", "Research", "Biotech", "Academic", "Proposal", "Lab"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3560,
    views: 26500,
    gradient: "linear-gradient(180deg, #fdfbf7 0%, #f4efe6 100%)",
    fonts: ["DM Serif Display", "Inter"],
    colors: ["#fdfbf7", "#164e63", "#047857", "#334155"],
    elements: [],
    slides: [
      {
        id: "biz-608-p1",
        name: "Grant Cover",
        elements: [
          el("biz-608-p1-bg", "rect", 0, 0, 1200, 1697, { fill: "#fdfbf7", locked: true }),
          el("biz-608-p1-inst", "text", 80, 80, 1040, 24, { text: "NATIONAL SCIENCE ENDOWMENT // SOLICITATION NSF-2026-BIO-99", fontSize: 13, fontFamily: "Inter", fontWeight: "700", fill: "#047857", letterSpacing: 2 }),
          el("biz-608-p1-title", "text", 80, 125, 1040, 140, { text: "TARGETED CELL THERAPY:\nCLINICAL ACCELERATION GRANT", fontSize: 48, fontFamily: "DM Serif Display", fill: "#164e63", lineHeight: 1.15 }),
          el("biz-608-p1-sub", "text", 80, 280, 1040, 40, { text: "A $2.4M RESEARCH & CLINICAL TRANSLATION APPLICATION (YEARS 1–3)", fontSize: 15, fontFamily: "Inter", fontWeight: "600", fill: "#334155", letterSpacing: 1 }),

          // Centered Circular Lab Photo
          el("biz-608-p1-ring", "circle", 360, 360, 480, 480, { fill: "transparent", stroke: "#047857", strokeWidth: 3 }),
          el("biz-608-p1-img", "image", 380, 380, 440, 440, { src: PHOTOS_BUSINESS['608_p1'], borderRadius: 220 }),

          // 3 Grant Objectives below
          el("biz-608-p1-c1", "rect", 80, 880, 320, 260, { fill: "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 8 }),
          el("biz-608-p1-c1-h", "text", 100, 905, 280, 26, { text: "01 // SYNTHESIS", fontSize: 15, fontFamily: "Inter", fontWeight: "700", fill: "#047857" }),
          el("biz-608-p1-c1-p", "text", 100, 945, 280, 160, { text: "Synthesize high-fidelity mRNA lipid nanoparticles with 98.4% encapsulation purity in certified cleanroom facilities.", fontSize: 14, fontFamily: "Inter", fill: "#475569", lineHeight: 1.6 }),

          el("biz-608-p1-c2", "rect", 440, 880, 320, 260, { fill: "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 8 }),
          el("biz-608-p1-c2-h", "text", 460, 905, 280, 26, { text: "02 // PRE-CLINICAL", fontSize: 15, fontFamily: "Inter", fontWeight: "700", fill: "#047857" }),
          el("biz-608-p1-c2-p", "text", 460, 945, 280, 160, { text: "Conduct in-vivo murine oncological safety assays demonstrating targeted tumor cytotoxicity without systemic organ toxicity.", fontSize: 14, fontFamily: "Inter", fill: "#475569", lineHeight: 1.6 }),

          el("biz-608-p1-c3", "rect", 800, 880, 320, 260, { fill: "#ffffff", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 8 }),
          el("biz-608-p1-c3-h", "text", 820, 905, 280, 26, { text: "03 // IND FILING", fontSize: 15, fontFamily: "Inter", fontWeight: "700", fill: "#047857" }),
          el("biz-608-p1-c3-p", "text", 820, 945, 280, 160, { text: "Submit Investigational New Drug (IND) dossier to FDA for Phase 1 human trial authorization by Q4 2027.", fontSize: 14, fontFamily: "Inter", fill: "#475569", lineHeight: 1.6 })
        ]
      },
      {
        id: "biz-608-p2",
        name: "Budget Justification",
        elements: [
          el("biz-608-p2-bg", "rect", 0, 0, 1200, 1697, { fill: "#fdfbf7", locked: true }),
          el("biz-608-p2-h", "text", 80, 80, 1040, 44, { text: "02 // ITEMISED BUDGET ALLOCATION (YEARS 1–3)", fontSize: 32, fontFamily: "DM Serif Display", fill: "#164e63" }),
          el("biz-608-p2-tbl", "rect", 80, 150, 1040, 340, { fill: "#ffffff", borderRadius: 8, stroke: "#cbd5e1", strokeWidth: 1 }),
          el("biz-608-p2-th", "text", 120, 180, 960, 30, { text: "TOTAL REQUESTED GRANT CAPITAL: $2,400,000 USD", fontSize: 18, fontFamily: "DM Serif Display", fill: "#047857" }),
          el("biz-608-p2-r1", "text", 120, 230, 960, 30, { text: "Senior Postdoctoral Fellows & Research Technicians (4 FTEs) ..... $920,000", fontSize: 15, fontFamily: "Inter", fill: "#334155" }),
          el("biz-608-p2-r2", "text", 120, 270, 960, 30, { text: "Reagents, RNA Synthesis Kits & Assay Materials ......................... $680,000", fontSize: 15, fontFamily: "Inter", fill: "#334155" }),
          el("biz-608-p2-r3", "text", 120, 310, 960, 30, { text: "Cleanroom Facility Time & Mass Spectrometry Instrumentation ..... $450,000", fontSize: 15, fontFamily: "Inter", fill: "#334155" }),
          el("biz-608-p2-r4", "text", 120, 350, 960, 30, { text: "Regulatory Advisory, Biostatistics & IND Filing Filing Fees ....... $350,000", fontSize: 15, fontFamily: "Inter", fill: "#334155" }),
          el("biz-608-p2-img", "image", 80, 530, 1040, 680, { src: PHOTOS_BUSINESS['608_p2'], borderRadius: 12 })
        ]
      }
    ]
  },

  // =========================================================================
  // 609: COMMERCIAL REAL ESTATE OFFERING (Full-bleed architectural photo, bronze card)
  // =========================================================================
  {
    id: 609,
    name: "Commercial Real Estate Offering Memorandum",
    title: "COMMERCIAL REAL ESTATE INVESTMENT OFFERING MEMORANDUM",
    description: "Institutional real estate investment memorandum with rent-roll pro-forma, cap rate financial modeling, and demographic metrics.",
    category: "Business",
    subcategory: "Real Estate",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Real Estate", "Commercial", "Investment", "Pro Forma", "Cap Rate"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3990,
    views: 31000,
    gradient: "linear-gradient(180deg, #100d08 0%, #201a14 100%)",
    fonts: ["Cinzel", "Space Grotesk"],
    colors: ["#100d08", "#d97706", "#fef3c7", "#ffffff"],
    elements: [],
    slides: [
      {
        id: "biz-609-p1",
        name: "Property Offering",
        elements: [
          el("biz-609-p1-bg", "rect", 0, 0, 1200, 1697, { fill: "#100d08", locked: true }),
          el("biz-609-p1-img", "image", 0, 0, 1200, 1000, { src: PHOTOS_BUSINESS['609_p1'] }),
          el("biz-609-p1-scrim", "rect", 0, 0, 1200, 1000, { fill: "#100d08", opacity: 0.4 }),
          
          // Floating Bronze Card
          el("biz-609-p1-card", "rect", 80, 850, 1040, 520, { fill: "#1c1610", stroke: "#d97706", strokeWidth: 1, borderRadius: 16 }),
          el("biz-609-p1-prop-tag", "text", 120, 890, 960, 24, { text: "OFFERING MEMORANDUM // CLASS-A LIFE SCIENCE HEADQUARTERS", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#d97706", letterSpacing: 3 }),
          el("biz-609-p1-title", "text", 120, 930, 960, 120, { text: "THE METROPOLIS TOWER:\nSAN FRANCISCO", fontSize: 52, fontFamily: "Cinzel", fontWeight: "800", fill: "#fef3c7", lineHeight: 1.1 }),
          el("biz-609-p1-addr", "text", 120, 1060, 960, 30, { text: "450 Mission Street, South of Market Financial District, San Francisco, CA", fontSize: 16, fontFamily: "Space Grotesk", fill: "#cbd5e1" }),
          
          // Financial Badges
          el("biz-609-p1-f1", "text", 120, 1130, 220, 30, { text: "OFFERING PRICE\n$145,000,000", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#ffffff", lineHeight: 1.4 }),
          el("biz-609-p1-f2", "text", 380, 1130, 220, 30, { text: "CAP RATE\n6.75% NNN", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#d97706", lineHeight: 1.4 }),
          el("biz-609-p1-f3", "text", 640, 1130, 220, 30, { text: "TOTAL RSF\n320,000 SQ FT", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#ffffff", lineHeight: 1.4 }),
          el("biz-609-p1-f4", "text", 900, 1130, 200, 30, { text: "OCCUPANCY\n96.4% LEASED", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#d97706", lineHeight: 1.4 })
        ]
      },
      {
        id: "biz-609-p2",
        name: "Rent Roll & Tenancy",
        elements: [
          el("biz-609-p2-bg", "rect", 0, 0, 1200, 1697, { fill: "#100d08", locked: true }),
          el("biz-609-p2-h", "text", 80, 80, 1040, 44, { text: "02 // RENT ROLL & ANCHOR TENANCY SCHEDULE", fontSize: 32, fontFamily: "Cinzel", fontWeight: "800", fill: "#fef3c7" }),
          el("biz-609-p2-tbl", "rect", 80, 150, 1040, 340, { fill: "#1c1610", stroke: "#d97706", strokeWidth: 1, borderRadius: 8 }),
          el("biz-609-p2-r1", "text", 120, 190, 960, 30, { text: "Genentech Research Labs (Floors 1–8) ........ 140,000 RSF (Exp: 2038) ..... $82/RSF NNN", fontSize: 14, fontFamily: "Space Grotesk", fill: "#e2e8f0" }),
          el("biz-609-p2-r2", "text", 120, 240, 960, 30, { text: "Stripe Global Payments (Floors 9–14) ........ 110,000 RSF (Exp: 2035) ..... $85/RSF NNN", fontSize: 14, fontFamily: "Space Grotesk", fill: "#e2e8f0" }),
          el("biz-609-p2-r3", "text", 120, 290, 960, 30, { text: "Benchmark Capital HQ (Floors 15–18) ....... 58,000 RSF (Exp: 2036) ..... $94/RSF NNN", fontSize: 14, fontFamily: "Space Grotesk", fill: "#e2e8f0" }),
          el("biz-609-p2-r4", "text", 120, 350, 960, 40, { text: "NET OPERATING INCOME (NOI): $9,787,500 ANNUALLY (4.8% WALT 11.2 YRS)", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#d97706" }),
          el("biz-609-p2-img", "image", 80, 530, 1040, 680, { src: PHOTOS_BUSINESS['609_p2'], borderRadius: 12 })
        ]
      }
    ]
  },

  // =========================================================================
  // 610: CUSTOMER EXPERIENCE TRANSFORMATION (Landscape photo mid-page, 3 cards)
  // =========================================================================
  {
    id: 610,
    name: "Customer Experience Transformation Plan",
    title: "CUSTOMER EXPERIENCE TRANSFORMATION & JOURNEY MAP",
    description: "Omnichannel customer journey optimization strategy with CSAT benchmarks, touchpoint heatmaps, and digital transformation initiatives.",
    category: "Business",
    subcategory: "Customer Success",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Customer Experience", "CX", "Journey Map", "Transformation", "CSAT"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3650,
    views: 28100,
    gradient: "linear-gradient(180deg, #0d1e24 0%, #162f38 100%)",
    fonts: ["Plus Jakarta Sans", "Inter"],
    colors: ["#0d1e24", "#06b6d4", "#f97316", "#ffffff"],
    elements: [],
    slides: [
      {
        id: "biz-610-p1",
        name: "CX Cover",
        elements: [
          el("biz-610-p1-bg", "rect", 0, 0, 1200, 1697, { fill: "#0d1e24", locked: true }),
          el("biz-610-p1-tag", "text", 80, 80, 1040, 24, { text: "ENTERPRISE CX PLAYBOOK // RETENTION & NPS MASTERY", fontSize: 13, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#06b6d4", letterSpacing: 2 }),
          el("biz-610-p1-title", "text", 80, 120, 1040, 130, { text: "CUSTOMER EXPERIENCE\nTRANSFORMATION PLAN", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#ffffff", lineHeight: 1.15 }),
          
          // Landscape Photo across mid-page
          el("biz-610-p1-img", "image", 80, 280, 1040, 440, { src: PHOTOS_BUSINESS['610_p1'], borderRadius: 12 }),

          // 3 CX Pillar Cards below
          el("biz-610-p1-c1", "rect", 80, 760, 320, 260, { fill: "#132d36", stroke: "#06b6d4", strokeWidth: 1, borderRadius: 8 }),
          el("biz-610-p1-c1-h", "text", 100, 785, 280, 26, { text: "01 // ONBOARDING", fontSize: 15, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#06b6d4" }),
          el("biz-610-p1-c1-p", "text", 100, 825, 280, 170, { text: "Reduce time-to-first-value from 24 days to under 48 hours via automated in-app configuration wizards.", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 }),

          el("biz-610-p1-c2", "rect", 440, 760, 320, 260, { fill: "#132d36", stroke: "#06b6d4", strokeWidth: 1, borderRadius: 8 }),
          el("biz-610-p1-c2-h", "text", 460, 785, 280, 26, { text: "02 // TELEMETRY", fontSize: 15, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#f97316" }),
          el("biz-610-p1-c2-p", "text", 460, 825, 280, 170, { text: "Predictive health score algorithms that flag customer usage dips 60 days before contract renewal.", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 }),

          el("biz-610-p1-c3", "rect", 800, 760, 320, 260, { fill: "#132d36", stroke: "#06b6d4", strokeWidth: 1, borderRadius: 8 }),
          el("biz-610-p1-c3-h", "text", 820, 785, 280, 26, { text: "03 // RESOLUTION", fontSize: 15, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#06b6d4" }),
          el("biz-610-p1-c3-p", "text", 820, 825, 280, 170, { text: "First-contact resolution improved to 88% with direct access to Tier-2 engineers for enterprise VIP accounts.", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.6 })
        ]
      },
      {
        id: "biz-610-p2",
        name: "5-Stage Journey Map",
        elements: [
          el("biz-610-p2-bg", "rect", 0, 0, 1200, 1697, { fill: "#0d1e24", locked: true }),
          el("biz-610-p2-h", "text", 80, 80, 1040, 44, { text: "02 // 5-STAGE END-TO-END JOURNEY PAIN-POINT AUDIT", fontSize: 30, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#ffffff" }),
          el("biz-610-p2-box", "rect", 80, 150, 1040, 340, { fill: "#132d36", borderRadius: 12 }),
          el("biz-610-p2-s1", "text", 110, 180, 980, 40, { text: "DISCOVER: Fragmented sales collateral -> Unified interactive product tour (Score: 68 -> 92)", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1" }),
          el("biz-610-p2-s2", "text", 110, 230, 980, 40, { text: "EVALUATE: 3-week security review delays -> Self-serve SOC-2 trust portal (Score: 54 -> 88)", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1" }),
          el("biz-610-p2-s3", "text", 110, 280, 980, 40, { text: "PURCHASE: Complex legal redlines -> Modular standard master agreements (Score: 60 -> 85)", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1" }),
          el("biz-610-p2-s4", "text", 110, 330, 980, 40, { text: "ONBOARD: Manual CSV uploads -> Direct one-click automated API sync (Score: 48 -> 94)", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1" }),
          el("biz-610-p2-img", "image", 80, 520, 1040, 680, { src: PHOTOS_BUSINESS['610_p2'], borderRadius: 12 })
        ]
      }
    ]
  },

  // =========================================================================
  // 611: ESG SUSTAINABILITY & GOVERNANCE (Tall photo left, right metrics)
  // =========================================================================
  {
    id: 611,
    name: "ESG Sustainability & Corporate Governance Audit",
    title: "ESG SUSTAINABILITY & CORPORATE GOVERNANCE AUDIT",
    description: "Institutional sustainability report with Scope 1-3 carbon emissions breakdown, regulatory compliance targets, and board diversity scorecard.",
    category: "Business",
    subcategory: "ESG Report",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["ESG", "Sustainability", "Governance", "Carbon", "Audit"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3380,
    views: 25400,
    gradient: "linear-gradient(180deg, #091a13 0%, #112d22 100%)",
    fonts: ["DM Serif Display", "Inter"],
    colors: ["#091a13", "#10b981", "#34d399", "#ffffff"],
    elements: [],
    slides: [
      {
        id: "biz-611-p1",
        name: "ESG Cover",
        elements: [
          el("biz-611-p1-bg", "rect", 0, 0, 1200, 1697, { fill: "#091a13", locked: true }),
          el("biz-611-p1-tag", "text", 80, 80, 1040, 24, { text: "GLOBAL REPORTING INITIATIVE (GRI) // SASB COMPLIANT", fontSize: 13, fontFamily: "Inter", fontWeight: "700", fill: "#10b981", letterSpacing: 2 }),
          
          // Tall Left Photo
          el("biz-611-p1-img", "image", 80, 130, 480, 900, { src: PHOTOS_BUSINESS['611_p1'], borderRadius: 12 }),

          // Right Side: Title & Carbon Metrics
          el("biz-611-p1-title", "text", 600, 140, 520, 160, { text: "ANNUAL ESG &\nCARBON NET-ZERO\nAUDIT 2026", fontSize: 44, fontFamily: "DM Serif Display", fill: "#ffffff", lineHeight: 1.1 }),
          el("biz-611-p1-sub", "text", 600, 320, 520, 60, { text: "Progress towards carbon neutrality, supplier ethical sourcing, and board oversight.", fontSize: 15, fontFamily: "Inter", fill: "#a7f3d0", lineHeight: 1.6 }),
          
          el("biz-611-p1-m1", "rect", 600, 420, 520, 140, { fill: "#13382a", borderRadius: 8, stroke: "#10b981", strokeWidth: 1 }),
          el("biz-611-p1-m1-v", "text", 630, 445, 460, 44, { text: "-44.2%", fontSize: 40, fontFamily: "DM Serif Display", fill: "#34d399" }),
          el("biz-611-p1-m1-l", "text", 630, 500, 460, 30, { text: "Scope 1 & 2 Emissions Reduction vs 2020 Baseline", fontSize: 13, fontFamily: "Inter", fill: "#e2e8f0" }),

          el("biz-611-p1-m2", "rect", 600, 590, 520, 140, { fill: "#13382a", borderRadius: 8, stroke: "#10b981", strokeWidth: 1 }),
          el("biz-611-p1-m2-v", "text", 630, 615, 460, 44, { text: "92.8%", fontSize: 40, fontFamily: "DM Serif Display", fill: "#ffffff" }),
          el("biz-611-p1-m2-l", "text", 630, 670, 460, 30, { text: "Renewable Electricity in Global Facilities", fontSize: 13, fontFamily: "Inter", fill: "#e2e8f0" }),

          el("biz-611-p1-m3", "rect", 600, 760, 520, 140, { fill: "#13382a", borderRadius: 8, stroke: "#10b981", strokeWidth: 1 }),
          el("biz-611-p1-m3-v", "text", 630, 785, 460, 44, { text: "100%", fontSize: 40, fontFamily: "DM Serif Display", fill: "#34d399" }),
          el("biz-611-p1-m3-l", "text", 630, 840, 460, 30, { text: "Conflict-Free Minerals Supply Chain Audited", fontSize: 13, fontFamily: "Inter", fill: "#e2e8f0" })
        ]
      },
      {
        id: "biz-611-p2",
        name: "Scope 1-3 Emissions Audit",
        elements: [
          el("biz-611-p2-bg", "rect", 0, 0, 1200, 1697, { fill: "#091a13", locked: true }),
          el("biz-611-p2-h", "text", 80, 80, 1040, 44, { text: "02 // SCOPE 1, 2, AND 3 EMISSIONS LEDGER (MT CO2E)", fontSize: 30, fontFamily: "DM Serif Display", fill: "#ffffff" }),
          el("biz-611-p2-tbl", "rect", 80, 150, 1040, 320, { fill: "#13382a", borderRadius: 12 }),
          el("biz-611-p2-r1", "text", 120, 190, 960, 30, { text: "Scope 1 (Direct Fleet & Heating) .................... 12,450 MT (-18% YoY) ..... Target: 6,000 MT (2028)", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1" }),
          el("biz-611-p2-r2", "text", 120, 240, 960, 30, { text: "Scope 2 (Purchased Datacenter Power) ............ 4,800 MT (-64% YoY) ..... Target: Net Zero (2027)", fontSize: 14, fontFamily: "Inter", fill: "#34d399" }),
          el("biz-611-p2-r3", "text", 120, 290, 960, 30, { text: "Scope 3 (Supply Chain Freight & Logistics) ... 184,000 MT (-22% YoY) ..... Target: 100,000 MT (2030)", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1" }),
          el("biz-611-p2-img", "image", 80, 510, 1040, 680, { src: PHOTOS_BUSINESS['611_p2'], borderRadius: 12 })
        ]
      }
    ]
  },

  // =========================================================================
  // 612: CROSS-BORDER M&A DUE DILIGENCE (Horizontal photo slit in center)
  // =========================================================================
  {
    id: 612,
    name: "Cross-Border M&A Due Diligence Report",
    title: "CROSS-BORDER M&A DUE DILIGENCE & SYNERGIES REPORT",
    description: "Confidential investment banking acquisition due diligence report with antitrust regulatory assessment and cost synergy modeling.",
    category: "Business",
    subcategory: "Mergers & Acquisitions",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["M&A", "Due Diligence", "Investment Banking", "Synergies", "Valuation"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4100,
    views: 31900,
    gradient: "linear-gradient(180deg, #09111e 0%, #14233c 100%)",
    fonts: ["Cinzel", "Inter"],
    colors: ["#09111e", "#d4af37", "#ffffff", "#94a3b8"],
    elements: [],
    slides: [
      {
        id: "biz-612-p1",
        name: "M&A Cover",
        elements: [
          el("biz-612-p1-bg", "rect", 0, 0, 1200, 1697, { fill: "#09111e", locked: true }),
          el("biz-612-p1-border", "rect", 60, 60, 1080, 1577, { fill: "transparent", stroke: "#d4af37", strokeWidth: 1 }),
          el("biz-612-p1-tag", "text", 100, 100, 1000, 24, { text: "GOLDMAN & MORGAN ADVISORY // HIGHLY CONFIDENTIAL // PROJECT ATLAS", fontSize: 13, fontFamily: "Inter", fontWeight: "700", fill: "#d4af37", letterSpacing: 3 }),
          el("biz-612-p1-val", "text", 100, 140, 1000, 40, { text: "TRANSACTION ENTERPRISE VALUE: $4,200,000,000 USD", fontSize: 22, fontFamily: "Cinzel", fontWeight: "700", fill: "#ffffff" }),
          el("biz-612-p1-title", "text", 100, 190, 1000, 160, { text: "CROSS-BORDER ACQUISITION\nDUE DILIGENCE & SYNERGIES", fontSize: 52, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff", lineHeight: 1.1 }),
          el("biz-612-p1-sub", "text", 100, 360, 1000, 50, { text: "Strategic rationale, pro-forma accretion modeling, and day-one operational integration blueprint.", fontSize: 16, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.6 }),

          // Centered Horizontal Photo Slit
          el("biz-612-p1-img", "image", 100, 440, 1000, 340, { src: PHOTOS_BUSINESS['612_p1'], borderRadius: 8 }),

          // Synergies Breakdown Box
          el("biz-612-p1-box", "rect", 100, 820, 1000, 320, { fill: "#101e35", stroke: "#d4af37", strokeWidth: 1, borderRadius: 8 }),
          el("biz-612-p1-bh", "text", 140, 850, 920, 30, { text: "EXECUTIVE VALUE CREATION SUMMARY", fontSize: 18, fontFamily: "Cinzel", fontWeight: "700", fill: "#d4af37" }),
          el("biz-612-p1-bp", "text", 140, 895, 920, 200, { text: "The proposed merger unites Target's high-margin European enterprise market share with Acquirer's global distributed platform.\n\n• Annualized Run-Rate Cost Synergies: $285M within 18 months\n• Revenue Cross-Sell Expansion: $140M incremental ARR by Year 2\n• EPS Accretion: 14.2% projected in first full fiscal year post-closing\n• Regulatory Outlook: Favorable clearance anticipated in US and EU with zero required divestitures.", fontSize: 15, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.8 })
        ]
      },
      {
        id: "biz-612-p2",
        name: "Antitrust & Integration",
        elements: [
          el("biz-612-p2-bg", "rect", 0, 0, 1200, 1697, { fill: "#09111e", locked: true }),
          el("biz-612-p2-h", "text", 80, 80, 1040, 44, { text: "02 // REGULATORY APPROVAL TIMELINE & DAY-ONE PLAN", fontSize: 30, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff" }),
          el("biz-612-p2-tbl", "rect", 80, 150, 1040, 320, { fill: "#101e35", borderRadius: 8 }),
          el("biz-612-p2-r1", "text", 120, 190, 960, 30, { text: "HSR Antitrust Clearance (US FTC / DOJ) .............................. Scheduled Filing: Nov 2026", fontSize: 15, fontFamily: "Inter", fill: "#e2e8f0" }),
          el("biz-612-p2-r2", "text", 120, 240, 960, 30, { text: "European Commission DG-COMP Review ......................... Phase I Filing: Dec 2026", fontSize: 15, fontFamily: "Inter", fill: "#e2e8f0" }),
          el("biz-612-p2-r3", "text", 120, 290, 960, 30, { text: "Shareholder Special Proxy Vote ......................................... Target Vote Date: Jan 2027", fontSize: 15, fontFamily: "Inter", fill: "#e2e8f0" }),
          el("biz-612-p2-img", "image", 80, 510, 1040, 680, { src: PHOTOS_BUSINESS['612_p2'], borderRadius: 12 })
        ]
      }
    ]
  },

  // =========================================================================
  // 613: GOVERNMENT DEFENSE RFP (Federal standard, bottom left photo)
  // =========================================================================
  {
    id: 613,
    name: "Government Defense & Vendor RFP Procurement Bid",
    title: "GOVERNMENT DEFENSE VENDOR RFP TECHNICAL BID",
    description: "Federal RFP technical proposal meeting strict FAR standards, CAGE code accreditation, and Level 5 cybersecurity compliance.",
    category: "Business",
    subcategory: "Government RFP",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Government", "RFP", "Procurement", "Defense", "Contractor", "FAR"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3100,
    views: 23400,
    gradient: "linear-gradient(180deg, #0b1426 0%, #152035 100%)",
    fonts: ["Space Grotesk", "Inter"],
    colors: ["#0b1426", "#38bdf8", "#e2e8f0", "#94a3b8"],
    elements: [],
    slides: [
      {
        id: "biz-613-p1",
        name: "Federal Bid Cover",
        elements: [
          el("biz-613-p1-bg", "rect", 0, 0, 1200, 1697, { fill: "#0b1426", locked: true }),
          el("biz-613-p1-seal", "rect", 80, 80, 300, 36, { fill: "#38bdf8", borderRadius: 4 }),
          el("biz-613-p1-sealt", "text", 80, 90, 300, 18, { text: "FEDERAL PROCUREMENT BID", fontSize: 11, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#0b1426", textAlign: "center", letterSpacing: 2 }),
          el("biz-613-p1-cage", "text", 400, 90, 720, 20, { text: "CAGE CODE: 8V902 // SAM.GOV UNIQUE ENTITY ID: NK98L44A // SECRET CLEARANCE", fontSize: 12, fontFamily: "Space Grotesk", fill: "#94a3b8" }),
          
          el("biz-613-p1-title", "text", 80, 150, 1040, 140, { text: "TECHNICAL PROPOSAL:\nADVANCED SECURE COMMUNICATIONS", fontSize: 46, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff", lineHeight: 1.15 }),
          el("biz-613-p1-solic", "text", 80, 300, 1040, 40, { text: "IN RESPONSE TO SOLICITATION NO. W911QY-26-R-0042 // DEPT OF DEFENSE", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#38bdf8", letterSpacing: 2 }),

          // Left side: Technical Specs, Right side: Photo & Clearance
          el("biz-613-p1-card", "rect", 80, 380, 540, 680, { fill: "#13213a", stroke: "#1e3355", strokeWidth: 1, borderRadius: 8 }),
          el("biz-613-p1-ch", "text", 110, 410, 480, 30, { text: "COMPLIANCE & SPECIFICATION MATRIX", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#ffffff" }),
          el("biz-613-p1-cp", "text", 110, 455, 480, 560, { text: "1. NIST SP 800-171 & CMMC Level 3 Certified\nFull compliance verified by third-party assessor.\n\n2. FIPS 140-3 Cryptographic Validation\nEnd-to-end hardware-level quantum-resistant encryption deployed across all mobile field units.\n\n3. Zero Defect Manufacturing Warranty\nISO 9001:2015 aerospace-grade component reliability.\n\n4. Domestic Supply Chain Security\n100% compliant with Buy American Act (41 U.S.C. 8301) with fully auditable provenance of all microelectronics.", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.8 }),

          el("biz-613-p1-img", "image", 660, 380, 460, 680, { src: PHOTOS_BUSINESS['613_p1'], borderRadius: 8 })
        ]
      },
      {
        id: "biz-613-p2",
        name: "Cost & Past Performance",
        elements: [
          el("biz-613-p2-bg", "rect", 0, 0, 1200, 1697, { fill: "#0b1426", locked: true }),
          el("biz-613-p2-h", "text", 80, 80, 1040, 44, { text: "02 // PAST DEFENSE PERFORMANCE & COST VOLUME", fontSize: 30, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
          el("biz-613-p2-tbl", "rect", 80, 150, 1040, 320, { fill: "#13213a", borderRadius: 8 }),
          el("biz-613-p2-r1", "text", 120, 190, 960, 30, { text: "US Naval Research Lab // Project Trident (CPFF) ........ $44.2M (Rating: Exceptional)", fontSize: 14, fontFamily: "Space Grotesk", fill: "#e2e8f0" }),
          el("biz-613-p2-r2", "text", 120, 240, 960, 30, { text: "Air Force Life Cycle Management // Sentinel Mesh (FFP) .. $28.5M (Rating: Very Good)", fontSize: 14, fontFamily: "Space Grotesk", fill: "#e2e8f0" }),
          el("biz-613-p2-r3", "text", 120, 290, 960, 30, { text: "Defense Logistics Agency // Secure Supply Grid (T&M) .... $16.8M (Rating: Exceptional)", fontSize: 14, fontFamily: "Space Grotesk", fill: "#e2e8f0" }),
          el("biz-613-p2-img", "image", 80, 510, 1040, 680, { src: PHOTOS_BUSINESS['613_p2'], borderRadius: 12 })
        ]
      }
    ]
  },

  // =========================================================================
  // 614: STRATEGIC JOINT VENTURE CHARTER (Bilateral split, center medallion photo)
  // =========================================================================
  {
    id: 614,
    name: "Strategic Joint Venture Agreement & Charter",
    title: "STRATEGIC JOINT VENTURE ALLIANCE CHARTER",
    description: "Bilateral strategic partnership agreement with equal governance split, IP cross-licensing, and capital contribution terms.",
    category: "Business",
    subcategory: "Joint Venture",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Joint Venture", "Partnership", "Alliance", "Charter", "Agreement"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3820,
    views: 29000,
    gradient: "linear-gradient(180deg, #111827 0%, #1f2937 100%)",
    fonts: ["DM Serif Display", "Inter"],
    colors: ["#111827", "#6366f1", "#14b8a6", "#ffffff"],
    elements: [],
    slides: [
      {
        id: "biz-614-p1",
        name: "Alliance Cover",
        elements: [
          el("biz-614-p1-bg", "rect", 0, 0, 1200, 1697, { fill: "#111827", locked: true }),
          el("biz-614-p1-title", "text", 80, 100, 1040, 130, { text: "STRATEGIC JOINT VENTURE\nALLIANCE CHARTER", fontSize: 52, fontFamily: "DM Serif Display", fill: "#ffffff", textAlign: "center", lineHeight: 1.15 }),
          el("biz-614-p1-sub", "text", 80, 240, 1040, 30, { text: "AN EQUAL 50/50 PARTNERSHIP BETWEEN VERTEX ROBOTICS & SOLIS ENERGY", fontSize: 14, fontFamily: "Inter", fontWeight: "700", fill: "#6366f1", textAlign: "center", letterSpacing: 2 }),

          // Centered Circular Partnership Medallion Photo
          el("biz-614-p1-ring", "circle", 430, 320, 340, 340, { fill: "transparent", stroke: "#14b8a6", strokeWidth: 3 }),
          el("biz-614-p1-img", "image", 450, 340, 300, 300, { src: PHOTOS_BUSINESS['614_p1'], borderRadius: 150 }),

          // Bilateral Partner Boxes below
          el("biz-614-p1-p1", "rect", 80, 720, 500, 340, { fill: "#1f2937", stroke: "#6366f1", strokeWidth: 1, borderRadius: 12 }),
          el("biz-614-p1-p1-h", "text", 110, 750, 440, 26, { text: "PARTNER A: VERTEX ROBOTICS", fontSize: 16, fontFamily: "Inter", fontWeight: "800", fill: "#818cf8" }),
          el("biz-614-p1-p1-t", "text", 110, 790, 440, 220, { text: "• Capital Contribution: $50M Cash Injection\n• Asset Contribution: 24 Core Autonomous Patents\n• Operational Role: Software & Compute Architecture\n• Board Seats: 3 Appointed Voting Directors", fontSize: 14, fontFamily: "Inter", fill: "#e5e7eb", lineHeight: 1.8 }),

          el("biz-614-p1-p2", "rect", 620, 720, 500, 340, { fill: "#1f2937", stroke: "#14b8a6", strokeWidth: 1, borderRadius: 12 }),
          el("biz-614-p1-p2-h", "text", 650, 750, 440, 26, { text: "PARTNER B: SOLIS ENERGY CORP", fontSize: 16, fontFamily: "Inter", fontWeight: "800", fill: "#2dd4bf" }),
          el("biz-614-p1-p2-t", "text", 650, 790, 440, 220, { text: "• Capital Contribution: $50M Infrastructure Land\n• Asset Contribution: 400MW Dedicated Grid Access\n• Operational Role: Physical Facility & Power Ops\n• Board Seats: 3 Appointed Voting Directors", fontSize: 14, fontFamily: "Inter", fill: "#e5e7eb", lineHeight: 1.8 })
        ]
      },
      {
        id: "biz-614-p2",
        name: "Governance & Profit Waterfall",
        elements: [
          el("biz-614-p2-bg", "rect", 0, 0, 1200, 1697, { fill: "#111827", locked: true }),
          el("biz-614-p2-h", "text", 80, 80, 1040, 44, { text: "02 // GOVERNANCE STRUCTURE & PROFIT WATERFALL", fontSize: 30, fontFamily: "DM Serif Display", fill: "#ffffff" }),
          el("biz-614-p2-tbl", "rect", 80, 150, 1040, 320, { fill: "#1f2937", borderRadius: 12 }),
          el("biz-614-p2-r1", "text", 120, 190, 960, 30, { text: "First Tier: 100% Retained Earnings until $25M Operating Reserve is achieved.", fontSize: 15, fontFamily: "Inter", fill: "#e5e7eb" }),
          el("biz-614-p2-r2", "text", 120, 240, 960, 30, { text: "Second Tier: 50/50 Quarterly Cash Dividend Distribution to Parent Entities.", fontSize: 15, fontFamily: "Inter", fill: "#2dd4bf" }),
          el("biz-614-p2-r3", "text", 120, 290, 960, 30, { text: "Deadlock Resolution: Unresolved disputes submitted to neutral Swiss arbitration.", fontSize: 15, fontFamily: "Inter", fill: "#e5e7eb" }),
          el("biz-614-p2-img", "image", 80, 510, 1040, 680, { src: PHOTOS_BUSINESS['614_p2'], borderRadius: 12 })
        ]
      }
    ]
  },

  // =========================================================================
  // 615: CYBERSECURITY INCIDENT RESPONSE (Alert banner, top severity grid, bottom photo)
  // =========================================================================
  {
    id: 615,
    name: "Cybersecurity Incident Response & Continuity Plan",
    title: "CYBERSECURITY INCIDENT RESPONSE & BUSINESS CONTINUITY PLAN",
    description: "Mission-critical incident response plan with 4-tier severity escalation matrix, RTO/RPO objectives, and crisis communications protocols.",
    category: "Business",
    subcategory: "Cybersecurity",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Cybersecurity", "Incident Response", "Disaster Recovery", "SOP", "Crisis"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3790,
    views: 28800,
    gradient: "linear-gradient(180deg, #18080a 0%, #291013 100%)",
    fonts: ["Space Grotesk", "Inter"],
    colors: ["#18080a", "#ef4444", "#f87171", "#ffffff"],
    elements: [],
    slides: [
      {
        id: "biz-615-p1",
        name: "Incident Plan Cover",
        elements: [
          el("biz-615-p1-bg", "rect", 0, 0, 1200, 1697, { fill: "#18080a", locked: true }),
          
          // Red Alert Banner
          el("biz-615-p1-alert", "rect", 80, 80, 1040, 48, { fill: "#ef4444", borderRadius: 6 }),
          el("biz-615-p1-alertt", "text", 80, 94, 1040, 24, { text: "CRITICAL OPERATIONAL RUNBOOK // SEV-1 ESCALATION PROTOCOL", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff", textAlign: "center", letterSpacing: 3 }),

          // Centered Header
          el("biz-615-p1-title", "text", 80, 160, 1040, 130, { text: "CYBERSECURITY INCIDENT RESPONSE\n& DISASTER CONTINUITY PLAN", fontSize: 44, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff", lineHeight: 1.15 }),
          el("biz-615-p1-sub", "text", 80, 300, 1040, 30, { text: "MANDATORY EMERGENCY PROTOCOL FOR ACTIVE INFRASTRUCTURE BREACH", fontSize: 14, fontFamily: "Inter", fontWeight: "700", fill: "#f87171", letterSpacing: 2 }),

          // Split Column: Left Photo, Right Escalation Matrix
          el("biz-615-p1-img", "image", 80, 360, 480, 560, { src: PHOTOS_BUSINESS['615_p1'], borderRadius: 12 }),

          el("biz-615-p1-side-card", "rect", 600, 360, 520, 560, { fill: "#291013", stroke: "#ef4444", strokeWidth: 1, borderRadius: 12 }),
          el("biz-615-p1-sh", "text", 630, 390, 460, 26, { text: "SEVERITY ESCALATION TIERS", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ef4444" }),
          el("biz-615-p1-s1", "text", 630, 430, 460, 100, { text: "SEV-1 (CRITICAL)\nActive database exfiltration or ransomware payload.\nTarget RTO: < 2 Hours // Board Notification: 30 min", fontSize: 13, fontFamily: "Inter", fill: "#ffffff", lineHeight: 1.5 }),
          el("biz-615-p1-s2", "text", 630, 545, 460, 100, { text: "SEV-2 (HIGH)\nCompromised administrative credentials or lateral pivot.\nSubnet isolation: < 15 min // Forensic snapshot taken", fontSize: 13, fontFamily: "Inter", fill: "#fca5a5", lineHeight: 1.5 }),
          el("biz-615-p1-s3", "text", 630, 660, 460, 100, { text: "SEV-3 (MEDIUM)\nDistributed DDoS attempt or unauthorized credential spraying.\nTraffic sinkholing & Cloudflare edge challenge enabled", fontSize: 13, fontFamily: "Inter", fill: "#e5e7eb", lineHeight: 1.5 }),
          el("biz-615-p1-s4", "text", 630, 775, 460, 100, { text: "SEV-4 (LOW)\nPhishing report or external port probe without breach.\nInternal ticket logged for scheduled security patch", fontSize: 13, fontFamily: "Inter", fill: "#9ca3af", lineHeight: 1.5 }),

          // Bottom Emergency Hotline Bar
          el("biz-615-p1-bar", "rect", 80, 960, 1040, 160, { fill: "#1f0c0e", stroke: "#ef4444", strokeWidth: 1, borderRadius: 8 }),
          el("biz-615-p1-bar-h", "text", 120, 990, 960, 26, { text: "SECURITY OPERATIONS CENTER (SOC) COMMAND HOTLINE", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff", letterSpacing: 2 }),
          el("biz-615-p1-bar-t", "text", 120, 1025, 960, 60, { text: "24/7 Red Phone: +1 (800) 555-CYBER // Secure Signal Bridge: #soc-incident-war-room\nPhysical War Room: Building B, SCIF Level 3, San Francisco HQ", fontSize: 14, fontFamily: "Inter", fill: "#fca5a5", lineHeight: 1.6 })
        ]
      },
      {
        id: "biz-615-p2",
        name: "Escalation Matrix",
        elements: [
          el("biz-615-p2-bg", "rect", 0, 0, 1200, 1697, { fill: "#18080a", locked: true }),
          el("biz-615-p2-h", "text", 80, 80, 1040, 44, { text: "02 // 4-TIER INCIDENT SEVERITY ESCALATION MATRIX", fontSize: 28, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
          el("biz-615-p2-tbl", "rect", 80, 150, 1040, 320, { fill: "#291013", borderRadius: 8, stroke: "#ef4444", strokeWidth: 1 }),
          el("biz-615-p2-r1", "text", 120, 180, 960, 30, { text: "SEV-1 (CRITICAL): Active compromise of core production database -> Immediate CISO & Board notification", fontSize: 14, fontFamily: "Space Grotesk", fill: "#ef4444", fontWeight: "700" }),
          el("biz-615-p2-r2", "text", 120, 230, 960, 30, { text: "SEV-2 (HIGH): Compromised employee credential with privilege escalation -> Quarantine subnet within 10 min", fontSize: 14, fontFamily: "Space Grotesk", fill: "#f87171" }),
          el("biz-615-p2-r3", "text", 120, 280, 960, 30, { text: "SEV-3 (MEDIUM): Anomalous brute force traffic detected -> Enforce IP geofencing and CAPTCHA challenge", fontSize: 14, fontFamily: "Space Grotesk", fill: "#e5e7eb" }),
          el("biz-615-p2-img", "image", 80, 510, 1040, 680, { src: PHOTOS_BUSINESS['615_p2'], borderRadius: 12 })
        ]
      }
    ]
  },

  // =========================================================================
  // 616: GLOBAL SUPPLY CHAIN OPTIMIZATION (Cargo photo upper half, lower KPI)
  // =========================================================================
  {
    id: 616,
    name: "Global Supply Chain & Freight Logistics Proposal",
    title: "GLOBAL SUPPLY CHAIN OPTIMIZATION & FREIGHT EFFICIENCY",
    description: "Comprehensive multi-modal freight logistics proposal with port turnaround analysis, container dwell time reduction, and fuel route optimization.",
    category: "Business",
    subcategory: "Logistics",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Supply Chain", "Logistics", "Freight", "Shipping", "Maritime", "Optimization"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3910,
    views: 30100,
    gradient: "linear-gradient(180deg, #0a1324 0%, #14233f 100%)",
    fonts: ["Space Grotesk", "Inter"],
    colors: ["#0a1324", "#38bdf8", "#f59e0b", "#ffffff"],
    elements: [],
    slides: [
      {
        id: "biz-616-p1",
        name: "Logistics Cover",
        elements: [
          el("biz-616-p1-bg", "rect", 0, 0, 1200, 1697, { fill: "#0a1324", locked: true }),
          el("biz-616-p1-badge", "rect", 80, 80, 280, 36, { fill: "#f59e0b", borderRadius: 4 }),
          el("biz-616-p1-badget", "text", 80, 90, 280, 18, { text: "MARITIME LOGISTICS AUDIT", fontSize: 11, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#0a1324", textAlign: "center", letterSpacing: 2 }),
          el("biz-616-p1-title", "text", 80, 140, 1040, 130, { text: "GLOBAL SUPPLY CHAIN &\nFREIGHT OPTIMIZATION", fontSize: 50, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff", lineHeight: 1.15 }),
          
          // Hero Container Photo in Upper-Middle
          el("biz-616-p1-img", "image", 80, 290, 1040, 480, { src: PHOTOS_BUSINESS['616_p1'], borderRadius: 12 }),

          // Lower KPI Dashboard
          el("biz-616-p1-k1", "rect", 80, 810, 320, 200, { fill: "#13233f", stroke: "#38bdf8", strokeWidth: 1, borderRadius: 8 }),
          el("biz-616-p1-k1-v", "text", 110, 835, 260, 50, { text: "-35%", fontSize: 44, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#38bdf8" }),
          el("biz-616-p1-k1-l", "text", 110, 895, 260, 60, { text: "Port Dwell Time Reduction across Pacific shipping routes", fontSize: 13, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.5 }),

          el("biz-616-p1-k2", "rect", 440, 810, 320, 200, { fill: "#13233f", stroke: "#f59e0b", strokeWidth: 1, borderRadius: 8 }),
          el("biz-616-p1-k2-v", "text", 470, 835, 260, 50, { text: "$18.4M", fontSize: 44, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#f59e0b" }),
          el("biz-616-p1-k2-l", "text", 470, 895, 260, 60, { text: "Annualized Demurrage & Detention Fee Savings", fontSize: 13, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.5 }),

          el("biz-616-p1-k3", "rect", 800, 810, 320, 200, { fill: "#13233f", stroke: "#38bdf8", strokeWidth: 1, borderRadius: 8 }),
          el("biz-616-p1-k3-v", "text", 830, 835, 260, 50, { text: "99.2%", fontSize: 44, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#38bdf8" }),
          el("biz-616-p1-k3-l", "text", 830, 895, 260, 60, { text: "On-Time-In-Full (OTIF) Delivery Reliability", fontSize: 13, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.5 })
        ]
      },
      {
        id: "biz-616-p2",
        name: "Route Optimization Map",
        elements: [
          el("biz-616-p2-bg", "rect", 0, 0, 1200, 1697, { fill: "#0a1324", locked: true }),
          el("biz-616-p2-h", "text", 80, 80, 1040, 44, { text: "02 // MULTI-MODAL ROUTE CORRIDOR OPTIMIZATION", fontSize: 30, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
          el("biz-616-p2-tbl", "rect", 80, 150, 1040, 320, { fill: "#13233f", borderRadius: 8 }),
          el("biz-616-p2-r1", "text", 120, 190, 960, 30, { text: "Shanghai -> Long Beach (Express Ocean Carrier) .......... Transit: 12 Days (Fuel Save: 14%)", fontSize: 14, fontFamily: "Space Grotesk", fill: "#e2e8f0" }),
          el("biz-616-p2-r2", "text", 120, 240, 960, 30, { text: "Rotterdam -> Chicago (Intermodal Rail Relay) ............... Transit: 16 Days (Cost Save: 22%)", fontSize: 14, fontFamily: "Space Grotesk", fill: "#f59e0b" }),
          el("biz-616-p2-r3", "text", 120, 290, 960, 30, { text: "Singapore -> Dubai (Air-Sea Freight Bridge) .................. Transit: 4 Days (Carbon Save: 38%)", fontSize: 14, fontFamily: "Space Grotesk", fill: "#e2e8f0" }),
          el("biz-616-p2-img", "image", 80, 510, 1040, 680, { src: PHOTOS_BUSINESS['616_p2'], borderRadius: 12 })
        ]
      }
    ]
  }
];

// Populate elements = slides[0].elements for all templates
for (const t of BUSINESS_TEMPLATES) {
  if (t.slides && t.slides[0]) {
    t.elements = t.slides[0].elements;
  }
}

// Write output file
const outputPath = path.resolve('artifacts/api-server/src/lib/templates/business.ts');
const fileContent = `// ORD Studio Canonical Business Registry (IDs 601-616)
// Generated by generate_all_business.mjs with 100% Unique Design DNA, Multi-Page slides, and Zero Photo Reuse.

export const BUSINESS_TEMPLATES = ${JSON.stringify(BUSINESS_TEMPLATES, null, 2)};
`;

fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully generated 16 multi-page business proposals to ${outputPath}`);
