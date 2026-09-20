// ORD Studio Bespoke Resume Batch 1 (IDs 201-208)
// Executive, Tech Minimalist, Creative Left Sidebar, Corporate VP Navy,
// Swiss Tri-Column, Academic Oncology, Product PLG, and Wall Street M&A.

import { PHOTOS_RESUMES } from './uniquePhotoPool.ts';

export function el(id, type, x, y, width, height, extra = {}) {
  return { id, type, x, y, width, height, visible: true, ...extra };
}

export const RESUMES_BATCH_1 = [
  // =========================================================================
  // 201: EXECUTIVE CLASSICAL IVORY (Family 1: Executive - Centered monumental)
  // =========================================================================
  {
    id: 201,
    name: "Executive Classical Ivory Curriculum Vitae",
    title: "VICTORIA ST. CLAIRE · CHIEF EXECUTIVE OFFICER",
    description: "Prestigious classical C-suite curriculum vitae. Warm ivory background, Playfair Display typography, double antique gold pinstripe rules, and comprehensive board governance ledger.",
    category: "Resume",
    subcategory: "Executive",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Executive", "CEO", "Classical", "Board", "Governance", "Ivory"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4890,
    views: 39500,
    gradient: "linear-gradient(180deg, #faf9f6 0%, #f5f4ef 100%)",
    fonts: ["Playfair Display", "EB Garamond"],
    colors: ["#faf9f6", "#1c1917", "#c5a059", "#78716c"],
    elements: [
      el("r-201-bg", "rect", 0, 0, 1200, 1697, { fill: "#faf9f6", locked: true }),
      el("r-201-pin1", "line", 120, 55, 960, 2, { fill: "#c5a059", strokeWidth: 1.5 }),
      el("r-201-pin2", "line", 120, 61, 960, 1, { fill: "#c5a059", strokeWidth: 0.5 }),

      el("r-201-name", "text", 120, 78, 960, 44, { text: "VICTORIA ST. CLAIRE", fontSize: 44, fontFamily: "Playfair Display", fontWeight: "700", fill: "#1c1917", textAlign: "center", letterSpacing: 4 }),
      el("r-201-title", "text", 120, 128, 960, 24, { text: "CHIEF EXECUTIVE OFFICER · GLOBAL BOARD DIRECTOR · M&A STEWARD", fontSize: 13, fontFamily: "Playfair Display", fontWeight: "600", fill: "#c5a059", textAlign: "center", letterSpacing: 3 }),
      el("r-201-contact", "text", 120, 156, 960, 22, { text: "v.stclaire@stclairepartners.com   |   +1 (212) 849-0021   |   New York, NY   |   BoardEx Verified", fontSize: 12, fontFamily: "EB Garamond", fill: "#78716c", textAlign: "center" }),

      el("r-201-div1", "line", 120, 185, 960, 1, { fill: "#e7e5e4", strokeWidth: 1 }),

      // Executive Charter
      el("r-201-sec1-t", "text", 120, 204, 960, 24, { text: "EXECUTIVE CHARTER & CORPORATE GOVERNANCE", fontSize: 14, fontFamily: "Playfair Display", fontWeight: "700", fill: "#1c1917", letterSpacing: 2 }),
      el("r-201-sec1-p", "text", 120, 232, 960, 68, { text: "Chief Executive Officer with 22 years of global leadership orchestrating enterprise transformations across Fortune 100 consumer conglomerates and industrial manufacturing. Proven architect of $4.2B in accretive cross-border mergers, driving 340 bps EBITDA expansion, and serving on three public company audit and risk committees.", fontSize: 12.5, fontFamily: "EB Garamond", fill: "#292524", lineHeight: 1.6 }),

      el("r-201-div2", "line", 120, 310, 960, 1, { fill: "#e7e5e4", strokeWidth: 1 }),

      // Board Directorships
      el("r-201-sec2-t", "text", 120, 328, 960, 24, { text: "PUBLIC & PRIVATE BOARD DIRECTORSHIPS", fontSize: 14, fontFamily: "Playfair Display", fontWeight: "700", fill: "#1c1917", letterSpacing: 2 }),
      el("r-201-b1-t", "text", 120, 356, 700, 22, { text: "Independent Board Director, Audit Committee Chair | Helios Global Energy (NYSE: HGE)", fontSize: 13.5, fontFamily: "EB Garamond", fontWeight: "700", fill: "#1c1917" }),
      el("r-201-b1-d", "text", 830, 356, 250, 22, { text: "2019 — PRESENT", fontSize: 11.5, fontFamily: "EB Garamond", fill: "#78716c", textAlign: "right" }),
      el("r-201-b1-p", "text", 120, 380, 960, 40, { text: "Oversee enterprise risk framework, cybersecurity compliance, and quarterly SEC regulatory filings for $8.4B market cap multinational.", fontSize: 12, fontFamily: "EB Garamond", fill: "#44403c", lineHeight: 1.5 }),

      el("r-201-b2-t", "text", 120, 428, 700, 22, { text: "Board Member, Compensation & ESG Committee | Vanguard Industrial Logistics", fontSize: 13.5, fontFamily: "EB Garamond", fontWeight: "700", fill: "#1c1917" }),
      el("r-201-b2-d", "text", 830, 428, 250, 22, { text: "2017 — 2023", fontSize: 11.5, fontFamily: "EB Garamond", fill: "#78716c", textAlign: "right" }),
      el("r-201-b2-p", "text", 120, 452, 960, 40, { text: "Steered executive succession planning, equity incentive structures, and sustainable global supply chain transition standards.", fontSize: 12, fontFamily: "EB Garamond", fill: "#44403c", lineHeight: 1.5 }),

      el("r-201-div3", "line", 120, 502, 960, 1, { fill: "#e7e5e4", strokeWidth: 1 }),

      // C-Suite Operating Track Record
      el("r-201-sec3-t", "text", 120, 520, 960, 24, { text: "C-SUITE OPERATING TRACK RECORD", fontSize: 14, fontFamily: "Playfair Display", fontWeight: "700", fill: "#1c1917", letterSpacing: 2 }),
      el("r-201-e1-t", "text", 120, 548, 700, 22, { text: "Chief Executive Officer & President | St. Claire Global Holdings", fontSize: 13.5, fontFamily: "EB Garamond", fontWeight: "700", fill: "#1c1917" }),
      el("r-201-e1-d", "text", 830, 548, 250, 22, { text: "2016 — PRESENT · NEW YORK", fontSize: 11.5, fontFamily: "EB Garamond", fill: "#78716c", textAlign: "right" }),
      el("r-201-e1-p", "text", 120, 572, 960, 80, { text: "• Direct 14,000 employees across 18 countries, delivering consistent 12% CAGR revenue expansion to $2.8B annual turnover.\n• Successfully concluded divestiture of non-core legacy unit generating $620M in net proceeds deployed to accretive AI acquisitions.\n• Elevated organizational Glassdoor leadership score from 68% to 92%; recognized in Fortune Most Powerful Women in Business.", fontSize: 12, fontFamily: "EB Garamond", fill: "#44403c", lineHeight: 1.55 }),

      el("r-201-e2-t", "text", 120, 660, 700, 22, { text: "Executive Vice President, Global Operations | Apex Industrial Corporation", fontSize: 13.5, fontFamily: "EB Garamond", fontWeight: "700", fill: "#1c1917" }),
      el("r-201-e2-d", "text", 830, 660, 250, 22, { text: "2010 — 2016 · CHICAGO, IL", fontSize: 11.5, fontFamily: "EB Garamond", fill: "#78716c", textAlign: "right" }),
      el("r-201-e2-p", "text", 120, 684, 960, 80, { text: "• Spearheaded post-merger integration of $1.8B European acquisition across 24 manufacturing plants with zero supply interruption.\n• Rationalized global procurement architecture, realizing $145M in annualized recurring cost synergies over 36 months.\n• Sponsored enterprise digital transformation program migrating 12 legacy ERP instances into unified SAP S/4HANA backbone.", fontSize: 12, fontFamily: "EB Garamond", fill: "#44403c", lineHeight: 1.55 }),

      el("r-201-e3-t", "text", 120, 772, 700, 22, { text: "Senior Managing Director, M&A Advisory | Lazard Frères & Co.", fontSize: 13.5, fontFamily: "EB Garamond", fontWeight: "700", fill: "#1c1917" }),
      el("r-201-e3-d", "text", 830, 772, 250, 22, { text: "2003 — 2010 · NEW YORK / LONDON", fontSize: 11.5, fontFamily: "EB Garamond", fill: "#78716c", textAlign: "right" }),
      el("r-201-e3-p", "text", 120, 796, 960, 60, { text: "• Advised Fortune 50 industrial boards on 18 cross-border transactions valued in aggregate excess of $12.5B.\n• Structured dual-tranche debt syndications, cross-currency swaps, and fairness opinions for contested proxy battles.", fontSize: 12, fontFamily: "EB Garamond", fill: "#44403c", lineHeight: 1.55 }),

      el("r-201-div4", "line", 120, 868, 960, 1, { fill: "#e7e5e4", strokeWidth: 1 }),

      // M&A Governance Highlights
      el("r-201-sec4-t", "text", 120, 886, 960, 24, { text: "LANDMARK M&A GOVERNANCE & CAPITAL ALLOCATION", fontSize: 14, fontFamily: "Playfair Display", fontWeight: "700", fill: "#1c1917", letterSpacing: 2 }),
      el("r-201-m1", "rect", 120, 916, 300, 90, { fill: "#f5f4ef", stroke: "#e7e5e4", strokeWidth: 1, borderRadius: 4 }),
      el("r-201-m1-t", "text", 135, 928, 270, 20, { text: "$1.85B Transatlantic M&A", fontSize: 12, fontFamily: "Playfair Display", fontWeight: "700", fill: "#1c1917" }),
      el("r-201-m1-d", "text", 135, 950, 270, 46, { text: "Lead M&A Sponsor. Accretive valuation with $145M synergy capture in 24 months.", fontSize: 11, fontFamily: "EB Garamond", fill: "#44403c" }),

      el("r-201-m2", "rect", 450, 916, 300, 90, { fill: "#f5f4ef", stroke: "#e7e5e4", strokeWidth: 1, borderRadius: 4 }),
      el("r-201-m2-t", "text", 465, 928, 270, 20, { text: "$620M Unit Divestiture", fontSize: 12, fontFamily: "Playfair Display", fontWeight: "700", fill: "#1c1917" }),
      el("r-201-m2-d", "text", 465, 950, 270, 46, { text: "Sole Negotiator. Carved out legacy assets at 11.2x EBITDA; redeployed into AI.", fontSize: 11, fontFamily: "EB Garamond", fill: "#44403c" }),

      el("r-201-m3", "rect", 780, 916, 300, 90, { fill: "#f5f4ef", stroke: "#e7e5e4", strokeWidth: 1, borderRadius: 4 }),
      el("r-201-m3-t", "text", 795, 928, 270, 20, { text: "$840M Green Bond Issue", fontSize: 12, fontFamily: "Playfair Display", fontWeight: "700", fill: "#1c1917" }),
      el("r-201-m3-d", "text", 795, 950, 270, 46, { text: "Audit Chair Oversight. Oversubscribed 3.4x; lowered enterprise cost of capital.", fontSize: 11, fontFamily: "EB Garamond", fill: "#44403c" }),

      el("r-201-div5", "line", 120, 1022, 960, 1, { fill: "#e7e5e4", strokeWidth: 1 }),

      // Core Governance Competencies
      el("r-201-sec5-t", "text", 120, 1040, 960, 24, { text: "EXECUTIVE COMPETENCIES & FIDUCIARY GOVERNANCE", fontSize: 14, fontFamily: "Playfair Display", fontWeight: "700", fill: "#1c1917", letterSpacing: 2 }),
      el("r-201-c1-t", "text", 120, 1070, 300, 20, { text: "Corporate Finance & Capital Markets", fontSize: 12, fontFamily: "EB Garamond", fontWeight: "700", fill: "#c5a059" }),
      el("r-201-c1-p", "text", 120, 1092, 300, 60, { text: "Enterprise Capital Allocation · SEC Reporting · Sarbanes-Oxley 404 Compliance · Treasury Management", fontSize: 11.5, fontFamily: "EB Garamond", fill: "#44403c", lineHeight: 1.45 }),

      el("r-201-c2-t", "text", 450, 1070, 300, 20, { text: "Strategic M&A & Post-Merger Scale", fontSize: 12, fontFamily: "EB Garamond", fontWeight: "700", fill: "#c5a059" }),
      el("r-201-c2-p", "text", 450, 1092, 300, 60, { text: "Cross-Border Valuation · Synergies Modeling · Shareholder Activism Defense · Proxy Solicitations", fontSize: 11.5, fontFamily: "EB Garamond", fill: "#44403c", lineHeight: 1.45 }),

      el("r-201-c3-t", "text", 780, 1070, 300, 20, { text: "Enterprise Risk & Succession", fontSize: 12, fontFamily: "EB Garamond", fontWeight: "700", fill: "#c5a059" }),
      el("r-201-c3-p", "text", 780, 1092, 300, 60, { text: "Cyber Risk Governance · CEO Succession Planning · ESG Transition Standards · Global Supply Chain", fontSize: 11.5, fontFamily: "EB Garamond", fill: "#44403c", lineHeight: 1.45 }),

      el("r-201-div6", "line", 120, 1170, 960, 1, { fill: "#e7e5e4", strokeWidth: 1 }),

      // Ivory Credential Box at Bottom (y=1195..1580)
      el("r-201-cert-box", "rect", 120, 1195, 960, 385, { fill: "#f5f4ef", stroke: "#c5a059", strokeWidth: 1, borderRadius: 6 }),
      el("r-201-cb-t", "text", 150, 1220, 900, 24, { text: "EDUCATION, PROFESSIONAL CREDENTIALS & CIVIC TRUSTEESHIPS", fontSize: 13, fontFamily: "Playfair Display", fontWeight: "700", fill: "#1c1917", letterSpacing: 1 }),
      el("r-201-cb-p1", "text", 150, 1255, 900, 50, { text: "• Master of Business Administration (M.B.A.) | Harvard Business School (Baker Scholar, High Distinction)\n• Bachelor of Arts in Economics & International Relations | Yale University (Summa Cum Laude, Phi Beta Kappa)", fontSize: 12, fontFamily: "EB Garamond", fill: "#292524", lineHeight: 1.6 }),
      el("r-201-cb-t2", "text", 150, 1320, 900, 22, { text: "BOARD CERTIFICATIONS & INSTITUTIONAL AFFILIATIONS", fontSize: 12, fontFamily: "Playfair Display", fontWeight: "700", fill: "#c5a059", letterSpacing: 1 }),
      el("r-201-cb-p2", "text", 150, 1348, 900, 95, { text: "• NACD Board Leadership Fellow (National Association of Corporate Directors)\n• Member, Council on Foreign Relations (CFR) & Economic Club of New York\n• Executive Committee, World Economic Forum (WEF) Industrial Transformation Governors\n• Trustee, Lincoln Center for the Performing Arts & Metropolitan Museum of Art Acquisitions Committee", fontSize: 12, fontFamily: "EB Garamond", fill: "#292524", lineHeight: 1.6 }),
      el("r-201-cb-t3", "text", 150, 1460, 900, 22, { text: "HONORARY FELLOWSHIPS & AWARDS", fontSize: 12, fontFamily: "Playfair Display", fontWeight: "700", fill: "#c5a059", letterSpacing: 1 }),
      el("r-201-cb-p3", "text", 150, 1488, 900, 75, { text: "• Fortune Most Powerful Women in Business (Ranked #18 in 2024, #24 in 2022)\n• Financial Times Global Business Leader Distinction (2023)\n• Honorary Doctorate of Humane Letters (L.H.D.), Georgetown University (2021)", fontSize: 12, fontFamily: "EB Garamond", fill: "#292524", lineHeight: 1.6 })
    ]
  },

  // =========================================================================
  // 202: TECH MINIMALIST SYSTEMS ATS (Family 4: Tech - Vertical rail)
  // =========================================================================
  {
    id: 202,
    name: "Tech Minimalist Monospaced Systems Resume",
    title: "ALEX REID · PRINCIPAL DISTRIBUTED SYSTEMS ARCHITECT",
    description: "Pure monospaced ATS-tailored systems resume. Strict Swiss date rail column with vertical dividing rule, zero decorative cards or fills, optimized for machine readability.",
    category: "Resume",
    subcategory: "Engineering",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["ATS", "Engineering", "Systems", "Go", "Rust", "Distributed", "Minimal"],
    author: "ORD Studio",
    premium: false,
    isPublished: true,
    likes: 4520,
    views: 37800,
    gradient: "#ffffff",
    fonts: ["JetBrains Mono", "Space Grotesk"],
    colors: ["#ffffff", "#09090b", "#2563eb", "#64748b"],
    elements: [
      el("r-202-bg", "rect", 0, 0, 1200, 1697, { fill: "#ffffff", locked: true }),
      el("r-202-v-line", "line", 250, 60, 1, 1530, { fill: "#e2e8f0", strokeWidth: 1.5 }),

      el("r-202-tag", "text", 70, 65, 160, 24, { text: "// ARCH-CV-2026", fontSize: 12, fontFamily: "JetBrains Mono", fontWeight: "700", fill: "#2563eb" }),
      el("r-202-name", "text", 280, 65, 840, 44, { text: "ALEXANDER REID", fontSize: 38, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#09090b" }),
      el("r-202-role", "text", 280, 114, 840, 24, { text: "STAFF DISTRIBUTED SYSTEMS ARCHITECT // CLOUD INFRASTRUCTURE & CONSENSUS", fontSize: 12, fontFamily: "JetBrains Mono", fontWeight: "700", fill: "#2563eb" }),
      el("r-202-meta", "text", 280, 140, 840, 22, { text: "alex@raft-systems.org · +1.415.892.3120 · San Francisco, CA · github.com/areid · linkedin.com/in/areid-systems", fontSize: 11, fontFamily: "JetBrains Mono", fill: "#64748b" }),

      // Summary
      el("r-202-sec1-t", "text", 70, 185, 160, 24, { text: "SUMMARY", fontSize: 12, fontFamily: "JetBrains Mono", fontWeight: "800", fill: "#09090b" }),
      el("r-202-sum", "text", 280, 185, 840, 75, { text: "Staff Infrastructure Architect with 12+ years optimizing high-throughput distributed primitives, zero-allocation network routing, and multi-region consensus engines. Authored production stream routers handling 80M ops/sec. Proven track record reducing p99 tail latency across tier-1 fintech clusters.", fontSize: 11.5, fontFamily: "JetBrains Mono", fill: "#334155", lineHeight: 1.6 }),

      // Experience
      el("r-202-sec2-t", "text", 70, 280, 160, 24, { text: "EXPERIENCE", fontSize: 12, fontFamily: "JetBrains Mono", fontWeight: "800", fill: "#09090b" }),

      // Role 1
      el("r-202-r1-d", "text", 70, 310, 160, 20, { text: "2021 — PRES.", fontSize: 11, fontFamily: "JetBrains Mono", fontWeight: "700", fill: "#2563eb" }),
      el("r-202-r1-c", "text", 70, 330, 160, 20, { text: "SAN FRANCISCO", fontSize: 10, fontFamily: "JetBrains Mono", fill: "#94a3b8" }),
      el("r-202-r1-h", "text", 280, 310, 840, 24, { text: "Staff Infrastructure Engineer | Stripe (Core Payments Engine)", fontSize: 13.5, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#09090b" }),
      el("r-202-r1-p", "text", 280, 336, 840, 92, { text: "• Designed fault-tolerant Raft replication layer coordinating ledger state across 3 AWS regions with zero data loss under simulated partition chaos.\n• Re-architected hot-path gRPC serialization using SIMD-accelerated Protobuf decoding, slicing p99 response times from 42ms to 6.8ms.\n• Led cross-organizational incident response team; drove formal architectural review criteria for 220+ production services.\n• Mentored 8 senior engineers and authored foundational RFCs on linearizable multi-master transaction protocols.", fontSize: 11, fontFamily: "JetBrains Mono", fill: "#334155", lineHeight: 1.6 }),

      // Role 2
      el("r-202-r2-d", "text", 70, 450, 160, 20, { text: "2017 — 2021", fontSize: 11, fontFamily: "JetBrains Mono", fontWeight: "700", fill: "#2563eb" }),
      el("r-202-r2-c", "text", 70, 470, 160, 20, { text: "SEATTLE, WA", fontSize: 10, fontFamily: "JetBrains Mono", fill: "#94a3b8" }),
      el("r-202-r2-h", "text", 280, 450, 840, 24, { text: "Principal Systems Engineer | Cloudflare (Edge Workers Runtime)", fontSize: 13.5, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#09090b" }),
      el("r-202-r2-p", "text", 280, 476, 840, 92, { text: "• Built sandboxed V8 execution substrate isolating untrusted customer code across 280+ global edge Points of Presence.\n• Implemented eBPF kernel packet filters mitigating Layer-7 DDoS floods up to 4.2M packets/sec with zero kernel CPU saturation.\n• Reduced worker cold-start latency from 25ms to sub-1ms using memory snapshot deserialization and custom cgroup cpusets.\n• Scaled telemetry pipeline processing 45 billion daily HTTP request traces with sub-second aggregate dashboard queries.", fontSize: 11, fontFamily: "JetBrains Mono", fill: "#334155", lineHeight: 1.6 }),

      // Role 3
      el("r-202-r3-d", "text", 70, 590, 160, 20, { text: "2014 — 2017", fontSize: 11, fontFamily: "JetBrains Mono", fontWeight: "700", fill: "#2563eb" }),
      el("r-202-r3-c", "text", 70, 610, 160, 20, { text: "SAN FRANCISCO", fontSize: 10, fontFamily: "JetBrains Mono", fill: "#94a3b8" }),
      el("r-202-r3-h", "text", 280, 590, 840, 24, { text: "Senior Systems Software Engineer | HashiCorp (Consul Core Team)", fontSize: 13.5, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#09090b" }),
      el("r-202-r3-p", "text", 280, 616, 840, 80, { text: "• Rewrote WAN gossip protocol state machine in Go, decreasing inter-datacenter heartbeat bandwidth consumption by 64%.\n• Optimized lock-free in-memory radix tree indexing, scaling service discovery catalog capacity to 500,000 registered nodes.\n• Collaborated directly with open-source community contributors; reviewed and merged 380+ pull requests.", fontSize: 11, fontFamily: "JetBrains Mono", fill: "#334155", lineHeight: 1.6 }),

      // Open Source Projects
      el("r-202-sec3-t", "text", 70, 720, 160, 24, { text: "PROJECTS", fontSize: 12, fontFamily: "JetBrains Mono", fontWeight: "800", fill: "#09090b" }),

      el("r-202-p1-d", "text", 70, 750, 160, 20, { text: "RUST / CRATE", fontSize: 10, fontFamily: "JetBrains Mono", fill: "#94a3b8" }),
      el("r-202-p1-h", "text", 280, 750, 840, 22, { text: "raft-rs // Asynchronous Zero-Allocation Raft Consensus Engine (4.2k stars)", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#09090b" }),
      el("r-202-p1-p", "text", 280, 774, 840, 55, { text: "High-performance production-ready Raft library written in Rust using Tokio async primitives. Implements dynamic cluster membership changes, joint consensus, and pipelined log compaction. Used in 4 tier-1 fintech production engines.", fontSize: 11, fontFamily: "JetBrains Mono", fill: "#334155", lineHeight: 1.55 }),

      el("r-202-p2-d", "text", 70, 845, 160, 20, { text: "EBPF / C", fontSize: 10, fontFamily: "JetBrains Mono", fill: "#94a3b8" }),
      el("r-202-p2-h", "text", 280, 845, 840, 22, { text: "flow-route // Linux Kernel XDP Load Balancer & Flow Director (2.8k stars)", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#09090b" }),
      el("r-202-p2-p", "text", 280, 869, 840, 55, { text: "Programmable XDP packet parser and consistent hashing Layer-4 load balancer routing 40M packets/sec per 32-core socket. Benchmark results demonstrated 3.2x throughput over IPVS with 0 packet drops under line-rate saturation.", fontSize: 11, fontFamily: "JetBrains Mono", fill: "#334155", lineHeight: 1.55 }),

      // Technical Stack
      el("r-202-sec4-t", "text", 70, 950, 160, 24, { text: "SYSTEMS STACK", fontSize: 12, fontFamily: "JetBrains Mono", fontWeight: "800", fill: "#09090b" }),

      el("r-202-stk1-l", "text", 70, 980, 160, 20, { text: "LANGUAGES", fontSize: 10, fontFamily: "JetBrains Mono", fill: "#2563eb" }),
      el("r-202-stk1-v", "text", 280, 980, 840, 22, { text: "Rust (expert), Go (expert), C++20, C, Zig, x86_64 Assembly, Python, Bash, Protobuf/gRPC", fontSize: 11, fontFamily: "JetBrains Mono", fill: "#09090b" }),

      el("r-202-stk2-l", "text", 70, 1015, 160, 20, { text: "DISTRIBUTED", fontSize: 10, fontFamily: "JetBrains Mono", fill: "#2563eb" }),
      el("r-202-stk2-v", "text", 280, 1015, 840, 22, { text: "Raft, Paxos, Multi-Paxos, 2PC, CRDTs, Vector Clocks, Chandy-Lamport Snapshots, Gossip", fontSize: 11, fontFamily: "JetBrains Mono", fill: "#09090b" }),

      el("r-202-stk3-l", "text", 70, 1050, 160, 20, { text: "KERNEL & NET", fontSize: 10, fontFamily: "JetBrains Mono", fill: "#2563eb" }),
      el("r-202-stk3-v", "text", 280, 1050, 840, 22, { text: "eBPF/XDP, io_uring, DPDK, TCP/IP stack internals, QUIC, Envoy Proxy, WireGuard, cgroups v2", fontSize: 11, fontFamily: "JetBrains Mono", fill: "#09090b" }),

      el("r-202-stk4-l", "text", 70, 1085, 160, 20, { text: "STORAGE / OPS", fontSize: 10, fontFamily: "JetBrains Mono", fill: "#2563eb" }),
      el("r-202-stk4-v", "text", 280, 1085, 840, 22, { text: "RocksDB, FoundationDB, Apache Kafka, Redis internals, ClickHouse, Kubernetes operator APIs", fontSize: 11, fontFamily: "JetBrains Mono", fill: "#09090b" }),

      // Publications & Patents
      el("r-202-sec5-t", "text", 70, 1140, 160, 24, { text: "PUBLICATIONS", fontSize: 12, fontFamily: "JetBrains Mono", fontWeight: "800", fill: "#09090b" }),
      el("r-202-pub1-h", "text", 280, 1140, 840, 22, { text: "US Patent #11,492,019: 'Lock-Free Multi-Version Distributed Storage Engine' (Granted 2023)", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#09090b" }),
      el("r-202-pub1-d", "text", 280, 1164, 840, 42, { text: "Co-inventor on patent assigned to Stripe covering high-throughput distributed transaction sequencing without global locks.", fontSize: 11, fontFamily: "JetBrains Mono", fill: "#475569" }),

      el("r-202-pub2-h", "text", 280, 1220, 840, 22, { text: "ACM SIGCOMM 2022: 'Zero-Copy Stream Routing on Commodity Multi-Core Architectures'", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#09090b" }),
      el("r-202-pub2-d", "text", 280, 1244, 840, 42, { text: "Lead author presenting empirical benchmarks of kernel-bypass networking primitives across heterogeneous cloud topologies.", fontSize: 11, fontFamily: "JetBrains Mono", fill: "#475569" }),

      // Talks
      el("r-202-sec6-t", "text", 70, 1310, 160, 24, { text: "CONFERENCES", fontSize: 12, fontFamily: "JetBrains Mono", fontWeight: "800", fill: "#09090b" }),
      el("r-202-talk1", "text", 280, 1310, 840, 22, { text: "• RustConf 2024 Keynote: 'Zero-Allocation Systems: Writing Microsecond-Critical Software in Rust'", fontSize: 11, fontFamily: "JetBrains Mono", fill: "#334155" }),
      el("r-202-talk2", "text", 280, 1336, 840, 22, { text: "• Strange Loop 2023: 'Raft Under Chaos: What We Learned Partitioning Global Networks'", fontSize: 11, fontFamily: "JetBrains Mono", fill: "#334155" }),
      el("r-202-talk3", "text", 280, 1362, 840, 22, { text: "• QCon San Francisco 2022: 'eBPF in Production: From Packet Filtering to Distributed Tracing'", fontSize: 11, fontFamily: "JetBrains Mono", fill: "#334155" }),

      // Education
      el("r-202-sec7-t", "text", 70, 1420, 160, 24, { text: "EDUCATION", fontSize: 12, fontFamily: "JetBrains Mono", fontWeight: "800", fill: "#09090b" }),
      el("r-202-edu1-h", "text", 280, 1420, 840, 22, { text: "University of California, Berkeley | M.S. in Computer Science (Systems Track)", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#09090b" }),
      el("r-202-edu1-d", "text", 280, 1444, 840, 20, { text: "2012 — 2014 · Research Advisor: Prof. Ion Stoica (RISELab / AMPLab) · GPA: 3.96/4.0", fontSize: 11, fontFamily: "JetBrains Mono", fill: "#64748b" }),

      el("r-202-edu2-h", "text", 280, 1480, 840, 22, { text: "University of California, Berkeley | B.S. in Electrical Engineering & Computer Science (EECS)", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#09090b" }),
      el("r-202-edu2-d", "text", 280, 1504, 840, 20, { text: "2008 — 2012 · Regent's Scholar · Eta Kappa Nu (HKN) & Tau Beta Pi Honor Societies", fontSize: 11, fontFamily: "JetBrains Mono", fill: "#64748b" }),

      // Terminal Footer Marker
      el("r-202-eof", "text", 280, 1555, 840, 20, { text: "--- [EOF: PGP 0x8F94D201 // SHA-256 VERIFIED CHECKSUM: 9b7a4f2e81c0] ---", fontSize: 10, fontFamily: "JetBrains Mono", fill: "#94a3b8" })
    ]
  },

  // =========================================================================
  // 203: CREATIVE DIRECTOR LEFT SIDEBAR (Family 3: Editorial / Creative)
  // =========================================================================
  {
    id: 203,
    name: "Creative Director Left Sidebar Portfolio Resume",
    title: "MARCUS CHEN · GLOBAL EXECUTIVE CREATIVE DIRECTOR",
    description: "High visual impact creative executive curriculum vitae. Deep midnight left sidebar with portrait photo badge, brand design credentials, and typography-first case study highlights.",
    category: "Resume",
    subcategory: "Creative",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Creative", "Director", "Design", "Sidebar", "Awards", "Syne"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 5120,
    views: 42100,
    gradient: "linear-gradient(180deg, #18181b 0%, #09090b 100%)",
    fonts: ["Syne", "Inter"],
    colors: ["#18181b", "#6366f1", "#ffffff", "#f1f5f9"],
    elements: [
      el("r-203-bg", "rect", 0, 0, 1200, 1697, { fill: "#ffffff", locked: true }),
      el("r-203-sb", "rect", 0, 0, 380, 1697, { fill: "#18181b", locked: true }),

      el("r-203-avatar", "image", 130, 65, 120, 120, { src: PHOTOS_RESUMES[203], borderRadius: 60 }),
      el("r-203-av-ring", "circle", 130, 65, 120, 120, { fill: "transparent", stroke: "#6366f1", strokeWidth: 3 }),

      el("r-203-sb-name", "text", 35, 205, 310, 32, { text: "MARCUS CHEN", fontSize: 24, fontFamily: "Syne", fontWeight: "800", fill: "#ffffff", textAlign: "center" }),
      el("r-203-sb-role", "text", 35, 240, 310, 22, { text: "ECD · BRAND ARCHITECT", fontSize: 12, fontFamily: "Inter", fontWeight: "700", fill: "#818cf8", textAlign: "center", letterSpacing: 2 }),

      el("r-203-sb-c-h", "text", 35, 290, 310, 20, { text: "CONTACT & PORTFOLIO", fontSize: 12, fontFamily: "Syne", fontWeight: "700", fill: "#818cf8", letterSpacing: 1 }),
      el("r-203-sb-c-txt", "text", 35, 316, 310, 95, { text: "marcus@chenatelier.studio\n+1 (917) 540-3921\nBrooklyn, New York\nchenatelier.studio\nbehance.net/marcuschen", fontSize: 11.5, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.7 }),

      el("r-203-sb-aw-h", "text", 35, 435, 310, 20, { text: "HONORS & ACCOLADES", fontSize: 12, fontFamily: "Syne", fontWeight: "700", fill: "#818cf8", letterSpacing: 1 }),
      el("r-203-sb-aw-txt", "text", 35, 462, 310, 175, { text: "🏆 Cannes Lions Grand Prix (2024)\n🏆 D&AD Black Pencil — Identity\n🏆 3x Red Dot Best of the Best\n🏆 Fast Company World Changing Ideas\n🏆 One Show Gold Pencil (2022)\n🏆 Art Directors Club Hall of Fame\n🏆 Tokyo TDC Annual Annual Book (2023)", fontSize: 11.5, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.75 }),

      el("r-203-sb-sk-h", "text", 35, 660, 310, 20, { text: "CORE DISCIPLINES", fontSize: 12, fontFamily: "Syne", fontWeight: "700", fill: "#818cf8", letterSpacing: 1 }),
      el("r-203-sb-sk-txt", "text", 35, 688, 310, 155, { text: "• Global Brand Architecture & Strategy\n• Kinetic Typography & Motion Systems\n• Generative AI & Computational Art\n• Spatial Wayfinding & Retail Experience\n• Multi-Channel Campaign Direction\n• Design System Token Governance", fontSize: 11.5, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.75 }),

      el("r-203-sb-tl-h", "text", 35, 865, 310, 20, { text: "DESIGN TOOLKIT", fontSize: 12, fontFamily: "Syne", fontWeight: "700", fill: "#818cf8", letterSpacing: 1 }),
      el("r-203-sb-tl-txt", "text", 35, 892, 310, 135, { text: "Figma (Advanced Systems), After Effects, Cinema 4D, TouchDesigner, Glyphs 3, Midjourney Pro, RunWay Gen-3, Processing/Python, InDesign, Blender", fontSize: 11, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.7 }),

      el("r-203-sb-ed-h", "text", 35, 1050, 310, 20, { text: "EDUCATION", fontSize: 12, fontFamily: "Syne", fontWeight: "700", fill: "#818cf8", letterSpacing: 1 }),
      el("r-203-sb-ed-txt", "text", 35, 1076, 310, 100, { text: "Rhode Island School of Design (RISD)\nB.F.A. in Graphic Design (High Honors)\nPresident's Scholar (2007 — 2011)\n\nRoyal College of Art (RCA) London\nVisiting Summer Fellow (Typography)", fontSize: 11, fontFamily: "Inter", fill: "#cbd5e1", lineHeight: 1.65 }),

      el("r-203-sb-cl-h", "text", 35, 1200, 310, 20, { text: "MARQUEE CLIENT ROSTER", fontSize: 12, fontFamily: "Syne", fontWeight: "700", fill: "#818cf8", letterSpacing: 1 }),
      el("r-203-sb-cl-txt", "text", 35, 1226, 310, 130, { text: "Apple · Nike · LVMH · Sony Music · Polestar · MoMA · Porsche · Balenciaga · Teenage Engineering · Prada", fontSize: 11, fontFamily: "Inter", fill: "#94a3b8", lineHeight: 1.75 }),

      el("r-203-sb-ft", "text", 35, 1540, 310, 20, { text: "AIGA NATIONAL FELLOW // MEMBER AGI", fontSize: 10, fontFamily: "Inter", fontWeight: "700", fill: "#6366f1", textAlign: "center", letterSpacing: 1 }),

      // Right Main Column (x=430, w=710)
      el("r-203-m-title", "text", 430, 65, 710, 46, { text: "TRANSFORMATIVE BRAND VISION", fontSize: 32, fontFamily: "Syne", fontWeight: "900", fill: "#18181b" }),
      el("r-203-m-sub", "text", 430, 116, 710, 65, { text: "Executive Creative Director leading multidisciplinary teams of 45+ designers, motion artists, and creative technologists. Pioneered global visual identity overhauls for Fortune 50 technology giants generating $120M+ in verified brand equity uplift.", fontSize: 13, fontFamily: "Inter", fill: "#475569", lineHeight: 1.6 }),

      el("r-203-m-div1", "line", 430, 192, 710, 2, { fill: "#e2e8f0", strokeWidth: 1.5 }),
      el("r-203-m-exp-h", "text", 430, 208, 710, 24, { text: "EXECUTIVE CREATIVE LEADERSHIP", fontSize: 15, fontFamily: "Syne", fontWeight: "800", fill: "#18181b", letterSpacing: 1 }),

      // Role 1
      el("r-203-m-j1-t", "text", 430, 240, 480, 22, { text: "Global Executive Creative Director | Pentagram NY", fontSize: 14.5, fontFamily: "Inter", fontWeight: "800", fill: "#18181b" }),
      el("r-203-m-j1-d", "text", 920, 240, 220, 22, { text: "2020 — PRESENT", fontSize: 11.5, fontFamily: "Inter", fontWeight: "700", fill: "#6366f1", textAlign: "right" }),
      el("r-203-m-j1-p", "text", 430, 266, 710, 85, { text: "• Direct the North American Brand Studio; increased gross fee billing revenue by +42% over three fiscal cycles.\n• Re-envisioned global design system for premier electric vehicle manufacturer across 32 countries and 400+ physical showrooms.\n• Spearheaded generative AI brand guidelines for multinational luxury holding group with zero copyright infringement claims.", fontSize: 12, fontFamily: "Inter", fill: "#334155", lineHeight: 1.6 }),

      // Role 2
      el("r-203-m-j2-t", "text", 430, 365, 480, 22, { text: "Group Creative Director | Wieden+Kennedy Portland", fontSize: 14.5, fontFamily: "Inter", fontWeight: "800", fill: "#18181b" }),
      el("r-203-m-j2-d", "text", 920, 365, 220, 22, { text: "2015 — 2020", fontSize: 11.5, fontFamily: "Inter", fontWeight: "700", fill: "#6366f1", textAlign: "right" }),
      el("r-203-m-j2-p", "text", 430, 391, 710, 85, { text: "• Led global brand initiatives for Nike Basketball and Nike Running, winning 4 Cannes Lions including 1 Grand Prix.\n• Built agency's in-house motion graphics laboratory from scratch; mentored 18 junior and mid-level art directors.\n• Delivered integrated Olympic global marketing campaign across 18 broadcast markets and digital spatial installations.", fontSize: 12, fontFamily: "Inter", fill: "#334155", lineHeight: 1.6 }),

      // Role 3
      el("r-203-m-j3-t", "text", 430, 490, 480, 22, { text: "Senior Art Director | Droga5 New York", fontSize: 14.5, fontFamily: "Inter", fontWeight: "800", fill: "#18181b" }),
      el("r-203-m-j3-d", "text", 920, 490, 220, 22, { text: "2011 — 2015", fontSize: 11.5, fontFamily: "Inter", fontWeight: "700", fill: "#6366f1", textAlign: "right" }),
      el("r-203-m-j3-p", "text", 430, 516, 710, 75, { text: "• Conceived and executed breakthrough interactive campaigns for Google, Under Armour, and The New York Times.\n• Honored as Adweek 'Creative 100' and Forbes 30 Under 30 in Marketing & Advertising (2014).", fontSize: 12, fontFamily: "Inter", fill: "#334155", lineHeight: 1.6 }),

      el("r-203-m-div2", "line", 430, 605, 710, 1, { fill: "#e2e8f0", strokeWidth: 1 }),

      // Selected Commission Folios Cards
      el("r-203-m-fol-h", "text", 430, 622, 710, 24, { text: "SELECTED COMMISSION FOLIOS (2023 — 2026)", fontSize: 15, fontFamily: "Syne", fontWeight: "800", fill: "#18181b", letterSpacing: 1 }),

      el("r-203-c1-bg", "rect", 430, 652, 710, 115, { fill: "#f8fafc", borderRadius: 8, stroke: "#e2e8f0", strokeWidth: 1 }),
      el("r-203-c1-t", "text", 450, 668, 670, 22, { text: "PROJECT HYPERION // EUROPEAN AEROSPACE IDENTITY SYSTEM", fontSize: 13, fontFamily: "Syne", fontWeight: "800", fill: "#18181b" }),
      el("r-203-c1-d", "text", 450, 694, 670, 60, { text: "Complete ground-up brand architecture, custom variable font family (Hyperion Sans), aircraft livery, and telemetry cockpit interface iconography for next-generation satellite launcher.", fontSize: 11.5, fontFamily: "Inter", fill: "#475569", lineHeight: 1.55 }),

      el("r-203-c2-bg", "rect", 430, 780, 710, 115, { fill: "#f8fafc", borderRadius: 8, stroke: "#e2e8f0", strokeWidth: 1 }),
      el("r-203-c2-t", "text", 450, 796, 670, 22, { text: "SPATIAL ATELIER // MULTI-SENSORY RETAIL WAYFINDING (GINZA & SOHO)", fontSize: 13, fontFamily: "Syne", fontWeight: "800", fill: "#18181b" }),
      el("r-203-c2-d", "text", 450, 822, 670, 60, { text: "Physical-digital hybrid architecture integrating interactive kinetic mirrors, directional audio soundscapes, and minimalist brushed aluminum signage for flagship Tokyo & New York destinations.", fontSize: 11.5, fontFamily: "Inter", fill: "#475569", lineHeight: 1.55 }),

      el("r-203-c3-bg", "rect", 430, 908, 710, 115, { fill: "#f8fafc", borderRadius: 8, stroke: "#e2e8f0", strokeWidth: 1 }),
      el("r-203-c3-t", "text", 450, 924, 670, 22, { text: "AUTONOMOUS SOUND // GENERATIVE AUDIO-VISUAL EV IDENTITY", fontSize: 13, fontFamily: "Syne", fontWeight: "800", fill: "#18181b" }),
      el("r-203-c3-d", "text", 450, 950, 670, 60, { text: "Synthesized dynamic pedestrian warning acoustics and dashboard visual motion score modulating in real time with vehicle velocity and battery regeneration curve.", fontSize: 11.5, fontFamily: "Inter", fill: "#475569", lineHeight: 1.55 }),

      el("r-203-m-div3", "line", 430, 1038, 710, 1, { fill: "#e2e8f0", strokeWidth: 1 }),

      // Keynotes & Juries
      el("r-203-m-jry-h", "text", 430, 1055, 710, 24, { text: "JURY APPOINTMENTS & KEYNOTE ADDRESSES", fontSize: 15, fontFamily: "Syne", fontWeight: "800", fill: "#18181b", letterSpacing: 1 }),
      el("r-203-m-jry-p", "text", 430, 1085, 710, 130, { text: "• Cannes Lions International Festival of Creativity: Design Jury President (2024)\n• D&AD Awards: Branding & Typography Jury Foreman (2023, 2021)\n• Keynote Speaker: Config 2025 ('The Architecture of Cultural Relevance in AI Design')\n• AIGA National Conference Opening Keynote: 'The Post-Digital Brand Monolith' (2023)\n• Visiting Critic: Yale School of Art MFA Graphic Design & Rhode Island School of Design", fontSize: 12, fontFamily: "Inter", fill: "#334155", lineHeight: 1.7 }),

      el("r-203-m-div4", "line", 430, 1230, 710, 1, { fill: "#e2e8f0", strokeWidth: 1 }),

      // Monograph & Authorship
      el("r-203-m-bk-h", "text", 430, 1248, 710, 24, { text: "MONOGRAPHS & ESSAYS", fontSize: 15, fontFamily: "Syne", fontWeight: "800", fill: "#18181b", letterSpacing: 1 }),
      el("r-203-m-bk-p", "text", 430, 1278, 710, 120, { text: "• 'Form and Consequence: 15 Years of Systemic Identity', Phaidon Press (2024)\n• 'Kinetic Rhythm: Typography in the Age of Spatial Computing', Eye Magazine No. 104\n• 'The Disappearing Interface', Fast Company Co.Design Column Contributor (2022 — Present)\n• Monograph Foreword: 'Swiss Minimalist Revival' by Lars Müller Publishers", fontSize: 12, fontFamily: "Inter", fill: "#334155", lineHeight: 1.7 }),

      el("r-203-m-div5", "line", 430, 1412, 710, 1, { fill: "#e2e8f0", strokeWidth: 1 }),

      // Museum & Exhibitions
      el("r-203-m-ex-h", "text", 430, 1430, 710, 24, { text: "PERMANENT COLLECTIONS & EXHIBITIONS", fontSize: 15, fontFamily: "Syne", fontWeight: "800", fill: "#18181b", letterSpacing: 1 }),
      el("r-203-m-ex-p", "text", 430, 1460, 710, 120, { text: "• Museum of Modern Art (MoMA) Architecture & Design Collection: 4 Poster Acquisitions\n• Cooper Hewitt Smithsonian Design Museum: 'Contemporary Typography: 2010 — 2025'\n• Victoria and Albert Museum (V&A) London: Digital Craftsmanship Retrospective (2023)\n• Venice Architecture Biennale: Italian Pavilion Kinetic Wall Installation (2021)", fontSize: 12, fontFamily: "Inter", fill: "#334155", lineHeight: 1.7 })
    ]
  },

  // =========================================================================
  // 204: CORPORATE VP OPERATIONS (Family 2: Modern Corporate - Navy Banner)
  // =========================================================================
  {
    id: 204,
    name: "Corporate VP Operations Navy Header Resume",
    title: "CATHERINE BROWNING · VP OF GLOBAL OPERATIONS & SUPPLY CHAIN",
    description: "Executive operational resume. Solid deep navy header band, prominent 3-metric KPI scorecard, and structured two-column business operations architecture.",
    category: "Resume",
    subcategory: "Operations",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Operations", "VP", "Navy", "Scorecard", "Logistics", "Supply Chain"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4380,
    views: 35100,
    gradient: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
    fonts: ["Plus Jakarta Sans", "Inter"],
    colors: ["#0f172a", "#2563eb", "#ffffff", "#f8fafc"],
    elements: [
      el("r-204-bg", "rect", 0, 0, 1200, 1697, { fill: "#ffffff", locked: true }),
      el("r-204-band", "rect", 0, 0, 1200, 230, { fill: "#0f172a", locked: true }),

      // Top Right Photo in Banner
      el("r-204-avatar", "image", 980, 45, 140, 140, { src: PHOTOS_RESUMES[204], borderRadius: 70 }),
      el("r-204-av-bdr", "circle", 980, 45, 140, 140, { fill: "transparent", stroke: "#38bdf8", strokeWidth: 2 }),

      el("r-204-badge", "text", 70, 38, 880, 22, { text: "EXECUTIVE OPERATIONAL DOSSIER // GLOBAL VALUE CREATION", fontSize: 11.5, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#38bdf8", letterSpacing: 2 }),
      el("r-204-name", "text", 70, 64, 880, 46, { text: "CATHERINE BROWNING", fontSize: 44, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#ffffff" }),
      el("r-204-role", "text", 70, 118, 880, 24, { text: "VICE PRESIDENT OF GLOBAL OPERATIONS · SUPPLY CHAIN & AUTOMATION", fontSize: 13.5, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#93c5fd" }),
      el("r-204-meta", "text", 70, 148, 880, 22, { text: "c.browning@exec-ops.com  |  +1 (312) 640-9182  |  Chicago, IL  |  linkedin.com/in/cbrowning-ops", fontSize: 11.5, fontFamily: "Inter", fill: "#cbd5e1" }),

      // 3 KPI Metric Cards Below Header (y=255..355)
      el("r-204-kpi1", "rect", 70, 255, 330, 95, { fill: "#f8fafc", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 8 }),
      el("r-204-k1-v", "text", 95, 270, 280, 34, { text: "$140M P&L", fontSize: 26, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#0f172a" }),
      el("r-204-k1-l", "text", 95, 312, 280, 20, { text: "Annual Operating Budget Managed", fontSize: 11, fontFamily: "Inter", fill: "#64748b" }),

      el("r-204-kpi2", "rect", 435, 255, 330, 95, { fill: "#f8fafc", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 8 }),
      el("r-204-k2-v", "text", 460, 270, 280, 34, { text: "+380 BPS", fontSize: 26, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#2563eb" }),
      el("r-204-k2-l", "text", 460, 312, 280, 20, { text: "EBITDA Margin Improvement", fontSize: 11, fontFamily: "Inter", fill: "#64748b" }),

      el("r-204-kpi3", "rect", 800, 255, 330, 95, { fill: "#f8fafc", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 8 }),
      el("r-204-k3-v", "text", 825, 270, 280, 34, { text: "1,200 FTEs", fontSize: 26, fontFamily: "Plus Jakarta Sans", fontWeight: "900", fill: "#0f172a" }),
      el("r-204-k3-l", "text", 825, 312, 280, 20, { text: "Global Multi-Plant Workforce", fontSize: 11, fontFamily: "Inter", fill: "#64748b" }),

      // Left Column: Operations Leadership (w=680, x=70)
      el("r-204-sec1-t", "text", 70, 380, 680, 24, { text: "OPERATIONAL LEADERSHIP TRACK RECORD", fontSize: 14.5, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0f172a", letterSpacing: 1 }),

      // Role 1
      el("r-204-j1-t", "text", 70, 410, 480, 22, { text: "Vice President of Global Operations | Abbott Laboratories", fontSize: 14, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0f172a" }),
      el("r-204-j1-d", "text", 560, 410, 190, 22, { text: "2019 — PRES. · CHICAGO", fontSize: 11.5, fontFamily: "Inter", fontWeight: "700", fill: "#2563eb", textAlign: "right" }),
      el("r-204-j1-p", "text", 70, 436, 680, 95, { text: "• Direct end-to-end supply chain, fulfillment logistics, and lean plant manufacturing across 6 automated medical device factories.\n• Deployed computer-vision automated inspection robotics, driving quality yields from 96.2% to 99.8% while reducing scrap by $18M.\n• Led taskforce maintaining 99.4% order on-time delivery across peak pandemic supply disruption events.\n• Implemented Sales & Operations Planning (S&OP) rhythm, reducing global finished inventory days on hand (DOH) from 64 to 42.", fontSize: 11.5, fontFamily: "Inter", fill: "#334155", lineHeight: 1.55 }),

      // Role 2
      el("r-204-j2-t", "text", 70, 545, 480, 22, { text: "Senior Director, Global Manufacturing & Lean | Honeywell Aerospace", fontSize: 14, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0f172a" }),
      el("r-204-j2-d", "text", 560, 545, 190, 22, { text: "2014 — 2019 · PHOENIX", fontSize: 11.5, fontFamily: "Inter", fontWeight: "700", fill: "#2563eb", textAlign: "right" }),
      el("r-204-j2-p", "text", 70, 571, 680, 95, { text: "• Governed 8 precision machining facilities supporting commercial and defense propulsion contracts.\n• Orchestrated enterprise Kaizen lean events achieving $42M in verified recurring operational cost savings.\n• Spearheaded AS9100 Rev D aerospace certification across 4 European manufacturing acquisitions with zero non-conformances.\n• Mentored 24 internal Black Belts and launched global supplier quality engineering taskforce.", fontSize: 11.5, fontFamily: "Inter", fill: "#334155", lineHeight: 1.55 }),

      // Role 3
      el("r-204-j3-t", "text", 70, 680, 480, 22, { text: "Plant Operations Director | General Electric Power Systems", fontSize: 14, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0f172a" }),
      el("r-204-j3-d", "text", 560, 680, 190, 22, { text: "2008 — 2014 · GREENVILLE", fontSize: 11.5, fontFamily: "Inter", fontWeight: "700", fill: "#2563eb", textAlign: "right" }),
      el("r-204-j3-p", "text", 70, 706, 680, 80, { text: "• Directed 450 union manufacturing specialists producing heavy gas turbine components with 100% on-time delivery.\n• Awarded GE CEO Quality Excellence Prize for lowest recorded recordable OSHA incident rate in business unit history.\n• Transitioned facility to cellular manufacturing, compressing turbine assembly cycle time by 28%.", fontSize: 11.5, fontFamily: "Inter", fill: "#334155", lineHeight: 1.55 }),

      el("r-204-l-div1", "line", 70, 800, 680, 1, { fill: "#e2e8f0", strokeWidth: 1 }),

      // Strategic Capital Automation Programs
      el("r-204-sec2-t", "text", 70, 818, 680, 24, { text: "STRATEGIC CAPITAL AUTOMATION PROGRAMS", fontSize: 14.5, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0f172a", letterSpacing: 1 }),

      el("r-204-pr1-h", "text", 70, 848, 680, 22, { text: "Project Titan // $24M Lights-Out Automated Medical Cartridge Assembly", fontSize: 13, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#2563eb" }),
      el("r-204-pr1-d", "text", 70, 872, 680, 55, { text: "Designed and qualified fully autonomous robotic cells replacing 12 manual shifts. Delivered 42% unit production cost reduction and payback within 18 months, exceeding corporate hurdle rate by 14%.", fontSize: 11.5, fontFamily: "Inter", fill: "#475569", lineHeight: 1.5 }),

      el("r-204-pr2-h", "text", 70, 938, 680, 22, { text: "Global Control Tower // Predictive Supply Telemetry Deployment", fontSize: 13, fontFamily: "Plus Jakarta Sans", fontWeight: "700", fill: "#2563eb" }),
      el("r-204-pr2-d", "text", 70, 962, 680, 55, { text: "Unified real-time IoT shipment visibility across 14 central distribution centers and 200+ tier-1 suppliers, reducing freight expedite expenditure by $11.4M annually.", fontSize: 11.5, fontFamily: "Inter", fill: "#475569", lineHeight: 1.5 }),

      el("r-204-l-div2", "line", 70, 1030, 680, 1, { fill: "#e2e8f0", strokeWidth: 1 }),

      // Global Sourcing & Supplier Resilience
      el("r-204-sec3-t", "text", 70, 1048, 680, 24, { text: "GLOBAL SOURCING & RESILIENCE GOVERNANCE", fontSize: 14.5, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0f172a", letterSpacing: 1 }),
      el("r-204-src-p", "text", 70, 1078, 680, 115, { text: "• Nearshoring Execution: Successfully migrated 35% of critical raw components from high-risk East Asian single sources to certified manufacturing partners in Mexico and North Carolina, shaving ocean transit lead times from 45 days to 4 days.\n• Working Capital Optimization: Implemented vendor-managed inventory (VMI) across 40 strategic suppliers, releasing $42M in cash.\n• Supplier Quality Audits: Instituted zero-defect PPAP standards across 180 contract manufacturing partners.", fontSize: 11.5, fontFamily: "Inter", fill: "#334155", lineHeight: 1.6 }),

      el("r-204-l-div3", "line", 70, 1205, 680, 1, { fill: "#e2e8f0", strokeWidth: 1 }),

      // Leadership Honors
      el("r-204-sec4-t", "text", 70, 1222, 680, 24, { text: "HONORS & KEYNOTE ENGAGEMENTS", fontSize: 14.5, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0f172a", letterSpacing: 1 }),
      el("r-204-hn-p", "text", 70, 1252, 680, 120, { text: "• IndustryWeek Global Manufacturing Excellence Award (2023)\n• CSCMP Distinguished Service Medal for Supply Chain Resilience (2022)\n• Keynote Speaker: Association for Manufacturing Excellence (AME) International Conference\n• Guest Lecturer: Northwestern Kellogg School of Management Executive Operations Seminar", fontSize: 11.5, fontFamily: "Inter", fill: "#334155", lineHeight: 1.7 }),

      el("r-204-l-div4", "line", 70, 1385, 680, 1, { fill: "#e2e8f0", strokeWidth: 1 }),

      // Operating Philosophy
      el("r-204-sec5-t", "text", 70, 1402, 680, 24, { text: "OPERATING PHILOSOPHY & WORKFORCE CULTURE", fontSize: 14.5, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0f172a", letterSpacing: 1 }),
      el("r-204-ph-p", "text", 70, 1432, 680, 150, { text: "Champion of psychological safety, Gemba-walk leadership, and autonomous shop-floor problem solving. Achieved 94% workforce retention rate across union and non-union facilities by institutionalizing continuous upskilling apprenticeships and lean six sigma green-belt certification tracks for front-line operators.", fontSize: 11.5, fontFamily: "Inter", fill: "#334155", lineHeight: 1.65 }),

      // Right Column (w=340, x=780)
      el("r-204-r-col", "rect", 780, 380, 350, 1205, { fill: "#f8fafc", stroke: "#e2e8f0", strokeWidth: 1, borderRadius: 8 }),

      el("r-204-rc-ed-t", "text", 805, 400, 300, 22, { text: "EDUCATION & DEGREES", fontSize: 13, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0f172a", letterSpacing: 1 }),
      el("r-204-rc-ed-p", "text", 805, 428, 300, 115, { text: "Master of Business Administration (M.B.A.)\nNorthwestern University (Kellogg)\nMajor in Operations & Finance (2006 — 2008)\n\nB.S. in Industrial & Systems Engineering\nPurdue University\nMagna Cum Laude · Tau Beta Pi (2002 — 2006)", fontSize: 11, fontFamily: "Inter", fill: "#334155", lineHeight: 1.6 }),

      el("r-204-rc-div1", "line", 805, 555, 300, 1, { fill: "#e2e8f0", strokeWidth: 1 }),

      el("r-204-rc-ct-t", "text", 805, 575, 300, 22, { text: "EXECUTIVE CERTIFICATIONS", fontSize: 13, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0f172a", letterSpacing: 1 }),
      el("r-204-rc-ct-p", "text", 805, 603, 300, 140, { text: "• Lean Six Sigma Master Black Belt (ASQ)\n• APICS Certified Supply Chain Professional (CSCP)\n• MIT Sloan Executive Certificate in Operations & Value Chain Strategy\n• Project Management Professional (PMP)\n• Certified in Production & Inventory Management (CPIM)", fontSize: 11, fontFamily: "Inter", fill: "#334155", lineHeight: 1.65 }),

      el("r-204-rc-div2", "line", 805, 755, 300, 1, { fill: "#e2e8f0", strokeWidth: 1 }),

      el("r-204-rc-sk-t", "text", 805, 775, 300, 22, { text: "ERP & SCM ECOSYSTEM", fontSize: 13, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0f172a", letterSpacing: 1 }),
      el("r-204-rc-sk-p", "text", 805, 803, 300, 150, { text: "Enterprise ERP:\nSAP S/4HANA, Oracle Cloud ERP\n\nSupply Chain Planning:\nKinaxis RapidResponse, Blue Yonder\n\nWarehouse Execution:\nManhattan Associates WMS, HighJump\n\nAnalytics & Automation:\nTableau, PowerBI, Python, SQL, UiPath RPA", fontSize: 11, fontFamily: "Inter", fill: "#475569", lineHeight: 1.6 }),

      el("r-204-rc-div3", "line", 805, 965, 300, 1, { fill: "#e2e8f0", strokeWidth: 1 }),

      el("r-204-rc-pl-t", "text", 805, 985, 300, 22, { text: "GLOBAL PLANT FOOTPRINT", fontSize: 13, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0f172a", letterSpacing: 1 }),
      el("r-204-rc-pl-p", "text", 805, 1013, 300, 130, { text: "Direct operational oversight across 14 manufacturing campuses:\n• United States (Illinois, Texas, Arizona)\n• Mexico (Monterrey, Tijuana)\n• Germany (Stuttgart)\n• Poland (Wrocław)\n• Malaysia (Penang)", fontSize: 11, fontFamily: "Inter", fill: "#334155", lineHeight: 1.6 }),

      el("r-204-rc-div4", "line", 805, 1155, 300, 1, { fill: "#e2e8f0", strokeWidth: 1 }),

      el("r-204-rc-reg-t", "text", 805, 1175, 300, 22, { text: "REGULATORY ACCREDITATIONS", fontSize: 13, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0f172a", letterSpacing: 1 }),
      el("r-204-rc-reg-p", "text", 805, 1203, 300, 120, { text: "• FDA cGMP 21 CFR Part 820\n• ISO 13485 (Medical Devices)\n• ISO 9001:2015 Quality Management\n• AS9100 Rev D Aerospace Standards\n• OSHA Voluntary Protection Program (VPP)", fontSize: 11, fontFamily: "Inter", fill: "#475569", lineHeight: 1.6 }),

      el("r-204-rc-div5", "line", 805, 1335, 300, 1, { fill: "#e2e8f0", strokeWidth: 1 }),

      el("r-204-rc-mb-t", "text", 805, 1355, 300, 22, { text: "LANGUAGES & AFFILIATIONS", fontSize: 13, fontFamily: "Plus Jakarta Sans", fontWeight: "800", fill: "#0f172a", letterSpacing: 1 }),
      el("r-204-rc-mb-p", "text", 805, 1383, 300, 180, { text: "• English (Native), Spanish (Professional), German (Conversational)\n• Member, Council of Supply Chain Management Professionals (CSCMP)\n• Board of Directors, Association for Manufacturing Excellence (AME)\n• Member, Women in Manufacturing (WiM)", fontSize: 11, fontFamily: "Inter", fill: "#334155", lineHeight: 1.65 })
    ]
  },

  // =========================================================================
  // 205: SWISS MODERNIST TRI-COLUMN (Family 3: Editorial - 3-Column Grid)
  // =========================================================================
  {
    id: 205,
    name: "Swiss Modernist Tri-Column Typographic Resume",
    title: "BEATRIZ VOGEL · PRINCIPAL BRAND SYSTEM ARCHITECT",
    description: "Strict 3-column Swiss International Style curriculum vitae. Bold asymmetric red header rule, crisp Space Grotesk hierarchy, and architectural grid alignment.",
    category: "Resume",
    subcategory: "Design",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Swiss", "Grid", "Modernist", "Typographic", "Minimal", "Tri-Column"],
    author: "ORD Studio",
    premium: false,
    isPublished: true,
    likes: 4760,
    views: 38200,
    gradient: "#ffffff",
    fonts: ["Space Grotesk", "Inter"],
    colors: ["#ffffff", "#09090b", "#ef4444", "#71717a"],
    elements: [
      el("r-205-bg", "rect", 0, 0, 1200, 1697, { fill: "#ffffff", locked: true }),
      el("r-205-red-bar", "rect", 70, 50, 1060, 8, { fill: "#ef4444" }),

      el("r-205-v1", "line", 405, 195, 1, 1380, { fill: "#e4e4e7", strokeWidth: 1 }),
      el("r-205-v2", "line", 795, 195, 1, 1380, { fill: "#e4e4e7", strokeWidth: 1 }),

      el("r-205-num", "text", 70, 75, 300, 24, { text: "CURRICULUM VITAE // 05", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#ef4444", letterSpacing: 2 }),
      el("r-205-name", "text", 70, 105, 1060, 48, { text: "BEATRIZ VOGEL", fontSize: 42, fontFamily: "Space Grotesk", fontWeight: "900", fill: "#09090b", letterSpacing: -1 }),
      el("r-205-role", "text", 70, 160, 1060, 26, { text: "PRINCIPAL BRAND SYSTEM ARCHITECT · ZÜRICH / BASEL / NEW YORK · BV@VOGELATELIER.CH", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#71717a", letterSpacing: 2 }),

      // Column 1: Foundation & Core Skills (x=70, w=305)
      el("r-205-c1-h", "text", 70, 210, 305, 24, { text: "01 / FOUNDATION", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ef4444" }),
      el("r-205-c1-p", "text", 70, 240, 305, 150, { text: "Rooted in Swiss International Typographic style and contemporary digital system scalability. Specializing in high-density corporate visual standards, spatial orientation grids, and generative font pairing systems for global cultural institutions and premier financial houses.", fontSize: 11.5, fontFamily: "Inter", fill: "#3f3f46", lineHeight: 1.6 }),

      el("r-205-c1-sk-h", "text", 70, 410, 305, 22, { text: "SYSTEMIC DISCIPLINES", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#09090b", letterSpacing: 1 }),
      el("r-205-c1-sk-p", "text", 70, 438, 305, 180, { text: "• Micro-Typography & Grid Scaling\n• Variable Font Engineering\n• Multi-Platform Token Hierarchies\n• Wayfinding & Architectural Signage\n• Generative Identity Automations\n• Monograph & Catalog Editorial\n• Brand Governance Manuals\n• Spatial Exhibition Design", fontSize: 11.5, fontFamily: "Inter", fill: "#3f3f46", lineHeight: 1.75 }),

      el("r-205-c1-tl-h", "text", 70, 640, 305, 22, { text: "COMPUTATIONAL TOOLS", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#09090b", letterSpacing: 1 }),
      el("r-205-c1-tl-p", "text", 70, 668, 305, 150, { text: "Figma (Enterprise Variables), Glyphs 3 (Custom Font Design), Python / DrawBot (Algorithmic Type Layout), InDesign, Processing, CSS Variables, Git, Blender (Spatial Mockups)", fontSize: 11, fontFamily: "Inter", fill: "#71717a", lineHeight: 1.65 }),

      el("r-205-c1-ed-h", "text", 70, 840, 305, 22, { text: "ACADEMIC DEGREES", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#09090b", letterSpacing: 1 }),
      el("r-205-c1-ed-p", "text", 70, 868, 305, 150, { text: "Master of Arts in Visual Communication\nZürcher Hochschule der Künste (ZHdK)\nFirst-Class Honors (2010 — 2012)\n\nBachelor of Arts in Graphic Design\nBasel School of Design (Schule für Gestaltung)\nDiploma with Distinction (2006 — 2010)", fontSize: 11, fontFamily: "Inter", fill: "#3f3f46", lineHeight: 1.6 }),

      el("r-205-c1-lg-h", "text", 70, 1040, 305, 22, { text: "LANGUAGES", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#09090b", letterSpacing: 1 }),
      el("r-205-c1-lg-p", "text", 70, 1068, 305, 95, { text: "German (Native / Muttersprache)\nEnglish (Fluent / C2)\nFrench (Professional / C1)\nItalian (Conversational / B1)", fontSize: 11, fontFamily: "Inter", fill: "#52525b", lineHeight: 1.6 }),

      el("r-205-c1-cl-h", "text", 70, 1185, 305, 22, { text: "CLIENT PARTNERS", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#09090b", letterSpacing: 1 }),
      el("r-205-c1-cl-p", "text", 70, 1213, 305, 140, { text: "Swiss National Museum · Zurich Airport · UBS Private Banking · Swiss Re · Vitra Design · Kunsthaus Zürich · Lars Müller Publishers · SBB CFF FFS", fontSize: 11, fontFamily: "Inter", fill: "#71717a", lineHeight: 1.7 }),

      el("r-205-c1-code", "text", 70, 1550, 305, 20, { text: "CH-8001 ZÜRICH · AG-VOGEL", fontSize: 10, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#ef4444" }),

      // Column 2: Practice & Leadership (x=430, w=340)
      el("r-205-c2-h", "text", 430, 210, 340, 24, { text: "02 / PRACTICE", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ef4444" }),

      el("r-205-c2-r1-t", "text", 430, 240, 340, 22, { text: "Principal Design Lead | Vogel Atelier", fontSize: 13.5, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#09090b" }),
      el("r-205-c2-r1-d", "text", 430, 264, 340, 20, { text: "2019 — PRESENT · ZÜRICH", fontSize: 11, fontFamily: "Inter", fontWeight: "700", fill: "#ef4444" }),
      el("r-205-c2-r1-p", "text", 430, 288, 340, 130, { text: "• Direct studio of 14 visual architects and creative developers.\n• Architected comprehensive visual identity standards for the Swiss National Museum across physical and digital collections.\n• Designed complete wayfinding typography for Zurich Airport Terminal 3 expansion, processing 14M annual transit passengers.", fontSize: 11.5, fontFamily: "Inter", fill: "#3f3f46", lineHeight: 1.6 }),

      el("r-205-c2-r2-t", "text", 430, 435, 340, 22, { text: "Design Director | Pentagram Berlin", fontSize: 13.5, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#09090b" }),
      el("r-205-c2-r2-d", "text", 430, 459, 340, 20, { text: "2014 — 2019 · BERLIN", fontSize: 11, fontFamily: "Inter", fontWeight: "700", fill: "#ef4444" }),
      el("r-205-c2-r2-p", "text", 430, 483, 340, 130, { text: "• Led identity overhauls for European mobility and cultural institutions.\n• Crafted custom display typeface for BMW Group cultural sponsorship program.\n• Directed editorial redesign for Bauhaus Dessau foundation monograph series, winning German Design Award Gold.", fontSize: 11.5, fontFamily: "Inter", fill: "#3f3f46", lineHeight: 1.6 }),

      el("r-205-c2-r3-t", "text", 430, 630, 340, 22, { text: "Senior Brand Architect | Studio Dumbar", fontSize: 13.5, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#09090b" }),
      el("r-205-c2-r3-d", "text", 430, 654, 340, 20, { text: "2010 — 2014 · ROTTERDAM", fontSize: 11, fontFamily: "Inter", fontWeight: "700", fill: "#ef4444" }),
      el("r-205-c2-r3-p", "text", 430, 678, 340, 115, { text: "• Developed generative corporate brand identities utilizing live data inputs.\n• Created procedural dynamic logo engine for Dutch national railway network across 400 station display boards.\n• Supervised junior designers in brand guidelines production.", fontSize: 11.5, fontFamily: "Inter", fill: "#3f3f46", lineHeight: 1.6 }),

      el("r-205-c2-sys-h", "text", 430, 815, 340, 22, { text: "SIGNATURE SYSTEMS DELIVERED", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#09090b", letterSpacing: 1 }),

      el("r-205-c2-s1-t", "text", 430, 845, 340, 20, { text: "Zurich Airport Terminal 3 Orientation System", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#09090b" }),
      el("r-205-c2-s1-d", "text", 430, 868, 340, 55, { text: "Parametric multilingual wayfinding typography engineered for legibility from 40 meters distance under extreme variable daylight conditions.", fontSize: 11, fontFamily: "Inter", fill: "#52525b", lineHeight: 1.55 }),

      el("r-205-c2-s2-t", "text", 430, 935, 340, 20, { text: "Swiss Re Corporate Design Standards", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#09090b" }),
      el("r-205-c2-s2-d", "text", 430, 958, 340, 55, { text: "Modular design tokens governing 1,200 annual executive financial publications, internal dashboards, and investor portal touchpoints.", fontSize: 11, fontFamily: "Inter", fill: "#52525b", lineHeight: 1.55 }),

      el("r-205-c2-s3-t", "text", 430, 1025, 340, 20, { text: "Swiss National Museum Digital Archive", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#09090b" }),
      el("r-205-c2-s3-d", "text", 430, 1048, 340, 55, { text: "Multi-axis typographic layout engine organizing 850,000 historical artifacts with synchronized spatial search metadata.", fontSize: 11, fontFamily: "Inter", fill: "#52525b", lineHeight: 1.55 }),

      el("r-205-c2-ph-h", "text", 430, 1125, 340, 22, { text: "TYPOGRAPHIC AXIOMS", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#09090b", letterSpacing: 1 }),
      el("r-205-c2-ph-p", "text", 430, 1153, 340, 140, { text: "“Order is not the enemy of expression. In the strictness of the grid, information achieves its purest utility and supreme visual dignity.” The practice synthesizes Josef Müller-Brockmann's systematic rigor with contemporary multi-viewport responsive fluidity.", fontSize: 11.5, fontFamily: "Inter", fontStyle: "italic", fill: "#3f3f46", lineHeight: 1.65 }),

      el("r-205-c2-ft", "text", 430, 1550, 340, 20, { text: "ALLIANCE GRAPHIQUE INTERNATIONALE (AGI) ELECTED", fontSize: 10, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#71717a" }),

      // Column 3: Commissions & Honors (x=820, w=310)
      el("r-205-c3-h", "text", 820, 210, 310, 24, { text: "03 / COMMISSIONS", fontSize: 13, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#ef4444" }),

      el("r-205-c3-p", "text", 820, 240, 310, 200, { text: "• Swiss Federal Design Award (2023)\n• 100 Beste Plakate Deutschland Österreich Schweiz (Gold Prize 2024, Silver 2021)\n• Monograph: ‘Systemic Grids in Digital Space’, Lars Müller Publishers (2022)\n• TDC New York Certificate of Typographic Excellence (3x Winner)\n• Red Dot: Best of the Best in Brand Identity (2021, 2023)\n• European Design Awards: Gold Trophy (2020)\n• Jan Tschichold Award Nominee", fontSize: 11.5, fontFamily: "Inter", fill: "#3f3f46", lineHeight: 1.8 }),

      el("r-205-c3-ac-h", "text", 820, 460, 310, 22, { text: "ACADEMIC APPOINTMENTS", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#09090b", letterSpacing: 1 }),
      el("r-205-c3-ac-p", "text", 820, 488, 310, 140, { text: "• Guest Professor of Typography\n  ECAL Lausanne (2021 — Present)\n• Visiting Lecturer in Grid Systems\n  Hochschule für Gestaltung Schwäbisch Gmünd\n• Masterclass Leader: Basel School of Design Summer Workshops\n• External Examiner: Royal College of Art London", fontSize: 11, fontFamily: "Inter", fill: "#3f3f46", lineHeight: 1.65 }),

      el("r-205-c3-jr-h", "text", 820, 650, 310, 22, { text: "JURY APPOINTMENTS", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#09090b", letterSpacing: 1 }),
      el("r-205-c3-jr-p", "text", 820, 678, 310, 130, { text: "• Jury President: Swiss Design Awards (Graphic Design Category 2024)\n• Juror: 100 Beste Plakate International (2022)\n• Juror: D&AD Awards (Typography & Spatial 2023)\n• Panelist: Type Directors Club Annual 69", fontSize: 11, fontFamily: "Inter", fill: "#3f3f46", lineHeight: 1.65 }),

      el("r-205-c3-mus-h", "text", 820, 830, 310, 22, { text: "MUSEUM COLLECTIONS", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#09090b", letterSpacing: 1 }),
      el("r-205-c3-mus-p", "text", 820, 858, 310, 130, { text: "Permanent archival collections:\n• Museum für Gestaltung Zürich (Poster Collection: 18 works)\n• Stedelijk Museum Amsterdam (Graphic Design Archive)\n• Die Neue Sammlung — The Design Museum Munich\n• Bibliothèque nationale de France (Paris)", fontSize: 11, fontFamily: "Inter", fill: "#52525b", lineHeight: 1.65 }),

      el("r-205-c3-pub-h", "text", 820, 1010, 310, 22, { text: "MONOGRAPHS & ESSAYS", fontSize: 12, fontFamily: "Space Grotesk", fontWeight: "800", fill: "#09090b", letterSpacing: 1 }),
      el("r-205-c3-pub-p", "text", 820, 1038, 310, 150, { text: "• 'Systemic Grids in Digital Space', Lars Müller Publishers, 280pp, 2022\n• 'Variable Fonts as Spatial Architecture', Slanted Magazine #40\n• 'The Swiss Poster: A Century of Structural Reduction', Eye Magazine #101\n• 'Beyond CSS: Algorithmic Typography in Computational Spaces', Volume Journal", fontSize: 11, fontFamily: "Inter", fill: "#3f3f46", lineHeight: 1.65 }),

      el("r-205-c3-ft", "text", 820, 1550, 310, 20, { text: "GRID SYSTEM 2026 // EDITION SWISS", fontSize: 10, fontFamily: "Space Grotesk", fontWeight: "700", fill: "#ef4444" })
    ]
  },

  // =========================================================================
  // 206: ACADEMIC CLINICAL ONCOLOGY (Family 6: Academic - 2-Column CV)
  // =========================================================================
  {
    id: 206,
    name: "Academic Clinical Oncology Research Scientist Curriculum Vitae",
    title: "DR. ELIAS THORNE, MD, PHD · CLINICAL ONCOLOGY INVESTIGATOR",
    description: "Rigorous academic curriculum vitae. Top right clinical portrait badge, NIH grant ledger table, peer-reviewed citation index, and medical professorship appointments.",
    category: "Resume",
    subcategory: "Medical",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Academic", "Medical", "Doctor", "Oncology", "NIH", "Researcher"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4290,
    views: 34100,
    gradient: "#ffffff",
    fonts: ["Merriweather", "Inter"],
    colors: ["#ffffff", "#0f172a", "#0284c7", "#f0f9ff"],
    elements: [
      el("r-206-bg", "rect", 0, 0, 1200, 1697, { fill: "#ffffff", locked: true }),
      el("r-206-rule", "rect", 70, 55, 1060, 3, { fill: "#0284c7" }),

      // Header Full Width (x=70, w=1060)
      el("r-206-name", "text", 70, 75, 1060, 42, { text: "ELIAS THORNE, M.D., PH.D.", fontSize: 38, fontFamily: "Merriweather", fontWeight: "900", fill: "#0f172a" }),
      el("r-206-role", "text", 70, 124, 1060, 24, { text: "PROFESSOR OF MEDICINE · CHIEF OF TRANSLATIONAL ONCOLOGY & IMMUNOTHERAPY", fontSize: 12.5, fontFamily: "Inter", fontWeight: "700", fill: "#0284c7", letterSpacing: 1 }),
      el("r-206-contact", "text", 70, 154, 1060, 40, { text: "elias.thorne@hopkinsmedicine.org   |   +1 (410) 955-5000   |   Baltimore, MD\nJohns Hopkins Sidney Kimmel Comprehensive Cancer Center   |   ORCID: 0000-0002-8491-9210", fontSize: 11.5, fontFamily: "Inter", fill: "#64748b", lineHeight: 1.6 }),

      el("r-206-div1", "line", 70, 225, 1060, 1, { fill: "#cbd5e1", strokeWidth: 1 }),

      // Left Column (w=640, x=70): Portrait, Appointments, Trial Dossier, Publications
      el("r-206-avatar", "image", 70, 245, 130, 130, { src: PHOTOS_RESUMES[206], borderRadius: 65 }),
      el("r-206-av-bdr", "circle", 70, 245, 130, 130, { fill: "transparent", stroke: "#0284c7", strokeWidth: 2 }),

      el("r-206-sec2-t", "text", 220, 245, 490, 24, { text: "FACULTY & CLINICAL HOSPITAL APPOINTMENTS", fontSize: 13.5, fontFamily: "Inter", fontWeight: "800", fill: "#0f172a", letterSpacing: 1 }),

      el("r-206-ap1-t", "text", 220, 275, 300, 22, { text: "Professor of Medicine & Oncology | Johns Hopkins", fontSize: 13.5, fontFamily: "Merriweather", fontWeight: "700", fill: "#0f172a" }),
      el("r-206-ap1-d", "text", 520, 275, 190, 22, { text: "2018 — PRES.", fontSize: 11.5, fontFamily: "Inter", fontWeight: "700", fill: "#0284c7", textAlign: "right" }),
      el("r-206-ap1-p", "text", 220, 300, 490, 65, { text: "• Direct 28-person cellular engineering laboratory; supervised 14 fellows.\n• Co-Director, Cellular Therapeutics GMP Facility; translated 6 IND products.", fontSize: 11.5, fontFamily: "Inter", fill: "#334155", lineHeight: 1.55 }),

      el("r-206-ap2-t", "text", 70, 390, 450, 22, { text: "Associate Professor | Dana-Farber Cancer Institute", fontSize: 13.5, fontFamily: "Merriweather", fontWeight: "700", fill: "#0f172a" }),
      el("r-206-ap2-d", "text", 520, 390, 190, 22, { text: "2013 — 2018", fontSize: 11.5, fontFamily: "Inter", fontWeight: "700", fill: "#0284c7", textAlign: "right" }),
      el("r-206-ap2-p", "text", 70, 415, 640, 50, { text: "• Led early-phase immuno-oncology trial unit; developed bispecific antibody constructs for solid tumors.\n• Published 34 peer-reviewed manuscripts; principal investigator on 3 clinical trials.", fontSize: 11.5, fontFamily: "Inter", fill: "#334155", lineHeight: 1.55 }),

      // Clinical Trial Highlight Box
      el("r-206-trial-bg", "rect", 70, 480, 640, 145, { fill: "#f0f9ff", borderRadius: 8, stroke: "#bae6fd", strokeWidth: 1 }),
      el("r-206-tb-h", "text", 90, 496, 600, 22, { text: "PRINCIPAL INVESTIGATOR CLINICAL TRIAL DOSSIER // FDA IND #184910", fontSize: 12.5, fontFamily: "Inter", fontWeight: "800", fill: "#0369a1" }),
      el("r-206-tb-p", "text", 90, 522, 600, 90, { text: "• Autologous dual-targeting CAR-T cellular therapy in recurrent refractory ovarian carcinoma (Phase I/II).\n• Achieved 74% objective disease control rate across 48 enrolled subjects with zero dose-limiting cytokine release toxicities.\n• Correlative single-cell RNA sequencing identified novel persistence signature published in Nature Medicine.", fontSize: 11.5, fontFamily: "Inter", fill: "#1e293b", lineHeight: 1.6 }),

      el("r-206-l-div1", "line", 70, 640, 640, 1, { fill: "#cbd5e1", strokeWidth: 1 }),

      // Publications
      el("r-206-sec4-t", "text", 70, 658, 640, 24, { text: "SELECTED HIGH-IMPACT PEER-REVIEWED PUBLICATIONS", fontSize: 13.5, fontFamily: "Inter", fontWeight: "800", fill: "#0f172a", letterSpacing: 1 }),

      el("r-206-pb1", "text", 70, 688, 640, 65, { text: "1. Thorne E., Vance R., Lin M., et al. 'Dual-Antigen Sensing CAR-T Cells Eradicate Heterogeneous Solid Tumors.' New England Journal of Medicine, 2023; 388:1492-1504. (Cited 420x · DOI: 10.1056/NEJMoa2214981)", fontSize: 11, fontFamily: "Inter", fill: "#1e293b", lineHeight: 1.55 }),

      el("r-206-pb2", "text", 70, 765, 640, 65, { text: "2. Thorne E., Reynolds C., et al. 'Single-Cell Dissection of Exhaustion Trajectories in Adoptively Transferred T-Cells.' Nature Medicine, 2021; 27:812-824. (Cited 890x · DOI: 10.1038/s41591-021-01314-x)", fontSize: 11, fontFamily: "Inter", fill: "#1e293b", lineHeight: 1.55 }),

      el("r-206-pb3", "text", 70, 842, 640, 65, { text: "3. Thorne E., et al. 'Phase I Clinical Evaluation of Fourth-Generation Armored CAR-T in Refractory Solid Malignancies.' Lancet Oncology, 2020; 21:1140-1152. (Cited 310x · DOI: 10.1016/S1470-2045(20)30381-2)", fontSize: 11, fontFamily: "Inter", fill: "#1e293b", lineHeight: 1.55 }),

      el("r-206-pb4", "text", 70, 920, 640, 65, { text: "4. Thorne E., et al. 'Metabolic Reprogramming of Exhausted T Cells Enhances In Vivo Antitumor Efficacy.' Cancer Cell, 2018; 34:640-655. (Cited 640x · DOI: 10.1016/j.ccell.2018.09.004)", fontSize: 11, fontFamily: "Inter", fill: "#1e293b", lineHeight: 1.55 }),

      el("r-206-l-div2", "line", 70, 1000, 640, 1, { fill: "#cbd5e1", strokeWidth: 1 }),

      // Patents & Translation
      el("r-206-sec5-t", "text", 70, 1018, 640, 24, { text: "ISSUED PATENTS & TRANSLATIONAL INVENTIONS", fontSize: 13.5, fontFamily: "Inter", fontWeight: "800", fill: "#0f172a", letterSpacing: 1 }),
      el("r-206-pat-p", "text", 70, 1046, 640, 110, { text: "• US Patent #11,286,291: 'Engineered Synthetic Chimeric Antigen Receptors with Tunable Affinity' (Granted 2022 · Licensed to BMS)\n• US Patent #10,844,118: 'Compositions and Methods for Overcoming T-Cell Hyporesponsiveness in Solid Tumors' (Granted 2020)\n• International Patent PCT/US2023/048192: 'Dual Switchable CAR-T Constructs with Logic Gating' (Filed 2023)", fontSize: 11.5, fontFamily: "Inter", fill: "#334155", lineHeight: 1.65 }),

      el("r-206-l-div3", "line", 70, 1175, 640, 1, { fill: "#cbd5e1", strokeWidth: 1 }),

      // Teaching & Mentorship
      el("r-206-sec7-t", "text", 70, 1192, 640, 24, { text: "ACADEMIC TEACHING & POSTDOCTORAL MENTORSHIP", fontSize: 13.5, fontFamily: "Inter", fontWeight: "800", fill: "#0f172a", letterSpacing: 1 }),
      el("r-206-tch-p", "text", 70, 1220, 640, 140, { text: "Course Director, Graduate Immunology: 'Cellular Engineering & Immunotherapy' (JHU SOM · 2019 — Present).\nPrimary mentor to 14 postdoctoral research fellows (7 now hold tenure-track faculty appointments at peer academic medical centers) and 8 hematology/oncology clinical sub-specialty fellows.\nRecipient of the Johns Hopkins Medical Student Teaching Award (2022).", fontSize: 11.5, fontFamily: "Inter", fill: "#334155", lineHeight: 1.65 }),

      el("r-206-l-div4", "line", 70, 1375, 640, 1, { fill: "#cbd5e1", strokeWidth: 1 }),

      // Clinical Practice Commitment
      el("r-206-sec8-t", "text", 70, 1392, 640, 24, { text: "CLINICAL PRACTICE COMMITMENT & HOSPITAL PRIVILEGES", fontSize: 13.5, fontFamily: "Inter", fontWeight: "800", fill: "#0f172a", letterSpacing: 1 }),
      el("r-206-cli-p", "text", 70, 1420, 640, 150, { text: "Active inpatient attending physician on the Johns Hopkins Inpatient Oncology Service (8 weeks annually) and outpatient Thoracic & Cellular Immunotherapy Clinic (half-day weekly). Full active medical staff privileges at The Johns Hopkins Hospital and Johns Hopkins Bayview Medical Center.", fontSize: 11.5, fontFamily: "Inter", fill: "#334155", lineHeight: 1.65 }),

      // Right Column (w=380, x=750): Grants, Education, Certifications
      el("r-206-rc-bg", "rect", 750, 245, 380, 1335, { fill: "#f8fafc", borderRadius: 8, stroke: "#e2e8f0", strokeWidth: 1 }),

      el("r-206-sec3-t", "text", 770, 265, 340, 22, { text: "ACTIVE RESEARCH GRANTS (PI)", fontSize: 12.5, fontFamily: "Inter", fontWeight: "800", fill: "#0369a1", letterSpacing: 1 }),

      el("r-206-gr1-t", "text", 770, 295, 340, 36, { text: "NIH / NCI R01 CA249102\n'Switchable CAR-T Cell Therapies'", fontSize: 11.5, fontFamily: "Inter", fontWeight: "700", fill: "#0f172a" }),
      el("r-206-gr1-d", "text", 770, 335, 340, 20, { text: "$3.8M Direct Costs · 2021 — 2026 (PI)", fontSize: 11, fontFamily: "Inter", fontWeight: "700", fill: "#0284c7" }),

      el("r-206-gr2-t", "text", 770, 370, 340, 36, { text: "Stand Up to Cancer (SU2C) Grant\n'Overcoming Immunosuppression'", fontSize: 11.5, fontFamily: "Inter", fontWeight: "700", fill: "#0f172a" }),
      el("r-206-gr2-d", "text", 770, 410, 340, 20, { text: "$4.2M Funding · 2020 — 2025 (PI)", fontSize: 11, fontFamily: "Inter", fontWeight: "700", fill: "#0284c7" }),

      el("r-206-rc-div1", "line", 770, 445, 340, 1, { fill: "#e2e8f0", strokeWidth: 1 }),

      el("r-206-sec1-t", "text", 770, 465, 340, 22, { text: "EDUCATION & FELLOWSHIPS", fontSize: 12.5, fontFamily: "Inter", fontWeight: "800", fill: "#0369a1", letterSpacing: 1 }),
      el("r-206-ed-p", "text", 770, 492, 340, 250, { text: "Memorial Sloan Kettering Cancer Center\nFellow in Medical Oncology (Chief Fellow)\n(2010 — 2013 · New York, NY)\n\nJohns Hopkins Hospital (Osler Service)\nResident in Internal Medicine\n(2007 — 2010 · Baltimore, MD)\n\nHarvard Medical School\nM.D. & Ph.D. in Immunology (MSTP)\nMagna Cum Laude (1999 — 2007)\n\nYale University | B.S. in Biophysics\nSumma Cum Laude · Phi Beta Kappa", fontSize: 11, fontFamily: "Inter", fill: "#334155", lineHeight: 1.65 }),

      el("r-206-rc-div2", "line", 770, 760, 340, 1, { fill: "#e2e8f0", strokeWidth: 1 }),

      el("r-206-sec6-t", "text", 770, 780, 340, 22, { text: "BOARD CERTIFICATIONS", fontSize: 12.5, fontFamily: "Inter", fontWeight: "800", fill: "#0369a1", letterSpacing: 1 }),
      el("r-206-soc-p", "text", 770, 808, 340, 260, { text: "• ABIM Medical Oncology\n  (Certified 2013, Recertified 2023)\n• ABIM Internal Medicine (2010)\n• Maryland Medical License #D0084912\n• New York State Medical Board #249102\n\nPROFESSIONAL SOCIETIES\n• Fellow, ASCO (FASCO)\n• Fellow, American College of Physicians\n• Member, AACR & SITC\n• Editorial Board: Cancer Discovery & JCO", fontSize: 11, fontFamily: "Inter", fill: "#334155", lineHeight: 1.7 }),

      el("r-206-rc-div3", "line", 770, 1085, 340, 1, { fill: "#e2e8f0", strokeWidth: 1 }),

      el("r-206-rc-aw-t", "text", 770, 1105, 340, 22, { text: "AWARDS & DISTINCTIONS", fontSize: 12.5, fontFamily: "Inter", fontWeight: "800", fill: "#0369a1", letterSpacing: 1 }),
      el("r-206-rc-aw-p", "text", 770, 1132, 340, 240, { text: "• ASCO Young Investigator Award\n• Damon Runyon-Rachleff Innovation Award\n• V Foundation for Cancer Research Scholar\n• Johns Hopkins Clinician-Scientist Prize\n• Keynote Speaker: AACR Annual Meeting\n• Plenary Speaker: SITC Annual Congress", fontSize: 11, fontFamily: "Inter", fill: "#334155", lineHeight: 1.75 }),

      el("r-206-rc-ft", "text", 770, 1545, 340, 20, { text: "NCI DESIGNATED COMPREHENSIVE CANCER CENTER", fontSize: 10, fontFamily: "Inter", fontWeight: "700", fill: "#0369a1", textAlign: "center" })
    ]
  },

  // =========================================================================
  // 207: PRODUCT MANAGEMENT GROWTH & ARR METRICS (Family 9: Modular Cards)
  // =========================================================================
  {
    id: 207,
    name: "Product Management Growth & ARR Metrics Resume",
    title: "LIAM O'CONNOR · GROUP PRODUCT MANAGER",
    description: "Growth product leadership resume. Top left photo badge, two-column split layout with case study cards on the right column.",
    category: "Resume",
    subcategory: "Product",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Product", "GPM", "SaaS", "Growth", "PLG", "Metrics"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4610,
    views: 38700,
    gradient: "linear-gradient(180deg, #fafaf9 0%, #f5f5f4 100%)",
    fonts: ["DM Sans", "Inter"],
    colors: ["#fafaf9", "#1c1917", "#10b981", "#64748b"],
    elements: [
      el("r-207-bg", "rect", 0, 0, 1200, 1697, { fill: "#fafaf9", locked: true }),

      // Top Left Avatar
      el("r-207-avatar", "image", 70, 60, 140, 140, { src: PHOTOS_RESUMES[207], borderRadius: 70 }),
      el("r-207-av-bdr", "circle", 70, 60, 140, 140, { fill: "transparent", stroke: "#10b981", strokeWidth: 3 }),

      // Header on Right of Photo (x=240, w=890)
      el("r-207-name", "text", 240, 62, 890, 46, { text: "LIAM O’CONNOR", fontSize: 40, fontFamily: "DM Sans", fontWeight: "900", fill: "#1c1917" }),
      el("r-207-role", "text", 240, 116, 890, 24, { text: "GROUP PRODUCT MANAGER · PRODUCT-LED GROWTH (PLG) & MONETIZATION", fontSize: 13, fontFamily: "DM Sans", fontWeight: "700", fill: "#10b981", letterSpacing: 1 }),
      el("r-207-meta", "text", 240, 146, 890, 22, { text: "liam@oconnor-pm.io | +1 (415) 390-2104 | San Francisco, CA | Reforge Fellow | linkedin.com/in/liam-oconnor-pm", fontSize: 11.5, fontFamily: "Inter", fill: "#78716c" }),

      // Left Column: Experience & Practice (x=70, w=530)
      el("r-207-sec1-t", "text", 70, 230, 530, 24, { text: "PRODUCT LEADERSHIP TENURE", fontSize: 14.5, fontFamily: "DM Sans", fontWeight: "800", fill: "#1c1917", letterSpacing: 1 }),

      // Role 1
      el("r-207-j1-t", "text", 70, 260, 530, 22, { text: "Group Product Manager — PLG & Monetization | Figma", fontSize: 14, fontFamily: "DM Sans", fontWeight: "800", fill: "#1c1917" }),
      el("r-207-j1-d", "text", 70, 284, 530, 20, { text: "2021 — PRESENT · SAN FRANCISCO, CA", fontSize: 11, fontFamily: "Inter", fontWeight: "700", fill: "#10b981" }),
      el("r-207-j1-p", "text", 70, 308, 530, 125, { text: "• Lead 4 cross-functional squads (32 engineers, 5 product designers, 4 data scientists) responsible for self-serve monetization and collaborative seat expansion.\n• Shipped usage-based AI token credit model, generating +$42M net new ARR within 18 months post-launch.\n• Optimized workspace invite viral loops, improving viral sharing coefficient from 1.14 to 1.42 across global enterprise accounts.", fontSize: 11.5, fontFamily: "Inter", fill: "#44403c", lineHeight: 1.6 }),

      // Role 2
      el("r-207-j2-t", "text", 70, 445, 530, 22, { text: "Lead Product Manager — Checkout & Billing | Stripe", fontSize: 14, fontFamily: "DM Sans", fontWeight: "800", fill: "#1c1917" }),
      el("r-207-j2-d", "text", 70, 469, 530, 20, { text: "2018 — 2021 · SAN FRANCISCO, CA", fontSize: 11, fontFamily: "Inter", fontWeight: "700", fill: "#10b981" }),
      el("r-207-j2-p", "text", 70, 493, 530, 125, { text: "• Directed Stripe Checkout core experience; added dynamic localized payment methods lifting global merchant checkout conversion by +8.4%.\n• Launched automated billing retry engine (Smart Retries) leveraging machine learning to recover $210M in delinquent subscription churn.\n• Ran 120+ concurrent A/B experiments on pricing page localization and checkout button typography.", fontSize: 11.5, fontFamily: "Inter", fill: "#44403c", lineHeight: 1.6 }),

      // Role 3
      el("r-207-j3-t", "text", 70, 630, 530, 22, { text: "Senior Product Manager — Growth Funnels | Slack", fontSize: 14, fontFamily: "DM Sans", fontWeight: "800", fill: "#1c1917" }),
      el("r-207-j3-d", "text", 70, 654, 530, 20, { text: "2015 — 2018 · SAN FRANCISCO, CA", fontSize: 11, fontFamily: "Inter", fontWeight: "700", fill: "#10b981" }),
      el("r-207-j3-p", "text", 70, 678, 530, 110, { text: "• Scaled self-serve customer onboarding from 500k to 6M active teams; introduced automated team directory integration reducing day-1 churn by 22%.\n• Partnered with marketing to build multi-touch attribution pipeline evaluating customer acquisition costs (CAC) across 14 ad channels.", fontSize: 11.5, fontFamily: "Inter", fill: "#44403c", lineHeight: 1.6 }),

      el("r-207-l-div1", "line", 70, 800, 530, 1, { fill: "#e7e5e4", strokeWidth: 1 }),

      // Discovery & Execution Framework
      el("r-207-sec2-t", "text", 70, 818, 530, 24, { text: "PRODUCT METHODOLOGY & DISCOVERY", fontSize: 14.5, fontFamily: "DM Sans", fontWeight: "800", fill: "#1c1917", letterSpacing: 1 }),
      el("r-207-mth-p", "text", 70, 848, 530, 160, { text: "• Qualitative Discovery: Conducted 240+ direct enterprise buyer interviews across design leads, engineering VPs, and finance directors.\n• Hypothesis-Driven Roadmap: Strict prioritization using ICE and RICE scoring models tied to quantifiable revenue OKRs.\n• Rapid Prototyping: Pioneered 48-hour Figma prototype-to-sandbox validation process reducing engineering rework by 40%.\n• PRD & Spec Quality: Authored 45+ comprehensive PR/FAQs and technical architecture specifications.", fontSize: 11.5, fontFamily: "Inter", fill: "#44403c", lineHeight: 1.65 }),

      el("r-207-l-div2", "line", 70, 1020, 530, 1, { fill: "#e7e5e4", strokeWidth: 1 }),

      // Speaking & Leadership
      el("r-207-sec3-t", "text", 70, 1038, 530, 24, { text: "COMMUNITY, SPEAKING & AWARDS", fontSize: 14.5, fontFamily: "DM Sans", fontWeight: "800", fill: "#1c1917", letterSpacing: 1 }),
      el("r-207-spk-p", "text", 70, 1068, 530, 140, { text: "• Product School: 'Product Leader of the Year' Winner (2023)\n• Speaker: Mind the Product London ('Architecting PLG Monetization Loops')\n• Guest Lecturer: Reforge Advanced Growth Series ('Usage-Based Pricing Models')\n• Host & Creator: 'The Retention Loop' Podcast (45,000 monthly listeners)\n• Mentor: First Round Fast Track & Techstars NYC", fontSize: 11.5, fontFamily: "Inter", fill: "#44403c", lineHeight: 1.7 }),

      el("r-207-l-div3", "line", 70, 1220, 530, 1, { fill: "#e7e5e4", strokeWidth: 1 }),

      // Domain Leadership
      el("r-207-sec4-t", "text", 70, 1238, 530, 24, { text: "CORE DOMAIN PROFICIENCIES", fontSize: 14.5, fontFamily: "DM Sans", fontWeight: "800", fill: "#1c1917", letterSpacing: 1 }),
      el("r-207-dom-p", "text", 70, 1268, 530, 170, { text: "Product-Led Growth (PLG) · Self-Serve Funnels · Viral Coefficient Modeling · B2B SaaS Monetization · Seat Tiering & Packaging · Cohort Retention Analysis · Pricing Experimentation · Cross-Functional Squad Leadership · User Journey Mapping · Executive Stakeholder Alignment", fontSize: 11.5, fontFamily: "Inter", fill: "#44403c", lineHeight: 1.75 }),

      el("r-207-l-ft", "text", 70, 1550, 530, 20, { text: "STANFORD UNIVERSITY ALUMNI // REFORGE FELLOW 2026", fontSize: 10.5, fontFamily: "DM Sans", fontWeight: "700", fill: "#10b981" }),

      // Right Column: Modular Cards (x=630, w=500)
      // Modular Card 1: PLG Experimentation Wins
      el("r-207-cs-bg", "rect", 630, 230, 500, 310, { fill: "#ffffff", borderRadius: 10, stroke: "#e7e5e4", strokeWidth: 1 }),
      el("r-207-cs-h", "text", 655, 252, 450, 22, { text: "PLG EXPERIMENTATION SCORECARD", fontSize: 13.5, fontFamily: "DM Sans", fontWeight: "800", fill: "#1c1917" }),

      el("r-207-cs1-v", "text", 655, 284, 450, 24, { text: "+$42M Net New ARR", fontSize: 16, fontFamily: "DM Sans", fontWeight: "800", fill: "#10b981" }),
      el("r-207-cs1-d", "text", 655, 310, 450, 36, { text: "Re-architected self-serve seat upgrades, credit tiering, and team creation loops.", fontSize: 11, fontFamily: "Inter", fill: "#44403c" }),

      el("r-207-cs2-v", "text", 655, 354, 450, 24, { text: "4.8M MAU Scale", fontSize: 16, fontFamily: "DM Sans", fontWeight: "800", fill: "#1c1917" }),
      el("r-207-cs2-d", "text", 655, 380, 450, 36, { text: "Scaled community creator template marketplace from zero to global ecosystem.", fontSize: 11, fontFamily: "Inter", fill: "#44403c" }),

      el("r-207-cs3-v", "text", 655, 424, 450, 24, { text: "-32% Onboarding Dropoff", fontSize: 16, fontFamily: "DM Sans", fontWeight: "800", fill: "#10b981" }),
      el("r-207-cs3-d", "text", 655, 450, 450, 36, { text: "Replaced static onboarding forms with interactive 3-step canvas sandbox tour.", fontSize: 11, fontFamily: "Inter", fill: "#44403c" }),

      el("r-207-cs4-v", "text", 655, 494, 450, 22, { text: "14.8% Freemium-to-Paid Conversion", fontSize: 14, fontFamily: "DM Sans", fontWeight: "800", fill: "#1c1917" }),

      // Modular Card 2: Technical & Product Stack
      el("r-207-stk-bg", "rect", 630, 560, 500, 290, { fill: "#ffffff", borderRadius: 10, stroke: "#e7e5e4", strokeWidth: 1 }),
      el("r-207-stk-h", "text", 655, 582, 450, 22, { text: "PRODUCT ANALYTICS & TECH STACK", fontSize: 13.5, fontFamily: "DM Sans", fontWeight: "800", fill: "#1c1917" }),

      el("r-207-st1-l", "text", 655, 614, 450, 20, { text: "Product Analytics & Funnel Tracking", fontSize: 12, fontFamily: "DM Sans", fontWeight: "700", fill: "#10b981" }),
      el("r-207-st1-v", "text", 655, 636, 450, 36, { text: "Amplitude, Mixpanel, Heap, PostHog, Segment CDP, Google Analytics 4", fontSize: 11, fontFamily: "Inter", fill: "#44403c" }),

      el("r-207-st2-l", "text", 655, 678, 450, 20, { text: "Data Warehouse, SQL & Experimentation", fontSize: 12, fontFamily: "DM Sans", fontWeight: "700", fill: "#10b981" }),
      el("r-207-st2-v", "text", 655, 700, 450, 36, { text: "Snowflake, BigQuery, dbt, PostgreSQL, Python (Pandas), Statsig, LaunchDarkly", fontSize: 11, fontFamily: "Inter", fill: "#44403c" }),

      el("r-207-st3-l", "text", 655, 742, 450, 20, { text: "Prototyping & Project Management", fontSize: 12, fontFamily: "DM Sans", fontWeight: "700", fill: "#10b981" }),
      el("r-207-st3-v", "text", 655, 764, 450, 36, { text: "Figma (Component Architecture), Linear, Jira, Coda, Notion, Miro", fontSize: 11, fontFamily: "Inter", fill: "#44403c" }),

      // Modular Card 3: Education & Fellowships
      el("r-207-edu-bg", "rect", 630, 870, 500, 290, { fill: "#ffffff", borderRadius: 10, stroke: "#e7e5e4", strokeWidth: 1 }),
      el("r-207-edu-h", "text", 655, 892, 450, 22, { text: "EDUCATION & EXECUTIVE FELLOWSHIPS", fontSize: 13.5, fontFamily: "DM Sans", fontWeight: "800", fill: "#1c1917" }),

      el("r-207-ed1-t", "text", 655, 924, 450, 22, { text: "Stanford University | B.S. in Symbolic Systems", fontSize: 13, fontFamily: "DM Sans", fontWeight: "700", fill: "#1c1917" }),
      el("r-207-ed1-d", "text", 655, 948, 450, 36, { text: "Concentration in Human-Computer Interaction & Artificial Intelligence (2011 — 2015) · Capstone Award Winner", fontSize: 11, fontFamily: "Inter", fill: "#64748b" }),

      el("r-207-ed2-t", "text", 655, 992, 450, 22, { text: "Reforge Executive Fellowships", fontSize: 13, fontFamily: "DM Sans", fontWeight: "700", fill: "#10b981" }),
      el("r-207-ed2-d", "text", 655, 1016, 450, 55, { text: "• Retention & Engagement Series (Casey Winters / Brian Balfour)\n• Advanced Growth Strategy & Monetization (Elena Verna)\n• Product Strategy & Leadership (Fareed Mosavat)", fontSize: 11, fontFamily: "Inter", fill: "#44403c", lineHeight: 1.55 }),

      el("r-207-ed3-t", "text", 655, 1080, 450, 22, { text: "Scrum Alliance Certified Scrum Product Owner (CSPO)", fontSize: 12, fontFamily: "DM Sans", fontWeight: "700", fill: "#1c1917" }),

      // Modular Card 4: Angel Investments & Advisory
      el("r-207-ang-bg", "rect", 630, 1180, 500, 395, { fill: "#ffffff", borderRadius: 10, stroke: "#e7e5e4", strokeWidth: 1 }),
      el("r-207-ang-h", "text", 655, 1205, 450, 22, { text: "ANGEL INVESTING & STARTUP ADVISORY", fontSize: 13.5, fontFamily: "DM Sans", fontWeight: "800", fill: "#1c1917" }),
      el("r-207-ang-p", "text", 655, 1235, 450, 130, { text: "Active angel investor and product strategy advisor to 8 early-stage SaaS and developer tools startups:\n• SuperQuery (AI SQL assistant · Series A funded)\n• LinearFlow (Collaborative roadmap platform · Seed)\n• SynthForm (Generative UI design tokens · YC S23)\n• TokenPay (B2B usage metering infrastructure · Seed)", fontSize: 11, fontFamily: "Inter", fill: "#44403c", lineHeight: 1.65 }),

      el("r-207-adv-h", "text", 655, 1380, 450, 22, { text: "ADVISORY ENGAGEMENTS", fontSize: 12, fontFamily: "DM Sans", fontWeight: "800", fill: "#10b981" }),
      el("r-207-adv-p", "text", 655, 1406, 450, 145, { text: "Advise founders on freemium-to-paid conversion architecture, pricing page redesigns, onboarding funnel instrumentation, and building cross-functional growth engineering squads.", fontSize: 11, fontFamily: "Inter", fill: "#52525b", lineHeight: 1.65 })
    ]
  },

  // =========================================================================
  // 208: WALL STREET M&A DEAL LEDGER (Family 8: Timeline - 2-Column Ledger)
  // =========================================================================
  {
    id: 208,
    name: "Wall Street Investment Banking & M&A Deal Ledger",
    title: "JONATHAN STERLING · MANAGING DIRECTOR, M&A",
    description: "Authoritative Wall Street finance resume. Forest green and gold accents, structured M&A transaction tombstone table in mid-page ($18B+ volume), and corporate debt restructuring history.",
    category: "Resume",
    subcategory: "Finance",
    size: "1200×1697",
    canvasWidth: 1200,
    canvasHeight: 1697,
    orientation: "portrait",
    tags: ["Finance", "Banking", "M&A", "Investment", "Wall Street", "Deals"],
    author: "ORD Studio",
    premium: true,
    isPublished: true,
    likes: 4720,
    views: 39100,
    gradient: "#ffffff",
    fonts: ["Cormorant", "EB Garamond"],
    colors: ["#ffffff", "#064e3b", "#b45309", "#111827"],
    elements: [
      el("r-208-bg", "rect", 0, 0, 1200, 1697, { fill: "#ffffff", locked: true }),
      el("r-208-line-top1", "line", 70, 55, 1060, 2, { fill: "#064e3b", strokeWidth: 2 }),
      el("r-208-line-top2", "line", 70, 61, 1060, 1, { fill: "#b45309", strokeWidth: 0.5 }),

      // Left-Aligned Header
      el("r-208-name", "text", 70, 75, 700, 44, { text: "JONATHAN STERLING", fontSize: 42, fontFamily: "Cormorant", fontWeight: "700", fill: "#064e3b", letterSpacing: 3 }),
      el("r-208-role", "text", 70, 122, 800, 24, { text: "MANAGING DIRECTOR · MERGERS & ACQUISITIONS / LEVERAGED FINANCE", fontSize: 13, fontFamily: "Cormorant", fontWeight: "700", fill: "#b45309", letterSpacing: 2 }),
      el("r-208-meta", "text", 70, 150, 800, 22, { text: "j.sterling@goldman-alumni.com   |   +1 (212) 902-1000   |   New York, NY   |   FINRA Series 7, 63, 79", fontSize: 12, fontFamily: "EB Garamond", fill: "#4b5563" }),

      el("r-208-div1", "line", 70, 180, 1060, 1, { fill: "#d1d5db", strokeWidth: 1 }),

      // Narrative Profile (Full Width)
      el("r-208-sec1-t", "text", 70, 198, 1060, 22, { text: "EXECUTIVE BANKING PROFILE & TRANSACTION MANDATE", fontSize: 13.5, fontFamily: "Cormorant", fontWeight: "700", fill: "#064e3b", letterSpacing: 2 }),
      el("r-208-sum", "text", 70, 224, 1060, 60, { text: "Managing Director with 16 years of top-tier Wall Street advisory expertise directing complex cross-border public company mergers, leveraged buyouts (LBOs), and sovereign debt syndications. Advised C-suite boards on 42 closed transactions totaling over $18.4 billion in enterprise value.", fontSize: 12, fontFamily: "EB Garamond", fill: "#1f2937", lineHeight: 1.55 }),

      el("r-208-div2", "line", 70, 292, 1060, 1, { fill: "#d1d5db", strokeWidth: 1 }),

      // Left Column: Career Timeline, Education & Licenses (x=70, w=430)
      el("r-208-sec2-t", "text", 70, 310, 430, 22, { text: "CAREER PROGRESSION TIMELINE", fontSize: 13.5, fontFamily: "Cormorant", fontWeight: "700", fill: "#064e3b", letterSpacing: 1 }),

      el("r-208-r1-t", "text", 70, 340, 430, 22, { text: "Managing Director & Co-Head Tech M&A | Goldman Sachs", fontSize: 13, fontFamily: "EB Garamond", fontWeight: "700", fill: "#064e3b" }),
      el("r-208-r1-d", "text", 70, 362, 430, 20, { text: "2019 — PRESENT · NEW YORK, NY", fontSize: 11, fontFamily: "EB Garamond", fontWeight: "700", fill: "#b45309" }),
      el("r-208-r1-p", "text", 70, 384, 430, 95, { text: "• Co-lead 32-banker TMT practice generating $110M+ in annual advisory fees.\n• Exclusive financial advisor to Apex Cloud in $6.8B sale to Global Telecom.\n• Advised public boards on contested proxy defenses against activist funds.", fontSize: 11.5, fontFamily: "EB Garamond", fill: "#374151", lineHeight: 1.5 }),

      el("r-208-r2-t", "text", 70, 490, 430, 22, { text: "Executive Director, Technology | Morgan Stanley", fontSize: 13, fontFamily: "EB Garamond", fontWeight: "700", fill: "#064e3b" }),
      el("r-208-r2-d", "text", 70, 512, 430, 20, { text: "2014 — 2019 · MENLO PARK / NY", fontSize: 11, fontFamily: "EB Garamond", fontWeight: "700", fill: "#b45309" }),
      el("r-208-r2-p", "text", 70, 534, 430, 90, { text: "• Closed 16 sell-side M&A and recapitalization mandates totaling $6.2B.\n• Structured $2.2B debt package backing private equity buyout.\n• Managed valuation teams across DCF, LBO, and merger consequences.", fontSize: 11.5, fontFamily: "EB Garamond", fill: "#374151", lineHeight: 1.5 }),

      el("r-208-r3-t", "text", 70, 635, 430, 22, { text: "Vice President / Associate | Lazard Frères & Co.", fontSize: 13, fontFamily: "EB Garamond", fontWeight: "700", fill: "#064e3b" }),
      el("r-208-r3-d", "text", 70, 657, 430, 20, { text: "2009 — 2014 · NEW YORK, NY", fontSize: 11, fontFamily: "EB Garamond", fontWeight: "700", fill: "#b45309" }),
      el("r-208-r3-p", "text", 70, 679, 430, 85, { text: "• Authored confidential information memorandums (CIMs) and models.\n• Conducted intensive financial due diligence on 12 closed mandates.\n• Ranked top-tier associate; promoted directly to Vice President.", fontSize: 11.5, fontFamily: "EB Garamond", fill: "#374151", lineHeight: 1.5 }),

      el("r-208-l-div1", "line", 70, 775, 430, 1, { fill: "#d1d5db", strokeWidth: 1 }),

      // Left Column: Education & Licenses
      el("r-208-sec6-t", "text", 70, 792, 430, 22, { text: "ACADEMIC CREDENTIALS", fontSize: 13.5, fontFamily: "Cormorant", fontWeight: "700", fill: "#064e3b", letterSpacing: 1 }),

      el("r-208-ed1-t", "text", 70, 820, 430, 22, { text: "The Wharton School | M.B.A. in Finance", fontSize: 13, fontFamily: "EB Garamond", fontWeight: "700", fill: "#064e3b" }),
      el("r-208-ed1-d", "text", 70, 842, 430, 20, { text: "Palmer Scholar (Top 5% Distinction) · 2007 — 2009", fontSize: 11, fontFamily: "EB Garamond", fill: "#b45309" }),

      el("r-208-ed2-t", "text", 70, 875, 430, 22, { text: "Princeton University | A.B. in Economics", fontSize: 13, fontFamily: "EB Garamond", fontWeight: "700", fill: "#064e3b" }),
      el("r-208-ed2-d", "text", 70, 897, 430, 20, { text: "Summa Cum Laude · Phi Beta Kappa · 2003 — 2007", fontSize: 11, fontFamily: "EB Garamond", fill: "#b45309" }),

      el("r-208-l-div2", "line", 70, 930, 430, 1, { fill: "#d1d5db", strokeWidth: 1 }),

      el("r-208-finra-h", "text", 70, 948, 430, 22, { text: "FINRA SECURITIES LICENSES", fontSize: 13.5, fontFamily: "Cormorant", fontWeight: "700", fill: "#064e3b", letterSpacing: 1 }),
      el("r-208-finra-p", "text", 70, 975, 430, 110, { text: "• Series 7 (General Securities Representative)\n• Series 63 (Uniform Securities Agent State Law)\n• Series 79 (Investment Banking Professional)\n• Member, New York Society of Security Analysts (NYSSA)\n• Member, Economic Club of New York", fontSize: 11.5, fontFamily: "EB Garamond", fill: "#374151", lineHeight: 1.6 }),

      el("r-208-l-div3", "line", 70, 1095, 430, 1, { fill: "#d1d5db", strokeWidth: 1 }),

      // Left Column: Industry Recognition
      el("r-208-rec-h", "text", 70, 1112, 430, 22, { text: "INDUSTRY RECOGNITION", fontSize: 13.5, fontFamily: "Cormorant", fontWeight: "700", fill: "#064e3b", letterSpacing: 1 }),
      el("r-208-rec-p", "text", 70, 1140, 430, 140, { text: "• M&A Advisor: '40 Under 40' Emerging Leaders Winner\n• Dealmaker of the Year: TMT Cross-Border Advisory\n• Guest Lecturer: Wharton Advanced M&A Seminar\n• Panelist: Milken Institute Global Conference\n• Trustee: Princeton Alumni Endowment Fund", fontSize: 11.5, fontFamily: "EB Garamond", fill: "#374151", lineHeight: 1.7 }),

      el("r-208-l-div4", "line", 70, 1295, 430, 1, { fill: "#d1d5db", strokeWidth: 1 }),

      // Left Column: Core Fiduciary Ethics
      el("r-208-eth-h", "text", 70, 1312, 430, 22, { text: "FIDUCIARY ETHICS & INTEGRITY", fontSize: 13.5, fontFamily: "Cormorant", fontWeight: "700", fill: "#064e3b", letterSpacing: 1 }),
      el("r-208-eth-p", "text", 70, 1340, 430, 230, { text: "Strict adherence to independent advisory objectivity, confidentiality under strict NDAs, and comprehensive conflict-of-interest screening. Advised multiple independent special committees in going-private and conflict transactions requiring rigorous valuation defensibility under Delaware Revlon and Unocal judicial scrutiny.", fontSize: 11.5, fontFamily: "EB Garamond", fill: "#374151", lineHeight: 1.65 }),

      // Right Column: Tombstone Table, Valuation Stack, Fairness Opinions (x=530, w=600)
      el("r-208-sec3-t", "text", 530, 310, 600, 22, { text: "M&A DEAL TOMBSTONE LEDGER ($18.4B+ VOLUME)", fontSize: 13.5, fontFamily: "Cormorant", fontWeight: "700", fill: "#064e3b", letterSpacing: 1 }),

      // Table Header
      el("r-208-th", "rect", 530, 340, 600, 32, { fill: "#f0fdf4", stroke: "#bbf7d0", strokeWidth: 1 }),
      el("r-208-th-d", "text", 542, 348, 120, 18, { text: "VALUE", fontSize: 10.5, fontFamily: "EB Garamond", fontWeight: "700", fill: "#064e3b" }),
      el("r-208-th-t", "text", 670, 348, 250, 18, { text: "TRANSACTION / PARTIES", fontSize: 10.5, fontFamily: "EB Garamond", fontWeight: "700", fill: "#064e3b" }),
      el("r-208-th-r", "text", 930, 348, 190, 18, { text: "ADVISORY MANDATE", fontSize: 10.5, fontFamily: "EB Garamond", fontWeight: "700", fill: "#064e3b", textAlign: "right" }),

      // Row 1
      el("r-208-r1-bg", "rect", 530, 372, 600, 52, { fill: "#ffffff", stroke: "#f3f4f6", strokeWidth: 1 }),
      el("r-208-r1-v", "text", 542, 388, 120, 20, { text: "2024 · $6.8B", fontSize: 12, fontFamily: "EB Garamond", fontWeight: "700", fill: "#111827" }),
      el("r-208-r1-d", "text", 670, 382, 250, 34, { text: "Apex Cloud Infrastructure sale to Global Telecom", fontSize: 11, fontFamily: "EB Garamond", fill: "#374151" }),
      el("r-208-r1-r", "text", 930, 388, 190, 20, { text: "Exclusive Advisor to Target", fontSize: 11, fontFamily: "EB Garamond", fontStyle: "italic", fill: "#064e3b", textAlign: "right" }),

      // Row 2
      el("r-208-r2-bg", "rect", 530, 424, 600, 52, { fill: "#fafafa", stroke: "#f3f4f6", strokeWidth: 1 }),
      el("r-208-r2-v", "text", 542, 440, 120, 20, { text: "2023 · $4.5B", fontSize: 12, fontFamily: "EB Garamond", fontWeight: "700", fill: "#111827" }),
      el("r-208-r2-d", "text", 670, 434, 250, 34, { text: "Cross-Border Merger of St. Claire Industrial", fontSize: 11, fontFamily: "EB Garamond", fill: "#374151" }),
      el("r-208-r2-r", "text", 930, 440, 190, 20, { text: "Lead Advisor to Board", fontSize: 11, fontFamily: "EB Garamond", fontStyle: "italic", fill: "#064e3b", textAlign: "right" }),

      // Row 3
      el("r-208-r3-bg", "rect", 530, 476, 600, 52, { fill: "#ffffff", stroke: "#f3f4f6", strokeWidth: 1 }),
      el("r-208-r3-v", "text", 542, 492, 120, 20, { text: "2022 · $4.1B", fontSize: 12, fontFamily: "EB Garamond", fontWeight: "700", fill: "#111827" }),
      el("r-208-r3-d", "text", 670, 486, 250, 34, { text: "Take-Private LBO of Vanguard Health by Silverlake", fontSize: 11, fontFamily: "EB Garamond", fill: "#374151" }),
      el("r-208-r3-r", "text", 930, 492, 190, 20, { text: "Lead Left Arranger", fontSize: 11, fontFamily: "EB Garamond", fontStyle: "italic", fill: "#064e3b", textAlign: "right" }),

      // Row 4
      el("r-208-r4-bg", "rect", 530, 528, 600, 52, { fill: "#fafafa", stroke: "#f3f4f6", strokeWidth: 1 }),
      el("r-208-r4-v", "text", 542, 544, 120, 20, { text: "2020 · $3.0B", fontSize: 12, fontFamily: "EB Garamond", fontWeight: "700", fill: "#111827" }),
      el("r-208-r4-d", "text", 670, 538, 250, 34, { text: "Carve-Out & Sale of Cloud Enterprise Unit", fontSize: 11, fontFamily: "EB Garamond", fill: "#374151" }),
      el("r-208-r4-r", "text", 930, 544, 190, 20, { text: "Sole Advisor to Parent", fontSize: 11, fontFamily: "EB Garamond", fontStyle: "italic", fill: "#064e3b", textAlign: "right" }),

      el("r-208-r-div1", "line", 530, 595, 600, 1, { fill: "#d1d5db", strokeWidth: 1 }),

      // Right Column: Valuation & Financial Modeling Stack
      el("r-208-sec4-t", "text", 530, 612, 600, 22, { text: "FINANCIAL MODELING & TRANSACTION EXECUTION", fontSize: 13.5, fontFamily: "Cormorant", fontWeight: "700", fill: "#064e3b", letterSpacing: 1 }),

      el("r-208-fn1-t", "text", 530, 640, 290, 20, { text: "Valuation & Analytics", fontSize: 12, fontFamily: "EB Garamond", fontWeight: "700", fill: "#b45309" }),
      el("r-208-fn1-p", "text", 530, 662, 290, 85, { text: "Discounted Cash Flow (DCF) · Leveraged Buyout (LBO) · Comparable Multiples · Precedent Transactions · Accretion/Dilution", fontSize: 11, fontFamily: "EB Garamond", fill: "#374151", lineHeight: 1.5 }),

      el("r-208-fn2-t", "text", 830, 640, 290, 20, { text: "Transaction Structuring", fontSize: 12, fontFamily: "EB Garamond", fontWeight: "700", fill: "#b45309" }),
      el("r-208-fn2-p", "text", 830, 662, 290, 85, { text: "Stock vs. Cash Consideration · Section 338(h)(10) Tax · Collars & Contingent Value Rights · Currency Hedging", fontSize: 11, fontFamily: "EB Garamond", fill: "#374151", lineHeight: 1.5 }),

      el("r-208-r-div2", "line", 530, 760, 600, 1, { fill: "#d1d5db", strokeWidth: 1 }),

      // Right Column: Debt Financing & Syndication
      el("r-208-dbt-t", "text", 530, 778, 600, 22, { text: "DEBT FINANCING & CAPITAL MARKETS SYNDICATION", fontSize: 13.5, fontFamily: "Cormorant", fontWeight: "700", fill: "#064e3b", letterSpacing: 1 }),
      el("r-208-dbt-p", "text", 530, 804, 600, 95, { text: "• Senior Secured Term Loan B & Revolver Underwriting across global syndicates.\n• High-Yield Bond Issuance: Led $1.4B Rule 144A / Regulation S notes offerings.\n• Rating Agency Roadshows: Prepared formal rating agency presentation decks for Moody’s, S&P, and Fitch Ratings securing investment-grade credit upgrades.", fontSize: 11.5, fontFamily: "EB Garamond", fill: "#374151", lineHeight: 1.6 }),

      el("r-208-r-div3", "line", 530, 915, 600, 1, { fill: "#d1d5db", strokeWidth: 1 }),

      // Right Column: Fairness Opinions Box
      el("r-208-sec5-t", "text", 530, 932, 600, 22, { text: "FAIRNESS OPINIONS & DELAWARE CHANCERY EXPERTISE", fontSize: 13.5, fontFamily: "Cormorant", fontWeight: "700", fill: "#064e3b", letterSpacing: 1 }),
      el("r-208-reg-p", "text", 530, 960, 600, 110, { text: "Rendered formal fairness opinions to independent special committees of public boards in 14 contested transactions. Prepared comprehensive valuation backup books submitted to the SEC in Schedule 14D-9 and Schedule 13E-3 filings. Retained as financial expert witness on valuation defensibility in Delaware Court of Chancery appraisal rights litigation.", fontSize: 11.5, fontFamily: "EB Garamond", fill: "#374151", lineHeight: 1.65 }),

      el("r-208-r-div4", "line", 530, 1085, 600, 1, { fill: "#d1d5db", strokeWidth: 1 }),

      // Right Column: Client & Private Equity Roster
      el("r-208-pe-t", "text", 530, 1102, 600, 22, { text: "REPRESENTATIVE CLIENTS & FINANCIAL SPONSORS", fontSize: 13.5, fontFamily: "Cormorant", fontWeight: "700", fill: "#064e3b", letterSpacing: 1 }),
      el("r-208-pe-p", "text", 530, 1130, 600, 110, { text: "Silver Lake Partners · Thoma Bravo · Blackstone · KKR · Vista Equity Partners · General Atlantic · Warburg Pincus · TPG Capital · Microsoft · Cisco Systems · Salesforce · Oracle · SAP · IBM", fontSize: 11.5, fontFamily: "EB Garamond", fill: "#4b5563", lineHeight: 1.75 }),

      el("r-208-r-div5", "line", 530, 1255, 600, 1, { fill: "#d1d5db", strokeWidth: 1 }),

      // Right Column: Governance Mandates
      el("r-208-gov-t", "text", 530, 1272, 600, 22, { text: "BOARD & SPECIAL COMMITTEE TESTIMONY", fontSize: 13.5, fontFamily: "Cormorant", fontWeight: "700", fill: "#064e3b", letterSpacing: 1 }),
      el("r-208-gov-p", "text", 530, 1300, 600, 130, { text: "Delivered over 60 formal presentations to Fortune 500 boards of directors on shareholder activism response, poison pill defenses, and capital return strategies (share repurchases vs. special dividends). Authored proprietary white paper: 'Optimizing Enterprise Value in Post-Zero Interest Rate Eras'.", fontSize: 11.5, fontFamily: "EB Garamond", fill: "#374151", lineHeight: 1.65 }),

      el("r-208-r-div6", "line", 530, 1445, 600, 1, { fill: "#d1d5db", strokeWidth: 1 }),

      el("r-208-finra-p", "text", 530, 1465, 600, 105, { text: "JONATHAN STERLING // MANAGING DIRECTOR M&A // WALL STREET ADVISORY DOSSIER 2026\nNEW YORK · LONDON · SAN FRANCISCO · FRANKFURT\nTRANSACTION VOLUME: $18,450,000,000+ AGGREGATE CLOSED VALUE", fontSize: 10.5, fontFamily: "Cormorant", fontWeight: "700", fill: "#064e3b", lineHeight: 1.6 })
    ]
  }
];
