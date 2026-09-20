import { el, PHOTOS } from './deck_helpers.mjs';

export function getDecks109to116() {
  const decks = [];

  // 109: Neural Interface & Brain-Computer AI (Cybernetic HUD Overlay)
  decks.push({
    id: 109,
    name: 'Neural Interface & Brain-Computer AI',
    title: 'SYNAPSE NEURAL INTERFACE',
    description: 'Direct cortical telemetry, non-invasive neural decoding models, and sub-millisecond motor intent mapping.',
    category: 'Presentation',
    subcategory: 'Neurotech',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['ai', 'neurotech', 'brain', 'hardware', 'cyber'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 9140,
    views: 93000,
    gradient: 'linear-gradient(135deg, #030712 0%, #06b6d4 100%)',
    fonts: ['Space Grotesk', 'IBM Plex Mono', 'Inter'],
    colors: ['#030712', '#06b6d4', '#ffffff', '#94a3b8'],
    slides: [
      {
        id: 'p109-s1',
        name: 'Cover',
        elements: [
          el('p109-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#030712', locked: true }),
          el('p109-s1-hud-card', 'rect', 100, 70, 460, 54, { fill: 'rgba(6,182,212,0.12)', stroke: '#06b6d4', strokeWidth: 1.5, borderRadius: 27 }),
          el('p109-s1-hud-txt', 'text', 130, 86, 400, 24, { text: '● CORTICAL TELEMETRY // v4.2 ONLINE', fontSize: 15, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#06b6d4', letterSpacing: 2 }),
          el('p109-s1-title', 'text', 100, 145, 1720, 140, { text: 'SYNAPSE: SUB-MILLISECOND NEURAL DECODING', fontSize: 86, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p109-s1-c1', 'rect', 100, 310, 380, 310, { fill: '#081726', borderRadius: 16 }),
          el('p109-s1-v1', 'text', 130, 340, 320, 70, { text: '3.2 ms', fontSize: 56, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#06b6d4' }),
          el('p109-s1-d1', 'text', 130, 420, 320, 170, { text: 'Spike-to-action inference latency inside the wireless cranial transceiver pod.', fontSize: 17, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 }),
          el('p109-s1-c2', 'rect', 510, 310, 380, 310, { fill: '#081726', borderRadius: 16 }),
          el('p109-s1-v2', 'text', 540, 340, 320, 70, { text: '99.4%', fontSize: 56, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p109-s1-d2', 'text', 540, 420, 320, 170, { text: 'Intent classification accuracy across 1,024 bio-compatible polyimide electrodes.', fontSize: 17, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 }),
          el('p109-s1-c3', 'rect', 100, 650, 790, 350, { fill: '#081726', borderRadius: 16 }),
          el('p109-s1-c3-h', 'text', 130, 680, 730, 40, { text: 'DIRECT MOTOR INTENT MAPPING ARCHITECTURE', fontSize: 20, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#06b6d4' }),
          el('p109-s1-c3-d', 'text', 130, 735, 730, 230, { text: 'Intercepting cortical action potentials in the primary motor cortex (M1) 180ms before biomechanical muscle activation, translating neural vector manifolds into machine-executable trajectories with zero observable cognitive latency.', fontSize: 19, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p109-s1-img', 'image', 930, 310, 890, 690, { src: PHOTOS[109], borderRadius: 24, locked: true })
        ]
      },
      {
        id: 'p109-s2',
        name: 'The Latency Challenge',
        elements: [
          el('p109-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#030712', locked: true }),
          el('p109-s2-h', 'text', 120, 120, 1200, 60, { text: 'BRIDGING HUMAN THOUGHT AND COMPUTE', fontSize: 48, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p109-s2-b1', 'text', 120, 240, 800, 360, { text: 'Human voluntary motor intent originates in the primary motor cortex (M1) 180ms before physical biomechanical activation. Legacy peripheral input interfaces (keyboards, touchscreens) introduce high friction and cognitive bottlenecking.\n\nSynapse intercepts spike trains directly at the cortical layer, translating high-dimensional neural vector manifolds into machine-executable actions with sub-5ms deterministic latency.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p109-s2-img', 'image', 1000, 220, 800, 680, { src: PHOTOS[109], borderRadius: 16 })
        ]
      },
      {
        id: 'p109-s3',
        name: 'Key Telemetry Metrics',
        elements: [
          el('p109-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#030712', locked: true }),
          el('p109-s3-h', 'text', 120, 120, 1400, 60, { text: 'EMPIRICAL DECODING BENCHMARKS', fontSize: 48, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p109-s3-n1', 'text', 120, 300, 480, 110, { text: '3.2 ms', fontSize: 104, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#06b6d4' }),
          el('p109-s3-t1', 'text', 120, 430, 480, 35, { text: 'Spike-to-Action Latency', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p109-s3-d1', 'text', 120, 480, 480, 150, { text: 'On-device tensor core neural net performing inference inside the wireless cranial pod.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 }),
          el('p109-s3-n2', 'text', 700, 300, 480, 110, { text: '99.4%', fontSize: 104, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p109-s3-t2', 'text', 700, 430, 480, 35, { text: 'Intent Classification Accuracy', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p109-s3-d2', 'text', 700, 480, 480, 150, { text: 'Zero cross-talk interference observed between adjacent somatosensory fingers.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 }),
          el('p109-s3-n3', 'text', 1280, 300, 480, 110, { text: '1,024', fontSize: 104, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#06b6d4' }),
          el('p109-s3-t3', 'text', 1280, 430, 480, 35, { text: 'Active Electrode Channels', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p109-s3-d3', 'text', 1280, 480, 480, 150, { text: 'Flexible biocompatible polyimide threads inserted via autonomous microrobotics.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p109-s4',
        name: 'Architecture Stack',
        elements: [
          el('p109-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#030712', locked: true }),
          el('p109-s4-img', 'image', 120, 120, 1680, 600, { src: PHOTOS[109], borderRadius: 16 }),
          el('p109-s4-title', 'text', 120, 760, 1680, 50, { text: 'END-TO-END CRANIAL RECEPTOR & TENSOR DECODER PIPELINE', fontSize: 40, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p109-s4-desc', 'text', 120, 825, 1680, 100, { text: 'Biocompatible polyimide thread matrix → hermetic titanium transceiver → ultra-low-power Bluetooth LE telemetry → spatial computing render engine.', fontSize: 22, fontFamily: 'IBM Plex Mono', fill: '#06b6d4', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p109-s5',
        name: 'Closing',
        elements: [
          el('p109-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#030712', locked: true }),
          el('p109-s5-tag', 'text', 120, 280, 800, 30, { text: '✦ THE FUTURE OF DIRECT COGNITIVE COMPUTING', fontSize: 18, fontFamily: 'IBM Plex Mono', fill: '#06b6d4' }),
          el('p109-s5-title', 'text', 120, 330, 1600, 160, { text: 'THINK. TRANSMIT. ACT.', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p109-s5-bar', 'rect', 120, 520, 160, 6, { fill: '#06b6d4' }),
          el('p109-s5-sub', 'text', 120, 570, 1200, 80, { text: 'Partner with Synapse Neural Laboratories for academic or commercial licensing:\nresearch@synapseneural.io · San Francisco, CA', fontSize: 24, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 110: Quantum Cryptography & Defense Protocol (Console Top Bar & Phosphor Screen)
  decks.push({
    id: 110,
    name: 'Quantum Cryptography & Defense Protocol',
    title: 'POST-QUANTUM DEFENSE PROTOCOL',
    description: 'NIST-standardized lattice cryptography, quantum key distribution (QKD), and military-grade communication hardening.',
    category: 'Presentation',
    subcategory: 'Cybersecurity',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['quantum', 'security', 'cyber', 'defense', 'cryptography'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 8750,
    views: 89000,
    gradient: 'linear-gradient(135deg, #020617 0%, #10b981 100%)',
    fonts: ['Space Grotesk', 'IBM Plex Mono', 'Inter'],
    colors: ['#020617', '#10b981', '#ffffff', '#64748b'],
    slides: [
      {
        id: 'p110-s1',
        name: 'Cover',
        elements: [
          el('p110-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#020617', locked: true }),
          el('p110-s1-topbar', 'rect', 80, 60, 1760, 50, { fill: '#0f172a', borderRadius: 10 }),
          el('p110-s1-topbar-txt', 'text', 110, 75, 1700, 24, { text: 'root@defense-node:~$ ./load_pqc_protocol.sh --cipher=ML-KEM-768 --status=ENFORCED --keys=NIST_FIPS_203', fontSize: 15, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#10b981' }),
          el('p110-s1-left-box', 'rect', 80, 140, 520, 880, { fill: '#071520', stroke: '#10b981', strokeWidth: 1.5, borderRadius: 16 }),
          el('p110-s1-lb-h', 'text', 110, 175, 460, 35, { text: 'NIST STANDARDS AUDIT', fontSize: 18, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#10b981' }),
          el('p110-s1-lb-p', 'text', 110, 230, 460, 750, { text: 'FIPS 203: ML-KEM-768\nModule-Lattice Key Encapsulation\nPublic Key Size: 1,184 Bytes\nCiphertext Size: 1,088 Bytes\nDecapsulation: 18.2 μs\n\nFIPS 204: ML-DSA-65\nDigital Signature Algorithm\nSecurity Level: NIST Category 3\n\nQUANTUM ENTANGLEMENT:\n24.8 Mbps QKD Key Generation\nDark Fiber Link Attenuation: 0.19 dB/km\nCoincidence Timing: 45 ps\n\nSTATUS: ACTIVE ENFORCEMENT', fontSize: 16, fontFamily: 'IBM Plex Mono', fill: '#cbd5e1', lineHeight: 2.0 }),
          el('p110-s1-img', 'image', 630, 140, 660, 880, { src: PHOTOS[110], borderRadius: 16, locked: true }),
          el('p110-s1-tag', 'text', 1330, 150, 510, 30, { text: 'POST-QUANTUM CRYPTOGRAPHY', fontSize: 16, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#10b981', letterSpacing: 2 }),
          el('p110-s1-title', 'text', 1330, 200, 510, 280, { text: 'POST-QUANTUM\nDEFENSE\nPROTOCOL', fontSize: 80, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p110-s1-desc', 'text', 1330, 510, 510, 360, { text: 'Hardening global communications infrastructure against Shor algorithm factoring.\n\nEvery sovereign institution must transition to post-quantum key encapsulation today to protect against Harvest-Now-Decrypt-Later adversaries.', fontSize: 20, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.7 }),
          el('p110-s1-foot', 'text', 1330, 940, 510, 40, { text: 'CYBER DEFENSE INITIATIVE 2026', fontSize: 15, fontFamily: 'IBM Plex Mono', fill: '#64748b' })
        ]
      },
      {
        id: 'p110-s2',
        name: 'Threat Matrix',
        elements: [
          el('p110-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#020617', locked: true }),
          el('p110-s2-h', 'text', 100, 120, 1400, 60, { text: 'HARVEST NOW, DECRYPT LATER (HNDL) IS ACTIVE TODAY', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p110-s2-b1', 'text', 100, 240, 820, 360, { text: 'Adversary intelligence agencies are actively intercepting and archiving petabytes of encrypted TLS traffic passing through transatlantic submarine cables.\n\nWhen cryptanalytically relevant quantum computers (CRQCs) reach coherence within the next 48 to 72 months, legacy RSA-2048 and ECC-256 keys will be factored in seconds.\n\nEvery sovereign institution must transition to post-quantum key encapsulation mechanisms today to maintain strategic secrecy.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p110-s2-img', 'image', 980, 220, 840, 680, { src: PHOTOS[110], borderRadius: 16 })
        ]
      },
      {
        id: 'p110-s3',
        name: 'Throughput & Performance',
        elements: [
          el('p110-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#020617', locked: true }),
          el('p110-s3-h', 'text', 100, 120, 1400, 50, { text: 'MICROSECOND EXECUTION BENCHMARKS', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p110-s3-n1', 'text', 100, 280, 480, 110, { text: '18 μs', fontSize: 96, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#10b981' }),
          el('p110-s3-t1', 'text', 100, 410, 480, 35, { text: 'Encapsulation Latency', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p110-s3-d1', 'text', 100, 460, 480, 140, { text: 'AVX-512 optimized vector instructions achieving wire-speed handshake throughput.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 }),
          el('p110-s3-n2', 'text', 680, 280, 480, 110, { text: '1.5 KB', fontSize: 96, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#ffffff' }),
          el('p110-s3-t2', 'text', 680, 410, 480, 35, { text: 'Public Key Transmission', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p110-s3-d2', 'text', 680, 460, 480, 140, { text: 'Fits comfortably inside standard 1500-byte Ethernet MTU packet boundaries with zero fragmentation.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 }),
          el('p110-s3-n3', 'text', 1260, 280, 480, 110, { text: '100 Gbps', fontSize: 96, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#10b981' }),
          el('p110-s3-t3', 'text', 1260, 410, 480, 35, { text: 'Line-Rate Hardware Encryption', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p110-s3-d3', 'text', 1260, 460, 480, 140, { text: 'Direct FPGA integration with zero packet drop observed at line-rate fiber saturation.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p110-s4',
        name: 'Deployment Protocol',
        elements: [
          el('p110-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#020617', locked: true }),
          el('p110-s4-head', 'text', 100, 140, 1400, 50, { text: 'FOUR-STAGE SOVEREIGN MIGRATION ROADMAP', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p110-s4-p1', 'text', 100, 260, 780, 100, { text: 'STAGE 1: CRYPTOGRAPHIC INVENTORY & AUDIT\nScan all enterprise endpoints, TLS certificates, and firmware signing chains for classical algorithms.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p110-s4-p2', 'text', 100, 390, 780, 100, { text: 'STAGE 2: HYBRID TLS PROTOCOL ACTIVATION\nCombine classical X25519 with ML-KEM-768 in dual-handshake mode to ensure backward compatibility.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p110-s4-p3', 'text', 100, 520, 780, 100, { text: 'STAGE 3: HARDWARE SECURITY MODULE (HSM) UPGRADE\nDeploy quantum-hardened root-of-trust silicon to protect core bank and government signing keys.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p110-s4-p4', 'text', 100, 650, 780, 100, { text: 'STAGE 4: FULL DEPRECATION OF CLASSICAL ALGORITHMS\nTerminate RSA/ECC support; mandate 100% PQC compliance across all internal and public-facing APIs.', fontSize: 20, fontFamily: 'Inter', fill: '#10b981', lineHeight: 1.7 }),
          el('p110-s4-img', 'image', 960, 240, 860, 620, { src: PHOTOS[110], borderRadius: 16 })
        ]
      },
      {
        id: 'p110-s5',
        name: 'Closing',
        elements: [
          el('p110-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#020617', locked: true }),
          el('p110-s5-tag', 'text', 100, 260, 800, 30, { text: '✦ ZERO-TRUST QUANTUM SECURITY ADVISORY', fontSize: 18, fontFamily: 'IBM Plex Mono', fill: '#10b981' }),
          el('p110-s5-title', 'text', 100, 310, 1600, 160, { text: 'SECURE TODAY. IMMUNE TOMORROW.', fontSize: 80, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.1 }),
          el('p110-s5-bar', 'rect', 100, 500, 160, 6, { fill: '#10b981' }),
          el('p110-s5-sub', 'text', 100, 550, 1200, 80, { text: 'Schedule a comprehensive enterprise cryptographic readiness assessment:\nquantum-defense@ordstudio.ai · +1 (202) 555-0184', fontSize: 24, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 111: Autonomous Drone Logistics (Full Background + Bottom Horizon Title)
  decks.push({
    id: 111,
    name: 'Autonomous Drone Logistics & Urban Air Corridors',
    title: 'AEGIS AUTONOMOUS FLIGHT CORRIDORS',
    description: 'Next-generation eVTOL urban airspace routing, dynamic deconfliction, and last-mile payload infrastructure.',
    category: 'Presentation',
    subcategory: 'Aviation & Logistics',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['drones', 'aviation', 'transport', 'logistics', 'autonomous'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 6420,
    views: 61000,
    gradient: 'linear-gradient(135deg, #0b192c 0%, #1e3e62 100%)',
    fonts: ['Space Grotesk', 'Inter'],
    colors: ['#0b192c', '#ff6500', '#ffffff', '#94a3b8'],
    slides: [
      {
        id: 'p111-s1',
        name: 'Cover',
        elements: [
          el('p111-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0b192c', locked: true }),
          el('p111-s1-img', 'image', 0, 0, 1920, 1080, { src: PHOTOS[111], opacity: 0.35, locked: true }),
          el('p111-s1-hud', 'rect', 140, 100, 680, 180, { fill: 'rgba(11,25,44,0.85)', stroke: '#ff6500', strokeWidth: 1.5, borderRadius: 12 }),
          el('p111-s1-hud-tag', 'text', 170, 130, 600, 24, { text: 'URBAN AIR MOBILITY // UTM SECTOR 4', fontSize: 16, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ff6500', letterSpacing: 3 }),
          el('p111-s1-hud-p', 'text', 170, 170, 620, 80, { text: 'AUTONOMOUS SUB-1000FT BVLOS RADAR CORRIDOR\nCONCURRENT RADAR TRACKS: 15,000 ACTIVE FLIGHTS', fontSize: 15, fontFamily: 'IBM Plex Mono', fill: '#e2e8f0', lineHeight: 1.7 }),
          el('p111-s1-title', 'text', 140, 560, 1640, 200, { text: 'AEGIS: HIGH-DENSITY URBAN AIR CORRIDORS', fontSize: 86, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p111-s1-bar', 'rect', 140, 780, 260, 6, { fill: '#ff6500' }),
          el('p111-s1-desc', 'text', 140, 810, 1200, 80, { text: 'Orchestrating 15,000 hourly drone flights with zero radar blind spots and dynamic 4D trajectory separation.', fontSize: 24, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 }),
          el('p111-s1-foot', 'text', 140, 950, 800, 30, { text: 'FAA PART 108 BVLOS CERTIFIED SYSTEM · ARCHITECTURE BRIEF 2026', fontSize: 16, fontFamily: 'Space Grotesk', fill: '#94a3b8' })
        ]
      },
      {
        id: 'p111-s2',
        name: 'Airspace Congestion Problem',
        elements: [
          el('p111-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0b192c', locked: true }),
          el('p111-s2-h', 'text', 140, 120, 1400, 60, { text: 'SOLVING THE 3D SUB-500FT BOTTLE-NECK', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p111-s2-b1', 'text', 140, 240, 780, 360, { text: 'Traditional air traffic control (ATC) was engineered for hundreds of high-altitude aircraft operating on fixed flight plans. It completely breaks down when scaled to thousands of autonomous delivery drones navigating complex urban canyons.\n\nAegis establishes real-time 4D trajectory contracts, dynamically carving geofenced micro-tunnels that prevent wake turbulence and eliminate collision risk.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p111-s2-img', 'image', 980, 220, 800, 680, { src: PHOTOS[111], borderRadius: 16 })
        ]
      },
      {
        id: 'p111-s3',
        name: 'Flight Performance Metrics',
        elements: [
          el('p111-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0b192c', locked: true }),
          el('p111-s3-head', 'text', 140, 120, 1400, 50, { text: 'REAL-TIME NETWORK PERFORMANCE', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p111-s3-c1', 'rect', 140, 240, 500, 580, { fill: '#1e3e62', borderRadius: 16 }),
          el('p111-s3-v1', 'text', 180, 280, 420, 100, { text: '12 ms', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ff6500' }),
          el('p111-s3-t1', 'text', 180, 400, 420, 40, { text: 'Deconfliction Latency', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff' }),
          el('p111-s3-d1', 'text', 180, 460, 420, 220, { text: 'Distributed edge radar sensors compute alternate avoidance vectors before drones enter mutual minimum separation rings.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p111-s3-c2', 'rect', 710, 240, 500, 580, { fill: '#1e3e62', borderRadius: 16 }),
          el('p111-s3-v2', 'text', 750, 280, 420, 100, { text: '15,000', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p111-s3-t2', 'text', 750, 400, 420, 40, { text: 'Concurrent Flights / Hour', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff' }),
          el('p111-s3-d2', 'text', 750, 460, 420, 220, { text: 'Tested across the Dallas-Fort Worth metroplex airspace with 99.999% schedule adherence in gust conditions.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p111-s3-c3', 'rect', 1280, 240, 500, 580, { fill: '#1e3e62', borderRadius: 16 }),
          el('p111-s3-v3', 'text', 1320, 280, 420, 100, { text: '94%', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ff6500' }),
          el('p111-s3-t3', 'text', 1320, 400, 420, 40, { text: 'Carbon Emission Cut', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff' }),
          el('p111-s3-d3', 'text', 1320, 460, 420, 220, { text: 'Replacing diesel courier vans with zero-emission electric quad-rotors across all metropolitan hubs.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p111-s4',
        name: 'Vertiport Node Layout',
        elements: [
          el('p111-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0b192c', locked: true }),
          el('p111-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[111], borderRadius: 16 }),
          el('p111-s4-title', 'text', 140, 750, 1640, 50, { text: 'MODULAR ROOFTOP VERTIPORT INFRASTRUCTURE', fontSize: 40, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p111-s4-desc', 'text', 140, 815, 1640, 120, { text: 'Each autonomous pad features a 90-second automated battery swap mechanism, optical precision landing markers, and direct pneumatic parcel induction into commercial office towers.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p111-s5',
        name: 'Closing',
        elements: [
          el('p111-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0b192c', locked: true }),
          el('p111-s5-tag', 'text', 140, 280, 800, 30, { text: '✦ PARTNER WITH THE AIRSPACE REVOLUTION', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ff6500' }),
          el('p111-s5-title', 'text', 140, 330, 1600, 160, { text: 'REDEFINING THE URBAN SKY.', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p111-s5-bar', 'rect', 140, 520, 160, 6, { fill: '#ff6500' }),
          el('p111-s5-sub', 'text', 140, 570, 1200, 80, { text: 'Join our metropolitan municipal testbed initiative:\nair-corridors@aegisflight.com · Dallas, Texas', fontSize: 24, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 112: Silicon Wafer Fab (Top Header Stripe & Wafer Hero Left)
  decks.push({
    id: 112,
    name: 'Silicon Wafer Fab & Extreme UV Lithography',
    title: 'SUB-2NM EXTREME UV LITHOGRAPHY',
    description: 'High-NA EUV optics, multi-patterning pellicle engineering, and angstrom-era transistor architecture.',
    category: 'Presentation',
    subcategory: 'Semiconductor Engineering',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['semiconductor', 'engineering', 'chips', 'cleanroom', 'physics'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 8120,
    views: 74000,
    gradient: 'linear-gradient(135deg, #090d16 0%, #3b82f6 100%)',
    fonts: ['Space Grotesk', 'Inter', 'IBM Plex Mono'],
    colors: ['#090d16', '#3b82f6', '#ffffff', '#64748b'],
    slides: [
      {
        id: 'p112-s1',
        name: 'Cover',
        elements: [
          el('p112-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#090d16', locked: true }),
          el('p112-s1-top-tag', 'text', 120, 70, 1000, 30, { text: 'ADVANCED RESEARCH LABS // HIGH-NA EUV PROGRAM', fontSize: 16, fontFamily: 'IBM Plex Mono', fill: '#3b82f6', letterSpacing: 2 }),
          el('p112-s1-title', 'text', 120, 110, 1680, 130, { text: 'SUB-2NM EXTREME UV LITHOGRAPHY', fontSize: 84, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p112-s1-line', 'rect', 120, 240, 1680, 2, { fill: '#1e293b' }),
          el('p112-s1-img', 'image', 120, 280, 1040, 660, { src: PHOTOS[112], borderRadius: 16, locked: true }),
          el('p112-s1-desc', 'text', 1210, 300, 590, 220, { text: 'High-NA 0.55 anamorphic optics, carbon nanotube pellicle thermal dissipation, and backside power delivery network integration enabling atomic-precision angstrom nodes.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p112-s1-specbox', 'rect', 1210, 560, 590, 220, { fill: '#0f172a', stroke: '#3b82f6', strokeWidth: 1, borderRadius: 12 }),
          el('p112-s1-spec-txt', 'text', 1240, 590, 530, 160, { text: 'OPTICAL NA: 0.55 ANAMORPHIC\nLIGHT SOURCE: 13.5NM EUV PLASMA (500W)\nSUB-20NM METAL PITCH RESOLUTION\nFOUNDRY NODE: A18 / A14 TARGET', fontSize: 16, fontFamily: 'IBM Plex Mono', fill: '#3b82f6', lineHeight: 1.9 }),
          el('p112-s1-foot', 'text', 120, 980, 800, 30, { text: 'CONFIDENTIAL RESEARCH DISCLOSURE · FAB 9 TECH BRIEFING', fontSize: 15, fontFamily: 'IBM Plex Mono', fill: '#64748b' })
        ]
      },
      {
        id: 'p112-s2',
        name: 'Physics at the Atomic Limit',
        elements: [
          el('p112-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#090d16', locked: true }),
          el('p112-s2-h', 'text', 120, 120, 1400, 60, { text: 'BREAKING THROUGH THE 13.5NM LIGHT BARRIER', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p112-s2-b1', 'text', 120, 240, 780, 380, { text: 'As silicon feature dimensions approach single-digit nanometers, standard 0.33 NA extreme ultraviolet systems face severe stochastic defects and depth-of-focus limits.\n\nHigh-NA (0.55) lithography utilizes anamorphic lenses with asymmetrical magnification (4x in X, 8x in Y), halving minimum pitch without requiring double-exposure mask splits.\n\nThis breakthrough reduces mask error enhancement factors (MEEF) and unlocks true sub-20nm metal pitch interconnects.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p112-s2-img', 'image', 980, 220, 800, 680, { src: PHOTOS[112], borderRadius: 16 })
        ]
      },
      {
        id: 'p112-s3',
        name: 'Optics & Power Specifications',
        elements: [
          el('p112-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#090d16', locked: true }),
          el('p112-s3-h', 'text', 120, 120, 1400, 50, { text: 'HIGH-NA OPTICAL PARAMETERS', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p112-s3-n1', 'text', 120, 280, 480, 110, { text: '0.55 NA', fontSize: 96, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#3b82f6' }),
          el('p112-s3-t1', 'text', 120, 410, 480, 35, { text: 'Numerical Aperture', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p112-s3-d1', 'text', 120, 460, 480, 160, { text: 'Precision Zeiss mirrors polished to atomic flatness within single-picometer RMS tolerances.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 }),
          el('p112-s3-n2', 'text', 700, 280, 480, 110, { text: '500 W', fontSize: 96, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p112-s3-t2', 'text', 700, 410, 480, 35, { text: 'CO2 Laser Plasma Source', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p112-s3-d2', 'text', 700, 460, 480, 160, { text: 'Pulsing tin droplets at 50,000 Hz to generate extreme ultraviolet photons under vacuum.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 }),
          el('p112-s3-n3', 'text', 1280, 280, 480, 110, { text: '220 WPH', fontSize: 96, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#3b82f6' }),
          el('p112-s3-t3', 'text', 1280, 410, 480, 35, { text: 'Wafer Throughput Yield', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p112-s3-d3', 'text', 1280, 460, 480, 160, { text: 'Industrial production rate sustained across 300mm ultra-pure monocrystalline silicon wafers.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p112-s4',
        name: 'Closing',
        elements: [
          el('p112-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#090d16', locked: true }),
          el('p112-s4-tag', 'text', 120, 280, 800, 30, { text: '✦ MOORE\'S LAW CONTINUES INTO THE ANGSTROM ERA', fontSize: 18, fontFamily: 'IBM Plex Mono', fill: '#3b82f6' }),
          el('p112-s4-title', 'text', 120, 330, 1600, 160, { text: 'ATOMIC PRECISION AT INDUSTRIAL SCALE.', fontSize: 80, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p112-s4-bar', 'rect', 120, 520, 160, 6, { fill: '#3b82f6' }),
          el('p112-s4-sub', 'text', 120, 570, 1200, 80, { text: 'Engage fab engineering teams for advanced lithography co-optimization:\neuv-foundry@ordstudio.ai · Dresden, Germany', fontSize: 24, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.8 })
        ]
      },
      {
        id: 'p112-s5',
        name: 'Summary',
        elements: [
          el('p112-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#090d16', locked: true }),
          el('p112-s5-h', 'text', 120, 160, 1400, 60, { text: 'NEXT-GENERATION ANGSTROM ROADMAP', fontSize: 44, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p112-s5-p', 'text', 120, 260, 1400, 200, { text: 'By converging High-NA EUV lithography with backside power delivery networks (BSPDN) and Gate-All-Around (GAA) nanosheets, semiconductor foundries will sustain computing scaling through 2035.', fontSize: 24, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 113: Sovereign Wealth (Inset Gold Border & Classical Executive Layout)
  decks.push({
    id: 113,
    name: 'Sovereign Wealth & Macro Allocation',
    title: 'SOVEREIGN ALLOCATION MANDATE',
    description: 'Long-horizon capital preservation, inflation hedging, geopolitical derisking, and green industrial capacity investments.',
    category: 'Presentation',
    subcategory: 'Institutional Finance',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['wealth', 'finance', 'macro', 'sovereign', 'investment'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 5410,
    views: 52000,
    gradient: 'linear-gradient(135deg, #0f172a 0%, #d97706 100%)',
    fonts: ['Playfair Display', 'Inter'],
    colors: ['#0f172a', '#d97706', '#ffffff', '#cbd5e1'],
    slides: [
      {
        id: 'p113-s1',
        name: 'Cover',
        elements: [
          el('p113-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f172a', locked: true }),
          el('p113-s1-goldframe', 'rect', 80, 80, 1760, 920, { fill: 'transparent', stroke: '#d97706', strokeWidth: 1.5, locked: true }),
          el('p113-s1-tag', 'text', 200, 130, 1520, 30, { text: 'GLOBAL SOVEREIGN INVESTMENT BOARD · ANNUAL MANDATE', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', fill: '#d97706', letterSpacing: 3, align: 'center' }),
          el('p113-s1-title', 'text', 200, 180, 1520, 200, { text: 'GLOBAL SOVEREIGN ALLOCATION MANDATE', fontSize: 86, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff', align: 'center' }),
          el('p113-s1-img', 'image', 120, 420, 800, 540, { src: PHOTOS[113], borderRadius: 16, locked: true }),
          el('p113-s1-box', 'rect', 960, 420, 840, 540, { fill: '#1e293b', borderRadius: 16 }),
          el('p113-s1-bt', 'text', 1010, 460, 740, 45, { text: '$850 BILLION AUM · MANDATE 2026-2035', fontSize: 22, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#d97706' }),
          el('p113-s1-bd', 'text', 1010, 525, 740, 280, { text: 'Navigating multi-decade structural shifts: demographic headwinds, energy security, and resilient real-asset sovereign allocations across desalination, nuclear power, and green industrial capacity.\n\nFiduciary risk controls enforced across four continental custody jurisdictions.', fontSize: 21, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p113-s1-bf', 'text', 1010, 880, 740, 30, { text: 'ZURICH · SINGAPORE · LONDON · RIYADH', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', fill: '#94a3b8' })
        ]
      },
      {
        id: 'p113-s2',
        name: 'Macro Regime Shift',
        elements: [
          el('p113-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f172a', locked: true }),
          el('p113-s2-h', 'text', 160, 120, 1400, 60, { text: 'THE DEPARTURE FROM ZERO-INTEREST EQUILIBRIUM', fontSize: 44, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p113-s2-b1', 'text', 160, 240, 800, 360, { text: 'The four-decade tailwind of declining real yields and hyper-globalization has reached its historical conclusion. Sovereign wealth funds face a paradigm defined by persistent fiscal deficits, sticky capital costs, and geopolitical fragmentation.\n\nPassive benchmark equity/bond 60/40 portfolios no longer protect generational real purchasing power. Capital must be deployed directly into productive physical infrastructure, energy independence, and critical tech supply chains.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p113-s2-img', 'image', 1040, 220, 740, 680, { src: PHOTOS[113], borderRadius: 12 })
        ]
      },
      {
        id: 'p113-s3',
        name: 'Capital Allocation Pillars',
        elements: [
          el('p113-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f172a', locked: true }),
          el('p113-s3-head', 'text', 160, 120, 1400, 50, { text: 'PORTFOLIO TARGET ARCHITECTURE', fontSize: 46, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p113-s3-c1', 'rect', 160, 240, 480, 580, { fill: '#1e293b', borderRadius: 12 }),
          el('p113-s3-v1', 'text', 200, 280, 400, 100, { text: '35%', fontSize: 88, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#d97706' }),
          el('p113-s3-t1', 'text', 200, 400, 400, 40, { text: 'Real Infrastructure', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p113-s3-d1', 'text', 200, 460, 400, 220, { text: 'Desalination plants, nuclear energy reactors, and fiber grid backbones with regulated long-term cash flow guarantees.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.7 }),
          el('p113-s3-c2', 'rect', 720, 240, 480, 580, { fill: '#1e293b', borderRadius: 12 }),
          el('p113-s3-v2', 'text', 760, 280, 400, 100, { text: '40%', fontSize: 88, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff' }),
          el('p113-s3-t2', 'text', 760, 400, 400, 40, { text: 'Global Equities & Growth', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p113-s3-d2', 'text', 760, 460, 400, 220, { text: 'Direct equity participation in AI compute builders, industrial robotics champions, and biopharma leaders.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.7 }),
          el('p113-s3-c3', 'rect', 1280, 240, 480, 580, { fill: '#1e293b', borderRadius: 12 }),
          el('p113-s3-v3', 'text', 1320, 280, 400, 100, { text: '25%', fontSize: 88, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#d97706' }),
          el('p113-s3-t3', 'text', 1320, 400, 400, 40, { text: 'Strategic Commodities', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p113-s3-d3', 'text', 1320, 460, 400, 220, { text: 'Physical gold reserves, copper stockpiles, and rare-earth extraction joint ventures shielding sovereign solvency.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p113-s4',
        name: 'Risk & Governance',
        elements: [
          el('p113-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f172a', locked: true }),
          el('p113-s4-h', 'text', 160, 120, 1400, 50, { text: 'FIDUCIARY GOVERNANCE & SOVEREIGN RISK COMMITTEE', fontSize: 44, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p113-s4-t1', 'text', 160, 240, 780, 120, { text: 'INDEPENDENT RISK CONTROLS\nQuarterly stress tests modeling severe stagflation, regional trade embargoes, and rapid currency re-evaluations.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p113-s4-t2', 'text', 160, 390, 780, 120, { text: 'INTER-GENERATIONAL ENDOWMENT HORIZON\nInvestment mandates strictly require 30-year hurdle rate analysis, insulating decision-making from cyclical political noise.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p113-s4-t3', 'text', 160, 540, 780, 120, { text: 'GEO-NEUTRAL JURISDICTIONAL CUSTODY\nDecentralized asset custody spread across four continents with multi-sovereign legal protections and treaty guarantees.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p113-s4-img', 'image', 1020, 220, 760, 680, { src: PHOTOS[113], borderRadius: 12 })
        ]
      },
      {
        id: 'p113-s5',
        name: 'Closing',
        elements: [
          el('p113-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f172a', locked: true }),
          el('p113-s5-tag', 'text', 160, 280, 800, 30, { text: '✦ STEWARDSHIP FOR FUTURE GENERATIONS', fontSize: 18, fontFamily: 'Inter', fontWeight: '600', fill: '#d97706' }),
          el('p113-s5-title', 'text', 160, 330, 1600, 160, { text: 'PRESERVING WEALTH. ANCHORING FUTURES.', fontSize: 80, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff' }),
          el('p113-s5-bar', 'rect', 160, 520, 160, 6, { fill: '#d97706' }),
          el('p113-s5-sub', 'text', 160, 570, 1200, 80, { text: 'Office of the Chief Investment Officer:\ninvestment-board@sovereign-mandate.org · Zurich · Singapore · London', fontSize: 24, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 114: Next-Gen Oncology (Two-Tone Split Canvas: White Left 60%, Deep Teal Right 40%)
  decks.push({
    id: 114,
    name: 'Next-Gen Oncology & Immunotherapy',
    title: 'CELLULAR IMMUNOTHERAPY & mRNA ONCOLOGY',
    description: 'Allogeneic CAR-T persistence, neoantigen cancer vaccines, and precision tumor microenvironment remodeling.',
    category: 'Presentation',
    subcategory: 'Biomedical & Healthcare',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['biotech', 'oncology', 'medicine', 'health', 'science'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 7290,
    views: 68000,
    gradient: 'linear-gradient(135deg, #042f2e 0%, #0d9488 100%)',
    fonts: ['Inter', 'IBM Plex Mono'],
    colors: ['#042f2e', '#0d9488', '#ffffff', '#99f6e4'],
    slides: [
      {
        id: 'p114-s1',
        name: 'Cover',
        elements: [
          el('p114-s1-bg-left', 'rect', 0, 0, 1140, 1080, { fill: '#ffffff', locked: true }),
          el('p114-s1-bg-right', 'rect', 1140, 0, 780, 1080, { fill: '#042f2e', locked: true }),
          el('p114-s1-tag', 'text', 120, 120, 800, 30, { text: 'PRECISION IMMUNO-ONCOLOGY // CLINICAL DOSSIER 2026', fontSize: 16, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#0d9488', letterSpacing: 3 }),
          el('p114-s1-title', 'text', 120, 180, 960, 240, { text: 'CELLULAR IMMUNOTHERAPY & mRNA ONCOLOGY', fontSize: 78, fontFamily: 'Inter', fontWeight: '900', fill: '#0f172a', lineHeight: 1.05 }),
          el('p114-s1-bar', 'rect', 120, 440, 160, 6, { fill: '#0d9488' }),
          el('p114-s1-desc', 'text', 120, 480, 880, 160, { text: 'Overcoming immune evasion in solid tumors through allogeneic off-the-shelf CAR-NK cells and patient-personalized neoantigen lipid nanoparticles.', fontSize: 24, fontFamily: 'Inter', fill: '#334155', lineHeight: 1.6 }),
          el('p114-s1-foot', 'text', 120, 880, 800, 30, { text: 'ASCO 2026 CLINICAL PROCEEDINGS · PHASE II TRIAL RESULTS', fontSize: 16, fontFamily: 'IBM Plex Mono', fill: '#0d9488' }),
          el('p114-s1-img', 'image', 1200, 120, 660, 840, { src: PHOTOS[114], borderRadius: 20, locked: true })
        ]
      },
      {
        id: 'p114-s2',
        name: 'The Solid Tumor Barrier',
        elements: [
          el('p114-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#042f2e', locked: true }),
          el('p114-s2-h', 'text', 140, 120, 1400, 60, { text: 'PENETRATING IMMUNOSUPPRESSIVE MICROENVIRONMENTS', fontSize: 46, fontFamily: 'Inter', fontWeight: '800', fill: '#ffffff' }),
          el('p114-s2-b1', 'text', 140, 240, 780, 360, { text: 'While first-generation CAR-T therapies achieved unprecedented cures in hematologic cancers, solid tumors remain protected by dense extracellular stroma, TGF-beta immunosuppressive signaling, and hostile hypoxic microenvironments.\n\nOur engineered armored CAR-NK platform secretes localized IL-15 and matrix metalloproteinases, degrading the tumor capsule and sustaining cellular cytotoxic activity without inducing graft-versus-host disease.', fontSize: 22, fontFamily: 'Inter', fill: '#ccfbf1', lineHeight: 1.8 }),
          el('p114-s2-img', 'image', 980, 220, 800, 680, { src: PHOTOS[114], borderRadius: 16 })
        ]
      },
      {
        id: 'p114-s3',
        name: 'Clinical Trial Efficacy',
        elements: [
          el('p114-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#042f2e', locked: true }),
          el('p114-s3-h', 'text', 140, 120, 1400, 50, { text: 'PHASE II RESPONSE RATES IN REFRACTORY GLIOBLASTOMA', fontSize: 44, fontFamily: 'Inter', fontWeight: '800', fill: '#ffffff' }),
          el('p114-s3-n1', 'text', 140, 280, 480, 110, { text: '78.4%', fontSize: 96, fontFamily: 'Inter', fontWeight: '900', fill: '#2dd4bf' }),
          el('p114-s3-t1', 'text', 140, 410, 480, 35, { text: 'Overall Objective Response', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', fill: '#ffffff' }),
          el('p114-s3-d1', 'text', 140, 460, 480, 160, { text: 'Substantial volumetric regression documented via contrast-enhanced volumetric MRI at week 12.', fontSize: 18, fontFamily: 'Inter', fill: '#99f6e4', lineHeight: 1.6 }),
          el('p114-s3-n2', 'text', 710, 280, 480, 110, { text: '18.6 mo', fontSize: 96, fontFamily: 'Inter', fontWeight: '900', fill: '#ffffff' }),
          el('p114-s3-t2', 'text', 710, 410, 480, 35, { text: 'Median Progression-Free Survival', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', fill: '#ffffff' }),
          el('p114-s3-d2', 'text', 710, 460, 480, 160, { text: 'More than 3.4x improvement over standard-of-care temozolomide chemotherapy baseline.', fontSize: 18, fontFamily: 'Inter', fill: '#99f6e4', lineHeight: 1.6 }),
          el('p114-s3-n3', 'text', 1280, 280, 480, 110, { text: '0 Cases', fontSize: 96, fontFamily: 'Inter', fontWeight: '900', fill: '#2dd4bf' }),
          el('p114-s3-t3', 'text', 1280, 410, 480, 35, { text: 'Grade 3/4 Cytokine Release', fontSize: 24, fontFamily: 'Inter', fontWeight: '700', fill: '#ffffff' }),
          el('p114-s3-d3', 'text', 1280, 460, 480, 160, { text: 'Engineered suicide safety switches completely prevent neurotoxicity and systemic hyper-inflammation.', fontSize: 18, fontFamily: 'Inter', fill: '#99f6e4', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p114-s4',
        name: 'Manufacturing & Scale',
        elements: [
          el('p114-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#042f2e', locked: true }),
          el('p114-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[114], borderRadius: 16 }),
          el('p114-s4-title', 'text', 140, 750, 1640, 50, { text: 'CLOSED-LOOP AUTOMATED CELL PROCESSING BIOREACTORS', fontSize: 40, fontFamily: 'Inter', fontWeight: '800', fill: '#ffffff' }),
          el('p114-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Transitioning from bespoke patient-derived autologous manufacturing to modular donor-derived allogeneic batch processing reduces per-dose costs from $450,000 to under $18,000.', fontSize: 20, fontFamily: 'Inter', fill: '#ccfbf1', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p114-s5',
        name: 'Closing',
        elements: [
          el('p114-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#042f2e', locked: true }),
          el('p114-s5-tag', 'text', 140, 280, 800, 30, { text: '✦ ERADICATING CANCER THROUGH CELLULAR INTELLIGENCE', fontSize: 18, fontFamily: 'IBM Plex Mono', fill: '#2dd4bf' }),
          el('p114-s5-title', 'text', 140, 330, 1600, 160, { text: 'TURNING THE IMMUNE SYSTEM INTO A CURE.', fontSize: 80, fontFamily: 'Inter', fontWeight: '900', fill: '#ffffff' }),
          el('p114-s5-bar', 'rect', 140, 520, 160, 6, { fill: '#2dd4bf' }),
          el('p114-s5-sub', 'text', 140, 570, 1200, 80, { text: 'Clinical investigator and institutional partnership inquiries:\noncology-trials@aetherbio.org · Boston · Cambridge, UK', fontSize: 24, fontFamily: 'Inter', fill: '#99f6e4', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 115: Renewable Energy (The User's Exact Prototype: Giant Dominating Top Title + Wide 16:9 Hero Photo)
  decks.push({
    id: 115,
    name: 'Renewable Energy & Clean Grid Infrastructure',
    title: 'RENEWABLE ENERGY / CLEAN GRID 2026',
    description: 'High-voltage direct current transmission, gigawatt-scale grid battery storage, and dynamic renewable curtailment elimination.',
    category: 'Presentation',
    subcategory: 'Clean Energy & Infrastructure',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['energy', 'renewables', 'sustainability', 'infrastructure', 'grid'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 9820,
    views: 112000,
    gradient: 'linear-gradient(135deg, #064e3b 0%, #10b981 100%)',
    fonts: ['Outfit', 'Inter', 'IBM Plex Mono'],
    colors: ['#022c22', '#10b981', '#ffffff', '#6ee7b7'],
    slides: [
      {
        id: 'p115-s1',
        name: 'Cover',
        elements: [
          el('p115-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#022c22', locked: true }),
          el('p115-s1-tag', 'text', 140, 80, 800, 30, { text: '✦ GLOBAL ENERGY TRANSITION MANDATE · 2026 ROADMAP', fontSize: 16, fontFamily: 'Outfit', fontWeight: '800', fill: '#34d399', letterSpacing: 3 }),
          el('p115-s1-title', 'text', 140, 125, 1640, 110, { text: 'RENEWABLE ENERGY / CLEAN GRID INFRASTRUCTURE', fontSize: 88, fontFamily: 'Outfit', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p115-s1-img', 'image', 140, 255, 1640, 610, { src: PHOTOS[115], borderRadius: 24, locked: true }),
          el('p115-s1-sub', 'text', 140, 895, 1200, 40, { text: 'CLEAN GRID INFRASTRUCTURE & 100GW STORAGE ARCHITECTURE', fontSize: 26, fontFamily: 'Outfit', fontWeight: '800', fill: '#34d399', letterSpacing: 2 }),
          el('p115-s1-foot', 'text', 140, 950, 800, 30, { text: 'GLOBAL POWER TRANSMISSION BRIEFING · PUBLISHED 2026', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', fill: '#94a3b8' })
        ]
      },
      {
        id: 'p115-s2',
        name: 'The Interconnection Queue Crisis',
        elements: [
          el('p115-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#022c22', locked: true }),
          el('p115-s2-h', 'text', 140, 120, 1400, 60, { text: 'OVERCOMING THE 2.6 TERAWATT GRIDLOCK', fontSize: 48, fontFamily: 'Outfit', fontWeight: '900', fill: '#ffffff' }),
          el('p115-s2-b1', 'text', 140, 240, 780, 360, { text: 'Over 2,600 gigawatts of wind, solar, and battery projects currently sit trapped in regional ISO interconnection queues awaiting line upgrades. Meanwhile, transmission congestion costs consumers more than $20 billion annually in economic curtailment.\n\nThe bottleneck is no longer clean generation cost; it is physical transmission capacity. High-Voltage Direct Current (HVDC) lines transmit power across 1,000+ miles with less than 3% resistive loss, unlocking remote desert solar and offshore wind directly into industrial demand centers.', fontSize: 22, fontFamily: 'Inter', fill: '#d1fae5', lineHeight: 1.8 }),
          el('p115-s2-img', 'image', 980, 220, 800, 680, { src: PHOTOS[115], borderRadius: 16 })
        ]
      },
      {
        id: 'p115-s3',
        name: 'Transmission & Storage Benchmarks',
        elements: [
          el('p115-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#022c22', locked: true }),
          el('p115-s3-head', 'text', 140, 120, 1400, 50, { text: 'KEY SYSTEM SPECIFICATIONS & CAPACITY', fontSize: 46, fontFamily: 'Outfit', fontWeight: '800', fill: '#ffffff' }),
          el('p115-s3-c1', 'rect', 140, 240, 500, 580, { fill: '#064e3b', borderRadius: 16 }),
          el('p115-s3-v1', 'text', 180, 280, 420, 100, { text: '±800 kV', fontSize: 88, fontFamily: 'Outfit', fontWeight: '900', fill: '#34d399' }),
          el('p115-s3-t1', 'text', 180, 400, 420, 40, { text: 'UHVDC Transmission Voltage', fontSize: 24, fontFamily: 'Outfit', fontWeight: '700', fill: '#ffffff' }),
          el('p115-s3-d1', 'text', 180, 460, 420, 220, { text: 'Enables 12 gigawatts of continuous bidirectional power wheeling over 1,400 miles with minimal corona dissipation.', fontSize: 18, fontFamily: 'Inter', fill: '#a7f3d0', lineHeight: 1.7 }),
          el('p115-s3-c2', 'rect', 710, 240, 500, 580, { fill: '#064e3b', borderRadius: 16 }),
          el('p115-s3-v2', 'text', 750, 280, 420, 100, { text: '100 Hrs', fontSize: 88, fontFamily: 'Outfit', fontWeight: '900', fill: '#ffffff' }),
          el('p115-s3-t2', 'text', 750, 400, 420, 40, { text: 'Multi-Day Iron-Air Storage', fontSize: 24, fontFamily: 'Outfit', fontWeight: '700', fill: '#ffffff' }),
          el('p115-s3-d2', 'text', 750, 460, 420, 220, { text: 'Cost-effective iron rust redox batteries discharging continuously throughout extreme multi-day winter freeze events.', fontSize: 18, fontFamily: 'Inter', fill: '#a7f3d0', lineHeight: 1.7 }),
          el('p115-s3-c3', 'rect', 1280, 240, 500, 580, { fill: '#064e3b', borderRadius: 16 }),
          el('p115-s3-v3', 'text', 1320, 280, 420, 100, { text: '$0.021', fontSize: 88, fontFamily: 'Outfit', fontWeight: '900', fill: '#34d399' }),
          el('p115-s3-t3', 'text', 1320, 400, 420, 40, { text: 'LCOE per kWh Delivered', fontSize: 24, fontFamily: 'Outfit', fontWeight: '700', fill: '#ffffff' }),
          el('p115-s3-d3', 'text', 1320, 460, 420, 220, { text: 'Subsidized levelized cost beating combined-cycle gas peakers even under zero-subsidy merchant market regimes.', fontSize: 18, fontFamily: 'Inter', fill: '#a7f3d0', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p115-s4',
        name: 'Transcontinental Corridor Layout',
        elements: [
          el('p115-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#022c22', locked: true }),
          el('p115-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[115], borderRadius: 16 }),
          el('p115-s4-title', 'text', 140, 750, 1640, 50, { text: 'THE CONTINENTAL CLEAN ENERGY BACKBONE', fontSize: 40, fontFamily: 'Outfit', fontWeight: '800', fill: '#ffffff' }),
          el('p115-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Linking wind resources in the Great Plains, desert solar in the American Southwest, and offshore wind along the Eastern seaboard into a unified synchronized supergrid.', fontSize: 20, fontFamily: 'Inter', fill: '#d1fae5', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p115-s5',
        name: 'Closing',
        elements: [
          el('p115-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#022c22', locked: true }),
          el('p115-s5-tag', 'text', 140, 280, 800, 30, { text: '✦ ENERGIZE THE NEXT CENTURY', fontSize: 18, fontFamily: 'Outfit', fontWeight: '800', fill: '#34d399' }),
          el('p115-s5-title', 'text', 140, 330, 1600, 160, { text: 'BUILDING THE CLEAN SUPERGRID.', fontSize: 88, fontFamily: 'Outfit', fontWeight: '900', fill: '#ffffff' }),
          el('p115-s5-bar', 'rect', 140, 520, 160, 6, { fill: '#34d399' }),
          el('p115-s5-sub', 'text', 140, 570, 1200, 80, { text: 'Explore institutional syndicate participation and project documentation:\ngrid-syndicate@cleangrid2026.com · New York · Washington, D.C.', fontSize: 24, fontFamily: 'Inter', fill: '#a7f3d0', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 116: Polaris Cold Chain (Left Tall Refrigerated Photo, Right Navy Control Panel Card)
  decks.push({
    id: 116,
    name: 'Polaris Cold Chain & Autonomous Freight Network',
    title: 'POLARIS CRYOGENIC LOGISTICS NETWORK',
    description: 'Ultra-low temperature pharmaceutical supply lines, automated reefer monitoring, and zero-spoilage autonomous transport.',
    category: 'Presentation',
    subcategory: 'Supply Chain Engineering',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['logistics', 'coldchain', 'freight', 'supplychain', 'shipping'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 6180,
    views: 59000,
    gradient: 'linear-gradient(135deg, #082f49 0%, #0284c7 100%)',
    fonts: ['Space Grotesk', 'Inter'],
    colors: ['#082f49', '#0284c7', '#ffffff', '#bae6fd'],
    slides: [
      {
        id: 'p116-s1',
        name: 'Cover',
        elements: [
          el('p116-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#082f49', locked: true }),
          el('p116-s1-tag', 'text', 100, 60, 920, 30, { text: 'CRYOGENIC SUPPLY CHAIN TELEMETRY // GLOBAL', fontSize: 16, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#38bdf8', letterSpacing: 3 }),
          el('p116-s1-title', 'text', 100, 105, 920, 220, { text: 'POLARIS CRYOGENIC FREIGHT NETWORK', fontSize: 80, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p116-s1-card', 'rect', 1060, 70, 760, 260, { fill: '#051d30', borderRadius: 20 }),
          el('p116-s1-card-t', 'text', 1100, 100, 680, 40, { text: '144-HOUR PHASE-CHANGE THERMAL HOLD', fontSize: 22, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#38bdf8' }),
          el('p116-s1-card-d', 'text', 1100, 155, 680, 140, { text: 'Unbroken -80°C satellite telemetry for biologic mRNA batches across 42 global jurisdictions with zero reliance on dry ice recharging.', fontSize: 18, fontFamily: 'Inter', fill: '#bae6fd', lineHeight: 1.6 }),
          el('p116-s1-img', 'image', 100, 360, 1720, 630, { src: PHOTOS[116], borderRadius: 24, locked: true })
        ]
      },
      {
        id: 'p116-s2',
        name: 'The Spoilage Problem',
        elements: [
          el('p116-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#082f49', locked: true }),
          el('p116-s2-h', 'text', 140, 120, 1400, 60, { text: 'ELIMINATING THE $35B BIOPHARMA THERMAL EXCURSION CRISIS', fontSize: 44, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p116-s2-b1', 'text', 140, 240, 780, 360, { text: 'Every year, billions of dollars in critical temperature-sensitive vaccines and biologics are ruined during airport tarmac dwell times, border customs bottlenecks, and uncalibrated transport trailers.\n\nPolaris integrates vacuum-insulated phase change composite panels with satellite-linked IoT sensors, guaranteeing uninterrupted temperature stabilization for up to 144 hours even with complete generator failure.', fontSize: 22, fontFamily: 'Inter', fill: '#bae6fd', lineHeight: 1.8 }),
          el('p116-s2-img', 'image', 980, 220, 800, 680, { src: PHOTOS[116], borderRadius: 16 })
        ]
      },
      {
        id: 'p116-s3',
        name: 'Sensors & Verification',
        elements: [
          el('p116-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#082f49', locked: true }),
          el('p116-s3-h', 'text', 140, 120, 1400, 50, { text: 'REAL-TIME BIOMETRIC CARGO SENSORS', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p116-s3-n1', 'text', 140, 280, 480, 110, { text: '±0.05°C', fontSize: 96, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#38bdf8' }),
          el('p116-s3-t1', 'text', 140, 410, 480, 35, { text: 'Thermal Sensor Accuracy', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff' }),
          el('p116-s3-d1', 'text', 140, 460, 480, 160, { text: 'NIST-calibrated platinum resistance thermometer probes logging temperature every 30 seconds.', fontSize: 18, fontFamily: 'Inter', fill: '#bae6fd', lineHeight: 1.6 }),
          el('p116-s3-n2', 'text', 710, 280, 480, 110, { text: '144 Hrs', fontSize: 96, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p116-s3-t2', 'text', 710, 410, 480, 35, { text: 'Passive Thermal Autonomy', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff' }),
          el('p116-s3-d2', 'text', 710, 460, 480, 160, { text: 'Cryogenic phase change dry-ice buffer holds ultra-cold state without external grid power.', fontSize: 18, fontFamily: 'Inter', fill: '#bae6fd', lineHeight: 1.6 }),
          el('p116-s3-n3', 'text', 1280, 280, 480, 110, { text: '100%', fontSize: 96, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#38bdf8' }),
          el('p116-s3-t3', 'text', 1280, 410, 480, 35, { text: 'Blockchain Custody Tracking', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff' }),
          el('p116-s3-d3', 'text', 1280, 460, 480, 160, { text: 'Cryptographically signed chain-of-custody transfer records uploaded to tamper-proof ledger.', fontSize: 18, fontFamily: 'Inter', fill: '#bae6fd', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p116-s4',
        name: 'Cold-Storage Automation',
        elements: [
          el('p116-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#082f49', locked: true }),
          el('p116-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[116], borderRadius: 16 }),
          el('p116-s4-title', 'text', 140, 750, 1640, 50, { text: 'AUTONOMOUS HIGH-DENSITY CRYOGENIC WAREHOUSING', fontSize: 38, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p116-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Automated storage and retrieval robotic cranes operate inside dark, oxygen-depleted cold chambers, preventing human frost exposure and guaranteeing zero ambient thermal ingress.', fontSize: 20, fontFamily: 'Inter', fill: '#bae6fd', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p116-s5',
        name: 'Closing',
        elements: [
          el('p116-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#082f49', locked: true }),
          el('p116-s5-tag', 'text', 140, 280, 800, 30, { text: '✦ INTEGRITY ACROSS EVERY DEGREE', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#38bdf8' }),
          el('p116-s5-title', 'text', 140, 330, 1600, 160, { text: 'SAFEGUARDING CRITICAL LIFE SCIENCE CARGO.', fontSize: 76, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p116-s5-bar', 'rect', 140, 520, 160, 6, { fill: '#38bdf8' }),
          el('p116-s5-sub', 'text', 140, 570, 1200, 80, { text: 'Inquire for global clinical distribution contracts:\ncoldchain@polarislogistics.io · Copenhagen · Basel · Chicago', fontSize: 24, fontFamily: 'Inter', fill: '#bae6fd', lineHeight: 1.8 })
        ]
      }
    ]
  });

  return decks;
}
