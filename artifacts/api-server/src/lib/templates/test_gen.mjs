import fs from 'fs';
import path from 'path';

const outputFile = path.resolve('c:/Users/jaifr/OneDrive/Desktop/Web-Runner (3)/artifacts/api-server/src/lib/templates/presentations.ts');

// 36 Unique, Hand-Curated, High-Resolution Unsplash Photos
const PHOTOS = {
  101: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600', // Modern Skyscraper Horizon
  102: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1600', // Arctic Glacier & Wild Lands
  103: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1600', // Michelin Culinary Gastronomy
  104: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1600', // Tokyo Shinjuku 35mm Nocturne
  105: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600', // Swiss Architectural Brutalism
  106: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600', // Scandinavian Studio Interior
  107: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1600', // Contemporary Biennale Gallery
  108: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1600', // Literary Journal & Typography
  109: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600', // Neural Interface Abstract
  110: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1600', // Quantum Zero-Trust Telemetry
  111: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1600', // Autonomous Drone Fleet
  112: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600', // Silicon Microchip Wafer
  113: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1600', // Sovereign Wealth Boardroom
  114: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600', // Precision Clinical Oncology
  115: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1600', // Clean Wind Turbines & Storage
  116: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600', // High-Bay Logistics Real Estate
  117: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1600', // Neo-Seoul Avant-Garde Apparel
  118: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600', // Chrono-Shift Sci-Fi Gaming
  119: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1600', // Resonance Audio-Visual Festival
  120: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1600', // Volt Performance Beverage
  121: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1600', // Haute Horlogerie Geneva Tourbillon
  122: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1600', // Superyacht Naval Architecture
  123: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1600', // Domaine Grand Cru Wine Cellar
  124: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600', // Cantilevered Cliffside Villa
  125: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600', // Autonomous Multi-Agent AI Mesh
  126: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600', // Satellite Radar Biomass Orbit
  127: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1600', // Cross-Border Treasury FX
  128: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600', // Vision-Guided Warehouse Robotics
  129: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1600', // Solid Tumor Spatial Genomics
  130: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80&w=1600', // Mesoscale Atmospheric Supercell
  131: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600', // Behavioral Economics Trading Floor
  132: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1600', // Airborne LiDAR Jungle Cartography
  133: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600', // Flagship Spatial Retail Design
  134: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1600', // Aerodynamic Hypercar CMF Surfacing
  135: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600', // Omnichannel Transaction Analytics
  136: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600'  // Product-Led Telemetry Expansion
};

console.log('Unique photos count:', Object.keys(PHOTOS).length);

// Generate all 36 decks with bespoke code
const decks = [];

// Template 101: Architectural Horizon Monograph (Full-bleed skyscraper)
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
        { id: 'p101-s1-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#0a0d14', locked: true, visible: true },
        { id: 'p101-s1-img', type: 'image', x: 0, y: 0, width: 1920, height: 1080, src: PHOTOS[101], locked: true, visible: true },
        { id: 'p101-s1-scrim', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: 'linear-gradient(to top, rgba(10,13,20,0.95) 0%, rgba(10,13,20,0.4) 55%, rgba(10,13,20,0.1) 100%)', locked: true, visible: true },
        { id: 'p101-s1-tag', type: 'text', x: 140, y: 530, width: 900, height: 35, text: '✦ ARCHITECTURE · STRUCTURAL STUDY VOL. I', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#f59e0b', letterSpacing: 2, visible: true },
        { id: 'p101-s1-title', type: 'text', x: 140, y: 580, width: 1640, height: 180, text: 'ARCHITECTURAL HORIZON', fontSize: 92, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.05, visible: true },
        { id: 'p101-s1-bar', type: 'rect', x: 140, y: 785, width: 140, height: 6, fill: '#f59e0b', visible: true },
        { id: 'p101-s1-desc', type: 'text', x: 140, y: 815, width: 1300, height: 80, text: 'A masterclass in modern spatial minimalism, structural rhythm, and brutalist geometric engineering.', fontSize: 24, fontFamily: 'Inter', fill: '#e2e8f0', lineHeight: 1.5, visible: true },
        { id: 'p101-s1-foot', type: 'text', x: 140, y: 970, width: 800, height: 30, text: 'ORD STUDIO · EDITORIAL MONOGRAPH · 2026', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', fill: '#94a3b8', visible: true }
      ]
    },
    {
      id: 'p101-s2',
      name: 'Agenda & Topics',
      elements: [
        { id: 'p101-s2-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#0a0d14', locked: true, visible: true },
        { id: 'p101-s2-photo', type: 'image', x: 0, y: 0, width: 840, height: 1080, src: PHOTOS[101], locked: true, visible: true },
        { id: 'p101-s2-overlay', type: 'rect', x: 600, y: 0, width: 240, height: 1080, fill: 'linear-gradient(to right, transparent, #0a0d14)', locked: true, visible: true },
        { id: 'p101-s2-head', type: 'text', x: 920, y: 120, width: 880, height: 60, text: 'KEY DISCUSSIONS & AGENDA', fontSize: 48, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p101-s2-line', type: 'rect', x: 920, y: 195, width: 120, height: 4, fill: '#f59e0b', visible: true },
        { id: 'p101-s2-item1', type: 'text', x: 920, y: 260, width: 860, height: 100, text: '01 / SPATIAL TENSION & VOID GEOMETRIES\nInvestigation of volumetric negative space across urban high-density towers.', fontSize: 22, fontFamily: 'Inter', fontWeight: '700', fill: '#ffffff', lineHeight: 1.6, visible: true },
        { id: 'p101-s2-item2', type: 'text', x: 920, y: 390, width: 860, height: 100, text: '02 / MATERIAL PURITY & CAST CONCRETE\nTextural authenticity under changing natural light and climatic exposure.', fontSize: 22, fontFamily: 'Inter', fontWeight: '700', fill: '#ffffff', lineHeight: 1.6, visible: true },
        { id: 'p101-s2-item3', type: 'text', x: 920, y: 520, width: 860, height: 100, text: '03 / ENVIRONMENTAL THERMAL RESILIENCE\nIntegrated aerodynamic facades reducing wind shear and mechanical HVAC loads.', fontSize: 22, fontFamily: 'Inter', fontWeight: '700', fill: '#ffffff', lineHeight: 1.6, visible: true },
        { id: 'p101-s2-item4', type: 'text', x: 920, y: 650, width: 860, height: 100, text: '04 / THE COMPLETED METROPOLITAN MONOGRAPH\nPhotographic documentation of 12 landmark structures completed through 2026.', fontSize: 22, fontFamily: 'Inter', fontWeight: '700', fill: '#ffffff', lineHeight: 1.6, visible: true }
      ]
    },
    {
      id: 'p101-s3',
      name: 'Architectural Thesis',
      elements: [
        { id: 'p101-s3-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#0a0d14', locked: true, visible: true },
        { id: 'p101-s3-photo', type: 'image', x: 0, y: 0, width: 1920, height: 1080, src: PHOTOS[101], opacity: 0.18, locked: true, visible: true },
        { id: 'p101-s3-quote', type: 'text', x: 180, y: 300, width: 1560, height: 240, text: '“Architecture is the learned game, correct and magnificent, of forms assembled in the light.”', fontSize: 60, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', alignment: 'center', lineHeight: 1.25, visible: true },
        { id: 'p101-s3-line', type: 'rect', x: 880, y: 580, width: 160, height: 4, fill: '#f59e0b', visible: true },
        { id: 'p101-s3-author', type: 'text', x: 200, y: 620, width: 1520, height: 40, text: 'MARCUS STERLING · PRINCIPAL MONOGRAPH ARCHITECT', fontSize: 22, fontFamily: 'Inter', fontWeight: '800', fill: '#f59e0b', alignment: 'center', letterSpacing: 2, visible: true }
      ]
    },
    {
      id: 'p101-s4',
      name: 'Performance Metrics',
      elements: [
        { id: 'p101-s4-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#0a0d14', locked: true, visible: true },
        { id: 'p101-s4-h', type: 'text', x: 140, y: 110, width: 1200, height: 50, text: 'MEASURABLE STRUCTURAL VELOCITY', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p101-s4-sub', type: 'text', x: 140, y: 175, width: 1200, height: 35, text: 'Quantitative engineering benchmarks verified across skyscraper envelope deployments.', fontSize: 20, fontFamily: 'Inter', fill: '#94a3b8', visible: true },
        { id: 'p101-s4-n1', type: 'text', x: 140, y: 320, width: 480, height: 120, text: '-42%', fontSize: 108, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#f59e0b', visible: true },
        { id: 'p101-s4-t1', type: 'text', x: 140, y: 460, width: 480, height: 40, text: 'EMBODIED CARBON FOOTPRINT', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p101-s4-d1', type: 'text', x: 140, y: 510, width: 480, height: 150, text: 'Recycled pozzolanic cement binders outperforming international carbon reduction targets.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6, visible: true },
        { id: 'p101-s4-n2', type: 'text', x: 710, y: 320, width: 480, height: 120, text: '99.4%', fontSize: 108, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', visible: true },
        { id: 'p101-s4-t2', type: 'text', x: 710, y: 460, width: 480, height: 40, text: 'SOLAR ENVELOPE HARVEST', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p101-s4-d2', type: 'text', x: 710, y: 510, width: 480, height: 150, text: 'Integrated photovoltaic glazing generating sustained base load electricity for internal systems.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6, visible: true },
        { id: 'p101-s4-n3', type: 'text', x: 1280, y: 320, width: 480, height: 120, text: '3.4x', fontSize: 108, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#f59e0b', visible: true },
        { id: 'p101-s4-t3', type: 'text', x: 1280, y: 460, width: 480, height: 40, text: 'ACOUSTIC DAMPENING', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p101-s4-d3', type: 'text', x: 1280, y: 510, width: 480, height: 150, text: 'Triple-layer acoustic facade isolating exterior ambient highway noise below 32 decibels.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6, visible: true }
      ]
    },
    {
      id: 'p101-s5',
      name: 'Case Study Gallery',
      elements: [
        { id: 'p101-s5-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#0a0d14', locked: true, visible: true },
        { id: 'p101-s5-h', type: 'text', x: 140, y: 100, width: 1200, height: 50, text: 'LANDMARK COMMISSIONS & REALIZATION', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p101-s5-sub', type: 'text', x: 140, y: 165, width: 1200, height: 35, text: 'On-site photographic survey verifying volumetric clarity and structural finish.', fontSize: 20, fontFamily: 'Inter', fill: '#94a3b8', visible: true },
        { id: 'p101-s5-img', type: 'image', x: 140, y: 240, width: 1000, height: 680, src: PHOTOS[101], borderRadius: 16, visible: true },
        { id: 'p101-s5-card-h', type: 'text', x: 1200, y: 270, width: 580, height: 50, text: 'Helios Tower · 64 Floors', fontSize: 34, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p101-s5-card-meta', type: 'text', x: 1200, y: 330, width: 580, height: 30, text: 'COMPLETED DECEMBER 2025 · ROTTERDAM', fontSize: 16, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#f59e0b', visible: true },
        { id: 'p101-s5-card-p', type: 'text', x: 1200, y: 390, width: 580, height: 340, text: 'The Helios Tower demonstrates that architectural grandeur and rigorous climate efficiency are mutually reinforcing. Featuring an ultra-slender core and cantilevered sky-gardens, the building provides 84,000 square meters of high-density creative workspace with zero mechanical air conditioning required during spring and autumn seasons.', fontSize: 20, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7, visible: true }
      ]
    },
    {
      id: 'p101-s6',
      name: 'Timeline & Phasing',
      elements: [
        { id: 'p101-s6-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#0a0d14', locked: true, visible: true },
        { id: 'p101-s6-h', type: 'text', x: 140, y: 110, width: 1200, height: 50, text: 'METROPOLITAN ROLLOUT TIMELINE', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p101-s6-sub', type: 'text', x: 140, y: 175, width: 1000, height: 35, text: 'Phased completion governance spanning European and North American projects.', fontSize: 20, fontFamily: 'Inter', fill: '#94a3b8', visible: true },
        { id: 'p101-s6-p1', type: 'text', x: 140, y: 300, width: 380, height: 50, text: 'PHASE 01 · Q1 2026', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#f59e0b', visible: true },
        { id: 'p101-s6-t1', type: 'text', x: 140, y: 350, width: 380, height: 40, text: 'Zoning & Core Engineering', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff', visible: true },
        { id: 'p101-s6-d1', type: 'text', x: 140, y: 400, width: 380, height: 260, text: 'Site seismic analysis, bedrock borehole verification, and regulatory environmental filings.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6, visible: true },
        { id: 'p101-s6-p2', type: 'text', x: 560, y: 300, width: 380, height: 50, text: 'PHASE 02 · Q3 2026', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#f59e0b', visible: true },
        { id: 'p101-s6-t2', type: 'text', x: 560, y: 350, width: 380, height: 40, text: 'Substructure & Framing', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff', visible: true },
        { id: 'p101-s6-d2', type: 'text', x: 560, y: 400, width: 380, height: 260, text: 'Post-tensioned composite slab pouring and aerodynamic wind dampener tuning.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6, visible: true },
        { id: 'p101-s6-p3', type: 'text', x: 980, y: 300, width: 380, height: 50, text: 'PHASE 03 · Q2 2027', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#f59e0b', visible: true },
        { id: 'p101-s6-t3', type: 'text', x: 980, y: 350, width: 380, height: 40, text: 'Glazing & Smart Facade', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff', visible: true },
        { id: 'p101-s6-d3', type: 'text', x: 980, y: 400, width: 380, height: 260, text: 'Automated kinetic louver installation and integrated rooftop solar collector commissioning.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6, visible: true },
        { id: 'p101-s6-p4', type: 'text', x: 1400, y: 300, width: 380, height: 50, text: 'PHASE 04 · Q4 2027', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#f59e0b', visible: true },
        { id: 'p101-s6-t4', type: 'text', x: 1400, y: 350, width: 380, height: 40, text: 'Tenant Occupancy', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff', visible: true },
        { id: 'p101-s6-d4', type: 'text', x: 1400, y: 400, width: 380, height: 260, text: 'Handover to flagship enterprise tenants and initiation of 24/7 building automation telemetry.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6, visible: true }
      ]
    },
    {
      id: 'p101-s7',
      name: 'Closing & Contact',
      elements: [
        { id: 'p101-s7-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#0a0d14', locked: true, visible: true },
        { id: 'p101-s7-tag', type: 'text', x: 140, y: 280, width: 900, height: 35, text: '✦ ARCHITECTURAL HORIZON · MONOGRAPH ARCHIVE', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#f59e0b', letterSpacing: 2, visible: true },
        { id: 'p101-s7-title', type: 'text', x: 140, y: 340, width: 1600, height: 160, text: 'BUILDING FOR THE COMING CENTURY', fontSize: 80, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.1, visible: true },
        { id: 'p101-s7-bar', type: 'rect', x: 140, y: 530, width: 140, height: 6, fill: '#f59e0b', visible: true },
        { id: 'p101-s7-sub', type: 'text', x: 140, y: 570, width: 1300, height: 100, text: 'Inquiries regarding commissioned monographs and architectural masterplanning:\nmonographs@ordstudio.ai · +31 (0)20 894 2000', fontSize: 24, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.8, visible: true }
      ]
    }
  ]
});

// Template 102: Alpine Expedition & Wild Lands (Split vertical)
decks.push({
  id: 102,
  name: 'Alpine Expedition & Wild Lands',
  title: 'ALPINE EXPEDITION',
  description: 'Scientific field study documentation across high-altitude glacial valleys and extreme arctic wilderness.',
  category: 'Presentation',
  subcategory: 'Nature',
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
  fonts: ['Plus Jakarta Sans', 'Space Grotesk', 'Inter'],
  colors: ['#032014', '#10b981', '#ffffff', '#cbd5e1'],
  slides: [
    {
      id: 'p102-s1',
      name: 'Cover',
      elements: [
        { id: 'p102-s1-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#032014', locked: true, visible: true },
        { id: 'p102-s1-tag', type: 'text', x: 140, y: 150, width: 800, height: 35, text: '✦ ARCTIC SURVEY · HIGH-LATITUDE FIELD REPORT', fontSize: 18, fontFamily: 'Plus Jakarta Sans', fontWeight: '800', fill: '#10b981', letterSpacing: 2, visible: true },
        { id: 'p102-s1-title', type: 'text', x: 140, y: 210, width: 840, height: 260, text: 'ALPINE EXPEDITION & WILD LANDS', fontSize: 80, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.06, visible: true },
        { id: 'p102-s1-bar', type: 'rect', x: 140, y: 500, width: 160, height: 6, fill: '#10b981', visible: true },
        { id: 'p102-s1-desc', type: 'text', x: 140, y: 540, width: 800, height: 160, text: 'Scientific field study documentation across high-altitude glacial valleys, sub-zero biological habitats, and remote alpine ridge-lines.', fontSize: 24, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6, visible: true },
        { id: 'p102-s1-foot', type: 'text', x: 140, y: 880, width: 800, height: 30, text: 'FIELD SURVEY CO-ORDINATES: 68.3582° N, 18.7842° E · ELEVATION 2,400M', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', fill: '#94a3b8', visible: true },
        { id: 'p102-s1-img', type: 'image', x: 1040, y: 90, width: 760, height: 900, src: PHOTOS[102], borderRadius: 24, locked: true, visible: true }
      ]
    },
    {
      id: 'p102-s2',
      name: 'Field Methodology',
      elements: [
        { id: 'p102-s2-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#032014', locked: true, visible: true },
        { id: 'p102-s2-h', type: 'text', x: 140, y: 110, width: 1200, height: 50, text: 'FIELD SURVEY METHODOLOGY & EQUIPMENT', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p102-s2-sub', type: 'text', x: 140, y: 175, width: 1200, height: 35, text: 'Autonomous sensor telemetry paired with daily ground core sampling.', fontSize: 20, fontFamily: 'Inter', fill: '#94a3b8', visible: true },
        { id: 'p102-s2-b1', type: 'text', x: 140, y: 280, width: 780, height: 120, text: '01 / CRYOSPHERIC ICE CORE CORING\nDrilling 120-meter vertical core samples to reconstruct 4,000 years of paleoclimatic snowfall records.', fontSize: 22, fontFamily: 'Inter', fontWeight: '700', fill: '#ffffff', lineHeight: 1.6, visible: true },
        { id: 'p102-s2-b2', type: 'text', x: 140, y: 440, width: 780, height: 120, text: '02 / DRONE MULTISPECTRAL ALBEDO MAPPING\nUAV passes tracking glacier reflective index shifts during peak summer solar radiation.', fontSize: 22, fontFamily: 'Inter', fontWeight: '700', fill: '#ffffff', lineHeight: 1.6, visible: true },
        { id: 'p102-s2-b3', type: 'text', x: 140, y: 600, width: 780, height: 120, text: '03 / MICROBIAL EXTREMOPHILE SEQUENCING\nOn-site DNA sequencing of cryophilic bacterial enclaves surviving within sub-ice melt channels.', fontSize: 22, fontFamily: 'Inter', fontWeight: '700', fill: '#ffffff', lineHeight: 1.6, visible: true },
        { id: 'p102-s2-img', type: 'image', x: 1020, y: 240, width: 760, height: 600, src: PHOTOS[102], borderRadius: 16, visible: true }
      ]
    },
    {
      id: 'p102-s3',
      name: 'Observational Data',
      elements: [
        { id: 'p102-s3-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#032014', locked: true, visible: true },
        { id: 'p102-s3-h', type: 'text', x: 140, y: 110, width: 1200, height: 50, text: 'RECORDED FIELD TELEMETRY', fontSize: 46, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p102-s3-n1', type: 'text', x: 140, y: 280, width: 480, height: 110, text: '-34.8°C', fontSize: 96, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#10b981', visible: true },
        { id: 'p102-s3-t1', type: 'text', x: 140, y: 410, width: 480, height: 40, text: 'Mean Winter Temperature', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p102-s3-d1', type: 'text', x: 140, y: 460, width: 480, height: 150, text: 'Lowest ground weather station recording taken at Base Camp North.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6, visible: true },
        { id: 'p102-s3-n2', type: 'text', x: 710, y: 280, width: 480, height: 110, text: '1,420mm', fontSize: 96, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', visible: true },
        { id: 'p102-s3-t2', type: 'text', x: 710, y: 410, width: 480, height: 40, text: 'Annual Snow Water Equiv.', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p102-s3-d2', type: 'text', x: 710, y: 460, width: 480, height: 150, text: 'Water equivalent accumulation measured via isotopic neutron telemetry.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6, visible: true },
        { id: 'p102-s3-n3', type: 'text', x: 1280, y: 280, width: 480, height: 110, text: '98.2%', fontSize: 96, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#10b981', visible: true },
        { id: 'p102-s3-t3', type: 'text', x: 1280, y: 410, width: 480, height: 40, text: 'Glacier Mass Retention', fontSize: 24, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p102-s3-d3', type: 'text', x: 1280, y: 460, width: 480, height: 150, text: 'Retention index across shaded north-facing alpine headwalls.', fontSize: 18, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6, visible: true }
      ]
    },
    {
      id: 'p102-s4',
      name: 'High Ridge Expedition Route',
      elements: [
        { id: 'p102-s4-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#032014', locked: true, visible: true },
        { id: 'p102-s4-img', type: 'image', x: 140, y: 120, width: 1640, height: 580, src: PHOTOS[102], borderRadius: 20, visible: true },
        { id: 'p102-s4-title', type: 'text', x: 140, y: 740, width: 1640, height: 60, text: 'THE CONTINENTAL RIDGELINE EXPEDITION TRAVERSE', fontSize: 44, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p102-s4-desc', type: 'text', x: 140, y: 810, width: 1640, height: 120, text: 'A 420-kilometer unsupported ski traversal across the Scandinavian mountain backbone. Teams maintained self-sufficiency across 28 continuous days without fossil-fuel resupply or motorized transport.', fontSize: 22, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.6, visible: true }
      ]
    },
    {
      id: 'p102-s5',
      name: 'Scientific Conclusions',
      elements: [
        { id: 'p102-s5-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#032014', locked: true, visible: true },
        { id: 'p102-s5-h', type: 'text', x: 140, y: 180, width: 1400, height: 50, text: 'PRIMARY SCIENTIFIC FINDINGS', fontSize: 48, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p102-s5-bar', type: 'rect', x: 140, y: 250, width: 140, height: 6, fill: '#10b981', visible: true },
        { id: 'p102-s5-p1', type: 'text', x: 140, y: 310, width: 1400, height: 100, text: '✦ High-altitude permafrost layers remain stable below 2,200m elevation across the northern sector.', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', fill: '#ffffff', lineHeight: 1.6, visible: true },
        { id: 'p102-s5-p2', type: 'text', x: 140, y: 430, width: 1400, height: 100, text: '✦ Novel cold-tolerant lichen taxa documented colonizing newly exposed moraine granites.', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', fill: '#ffffff', lineHeight: 1.6, visible: true },
        { id: 'p102-s5-p3', type: 'text', x: 140, y: 550, width: 1400, height: 100, text: '✦ Hydrological downstream run-off peaks 18 days earlier than the 1990–2020 30-year climate baseline.', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', fill: '#ffffff', lineHeight: 1.6, visible: true },
        { id: 'p102-s5-foot', type: 'text', x: 140, y: 880, width: 1200, height: 30, text: 'ARCTIC FIELD INSTITUTE · SCIENTIFIC MONOGRAPH VOL. 84 · PEER REVIEWED', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', fill: '#94a3b8', visible: true }
      ]
    },
    {
      id: 'p102-s6',
      name: 'Closing',
      elements: [
        { id: 'p102-s6-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#032014', locked: true, visible: true },
        { id: 'p102-s6-tag', type: 'text', x: 140, y: 280, width: 800, height: 35, text: '✦ FIELD RESEARCH DATA ARCHIVE', fontSize: 18, fontFamily: 'Plus Jakarta Sans', fontWeight: '800', fill: '#10b981', letterSpacing: 2, visible: true },
        { id: 'p102-s6-title', type: 'text', x: 140, y: 340, width: 1600, height: 160, text: 'PRESERVING EARTH’S CRITICAL FRONTIERS', fontSize: 80, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.1, visible: true },
        { id: 'p102-s6-bar', type: 'rect', x: 140, y: 530, width: 160, height: 6, fill: '#10b981', visible: true },
        { id: 'p102-s6-sub', type: 'text', x: 140, y: 580, width: 1200, height: 100, text: 'Full dataset repositories, GIS shapefiles, and raw core spectrometry available at:\nexpedition.arctic-institute.org · expedition@ordstudio.ai', fontSize: 24, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8, visible: true }
      ]
    }
  ]
});

// Template 115: Renewable Energy Grid Transition (The exact archetype requested by the user!)
decks.push({
  id: 115,
  name: 'Renewable Energy Grid Transition',
  title: 'RENEWABLE ENERGY',
  description: 'Decarbonizing the Grid: 100GW utility-scale storage, transatlantic HVDC links, and next-gen solar infrastructure.',
  category: 'Presentation',
  subcategory: 'Energy',
  size: '1920×1080',
  canvasWidth: 1920,
  canvasHeight: 1080,
  orientation: 'landscape',
  tags: ['renewable', 'energy', 'solar', 'grid', 'clean-tech'],
  author: 'ORD Studio',
  premium: false,
  isPublished: true,
  likes: 9420,
  views: 98000,
  gradient: 'linear-gradient(135deg, #051d14 0%, #059669 100%)',
  fonts: ['Space Grotesk', 'Inter'],
  colors: ['#051d14', '#10b981', '#ffffff', '#94a3b8'],
  slides: [
    {
      id: 'p115-s1',
      name: 'Cover',
      elements: [
        // Clean spacious layout with giant typography and large focal image
        { id: 'p115-s1-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#051d14', locked: true, visible: true },
        { id: 'p115-s1-tag', type: 'text', x: 140, y: 90, width: 800, height: 30, text: '✦ INFRASTRUCTURE STRATEGY · 2026 ROADMAP', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#10b981', letterSpacing: 3, visible: true },
        { id: 'p115-s1-title1', type: 'text', x: 140, y: 135, width: 1640, height: 110, text: 'RENEWABLE ENERGY', fontSize: 96, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', letterSpacing: -1, visible: true },
        { id: 'p115-s1-img', type: 'image', x: 140, y: 265, width: 1640, height: 600, src: PHOTOS[115], borderRadius: 24, locked: true, visible: true },
        { id: 'p115-s1-sub', type: 'text', x: 140, y: 900, width: 1100, height: 40, text: 'CLEAN GRID INFRASTRUCTURE & 100GW STORAGE ARCHITECTURE', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#10b981', letterSpacing: 2, visible: true },
        { id: 'p115-s1-foot', type: 'text', x: 140, y: 955, width: 800, height: 30, text: 'GLOBAL POWER TRANSMISSION BRIEFING · PUBLISHED 2026', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', fill: '#94a3b8', visible: true }
      ]
    },
    {
      id: 'p115-s2',
      name: 'The Macro Driver',
      elements: [
        { id: 'p115-s2-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#051d14', locked: true, visible: true },
        { id: 'p115-s2-tag', type: 'text', x: 140, y: 120, width: 800, height: 30, text: '01 / THE ENERGY DILEMMA', fontSize: 18, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#10b981', letterSpacing: 2, visible: true },
        { id: 'p115-s2-head', type: 'text', x: 140, y: 170, width: 1640, height: 80, text: 'INTERMITTENCY REQUIRES GRID-SCALE BATTERY STORAGE', fontSize: 56, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p115-s2-body1', type: 'text', x: 140, y: 290, width: 780, height: 260, text: 'Wind and solar capacity additions surpassed 500GW globally last year, yet curtailment rates in critical desert and offshore corridors spiked to 18% during peak generation hours.\n\nWithout synchronized utility-scale storage and long-distance high-voltage direct current (HVDC) lines, clean electrons cannot reach population centers during peak evening demand curves.', fontSize: 24, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.7, visible: true },
        { id: 'p115-s2-img', type: 'image', x: 1000, y: 290, width: 780, height: 600, src: PHOTOS[115], borderRadius: 18, visible: true }
      ]
    },
    {
      id: 'p115-s3',
      name: 'Core Capacity Metrics',
      elements: [
        { id: 'p115-s3-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#051d14', locked: true, visible: true },
        { id: 'p115-s3-head', type: 'text', x: 140, y: 120, width: 1400, height: 60, text: 'PROJECTED 2030 CAPACITY ACCELERATION', fontSize: 52, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p115-s3-sub', type: 'text', x: 140, y: 195, width: 1400, height: 35, text: 'Capital expenditure deployment verified across sovereign interconnection agreements.', fontSize: 22, fontFamily: 'Inter', fill: '#94a3b8', visible: true },
        { id: 'p115-s3-n1', type: 'text', x: 140, y: 320, width: 480, height: 120, text: '100 GW', fontSize: 110, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#10b981', visible: true },
        { id: 'p115-s3-t1', type: 'text', x: 140, y: 465, width: 480, height: 40, text: 'Dedicated Storage Capacity', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p115-s3-d1', type: 'text', x: 140, y: 520, width: 480, height: 160, text: 'Long-duration iron-flow and lithium-iron-phosphate battery parks sited adjacent to major transformer substations.', fontSize: 20, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6, visible: true },
        { id: 'p115-s3-n2', type: 'text', x: 710, y: 320, width: 480, height: 120, text: '99.9%', fontSize: 110, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', visible: true },
        { id: 'p115-s3-t2', type: 'text', x: 710, y: 465, width: 480, height: 40, text: 'Dispatch Availability', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p115-s3-d2', type: 'text', x: 710, y: 520, width: 480, height: 160, text: 'Automated microsecond inverter switching guarantees uninterrupted frequency control under severe storm surges.', fontSize: 20, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6, visible: true },
        { id: 'p115-s3-n3', type: 'text', x: 1280, y: 320, width: 480, height: 120, text: '$0.02', fontSize: 110, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#10b981', visible: true },
        { id: 'p115-s3-t3', type: 'text', x: 1280, y: 465, width: 480, height: 40, text: 'Levelized Storage Cost / kWh', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p115-s3-d3', type: 'text', x: 1280, y: 520, width: 480, height: 160, text: 'Attaining parity with legacy open-cycle gas turbine peaking plants across all regional ISO wholesale clearing pools.', fontSize: 20, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6, visible: true }
      ]
    },
    {
      id: 'p115-s4',
      name: 'HVDC Grid Architecture',
      elements: [
        { id: 'p115-s4-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#051d14', locked: true, visible: true },
        { id: 'p115-s4-head', type: 'text', x: 140, y: 110, width: 1400, height: 60, text: 'TRANSCONTINENTAL DIRECT CURRENT BACKBONES', fontSize: 50, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p115-s4-b1', type: 'text', x: 140, y: 240, width: 780, height: 180, text: '✦ 800kV Voltage Multipliers: Underground superconducting conduits minimizing land impact and line dissipation over 2,400km distances.', fontSize: 22, fontFamily: 'Inter', fontWeight: '600', fill: '#ffffff', lineHeight: 1.7, visible: true },
        { id: 'p115-s4-b2', type: 'text', x: 140, y: 440, width: 780, height: 180, text: '✦ Zero Reactive Losses: HVDC eliminates inductive reactive impedance losses inherent to legacy AC alternating power lines.', fontSize: 22, fontFamily: 'Inter', fontWeight: '600', fill: '#ffffff', lineHeight: 1.7, visible: true },
        { id: 'p115-s4-b3', type: 'text', x: 140, y: 640, width: 780, height: 180, text: '✦ Subsea Island Interlinks: Connecting North Sea offshore wind clusters directly into continental industrial clusters in Germany and France.', fontSize: 22, fontFamily: 'Inter', fontWeight: '600', fill: '#ffffff', lineHeight: 1.7, visible: true },
        { id: 'p115-s4-img', type: 'image', x: 1000, y: 220, width: 780, height: 680, src: PHOTOS[115], borderRadius: 16, visible: true }
      ]
    },
    {
      id: 'p115-s5',
      name: 'Deployment Schedule',
      elements: [
        { id: 'p115-s5-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#051d14', locked: true, visible: true },
        { id: 'p115-s5-head', type: 'text', x: 140, y: 120, width: 1400, height: 60, text: 'DEPLOYMENT PHASES & COMMISSIONING', fontSize: 50, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff', visible: true },
        { id: 'p115-s5-p1', type: 'text', x: 140, y: 280, width: 380, height: 40, text: 'PHASE 01 · 2026', fontSize: 20, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#10b981', visible: true },
        { id: 'p115-s5-t1', type: 'text', x: 140, y: 330, width: 380, height: 40, text: '25GW Pilot Hubs', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff', visible: true },
        { id: 'p115-s5-d1', type: 'text', x: 140, y: 380, width: 380, height: 260, text: 'Activation of initial battery storage cluster in Nevada and Texas ERCOT territories.', fontSize: 20, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6, visible: true },
        { id: 'p115-s5-p2', type: 'text', x: 560, y: 280, width: 380, height: 40, text: 'PHASE 02 · 2027', fontSize: 20, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#10b981', visible: true },
        { id: 'p115-s5-t2', type: 'text', x: 560, y: 330, width: 380, height: 40, text: 'HVDC Cross-Tie', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff', visible: true },
        { id: 'p115-s5-d2', type: 'text', x: 560, y: 380, width: 380, height: 260, text: 'Linking Midwestern wind farms directly to East Coast PJM urban demand basins.', fontSize: 20, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6, visible: true },
        { id: 'p115-s5-p3', type: 'text', x: 980, y: 280, width: 380, height: 40, text: 'PHASE 03 · 2028', fontSize: 20, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#10b981', visible: true },
        { id: 'p115-s5-t3', type: 'text', x: 980, y: 330, width: 380, height: 40, text: 'Full 100GW Operation', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff', visible: true },
        { id: 'p115-s5-d3', type: 'text', x: 980, y: 380, width: 380, height: 260, text: 'Total automated grid stabilization across all sovereign interconnection regions.', fontSize: 20, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6, visible: true },
        { id: 'p115-s5-p4', type: 'text', x: 1400, y: 280, width: 380, height: 40, text: 'PHASE 04 · 2029', fontSize: 20, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#10b981', visible: true },
        { id: 'p115-s5-t4', type: 'text', x: 1400, y: 330, width: 380, height: 40, text: 'Zero Curtailment', fontSize: 26, fontFamily: 'Space Grotesk', fontWeight: '700', fill: '#ffffff', visible: true },
        { id: 'p115-s5-d4', type: 'text', x: 1400, y: 380, width: 380, height: 260, text: 'Achieving 100% utilization of harvested clean electrons across all weather conditions.', fontSize: 20, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6, visible: true }
      ]
    },
    {
      id: 'p115-s6',
      name: 'Closing & Consortium',
      elements: [
        { id: 'p115-s6-bg', type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: '#051d14', locked: true, visible: true },
        { id: 'p115-s6-tag', type: 'text', x: 140, y: 260, width: 900, height: 35, text: '✦ CLEAN ENERGY CONSORTIUM 2026', fontSize: 20, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#10b981', letterSpacing: 2, visible: true },
        { id: 'p115-s6-title', type: 'text', x: 140, y: 320, width: 1640, height: 160, text: 'THE FUTURE OF POWER IS CONTINUOUS AND CLEAN', fontSize: 76, fontFamily: 'Space Grotesk', fontWeight: '900', fill: '#ffffff', lineHeight: 1.1, visible: true },
        { id: 'p115-s6-bar', type: 'rect', x: 140, y: 510, width: 160, height: 6, fill: '#10b981', visible: true },
        { id: 'p115-s6-sub', type: 'text', x: 140, y: 560, width: 1300, height: 100, text: 'Inquiries regarding infrastructure bonds, EPC consortium participation, and grid interconnection:\ngrid-transition@ordstudio.ai · +1 (800) 555-GRID', fontSize: 24, fontFamily: 'Inter', fill: '#cbd5e1', lineHeight: 1.8, visible: true }
      ]
    }
  ]
});

console.log('Built prototype decks:', decks.length);
