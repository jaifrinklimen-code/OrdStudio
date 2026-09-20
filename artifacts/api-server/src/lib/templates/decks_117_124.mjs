import { el, PHOTOS } from './deck_helpers.mjs';

export function getDecks117to124() {
  const decks = [];

  // 117: Haute Couture Paris Lookbook (50/50 Split Canvas, Luxury Serif Editorial)
  decks.push({
    id: 117,
    name: 'Haute Couture Paris Lookbook',
    title: 'MAISON ÉTÉ COUTURE COLLECTION',
    description: 'Bespoke Parisian craftsmanship, architectural silk draping, and contemporary seasonal silhouette lookbook.',
    category: 'Presentation',
    subcategory: 'Fashion & Luxury',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['fashion', 'luxury', 'couture', 'editorial', 'paris'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 8940,
    views: 91000,
    gradient: 'linear-gradient(135deg, #18181b 0%, #27272a 100%)',
    fonts: ['Playfair Display', 'Inter'],
    colors: ['#09090b', '#f5f5f4', '#d4af37', '#71717a'],
    slides: [
      {
        id: 'p117-s1',
        name: 'Cover',
        elements: [
          el('p117-s1-img', 'image', 0, 0, 960, 1080, { src: PHOTOS[117], locked: true }),
          el('p117-s1-bg-right', 'rect', 960, 0, 960, 1080, { fill: '#09090b', locked: true }),
          el('p117-s1-tag', 'text', 1060, 160, 760, 30, { text: 'COLLECTION AUTOMNE-HIVER · PARIS', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', fill: '#d4af37', letterSpacing: 4 }),
          el('p117-s1-title', 'text', 1060, 220, 760, 240, { text: 'MAISON ÉTÉ:\nSILHOUETTES DE LUMIÈRE', fontSize: 82, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p117-s1-rule', 'rect', 1060, 490, 140, 2, { fill: '#d4af37' }),
          el('p117-s1-desc', 'text', 1060, 530, 760, 200, { text: 'A study in architectural pleating, hand-loomed mulberry silk, and structural tailoring presented at the Grand Palais.\n\nEach couture gown requires 280 hours of manual hand-sewing in our Parisian atelier.', fontSize: 22, fontFamily: 'Playfair Display', fill: '#d4d4d8', lineHeight: 1.7 }),
          el('p117-s1-foot', 'text', 1060, 920, 760, 30, { text: 'RUNWAY LOOKBOOK N° 18 · PRIVATE BUYER DOSSIER', fontSize: 14, fontFamily: 'Inter', fill: '#71717a', letterSpacing: 2 })
        ]
      },
      {
        id: 'p117-s2',
        name: 'Design Philosophy',
        elements: [
          el('p117-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#09090b', locked: true }),
          el('p117-s2-num', 'text', 120, 100, 200, 60, { text: '01', fontSize: 32, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#d4af37' }),
          el('p117-s2-h', 'text', 120, 160, 1000, 60, { text: 'ARCHITECTURAL DRAPING & PURE GEOMETRY', fontSize: 48, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff' }),
          el('p117-s2-b', 'text', 120, 260, 700, 400, { text: 'Rejecting seasonal ephemerality, this collection explores permanent couture form through unpadded shoulders, bias-cut fluidity, and razor-sharp lapels.\n\nEach garment requires between 180 and 320 hours of manual hand-sewing in our Rue Saint-Honoré atelier, ensuring an exact sculpted fit that honors human movement.', fontSize: 22, fontFamily: 'Inter', fill: '#a1a1aa', lineHeight: 1.8 }),
          el('p117-s2-img', 'image', 880, 160, 920, 780, { src: PHOTOS[117], borderRadius: 8 })
        ]
      },
      {
        id: 'p117-s3',
        name: 'Fabrication & Sourcing',
        elements: [
          el('p117-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#09090b', locked: true }),
          el('p117-s3-h', 'text', 120, 120, 1400, 50, { text: 'ATELIER TEXTILE SPECIFICATIONS', fontSize: 46, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p117-s3-c1', 'text', 120, 260, 500, 300, { text: 'LYON HEAVY SILK SATIN\n42 Momme mulberry silk woven on restored 19th-century Jacquard looms. Imparts dramatic sculptural drape and light-refracting depth without rigidity.', fontSize: 20, fontFamily: 'Inter', fill: '#d4d4d8', lineHeight: 1.7 }),
          el('p117-s3-c2', 'text', 680, 260, 500, 300, { text: 'DOUBLE-FACED CASHMERE\nEthically harvested virgin Mongolian cashmere carded to an ethereal 320g/m² weight. Hand-split edges sewn invisibly into unlined evening coats.', fontSize: 20, fontFamily: 'Inter', fill: '#d4d4d8', lineHeight: 1.7 }),
          el('p117-s3-c3', 'text', 1240, 260, 500, 300, { text: 'SCULPTED LEATHER TRIM\nFull-grain vegetable-tanned French calfskin treated with natural beeswax to produce a rich patina that deepens over decades of wear.', fontSize: 20, fontFamily: 'Inter', fill: '#d4d4d8', lineHeight: 1.7 }),
          el('p117-s3-img', 'image', 120, 600, 1680, 360, { src: PHOTOS[117], borderRadius: 8 })
        ]
      },
      {
        id: 'p117-s4',
        name: 'Key Collection Metrics',
        elements: [
          el('p117-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#09090b', locked: true }),
          el('p117-s4-h', 'text', 120, 120, 1400, 50, { text: 'THE CRAFTSMANSHIP OF HAUTE COUTURE', fontSize: 46, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p117-s4-n1', 'text', 120, 280, 480, 110, { text: '280h', fontSize: 96, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#d4af37' }),
          el('p117-s4-t1', 'text', 120, 410, 480, 35, { text: 'Average Hand-Sewing Time', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p117-s4-d1', 'text', 120, 460, 480, 150, { text: 'Dedicated single seamstress artisanal responsibility from first canvas toile to final fitting.', fontSize: 18, fontFamily: 'Inter', fill: '#a1a1aa', lineHeight: 1.6 }),
          el('p117-s4-n2', 'text', 680, 280, 480, 110, { text: '32', fontSize: 96, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff' }),
          el('p117-s4-t2', 'text', 680, 410, 480, 35, { text: 'Bespoke Runway Silhouettes', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p117-s4-d2', 'text', 680, 460, 480, 150, { text: 'Exclusive numbered editions limited strictly to eight private commissions worldwide.', fontSize: 18, fontFamily: 'Inter', fill: '#a1a1aa', lineHeight: 1.6 }),
          el('p117-s4-n3', 'text', 1240, 280, 480, 110, { text: '100%', fontSize: 96, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#d4af37' }),
          el('p117-s4-t3', 'text', 1240, 410, 480, 35, { text: 'Traceable Artisanal Origin', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p117-s4-d3', 'text', 1240, 460, 480, 150, { text: 'Certified French and Italian supply chains adhering to the Chambre Syndicale de la Haute Couture.', fontSize: 18, fontFamily: 'Inter', fill: '#a1a1aa', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p117-s5',
        name: 'Closing',
        elements: [
          el('p117-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#09090b', locked: true }),
          el('p117-s5-tag', 'text', 120, 280, 800, 30, { text: '✦ PRIVATE SALON FITTINGS BY INVITATION', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', fill: '#d4af37', letterSpacing: 4 }),
          el('p117-s5-title', 'text', 120, 330, 1600, 160, { text: 'TIMELESS ELEGANCE IN PERPETUITY.', fontSize: 84, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff' }),
          el('p117-s5-bar', 'rect', 120, 520, 140, 2, { fill: '#d4af37' }),
          el('p117-s5-sub', 'text', 120, 560, 1200, 80, { text: 'Private client appointments and seasonal salon presentations:\ncouture@maisonete-paris.fr · 28 Place Vendôme, 75001 Paris', fontSize: 24, fontFamily: 'Playfair Display', fill: '#a1a1aa', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 118: AAA Indie Game Studio Pitch (Slanted Dynamic Layout + Lower Wide Hero Banner)
  decks.push({
    id: 118,
    name: 'AAA Indie Game Studio Pitch',
    title: 'CHRONO-PULSE GAME PITCH',
    description: 'Time-dilating tactical combat, Unreal Engine 5 Nanite environments, and next-generation procedural narrative pitch.',
    category: 'Presentation',
    subcategory: 'Gaming & Interactive',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['gaming', 'pitch', 'indie', 'scifi', 'entertainment'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 7890,
    views: 82000,
    gradient: 'linear-gradient(135deg, #180d2b 0%, #ff4d00 100%)',
    fonts: ['Space Grotesk', 'Inter'],
    colors: ['#110920', '#ff5722', '#ffffff', '#e0e7ff'],
    slides: [
      {
        id: 'p118-s1',
        name: 'Cover',
        elements: [
          el('p118-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#110920', locked: true }),
          el('p118-s1-img', 'image', 100, 80, 680, 920, { src: PHOTOS[118], borderRadius: 24, locked: true }),
          el('p118-s1-tag', 'text', 840, 100, 980, 30, { text: 'GAME DESIGN PITCH // UNREAL ENGINE 5.5 NANITE', fontSize: 16, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ff5722', letterSpacing: 3 }),
          el('p118-s1-title', 'text', 840, 150, 980, 220, { text: 'CHRONO-PULSE: TEMPORAL WARFARE', fontSize: 84, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p118-s1-c1', 'rect', 840, 400, 980, 240, { fill: '#21123a', stroke: '#ff5722', strokeWidth: 1.5, borderRadius: 20 }),
          el('p118-s1-c1-t', 'text', 880, 435, 900, 40, { text: 'CORE GAMEPLAY: TIME-DILATING TACTICAL COMBAT', fontSize: 22, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ff5722' }),
          el('p118-s1-c1-d', 'text', 880, 485, 900, 130, { text: 'Players manipulate localized gravity wells, sprint through crossfire at 10x relative velocity, and deploy synchronized temporal rewind clones to flank heavily fortified boss encounters.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 }),
          el('p118-s1-c2', 'rect', 840, 670, 980, 330, { fill: '#1b0d2f', borderRadius: 20 }),
          el('p118-s1-c2-v1', 'text', 880, 710, 420, 50, { text: '$8.5M SEED ROUND', fontSize: 32, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p118-s1-c2-d1', 'text', 880, 770, 420, 70, { text: '18-month production runway to Steam Early Access launch.', fontSize: 16, fontFamily: 'Inter', fill: '#94a3b8' }),
          el('p118-s1-c2-v2', 'text', 1340, 710, 440, 50, { text: 'PC · PS5 PRO · XBOX', fontSize: 32, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ff5722' }),
          el('p118-s1-c2-d2', 'text', 1340, 770, 440, 70, { text: 'Simultaneous cross-platform launch with unified netcode.', fontSize: 16, fontFamily: 'Inter', fill: '#94a3b8' }),
          el('p118-s1-foot', 'text', 880, 935, 900, 30, { text: 'PLAYABLE DEMO BUILDS AVAILABLE FOR ACCREDITED INVESTORS', fontSize: 15, fontFamily: 'Space Grotesk', fill: '#ff5722' })
        ]
      },
      {
        id: 'p118-s2',
        name: 'The Core Loop Hook',
        elements: [
          el('p118-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#110920', locked: true }),
          el('p118-s2-h', 'text', 140, 120, 1400, 60, { text: 'WHAT HAPPENS WHEN TIME IS YOUR PRIMARY AMMUNITION?', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p118-s2-b1', 'text', 140, 240, 780, 360, { text: 'In Chrono-Pulse, every bullet fired records an echo in the temporal fabric. Players can freeze localized gravity wells, sprint through crossfire at 10x relative velocity, and trigger split-second rewind clones to flank heavily armored boss encounters.\n\nThe gameplay loop bridges the razor-sharp mechanical tension of Titanfall with the brain-bending spatial logic of Portal.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p118-s2-img', 'image', 980, 220, 800, 680, { src: PHOTOS[118], borderRadius: 16 })
        ]
      },
      {
        id: 'p118-s3',
        name: 'Player Retention & Market',
        elements: [
          el('p118-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#110920', locked: true }),
          el('p118-s3-head', 'text', 140, 120, 1400, 50, { text: 'TARGET AUDIENCE & MONETIZATION COHORTS', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p118-s3-c1', 'rect', 140, 240, 500, 580, { fill: '#21123a', borderRadius: 16 }),
          el('p118-s3-v1', 'text', 180, 280, 420, 100, { text: '4.8M', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ff5722' }),
          el('p118-s3-t1', 'text', 180, 400, 420, 40, { text: 'Wishlist Addressable Market', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff' }),
          el('p118-s3-d1', 'text', 180, 460, 420, 220, { text: 'Calculated from overlap cohorts of competitive action roguelikes and fast-paced first-person shooters on Steam.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p118-s3-c2', 'rect', 710, 240, 500, 580, { fill: '#21123a', borderRadius: 16 }),
          el('p118-s3-v2', 'text', 750, 280, 420, 100, { text: '$39.99', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p118-s3-t2', 'text', 750, 400, 420, 40, { text: 'Premium Box Price Point', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff' }),
          el('p118-s3-d2', 'text', 750, 460, 420, 220, { text: 'Zero pay-to-win microtransactions. Cosmetic season passes paired with free seasonal ranked map expansions.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p118-s3-c3', 'rect', 1280, 240, 500, 580, { fill: '#21123a', borderRadius: 16 }),
          el('p118-s3-v3', 'text', 1320, 280, 420, 100, { text: '85%+', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ff5722' }),
          el('p118-s3-t3', 'text', 1320, 400, 420, 40, { text: 'Target Metacritic Score', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff' }),
          el('p118-s3-d3', 'text', 1320, 460, 420, 220, { text: 'Veteran lead developers with prior experience shipping critical award-winning multiplatform titles.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p118-s4',
        name: 'Production Milestones',
        elements: [
          el('p118-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#110920', locked: true }),
          el('p118-s4-head', 'text', 140, 140, 1400, 50, { text: 'DEVELOPMENT SCHEDULE & CAPITAL BUDGET', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p118-s4-p1', 'text', 140, 260, 780, 100, { text: 'MILESTONE 1: VERTICAL SLICE (Q3 2026)\nSingle-player campaign opening chapter with full temporal physics systems and motion-captured combat.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p118-s4-p2', 'text', 140, 390, 780, 100, { text: 'MILESTONE 2: CLOSED MULTIPLAYER ALPHA (Q1 2027)\nDeterministic server netcode validation with 16-player simultaneous temporal rewind desync protection.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p118-s4-p3', 'text', 140, 520, 780, 100, { text: 'MILESTONE 3: STEAM NEXT FEST DEMO (Q3 2027)\nPublic demo release targeting over 150,000 active concurrent livestreaming viewers.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p118-s4-p4', 'text', 140, 650, 780, 100, { text: 'MILESTONE 4: GLOBAL SIMULTANEOUS LAUNCH (Q4 2027)\nDay-one digital launch across PC, PlayStation, and Xbox with full cross-play and cross-progression.', fontSize: 20, fontFamily: 'Inter', fill: '#ff5722', lineHeight: 1.7 }),
          el('p118-s4-img', 'image', 1000, 240, 780, 620, { src: PHOTOS[118], borderRadius: 16 })
        ]
      },
      {
        id: 'p118-s5',
        name: 'Investment Ask',
        elements: [
          el('p118-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#110920', locked: true }),
          el('p118-s5-tag', 'text', 140, 280, 800, 30, { text: '✦ PUBLISHER & VENTURE FINANCING ROUND', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ff5722' }),
          el('p118-s5-title', 'text', 140, 330, 1600, 160, { text: 'SHAPING THE NEXT GAMING REVOLUTION.', fontSize: 80, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p118-s5-bar', 'rect', 140, 520, 160, 6, { fill: '#ff5722' }),
          el('p118-s5-sub', 'text', 140, 570, 1200, 80, { text: 'Access our playable Unreal Engine 5 prototype build:\npublishing@chronopulse-game.com · Montreal · Tokyo', fontSize: 24, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 119: Electronic Music Festival (Centered Stage Dome & Audio Frequency Rhythms)
  decks.push({
    id: 119,
    name: 'Electronic Music Festival & Sound Lab',
    title: 'RESONANCE AUDIO LAB 2026',
    description: 'Spatial 3D audio staging, binaural acoustics, algorithmic composition, and electronic festival production.',
    category: 'Presentation',
    subcategory: 'Audio & Music Production',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['music', 'festival', 'sound', 'audio', 'culture'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 6730,
    views: 64000,
    gradient: 'linear-gradient(135deg, #1e0034 0%, #d946ef 100%)',
    fonts: ['Space Grotesk', 'Inter'],
    colors: ['#120124', '#e879f9', '#ffffff', '#f0abfc'],
    slides: [
      {
        id: 'p119-s1',
        name: 'Cover',
        elements: [
          el('p119-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#120124', locked: true }),
          el('p119-s1-tag', 'text', 200, 80, 1520, 30, { text: 'SPATIAL ACOUSTICS & IMMERSIVE AUDIO · BIENNALE 2026', fontSize: 16, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#e879f9', alignment: 'center', letterSpacing: 4 }),
          el('p119-s1-title', 'text', 200, 130, 1520, 180, { text: 'RESONANCE: SPATIAL AUDIO DOME', fontSize: 90, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', alignment: 'center', lineHeight: 1.05 }),
          el('p119-s1-img', 'image', 440, 330, 1040, 520, { src: PHOTOS[119], borderRadius: 24, locked: true }),
          el('p119-s1-desc', 'text', 200, 880, 1520, 50, { text: 'A 64-channel ambisonic dome enveloping 40,000 festival attendees in real-time generative soundscapes.', fontSize: 22, fontFamily: 'Inter', fill: '#f0abfc', alignment: 'center' }),
          el('p119-s1-foot', 'text', 200, 940, 1520, 30, { text: 'BERLIN KRAFTWERK · AUGUST 14-17, 2026 · TECHNICAL PRODUCTION DOSSIER', fontSize: 15, fontFamily: 'Space Grotesk', fill: '#e879f9', alignment: 'center' })
        ]
      },
      {
        id: 'p119-s2',
        name: 'The Acoustic Architecture',
        elements: [
          el('p119-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#120124', locked: true }),
          el('p119-s2-h', 'text', 140, 120, 1400, 60, { text: 'BREAKING FREE FROM CONVENTIONAL STEREO PA RIGS', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p119-s2-b1', 'text', 140, 240, 780, 360, { text: 'Standard concert sound systems blast unidirectional decibels toward crowds, causing auditory fatigue, uneven coverage pockets, and blurred low-end muddy phase cancellations.\n\nResonance employs a hemispherical Meyer Sound SoundXchange array. Live artists sculpt sound objects that travel overhead, whirl across subterranean sub-arrays, and envelop listeners with pinpoint localization accuracy.', fontSize: 22, fontFamily: 'Inter', fill: '#e9d5ff', lineHeight: 1.8 }),
          el('p119-s2-img', 'image', 980, 220, 800, 680, { src: PHOTOS[119], borderRadius: 16 })
        ]
      },
      {
        id: 'p119-s3',
        name: 'Hardware Specifications',
        elements: [
          el('p119-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#120124', locked: true }),
          el('p119-s3-h', 'text', 140, 120, 1400, 50, { text: 'FESTIVAL SOUND RIG BENCHMARKS', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p119-s3-n1', 'text', 140, 280, 480, 110, { text: '64.4 Ch', fontSize: 96, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#e879f9' }),
          el('p119-s3-t1', 'text', 140, 410, 480, 35, { text: 'Discrete Spatial Channels', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff' }),
          el('p119-s3-d1', 'text', 140, 460, 480, 160, { text: 'Full 360-degree horizontal and 90-degree vertical elevation ambisonic dome speakers.', fontSize: 18, fontFamily: 'Inter', fill: '#f0abfc', lineHeight: 1.6 }),
          el('p119-s3-n2', 'text', 710, 280, 480, 110, { text: '16 Hz', fontSize: 96, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p119-s3-t2', 'text', 710, 410, 480, 35, { text: 'Infrasonic Sub-Bass Extension', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff' }),
          el('p119-s3-d2', 'text', 710, 460, 480, 160, { text: 'Rotary woofer technology moving physical cubic meters of air without acoustic distortion.', fontSize: 18, fontFamily: 'Inter', fill: '#f0abfc', lineHeight: 1.6 }),
          el('p119-s3-n3', 'text', 1280, 280, 480, 110, { text: '<0.8 ms', fontSize: 96, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#e879f9' }),
          el('p119-s3-t3', 'text', 1280, 410, 480, 35, { text: 'DSP Spatialization Latency', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff' }),
          el('p119-s3-d3', 'text', 1280, 460, 480, 160, { text: 'Dante / Ravenna IP networking delivering instant live artist gestural synthesizer control.', fontSize: 18, fontFamily: 'Inter', fill: '#f0abfc', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p119-s4',
        name: 'Stage Architecture',
        elements: [
          el('p119-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#120124', locked: true }),
          el('p119-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[119], borderRadius: 16 }),
          el('p119-s4-title', 'text', 140, 750, 1640, 50, { text: 'THE KINETIC LIGHT & SOUND MONOLITH', fontSize: 40, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p119-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Motorized laser trusses articulate in synchrony with audio trajectories, transforming invisible acoustic pressure waves into tangible volumetric light sculptures.', fontSize: 20, fontFamily: 'Inter', fill: '#f0abfc', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p119-s5',
        name: 'Closing',
        elements: [
          el('p119-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#120124', locked: true }),
          el('p119-s5-tag', 'text', 140, 280, 800, 30, { text: '✦ EXPERIENCE SOUND IN ALL THREE DIMENSIONS', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#e879f9' }),
          el('p119-s5-title', 'text', 140, 330, 1600, 160, { text: 'HEAR THE UNHEARD.', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p119-s5-bar', 'rect', 140, 520, 160, 6, { fill: '#e879f9' }),
          el('p119-s5-sub', 'text', 140, 570, 1200, 80, { text: 'Festival accreditation and production technology partnerships:\nacoustics@resonance-fest.de · Berlin · Amsterdam', fontSize: 24, fontFamily: 'Inter', fill: '#f0abfc', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 120: Botanical Distillery (Arched Window Hero Left, Amber Tasting Column Right)
  decks.push({
    id: 120,
    name: 'Artisan Botanical Distillery & Beverage Brand',
    title: 'WILDWOOD BOTANICAL DISTILLERY',
    description: 'Cold-vacuum botanical extraction, wild-foraged alpine aromatics, and artisanal single-estate copper pot spirits.',
    category: 'Presentation',
    subcategory: 'Food & Beverage',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['spirits', 'distillery', 'botanical', 'beverage', 'luxury'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 5820,
    views: 55000,
    gradient: 'linear-gradient(135deg, #14281d 0%, #c2410c 100%)',
    fonts: ['Playfair Display', 'Inter'],
    colors: ['#0f1d15', '#ea580c', '#ffffff', '#fed7aa'],
    slides: [
      {
        id: 'p120-s1',
        name: 'Cover',
        elements: [
          el('p120-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f1d15', locked: true }),
          el('p120-s1-tag', 'text', 100, 70, 1720, 30, { text: 'ESTABLISHED 2018 · HIGHLAND BOTANICAL DISTILLERY · BATCH NO. 14', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', fill: '#ea580c', letterSpacing: 3, align: 'center' }),
          el('p120-s1-title', 'text', 100, 120, 1720, 150, { text: 'WILDWOOD: WILD FORAGED BOTANICAL SPIRITS', fontSize: 86, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff', align: 'center' }),
          el('p120-s1-img', 'image', 100, 290, 1720, 500, { src: PHOTOS[120], borderRadius: 24, locked: true }),
          el('p120-s1-n1', 'rect', 100, 820, 400, 180, { fill: '#1b3425', borderRadius: 16 }),
          el('p120-s1-n1-t', 'text', 130, 850, 340, 35, { text: 'DOUGLAS FIR NEEDLE', fontSize: 18, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ea580c' }),
          el('p120-s1-n1-d', 'text', 130, 895, 340, 80, { text: 'Hand-harvested spring growth tips yielding vibrant citrus-pine aromatics.', fontSize: 15, fontFamily: 'Inter', fill: '#fed7aa', lineHeight: 1.5 }),
          el('p120-s1-n2', 'rect', 540, 820, 400, 180, { fill: '#1b3425', borderRadius: 16 }),
          el('p120-s1-n2-t', 'text', 570, 850, 340, 35, { text: 'MOUNTAIN YARROW', fontSize: 18, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p120-s1-n2-d', 'text', 570, 895, 340, 80, { text: 'Highland alpine wildflowers lending delicate herbal bitterness and floral depth.', fontSize: 15, fontFamily: 'Inter', fill: '#fed7aa', lineHeight: 1.5 }),
          el('p120-s1-n3', 'rect', 980, 820, 400, 180, { fill: '#1b3425', borderRadius: 16 }),
          el('p120-s1-n3-t', 'text', 1010, 850, 340, 35, { text: 'SWEET BOG MYRTLE', fontSize: 18, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ea580c' }),
          el('p120-s1-n3-d', 'text', 1010, 895, 340, 80, { text: 'Peatland foliage providing deep resinous spice notes to the middle palate.', fontSize: 15, fontFamily: 'Inter', fill: '#fed7aa', lineHeight: 1.5 }),
          el('p120-s1-n4', 'rect', 1420, 820, 400, 180, { fill: '#1b3425', borderRadius: 16 }),
          el('p120-s1-n4-t', 'text', 1450, 850, 340, 35, { text: '28°C COLD DISTILLATION', fontSize: 18, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p120-s1-n4-d', 'text', 1450, 895, 340, 80, { text: 'Deep vacuum rotary evaporation preserving living raw monoterpenes.', fontSize: 15, fontFamily: 'Inter', fill: '#fed7aa', lineHeight: 1.5 })
        ]
      },
      {
        id: 'p120-s2',
        name: 'Terroir & Foraging',
        elements: [
          el('p120-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f1d15', locked: true }),
          el('p120-s2-h', 'text', 140, 120, 1400, 60, { text: 'DISTILLING BOTANICALS AT ROOM TEMPERATURE', fontSize: 44, fontFamily: 'Playfair Display', fontWeight: '800', fill: '#ffffff' }),
          el('p120-s2-b1', 'text', 140, 240, 780, 360, { text: 'Traditional copper pot stills boil botanicals at 78°C to 100°C, scorching delicate volatile monoterpenes and producing bitter, oxidized flavor compounds.\n\nWildwood operates under deep vacuum (30 mbar), lowering alcohol boiling points to a gentle 28°C. This preserves the ethereal aroma of fresh Douglas fir needles, coastal yarrow, and wild elderflower in their true living state.', fontSize: 22, fontFamily: 'Inter', fill: '#fed7aa', lineHeight: 1.8 }),
          el('p120-s2-img', 'image', 980, 220, 800, 680, { src: PHOTOS[120], borderRadius: 16 })
        ]
      },
      {
        id: 'p120-s3',
        name: 'Production & Yields',
        elements: [
          el('p120-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f1d15', locked: true }),
          el('p120-s3-head', 'text', 140, 120, 1400, 50, { text: 'CRAFT SPIRITS ANNUAL BENCHMARKS', fontSize: 46, fontFamily: 'Playfair Display', fontWeight: '800', fill: '#ffffff' }),
          el('p120-s3-c1', 'rect', 140, 240, 500, 580, { fill: '#1b3425', borderRadius: 16 }),
          el('p120-s3-v1', 'text', 180, 280, 420, 100, { text: '28°C', fontSize: 88, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ea580c' }),
          el('p120-s3-t1', 'text', 180, 400, 420, 40, { text: 'Vacuum Distillation Temp', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p120-s3-d1', 'text', 180, 460, 420, 220, { text: 'Cold condensation retains 99% of delicate fragrant botanical floral terpenes without scorched degradation.', fontSize: 18, fontFamily: 'Inter', fill: '#fed7aa', lineHeight: 1.7 }),
          el('p120-s3-c2', 'rect', 710, 240, 500, 580, { fill: '#1b3425', borderRadius: 16 }),
          el('p120-s3-v2', 'text', 750, 280, 420, 100, { text: '2,400', fontSize: 88, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff' }),
          el('p120-s3-t2', 'text', 750, 400, 420, 40, { text: 'Numbered Bottles per Run', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p120-s3-d2', 'text', 750, 460, 420, 220, { text: 'Each bottle sealed with natural beeswax and signed by our master distiller with harvest coordinates.', fontSize: 18, fontFamily: 'Inter', fill: '#fed7aa', lineHeight: 1.7 }),
          el('p120-s3-c3', 'rect', 1280, 240, 500, 580, { fill: '#1b3425', borderRadius: 16 }),
          el('p120-s3-v3', 'text', 1320, 280, 420, 100, { text: '22', fontSize: 88, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ea580c' }),
          el('p120-s3-t3', 'text', 1320, 400, 420, 40, { text: 'Wild Foraged Botanicals', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p120-s3-d3', 'text', 1320, 460, 420, 220, { text: 'Sourced sustainably within a 50-mile radius of the distillery by certified forest herbalists.', fontSize: 18, fontFamily: 'Inter', fill: '#fed7aa', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p120-s4',
        name: 'The Spirits Collection',
        elements: [
          el('p120-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f1d15', locked: true }),
          el('p120-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[120], borderRadius: 16 }),
          el('p120-s4-title', 'text', 140, 750, 1640, 50, { text: 'OUR REPERTOIRE OF TERROIR-DRIVEN LIQUIDS', fontSize: 38, fontFamily: 'Playfair Display', fontWeight: '800', fill: '#ffffff' }),
          el('p120-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Featuring our flagship Coastal Dry Gin, Highland Peat Eau-de-Vie, and Amaro Alpino macerated with 36 indigenous mountain roots and barks.', fontSize: 20, fontFamily: 'Inter', fill: '#fed7aa', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p120-s5',
        name: 'Closing',
        elements: [
          el('p120-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f1d15', locked: true }),
          el('p120-s5-tag', 'text', 140, 280, 800, 30, { text: '✦ HARVESTED BY HAND · DISTILLED WITH PATIENCE', fontSize: 18, fontFamily: 'Inter', fontWeight: '600', fill: '#ea580c' }),
          el('p120-s5-title', 'text', 140, 330, 1600, 160, { text: 'THE SOUL OF THE FOREST IN EVERY SIP.', fontSize: 78, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff' }),
          el('p120-s5-bar', 'rect', 140, 520, 160, 4, { fill: '#ea580c' }),
          el('p120-s5-sub', 'text', 140, 570, 1200, 80, { text: 'Sommelier tastings and Michelin restaurant allocations:\ncellar@wildwooddistillery.com · Inverness, Scotland', fontSize: 24, fontFamily: 'Inter', fill: '#fed7aa', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 121: Swiss Haute Horlogerie (Right Circular Dial Bezel Showcase, Left Column Technical Calibre)
  decks.push({
    id: 121,
    name: 'Swiss Haute Horlogerie Chronograph Masterpiece',
    title: 'KRONOS CALIBRE 9 TOURBILLON',
    description: 'Triple-axis flying tourbillon, column-wheel flyback chronograph, and hand-beveled titanium watchmaking.',
    category: 'Presentation',
    subcategory: 'Luxury Goods & Horology',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['watches', 'horology', 'luxury', 'swiss', 'craft'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 8320,
    views: 79000,
    gradient: 'linear-gradient(135deg, #0f172a 0%, #38bdf8 100%)',
    fonts: ['Playfair Display', 'Inter', 'IBM Plex Mono'],
    colors: ['#090d16', '#38bdf8', '#ffffff', '#94a3b8'],
    slides: [
      {
        id: 'p121-s1',
        name: 'Cover',
        elements: [
          el('p121-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#090d16', locked: true }),
          el('p121-s1-dial-ring', 'rect', 1020, 140, 800, 800, { fill: 'transparent', stroke: '#38bdf8', strokeWidth: 2, borderRadius: 400, locked: true }),
          el('p121-s1-img', 'image', 1040, 160, 760, 760, { src: PHOTOS[121], borderRadius: 380, locked: true }),
          el('p121-s1-tag', 'text', 120, 140, 800, 30, { text: 'MANUFACTURE HORLOGÈRE · VALLÉE DE JOUX', fontSize: 16, fontFamily: 'IBM Plex Mono', fill: '#38bdf8', letterSpacing: 3 }),
          el('p121-s1-title', 'text', 120, 200, 840, 240, { text: 'KRONOS: CALIBRE 9 FLYING TOURBILLON', fontSize: 80, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p121-s1-bar', 'rect', 120, 470, 160, 4, { fill: '#38bdf8' }),
          el('p121-s1-desc', 'text', 120, 510, 800, 140, { text: 'Defying gravity through a 3-axis titanium tourbillon carriage rotating every 24 seconds, paired with a monopusher split-second chronograph.', fontSize: 24, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 }),
          el('p121-s1-calibre-box', 'rect', 120, 680, 800, 180, { fill: '#131b2e', borderRadius: 14 }),
          el('p121-s1-calibre-txt', 'text', 150, 715, 740, 110, { text: 'CALIBRE 9 IN-HOUSE MOVEMENT · 438 INDIVIDUAL COMPONENTS\n21,600 VIBRATIONS/HR · 72-HOUR CONSTANT TORQUE POWER RESERVE\nHAND-FINISHED ANGLAGE · POINÇON DE GENÈVE ACCREDITED', fontSize: 16, fontFamily: 'IBM Plex Mono', fill: '#38bdf8', lineHeight: 1.8 }),
          el('p121-s1-foot', 'text', 120, 920, 800, 30, { text: 'STRICTLY LIMITED TO 12 NUMBERED MASTERPIECES WORLDWIDE', fontSize: 15, fontFamily: 'IBM Plex Mono', fill: '#94a3b8' })
        ]
      },
      {
        id: 'p121-s2',
        name: 'Micro-Mechanical Mastery',
        elements: [
          el('p121-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#090d16', locked: true }),
          el('p121-s2-h', 'text', 140, 120, 1400, 60, { text: '438 COMPONENTS ASSEMBLED TO WITHIN 2 MICRONS', fontSize: 44, fontFamily: 'Playfair Display', fontWeight: '800', fill: '#ffffff' }),
          el('p121-s2-b1', 'text', 140, 240, 780, 360, { text: 'Every bridge of the Calibre 9 is hand-beveled (anglage) using gentian wood pegs and diamond paste to achieve a flawless mirror polish that no automated CNC mill can replicate.\n\nThe variable-inertia balance wheel beats at 21,600 vibrations per hour, powered by twin co-axial barrels delivering an impressive 72-hour autonomous power reserve.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p121-s2-img', 'image', 980, 220, 800, 680, { src: PHOTOS[121], borderRadius: 16 })
        ]
      },
      {
        id: 'p121-s3',
        name: 'Horological Specifications',
        elements: [
          el('p121-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#090d16', locked: true }),
          el('p121-s3-h', 'text', 140, 120, 1400, 50, { text: 'TECHNICAL CALIBRE SPECIFICATIONS', fontSize: 46, fontFamily: 'Playfair Display', fontWeight: '800', fill: '#ffffff' }),
          el('p121-s3-n1', 'text', 140, 280, 480, 110, { text: '0.24 g', fontSize: 96, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#38bdf8' }),
          el('p121-s3-t1', 'text', 140, 410, 480, 35, { text: 'Tourbillon Carriage Weight', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p121-s3-d1', 'text', 140, 460, 480, 160, { text: 'Grade 5 aerospace titanium skeletonized carriage comprising 82 microscopic parts.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 }),
          el('p121-s3-n2', 'text', 710, 280, 480, 110, { text: '72 Hrs', fontSize: 96, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff' }),
          el('p121-s3-t2', 'text', 710, 410, 480, 35, { text: 'Chronometric Power Reserve', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p121-s3-d2', 'text', 710, 460, 480, 160, { text: 'Twin series mainspring barrels maintaining constant torque throughout full discharge.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 }),
          el('p121-s3-n3', 'text', 1280, 280, 480, 110, { text: '±1.0 s/d', fontSize: 96, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#38bdf8' }),
          el('p121-s3-t3', 'text', 1280, 410, 480, 35, { text: 'Rate Stability Accuracy', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p121-s3-d3', 'text', 1280, 460, 480, 160, { text: 'Tested across six spatial positions and three temperature variations over 21 days.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p121-s4',
        name: 'Finishing & Anglage',
        elements: [
          el('p121-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#090d16', locked: true }),
          el('p121-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[121], borderRadius: 16 }),
          el('p121-s4-title', 'text', 140, 750, 1640, 50, { text: 'HAND-CRAFTED GENEVA STRIPES & POLISHED SINK RECESSED JEWELS', fontSize: 36, fontFamily: 'Playfair Display', fontWeight: '800', fill: '#ffffff' }),
          el('p121-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Over 40 hours of manual decoration per individual movement, certified with the prestigious Poinçon de Genève seal of mechanical purity.', fontSize: 20, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p121-s5',
        name: 'Closing',
        elements: [
          el('p121-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#090d16', locked: true }),
          el('p121-s5-tag', 'text', 140, 280, 800, 30, { text: '✦ THE APOGEE OF TIME MEASUREMENT', fontSize: 18, fontFamily: 'IBM Plex Mono', fill: '#38bdf8' }),
          el('p121-s5-title', 'text', 140, 330, 1600, 160, { text: 'SCULPTING TIME IN THREE DIMENSIONS.', fontSize: 78, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff' }),
          el('p121-s5-bar', 'rect', 140, 520, 160, 4, { fill: '#38bdf8' }),
          el('p121-s5-sub', 'text', 140, 570, 1200, 80, { text: 'Private collector allocations and boutique viewings:\nchronos@manufacture-horlogere.ch · Geneva · Tokyo', fontSize: 24, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 122: Superyacht (Top Oceanic Horizon Panorama + Bottom Left Hull Profile + Bottom Right Spec Box)
  decks.push({
    id: 122,
    name: 'Superyacht Naval Architecture & Oceanic Design',
    title: 'AURELIA 85M HYBRID SUPERYACHT',
    description: 'Hydrogen-diesel hybrid propulsion, SWATH wave-piercing naval hull, and carbon-neutral oceanic exploration.',
    category: 'Presentation',
    subcategory: 'Maritime & Naval Design',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['yacht', 'maritime', 'luxury', 'ocean', 'design'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 7120,
    views: 67000,
    gradient: 'linear-gradient(135deg, #0c4a6e 0%, #0369a1 100%)',
    fonts: ['Inter', 'Outfit'],
    colors: ['#082f49', '#38bdf8', '#ffffff', '#e0f2fe'],
    slides: [
      {
        id: 'p122-s1',
        name: 'Cover',
        elements: [
          el('p122-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#082f49', locked: true }),
          el('p122-s1-img', 'image', 100, 80, 1720, 540, { src: PHOTOS[122], borderRadius: 20, locked: true }),
          el('p122-s1-tag', 'text', 100, 660, 800, 26, { text: 'NAVAL ARCHITECTURE & OCEANIC ENGINEERING · 85M SPECIFICATION', fontSize: 16, fontFamily: 'Outfit', fontWeight: '800', fill: '#38bdf8', letterSpacing: 3 }),
          el('p122-s1-title', 'text', 100, 700, 1080, 180, { text: 'AURELIA 85M: ZERO-EMISSION EXPEDITION SUPERYACHT', fontSize: 80, fontFamily: 'Outfit', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p122-s1-desc', 'text', 100, 900, 1080, 60, { text: 'Liquid hydrogen fuel cells, wave-piercing axe-bow steel hull, and silent electric cruising autonomy.', fontSize: 22, fontFamily: 'Inter', fill: '#e0f2fe' }),
          el('p122-s1-card', 'rect', 1240, 660, 580, 280, { fill: '#0c4a6e', borderRadius: 16 }),
          el('p122-s1-card-txt', 'text', 1270, 700, 520, 200, { text: 'LENGTH OVERALL: 85.4 METERS (280 FT)\nGROSS TONNAGE: 2,650 GT\nTRANS-PACIFIC RANGE: 6,500 NM AT 12 KNOTS\nICE CLASS: 1B POLAR RATED\nACCOMMODATION: 14 GUESTS / 24 CREW', fontSize: 17, fontFamily: 'Inter', fontWeight: '700', fill: '#ffffff', lineHeight: 1.8 }),
          el('p122-s1-foot', 'text', 100, 970, 800, 30, { text: 'MONACO YACHT SHOW PREMIERE · MONACO · AMSTERDAM', fontSize: 15, fontFamily: 'Outfit', fill: '#38bdf8' })
        ]
      },
      {
        id: 'p122-s2',
        name: 'Naval Engineering & Efficiency',
        elements: [
          el('p122-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#082f49', locked: true }),
          el('p122-s2-h', 'text', 140, 120, 1400, 60, { text: 'REDUCING HYDRODYNAMIC DRAG BY 26% AT 16 KNOTS', fontSize: 44, fontFamily: 'Outfit', fontWeight: '800', fill: '#ffffff' }),
          el('p122-s2-b1', 'text', 140, 240, 780, 360, { text: 'Traditional displacement superyacht hulls plow through head seas, expending immense energy in pitching motion and wake resistance.\n\nThe Aurelia features an inverted axe bow that slices through swell rather than riding over it, dramatically smoothing vertical accelerations and ensuring passenger comfort even in Beaufort Force 8 gale conditions.', fontSize: 22, fontFamily: 'Inter', fill: '#e0f2fe', lineHeight: 1.8 }),
          el('p122-s2-img', 'image', 980, 220, 800, 680, { src: PHOTOS[122], borderRadius: 16 })
        ]
      },
      {
        id: 'p122-s3',
        name: 'Vessel Capabilities',
        elements: [
          el('p122-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#082f49', locked: true }),
          el('p122-s3-head', 'text', 140, 120, 1400, 50, { text: 'OCEANIC ENDURANCE BENCHMARKS', fontSize: 46, fontFamily: 'Outfit', fontWeight: '800', fill: '#ffffff' }),
          el('p122-s3-c1', 'rect', 140, 240, 500, 580, { fill: '#0c4a6e', borderRadius: 16 }),
          el('p122-s3-v1', 'text', 180, 280, 420, 100, { text: '6,500 nm', fontSize: 80, fontFamily: 'Outfit', fontWeight: '900', fill: '#38bdf8' }),
          el('p122-s3-t1', 'text', 180, 400, 420, 40, { text: 'Continuous Cruising Range', fontSize: 24, fontFamily: 'Outfit', fontWeight: '700', fill: '#ffffff' }),
          el('p122-s3-d1', 'text', 180, 460, 420, 220, { text: 'Non-stop trans-Pacific autonomous range without refueling at an economical 12-knot cruise speed.', fontSize: 18, fontFamily: 'Inter', fill: '#e0f2fe', lineHeight: 1.7 }),
          el('p122-s3-c2', 'rect', 710, 240, 500, 580, { fill: '#0c4a6e', borderRadius: 16 }),
          el('p122-s3-v2', 'text', 750, 280, 420, 100, { text: '0 dB', fontSize: 80, fontFamily: 'Outfit', fontWeight: '900', fill: '#ffffff' }),
          el('p122-s3-t2', 'text', 750, 400, 420, 40, { text: 'Silent Electric Harbor Mode', fontSize: 24, fontFamily: 'Outfit', fontWeight: '700', fill: '#ffffff' }),
          el('p122-s3-d2', 'text', 750, 460, 420, 220, { text: '1 MWh lithium-iron battery bank powers silent zero-emission maneuvers in marine protected anchorages.', fontSize: 18, fontFamily: 'Inter', fill: '#e0f2fe', lineHeight: 1.7 }),
          el('p122-s3-c3', 'rect', 1280, 240, 500, 580, { fill: '#0c4a6e', borderRadius: 16 }),
          el('p122-s3-v3', 'text', 1320, 280, 420, 100, { text: '2,650 GT', fontSize: 80, fontFamily: 'Outfit', fontWeight: '900', fill: '#38bdf8' }),
          el('p122-s3-t3', 'text', 1320, 400, 420, 40, { text: 'Gross Internal Volume', fontSize: 24, fontFamily: 'Outfit', fontWeight: '700', fill: '#ffffff' }),
          el('p122-s3-d3', 'text', 1320, 460, 420, 220, { text: 'Accommodates 14 guests across 7 staterooms and 24 professional crew members in full comfort.', fontSize: 18, fontFamily: 'Inter', fill: '#e0f2fe', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p122-s4',
        name: 'General Arrangement',
        elements: [
          el('p122-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#082f49', locked: true }),
          el('p122-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[122], borderRadius: 16 }),
          el('p122-s4-title', 'text', 140, 750, 1640, 50, { text: 'SEAMLESS INDOOR-OUTDOOR BEACH CLUB & TENDER GARAGE', fontSize: 38, fontFamily: 'Outfit', fontWeight: '800', fill: '#ffffff' }),
          el('p122-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Fold-out ocean terraces create 180 square meters of water-level relaxation space, with enclosed storage for an 11-meter limousine tender and personal exploration submersible.', fontSize: 20, fontFamily: 'Inter', fill: '#e0f2fe', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p122-s5',
        name: 'Closing',
        elements: [
          el('p122-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#082f49', locked: true }),
          el('p122-s5-tag', 'text', 140, 280, 800, 30, { text: '✦ DISCOVER THE UNCHARTED OCEAN', fontSize: 18, fontFamily: 'Outfit', fontWeight: '800', fill: '#38bdf8' }),
          el('p122-s5-title', 'text', 140, 330, 1600, 160, { text: 'HORIZONS WITHOUT LIMITS.', fontSize: 88, fontFamily: 'Outfit', fontWeight: '900', fill: '#ffffff' }),
          el('p122-s5-bar', 'rect', 140, 520, 160, 6, { fill: '#38bdf8' }),
          el('p122-s5-sub', 'text', 140, 570, 1200, 80, { text: 'Shipyard build slot reservations and custom interior commissions:\nnaval-architecture@aureliayachts.mc · Monaco · Amsterdam', fontSize: 24, fontFamily: 'Inter', fill: '#e0f2fe', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 123: Biodynamic Vineyard (3-Tier Column Grid: Left Narrow Strip, Center Grand Cru Monograph, Right Tasting Card)
  decks.push({
    id: 123,
    name: 'Biodynamic Vineyard & Estate Terroir',
    title: 'DOMAINE DE LA COLLINE TERROIR',
    description: 'Living soil microbiology, lunar cycle viticulture, native yeast fermentation, and grand cru allocation dossier.',
    category: 'Presentation',
    subcategory: 'Viticulture & Winemaking',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['wine', 'vineyard', 'terroir', 'luxury', 'agriculture'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 6240,
    views: 58000,
    gradient: 'linear-gradient(135deg, #450a0a 0%, #b91c1c 100%)',
    fonts: ['Playfair Display', 'Inter'],
    colors: ['#2b0707', '#b91c1c', '#ffffff', '#fecaca'],
    slides: [
      {
        id: 'p123-s1',
        name: 'Cover',
        elements: [
          el('p123-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#2b0707', locked: true }),
          el('p123-s1-left-img', 'image', 100, 90, 460, 900, { src: PHOTOS[123], borderRadius: 16, locked: true }),
          el('p123-s1-tag', 'text', 620, 140, 700, 30, { text: 'ESTATE VITICULTURE · CÔTE DE NUITS · VINTAGE 2024', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', fill: '#f87171', letterSpacing: 3 }),
          el('p123-s1-title', 'text', 620, 190, 780, 240, { text: 'DOMAINE DE LA COLLINE: GRAND CRU TERROIR', fontSize: 78, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p123-s1-bar', 'rect', 620, 460, 140, 4, { fill: '#b91c1c' }),
          el('p123-s1-desc', 'text', 620, 500, 740, 180, { text: 'Certified Demeter biodynamic pinot noir cultivated along Jurassic Bajocian limestone slopes without synthetic chemical intervention.', fontSize: 24, fontFamily: 'Inter', fill: '#fecaca', lineHeight: 1.6 }),
          el('p123-s1-card', 'rect', 1420, 90, 400, 900, { fill: '#450a0a', borderRadius: 16 }),
          el('p123-s1-card-txt', 'text', 1450, 160, 340, 760, { text: 'VINTAGE: 2024\nAPPELLATION: VOSNE-ROMANÉE GRAND CRU\n\nSOIL: JURASSIC MARL & IRON-RICH CLAY\nVINE AGE: 65 YEARS AVERAGE\nYIELD: 28 HL/HA LOW CANOPY\n\nÉLEVAGE: 18 MONTHS IN FRENCH OAK (20% NEW TRONÇAIS)\n\nANNUAL ALLOCATION: 3,200 BOTTLES NUMBERED BY HAND', fontSize: 17, fontFamily: 'Playfair Display', fill: '#fecaca', lineHeight: 2.1 }),
          el('p123-s1-foot', 'text', 620, 930, 700, 30, { text: 'EN PRIMEUR ALLOCATION DOSSIER · BOTTLED AT THE ESTATE', fontSize: 15, fontFamily: 'Inter', fill: '#f87171' })
        ]
      },
      {
        id: 'p123-s2',
        name: 'Living Soil & Geology',
        elements: [
          el('p123-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#2b0707', locked: true }),
          el('p123-s2-h', 'text', 140, 120, 1400, 60, { text: 'THE JURASSIC BAJOCIAN LIMESTONE BEDROCK', fontSize: 44, fontFamily: 'Playfair Display', fontWeight: '800', fill: '#ffffff' }),
          el('p123-s2-b1', 'text', 140, 240, 780, 360, { text: 'Great wine is not made in the cellar; it is translated directly from the root zone. Our 65-year-old vines drive their root systems up to 14 meters down into fractured fossil-rich marl.\n\nWe practice whole-cluster spontaneous fermentation using exclusively indigenous cellar yeasts, capturing the distinct salinity, tension, and floral complexity unique to our south-facing hillside amphitheater.', fontSize: 22, fontFamily: 'Inter', fill: '#fecaca', lineHeight: 1.8 }),
          el('p123-s2-img', 'image', 980, 220, 800, 680, { src: PHOTOS[123], borderRadius: 16 })
        ]
      },
      {
        id: 'p123-s3',
        name: 'Vintage Metrics',
        elements: [
          el('p123-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#2b0707', locked: true }),
          el('p123-s3-head', 'text', 140, 120, 1400, 50, { text: '2024 VINTAGE CHARACTERISTICS', fontSize: 46, fontFamily: 'Playfair Display', fontWeight: '800', fill: '#ffffff' }),
          el('p123-s3-c1', 'rect', 140, 240, 500, 580, { fill: '#450a0a', borderRadius: 16 }),
          el('p123-s3-v1', 'text', 180, 280, 420, 100, { text: '28 hl/ha', fontSize: 80, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#f87171' }),
          el('p123-s3-t1', 'text', 180, 400, 420, 40, { text: 'Low-Yield Pruning Target', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p123-s3-d1', 'text', 180, 460, 420, 220, { text: 'Severely restricted yields concentrate phenolic maturity and silky tannin structure.', fontSize: 18, fontFamily: 'Inter', fill: '#fecaca', lineHeight: 1.7 }),
          el('p123-s3-c2', 'rect', 710, 240, 500, 580, { fill: '#450a0a', borderRadius: 16 }),
          el('p123-s3-v2', 'text', 750, 280, 420, 100, { text: '18 Mo', fontSize: 80, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff' }),
          el('p123-s3-t2', 'text', 750, 400, 420, 40, { text: 'French Oak Barrel Élevage', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p123-s3-d2', 'text', 750, 460, 420, 220, { text: 'Lightly toasted barrels from the Tronçais forest providing subtle spice without masking fruit.', fontSize: 18, fontFamily: 'Inter', fill: '#fecaca', lineHeight: 1.7 }),
          el('p123-s3-c3', 'rect', 1280, 240, 500, 580, { fill: '#450a0a', borderRadius: 16 }),
          el('p123-s3-v3', 'text', 1320, 280, 420, 100, { text: '3,200', fontSize: 80, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#f87171' }),
          el('p123-s3-t3', 'text', 1320, 400, 420, 40, { text: 'Bottles Produced Worldwide', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p123-s3-d3', 'text', 1320, 460, 420, 220, { text: 'Numbered bottles allocated strictly through certified fine wine merchant rosters.', fontSize: 18, fontFamily: 'Inter', fill: '#fecaca', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p123-s4',
        name: 'The Cellar Aging Process',
        elements: [
          el('p123-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#2b0707', locked: true }),
          el('p123-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[123], borderRadius: 16 }),
          el('p123-s4-title', 'text', 140, 750, 1640, 50, { text: '12TH-CENTURY CISTERCIAN CELLARS DEEP UNDERGROUND', fontSize: 38, fontFamily: 'Playfair Display', fontWeight: '800', fill: '#ffffff' }),
          el('p123-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Unchanged natural cellar temperature (11°C) and 85% relative humidity allow gradual micro-oxygenation over decades, giving our Grand Crus potential to age gracefully for 40+ years.', fontSize: 20, fontFamily: 'Inter', fill: '#fecaca', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p123-s5',
        name: 'Closing',
        elements: [
          el('p123-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#2b0707', locked: true }),
          el('p123-s5-tag', 'text', 140, 280, 800, 30, { text: '✦ BOTTLED AT THE DOMAINE WITH RESPECT FOR NATURE', fontSize: 18, fontFamily: 'Inter', fontWeight: '600', fill: '#f87171' }),
          el('p123-s5-title', 'text', 140, 330, 1600, 160, { text: 'TRANSLATING EARTH INTO LIQUID MEMORY.', fontSize: 78, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff' }),
          el('p123-s5-bar', 'rect', 140, 520, 160, 4, { fill: '#f87171' }),
          el('p123-s5-sub', 'text', 140, 570, 1200, 80, { text: 'Private client allocation list inquiries:\nallocation@domainedelacolline.fr · Vosne-Romanée, France', fontSize: 24, fontFamily: 'Inter', fill: '#fecaca', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 124: Architectural Villa (Top Floating Wide Landscape Photo + Bottom Monograph Headline)
  decks.push({
    id: 124,
    name: 'Architectural Villa & Biophilic Desert Sanctuary',
    title: 'SOLARIS DESERT VILLA RETREAT',
    description: 'Rammed earth passive thermal mass, desert xeriscaping, and off-grid biophilic luxury estate architecture.',
    category: 'Presentation',
    subcategory: 'Architecture & Real Estate',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['architecture', 'villa', 'desert', 'biophilic', 'realestate'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 7650,
    views: 73000,
    gradient: 'linear-gradient(135deg, #431407 0%, #ea580c 100%)',
    fonts: ['Outfit', 'Inter'],
    colors: ['#271007', '#ea580c', '#ffffff', '#ffedd5'],
    slides: [
      {
        id: 'p124-s1',
        name: 'Cover',
        elements: [
          el('p124-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#271007', locked: true }),
          el('p124-s1-img', 'image', 140, 90, 1640, 560, { src: PHOTOS[124], borderRadius: 24, locked: true }),
          el('p124-s1-tag', 'text', 140, 680, 800, 26, { text: 'ARCHITECTURAL RESIDENTIAL MONOGRAPH · MOJAVE DESERT', fontSize: 16, fontFamily: 'Outfit', fontWeight: '800', fill: '#ea580c', letterSpacing: 3 }),
          el('p124-s1-title', 'text', 140, 720, 1640, 160, { text: 'SOLARIS: BIOPHILIC DESERT RESIDENTIAL SANCTUARY', fontSize: 82, fontFamily: 'Outfit', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p124-s1-desc', 'text', 140, 900, 1200, 60, { text: 'Cast rammed earth walls that absorb harsh daytime desert heat and radiate warmth during cold desert nights.', fontSize: 22, fontFamily: 'Inter', fill: '#ffedd5' }),
          el('p124-s1-foot', 'text', 140, 960, 800, 30, { text: 'AIA RESIDENTIAL HONOR AWARD 2026 · PALM SPRINGS · LOS ANGELES', fontSize: 15, fontFamily: 'Outfit', fill: '#ea580c' })
        ]
      },
      {
        id: 'p124-s2',
        name: 'Thermal Mass & Passive Design',
        elements: [
          el('p124-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#271007', locked: true }),
          el('p124-s2-h', 'text', 140, 120, 1400, 60, { text: '500MM THICK WALLS COMPOUNDED FROM LOCAL SOIL', fontSize: 44, fontFamily: 'Outfit', fontWeight: '800', fill: '#ffffff' }),
          el('p124-s2-b1', 'text', 140, 240, 780, 360, { text: 'Modern desert architecture often relies on glass facades and massive air conditioning systems that collapse during power grid blackouts.\n\nSolaris blends into its geological surroundings with 60% stabilized local desert clay and gravel. The structure acts as a giant thermal flywheel, moderating 40°C outdoor diurnal temperature swings into an unwavering 22°C interior climate.', fontSize: 22, fontFamily: 'Inter', fill: '#ffedd5', lineHeight: 1.8 }),
          el('p124-s2-img', 'image', 980, 220, 800, 680, { src: PHOTOS[124], borderRadius: 16 })
        ]
      },
      {
        id: 'p124-s3',
        name: 'Sustainable Engineering',
        elements: [
          el('p124-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#271007', locked: true }),
          el('p124-s3-head', 'text', 140, 120, 1400, 50, { text: 'OFF-GRID AUTONOMY BENCHMARKS', fontSize: 46, fontFamily: 'Outfit', fontWeight: '800', fill: '#ffffff' }),
          el('p124-s3-c1', 'rect', 140, 240, 500, 580, { fill: '#431407', borderRadius: 16 }),
          el('p124-s3-v1', 'text', 180, 280, 420, 100, { text: '100%', fontSize: 88, fontFamily: 'Outfit', fontWeight: '900', fill: '#ea580c' }),
          el('p124-s3-t1', 'text', 180, 400, 420, 40, { text: 'Solar & Battery Autonomy', fontSize: 24, fontFamily: 'Outfit', fontWeight: '700', fill: '#ffffff' }),
          el('p124-s3-d1', 'text', 180, 460, 420, 220, { text: 'Rooftop building-integrated photovoltaic shingles producing 45 kW with 120 kWh storage.', fontSize: 18, fontFamily: 'Inter', fill: '#ffedd5', lineHeight: 1.7 }),
          el('p124-s3-c2', 'rect', 710, 240, 500, 580, { fill: '#431407', borderRadius: 16 }),
          el('p124-s3-v2', 'text', 750, 280, 420, 100, { text: '8,500 sqft', fontSize: 88, fontFamily: 'Outfit', fontWeight: '900', fill: '#ffffff' }),
          el('p124-s3-t2', 'text', 750, 400, 420, 40, { text: 'Conditioned Living Space', fontSize: 24, fontFamily: 'Outfit', fontWeight: '700', fill: '#ffffff' }),
          el('p124-s3-d2', 'text', 750, 460, 420, 220, { text: 'Five en-suite bedrooms, open-air inner courtyard with infinity lap pool overlooking red rock mesas.', fontSize: 18, fontFamily: 'Inter', fill: '#ffedd5', lineHeight: 1.7 }),
          el('p124-s3-c3', 'rect', 1280, 240, 500, 580, { fill: '#431407', borderRadius: 16 }),
          el('p124-s3-v3', 'text', 1320, 280, 420, 100, { text: 'Zero', fontSize: 88, fontFamily: 'Outfit', fontWeight: '900', fill: '#ea580c' }),
          el('p124-s3-t3', 'text', 1320, 400, 420, 40, { text: 'Net Operational Carbon', fontSize: 24, fontFamily: 'Outfit', fontWeight: '700', fill: '#ffffff' }),
          el('p124-s3-d3', 'text', 1320, 460, 420, 220, { text: 'Rainwater harvesting and atmospheric water generation providing year-round closed-loop water security.', fontSize: 18, fontFamily: 'Inter', fill: '#ffedd5', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p124-s4',
        name: 'The Courtyard Oasis',
        elements: [
          el('p124-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#271007', locked: true }),
          el('p124-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[124], borderRadius: 16 }),
          el('p124-s4-title', 'text', 140, 750, 1640, 50, { text: 'CENTRAL MICROCLIMATE COURTYARD & REFLECTING POOL', fontSize: 38, fontFamily: 'Outfit', fontWeight: '800', fill: '#ffffff' }),
          el('p124-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Arranged around an evaporative cooling courtyard sheltered from desert winds, creating a serene sanctuary populated by native Joshua trees and drought-tolerant agaves.', fontSize: 20, fontFamily: 'Inter', fill: '#ffedd5', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p124-s5',
        name: 'Closing',
        elements: [
          el('p124-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#271007', locked: true }),
          el('p124-s5-tag', 'text', 140, 280, 800, 30, { text: '✦ ARCHITECTURE BORN FROM THE EARTH', fontSize: 18, fontFamily: 'Outfit', fontWeight: '800', fill: '#ea580c' }),
          el('p124-s5-title', 'text', 140, 330, 1600, 160, { text: 'LIVING IN HARMONY WITH THE SILENT DESERT.', fontSize: 76, fontFamily: 'Outfit', fontWeight: '900', fill: '#ffffff' }),
          el('p124-s5-bar', 'rect', 140, 520, 160, 6, { fill: '#ea580c' }),
          el('p124-s5-sub', 'text', 140, 570, 1200, 80, { text: 'Architectural studio inquiries and monograph requests:\nstudio@solarisarchitecture.com · Palm Springs · Los Angeles', fontSize: 24, fontFamily: 'Inter', fill: '#ffedd5', lineHeight: 1.8 })
        ]
      }
    ]
  });

  return decks;
}
