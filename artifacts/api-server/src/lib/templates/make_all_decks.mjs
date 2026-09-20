import fs from 'fs';
import path from 'path';

const targetFile = path.resolve('c:/Users/jaifr/OneDrive/Desktop/Web-Runner (3)/artifacts/api-server/src/lib/templates/presentations.ts');

// We will write a comprehensive generator that builds all 36 presentation templates
// strictly respecting:
// 1. Headlines: 76px - 110px on covers, 44px - 56px on inner slides.
// 2. Subtitles: 28px - 36px, Body: 20px - 26px, Stats: 96px - 140px.
// 3. ZERO report-like card soup / micro-text.
// 4. Strictly 5 - 10 slides per deck with diverse slide rhythms.
// 5. Distinct compositions (Full-bleed, Split-screen, Asymmetric, Brutalist, Swiss, Luxury, Minimalist, Data Viz, Pitch, etc.).
// 6. 100% unique Unsplash images across all 36 templates.

const buildScript = `
import fs from 'fs';
import path from 'path';

// Unique photo registry ensuring 0 duplicates across all 36 presentations
const UNIQUE_PHOTOS = {
  p101: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600', // Modern Skyscraper
  p102: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1600', // Arctic Glacial Peaks
  p103: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1600', // Fine Dining Gastronomy
  p104: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1600', // Tokyo Shinjuku Night
  p105: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600', // Architectural Concrete Minimal
  p106: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600', // Scandinavian Studio Interior
  p107: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1600', // Contemporary Art Gallery
  p108: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1600', // Vintage Books & Typography
  p109: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600', // Neural AI Mesh Abstract
  p110: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1600', // Cyber Security Matrix Code
  p111: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1600', // Autonomous Drone Flight
  p112: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600', // Silicon Microchip Wafer
  p113: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600', // Institutional Finance Tower
  p114: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600', // Medical Healthcare Precision
  p115: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1600', // Clean Wind Turbines
  p116: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600', // Modern Logistics Hub
  p117: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1600', // Technical Streetwear Model
  p118: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600', // Retro Sci-Fi Gaming Rig
  p119: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1600', // Electronic Music Festival Stage
  p120: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1600', // Vibrant Performance Beverage
  p121: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1600', // Haute Horlogerie Watch
  p122: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1600', // Luxury Yachting Ocean
  p123: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1600', // Burgundy Wine Cellar
  p124: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600', // Cliffside Mediterranean Villa
  p125: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600', // Multi-Agent AI Data Visual
  p126: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600', // Earth Satellite Radar Orbit
  p127: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1600', // Global Currency Exchange
  p128: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600', // Robotics Automation Arm
  p129: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1600', // Spatial Genomics Laboratory
  p130: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80&w=1600', // Mesoscale Atmospheric Supercell
  p131: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600', // Behavioral Economics Trading Floor
  p132: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1600', // Airborne Jungle LiDAR Survey
  p133: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600', // Flagship Retail Architecture
  p134: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1600', // Hypercar Aerodynamic Surfacing
  p135: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600', // Omnichannel Analytics Dashboard
  p136: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600'  // SaaS Product Telemetry Analytics
};

// Fix photo 113 to avoid duplicate of 101
UNIQUE_PHOTOS.p113 = 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1600'; // Executive Boardroom Glass

console.log('Unique photos mapped:', Object.keys(UNIQUE_PHOTOS).length);
`;

fs.writeFileSync(path.resolve('c:/Users/jaifr/OneDrive/Desktop/Web-Runner (3)/artifacts/api-server/src/lib/templates/make_all_decks.mjs'), buildScript);
console.log('make_all_decks.mjs prepared.');
