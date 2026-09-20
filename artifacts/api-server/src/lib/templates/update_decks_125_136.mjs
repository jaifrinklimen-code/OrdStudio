import fs from 'fs';
import path from 'path';

const filePath = path.resolve('artifacts/api-server/src/lib/templates/decks_125_136.mjs');
let code = fs.readFileSync(filePath, 'utf-8');

// For 129
const old129 = `      {
        id: 'p129-s4',
        name: 'Closing',`;
const new129 = `      {
        id: 'p129-s4',
        name: 'Environmental Monitoring',
        elements: [
          el('p129-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#021815', locked: true }),
          el('p129-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[129], borderRadius: 16 }),
          el('p129-s4-title', 'text', 140, 750, 1640, 50, { text: 'CONTINUOUS BENTHIC ACOUSTIC & TURBIDITY MONITORING', fontSize: 38, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p129-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Deploying 30 stationary seabed landers logging water clarity, pelagic current shifts, and marine mammal vocalizations to ensure zero harm to fragile deep-sea organisms.', fontSize: 20, fontFamily: 'Inter', fill: '#99f6e4', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p129-s5',
        name: 'Closing',`;
code = code.replace(old129, new129);

// For 130
const old130 = `      {
        id: 'p130-s4',
        name: 'Closing',`;
const new130 = `      {
        id: 'p130-s4',
        name: 'Basalt Mineralization',
        elements: [
          el('p130-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#082f49', locked: true }),
          el('p130-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[130], borderRadius: 16 }),
          el('p130-s4-title', 'text', 140, 750, 1640, 50, { text: 'GEOTHERMAL BASALT INJECTION & SOLID CARBON MINERALIZATION', fontSize: 38, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p130-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Captured CO2 is dissolved in pressurized groundwater and pumped 1,000 meters into porous volcanic basalt. Natural chemical weathering turns the liquid into permanent carbonate stone in under two years.', fontSize: 20, fontFamily: 'Inter', fill: '#e0f2fe', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p130-s5',
        name: 'Closing',`;
code = code.replace(old130, new130);

// For 131
const old131 = `      {
        id: 'p131-s4',
        name: 'Closing',`;
const new131 = `      {
        id: 'p131-s4',
        name: 'Intermodal Rail',
        elements: [
          el('p131-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#07192f', locked: true }),
          el('p131-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[131], borderRadius: 16 }),
          el('p131-s4-title', 'text', 140, 750, 1640, 50, { text: 'ON-DOCK INTERMODAL RAIL & INLAND CONTAINER PORTS', fontSize: 38, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p131-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Transferring containers directly from vessel gantry cranes onto double-stack electrified rail cuts diesel drayage truck congestion by 82% across Southern California logistics corridors.', fontSize: 20, fontFamily: 'Inter', fill: '#bfdbfe', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p131-s5',
        name: 'Closing',`;
code = code.replace(old131, new131);

// For 132
const old132 = `      {
        id: 'p132-s4',
        name: 'Closing',`;
const new132 = `      {
        id: 'p132-s4',
        name: 'Sacred Architecture',
        elements: [
          el('p132-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#231204', locked: true }),
          el('p132-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[132], borderRadius: 16 }),
          el('p132-s4-title', 'text', 140, 750, 1640, 50, { text: 'GEOMETRIC URBAN PLANNING & RAISED HYDRAULIC CAUSEWAYS', fontSize: 38, fontFamily: 'Playfair Display', fontWeight: '800', fill: '#ffffff' }),
          el('p132-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Point-cloud classification reveals an organized civilization with solar-aligned ceremonial avenues, sunken defensive moats, and sophisticated seasonal flood irrigation channels spanning centuries.', fontSize: 20, fontFamily: 'Inter', fill: '#fef3c7', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p132-s5',
        name: 'Closing',`;
code = code.replace(old132, new132);

// For 133
const old133 = `      {
        id: 'p133-s4',
        name: 'Closing',`;
const new133 = `      {
        id: 'p133-s4',
        name: 'Shelf Sensor Fusion',
        elements: [
          el('p133-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f0d23', locked: true }),
          el('p133-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[133], borderRadius: 16 }),
          el('p133-s4-title', 'text', 140, 750, 1640, 50, { text: 'SUB-GRAM SCALE LOAD CELLS & OVERHEAD SKELETON TRACKING', fontSize: 38, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p133-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Computer vision identifies which shopper reached toward the shelf, while micro-strain load cells confirm the exact SKU weight removed, preventing shrink and misidentification.', fontSize: 20, fontFamily: 'Inter', fill: '#c7d2fe', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p133-s5',
        name: 'Closing',`;
code = code.replace(old133, new133);

// For 134
const old134 = `      {
        id: 'p134-s4',
        name: 'Closing',`;
const new134 = `      {
        id: 'p134-s4',
        name: 'Carbon Monocoque',
        elements: [
          el('p134-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#09090b', locked: true }),
          el('p134-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[134], borderRadius: 16 }),
          el('p134-s4-title', 'text', 140, 750, 1640, 50, { text: 'HIGH-MODULUS DRY CARBON FIBRE TUB & INTEGRATED SUSPENSION', fontSize: 38, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p134-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Achieving 55,000 Nm/degree torsional stiffness with pushrod inboard dampers and titanium 3D-printed uprights, translating aerodynamic forces directly into track grip.', fontSize: 20, fontFamily: 'Inter', fill: '#ecfccb', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p134-s5',
        name: 'Closing',`;
code = code.replace(old134, new134);

// For 135
const old135 = `      {
        id: 'p135-s4',
        name: 'Closing',`;
const new135 = `      {
        id: 'p135-s4',
        name: 'Automated Routing',
        elements: [
          el('p135-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#0f0d23', locked: true }),
          el('p135-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[135], borderRadius: 16 }),
          el('p135-s4-title', 'text', 140, 750, 1640, 50, { text: 'DISTRIBUTED MICRO-FULFILLMENT & REAL-TIME STOCK SHIFTING', fontSize: 38, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p135-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Algorithmic inventory rebalancing positions trending products in regional warehouses before orders are placed, cutting delivery times to under 24 hours while minimizing split-shipment shipping costs.', fontSize: 20, fontFamily: 'Inter', fill: '#ffe4e6', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p135-s5',
        name: 'Closing',`;
code = code.replace(old135, new135);

// For 136
const old136 = `      {
        id: 'p136-s4',
        name: 'Closing',`;
const new136 = `      {
        id: 'p136-s4',
        name: 'Dynamic Service Graphs',
        elements: [
          el('p136-s4-bg', 'rect', 0, 0, 1920, 1080, { fill: '#021a14', locked: true }),
          el('p136-s4-img', 'image', 140, 120, 1640, 580, { src: PHOTOS[136], borderRadius: 16 }),
          el('p136-s4-title', 'text', 140, 750, 1640, 50, { text: 'AUTOMATED DISTRIBUTED TOPOLOGY & ROOT-CAUSE DIAGNOSTICS', fontSize: 38, fontFamily: 'Space Grotesk', fontWeight: '800', fill: '#ffffff' }),
          el('p136-s4-desc', 'text', 140, 815, 1640, 100, { text: 'Observe-X correlates kernel-level network latency with application memory pressure in real time, identifying cascading microservice bottlenecks within seconds of deployment.', fontSize: 20, fontFamily: 'Inter', fill: '#6ee7b7', lineHeight: 1.6 })
        ]
      },
      {
        id: 'p136-s5',
        name: 'Closing',`;
code = code.replace(old136, new136);

fs.writeFileSync(filePath, code, 'utf-8');
console.log('Successfully updated decks 125-136 to have at least 5 slides each!');
