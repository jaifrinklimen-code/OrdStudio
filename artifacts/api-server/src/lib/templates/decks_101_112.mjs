import { el, PHOTOS } from './deck_helpers.mjs';

export function getDecks101to108() {
  const decks = [];

  // 101: Architectural Horizon Monograph (Dark Brutalist & Warm Amber)
  decks.push({
    id: 101,
    name: 'Architectural Horizon Monograph',
    title: 'ARCHITECTURAL HORIZON',
    description: 'A masterclass in modern spatial minimalism, structural rhythm, and brutalist geometric photography.',
    category: 'Presentation',
    subcategory: 'Architecture',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['architecture', 'monograph', 'minimalism', 'photo-first'],
    author: 'ORD Studio',
    premium: false,
    isPublished: true,
    likes: 8840,
    views: 94500,
    gradient: 'linear-gradient(135deg, #0a0d14 0%, #f59e0b 100%)',
    fonts: ['Space Grotesk', 'Inter'],
    colors: ['#0a0d14', '#f59e0b', '#ffffff', '#94a3b8'],
    slides: [
      {
        id: 'p101-s1',
        name: 'Cover',
        elements: [
          el('p101-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0a0d14', locked: true }),
          el('p101-s1-img', 'image', 0, 0, 1920, 1080, { src: PHOTOS[101], locked: true }),
          el('p101-s1-scrim', 'rect', 0, 0, 1920, 1080, { fill: 'linear-gradient(to top, rgba(10,13,20,0.95) 0%, rgba(10,13,20,0.4) 55%, rgba(10,13,20,0.1) 100%)', locked: true }),
          el('p101-s1-tag', 'text', 140, 530, 900, 35, { text: '✦ ARCHITECTURE · STRUCTURAL STUDY VOL. I', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#f59e0b', letterSpacing: 2 }),
          el('p101-s1-title', 'text', 140, 580, 1640, 180, { text: 'ARCHITECTURAL HORIZON', fontSize: 92, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p101-s1-bar', 'rect', 140, 785, 140, 6, { fill: '#f59e0b' }),
          el('p101-s1-desc', 'text', 140, 815, 1300, 80, { text: 'A masterclass in modern spatial minimalism, structural rhythm, and brutalist geometric engineering.', fontSize: 24, fontFamily: 'Inter', fill: '#e2e8f0', lineHeight: 1.5 }),
          el('p101-s1-foot', 'text', 140, 970, 800, 30, { text: 'ORD STUDIO · EDITORIAL MONOGRAPH · 2026', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', fill: '#94a3b8' })
        ]
      },
      {
        id: 'p101-s2',
        name: 'Agenda & Structural Chapters',
        elements: [
          el('p101-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0a0d14', locked: true }),
          el('p101-s2-photo', 'image', 0, 0, 840, 1080, { src: PHOTOS[101], locked: true }),
          el('p101-s2-overlay', 'rect', 600, 0, 240, 1080, { fill: 'linear-gradient(to right, transparent, #0a0d14)', locked: true }),
          el('p101-s2-head', 'text', 920, 120, 880, 60, { text: 'KEY DISCUSSIONS & AGENDA', fontSize: 48, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p101-s2-line', 'rect', 920, 195, 120, 4, { fill: '#f59e0b' }),
          el('p101-s2-item1', 'text', 920, 260, 860, 100, { text: '01 / SPATIAL TENSION & VOID GEOMETRIES\nInvestigation of volumetric negative space across urban high-density towers.', fontSize: 22, fontFamily: 'Inter', fontWeight: '700', fill: '#ffffff', lineHeight: 1.6 }),
          el('p101-s2-item2', 'text', 920, 390, 860, 100, { text: '02 / MATERIAL PURITY & CAST CONCRETE\nTextural authenticity under changing natural light and climatic exposure.', fontSize: 22, fontFamily: 'Inter', fontWeight: '700', fill: '#ffffff', lineHeight: 1.6 }),
          el('p101-s2-item3', 'text', 920, 520, 860, 100, { text: '03 / ENVIRONMENTAL THERMAL RESILIENCE\nIntegrated aerodynamic facades reducing wind shear and mechanical HVAC loads.', fontSize: 22, fontFamily: 'Inter', fontWeight: '700', fill: '#ffffff', lineHeight: 1.6 }),
          el('p101-s2-item4', 'text', 920, 650, 860, 100, { text: '04 / THE COMPLETED METROPOLITAN MONOGRAPH\nPhotographic documentation of 12 landmark structures completed through 2026.', fontSize: 22, fontFamily: 'Inter', fontWeight: '700', fill: '#ffffff', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p101-s3',
        name: 'Architectural Philosophy',
        elements: [
          el('p101-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0a0d14', locked: true }),
          el('p101-s3-photo', 'image', 0, 0, 1920, 1080, { src: PHOTOS[101], opacity: 0.18, locked: true }),
          el('p101-s3-quote', 'text', 180, 300, 1560, 240, { text: '“Architecture is the learned game, correct and magnificent, of forms assembled in the light.”', fontSize: 60, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', alignment: 'center', lineHeight: 1.25 }),
          el('p101-s3-line', 'rect', 880, 580, 160, 4, { fill: '#f59e0b' }),
          el('p101-s3-author', 'text', 200, 620, 1520, 40, { text: 'LE CORBUSIER · TOWARDS A NEW ARCHITECTURE', fontSize: 22, fontFamily: 'Inter', fontWeight: '800', fill: '#f59e0b', alignment: 'center', letterSpacing: 2 })
        ]
      },
      {
        id: 'p101-s4',
        name: 'Structural Performance Benchmarks',
        elements: [
          el('p101-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0a0d14', locked: true }),
          el('p101-s4-h', 'text', 140, 110, 1200, 50, { text: 'MEASURABLE STRUCTURAL VELOCITY', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p101-s4-sub', 'text', 140, 175, 1200, 35, { text: 'Quantitative engineering benchmarks verified across skyscraper envelope deployments.', fontSize: 20, fontFamily: 'Inter', fill: '#94a3b8' }),
          el('p101-s4-n1', 'text', 140, 320, 480, 120, { text: '-42%', fontSize: 108, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#f59e0b' }),
          el('p101-s4-t1', 'text', 140, 460, 480, 40, { text: 'EMBODIED CARBON FOOTPRINT', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p101-s4-d1', 'text', 140, 510, 480, 150, { text: 'Recycled pozzolanic cement binders outperforming international carbon reduction targets.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 }),
          el('p101-s4-n2', 'text', 710, 320, 480, 120, { text: '99.4%', fontSize: 108, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p101-s4-t2', 'text', 710, 460, 480, 40, { text: 'SOLAR ENVELOPE HARVEST', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p101-s4-d2', 'text', 710, 510, 480, 150, { text: 'Integrated photovoltaic glazing generating sustained base load electricity for internal systems.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 }),
          el('p101-s4-n3', 'text', 1280, 320, 480, 120, { text: '3.4x', fontSize: 108, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#f59e0b' }),
          el('p101-s4-t3', 'text', 1280, 460, 480, 40, { text: 'ACOUSTIC DAMPENING', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p101-s4-d3', 'text', 1280, 510, 480, 150, { text: 'Triple-layer acoustic facade isolating exterior ambient highway noise below 32 decibels.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p101-s5',
        name: 'Landmark Commissions',
        elements: [
          el('p101-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0a0d14', locked: true }),
          el('p101-s5-h', 'text', 140, 100, 1200, 50, { text: 'LANDMARK COMMISSIONS & REALIZATION', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p101-s5-img', 'image', 140, 240, 1000, 680, { src: PHOTOS[101], borderRadius: 16 }),
          el('p101-s5-card-h', 'text', 1200, 270, 580, 50, { text: 'Helios Tower · 64 Floors', fontSize: 34, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p101-s5-card-meta', 'text', 1200, 330, 580, 30, { text: 'COMPLETED DECEMBER 2025 · ROTTERDAM', fontSize: 16, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#f59e0b' }),
          el('p101-s5-card-p', 'text', 1200, 390, 580, 340, { text: 'The Helios Tower demonstrates that architectural grandeur and rigorous climate efficiency are mutually reinforcing. Featuring an ultra-slender core and cantilevered sky-gardens, the building provides 84,000 square meters of high-density creative workspace with zero mechanical air conditioning required during spring and autumn seasons.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p101-s6',
        name: 'Closing',
        elements: [
          el('p101-s6-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0a0d14', locked: true }),
          el('p101-s6-tag', 'text', 140, 280, 900, 35, { text: '✦ ARCHITECTURAL HORIZON · MONOGRAPH ARCHIVE', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#f59e0b', letterSpacing: 2 }),
          el('p101-s6-title', 'text', 140, 340, 1600, 160, { text: 'BUILDING FOR THE COMING CENTURY', fontSize: 80, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.1 }),
          el('p101-s6-bar', 'rect', 140, 530, 140, 6, { fill: '#f59e0b' }),
          el('p101-s6-sub', 'text', 140, 570, 1300, 100, { text: 'Inquiries regarding commissioned monographs and architectural masterplanning:\nmonographs@ordstudio.ai · +31 (0)20 894 2000', fontSize: 24, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 102: Alpine Expedition & Wild Lands (Emerald Forest & High Glacial Valleys)
  decks.push({
    id: 102,
    name: 'Alpine Expedition & Wild Lands',
    title: 'ALPINE EXPEDITION & WILD LANDS',
    description: 'Scientific field study documentation across high-altitude glacial valleys and extreme arctic wilderness.',
    category: 'Presentation',
    subcategory: 'Nature & Science',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['nature', 'expedition', 'glacier', 'alpine'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 7890,
    views: 82000,
    gradient: 'linear-gradient(135deg, #032014 0%, #10b981 100%)',
    fonts: ['Space Grotesk', 'Inter'],
    colors: ['#032014', '#10b981', '#ffffff', '#cbd5e1'],
    slides: [
      {
        id: 'p102-s1',
        name: 'Cover',
        elements: [
          el('p102-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#032014', locked: true }),
          el('p102-s1-tag', 'text', 100, 60, 1720, 28, { text: '✦ ARCTIC SURVEY · HIGH-LATITUDE FIELD REPORT · 68.3582° N, 18.7842° E', fontSize: 16, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#10b981', letterSpacing: 3 }),
          el('p102-s1-title', 'text', 100, 100, 1720, 100, { text: 'ALPINE EXPEDITION & WILD LANDS', fontSize: 86, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p102-s1-img', 'image', 100, 220, 980, 760, { src: PHOTOS[102], borderRadius: 24, locked: true }),
          el('p102-s1-dossier', 'rect', 1120, 220, 700, 760, { fill: '#052e16', borderRadius: 20 }),
          el('p102-s1-dh', 'text', 1170, 270, 600, 40, { text: 'SUB-ZERO CRYOSPHERIC TELEMETRY', fontSize: 22, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#10b981' }),
          el('p102-s1-dp', 'text', 1170, 330, 600, 220, { text: 'Documenting the rapid transformation of glacial ice shelves across high-altitude northern valleys.\n\nOur research team operates autonomous sensor arrays and collects deep ice core cylinders to reconstruct paleoclimatic snowfall patterns spanning four millennia.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7 }),
          el('p102-s1-dv1', 'text', 1170, 580, 600, 50, { text: '-34.8°C GROUND MINIMUM', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p102-s1-dd1', 'text', 1170, 635, 600, 30, { text: 'Lowest temperature recorded at Base Camp North', fontSize: 15, fontFamily: 'Inter', fill: '#94a3b8' }),
          el('p102-s1-dv2', 'text', 1170, 700, 600, 50, { text: '2,400M HEADWALL ELEVATION', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#10b981' }),
          el('p102-s1-dd2', 'text', 1170, 755, 600, 30, { text: 'Upper glacial cirque ice extraction zone #04', fontSize: 15, fontFamily: 'Inter', fill: '#94a3b8' }),
          el('p102-s1-foot', 'text', 1170, 890, 600, 30, { text: 'SCIENTIFIC MONOGRAPH ARCHIVE · ABISKO 2026', fontSize: 15, fontFamily: 'IBM Plex Mono', fill: '#10b981' })
        ]
      },
      {
        id: 'p102-s2',
        name: 'Field Methodology',
        elements: [
          el('p102-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#032014', locked: true }),
          el('p102-s2-h', 'text', 140, 110, 1200, 50, { text: 'FIELD SURVEY METHODOLOGY & EQUIPMENT', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p102-s2-b1', 'text', 140, 280, 780, 120, { text: '01 / CRYOSPHERIC ICE CORE CORING\nDrilling 120-meter vertical core samples to reconstruct 4,000 years of paleoclimatic snowfall records.', fontSize: 22, fontFamily: 'Inter', fontWeight: '700', fill: '#ffffff', lineHeight: 1.6 }),
          el('p102-s2-b2', 'text', 140, 440, 780, 120, { text: '02 / DRONE MULTISPECTRAL ALBEDO MAPPING\nUAV passes tracking glacier reflective index shifts during peak summer solar radiation.', fontSize: 22, fontFamily: 'Inter', fontWeight: '700', fill: '#ffffff', lineHeight: 1.6 }),
          el('p102-s2-b3', 'text', 140, 600, 780, 120, { text: '03 / MICROBIAL EXTREMOPHILE SEQUENCING\nOn-site DNA sequencing of cryophilic bacterial enclaves surviving within sub-ice melt channels.', fontSize: 22, fontFamily: 'Inter', fontWeight: '700', fill: '#ffffff', lineHeight: 1.6 }),
          el('p102-s2-img', 'image', 1020, 240, 760, 600, { src: PHOTOS[102], borderRadius: 16 })
        ]
      },
      {
        id: 'p102-s3',
        name: 'Observational Data',
        elements: [
          el('p102-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#032014', locked: true }),
          el('p102-s3-h', 'text', 140, 110, 1200, 50, { text: 'RECORDED FIELD TELEMETRY', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p102-s3-n1', 'text', 140, 280, 480, 110, { text: '-34.8°C', fontSize: 96, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#10b981' }),
          el('p102-s3-t1', 'text', 140, 410, 480, 40, { text: 'Mean Winter Temperature', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p102-s3-d1', 'text', 140, 460, 480, 150, { text: 'Lowest ground weather station recording taken at Base Camp North.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 }),
          el('p102-s3-n2', 'text', 710, 280, 480, 110, { text: '1,420mm', fontSize: 96, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p102-s3-t2', 'text', 710, 410, 480, 40, { text: 'Annual Snow Water Equiv.', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p102-s3-d2', 'text', 710, 460, 480, 150, { text: 'Water equivalent accumulation measured via isotopic neutron telemetry.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 }),
          el('p102-s3-n3', 'text', 1280, 280, 480, 110, { text: '98.2%', fontSize: 96, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#10b981' }),
          el('p102-s3-t3', 'text', 1280, 410, 480, 40, { text: 'Glacier Mass Retention', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p102-s3-d3', 'text', 1280, 460, 480, 150, { text: 'Retention index across shaded north-facing alpine headwalls.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p102-s4',
        name: 'The Ridgeline Traverse',
        elements: [
          el('p102-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#032014', locked: true }),
          el('p102-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[102], borderRadius: 20 }),
          el('p102-s4-title', 'text', 140, 740, 1640, 60, { text: 'THE CONTINENTAL RIDGELINE EXPEDITION TRAVERSE', fontSize: 44, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p102-s4-desc', 'text', 140, 810, 1640, 120, { text: 'A 420-kilometer unsupported ski traversal across the Scandinavian mountain backbone. Teams maintained self-sufficiency across 28 continuous days without fossil-fuel resupply or motorized transport.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p102-s5',
        name: 'Closing',
        elements: [
          el('p102-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#032014', locked: true }),
          el('p102-s5-tag', 'text', 140, 280, 800, 35, { text: '✦ FIELD RESEARCH DATA ARCHIVE', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#10b981', letterSpacing: 2 }),
          el('p102-s5-title', 'text', 140, 340, 1600, 160, { text: 'PRESERVING EARTH’S CRITICAL FRONTIERS', fontSize: 80, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.1 }),
          el('p102-s5-bar', 'rect', 140, 530, 160, 6, { fill: '#10b981' }),
          el('p102-s5-sub', 'text', 140, 580, 1200, 100, { text: 'Full dataset repositories, GIS shapefiles, and raw core spectrometry available at:\nexpedition.arctic-institute.org · expedition@ordstudio.ai', fontSize: 24, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 103: Michelin Culinary Gastronomy (Warm Cream #faf7f2, Umber & Serif Elegance)
  decks.push({
    id: 103,
    name: 'Culinary Heritage & Gastronomy',
    title: 'THE CULINARY ARCHIVE',
    description: 'Artisanal farm-to-table culinary documentation, biodynamic agriculture, and Michelin masterclass techniques.',
    category: 'Presentation',
    subcategory: 'Culinary',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['gastronomy', 'culinary', 'artisan', 'editorial'],
    author: 'ORD Studio',
    premium: false,
    isPublished: true,
    likes: 8140,
    views: 86000,
    gradient: 'linear-gradient(135deg, #faf7f2 0%, #b45309 100%)',
    fonts: ['Cormorant Garamond', 'Cinzel', 'Inter'],
    colors: ['#faf7f2', '#854d0e', '#292524', '#78716c'],
    slides: [
      {
        id: 'p103-s1',
        name: 'Cover',
        elements: [
          el('p103-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#faf7f2', locked: true }),
          el('p103-s1-tag', 'text', 100, 90, 1720, 30, { text: '✦ THE CULINARY ARCHIVE · HAUTE GASTRONOMIE · VOL. IV', fontSize: 18, fontFamily: 'Cinzel', fontWeight: '700', fill: '#854d0e', alignment: 'center', letterSpacing: 3 }),
          el('p103-s1-title', 'text', 100, 140, 1720, 110, { text: 'THE ANATOMY OF TASTE & FIRE', fontSize: 80, fontFamily: 'Cormorant Garamond', fontWeight: '700', fill: '#292524', alignment: 'center', lineHeight: 1.05 }),
          el('p103-s1-img', 'image', 360, 275, 1200, 560, { src: PHOTOS[103], borderRadius: 16, locked: true }),
          el('p103-s1-desc', 'text', 200, 865, 1520, 60, { text: 'A seasonal masterclass exploring heirloom fermentation, native wood smoking, and biodynamic terroir.', fontSize: 24, fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fill: '#57534e', alignment: 'center', lineHeight: 1.5 }),
          el('p103-s1-foot', 'text', 200, 945, 1520, 30, { text: 'MICHELIN BIODYNAMIC ARCHIVE · SAN FRANCISCO · 2026', fontSize: 15, fontFamily: 'Inter', fontWeight: '700', fill: '#a8a29e', alignment: 'center' })
        ]
      },
      {
        id: 'p103-s2',
        name: 'The Four Pillars',
        elements: [
          el('p103-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#faf7f2', locked: true }),
          el('p103-s2-h', 'text', 140, 110, 1400, 60, { text: 'PILLARS OF CONTEMPORARY GASTRONOMY', fontSize: 46, fontFamily: 'Cormorant Garamond', fontWeight: '700', fill: '#292524' }),
          el('p103-s2-c1', 'text', 140, 240, 380, 300, { text: 'I. LIVING FERMENTATION\nCultivating indigenous koji, wild sourdough starters, and lacto-fermented orchard fruits to unlock umami complexity without industrial seasoning.', fontSize: 20, fontFamily: 'Inter', fill: '#44403c', lineHeight: 1.7 }),
          el('p103-s2-c2', 'text', 560, 240, 380, 300, { text: 'II. OPEN WOOD HEARTH\nCooking exclusively with aged Japanese white oak (Binchotan) and coastal applewood to impart radiant, soot-free infrared caramelization.', fontSize: 20, fontFamily: 'Inter', fill: '#44403c', lineHeight: 1.7 }),
          el('p103-s2-c3', 'text', 980, 240, 380, 300, { text: 'III. SINGLE-VALLEY TERROIR\nEvery root, allium, and brassica harvested within four hours of service from certified organic coastal alluvial soils.', fontSize: 20, fontFamily: 'Inter', fill: '#44403c', lineHeight: 1.7 }),
          el('p103-s2-c4', 'text', 1400, 240, 380, 300, { text: 'IV. ZERO-WASTE BROTHS\nConverting all vegetable trimmings, shellfish carapaces, and roasted marrow bones into deeply reduced, crystalline glazes.', fontSize: 20, fontFamily: 'Inter', fill: '#44403c', lineHeight: 1.7 }),
          el('p103-s2-img', 'image', 140, 580, 1640, 380, { src: PHOTOS[103], borderRadius: 14 })
        ]
      },
      {
        id: 'p103-s3',
        name: 'Culinary Specifications',
        elements: [
          el('p103-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#faf7f2', locked: true }),
          el('p103-s3-head', 'text', 140, 120, 1400, 50, { text: 'SEASONAL TASTING MENU ARCHITECTURE', fontSize: 46, fontFamily: 'Cormorant Garamond', fontWeight: '700', fill: '#292524' }),
          el('p103-s3-n1', 'text', 140, 280, 480, 100, { text: '14 Courses', fontSize: 72, fontFamily: 'Cormorant Garamond', fontWeight: '700', fill: '#854d0e' }),
          el('p103-s3-t1', 'text', 140, 390, 480, 35, { text: 'Degustation Journey', fontSize: 22, fontFamily: 'Cinzel', fontWeight: '700', fill: '#292524' }),
          el('p103-s3-d1', 'text', 140, 440, 480, 150, { text: 'Choreographed sensory progression from high-acid maritime bites to deep woodland proteins.', fontSize: 18, fontFamily: 'Inter', fill: '#57534e', lineHeight: 1.6 }),
          el('p103-s3-n2', 'text', 710, 280, 480, 100, { text: '100% Wild', fontSize: 72, fontFamily: 'Cormorant Garamond', fontWeight: '700', fill: '#292524' }),
          el('p103-s3-t2', 'text', 710, 390, 480, 35, { text: 'Artisanal Sourcing', fontSize: 22, fontFamily: 'Cinzel', fontWeight: '700', fill: '#292524' }),
          el('p103-s3-d2', 'text', 710, 440, 480, 150, { text: 'Line-caught Pacific king salmon, hand-dived Monterey sea urchin, and foraged matsutake mushrooms.', fontSize: 18, fontFamily: 'Inter', fill: '#57534e', lineHeight: 1.6 }),
          el('p103-s3-n3', 'text', 1280, 280, 480, 100, { text: '3 Michelin', fontSize: 72, fontFamily: 'Cormorant Garamond', fontWeight: '700', fill: '#854d0e' }),
          el('p103-s3-t3', 'text', 1280, 390, 480, 35, { text: 'Global Guide Accolade', fontSize: 22, fontFamily: 'Cinzel', fontWeight: '700', fill: '#292524' }),
          el('p103-s3-d3', 'text', 1280, 440, 480, 150, { text: 'Recognized for culinary innovation, sustainability stewardship, and service choreography.', fontSize: 18, fontFamily: 'Inter', fill: '#57534e', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p103-s4',
        name: 'The Dining Room',
        elements: [
          el('p103-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#faf7f2', locked: true }),
          el('p103-s4-img', 'image', 140, 120, 960, 780, { src: PHOTOS[103], borderRadius: 16 }),
          el('p103-s4-title', 'text', 1160, 240, 620, 100, { text: 'INTIMATE 24-SEAT AMPHITHEATER', fontSize: 44, fontFamily: 'Cormorant Garamond', fontWeight: '700', fill: '#292524', lineHeight: 1.15 }),
          el('p103-s4-line', 'rect', 1160, 360, 120, 2, { fill: '#854d0e' }),
          el('p103-s4-desc', 'text', 1160, 400, 620, 320, { text: 'Guests sit along an unbroken slab of 400-year-old rescued coastal redwood, directly observing our brigade of twelve chefs assemble every composition in silent synchrony.\n\nLighting dimmers simulate natural twilight, guiding dining rhythms across three and a half contemplative hours.', fontSize: 22, fontFamily: 'Inter', fill: '#57534e', lineHeight: 1.8 })
        ]
      },
      {
        id: 'p103-s5',
        name: 'Closing',
        elements: [
          el('p103-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#faf7f2', locked: true }),
          el('p103-s5-tag', 'text', 140, 280, 1640, 30, { text: '✦ PRIVATE SALON & CHEF\'S TABLE COMMISSIONS', fontSize: 18, fontFamily: 'Cinzel', fontWeight: '700', fill: '#854d0e', alignment: 'center', letterSpacing: 3 }),
          el('p103-s5-title', 'text', 140, 340, 1640, 100, { text: 'THE MEMORY OF AN UNFORGETTABLE EVENING', fontSize: 72, fontFamily: 'Cormorant Garamond', fontWeight: '700', fill: '#292524', alignment: 'center' }),
          el('p103-s5-sub', 'text', 140, 480, 1640, 80, { text: 'reservations@culinaryarchive.org · masterclass@ordstudio.ai\nPresidio Dining Pavilion · San Francisco, CA', fontSize: 22, fontFamily: 'Inter', fill: '#78716c', alignment: 'center', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 104: Tokyo Nocturne 35mm Cyberpunk Photography (Dark Midnight #05050a & Neon Violet)
  decks.push({
    id: 104,
    name: 'Tokyo Nocturne 35mm Photography',
    title: 'TOKYO NOCTURNE 35MM',
    description: '35mm grain documentary of Shinjuku neon alleys, rain-slicked asphalt, and nocturnal urban loneliness.',
    category: 'Presentation',
    subcategory: 'Photography',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['tokyo', 'photography', 'cyberpunk', 'neon', 'street'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 9230,
    views: 97000,
    gradient: 'linear-gradient(135deg, #05050a 0%, #ec4899 100%)',
    fonts: ['Space Grotesk', 'IBM Plex Mono', 'Inter'],
    colors: ['#05050a', '#ec4899', '#ffffff', '#64748b'],
    slides: [
      {
        id: 'p104-s1',
        name: 'Cover',
        elements: [
          el('p104-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#05050a', locked: true }),
          el('p104-s1-strip', 'rect', 100, 80, 1720, 520, { fill: '#0e0e18', borderRadius: 20 }),
          el('p104-s1-img', 'image', 120, 100, 1100, 480, { src: PHOTOS[104], borderRadius: 14, locked: true }),
          el('p104-s1-side', 'rect', 1250, 100, 550, 480, { fill: '#161626', borderRadius: 14 }),
          el('p104-s1-side-tag', 'text', 1280, 130, 490, 30, { text: 'LEICA M6 // 35MM SUMMILUX', fontSize: 15, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#ec4899' }),
          el('p104-s1-side-h', 'text', 1280, 175, 490, 80, { text: 'KODAK PORTRA 800 (PUSHED +2)', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p104-s1-side-d', 'text', 1280, 270, 490, 280, { text: 'Photographed handheld between 02:00 and 05:00 in Shinjuku Golden Gai and Kabukicho during torrential summer monsoon downpours.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6 }),
          el('p104-s1-title', 'text', 100, 640, 1720, 180, { text: 'TOKYO NOCTURNE: RAIN & SODIUM VAPOR', fontSize: 84, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p104-s1-foot', 'text', 100, 840, 1720, 40, { text: 'EXPOSURE: 1/30s @ f/1.4 · ISO 3200 · CHEMICAL GRAIN MONOGRAPH · TOKYO 2026', fontSize: 16, fontFamily: 'IBM Plex Mono', fill: '#ec4899' })
        ]
      },
      {
        id: 'p104-s2',
        name: 'The Sodium Glow',
        elements: [
          el('p104-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#05050a', locked: true }),
          el('p104-s2-h', 'text', 140, 120, 1200, 60, { text: 'CHROMATIC REFLECTIONS ON WET ASPHALT', fontSize: 48, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p104-s2-b1', 'text', 140, 240, 780, 360, { text: 'When the monsoon rain hits the narrow back-alleys of Shinjuku, the entire ground surface turns into an anamorphic mirror. Neon kanji signs bleed into deep puddles, illuminating solitary umbrella silhouettes in saturated magenta and cyan.\n\nShooting at ISO 3200 preserves authentic film halation—the warm amber glow encircling neon tubes that digital sensors sanitize away.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p104-s2-img', 'image', 980, 220, 800, 680, { src: PHOTOS[104], borderRadius: 16 })
        ]
      },
      {
        id: 'p104-s3',
        name: 'Technical Exposure Specs',
        elements: [
          el('p104-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#05050a', locked: true }),
          el('p104-s3-head', 'text', 140, 120, 1400, 50, { text: 'OPTICAL EXPOSURE PARAMETERS', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p104-s3-n1', 'text', 140, 280, 480, 110, { text: 'f/1.4', fontSize: 96, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#ec4899' }),
          el('p104-s3-t1', 'text', 140, 410, 480, 35, { text: 'Aperture Wide Open', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p104-s3-d1', 'text', 140, 460, 480, 160, { text: 'Razor-thin depth of field isolating rain droplets against soft neon bokeh spheres.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 }),
          el('p104-s3-n2', 'text', 710, 280, 480, 110, { text: '1/30s', fontSize: 96, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#ffffff' }),
          el('p104-s3-t2', 'text', 710, 410, 480, 35, { text: 'Handheld Shutter Speed', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p104-s3-d2', 'text', 710, 460, 480, 160, { text: 'Embracing slight motion trails of late-night pedestrians crossing foggy intersections.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 }),
          el('p104-s3-n3', 'text', 1280, 280, 480, 110, { text: '3200', fontSize: 96, fontFamily: 'IBM Plex Mono', fontWeight: '700', fill: '#ec4899' }),
          el('p104-s3-t3', 'text', 1280, 410, 480, 35, { text: 'Pushed Chemical ISO', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p104-s3-d3', 'text', 1280, 460, 480, 160, { text: 'Developed in custom temperature baths for pronounced cinematic grain structure.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p104-s4',
        name: 'The Golden Gai Archive',
        elements: [
          el('p104-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#05050a', locked: true }),
          el('p104-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[104], borderRadius: 16 }),
          el('p104-s4-title', 'text', 140, 750, 1640, 50, { text: 'THE PRESERVATION OF POST-WAR LOW-RISE WOODEN DENSITY', fontSize: 38, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p104-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Two hundred miniature bars crammed into six pedestrian alleyways, untouched by modern skyscraper redevelopment. A fragile urban ecosystem surviving under the shadow of modern glass monoliths.', fontSize: 20, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p104-s5',
        name: 'Closing',
        elements: [
          el('p104-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#05050a', locked: true }),
          el('p104-s5-tag', 'text', 140, 280, 800, 30, { text: '✦ LIMITED EDITION SILVER GELATIN PRINTS', fontSize: 18, fontFamily: 'IBM Plex Mono', fill: '#ec4899' }),
          el('p104-s5-title', 'text', 140, 330, 1600, 160, { text: 'SHADOWS NEVER TRULY SLEEP.', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff' }),
          el('p104-s5-bar', 'rect', 140, 520, 160, 6, { fill: '#ec4899' }),
          el('p104-s5-sub', 'text', 140, 570, 1200, 80, { text: 'Exhibition catalog and darkroom print inquiries:\ngallery@tokyonocturne.jp · Ginza, Tokyo · Paris', fontSize: 24, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 105: Swiss Typography & Design Systems (Rigorous Mathematical Grid)
  decks.push({
    id: 105,
    name: 'Swiss Typography & Design Systems',
    title: 'SWISS DESIGN SYSTEM',
    description: 'A rigorous manifesto on mathematical grid discipline, asymmetric hierarchy, and sans-serif typography.',
    category: 'Presentation',
    subcategory: 'Typography',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['swiss', 'typography', 'minimalism', 'grid'],
    author: 'ORD Studio',
    premium: false,
    isPublished: true,
    likes: 8520,
    views: 89000,
    gradient: 'linear-gradient(135deg, #f4f4f5 0%, #ef4444 100%)',
    fonts: ['Space Grotesk', 'Inter'],
    colors: ['#f4f4f5', '#ef4444', '#09090b', '#71717a'],
    slides: [
      {
        id: 'p105-s1',
        name: 'Cover',
        elements: [
          el('p105-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#f4f4f5', locked: true }),
          el('p105-s1-redbar', 'rect', 120, 80, 240, 24, { fill: '#ef4444' }),
          el('p105-s1-num', 'text', 120, 120, 400, 70, { text: '№ 01 / 2026', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#18181b', letterSpacing: 2 }),
          el('p105-s1-title', 'text', 120, 200, 1000, 320, { text: 'SWISS\nINTERNATIONAL\nDESIGN SYSTEM', fontSize: 96, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#09090b', lineHeight: 0.95 }),
          el('p105-s1-desc', 'text', 120, 560, 840, 160, { text: 'A rigorous manifesto on mathematical grid discipline, asymmetric hierarchy, objective visual clarity, and sans-serif typography.', fontSize: 24, fontFamily: 'Inter', fill: '#52525b', lineHeight: 1.6 }),
          el('p105-s1-meta', 'text', 120, 920, 800, 30, { text: 'INTERNATIONAL TYPOGRAPHIC STYLE · BASEL & ZÜRICH ARCHIVE', fontSize: 16, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#71717a' }),
          el('p105-s1-img', 'image', 1140, 80, 660, 920, { src: PHOTOS[105], locked: true })
        ]
      },
      {
        id: 'p105-s2',
        name: 'The Modular Grid',
        elements: [
          el('p105-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#f4f4f5', locked: true }),
          el('p105-s2-h', 'text', 120, 100, 1200, 60, { text: 'THE MATHEMATICAL GRID AS FOUNDATION', fontSize: 48, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#09090b' }),
          el('p105-s2-b1', 'text', 120, 220, 520, 320, { text: 'Order is not the absence of tension; it is the deliberate orchestration of visual weight across proportional spatial divisions.\n\nEvery element aligns strictly to standardized column modules, eliminating decorative caprice in favor of uncompromised legibility.', fontSize: 20, fontFamily: 'Inter', fill: '#3f3f46', lineHeight: 1.8 }),
          el('p105-s2-b2', 'text', 700, 220, 520, 320, { text: 'Key principles:\n• Asymmetric balance across vertical axes\n• Flush-left, ragged-right typography\n• Extreme typographic contrast (96px vs 16px)\n• Primary color accents used exclusively for navigational emphasis', fontSize: 18, fontFamily: 'Inter', fontWeight: '600', fill: '#18181b', lineHeight: 1.9 }),
          el('p105-s2-img', 'image', 1280, 220, 520, 680, { src: PHOTOS[105] })
        ]
      },
      {
        id: 'p105-s3',
        name: 'Typographic Contrast',
        elements: [
          el('p105-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#09090b', locked: true }),
          el('p105-s3-huge', 'text', 120, 180, 1680, 320, { text: 'LEGIBILITY\nIS SUPREME.', fontSize: 130, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 0.9 }),
          el('p105-s3-red', 'rect', 120, 560, 200, 8, { fill: '#ef4444' }),
          el('p105-s3-sub', 'text', 120, 620, 1400, 140, { text: '“The design should be invisible. The information must speak without hindrance, emotional embellishment, or arbitrary ornamentation.”', fontSize: 32, fontFamily: 'Inter', fill: '#a1a1aa', lineHeight: 1.5 }),
          el('p105-s3-author', 'text', 120, 800, 800, 30, { text: 'JOSEF MÜLLER-BROCKMANN · 1961', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ef4444', letterSpacing: 2 })
        ]
      },
      {
        id: 'p105-s4',
        name: 'Grid Specifications',
        elements: [
          el('p105-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#f4f4f5', locked: true }),
          el('p105-s4-h', 'text', 120, 120, 1200, 50, { text: 'STANDARDIZED CANONICAL PROPORTIONS', fontSize: 44, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#09090b' }),
          el('p105-s4-n1', 'text', 120, 280, 480, 100, { text: '12-COL', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ef4444' }),
          el('p105-s4-t1', 'text', 120, 390, 480, 35, { text: 'Root Grid Subdivisions', fontSize: 22, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#09090b' }),
          el('p105-s4-d1', 'text', 120, 435, 480, 140, { text: 'Ensures proportional mathematical consistency across desktop, print, and mobile layouts.', fontSize: 18, fontFamily: 'Inter', fill: '#52525b', lineHeight: 1.6 }),
          el('p105-s4-n2', 'text', 700, 280, 480, 100, { text: '8 PT', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#09090b' }),
          el('p105-s4-t2', 'text', 700, 390, 480, 35, { text: 'Baseline Grid Cadence', fontSize: 22, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#09090b' }),
          el('p105-s4-d2', 'text', 700, 435, 480, 140, { text: 'All vertical line heights and margins align strictly to eight-point baseline increments.', fontSize: 18, fontFamily: 'Inter', fill: '#52525b', lineHeight: 1.6 }),
          el('p105-s4-n3', 'text', 1280, 280, 480, 100, { text: '1.414', fontSize: 88, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ef4444' }),
          el('p105-s4-t3', 'text', 1280, 390, 480, 35, { text: 'DIN Silver Ratio', fontSize: 22, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#09090b' }),
          el('p105-s4-d3', 'text', 1280, 435, 480, 140, { text: 'Governs page aspect scaling maintaining geometric similitude upon fold or division.', fontSize: 18, fontFamily: 'Inter', fill: '#52525b', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p105-s5',
        name: 'Closing',
        elements: [
          el('p105-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#09090b', locked: true }),
          el('p105-s5-tag', 'text', 120, 260, 800, 30, { text: '✦ ARCHIVE SPECIFICATIONS', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ef4444', letterSpacing: 2 }),
          el('p105-s5-title', 'text', 120, 310, 1680, 160, { text: 'THE PERMANENCE OF RIGOR', fontSize: 84, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05 }),
          el('p105-s5-bar', 'rect', 120, 500, 140, 6, { fill: '#ef4444' }),
          el('p105-s5-sub', 'text', 120, 550, 1200, 80, { text: 'swiss-archive@ordstudio.ai · typography@ordstudio.ai\nZürich Design Archive & Typography Institute', fontSize: 24, fontFamily: 'Inter', fill: '#a1a1aa', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 106: Scandinavian Interior & Lighting (Warm Minimalist Timber)
  decks.push({
    id: 106,
    name: 'Scandinavian Interior & Lighting',
    title: 'SCANDINAVIAN INTERIORS',
    description: 'Warm minimalism, organic timber materiality, diffused northern daylight, and timeless Nordic lighting fixtures.',
    category: 'Presentation',
    subcategory: 'Interior',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['interior', 'scandinavian', 'minimal', 'design'],
    author: 'ORD Studio',
    premium: false,
    isPublished: true,
    likes: 7420,
    views: 76000,
    gradient: 'linear-gradient(135deg, #fbfbfa 0%, #d4d4d8 100%)',
    fonts: ['Playfair Display', 'Inter'],
    colors: ['#fbfbfa', '#27272a', '#71717a', '#a1a1aa'],
    slides: [
      {
        id: 'p106-s1',
        name: 'Cover',
        elements: [
          el('p106-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#fbfbfa', locked: true }),
          el('p106-s1-border', 'rect', 80, 80, 1760, 920, { fill: 'transparent', stroke: 'rgba(0,0,0,0.14)', strokeWidth: 1, locked: true }),
          el('p106-s1-tag', 'text', 200, 140, 1520, 30, { text: '✦ NORDIC ARCHITECTURAL STUDY · STOCKHOLM', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', fill: '#71717a', letterSpacing: 3, align: 'center' }),
          el('p106-s1-title', 'text', 200, 190, 1520, 160, { text: 'Quiet Forms: Light & Timber Materiality', fontSize: 82, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#18181b', align: 'center' }),
          el('p106-s1-sub', 'text', 360, 365, 1200, 50, { text: 'An inquiry into how northern daylight shapes living spaces, pale birch, and raw stone.', fontSize: 20, fontFamily: 'Inter', fill: '#52525b', align: 'center' }),
          el('p106-s1-img', 'image', 360, 440, 1200, 500, { src: PHOTOS[106], borderRadius: 16, locked: true })
        ]
      },
      {
        id: 'p106-s2',
        name: 'Light as Material',
        elements: [
          el('p106-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#fbfbfa', locked: true }),
          el('p106-s2-h', 'text', 140, 120, 1200, 60, { text: 'HARNESSING DIFFUSED NORTHERN ILLUMINATION', fontSize: 46, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#18181b' }),
          el('p106-s2-b1', 'text', 140, 260, 780, 320, { text: 'In Scandinavian design, illumination is treated not as a utility, but as an emotional substance. Deep window reveals amplify indirect sky light, while warm-dim fixtures cast soft pools of intimacy across gathering tables.\n\nThe resulting atmosphere nurtures tranquility, contemplation, and domestic well-being across the long winter months.', fontSize: 22, fontFamily: 'Inter', fill: '#3f3f46', lineHeight: 1.8 }),
          el('p106-s2-img', 'image', 1000, 240, 780, 680, { src: PHOTOS[106], borderRadius: 12 })
        ]
      },
      {
        id: 'p106-s3',
        name: 'Material Palette',
        elements: [
          el('p106-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#fbfbfa', locked: true }),
          el('p106-s3-h', 'text', 140, 120, 1400, 50, { text: 'HONEST MATERIAL PALETTES & SENSORY BALANCE', fontSize: 44, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#18181b' }),
          el('p106-s3-c1', 'text', 140, 260, 480, 220, { text: 'PALE NORDIC BIRCH\n\nSustainably thinned from managed Swedish forests. Finished exclusively with white-pigmented soap oils that preserve natural wood pores and aroma.', fontSize: 18, fontFamily: 'Inter', fill: '#52525b', lineHeight: 1.7 }),
          el('p106-s3-c2', 'text', 710, 260, 480, 220, { text: 'SWEDISH GOTLAND LIMESTONE\n\nQuarried for centuries on Baltic islands. Hand-honed surfaces showcase ancient fossilized shell inclusions, grounding residential interiors.', fontSize: 18, fontFamily: 'Inter', fill: '#52525b', lineHeight: 1.7 }),
          el('p106-s3-c3', 'text', 1280, 260, 480, 220, { text: 'UNGLAZED CERAMIC TILES\n\nFired in wood kilns with natural ash glaze fluctuations, introducing organic tactile warmth across bath and hearth alcoves.', fontSize: 18, fontFamily: 'Inter', fill: '#52525b', lineHeight: 1.7 }),
          el('p106-s3-img', 'image', 140, 540, 1640, 420, { src: PHOTOS[106], borderRadius: 12 })
        ]
      },
      {
        id: 'p106-s4',
        name: 'Acoustics & Tactile Joinery',
        elements: [
          el('p106-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#fbfbfa', locked: true }),
          el('p106-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[106], borderRadius: 16 }),
          el('p106-s4-title', 'text', 140, 750, 1640, 50, { text: 'NATURAL LINEN BAFFLES & CONCEALED MORTISE JOINERY', fontSize: 38, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#18181b' }),
          el('p106-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Traditional timber dowel joinery allows wood to expand and contract across humid Nordic summers and dry sub-zero winters without chemical glue degradation or metal fastener fatigue.', fontSize: 20, fontFamily: 'Inter', fill: '#52525b', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p106-s5',
        name: 'Closing',
        elements: [
          el('p106-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#fbfbfa', locked: true }),
          el('p106-s5-tag', 'text', 140, 280, 800, 30, { text: '✦ ARCHITECTURAL COLLABORATION & MONOGRAPHS', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', fill: '#71717a', letterSpacing: 3 }),
          el('p106-s5-title', 'text', 140, 330, 1600, 160, { text: 'SERENITY FOUND IN SIMPLE SPACES.', fontSize: 78, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#18181b' }),
          el('p106-s5-sub', 'text', 140, 520, 1200, 80, { text: 'Inquire for residential consultations and monograph distributions:\nscandi-monograph@ordstudio.ai · Stockholm · Oslo · Copenhagen', fontSize: 24, fontFamily: 'Inter', fill: '#52525b', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 107: Contemporary Biennale Gallery (Curatorial Exhibition Space)
  decks.push({
    id: 107,
    name: 'Contemporary Biennale Gallery',
    title: 'VENICE ART BIENNALE',
    description: 'Curatorial exhibition dossier, pavilion architecture, site-specific installations, and international artist retrospectives.',
    category: 'Presentation',
    subcategory: 'Art & Culture',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['art', 'biennale', 'gallery', 'museum', 'curatorial'],
    author: 'ORD Studio',
    premium: true,
    isPublished: true,
    likes: 8120,
    views: 84000,
    gradient: 'linear-gradient(135deg, #18181b 0%, #6366f1 100%)',
    fonts: ['Playfair Display', 'Inter'],
    colors: ['#09090b', '#6366f1', '#ffffff', '#e4e4e7'],
    slides: [
      {
        id: 'p107-s1',
        name: 'Cover',
        elements: [
          el('p107-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#09090b', locked: true }),
          el('p107-s1-img1', 'image', 100, 100, 500, 880, { src: PHOTOS[107], borderRadius: 20, locked: true }),
          el('p107-s1-center', 'rect', 640, 100, 640, 880, { fill: '#18181b', borderRadius: 24 }),
          el('p107-s1-tag', 'text', 680, 140, 560, 30, { text: '61ST INTERNATIONAL ART EXHIBITION', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', fill: '#818cf8', letterSpacing: 3, align: 'center' }),
          el('p107-s1-title', 'text', 680, 200, 560, 320, { text: 'ECHOES OF\nTHE CANAL:\nCURATORIAL\nDOSSIER', fontSize: 80, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05, align: 'center' }),
          el('p107-s1-rule', 'rect', 880, 550, 160, 4, { fill: '#6366f1' }),
          el('p107-s1-desc', 'text', 680, 590, 560, 240, { text: 'Ecological memory, kinetic sculpture, and speculative oceanic cartography across the Arsenale and Giardini pavilions.\n\nCurated by Dr. Elena Vassallo · 2026', fontSize: 20, fontFamily: 'Playfair Display', fill: '#d4d4d8', lineHeight: 1.7, align: 'center' }),
          el('p107-s1-foot', 'text', 680, 910, 560, 30, { text: 'GOLDEN LION JURY PROCEEDINGS', fontSize: 15, fontFamily: 'Inter', fill: '#818cf8', align: 'center' }),
          el('p107-s1-img2', 'image', 1320, 100, 500, 880, { src: PHOTOS[107], borderRadius: 20, locked: true })
        ]
      },
      {
        id: 'p107-s2',
        name: 'Curatorial Premise',
        elements: [
          el('p107-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#09090b', locked: true }),
          el('p107-s2-h', 'text', 140, 120, 1400, 60, { text: 'THE TENSION BETWEEN WATER AND ARCHITECTURE', fontSize: 46, fontFamily: 'Playfair Display', fontWeight: '800', fill: '#ffffff' }),
          el('p107-s2-b1', 'text', 140, 240, 780, 360, { text: 'In an era of accelerating climate transformation, Venice stands as an enduring paradox: a monument of classical human ambition permanently suspended above rising tides.\n\nThe 2026 Biennale brings together monumental spatial interventions that dismantle the barrier between spectator and tide, utilizing porous basalt, responsive bio-luminescent algae, and sonic underwater hydrophone arrays.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8 }),
          el('p107-s2-img', 'image', 980, 220, 800, 680, { src: PHOTOS[107], borderRadius: 16 })
        ]
      },
      {
        id: 'p107-s3',
        name: 'Pavilion Highlights',
        elements: [
          el('p107-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#09090b', locked: true }),
          el('p107-s3-head', 'text', 140, 120, 1400, 50, { text: 'NOTABLE NATIONAL PAVILIONS & JURY AWARDS', fontSize: 46, fontFamily: 'Playfair Display', fontWeight: '800', fill: '#ffffff' }),
          el('p107-s3-c1', 'rect', 140, 240, 500, 580, { fill: '#18181b', borderRadius: 16 }),
          el('p107-s3-v1', 'text', 180, 280, 420, 80, { text: 'GOLDEN LION', fontSize: 36, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#818cf8' }),
          el('p107-s3-t1', 'text', 180, 370, 420, 40, { text: 'Nordic Pavilion', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p107-s3-d1', 'text', 180, 430, 420, 240, { text: '“Subterranean Lichen Songs”: An interactive living acoustic moss installation mapping sub-arctic permafrost thaw frequencies into multi-ton bronze gongs.', fontSize: 18, fontFamily: 'Inter', fill: '#a1a1aa', lineHeight: 1.7 }),
          el('p107-s3-c2', 'rect', 710, 240, 500, 580, { fill: '#18181b', borderRadius: 16 }),
          el('p107-s3-v2', 'text', 750, 280, 420, 80, { text: 'SPECIAL MENTION', fontSize: 36, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff' }),
          el('p107-s3-t2', 'text', 750, 370, 420, 40, { text: 'Japanese Pavilion', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p107-s3-d2', 'text', 750, 430, 420, 240, { text: '“Washi in the Tempest”: Unwoven raw mulberry fiber paper sheets suspended in wind-tunnel glass cubes, demonstrating resilience under extreme aerodynamic turbulence.', fontSize: 18, fontFamily: 'Inter', fill: '#a1a1aa', lineHeight: 1.7 }),
          el('p107-s3-c3', 'rect', 1280, 240, 500, 580, { fill: '#18181b', borderRadius: 16 }),
          el('p107-s3-v3', 'text', 1320, 280, 420, 80, { text: 'HONORABLE', fontSize: 36, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#818cf8' }),
          el('p107-s3-t3', 'text', 1320, 370, 420, 40, { text: 'Brazilian Pavilion', fontSize: 24, fontFamily: 'Playfair Display', fontWeight: '700', fill: '#ffffff' }),
          el('p107-s3-d3', 'text', 1320, 430, 420, 240, { text: '“Roots of the Flooded Canopy”: Submerged mahogany root structures transforming the Venetian canal waters into miniature biodynamic freshwater riverbeds.', fontSize: 18, fontFamily: 'Inter', fill: '#a1a1aa', lineHeight: 1.7 })
        ]
      },
      {
        id: 'p107-s4',
        name: 'Arsenale Exhibition Hall',
        elements: [
          el('p107-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#09090b', locked: true }),
          el('p107-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[107], borderRadius: 16 }),
          el('p107-s4-title', 'text', 140, 750, 1640, 50, { text: 'MONUMENTAL SPATIAL INSTALLATIONS ALONG THE CORDERIE ROPEWALK', fontSize: 38, fontFamily: 'Playfair Display', fontWeight: '800', fill: '#ffffff' }),
          el('p107-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Spanning over 300 meters of uninterrupted 14th-century brick nave, the Corderie presents thirty-two site-specific commissions responding to historical naval craftsmanship and global maritime trade.', fontSize: 20, fontFamily: 'Inter', fill: '#a1a1aa', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p107-s5',
        name: 'Closing',
        elements: [
          el('p107-s5-bg', 'rect', 0, 0, 1920, 1080, { fill: '#09090b', locked: true }),
          el('p107-s5-tag', 'text', 140, 280, 800, 30, { text: '✦ CURATORIAL PRESS ACCREDITATION & TOURS', fontSize: 18, fontFamily: 'Inter', fontWeight: '600', fill: '#818cf8', letterSpacing: 3 }),
          el('p107-s5-title', 'text', 140, 330, 1600, 160, { text: 'ART AS WITNESS TO OUR TRANSFORMATION.', fontSize: 80, fontFamily: 'Playfair Display', fontWeight: '900', fill: '#ffffff' }),
          el('p107-s5-bar', 'rect', 140, 520, 160, 4, { fill: '#6366f1' }),
          el('p107-s5-sub', 'text', 140, 570, 1200, 80, { text: 'Curatorial press office and institutional research access:\nbiennale-press@labiennale.org · Ca’ Giustinian, San Marco, Venice', fontSize: 24, fontFamily: 'Inter', fill: '#a1a1aa', lineHeight: 1.8 })
        ]
      }
    ]
  });

  // 108: Literary Journal & Critical Essays (Warm Linen & Academic Serif)
  decks.push({
    id: 108,
    name: 'Literary Journal & Critical Essays',
    title: 'OXFORD LITERARY REVIEW',
    description: 'Longform philosophical essays, literary critique, and typography inspired by classic European publishing houses.',
    category: 'Presentation',
    subcategory: 'Editorial',
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: ['literary', 'prose', 'editorial', 'journal'],
    author: 'ORD Studio',
    premium: false,
    isPublished: true,
    likes: 6710,
    views: 70000,
    gradient: 'linear-gradient(135deg, #fefce8 0%, #ca8a04 100%)',
    fonts: ['Cormorant Garamond', 'Inter'],
    colors: ['#fefce8', '#854d0e', '#1c1917', '#78716c'],
    slides: [
      {
        id: 'p108-s1',
        name: 'Cover',
        elements: [
          el('p108-s1-bg', 'rect', 0, 0, 1920, 1080, { fill: '#faf8f5', locked: true }),
          el('p108-s1-tag', 'text', 120, 80, 1680, 30, { text: '✦ QUARTERLY LITERARY REVIEW · ISSUE XLII · AUTUMN 2026', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', fill: '#854d0e', letterSpacing: 3 }),
          el('p108-s1-title', 'text', 120, 125, 1680, 140, { text: 'The Geometry of Memory & Exile', fontSize: 88, fontFamily: 'Cormorant Garamond', fontWeight: '700', fill: '#1c1917' }),
          el('p108-s1-line', 'rect', 120, 285, 1680, 2, { fill: '#854d0e' }),
          el('p108-s1-col1', 'text', 120, 330, 500, 620, { text: 'To write in a second tongue is to inhabit an architecture where the doors open exclusively inward. In this issue, sixteen essayists, translators, and poets examine how syntax bends under geographical migration.\n\nWhen the native lexicon of home is dismantled by political fracture, writers do not merely transcribe; they construct an interior refuge out of borrowed phonemes.\n\nFrom the misty wharves of Lisbon to the scarred cornices of Beirut, these dispatches record what border controls could neither confiscate nor catalog.', fontSize: 22, fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fill: '#44403c', lineHeight: 1.8 }),
          el('p108-s1-col2', 'text', 660, 330, 500, 620, { text: 'ESSAY CONTRIBUTIONS IN THIS VOLUME:\n\n• I. The Rhetoric of Fog: Maritime Beacons & W.G. Sebald’s Coastal Walks (p. 14)\n• II. Elegy for an Adriatic Harbor: Uncollected Croatian Verse (p. 48)\n• III. Recursive Dialectics in the Age of Synthetic Prose (p. 92)\n• IV. Lexical Disclosures from the Anatolian Plateau (p. 138)\n\nPublished by the Oxford Literary Guild · Printed on acid-free archival rag.', fontSize: 19, fontFamily: 'Inter', fill: '#57534e', lineHeight: 1.8 }),
          el('p108-s1-img', 'image', 1200, 330, 600, 620, { src: PHOTOS[108], borderRadius: 14, locked: true }),
          el('p108-s1-foot', 'text', 120, 990, 1680, 30, { text: 'OXFORD LITERARY GUILD · LONDON · EDINBURGH · ATHENS', fontSize: 15, fontFamily: 'Inter', fontWeight: '600', fill: '#78716c' })
        ]
      },
      {
        id: 'p108-s2',
        name: 'Editorial Prologue',
        elements: [
          el('p108-s2-bg', 'rect', 0, 0, 1920, 1080, { fill: '#faf8f5', locked: true }),
          el('p108-s2-head', 'text', 200, 140, 1520, 60, { text: 'WORDS ARE RESIDUES OF LOST SHORES', fontSize: 48, fontFamily: 'Cormorant Garamond', fontWeight: '700', fill: '#1c1917', alignment: 'center' }),
          el('p108-s2-p', 'text', 240, 240, 1440, 360, { text: 'To write in a second tongue is to live in a house where the doors open inward. In this issue, sixteen essayists and poets examine how syntax bends under political migration. When the lexicon of home is dismantled by geography, writers do not simply translate; they build an architecture of resonance out of borrowed phonemes.\n\nFrom Lisbon to Beirut, these dispatches preserve what the border guards could neither confiscate nor catalog.', fontSize: 24, fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fill: '#44403c', alignment: 'center', lineHeight: 1.9 }),
          el('p108-s2-line', 'rect', 880, 680, 160, 2, { fill: '#854d0e' })
        ]
      },
      {
        id: 'p108-s3',
        name: 'Table of Contents',
        elements: [
          el('p108-s3-bg', 'rect', 0, 0, 1920, 1080, { fill: '#faf8f5', locked: true }),
          el('p108-s3-h', 'text', 140, 110, 1200, 50, { text: 'VOLUME XLII · CONTRIBUTIONS', fontSize: 42, fontFamily: 'Cormorant Garamond', fontWeight: '700', fill: '#1c1917' }),
          el('p108-s3-item1', 'text', 140, 220, 800, 120, { text: 'I. THE RHETORIC OF FOG\nDr. Julian Sterling on maritime beacons and W.G. Sebald’s prose walking tours.\nPage 14', fontSize: 20, fontFamily: 'Inter', fill: '#292524', lineHeight: 1.7 }),
          el('p108-s3-item2', 'text', 140, 380, 800, 120, { text: 'II. ELEGY FOR AN ADRIATIC HARBOR\nEight uncollected poems by Mirjana Novak, translated from Croatian by Peter Dale.\nPage 48', fontSize: 20, fontFamily: 'Inter', fill: '#292524', lineHeight: 1.7 }),
          el('p108-s3-item3', 'text', 140, 540, 800, 120, { text: 'III. CYBERNETICS & SOLITUDE\nPhilosophical inquiry into recursive language models and the death of interior dialogue.\nPage 92', fontSize: 20, fontFamily: 'Inter', fill: '#292524', lineHeight: 1.7 }),
          el('p108-s3-img', 'image', 1040, 180, 740, 720, { src: PHOTOS[108], borderRadius: 14 })
        ]
      },
      {
        id: 'p108-s4',
        name: 'Featured Prose Excerpt',
        elements: [
          el('p108-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#faf8f5', locked: true }),
          el('p108-s4-quote', 'text', 180, 260, 1560, 320, { text: '“We inhabit a language before we inhabit a country. When the country falls away, the grammar remains as our only unshakeable citizenship.”', fontSize: 56, fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fill: '#1c1917', alignment: 'center', lineHeight: 1.35 }),
          el('p108-s4-author', 'text', 180, 640, 1560, 40, { text: 'PROF. TARIQ AL-MANSOUR · CHAIR OF COMPARATIVE LITERATURE · THE SORBONNE', fontSize: 18, fontFamily: 'Inter', fontWeight: '700', fill: '#854d0e', alignment: 'center', letterSpacing: 2 })
        ]
      },
      {
        id: 'p108-s5',
        name: 'Closing',
        elements: [
          el('p108-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#faf8f5', locked: true }),
          el('p108-s4-tag', 'text', 140, 300, 1640, 30, { text: '✦ MANUSCRIPT SUBMISSIONS & CORRESPONDENCE', fontSize: 18, fontFamily: 'Inter', fontWeight: '700', fill: '#854d0e', alignment: 'center', letterSpacing: 3 }),
          el('p108-s4-title', 'text', 140, 360, 1640, 80, { text: 'The Conversation Continues', fontSize: 68, fontFamily: 'Cormorant Garamond', fontWeight: '700', fill: '#1c1917', alignment: 'center' }),
          el('p108-s4-sub', 'text', 140, 470, 1640, 80, { text: 'submissions@criticalreview.org · editor@ordstudio.ai\nOxford Literary Guild · 14 Broad Street, Oxford OX1 3AS', fontSize: 22, fontFamily: 'Inter', fill: '#78716c', alignment: 'center', lineHeight: 1.8 })
        ]
      }
    ]
  });

  return decks;
}
