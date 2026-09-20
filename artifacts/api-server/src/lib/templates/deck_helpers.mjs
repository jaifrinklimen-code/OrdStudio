import fs from 'fs';
import path from 'path';

// Helper to create elements with sensible defaults
function el(id, type, x, y, width, height, opts = {}) {
  return {
    id,
    type,
    x: Math.round(x),
    y: Math.round(y),
    width: Math.round(width),
    height: Math.round(height),
    visible: true,
    locked: opts.locked || false,
    ...opts
  };
}

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
  125: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600', // Multi-Agent AI Data Visual
  126: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600', // Earth Satellite Radar Orbit
  127: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1600', // Global Currency Exchange
  128: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600', // Robotics Automation Arm
  129: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1600', // Spatial Genomics Laboratory
  130: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80&w=1600', // Mesoscale Atmospheric Supercell
  131: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600', // Behavioral Economics Trading Floor
  132: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1600', // Airborne Jungle LiDAR Survey
  133: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600', // Flagship Retail Architecture
  134: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1600', // Hypercar Aerodynamic Surfacing
  135: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600', // Omnichannel Analytics Dashboard
  136: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600'  // SaaS Product Telemetry Analytics
};

export { el, PHOTOS };
