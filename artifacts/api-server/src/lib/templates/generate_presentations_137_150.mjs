// Complete Presentations Generator (IDs 137 to 150) — 14 New High-Grade Multi-Slide Decks
// 1920x1080 Widescreen, 5-6 bespoke slides per deck, 100% unique layouts and content.

function el(id, type, x, y, width, height, props = {}) {
  return { visible: true, id, type, x, y, width, height, ...props };
}

export function generatePresentations137to150() {
  const decks = [
    // 137: Quantum Computing & Subatomic Cryptography
    {
      id: 137,
      name: "Quantum Computing & Subatomic Cryptography",
      title: "QUANTUM FRONTIERS // 128-QUBIT PROCESSOR ARCHITECTURE",
      description: "Deep obsidian dark-mode deck with glowing cyan matrices, laser grid guides, and dense technical topology.",
      category: "Presentation",
      subcategory: "Technology",
      size: "1920×1080",
      canvasWidth: 1920,
      canvasHeight: 1080,
      orientation: "landscape",
      tags: ["Quantum", "Computing", "Technology", "Cryptography", "DeepTech"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 6420,
      views: 48900,
      gradient: "linear-gradient(135deg, #030712 0%, #06b6d4 100%)",
      fonts: ["Space Grotesk", "Inter"],
      colors: ["#030712", "#06b6d4", "#ffffff", "#94a3b8"],
      slides: [
        {
          id: "p137-s1",
          name: "Cover",
          elements: [
            el("p137-s1-bg", "rect", 0, 0, 1920, 1080, { fill: "#030712", locked: true }),
            el("p137-s1-grid", "rect", 80, 80, 1760, 920, { stroke: "rgba(6,182,212,0.15)", strokeWidth: 1, fill: "transparent" }),
            el("p137-s1-tag", "text", 120, 120, 1680, 32, { text: "QUANTUM DYNAMICS RESEARCH LAB // Q-SERIES SPECIFICATION", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#06b6d4", letterSpacing: 4 }),
            el("p137-s1-title", "text", 120, 220, 1100, 240, { text: "QUANTUM\nHORIZONS", fontSize: 104, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#ffffff", lineHeight: 0.95 }),
            el("p137-s1-sub", "text", 120, 500, 850, 90, { text: "Fault-tolerant superconducting topological qubits, coherent cryogenic buses, and subatomic cryptographic primitives.", fontSize: 22, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.6 }),
            el("p137-s1-img", "image", 1020, 220, 780, 680, { src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200", borderRadius: 16 }),
            el("p137-s1-foot", "text", 120, 900, 800, 30, { text: "DOCUMENT REF: QL-2026-X09 // RESTRICTED ACCESS", fontSize: 14, fontFamily: "Space Grotesk", fill: "rgba(255,255,255,0.4)", letterSpacing: 2 })
          ]
        },
        {
          id: "p137-s2",
          name: "Architecture Breakdown",
          elements: [
            el("p137-s2-bg", "rect", 0, 0, 1920, 1080, { fill: "#030712", locked: true }),
            el("p137-s2-tag", "text", 120, 100, 1680, 32, { text: "SYSTEM ARCHITECTURE", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#06b6d4", letterSpacing: 3 }),
            el("p137-s2-title", "text", 120, 150, 1680, 70, { text: "128-Qubit Diamond Lattice Topology", fontSize: 52, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
            el("p137-s2-c1", "rect", 120, 280, 520, 600, { fill: "#0b1329", stroke: "rgba(6,182,212,0.2)", strokeWidth: 1, borderRadius: 12 }),
            el("p137-s2-c1-num", "text", 160, 320, 440, 60, { text: "01", fontSize: 44, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#06b6d4" }),
            el("p137-s2-c1-h", "text", 160, 400, 440, 40, { text: "Phase Noise & Drift", fontSize: 24, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#ffffff" }),
            el("p137-s2-c1-p", "text", 160, 460, 440, 360, { text: "Thermal fluctuation at 15mK introduces rapid phase drift, decaying gate fidelity below standard surface code fault-tolerance thresholds within 120 microseconds.", fontSize: 18, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.7 }),
            el("p137-s2-c2", "rect", 700, 280, 520, 600, { fill: "#0b1329", stroke: "rgba(6,182,212,0.2)", strokeWidth: 1, borderRadius: 12 }),
            el("p137-s2-c2-num", "text", 740, 320, 440, 60, { text: "02", fontSize: 44, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#06b6d4" }),
            el("p137-s2-c2-h", "text", 740, 400, 440, 40, { text: "Interconnect Loss", fontSize: 24, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#ffffff" }),
            el("p137-s2-c2-p", "text", 740, 460, 440, 360, { text: "Microwave routing between modular dilution fridges introduces excessive photon attenuation, capping distributed multi-core quantum clustering capacity.", fontSize: 18, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.7 }),
            el("p137-s2-c3", "rect", 1280, 280, 520, 600, { fill: "#0b1329", stroke: "rgba(6,182,212,0.2)", strokeWidth: 1, borderRadius: 12 }),
            el("p137-s2-c3-num", "text", 1320, 320, 440, 60, { text: "03", fontSize: 44, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#06b6d4" }),
            el("p137-s2-c3-h", "text", 1320, 400, 440, 40, { text: "Post-RSA Exposure", fontSize: 24, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#ffffff" }),
            el("p137-s2-c3-p", "text", 1320, 460, 440, 360, { text: "Harvest-now-decrypt-later attacks jeopardize enterprise communications before global lattice cryptography migrations complete across legacy protocols.", fontSize: 18, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.7 })
          ]
        },
        {
          id: "p137-s3",
          name: "Empirical Benchmarks",
          elements: [
            el("p137-s3-bg", "rect", 0, 0, 1920, 1080, { fill: "#030712", locked: true }),
            el("p137-s3-tag", "text", 120, 100, 1680, 32, { text: "BENCHMARK VALIDATION", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#06b6d4", letterSpacing: 3 }),
            el("p137-s3-title", "text", 120, 150, 1680, 70, { text: "Empirical Performance Supremacy", fontSize: 52, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
            el("p137-s3-m1", "rect", 120, 270, 380, 300, { fill: "#0b1329", borderRadius: 16, stroke: "rgba(6,182,212,0.3)", strokeWidth: 1 }),
            el("p137-s3-m1-v", "text", 160, 320, 300, 80, { text: "99.98%", fontSize: 56, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#06b6d4" }),
            el("p137-s3-m1-l", "text", 160, 420, 300, 100, { text: "Average 2-Qubit Gate Fidelity under randomized benchmarking", fontSize: 18, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.5 }),
            el("p137-s3-m2", "rect", 560, 270, 380, 300, { fill: "#0b1329", borderRadius: 16, stroke: "rgba(6,182,212,0.3)", strokeWidth: 1 }),
            el("p137-s3-m2-v", "text", 600, 320, 300, 80, { text: "450 µs", fontSize: 56, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#06b6d4" }),
            el("p137-s3-m2-l", "text", 600, 420, 300, 100, { text: "T1 Coherence Time with niobium titanium nitride resonators", fontSize: 18, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.5 }),
            el("p137-s3-m3", "rect", 1000, 270, 380, 300, { fill: "#0b1329", borderRadius: 16, stroke: "rgba(6,182,212,0.3)", strokeWidth: 1 }),
            el("p137-s3-m3-v", "text", 1040, 320, 300, 80, { text: "1,024", fontSize: 56, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#06b6d4" }),
            el("p137-s3-m3-l", "text", 1040, 420, 300, 100, { text: "Quantum Volume (QV) verified on cloud staging clusters", fontSize: 18, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.5 }),
            el("p137-s4-m4", "rect", 1440, 270, 360, 300, { fill: "#0b1329", borderRadius: 16, stroke: "rgba(6,182,212,0.3)", strokeWidth: 1 }),
            el("p137-s4-m4-v", "text", 1480, 320, 300, 80, { text: "15 mK", fontSize: 56, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#06b6d4" }),
            el("p137-s4-m4-l", "text", 1480, 420, 300, 100, { text: "Continuous operating temperature with closed-loop He3/He4", fontSize: 18, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.5 })
          ]
        },
        {
          id: "p137-s4",
          name: "Roadmap",
          elements: [
            el("p137-s4-bg", "rect", 0, 0, 1920, 1080, { fill: "#030712", locked: true }),
            el("p137-s4-tag", "text", 120, 100, 1680, 32, { text: "DEPLOYMENT PHASES", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#06b6d4", letterSpacing: 3 }),
            el("p137-s4-title", "text", 120, 150, 1680, 70, { text: "Strategic Path to Quantum Advantage", fontSize: 52, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
            el("p137-s4-r1", "rect", 120, 280, 520, 620, { fill: "#0b1329", borderRadius: 16, stroke: "rgba(6,182,212,0.3)", strokeWidth: 1 }),
            el("p137-s4-r1-q", "text", 160, 320, 440, 40, { text: "PHASE 01 // 2026", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#06b6d4" }),
            el("p137-s4-r1-h", "text", 160, 380, 440, 60, { text: "Cloud API Early Access", fontSize: 28, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
            el("p137-s4-r1-p", "text", 160, 460, 440, 380, { text: "Select rollout of Q-Pulse Python SDK to 25 pharmaceutical and materials science partners for molecular simulation benchmarking.", fontSize: 18, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.7 }),
            el("p137-s4-r2", "rect", 700, 280, 520, 620, { fill: "#0b1329", borderRadius: 16, stroke: "rgba(6,182,212,0.3)", strokeWidth: 1 }),
            el("p137-s4-r2-q", "text", 740, 320, 440, 40, { text: "PHASE 02 // 2027", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#06b6d4" }),
            el("p137-s4-r2-h", "text", 740, 380, 440, 60, { text: "Fault-Tolerant 512 Qubits", fontSize: 28, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
            el("p137-s4-r2-p", "text", 740, 460, 440, 380, { text: "Introduction of 4-chip modular interconnect bus enabling distributed entanglement and 16 logical error-corrected qubits.", fontSize: 18, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.7 }),
            el("p137-s4-r3", "rect", 1280, 280, 520, 620, { fill: "#0b1329", borderRadius: 16, stroke: "rgba(6,182,212,0.3)", strokeWidth: 1 }),
            el("p137-s4-r3-q", "text", 1320, 320, 440, 40, { text: "PHASE 03 // 2028+", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#06b6d4" }),
            el("p137-s4-r3-h", "text", 1320, 380, 440, 60, { text: "1,000+ Logical Qubits", fontSize: 28, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
            el("p137-s4-r3-p", "text", 1320, 460, 440, 380, { text: "Million-physical-qubit data center campus offering universal fault-tolerant computing with 99.999% uptime guarantees.", fontSize: 18, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.7 })
          ]
        },
        {
          id: "p137-s5",
          name: "Contact & Conclusion",
          elements: [
            el("p137-s5-bg", "rect", 0, 0, 1920, 1080, { fill: "#030712", locked: true }),
            el("p137-s5-card", "rect", 120, 120, 1680, 840, { fill: "#0b1329", stroke: "rgba(6,182,212,0.4)", strokeWidth: 2, borderRadius: 24 }),
            el("p137-s5-tag", "text", 200, 200, 1520, 32, { text: "PARTNER WITH QUANTUM HORIZONS", fontSize: 16, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#06b6d4", letterSpacing: 4 }),
            el("p137-s5-title", "text", 200, 270, 1520, 130, { text: "The Quantum Epoch Has Commenced.", fontSize: 72, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#ffffff" }),
            el("p137-s5-sub", "text", 200, 430, 1100, 90, { text: "Schedule private hardware access trials, quantum compiler benchmarking, or technical advisory briefings with our founding physics team.", fontSize: 22, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.6 }),
            el("p137-s5-email", "text", 200, 600, 700, 50, { text: "contact@quantumhorizons.tech", fontSize: 32, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#06b6d4" }),
            el("p137-s5-loc", "text", 200, 680, 700, 40, { text: "Zurich Quantum Hub · Hardturmstrasse 161 · 8005 Zurich, Switzerland", fontSize: 18, fontFamily: "Inter", fill: "#cbd5e1" }),
            el("p137-s5-foot", "text", 200, 850, 1520, 30, { text: "© 2026 QUANTUM HORIZONS INC. ALL RIGHTS RESERVED. CONFIDENTIAL & PROPRIETARY.", fontSize: 13, fontFamily: "Space Grotesk", fill: "rgba(255,255,255,0.4)", letterSpacing: 2 })
          ]
        }
      ]
    },

    // 138: Haute Couture Milan Fashion Monograph
    {
      id: 138,
      name: "Haute Couture Milan Fashion Monograph",
      title: "ATELIER DI MILANO // AUTUMN-WINTER RETROSPECTIVE",
      description: "Ultra-refined editorial luxury fashion deck with warm cream linens, charcoal typography, and runway photography.",
      category: "Presentation",
      subcategory: "Fashion",
      size: "1920×1080",
      canvasWidth: 1920,
      canvasHeight: 1080,
      orientation: "landscape",
      tags: ["Fashion", "Editorial", "Luxury", "Monograph", "Couture"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 5890,
      views: 44100,
      gradient: "linear-gradient(135deg, #1c1917 0%, #b45309 100%)",
      fonts: ["Cinzel", "Inter"],
      colors: ["#fafaf9", "#1c1917", "#b45309", "#78716c"],
      slides: [
        {
          id: "p138-s1",
          name: "Cover",
          elements: [
            el("p138-s1-bg", "rect", 0, 0, 1920, 1080, { fill: "#fafaf9", locked: true }),
            el("p138-s1-img", "image", 960, 0, 960, 1080, { src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200" }),
            el("p138-s1-tag", "text", 120, 140, 760, 32, { text: "COLLEZIONE AUTUNNO-INVERNO 2026/27", fontSize: 15, fontFamily: "Cinzel", fontWeight: "700", fill: "#b45309", letterSpacing: 6 }),
            el("p138-s1-title", "text", 120, 240, 760, 240, { text: "ATELIER\nDI MILANO", fontSize: 96, fontFamily: "Cinzel", fontWeight: "900", fill: "#1c1917", lineHeight: 0.95 }),
            el("p138-s1-div", "rect", 120, 520, 180, 2, { fill: "#b45309" }),
            el("p138-s1-sub", "text", 120, 560, 740, 120, { text: "A study in sculpted architectural drapery, hand-spun raw silk, and monolithic Italian tailoring under natural Mediterranean light.", fontSize: 20, fontFamily: "Inter", fill: "#57534e", lineHeight: 1.7 }),
            el("p138-s1-foot", "text", 120, 900, 740, 30, { text: "VIA MONTE NAPOLEONE 8, MILANO // PRESS ARCHIVE", fontSize: 13, fontFamily: "Cinzel", fill: "#a8a29e", letterSpacing: 3 })
          ]
        },
        {
          id: "p138-s2",
          name: "Design Philosophy",
          elements: [
            el("p138-s2-bg", "rect", 0, 0, 1920, 1080, { fill: "#fafaf9", locked: true }),
            el("p138-s2-tag", "text", 120, 100, 1680, 32, { text: "IL MANIFESTO CREATIVO", fontSize: 15, fontFamily: "Cinzel", fontWeight: "700", fill: "#b45309", letterSpacing: 4 }),
            el("p138-s2-title", "text", 120, 150, 1680, 70, { text: "Tactile Restraint & Monolithic Silhouette", fontSize: 48, fontFamily: "Cinzel", fontWeight: "800", fill: "#1c1917" }),
            el("p138-s2-img", "image", 120, 270, 720, 680, { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200", borderRadius: 4 }),
            el("p138-s2-quote", "text", 900, 300, 900, 160, { text: "“Fashion is not an ornament; it is the structural dialogue between body, gravity, and textile memory.”", fontSize: 34, fontFamily: "Cinzel", fontStyle: "italic", fill: "#1c1917", lineHeight: 1.4 }),
            el("p138-s2-author", "text", 900, 480, 900, 30, { text: "— MATTEO ROSSI, CREATIVE DIRECTOR", fontSize: 14, fontFamily: "Inter", fontWeight: "700", fill: "#b45309", letterSpacing: 2 }),
            el("p138-s2-p1", "text", 900, 560, 430, 360, { text: "Every seam in this collection was hand-finished by master tailors in Como, utilizing deadstock virgin wool and artisanal vegetable dyes derived from Tuscan walnut husks.", fontSize: 18, fontFamily: "Inter", fill: "#57534e", lineHeight: 1.8 }),
            el("p138-s2-p2", "text", 1370, 560, 430, 360, { text: "We reject the transient rhythms of fast fashion in pursuit of perpetual garments designed to patinate, soften, and endure across generations of conscious ownership.", fontSize: 18, fontFamily: "Inter", fill: "#57534e", lineHeight: 1.8 })
          ]
        },
        {
          id: "p138-s3",
          name: "Runway Highlights",
          elements: [
            el("p138-s3-bg", "rect", 0, 0, 1920, 1080, { fill: "#fafaf9", locked: true }),
            el("p138-s3-tag", "text", 120, 100, 1680, 32, { text: "I LOOK CHIAVE // MILANO RUNWAY", fontSize: 15, fontFamily: "Cinzel", fontWeight: "700", fill: "#b45309", letterSpacing: 4 }),
            el("p138-s3-title", "text", 120, 150, 1680, 70, { text: "Key Runway Ensembles", fontSize: 48, fontFamily: "Cinzel", fontWeight: "800", fill: "#1c1917" }),
            el("p138-s3-c1-img", "image", 120, 260, 520, 540, { src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200", borderRadius: 4 }),
            el("p138-s3-c1-t", "text", 120, 820, 520, 30, { text: "LOOK 04 — IL CAPPOTTO MONOLITE", fontSize: 16, fontFamily: "Cinzel", fontWeight: "700", fill: "#1c1917" }),
            el("p138-s3-c1-d", "text", 120, 860, 520, 80, { text: "Double-faced cashmere overcoat in obsidian slate with hidden horn buttoning.", fontSize: 15, fontFamily: "Inter", fill: "#78716c", lineHeight: 1.6 }),
            el("p138-s3-c2-img", "image", 700, 260, 520, 540, { src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1200", borderRadius: 4 }),
            el("p138-s3-c2-t", "text", 700, 820, 520, 30, { text: "LOOK 12 — LA TUNICHE DRAPPEGGIATA", fontSize: 16, fontFamily: "Cinzel", fontWeight: "700", fill: "#1c1917" }),
            el("p138-s3-c2-d", "text", 700, 860, 520, 80, { text: "Sculpted asymmetric silk crepe gown with raw hemline and bias-cut shoulder line.", fontSize: 15, fontFamily: "Inter", fill: "#78716c", lineHeight: 1.6 }),
            el("p138-s3-c3-img", "image", 1280, 260, 520, 540, { src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=1200", borderRadius: 4 }),
            el("p138-s3-c3-t", "text", 1280, 820, 520, 30, { text: "LOOK 27 — IL COMPLETO SARTORIALE", fontSize: 16, fontFamily: "Cinzel", fontWeight: "700", fill: "#1c1917" }),
            el("p138-s3-c3-d", "text", 1280, 860, 520, 80, { text: "Florentine tailored smoking jacket with hand-stitched peak lapels and wide trouser.", fontSize: 15, fontFamily: "Inter", fill: "#78716c", lineHeight: 1.6 })
          ]
        },
        {
          id: "p138-s4",
          name: "Global Boutiques",
          elements: [
            el("p138-s4-bg", "rect", 0, 0, 1920, 1080, { fill: "#fafaf9", locked: true }),
            el("p138-s4-tag", "text", 120, 100, 1680, 32, { text: "RETE DI DISTRIBUZIONE", fontSize: 15, fontFamily: "Cinzel", fontWeight: "700", fill: "#b45309", letterSpacing: 4 }),
            el("p138-s4-title", "text", 120, 150, 1680, 70, { text: "Flagship Boutiques & Private Salons", fontSize: 48, fontFamily: "Cinzel", fontWeight: "800", fill: "#1c1917" }),
            el("p138-s4-img", "image", 120, 260, 960, 660, { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200", borderRadius: 8 }),
            el("p138-s4-c1", "rect", 1120, 260, 680, 190, { fill: "#ffffff", stroke: "rgba(180,83,9,0.15)", strokeWidth: 1, borderRadius: 8 }),
            el("p138-s4-c1-t", "text", 1160, 290, 600, 30, { text: "MILANO // FLAGSHIP BOUTIQUE", fontSize: 18, fontFamily: "Cinzel", fontWeight: "700", fill: "#1c1917" }),
            el("p138-s4-c1-p", "text", 1160, 330, 600, 90, { text: "Via Monte Napoleone 8 · 3 floors dedicated to couture salons, bespoke tailoring suites, and archive displays.", fontSize: 15, fontFamily: "Inter", fill: "#78716c", lineHeight: 1.6 }),
            el("p138-s4-c2", "rect", 1120, 490, 680, 190, { fill: "#ffffff", stroke: "rgba(180,83,9,0.15)", strokeWidth: 1, borderRadius: 8 }),
            el("p138-s4-c2-t", "text", 1160, 520, 600, 30, { text: "PARIS // SALON PRIVÉ", fontSize: 18, fontFamily: "Cinzel", fontWeight: "700", fill: "#1c1917" }),
            el("p138-s4-c2-p", "text", 1160, 560, 600, 90, { text: "Place Vendôme 14 · By appointment only. Client fittings overlooking the historic column with private dressing suites.", fontSize: 15, fontFamily: "Inter", fill: "#78716c", lineHeight: 1.6 }),
            el("p138-s4-c3", "rect", 1120, 720, 680, 200, { fill: "#ffffff", stroke: "rgba(180,83,9,0.15)", strokeWidth: 1, borderRadius: 8 }),
            el("p138-s4-c3-t", "text", 1160, 750, 600, 30, { text: "TOKYO // GINZA MAISON", fontSize: 18, fontFamily: "Cinzel", fontWeight: "700", fill: "#1c1917" }),
            el("p138-s4-c3-p", "text", 1160, 790, 600, 90, { text: "Ginza 6-Chome · Monolithic travertine facade designed by Kengo Kuma featuring Japanese cedar fitting rooms.", fontSize: 15, fontFamily: "Inter", fill: "#78716c", lineHeight: 1.6 })
          ]
        },
        {
          id: "p138-s5",
          name: "Press & Contacts",
          elements: [
            el("p138-s5-bg", "rect", 0, 0, 1920, 1080, { fill: "#1c1917", locked: true }),
            el("p138-s5-frame", "rect", 120, 120, 1680, 840, { fill: "#292524", stroke: "rgba(180,83,9,0.4)", strokeWidth: 1, borderRadius: 16 }),
            el("p138-s5-tag", "text", 200, 200, 1520, 32, { text: "RELAZIONI CON LA STAMPA // PRESS ENQUIRIES", fontSize: 15, fontFamily: "Cinzel", fontWeight: "700", fill: "#b45309", letterSpacing: 4 }),
            el("p138-s5-title", "text", 200, 270, 1520, 130, { text: "Atelier di Milano Haute Couture", fontSize: 64, fontFamily: "Cinzel", fontWeight: "900", fill: "#fafaf9" }),
            el("p138-s5-p", "text", 200, 430, 1200, 90, { text: "For editorial loans, press credentials, VIP client commissions, and haute couture lookbook access, contact our global communications office.", fontSize: 20, fontFamily: "Inter", fill: "#d6d3d1", lineHeight: 1.7 }),
            el("p138-s5-mail", "text", 200, 580, 700, 40, { text: "press@atelierdimilano.it // www.atelierdimilano.it", fontSize: 24, fontFamily: "Cinzel", fontWeight: "700", fill: "#b45309" }),
            el("p138-s5-loc", "text", 200, 660, 700, 40, { text: "Palazzo Visconti · Via Monte Napoleone 8 · 20121 Milano, Italia", fontSize: 17, fontFamily: "Inter", fill: "#a8a29e" }),
            el("p138-s5-foot", "text", 200, 850, 1520, 30, { text: "© 2026 ATELIER DI MILANO S.R.L. TUTTI I DIRITTI RISERVATI.", fontSize: 13, fontFamily: "Cinzel", fill: "rgba(255,255,255,0.4)", letterSpacing: 3 })
          ]
        }
      ]
    },

    // 139: Global Clean Energy & Wind Transition
    {
      id: 139,
      name: "Global Clean Energy & Wind Transition",
      title: "TERRAWIND ENERGY // 2030 OFFSHORE EXPANSION BLUEPRINT",
      description: "Data-heavy clean energy strategy presentation with crisp emerald gradients, turbine telemetry, and investment metrics.",
      category: "Presentation",
      subcategory: "Energy",
      size: "1920×1080",
      canvasWidth: 1920,
      canvasHeight: 1080,
      orientation: "landscape",
      tags: ["Energy", "Renewable", "CleanTech", "Sustainability", "Wind"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 4780,
      views: 39500,
      gradient: "linear-gradient(135deg, #022c22 0%, #10b981 100%)",
      fonts: ["Plus Jakarta Sans", "Inter"],
      colors: ["#022c22", "#10b981", "#ffffff", "#6ee7b7"],
      slides: [
        {
          id: "p139-s1",
          name: "Cover",
          elements: [
            el("p139-s1-bg", "rect", 0, 0, 1920, 1080, { fill: "#022c22", locked: true }),
            el("p139-s1-img", "image", 0, 0, 1920, 1080, { src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1200" }),
            el("p139-s1-scrim", "rect", 0, 0, 1920, 1080, { fill: "rgba(2,44,34,0.85)" }),
            el("p139-s1-tag", "text", 120, 140, 1680, 32, { text: "TERRAWIND ENERGY CAPITAL // OFFSHORE EXPANSION 2030", fontSize: 16, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#10b981", letterSpacing: 4 }),
            el("p139-s1-title", "text", 120, 240, 1200, 240, { text: "15 GIGAWATTS\nOFFSHORE.", fontSize: 100, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#ffffff", lineHeight: 0.95 }),
            el("p139-s1-sub", "text", 120, 520, 950, 100, { text: "Deploying floating deep-sea wind arrays and subsea HVDC interconnects across the North Sea and Celtic basin.", fontSize: 24, fontFamily: "Inter", fill: "#a7f3d0", lineHeight: 1.6 }),
            el("p139-s1-foot", "text", 120, 900, 800, 30, { text: "INVESTOR STRATEGY BRIEFING // PARIS · LONDON · OSLO", fontSize: 14, fontFamily: "Plus Jakarta Sans", fill: "#6ee7b7", letterSpacing: 2 })
          ]
        },
        {
          id: "p139-s2",
          name: "Macro Drivers",
          elements: [
            el("p139-s2-bg", "rect", 0, 0, 1920, 1080, { fill: "#022c22", locked: true }),
            el("p139-s2-tag", "text", 120, 100, 1680, 32, { text: "MARKET DYNAMICS", fontSize: 16, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#10b981", letterSpacing: 3 }),
            el("p139-s2-title", "text", 120, 150, 1680, 70, { text: "European Clean Power Deficit & Baseload Shift", fontSize: 48, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#ffffff" }),
            el("p139-s2-c1", "rect", 120, 270, 520, 620, { fill: "#064e3b", borderRadius: 16, stroke: "rgba(16,185,129,0.3)", strokeWidth: 1 }),
            el("p139-s2-c1-t", "text", 160, 320, 440, 40, { text: "GRID CAPACITY CRUNCH", fontSize: 22, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#10b981" }),
            el("p139-s2-c1-p", "text", 160, 390, 440, 440, { text: "Thermal coal and gas phaseouts remove 48GW of dispatchable baseload across Western Europe by 2030. Deep-water floating wind delivers 62% capacity factors, outpacing terrestrial solar and onshore installations.", fontSize: 18, fontFamily: "Inter", fill: "#d1fae5", lineHeight: 1.7 }),
            el("p139-s2-c2", "rect", 700, 270, 520, 620, { fill: "#064e3b", borderRadius: 16, stroke: "rgba(16,185,129,0.3)", strokeWidth: 1 }),
            el("p139-s2-c2-t", "text", 740, 320, 440, 40, { text: "LCOE AT PARITY", fontSize: 22, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#10b981" }),
            el("p139-s2-c2-p", "text", 740, 390, 440, 440, { text: "Levelized Cost of Energy (LCOE) for 18MW next-generation turbines drops below €42/MWh, establishing unsubsidized market competitiveness against all fossil fuel alternatives.", fontSize: 18, fontFamily: "Inter", fill: "#d1fae5", lineHeight: 1.7 }),
            el("p139-s2-c3", "rect", 1280, 270, 520, 620, { fill: "#064e3b", borderRadius: 16, stroke: "rgba(16,185,129,0.3)", strokeWidth: 1 }),
            el("p139-s2-c3-t", "text", 1320, 320, 440, 40, { text: "GREEN HYDROGEN SYNERGY", fontSize: 22, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#10b981" }),
            el("p139-s2-c3-p", "text", 1320, 390, 440, 440, { text: "Direct co-located electrolysis stations at offshore substations generate maritime e-fuels with zero grid curtailment losses, capturing premium pricing from industrial steel manufacturers.", fontSize: 18, fontFamily: "Inter", fill: "#d1fae5", lineHeight: 1.7 })
          ]
        },
        {
          id: "p139-s3",
          name: "Offshore Portfolio",
          elements: [
            el("p139-s3-bg", "rect", 0, 0, 1920, 1080, { fill: "#022c22", locked: true }),
            el("p139-s3-tag", "text", 120, 100, 1680, 32, { text: "OPERATIONAL ASSET PIPELINE", fontSize: 16, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#10b981", letterSpacing: 3 }),
            el("p139-s3-title", "text", 120, 150, 1680, 70, { text: "Three Flagship Offshore Concessions", fontSize: 48, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#ffffff" }),
            el("p139-s3-c1-img", "image", 120, 260, 520, 360, { src: "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&q=80&w=1200", borderRadius: 12 }),
            el("p139-s3-c1-t", "text", 120, 650, 520, 36, { text: "Boreas Deep // North Sea", fontSize: 24, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#ffffff" }),
            el("p139-s3-c1-p", "text", 120, 700, 520, 180, { text: "5.2 GW capacity · 65km offshore Aberdeen · 85m water depth floating tension-leg platforms powering 4.2M homes.", fontSize: 16, fontFamily: "Inter", fill: "#a7f3d0", lineHeight: 1.6 }),
            el("p139-s3-c2-img", "image", 700, 260, 520, 360, { src: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=1200", borderRadius: 12 }),
            el("p139-s3-c2-t", "text", 700, 650, 520, 36, { text: "Celtic Horizon // Irish Sea", fontSize: 24, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#ffffff" }),
            el("p139-s3-c2-p", "text", 700, 700, 520, 180, { text: "4.8 GW capacity · Semi-submersible concrete foundations with integrated subsea hydrogen storage caverns.", fontSize: 16, fontFamily: "Inter", fill: "#a7f3d0", lineHeight: 1.6 }),
            el("p139-s3-c3-img", "image", 1280, 260, 520, 360, { src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1200", borderRadius: 12 }),
            el("p139-s3-c3-t", "text", 1280, 650, 520, 36, { text: "Baltic Sovereign // Sweden", fontSize: 24, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#ffffff" }),
            el("p139-s3-c3-p", "text", 1280, 700, 520, 180, { text: "5.0 GW capacity · Monopile fixed foundations directly feeding Nordic datacenter clusters and green battery gigafactories.", fontSize: 16, fontFamily: "Inter", fill: "#a7f3d0", lineHeight: 1.6 })
          ]
        },
        {
          id: "p139-s4",
          name: "Financial Yields",
          elements: [
            el("p139-s4-bg", "rect", 0, 0, 1920, 1080, { fill: "#022c22", locked: true }),
            el("p139-s4-tag", "text", 120, 100, 1680, 32, { text: "CAPITAL RETURN METRICS", fontSize: 16, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#10b981", letterSpacing: 3 }),
            el("p139-s4-title", "text", 120, 150, 1680, 70, { text: "Predictable Long-Term Cash Flows", fontSize: 48, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#ffffff" }),
            el("p139-s4-m1", "rect", 120, 260, 380, 280, { fill: "#064e3b", borderRadius: 16, stroke: "rgba(16,185,129,0.3)", strokeWidth: 1 }),
            el("p139-s4-m1-v", "text", 160, 300, 300, 70, { text: "12.4%", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#10b981" }),
            el("p139-s4-m1-l", "text", 160, 390, 300, 110, { text: "Projected Levered Equity IRR across 25-year operational lifecycle", fontSize: 17, fontFamily: "Inter", fill: "#a7f3d0", lineHeight: 1.5 }),
            el("p139-s4-m2", "rect", 560, 260, 380, 280, { fill: "#064e3b", borderRadius: 16, stroke: "rgba(16,185,129,0.3)", strokeWidth: 1 }),
            el("p139-s4-m2-v", "text", 600, 300, 300, 70, { text: "€8.4B", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#10b981" }),
            el("p139-s4-m2-l", "text", 600, 390, 300, 110, { text: "Total Committed Debt & Project Finance Syndication", fontSize: 17, fontFamily: "Inter", fill: "#a7f3d0", lineHeight: 1.5 }),
            el("p139-s4-m3", "rect", 1000, 260, 380, 280, { fill: "#064e3b", borderRadius: 16, stroke: "rgba(16,185,129,0.3)", strokeWidth: 1 }),
            el("p139-s4-m3-v", "text", 1040, 300, 300, 70, { text: "20 Yrs", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#10b981" }),
            el("p139-s4-m3-l", "text", 1040, 390, 300, 110, { text: "Contract for Difference (CfD) sovereign revenue indexing", fontSize: 17, fontFamily: "Inter", fill: "#a7f3d0", lineHeight: 1.5 }),
            el("p139-s4-m4", "rect", 1440, 260, 360, 280, { fill: "#064e3b", borderRadius: 16, stroke: "rgba(16,185,129,0.3)", strokeWidth: 1 }),
            el("p139-s4-m4-v", "text", 1480, 300, 300, 70, { text: "0.00", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#10b981" }),
            el("p139-s4-m4-l", "text", 1480, 390, 300, 110, { text: "Direct Scope 1 & 2 GHG operational emissions", fontSize: 17, fontFamily: "Inter", fill: "#a7f3d0", lineHeight: 1.5 })
          ]
        },
        {
          id: "p139-s5",
          name: "Conclusion & IR",
          elements: [
            el("p139-s5-bg", "rect", 0, 0, 1920, 1080, { fill: "#022c22", locked: true }),
            el("p139-s5-card", "rect", 120, 120, 1680, 840, { fill: "#064e3b", stroke: "rgba(16,185,129,0.4)", strokeWidth: 2, borderRadius: 24 }),
            el("p139-s5-tag", "text", 200, 200, 1520, 32, { text: "INSTITUTIONAL INVESTOR CONTACT", fontSize: 16, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#10b981", letterSpacing: 4 }),
            el("p139-s5-title", "text", 200, 270, 1520, 130, { text: "Powering Europe's Clean Industrial Renaissance.", fontSize: 64, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#ffffff" }),
            el("p139-s5-p", "text", 200, 430, 1200, 90, { text: "For data room credentials, financial models, and environmental impact assessments, contact TerraWind Investor Relations.", fontSize: 22, fontFamily: "Inter", fill: "#a7f3d0", lineHeight: 1.7 }),
            el("p139-s5-mail", "text", 200, 580, 700, 50, { text: "investors@terrawindenergy.com", fontSize: 30, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#10b981" }),
            el("p139-s5-loc", "text", 200, 660, 700, 40, { text: "TerraWind Energy NV · Keizersgracht 421 · 1016 EK Amsterdam, Netherlands", fontSize: 18, fontFamily: "Inter", fill: "#d1fae5" }),
            el("p139-s5-foot", "text", 200, 850, 1520, 30, { text: "© 2026 TERRAWIND ENERGY GROUP. PROSPECTUS EXCLUSIVELY FOR QUALIFIED INSTITUTIONAL BUYERS.", fontSize: 13, fontFamily: "Plus Jakarta Sans", fill: "#6ee7b7", letterSpacing: 2 })
          ]
        }
      ]
    },

    // 140: Nordic Ceramic & Interior Architecture
    {
      id: 140,
      name: "Nordic Ceramic & Interior Architecture",
      title: "NORDIC SPATIAL CRAFT // CERAMIC & TIMBER RESIDENCES",
      description: "Warm terracotta and birch minimalist presentation highlighting Scandinavian spatial crafts, natural light, and bespoke ceramic fittings.",
      category: "Presentation",
      subcategory: "Architecture",
      size: "1920×1080",
      canvasWidth: 1920,
      canvasHeight: 1080,
      orientation: "landscape",
      tags: ["Nordic", "Ceramic", "Architecture", "Minimalist", "Interior"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 4920,
      views: 37800,
      gradient: "linear-gradient(135deg, #7c2d12 0%, #ea580c 100%)",
      fonts: ["Playfair Display", "Inter"],
      colors: ["#fff7ed", "#7c2d12", "#ea580c", "#431407"],
      slides: [
        {
          id: "p140-s1",
          name: "Cover",
          elements: [
            el("p140-s1-bg", "rect", 0, 0, 1920, 1080, { fill: "#fff7ed", locked: true }),
            el("p140-s1-img", "image", 960, 0, 960, 1080, { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200" }),
            el("p140-s1-tag", "text", 120, 140, 760, 32, { text: "KØBENHAVN ARCHITECTURAL MONOGRAPH", fontSize: 15, fontFamily: "Playfair Display", fontWeight: "700", fill: "#ea580c", letterSpacing: 4 }),
            el("p140-s1-title", "text", 120, 240, 760, 240, { text: "NORDIC\nTACTILITY", fontSize: 96, fontFamily: "Playfair Display", fontWeight: "900", fill: "#431407", lineHeight: 0.95 }),
            el("p140-s1-div", "rect", 120, 520, 160, 2, { fill: "#ea580c" }),
            el("p140-s1-sub", "text", 120, 560, 740, 120, { text: "Hand-thrown Danish clay, oiled ash timbers, and natural north-facing illumination in contemporary residential sanctuaries.", fontSize: 22, fontFamily: "Inter", fill: "#7c2d12", lineHeight: 1.7 }),
            el("p140-s1-foot", "text", 120, 900, 740, 30, { text: "STUDIO LINDSTRØM // COPENHAGEN · STOCKHOLM", fontSize: 13, fontFamily: "Playfair Display", fill: "#9a3412", letterSpacing: 2 })
          ]
        },
        {
          id: "p140-s2",
          name: "Spatial Ethos",
          elements: [
            el("p140-s2-bg", "rect", 0, 0, 1920, 1080, { fill: "#fff7ed", locked: true }),
            el("p140-s2-tag", "text", 120, 100, 1680, 32, { text: "CRAFT PHILOSOPHY", fontSize: 15, fontFamily: "Playfair Display", fontWeight: "700", fill: "#ea580c", letterSpacing: 4 }),
            el("p140-s2-title", "text", 120, 150, 1680, 70, { text: "Harmony of Earth, Wood & Winter Light", fontSize: 48, fontFamily: "Playfair Display", fontWeight: "800", fill: "#431407" }),
            el("p140-s2-img", "image", 120, 260, 800, 680, { src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200", borderRadius: 8 }),
            el("p140-s2-q", "text", 980, 300, 820, 180, { text: "“Architecture must be touched before it is understood. The hand remembers what the eye overlooks.”", fontSize: 32, fontFamily: "Playfair Display", fontStyle: "italic", fill: "#431407", lineHeight: 1.5 }),
            el("p140-s2-p", "text", 980, 520, 820, 360, { text: "Our practice integrates ceramic stoneware surfaces crafted inside our Bornholm kilns directly into the structural walls and kitchen islands. By balancing tactile raw textures against silky smooth ash woodwork, we craft interiors that resonate with serenity, thermal comfort, and acoustic intimacy.", fontSize: 19, fontFamily: "Inter", fill: "#7c2d12", lineHeight: 1.8 })
          ]
        },
        {
          id: "p140-s3",
          name: "Material Palette",
          elements: [
            el("p140-s3-bg", "rect", 0, 0, 1920, 1080, { fill: "#fff7ed", locked: true }),
            el("p140-s3-tag", "text", 120, 100, 1680, 32, { text: "NATURAL MATERIALITY", fontSize: 15, fontFamily: "Playfair Display", fontWeight: "700", fill: "#ea580c", letterSpacing: 4 }),
            el("p140-s3-title", "text", 120, 150, 1680, 70, { text: "Four Senses of Raw Matter", fontSize: 48, fontFamily: "Playfair Display", fontWeight: "800", fill: "#431407" }),
            el("p140-s3-c1", "rect", 120, 260, 390, 640, { fill: "#ffedd5", borderRadius: 8, stroke: "rgba(234,88,12,0.2)", strokeWidth: 1 }),
            el("p140-s3-c1-t", "text", 160, 300, 310, 40, { text: "BORNHOLM CLAY", fontSize: 22, fontFamily: "Playfair Display", fontWeight: "800", fill: "#431407" }),
            el("p140-s3-c1-p", "text", 160, 360, 310, 440, { text: "Locally sourced glacial clay with high iron content, fired at 1280°C to create unglazed porous wall tiles that regulate indoor humidity naturally.", fontSize: 17, fontFamily: "Inter", fill: "#7c2d12", lineHeight: 1.7 }),
            el("p140-s3-c2", "rect", 550, 260, 390, 640, { fill: "#ffedd5", borderRadius: 8, stroke: "rgba(234,88,12,0.2)", strokeWidth: 1 }),
            el("p140-s3-c2-t", "text", 590, 300, 310, 40, { text: "OILED NORDIC ASH", fontSize: 22, fontFamily: "Playfair Display", fontWeight: "800", fill: "#431407" }),
            el("p140-s3-c2-p", "text", 590, 360, 310, 440, { text: "Sustainably harvested from certified Jutland woodlands. Finished with white-pigmented linseed oil for a pale, silken finish that patinates gracefully.", fontSize: 17, fontFamily: "Inter", fill: "#7c2d12", lineHeight: 1.7 }),
            el("p140-s3-c3", "rect", 980, 260, 390, 640, { fill: "#ffedd5", borderRadius: 8, stroke: "rgba(234,88,12,0.2)", strokeWidth: 1 }),
            el("p140-s3-c3-t", "text", 1020, 300, 310, 40, { text: "ÖLAND LIMESTONE", fontSize: 22, fontFamily: "Playfair Display", fontWeight: "800", fill: "#431407" }),
            el("p140-s3-c3-p", "text", 1020, 360, 310, 440, { text: "Fossil-bearing Swedish limestone with honed matte surfaces, retaining ambient solar warmth and providing cool underfoot elegance in summer.", fontSize: 17, fontFamily: "Inter", fill: "#7c2d12", lineHeight: 1.7 }),
            el("p140-s3-c4", "rect", 1410, 260, 390, 640, { fill: "#ffedd5", borderRadius: 8, stroke: "rgba(234,88,12,0.2)", strokeWidth: 1 }),
            el("p140-s3-c4-t", "text", 1450, 300, 310, 40, { text: "RAW BRASS HARDWARE", fontSize: 22, fontFamily: "Playfair Display", fontWeight: "800", fill: "#431407" }),
            el("p140-s3-c4-p", "text", 1450, 360, 310, 440, { text: "Unlacquered solid brass fittings engineered in Malmö, designed to oxidize organically through everyday human touch.", fontSize: 17, fontFamily: "Inter", fill: "#7c2d12", lineHeight: 1.7 })
          ]
        },
        {
          id: "p140-s4",
          name: "Project Showcase",
          elements: [
            el("p140-s4-bg", "rect", 0, 0, 1920, 1080, { fill: "#fff7ed", locked: true }),
            el("p140-s4-tag", "text", 120, 100, 1680, 32, { text: "FEATURED RESIDENCE", fontSize: 15, fontFamily: "Playfair Display", fontWeight: "700", fill: "#ea580c", letterSpacing: 4 }),
            el("p140-s4-title", "text", 120, 150, 1680, 70, { text: "Villa Tisvildeleje // Coastal North Zealand", fontSize: 48, fontFamily: "Playfair Display", fontWeight: "800", fill: "#431407" }),
            el("p140-s4-img1", "image", 120, 260, 800, 680, { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200", borderRadius: 8 }),
            el("p140-s4-img2", "image", 960, 260, 840, 320, { src: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=1200", borderRadius: 8 }),
            el("p140-s4-desc", "rect", 960, 610, 840, 330, { fill: "#ffedd5", borderRadius: 8 }),
            el("p140-s4-dt", "text", 1000, 650, 760, 36, { text: "A Sanctuary Between Dune & Pine Forest", fontSize: 24, fontFamily: "Playfair Display", fontWeight: "800", fill: "#431407" }),
            el("p140-s4-dp", "text", 1000, 700, 760, 200, { text: "Nestled into protected sand dunes, Villa Tisvildeleje features 420m² of custom ceramic radiant floor heating, recessed ash timber storage walls, and frameless floor-to-ceiling glass pavilions framing the Kattegat sea.", fontSize: 17, fontFamily: "Inter", fill: "#7c2d12", lineHeight: 1.7 })
          ]
        },
        {
          id: "p140-s5",
          name: "Inquiry & Studio",
          elements: [
            el("p140-s5-bg", "rect", 0, 0, 1920, 1080, { fill: "#431407", locked: true }),
            el("p140-s5-card", "rect", 120, 120, 1680, 840, { fill: "#7c2d12", borderRadius: 16 }),
            el("p140-s5-tag", "text", 200, 200, 1520, 32, { text: "STUDIO LINDSTRØM ARCHITECTS", fontSize: 15, fontFamily: "Playfair Display", fontWeight: "700", fill: "#fb923c", letterSpacing: 4 }),
            el("p140-s5-title", "text", 200, 270, 1520, 130, { text: "Crafting Spaces of Enduring Peace.", fontSize: 64, fontFamily: "Playfair Display", fontWeight: "900", fill: "#fff7ed" }),
            el("p140-s5-p", "text", 200, 430, 1200, 90, { text: "We accept three private residential commissions annually to ensure our ceramic studio and architectural team can oversee every millimeter of construction.", fontSize: 22, fontFamily: "Inter", fill: "#fed7aa", lineHeight: 1.7 }),
            el("p140-s5-mail", "text", 200, 580, 700, 40, { text: "atelier@lindstrom-arkitekter.dk", fontSize: 28, fontFamily: "Playfair Display", fontWeight: "700", fill: "#fb923c" }),
            el("p140-s5-loc", "text", 200, 660, 700, 40, { text: "Kronprinsessegade 34 · 1306 København K, Danmark", fontSize: 18, fontFamily: "Inter", fill: "#ffedd5" }),
            el("p140-s5-foot", "text", 200, 850, 1520, 30, { text: "© 2026 LINDSTRØM ARKITEKTER MAA. COPENHAGEN · STOCKHOLM · OSLO.", fontSize: 13, fontFamily: "Playfair Display", fill: "#fed7aa", letterSpacing: 2 })
          ]
        }
      ]
    },

    // 141: Autonomous Aerospace & Satellite Defense
    {
      id: 141,
      name: "Autonomous Aerospace & Satellite Defense",
      title: "ORBITAL DEFENSE // AUTONOMOUS INTERCEPTOR PLATFORM",
      description: "Stealth titanium dark mode presentation with orbit trajectories, hypersonic telemetry cards, and defense engineering specifications.",
      category: "Presentation",
      subcategory: "Defense",
      size: "1920×1080",
      canvasWidth: 1920,
      canvasHeight: 1080,
      orientation: "landscape",
      tags: ["Aerospace", "Defense", "Satellite", "Autonomous", "Security"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 6120,
      views: 45300,
      gradient: "linear-gradient(135deg, #09090b 0%, #71717a 100%)",
      fonts: ["Space Grotesk", "Inter"],
      colors: ["#09090b", "#f59e0b", "#ffffff", "#a1a1aa"],
      slides: [
        {
          id: "p141-s1",
          name: "Cover",
          elements: [
            el("p141-s1-bg", "rect", 0, 0, 1920, 1080, { fill: "#09090b", locked: true }),
            el("p141-s1-img", "image", 960, 0, 960, 1080, { src: "https://images.unsplash.com/photo-1517976487541-11d94892c578?auto=format&fit=crop&q=80&w=1200" }),
            el("p141-s1-tag", "text", 120, 140, 760, 32, { text: "PROJECT VALKYRIE // ORBITAL DEFENSE SYSTEMS", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#f59e0b", letterSpacing: 4 }),
            el("p141-s1-title", "text", 120, 240, 760, 240, { text: "AUTONOMOUS\nAEROSPACE", fontSize: 96, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#ffffff", lineHeight: 0.95 }),
            el("p141-s1-sub", "text", 120, 520, 740, 100, { text: "Next-generation low-earth orbit constellation defense, autonomous kinetic interception, and secure laser satellite relays.", fontSize: 22, fontFamily: "Inter", fill: "#a1a1aa", lineHeight: 1.6 }),
            el("p141-s1-foot", "text", 120, 900, 740, 30, { text: "CLASSIFIED BRIEFING // DEFENSE ADVANCED SYSTEMS AGENCY", fontSize: 13, fontFamily: "Space Grotesk", fill: "#71717a", letterSpacing: 2 })
          ]
        },
        {
          id: "p141-s2",
          name: "Threat Assessment",
          elements: [
            el("p141-s2-bg", "rect", 0, 0, 1920, 1080, { fill: "#09090b", locked: true }),
            el("p141-s2-tag", "text", 120, 100, 1680, 32, { text: "THREAT LANDSCAPE", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#f59e0b", letterSpacing: 3 }),
            el("p141-s2-title", "text", 120, 150, 1680, 70, { text: "Hypersonic Glides & Anti-Satellite Direct Ascent", fontSize: 48, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
            el("p141-s2-c1", "rect", 120, 270, 520, 620, { fill: "#18181b", borderRadius: 12, stroke: "rgba(245,158,11,0.2)", strokeWidth: 1 }),
            el("p141-s2-c1-t", "text", 160, 320, 440, 40, { text: "HYPERSONIC GLIDE VEHICLES", fontSize: 22, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#f59e0b" }),
            el("p141-s2-c1-p", "text", 160, 390, 440, 440, { text: "Mach 8+ non-ballistic atmospheric skip trajectories compress response windows below 4 minutes, rendering terrestrial radar tracking arrays obsolete without space-based optical tracking satellites.", fontSize: 18, fontFamily: "Inter", fill: "#d4d4d8", lineHeight: 1.7 }),
            el("p141-s2-c2", "rect", 700, 270, 520, 620, { fill: "#18181b", borderRadius: 12, stroke: "rgba(245,158,11,0.2)", strokeWidth: 1 }),
            el("p141-s2-c2-t", "text", 740, 320, 440, 40, { text: "LEO SATELLITE ASAT THREATS", fontSize: 22, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#f59e0b" }),
            el("p141-s2-c2-p", "text", 740, 390, 440, 440, { text: "Ground-launched kinetic co-orbital interceptors threaten vital reconnaissance satellites. Distributed mesh resilience is mandatory to eliminate single-point orbital vulnerabilities.", fontSize: 18, fontFamily: "Inter", fill: "#d4d4d8", lineHeight: 1.7 }),
            el("p141-s2-c3", "rect", 1280, 270, 520, 620, { fill: "#18181b", borderRadius: 12, stroke: "rgba(245,158,11,0.2)", strokeWidth: 1 }),
            el("p141-s2-c3-t", "text", 1320, 320, 440, 40, { text: "ELECTRONIC JAMMING & SPOOFING", fontSize: 22, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#f59e0b" }),
            el("p141-s2-c3-p", "text", 1320, 390, 440, 440, { text: "High-power RF jamming blinds legacy GPS telemetry. Quantum-resistant optical laser cross-links ensure uninterrupted tactical command and control under severe EW conditions.", fontSize: 18, fontFamily: "Inter", fill: "#d4d4d8", lineHeight: 1.7 })
          ]
        },
        {
          id: "p141-s3",
          name: "Valkyrie Architecture",
          elements: [
            el("p141-s3-bg", "rect", 0, 0, 1920, 1080, { fill: "#09090b", locked: true }),
            el("p141-s3-tag", "text", 120, 100, 1680, 32, { text: "TACTICAL SOLUTION", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#f59e0b", letterSpacing: 3 }),
            el("p141-s3-title", "text", 120, 150, 1680, 70, { text: "Valkyrie-7 Autonomous Interceptor Fleet", fontSize: 48, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
            el("p141-s3-img", "image", 120, 260, 800, 680, { src: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200", borderRadius: 12 }),
            el("p141-s3-card", "rect", 960, 260, 840, 680, { fill: "#18181b", stroke: "rgba(245,158,11,0.3)", strokeWidth: 1, borderRadius: 12 }),
            el("p141-s3-ct", "text", 1020, 320, 720, 40, { text: "Core Interceptor Capabilities", fontSize: 26, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
            el("p141-s3-b1", "text", 1020, 390, 720, 110, { text: "• Solid-Fuel Divert & Attitude Control System (DACS): Millisecond thruster pulses delivering 45G maneuverability in vacuum.", fontSize: 18, fontFamily: "Inter", fill: "#d4d4d8", lineHeight: 1.6 }),
            el("p141-s3-b2", "text", 1020, 520, 720, 110, { text: "• Dual-Band Infrared Focal Plane Array: Cryogenically cooled seeker resolving cold body targets at 3,000+ km ranges.", fontSize: 18, fontFamily: "Inter", fill: "#d4d4d8", lineHeight: 1.6 }),
            el("p141-s3-b3", "text", 1020, 650, 720, 110, { text: "• Onboard Neuromorphic Edge Compute: Real-time Kalman filtering and orbital trajectory prediction with zero ground latency.", fontSize: 18, fontFamily: "Inter", fill: "#d4d4d8", lineHeight: 1.6 }),
            el("p141-s3-b4", "text", 1020, 780, 720, 110, { text: "• Optical Laser Mesh Crosslinks: 10 Gbps inter-satellite communication immune to ground electronic warfare jamming.", fontSize: 18, fontFamily: "Inter", fill: "#d4d4d8", lineHeight: 1.6 })
          ]
        },
        {
          id: "p141-s4",
          name: "Field Verification",
          elements: [
            el("p141-s4-bg", "rect", 0, 0, 1920, 1080, { fill: "#09090b", locked: true }),
            el("p141-s4-tag", "text", 120, 100, 1680, 32, { text: "FLIGHT TEST RESULTS", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#f59e0b", letterSpacing: 3 }),
            el("p141-s4-title", "text", 120, 150, 1680, 70, { text: "Live Kinetic Intercept Telemetry", fontSize: 48, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
            el("p141-s4-m1", "rect", 120, 260, 380, 280, { fill: "#18181b", borderRadius: 12, stroke: "rgba(245,158,11,0.2)", strokeWidth: 1 }),
            el("p141-s4-m1-v", "text", 160, 300, 300, 70, { text: "100%", fontSize: 52, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#f59e0b" }),
            el("p141-s4-m1-l", "text", 160, 390, 300, 110, { text: "Hit-to-Kill Kinetic Interception rate across 6 orbital live-fire tests", fontSize: 17, fontFamily: "Inter", fill: "#a1a1aa", lineHeight: 1.5 }),
            el("p141-s4-m2", "rect", 560, 260, 380, 280, { fill: "#18181b", borderRadius: 12, stroke: "rgba(245,158,11,0.2)", strokeWidth: 1 }),
            el("p141-s4-m2-v", "text", 600, 300, 300, 70, { text: "< 85 ms", fontSize: 52, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#f59e0b" }),
            el("p141-s4-m2-l", "text", 600, 390, 300, 110, { text: "Sensor-to-Shooter targeting latency over space laser mesh", fontSize: 17, fontFamily: "Inter", fill: "#a1a1aa", lineHeight: 1.5 }),
            el("p141-s4-m3", "rect", 1000, 260, 380, 280, { fill: "#18181b", borderRadius: 12, stroke: "rgba(245,158,11,0.2)", strokeWidth: 1 }),
            el("p141-s4-m3-v", "text", 1040, 300, 300, 70, { text: "Mach 14", fontSize: 52, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#f59e0b" }),
            el("p141-s4-m3-l", "text", 1040, 390, 300, 110, { text: "Terminal closing velocity sustained during exo-atmospheric intercept", fontSize: 17, fontFamily: "Inter", fill: "#a1a1aa", lineHeight: 1.5 }),
            el("p141-s4-m4", "rect", 1440, 260, 360, 280, { fill: "#18181b", borderRadius: 12, stroke: "rgba(245,158,11,0.2)", strokeWidth: 1 }),
            el("p141-s4-m4-v", "text", 1480, 300, 300, 70, { text: "24/7", fontSize: 52, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#f59e0b" }),
            el("p141-s4-m4-l", "text", 1480, 390, 300, 110, { text: "Global continuous multi-domain constellation coverage", fontSize: 17, fontFamily: "Inter", fill: "#a1a1aa", lineHeight: 1.5 })
          ]
        },
        {
          id: "p141-s5",
          name: "Program Contact",
          elements: [
            el("p141-s5-bg", "rect", 0, 0, 1920, 1080, { fill: "#09090b", locked: true }),
            el("p141-s5-card", "rect", 120, 120, 1680, 840, { fill: "#18181b", stroke: "rgba(245,158,11,0.4)", strokeWidth: 2, borderRadius: 20 }),
            el("p141-s5-tag", "text", 200, 200, 1520, 32, { text: "VALKYRIE DEFENSE SYSTEMS // STRATEGIC CONTRACTING", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#f59e0b", letterSpacing: 4 }),
            el("p141-s5-title", "text", 200, 270, 1520, 130, { text: "Securing the High Frontier of Earth.", fontSize: 64, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#ffffff" }),
            el("p141-s5-p", "text", 200, 430, 1200, 90, { text: "For defense procurement officers, Congressional defense committees, and allied defense ministries seeking technical annex briefings.", fontSize: 22, fontFamily: "Inter", fill: "#a1a1aa", lineHeight: 1.7 }),
            el("p141-s5-mail", "text", 200, 580, 700, 40, { text: "programs@valkyriedefense.space", fontSize: 28, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#f59e0b" }),
            el("p141-s5-loc", "text", 200, 660, 700, 40, { text: "Valkyrie Aerospace Complex · 1000 Defense Way · Huntsville, AL 35806", fontSize: 18, fontFamily: "Inter", fill: "#d4d4d8" }),
            el("p141-s5-foot", "text", 200, 850, 1520, 30, { text: "ITAR RESTRICTED // DISTRIBUTION STATEMENT D — U.S. DEFENSE CONTRACTORS ONLY.", fontSize: 13, fontFamily: "Space Grotesk", fill: "#71717a", letterSpacing: 2 })
          ]
        }
      ]
    },

    // 142: Artisan Specialty Coffee Roastery Pitch (5 slides)
    {
      id: 142,
      name: "Artisan Specialty Coffee Roastery Pitch",
      title: "ORIGIN COFFEE ROASTERS // SINGLE-ORIGIN EXPANSION",
      description: "Warm amber, roasted espresso, and cream storytelling deck with farm origin photography and direct-trade retail economics.",
      category: "Presentation",
      subcategory: "Food",
      size: "1920×1080",
      canvasWidth: 1920,
      canvasHeight: 1080,
      orientation: "landscape",
      tags: ["Coffee", "Artisan", "Food", "Storytelling", "Retail"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 4560,
      views: 35100,
      gradient: "linear-gradient(135deg, #271406 0%, #b45309 100%)",
      fonts: ["Playfair Display", "Inter"],
      colors: ["#fffbeb", "#271406", "#b45309", "#78350f"],
      slides: [
        {
          id: "p142-s1",
          name: "Cover",
          elements: [
            el("p142-s1-bg", "rect", 0, 0, 1920, 1080, { fill: "#fffbeb", locked: true }),
            el("p142-s1-img", "image", 960, 0, 960, 1080, { src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1200" }),
            el("p142-s1-tag", "text", 120, 140, 760, 32, { text: "DIRECT-TRADE SPECIALTY COFFEE", fontSize: 15, fontFamily: "Playfair Display", fontWeight: "700", fill: "#b45309", letterSpacing: 4 }),
            el("p142-s1-title", "text", 120, 240, 760, 240, { text: "ORIGIN\nROASTERS", fontSize: 96, fontFamily: "Playfair Display", fontWeight: "900", fill: "#271406", lineHeight: 0.95 }),
            el("p142-s1-sub", "text", 120, 520, 740, 120, { text: "High-altitude Ethiopian heirloom lots, micro-batch cast iron roasting, and zero-compromise coffee culinary experiences.", fontSize: 22, fontFamily: "Inter", fill: "#78350f", lineHeight: 1.7 }),
            el("p142-s1-foot", "text", 120, 900, 740, 30, { text: "INVESTOR SERIES SEED DECK // PORTLAND · SEATTLE · TOKYO", fontSize: 13, fontFamily: "Playfair Display", fill: "#92400e", letterSpacing: 2 })
          ]
        },
        {
          id: "p142-s2",
          name: "Farm Direct Model",
          elements: [
            el("p142-s2-bg", "rect", 0, 0, 1920, 1080, { fill: "#fffbeb", locked: true }),
            el("p142-s2-tag", "text", 120, 100, 1680, 32, { text: "ETHICAL SOURCING", fontSize: 15, fontFamily: "Playfair Display", fontWeight: "700", fill: "#b45309", letterSpacing: 4 }),
            el("p142-s2-title", "text", 120, 150, 1680, 70, { text: "300% Above Fair-Trade Farm Direct Pricing", fontSize: 48, fontFamily: "Playfair Display", fontWeight: "800", fill: "#271406" }),
            el("p142-s2-img", "image", 120, 260, 800, 680, { src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=1200", borderRadius: 12 }),
            el("p142-s2-c", "rect", 960, 260, 840, 680, { fill: "#fef3c7", borderRadius: 12 }),
            el("p142-s2-ct", "text", 1020, 320, 720, 40, { text: "The Single-Origin Value Chain", fontSize: 28, fontFamily: "Playfair Display", fontWeight: "800", fill: "#271406" }),
            el("p142-s2-b1", "text", 1020, 400, 720, 120, { text: "• Yirgacheffe & Gesha Partnerships: Multi-year contracts directly with smallholder farming families at elevation above 2,100m.", fontSize: 18, fontFamily: "Inter", fill: "#78350f", lineHeight: 1.7 }),
            el("p142-s2-b2", "text", 1020, 540, 720, 120, { text: "• Anaerobic Natural Fermentation: Bespoke processing experimental lots producing distinctive tasting notes of jasmine and wild bergamot.", fontSize: 18, fontFamily: "Inter", fill: "#78350f", lineHeight: 1.7 }),
            el("p142-s2-b3", "text", 1020, 680, 720, 120, { text: "• Solar-Powered Roastery: 100% renewable roasting facility with emission scrubbers reducing carbon output by 92%.", fontSize: 18, fontFamily: "Inter", fill: "#78350f", lineHeight: 1.7 })
          ]
        },
        {
          id: "p142-s3",
          name: "Retail Growth",
          elements: [
            el("p142-s3-bg", "rect", 0, 0, 1920, 1080, { fill: "#fffbeb", locked: true }),
            el("p142-s3-tag", "text", 120, 100, 1680, 32, { text: "COMMERCIAL UNIT ECONOMICS", fontSize: 15, fontFamily: "Playfair Display", fontWeight: "700", fill: "#b45309", letterSpacing: 4 }),
            el("p142-s3-title", "text", 120, 150, 1680, 70, { text: "Flagship Cafés & Direct-to-Consumer Subscriptions", fontSize: 48, fontFamily: "Playfair Display", fontWeight: "800", fill: "#271406" }),
            el("p142-s3-m1", "rect", 120, 260, 380, 280, { fill: "#fef3c7", borderRadius: 12, stroke: "rgba(180,83,9,0.2)", strokeWidth: 1 }),
            el("p142-s3-m1-v", "text", 160, 300, 300, 70, { text: "$1.8M", fontSize: 52, fontFamily: "Playfair Display", fontWeight: "900", fill: "#b45309" }),
            el("p142-s3-m1-l", "text", 160, 390, 300, 110, { text: "Average Annual Revenue per 1,200 sq ft Flagship Espresso Bar", fontSize: 17, fontFamily: "Inter", fill: "#78350f", lineHeight: 1.5 }),
            el("p142-s3-m2", "rect", 560, 260, 380, 280, { fill: "#fef3c7", borderRadius: 12, stroke: "rgba(180,83,9,0.2)", strokeWidth: 1 }),
            el("p142-s3-m2-v", "text", 600, 300, 300, 70, { text: "68%", fontSize: 52, fontFamily: "Playfair Display", fontWeight: "900", fill: "#b45309" }),
            el("p142-s3-m2-l", "text", 600, 390, 300, 110, { text: "Gross Margin across roasted bean direct-to-consumer subscriptions", fontSize: 17, fontFamily: "Inter", fill: "#78350f", lineHeight: 1.5 }),
            el("p142-s3-m3", "rect", 1000, 260, 380, 280, { fill: "#fef3c7", borderRadius: 12, stroke: "rgba(180,83,9,0.2)", strokeWidth: 1 }),
            el("p142-s3-m3-v", "text", 1040, 300, 300, 70, { text: "42,000", fontSize: 52, fontFamily: "Playfair Display", fontWeight: "900", fill: "#b45309" }),
            el("p142-s3-m3-l", "text", 1040, 390, 300, 110, { text: "Active monthly home coffee subscribers with 94% retention", fontSize: 17, fontFamily: "Inter", fill: "#78350f", lineHeight: 1.5 }),
            el("p142-s3-m4", "rect", 1440, 260, 360, 280, { fill: "#fef3c7", borderRadius: 12, stroke: "rgba(180,83,9,0.2)", strokeWidth: 1 }),
            el("p142-s3-m4-v", "text", 1480, 300, 300, 70, { text: "14", fontSize: 52, fontFamily: "Playfair Display", fontWeight: "900", fill: "#b45309" }),
            el("p142-s3-m4-l", "text", 1480, 390, 300, 110, { text: "Planned new urban locations across West Coast & Japan by 2027", fontSize: 17, fontFamily: "Inter", fill: "#78350f", lineHeight: 1.5 })
          ]
        },
        {
          id: "p142-s4",
          name: "Roastery Expansion",
          elements: [
            el("p142-s4-bg", "rect", 0, 0, 1920, 1080, { fill: "#fffbeb", locked: true }),
            el("p142-s4-tag", "text", 120, 100, 1680, 32, { text: "SCALING PRODUCTION", fontSize: 15, fontFamily: "Playfair Display", fontWeight: "700", fill: "#b45309", letterSpacing: 4 }),
            el("p142-s4-title", "text", 120, 150, 1680, 70, { text: "Automated Micro-Batch Roasting Labs", fontSize: 48, fontFamily: "Playfair Display", fontWeight: "800", fill: "#271406" }),
            el("p142-s4-c1", "rect", 120, 260, 800, 640, { fill: "#fef3c7", borderRadius: 12 }),
            el("p142-s4-c1-t", "text", 160, 300, 720, 40, { text: "Loring Smart Roaster Fleet", fontSize: 26, fontFamily: "Playfair Display", fontWeight: "800", fill: "#b45309" }),
            el("p142-s4-c1-p", "text", 160, 360, 720, 480, { text: "Our Portland hub operates 4 automated Loring S70 Kestrel roasters with closed-loop burner technology, achieving 80% fuel efficiency and digital curve repeatability down to 0.1°C temperature variance.", fontSize: 18, fontFamily: "Inter", fill: "#78350f", lineHeight: 1.8 }),
            el("p142-s4-c2", "rect", 960, 260, 840, 640, { fill: "#fef3c7", borderRadius: 12 }),
            el("p142-s4-c2-t", "text", 1000, 300, 760, 40, { text: "Sensory Quality & Nitrogen Sealing", fontSize: 26, fontFamily: "Playfair Display", fontWeight: "800", fill: "#b45309" }),
            el("p142-s4-c2-p", "text", 1000, 360, 760, 480, { text: "Every roast lot is flushed with food-grade liquid nitrogen in valve-sealed recycled aluminum canisters within 90 seconds of grinding, preserving delicate volatile aromatic compounds for over 180 days.", fontSize: 18, fontFamily: "Inter", fill: "#78350f", lineHeight: 1.8 })
          ]
        },
        {
          id: "p142-s5",
          name: "Investment & Terms",
          elements: [
            el("p142-s5-bg", "rect", 0, 0, 1920, 1080, { fill: "#271406", locked: true }),
            el("p142-s5-card", "rect", 120, 120, 1680, 840, { fill: "#451a03", stroke: "rgba(180,83,9,0.4)", strokeWidth: 2, borderRadius: 20 }),
            el("p142-s5-tag", "text", 200, 200, 1520, 32, { text: "SERIES A INVESTMENT OPPORTUNITY", fontSize: 15, fontFamily: "Playfair Display", fontWeight: "700", fill: "#fbbf24", letterSpacing: 4 }),
            el("p142-s5-title", "text", 200, 270, 1520, 130, { text: "Scaling the Art of Pure Coffee.", fontSize: 64, fontFamily: "Playfair Display", fontWeight: "900", fill: "#fffbeb" }),
            el("p142-s5-p", "text", 200, 430, 1200, 90, { text: "Seeking $6.5M in Series A equity financing to expand roastery production capacity, open 8 new flagship cafés, and scale DTC e-commerce.", fontSize: 22, fontFamily: "Inter", fill: "#fde68a", lineHeight: 1.7 }),
            el("p142-s5-mail", "text", 200, 580, 700, 40, { text: "invest@originroasters.coffee", fontSize: 28, fontFamily: "Playfair Display", fontWeight: "700", fill: "#fbbf24" }),
            el("p142-s5-loc", "text", 200, 660, 700, 40, { text: "Origin Roastery & Labs · 1220 SE Division St · Portland, OR 97202", fontSize: 18, fontFamily: "Inter", fill: "#fef3c7" }),
            el("p142-s5-foot", "text", 200, 850, 1520, 30, { text: "© 2026 ORIGIN COFFEE ROASTERS LLC. ALL RIGHTS RESERVED. CONFIDENTIAL.", fontSize: 13, fontFamily: "Playfair Display", fill: "#fde68a", letterSpacing: 2 })
          ]
        }
      ]
    },

    // 143: Bio-Genomics & CRISPR Clinical Horizons (5 slides)
    {
      id: 143,
      name: "Bio-Genomics & CRISPR Clinical Horizons",
      title: "HELIX BIO-THERAPEUTICS // PHASE II GENE EDITING PIPELINE",
      description: "Pristine white and cyan medical genomics presentation with molecular sequencing cards and clinical trial telemetry.",
      category: "Presentation",
      subcategory: "Medical",
      size: "1920×1080",
      canvasWidth: 1920,
      canvasHeight: 1080,
      orientation: "landscape",
      tags: ["Biotech", "Genomics", "Medical", "CRISPR", "Clinical"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 5410,
      views: 41200,
      gradient: "linear-gradient(135deg, #0f172a 0%, #0284c7 100%)",
      fonts: ["Plus Jakarta Sans", "Inter"],
      colors: ["#f8fafc", "#0f172a", "#0284c7", "#64748b"],
      slides: [
        {
          id: "p143-s1",
          name: "Cover",
          elements: [
            el("p143-s1-bg", "rect", 0, 0, 1920, 1080, { fill: "#f8fafc", locked: true }),
            el("p143-s1-img", "image", 960, 0, 960, 1080, { src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1200" }),
            el("p143-s1-tag", "text", 120, 140, 760, 32, { text: "HELIX BIOTHERAPEUTICS // INVESTOR CLINICAL UPDATE", fontSize: 15, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#0284c7", letterSpacing: 4 }),
            el("p143-s1-title", "text", 120, 240, 760, 240, { text: "PRECISION\nGENOMICS", fontSize: 96, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#0f172a", lineHeight: 0.95 }),
            el("p143-s1-sub", "text", 120, 520, 740, 120, { text: "Targeted in-vivo base editing platforms for monogenic cardiovascular and hematologic disorders with zero off-target indels.", fontSize: 22, fontFamily: "Inter", fill: "#475569", lineHeight: 1.7 }),
            el("p143-s1-foot", "text", 120, 900, 740, 30, { text: "NASDAQ: HLXG // CAMBRIDGE & BASEL CLINICAL TEAMS", fontSize: 13, fontFamily: "Plus Jakarta Sans", fill: "#94a3b8", letterSpacing: 2 })
          ]
        },
        {
          id: "p143-s2",
          name: "Pipeline Overview",
          elements: [
            el("p143-s2-bg", "rect", 0, 0, 1920, 1080, { fill: "#f8fafc", locked: true }),
            el("p143-s2-tag", "text", 120, 100, 1680, 32, { text: "THERAPEUTIC PIPELINE", fontSize: 15, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#0284c7", letterSpacing: 3 }),
            el("p143-s2-title", "text", 120, 150, 1680, 70, { text: "Clinical Stage Programs", fontSize: 48, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0f172a" }),
            el("p143-s2-c1", "rect", 120, 260, 520, 620, { fill: "#ffffff", borderRadius: 12, stroke: "rgba(2,132,199,0.2)", strokeWidth: 1 }),
            el("p143-s2-c1-t", "text", 160, 300, 440, 40, { text: "HLX-101 // CARDIAC ATTR", fontSize: 22, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0284c7" }),
            el("p143-s2-c1-p", "text", 160, 360, 440, 440, { text: "Phase 2 in-vivo lipid nanoparticle delivery knocking down mutant TTR protein production in hepatocytes. Demonstrated 94% serum TTR reduction in 28-day trial cohorts.", fontSize: 18, fontFamily: "Inter", fill: "#475569", lineHeight: 1.7 }),
            el("p143-s2-c2", "rect", 700, 260, 520, 620, { fill: "#ffffff", borderRadius: 12, stroke: "rgba(2,132,199,0.2)", strokeWidth: 1 }),
            el("p143-s2-c2-t", "text", 740, 300, 440, 40, { text: "HLX-204 // SICKLE CELL", fontSize: 22, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0284c7" }),
            el("p143-s2-c2-p", "text", 740, 360, 440, 440, { text: "Ex-vivo autologous CD34+ editing reactivating fetal hemoglobin. 100% of treated patients achieved transfusion independence at 12-month post-engraftment follow-up.", fontSize: 18, fontFamily: "Inter", fill: "#475569", lineHeight: 1.7 }),
            el("p143-s2-c3", "rect", 1280, 260, 520, 620, { fill: "#ffffff", borderRadius: 12, stroke: "rgba(2,132,199,0.2)", strokeWidth: 1 }),
            el("p143-s2-c3-t", "text", 1320, 300, 440, 40, { text: "HLX-309 // FABRY DISEASE", fontSize: 22, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0284c7" }),
            el("p143-s2-c3-p", "text", 1320, 360, 440, 440, { text: "Targeted insertion of functional GLA gene into albumin safe-harbor locus, providing permanent endogenous alpha-galactosidase enzyme secretion.", fontSize: 18, fontFamily: "Inter", fill: "#475569", lineHeight: 1.7 })
          ]
        },
        {
          id: "p143-s3",
          name: "Delivery Technology",
          elements: [
            el("p143-s3-bg", "rect", 0, 0, 1920, 1080, { fill: "#f8fafc", locked: true }),
            el("p143-s3-tag", "text", 120, 100, 1680, 32, { text: "PROPRIETARY NANOMEDICINE", fontSize: 15, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#0284c7", letterSpacing: 3 }),
            el("p143-s3-title", "text", 120, 150, 1680, 70, { text: "Next-Gen Ionizable Lipid Nanoparticles", fontSize: 48, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0f172a" }),
            el("p143-s3-img", "image", 120, 260, 800, 680, { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200", borderRadius: 12 }),
            el("p143-s3-card", "rect", 960, 260, 840, 680, { fill: "#ffffff", stroke: "rgba(2,132,199,0.2)", strokeWidth: 1, borderRadius: 12 }),
            el("p143-s3-ct", "text", 1020, 320, 720, 40, { text: "Tissue-Specific Targeting Efficiency", fontSize: 26, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0284c7" }),
            el("p143-s3-b1", "text", 1020, 400, 720, 120, { text: "• Extra-Hepatic Tropism: Engineered surface ligands routing mRNA payloads specifically to cardiac myocytes and bone marrow niches.", fontSize: 18, fontFamily: "Inter", fill: "#475569", lineHeight: 1.7 }),
            el("p143-s3-b2", "text", 1020, 540, 720, 120, { text: "• High Endosomal Escape: pH-sensitive tertiary amines releasing 64% of cargo into the cytoplasm without triggering toll-like receptor inflammatory cascades.", fontSize: 18, fontFamily: "Inter", fill: "#475569", lineHeight: 1.7 }),
            el("p143-s3-b3", "text", 1020, 680, 720, 120, { text: "• Scalable GMP Synthesis: Continuous microfluidic impingement jets producing 500-liter batches with 98% encapsulation consistency.", fontSize: 18, fontFamily: "Inter", fill: "#475569", lineHeight: 1.7 })
          ]
        },
        {
          id: "p143-s4",
          name: "Clinical Milestones",
          elements: [
            el("p143-s4-bg", "rect", 0, 0, 1920, 1080, { fill: "#f8fafc", locked: true }),
            el("p143-s4-tag", "text", 120, 100, 1680, 32, { text: "UPCOMING CATALYSTS", fontSize: 15, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#0284c7", letterSpacing: 3 }),
            el("p143-s4-title", "text", 120, 150, 1680, 70, { text: "2026–2027 Regulatory Roadmap", fontSize: 48, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0f172a" }),
            el("p143-s4-m1", "rect", 120, 260, 380, 280, { fill: "#ffffff", borderRadius: 12, stroke: "rgba(2,132,199,0.2)", strokeWidth: 1 }),
            el("p143-s4-m1-v", "text", 160, 300, 300, 70, { text: "Q3 2026", fontSize: 48, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#0284c7" }),
            el("p143-s4-m1-l", "text", 160, 390, 300, 110, { text: "Phase 2 Topline Data readout for HLX-101 (ATTR Cardiomyopathy)", fontSize: 17, fontFamily: "Inter", fill: "#64748b", lineHeight: 1.5 }),
            el("p143-s4-m2", "rect", 560, 260, 380, 280, { fill: "#ffffff", borderRadius: 12, stroke: "rgba(2,132,199,0.2)", strokeWidth: 1 }),
            el("p143-s4-m2-v", "text", 600, 300, 300, 70, { text: "Q1 2027", fontSize: 48, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#0284c7" }),
            el("p143-s4-m2-l", "text", 600, 390, 300, 110, { text: "FDA BLA Submission for HLX-204 under Breakthrough Therapy status", fontSize: 17, fontFamily: "Inter", fill: "#64748b", lineHeight: 1.5 }),
            el("p143-s4-m3", "rect", 1000, 260, 380, 280, { fill: "#ffffff", borderRadius: 12, stroke: "rgba(2,132,199,0.2)", strokeWidth: 1 }),
            el("p143-s4-m3-v", "text", 1040, 300, 300, 70, { text: "$380M", fontSize: 48, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#0284c7" }),
            el("p143-s4-m3-l", "text", 1040, 390, 300, 110, { text: "Current cash balance providing funded operating runway into 2028", fontSize: 17, fontFamily: "Inter", fill: "#64748b", lineHeight: 1.5 }),
            el("p143-s4-m4", "rect", 1440, 260, 360, 280, { fill: "#ffffff", borderRadius: 12, stroke: "rgba(2,132,199,0.2)", strokeWidth: 1 }),
            el("p143-s4-m4-v", "text", 1480, 300, 300, 70, { text: "48", fontSize: 48, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#0284c7" }),
            el("p143-s4-m4-l", "text", 1480, 390, 300, 110, { text: "Issued patents covering proprietary miniature Cas14 base editors", fontSize: 17, fontFamily: "Inter", fill: "#64748b", lineHeight: 1.5 })
          ]
        },
        {
          id: "p143-s5",
          name: "Investor Contact",
          elements: [
            el("p143-s5-bg", "rect", 0, 0, 1920, 1080, { fill: "#0f172a", locked: true }),
            el("p143-s5-card", "rect", 120, 120, 1680, 840, { fill: "#1e293b", stroke: "rgba(2,132,199,0.4)", strokeWidth: 2, borderRadius: 20 }),
            el("p143-s5-tag", "text", 200, 200, 1520, 32, { text: "HELIX BIOTHERAPEUTICS INVESTOR RELATIONS", fontSize: 15, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#38bdf8", letterSpacing: 4 }),
            el("p143-s5-title", "text", 200, 270, 1520, 130, { text: "Rewriting the Code of Human Health.", fontSize: 64, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#ffffff" }),
            el("p143-s5-p", "text", 200, 430, 1200, 90, { text: "To schedule clinical investigator calls or access medical congress scientific posters, contact Helix Corporate Communications.", fontSize: 22, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.7 }),
            el("p143-s5-mail", "text", 200, 580, 700, 40, { text: "ir@helixbiotherapeutics.com", fontSize: 28, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#38bdf8" }),
            el("p143-s5-loc", "text", 200, 660, 700, 40, { text: "Helix Center · 200 Technology Square · Cambridge, MA 02139", fontSize: 18, fontFamily: "Inter", fill: "#cbd5e1" }),
            el("p143-s5-foot", "text", 200, 850, 1520, 30, { text: "© 2026 HELIX BIOTHERAPEUTICS INC. FORWARD-LOOKING STATEMENTS SUBJECT TO SEC SAFE HARBOR.", fontSize: 13, fontFamily: "Plus Jakarta Sans", fill: "#64748b", letterSpacing: 2 })
          ]
        }
      ]
    },

    // 144: Metropolitan Modern Art Biennale Monograph (5 slides)
    {
      id: 144,
      name: "Metropolitan Modern Art Biennale Monograph",
      title: "METROPOLITAN BIENNALE // CONTEMPORARY CURATORIAL REPORT",
      description: "Bold Swiss typographic monograph with monochrome grid foundations, scarlet accents, and museum installation photography.",
      category: "Presentation",
      subcategory: "Art",
      size: "1920×1080",
      canvasWidth: 1920,
      canvasHeight: 1080,
      orientation: "landscape",
      tags: ["Art", "Exhibition", "Biennale", "Swiss", "Museum"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 4230,
      views: 33400,
      gradient: "linear-gradient(135deg, #000000 0%, #dc2626 100%)",
      fonts: ["Space Grotesk", "Inter"],
      colors: ["#ffffff", "#000000", "#dc2626", "#52525b"],
      slides: [
        {
          id: "p144-s1",
          name: "Cover",
          elements: [
            el("p144-s1-bg", "rect", 0, 0, 1920, 1080, { fill: "#ffffff", locked: true }),
            el("p144-s1-img", "image", 960, 0, 960, 1080, { src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=1200" }),
            el("p144-s1-tag", "text", 120, 140, 760, 32, { text: "INTERNATIONAL BIENNALE OF CONTEMPORARY ART", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#dc2626", letterSpacing: 4 }),
            el("p144-s1-title", "text", 120, 240, 760, 240, { text: "METRO\nPOLITAN", fontSize: 110, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#000000", lineHeight: 0.9 }),
            el("p144-s1-sub", "text", 120, 520, 740, 120, { text: "Eighty-four international artists exploring spatial memory, generative sculpture, and kinetic light in post-industrial halls.", fontSize: 22, fontFamily: "Inter", fill: "#52525b", lineHeight: 1.7 }),
            el("p144-s1-foot", "text", 120, 900, 740, 30, { text: "KUNSTHALLE ZÜRICH // OCTOBER 2026 — MARCH 2027", fontSize: 13, fontFamily: "Space Grotesk", fill: "#a1a1aa", letterSpacing: 2 })
          ]
        },
        {
          id: "p144-s2",
          name: "Curatorial Statement",
          elements: [
            el("p144-s2-bg", "rect", 0, 0, 1920, 1080, { fill: "#ffffff", locked: true }),
            el("p144-s2-tag", "text", 120, 100, 1680, 32, { text: "CURATORIAL THEME", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#dc2626", letterSpacing: 4 }),
            el("p144-s2-title", "text", 120, 150, 1680, 70, { text: "The Velocity of Frozen Space", fontSize: 48, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#000000" }),
            el("p144-s2-img", "image", 120, 260, 800, 680, { src: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&q=80&w=1200", borderRadius: 4 }),
            el("p144-s2-card", "rect", 960, 260, 840, 680, { fill: "#f4f4f5", borderRadius: 4 }),
            el("p144-s2-q", "text", 1020, 320, 720, 180, { text: "“To exhibit is to arrest the flow of temporal anxiety, constructing a momentary monument to human perception.”", fontSize: 32, fontFamily: "Space Grotesk", fontStyle: "italic", fill: "#000000", lineHeight: 1.4 }),
            el("p144-s2-p", "text", 1020, 520, 720, 360, { text: "The 2026 Metropolitan Biennale brings together monumental spatial interventions by leading sculptors and new media pioneers. Reimagining 14,000 square meters of former locomotive depots into interconnected acoustic and visual chambers.", fontSize: 18, fontFamily: "Inter", fill: "#52525b", lineHeight: 1.8 })
          ]
        },
        {
          id: "p144-s3",
          name: "Pavilion Layout",
          elements: [
            el("p144-s3-bg", "rect", 0, 0, 1920, 1080, { fill: "#ffffff", locked: true }),
            el("p144-s3-tag", "text", 120, 100, 1680, 32, { text: "EXHIBITION ARCHITECTURE", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#dc2626", letterSpacing: 4 }),
            el("p144-s3-title", "text", 120, 150, 1680, 70, { text: "Three Thematic Pavilions", fontSize: 48, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#000000" }),
            el("p144-s3-c1", "rect", 120, 260, 520, 640, { fill: "#000000", borderRadius: 4 }),
            el("p144-s3-c1-t", "text", 160, 300, 440, 40, { text: "PAVILION A: MONOLITH", fontSize: 22, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#dc2626" }),
            el("p144-s3-c1-p", "text", 160, 360, 440, 480, { text: "Heavy cast iron, raw basalt, and tensioned steel cables exploring tectonic gravity. Featuring monumental site-specific works by Richard Serra and Rachel Whiteread.", fontSize: 18, fontFamily: "Inter", fill: "#d4d4d8", lineHeight: 1.7 }),
            el("p144-s3-c2", "rect", 700, 260, 520, 640, { fill: "#f4f4f5", borderRadius: 4 }),
            el("p144-s3-c2-t", "text", 740, 300, 440, 40, { text: "PAVILION B: LUMEN", fontSize: 22, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#dc2626" }),
            el("p144-s3-c2-p", "text", 740, 360, 440, 480, { text: "Darkened immersive halls with optical laser refraction, neon gases, and algorithmic strobe sequences by Olafur Eliasson and James Turrell.", fontSize: 18, fontFamily: "Inter", fill: "#52525b", lineHeight: 1.7 }),
            el("p144-s3-c3", "rect", 1280, 260, 520, 640, { fill: "#f4f4f5", borderRadius: 4 }),
            el("p144-s3-c3-t", "text", 1320, 300, 440, 40, { text: "PAVILION C: SONIC", fontSize: 22, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#dc2626" }),
            el("p144-s3-c3-p", "text", 1320, 360, 440, 480, { text: "Spatialized 64-channel acoustic resonance chambers amplifying seismic vibrations and low-frequency ocean telemetry by Ryoji Ikeda.", fontSize: 18, fontFamily: "Inter", fill: "#52525b", lineHeight: 1.7 })
          ]
        },
        {
          id: "p144-s4",
          name: "Artist Commissions",
          elements: [
            el("p144-s4-bg", "rect", 0, 0, 1920, 1080, { fill: "#ffffff", locked: true }),
            el("p144-s4-tag", "text", 120, 100, 1680, 32, { text: "COMMISSIONED WORKS", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#dc2626", letterSpacing: 4 }),
            el("p144-s4-title", "text", 120, 150, 1680, 70, { text: "Featured Monumental Installations", fontSize: 48, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#000000" }),
            el("p144-s4-c1-img", "image", 120, 260, 520, 420, { src: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1200", borderRadius: 4 }),
            el("p144-s4-c1-t", "text", 120, 700, 520, 30, { text: "ANA MENDIETA // SILHOUETTES", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#000000" }),
            el("p144-s4-c1-p", "text", 120, 740, 520, 180, { text: "Earth-body monumental sculptures embedded into raw peat moss and volcanic obsidian sand.", fontSize: 16, fontFamily: "Inter", fill: "#52525b", lineHeight: 1.6 }),
            el("p144-s4-c2-img", "image", 700, 260, 520, 420, { src: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&q=80&w=1200", borderRadius: 4 }),
            el("p144-s4-c2-t", "text", 700, 700, 520, 30, { text: "HIROSHI SUGIMOTO // SEASCAPES", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#000000" }),
            el("p144-s4-c2-p", "text", 700, 740, 520, 180, { text: "Large-format gelatin silver prints capturing primal horizons devoid of human intervention.", fontSize: 16, fontFamily: "Inter", fill: "#52525b", lineHeight: 1.6 }),
            el("p144-s4-c3-img", "image", 1280, 260, 520, 420, { src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200", borderRadius: 4 }),
            el("p144-s4-c3-t", "text", 1280, 700, 520, 30, { text: "TADAO ANDO // VOID SPACE", fontSize: 18, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#000000" }),
            el("p144-s4-c3-p", "text", 1280, 740, 520, 180, { text: "Cast concrete pavilion slicing natural sunlight into precise geometric temporal bands.", fontSize: 16, fontFamily: "Inter", fill: "#52525b", lineHeight: 1.6 })
          ]
        },
        {
          id: "p144-s5",
          name: "Catalogue & Contact",
          elements: [
            el("p144-s5-bg", "rect", 0, 0, 1920, 1080, { fill: "#000000", locked: true }),
            el("p144-s5-card", "rect", 120, 120, 1680, 840, { fill: "#18181b", stroke: "rgba(220,38,38,0.4)", strokeWidth: 2, borderRadius: 8 }),
            el("p144-s5-tag", "text", 200, 200, 1520, 32, { text: "METROPOLITAN BIENNALE CURATORIAL ARCHIVE", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#dc2626", letterSpacing: 4 }),
            el("p144-s5-title", "text", 200, 270, 1520, 130, { text: "A Monument to Contemporary Thought.", fontSize: 64, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#ffffff" }),
            el("p144-s5-p", "text", 200, 430, 1200, 90, { text: "The 480-page hardbound exhibition monograph and curatorial catalog is published in limited edition by Lars Müller Publishers.", fontSize: 22, fontFamily: "Inter", fill: "#a1a1aa", lineHeight: 1.7 }),
            el("p144-s5-mail", "text", 200, 580, 700, 40, { text: "curatorial@biennale-metropolitan.ch", fontSize: 28, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#dc2626" }),
            el("p144-s5-loc", "text", 200, 660, 700, 40, { text: "Kunsthalle Zürich · Limmatstrasse 270 · 8005 Zürich, Switzerland", fontSize: 18, fontFamily: "Inter", fill: "#d4d4d8" }),
            el("p144-s5-foot", "text", 200, 850, 1520, 30, { text: "© 2026 METROPOLITAN BIENNALE FOUNDATION. SWISS FEDERAL OFFICE OF CULTURE PATRONAGE.", fontSize: 13, fontFamily: "Space Grotesk", fill: "#71717a", letterSpacing: 2 })
          ]
        }
      ]
    },

    // 145: Luxury Superyacht & Maritime Fleet (5 slides)
    {
      id: 145,
      name: "Luxury Superyacht & Maritime Fleet",
      title: "SOLARIS SUPERYACHTS // 95M HYBRID MOTOR YACHT FLEET",
      description: "Deep oceanic navy and platinum luxury yacht presentation featuring naval engineering specs, luxury interior suites, and Monaco showcase imagery.",
      category: "Presentation",
      subcategory: "Luxury",
      size: "1920×1080",
      canvasWidth: 1920,
      canvasHeight: 1080,
      orientation: "landscape",
      tags: ["Yacht", "Luxury", "Maritime", "Superyacht", "Engineering"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 6290,
      views: 46800,
      gradient: "linear-gradient(135deg, #03071e 0%, #1d4ed8 100%)",
      fonts: ["Cinzel", "Inter"],
      colors: ["#03071e", "#38bdf8", "#ffffff", "#94a3b8"],
      slides: [
        {
          id: "p145-s1",
          name: "Cover",
          elements: [
            el("p145-s1-bg", "rect", 0, 0, 1920, 1080, { fill: "#03071e", locked: true }),
            el("p145-s1-img", "image", 960, 0, 960, 1080, { src: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d17?auto=format&fit=crop&q=80&w=1200" }),
            el("p145-s1-tag", "text", 120, 140, 760, 32, { text: "MONACO YACHT SHOW PREMIERE // 95-METER FLAGSHIP", fontSize: 15, fontFamily: "Cinzel", fontWeight: "700", fill: "#38bdf8", letterSpacing: 4 }),
            el("p145-s1-title", "text", 120, 240, 760, 240, { text: "SOLARIS\nMARITIME", fontSize: 96, fontFamily: "Cinzel", fontWeight: "900", fill: "#ffffff", lineHeight: 0.95 }),
            el("p145-s1-sub", "text", 120, 520, 740, 120, { text: "Twin hydrogen fuel-cell hybrid propulsion, infinity glass beach club, and trans-Atlantic 6,000nm range with zero emissions.", fontSize: 22, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.7 }),
            el("p145-s1-foot", "text", 120, 900, 740, 30, { text: "PORT HERCULE, MONACO // NAVAL ARCHITECTURE DOSSIER", fontSize: 13, fontFamily: "Cinzel", fill: "#64748b", letterSpacing: 2 })
          ]
        },
        {
          id: "p145-s2",
          name: "Naval Specifications",
          elements: [
            el("p145-s2-bg", "rect", 0, 0, 1920, 1080, { fill: "#03071e", locked: true }),
            el("p145-s2-tag", "text", 120, 100, 1680, 32, { text: "ENGINEERING SPECIFICATIONS", fontSize: 15, fontFamily: "Cinzel", fontWeight: "700", fill: "#38bdf8", letterSpacing: 3 }),
            el("p145-s2-title", "text", 120, 150, 1680, 70, { text: "95-Meter Custom Steel & Aluminum Platform", fontSize: 48, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff" }),
            el("p145-s2-c1", "rect", 120, 260, 390, 640, { fill: "#09122c", borderRadius: 8, stroke: "rgba(56,189,248,0.2)", strokeWidth: 1 }),
            el("p145-s2-c1-t", "text", 160, 300, 310, 40, { text: "PROPULSION", fontSize: 22, fontFamily: "Cinzel", fontWeight: "800", fill: "#38bdf8" }),
            el("p145-s2-c1-p", "text", 160, 360, 310, 480, { text: "ABB Azipod dual electric thrusters coupled with 3.2MW solid oxide fuel cells. Delivers whisper-quiet 18.5 knot top speed with zero underwater acoustic signature.", fontSize: 17, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.7 }),
            el("p145-s2-c2", "rect", 550, 260, 390, 640, { fill: "#09122c", borderRadius: 8, stroke: "rgba(56,189,248,0.2)", strokeWidth: 1 }),
            el("p145-s2-c2-t", "text", 590, 300, 310, 40, { text: "CAPACITY", fontSize: 22, fontFamily: "Cinzel", fontWeight: "800", fill: "#38bdf8" }),
            el("p145-s2-c2-p", "text", 590, 360, 310, 480, { text: "16 VIP guests across 8 staterooms, including an entire private owner's deck with 360-degree panoramic ocean views and private forward jacuzzi terrace.", fontSize: 17, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.7 }),
            el("p145-s2-c3", "rect", 980, 260, 390, 640, { fill: "#09122c", borderRadius: 8, stroke: "rgba(56,189,248,0.2)", strokeWidth: 1 }),
            el("p145-s2-c3-t", "text", 1020, 300, 310, 40, { text: "WELLNESS & SPA", fontSize: 22, fontFamily: "Cinzel", fontWeight: "800", fill: "#38bdf8" }),
            el("p145-s2-c3-p", "text", 1020, 360, 310, 480, { text: "180m² beach club with fold-out sea terraces, Finnish sauna, cryotherapy suite, and glass-bottomed 8-meter swimming pool on the main aft deck.", fontSize: 17, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.7 }),
            el("p145-s2-c4", "rect", 1410, 260, 390, 640, { fill: "#09122c", borderRadius: 8, stroke: "rgba(56,189,248,0.2)", strokeWidth: 1 }),
            el("p145-s2-c4-t", "text", 1450, 300, 310, 40, { text: "HELIDECK", fontSize: 22, fontFamily: "Cinzel", fontWeight: "800", fill: "#38bdf8" }),
            el("p145-s2-c4-p", "text", 1450, 360, 310, 480, { text: "Certified commercial Touch-and-Go helipad accommodating Airbus ACH145 helicopters with below-deck hangar and refueling facilities.", fontSize: 17, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.7 })
          ]
        },
        {
          id: "p145-s3",
          name: "Interior Suites",
          elements: [
            el("p145-s3-bg", "rect", 0, 0, 1920, 1080, { fill: "#03071e", locked: true }),
            el("p145-s3-tag", "text", 120, 100, 1680, 32, { text: "INTERIOR ARCHITECTURE", fontSize: 15, fontFamily: "Cinzel", fontWeight: "700", fill: "#38bdf8", letterSpacing: 3 }),
            el("p145-s3-title", "text", 120, 150, 1680, 70, { text: "Liaigre & Winch Custom Interior Design", fontSize: 48, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff" }),
            el("p145-s3-img1", "image", 120, 260, 800, 680, { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200", borderRadius: 8 }),
            el("p145-s3-img2", "image", 960, 260, 840, 320, { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200", borderRadius: 8 }),
            el("p145-s3-card", "rect", 960, 610, 840, 330, { fill: "#09122c", borderRadius: 8 }),
            el("p145-s3-ct", "text", 1000, 650, 760, 36, { text: "Eucalyptus Timber, Calacatta Marble & Brushed Bronze", fontSize: 24, fontFamily: "Cinzel", fontWeight: "800", fill: "#38bdf8" }),
            el("p145-s3-cp", "text", 1000, 700, 760, 200, { text: "Every interior surface incorporates custom acoustically isolated floating subfloors, silk wall coverings, and concealed indirect circadian lighting systems matching external sun cycles.", fontSize: 17, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.7 })
          ]
        },
        {
          id: "p145-s4",
          name: "Sustainability & Range",
          elements: [
            el("p145-s4-bg", "rect", 0, 0, 1920, 1080, { fill: "#03071e", locked: true }),
            el("p145-s4-tag", "text", 120, 100, 1680, 32, { text: "ECO-MARITIME PERFORMANCE", fontSize: 15, fontFamily: "Cinzel", fontWeight: "700", fill: "#38bdf8", letterSpacing: 3 }),
            el("p145-s4-title", "text", 120, 150, 1680, 70, { text: "Transoceanic Clean Cruising", fontSize: 48, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff" }),
            el("p145-s4-m1", "rect", 120, 260, 380, 280, { fill: "#09122c", borderRadius: 8, stroke: "rgba(56,189,248,0.2)", strokeWidth: 1 }),
            el("p145-s4-m1-v", "text", 160, 300, 300, 70, { text: "6,000 nm", fontSize: 48, fontFamily: "Cinzel", fontWeight: "900", fill: "#38bdf8" }),
            el("p145-s4-m1-l", "text", 160, 390, 300, 110, { text: "Cruising range at economical 14 knots with zero refuel stops", fontSize: 17, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.5 }),
            el("p145-s4-m2", "rect", 560, 260, 380, 280, { fill: "#09122c", borderRadius: 8, stroke: "rgba(56,189,248,0.2)", strokeWidth: 1 }),
            el("p145-s4-m2-v", "text", 600, 300, 300, 70, { text: "-85%", fontSize: 48, fontFamily: "Cinzel", fontWeight: "900", fill: "#38bdf8" }),
            el("p145-s4-m2-l", "text", 600, 390, 300, 110, { text: "Reduction in underwater radiated noise protecting marine life", fontSize: 17, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.5 }),
            el("p145-s4-m3", "rect", 1000, 260, 380, 280, { fill: "#09122c", borderRadius: 8, stroke: "rgba(56,189,248,0.2)", strokeWidth: 1 }),
            el("p145-s4-m3-v", "text", 1040, 300, 300, 70, { text: "100%", fontSize: 48, fontFamily: "Cinzel", fontWeight: "900", fill: "#38bdf8" }),
            el("p145-s4-m3-l", "text", 1040, 390, 300, 110, { text: "Zero-emission harbor docking utilizing green hydrogen fuel cells", fontSize: 17, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.5 }),
            el("p145-s4-m4", "rect", 1440, 260, 360, 280, { fill: "#09122c", borderRadius: 8, stroke: "rgba(56,189,248,0.2)", strokeWidth: 1 }),
            el("p145-s4-m4-v", "text", 1480, 300, 300, 70, { text: "3,100 GT", fontSize: 48, fontFamily: "Cinzel", fontWeight: "900", fill: "#38bdf8" }),
            el("p145-s4-m4-l", "text", 1480, 390, 300, 110, { text: "Gross tonnage providing peerless offshore seakeeping stability", fontSize: 17, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.5 })
          ]
        },
        {
          id: "p145-s5",
          name: "Shipyard Inquiries",
          elements: [
            el("p145-s5-bg", "rect", 0, 0, 1920, 1080, { fill: "#03071e", locked: true }),
            el("p145-s5-card", "rect", 120, 120, 1680, 840, { fill: "#09122c", stroke: "rgba(56,189,248,0.4)", strokeWidth: 2, borderRadius: 20 }),
            el("p145-s5-tag", "text", 200, 200, 1520, 32, { text: "SOLARIS NAVAL YACHTS // COMMISSIONING DESK", fontSize: 15, fontFamily: "Cinzel", fontWeight: "700", fill: "#38bdf8", letterSpacing: 4 }),
            el("p145-s5-title", "text", 200, 270, 1520, 130, { text: "The Pinnacle of Ocean Sovereignity.", fontSize: 64, fontFamily: "Cinzel", fontWeight: "900", fill: "#ffffff" }),
            el("p145-s5-p", "text", 200, 430, 1200, 90, { text: "Delivery slots available for 2028/2029 completion at our Vlissingen shipyard. Private naval architect consultations available during Monaco Yacht Show.", fontSize: 22, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.7 }),
            el("p145-s5-mail", "text", 200, 580, 700, 40, { text: "brokerage@solaris-superyachts.mc", fontSize: 28, fontFamily: "Cinzel", fontWeight: "700", fill: "#38bdf8" }),
            el("p145-s5-loc", "text", 200, 660, 700, 40, { text: "Quai Antoine 1er · 98000 Monaco // Shipyards: Vlissingen, Netherlands", fontSize: 18, fontFamily: "Inter", fill: "#cbd5e1" }),
            el("p145-s5-foot", "text", 200, 850, 1520, 30, { text: "© 2026 SOLARIS YACHTS INTERNATIONAL. ALL RIGHTS RESERVED. CONFIDENTIAL.", fontSize: 13, fontFamily: "Cinzel", fill: "#64748b", letterSpacing: 2 })
          ]
        }
      ]
    },

    // 146: Urban Vertical Farming & AgTech Future (5 slides)
    {
      id: 146,
      name: "Urban Vertical Farming & AgTech Future",
      title: "AEROVERDE AGTECH // INDOOR HYDROPONIC INFRASTRUCTURE",
      description: "Lush botanical green and charcoal presentation featuring vertical hydroponics telemetry, crop yield charts, and zero-pesticide urban food systems.",
      category: "Presentation",
      subcategory: "Agriculture",
      size: "1920×1080",
      canvasWidth: 1920,
      canvasHeight: 1080,
      orientation: "landscape",
      tags: ["AgTech", "Farming", "Sustainability", "Hydroponics", "Urban"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 4670,
      views: 36200,
      gradient: "linear-gradient(135deg, #052e16 0%, #16a34a 100%)",
      fonts: ["Plus Jakarta Sans", "Inter"],
      colors: ["#f0fdf4", "#052e16", "#16a34a", "#15803d"],
      slides: [
        {
          id: "p146-s1",
          name: "Cover",
          elements: [
            el("p146-s1-bg", "rect", 0, 0, 1920, 1080, { fill: "#f0fdf4", locked: true }),
            el("p146-s1-img", "image", 960, 0, 960, 1080, { src: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1200" }),
            el("p146-s1-tag", "text", 120, 140, 760, 32, { text: "AEROVERDE AGTECH // SERIES B EXPANSION", fontSize: 15, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#16a34a", letterSpacing: 4 }),
            el("p146-s1-title", "text", 120, 240, 760, 240, { text: "VERTICAL\nFARMING", fontSize: 96, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#052e16", lineHeight: 0.95 }),
            el("p146-s1-sub", "text", 120, 520, 740, 120, { text: "Automated aeroponic towers producing 350x the yield per acre with 98% less water, zero pesticides, and zero food miles.", fontSize: 22, fontFamily: "Inter", fill: "#15803d", lineHeight: 1.7 }),
            el("p146-s1-foot", "text", 120, 900, 740, 30, { text: "INVESTOR BRIEFING // AMSTERDAM · SINGAPORE · NEW YORK", fontSize: 13, fontFamily: "Plus Jakarta Sans", fill: "#16a34a", letterSpacing: 2 })
          ]
        },
        {
          id: "p146-s2",
          name: "Technology Metrics",
          elements: [
            el("p146-s2-bg", "rect", 0, 0, 1920, 1080, { fill: "#f0fdf4", locked: true }),
            el("p146-s2-tag", "text", 120, 100, 1680, 32, { text: "RESOURCE EFFICIENCY", fontSize: 15, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#16a34a", letterSpacing: 3 }),
            el("p146-s2-title", "text", 120, 150, 1680, 70, { text: "Empirical Environmental Advantages", fontSize: 48, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#052e16" }),
            el("p146-s2-m1", "rect", 120, 260, 380, 280, { fill: "#dcfce7", borderRadius: 16, stroke: "rgba(22,163,74,0.2)", strokeWidth: 1 }),
            el("p146-s2-m1-v", "text", 160, 300, 300, 70, { text: "98%", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#16a34a" }),
            el("p146-s2-m1-l", "text", 160, 390, 300, 110, { text: "Less freshwater consumed compared to conventional open-field agriculture", fontSize: 17, fontFamily: "Inter", fill: "#15803d", lineHeight: 1.5 }),
            el("p146-s2-m2", "rect", 560, 260, 380, 280, { fill: "#dcfce7", borderRadius: 16, stroke: "rgba(22,163,74,0.2)", strokeWidth: 1 }),
            el("p146-s2-m2-v", "text", 600, 300, 300, 70, { text: "350x", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#16a34a" }),
            el("p146-s2-m2-l", "text", 600, 390, 300, 110, { text: "Annual leafy green crop yield per square foot of urban building footprint", fontSize: 17, fontFamily: "Inter", fill: "#15803d", lineHeight: 1.5 }),
            el("p146-s2-m3", "rect", 1000, 260, 380, 280, { fill: "#dcfce7", borderRadius: 16, stroke: "rgba(22,163,74,0.2)", strokeWidth: 1 }),
            el("p146-s2-m3-v", "text", 1040, 300, 300, 70, { text: "0.00", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#16a34a" }),
            el("p146-s2-m3-l", "text", 1040, 390, 300, 110, { text: "Chemical synthetic pesticides, herbicides, or fungicides applied", fontSize: 17, fontFamily: "Inter", fill: "#15803d", lineHeight: 1.5 }),
            el("p146-s2-m4", "rect", 1440, 260, 360, 280, { fill: "#dcfce7", borderRadius: 16, stroke: "rgba(22,163,74,0.2)", strokeWidth: 1 }),
            el("p146-s2-m4-v", "text", 1480, 300, 300, 70, { text: "24 Hrs", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#16a34a" }),
            el("p146-s2-m4-l", "text", 1480, 390, 300, 110, { text: "Harvest-to-supermarket delivery turnaround inside major metro centers", fontSize: 17, fontFamily: "Inter", fill: "#15803d", lineHeight: 1.5 })
          ]
        },
        {
          id: "p146-s3",
          name: "Spectral Growth Algorithms",
          elements: [
            el("p146-s3-bg", "rect", 0, 0, 1920, 1080, { fill: "#f0fdf4", locked: true }),
            el("p146-s3-tag", "text", 120, 100, 1680, 32, { text: "AI CLIMATE OPTIMIZATION", fontSize: 15, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#16a34a", letterSpacing: 3 }),
            el("p146-s3-title", "text", 120, 150, 1680, 70, { text: "Dynamic LED Recipe Engine", fontSize: 48, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#052e16" }),
            el("p146-s3-c1", "rect", 120, 260, 800, 640, { fill: "#dcfce7", borderRadius: 16 }),
            el("p146-s3-c1-t", "text", 160, 300, 720, 40, { text: "Precision Micro-Climate Pods", fontSize: 26, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#15803d" }),
            el("p146-s3-c1-p", "text", 160, 360, 720, 480, { text: "Computer vision sensors scan leaf chlorophyll saturation every 15 minutes, dynamically adjusting humidity, CO2 levels, and liquid nutrient pH across 48 distinct cultivation zones simultaneously.", fontSize: 18, fontFamily: "Inter", fill: "#166534", lineHeight: 1.8 }),
            el("p146-s3-c2", "rect", 960, 260, 840, 640, { fill: "#dcfce7", borderRadius: 16 }),
            el("p146-s3-c2-t", "text", 1000, 300, 760, 40, { text: "Automated Robotic Harvesting", fontSize: 26, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#15803d" }),
            el("p146-s3-c2-p", "text", 1000, 360, 760, 480, { text: "Laser-guided robotic end-effectors gently harvest, trim, and package baby greens and strawberries in sterile ISO Class 7 cleanrooms, eliminating all human pathogen contamination risks.", fontSize: 18, fontFamily: "Inter", fill: "#166534", lineHeight: 1.8 })
          ]
        },
        {
          id: "p146-s4",
          name: "Commercial Unit Economics",
          elements: [
            el("p146-s4-bg", "rect", 0, 0, 1920, 1080, { fill: "#f0fdf4", locked: true }),
            el("p146-s4-tag", "text", 120, 100, 1680, 32, { text: "FINANCIAL METRICS", fontSize: 15, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#16a34a", letterSpacing: 3 }),
            el("p146-s4-title", "text", 120, 150, 1680, 70, { text: "Modular Facility Payback Under 3.2 Years", fontSize: 48, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#052e16" }),
            el("p146-s4-m1", "rect", 120, 260, 380, 280, { fill: "#dcfce7", borderRadius: 16 }),
            el("p146-s4-m1-v", "text", 160, 300, 300, 70, { text: "58%", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#16a34a" }),
            el("p146-s4-m1-l", "text", 160, 390, 300, 110, { text: "Gross Margin delivered on retail fresh basil and gourmet salad blends", fontSize: 17, fontFamily: "Inter", fill: "#15803d", lineHeight: 1.5 }),
            el("p146-s4-m2", "rect", 560, 260, 380, 280, { fill: "#dcfce7", borderRadius: 16 }),
            el("p146-s4-m2-v", "text", 600, 300, 300, 70, { text: "$14.2M", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#16a34a" }),
            el("p146-s4-m2-l", "text", 600, 390, 300, 110, { text: "Contracted annual supermarket offtake revenue across 180 grocery stores", fontSize: 17, fontFamily: "Inter", fill: "#15803d", lineHeight: 1.5 }),
            el("p146-s4-m3", "rect", 1000, 260, 380, 280, { fill: "#dcfce7", borderRadius: 16 }),
            el("p146-s4-m3-v", "text", 1040, 300, 300, 70, { text: "18 Days", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#16a34a" }),
            el("p146-s4-m3-l", "text", 1040, 390, 300, 110, { text: "Average seed-to-harvest crop cycle time for heirloom butterhead lettuce", fontSize: 17, fontFamily: "Inter", fill: "#15803d", lineHeight: 1.5 }),
            el("p146-s4-m4", "rect", 1440, 260, 360, 280, { fill: "#dcfce7", borderRadius: 16 }),
            el("p146-s4-m4-v", "text", 1480, 300, 300, 70, { text: "6", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#16a34a" }),
            el("p146-s4-m4-l", "text", 1480, 390, 300, 110, { text: "Commercial megacity vertical farming facilities currently in construction", fontSize: 17, fontFamily: "Inter", fill: "#15803d", lineHeight: 1.5 })
          ]
        },
        {
          id: "p146-s5",
          name: "Expansion & Contact",
          elements: [
            el("p146-s5-bg", "rect", 0, 0, 1920, 1080, { fill: "#052e16", locked: true }),
            el("p146-s5-card", "rect", 120, 120, 1680, 840, { fill: "#14532d", stroke: "rgba(22,163,74,0.4)", strokeWidth: 2, borderRadius: 20 }),
            el("p146-s5-tag", "text", 200, 200, 1520, 32, { text: "AEROVERDE AGTECH CAPITAL PARTNERSHIP", fontSize: 15, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#4ade80", letterSpacing: 4 }),
            el("p146-s5-title", "text", 200, 270, 1520, 130, { text: "Nourishing Sustainable Mega-Cities.", fontSize: 64, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#ffffff" }),
            el("p146-s5-p", "text", 200, 430, 1200, 90, { text: "Deploying 12 new modular vertical production facilities across North America and Western Europe. Join our Series B funding syndicate.", fontSize: 22, fontFamily: "Inter", fill: "#bbf7d0", lineHeight: 1.7 }),
            el("p146-s5-mail", "text", 200, 580, 700, 40, { text: "capital@aeroverde-agtech.com", fontSize: 28, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#4ade80" }),
            el("p146-s5-loc", "text", 200, 660, 700, 40, { text: "AeroVerde R&D Greenhouse · Science Park 402 · 1098 XH Amsterdam", fontSize: 18, fontFamily: "Inter", fill: "#dcfce7" }),
            el("p146-s5-foot", "text", 200, 850, 1520, 30, { text: "© 2026 AEROVERDE AGTECH B.V. ALL RIGHTS RESERVED.", fontSize: 13, fontFamily: "Plus Jakarta Sans", fill: "#86efac", letterSpacing: 2 })
          ]
        }
      ]
    },

    // 147: Artificial Intelligence Ethics & Governance (5 slides)
    {
      id: 147,
      name: "Artificial Intelligence Ethics & Governance",
      title: "AI GOVERNANCE FORUM // FRONTIER MODEL SAFETY PROTOCOLS",
      description: "High-contrast slate monochrome presentation with algorithmic alignment criteria, safety evaluations, and red-teaming benchmarks.",
      category: "Presentation",
      subcategory: "Technology",
      size: "1920×1080",
      canvasWidth: 1920,
      canvasHeight: 1080,
      orientation: "landscape",
      tags: ["AI", "Ethics", "Governance", "Safety", "MachineLearning"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 5120,
      views: 39900,
      gradient: "linear-gradient(135deg, #0f172a 0%, #475569 100%)",
      fonts: ["Space Grotesk", "Inter"],
      colors: ["#0f172a", "#38bdf8", "#ffffff", "#94a3b8"],
      slides: [
        {
          id: "p147-s1",
          name: "Cover",
          elements: [
            el("p147-s1-bg", "rect", 0, 0, 1920, 1080, { fill: "#0f172a", locked: true }),
            el("p147-s1-img", "image", 960, 0, 960, 1080, { src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200" }),
            el("p147-s1-tag", "text", 120, 140, 760, 32, { text: "GLOBAL AI SAFETY CONSORTIUM // WHITE PAPER 2026", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#38bdf8", letterSpacing: 4 }),
            el("p147-s1-title", "text", 120, 240, 760, 240, { text: "FRONTIER\nALIGNMENT", fontSize: 96, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#ffffff", lineHeight: 0.95 }),
            el("p147-s1-sub", "text", 120, 520, 740, 120, { text: "Mechanistic interpretability, constitutional training guardrails, and autonomous red-teaming evaluations for frontier models.", fontSize: 22, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.7 }),
            el("p147-s1-foot", "text", 120, 900, 740, 30, { text: "OXFORD FUTURE OF HUMANITY INSTITUTE // POLICY DOSSIER", fontSize: 13, fontFamily: "Space Grotesk", fill: "#64748b", letterSpacing: 2 })
          ]
        },
        {
          id: "p147-s2",
          name: "Safety Pillars",
          elements: [
            el("p147-s2-bg", "rect", 0, 0, 1920, 1080, { fill: "#0f172a", locked: true }),
            el("p147-s2-tag", "text", 120, 100, 1680, 32, { text: "ALIGNMENT FRAMEWORK", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#38bdf8", letterSpacing: 3 }),
            el("p147-s2-title", "text", 120, 150, 1680, 70, { text: "Three Pillars of Frontier Verification", fontSize: 48, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
            el("p147-s2-c1", "rect", 120, 260, 520, 640, { fill: "#1e293b", borderRadius: 12, stroke: "rgba(56,189,248,0.2)", strokeWidth: 1 }),
            el("p147-s2-c1-t", "text", 160, 300, 440, 40, { text: "01 // CIRCUIT INTERPRETABILITY", fontSize: 22, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#38bdf8" }),
            el("p147-s2-c1-p", "text", 160, 360, 440, 480, { text: "Decomposing latent activation spaces through sparse autoencoders into human-auditable features, detecting deceptive alignment prior to deployment.", fontSize: 18, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.7 }),
            el("p147-s2-c2", "rect", 700, 260, 520, 640, { fill: "#1e293b", borderRadius: 12, stroke: "rgba(56,189,248,0.2)", strokeWidth: 1 }),
            el("p147-s2-c2-t", "text", 740, 300, 440, 40, { text: "02 // ADVERSARIAL RED TEAMING", fontSize: 22, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#38bdf8" }),
            el("p147-s2-c2-p", "text", 740, 360, 440, 480, { text: "Automated reinforcement learning agents probing models across 100,000+ jailbreak vectors covering CBRN, cyber offense, and social manipulation.", fontSize: 18, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.7 }),
            el("p147-s2-c3", "rect", 1280, 260, 520, 640, { fill: "#1e293b", borderRadius: 12, stroke: "rgba(56,189,248,0.2)", strokeWidth: 1 }),
            el("p147-s2-c3-t", "text", 1320, 300, 440, 40, { text: "03 // SANDBOXED CONTAINMENT", fontSize: 22, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#38bdf8" }),
            el("p147-s2-c3-p", "text", 1320, 360, 440, 480, { text: "Hardware-enforced confidential computing enclaves with strict bandwidth throttles preventing unmonitored self-replication or external network breakout.", fontSize: 18, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.7 })
          ]
        },
        {
          id: "p147-s3",
          name: "Auditing Benchmarks",
          elements: [
            el("p147-s3-bg", "rect", 0, 0, 1920, 1080, { fill: "#0f172a", locked: true }),
            el("p147-s3-tag", "text", 120, 100, 1680, 32, { text: "EVALUATION METRICS", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#38bdf8", letterSpacing: 3 }),
            el("p147-s3-title", "text", 120, 150, 1680, 70, { text: "Empirical Safety Scorecards", fontSize: 48, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
            el("p147-s3-m1", "rect", 120, 260, 380, 280, { fill: "#1e293b", borderRadius: 12 }),
            el("p147-s3-m1-v", "text", 160, 300, 300, 70, { text: "0.001%", fontSize: 48, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#38bdf8" }),
            el("p147-s3-m1-l", "text", 160, 390, 300, 110, { text: "Unprompted autonomous harmful capability execution rate", fontSize: 17, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.5 }),
            el("p147-s3-m2", "rect", 560, 260, 380, 280, { fill: "#1e293b", borderRadius: 12 }),
            el("p147-s3-m2-v", "text", 600, 300, 300, 70, { text: "99.8%", fontSize: 48, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#38bdf8" }),
            el("p147-s3-m2-l", "text", 600, 390, 300, 110, { text: "Constitutional guardrail adherence across multi-turn prompt injections", fontSize: 17, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.5 }),
            el("p147-s3-m3", "rect", 1000, 260, 380, 280, { fill: "#1e293b", borderRadius: 12 }),
            el("p147-s3-m3-v", "text", 1040, 300, 300, 70, { text: "10,000+", fontSize: 48, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#38bdf8" }),
            el("p147-s3-m3-l", "text", 1040, 390, 300, 110, { text: "Interpretable monosemantic feature dictionary neurons mapped", fontSize: 17, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.5 }),
            el("p147-s3-m4", "rect", 1440, 260, 360, 280, { fill: "#1e293b", borderRadius: 12 }),
            el("p147-s3-m4-v", "text", 1480, 300, 300, 70, { text: "12", fontSize: 48, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#38bdf8" }),
            el("p147-s3-m4-l", "text", 1480, 390, 300, 110, { text: "Global national AI safety institutes participating in federated testing", fontSize: 17, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.5 })
          ]
        },
        {
          id: "p147-s4",
          name: "Governance Framework",
          elements: [
            el("p147-s4-bg", "rect", 0, 0, 1920, 1080, { fill: "#0f172a", locked: true }),
            el("p147-s4-tag", "text", 120, 100, 1680, 32, { text: "REGULATORY HARMONIZATION", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#38bdf8", letterSpacing: 3 }),
            el("p147-s4-title", "text", 120, 150, 1680, 70, { text: "Tiered Compute Thresholds & Licensing", fontSize: 48, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ffffff" }),
            el("p147-s4-c1", "rect", 120, 260, 800, 640, { fill: "#1e293b", borderRadius: 12 }),
            el("p147-s4-c1-t", "text", 160, 300, 720, 40, { text: "Compute Cluster Know-Your-Customer (KYC)", fontSize: 26, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#38bdf8" }),
            el("p147-s4-c1-p", "text", 160, 360, 720, 480, { text: "Mandating cryptographic verification for GPU cluster leases exceeding 10^26 FLOPs training runs, preventing unsanctioned cyber-weapons development while fostering open academic research.", fontSize: 18, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.8 }),
            el("p147-s4-c2", "rect", 960, 260, 840, 640, { fill: "#1e293b", borderRadius: 12 }),
            el("p147-s4-c2-t", "text", 1000, 300, 760, 40, { text: "Third-Party Pre-Deployment Audits", fontSize: 26, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#38bdf8" }),
            el("p147-s4-c2-p", "text", 1000, 360, 760, 480, { text: "Independent scientific red teams must review dual-use biological and cyber capabilities 60 days prior to model weight releases, establishing an international safety certification registry.", fontSize: 18, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.8 })
          ]
        },
        {
          id: "p147-s5",
          name: "Policy Roadmap",
          elements: [
            el("p147-s5-bg", "rect", 0, 0, 1920, 1080, { fill: "#0f172a", locked: true }),
            el("p147-s5-card", "rect", 120, 120, 1680, 840, { fill: "#1e293b", stroke: "rgba(56,189,248,0.4)", strokeWidth: 2, borderRadius: 20 }),
            el("p147-s5-tag", "text", 200, 200, 1520, 32, { text: "GLOBAL AI SAFETY SUMMIT POLICY INITIATIVE", fontSize: 15, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#38bdf8", letterSpacing: 4 }),
            el("p147-s5-title", "text", 200, 270, 1520, 130, { text: "Ensuring Artificial Intelligence Benefits All Humankind.", fontSize: 64, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#ffffff" }),
            el("p147-s5-p", "text", 200, 430, 1200, 90, { text: "Access full model evaluation suites, red-teaming benchmark datasets, and international regulatory alignment protocols.", fontSize: 22, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.7 }),
            el("p147-s5-mail", "text", 200, 580, 700, 40, { text: "governance@aisafetyconsortium.org", fontSize: 28, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#38bdf8" }),
            el("p147-s5-loc", "text", 200, 660, 700, 40, { text: "AI Safety Institute · Bletchley Park & Washington DC", fontSize: 18, fontFamily: "Inter", fill: "#cbd5e1" }),
            el("p147-s5-foot", "text", 200, 850, 1520, 30, { text: "© 2026 GLOBAL AI SAFETY CONSORTIUM. OPEN ACCESS CREATIVE COMMONS ATTRIBUTION.", fontSize: 13, fontFamily: "Space Grotesk", fill: "#64748b", letterSpacing: 2 })
          ]
        }
      ]
    },

    // 148: Vintage Jazz & Symphony Festival Deck (5 slides)
    {
      id: 148,
      name: "Vintage Jazz & Symphony Festival Deck",
      title: "MONTREUX JAZZ FESTIVAL // 60TH ANNIVERSARY CELEBRATION",
      description: "Warm sepia, brass gold, and moody velvet black festival presentation showcasing jazz history, headliner lineups, and acoustic venue architecture.",
      category: "Presentation",
      subcategory: "Music",
      size: "1920×1080",
      canvasWidth: 1920,
      canvasHeight: 1080,
      orientation: "landscape",
      tags: ["Jazz", "Music", "Festival", "Vintage", "Acoustics"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 4320,
      views: 34500,
      gradient: "linear-gradient(135deg, #1c1917 0%, #d97706 100%)",
      fonts: ["Playfair Display", "Inter"],
      colors: ["#1c1917", "#d97706", "#ffffff", "#fed7aa"],
      slides: [
        {
          id: "p148-s1",
          name: "Cover",
          elements: [
            el("p148-s1-bg", "rect", 0, 0, 1920, 1080, { fill: "#1c1917", locked: true }),
            el("p148-s1-img", "image", 960, 0, 960, 1080, { src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=1200" }),
            el("p148-s1-tag", "text", 120, 140, 760, 32, { text: "60TH ANNIVERSARY DIAMOND JUBILEE", fontSize: 15, fontFamily: "Playfair Display", fontWeight: "700", fill: "#d97706", letterSpacing: 4 }),
            el("p148-s1-title", "text", 120, 240, 760, 240, { text: "MONTREUX\nJAZZ 2026", fontSize: 96, fontFamily: "Playfair Display", fontWeight: "900", fill: "#ffffff", lineHeight: 0.95 }),
            el("p148-s1-sub", "text", 120, 520, 740, 120, { text: "Sixteen days of legendary acoustic improvisation on the shores of Lake Geneva. Celebrating sixty years of musical heritage.", fontSize: 22, fontFamily: "Inter", fill: "#fed7aa", lineHeight: 1.7 }),
            el("p148-s1-foot", "text", 120, 900, 740, 30, { text: "AUDITORIUM STRAVINSKI // MONTREUX, SWITZERLAND", fontSize: 13, fontFamily: "Playfair Display", fill: "#f59e0b", letterSpacing: 2 })
          ]
        },
        {
          id: "p148-s2",
          name: "Lineup & Venues",
          elements: [
            el("p148-s2-bg", "rect", 0, 0, 1920, 1080, { fill: "#1c1917", locked: true }),
            el("p148-s2-tag", "text", 120, 100, 1680, 32, { text: "HISTORIC PROGRAMME", fontSize: 15, fontFamily: "Playfair Display", fontWeight: "700", fill: "#d97706", letterSpacing: 4 }),
            el("p148-s2-title", "text", 120, 150, 1680, 70, { text: "Acoustic Venues & Master Stages", fontSize: 48, fontFamily: "Playfair Display", fontWeight: "800", fill: "#ffffff" }),
            el("p148-s2-c1", "rect", 120, 260, 520, 640, { fill: "#292524", borderRadius: 8, stroke: "rgba(217,119,6,0.3)", strokeWidth: 1 }),
            el("p148-s2-c1-t", "text", 160, 300, 440, 40, { text: "AUDITORIUM STRAVINSKI", fontSize: 22, fontFamily: "Playfair Display", fontWeight: "800", fill: "#d97706" }),
            el("p148-s2-c1-p", "text", 160, 360, 440, 480, { text: "4,000-seat legendary hall host to Miles Davis, Nina Simone, and Keith Jarrett. Meyer Sound Constellation acoustic architecture providing pristine resonance.", fontSize: 18, fontFamily: "Inter", fill: "#fed7aa", lineHeight: 1.7 }),
            el("p148-s2-c2", "rect", 700, 260, 520, 640, { fill: "#292524", borderRadius: 8, stroke: "rgba(217,119,6,0.3)", strokeWidth: 1 }),
            el("p148-s2-c2-t", "text", 740, 300, 440, 40, { text: "MONTREUX JAZZ CLUB", fontSize: 22, fontFamily: "Playfair Display", fontWeight: "800", fill: "#d97706" }),
            el("p148-s2-c2-p", "text", 740, 360, 440, 480, { text: "Intimate 350-seat speakeasy dedicated to late-night jam sessions, virtuosic piano trios, and rare vintage vinyl auditions until sunrise.", fontSize: 18, fontFamily: "Inter", fill: "#fed7aa", lineHeight: 1.7 }),
            el("p148-s2-c3", "rect", 1280, 260, 520, 640, { fill: "#292524", borderRadius: 8, stroke: "rgba(217,119,6,0.3)", strokeWidth: 1 }),
            el("p148-s2-c3-t", "text", 1320, 300, 440, 40, { text: "LAKE STAGE // QUAI NOISIER", fontSize: 22, fontFamily: "Playfair Display", fontWeight: "800", fill: "#d97706" }),
            el("p148-s2-c3-p", "text", 1320, 360, 440, 480, { text: "Floating open-air stage on Lake Geneva framed by the snow-capped Dents du Midi mountains. Open to the general public for sunset big band spectacles.", fontSize: 18, fontFamily: "Inter", fill: "#fed7aa", lineHeight: 1.7 })
          ]
        },
        {
          id: "p148-s3",
          name: "Heritage Archive",
          elements: [
            el("p148-s3-bg", "rect", 0, 0, 1920, 1080, { fill: "#1c1917", locked: true }),
            el("p148-s3-tag", "text", 120, 100, 1680, 32, { text: "UNESCO MEMORY OF THE WORLD", fontSize: 15, fontFamily: "Playfair Display", fontWeight: "700", fill: "#d97706", letterSpacing: 4 }),
            el("p148-s3-title", "text", 120, 150, 1680, 70, { text: "5,000 Hours of Pristine Audiovisual History", fontSize: 48, fontFamily: "Playfair Display", fontWeight: "800", fill: "#ffffff" }),
            el("p148-s3-m1", "rect", 120, 260, 380, 280, { fill: "#292524", borderRadius: 8 }),
            el("p148-s3-m1-v", "text", 160, 300, 300, 70, { text: "1967", fontSize: 52, fontFamily: "Playfair Display", fontWeight: "900", fill: "#d97706" }),
            el("p148-s3-m1-l", "text", 160, 390, 300, 110, { text: "Inaugural festival founded by Claude Nobs and Nesuhi Ertegun", fontSize: 17, fontFamily: "Inter", fill: "#fed7aa", lineHeight: 1.5 }),
            el("p148-s3-m2", "rect", 560, 260, 380, 280, { fill: "#292524", borderRadius: 8 }),
            el("p148-s3-m2-v", "text", 600, 300, 300, 70, { text: "250,000", fontSize: 52, fontFamily: "Playfair Display", fontWeight: "900", fill: "#d97706" }),
            el("p148-s3-m2-l", "text", 600, 390, 300, 110, { text: "Annual international music lovers attending the 16-day celebration", fontSize: 17, fontFamily: "Inter", fill: "#fed7aa", lineHeight: 1.5 }),
            el("p148-s3-m3", "rect", 1000, 260, 380, 280, { fill: "#292524", borderRadius: 8 }),
            el("p148-s3-m3-v", "text", 1040, 300, 300, 70, { text: "100%", fontSize: 52, fontFamily: "Playfair Display", fontWeight: "900", fill: "#d97706" }),
            el("p148-s3-m3-l", "text", 1040, 390, 300, 110, { text: "Concerts digitally remastered in uncompressed 24-bit/192kHz audio", fontSize: 17, fontFamily: "Inter", fill: "#fed7aa", lineHeight: 1.5 }),
            el("p148-s3-m4", "rect", 1440, 260, 360, 280, { fill: "#292524", borderRadius: 8 }),
            el("p148-s3-m4-v", "text", 1480, 300, 300, 70, { text: "380+", fontSize: 52, fontFamily: "Playfair Display", fontWeight: "900", fill: "#d97706" }),
            el("p148-s3-m4-l", "text", 1480, 390, 300, 110, { text: "Free concerts and workshops across Lake Geneva promenades", fontSize: 17, fontFamily: "Inter", fill: "#fed7aa", lineHeight: 1.5 })
          ]
        },
        {
          id: "p148-s4",
          name: "Hospitality Packages",
          elements: [
            el("p148-s4-bg", "rect", 0, 0, 1920, 1080, { fill: "#1c1917", locked: true }),
            el("p148-s4-tag", "text", 120, 100, 1680, 32, { text: "VIP PATRONAGE", fontSize: 15, fontFamily: "Playfair Display", fontWeight: "700", fill: "#d97706", letterSpacing: 4 }),
            el("p148-s4-title", "text", 120, 150, 1680, 70, { text: "The Claude Nobs Private Lounge Experience", fontSize: 48, fontFamily: "Playfair Display", fontWeight: "800", fill: "#ffffff" }),
            el("p148-s4-c1", "rect", 120, 260, 800, 640, { fill: "#292524", borderRadius: 8 }),
            el("p148-s4-c1-t", "text", 160, 300, 720, 40, { text: "Backstage Access & Gourmet Dining", fontSize: 26, fontFamily: "Playfair Display", fontWeight: "800", fill: "#d97706" }),
            el("p148-s4-c1-p", "text", 160, 360, 720, 480, { text: "Enjoy multi-course Michelin-starred Swiss dining paired with Grand Cru Vaudois vintages, direct backstage artist salon access, and reserved premium center-orchestra seating for every headline performance.", fontSize: 18, fontFamily: "Inter", fill: "#fed7aa", lineHeight: 1.8 }),
            el("p148-s4-c2", "rect", 960, 260, 840, 640, { fill: "#292524", borderRadius: 8 }),
            el("p148-s4-c2-t", "text", 1000, 300, 760, 40, { text: "Lake Geneva Private Catamaran Charters", fontSize: 26, fontFamily: "Playfair Display", fontWeight: "800", fill: "#d97706" }),
            el("p148-s4-c2-p", "text", 1000, 360, 760, 480, { text: "Pre-concert sunset champagne cruises departing from the Fairmont Le Montreux Palace private jetty directly to the Auditorium Stravinski VIP entrance.", fontSize: 18, fontFamily: "Inter", fill: "#fed7aa", lineHeight: 1.8 })
          ]
        },
        {
          id: "p148-s5",
          name: "Sponsorship & Contact",
          elements: [
            el("p148-s5-bg", "rect", 0, 0, 1920, 1080, { fill: "#1c1917", locked: true }),
            el("p148-s5-card", "rect", 120, 120, 1680, 840, { fill: "#292524", stroke: "rgba(217,119,6,0.4)", strokeWidth: 2, borderRadius: 16 }),
            el("p148-s5-tag", "text", 200, 200, 1520, 32, { text: "FONDATION DU FESTIVAL DE JAZZ DE MONTREUX", fontSize: 15, fontFamily: "Playfair Display", fontWeight: "700", fill: "#d97706", letterSpacing: 4 }),
            el("p148-s5-title", "text", 200, 270, 1520, 130, { text: "Where Music Enters History.", fontSize: 64, fontFamily: "Playfair Display", fontWeight: "900", fill: "#ffffff" }),
            el("p148-s5-p", "text", 200, 430, 1200, 90, { text: "For VIP hospitality lodges, global corporate sponsorship packages, and UNESCO Memory of the World audiovisual archive licensing.", fontSize: 22, fontFamily: "Inter", fill: "#fed7aa", lineHeight: 1.7 }),
            el("p148-s5-mail", "text", 200, 580, 700, 40, { text: "hospitality@montreuxjazz.com", fontSize: 28, fontFamily: "Playfair Display", fontWeight: "700", fill: "#d97706" }),
            el("p148-s5-loc", "text", 200, 660, 700, 40, { text: "2m2c Montreux Music & Convention Centre · 1820 Montreux, Switzerland", fontSize: 18, fontFamily: "Inter", fill: "#fef3c7" }),
            el("p148-s5-foot", "text", 200, 850, 1520, 30, { text: "© 2026 MONTREUX JAZZ FESTIVAL FOUNDATION. ALL RIGHTS RESERVED.", fontSize: 13, fontFamily: "Playfair Display", fill: "#d97706", letterSpacing: 2 })
          ]
        }
      ]
    },

    // 149: Hyper-Growth SaaS Series B Pitch Deck (5 slides)
    {
      id: 149,
      name: "Hyper-Growth SaaS Series B Pitch Deck",
      title: "CLOUDSCALE AI // SERIES B $45M INVESTMENT DECK",
      description: "Electric violet, deep indigo, and metric card presentation highlighting ARR expansion, NRR benchmarks, and enterprise sales efficiency.",
      category: "Presentation",
      subcategory: "SaaS",
      size: "1920×1080",
      canvasWidth: 1920,
      canvasHeight: 1080,
      orientation: "landscape",
      tags: ["SaaS", "PitchDeck", "SeriesB", "Metrics", "Startup"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 6780,
      views: 51200,
      gradient: "linear-gradient(135deg, #1e1b4b 0%, #7c3aed 100%)",
      fonts: ["Plus Jakarta Sans", "Inter"],
      colors: ["#0f0d24", "#a855f7", "#ffffff", "#c084fc"],
      slides: [
        {
          id: "p149-s1",
          name: "Cover",
          elements: [
            el("p149-s1-bg", "rect", 0, 0, 1920, 1080, { fill: "#0f0d24", locked: true }),
            el("p149-s1-img", "image", 960, 0, 960, 1080, { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" }),
            el("p149-s1-tag", "text", 120, 140, 760, 32, { text: "SERIES B FINANCING // $45,000,000 ROUND", fontSize: 15, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#a855f7", letterSpacing: 4 }),
            el("p149-s1-title", "text", 120, 240, 760, 240, { text: "CLOUDSCALE\nAI PLATFORM", fontSize: 96, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#ffffff", lineHeight: 0.95 }),
            el("p149-s1-sub", "text", 120, 520, 740, 120, { text: "Autonomous cloud infrastructure cost optimization engine saving Fortune 500 enterprises an average of 42% on AWS & GCP compute.", fontSize: 22, fontFamily: "Inter", fill: "#c084fc", lineHeight: 1.7 }),
            el("p149-s1-foot", "text", 120, 900, 740, 30, { text: "SAN FRANCISCO · NEW YORK · LONDON // STRICTLY CONFIDENTIAL", fontSize: 13, fontFamily: "Plus Jakarta Sans", fill: "#a855f7", letterSpacing: 2 })
          ]
        },
        {
          id: "p149-s2",
          name: "Traction Metrics",
          elements: [
            el("p149-s2-bg", "rect", 0, 0, 1920, 1080, { fill: "#0f0d24", locked: true }),
            el("p149-s2-tag", "text", 120, 100, 1680, 32, { text: "SERIES B CORE METRICS", fontSize: 15, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#a855f7", letterSpacing: 3 }),
            el("p149-s2-title", "text", 120, 150, 1680, 70, { text: "Hyper-Growth Execution at Scale", fontSize: 48, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#ffffff" }),
            el("p149-s2-m1", "rect", 120, 260, 380, 280, { fill: "#1e1b4b", borderRadius: 16, stroke: "rgba(168,85,247,0.3)", strokeWidth: 1 }),
            el("p149-s2-m1-v", "text", 160, 300, 300, 70, { text: "$24.2M", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#a855f7" }),
            el("p149-s2-m1-l", "text", 160, 390, 300, 110, { text: "Current Ending ARR growing at 285% YoY run-rate", fontSize: 17, fontFamily: "Inter", fill: "#c084fc", lineHeight: 1.5 }),
            el("p149-s2-m2", "rect", 560, 260, 380, 280, { fill: "#1e1b4b", borderRadius: 16, stroke: "rgba(168,85,247,0.3)", strokeWidth: 1 }),
            el("p149-s2-m2-v", "text", 600, 300, 300, 70, { text: "148%", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#a855f7" }),
            el("p149-s2-m2-l", "text", 600, 390, 300, 110, { text: "Net Revenue Retention (NRR) driven by organic compute expansion", fontSize: 17, fontFamily: "Inter", fill: "#c084fc", lineHeight: 1.5 }),
            el("p149-s2-m3", "rect", 1000, 260, 380, 280, { fill: "#1e1b4b", borderRadius: 16, stroke: "rgba(168,85,247,0.3)", strokeWidth: 1 }),
            el("p149-s2-m3-v", "text", 1040, 300, 300, 70, { text: "8.4x", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#a855f7" }),
            el("p149-s2-m3-l", "text", 1040, 390, 300, 110, { text: "LTV / CAC efficiency ratio with 4-month customer payback period", fontSize: 17, fontFamily: "Inter", fill: "#c084fc", lineHeight: 1.5 }),
            el("p149-s2-m4", "rect", 1440, 260, 360, 280, { fill: "#1e1b4b", borderRadius: 16, stroke: "rgba(168,85,247,0.3)", strokeWidth: 1 }),
            el("p149-s2-m4-v", "text", 1480, 300, 300, 70, { text: "84%", fontSize: 52, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#a855f7" }),
            el("p149-s2-m4-l", "text", 1480, 390, 300, 110, { text: "Gross Profit Margin across multi-cloud automated agents", fontSize: 17, fontFamily: "Inter", fill: "#c084fc", lineHeight: 1.5 })
          ]
        },
        {
          id: "p149-s3",
          name: "Autonomous Engine",
          elements: [
            el("p149-s3-bg", "rect", 0, 0, 1920, 1080, { fill: "#0f0d24", locked: true }),
            el("p149-s3-tag", "text", 120, 100, 1680, 32, { text: "CORE PLATFORM MOAT", fontSize: 15, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#a855f7", letterSpacing: 3 }),
            el("p149-s3-title", "text", 120, 150, 1680, 70, { text: "Continuous Real-Time Spot & GPU Bin Packing", fontSize: 48, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#ffffff" }),
            el("p149-s3-c1", "rect", 120, 260, 800, 640, { fill: "#1e1b4b", borderRadius: 16 }),
            el("p149-s3-c1-t", "text", 160, 300, 720, 40, { text: "Zero-Downtime Live Pod Migration", fontSize: 26, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#c084fc" }),
            el("p149-s3-c1-p", "text", 160, 360, 720, 480, { text: "CloudScale dynamically migrates stateful microservices between spot, on-demand, and reserved cloud instances in sub-50ms windows, exploiting cloud pricing arbitrage without risking application downtime.", fontSize: 18, fontFamily: "Inter", fill: "#e9d5ff", lineHeight: 1.8 }),
            el("p149-s3-c2", "rect", 960, 260, 840, 640, { fill: "#1e1b4b", borderRadius: 16 }),
            el("p149-s3-c2-t", "text", 1000, 300, 760, 40, { text: "LLM GPU Cluster Autoscaling", fontSize: 26, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#c084fc" }),
            el("p149-s3-c2-p", "text", 1000, 360, 760, 480, { text: "Automatically shards vLLM and TensorRT-LLM inference workloads across mixed H100 and A100 GPU pools, maximizing token throughput while slashing GPU idle waste by 54%.", fontSize: 18, fontFamily: "Inter", fill: "#e9d5ff", lineHeight: 1.8 })
          ]
        },
        {
          id: "p149-s4",
          name: "Enterprise Customer Proof",
          elements: [
            el("p149-s4-bg", "rect", 0, 0, 1920, 1080, { fill: "#0f0d24", locked: true }),
            el("p149-s4-tag", "text", 120, 100, 1680, 32, { text: "ENTERPRISE VALIDATION", fontSize: 15, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#a855f7", letterSpacing: 3 }),
            el("p149-s4-title", "text", 120, 150, 1680, 70, { text: "Trusted by 140+ Global Tech Leaders", fontSize: 48, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#ffffff" }),
            el("p149-s4-card", "rect", 120, 260, 1680, 640, { fill: "#1e1b4b", borderRadius: 16 }),
            el("p149-s4-q", "text", 180, 340, 1560, 160, { text: "“CloudScale saved our engineering org $4.2M on AWS compute in the first 90 days. It is the most impactful infrastructure tool we have deployed in five years.”", fontSize: 32, fontFamily: "Plus Jakarta Sans", fontStyle: "italic", fill: "#ffffff", lineHeight: 1.5 }),
            el("p149-s4-author", "text", 180, 520, 1560, 36, { text: "— MARCUS VOGEL, VP OF INFRASTRUCTURE, FINTECH UNICORN", fontSize: 18, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#c084fc", letterSpacing: 2 }),
            el("p149-s4-desc", "text", 180, 600, 1560, 200, { text: "Over 4 million Kubernetes pods are actively optimized every single hour across AWS, GCP, and Azure with 100% automated SLA uptime protection.", fontSize: 20, fontFamily: "Inter", fill: "#e9d5ff", lineHeight: 1.7 })
          ]
        },
        {
          id: "p149-s5",
          name: "Round Details",
          elements: [
            el("p149-s5-bg", "rect", 0, 0, 1920, 1080, { fill: "#0f0d24", locked: true }),
            el("p149-s5-card", "rect", 120, 120, 1680, 840, { fill: "#1e1b4b", stroke: "rgba(168,85,247,0.5)", strokeWidth: 2, borderRadius: 20 }),
            el("p149-s5-tag", "text", 200, 200, 1520, 32, { text: "CLOUDSCALE AI // SERIES B TERMS", fontSize: 15, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#c084fc", letterSpacing: 4 }),
            el("p149-s5-title", "text", 200, 270, 1520, 130, { text: "Autonomy for Modern Cloud Infrastructure.", fontSize: 64, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#ffffff" }),
            el("p149-s5-p", "text", 200, 430, 1200, 90, { text: "Raising $45M led by premier venture partners to accelerate international sales expansion across EMEA & APAC and launch autonomous GPU cluster tuning.", fontSize: 22, fontFamily: "Inter", fill: "#e9d5ff", lineHeight: 1.7 }),
            el("p149-s5-mail", "text", 200, 580, 700, 40, { text: "founders@cloudscale-ai.com", fontSize: 28, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#c084fc" }),
            el("p149-s5-loc", "text", 200, 660, 700, 40, { text: "CloudScale HQ · 500 Howard Street · San Francisco, CA 94105", fontSize: 18, fontFamily: "Inter", fill: "#ffffff" }),
            el("p149-s5-foot", "text", 200, 850, 1520, 30, { text: "© 2026 CLOUDSCALE AI INC. CONFIDENTIAL & PROPRIETARY. FOR VENTURE PARTNERS ONLY.", fontSize: 13, fontFamily: "Plus Jakarta Sans", fill: "#a855f7", letterSpacing: 2 })
          ]
        }
      ]
    },

    // 150: Luxury Architectural Real Estate Dossier (5 slides)
    {
      id: 150,
      name: "Luxury Architectural Real Estate Dossier",
      title: "PENTHOUSE BEL-AIR // TROPHY ESTATE INVESTMENT MEMORANDUM",
      description: "Charcoal, sandstone, and monolithic serif presentation showcasing $65M trophy real estate property specs, floor plans, and architectural finishes.",
      category: "Presentation",
      subcategory: "Real Estate",
      size: "1920×1080",
      canvasWidth: 1920,
      canvasHeight: 1080,
      orientation: "landscape",
      tags: ["RealEstate", "Architecture", "Luxury", "Penthouse", "Dossier"],
      author: "ORD Studio",
      premium: true,
      isPublished: true,
      likes: 6940,
      views: 52900,
      gradient: "linear-gradient(135deg, #18181b 0%, #78716c 100%)",
      fonts: ["Cinzel", "Inter"],
      colors: ["#18181b", "#d6d3d1", "#ffffff", "#a8a29e"],
      slides: [
        {
          id: "p150-s1",
          name: "Cover",
          elements: [
            el("p150-s1-bg", "rect", 0, 0, 1920, 1080, { fill: "#18181b", locked: true }),
            el("p150-s1-img", "image", 960, 0, 960, 1080, { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200" }),
            el("p150-s1-tag", "text", 120, 140, 760, 32, { text: "THE PROMONTORY ESTATE // BEL-AIR, CALIFORNIA", fontSize: 15, fontFamily: "Cinzel", fontWeight: "700", fill: "#d6d3d1", letterSpacing: 4 }),
            el("p150-s1-title", "text", 120, 240, 760, 240, { text: "THE BEL-AIR\nPROMONTORY", fontSize: 96, fontFamily: "Cinzel", fontWeight: "900", fill: "#ffffff", lineHeight: 0.95 }),
            el("p150-s1-sub", "text", 120, 520, 740, 120, { text: "A 22,000 sq ft architectural triumph designed by Olson Kundig overlooking the entire Los Angeles basin and Pacific ocean horizon.", fontSize: 22, fontFamily: "Inter", fill: "#a8a29e", lineHeight: 1.7 }),
            el("p150-s1-foot", "text", 120, 900, 740, 30, { text: "OFFERED AT $65,000,000 USD // PRIVATE PRIVATE DISPATCH", fontSize: 13, fontFamily: "Cinzel", fill: "#78716c", letterSpacing: 2 })
          ]
        },
        {
          id: "p150-s2",
          name: "Estate Overview",
          elements: [
            el("p150-s2-bg", "rect", 0, 0, 1920, 1080, { fill: "#18181b", locked: true }),
            el("p150-s2-tag", "text", 120, 100, 1680, 32, { text: "PROPERTY SPECIFICATIONS", fontSize: 15, fontFamily: "Cinzel", fontWeight: "700", fill: "#d6d3d1", letterSpacing: 3 }),
            el("p150-s2-title", "text", 120, 150, 1680, 70, { text: "Uncompromising Architectural Grandeur", fontSize: 48, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff" }),
            el("p150-s2-c1", "rect", 120, 260, 390, 640, { fill: "#27272a", borderRadius: 8, stroke: "rgba(214,211,209,0.2)", strokeWidth: 1 }),
            el("p150-s2-c1-t", "text", 160, 300, 310, 40, { text: "INTERIOR SCALE", fontSize: 22, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff" }),
            el("p150-s2-c1-p", "text", 160, 360, 310, 480, { text: "22,400 sq ft of living space across 3 cantilevered levels with 14-foot ceiling heights, custom automated glass walls, and imported Swiss timber finishes.", fontSize: 17, fontFamily: "Inter", fill: "#a8a29e", lineHeight: 1.7 }),
            el("p150-s2-c2", "rect", 550, 260, 390, 640, { fill: "#27272a", borderRadius: 8, stroke: "rgba(214,211,209,0.2)", strokeWidth: 1 }),
            el("p150-s2-c2-t", "text", 590, 300, 310, 40, { text: "ACCOMMODATIONS", fontSize: 22, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff" }),
            el("p150-s2-c2-p", "text", 590, 360, 310, 480, { text: "7 luxury bedroom suites, 11 bathrooms, a 3,200 sq ft master penthouse wing with dual showroom dressing rooms, and private plunge pool terrace.", fontSize: 17, fontFamily: "Inter", fill: "#a8a29e", lineHeight: 1.7 }),
            el("p150-s2-c3", "rect", 980, 260, 390, 640, { fill: "#27272a", borderRadius: 8, stroke: "rgba(214,211,209,0.2)", strokeWidth: 1 }),
            el("p150-s2-c3-t", "text", 1020, 300, 310, 40, { text: "ENTERTAINMENT", fontSize: 22, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff" }),
            el("p150-s2-c3-p", "text", 1020, 360, 310, 480, { text: "20-seat Dolby Atmos screening room, 3,000-bottle temperature-zoned wine gallery, subterranean 8-car gallery garage with turntable, and wellness spa.", fontSize: 17, fontFamily: "Inter", fill: "#a8a29e", lineHeight: 1.7 }),
            el("p150-s2-c4", "rect", 1410, 260, 390, 640, { fill: "#27272a", borderRadius: 8, stroke: "rgba(214,211,209,0.2)", strokeWidth: 1 }),
            el("p150-s2-c4-t", "text", 1450, 300, 310, 40, { text: "GROUNDS & POOL", fontSize: 22, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff" }),
            el("p150-s2-c4-p", "text", 1450, 360, 310, 480, { text: "1.4 private gated hilltop acres featuring an 85-foot infinity-edge pool cantilevering toward the Pacific ocean sunset views.", fontSize: 17, fontFamily: "Inter", fill: "#a8a29e", lineHeight: 1.7 })
          ]
        },
        {
          id: "p150-s3",
          name: "Panoramic Horizons",
          elements: [
            el("p150-s3-bg", "rect", 0, 0, 1920, 1080, { fill: "#18181b", locked: true }),
            el("p150-s3-tag", "text", 120, 100, 1680, 32, { text: "SITE LOCATION & VIEWS", fontSize: 15, fontFamily: "Cinzel", fontWeight: "700", fill: "#d6d3d1", letterSpacing: 3 }),
            el("p150-s3-title", "text", 120, 150, 1680, 70, { text: "Unobstructed 300-Degree Jetliner Vistas", fontSize: 48, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff" }),
            el("p150-s3-img", "image", 120, 260, 1680, 640, { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200", borderRadius: 12 })
          ]
        },
        {
          id: "p150-s4",
          name: "Material Palette & Craft",
          elements: [
            el("p150-s4-bg", "rect", 0, 0, 1920, 1080, { fill: "#18181b", locked: true }),
            el("p150-s4-tag", "text", 120, 100, 1680, 32, { text: "ARCHITECTURAL FINISHES", fontSize: 15, fontFamily: "Cinzel", fontWeight: "700", fill: "#d6d3d1", letterSpacing: 3 }),
            el("p150-s4-title", "text", 120, 150, 1680, 70, { text: "Raw Roman Travertine & Charred Cedar", fontSize: 48, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff" }),
            el("p150-s4-c1", "rect", 120, 260, 800, 640, { fill: "#27272a", borderRadius: 8 }),
            el("p150-s4-c1-t", "text", 160, 300, 720, 40, { text: "Bookmatched Calacatta Gold Marble", fontSize: 26, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff" }),
            el("p150-s4-c1-p", "text", 160, 360, 720, 480, { text: "Single-quarry slab stone imported directly from Carrara, Italy, gracing the chef's culinary exhibition kitchen and primary spa bathroom walls with continuous cascading veining.", fontSize: 18, fontFamily: "Inter", fill: "#a8a29e", lineHeight: 1.8 }),
            el("p150-s4-c2", "rect", 960, 260, 840, 640, { fill: "#27272a", borderRadius: 8 }),
            el("p150-s4-c2-t", "text", 1000, 300, 760, 40, { text: "Automated Vitrocsa Glass Walls", fontSize: 26, fontFamily: "Cinzel", fontWeight: "800", fill: "#ffffff" }),
            el("p150-s4-c2-p", "text", 1000, 360, 760, 480, { text: "Swiss-engineered ultra-slim motorized glass pocket panels disappearing entirely into wall cavities to create seamless 80-foot indoor/outdoor entertaining transitions.", fontSize: 18, fontFamily: "Inter", fill: "#a8a29e", lineHeight: 1.8 })
          ]
        },
        {
          id: "p150-s5",
          name: "Private Viewings",
          elements: [
            el("p150-s5-bg", "rect", 0, 0, 1920, 1080, { fill: "#18181b", locked: true }),
            el("p150-s5-card", "rect", 120, 120, 1680, 840, { fill: "#27272a", stroke: "rgba(214,211,209,0.3)", strokeWidth: 2, borderRadius: 16 }),
            el("p150-s5-tag", "text", 200, 200, 1520, 32, { text: "THE PROMONTORY ESTATE // PRIVATE CLIENT ADVISORY", fontSize: 15, fontFamily: "Cinzel", fontWeight: "700", fill: "#d6d3d1", letterSpacing: 4 }),
            el("p150-s5-title", "text", 200, 270, 1520, 130, { text: "An Unrivaled Trophy Asset in Bel-Air.", fontSize: 64, fontFamily: "Cinzel", fontWeight: "900", fill: "#ffffff" }),
            el("p150-s5-p", "text", 200, 430, 1200, 90, { text: "Private discreet showings arranged exclusively for verified qualified principals. Contact our global private estate desk.", fontSize: 22, fontFamily: "Inter", fill: "#a8a29e", lineHeight: 1.7 }),
            el("p150-s5-mail", "text", 200, 580, 700, 40, { text: "estates@promontory-belair.com", fontSize: 28, fontFamily: "Cinzel", fontWeight: "700", fill: "#ffffff" }),
            el("p150-s5-loc", "text", 200, 660, 700, 40, { text: "Bel-Air Road · Bel-Air, Los Angeles, CA 90077", fontSize: 18, fontFamily: "Inter", fill: "#d6d3d1" }),
            el("p150-s5-foot", "text", 200, 850, 1520, 30, { text: "© 2026 THE PROMONTORY ESTATE. EQUAL HOUSING OPPORTUNITY.", fontSize: 13, fontFamily: "Cinzel", fill: "#78716c", letterSpacing: 2 })
          ]
        }
      ]
    }
  ];

  return decks;
}
