import { el, PHOTOS } from './deck_helpers.mjs';

export function getDecks125to136() {
  const decks = [];

  // =========================================================================
  // 125: Enterprise AI Compute Infrastructure (Obsidian & Electric Violet)
  // Layout: Left Dielectric Tank Image + Right Massive Headline + Bottom Telemetry Card
  // =========================================================================
  decks.push({
    id: 125,
    name: 'Enterprise AI Compute Infrastructure',
    title: 'NEXUS CLUSTER 100K GPU DATA CENTER',
    description: 'Liquid immersion cooling, InfiniBand quantum fabric, and gigawatt-scale AI training cluster architecture.',
    category: 'Presentation',
    subcategory: 'Artificial Intelligence & Infrastructure',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['ai', 'datacenter', 'gpu', 'infrastructure', 'compute'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 9320,
    views: 98000,
    gradient: 'linear-gradient(135deg, #0b091a 0%, #7c3aed 100%)',
    fonts: ['Space Grotesk', 'IBM Plex Mono', 'Inter'],
    colors: ['#0b091a', '#a855f7', '#ffffff', '#c4b5fd'],
    slides: [
      {
        id: 'p125-s1',
        name: 'Cover',
        elements: [
          el('p125-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0b091a', locked: true }),
          el('p125-s1-glow', 'rect', 0, 0, 1920, 1080, { fill: 'radial-gradient(circle at 75% 45%, rgba(168,85,247,0.25) 0%, transparent 65%)', locked: true }),
          el('p125-s1-img', 'image', 100, 100, 680, 880, { src: PHOTOS[125], borderRadius: 24, locked: true }),
          el('p125-s1-tag', 'text', 840, 140, 960, 36, { text: 'GIGAWATT-SCALE AI INFRASTRUCTURE // ARCHITECTURE OVERVIEW', fontSize: 16, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#a855f7', letterSpacing: 2 }),
          el('p125-s1-title', 'text', 840, 200, 980, 250, { text: 'NEXUS: 100K GPU LIQUID CLUSTER', fontSize: 86, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p125-s1-desc', 'text', 840, 480, 920, 140, { text: 'Architected for trillion-parameter foundation model pre-training with direct-to-chip dielectric liquid immersion and 3.2 Tbps non-blocking photonic interconnects.', fontSize: 24, fontFamily: 'Inter', fill: '#c4b5fd', lineHeight: 1.6 }),
          el('p125-s1-card', 'rect', 840, 680, 960, 260, { fill: '#171330', borderRadius: 16 }),
          el('p125-s1-m1-val', 'text', 880, 720, 260, 70, { text: '1.08', fontSize: 64, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#38bdf8' }),
          el('p125-s1-m1-lbl', 'text', 880, 800, 260, 40, { text: 'PUE Efficiency Rating', fontSize: 18, fontFamily: 'IBM Plex Mono', fill: '#cbd5e1' }),
          el('p125-s1-m2-val', 'text', 1190, 720, 260, 70, { text: '3.2 Tbps', fontSize: 64, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#a855f7' }),
          el('p125-s1-m2-lbl', 'text', 1190, 800, 260, 40, { text: 'Per-GPU Fabric', fontSize: 18, fontFamily: 'IBM Plex Mono', fill: '#cbd5e1' }),
          el('p125-s1-m3-val', 'text', 1500, 720, 260, 70, { text: '500 MW', fontSize: 64, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p125-s1-m3-lbl', 'text', 1500, 800, 260, 40, { text: 'Nuclear Baseload', fontSize: 18, fontFamily: 'IBM Plex Mono', fill: '#cbd5e1' })
        ]
      },
      {
        id: 'p125-s2',
        name: 'Thermal Density Crisis',
        elements: [
          el('p125-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0b091a', locked: true }),
          el('p125-s2-h', 'text', 100, 90, 1720, 60, { text: 'SOLVING THE 120KW PER RACK THERMAL DENSITY CRISIS', fontSize: 44, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p125-s2-card', 'rect', 100, 190, 840, 790, { fill: '#13102b', borderRadius: 20 }),
          el('p125-s2-sub', 'text', 150, 240, 740, 40, { text: 'LIQUID IMMERSION VS LEGACY AIR CHILLING', fontSize: 20, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#a855f7' }),
          el('p125-s2-b1', 'text', 150, 310, 740, 580, { text: 'Legacy air-cooled data centers tap out at 35kW per rack before fan acoustics and refrigeration chillers consume more electrical power than the compute silicon itself.\n\nNexus submerges specialized dual-socket compute blades into sealed fluorochemical fluid loops. Heat is extracted silently via secondary warm-water cooling manifolds, enabling continuous 100,000-GPU cluster operation without thermal throttling down-clocking.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p125-s2-img', 'image', 980, 190, 840, 490, { src: PHOTOS[125], borderRadius: 20 }),
          el('p125-s2-stat', 'rect', 980, 720, 840, 260, { fill: '#1e1945', borderRadius: 20 }),
          el('p125-s2-stat-val', 'text', 1030, 760, 740, 60, { text: '98.5% HEAT RECOVERY EFFICIENCY', fontSize: 32, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#38bdf8' }),
          el('p125-s2-stat-sub', 'text', 1030, 830, 740, 110, { text: 'Waste thermal energy is channeled directly into regional municipal district heating networks, turning compute overhead into zero-emission urban warmth.', fontSize: 18, fontFamily: 'Inter', fill: '#c4b5fd', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p125-s3',
        name: 'Photonic Fabric Benchmarks',
        elements: [
          el('p125-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0b091a', locked: true }),
          el('p125-s3-head', 'text', 100, 80, 1720, 60, { text: 'NON-BLOCKING PHOTONIC QUANTUM FABRIC', fontSize: 44, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p125-s3-c1', 'rect', 100, 180, 840, 380, { fill: '#171330', borderRadius: 20 }),
          el('p125-s3-v1', 'text', 150, 220, 740, 80, { text: '3.2 Tbps / GPU', fontSize: 68, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#38bdf8' }),
          el('p125-s3-t1', 'text', 150, 310, 740, 40, { text: 'Optical Rail-Optimized Bisection Bandwidth', fontSize: 22, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff' }),
          el('p125-s3-d1', 'text', 150, 370, 740, 150, { text: 'Zero packet loss under all-reduce collective communication for trillion-parameter tensor parallel steps.', fontSize: 18, fontFamily: 'Inter', fill: '#c4b5fd', lineHeight: 1.6 }),
          el('p125-s3-c2', 'rect', 980, 180, 840, 380, { fill: '#171330', borderRadius: 20 }),
          el('p125-s3-v2', 'text', 1030, 220, 740, 80, { text: '< 450 ns', fontSize: 68, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#a855f7' }),
          el('p125-s3-t2', 'text', 1030, 310, 740, 40, { text: 'End-to-End Hop Latency', fontSize: 22, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff' }),
          el('p125-s3-d2', 'text', 1030, 370, 740, 150, { text: 'Custom co-packaged optical transceivers eliminating electrical copper cable impedance bottlenecks.', fontSize: 18, fontFamily: 'Inter', fill: '#c4b5fd', lineHeight: 1.6 }),
          el('p125-s3-c3', 'rect', 100, 600, 840, 380, { fill: '#171330', borderRadius: 20 }),
          el('p125-s3-v3', 'text', 150, 640, 740, 80, { text: '99.999%', fontSize: 68, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p125-s3-t3', 'text', 150, 730, 740, 40, { text: 'High Availability Multi-Chassis Failover', fontSize: 22, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff' }),
          el('p125-s3-d3', 'text', 150, 790, 740, 150, { text: 'Sub-millisecond rerouting around degraded switch ports without aborting in-flight training epochs.', fontSize: 18, fontFamily: 'Inter', fill: '#c4b5fd', lineHeight: 1.6 }),
          el('p125-s3-c4', 'rect', 980, 600, 840, 380, { fill: '#171330', borderRadius: 20 }),
          el('p125-s3-v4', 'text', 1030, 640, 740, 80, { text: '100% Nuclear', fontSize: 68, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#38bdf8' }),
          el('p125-s3-t4', 'text', 1030, 730, 740, 40, { text: 'Behind-the-Meter Small Modular Reactors', fontSize: 22, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff' }),
          el('p125-s3-d4', 'text', 1030, 790, 740, 150, { text: 'Decoupled completely from volatile civilian utility grids to provide uninterrupted gigawatt baseload.', fontSize: 18, fontFamily: 'Inter', fill: '#c4b5fd', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p125-s4',
        name: 'Robotic Blade Replacement',
        elements: [
          el('p125-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0b091a', locked: true }),
          el('p125-s4-img', 'image', 100, 80, 1720, 600, { src: PHOTOS[125], borderRadius: 24 }),
          el('p125-s4-card', 'rect', 100, 720, 1720, 260, { fill: '#171330', borderRadius: 20 }),
          el('p125-s4-title', 'text', 160, 760, 1600, 50, { text: '60-SECOND HOT-SWAP GANTRY AUTOMATION', fontSize: 36, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p125-s4-desc', 'text', 160, 830, 1600, 110, { text: 'Overhead Cartesian robotics detect failing compute nodes via hardware telemetry, autonomously lift the submersed blade from the dialectric tank, insert a freshly provisioned unit, and re-establish optical link lock in under 60 seconds without human intervention.', fontSize: 20, fontFamily: 'Inter', fill: '#c4b5fd', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p125-s5',
        name: 'Closing',
        elements: [
          el('p125-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0b091a', locked: true }),
          el('p125-s5-glow', 'rect', 0, 0, 1920, 1080, { fill: 'radial-gradient(circle at 50% 50%, rgba(168,85,247,0.3) 0%, transparent 60%)', locked: true }),
          el('p125-s5-accent', 'rect', 860, 200, 200, 6, { fill: '#a855f7' }),
          el('p125-s5-title', 'text', 160, 260, 1600, 200, { text: 'TRAINING TOMORROW\'S MINDS.', fontSize: 94, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', align: 'center' }),
          el('p125-s5-sub', 'text', 360, 520, 1200, 100, { text: 'Reserve dedicated multi-gigawatt compute capacity for frontier AI foundation models.\ncompute-capacity@nexus-cloud.ai · Austin, Texas', fontSize: 24, fontFamily: 'Inter', fill: '#c4b5fd', lineHeight: 1.8, align: 'center' })
        ]
      }
    ]
  });

  // =========================================================================
  // 126: Commercial Orbital Satellite Launch (Astra Heavy)
  // Layout: Tri-Column with Center Vertical Rocket Plume Photo (680, 80, 560, 920)
  // =========================================================================
  decks.push({
    id: 126,
    name: 'Commercial Orbital Satellite Launch Operations',
    title: 'ASTRA ORBITAL HEAVY LAUNCH',
    description: 'Methane-oxygen full-flow staged combustion, reusable booster recovery, and mega-constellation orbital injection.',
    category: 'Presentation',
    subcategory: 'Aerospace & Orbital Launch',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['aerospace', 'space', 'rocket', 'orbital', 'satellite'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 8540,
    views: 87000,
    gradient: 'linear-gradient(135deg, #020617 0%, #06b6d4 100%)',
    fonts: ['Space Grotesk', 'IBM Plex Mono', 'Inter'],
    colors: ['#020617', '#06b6d4', '#ffffff', '#67e8f9'],
    slides: [
      {
        id: 'p126-s1',
        name: 'Cover',
        elements: [
          el('p126-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#020617', locked: true }),
          el('p126-s1-grid', 'rect', 0, 0, 1920, 1080, { fill: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.15) 0%, transparent 70%)', locked: true }),
          // Left Column (Headline & Mission Profile)
          el('p126-s1-tag', 'text', 100, 140, 540, 36, { text: 'ORBITAL LAUNCH SYSTEM // REV 6.0', fontSize: 16, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#06b6d4', letterSpacing: 2 }),
          el('p126-s1-title', 'text', 100, 200, 540, 280, { text: 'ASTRA\nORBITAL\nHEAVY', fontSize: 82, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p126-s1-desc', 'text', 100, 520, 540, 240, { text: 'Delivering 45 metric tons to Low Earth Orbit at $800/kg using fully reusable stainless steel stages and autonomous barge recovery.', fontSize: 20, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.7 }),
          el('p126-s1-foot', 'text', 100, 860, 540, 60, { text: 'CAPE CANAVERAL SLC-48\nMANIFEST SCHEDULE 2026', fontSize: 16, fontFamily: 'IBM Plex Mono', fill: '#06b6d4', lineHeight: 1.5 }),
          // Center Column (Vertical Rocket Plume Photo)
          el('p126-s1-img', 'image', 680, 80, 560, 920, { src: PHOTOS[126], borderRadius: 24, locked: true }),
          // Right Column (Telemetry Cards)
          el('p126-s1-c1', 'rect', 1280, 140, 540, 230, { fill: '#082f49', borderRadius: 20 }),
          el('p126-s1-c1-v', 'text', 1330, 170, 440, 70, { text: '45,000 kg', fontSize: 56, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#06b6d4' }),
          el('p126-s1-c1-l', 'text', 1330, 250, 440, 80, { text: 'Payload to Low Earth Orbit with direct GTO injection stage.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.5 }),
          el('p126-s1-c2', 'rect', 1280, 410, 540, 230, { fill: '#082f49', borderRadius: 20 }),
          el('p126-s1-c2-v', 'text', 1330, 440, 440, 70, { text: '$800 / kg', fontSize: 56, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p126-s1-c2-l', 'text', 1330, 520, 440, 80, { text: 'Target cost threshold enabling commercial constellation viability.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.5 }),
          el('p126-s1-c3', 'rect', 1280, 680, 540, 230, { fill: '#082f49', borderRadius: 20 }),
          el('p126-s1-c3-v', 'text', 1330, 710, 440, 70, { text: '24 Turnaround', fontSize: 56, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#06b6d4' }),
          el('p126-s1-c3-l', 'text', 1330, 790, 440, 80, { text: 'Hours between splashdown inspection and re-flight pad rollout.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.5 })
        ]
      },
      {
        id: 'p126-s2',
        name: 'Booster Recovery Trajectory',
        elements: [
          el('p126-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#020617', locked: true }),
          el('p126-s2-h', 'text', 100, 90, 1720, 60, { text: 'AUTONOMOUS BOOSTER RE-ENTRY AND TOUCHDOWN', fontSize: 44, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p126-s2-c1', 'rect', 100, 200, 540, 780, { fill: '#0a192f', borderRadius: 20 }),
          el('p126-s2-v1', 'text', 150, 250, 440, 60, { text: 'STAGE 1: BOOSTBACK', fontSize: 24, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#06b6d4' }),
          el('p126-s2-d1', 'text', 150, 330, 440, 580, { text: 'At T+2:42 following stage separation at Mach 7.8, the booster flips 180 degrees using cold-gas thrusters. Three center engines ignite for a 54-second boostback burn, canceling downrange momentum and targeting ocean recovery coordinates 380 nautical miles offshore.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p126-s2-c2', 'rect', 690, 200, 540, 780, { fill: '#0a192f', borderRadius: 20 }),
          el('p126-s2-v2', 'text', 740, 250, 440, 60, { text: 'STAGE 2: GRID FINS', fontSize: 24, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#38bdf8' }),
          el('p126-s2-d2', 'text', 740, 330, 440, 580, { text: 'Four cast-titanium grid fins deploy into supersonic airflow during atmospheric re-entry. Operating at temperatures exceeding 950°C without ablative loss, hydraulic actuators trim angle of attack to fly the vehicle through hypersonic transition corridors.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p126-s2-c3', 'rect', 1280, 200, 540, 780, { fill: '#0a192f', borderRadius: 20 }),
          el('p126-s2-v3', 'text', 1330, 250, 440, 60, { text: 'STAGE 3: DRONE BARGE', fontSize: 24, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#ffffff' }),
          el('p126-s2-d3', 'text', 1330, 330, 440, 580, { text: 'At 800 meters altitude, radar altimeters command a single-engine hoverslam burn. Four pneumatic landing legs lock into position 1.8 seconds prior to touchdown on the GPS-stabilized autonomous barge, securing the airframe with octagrabber clamps.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 })
        ]
      },
      {
        id: 'p126-s3',
        name: 'Methane Staged Combustion Engine',
        elements: [
          el('p126-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#020617', locked: true }),
          el('p126-s3-tag', 'text', 100, 100, 780, 30, { text: 'PROPULSION ARCHITECTURE // FULL-FLOW STAGED COMBUSTION', fontSize: 16, fontFamily: 'IBM Plex Mono', fill: '#06b6d4' }),
          el('p126-s3-head', 'text', 100, 150, 780, 180, { text: 'METHALOX MOTORS: 320 BAR COMBUSTION', fontSize: 52, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.1 }),
          el('p126-s3-desc', 'text', 100, 360, 780, 300, { text: 'Burning densified liquid methane and liquid oxygen at 320 atmospheres chamber pressure, delivering sea-level specific impulse of 334s.\n\nMethane produces clean exhaust with zero coking inside turbine channels, allowing 25 consecutive orbital missions without engine overhaul.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p126-s3-metric', 'rect', 100, 700, 780, 260, { fill: '#082f49', borderRadius: 20 }),
          el('p126-s3-mv', 'text', 150, 740, 680, 70, { text: '18,500,000 LBF', fontSize: 56, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#06b6d4' }),
          el('p126-s3-ml', 'text', 150, 830, 680, 90, { text: 'Combined liftoff thrust from 33-engine booster ring cluster.', fontSize: 18, fontFamily: 'IBM Plex Mono', fill: '#ffffff' }),
          el('p126-s3-img', 'image', 940, 100, 880, 880, { src: PHOTOS[126], borderRadius: 24 })
        ]
      },
      {
        id: 'p126-s4',
        name: 'Payload Fairing Volume',
        elements: [
          el('p126-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#020617', locked: true }),
          el('p126-s4-img', 'image', 100, 90, 1720, 500, { src: PHOTOS[126], borderRadius: 20 }),
          el('p126-s4-c1', 'rect', 100, 630, 840, 360, { fill: '#082f49', borderRadius: 20 }),
          el('p126-s4-c1-t', 'text', 150, 670, 740, 50, { text: '9.0m DIAMETER COMPOSITE NOSE FAIRING', fontSize: 28, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p126-s4-c1-d', 'text', 150, 740, 740, 200, { text: 'Accommodating next-generation 8-meter phased-array orbital radar satellites, deep-space telescopes, and multi-satellite dispenser rings carrying up to 60 spacecraft per launch.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p126-s4-c2', 'rect', 980, 630, 840, 360, { fill: '#082f49', borderRadius: 20 }),
          el('p126-s4-c2-t', 'text', 1030, 670, 740, 50, { text: 'DIRECT INJECTION UPPER STAGE', fontSize: 28, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#06b6d4' }),
          el('p126-s4-c2-d', 'text', 1030, 740, 740, 200, { text: 'Vacuum-optimized single nozzle engine with multi-restart spark ignition capable of circularizing orbits up to 36,000 km GEO or injecting payloads onto translunar trajectories.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p126-s5',
        name: 'Closing',
        elements: [
          el('p126-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#020617', locked: true }),
          el('p126-s5-title', 'text', 120, 260, 1000, 260, { text: 'THE HIGHWAY\nTO THE STARS.', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p126-s5-desc', 'text', 120, 560, 960, 140, { text: 'Manifest orbital slots are now open for 2026-2028 commercial satellite deployments and deep-space science exploration missions.', fontSize: 24, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.7 }),
          el('p126-s5-box', 'rect', 1180, 220, 640, 580, { fill: '#082f49', borderRadius: 24 }),
          el('p126-s5-bt', 'text', 1230, 280, 540, 40, { text: 'LAUNCH MANIFEST INQUIRIES', fontSize: 20, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#06b6d4' }),
          el('p126-s5-bd', 'text', 1230, 360, 540, 380, { text: 'Astra Orbital Flight Operations\nCape Canaveral Space Force Station\nSLC-48 Commercial Launch Pad\n\nEmail: manifest@astraorbital.space\nSecure Telemetry: +1 (321) 555-0199', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // =========================================================================
  // 127: Sovereign Digital Currency & Central Bank Ledger (Deep Emerald & Mint)
  // Layout: 4-Quadrant Vault Grid (Top-Left Title, Top-Right Image, Bottom-Left KPIs, Bottom-Right Policy)
  // =========================================================================
  decks.push({
    id: 127,
    name: 'Sovereign Digital Currency & Central Bank Ledger',
    title: 'CENTRAL BANK DIGITAL CURRENCY SYSTEM',
    description: 'Sub-second RTGS settlement, offline cryptographic tokens, and programmable monetary policy rails.',
    category: 'Presentation',
    subcategory: 'Fintech & Sovereign Systems',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['fintech', 'cbdc', 'banking', 'crypto', 'sovereign'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 6890,
    views: 65000,
    gradient: 'linear-gradient(135deg, #042f2e 0%, #0284c7 100%)',
    fonts: ['Space Grotesk', 'Inter', 'IBM Plex Mono'],
    colors: ['#042f2e', '#059669', '#ffffff', '#a7f3d0'],
    slides: [
      {
        id: 'p127-s1',
        name: 'Cover',
        elements: [
          el('p127-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#042f2e', locked: true }),
          // Quadrant 1 (Top-Left Headline)
          el('p127-s1-tag', 'text', 100, 80, 820, 30, { text: 'CENTRAL BANK MONETARY INFRASTRUCTURE // WHITE PAPER', fontSize: 16, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#34d399', letterSpacing: 2 }),
          el('p127-s1-title', 'text', 100, 130, 820, 240, { text: 'SOVEREIGN CBDC: INSTANT ATOMIC SETTLEMENT', fontSize: 80, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p127-s1-desc', 'text', 100, 390, 820, 90, { text: 'Replacing multi-day correspondent banking friction with cryptographically proven real-time settlement handling 250,000 transactions per second.', fontSize: 20, fontFamily: 'Inter', fill: '#a7f3d0', lineHeight: 1.6 }),
          // Quadrant 2 (Top-Right Vault Image)
          el('p127-s1-img', 'image', 960, 80, 860, 400, { src: PHOTOS[127], borderRadius: 20, locked: true }),
          // Quadrant 3 (Bottom-Left Consensus KPIs)
          el('p127-s1-c1', 'rect', 100, 520, 820, 470, { fill: '#064e3b', borderRadius: 20 }),
          el('p127-s1-m1', 'text', 150, 560, 720, 60, { text: '250,000 TPS CAPACITY', fontSize: 36, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#34d399' }),
          el('p127-s1-md1', 'text', 150, 630, 720, 80, { text: 'Horizontally sharded state machine replication maintaining microsecond determinism under nationwide commercial peak loads.', fontSize: 18, fontFamily: 'Inter', fill: '#e2e8f0', lineHeight: 1.6 }),
          el('p127-s1-m2', 'text', 150, 730, 720, 60, { text: '35ms SUB-SECOND FINALITY', fontSize: 36, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p127-s1-md2', 'text', 150, 800, 720, 80, { text: 'Irreversible cryptographic signature verification across central bank and commercial validator node clusters.', fontSize: 18, fontFamily: 'Inter', fill: '#e2e8f0', lineHeight: 1.6 }),
          el('p127-s1-m3-lbl', 'text', 150, 910, 720, 40, { text: 'BASEL III CAPITAL ACCREDITED ARCHITECTURE · PILOT 2026', fontSize: 16, fontFamily: 'IBM Plex Mono', fill: '#34d399' }),
          // Quadrant 4 (Bottom-Right Programmable Policy Card)
          el('p127-s1-c2', 'rect', 960, 520, 860, 470, { fill: '#065f46', borderRadius: 20 }),
          el('p127-s1-c2-h', 'text', 1010, 560, 760, 50, { text: 'PROGRAMMABLE MONETARY RAILS', fontSize: 32, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p127-s1-c2-d', 'text', 1010, 630, 760, 320, { text: 'Enables targeted fiscal stimulus distributions with algorithmic expiry, conditional green energy subsidy disbursement, and sub-penny microtransactions for automated machine-to-machine commerce without banking intermediary surcharge taxes.', fontSize: 22, fontFamily: 'Inter', fill: '#a7f3d0', lineHeight: 1.8 })
        ]
      },
      {
        id: 'p127-s2',
        name: 'Legacy Clearance vs CBDC',
        elements: [
          el('p127-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#042f2e', locked: true }),
          el('p127-s2-h', 'text', 100, 90, 1720, 60, { text: 'ERADICATING T+2 COUNTERPARTY SETTLEMENT RISK', fontSize: 44, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p127-s2-col1', 'rect', 100, 190, 840, 790, { fill: '#14382f', borderRadius: 20 }),
          el('p127-s2-c1-t', 'text', 150, 240, 740, 50, { text: 'LEGACY CORRESPONDENT BANKING', fontSize: 28, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#f87171' }),
          el('p127-s2-c1-d', 'text', 150, 310, 740, 600, { text: '• $4.2 Trillion trapped worldwide in pre-funded Nostro/Vostro accounts\n• Multi-hop SWIFT messaging with 3% to 6% transaction leakages\n• T+2 and T+3 settlement latency exposes balance sheets to Herstatt FX insolvency risk\n• Zero transparency on intermediate correspondent bank liquidity status during financial crisis', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 2.0 }),
          el('p127-s2-col2', 'rect', 980, 190, 840, 790, { fill: '#064e3b', borderRadius: 20 }),
          el('p127-s2-c2-t', 'text', 1030, 240, 740, 50, { text: 'SOVEREIGN ATOMIC CBDC SETTLEMENT', fontSize: 28, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#34d399' }),
          el('p127-s2-c2-d', 'text', 1030, 310, 740, 600, { text: '• 0 Pre-funding requirement: Instant atomic Payment-versus-Payment (PvP)\n• Zero intermediary fees: direct ledger entry across central bank accounts\n• 35 millisecond cryptographic finality eliminating counterparty risk entirely\n• Real-time systemic liquidity transparency for central bank macroprudential regulators', fontSize: 22, fontFamily: 'Inter', fill: '#a7f3d0', lineHeight: 2.0 })
        ]
      },
      {
        id: 'p127-s3',
        name: 'Hardware Enclave Offline Tokens',
        elements: [
          el('p127-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#042f2e', locked: true }),
          el('p127-s3-img', 'image', 100, 90, 1720, 440, { src: PHOTOS[127], borderRadius: 20 }),
          el('p127-s3-c1', 'rect', 100, 570, 540, 420, { fill: '#064e3b', borderRadius: 20 }),
          el('p127-s3-v1', 'text', 150, 620, 440, 50, { text: 'DUAL-CHIP NFC ENCLAVES', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#34d399' }),
          el('p127-s3-d1', 'text', 150, 690, 440, 260, { text: 'Tamper-resistant secure elements embedded in smartcards allow peer-to-peer balance decrements without active internet connectivity.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p127-s3-c2', 'rect', 690, 570, 540, 420, { fill: '#064e3b', borderRadius: 20 }),
          el('p127-s3-v2', 'text', 740, 620, 440, 50, { text: 'CRYPTOGRAPHIC AUDIT TRAIL', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p127-s3-d2', 'text', 740, 690, 440, 260, { text: 'Offline spends create zero-knowledge signed attestations verified and reconciled automatically upon reconnection to mobile cell networks.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p127-s3-c3', 'rect', 1280, 570, 540, 420, { fill: '#064e3b', borderRadius: 20 }),
          el('p127-s3-v3', 'text', 1330, 620, 440, 50, { text: 'DISASTER RESILIENCE', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#34d399' }),
          el('p127-s3-d3', 'text', 1330, 690, 440, 260, { text: 'Guarantees continuous retail transaction capability during regional power outages, undersea cable severing, or national emergencies.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p127-s4',
        name: 'Regulatory Compliance & Privacy',
        elements: [
          el('p127-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#042f2e', locked: true }),
          el('p127-s4-img', 'image', 100, 100, 720, 880, { src: PHOTOS[127], borderRadius: 20 }),
          el('p127-s4-r1', 'rect', 860, 100, 960, 190, { fill: '#064e3b', borderRadius: 16 }),
          el('p127-s4-r1-t', 'text', 900, 130, 880, 40, { text: 'ZERO-KNOWLEDGE IDENTITY VERIFICATION', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#34d399' }),
          el('p127-s4-r1-d', 'text', 900, 180, 880, 80, { text: 'Citizens transact with mathematical cash-like privacy below $1,000 regulatory thresholds without exposing personal identifiers to merchant databases.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.5 }),
          el('p127-s4-r2', 'rect', 860, 320, 960, 190, { fill: '#064e3b', borderRadius: 16 }),
          el('p127-s4-r2-t', 'text', 900, 350, 880, 40, { text: 'AUTOMATED AML & SANCTION SCREENING', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p127-s4-r2-d', 'text', 900, 400, 880, 80, { text: 'Heuristic graph algorithms evaluate transaction graphs at ledger admission, freezing sanctioned flows in microseconds before execution.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.5 }),
          el('p127-s4-r3', 'rect', 860, 540, 960, 190, { fill: '#064e3b', borderRadius: 16 }),
          el('p127-s4-r3-t', 'text', 900, 570, 880, 40, { text: 'TWO-TIER INTERMEDIATED DISTRIBUTION', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#34d399' }),
          el('p127-s4-r3-d', 'text', 900, 620, 880, 80, { text: 'Commercial banks maintain customer relationship interfaces, safeguarding bank deposit stability while leveraging sovereign settlement.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.5 }),
          el('p127-s4-r4', 'rect', 860, 760, 960, 220, { fill: '#064e3b', borderRadius: 16 }),
          el('p127-s4-r4-t', 'text', 900, 790, 880, 40, { text: 'CROSS-BORDER MULTI-CBDC BRIDGES', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p127-s4-r4-d', 'text', 900, 840, 880, 110, { text: 'Conforms to Project mBridge and BIS multilateral standards, enabling bilateral instant currency swaps across central banks without reserve currency dependencies.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.5 })
        ]
      },
      {
        id: 'p127-s5',
        name: 'Closing',
        elements: [
          el('p127-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#042f2e', locked: true }),
          el('p127-s5-tag', 'text', 100, 180, 1720, 40, { text: 'SOVEREIGN FINANCIAL STABILITY // 2026 ROADMAP', fontSize: 18, fontFamily: 'IBM Plex Mono', fill: '#34d399', align: 'center' }),
          el('p127-s5-title', 'text', 100, 250, 1720, 180, { text: 'THE FUTURE OF SOVEREIGN CURRENCY.', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', align: 'center' }),
          el('p127-s5-box', 'rect', 460, 500, 1000, 400, { fill: '#064e3b', borderRadius: 24 }),
          el('p127-s5-bt', 'text', 520, 560, 880, 50, { text: 'CENTRAL BANK ARCHITECTURE BILATERAL BRIEFINGS', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#34d399', align: 'center' }),
          el('p127-s5-bd', 'text', 520, 640, 880, 200, { text: 'Monetary Authority Consultations & Sandbox Testing\nBasel Committee Standards Group · Zurich / Singapore\n\nContact: cbdc-architecture@sovereign-vault.gov', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8, align: 'center' })
        ]
      }
    ]
  });

  // =========================================================================
  // 128: Atlas-X Humanoid Robotics (Matte Charcoal & Safety Orange)
  // Layout: Right Full-Height Robot Portrait (1040, 60, 780, 960) + Left Anatomy Specs
  // =========================================================================
  decks.push({
    id: 128,
    name: 'Atlas-X Humanoid Robotics Architecture',
    title: 'ATLAS-X BIONIC HUMANOID PLATFORM',
    description: '52 degrees of freedom, cycloidal torque drives, whole-body balance control, and industrial dexterity.',
    category: 'Presentation',
    subcategory: 'Robotics & Automation',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['robotics', 'humanoid', 'ai', 'actuators', 'manufacturing'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 9140,
    views: 94000,
    gradient: 'linear-gradient(135deg, #111827 0%, #f97316 100%)',
    fonts: ['Space Grotesk', 'IBM Plex Mono', 'Inter'],
    colors: ['#111827', '#f97316', '#ffffff', '#94a3b8'],
    slides: [
      {
        id: 'p128-s1',
        name: 'Cover',
        elements: [
          el('p128-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#111827', locked: true }),
          el('p128-s1-img', 'image', 1040, 60, 780, 960, { src: PHOTOS[128], borderRadius: 24, locked: true }),
          el('p128-s1-tag', 'text', 100, 100, 880, 36, { text: 'HUMANOID KINEMATICS // SPECIFICATION DOSSIER', fontSize: 16, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#f97316', letterSpacing: 2 }),
          el('p128-s1-title', 'text', 100, 160, 900, 260, { text: 'ATLAS-X: AUTONOMOUS BIPEDAL WORKER', fontSize: 86, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p128-s1-pills', 'rect', 100, 450, 900, 54, { fill: '#1f2937', borderRadius: 12 }),
          el('p128-s1-pill-t', 'text', 120, 465, 860, 30, { text: '52 DEGREES OF FREEDOM  •  180 NM PEAK TORQUE  •  8-HOUR HOT-SWAP RUNTIME', fontSize: 16, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#f97316' }),
          el('p128-s1-card', 'rect', 100, 540, 900, 440, { fill: '#1f2937', borderRadius: 20 }),
          el('p128-s1-ch', 'text', 150, 590, 800, 40, { text: 'DESIGNED FOR HUMAN-CENTRIC FACTORIES', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p128-s1-cd', 'text', 150, 650, 800, 280, { text: 'Engineered with human proportions (176cm / 68kg) to operate within existing automotive assembly lines, warehouses, and cleanrooms without retrofitting facility floor plans or replacing manual tooling equipment.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 })
        ]
      },
      {
        id: 'p128-s2',
        name: 'Kinematic Dexterity & Grippers',
        elements: [
          el('p128-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#111827', locked: true }),
          el('p128-s2-h', 'text', 100, 80, 1720, 60, { text: 'SUB-MILLIMETER TACTILE FORCE SENSING', fontSize: 44, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p128-s2-img', 'image', 100, 180, 540, 800, { src: PHOTOS[128], borderRadius: 20 }),
          el('p128-s2-c1', 'rect', 680, 180, 540, 800, { fill: '#1f2937', borderRadius: 20 }),
          el('p128-s2-v1', 'text', 730, 230, 440, 50, { text: '16 DoF ANTHROPOMORPHIC HAND', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#f97316' }),
          el('p128-s2-d1', 'text', 730, 300, 440, 620, { text: 'Featuring miniature brushless dc motor strings embedded within forearm channels. Tendon-driven fingers simulate human tendon elasticity, handling delicate eggshells or heavy 25kg battery trays without changing tool ends.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p128-s2-c2', 'rect', 1260, 180, 560, 800, { fill: '#1f2937', borderRadius: 20 }),
          el('p128-s2-v2', 'text', 1310, 230, 460, 50, { text: 'OPTICAL TACTILE ARRAYS', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p128-s2-d2', 'text', 1310, 300, 460, 620, { text: 'High-density micro-cameras underneath deformable elastomer fingertips measure shear stress and micro-slip at 400Hz, enabling blind object manipulation and precise threading of wire harnesses into automotive chassis slots.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 })
        ]
      },
      {
        id: 'p128-s3',
        name: 'Whole-Body Dynamic Walking',
        elements: [
          el('p128-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#111827', locked: true }),
          el('p128-s3-bar', 'rect', 100, 90, 1720, 320, { fill: '#1f2937', borderRadius: 20 }),
          el('p128-s3-h', 'text', 150, 130, 1620, 50, { text: '1 kHz MODEL PREDICTIVE WHOLE-BODY STABILITY CONTROLLER', fontSize: 36, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p128-s3-d', 'text', 150, 200, 1620, 170, { text: 'Computes contact forces across all joint actuators simultaneously in real time, absorbing external perturbations, compensating for oil slicks on industrial concrete, and navigating staircases without pausing momentum.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p128-s3-img', 'image', 100, 450, 1720, 530, { src: PHOTOS[128], borderRadius: 20 })
        ]
      },
      {
        id: 'p128-s4',
        name: 'Fleet Orchestration OS',
        elements: [
          el('p128-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#111827', locked: true }),
          el('p128-s4-c1', 'rect', 100, 100, 840, 420, { fill: '#1f2937', borderRadius: 20 }),
          el('p128-s4-t1', 'text', 150, 140, 740, 50, { text: 'OVER-THE-AIR SKILL DEPLOYMENT', fontSize: 28, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#f97316' }),
          el('p128-s4-d1', 'text', 150, 210, 740, 270, { text: 'Once a single robot learns an assembly procedure via reinforcement learning in simulation or human teleoperation, the trained policy weights are pushed instantly to all robots worldwide.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p128-s4-c2', 'rect', 980, 100, 840, 420, { fill: '#1f2937', borderRadius: 20 }),
          el('p128-s4-t2', 'text', 1030, 140, 740, 50, { text: 'SAFETY ARCHITECTURE SIL 3', fontSize: 28, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p128-s4-d2', 'text', 1030, 210, 740, 270, { text: 'Triple-redundant force-limiting torque sensors at every rotary joint instantly freeze movement within 4 milliseconds if an unexpected human limb encounter occurs.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p128-s4-c3', 'rect', 100, 560, 840, 420, { fill: '#1f2937', borderRadius: 20 }),
          el('p128-s4-t3', 'text', 150, 600, 740, 50, { text: 'AUTONOMOUS RECHARGING DOCKS', fontSize: 28, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p128-s4-d3', 'text', 150, 670, 740, 270, { text: 'Robots step into back-mounted hot-swap stations, swapping depleted 2.4kWh lithium packs for fresh batteries in 90 seconds, maintaining 96% round-the-clock shift uptime.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p128-s4-c4', 'rect', 980, 560, 840, 420, { fill: '#1f2937', borderRadius: 20 }),
          el('p128-s4-t4', 'text', 1030, 600, 740, 50, { text: 'EDGE COMPUTE DUAL NPU', fontSize: 28, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#f97316' }),
          el('p128-s4-d4', 'text', 1030, 670, 740, 270, { text: 'Onboard 1,200 TOPS inference silicon processes 8 RGB-D camera feeds and spatial audio locally with zero dependence on Wi-Fi connectivity.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p128-s5',
        name: 'Closing',
        elements: [
          el('p128-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#111827', locked: true }),
          el('p128-s5-stripe', 'rect', 100, 220, 14, 320, { fill: '#f97316' }),
          el('p128-s5-title', 'text', 150, 200, 1050, 240, { text: 'SCALING LABOR BEYOND BIOLOGICAL LIMITS.', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p128-s5-desc', 'text', 150, 480, 1050, 140, { text: 'Commercial factory pilot deployments are now active across aerospace and automotive manufacturing tiers worldwide.', fontSize: 24, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.7 }),
          el('p128-s5-card', 'rect', 1260, 200, 560, 560, { fill: '#1f2937', borderRadius: 24 }),
          el('p128-s5-ct', 'text', 1310, 260, 460, 40, { text: 'FLEET PROCUREMENT', fontSize: 20, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#f97316' }),
          el('p128-s5-cd', 'text', 1310, 330, 460, 390, { text: 'Atlas-X Robotics Corp\nRobotics Automation District\nFremont, California\n\nDeployment Inquiries:\nfleet@atlas-x-robotics.ai\nDirect: +1 (510) 555-0811', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // =========================================================================
  // 129: Abyssal Trench Mineralogy (Deep Oceanic Trench & Cyan)
  // Layout: Top Bathymetric Panorama (100, 80, 1720, 520) + Bottom Headline + 3 Depth Cards
  // =========================================================================
  decks.push({
    id: 129,
    name: 'Abyssal Trench Mineralogy Expedition',
    title: 'HADAL ZONE POLYMETALLIC NODULE ASSAYS',
    description: 'Autonomous benthic rovers, 11,000m pressure enclosures, and battery metal seabed deposits.',
    category: 'Presentation',
    subcategory: 'Oceanography & Marine Mining',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['ocean', 'marine', 'geology', 'mining', 'deepsea'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 6420,
    views: 61000,
    gradient: 'linear-gradient(135deg, #030712 0%, #0369a1 100%)',
    fonts: ['Space Grotesk', 'IBM Plex Mono', 'Inter'],
    colors: ['#030712', '#38bdf8', '#ffffff', '#93c5fd'],
    slides: [
      {
        id: 'p129-s1',
        name: 'Cover',
        elements: [
          el('p129-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#030712', locked: true }),
          el('p129-s1-img', 'image', 100, 80, 1720, 520, { src: PHOTOS[129], borderRadius: 20, locked: true }),
          el('p129-s1-title', 'text', 100, 630, 1720, 160, { text: 'ABYSSAL TRENCH: HADAL MINERAL RESERVES', fontSize: 86, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p129-s1-c1', 'rect', 100, 810, 540, 190, { fill: '#082f49', borderRadius: 16 }),
          el('p129-s1-c1-v', 'text', 140, 835, 460, 55, { text: '11,034 m', fontSize: 52, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#38bdf8' }),
          el('p129-s1-c1-l', 'text', 140, 905, 460, 60, { text: 'Mariana Trench Challenger Deep sounding floor survey.', fontSize: 16, fontFamily: 'Inter', fill: '#cbd5e1' }),
          el('p129-s1-c2', 'rect', 690, 810, 540, 190, { fill: '#082f49', borderRadius: 16 }),
          el('p129-s1-c2-v', 'text', 730, 835, 460, 55, { text: '1,100 Bar', fontSize: 52, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p129-s1-c2-l', 'text', 730, 905, 460, 60, { text: 'Hydrostatic pressure rated titanium spherical hulls.', fontSize: 16, fontFamily: 'Inter', fill: '#cbd5e1' }),
          el('p129-s1-c3', 'rect', 1280, 810, 540, 190, { fill: '#082f49', borderRadius: 16 }),
          el('p129-s1-c3-v', 'text', 1320, 835, 460, 55, { text: '34.2% Grade', fontSize: 52, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#38bdf8' }),
          el('p129-s1-c3-l', 'text', 1320, 905, 460, 60, { text: 'Combined Nickel, Cobalt, and Copper ore purity assays.', fontSize: 16, fontFamily: 'Inter', fill: '#cbd5e1' })
        ]
      },
      {
        id: 'p129-s2',
        name: 'Elemental Assays',
        elements: [
          el('p129-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#030712', locked: true }),
          el('p129-s2-img', 'image', 100, 100, 760, 880, { src: PHOTOS[129], borderRadius: 24 }),
          el('p129-s2-r1', 'rect', 900, 100, 920, 260, { fill: '#082f49', borderRadius: 20 }),
          el('p129-s2-r1-t', 'text', 950, 130, 820, 60, { text: 'NICKEL: 1.45% CRUST DENSITY', fontSize: 36, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#38bdf8' }),
          el('p129-s2-r1-d', 'text', 950, 200, 820, 120, { text: 'Sufficient to power over 250 million electric vehicle battery packs with zero terrestrial deforestation footprint or toxic overburden tailing waste ponds.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 }),
          el('p129-s2-r2', 'rect', 900, 410, 920, 260, { fill: '#082f49', borderRadius: 20 }),
          el('p129-s2-r2-t', 'text', 950, 440, 820, 60, { text: 'COBALT: 0.32% HIGH-PURITY', fontSize: 36, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p129-s2-r2-d', 'text', 950, 510, 820, 120, { text: 'Direct un-weathered sea-floor precipitation ensuring crystalline matrix stability and negligible radioactive thorium contaminants.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 }),
          el('p129-s2-r3', 'rect', 900, 720, 920, 260, { fill: '#082f49', borderRadius: 20 }),
          el('p129-s2-r3-t', 'text', 950, 750, 820, 60, { text: 'COPPER: 1.18% SEABED FRACTION', fontSize: 36, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#38bdf8' }),
          el('p129-s2-r3-d', 'text', 950, 820, 820, 120, { text: 'Subsea high-voltage transmission interconnect wire raw stock critical for expanding offshore renewable wind farms.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p129-s3',
        name: 'Acoustic Sonar Rig',
        elements: [
          el('p129-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#030712', locked: true }),
          el('p129-s3-h', 'text', 100, 80, 1720, 60, { text: 'SYNTHETIC APERTURE ACOUSTIC SONAR MAPPING', fontSize: 44, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', align: 'center' }),
          el('p129-s3-img', 'image', 360, 180, 1200, 540, { src: PHOTOS[129], borderRadius: 20 }),
          el('p129-s3-c1', 'rect', 100, 760, 840, 240, { fill: '#082f49', borderRadius: 20 }),
          el('p129-s3-c1-t', 'text', 150, 800, 740, 40, { text: '5 CM BATHYMETRIC RESOLUTION', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#38bdf8' }),
          el('p129-s3-c1-d', 'text', 150, 850, 740, 110, { text: 'Mapping benthic nodule fields across 4,000 square kilometers weekly with autonomous underwater swarms.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 }),
          el('p129-s3-c2', 'rect', 980, 760, 840, 240, { fill: '#082f49', borderRadius: 20 }),
          el('p129-s3-c2-t', 'text', 1030, 800, 740, 40, { text: 'SUB-BOTTOM PROFILER PENETRATION', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p129-s3-c2-d', 'text', 1030, 850, 740, 110, { text: '30kHz acoustic pulses penetrate 50m of abyssal clay, identifying sediment thickness and fault lines.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p129-s4',
        name: 'Benthic Ecosystem Protocols',
        elements: [
          el('p129-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#030712', locked: true }),
          el('p129-s4-c1', 'rect', 100, 160, 540, 820, { fill: '#082f49', borderRadius: 20 }),
          el('p129-s4-v1', 'text', 150, 210, 440, 50, { text: 'PLUME REDUCTION CYCLONES', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#38bdf8' }),
          el('p129-s4-d1', 'text', 150, 280, 440, 640, { text: 'Harvesting rovers separate nodules via gentle acoustic levitation. Disturbed silt is pumped into cyclonic separators and discharged directly onto the seabed floor rather than creating suspended turbidity plumes in the water column.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p129-s4-c2', 'rect', 690, 160, 540, 820, { fill: '#082f49', borderRadius: 20 }),
          el('p129-s4-v2', 'text', 740, 210, 440, 50, { text: '50% PRESERVATION CORRIDORS', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p129-s4-d2', 'text', 740, 280, 440, 640, { text: 'One-half of every surveyed abyssal concession is permanently designated as an untouched biological preserve, preserving benthic sponge and xenophyophore biodiversity sanctuaries for generational scientific study.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p129-s4-c3', 'rect', 1280, 160, 540, 820, { fill: '#082f49', borderRadius: 20 }),
          el('p129-s4-v3', 'text', 1330, 210, 440, 50, { text: 'REAL-TIME OPTICAL MONITORS', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#38bdf8' }),
          el('p129-s4-d3', 'text', 1330, 280, 440, 640, { text: 'Continuous live 4K benthic video transmission via acoustic transponders allows international marine authorities to monitor rover operations with zero regulatory opacity.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 })
        ]
      },
      {
        id: 'p129-s5',
        name: 'Closing',
        elements: [
          el('p129-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#030712', locked: true }),
          el('p129-s5-frame', 'rect', 100, 100, 1720, 880, { fill: 'transparent', stroke: '#0284c7', strokeWidth: 2, borderRadius: 24 }),
          el('p129-s5-title', 'text', 160, 260, 1600, 220, { text: 'UNLOCKING THE DEEP OCEAN.', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', align: 'center' }),
          el('p129-s5-sub', 'text', 360, 540, 1200, 200, { text: 'Autonomous Hadal Exploration & Seabed Assay Concessions\nInternational Seabed Authority Registered Contractor #71\n\nContact: exploration@abyssal-mineralogy.org', fontSize: 24, fontFamily: 'Inter', fill: '#93c5fd', lineHeight: 1.8, align: 'center' })
        ]
      }
    ]
  });

  // =========================================================================
  // 130: Aether Carbon DAC (Direct Air Capture)
  // Layout: Left Pillar Monolith (100, 90, 660, 900) + Right Top Fan Image (800, 90, 1020, 560) + Right Bottom Geothermal Card (800, 680, 1020, 310)
  // =========================================================================
  decks.push({
    id: 130,
    name: 'Megatonne Direct Air Carbon Capture Plant',
    title: 'AETHER CARBON REMOVAL INFRASTRUCTURE',
    description: 'Solid sorbent direct air capture, geothermal desorption, and subterranean basalt mineralization.',
    category: 'Presentation',
    subcategory: 'Climate Tech & Carbon Removal',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['carbon', 'climate', 'dac', 'cleantech', 'geothermal'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 7780,
    views: 74000,
    gradient: 'linear-gradient(135deg, #0f172a 0%, #0284c7 100%)',
    fonts: ['Space Grotesk', 'Inter', 'IBM Plex Mono'],
    colors: ['#0f172a', '#0284c7', '#ffffff', '#38bdf8'],
    slides: [
      {
        id: 'p130-s1',
        name: 'Cover',
        elements: [
          el('p130-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0b1329', locked: true }),
          el('p130-s1-col', 'rect', 100, 90, 660, 900, { fill: '#131e3a', borderRadius: 24 }),
          el('p130-s1-tag', 'text', 140, 130, 580, 30, { text: 'GIGATONNE CLIMATE TECH // 2026', fontSize: 15, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#38bdf8', letterSpacing: 2 }),
          el('p130-s1-title', 'text', 140, 180, 580, 260, { text: 'AETHER:\nDIRECT AIR\nCAPTURE', fontSize: 82, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p130-s1-badge', 'rect', 140, 460, 580, 160, { fill: '#0a1024', borderRadius: 16 }),
          el('p130-s1-b-v', 'text', 170, 485, 520, 45, { text: '1,000,000 TONS/YR', fontSize: 28, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#38bdf8' }),
          el('p130-s1-b-d', 'text', 170, 540, 520, 60, { text: 'Permanent carbon dioxide removal from ambient air.', fontSize: 16, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.5 }),
          el('p130-s1-desc', 'text', 140, 650, 580, 220, { text: 'Next-generation solid amine chemical sponges powered by co-located baseload geothermal steam and injected 800 meters into reactive basaltic aquifers for permanent petrification.', fontSize: 19, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p130-s1-img', 'image', 800, 90, 1020, 560, { src: PHOTOS[130], borderRadius: 24, locked: true }),
          el('p130-s1-geo', 'rect', 800, 680, 1020, 310, { fill: '#131e3a', borderRadius: 24 }),
          el('p130-s1-gt', 'text', 850, 720, 920, 40, { text: 'LOW-TEMPERATURE 100°C THERMAL REGENERATION', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#38bdf8' }),
          el('p130-s1-gd', 'text', 850, 775, 920, 100, { text: 'Operates entirely on zero-carbon geothermal heat, eliminating natural gas consumption and achieving a net-negative energy efficiency ratio of >91% across all seasons.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 }),
          el('p130-s1-gf', 'text', 850, 890, 920, 30, { text: 'VERIFIED ARTICLE 6.4 UNFCCC COMPLIANT · COPENHAGEN / REYKJAVIK', fontSize: 15, fontFamily: 'IBM Plex Mono', fill: '#64748b' })
        ]
      },
      {
        id: 'p130-s2',
        name: 'Thermodynamics of Atmospheric Capture',
        elements: [
          el('p130-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f172a', locked: true }),
          el('p130-s2-h', 'text', 100, 80, 1720, 60, { text: 'LOW-TEMPERATURE CYCLIC ADSORPTION & DESORPTION', fontSize: 44, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p130-s2-c1', 'rect', 100, 180, 840, 800, { fill: '#1e293b', borderRadius: 24 }),
          el('p130-s2-c1-t', 'text', 150, 230, 740, 50, { text: 'PHASE 1: ADSORPTION CYCLE', fontSize: 28, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#38bdf8' }),
          el('p130-s2-c1-d', 'text', 150, 300, 740, 620, { text: 'Giant collector fans draw ambient air through porous chemical filter sponges. Chemical amine functional groups selectively bind atmospheric CO2 molecules (currently 420 ppm) while releasing pure scrubbed nitrogen and oxygen back into the air.\n\nAir velocity is maintained at 1.8 m/s, balancing volumetric flow against electrical fan parasitic drag.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p130-s2-c2', 'rect', 980, 180, 840, 800, { fill: '#1e293b', borderRadius: 24 }),
          el('p130-s2-c2-t', 'text', 1030, 230, 740, 50, { text: 'PHASE 2: DESORPTION CYCLE', fontSize: 28, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p130-s2-c2-d', 'text', 1030, 300, 740, 620, { text: 'Once filter materials reach chemical saturation, the collector chamber seals airtight. Low-grade geothermal steam warms the core to 100°C under mild vacuum.\n\nThe pure CO2 gas detaches from sorbent matrices, is extracted at >99.8% purity, compressed to 100 bar supercritical fluid, and transported via pipelines to injection boreholes.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 })
        ]
      },
      {
        id: 'p130-s3',
        name: 'Basalt Mineralization',
        elements: [
          el('p130-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f172a', locked: true }),
          el('p130-s3-img', 'image', 100, 90, 1720, 460, { src: PHOTOS[130], borderRadius: 24 }),
          el('p130-s3-c1', 'rect', 100, 600, 540, 390, { fill: '#1e293b', borderRadius: 20 }),
          el('p130-s3-v1', 'text', 150, 640, 440, 50, { text: '1,500 METERS DEPTH', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#38bdf8' }),
          el('p130-s3-d1', 'text', 150, 710, 440, 240, { text: 'Dissolved CO2 in groundwater is pumped deep into porous volcanic basalt formations beneath impermeable capstone seals.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p130-s3-c2', 'rect', 690, 600, 540, 390, { fill: '#1e293b', borderRadius: 20 }),
          el('p130-s3-v2', 'text', 740, 640, 440, 50, { text: '< 2 YEAR MINERALIZATION', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p130-s3-d2', 'text', 740, 710, 440, 240, { text: 'CO2 reacts naturally with magnesium, iron, and calcium ions in basalt, permanently turning into solid carbonate mineral rock (calcite).', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p130-s3-c3', 'rect', 1280, 600, 540, 390, { fill: '#1e293b', borderRadius: 20 }),
          el('p130-s3-v3', 'text', 1330, 640, 440, 50, { text: '10,000+ YEAR PERMANENCE', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#38bdf8' }),
          el('p130-s3-d3', 'text', 1330, 710, 440, 240, { text: 'Zero risk of gas leakage back into atmosphere even under severe earthquakes or geopolitical disruption.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p130-s4',
        name: 'Cost Reduction Trajectory',
        elements: [
          el('p130-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f172a', locked: true }),
          el('p130-s4-h', 'text', 100, 80, 1720, 60, { text: 'PATH TO $100 / TON CARBON REMOVAL', fontSize: 44, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p130-s4-m1', 'rect', 100, 200, 380, 770, { fill: '#1e293b', borderRadius: 20 }),
          el('p130-s4-m1-yr', 'text', 140, 240, 300, 40, { text: '2024 · PILOT', fontSize: 20, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#38bdf8' }),
          el('p130-s4-m1-p', 'text', 140, 290, 300, 70, { text: '$550 / t', fontSize: 52, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p130-s4-m1-d', 'text', 140, 380, 300, 520, { text: 'Bespoke hand-assembled fan collector units, prototype chemical filter blocks, and pilot-scale compression equipment testing thermodynamic baselines.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p130-s4-m2', 'rect', 520, 200, 380, 770, { fill: '#1e293b', borderRadius: 20 }),
          el('p130-s4-m2-yr', 'text', 560, 240, 300, 40, { text: '2026 · AETHER-1', fontSize: 20, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#38bdf8' }),
          el('p130-s4-m2-p', 'text', 560, 290, 300, 70, { text: '$280 / t', fontSize: 52, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p130-s4-m2-d', 'text', 560, 380, 300, 520, { text: 'Standardized mass-manufactured collector pods, automated roll-to-roll sorbent coating lines, and integrated geothermal cogeneration facilities.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p130-s4-m3', 'rect', 940, 200, 380, 770, { fill: '#1e293b', borderRadius: 20 }),
          el('p130-s4-m3-yr', 'text', 980, 240, 300, 40, { text: '2028 · GIGA-PLANT', fontSize: 20, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#38bdf8' }),
          el('p130-s4-m3-p', 'text', 980, 290, 300, 70, { text: '$150 / t', fontSize: 52, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p130-s4-m3-d', 'text', 980, 380, 300, 520, { text: 'Megawatt scale heat recovery networks, high-efficiency axial impeller aerodynamics, and multi-offtaker pipeline infrastructure sharing.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p130-s4-m4', 'rect', 1360, 200, 380, 770, { fill: '#1e293b', borderRadius: 20 }),
          el('p130-s4-m4-yr', 'text', 1400, 240, 300, 40, { text: '2030 · MATURE', fontSize: 20, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#38bdf8' }),
          el('p130-s4-m4-p', 'text', 1400, 290, 300, 70, { text: '$95 / t', fontSize: 52, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p130-s4-m4-d', 'text', 1400, 380, 300, 520, { text: 'Global Gigatonne scale deployment unlocking commercially viable corporate net-zero CDR procurement for Fortune 500 corporations.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p130-s5',
        name: 'Closing',
        elements: [
          el('p130-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f172a', locked: true }),
          el('p130-s5-title', 'text', 100, 220, 1720, 200, { text: 'REVERSING 200 YEARS OF INDUSTRIAL EMISSIONS.', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', align: 'center' }),
          el('p130-s5-card', 'rect', 360, 500, 1200, 380, { fill: '#1e293b', borderRadius: 24 }),
          el('p130-s5-ct', 'text', 420, 560, 1080, 50, { text: 'CORPORATE CDR OFFTAKE CONTRACTS NOW AVAILABLE', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#38bdf8', align: 'center' }),
          el('p130-s5-cd', 'text', 420, 630, 1080, 200, { text: 'Verified by Puro.earth and Frontier Carbon Removal Coalition\nAether Climate Technologies Inc · Reykjavik / Zurich\n\nContact: offtake@aether-carbon.com', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8, align: 'center' })
        ]
      }
    ]
  });

  // =========================================================================
  // 131: Container Freight & Maritime Logistics (Industrial Navy & Hazard Yellow)
  // Layout: Top Hero Gantry Title (100, 90, 1720, 120) + 3 Vertical Pillars (Image: 100, 240, 500, 750; Card 1: 640, 240, 600, 750; Card 2: 1280, 240, 540, 750)
  // =========================================================================
  decks.push({
    id: 131,
    name: 'Maritime Container Shipping & Logistics',
    title: 'PANAMAX GLOBAL OCEAN FREIGHT ALLIANCE',
    description: 'Automated container terminals, dynamic dwell time prediction, and dual-fuel methanol vessel fleets.',
    category: 'Presentation',
    subcategory: 'Supply Chain & Maritime Logistics',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['logistics', 'shipping', 'freight', 'ports', 'supplychain'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 6120,
    views: 59000,
    gradient: 'linear-gradient(135deg, #0f172a 0%, #ca8a04 100%)',
    fonts: ['Space Grotesk', 'IBM Plex Mono', 'Inter'],
    colors: ['#0f172a', '#eab308', '#ffffff', '#cbd5e1'],
    slides: [
      {
        id: 'p131-s1',
        name: 'Cover',
        elements: [
          el('p131-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0a101f', locked: true }),
          el('p131-s1-tag', 'text', 100, 60, 1720, 30, { text: 'GLOBAL MARITIME ALLIANCE // 2026 COMMERCIAL STRATEGY', fontSize: 16, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#eab308', letterSpacing: 2 }),
          el('p131-s1-title', 'text', 100, 95, 1720, 120, { text: 'PANAMAX FREIGHT: GLOBAL OCEAN LOGISTICS', fontSize: 84, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p131-s1-img', 'image', 100, 240, 500, 750, { src: PHOTOS[131], borderRadius: 24, locked: true }),
          el('p131-s1-c1', 'rect', 640, 240, 600, 750, { fill: '#142036', borderRadius: 24 }),
          el('p131-s1-c1-k', 'text', 680, 280, 520, 60, { text: '24,000 TEU', fontSize: 52, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#eab308' }),
          el('p131-s1-c1-sub', 'text', 680, 350, 520, 35, { text: 'ULCV Flagship Carrying Capacity', fontSize: 20, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff' }),
          el('p131-s1-c1-d', 'text', 680, 405, 520, 260, { text: 'Direct line trans-oceanic services connecting major Asian manufacturing nodes to European and American deepwater terminals.\n\nEquipped with twin two-stroke green methanol engines, bow bulb hydrodynamics, and air lubrication hull bubbles.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p131-s1-c1-stat', 'rect', 680, 700, 520, 240, { fill: '#0a101f', borderRadius: 16 }),
          el('p131-s1-c1-sv', 'text', 710, 730, 460, 40, { text: '35 CRANE MOVES / HOUR', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#eab308' }),
          el('p131-s1-c1-sd', 'text', 710, 780, 460, 130, { text: 'Autonomous twin-hoist quay cranes cutting berth port turnaround time by 42% in all-weather maritime fog.', fontSize: 16, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 }),
          el('p131-s1-c2', 'rect', 1280, 240, 540, 750, { fill: '#142036', borderRadius: 24 }),
          el('p131-s1-c2-h', 'text', 1320, 280, 460, 40, { text: '2026 DECARBONIZATION MANDATE', fontSize: 22, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p131-s1-c2-d', 'text', 1320, 340, 460, 300, { text: 'IMO 2030 compliance achieved 4 years early. Flettner rotor wind assist wings generate auxiliary kinetic thrust across open Pacific shipping lanes, saving 8.5% bunker fuel annually.\n\nAll container tracking telemetry is authenticated on an immutable shared shipping manifest ledger.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p131-s1-c2-foot', 'text', 1320, 920, 460, 30, { text: 'SINGAPORE · ROTTERDAM · HOUSTON', fontSize: 15, fontFamily: 'IBM Plex Mono', fill: '#64748b' })
        ]
      },
      {
        id: 'p131-s2',
        name: 'Automated Terminal Stacking',
        elements: [
          el('p131-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f172a', locked: true }),
          el('p131-s2-img', 'image', 100, 100, 800, 880, { src: PHOTOS[131], borderRadius: 24 }),
          el('p131-s2-head', 'text', 950, 100, 870, 120, { text: 'AUTOMATED YARD ROUTING & DWELL TIME REDUCTION', fontSize: 42, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', lineHeight: 1.2 }),
          el('p131-s2-desc', 'text', 950, 250, 870, 240, { text: 'By coordinating autonomous rail-mounted gantry cranes with AI container yard stacking algorithms, terminal congestion and vessel turnaround delays are cut by 42% compared to manual legacy stevedoring yards.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p131-s2-c1', 'rect', 950, 530, 870, 200, { fill: '#1e293b', borderRadius: 16 }),
          el('p131-s2-c1-v', 'text', 990, 560, 790, 50, { text: '35 CRANE MOVES PER HOUR', fontSize: 32, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#eab308' }),
          el('p131-s2-c1-d', 'text', 990, 620, 790, 80, { text: 'Consistent crane hoist velocity maintained 24/7 in extreme maritime fog, rain, or high wind gale conditions.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.5 }),
          el('p131-s2-c2', 'rect', 950, 760, 870, 220, { fill: '#1e293b', borderRadius: 16 }),
          el('p131-s2-c2-v', 'text', 990, 790, 790, 50, { text: '2.4 DAYS AVERAGE DWELL', fontSize: 32, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p131-s2-c2-d', 'text', 990, 850, 790, 100, { text: 'Direct intermodal rail transfers bypass highway drayage congestion, delivering boxes straight to inland distribution hubs.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.5 })
        ]
      },
      {
        id: 'p131-s3',
        name: 'Transit Corridors',
        elements: [
          el('p131-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f172a', locked: true }),
          el('p131-s3-h', 'text', 100, 80, 1720, 60, { text: 'TRANSIT CORRIDOR CAPACITY ALLOCATIONS', fontSize: 44, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p131-s3-c1', 'rect', 100, 170, 840, 390, { fill: '#1e293b', borderRadius: 20 }),
          el('p131-s3-c1-t', 'text', 150, 210, 740, 50, { text: 'TRANS-PACIFIC EXPRESS (TPE-1)', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#eab308' }),
          el('p131-s3-c1-d', 'text', 150, 270, 740, 240, { text: 'Shanghai to Los Angeles / Long Beach in 11 days flat. Dedicated priority berthing windows eliminate offshore anchoring queues during pre-holiday retail surges.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p131-s3-c2', 'rect', 980, 170, 840, 390, { fill: '#1e293b', borderRadius: 20 }),
          el('p131-s3-c2-t', 'text', 1030, 210, 740, 50, { text: 'ASIA-NORTH EUROPE LOOP (AEL-4)', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p131-s3-c2-d', 'text', 1030, 270, 740, 240, { text: 'Singapore to Rotterdam via Cape of Good Hope with mega-vessels operating at maximum fuel efficiency, transporting automotive components and clean energy equipment.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p131-s3-c3', 'rect', 100, 590, 840, 390, { fill: '#1e293b', borderRadius: 20 }),
          el('p131-s3-c3-t', 'text', 150, 630, 740, 50, { text: 'PANAMA CANAL NEOPANAMAX CORRIDOR', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p131-s3-c3-d', 'text', 150, 690, 740, 240, { text: 'Guaranteed auction transit slots connecting East Coast US ports to East Asia, maintaining 99.4% on-time container schedule reliability.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p131-s3-c4', 'rect', 980, 590, 840, 390, { fill: '#1e293b', borderRadius: 20 }),
          el('p131-s3-c4-t', 'text', 1030, 630, 740, 50, { text: 'INTRA-ASIA FEEDER NETWORK', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#eab308' }),
          el('p131-s3-c4-d', 'text', 1030, 690, 740, 240, { text: 'Daily connecting shuttle loops between secondary ports in Vietnam, Indonesia, and Thailand feeding central transshipment megahubs.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p131-s4',
        name: 'Dual-Fuel Methanol Tankers',
        elements: [
          el('p131-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f172a', locked: true }),
          el('p131-s4-img', 'image', 100, 90, 1720, 480, { src: PHOTOS[131], borderRadius: 20 }),
          el('p131-s4-c1', 'rect', 100, 610, 840, 370, { fill: '#1e293b', borderRadius: 20 }),
          el('p131-s4-c1-t', 'text', 150, 650, 740, 50, { text: 'GREEN BIO-METHANOL PROPULSION', fontSize: 28, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#eab308' }),
          el('p131-s4-c1-d', 'text', 150, 720, 740, 220, { text: 'Reduces lifecycle greenhouse gas emissions by up to 95% compared to heavy fuel oil. Compliant with IMO 2030 decarbonization mandates without requiring bulky cryogenic tanks.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p131-s4-c2', 'rect', 980, 610, 840, 370, { fill: '#1e293b', borderRadius: 20 }),
          el('p131-s4-c2-t', 'text', 1030, 650, 740, 50, { text: 'SMART ROTOR SAILS (WIND ASSIST)', fontSize: 28, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p131-s4-c2-d', 'text', 1030, 720, 740, 220, { text: 'Tilting Flettner rotor cylinders harness ocean trade winds to provide auxiliary forward thrust, cutting fuel burn by an additional 8.5% across open oceanic trade routes.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p131-s5',
        name: 'Closing',
        elements: [
          el('p131-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f172a', locked: true }),
          el('p131-s5-bar', 'rect', 100, 200, 1720, 8, { fill: '#eab308' }),
          el('p131-s5-title', 'text', 100, 250, 1720, 180, { text: 'CONNECTING CONTINENTS WITH SPEED.', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p131-s5-box', 'rect', 100, 480, 1720, 420, { fill: '#1e293b', borderRadius: 20 }),
          el('p131-s5-bt', 'text', 160, 540, 1600, 50, { text: 'SECURE ANNUAL CARRIER CONTRACT ALLOCATIONS', fontSize: 30, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#eab308' }),
          el('p131-s5-bd', 'text', 160, 620, 1600, 220, { text: 'Panamax Ocean Alliance Headquarters · Singapore / Rotterdam / Houston\nContract inquiries: freight-contracts@panamax-alliance.com\nElectronic Data Interchange (EDI) Portal: https://edi.panamax-alliance.com', fontSize: 24, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 2.0 })
        ]
      }
    ]
  });

  // =========================================================================
  // 132: Amazonian LiDAR Canopy Monograph (Forest Green & Terracotta)
  // Layout: Inverted L: Top Left Headline (120, 80, 1040, 230) + Top Right Radiocarbon Card (1200, 80, 600, 220) + Bottom Left Dossier (120, 340, 680, 640) + Bottom Right LiDAR Panorama (840, 340, 960, 640)
  // =========================================================================
  decks.push({
    id: 132,
    name: 'Amazonian Archaeological LiDAR Survey',
    title: 'LOST PRE-COLUMBIAN URBAN MONUMENTALITY',
    description: 'High-density airborne LiDAR, geometric earthworks, and subterranean causeway networks.',
    category: 'Presentation',
    subcategory: 'Archaeology & Remote Sensing',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['archaeology', 'lidar', 'history', 'amazon', 'science'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 8210,
    views: 89000,
    gradient: 'linear-gradient(135deg, #052e16 0%, #b45309 100%)',
    fonts: ['Playfair Display', 'Space Grotesk', 'Inter'],
    colors: ['#052e16', '#b45309', '#fef3c7', '#dcfce7'],
    slides: [
      {
        id: 'p132-s1',
        name: 'Cover',
        elements: [
          el('p132-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#052e16', locked: true }),
          el('p132-s1-tag', 'text', 120, 65, 1040, 25, { text: 'REMOTE SENSING ARCHAEOLOGY // FIELD SURVEY MONOGRAPH', fontSize: 15, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#fef3c7', letterSpacing: 2 }),
          el('p132-s1-title', 'text', 120, 95, 1040, 220, { text: 'LOST GARDEN CITIES OF THE UPPER AMAZON', fontSize: 82, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p132-s1-rc-card', 'rect', 1200, 75, 600, 230, { fill: '#064e3b', borderRadius: 20 }),
          el('p132-s1-rc-h', 'text', 1240, 105, 520, 45, { text: 'CARBON-14 HORIZON: 500 BCE', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#fef3c7' }),
          el('p132-s1-rc-d', 'text', 1240, 160, 520, 120, { text: 'Pre-Columbian urban settlements in the Upano Valley, confirming high-density agrarian monumentality for over one thousand years.', fontSize: 16, fontFamily: 'Inter', fill: '#dcfce7', lineHeight: 1.5 }),
          el('p132-s1-card', 'rect', 120, 340, 680, 640, { fill: '#064e3b', borderRadius: 24 }),
          el('p132-s1-c-v1', 'text', 160, 380, 600, 45, { text: '6,500+ EARTHEN PLATFORMS', fontSize: 30, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#fef3c7' }),
          el('p132-s1-c-d1', 'text', 160, 435, 600, 160, { text: 'Arranged along geometric grid axes interconnected by wide sunken agricultural roads and elevated causeways that spanned rivers and ravines.', fontSize: 18, fontFamily: 'Inter', fill: '#ffffff', lineHeight: 1.7 }),
          el('p132-s1-c-v2', 'text', 160, 620, 600, 45, { text: 'TERRA PRETA SOIL FERTILITY', fontSize: 26, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#b45309' }),
          el('p132-s1-c-d2', 'text', 160, 675, 600, 160, { text: 'Anthropogenic black earth enriched with biochar and river silt supported sustained sedentary populations of over 30,000 without depleting primary forest.', fontSize: 18, fontFamily: 'Inter', fill: '#ffffff', lineHeight: 1.7 }),
          el('p132-s1-c-foot', 'text', 160, 920, 600, 30, { text: 'CNRS & NATIONAL INSTITUTE OF CULTURAL HERITAGE', fontSize: 14, fontFamily: 'Space Grotesk', fill: '#93c5fd' }),
          el('p132-s1-img', 'image', 840, 340, 960, 640, { src: PHOTOS[132], borderRadius: 24, locked: true })
        ]
      },
      {
        id: 'p132-s2',
        name: 'Three-Canopy Penetration',
        elements: [
          el('p132-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#052e16', locked: true }),
          el('p132-s2-h', 'text', 100, 80, 1720, 60, { text: 'PENETRATING TRIPLE-CANOPY TROPICAL BIOMASS', fontSize: 44, fontFamily: 'Playfair Display', fontWeight: '800', fill: '#ffffff' }),
          el('p132-s2-c1', 'rect', 100, 170, 1720, 240, { fill: '#064e3b', borderRadius: 16 }),
          el('p132-s2-t1', 'text', 150, 200, 1620, 40, { text: 'CANOPY RETURN LAYER (45M ELEVATION)', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#fef3c7' }),
          el('p132-s2-d1', 'text', 150, 250, 1620, 130, { text: 'Initial laser pulses strike upper emergent mahogany and kapok branches, yielding full forest crown volumetric density and carbon biomass indexes.', fontSize: 19, fontFamily: 'Inter', fill: '#dcfce7', lineHeight: 1.6 }),
          el('p132-s2-c2', 'rect', 100, 440, 1720, 240, { fill: '#022c22', borderRadius: 16 }),
          el('p132-s2-t2', 'text', 150, 470, 1620, 40, { text: 'UNDERSTORY RETURN LAYER (15M ELEVATION)', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#b45309' }),
          el('p132-s2-d2', 'text', 150, 520, 1620, 130, { text: 'Intermediate pulse echoes filter through liana vines and shade-tolerant palm canopies, mapped and digitally excised using statistical ground-classification filters.', fontSize: 19, fontFamily: 'Inter', fill: '#dcfce7', lineHeight: 1.6 }),
          el('p132-s2-c3', 'rect', 100, 710, 1720, 240, { fill: '#1c1917', borderRadius: 16 }),
          el('p132-s2-t3', 'text', 150, 740, 1620, 40, { text: 'BARE-EARTH DEM EXTRACTION (GROUND FLOOR)', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#fef3c7' }),
          el('p132-s2-d3', 'text', 150, 790, 1620, 130, { text: 'The remaining 3.2% of laser pulses that hit physical ground uncover subterranean artificial mounds, drainage canals, defensive ditches, and sunken plazas invisible from surface exploration.', fontSize: 19, fontFamily: 'Inter', fill: '#dcfce7', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p132-s3',
        name: 'Road Networks and Plazas',
        elements: [
          el('p132-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#052e16', locked: true }),
          el('p132-s3-img', 'image', 100, 90, 1720, 520, { src: PHOTOS[132], borderRadius: 20 }),
          el('p132-s3-c1', 'rect', 100, 640, 840, 340, { fill: '#14532d', borderRadius: 20 }),
          el('p132-s3-c1-t', 'text', 150, 680, 740, 50, { text: 'SUNKEN ROADS & CAUSEWAYS', fontSize: 28, fontFamily: 'Playfair Display', fontWeight: '800', fill: '#fef3c7' }),
          el('p132-s3-c1-d', 'text', 150, 750, 740, 200, { text: 'Direct linear roads up to 25 kilometers long connecting separate ceremonial centers across river valleys, dug down into sterile clay and framed by lateral curbstones.', fontSize: 20, fontFamily: 'Inter', fill: '#dcfce7', lineHeight: 1.7 }),
          el('p132-s3-c2', 'rect', 980, 640, 840, 340, { fill: '#14532d', borderRadius: 20 }),
          el('p132-s3-c2-t', 'text', 1030, 680, 740, 50, { text: 'OCTAGONAL PLAZA GEOMETRY', fontSize: 28, fontFamily: 'Playfair Display', fontWeight: '800', fill: '#ffffff' }),
          el('p132-s3-c2-d', 'text', 1030, 750, 740, 200, { text: 'Precise astronomical alignments matching solstice sunrises, confirming sophisticated surveying mathematics and centralized civil planning authorities.', fontSize: 20, fontFamily: 'Inter', fill: '#dcfce7', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p132-s4',
        name: 'Terra Preta Soil Engineering',
        elements: [
          el('p132-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#052e16', locked: true }),
          el('p132-s4-img', 'image', 100, 100, 760, 880, { src: PHOTOS[132], borderRadius: 20 }),
          el('p132-s4-card', 'rect', 900, 100, 920, 880, { fill: '#064e3b', borderRadius: 20 }),
          el('p132-s4-ct', 'text', 950, 150, 820, 60, { text: 'ANTHROPOGENIC BLACK EARTH (TERRA PRETA)', fontSize: 34, fontFamily: 'Playfair Display', fontWeight: '800', fill: '#fef3c7' }),
          el('p132-s4-cd', 'text', 950, 230, 820, 440, { text: 'Rather than exhausting fragile tropical soils via slash-and-burn cycles, pre-Columbian Amazonian agronomists manufactured meters-deep fertile black earth.\n\nBy mixing biochar, bone meal, river silt, and pottery sherds, they created an extraordinarily durable soil that maintains high microbial fertility for millennia.\n\nThis continuous agrarian output allowed settlements to support estimated populations of 30,000 to 50,000 inhabitants without exhausting surrounding forest resources.', fontSize: 22, fontFamily: 'Inter', fill: '#dcfce7', lineHeight: 1.9 }),
          el('p132-s4-badge', 'rect', 950, 720, 820, 180, { fill: '#14532d', borderRadius: 16 }),
          el('p132-s4-bv', 'text', 980, 750, 760, 40, { text: 'MICROBIAL CARBON SEQUESTRATION', fontSize: 20, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#fef3c7' }),
          el('p132-s4-bd', 'text', 980, 800, 760, 80, { text: 'Modern climate scientists are now sequencing Terra Preta soil microbiomes to synthesize biochar fertilizers for modern regenerative farming.', fontSize: 17, fontFamily: 'Inter', fill: '#ffffff', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p132-s5',
        name: 'Closing',
        elements: [
          el('p132-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#052e16', locked: true }),
          el('p132-s5-border', 'rect', 120, 100, 1680, 880, { fill: 'transparent', stroke: '#b45309', strokeWidth: 2, borderRadius: 20 }),
          el('p132-s5-title', 'text', 180, 280, 1560, 220, { text: 'REWRITING HUMAN HISTORY BENEATH THE CANOPY.', fontSize: 84, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff', align: 'center' }),
          el('p132-s5-sub', 'text', 360, 560, 1200, 200, { text: 'Amazonian Archaeological Field Journal & Open LiDAR Data Repository\nNational Institute of Cultural Heritage & French National Research Institute (CNRS)\n\nAccess Monograph: archives@amazonian-lidar.org', fontSize: 24, fontFamily: 'Inter', fill: '#fef3c7', lineHeight: 1.8, align: 'center' })
        ]
      }
    ]
  });

  // =========================================================================
  // 133: Aura Autonomous Retail (Minimalist Pure Black & Neon Electric Lime)
  // Layout: Top-Center Floating Store Visual (360, 80, 1200, 500) + Centered Bold Headline + 4 Feature Pills
  // =========================================================================
  decks.push({
    id: 133,
    name: 'Autonomous Retail & Computer Vision Store Platform',
    title: 'AURA AUTONOMOUS RETAIL AI',
    description: 'Ceiling sensor fusion, edge camera tracking, zero-queue checkout, and automated inventory reconciliation.',
    category: 'Presentation',
    subcategory: 'Retail Tech & Artificial Intelligence',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['retail', 'ai', 'computervision', 'store', 'checkout'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 8760,
    views: 89000,
    gradient: 'linear-gradient(135deg, #09090b 0%, #a3e635 100%)',
    fonts: ['Space Grotesk', 'Inter', 'IBM Plex Mono'],
    colors: ['#09090b', '#a3e635', '#ffffff', '#71717a'],
    slides: [
      {
        id: 'p133-s1',
        name: 'Cover',
        elements: [
          el('p133-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#09090b', locked: true }),
          el('p133-s1-img', 'image', 360, 80, 1200, 500, { src: PHOTOS[133], borderRadius: 24, locked: true }),
          el('p133-s1-title', 'text', 140, 610, 1640, 170, { text: 'AURA: AUTONOMOUS FRICTIONLESS RETAIL', fontSize: 84, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', align: 'center' }),
          el('p133-s1-sub', 'text', 300, 790, 1320, 70, { text: 'Shoppers enter, pick up items, and walk out. No barcodes, no checkout lines, no waiting.', fontSize: 22, fontFamily: 'Inter', fill: '#a1a1aa', align: 'center' }),
          el('p133-s1-p1', 'rect', 160, 890, 360, 80, { fill: '#18181b', borderRadius: 16 }),
          el('p133-s1-p1-t', 'text', 180, 915, 320, 30, { text: '99.98% SKU ACCURACY', fontSize: 16, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#a3e635', align: 'center' }),
          el('p133-s1-p2', 'rect', 560, 890, 360, 80, { fill: '#18181b', borderRadius: 16 }),
          el('p133-s1-p2-t', 'text', 580, 915, 320, 30, { text: '0.2s WALKOUT CLEARANCE', fontSize: 16, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#ffffff', align: 'center' }),
          el('p133-s1-p3', 'rect', 960, 890, 360, 80, { fill: '#18181b', borderRadius: 16 }),
          el('p133-s1-p3-t', 'text', 980, 915, 320, 30, { text: '0.01% SHRINKAGE RATE', fontSize: 16, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#a3e635', align: 'center' }),
          el('p133-s1-p4', 'rect', 1360, 890, 360, 80, { fill: '#18181b', borderRadius: 16 }),
          el('p133-s1-p4-t', 'text', 1380, 915, 320, 30, { text: 'ZERO FACIAL RECOGNITION', fontSize: 16, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#ffffff', align: 'center' })
        ]
      },
      {
        id: 'p133-s2',
        name: 'Overhead Computer Vision',
        elements: [
          el('p133-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#09090b', locked: true }),
          el('p133-s2-img', 'image', 100, 100, 820, 880, { src: PHOTOS[133], borderRadius: 24 }),
          el('p133-s2-card', 'rect', 960, 100, 860, 880, { fill: '#18181b', borderRadius: 24 }),
          el('p133-s2-head', 'text', 1010, 150, 760, 60, { text: '3D POSE ESTIMATION & GAZE TRACKING', fontSize: 36, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#a3e635' }),
          el('p133-s2-desc', 'text', 1010, 230, 760, 420, { text: 'Ceiling-mounted multi-camera clusters construct real-time 3D skeleton meshes of shoppers as they navigate aisles.\n\nWhen a shopper reaches for a bottle of sparkling water, the system associates the hand interaction with shelf shelf weight change events to append the item to that shopper’s virtual cart in 15 milliseconds.\n\nIf the shopper changes their mind and places the product back onto a different shelf, the item is automatically removed without human intervention.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p133-s2-priv', 'rect', 1010, 690, 760, 230, { fill: '#27272a', borderRadius: 16 }),
          el('p133-s2-pt', 'text', 1050, 725, 680, 40, { text: 'PRIVACY-FIRST ANONYMIZATION', fontSize: 22, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p133-s2-pd', 'text', 1050, 775, 680, 110, { text: 'No biometric facial features are ever logged or stored. Shoppers are represented internally solely as randomized numerical vector bounding boxes discarded upon store exit.', fontSize: 18, fontFamily: 'Inter', fill: '#a1a1aa', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p133-s3',
        name: 'Store Performance Metrics',
        elements: [
          el('p133-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#09090b', locked: true }),
          el('p133-s3-c1', 'rect', 100, 160, 540, 820, { fill: '#18181b', borderRadius: 20 }),
          el('p133-s3-v1', 'text', 150, 220, 440, 90, { text: '+34%', fontSize: 80, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#a3e635' }),
          el('p133-s3-t1', 'text', 150, 320, 440, 50, { text: 'Basket Size Growth', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p133-s3-d1', 'text', 150, 390, 440, 520, { text: 'Removing queue friction dramatically increases impulse purchasing during morning commute and lunch peak hours. Customers buy coffee and prepackaged meals in under 45 seconds total visit time.', fontSize: 20, fontFamily: 'Inter', fill: '#a1a1aa', lineHeight: 1.8 }),
          el('p133-s3-c2', 'rect', 690, 160, 540, 820, { fill: '#18181b', borderRadius: 20 }),
          el('p133-s3-v2', 'text', 740, 220, 440, 90, { text: '85%', fontSize: 80, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p133-s3-t2', 'text', 740, 320, 440, 50, { text: 'Labor Redirection', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#a3e635' }),
          el('p133-s3-d2', 'text', 740, 390, 440, 520, { text: 'Store associates shift from repetitive cashier scanning to high-value customer hospitality, gourmet food preparation, and proactive shelf restocking.', fontSize: 20, fontFamily: 'Inter', fill: '#a1a1aa', lineHeight: 1.8 }),
          el('p133-s3-c3', 'rect', 1280, 160, 540, 820, { fill: '#18181b', borderRadius: 20 }),
          el('p133-s3-v3', 'text', 1330, 220, 440, 90, { text: '99.98%', fontSize: 80, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#a3e635' }),
          el('p133-s3-t3', 'text', 1330, 320, 440, 50, { text: 'Inventory Real-Time Audit', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p133-s3-d3', 'text', 1330, 390, 440, 520, { text: 'Automated out-of-stock alerts dispatch backroom fulfillment notifications the moment shelf supply dips below minimum replenishment thresholds.', fontSize: 20, fontFamily: 'Inter', fill: '#a1a1aa', lineHeight: 1.8 })
        ]
      },
      {
        id: 'p133-s4',
        name: 'Edge Architecture',
        elements: [
          el('p133-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#09090b', locked: true }),
          el('p133-s4-bar', 'rect', 100, 90, 1720, 380, { fill: '#18181b', borderRadius: 20 }),
          el('p133-s4-bh', 'text', 150, 130, 1620, 50, { text: 'LOCAL ON-PREMISE EDGE SERVER COMPUTE INFRASTRUCTURE', fontSize: 36, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p133-s4-bd', 'text', 150, 200, 1620, 220, { text: 'Each store operates a compact 4U edge server rack hosting four accelerator cards. Video streams are decoded, inferred, and processed entirely inside the store perimeter. In the event of an external fiber internet outage, shoppers continue purchasing seamlessly with local transactional buffers.', fontSize: 22, fontFamily: 'Inter', fill: '#a1a1aa', lineHeight: 1.8 }),
          el('p133-s4-c1', 'rect', 100, 510, 840, 470, { fill: '#18181b', borderRadius: 20 }),
          el('p133-s4-c1-t', 'text', 150, 560, 740, 40, { text: 'WEIGHT-SENSITIVE LOAD CELLS', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#a3e635' }),
          el('p133-s4-c1-d', 'text', 150, 620, 740, 300, { text: 'Sub-gram load cell shelves calibrate constantly against vibration, detecting exactly when a 12oz soda can is lifted versus a 16oz bottle in adjacent slots.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p133-s4-c2', 'rect', 980, 510, 840, 470, { fill: '#18181b', borderRadius: 20 }),
          el('p133-s4-c2-t', 'text', 1030, 560, 740, 40, { text: 'UNIVERSAL PAYMENT APP INTEGRATION', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p133-s4-c2-d', 'text', 1030, 620, 740, 300, { text: 'Shoppers enter by tapping Apple Pay, Google Wallet, credit card, or proprietary retail loyalty apps at the turnstile gate.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p133-s5',
        name: 'Closing',
        elements: [
          el('p133-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#09090b', locked: true }),
          el('p133-s5-accent', 'rect', 860, 180, 200, 6, { fill: '#a3e635' }),
          el('p133-s5-title', 'text', 100, 240, 1720, 200, { text: 'THE STORE OF THE FUTURE IS ALREADY OPEN.', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', align: 'center' }),
          el('p133-s5-card', 'rect', 360, 500, 1200, 380, { fill: '#18181b', borderRadius: 24 }),
          el('p133-s5-ct', 'text', 420, 560, 1080, 50, { text: 'SCHEDULE A STORE RETROFIT FEASIBILITY ASSESSMENT', fontSize: 28, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#a3e635', align: 'center' }),
          el('p133-s5-cd', 'text', 420, 630, 1080, 200, { text: 'Aura Retail Technologies Inc · San Francisco / London\nEnterprise Inquiries: rollout@aura-retail.ai\nPartner Portal: https://partners.aura-retail.ai', fontSize: 22, fontFamily: 'Inter', fill: '#a1a1aa', lineHeight: 1.8, align: 'center' })
        ]
      }
    ]
  });

  // =========================================================================
  // 134: Valkyrie Hypercar Aerodynamics (Carbon Fiber Black & Crimson Speed Red)
  // Layout: Top Left Headline (100, 80, 1140, 240) + Top Right Telemetry Card (1280, 80, 540, 240) + Lower Hero Photo (100, 360, 1720, 620)
  // =========================================================================
  decks.push({
    id: 134,
    name: 'Valkyrie Hypercar Aerodynamics Engineering',
    title: 'VALKYRIE EXTREME DOWNFORCE AERODYNAMICS',
    description: 'Ground effect venturi tunnels, active DRS wing actuation, and 1,800kg high-speed downforce telemetry.',
    category: 'Presentation',
    subcategory: 'Automotive & Motorsports Engineering',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['automotive', 'motorsport', 'aerodynamics', 'hypercar', 'engineering'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 9890,
    views: 105000,
    gradient: 'linear-gradient(135deg, #0a0a0a 0%, #ef4444 100%)',
    fonts: ['Space Grotesk', 'IBM Plex Mono', 'Inter'],
    colors: ['#0a0a0a', '#ef4444', '#ffffff', '#e2e8f0'],
    slides: [
      {
        id: 'p134-s1',
        name: 'Cover',
        elements: [
          el('p134-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0a0a0a', locked: true }),
          el('p134-s1-img', 'image', 100, 80, 1720, 480, { src: PHOTOS[134], borderRadius: 20, locked: true }),
          el('p134-s1-title', 'text', 100, 600, 740, 260, { text: 'VALKYRIE: 1,800 KG ACTIVE DOWNFORCE', fontSize: 80, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p134-s1-desc', 'text', 100, 880, 740, 90, { text: 'Pure underbody suction venturi aerodynamics generating 3.5G lateral apex grip at 250 km/h.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 }),
          el('p134-s1-c1', 'rect', 880, 600, 440, 390, { fill: '#171717', borderRadius: 20 }),
          el('p134-s1-c1-v', 'text', 920, 640, 360, 60, { text: '3.5G GRIP', fontSize: 44, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ef4444' }),
          el('p134-s1-c1-l', 'text', 920, 720, 360, 35, { text: 'Lateral Apex Telemetry', fontSize: 20, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff' }),
          el('p134-s1-c1-d', 'text', 920, 770, 360, 180, { text: 'Full-length underfloor venturi channels sealing floor edges to the tarmac without top-body drag.', fontSize: 17, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 }),
          el('p134-s1-c2', 'rect', 1360, 600, 460, 390, { fill: '#171717', borderRadius: 20 }),
          el('p134-s1-c2-v', 'text', 1400, 640, 380, 60, { text: '65° WING', fontSize: 44, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p134-s1-c2-l', 'text', 1400, 720, 380, 35, { text: 'Active Airbrake Angle', fontSize: 20, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ef4444' }),
          el('p134-s1-c2-d', 'text', 1400, 770, 380, 180, { text: 'Dual-element rear carbon wing rotates in 120ms to double braking deceleration from 300 km/h.', fontSize: 17, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p134-s2',
        name: 'Venturi Underfloor Aerodynamics',
        elements: [
          el('p134-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0a0a0a', locked: true }),
          el('p134-s2-img', 'image', 100, 100, 860, 880, { src: PHOTOS[134], borderRadius: 24 }),
          el('p134-s2-card', 'rect', 1000, 100, 820, 880, { fill: '#171717', borderRadius: 24 }),
          el('p134-s2-head', 'text', 1050, 150, 720, 60, { text: 'FULL-LENGTH UNDERFLOOR VENTURI CHANNELS', fontSize: 36, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ef4444' }),
          el('p134-s2-desc', 'text', 1050, 230, 720, 420, { text: 'Two massive venturi tunnels run the entire length of the chassis between the passenger cockpit and outer sidepods.\n\nIncoming airflow enters beneath the front splitter, is accelerated through narrow throats to create extreme low-pressure suction, and exhausts through an enormous carbon rear diffuser.\n\nThis generates 85% of the vehicle’s total downforce without needing drag-inducing top-body wings, preserving high top-speed efficiency.', fontSize: 22, fontFamily: 'Inter', fill: '#e2e8f0', lineHeight: 1.8 }),
          el('p134-s2-box', 'rect', 1050, 690, 720, 230, { fill: '#262626', borderRadius: 16 }),
          el('p134-s2-bt', 'text', 1090, 725, 640, 40, { text: 'RIDE-HEIGHT HYDRAULIC CONTROL', fontSize: 22, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p134-s2-bd', 'text', 1090, 775, 640, 110, { text: 'Active suspension lowers the chassis by 35mm in Track Mode, sealing the floor edges against the asphalt surface to prevent aerodynamic pressure blowouts.', fontSize: 18, fontFamily: 'Inter', fill: '#a3a3a3', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p134-s3',
        name: 'Active Aerodynamic Wing Modes',
        elements: [
          el('p134-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0a0a0a', locked: true }),
          el('p134-s3-c1', 'rect', 100, 160, 540, 820, { fill: '#171717', borderRadius: 20 }),
          el('p134-s3-v1', 'text', 150, 210, 440, 50, { text: 'V-MAX LOW DRAG MODE', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ef4444' }),
          el('p134-s3-d1', 'text', 150, 280, 440, 640, { text: 'On straightaways exceeding 200 km/h, electro-hydraulic rams flatten the rear dual-element aerofoil to zero degrees angle of attack and close front wing flap vents, allowing the car to reach its 400+ km/h top speed.', fontSize: 20, fontFamily: 'Inter', fill: '#e2e8f0', lineHeight: 1.8 }),
          el('p134-s3-c2', 'rect', 690, 160, 540, 820, { fill: '#171717', borderRadius: 20 }),
          el('p134-s3-v2', 'text', 740, 210, 440, 50, { text: 'HIGH DOWNFORCE TRACK', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p134-s3-d2', 'text', 740, 280, 440, 640, { text: 'During heavy cornering phases, wings tilt to 24 degrees angle of attack within 120 milliseconds. Downforce ramps to 1,800kg, pinning tires into the track surface for unprecedented lateral apex speeds.', fontSize: 20, fontFamily: 'Inter', fill: '#e2e8f0', lineHeight: 1.8 }),
          el('p134-s3-c3', 'rect', 1280, 160, 540, 820, { fill: '#171717', borderRadius: 20 }),
          el('p134-s3-v3', 'text', 1330, 210, 440, 50, { text: 'AIRBRAKE DECELERATION', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ef4444' }),
          el('p134-s3-d3', 'text', 1330, 280, 440, 640, { text: 'Under threshold braking from 300 km/h, the rear wing deploys vertically to 65 degrees. Induced aerodynamic drag doubles vehicle deceleration, stabilizing the rear axle before carbon-ceramic calipers bite.', fontSize: 20, fontFamily: 'Inter', fill: '#e2e8f0', lineHeight: 1.8 })
        ]
      },
      {
        id: 'p134-s4',
        name: 'Carbon-Titanium Monocoque',
        elements: [
          el('p134-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0a0a0a', locked: true }),
          el('p134-s4-img', 'image', 100, 90, 1720, 480, { src: PHOTOS[134], borderRadius: 20 }),
          el('p134-s4-c1', 'rect', 100, 610, 840, 370, { fill: '#171717', borderRadius: 20 }),
          el('p134-s4-c1-t', 'text', 150, 650, 740, 50, { text: '50,000 NM / DEG TORSIONAL RIGIDITY', fontSize: 28, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ef4444' }),
          el('p134-s4-c1-d', 'text', 150, 720, 740, 220, { text: 'Single-piece molded carbon-fiber passenger tub with interwoven titanium wire mesh provides exceptional structural stiffness under massive aerodynamic downforce loads.', fontSize: 20, fontFamily: 'Inter', fill: '#e2e8f0', lineHeight: 1.7 }),
          el('p134-s4-c2', 'rect', 980, 610, 840, 370, { fill: '#171717', borderRadius: 20 }),
          el('p134-s4-c2-t', 'text', 1030, 650, 740, 50, { text: '1,050 KG DRY CURB WEIGHT', fontSize: 28, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p134-s4-c2-d', 'text', 1030, 720, 740, 220, { text: 'Every component functions as a structural stress member. The naturally aspirated 6.5-liter V12 engine and sequential gearbox bolt directly to the rear firewall.', fontSize: 20, fontFamily: 'Inter', fill: '#e2e8f0', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p134-s5',
        name: 'Closing',
        elements: [
          el('p134-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0a0a0a', locked: true }),
          el('p134-s5-line', 'rect', 100, 220, 14, 260, { fill: '#ef4444' }),
          el('p134-s5-title', 'text', 150, 200, 1100, 240, { text: 'PURE MOTORSPORT ENGINEERING FOR THE ROAD.', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p134-s5-desc', 'text', 150, 480, 1050, 140, { text: 'Limited production run of 150 customer road chassis allocated worldwide.', fontSize: 24, fontFamily: 'Inter', fill: '#a3a3a3', lineHeight: 1.7 }),
          el('p134-s5-box', 'rect', 1280, 180, 540, 640, { fill: '#171717', borderRadius: 24 }),
          el('p134-s5-bt', 'text', 1330, 240, 440, 40, { text: 'CLIENT ALLOCATION DOSSIER', fontSize: 20, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#ef4444' }),
          el('p134-s5-bd', 'text', 1330, 310, 440, 460, { text: 'Valkyrie Special Operations\nAerodynamics Wind Tunnel Facility\nSilverstone Circuit, United Kingdom\n\nClient Services:\nconcierge@valkyrie-hypercar.co.uk\nDirect: +44 1327 850 000', fontSize: 22, fontFamily: 'Inter', fill: '#e2e8f0', lineHeight: 1.9 })
        ]
      }
    ]
  });

  // =========================================================================
  // 135: Cross-Border E-Commerce Infrastructure (Deep Navy & Indigo)
  // Layout: Left Funnel Rail (100, 100, 580, 880) + Top-Right Headline (720, 120, 1100, 240) + Lower-Right Gateway Visual (720, 400, 1100, 580)
  // =========================================================================
  decks.push({
    id: 135,
    name: 'Cross-Border E-Commerce Infrastructure',
    title: 'GLOBAL COMMERCE PAYMENTS & LOGISTICS',
    description: 'Dynamic local payment rails, automated customs calculation, and multi-currency global checkout.',
    category: 'Presentation',
    subcategory: 'E-Commerce & Global Payments',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['ecommerce', 'payments', 'fintech', 'logistics', 'global'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 7450,
    views: 71000,
    gradient: 'linear-gradient(135deg, #0f172a 0%, #6366f1 100%)',
    fonts: ['Plus Jakarta Sans', 'Inter', 'IBM Plex Mono'],
    colors: ['#0f172a', '#6366f1', '#ffffff', '#cbd5e1'],
    slides: [
      {
        id: 'p135-s1',
        name: 'Cover',
        elements: [
          el('p135-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f172a', locked: true }),
          el('p135-s1-rail', 'rect', 100, 100, 580, 880, { fill: '#1e293b', borderRadius: 24 }),
          el('p135-s1-rt', 'text', 150, 150, 480, 40, { text: 'GLOBAL CONVERSION FUNNEL', fontSize: 20, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#6366f1' }),
          el('p135-s1-v1', 'text', 150, 220, 480, 60, { text: '135+ CURRENCIES', fontSize: 36, fontFamily: 'Plus Jakarta Sans', fontWeight: '800', fill: '#ffffff' }),
          el('p135-s1-d1', 'text', 150, 290, 480, 90, { text: 'Localized pricing with zero foreign transaction markup fees at checkout.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 }),
          el('p135-s1-v2', 'text', 150, 420, 480, 60, { text: '40+ LOCAL RAILS', fontSize: 36, fontFamily: 'Plus Jakarta Sans', fontWeight: '800', fill: '#6366f1' }),
          el('p135-s1-d2', 'text', 150, 490, 480, 90, { text: 'Instant support for Pix, UPI, iDEAL, Boleto, and Klarna pay in 4.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 }),
          el('p135-s1-v3', 'text', 150, 620, 480, 60, { text: 'GUARANTEED DDP', fontSize: 36, fontFamily: 'Plus Jakarta Sans', fontWeight: '800', fill: '#ffffff' }),
          el('p135-s1-d3', 'text', 150, 690, 480, 120, { text: '100% upfront landed cost calculation with zero surprise customs fees upon customer parcel delivery.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 }),
          el('p135-s1-foot', 'text', 150, 870, 480, 40, { text: 'ENTERPRISE CHECKOUT STACK // 2026', fontSize: 16, fontFamily: 'IBM Plex Mono', fill: '#6366f1' }),
          el('p135-s1-title', 'text', 720, 120, 1100, 240, { text: 'UNIFYING GLOBAL CROSS-BORDER COMMERCE', fontSize: 82, fontFamily: 'Plus Jakarta Sans', fontWeight: '800', fill: '#ffffff', lineHeight: 1.08 }),
          el('p135-s1-img', 'image', 720, 400, 1100, 580, { src: PHOTOS[135], borderRadius: 24, locked: true })
        ]
      },
      {
        id: 'p135-s2',
        name: 'Local Payment Rails',
        elements: [
          el('p135-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f172a', locked: true }),
          el('p135-s2-h', 'text', 100, 80, 1720, 60, { text: 'ELIMINATING CHECKOUT DROP-OFF IN EMERGING MARKETS', fontSize: 44, fontFamily: 'Plus Jakarta Sans', fontWeight: '800', fill: '#ffffff' }),
          el('p135-s2-c1', 'rect', 100, 170, 840, 390, { fill: '#1e293b', borderRadius: 20 }),
          el('p135-s2-c1-t', 'text', 150, 210, 740, 50, { text: 'LATIN AMERICA: PIX & OXXO', fontSize: 26, fontFamily: 'Plus Jakarta Sans', fontWeight: '800', fill: '#6366f1' }),
          el('p135-s2-c1-d', 'text', 150, 270, 740, 240, { text: 'Over 75% of Brazilian shoppers prefer instantaneous Pix QR code settlement. Direct central bank integration boosts conversion rates by 38% compared to international credit cards.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p135-s2-c2', 'rect', 980, 170, 840, 390, { fill: '#1e293b', borderRadius: 20 }),
          el('p135-s2-c2-t', 'text', 1030, 210, 740, 50, { text: 'INDIA & SOUTH ASIA: UPI AUTOPAY', fontSize: 26, fontFamily: 'Plus Jakarta Sans', fontWeight: '800', fill: '#ffffff' }),
          el('p135-s2-c2-d', 'text', 1030, 270, 740, 240, { text: 'Seamless integration with Google Pay, PhonePe, and Paytm handling over 12 billion monthly digital transactions with microsecond bank debit authorization.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p135-s2-c3', 'rect', 100, 590, 840, 390, { fill: '#1e293b', borderRadius: 20 }),
          el('p135-s2-c3-t', 'text', 150, 630, 740, 50, { text: 'EUROPE: SEPA INSTANT & IDEAL', fontSize: 26, fontFamily: 'Plus Jakarta Sans', fontWeight: '800', fill: '#ffffff' }),
          el('p135-s2-c3-d', 'text', 150, 690, 740, 240, { text: 'Bank-grade dual-factor customer authentication compliant with PSD2 regulations, achieving 99.7% payment success rates across 28 European member states.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p135-s2-c4', 'rect', 980, 590, 840, 390, { fill: '#1e293b', borderRadius: 20 }),
          el('p135-s2-c4-t', 'text', 1030, 630, 740, 50, { text: 'ASIA-PACIFIC: ALIPAY+ & WECHAT', fontSize: 26, fontFamily: 'Plus Jakarta Sans', fontWeight: '800', fill: '#6366f1' }),
          el('p135-s2-c4-d', 'text', 1030, 690, 740, 240, { text: 'Omnichannel mobile wallet checkout enabling western luxury merchants to convert Chinese and Southeast Asian consumers directly inside super-app ecosystems.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p135-s3',
        name: 'Automated Customs & Landed Cost',
        elements: [
          el('p135-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f172a', locked: true }),
          el('p135-s3-card', 'rect', 100, 100, 860, 880, { fill: '#1e293b', borderRadius: 24 }),
          el('p135-s3-ct', 'text', 150, 150, 760, 60, { text: 'REAL-TIME TARIFF HARMONIZATION (HS CODES)', fontSize: 32, fontFamily: 'Plus Jakarta Sans', fontWeight: '800', fill: '#6366f1' }),
          el('p135-s3-cd', 'text', 150, 230, 760, 690, { text: 'International cross-border shoppers abandon carts at a 64% rate when landed taxes and import tariffs are left ambiguous.\n\nOur automated customs intelligence engine assigns 6-digit Harmonized System (HS) codes to every product SKU in your catalog in milliseconds.\n\nAt checkout, import tariffs, VAT, provincial sales taxes, and customs clearance broker surcharges are calculated dynamically based on recipient postal codes.\n\nMerchants remit duties electronically directly to local border authorities, guaranteeing zero parcel detention at airport inspection customs.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.9 }),
          el('p135-s3-img', 'image', 1000, 100, 820, 880, { src: PHOTOS[135], borderRadius: 24 })
        ]
      },
      {
        id: 'p135-s4',
        name: 'Distributed Warehouse Network',
        elements: [
          el('p135-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f172a', locked: true }),
          el('p135-s4-img', 'image', 100, 90, 1720, 480, { src: PHOTOS[135], borderRadius: 20 }),
          el('p135-s4-c1', 'rect', 100, 610, 540, 370, { fill: '#1e293b', borderRadius: 20 }),
          el('p135-s4-v1', 'text', 150, 650, 440, 50, { text: '2-DAY TRANSIT HUBS', fontSize: 24, fontFamily: 'Plus Jakarta Sans', fontWeight: '800', fill: '#6366f1' }),
          el('p135-s4-d1', 'text', 150, 720, 440, 220, { text: 'Bonded regional fulfillment centers located adjacent to Frankfurt, Tokyo, Singapore, and Chicago international airport hubs.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p135-s4-c2', 'rect', 690, 610, 540, 370, { fill: '#1e293b', borderRadius: 20 }),
          el('p135-s4-v2', 'text', 740, 650, 440, 50, { text: 'INTELLIGENT ROUTING', fontSize: 24, fontFamily: 'Plus Jakarta Sans', fontWeight: '800', fill: '#ffffff' }),
          el('p135-s4-d2', 'text', 740, 720, 440, 220, { text: 'Orders automatically dispatch from the fulfillment node closest to the end consumer, minimizing air freight carbon and transit expense.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p135-s4-c3', 'rect', 1280, 610, 540, 370, { fill: '#1e293b', borderRadius: 20 }),
          el('p135-s4-v3', 'text', 1330, 650, 440, 50, { text: 'CROSS-BORDER RETURNS', fontSize: 24, fontFamily: 'Plus Jakarta Sans', fontWeight: '800', fill: '#6366f1' }),
          el('p135-s4-d3', 'text', 1330, 720, 440, 220, { text: 'Domestic return addresses in 45 countries eliminate international reverse logistics hurdles and restock inventory locally.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p135-s5',
        name: 'Closing',
        elements: [
          el('p135-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f172a', locked: true }),
          el('p135-s5-title', 'text', 100, 220, 1720, 180, { text: 'GROW YOUR E-COMMERCE BRAND GLOBALLY.', fontSize: 86, fontFamily: 'Plus Jakarta Sans', fontWeight: '800', fill: '#ffffff', align: 'center' }),
          el('p135-s5-card', 'rect', 360, 480, 1200, 420, { fill: '#1e293b', borderRadius: 24 }),
          el('p135-s5-ct', 'text', 420, 540, 1080, 50, { text: 'INTEGRATE THE GLOBAL COMMERCE SDK IN UNDER 24 HOURS', fontSize: 28, fontFamily: 'Plus Jakarta Sans', fontWeight: '800', fill: '#6366f1', align: 'center' }),
          el('p135-s5-cd', 'text', 420, 620, 1080, 220, { text: 'Pre-built connectors for Shopify Plus, Salesforce Commerce Cloud, and Commercelayer\nGlobal Commerce Technology Corp · New York / Dublin / Singapore\n\nDeveloper Documentation: https://docs.globalcommerce.io\nContact: enterprise@globalcommerce.io', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.9, align: 'center' })
        ]
      }
    ]
  });

  // =========================================================================
  // 136: Observe-X APM Telemetry & eBPF (Hacker Terminal Charcoal & Matrix Green)
  // Layout: Top Monospace Terminal Bar (100, 70, 1720, 60) + Split Center (Image + Headline) + Bottom Telemetry Strip (100, 760, 1720, 220)
  // =========================================================================
  decks.push({
    id: 136,
    name: 'Observe-X Distributed APM & eBPF Telemetry',
    title: 'OBSERVE-X KERNEL-LEVEL OBSERVABILITY',
    description: 'Kernel-space eBPF distributed tracing, microsecond latency profiling, and zero-overhead observability.',
    category: 'Presentation',
    subcategory: 'DevOps & Cloud Observability',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['devops', 'observability', 'ebpf', 'apm', 'cloud'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 8990,
    views: 92000,
    gradient: 'linear-gradient(135deg, #0d1117 0%, #10b981 100%)',
    fonts: ['IBM Plex Mono', 'Space Grotesk', 'Inter'],
    colors: ['#0d1117', '#10b981', '#ffffff', '#cbd5e1'],
    slides: [
      {
        id: 'p136-s1',
        name: 'Cover',
        elements: [
          el('p136-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0d1117', locked: true }),
          el('p136-s1-term', 'rect', 100, 70, 1720, 60, { fill: '#161b22', borderRadius: 12 }),
          el('p136-s1-prompt', 'text', 130, 85, 1660, 30, { text: 'root@observe-x:~$ bpftrace --kernel-kprobe trace_all_clusters --output=live_telemetry', fontSize: 18, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#10b981' }),
          el('p136-s1-img', 'image', 100, 160, 820, 560, { src: PHOTOS[136], borderRadius: 20, locked: true }),
          el('p136-s1-tag', 'text', 960, 180, 860, 30, { text: 'KERNEL-LEVEL TELEMETRY // REVOLUTION 3.0', fontSize: 16, fontFamily: 'IBM Plex Mono', fill: '#10b981' }),
          el('p136-s1-title', 'text', 960, 230, 860, 260, { text: 'OBSERVE-X:\neBPF DISTRIBUTED TRACING', fontSize: 78, fontFamily: 'IBM Plex Mono', fontWeight: '800', fill: '#ffffff', lineHeight: 1.08 }),
          el('p136-s1-desc', 'text', 960, 520, 860, 170, { text: 'Capture every network packet, database call, and CPU latency spike directly from the Linux kernel without injecting single bytecode agents or modifying application source code.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p136-s1-strip', 'rect', 100, 760, 1720, 220, { fill: '#161b22', borderRadius: 16 }),
          el('p136-s1-m1', 'text', 150, 790, 480, 60, { text: '< 0.02% OVERHEAD', fontSize: 36, fontFamily: 'IBM Plex Mono', fontWeight: '800', fill: '#10b981' }),
          el('p136-s1-d1', 'text', 150, 860, 480, 80, { text: 'Production workloads run at 100% full bare-metal speed with zero runtime jitter.', fontSize: 17, fontFamily: 'Inter', fill: '#94a3b8' }),
          el('p136-s1-m2', 'text', 700, 790, 480, 60, { text: '100M SPANS / SEC', fontSize: 36, fontFamily: 'IBM Plex Mono', fontWeight: '800', fill: '#ffffff' }),
          el('p136-s1-d2', 'text', 700, 860, 480, 80, { text: 'Real-time telemetry aggregation across 50,000 node Kubernetes clusters.', fontSize: 17, fontFamily: 'Inter', fill: '#94a3b8' }),
          el('p136-s1-m3', 'text', 1250, 790, 500, 60, { text: 'ZERO AGENTS TO INSTALL', fontSize: 36, fontFamily: 'IBM Plex Mono', fontWeight: '800', fill: '#10b981' }),
          el('p136-s1-d3', 'text', 1250, 860, 500, 80, { text: 'Hooks straight into kernel socket hooks via eBPF program sandboxes.', fontSize: 17, fontFamily: 'Inter', fill: '#94a3b8' })
        ]
      },
      {
        id: 'p136-s2',
        name: 'Kernel Space Architecture',
        elements: [
          el('p136-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0d1117', locked: true }),
          el('p136-s2-card', 'rect', 100, 100, 840, 880, { fill: '#161b22', borderRadius: 20 }),
          el('p136-s2-ct', 'text', 150, 150, 740, 60, { text: 'WHY eBPF REPLACES APPLICATION BYTECODE INJECTION', fontSize: 32, fontFamily: 'IBM Plex Mono', fontWeight: '800', fill: '#10b981', lineHeight: 1.2 }),
          el('p136-s2-cd', 'text', 150, 240, 740, 680, { text: 'Traditional APMs require injecting proprietary Java/Python/Node.js bytecode agents into container processes.\n\nThese agents consume 8% to 15% of your application CPU budget, cause garbage collection pauses, and introduce security vulnerabilities.\n\nObserve-X loads sandboxed eBPF verifier programs directly into the Linux kernel space.\n\nWhenever a socket receives TCP traffic, a disk I/O write occurs, or a thread blocks on mutex contention, eBPF probes capture the metadata instantly at the kernel layer without waking up user space processes.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.9 }),
          el('p136-s2-img', 'image', 980, 100, 840, 880, { src: PHOTOS[136], borderRadius: 20 })
        ]
      },
      {
        id: 'p136-s3',
        name: 'Distributed Trace Stitching',
        elements: [
          el('p136-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0d1117', locked: true }),
          el('p136-s3-c1', 'rect', 100, 160, 540, 820, { fill: '#161b22', borderRadius: 20 }),
          el('p136-s3-v1', 'text', 150, 210, 440, 50, { text: 'AUTOMATIC W3C CONTEXT', fontSize: 24, fontFamily: 'IBM Plex Mono', fontWeight: '800', fill: '#10b981' }),
          el('p136-s3-d1', 'text', 150, 280, 440, 640, { text: 'Inspects HTTP and gRPC header streams at the socket level to extract trace-id and parent-span headers, auto-stitching end-to-end distributed transaction graphs across polyglot microservices without touching code.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p136-s3-c2', 'rect', 690, 160, 540, 820, { fill: '#161b22', borderRadius: 20 }),
          el('p136-s3-v2', 'text', 740, 210, 440, 50, { text: 'DATABASE QUERY PROFILING', fontSize: 24, fontFamily: 'IBM Plex Mono', fontWeight: '800', fill: '#ffffff' }),
          el('p136-s3-d2', 'text', 740, 280, 440, 640, { text: 'Sniffs PostgreSQL, MySQL, and Redis wire protocol wire packets. Identifies slow N+1 queries, unindexed table scans, and lock queue contentions down to exact SQL statements in real time.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p136-s3-c3', 'rect', 1280, 160, 540, 820, { fill: '#161b22', borderRadius: 20 }),
          el('p136-s3-v3', 'text', 1330, 210, 440, 50, { text: 'CONTINUOUS FLAME GRAPHS', fontSize: 24, fontFamily: 'IBM Plex Mono', fontWeight: '800', fill: '#10b981' }),
          el('p136-s3-d3', 'text', 1330, 280, 440, 640, { text: 'Zero-overhead stack sampling at 199Hz constructs always-on continuous CPU flame graphs, pinpointing exact code functions and memory allocations responsible for cloud bill inflation.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 })
        ]
      },
      {
        id: 'p136-s4',
        name: 'AI Anomaly Detection',
        elements: [
          el('p136-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0d1117', locked: true }),
          el('p136-s4-img', 'image', 100, 90, 1720, 480, { src: PHOTOS[136], borderRadius: 20 }),
          el('p136-s4-c1', 'rect', 100, 610, 840, 370, { fill: '#161b22', borderRadius: 20 }),
          el('p136-s4-c1-t', 'text', 150, 650, 740, 50, { text: 'REAL-TIME ROOT CAUSE SYNTHESIS', fontSize: 26, fontFamily: 'IBM Plex Mono', fontWeight: '800', fill: '#10b981' }),
          el('p136-s4-c1-d', 'text', 150, 720, 740, 220, { text: 'Correlates deployment change events, pod restarts, and downstream service latency deviations to isolate the exact commit triggering production incidents within 12 seconds.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p136-s4-c2', 'rect', 980, 610, 840, 370, { fill: '#161b22', borderRadius: 20 }),
          el('p136-s4-c2-t', 'text', 1030, 650, 740, 50, { text: 'AUTOMATED TRAFFIC CIRCIUT BREAKING', fontSize: 26, fontFamily: 'IBM Plex Mono', fontWeight: '800', fill: '#ffffff' }),
          el('p136-s4-c2-d', 'text', 1030, 720, 740, 220, { text: 'eBPF filters dynamically throttle rogue runaway retry storms at the network interface before database connection pools saturate and crash host nodes.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p136-s5',
        name: 'Closing',
        elements: [
          el('p136-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0d1117', locked: true }),
          el('p136-s5-win', 'rect', 200, 160, 1520, 760, { fill: '#161b22', borderRadius: 20, stroke: '#30363d', strokeWidth: 2 }),
          el('p136-s5-title', 'text', 280, 240, 1360, 160, { text: 'OBSERVE EVERYTHING.\nSLOW DOWN NOTHING.', fontSize: 80, fontFamily: 'IBM Plex Mono', fontWeight: '800', fill: '#ffffff', lineHeight: 1.1 }),
          el('p136-s5-sub', 'text', 280, 420, 1360, 60, { text: 'Deploy observe-x daemonset to your Kubernetes cluster with a single command:', fontSize: 22, fontFamily: 'Inter', fill: '#94a3b8' }),
          el('p136-s5-cmd', 'rect', 280, 500, 1360, 130, { fill: '#0d1117', borderRadius: 12, stroke: '#21262d', strokeWidth: 1 }),
          el('p136-s5-code', 'text', 320, 545, 1280, 40, { text: 'helm install observe-x observe-x/agent --set apiKey=$OBSERVE_API_KEY', fontSize: 22, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#10b981' }),
          el('p136-s5-foot', 'text', 280, 690, 1360, 140, { text: 'Observe-X Cloud Systems Inc · San Francisco, CA\nDocumentation: https://observe-x.io/docs · Enterprise: sales@observe-x.io', fontSize: 20, fontFamily: 'IBM Plex Mono', fill: '#94a3b8', lineHeight: 1.8 })
        ]
      }
    ]
  });

  return decks;
}
