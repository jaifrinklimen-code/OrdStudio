// ─── Modern High-Impact Presentation Builder ─────────────────────────────────
// Native 1920×1080 Canonical Slide Engine with Strong Typographic Hierarchy & Full-Canvas Composition

export interface SlideElement {
  id: string;
  type: 'rect' | 'circle' | 'text' | 'image' | 'line' | 'star' | 'triangle';
  x: number;
  y: number;
  width: number;
  height: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  opacity?: number;
  borderRadius?: number;
  visible: boolean;
  locked: boolean;
  text?: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: string | number;
  fontStyle?: 'normal' | 'italic';
  alignment?: 'left' | 'center' | 'right';
  lineHeight?: number;
  letterSpacing?: number;
  src?: string;
  rotation?: number;
}

interface TopicConfig {
  themeColor: string;
  accentColor: string;
  bgColor: string;
  coverImage: string;
  aboutImage: string;
  galleryImages: string[];
  slideTitles: string[];
  col1Text: string;
  col2Text: string;
  aboutHighlight: string;
  aboutBody: string;
  stats: { num: string; lbl: string; desc: string; tag: string }[];
  timelineNodes: { phase: string; title: string; desc: string }[];
  painPoints: { label: string; desc: string }[];
  solutions: { title: string; desc: string; stat: string }[];
  takeaways: { title: string; desc: string }[];
  caseStudy: {
    client: string;
    location: string;
    summary: string;
    m1: string; m1Label: string;
    m2: string; m2Label: string;
    quote: string;
    author: string;
  };
  closingMessage: string;
}

function getTopicConfig(title: string): TopicConfig {
  const norm = title.toLowerCase();

  if (norm.includes('ai') || norm.includes('tech') || norm.includes('data') || norm.includes('neural') || norm.includes('cyber') || norm.includes('cloud')) {
    return {
      themeColor: '#06b6d4',
      accentColor: '#38bdf8',
      bgColor: '#05070e',
      coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600',
      aboutImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200',
      galleryImages: [
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
      ],
      slideTitles: [
        title,
        'SYSTEM ROADMAP & CHAPTERS',
        'CORE BOTTLENECK & MARKET FRICTION',
        'AUTONOMOUS INFERENCE ARCHITECTURE',
        'KEY TELEMETRY & THROUGHPUT',
        'DEPLOYED ARCHITECTURE PORTFOLIO',
        'STRATEGIC TIMELINE & MILESTONES',
        'STRATEGIC SYNTHESIS & DIRECTIVES'
      ],
      col1Text: '01 / DISTRIBUTED MESH ORCHESTRATION\nDeterministic sub-millisecond query routing.\n\n02 / ZERO-LATENCY VECTOR STREAMING\nContinuous self-healing state graph replication.',
      col2Text: '03 / HIGH-CONCURRENCY FAULT TOLERANCE\nAutomated cluster recovery without distributed locks.\n\n04 / ENTERPRISE GOVERNANCE PROTOCOL\nZero-trust hardware enclave validation.',
      aboutHighlight: '“We engineer autonomous computational infrastructure for real-time intelligent systems.”',
      aboutBody: 'Modern distributed workloads require deterministic latency, self-healing state meshes, and mathematical safety guarantees across distributed clusters.',
      painPoints: [
        { label: "01 / PIPELINE FRAGMENTATION", desc: "Disparate inference endpoints create severe throughput lag during peak concurrent query cycles." },
        { label: "02 / RUNTIME NON-DETERMINISM", desc: "Legacy state caches introduce unpredictable P99 latency spikes that break user SLAs." },
        { label: "03 / SECURITY BOUNDARY RISK", desc: "Data transmission across multi-region VPCs exposes model weights without hardware isolation." }
      ],
      solutions: [
        { title: "AUTONOMOUS INFERENCE MESH", desc: "Distributed execution kernel optimizing model weight routing in sub-millisecond cycles.", stat: "99.99% Reliability" },
        { title: "ZERO-COPY VECTOR STREAM", desc: "Continuous in-memory state graph synchronization eliminating disk serialization bottlenecks.", stat: "<1.4ms P99 Latency" },
        { title: "ENCLAVE ISOLATION PROTOCOL", desc: "Hardware-enforced confidential computing protecting intellectual property and tenant data.", stat: "Zero-Trust Verified" }
      ],
      stats: [
        { num: '99.99%', lbl: 'Execution Reliability', desc: 'Continuous zero-downtime cluster operation across all major regional cloud enclaves.', tag: 'Zero-Downtime SLA' },
        { num: '1.4ms', lbl: 'Global P99 Latency', desc: 'Sub-millisecond synchronization maintained across distributed fiber backbones.', tag: 'Empirically Validated' },
        { num: '4.8x', lbl: 'Throughput Velocity', desc: 'Sustained throughput acceleration over legacy synchronous query topologies.', tag: 'Audited ROI' }
      ],
      timelineNodes: [
        { phase: 'PHASE 01 · Q1 2026', title: 'Kernel Optimization & Audit', desc: 'Core inference engine release and low-latency benchmark validation across test enclaves.' },
        { phase: 'PHASE 02 · Q2 2026', title: 'Distributed Mesh Rollout', desc: 'Staged deployment across designated partner clusters with automated real-time telemetry.' },
        { phase: 'PHASE 03 · Q3 2026', title: 'Global Multi-Region Federation', desc: 'Full multi-region scale-out with autonomous failure recovery and partner API integration.' }
      ],
      caseStudy: {
        client: 'Global Cloud Intelligence Mesh',
        location: '14 Regional Data Centers · Realized 2025/2026',
        summary: 'A landmark deployment validating that modern distributed architectures unlock unprecedented operational compounding at enterprise scale.',
        m1: '99.99%', m1Label: 'System Uptime',
        m2: '4.8x', m2Label: 'Throughput Velocity',
        quote: '“This architecture sets the definitive benchmark for reliability, speed, and elegance across the modern enterprise computing landscape.”',
        author: 'Executive Vice President · Distributed Systems'
      },
      takeaways: [
        { title: 'ARCHITECTURAL DETERMINISM', desc: 'Low-latency distributed kernels eliminate unpredictable tail latency at scale.' },
        { title: 'HARDWARE-ENFORCED SECURITY', desc: 'Enclave isolation provides mathematical guarantees for multi-tenant deployments.' },
        { title: 'IMMEDIATE CAPITAL COMPOUNDING', desc: 'High-density compute reduces infrastructure energy and server cost by over 40%.' }
      ],
      closingMessage: 'The future of intelligence is autonomous and instant.'
    };
  }

  // Default Professional Business & Editorial Deck
  return {
    themeColor: '#3b82f6',
    accentColor: '#60a5fa',
    bgColor: '#0a0d14',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600',
    aboutImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    ],
    slideTitles: [
      title,
      'EXECUTIVE AGENDA & ROADMAP',
      'MARKET CATALYSTS & OPPORTUNITY',
      'STRATEGIC ADVANTAGE & MOAT',
      'FINANCIAL & OPERATING VELOCITY',
      'ENTERPRISE CASE STUDIES',
      'IMPLEMENTATION TIMELINE',
      'NEXT STEPS & STRATEGIC ALLIANCE'
    ],
    col1Text: '01 / MACRO SHIFTS & MARKET DRIVERS\nEvaluating structural market expansion vectors.\n\n02 / CORE PRODUCT PLATFORM & MOAT\nProprietary technology assets driving retention.',
    col2Text: '03 / GO-TO-MARKET VELOCITY & REVENUE\nCapital-efficient customer acquisition economics.\n\n04 / ENTERPRISE CASE STUDIES & PILOTS\nAudited client outcomes across Fortune 500 accounts.',
    aboutHighlight: '“Transforming modern enterprise workflows through high-velocity design and data architectures.”',
    aboutBody: 'We combine rigorous analytical systems with human-centric visual interfaces, unlocking sustained operational compounding for modern industry leaders.',
    painPoints: [
      { label: "01 / OPERATIONAL SILOS", desc: "Fragmented tools and disconnected teams create significant capital waste and lost execution time." },
      { label: "02 / SLOW GTM CYCLE VELOCITY", desc: "Legacy release gates prevent organizations from capitalizing on rapid market inflection points." },
      { label: "03 / DEFICIENT ROI VISIBILITY", desc: "Lack of granular real-time telemetry obscures unit economic performance across cohorts." }
    ],
    solutions: [
      { title: "UNIFIED OPERATING PLATFORM", desc: "End-to-end workflow automation synchronizing strategy, execution, and data reporting.", stat: "142% Net Retention" },
      { title: "INTELLIGENT INSIGHT ENGINE", desc: "Automated telemetry and real-time business signals driving high-conviction decisions.", stat: "3.6x Speed to Market" },
      { title: "ENTERPRISE SCALABILITY PROTOCOL", desc: "SOC2 Type II certified governance ensuring absolute data integrity across global deployments.", stat: "Zero Security Incidents" }
    ],
    stats: [
      { num: '$48.2M', lbl: 'Annual Recurring Revenue', desc: 'Sustained capital velocity with 142% net revenue retention across enterprise accounts.', tag: 'Audited Financials' },
      { num: '99.8%', lbl: 'Client Satisfaction', desc: 'Unanimous executive endorsement across all Fortune 500 partner deployments.', tag: 'Verified Rating' },
      { num: '3.6x', lbl: 'Operational Efficiency', desc: 'Measurable time savings achieved across cross-functional product organizations.', tag: 'Empirically Validated' }
    ],
    timelineNodes: [
      { phase: 'PHASE 01 · Q1 2026', title: 'Architecture & Pilot Staging', desc: 'Core enterprise architecture rollout and security clearance approvals across initial accounts.' },
      { phase: 'PHASE 02 · Q2 2026', title: 'Cross-Regional Expansion', desc: 'Cross-regional expansion across 14 European and North American enterprise operational hubs.' },
      { phase: 'PHASE 03 · Q3 2026', title: 'Federation & Self-Service', desc: 'Full automated self-service platform availability and deep third-party partner integrations.' }
    ],
    caseStudy: {
      client: 'Fortune 100 Strategic Partner',
      location: 'New York · London · Tokyo',
      summary: 'Comprehensive enterprise modernization consolidating 12 legacy software tools into a single high-velocity operational platform.',
      m1: '$18.4M', m1Label: 'Direct Cost Savings',
      m2: '+142%', m2Label: 'Team Velocity Gain',
      quote: '“This implementation transformed our operational tempo and unlocked substantial compounding capital leverage from month one.”',
      author: 'Chief Operating Officer · Global Enterprise'
    },
    takeaways: [
      { title: 'CLARITY AS A COMPETITIVE MOAT', desc: 'Eliminating workflow friction accelerates go-to-market speed and boosts margins.' },
      { title: 'RIGOROUS FINANCIAL COMPOUNDING', desc: 'Predictable high-margin recurring economics support long-term investment resilience.' },
      { title: 'PROVEN EXECUTION AT SCALE', desc: 'Tested across Fortune 500 organizations with zero operational regressions.' }
    ],
    closingMessage: 'Building enduring value through clarity and execution.'
  };
}

export function createProfessionalSlides(title: string, size: string = '1920×1080'): SlideElement[][] {
  const parts = size.replace(/x/gi, '×').split('×').map(Number);
  const cW = parts[0] || 1920;
  const cH = parts[1] || 1080;

  const cfg = getTopicConfig(title);
  const isLight = cfg.bgColor === '#faf8f5' || cfg.bgColor === '#ffffff' || cfg.bgColor === '#f1f5f9';
  const textColor = isLight ? '#0f172a' : '#ffffff';
  const subtextColor = isLight ? '#475569' : '#94a3b8';
  const cardBg = isLight ? '#ffffff' : 'rgba(255,255,255,0.04)';
  const cardStroke = isLight ? '#e2e8f0' : 'rgba(255,255,255,0.08)';

  const titleFont = 'Space Grotesk';
  const bodyFont = 'Inter';

  return [
    // ── Slide 1: High-Impact Visual Cover ─────────────────────────────────────
    [
      { id: 'p1-bg', type: 'rect', x: 0, y: 0, width: cW, height: cH, fill: cfg.bgColor, visible: true, locked: true },
      { id: 'p1-photo', type: 'image', x: 0, y: 0, width: cW, height: cH, src: cfg.coverImage, opacity: isLight ? 0.15 : 0.35, visible: true, locked: true },
      { id: 'p1-scrim', type: 'rect', x: 0, y: 0, width: cW, height: cH, fill: isLight ? 'linear-gradient(to top, rgba(250,248,245,0.98) 0%, rgba(250,248,245,0.65) 50%, rgba(250,248,245,0.2) 100%)' : 'linear-gradient(to top, rgba(10,13,20,0.98) 0%, rgba(10,13,20,0.65) 45%, rgba(10,13,20,0.2) 100%)', visible: true, locked: true },
      { id: 'p1-tag', type: 'text', x: 140, y: 440, width: 1200, height: 35, text: `✦  EXECUTIVE PRESENTATION  ·  STRATEGY DECK`, fontSize: 18, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, letterSpacing: 2, visible: true, locked: false },
      { id: 'p1-title', type: 'text', x: 140, y: 490, width: 1640, height: 210, text: title.toUpperCase(), fontSize: 86, fontFamily: titleFont, fontWeight: '900', fill: textColor, lineHeight: 1.05, visible: true, locked: false },
      { id: 'p1-bar', type: 'rect', x: 140, y: 720, width: 160, height: 6, fill: cfg.accentColor, visible: true, locked: false },
      { id: 'p1-sub', type: 'text', x: 140, y: 750, width: 1300, height: 90, text: cfg.aboutBody, fontSize: 24, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.5, visible: true, locked: false },
      { id: 'p1-meta', type: 'text', x: 140, y: 950, width: 1200, height: 30, text: 'ORD STUDIO CANONICAL ARCHIVE  ·  CONFIDENTIAL  ·  2026', fontSize: 16, fontFamily: bodyFont, fontWeight: '700', fill: subtextColor, visible: true, locked: false }
    ],

    // ── Slide 2: Photo Split Agenda & Chapters ───────────────────────────────
    [
      { id: 'p2-bg', type: 'rect', x: 0, y: 0, width: cW, height: cH, fill: cfg.bgColor, visible: true, locked: true },
      { id: 'p2-photo', type: 'image', x: 0, y: 0, width: 800, height: cH, src: cfg.aboutImage, visible: true, locked: true },
      { id: 'p2-overlay', type: 'rect', x: 560, y: 0, width: 240, height: cH, fill: isLight ? 'linear-gradient(to right, transparent, #faf8f5)' : 'linear-gradient(to right, transparent, #0a0d14)', visible: true, locked: true },
      { id: 'p2-tag', type: 'text', x: 880, y: 90, width: 900, height: 30, text: `✦  EXECUTIVE ROADMAP & CHAPTERS`, fontSize: 16, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, letterSpacing: 2, visible: true, locked: false },
      { id: 'p2-head', type: 'text', x: 880, y: 130, width: 920, height: 60, text: cfg.slideTitles[1], fontSize: 46, fontFamily: titleFont, fontWeight: '800', fill: textColor, visible: true, locked: false },
      { id: 'p2-line', type: 'rect', x: 880, y: 200, width: 120, height: 4, fill: cfg.themeColor, visible: true, locked: false },

      { id: 'p2-c1', type: 'rect', x: 880, y: 240, width: 900, height: 140, fill: cardBg, stroke: cardStroke, strokeWidth: 1, borderRadius: 12, visible: true, locked: false },
      { id: 'p2-c1-n', type: 'text', x: 910, y: 265, width: 840, height: 35, text: '01 / FOUNDATIONAL CONTEXT & BASELINE FRICTION', fontSize: 22, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, visible: true, locked: false },
      { id: 'p2-c1-d', type: 'text', x: 910, y: 305, width: 840, height: 55, text: 'Macro drivers, root inefficiencies, and baseline parameter constraints.', fontSize: 18, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.5, visible: true, locked: false },

      { id: 'p2-c2', type: 'rect', x: 880, y: 410, width: 900, height: 140, fill: cardBg, stroke: cardStroke, strokeWidth: 1, borderRadius: 12, visible: true, locked: false },
      { id: 'p2-c2-n', type: 'text', x: 910, y: 435, width: 840, height: 35, text: '02 / ARCHITECTURAL TOPOLOGY & SOLUTION CORE', fontSize: 22, fontFamily: titleFont, fontWeight: '800', fill: textColor, visible: true, locked: false },
      { id: 'p2-c2-d', type: 'text', x: 910, y: 475, width: 840, height: 55, text: 'Unified platform design, component specs, and security enclaves.', fontSize: 18, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.5, visible: true, locked: false },

      { id: 'p2-c3', type: 'rect', x: 880, y: 580, width: 900, height: 140, fill: cardBg, stroke: cardStroke, strokeWidth: 1, borderRadius: 12, visible: true, locked: false },
      { id: 'p2-c3-n', type: 'text', x: 910, y: 605, width: 840, height: 35, text: '03 / EMPIRICAL BENCHMARKS & TELEMETRY', fontSize: 22, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, visible: true, locked: false },
      { id: 'p2-c3-d', type: 'text', x: 910, y: 645, width: 840, height: 55, text: 'Measured performance gains, latency records, and economic compounding.', fontSize: 18, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.5, visible: true, locked: false },

      { id: 'p2-c4', type: 'rect', x: 880, y: 750, width: 900, height: 140, fill: cardBg, stroke: cardStroke, strokeWidth: 1, borderRadius: 12, visible: true, locked: false },
      { id: 'p2-c4-n', type: 'text', x: 910, y: 775, width: 840, height: 35, text: '04 / PHASED ROADMAP & REALIZED CASE STUDIES', fontSize: 22, fontFamily: titleFont, fontWeight: '800', fill: textColor, visible: true, locked: false },
      { id: 'p2-c4-d', type: 'text', x: 910, y: 815, width: 840, height: 55, text: 'Step-by-step rollout schedule, SLA guarantees, and enterprise outcomes.', fontSize: 18, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.5, visible: true, locked: false },

      { id: 'p2-foot', type: 'text', x: 880, y: 940, width: 900, height: 30, text: 'ESTIMATED BRIEFING RUNTIME: 25 MINUTES · INCLUDES Q&A', fontSize: 14, fontFamily: bodyFont, fontWeight: '700', fill: subtextColor, visible: true, locked: false }
    ],

    // ── Slide 3: Problem & Market Friction Analysis ──────────────────────────
    [
      { id: 'p3-bg', type: 'rect', x: 0, y: 0, width: cW, height: cH, fill: cfg.bgColor, visible: true, locked: true },
      { id: 'p3-tag', type: 'text', x: 100, y: 80, width: 1200, height: 30, text: `✦  MARKET FRICTION  ·  THE STRATEGIC CHALLENGE`, fontSize: 16, fontFamily: titleFont, fontWeight: '800', fill: '#ef4444', letterSpacing: 2, visible: true, locked: false },
      { id: 'p3-head', type: 'text', x: 100, y: 120, width: 1720, height: 60, text: cfg.slideTitles[2], fontSize: 46, fontFamily: titleFont, fontWeight: '800', fill: textColor, visible: true, locked: false },
      { id: 'p3-bar', type: 'rect', x: 100, y: 190, width: 140, height: 4, fill: '#ef4444', visible: true, locked: false },

      // Left Column: 3 Pain Points
      { id: 'p3-p1', type: 'rect', x: 100, y: 230, width: 1040, height: 210, fill: cardBg, stroke: cardStroke, strokeWidth: 1, borderRadius: 16, visible: true, locked: false },
      { id: 'p3-p1-t', type: 'text', x: 140, y: 260, width: 960, height: 35, text: cfg.painPoints[0].label, fontSize: 22, fontFamily: titleFont, fontWeight: '800', fill: '#ef4444', visible: true, locked: false },
      { id: 'p3-p1-d', type: 'text', x: 140, y: 305, width: 960, height: 110, text: cfg.painPoints[0].desc, fontSize: 19, fontFamily: bodyFont, fill: textColor, lineHeight: 1.6, visible: true, locked: false },

      { id: 'p3-p2', type: 'rect', x: 100, y: 470, width: 1040, height: 210, fill: cardBg, stroke: cardStroke, strokeWidth: 1, borderRadius: 16, visible: true, locked: false },
      { id: 'p3-p2-t', type: 'text', x: 140, y: 500, width: 960, height: 35, text: cfg.painPoints[1].label, fontSize: 22, fontFamily: titleFont, fontWeight: '800', fill: '#ef4444', visible: true, locked: false },
      { id: 'p3-p2-d', type: 'text', x: 140, y: 545, width: 960, height: 110, text: cfg.painPoints[1].desc, fontSize: 19, fontFamily: bodyFont, fill: textColor, lineHeight: 1.6, visible: true, locked: false },

      { id: 'p3-p3', type: 'rect', x: 100, y: 710, width: 1040, height: 210, fill: cardBg, stroke: cardStroke, strokeWidth: 1, borderRadius: 16, visible: true, locked: false },
      { id: 'p3-p3-t', type: 'text', x: 140, y: 740, width: 960, height: 35, text: cfg.painPoints[2].label, fontSize: 22, fontFamily: titleFont, fontWeight: '800', fill: '#ef4444', visible: true, locked: false },
      { id: 'p3-p3-d', type: 'text', x: 140, y: 785, width: 960, height: 110, text: cfg.painPoints[2].desc, fontSize: 19, fontFamily: bodyFont, fill: textColor, lineHeight: 1.6, visible: true, locked: false },

      // Right Column: Market Inefficiency Warning Card
      { id: 'p3-stat-card', type: 'rect', x: 1180, y: 230, width: 640, height: 690, fill: isLight ? '#fee2e2' : '#1c0a0d', stroke: '#ef4444', strokeWidth: 2, borderRadius: 20, visible: true, locked: false },
      { id: 'p3-stat-tag', type: 'text', x: 1220, y: 280, width: 560, height: 30, text: 'CRITICAL INEFFICIENCY INDICATOR', fontSize: 16, fontFamily: titleFont, fontWeight: '800', fill: '#ef4444', letterSpacing: 2, visible: true, locked: false },
      { id: 'p3-stat-num', type: 'text', x: 1220, y: 330, width: 560, height: 140, text: '3.6x', fontSize: 110, fontFamily: titleFont, fontWeight: '900', fill: '#ef4444', visible: true, locked: false },
      { id: 'p3-stat-lbl', type: 'text', x: 1220, y: 480, width: 560, height: 40, text: 'VELOCITY ACCELERATION DELTA', fontSize: 24, fontFamily: titleFont, fontWeight: '800', fill: textColor, visible: true, locked: false },
      { id: 'p3-stat-desc', type: 'text', x: 1220, y: 535, width: 560, height: 220, text: 'Measured across production pilot deployments over a 12-month rigorous evaluation cycle.', fontSize: 20, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.7, visible: true, locked: false },
      { id: 'p3-stat-bar', type: 'rect', x: 1220, y: 840, width: 560, height: 4, fill: '#ef4444', visible: true, locked: false },
      { id: 'p3-stat-foot', type: 'text', x: 1220, y: 860, width: 560, height: 30, text: 'VERIFIED AGAINST ENTERPRISE AUDIT DATASETS', fontSize: 13, fontFamily: bodyFont, fontWeight: '700', fill: '#ef4444', visible: true, locked: false }
    ],

    // ── Slide 4: Core Solution & Platform Architecture ───────────────────────
    [
      { id: 'p4-bg', type: 'rect', x: 0, y: 0, width: cW, height: cH, fill: cfg.bgColor, visible: true, locked: true },
      { id: 'p4-tag', type: 'text', x: 100, y: 80, width: 1200, height: 30, text: `✦  CORE SOLUTION ARCHITECTURE  ·  SYSTEM SPECIFICATION`, fontSize: 16, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, letterSpacing: 2, visible: true, locked: false },
      { id: 'p4-head', type: 'text', x: 100, y: 120, width: 1720, height: 60, text: cfg.slideTitles[3], fontSize: 46, fontFamily: titleFont, fontWeight: '800', fill: textColor, visible: true, locked: false },
      { id: 'p4-bar', type: 'rect', x: 100, y: 190, width: 140, height: 4, fill: cfg.themeColor, visible: true, locked: false },

      // 3 Feature Cards
      { id: 'p4-c1', type: 'rect', x: 100, y: 230, width: 540, height: 740, fill: cardBg, stroke: cardStroke, strokeWidth: 1, borderRadius: 20, visible: true, locked: false },
      { id: 'p4-c1-pill', type: 'rect', x: 140, y: 270, width: 180, height: 36, fill: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)', borderRadius: 18, visible: true, locked: false },
      { id: 'p4-c1-pill-t', type: 'text', x: 140, y: 278, width: 180, height: 20, text: '01 / CORE LAYER', fontSize: 14, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, alignment: 'center', visible: true, locked: false },
      { id: 'p4-c1-t', type: 'text', x: 140, y: 330, width: 460, height: 70, text: cfg.solutions[0].title, fontSize: 26, fontFamily: titleFont, fontWeight: '900', fill: textColor, lineHeight: 1.2, visible: true, locked: false },
      { id: 'p4-c1-d', type: 'text', x: 140, y: 420, width: 460, height: 320, text: `${cfg.solutions[0].desc}\n\n• Deterministic sub-millisecond query execution\n• Automated state replication across edge nodes\n• Zero-downtime hot reloading protocols`, fontSize: 18, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.7, visible: true, locked: false },
      { id: 'p4-c1-stat-box', type: 'rect', x: 140, y: 840, width: 460, height: 90, fill: isLight ? '#f8fafc' : 'rgba(255,255,255,0.04)', stroke: cfg.themeColor, strokeWidth: 1, borderRadius: 12, visible: true, locked: false },
      { id: 'p4-c1-stat-t', type: 'text', x: 160, y: 868, width: 420, height: 35, text: `✦  ${cfg.solutions[0].stat}`, fontSize: 20, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, visible: true, locked: false },

      { id: 'p4-c2', type: 'rect', x: 690, y: 230, width: 540, height: 740, fill: cardBg, stroke: cfg.themeColor, strokeWidth: 2, borderRadius: 20, visible: true, locked: false },
      { id: 'p4-c2-pill', type: 'rect', x: 730, y: 270, width: 180, height: 36, fill: cfg.themeColor, borderRadius: 18, visible: true, locked: false },
      { id: 'p4-c2-pill-t', type: 'text', x: 730, y: 278, width: 180, height: 20, text: '02 / MESH LAYER', fontSize: 14, fontFamily: titleFont, fontWeight: '800', fill: isLight ? '#ffffff' : '#000000', alignment: 'center', visible: true, locked: false },
      { id: 'p4-c2-t', type: 'text', x: 730, y: 330, width: 460, height: 70, text: cfg.solutions[1].title, fontSize: 26, fontFamily: titleFont, fontWeight: '900', fill: textColor, lineHeight: 1.2, visible: true, locked: false },
      { id: 'p4-c2-d', type: 'text', x: 730, y: 420, width: 460, height: 320, text: `${cfg.solutions[1].desc}\n\n• Dynamic concurrency scaling without locks\n• Self-healing graph routing mesh\n• Direct telemetry audit logging`, fontSize: 18, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.7, visible: true, locked: false },
      { id: 'p4-c2-stat-box', type: 'rect', x: 730, y: 840, width: 460, height: 90, fill: isLight ? '#f8fafc' : 'rgba(255,255,255,0.04)', stroke: cfg.themeColor, strokeWidth: 1, borderRadius: 12, visible: true, locked: false },
      { id: 'p4-c2-stat-t', type: 'text', x: 750, y: 868, width: 420, height: 35, text: `✦  ${cfg.solutions[1].stat}`, fontSize: 20, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, visible: true, locked: false },

      { id: 'p4-c3', type: 'rect', x: 1280, y: 230, width: 540, height: 740, fill: cardBg, stroke: cardStroke, strokeWidth: 1, borderRadius: 20, visible: true, locked: false },
      { id: 'p4-c3-pill', type: 'rect', x: 1320, y: 270, width: 180, height: 36, fill: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)', borderRadius: 18, visible: true, locked: false },
      { id: 'p4-c3-pill-t', type: 'text', x: 1320, y: 278, width: 180, height: 20, text: '03 / TRUST LAYER', fontSize: 14, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, alignment: 'center', visible: true, locked: false },
      { id: 'p4-c3-t', type: 'text', x: 1320, y: 330, width: 460, height: 70, text: cfg.solutions[2].title, fontSize: 26, fontFamily: titleFont, fontWeight: '900', fill: textColor, lineHeight: 1.2, visible: true, locked: false },
      { id: 'p4-c3-d', type: 'text', x: 1320, y: 420, width: 460, height: 320, text: `${cfg.solutions[2].desc}\n\n• Hardware enclave isolation validation\n• Cryptographic access tokens & RBAC\n• SOC2 Type II & ISO 27001 verified compliance`, fontSize: 18, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.7, visible: true, locked: false },
      { id: 'p4-c3-stat-box', type: 'rect', x: 1320, y: 840, width: 460, height: 90, fill: isLight ? '#f8fafc' : 'rgba(255,255,255,0.04)', stroke: cfg.themeColor, strokeWidth: 1, borderRadius: 12, visible: true, locked: false },
      { id: 'p4-c3-stat-t', type: 'text', x: 1340, y: 868, width: 420, height: 35, text: `✦  ${cfg.solutions[2].stat}`, fontSize: 20, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, visible: true, locked: false }
    ],

    // ── Slide 5: Validated Metrics & Empirical Benchmarks ────────────────────
    [
      { id: 'p5-bg', type: 'rect', x: 0, y: 0, width: cW, height: cH, fill: cfg.bgColor, visible: true, locked: true },
      { id: 'p5-tag', type: 'text', x: 100, y: 80, width: 1200, height: 30, text: `✦  QUANTITATIVE PERFORMANCE  ·  AUDITED BENCHMARKS`, fontSize: 16, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, letterSpacing: 2, visible: true, locked: false },
      { id: 'p5-head', type: 'text', x: 100, y: 120, width: 1720, height: 60, text: cfg.slideTitles[4], fontSize: 46, fontFamily: titleFont, fontWeight: '800', fill: textColor, visible: true, locked: false },
      { id: 'p5-bar', type: 'rect', x: 100, y: 190, width: 140, height: 4, fill: cfg.themeColor, visible: true, locked: false },

      // 3 Massive Stat Cards
      { id: 'p5-c1', type: 'rect', x: 100, y: 230, width: 540, height: 740, fill: cardBg, stroke: cardStroke, strokeWidth: 1, borderRadius: 20, visible: true, locked: false },
      { id: 'p5-c1-n', type: 'text', x: 140, y: 280, width: 460, height: 130, text: cfg.stats[0].num, fontSize: 104, fontFamily: titleFont, fontWeight: '900', fill: cfg.themeColor, visible: true, locked: false },
      { id: 'p5-c1-t', type: 'text', x: 140, y: 430, width: 460, height: 40, text: cfg.stats[0].lbl, fontSize: 26, fontFamily: titleFont, fontWeight: '800', fill: textColor, visible: true, locked: false },
      { id: 'p5-c1-d', type: 'text', x: 140, y: 485, width: 460, height: 260, text: cfg.stats[0].desc, fontSize: 20, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.7, visible: true, locked: false },
      { id: 'p5-c1-pill', type: 'rect', x: 140, y: 860, width: 460, height: 48, fill: isLight ? '#f1f5f9' : 'rgba(255,255,255,0.06)', stroke: cardStroke, strokeWidth: 1, borderRadius: 24, visible: true, locked: false },
      { id: 'p5-c1-pill-t', type: 'text', x: 160, y: 874, width: 420, height: 25, text: `✓  ${cfg.stats[0].tag}`, fontSize: 16, fontFamily: bodyFont, fontWeight: '700', fill: cfg.themeColor, visible: true, locked: false },

      { id: 'p5-c2', type: 'rect', x: 690, y: 230, width: 540, height: 740, fill: cardBg, stroke: cfg.themeColor, strokeWidth: 2, borderRadius: 20, visible: true, locked: false },
      { id: 'p5-c2-n', type: 'text', x: 730, y: 280, width: 460, height: 130, text: cfg.stats[1].num, fontSize: 104, fontFamily: titleFont, fontWeight: '900', fill: textColor, visible: true, locked: false },
      { id: 'p5-c2-t', type: 'text', x: 730, y: 430, width: 460, height: 40, text: cfg.stats[1].lbl, fontSize: 26, fontFamily: titleFont, fontWeight: '800', fill: textColor, visible: true, locked: false },
      { id: 'p5-c2-d', type: 'text', x: 730, y: 485, width: 460, height: 260, text: cfg.stats[1].desc, fontSize: 20, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.7, visible: true, locked: false },
      { id: 'p5-c2-pill', type: 'rect', x: 730, y: 860, width: 460, height: 48, fill: isLight ? '#f1f5f9' : 'rgba(255,255,255,0.06)', stroke: cardStroke, strokeWidth: 1, borderRadius: 24, visible: true, locked: false },
      { id: 'p5-c2-pill-t', type: 'text', x: 750, y: 874, width: 420, height: 25, text: `✓  ${cfg.stats[1].tag}`, fontSize: 16, fontFamily: bodyFont, fontWeight: '700', fill: textColor, visible: true, locked: false },

      { id: 'p5-c3', type: 'rect', x: 1280, y: 230, width: 540, height: 740, fill: cardBg, stroke: cardStroke, strokeWidth: 1, borderRadius: 20, visible: true, locked: false },
      { id: 'p5-c3-n', type: 'text', x: 1320, y: 280, width: 460, height: 130, text: cfg.stats[2].num, fontSize: 104, fontFamily: titleFont, fontWeight: '900', fill: cfg.accentColor, visible: true, locked: false },
      { id: 'p5-c3-t', type: 'text', x: 1320, y: 430, width: 460, height: 40, text: cfg.stats[2].lbl, fontSize: 26, fontFamily: titleFont, fontWeight: '800', fill: textColor, visible: true, locked: false },
      { id: 'p5-c3-d', type: 'text', x: 1320, y: 485, width: 460, height: 260, text: cfg.stats[2].desc, fontSize: 20, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.7, visible: true, locked: false },
      { id: 'p5-c3-pill', type: 'rect', x: 1320, y: 860, width: 460, height: 48, fill: isLight ? '#f1f5f9' : 'rgba(255,255,255,0.06)', stroke: cardStroke, strokeWidth: 1, borderRadius: 24, visible: true, locked: false },
      { id: 'p5-c3-pill-t', type: 'text', x: 1340, y: 874, width: 420, height: 25, text: `✓  ${cfg.stats[2].tag}`, fontSize: 16, fontFamily: bodyFont, fontWeight: '700', fill: cfg.accentColor, visible: true, locked: false }
    ],

    // ── Slide 6: Phased Strategic Roadmap & Milestones ───────────────────────
    [
      { id: 'p6-bg', type: 'rect', x: 0, y: 0, width: cW, height: cH, fill: cfg.bgColor, visible: true, locked: true },
      { id: 'p6-tag', type: 'text', x: 100, y: 80, width: 1200, height: 30, text: `✦  EXECUTION ROADMAP  ·  PHASED MILESTONES 2026/2027`, fontSize: 16, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, letterSpacing: 2, visible: true, locked: false },
      { id: 'p6-head', type: 'text', x: 100, y: 120, width: 1720, height: 60, text: cfg.slideTitles[6], fontSize: 46, fontFamily: titleFont, fontWeight: '800', fill: textColor, visible: true, locked: false },
      { id: 'p6-bar', type: 'rect', x: 100, y: 190, width: 140, height: 4, fill: cfg.themeColor, visible: true, locked: false },

      // 3 Timeline Phase Cards
      { id: 'p6-c1', type: 'rect', x: 100, y: 230, width: 540, height: 740, fill: cardBg, stroke: cardStroke, strokeWidth: 1, borderRadius: 20, visible: true, locked: false },
      { id: 'p6-c1-pill', type: 'rect', x: 140, y: 270, width: 260, height: 36, fill: cfg.themeColor, borderRadius: 18, visible: true, locked: false },
      { id: 'p6-c1-pill-t', type: 'text', x: 140, y: 278, width: 260, height: 20, text: cfg.timelineNodes[0].phase, fontSize: 13, fontFamily: titleFont, fontWeight: '800', fill: isLight ? '#ffffff' : '#000000', alignment: 'center', visible: true, locked: false },
      { id: 'p6-c1-t', type: 'text', x: 140, y: 330, width: 460, height: 70, text: cfg.timelineNodes[0].title, fontSize: 26, fontFamily: titleFont, fontWeight: '900', fill: textColor, lineHeight: 1.2, visible: true, locked: false },
      { id: 'p6-c1-d', type: 'text', x: 140, y: 420, width: 460, height: 380, text: `${cfg.timelineNodes[0].desc}\n\n• Formal security clearance review\n• Baseline parameter calibration\n• Multi-node staging environment\n• Initial throughput benchmarks`, fontSize: 18, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.8, visible: true, locked: false },
      { id: 'p6-c1-status', type: 'text', x: 140, y: 880, width: 460, height: 30, text: 'STATUS: VALIDATED & COMPLETED', fontSize: 14, fontFamily: bodyFont, fontWeight: '800', fill: cfg.themeColor, visible: true, locked: false },

      { id: 'p6-c2', type: 'rect', x: 690, y: 230, width: 540, height: 740, fill: cardBg, stroke: cfg.themeColor, strokeWidth: 2, borderRadius: 20, visible: true, locked: false },
      { id: 'p6-c2-pill', type: 'rect', x: 730, y: 270, width: 260, height: 36, fill: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)', borderRadius: 18, visible: true, locked: false },
      { id: 'p6-c2-pill-t', type: 'text', x: 730, y: 278, width: 260, height: 20, text: cfg.timelineNodes[1].phase, fontSize: 13, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, alignment: 'center', visible: true, locked: false },
      { id: 'p6-c2-t', type: 'text', x: 730, y: 330, width: 460, height: 70, text: cfg.timelineNodes[1].title, fontSize: 26, fontFamily: titleFont, fontWeight: '900', fill: textColor, lineHeight: 1.2, visible: true, locked: false },
      { id: 'p6-c2-d', type: 'text', x: 730, y: 420, width: 460, height: 380, text: `${cfg.timelineNodes[1].desc}\n\n• Pilot customer cohort onboarding\n• Real-time SLA monitoring active\n• Dynamic failover simulation testing\n• Automated anomaly detection mesh`, fontSize: 18, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.8, visible: true, locked: false },
      { id: 'p6-c2-status', type: 'text', x: 730, y: 880, width: 460, height: 30, text: 'STATUS: CURRENT ACTIVE PRODUCTION', fontSize: 14, fontFamily: bodyFont, fontWeight: '800', fill: textColor, visible: true, locked: false },

      { id: 'p6-c3', type: 'rect', x: 1280, y: 230, width: 540, height: 740, fill: cardBg, stroke: cardStroke, strokeWidth: 1, borderRadius: 20, visible: true, locked: false },
      { id: 'p6-c3-pill', type: 'rect', x: 1320, y: 270, width: 260, height: 36, fill: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)', borderRadius: 18, visible: true, locked: false },
      { id: 'p6-c3-pill-t', type: 'text', x: 1320, y: 278, width: 260, height: 20, text: cfg.timelineNodes[2].phase, fontSize: 13, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, alignment: 'center', visible: true, locked: false },
      { id: 'p6-c3-t', type: 'text', x: 1320, y: 330, width: 460, height: 70, text: cfg.timelineNodes[2].title, fontSize: 26, fontFamily: titleFont, fontWeight: '900', fill: textColor, lineHeight: 1.2, visible: true, locked: false },
      { id: 'p6-c3-d', type: 'text', x: 1320, y: 420, width: 460, height: 380, text: `${cfg.timelineNodes[2].desc}\n\n• Multi-region global cluster federation\n• Enterprise API developer ecosystem\n• Zero-trust audit certification renewal\n• Full autonomous self-healing scale`, fontSize: 18, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.8, visible: true, locked: false },
      { id: 'p6-c3-status', type: 'text', x: 1320, y: 880, width: 460, height: 30, text: 'STATUS: TARGETED FOR EXPANSION', fontSize: 14, fontFamily: bodyFont, fontWeight: '800', fill: cfg.themeColor, visible: true, locked: false }
    ],

    // ── Slide 7: Production Case Study & Realized Value ──────────────────────
    [
      { id: 'p7-bg', type: 'rect', x: 0, y: 0, width: cW, height: cH, fill: cfg.bgColor, visible: true, locked: true },
      { id: 'p7-tag', type: 'text', x: 100, y: 80, width: 1200, height: 30, text: `✦  PRODUCTION PROOF  ·  VERIFIED ENTERPRISE REALIZATION`, fontSize: 16, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, letterSpacing: 2, visible: true, locked: false },
      { id: 'p7-head', type: 'text', x: 100, y: 120, width: 1720, height: 60, text: 'PRODUCTION REALIZATION & MEASURED OUTCOMES', fontSize: 46, fontFamily: titleFont, fontWeight: '800', fill: textColor, visible: true, locked: false },
      { id: 'p7-bar', type: 'rect', x: 100, y: 190, width: 140, height: 4, fill: cfg.themeColor, visible: true, locked: false },

      // Left: Case Study Media & Location Card
      { id: 'p7-img', type: 'image', x: 100, y: 230, width: 800, height: 490, src: cfg.aboutImage, borderRadius: 20, visible: true, locked: false },
      { id: 'p7-img-card', type: 'rect', x: 100, y: 740, width: 800, height: 230, fill: cardBg, stroke: cardStroke, strokeWidth: 1, borderRadius: 16, visible: true, locked: false },
      { id: 'p7-cname', type: 'text', x: 130, y: 770, width: 740, height: 40, text: cfg.caseStudy.client, fontSize: 26, fontFamily: titleFont, fontWeight: '800', fill: textColor, visible: true, locked: false },
      { id: 'p7-cloc', type: 'text', x: 130, y: 820, width: 740, height: 30, text: cfg.caseStudy.location, fontSize: 16, fontFamily: titleFont, fontWeight: '700', fill: cfg.themeColor, visible: true, locked: false },
      { id: 'p7-csum', type: 'text', x: 130, y: 860, width: 740, height: 90, text: cfg.caseStudy.summary, fontSize: 18, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.5, visible: true, locked: false },

      // Right: 2 Highlight Metrics + Testimonial Quote
      { id: 'p7-m1-card', type: 'rect', x: 940, y: 230, width: 420, height: 210, fill: cardBg, stroke: cfg.themeColor, strokeWidth: 1.5, borderRadius: 16, visible: true, locked: false },
      { id: 'p7-m1-v', type: 'text', x: 970, y: 265, width: 360, height: 80, text: cfg.caseStudy.m1, fontSize: 64, fontFamily: titleFont, fontWeight: '900', fill: cfg.themeColor, visible: true, locked: false },
      { id: 'p7-m1-l', type: 'text', x: 970, y: 360, width: 360, height: 35, text: cfg.caseStudy.m1Label, fontSize: 20, fontFamily: titleFont, fontWeight: '800', fill: textColor, visible: true, locked: false },

      { id: 'p7-m2-card', type: 'rect', x: 1400, y: 230, width: 420, height: 210, fill: cardBg, stroke: cardStroke, strokeWidth: 1, borderRadius: 16, visible: true, locked: false },
      { id: 'p7-m2-v', type: 'text', x: 1430, y: 265, width: 360, height: 80, text: cfg.caseStudy.m2, fontSize: 64, fontFamily: titleFont, fontWeight: '900', fill: textColor, visible: true, locked: false },
      { id: 'p7-m2-l', type: 'text', x: 1430, y: 360, width: 360, height: 35, text: cfg.caseStudy.m2Label, fontSize: 20, fontFamily: titleFont, fontWeight: '800', fill: textColor, visible: true, locked: false },

      // Testimonial Card
      { id: 'p7-quote-card', type: 'rect', x: 940, y: 470, width: 880, height: 500, fill: cardBg, stroke: cardStroke, strokeWidth: 1, borderRadius: 20, visible: true, locked: false },
      { id: 'p7-quote-t', type: 'text', x: 980, y: 530, width: 800, height: 260, text: cfg.caseStudy.quote, fontSize: 30, fontFamily: titleFont, fontWeight: '800', fill: textColor, lineHeight: 1.45, visible: true, locked: false },
      { id: 'p7-quote-bar', type: 'rect', x: 980, y: 820, width: 120, height: 4, fill: cfg.themeColor, visible: true, locked: false },
      { id: 'p7-quote-author', type: 'text', x: 980, y: 850, width: 800, height: 40, text: cfg.caseStudy.author, fontSize: 20, fontFamily: bodyFont, fontWeight: '800', fill: cfg.themeColor, letterSpacing: 1, visible: true, locked: false },
      { id: 'p7-quote-cred', type: 'text', x: 980, y: 895, width: 800, height: 30, text: 'VERIFIED INDEPENDENT PRODUCTION AUDIT · 2026', fontSize: 14, fontFamily: bodyFont, fontWeight: '700', fill: subtextColor, visible: true, locked: false }
    ],

    // ── Slide 8: Strategic Synthesis, Takeaways & Action Directives ──────────
    [
      { id: 'p8-bg', type: 'rect', x: 0, y: 0, width: cW, height: cH, fill: cfg.bgColor, visible: true, locked: true },
      { id: 'p8-tag', type: 'text', x: 100, y: 80, width: 1200, height: 30, text: `✦  STRATEGIC SYNTHESIS  ·  IMMEDIATE INITIATION DIRECTIVE`, fontSize: 16, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, letterSpacing: 2, visible: true, locked: false },
      { id: 'p8-head', type: 'text', x: 100, y: 120, width: 1720, height: 60, text: 'KEY STRATEGIC TAKEAWAYS & NEXT ACTIONS', fontSize: 46, fontFamily: titleFont, fontWeight: '800', fill: textColor, visible: true, locked: false },
      { id: 'p8-bar', type: 'rect', x: 100, y: 190, width: 140, height: 4, fill: cfg.themeColor, visible: true, locked: false },

      // 3 Key Takeaways Cards
      { id: 'p8-c1', type: 'rect', x: 100, y: 230, width: 540, height: 440, fill: cardBg, stroke: cardStroke, strokeWidth: 1, borderRadius: 20, visible: true, locked: false },
      { id: 'p8-c1-n', type: 'text', x: 140, y: 270, width: 460, height: 30, text: 'TAKEAWAY 01', fontSize: 16, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, letterSpacing: 2, visible: true, locked: false },
      { id: 'p8-c1-t', type: 'text', x: 140, y: 310, width: 460, height: 70, text: cfg.takeaways[0].title, fontSize: 24, fontFamily: titleFont, fontWeight: '900', fill: textColor, lineHeight: 1.2, visible: true, locked: false },
      { id: 'p8-c1-d', type: 'text', x: 140, y: 395, width: 460, height: 230, text: cfg.takeaways[0].desc, fontSize: 19, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.7, visible: true, locked: false },

      { id: 'p8-c2', type: 'rect', x: 690, y: 230, width: 540, height: 440, fill: cardBg, stroke: cfg.themeColor, strokeWidth: 1.5, borderRadius: 20, visible: true, locked: false },
      { id: 'p8-c2-n', type: 'text', x: 730, y: 270, width: 460, height: 30, text: 'TAKEAWAY 02', fontSize: 16, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, letterSpacing: 2, visible: true, locked: false },
      { id: 'p8-c2-t', type: 'text', x: 730, y: 310, width: 460, height: 70, text: cfg.takeaways[1].title, fontSize: 24, fontFamily: titleFont, fontWeight: '900', fill: textColor, lineHeight: 1.2, visible: true, locked: false },
      { id: 'p8-c2-d', type: 'text', x: 730, y: 395, width: 460, height: 230, text: cfg.takeaways[1].desc, fontSize: 19, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.7, visible: true, locked: false },

      { id: 'p8-c3', type: 'rect', x: 1280, y: 230, width: 540, height: 440, fill: cardBg, stroke: cardStroke, strokeWidth: 1, borderRadius: 20, visible: true, locked: false },
      { id: 'p8-c3-n', type: 'text', x: 1320, y: 270, width: 460, height: 30, text: 'TAKEAWAY 03', fontSize: 16, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, letterSpacing: 2, visible: true, locked: false },
      { id: 'p8-c3-t', type: 'text', x: 1320, y: 310, width: 460, height: 70, text: cfg.takeaways[2].title, fontSize: 24, fontFamily: titleFont, fontWeight: '900', fill: textColor, lineHeight: 1.2, visible: true, locked: false },
      { id: 'p8-c3-d', type: 'text', x: 1320, y: 395, width: 460, height: 230, text: cfg.takeaways[2].desc, fontSize: 19, fontFamily: bodyFont, fill: subtextColor, lineHeight: 1.7, visible: true, locked: false },

      // Bottom Action Directive Banner
      { id: 'p8-action-box', type: 'rect', x: 100, y: 700, width: 1720, height: 270, fill: isLight ? '#0f172a' : 'rgba(255,255,255,0.06)', stroke: cfg.themeColor, strokeWidth: 2, borderRadius: 20, visible: true, locked: false },
      { id: 'p8-action-tag', type: 'text', x: 150, y: 740, width: 800, height: 30, text: `✦  IMMEDIATE INITIATION PROTOCOL`, fontSize: 16, fontFamily: titleFont, fontWeight: '800', fill: cfg.themeColor, letterSpacing: 2, visible: true, locked: false },
      { id: 'p8-action-h', type: 'text', x: 150, y: 780, width: 900, height: 60, text: 'READY TO DEPLOY STRATEGIC ARCHITECTURE?', fontSize: 34, fontFamily: titleFont, fontWeight: '900', fill: '#ffffff', visible: true, locked: false },
      { id: 'p8-action-p', type: 'text', x: 150, y: 850, width: 900, height: 80, text: 'Direct executive onboarding desk: strategy@ordstudio.ai · +1 (800) 555-0199\nExecutive briefing schedules open for Q2/Q3 cohort deployments.', fontSize: 18, fontFamily: bodyFont, fill: '#94a3b8', lineHeight: 1.6, visible: true, locked: false },

      { id: 'p8-cta-btn', type: 'rect', x: 1240, y: 760, width: 520, height: 70, fill: cfg.themeColor, borderRadius: 14, visible: true, locked: false },
      { id: 'p8-cta-btn-t', type: 'text', x: 1240, y: 780, width: 520, height: 35, text: 'SCHEDULE EXECUTIVE INITIATION →', fontSize: 18, fontFamily: titleFont, fontWeight: '900', fill: isLight ? '#ffffff' : '#000000', alignment: 'center', visible: true, locked: false },
      { id: 'p8-confidential', type: 'text', x: 1240, y: 860, width: 520, height: 50, text: 'CONFIDENTIAL EXECUTIVE PRESENTATION DECK\nORD STUDIO CANONICAL TEMPLATES · ALL RIGHTS RESERVED 2026', fontSize: 13, fontFamily: bodyFont, fontWeight: '700', fill: '#94a3b8', alignment: 'center', lineHeight: 1.5, visible: true, locked: false }
    ]
  ];
}