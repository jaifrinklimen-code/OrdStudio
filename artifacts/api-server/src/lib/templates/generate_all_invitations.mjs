import fs from 'fs';
import path from 'path';
import { PHOTOS_INVITATIONS } from './uniquePhotoPool.ts';

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

export const INVITATION_TEMPLATES = [
  // =========================================================================
  // 501: VIP EXECUTIVE GALA & AWARDS NIGHT (Black & Gold, Top crest, photo at bottom)
  // =========================================================================
  {
    id: 501,
    name: "VIP Executive Gala & Awards Night",
    title: "VIP EXECUTIVE GALA & ANNUAL AWARDS NIGHT",
    description: "Bespoke VIP corporate gala invitation with ornate double gold-foil borders, Playfair Display typography, high-contrast black & champagne palette, and an RSVP response block.",
    category: "Invitations",
    subcategory: "Corporate Gala",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Corporate Gala", "Invitation", "Gala", "VIP", "Black-Tie", "Luxury"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3890,
    views: 29800,
    gradient: "linear-gradient(135deg, #0b090a 0%, #161a1d 100%)",
    fonts: ["Playfair Display", "Inter"],
    colors: ["#0b090a", "#d4af37", "#f8fafc", "#94a3b8"],
    elements: [
      el("inv-501-bg", "rect", 0, 0, 1400, 2000, { fill: "#0b090a", locked: true }),
      el("inv-501-border-outer", "rect", 60, 60, 1280, 1880, { fill: "transparent", stroke: "#d4af37", strokeWidth: 3 }),
      el("inv-501-border-inner", "rect", 80, 80, 1240, 1840, { fill: "transparent", stroke: "#d4af37", strokeWidth: 1 }),
      
      // Top Crest
      el("inv-501-crest-circle", "circle", 650, 140, 100, 100, { fill: "#d4af37" }),
      el("inv-501-crest-text", "text", 650, 170, 100, 40, { text: "2026", fontSize: 22, fontFamily: "Playfair Display", fontWeight: "800", fill: "#0b090a", textAlign: "center" }),
      el("inv-501-pre", "text", 120, 270, 1160, 30, { text: "CORDIALLY REQUESTS THE HONOR OF YOUR PRESENCE", fontSize: 16, fontFamily: "Inter", fontWeight: "600", fill: "#d4af37", textAlign: "center", letterSpacing: 4 }),
      el("inv-501-title", "text", 120, 320, 1160, 140, { text: "THE PRESIDENTIAL GALA\n& HONORS BANQUET", fontSize: 60, fontFamily: "Playfair Display", fontWeight: "800", fill: "#ffffff", textAlign: "center", lineHeight: 1.15 }),
      el("inv-501-div", "rect", 550, 480, 300, 2, { fill: "#d4af37" }),
      el("inv-501-honor", "text", 180, 510, 1040, 70, { text: "Honoring thirty years of global leadership, distinguished innovation,\nand groundbreaking humanitarian achievement.", fontSize: 20, fontFamily: "Playfair Display", fill: "#e2e8f0", textAlign: "center", fontStyle: "italic", lineHeight: 1.6 }),
      
      // Date & Time block
      el("inv-501-dt-card", "rect", 250, 610, 900, 160, { fill: "#161a1d", stroke: "#d4af37", strokeWidth: 1, borderRadius: 8 }),
      el("inv-501-day", "text", 280, 640, 260, 40, { text: "FRIDAY EVENING", fontSize: 18, fontFamily: "Inter", fontWeight: "700", fill: "#d4af37", textAlign: "center" }),
      el("inv-501-date", "text", 560, 625, 280, 60, { text: "NOV 14", fontSize: 44, fontFamily: "Playfair Display", fontWeight: "800", fill: "#ffffff", textAlign: "center" }),
      el("inv-501-time", "text", 860, 640, 260, 40, { text: "SEVEN O'CLOCK", fontSize: 18, fontFamily: "Inter", fontWeight: "700", fill: "#d4af37", textAlign: "center" }),
      el("inv-501-dt-sub", "text", 280, 710, 840, 30, { text: "RECEPTION AT 19:00 // DINNER SERVED AT 20:00 // BLACK TIE STRICT", fontSize: 13, fontFamily: "Inter", fill: "#94a3b8", textAlign: "center", letterSpacing: 2 }),

      // Venue & Address
      el("inv-501-venue-h", "text", 120, 810, 1160, 36, { text: "THE GRAND PLAZA BALLROOM", fontSize: 26, fontFamily: "Playfair Display", fontWeight: "700", fill: "#ffffff", textAlign: "center" }),
      el("inv-501-venue-a", "text", 120, 855, 1160, 45, { text: "750 Fifth Avenue, Grand Metropolitan District, New York, NY\nValet parking provided at the North Porte-Cochère", fontSize: 16, fontFamily: "Inter", fill: "#94a3b8", textAlign: "center", lineHeight: 1.5 }),

      // RSVP Container
      el("inv-501-rsvp-card", "rect", 350, 930, 700, 130, { fill: "rgba(212, 175, 55, 0.08)", stroke: "#d4af37", strokeWidth: 1, borderRadius: 12 }),
      el("inv-501-rsvp-t1", "text", 370, 955, 660, 26, { text: "KINDLY RESPOND BY OCTOBER TWENTY-FOURTH", fontSize: 14, fontFamily: "Inter", fontWeight: "700", fill: "#d4af37", textAlign: "center", letterSpacing: 3 }),
      el("inv-501-rsvp-t2", "text", 370, 990, 660, 26, { text: "concierge@presidentialgala2026.org  •  +1 (212) 555-0198", fontSize: 15, fontFamily: "Inter", fill: "#ffffff", textAlign: "center" }),

      // Photo positioned at bottom anchor
      el("inv-501-img-hero", "image", 120, 1100, 1160, 780, { src: PHOTOS_INVITATIONS['501'], opacity: 0.9, borderRadius: 8 })
    ]
  },

  // =========================================================================
  // 502: BOTANICAL GARDEN WEDDING (Soft ivory/sage, circular photo medallion, Cormorant Garamond)
  // =========================================================================
  {
    id: 502,
    name: "Botanical Garden Wedding Celebration",
    title: "BOTANICAL GARDEN WEDDING INVITATION",
    description: "Ethereal botanical wedding invitation with circular photo medallion, Cormorant Garamond serif typography, sage green accents, and delicate editorial layout.",
    category: "Invitations",
    subcategory: "Wedding",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Wedding", "Invitation", "Botanical", "Garden", "Floral", "Romantic"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4210,
    views: 33400,
    gradient: "linear-gradient(180deg, #fdfbf7 0%, #f4efe6 100%)",
    fonts: ["Cormorant Garamond", "Inter"],
    colors: ["#fdfbf7", "#2d4a3e", "#a3876a", "#5a6860"],
    elements: [
      el("inv-502-bg", "rect", 0, 0, 1400, 2000, { fill: "#fdfbf7", locked: true }),
      el("inv-502-border", "rect", 70, 70, 1260, 1860, { fill: "transparent", stroke: "#e6ded2", strokeWidth: 2 }),
      el("inv-502-tag", "text", 120, 120, 1160, 24, { text: "TOGETHER WITH THEIR FAMILIES", fontSize: 15, fontFamily: "Inter", fontWeight: "600", fill: "#a3876a", textAlign: "center", letterSpacing: 5 }),
      el("inv-502-b1", "text", 120, 160, 1160, 70, { text: "Eleanor Jane Vance", fontSize: 58, fontFamily: "Cormorant Garamond", fontWeight: "700", fill: "#2d4a3e", textAlign: "center" }),
      el("inv-502-and", "text", 120, 235, 1160, 40, { text: "—  &  —", fontSize: 26, fontFamily: "Cormorant Garamond", fontStyle: "italic", fill: "#a3876a", textAlign: "center" }),
      el("inv-502-b2", "text", 120, 275, 1160, 70, { text: "Julian Alexander Thorne", fontSize: 58, fontFamily: "Cormorant Garamond", fontWeight: "700", fill: "#2d4a3e", textAlign: "center" }),
      el("inv-502-invite", "text", 120, 365, 1160, 30, { text: "INVITE YOU TO CELEBRATE THEIR MARRIAGE", fontSize: 14, fontFamily: "Inter", fill: "#5a6860", textAlign: "center", letterSpacing: 4 }),
      
      // Central Circular Photo with double decorative ring
      el("inv-502-ring-outer", "circle", 400, 440, 600, 600, { fill: "transparent", stroke: "#a3876a", strokeWidth: 2 }),
      el("inv-502-ring-inner", "circle", 415, 455, 570, 570, { fill: "transparent", stroke: "#2d4a3e", strokeWidth: 1 }),
      el("inv-502-photo", "image", 430, 470, 540, 540, { src: PHOTOS_INVITATIONS['502'], borderRadius: 270 }),

      // Date Block below photo
      el("inv-502-date-box", "rect", 300, 1100, 800, 160, { fill: "#f4efe6", borderRadius: 8 }),
      el("inv-502-month", "text", 320, 1125, 760, 30, { text: "SATURDAY, SEPTEMBER NINETEENTH", fontSize: 16, fontFamily: "Inter", fontWeight: "700", fill: "#2d4a3e", textAlign: "center", letterSpacing: 3 }),
      el("inv-502-year", "text", 320, 1165, 760, 60, { text: "TWO THOUSAND TWENTY-SIX", fontSize: 32, fontFamily: "Cormorant Garamond", fontWeight: "700", fill: "#a3876a", textAlign: "center" }),
      el("inv-502-hour", "text", 320, 1225, 760, 24, { text: "AT FOUR O'CLOCK IN THE AFTERNOON", fontSize: 14, fontFamily: "Inter", fill: "#5a6860", textAlign: "center", letterSpacing: 2 }),

      // Venue Details
      el("inv-502-venue-name", "text", 120, 1330, 1160, 44, { text: "THE ORANGERIE AT KENSINGTON MANOR", fontSize: 28, fontFamily: "Cormorant Garamond", fontWeight: "700", fill: "#2d4a3e", textAlign: "center" }),
      el("inv-502-venue-loc", "text", 120, 1385, 1160, 36, { text: "14 Estate Parkway, Cotswolds, Gloucestershire", fontSize: 16, fontFamily: "Inter", fill: "#5a6860", textAlign: "center" }),
      el("inv-502-reception", "text", 120, 1435, 1160, 30, { text: "DINNER AND DANCING UNDER THE STARS TO IMMEDIATELY FOLLOW", fontSize: 13, fontFamily: "Inter", fontWeight: "600", fill: "#a3876a", textAlign: "center", letterSpacing: 3 }),

      // Bottom RSVP & Attire
      el("inv-502-div2", "rect", 500, 1530, 400, 1, { fill: "#a3876a" }),
      el("inv-502-rsvp-call", "text", 120, 1570, 1160, 30, { text: "R.S.V.P. BY AUGUST FIRST AT WWW.ELEANORANDJULIAN.COM", fontSize: 14, fontFamily: "Inter", fontWeight: "600", fill: "#2d4a3e", textAlign: "center", letterSpacing: 3 }),
      el("inv-502-attire", "text", 120, 1615, 1160, 24, { text: "SUMMER FORMAL ATTIRE  •  LAWN-FRIENDLY FOOTWEAR SUGGESTED", fontSize: 12, fontFamily: "Inter", fill: "#8c9b93", textAlign: "center", letterSpacing: 2 })
    ]
  },

  // =========================================================================
  // 503: BLACK-TIE CHAMPAGNE & CHARITY AUCTION (Dark luxury slit card, split columns)
  // =========================================================================
  {
    id: 503,
    name: "Black-Tie Champagne Gala & Charity Auction",
    title: "BLACK-TIE CHAMPAGNE GALA & CHARITY AUCTION",
    description: "Deep obsidian and bronze luxury invitation with asymmetric hero image slice, sommelier tasting schedule, and tiered auction preview.",
    category: "Invitations",
    subcategory: "Charity",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Charity", "Auction", "Champagne", "Black-Tie", "Luxury", "Tasting"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3120,
    views: 24500,
    gradient: "linear-gradient(180deg, #0d0f12 0%, #171b22 100%)",
    fonts: ["Cinzel", "Space Grotesk"],
    colors: ["#0d0f12", "#c69255", "#ffffff", "#8a99a8"],
    elements: [
      el("inv-503-bg", "rect", 0, 0, 1400, 2000, { fill: "#0d0f12", locked: true }),
      el("inv-503-img", "image", 80, 80, 1240, 520, { src: PHOTOS_INVITATIONS['503'], borderRadius: 12 }),
      el("inv-503-scrim", "rect", 80, 80, 1240, 520, { fill: "#0d0f12", opacity: 0.35, borderRadius: 12 }),
      el("inv-503-badge", "rect", 120, 120, 360, 48, { fill: "#c69255", borderRadius: 24 }),
      el("inv-503-badget", "text", 120, 134, 360, 24, { text: "PRIVATE PHILANTHROPY SALON", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#0d0f12", textAlign: "center", letterSpacing: 2 }),
      
      el("inv-503-title", "text", 80, 650, 1240, 140, { text: "NOCTURNE RÉSERVE\nCHAMPAGNE & ART AUCTION", fontSize: 52, fontFamily: "Cinzel", fontWeight: "700", fill: "#ffffff", lineHeight: 1.15 }),
      el("inv-503-sub", "text", 80, 800, 1240, 40, { text: "BENEFITING THE GLOBAL OCEAN PRESERVATION INITIATIVE", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "600", fill: "#c69255", letterSpacing: 4 }),
      el("inv-503-rule", "rect", 80, 860, 1240, 2, { fill: "#272f3d" }),

      // 2 Columns: Itinerary & Lots
      el("inv-503-c1-box", "rect", 80, 900, 600, 540, { fill: "#13171f", borderRadius: 8, stroke: "#272f3d", strokeWidth: 1 }),
      el("inv-503-c1-h", "text", 120, 930, 520, 36, { text: "EVENING ITINERARY", fontSize: 20, fontFamily: "Cinzel", fontWeight: "700", fill: "#c69255", letterSpacing: 2 }),
      el("inv-503-c1-t1", "text", 120, 990, 520, 70, { text: "18:30 — Vintage Dom Pérignon Reception\nWelcome pours & raw bar pairings on the Terrace.", fontSize: 15, fontFamily: "Space Grotesk", fill: "#e2e8f0", lineHeight: 1.6 }),
      el("inv-503-c1-t2", "text", 120, 1080, 520, 70, { text: "19:45 — Four-Course Epicurean Dinner\nCurated by Three-Star Michelin Chef Sebastien Laurent.", fontSize: 15, fontFamily: "Space Grotesk", fill: "#e2e8f0", lineHeight: 1.6 }),
      el("inv-503-c1-t3", "text", 120, 1170, 520, 70, { text: "21:15 — Live Contemporary Art Auction\nChristie's auctioneer conducting ten premier lots.", fontSize: 15, fontFamily: "Space Grotesk", fill: "#e2e8f0", lineHeight: 1.6 }),
      el("inv-503-c1-t4", "text", 120, 1260, 520, 70, { text: "22:45 — Jazz Digestif & Lounge Speakeasy\nRare armagnac cellar access & private live trio.", fontSize: 15, fontFamily: "Space Grotesk", fill: "#e2e8f0", lineHeight: 1.6 }),

      el("inv-503-c2-box", "rect", 720, 900, 600, 540, { fill: "#13171f", borderRadius: 8, stroke: "#272f3d", strokeWidth: 1 }),
      el("inv-503-c2-h", "text", 760, 930, 520, 36, { text: "AUCTION LOT PREVIEW", fontSize: 20, fontFamily: "Cinzel", fontWeight: "700", fill: "#c69255", letterSpacing: 2 }),
      el("inv-503-c2-t1", "text", 760, 990, 520, 70, { text: "LOT 01: 1982 Krug Clos d'Ambonnay Methuselah\nDirectly from private cellar collection with provenance.", fontSize: 15, fontFamily: "Space Grotesk", fill: "#e2e8f0", lineHeight: 1.6 }),
      el("inv-503-c2-t2", "text", 760, 1080, 520, 70, { text: "LOT 02: Original Gerhard Richter Screenprint (1994)\nNumbered, framed, and cataloged with cert of authenticity.", fontSize: 15, fontFamily: "Space Grotesk", fill: "#e2e8f0", lineHeight: 1.6 }),
      el("inv-503-c2-t3", "text", 760, 1170, 520, 70, { text: "LOT 03: Seven-Day Superyacht Charter in Amalfi\nFull crew, private chef, and bespoke helicopter transfers.", fontSize: 15, fontFamily: "Space Grotesk", fill: "#e2e8f0", lineHeight: 1.6 }),
      el("inv-503-c2-t4", "text", 760, 1260, 520, 70, { text: "LOT 04: Patek Philippe Grand Complications 5270\nWhite gold perpetual calendar chronograph.", fontSize: 15, fontFamily: "Space Grotesk", fill: "#e2e8f0", lineHeight: 1.6 }),

      // Venue footer
      el("inv-503-foot-bg", "rect", 80, 1480, 1240, 180, { fill: "#0b0d10", stroke: "#c69255", strokeWidth: 1, borderRadius: 8 }),
      el("inv-503-venue", "text", 120, 1515, 600, 30, { text: "THE ROTUNDA AT HUDSON YARDS", fontSize: 22, fontFamily: "Cinzel", fontWeight: "700", fill: "#ffffff" }),
      el("inv-503-addr", "text", 120, 1555, 600, 40, { text: "500 West 33rd Street, 68th Floor Observatory, New York\nSaturday, December 5th, 2026 // Black Tie & Evening Gown", fontSize: 14, fontFamily: "Space Grotesk", fill: "#8a99a8", lineHeight: 1.5 }),
      el("inv-503-cta", "rect", 920, 1525, 360, 60, { fill: "#c69255", borderRadius: 30 }),
      el("inv-503-ctat", "text", 920, 1545, 360, 24, { text: "CONFIRM SEAT SELECTION →", fontSize: 14, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#0d0f12", textAlign: "center" })
    ]
  },

  // =========================================================================
  // 504: SWISS MINIMALIST ARCHITECTURAL SALON (Monochrome, red bar, 3 columns)
  // =========================================================================
  {
    id: 504,
    name: "Swiss Architecture Salon & Colloquium",
    title: "SWISS ARCHITECTURE SALON & COLLOQUIUM",
    description: "Ultra-clean Swiss modernist typography invitation. Strict asymmetric grid, crisp red bar, Space Grotesk font hierarchy, geometric coordinate badges, zero ornamentation.",
    category: "Invitations",
    subcategory: "Architecture",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Swiss", "Modernist", "Architecture", "Minimal", "Symposium", "Colloquium"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 2980,
    views: 21900,
    gradient: "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
    fonts: ["Space Grotesk", "Inter"],
    colors: ["#ffffff", "#0f172a", "#ef4444", "#475569"],
    elements: [
      el("inv-504-bg", "rect", 0, 0, 1400, 2000, { fill: "#ffffff", locked: true }),
      el("inv-504-red-bar", "rect", 100, 100, 24, 1800, { fill: "#ef4444" }),
      el("inv-504-ref", "text", 160, 100, 600, 24, { text: "SWISS BAUFORUM // SESSION 18.2", fontSize: 14, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#ef4444", letterSpacing: 3 }),
      el("inv-504-date-big", "text", 800, 90, 500, 40, { text: "28.10.2026", fontSize: 36, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#0f172a", textAlign: "right" }),
      
      el("inv-504-title", "text", 160, 180, 1140, 220, { text: "STRUCTURE, VOID\n& THE OBJECTIVE\nCANVAS", fontSize: 68, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#0f172a", lineHeight: 1.05 }),
      el("inv-504-div1", "rect", 160, 440, 1140, 4, { fill: "#0f172a" }),

      // Photography inset with architectural precision
      el("inv-504-img", "image", 160, 480, 1140, 500, { src: PHOTOS_INVITATIONS['504'] }),
      el("inv-504-caption", "text", 160, 995, 1140, 24, { text: "ETH HÖNGGERBERG ARCHITEKTURGEBÄUDE // FOYER SUISSE // 47.4084° N, 8.5074° E", fontSize: 12, fontFamily: "Space Grotesk", fill: "#64748b", letterSpacing: 2 }),

      // 3 Architectural Columns
      el("inv-504-c1-num", "text", 160, 1070, 340, 28, { text: "01 // THEME", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ef4444" }),
      el("inv-504-c1-t", "text", 160, 1110, 340, 280, { text: "An invitation to examine structural honesty, cast concrete minimalism, and tectonic materiality in contemporary European civic construction.\n\nAttendance is strictly limited to accredited practitioners and researchers.", fontSize: 15, fontFamily: "Inter", fill: "#334155", lineHeight: 1.7 }),

      el("inv-504-c2-num", "text", 560, 1070, 340, 28, { text: "02 // SPEAKERS", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ef4444" }),
      el("inv-504-c2-t", "text", 560, 1110, 340, 280, { text: "Prof. Christian Kerez\nStudio Kerez, Zurich\n\nMarion Reger\nAtelier Brutal, Basel\n\nDr. Tobias Zumthor\nInstitute of Tectonics, Lausanne", fontSize: 15, fontFamily: "Inter", fill: "#334155", lineHeight: 1.7 }),

      el("inv-504-c3-num", "text", 960, 1070, 340, 28, { text: "03 // LOGISTICS", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ef4444" }),
      el("inv-504-c3-t", "text", 960, 1110, 340, 280, { text: "Wednesday 28 October 2026\n14:00 — 21:00 CEST\n\nAuditorium C, HIL E3\nStefano-Franscini-Platz 5\n8093 Zürich, Switzerland", fontSize: 15, fontFamily: "Inter", fill: "#334155", lineHeight: 1.7 }),

      // Bottom Bar
      el("inv-504-foot-line", "rect", 160, 1450, 1140, 1, { fill: "#cbd5e1" }),
      el("inv-504-foot-text", "text", 160, 1490, 800, 40, { text: "REGISTRATION CREDENTIALS REQUIRED FOR CAMPUS ACCESS CODE\nWWW.BAUFORUM-SUISSE.CH/CREDENTIALS/OCT26", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#0f172a", letterSpacing: 2 }),
      el("inv-504-qr-ph", "rect", 1180, 1470, 120, 120, { fill: "#0f172a" }),
      el("inv-504-qr-txt", "text", 1180, 1520, 120, 20, { text: "PASS QR", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#ffffff", textAlign: "center" })
    ]
  },

  // =========================================================================
  // 505: CULTURAL HERITAGE FESTIVAL (Vertical Split: Photo Left, Ceremony Right)
  // =========================================================================
  {
    id: 505,
    name: "Cultural Heritage Gala & Silk Lantern Festival",
    title: "CULTURAL HERITAGE GALA & SILK LANTERN FESTIVAL",
    description: "Vibrant jewel-toned cultural festival celebration. Split-screen layout with full vertical photo left, ceremonial schedule right, and Fraunces display typography.",
    category: "Invitations",
    subcategory: "Cultural",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Cultural", "Heritage", "Festival", "Banquet", "Lantern", "Celebration"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3670,
    views: 27800,
    gradient: "linear-gradient(180deg, #1a0933 0%, #3e1259 100%)",
    fonts: ["Fraunces", "Inter"],
    colors: ["#1a0933", "#f59e0b", "#e11d48", "#fde68a"],
    elements: [
      el("inv-505-bg", "rect", 0, 0, 1400, 2000, { fill: "#1a0933", locked: true }),
      el("inv-505-arch-outer", "rect", 60, 60, 1280, 1880, { fill: "transparent", stroke: "#f59e0b", strokeWidth: 2, borderRadius: 20 }),

      // Top Banner
      el("inv-505-badge", "rect", 100, 100, 1200, 50, { fill: "#e11d48", borderRadius: 8 }),
      el("inv-505-badget", "text", 100, 114, 1200, 24, { text: "ANNUAL CULTURAL HERITAGE BANQUET // THE LANTERN GUILD OF BEIJING", fontSize: 14, fontFamily: "Inter", fontWeight: "800", fill: "#ffffff", textAlign: "center", letterSpacing: 3 }),

      // Split Columns: Left Image, Right Text
      el("inv-505-img", "image", 100, 180, 560, 1400, { src: PHOTOS_INVITATIONS['505'], borderRadius: 12 }),
      
      // Right side content
      el("inv-505-title", "text", 700, 190, 600, 180, { text: "THE SILK\nLANTERN GALA\nOF LIGHTS", fontSize: 52, fontFamily: "Fraunces", fontWeight: "800", fill: "#fde68a", lineHeight: 1.1 }),
      el("inv-505-sub", "text", 700, 390, 600, 40, { text: "CELEBRATING ANCESTRAL ARTISTRY & MUSIC", fontSize: 14, fontFamily: "Inter", fontWeight: "700", fill: "#f59e0b", letterSpacing: 2 }),
      el("inv-505-div1", "rect", 700, 445, 600, 2, { fill: "#e11d48" }),

      // Ceremonial Program
      el("inv-505-i1-t", "text", 700, 480, 600, 32, { text: "18:00 — Courtyard Lantern Lighting", fontSize: 18, fontFamily: "Fraunces", fontWeight: "700", fill: "#ffffff" }),
      el("inv-505-i1-d", "text", 700, 520, 600, 70, { text: "Traditional welcoming drums processional with handmade silk floating lanterns in the grand pool.", fontSize: 14, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.6 }),

      el("inv-505-i2-t", "text", 700, 620, 600, 32, { text: "19:30 — Twelve Dynasties Banquet", fontSize: 18, fontFamily: "Fraunces", fontWeight: "700", fill: "#ffffff" }),
      el("inv-505-i2-d", "text", 700, 660, 600, 70, { text: "Imperial heritage recipes prepared by master culinarians with rare organic tea pairings.", fontSize: 14, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.6 }),

      el("inv-505-i3-t", "text", 700, 760, 600, 32, { text: "21:15 — Guzheng & Dragon Finale", fontSize: 18, fontFamily: "Fraunces", fontWeight: "700", fill: "#ffffff" }),
      el("inv-505-i3-d", "text", 700, 800, 600, 70, { text: "Acrobatic dragon dance through the gardens accompanied by 16-piece classical silk ensemble.", fontSize: 14, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.6 }),

      // Logistics Card right
      el("inv-505-log-card", "rect", 700, 920, 600, 260, { fill: "#260e3d", stroke: "#f59e0b", strokeWidth: 1, borderRadius: 12 }),
      el("inv-505-log-dt", "text", 730, 950, 540, 30, { text: "SATURDAY, NOVEMBER 7, 2026", fontSize: 18, fontFamily: "Fraunces", fontWeight: "700", fill: "#fde68a" }),
      el("inv-505-log-lc", "text", 730, 990, 540, 60, { text: "Imperial Garden Pavilion, Cultural District\nTraditional Formal Evening Dress Encouraged", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.5 }),
      el("inv-505-btn", "rect", 730, 1080, 540, 64, { fill: "#f59e0b", borderRadius: 32 }),
      el("inv-505-btnt", "text", 730, 1102, 540, 24, { text: "RESERVE BANQUET SEAT →", fontSize: 15, fontFamily: "Inter", fontWeight: "800", fill: "#1a0933", textAlign: "center" }),

      // Bottom cultural seal footer
      el("inv-505-foot", "text", 100, 1640, 1200, 30, { text: "HERITAGE ARTS ENDOWMENT // ACCREDITATION PASS NO. 2026-CHG-8801", fontSize: 12, fontFamily: "Inter", fill: "#94a3b8", textAlign: "center", letterSpacing: 2 })
    ]
  },

  // =========================================================================
  // 506: HAUTE COUTURE RUNWAY (High fashion editorial, vertical left masthead, Bodoni)
  // =========================================================================
  {
    id: 506,
    name: "Haute Couture Fashion Runway Preview",
    title: "HAUTE COUTURE FASHION RUNWAY PREVIEW",
    description: "High-fashion editorial runway preview invitation. Vertical masthead gutter, Bodoni serif typography, stark monochrome contrast, and VIP front-row pass details.",
    category: "Invitations",
    subcategory: "Fashion",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Fashion", "Runway", "Couture", "Editorial", "VIP", "Magazine"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4100,
    views: 31500,
    gradient: "linear-gradient(180deg, #09090b 0%, #18181b 100%)",
    fonts: ["Cinzel", "Inter"],
    colors: ["#09090b", "#fafafa", "#a1a1aa", "#71717a"],
    elements: [
      el("inv-506-bg", "rect", 0, 0, 1400, 2000, { fill: "#09090b", locked: true }),
      el("inv-506-gutter", "rect", 0, 0, 160, 2000, { fill: "#18181b" }),
      el("inv-506-gutter-txt", "text", -700, 950, 1600, 40, { text: "PARIS FASHION WEEK // OFF-SCHEDULE DEBUT 2026 // COUTURE DIVISION", fontSize: 18, fontFamily: "Inter", fontWeight: "800", fill: "#71717a", letterSpacing: 8, rotation: 270 }),

      el("inv-506-badge", "rect", 240, 100, 280, 40, { fill: "#ffffff" }),
      el("inv-506-badget", "text", 240, 112, 280, 20, { text: "INVITATION STRICTEMENT PERSONNELLE", fontSize: 11, fontFamily: "Inter", fontWeight: "800", fill: "#09090b", textAlign: "center", letterSpacing: 2 }),

      el("inv-506-title", "text", 240, 180, 1060, 160, { text: "MAISON DE L'OMBRE\nSPRING / SUMMER 2027", fontSize: 64, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff", lineHeight: 1.05 }),
      el("inv-506-sub", "text", 240, 360, 1060, 40, { text: "COLLECTION NO. 14 // DIRECTED BY JEAN-LUC MOREAU", fontSize: 16, fontFamily: "Inter", fontWeight: "600", fill: "#a1a1aa", letterSpacing: 4 }),

      el("inv-506-img", "image", 240, 440, 1060, 680, { src: PHOTOS_INVITATIONS['506'] }),
      
      el("inv-506-tier-box", "rect", 240, 1160, 1060, 140, { fill: "#18181b", stroke: "#27272a", strokeWidth: 1 }),
      el("inv-506-t1-h", "text", 280, 1185, 220, 24, { text: "SEAT ASSIGNMENT", fontSize: 12, fontFamily: "Inter", fontWeight: "700", fill: "#a1a1aa", letterSpacing: 2 }),
      el("inv-506-t1-v", "text", 280, 1220, 220, 48, { text: "ROW A • SEAT 04", fontSize: 24, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff" }),

      el("inv-506-t2-h", "text", 560, 1185, 220, 24, { text: "CALL TIME", fontSize: 12, fontFamily: "Inter", fontWeight: "700", fill: "#a1a1aa", letterSpacing: 2 }),
      el("inv-506-t2-v", "text", 560, 1220, 220, 48, { text: "20:30 SHARP", fontSize: 24, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff" }),

      el("inv-506-t3-h", "text", 840, 1185, 420, 24, { text: "DOORS CLOSE", fontSize: 12, fontFamily: "Inter", fontWeight: "700", fill: "#a1a1aa", letterSpacing: 2 }),
      el("inv-506-t3-v", "text", 840, 1220, 420, 48, { text: "20:55 STRICT (NO ENTRY AFTER)", fontSize: 20, fontFamily: "Inter", fontWeight: "800", fill: "#ef4444" }),

      el("inv-506-loc-h", "text", 240, 1340, 1060, 36, { text: "PALAIS DE TOKYO // NIVEAU -1 EXPOSITION", fontSize: 22, fontFamily: "Cinzel", fontWeight: "700", fill: "#ffffff" }),
      el("inv-506-loc-d", "text", 240, 1385, 1060, 50, { text: "13 Avenue du Président Wilson, 75116 Paris\nCocktails & Private Champagne Salon following the finale presentation.", fontSize: 15, fontFamily: "Inter", fill: "#a1a1aa", lineHeight: 1.6 }),

      el("inv-506-code-box", "rect", 240, 1480, 1060, 120, { fill: "#111113" }),
      el("inv-506-bar-strip", "rect", 280, 1515, 500, 50, { fill: "#ffffff" }),
      el("inv-506-code-txt", "text", 820, 1525, 440, 30, { text: "ACCREDITATION: FW26-PARIS-VIP-0914", fontSize: 13, fontFamily: "Inter", fontWeight: "700", fill: "#a1a1aa", letterSpacing: 2 })
    ]
  },

  // =========================================================================
  // 507: VIP EXECUTIVE TECH SUMMIT (Panoramic Center Banner, Ticket Perforation)
  // =========================================================================
  {
    id: 507,
    name: "VIP Executive Tech Summit & Private Dinner",
    title: "VIP EXECUTIVE TECH SUMMIT & PRIVATE DINNER",
    description: "Futuristic tech executive summit pass and private dinner invitation. Tech-grid styling, cyan-teal accents, boarding pass perforated bottom tier, and QR credentials.",
    category: "Invitations",
    subcategory: "Technology",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Technology", "Executive", "Summit", "VIP", "Dinner", "Boarding Pass"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3450,
    views: 26100,
    gradient: "linear-gradient(180deg, #050d1a 0%, #0c1a2e 100%)",
    fonts: ["Space Grotesk", "Inter"],
    colors: ["#050d1a", "#06b6d4", "#38bdf8", "#f8fafc"],
    elements: [
      el("inv-507-bg", "rect", 0, 0, 1400, 2000, { fill: "#050d1a", locked: true }),
      
      // Top Tech Header
      el("inv-507-top-tag", "text", 100, 80, 1200, 24, { text: "EXCLUSIVE C-SUITE GATHERING // SILICON VALLEY ROUNDTABLE", fontSize: 14, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#06b6d4", letterSpacing: 4 }),
      el("inv-507-title", "text", 100, 120, 1200, 120, { text: "FRONTIER INTELLIGENCE SUMMIT", fontSize: 56, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#f8fafc" }),
      el("inv-507-sub", "text", 100, 250, 1200, 30, { text: "CLOSED-DOOR SYMPOSIUM & PRIVATE DINNER FOR FOUNDERS & CHAIRPERSONS", fontSize: 15, fontFamily: "Inter", fontWeight: "600", fill: "#38bdf8", letterSpacing: 2 }),

      // Narrow Panoramic Banner in upper-middle
      el("inv-507-img", "image", 100, 320, 1200, 300, { src: PHOTOS_INVITATIONS['507'], borderRadius: 8 }),
      
      // 3 Tech Pillars
      el("inv-507-tr1-box", "rect", 100, 660, 380, 280, { fill: "#0b192e", stroke: "#1e3a5f", strokeWidth: 1, borderRadius: 8 }),
      el("inv-507-tr1-h", "text", 130, 690, 320, 30, { text: "01 // COMPUTE", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#06b6d4" }),
      el("inv-507-tr1-p", "text", 130, 730, 320, 180, { text: "Frontier datacenter scaling, custom ASICs, and sovereign energy constraints analyzed under Chatham House Rule.", fontSize: 14, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.6 }),

      el("inv-507-tr2-box", "rect", 510, 660, 380, 280, { fill: "#0b192e", stroke: "#1e3a5f", strokeWidth: 1, borderRadius: 8 }),
      el("inv-507-tr2-h", "text", 540, 690, 320, 30, { text: "02 // AGENTS", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#06b6d4" }),
      el("inv-507-tr2-p", "text", 540, 730, 320, 180, { text: "Autonomous coding subagents, multi-modal workflows, and corporate deployment case studies presented by lead architects.", fontSize: 14, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.6 }),

      el("inv-507-tr3-box", "rect", 920, 660, 380, 280, { fill: "#0b192e", stroke: "#1e3a5f", strokeWidth: 1, borderRadius: 8 }),
      el("inv-507-tr3-h", "text", 950, 690, 320, 30, { text: "03 // DINNER", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#06b6d4" }),
      el("inv-507-tr3-p", "text", 950, 730, 320, 180, { text: "Seven-course culinary cellar experience at Rosewood Sand Hill with private vintner wine pairings.", fontSize: 14, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.6 }),

      // Perforated Ticket Stub Separator
      el("inv-507-perf-line", "rect", 100, 990, 1200, 2, { fill: "#06b6d4" }),
      el("inv-507-cut-left", "circle", 85, 980, 30, 30, { fill: "#050d1a" }),
      el("inv-507-cut-right", "circle", 1285, 980, 30, 30, { fill: "#050d1a" }),

      // Boarding Pass / Pass Container
      el("inv-507-pass-card", "rect", 100, 1040, 1200, 420, { fill: "#091526", stroke: "#06b6d4", strokeWidth: 1, borderRadius: 12 }),
      el("inv-507-p-name-l", "text", 140, 1070, 300, 20, { text: "DELEGATE DESIGNATION", fontSize: 12, fontFamily: "Space Grotesk", fill: "#64748b" }),
      el("inv-507-p-name-v", "text", 140, 1100, 300, 36, { text: "VIP ALL-ACCESS TIER", fontSize: 22, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#38bdf8" }),

      el("inv-507-p-date-l", "text", 480, 1070, 300, 20, { text: "EVENT DATE", fontSize: 12, fontFamily: "Space Grotesk", fill: "#64748b" }),
      el("inv-507-p-date-v", "text", 480, 1100, 300, 36, { text: "THURSDAY, NOV 19", fontSize: 22, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),

      el("inv-507-p-loc-l", "text", 820, 1070, 440, 20, { text: "SAN FRANCISCO VENUE", fontSize: 12, fontFamily: "Space Grotesk", fill: "#64748b" }),
      el("inv-507-p-loc-v", "text", 820, 1100, 440, 60, { text: "Rosewood Sand Hill, Menlo Park, CA\nGrand Vista Pavilion Suite", fontSize: 15, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.5 }),

      el("inv-507-barcode", "rect", 140, 1220, 800, 60, { fill: "#06b6d4", opacity: 0.8 }),
      el("inv-507-barcodet", "text", 140, 1300, 800, 24, { text: "NON-TRANSFERABLE BIOMETRIC FAST PASS • VIP-PASS-9902-CA", fontSize: 12, fontFamily: "Space Grotesk", fill: "#64748b", letterSpacing: 2 }),
      el("inv-507-btn", "rect", 980, 1220, 280, 64, { fill: "#06b6d4", borderRadius: 8 }),
      el("inv-507-btnt", "text", 980, 1242, 280, 24, { text: "CONFIRM RSVP", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#050d1a", textAlign: "center" })
    ]
  },

  // =========================================================================
  // 508: NEON ROOFTOP SUNSET SOIRÉE (Dusk purple & neon orange, angled badges, Syne)
  // =========================================================================
  {
    id: 508,
    name: "Neon Sunset Rooftop Soirée & DJ Night",
    title: "NEON SUNSET ROOFTOP SOIRÉE & DJ NIGHT",
    description: "Electric sunset rooftop party invitation. Glowing dusk violet and sunset amber gradients, Syne headline typography, floating cocktail badges, and DJ lineup card.",
    category: "Invitations",
    subcategory: "Party",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Party", "Rooftop", "Sunset", "Cocktails", "DJ", "Nightlife"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4320,
    views: 34100,
    gradient: "linear-gradient(180deg, #1b0a2a 0%, #3b0764 60%, #ea580c 100%)",
    fonts: ["Syne", "Inter"],
    colors: ["#1b0a2a", "#f97316", "#a855f7", "#ffffff"],
    elements: [
      el("inv-508-bg", "rect", 0, 0, 1400, 2000, { fill: "#1b0a2a", locked: true }),
      el("inv-508-img", "image", 0, 0, 1400, 950, { src: PHOTOS_INVITATIONS['508'] }),
      el("inv-508-scrim", "rect", 0, 0, 1400, 950, { fill: "#1b0a2a", opacity: 0.55 }),

      el("inv-508-pill", "rect", 100, 100, 320, 48, { fill: "#f97316", borderRadius: 24 }),
      el("inv-508-pillt", "text", 100, 114, 320, 24, { text: "SUMMER SOLSTICE SPECIAL", fontSize: 13, fontFamily: "Syne", fontWeight: "800", fill: "#ffffff", textAlign: "center", letterSpacing: 2 }),

      el("inv-508-title", "text", 100, 520, 1200, 220, { text: "SOLSTICE SUNSET\nROOFTOP SOIRÉE", fontSize: 78, fontFamily: "Syne", fontWeight: "900", fill: "#ffffff", lineHeight: 0.95 }),
      el("inv-508-sub", "text", 100, 760, 1200, 50, { text: "GOLDEN HOUR COCKTAILS // ELEVATED SOUNDSCAPES // 360° SKYLINE PANORAMA", fontSize: 18, fontFamily: "Syne", fontWeight: "700", fill: "#f97316", letterSpacing: 2 }),

      // Card overlay lower half
      el("inv-508-card", "rect", 100, 850, 1200, 680, { fill: "#240e38", stroke: "#a855f7", strokeWidth: 1, borderRadius: 20 }),
      
      el("inv-508-dt-h", "text", 160, 900, 500, 30, { text: "WHEN & WHERE", fontSize: 16, fontFamily: "Syne", fontWeight: "800", fill: "#f97316", letterSpacing: 3 }),
      el("inv-508-dt-v", "text", 160, 940, 500, 110, { text: "SATURDAY, JULY 18\nDOORS AT 17:30 • SUNSET SET AT 20:12\nOVERSTORY ROOFTOP LOUNGE\n64 Pine Street, 63rd Floor, NYC", fontSize: 18, fontFamily: "Inter", fontWeight: "600", fill: "#ffffff", lineHeight: 1.6 }),

      el("inv-508-lineup-h", "text", 720, 900, 500, 30, { text: "FEATURED SOUND ARTISTS", fontSize: 16, fontFamily: "Syne", fontWeight: "800", fill: "#f97316", letterSpacing: 3 }),
      el("inv-508-lineup-v", "text", 720, 940, 500, 110, { text: "NORA EN PURE (Extended Deep Sunset Set)\nLANE 8 (This Never Happened Showcase)\nLE YOUTH // CASSIAN", fontSize: 18, fontFamily: "Inter", fontWeight: "600", fill: "#ffffff", lineHeight: 1.6 }),

      el("inv-508-div", "rect", 160, 1090, 1080, 2, { fill: "#3e175d" }),

      // Perks row
      el("inv-508-p1", "text", 160, 1130, 340, 90, { text: "OPEN APERITIVO BAR\nComplimentary bespoke botanical spritzes and mezcal infusions till 19:30.", fontSize: 14, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.5 }),
      el("inv-508-p2", "text", 530, 1130, 340, 90, { text: "GOURMET SMALL PLATES\nHandcrafted raw oysters, wagyu yakitori, and wood-fired tartines by Chef Kai.", fontSize: 14, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.5 }),
      el("inv-508-p3", "text", 900, 1130, 340, 90, { text: "ELEVATED DRESS CODE\nSunset chic, vibrant summer tailoring, metallic accents, sunglasses.", fontSize: 14, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.5 }),

      // RSVP button
      el("inv-508-rsvp-btn", "rect", 160, 1300, 1080, 80, { fill: "#f97316", borderRadius: 40 }),
      el("inv-508-rsvp-btnt", "text", 160, 1326, 1080, 30, { text: "CLAIM GUESTLIST SPOT / TABLE RESERVATION →", fontSize: 20, fontFamily: "Syne", fontWeight: "800", fill: "#ffffff", textAlign: "center", letterSpacing: 2 }),

      el("inv-508-disc", "text", 100, 1560, 1200, 30, { text: "CAPACITY RESTRICTED TO 250 GUESTS // 21+ WITH VALID ID", fontSize: 13, fontFamily: "Inter", fill: "#94a3b8", textAlign: "center", letterSpacing: 3 })
    ]
  },

  // =========================================================================
  // 509: MONOGRAM WAX-SEAL CLASSICAL DEBUTANTE (Soft cream, double gold rules)
  // =========================================================================
  {
    id: 509,
    name: "Classical Monogram Salon & Debutante Ball",
    title: "CLASSICAL MONOGRAM SALON & DEBUTANTE BALL",
    description: "Refined Italian aristocratic invitation with simulated gold monogram medallion, delicate pinstripe border framing, and elegant Cormorant Garamond calligraphy.",
    category: "Invitations",
    subcategory: "Formal",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Debutante", "Classical", "Monogram", "Formal", "Ball", "Heritage"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3100,
    views: 22800,
    gradient: "linear-gradient(180deg, #fbf9f5 0%, #f4efe6 100%)",
    fonts: ["Playfair Display", "Inter"],
    colors: ["#fbf9f5", "#b48c5a", "#1c1917", "#57534e"],
    elements: [
      el("inv-509-bg", "rect", 0, 0, 1400, 2000, { fill: "#fbf9f5", locked: true }),
      el("inv-509-frame1", "rect", 90, 90, 1220, 1820, { fill: "transparent", stroke: "#b48c5a", strokeWidth: 2 }),
      el("inv-509-frame2", "rect", 105, 105, 1190, 1790, { fill: "transparent", stroke: "#e7d8c5", strokeWidth: 1 }),

      // Gold Monogram Medallion
      el("inv-509-seal-bg", "circle", 630, 160, 140, 140, { fill: "#b48c5a" }),
      el("inv-509-seal-inner", "circle", 640, 170, 120, 120, { fill: "#fbf9f5" }),
      el("inv-509-seal-char", "text", 630, 195, 140, 70, { text: "V", fontSize: 56, fontFamily: "Playfair Display", fontWeight: "800", fill: "#b48c5a", textAlign: "center" }),

      el("inv-509-host", "text", 140, 360, 1120, 30, { text: "MR. & MRS. CHARLES MONTGOMERY VANCE", fontSize: 16, fontFamily: "Inter", fontWeight: "600", fill: "#57534e", textAlign: "center", letterSpacing: 4 }),
      el("inv-509-req", "text", 140, 405, 1120, 26, { text: "REQUEST THE PLEASURE OF YOUR COMPANY AT THE DEBUT OF THEIR DAUGHTER", fontSize: 14, fontFamily: "Inter", fill: "#78716c", textAlign: "center", letterSpacing: 2 }),

      el("inv-509-name", "text", 140, 460, 1120, 90, { text: "Vivienne Beatrice Vance", fontSize: 62, fontFamily: "Playfair Display", fontWeight: "700", fontStyle: "italic", fill: "#1c1917", textAlign: "center" }),

      el("inv-509-div", "rect", 550, 580, 300, 2, { fill: "#b48c5a" }),

      // Architectural Photo Inset
      el("inv-509-img", "image", 250, 630, 900, 420, { src: PHOTOS_INVITATIONS['509'], borderRadius: 8 }),

      // Date and Evening Details
      el("inv-509-day", "text", 140, 1100, 1120, 36, { text: "SATURDAY, DECEMBER TWELFTH", fontSize: 24, fontFamily: "Playfair Display", fontWeight: "700", fill: "#1c1917", textAlign: "center", letterSpacing: 2 }),
      el("inv-509-year", "text", 140, 1145, 1120, 24, { text: "TWO THOUSAND TWENTY-SIX", fontSize: 16, fontFamily: "Inter", fontWeight: "600", fill: "#b48c5a", textAlign: "center", letterSpacing: 4 }),
      el("inv-509-time", "text", 140, 1180, 1120, 24, { text: "HALF-PAST SEVEN IN THE EVENING", fontSize: 15, fontFamily: "Inter", fill: "#57534e", textAlign: "center", letterSpacing: 2 }),

      // Venue
      el("inv-509-loc-box", "rect", 250, 1250, 900, 140, { fill: "#f4efe6", borderRadius: 8 }),
      el("inv-509-loc-title", "text", 270, 1275, 860, 34, { text: "THE PIERRE HOTEL // GRAND BALLROOM", fontSize: 22, fontFamily: "Playfair Display", fontWeight: "700", fill: "#1c1917", textAlign: "center" }),
      el("inv-509-loc-addr", "text", 270, 1320, 860, 30, { text: "Two East 61st Street at Fifth Avenue, New York City", fontSize: 15, fontFamily: "Inter", fill: "#57534e", textAlign: "center" }),

      // Dress code & RSVP
      el("inv-509-dress", "text", 140, 1440, 1120, 26, { text: "WHITE TIE OR FORMAL MILITARY DRESS", fontSize: 14, fontFamily: "Inter", fontWeight: "700", fill: "#b48c5a", textAlign: "center", letterSpacing: 4 }),
      el("inv-509-rsvp", "text", 140, 1485, 1120, 44, { text: "PLEASE REPLY WITH ENCLOSED CARD BEFORE NOVEMBER TENTH\nTHE HONORARY BALL SECRETARIAT • VANCE.DEBUT2026@ESTATE.ORG", fontSize: 14, fontFamily: "Inter", fill: "#78716c", textAlign: "center", lineHeight: 1.6 })
    ]
  },

  // =========================================================================
  // 510: CENTENARY HERITAGE ANNIVERSARY (Asymmetric: Ledger Left, Photo Bottom-Right)
  // =========================================================================
  {
    id: 510,
    name: "Centenary Heritage Foundation Gala",
    title: "CENTENARY HERITAGE FOUNDATION GALA",
    description: "Stately 100-year foundation anniversary invitation. Rich burgundy and antiqued gold, milestone century timeline stamps (1926–2026), and traditional serif elegance.",
    category: "Invitations",
    subcategory: "Anniversary",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Anniversary", "Centenary", "Heritage", "Foundation", "Gala", "Burgundy"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3390,
    views: 24700,
    gradient: "linear-gradient(180deg, #1c0910 0%, #31101d 100%)",
    fonts: ["Cinzel", "Inter"],
    colors: ["#1c0910", "#d4af37", "#fef3c7", "#f8fafc"],
    elements: [
      el("inv-510-bg", "rect", 0, 0, 1400, 2000, { fill: "#1c0910", locked: true }),
      el("inv-510-border", "rect", 80, 80, 1240, 1840, { fill: "transparent", stroke: "#d4af37", strokeWidth: 2 }),

      // Top Century Badge
      el("inv-510-years-pill", "rect", 450, 120, 500, 48, { fill: "#d4af37", borderRadius: 24 }),
      el("inv-510-years-txt", "text", 450, 134, 500, 24, { text: "1926  —  A CENTURY OF IMPACT  —  2026", fontSize: 14, fontFamily: "Cinzel", fontWeight: "700", fill: "#1c0910", textAlign: "center", letterSpacing: 3 }),

      el("inv-510-title", "text", 120, 210, 1160, 130, { text: "THE CENTENNIAL FOUNDATION GALA", fontSize: 54, fontFamily: "Cinzel", fontWeight: "800", fill: "#fef3c7", textAlign: "center" }),
      el("inv-510-sub", "text", 120, 340, 1160, 30, { text: "ONE HUNDRED YEARS OF ADVANCING SCIENTIFIC & SOCIAL EXCELLENCE", fontSize: 14, fontFamily: "Inter", fontWeight: "600", fill: "#d4af37", textAlign: "center", letterSpacing: 3 }),

      // Asymmetric Left: 3 Timeline Ledger Blocks (y: 420 to 1100)
      el("inv-510-ms1-box", "rect", 120, 420, 540, 180, { fill: "#290c18", stroke: "#d4af37", strokeWidth: 1, borderRadius: 8 }),
      el("inv-510-ms1-yr", "text", 150, 440, 480, 32, { text: "1926 // THE FOUNDING CHARTER", fontSize: 20, fontFamily: "Cinzel", fontWeight: "800", fill: "#d4af37" }),
      el("inv-510-ms1-t", "text", 150, 480, 480, 90, { text: "Ratified by thirty visionary academic scholars at Trinity College to fund unconstrained scientific inquiry.", fontSize: 14, fontFamily: "Inter", fill: "#f8fafc", lineHeight: 1.5 }),

      el("inv-510-ms2-box", "rect", 120, 630, 540, 180, { fill: "#290c18", stroke: "#d4af37", strokeWidth: 1, borderRadius: 8 }),
      el("inv-510-ms2-yr", "text", 150, 650, 480, 32, { text: "1976 // GLOBAL EXPANSION", fontSize: 20, fontFamily: "Cinzel", fontWeight: "800", fill: "#d4af37" }),
      el("inv-510-ms2-t", "text", 150, 690, 480, 90, { text: "Endowment passes $500M, establishing 2,000 international doctoral fellowships across six continents.", fontSize: 14, fontFamily: "Inter", fill: "#f8fafc", lineHeight: 1.5 }),

      el("inv-510-ms3-box", "rect", 120, 840, 540, 180, { fill: "#290c18", stroke: "#d4af37", strokeWidth: 1, borderRadius: 8 }),
      el("inv-510-ms3-yr", "text", 150, 860, 480, 32, { text: "2026 // THE NEXT CENTURY", fontSize: 20, fontFamily: "Cinzel", fontWeight: "800", fill: "#d4af37" }),
      el("inv-510-ms3-t", "text", 150, 900, 480, 90, { text: "Unveiling the $1.2B Frontier Resilience Fund for planetary ecology and deep computational medicine.", fontSize: 14, fontFamily: "Inter", fill: "#f8fafc", lineHeight: 1.5 }),

      // Asymmetric Right: Tall Photo
      el("inv-510-img", "image", 700, 420, 580, 600, { src: PHOTOS_INVITATIONS['510'], borderRadius: 8 }),

      // Full Width Venue & Date below
      el("inv-510-dt-box", "rect", 120, 1070, 1160, 160, { fill: "#220914", stroke: "#d4af37", strokeWidth: 1, borderRadius: 8 }),
      el("inv-510-dt-date", "text", 160, 1105, 500, 36, { text: "FRIDAY, NOVEMBER 20, 2026", fontSize: 24, fontFamily: "Cinzel", fontWeight: "700", fill: "#fef3c7" }),
      el("inv-510-dt-loc", "text", 160, 1150, 500, 50, { text: "The Guildhall, Great Hall of London\nGresham Street, London EC2V 7HH", fontSize: 15, fontFamily: "Inter", fill: "#cbd5e1" }),
      el("inv-510-dt-time", "text", 740, 1105, 480, 36, { text: "18:30 TOAST // 19:45 DINNER", fontSize: 20, fontFamily: "Cinzel", fontWeight: "700", fill: "#d4af37" }),
      el("inv-510-dt-att", "text", 740, 1150, 480, 50, { text: "Black Tie & Decorations\nRoyal Patron in Attendance", fontSize: 15, fontFamily: "Inter", fill: "#cbd5e1" }),

      // RSVP
      el("inv-510-cta", "rect", 350, 1280, 700, 68, { fill: "#d4af37", borderRadius: 34 }),
      el("inv-510-ctat", "text", 350, 1302, 700, 26, { text: "REGISTER TABLE DELEGATION →", fontSize: 16, fontFamily: "Cinzel", fontWeight: "800", fill: "#1c0910", textAlign: "center", letterSpacing: 2 })
    ]
  },

  // =========================================================================
  // 511: VINEYARD PRIVATE RESERVE TASTING (Earth olive, wine flight 3-step notes)
  // =========================================================================
  {
    id: 511,
    name: "Vineyard Private Reserve Wine Tasting",
    title: "VINEYARD PRIVATE RESERVE WINE TASTING",
    description: "Earthy luxury wine estate tasting invitation. Deep olive green and warm champagne tones, Cormorant Garamond typography, and 3-step vertical wine flight notes.",
    category: "Invitations",
    subcategory: "Tasting",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Wine", "Vineyard", "Tasting", "Estate", "Olive", "Sommelier"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3510,
    views: 26300,
    gradient: "linear-gradient(180deg, #18231c 0%, #28372d 100%)",
    fonts: ["Cormorant Garamond", "Inter"],
    colors: ["#18231c", "#c2a649", "#f5f3ef", "#8e9b92"],
    elements: [
      el("inv-511-bg", "rect", 0, 0, 1400, 2000, { fill: "#18231c", locked: true }),
      el("inv-511-pinstripe", "rect", 70, 70, 1260, 1860, { fill: "transparent", stroke: "#c2a649", strokeWidth: 1 }),

      // Header
      el("inv-511-vintage", "text", 120, 110, 1160, 26, { text: "DOMAINE DU SOLEIL // ESTATE HARVEST 2026", fontSize: 15, fontFamily: "Inter", fontWeight: "700", fill: "#c2a649", textAlign: "center", letterSpacing: 4 }),
      el("inv-511-title", "text", 120, 155, 1160, 140, { text: "PRIVATE RESERVE\nBARREL TASTING", fontSize: 62, fontFamily: "Cormorant Garamond", fontWeight: "700", fill: "#f5f3ef", textAlign: "center", lineHeight: 1.1 }),
      el("inv-511-sub", "text", 120, 310, 1160, 36, { text: "AN EXCLUSIVE CELLAR PREVIEW HOSTED BY HEAD WINEMAKER MARCEL LAURENT", fontSize: 15, fontFamily: "Inter", fill: "#8e9b92", textAlign: "center", letterSpacing: 2 }),

      // Side-by-side: Image left, Wine flights right
      el("inv-511-img", "image", 120, 380, 560, 720, { src: PHOTOS_INVITATIONS['511'], borderRadius: 12 }),
      
      el("inv-511-f1-box", "rect", 720, 380, 560, 220, { fill: "#223127", stroke: "#364d3f", strokeWidth: 1, borderRadius: 8 }),
      el("inv-511-f1-h", "text", 750, 405, 500, 30, { text: "FLIGHT I: 2018 SAUVIGNON BLANC RÉSERVE", fontSize: 16, fontFamily: "Inter", fontWeight: "700", fill: "#c2a649" }),
      el("inv-511-f1-t", "text", 750, 445, 500, 120, { text: "Aged in French Allier oak for 24 months. Crisp minerality, candied lemon peel, wet limestone, and elderflower aromas.\nPaired with artisan goat chevre and micro-fennel.", fontSize: 14, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.6 }),

      el("inv-511-f2-box", "rect", 720, 630, 560, 220, { fill: "#223127", stroke: "#364d3f", strokeWidth: 1, borderRadius: 8 }),
      el("inv-511-f2-h", "text", 750, 655, 500, 30, { text: "FLIGHT II: 2015 CABERNET FRANC MONOPOLE", fontSize: 16, fontFamily: "Inter", fontWeight: "700", fill: "#c2a649" }),
      el("inv-511-f2-t", "text", 750, 695, 500, 120, { text: "Single-vineyard hillside parcel. Structured blackberry, tobacco leaf, roasted graphite, and supple velvety tannins.\nPaired with 40-day dry aged venison tartare.", fontSize: 14, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.6 }),

      el("inv-511-f3-box", "rect", 720, 880, 560, 220, { fill: "#223127", stroke: "#364d3f", strokeWidth: 1, borderRadius: 8 }),
      el("inv-511-f3-h", "text", 750, 905, 500, 30, { text: "FLIGHT III: 2010 GRAND CUVÉE LIBRARY METHUSELAH", fontSize: 16, fontFamily: "Inter", fontWeight: "700", fill: "#c2a649" }),
      el("inv-511-f3-t", "text", 750, 945, 500, 120, { text: "Drawn directly from the estate's private granite underground cave. Only 400 bottles produced. Truffle, dried fig, and cedarwood.\nPaired with 36-month Comté cheese.", fontSize: 14, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.6 }),

      // Venue & Registration
      el("inv-511-card", "rect", 120, 1140, 1160, 180, { fill: "#1e2c23", stroke: "#c2a649", strokeWidth: 1, borderRadius: 12 }),
      el("inv-511-loc-t", "text", 160, 1170, 540, 36, { text: "NAPA VALLEY ESTATE CHÂTEAU", fontSize: 22, fontFamily: "Cormorant Garamond", fontWeight: "700", fill: "#f5f3ef" }),
      el("inv-511-loc-d", "text", 160, 1215, 540, 60, { text: "8400 Silverado Trail, Rutherford, CA 94573\nSaturday, October 10th, 2026 // 15:00 to 19:00", fontSize: 15, fontFamily: "Inter", fill: "#8e9b92", lineHeight: 1.5 }),
      el("inv-511-cta", "rect", 760, 1190, 480, 64, { fill: "#c2a649", borderRadius: 32 }),
      el("inv-511-ctat", "text", 760, 1212, 480, 24, { text: "RESERVE CELLAR PASS ($350) →", fontSize: 15, fontFamily: "Inter", fontWeight: "800", fill: "#18231c", textAlign: "center" })
    ]
  },

  // =========================================================================
  // 512: BAUHAUS VERNISSAGE ART OPENING (Primary colors, asymmetric blocks, Archivo)
  // =========================================================================
  {
    id: 512,
    name: "Bauhaus Vernissage & Art Opening",
    title: "BAUHAUS VERNISSAGE & CONTEMPORARY ART OPENING",
    description: "Radical asymmetric Bauhaus exhibition opening invitation. Bold cobalt blue, cadmium yellow, and stark black geometry, Archivo Black headline typography, and exhibition artist roster.",
    category: "Invitations",
    subcategory: "Art Exhibition",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Bauhaus", "Art", "Vernissage", "Exhibition", "Gallery", "Modernist"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3880,
    views: 28900,
    gradient: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)",
    fonts: ["Space Grotesk", "Inter"],
    colors: ["#f8fafc", "#2563eb", "#eab308", "#0f172a"],
    elements: [
      el("inv-512-bg", "rect", 0, 0, 1400, 2000, { fill: "#f8fafc", locked: true }),
      el("inv-512-blue-block", "rect", 0, 0, 1400, 420, { fill: "#2563eb" }),
      el("inv-512-yellow-strip", "rect", 0, 420, 1400, 30, { fill: "#eab308" }),

      el("inv-512-top-tag", "text", 80, 60, 1240, 30, { text: "BAUHAUS 107 DESSAU // INTERNATIONAL EXHIBITION OPENING", fontSize: 14, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#eab308", letterSpacing: 4 }),
      el("inv-512-title", "text", 80, 110, 1240, 200, { text: "RADICAL FORMS:\nCONSTRUCTIVISM 2026", fontSize: 72, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff", lineHeight: 1.0 }),
      el("inv-512-date-box", "rect", 80, 320, 320, 60, { fill: "#0f172a" }),
      el("inv-512-date-txt", "text", 80, 338, 320, 24, { text: "08.11 — 28.02", fontSize: 20, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff", textAlign: "center" }),

      // Asymmetric Hero Image
      el("inv-512-img", "image", 80, 490, 780, 580, { src: PHOTOS_INVITATIONS['512'] }),

      // Side manifesto
      el("inv-512-side-card", "rect", 900, 490, 420, 580, { fill: "#0f172a" }),
      el("inv-512-side-h", "text", 930, 520, 360, 36, { text: "VERNISSAGE NIGHT", fontSize: 20, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#eab308" }),
      el("inv-512-side-p", "text", 930, 570, 360, 280, { text: "Friday 8 November 2026\n18:30 — 23:00 CET\n\nOpening remarks by Curator Dr. Hannelore Grothe at 19:15.\n\nLive experimental synth performance by Raster-Noton collective in the sculpture atrium.", fontSize: 15, fontFamily: "Inter", fill: "#f8fafc", lineHeight: 1.7 }),
      el("inv-512-side-btn", "rect", 930, 970, 360, 64, { fill: "#2563eb" }),
      el("inv-512-side-btnt", "text", 930, 992, 360, 24, { text: "RSVP VERNISSAGE PASS", fontSize: 14, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff", textAlign: "center" }),

      // 3 Artist Columns below
      el("inv-512-col1-h", "text", 80, 1120, 380, 28, { text: "PARTICIPATING ARTISTS", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#2563eb" }),
      el("inv-512-col1-t", "text", 80, 1160, 380, 180, { text: "Käthe Kollwitz Contemporary\nLászló Moholy-Nagy Estate\nOlafur Eliasson Studio\nZaha Hadid Design Foundation", fontSize: 15, fontFamily: "Inter", fill: "#334155", lineHeight: 1.8 }),

      el("inv-512-col2-h", "text", 500, 1120, 380, 28, { text: "CURATORIAL FOCUS", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#2563eb" }),
      el("inv-512-col2-t", "text", 500, 1160, 380, 180, { text: "Revisiting primary geometry, unadorned structural steel, and mechanical graphic systems across 60 premier international works.", fontSize: 15, fontFamily: "Inter", fill: "#334155", lineHeight: 1.8 }),

      el("inv-512-col3-h", "text", 920, 1120, 400, 28, { text: "LOCATION & TRANSIT", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#2563eb" }),
      el("inv-512-col3-t", "text", 920, 1160, 400, 180, { text: "Bauhaus Museum Dessau\nMies-van-der-Rohe-Platz 1\n06844 Dessau-Roßlau, Germany\nU-Bahn Dessau Central", fontSize: 15, fontFamily: "Inter", fill: "#334155", lineHeight: 1.8 })
    ]
  },

  // =========================================================================
  // 513: WARM PASTEL GARDEN LUNCHEON (Blush pink & pistachio, rounded cards)
  // =========================================================================
  {
    id: 513,
    name: "Pastel Spring Garden Luncheon & Shower",
    title: "PASTEL SPRING GARDEN LUNCHEON & CELEBRATION",
    description: "Delightful warm pastel spring garden celebration invitation. Soft blush pink and sweet sage green accents, playful rounded cards, and an afternoon tea schedule.",
    category: "Invitations",
    subcategory: "Luncheon",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Garden", "Luncheon", "Pastel", "Spring", "Celebration", "Baby Shower"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3740,
    views: 29100,
    gradient: "linear-gradient(180deg, #fdf2f4 0%, #fef7ea 100%)",
    fonts: ["Fraunces", "Inter"],
    colors: ["#fdf2f4", "#f43f5e", "#10b981", "#475569"],
    elements: [
      el("inv-513-bg", "rect", 0, 0, 1400, 2000, { fill: "#fdf2f4", locked: true }),
      el("inv-513-border", "rect", 60, 60, 1280, 1880, { fill: "transparent", stroke: "#fbcfe8", strokeWidth: 2, borderRadius: 32 }),

      el("inv-513-pill", "rect", 480, 110, 440, 44, { fill: "#fce7f3", borderRadius: 22 }),
      el("inv-513-pillt", "text", 480, 122, 440, 22, { text: "PLEASE JOIN US FOR AN AFTERNOON IN BLOOM", fontSize: 13, fontFamily: "Inter", fontWeight: "700", fill: "#f43f5e", textAlign: "center", letterSpacing: 2 }),

      el("inv-513-title", "text", 120, 180, 1160, 130, { text: "Garden Blossoms\nLuncheon & High Tea", fontSize: 64, fontFamily: "Fraunces", fontWeight: "700", fill: "#881337", textAlign: "center", lineHeight: 1.15 }),
      el("inv-513-sub", "text", 120, 330, 1160, 36, { text: "IN CELEBRATION OF CHARLOTTE'S UPCOMING ARRIVAL", fontSize: 15, fontFamily: "Inter", fontWeight: "600", fill: "#f43f5e", textAlign: "center", letterSpacing: 3 }),

      // Circular/Pill photo treatment
      el("inv-513-img", "image", 350, 400, 700, 500, { src: PHOTOS_INVITATIONS['513'], borderRadius: 250 }),

      // 3 cute rounded schedule cards
      el("inv-513-c1", "rect", 140, 950, 340, 200, { fill: "#ffffff", borderRadius: 20, stroke: "#fbcfe8", strokeWidth: 1 }),
      el("inv-513-c1-t1", "text", 160, 980, 300, 28, { text: "13:00 // ARRIVAL", fontSize: 15, fontFamily: "Fraunces", fontWeight: "700", fill: "#f43f5e" }),
      el("inv-513-c1-t2", "text", 160, 1020, 300, 100, { text: "Sparkling elderflower spritzes & garden canapés by the rose trellis.", fontSize: 14, fontFamily: "Inter", fill: "#475569", lineHeight: 1.5 }),

      el("inv-513-c2", "rect", 530, 950, 340, 200, { fill: "#ffffff", borderRadius: 20, stroke: "#fbcfe8", strokeWidth: 1 }),
      el("inv-513-c2-t1", "text", 550, 980, 300, 28, { text: "14:15 // HIGH TEA", fontSize: 15, fontFamily: "Fraunces", fontWeight: "700", fill: "#10b981" }),
      el("inv-513-c2-t2", "text", 550, 1020, 300, 100, { text: "Artisan scones, Devonshire clotted cream & warm savory tartlets.", fontSize: 14, fontFamily: "Inter", fill: "#475569", lineHeight: 1.5 }),

      el("inv-513-c3", "rect", 920, 950, 340, 200, { fill: "#ffffff", borderRadius: 20, stroke: "#fbcfe8", strokeWidth: 1 }),
      el("inv-513-c3-t1", "text", 940, 980, 300, 28, { text: "15:30 // SWEETS", fontSize: 15, fontFamily: "Fraunces", fontWeight: "700", fill: "#f43f5e" }),
      el("inv-513-c3-t2", "text", 940, 1020, 300, 100, { text: "Macaron tower cutting, floral crafts & baby prediction games.", fontSize: 14, fontFamily: "Inter", fill: "#475569", lineHeight: 1.5 }),

      // Venue & RSVP
      el("inv-513-v-box", "rect", 140, 1200, 1120, 160, { fill: "#ffffff", borderRadius: 24, stroke: "#fbcfe8", strokeWidth: 1 }),
      el("inv-513-v-dt", "text", 180, 1230, 500, 36, { text: "SUNDAY, MAY 17TH // 1:00 PM", fontSize: 22, fontFamily: "Fraunces", fontWeight: "700", fill: "#881337" }),
      el("inv-513-v-addr", "text", 180, 1275, 500, 50, { text: "The Glasshouse Conservatory, Riverdale Gardens\nFloral dresses & pastel attire welcomed", fontSize: 14, fontFamily: "Inter", fill: "#64748b" }),
      el("inv-513-btn", "rect", 760, 1245, 460, 64, { fill: "#f43f5e", borderRadius: 32 }),
      el("inv-513-btnt", "text", 760, 1267, 460, 24, { text: "RSVP WITH DIETARY PREFERENCES →", fontSize: 14, fontFamily: "Inter", fontWeight: "800", fill: "#ffffff", textAlign: "center" })
    ]
  },

  // =========================================================================
  // 514: CORPORATE ANNUAL MILESTONE (Right column photo, Left column honors & itinerary)
  // =========================================================================
  {
    id: 514,
    name: "Corporate Milestone & Honors Dinner",
    title: "CORPORATE ANNUAL MILESTONE & HONORS DINNER",
    description: "Authoritative enterprise awards dinner invitation. Deep corporate navy with polished platinum accents, DM Serif Display typography, right-column photography, and table seating callouts.",
    category: "Invitations",
    subcategory: "Corporate",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Corporate", "Milestone", "Honors", "Dinner", "Awards", "Executive"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3180,
    views: 23600,
    gradient: "linear-gradient(180deg, #0a1424 0%, #112240 100%)",
    fonts: ["DM Serif Display", "Inter"],
    colors: ["#0a1424", "#38bdf8", "#e2e8f0", "#94a3b8"],
    elements: [
      el("inv-514-bg", "rect", 0, 0, 1400, 2000, { fill: "#0a1424", locked: true }),
      el("inv-514-frame", "rect", 70, 70, 1260, 1860, { fill: "transparent", stroke: "#38bdf8", strokeWidth: 1 }),

      // Top Tag
      el("inv-514-corp", "text", 120, 110, 1160, 24, { text: "GLOBAL HORIZONS GROUP // ANNUAL EXECUTIVE COUNCIL", fontSize: 13, fontFamily: "Inter", fontWeight: "800", fill: "#38bdf8", letterSpacing: 4 }),

      // Left Column: Title and 4-step schedule
      el("inv-514-title", "text", 120, 160, 680, 150, { text: "ANNUAL LEADERSHIP\nHONORS & BANQUET", fontSize: 54, fontFamily: "DM Serif Display", fontWeight: "700", fill: "#ffffff", lineHeight: 1.15 }),
      el("inv-514-sub", "text", 120, 330, 680, 50, { text: "RECOGNIZING REMARKABLE ENTERPRISE ACHIEVEMENT & VALUE TRANSFORMATION", fontSize: 14, fontFamily: "Inter", fill: "#94a3b8", letterSpacing: 1 }),
      el("inv-514-div", "rect", 120, 400, 680, 2, { fill: "#1e3a5f" }),

      // 4-Step Timeline in Left Column
      el("inv-514-t1", "text", 120, 430, 680, 80, { text: "18:00 — Champagne Reception & Board Member Meet\nPrivate welcome toast in the Executive Terrace Suite.", fontSize: 15, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.5 }),
      el("inv-514-t2", "text", 120, 530, 680, 80, { text: "19:15 — Three-Course Gala Banquet & Keynote Address\nRemarks by Chief Executive Officer on the 2030 Vision.", fontSize: 15, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.5 }),
      el("inv-514-t3", "text", 120, 630, 680, 80, { text: "20:45 — Annual Innovation & Honors Awards Presentation\nBestowing the Chairman's Gold Medal across 8 divisions.", fontSize: 15, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.5 }),
      el("inv-514-t4", "text", 120, 730, 680, 80, { text: "22:00 — Celebration Speakeasy & Live Quartet\nExclusive networking lounge open until midnight.", fontSize: 15, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.5 }),

      // Right Column: Tall Portrait Image
      el("inv-514-img", "image", 840, 160, 440, 750, { src: PHOTOS_INVITATIONS['514'], borderRadius: 12 }),

      // Full Width Seating & Table Callout across bottom
      el("inv-514-seat-card", "rect", 120, 960, 1160, 160, { fill: "#13284c", stroke: "#38bdf8", strokeWidth: 1, borderRadius: 8 }),
      el("inv-514-s1-h", "text", 160, 990, 240, 20, { text: "HONOREE TABLE", fontSize: 12, fontFamily: "Inter", fontWeight: "700", fill: "#38bdf8", letterSpacing: 2 }),
      el("inv-514-s1-v", "text", 160, 1020, 240, 48, { text: "TABLE 04", fontSize: 32, fontFamily: "DM Serif Display", fill: "#ffffff" }),

      el("inv-514-s2-h", "text", 440, 990, 240, 20, { text: "TIER ADMISSION", fontSize: 12, fontFamily: "Inter", fontWeight: "700", fill: "#38bdf8", letterSpacing: 2 }),
      el("inv-514-s2-v", "text", 440, 1020, 240, 48, { text: "EXECUTIVE TIER", fontSize: 24, fontFamily: "Inter", fontWeight: "800", fill: "#ffffff" }),

      el("inv-514-s3-h", "text", 720, 990, 520, 20, { text: "EVENING PROTOCOL", fontSize: 12, fontFamily: "Inter", fontWeight: "700", fill: "#38bdf8", letterSpacing: 2 }),
      el("inv-514-s3-v", "text", 720, 1020, 520, 60, { text: "Black-Tie Optional // Badges Issued at North Foyer\nLive Broadcast to 18 International Offices", fontSize: 14, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.5 }),

      // Venue & Registration card
      el("inv-514-v-card", "rect", 120, 1150, 1160, 140, { fill: "#0e1d35", stroke: "#38bdf8", strokeWidth: 1, borderRadius: 8 }),
      el("inv-514-vc-loc", "text", 160, 1175, 600, 26, { text: "THE METROPOLITAN CLUB // GRAND AUDITORIUM", fontSize: 20, fontFamily: "DM Serif Display", fill: "#ffffff" }),
      el("inv-514-vc-addr", "text", 160, 1210, 600, 30, { text: "One East 60th Street, New York, NY 10022  •  Friday, Oct 23, 2026", fontSize: 14, fontFamily: "Inter", fill: "#94a3b8" }),
      el("inv-514-btn", "rect", 840, 1180, 400, 64, { fill: "#38bdf8", borderRadius: 8 }),
      el("inv-514-btnt", "text", 840, 1202, 400, 22, { text: "CONFIRM ATTENDANCE →", fontSize: 14, fontFamily: "Inter", fontWeight: "800", fill: "#0a1424", textAlign: "center" })
    ]
  },

  // =========================================================================
  // 515: YACHT CLUB REGATTA & SUMMER SOIRÉE (Landscape photo banner in center)
  // =========================================================================
  {
    id: 515,
    name: "Yacht Club Regatta & Midsummer Soirée",
    title: "YACHT CLUB REGATTA & MIDSUMMER SOIRÉE",
    description: "Maritime luxury yacht club invitation. Deep navy and gold accents, nautical coordinate stamps, waterfront deck party schedule, and regatta spectator details.",
    category: "Invitations",
    subcategory: "Nautical",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Yacht", "Regatta", "Nautical", "Summer", "Waterfront", "Soirée"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3720,
    views: 28400,
    gradient: "linear-gradient(180deg, #0b1526 0%, #182e4e 100%)",
    fonts: ["Playfair Display", "Inter"],
    colors: ["#0b1526", "#eab308", "#ffffff", "#94a3b8"],
    elements: [
      el("inv-515-bg", "rect", 0, 0, 1400, 2000, { fill: "#0b1526", locked: true }),
      el("inv-515-stripes-top", "rect", 0, 0, 1400, 24, { fill: "#eab308" }),
      el("inv-515-stripes-sub", "rect", 0, 24, 1400, 12, { fill: "#ffffff" }),

      // Top Coordinates & Burgee
      el("inv-515-burgee", "text", 120, 80, 1160, 24, { text: "NEWPORT HARBOR YACHT CLUB // 41.4901° N, 71.3128° W", fontSize: 14, fontFamily: "Inter", fontWeight: "700", fill: "#eab308", textAlign: "center", letterSpacing: 4 }),
      el("inv-515-title", "text", 120, 125, 1160, 130, { text: "ANNUAL COMMODORE'S CUP\n& HARBOR SOIRÉE", fontSize: 58, fontFamily: "Playfair Display", fontWeight: "800", fill: "#ffffff", textAlign: "center", lineHeight: 1.15 }),
      el("inv-515-sub", "text", 120, 275, 1160, 30, { text: "INVITING MEMBERS AND GUESTS TO THE 88TH CLASSIC REGATTA CELEBRATION", fontSize: 14, fontFamily: "Inter", fill: "#94a3b8", textAlign: "center", letterSpacing: 2 }),

      // Centered Landscape Photo Banner (y: 340 to 760)
      el("inv-515-img", "image", 120, 340, 1160, 420, { src: PHOTOS_INVITATIONS['515'], borderRadius: 12 }),

      // Event Cards (Day & Evening)
      el("inv-515-card1", "rect", 120, 790, 560, 300, { fill: "#13233c", stroke: "#eab308", strokeWidth: 1, borderRadius: 8 }),
      el("inv-515-c1-h", "text", 150, 815, 500, 26, { text: "DAY: REGATTA RACE VIEWING", fontSize: 17, fontFamily: "Playfair Display", fontWeight: "700", fill: "#eab308" }),
      el("inv-515-c1-t", "text", 150, 855, 500, 190, { text: "11:00 — Spectator Fleet Boarding at Dock 4\n12:30 — First Gun & Spinnaker Start\n15:00 — Finish Line Salute & Harbor Flotilla\n\nComplimentary nautical hampers and chilled prosecco served aboard the spectator vessels.", fontSize: 14, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.6 }),

      el("inv-515-card2", "rect", 720, 790, 560, 300, { fill: "#13233c", stroke: "#eab308", strokeWidth: 1, borderRadius: 8 }),
      el("inv-515-c2-h", "text", 750, 815, 500, 26, { text: "EVENING: CLUBHOUSE LAWN SOIRÉE", fontSize: 17, fontFamily: "Playfair Display", fontWeight: "700", fill: "#eab308" }),
      el("inv-515-c2-t", "text", 750, 855, 500, 190, { text: "18:00 — Sunset Oyster Shucking & Dark 'n' Stormies\n19:30 — Lobster Boil & Silver Cup Ceremony\n21:00 — Live Swing Band & Lawn Dancing\n\nAttire: Nautical White, Navy Blazers, Boat Shoes.", fontSize: 14, fontFamily: "Inter", fill: "#e2e8f0", lineHeight: 1.6 }),

      // Footer RSVP
      el("inv-515-ftr", "rect", 120, 1120, 1160, 140, { fill: "#08101e", stroke: "#eab308", strokeWidth: 1, borderRadius: 8 }),
      el("inv-515-f-t", "text", 160, 1145, 600, 30, { text: "SATURDAY, AUGUST 22ND, 2026 // NEWPORT, RHODE ISLAND", fontSize: 15, fontFamily: "Inter", fontWeight: "700", fill: "#ffffff" }),
      el("inv-515-f-d", "text", 160, 1180, 600, 40, { text: "Spectator boat reservations required by August 5th.\nMember berth inquiries: dockmaster@nhyc-regatta.org", fontSize: 13, fontFamily: "Inter", fill: "#94a3b8" }),
      el("inv-515-btn", "rect", 820, 1150, 420, 64, { fill: "#eab308", borderRadius: 32 }),
      el("inv-515-btnt", "text", 820, 1172, 420, 24, { text: "SECURE REGATTA PASS →", fontSize: 15, fontFamily: "Inter", fontWeight: "800", fill: "#0b1526", textAlign: "center" })
    ]
  },

  // =========================================================================
  // 516: PHILHARMONIC SYMPHONY (Full-Height Split Column: Left Photo/Host, Right Mahler)
  // =========================================================================
  {
    id: 516,
    name: "Philharmonic Symphony Opening Night Gala",
    title: "PHILHARMONIC SYMPHONY OPENING NIGHT GALA",
    description: "Majestic symphonic concert season opening invitation. Full-height split editorial layout with conductor spotlight on left and musical movements on right.",
    category: "Invitations",
    subcategory: "Concert",
    size: "1400×2000",
    canvasWidth: 1400,
    canvasHeight: 2000,
    orientation: "portrait",
    tags: ["Philharmonic", "Symphony", "Opening Night", "Concert", "Gala", "Orchestra"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 3950,
    views: 30200,
    gradient: "linear-gradient(180deg, #09090b 0%, #1c1917 100%)",
    fonts: ["Playfair Display", "Inter"],
    colors: ["#09090b", "#d97706", "#fef3c7", "#a1a1aa"],
    elements: [
      el("inv-516-bg", "rect", 0, 0, 1400, 2000, { fill: "#09090b", locked: true }),
      el("inv-516-gold-border", "rect", 60, 60, 1280, 1880, { fill: "transparent", stroke: "#d97706", strokeWidth: 1 }),

      // Left Column: Grand Hall Photo (y: 100 to 1100) + Conductor Spotlight
      el("inv-516-img", "image", 100, 100, 540, 1000, { src: PHOTOS_INVITATIONS['516'], borderRadius: 12 }),
      
      el("inv-516-cond-box", "rect", 100, 1130, 540, 320, { fill: "#141210", stroke: "#292524", strokeWidth: 1, borderRadius: 8 }),
      el("inv-516-c-tag", "text", 130, 1160, 480, 22, { text: "ARTISTIC DIRECTION & CONDUCTOR", fontSize: 13, fontFamily: "Inter", fontWeight: "800", fill: "#d97706", letterSpacing: 2 }),
      el("inv-516-c-name", "text", 130, 1195, 480, 36, { text: "MAESTRO KLAUS MÄKELÄ", fontSize: 24, fontFamily: "Playfair Display", fontWeight: "700", fill: "#ffffff" }),
      el("inv-516-c-desc", "text", 130, 1245, 480, 160, { text: "Featuring guest soloist Lise Davidsen (Soprano) and the 120-voice Netherlands Radio Choir.\n\nRecorded live for global acoustic transmission on Deutsche Grammophon.", fontSize: 14, fontFamily: "Inter", fill: "#a1a1aa", lineHeight: 1.6 }),

      // Right Column: Title, Repertoire, Details
      el("inv-516-pre", "text", 680, 100, 620, 24, { text: "ROYAL CONCERTGEBOUW // 138TH SEASON", fontSize: 13, fontFamily: "Inter", fontWeight: "800", fill: "#d97706", letterSpacing: 4 }),
      el("inv-516-title", "text", 680, 140, 620, 190, { text: "GALA OPENING:\nMAHLER'S\nRESURRECTION", fontSize: 56, fontFamily: "Playfair Display", fontWeight: "800", fill: "#ffffff", lineHeight: 1.05 }),
      el("inv-516-sub", "text", 680, 350, 620, 30, { text: "SYMPHONY NO. 2 IN C MINOR", fontSize: 18, fontFamily: "Playfair Display", fontStyle: "italic", fill: "#fef3c7" }),
      el("inv-516-div-r", "rect", 680, 400, 620, 2, { fill: "#d97706" }),

      // Movements
      el("inv-516-r1-t", "text", 680, 430, 620, 28, { text: "I. Allegro maestoso (22 min)", fontSize: 17, fontFamily: "Playfair Display", fontWeight: "700", fill: "#ffffff" }),
      el("inv-516-r1-d", "text", 680, 465, 620, 60, { text: "Solemn funeral march with catastrophic orchestral brass climaxes.", fontSize: 14, fontFamily: "Inter", fill: "#a1a1aa", lineHeight: 1.5 }),

      el("inv-516-r2-t", "text", 680, 545, 620, 28, { text: "II. Andante moderato & Scherzo (20 min)", fontSize: 17, fontFamily: "Playfair Display", fontWeight: "700", fill: "#ffffff" }),
      el("inv-516-r2-d", "text", 680, 580, 620, 60, { text: "Austrian rustic ländler leading into the eerie St. Anthony aquatic sermon.", fontSize: 14, fontFamily: "Inter", fill: "#a1a1aa", lineHeight: 1.5 }),

      el("inv-516-r3-t", "text", 680, 660, 620, 28, { text: "III. Urlicht & Grand Choral Finale (42 min)", fontSize: 17, fontFamily: "Playfair Display", fontWeight: "700", fill: "#ffffff" }),
      el("inv-516-r3-d", "text", 680, 695, 620, 70, { text: "Solo alto leading to massive choral resurrection with organ and offstage horns.", fontSize: 14, fontFamily: "Inter", fill: "#a1a1aa", lineHeight: 1.5 }),

      // Gala Banquet box on right
      el("inv-516-log-box", "rect", 680, 800, 620, 240, { fill: "#1c1917", stroke: "#d97706", strokeWidth: 1, borderRadius: 8 }),
      el("inv-516-l-d", "text", 710, 830, 560, 30, { text: "SATURDAY, SEPTEMBER 26, 2026 // 19:30", fontSize: 18, fontFamily: "Playfair Display", fontWeight: "700", fill: "#ffffff" }),
      el("inv-516-l-a", "text", 710, 870, 560, 50, { text: "Main Hall, Concertgebouwplein 10, Amsterdam\nBlack-Tie Gala Banquet in the Mirror Hall immediately following.", fontSize: 14, fontFamily: "Inter", fill: "#a1a1aa", lineHeight: 1.5 }),
      el("inv-516-cta", "rect", 710, 940, 560, 64, { fill: "#d97706", borderRadius: 32 }),
      el("inv-516-ctat", "text", 710, 962, 560, 24, { text: "PURCHASE GALA PATRON TICKET →", fontSize: 14, fontFamily: "Inter", fontWeight: "800", fill: "#ffffff", textAlign: "center" })
    ]
  }
];

// Write file
const outputPath = path.resolve('artifacts/api-server/src/lib/templates/invitations.ts');
const fileContent = `// ORD Studio Canonical Invitations Registry (IDs 501-516)
// Generated by generate_all_invitations.mjs with 100% Unique Design DNA and Zero Photo Reuse.

export const INVITATION_TEMPLATES = ${JSON.stringify(INVITATION_TEMPLATES, null, 2)};
`;

fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Successfully regenerated 16 invitations with varied structural layouts to ${outputPath}`);
