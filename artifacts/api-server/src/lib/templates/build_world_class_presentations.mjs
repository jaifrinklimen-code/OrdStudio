import fs from 'fs';
import path from 'path';

const targetFile = path.resolve('c:/Users/jaifr/OneDrive/Desktop/Web-Runner (3)/artifacts/api-server/src/lib/templates/presentations.ts');
const frontendTargetFile = path.resolve('c:/Users/jaifr/OneDrive/Desktop/Web-Runner (3)/artifacts/creative-studio/src/app/lib/canonicalTemplates.ts');
const presentationBuilderFile = path.resolve('c:/Users/jaifr/OneDrive/Desktop/Web-Runner (3)/artifacts/creative-studio/src/app/components/presentationBuilder.ts');

// 36 Unique, verified, high-res Unsplash photos (zero duplicates)
const UNIQUE_PHOTOS = {
  p101: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600', // Skyscraper Horizon
  p102: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1600', // Arctic Glacier
  p103: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1600', // Michelin Gastronomy
  p104: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1600', // Tokyo Shinjuku
  p105: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600', // Concrete Brutalism
  p106: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600', // Nordic Interior
  p107: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1600', // Fine Art Gallery
  p108: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1600', // Type Design Folio
  p109: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600', // Neural AI Mesh
  p110: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1600', // Quantum Matrix Code
  p111: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1600', // Autonomous Drone
  p112: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600', // Silicon Microchip
  p113: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1600', // Institutional Finance
  p114: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600', // Clinical Oncology
  p115: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1600', // Clean Wind Turbines
  p116: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600', // High-Bay Logistics
  p117: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1600', // Technical Streetwear
  p118: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600', // Sci-Fi Gaming Rig
  p119: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1600', // Audio-Visual Stage
  p120: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1600', // Performance Beverage
  p121: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1600', // Haute Horlogerie Watch
  p122: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1600', // Naval Yacht Architecture
  p123: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1600', // Burgundy Wine Cellar
  p124: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600', // Cliffside Villa
  p125: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1600', // Multi-Agent AI Data
  p126: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600', // Orbital Earth Satellites
  p127: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=1600', // Currency Settlement
  p128: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600', // Robotics Automation Arm
  p129: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1600', // Spatial Genomics Lab
  p130: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80&w=1600', // Mesoscale Atmospheric Supercell
  p131: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600', // Behavioral Economics
  p132: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1600', // Jungle LiDAR Survey
  p133: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600', // Flagship Spatial Retail
  p134: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1600', // Hypercar Aerodynamics
  p135: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600', // Omnichannel Analytics
  p136: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600'  // SaaS Product Telemetry
};

const DECK_DEFINITIONS = [
  {
    id: 101,
    name: "Architectural Horizon Monograph",
    title: "ARCHITECTURAL HORIZON",
    subcategory: "Architecture",
    bg: "#0a0d14",
    accent: "#f59e0b",
    font: "Space Grotesk",
    desc: "A masterclass in modern spatial minimalism, structural rhythm, and brutalist geometric engineering.",
    problem: {
      headline: "URBAN DENSITY & CLIMATE INTEGRATION FRICTION",
      painPoints: [
        { label: "01 / EMBODIED CARBON OVERHEAD", desc: "Conventional concrete structures generate excessive carbon loads before occupancy." },
        { label: "02 / THERMAL ENVELOPE INEFFICIENCY", desc: "Glazed facades lacking passive aerodynamics create unsustainable mechanical cooling dependencies." },
        { label: "03 / SPATIAL MONOTONY & DISCONNECTION", desc: "Rigid commercial floorplates fail to integrate human circadian wellness and biophilic negative space." }
      ],
      impactStat: "-42%",
      impactLabel: "EMBODIED CARBON REDUCTION",
      impactDesc: "Measured across 12 high-density skyscraper deployments using pozzolanic binder composites."
    },
    solution: [
      { title: "PASSIVE AERODYNAMIC ENVELOPE", desc: "Self-shading ceramic louvers that deflect extreme solar gain while guiding natural cross-ventilation through vertical atriums.", stat: "-38% HVAC Load" },
      { title: "CIRCULAR LOW-CARBON CONCRETE", desc: "Proprietary high-density aggregate mixes replacing 60% of traditional Portland cement with recycled fly ash and slag.", stat: "99.4% Structural Integrity" },
      { title: "BIOPHILIC CANTILEVER PARKS", desc: "Tiered sky gardens engineered into structural outriggers providing acoustic isolation and natural air filtration.", stat: "14 Landmark Realizations" }
    ],
    stats: [
      { num: "-42%", label: "Embodied Carbon Footprint", desc: "Recycled pozzolanic binders verified against stringent international carbon benchmark standards.", tag: "LEED Platinum Certified" },
      { num: "99.4%", label: "Solar Envelope Harvest", desc: "Photovoltaic glass louvers generating sustainable daytime base load electricity for internal systems.", tag: "Zero-Net Energy Ready" },
      { num: "3.4x", label: "Acoustic Noise Dampening", desc: "Triple-layer acoustic facade isolating exterior ambient highway noise below 32 decibels.", tag: "Class A Acoustic Rating" }
    ],
    roadmap: [
      { phase: "PHASE 01 · SITE DISCOVERY", title: "Volumetric Spatial Modeling", desc: "Solar azimuth modeling, wind tunnel CFD simulations, and geotechnical foundation validation." },
      { phase: "PHASE 02 · FABRICATION", title: "Pre-Cast Modular Assembly", desc: "Off-site precision casting of aerodynamic envelope fins and carbon-neutral structural slabs." },
      { phase: "PHASE 03 · COMMISSIONING", title: "Smart Envelope Telemetry", desc: "Full sensor array integration monitoring facade stress, thermal flow, and ambient air quality." }
    ],
    caseStudy: {
      client: "Helios Tower · 64 Floors",
      location: "Rotterdam Metropolitan District · Completed 2025",
      summary: "An 84,000 m² landmark mixed-use skyscraper demonstrating that monumental aesthetic grandeur and extreme carbon efficiency can be achieved in unified harmony.",
      m1: "+84,000 m²", m1Label: "Net Usable Area",
      m2: "-52%", m2Label: "Annual Energy Spend",
      quote: "“The Helios Tower proves that modern architecture can achieve monumental sculptural presence without compromising on climate resilience.”",
      author: "Elena van der Meer · Chief Architect, Studio Horizon"
    },
    takeaways: [
      { title: "AESTHETIC & CLIMATE SYNTHESIS", desc: "Engineering form directly around natural wind, light, and thermodynamics produces effortless beauty." },
      { title: "MATERIAL INTEGRITY AS A MOAT", desc: "Low-carbon concrete formulations provide long-term durability while reducing environmental liability." },
      { title: "VALIDATED PRODUCTION BLUEPRINT", desc: "Standardized modular envelope systems accelerate construction timelines by 35% across multi-tower sites." }
    ]
  },
  {
    id: 102,
    name: "Arctic Glacial Field Expedition",
    title: "ARCTIC GLACIAL FIELD STUDY",
    subcategory: "Expedition & Climate",
    bg: "#031d16",
    accent: "#10b981",
    font: "Space Grotesk",
    desc: "Autonomous sensor telemetry and ice core cryosphere analysis across sub-zero glacial valleys.",
    problem: {
      headline: "CRYOSPHERIC ACCELERATION & SENSOR BLIND SPOTS",
      painPoints: [
        { label: "01 / DATA LATENCY IN EXTREME LATITUDES", desc: "Harsh weather creates multi-week telemetry dropouts in remote glacial drainage basins." },
        { label: "02 / PALEOCLIMATIC CHRONOLOGY GAPS", desc: "Surface melting threatens centuries-old ice stratigraphy before scientific core extraction." },
        { label: "03 / HIGH-RISK MANUAL FIELD LOGISTICS", desc: "Human crews face dangerous crevasse terrain when maintaining legacy meteorological stations." }
      ],
      impactStat: "4.2x",
      impactLabel: "ACCELERATED ICE MELT RATE",
      impactDesc: "Recorded across high-latitude arctic monitoring cirques over the 2024-2026 observation cycle."
    },
    solution: [
      { title: "AUTONOMOUS CRYOSPHERE SENSORS", desc: "Solar and wind-powered telemetry pods transmitting continuous ice core temperature and firn density via satellite mesh.", stat: "99.9% Telemetry Uptime" },
      { title: "DEEP ICE DRILL RECOVERY", desc: "Lightweight mechanical thermal drill extracting pristine 300-meter core cylinders spanning four millennia.", stat: "4,000 Year Chronology" },
      { title: "REMOTE DRONE LIDAR MAPPING", desc: "High-density airborne laser scanning calculating sub-centimeter elevation changes across calving glaciers.", stat: "±2mm Elevation Precision" }
    ],
    stats: [
      { num: "-34.8°C", label: "Ground Temperature Minimum", desc: "Continuous sensor array operation maintained through extreme polar winter blizzards.", tag: "Zero-Downtime Telemetry" },
      { num: "2,400m", label: "Headwall Cirque Elevation", desc: "Highest elevation ice core extraction zone successfully sampled in the Abisko wilderness range.", tag: "Pristine Ice Recovered" },
      { num: "100%", label: "Satellite Uplink Reliability", desc: "Iridium satellite constellation relays ensuring uninterrupted scientific data transmission.", tag: "Real-Time Telemetry" }
    ],
    roadmap: [
      { phase: "PHASE 01 · BASE DEPLOYMENT", title: "Forward Research Station", desc: "Establishment of autonomous Base Camp North and satellite communication ground station." },
      { phase: "PHASE 02 · CORE EXTRACTION", title: "Deep Glacial Drilling", desc: "Continuous 24-hour ice core extraction recovering 300 meters of paleoclimatic ice samples." },
      { phase: "PHASE 03 · SYNTHESIS", title: "Global Climate Publication", desc: "Laboratory mass spectrometry and publication of the four-millennia arctic climate archive." }
    ],
    caseStudy: {
      client: "Abisko North Glacial Basin",
      location: "Swedish Lapland · 68.3582° N, 18.7842° E",
      summary: "Comprehensive field survey deploying 24 autonomous cryospheric nodes and recovering the deepest continuous ice core record in northern Scandinavia.",
      m1: "300m", m1Label: "Ice Core Depth",
      m2: "4,000+", m2Label: "Years Documented",
      quote: "“The data gathered by this expedition will serve as the global benchmark for high-latitude glacial dynamics for decades to come.”",
      author: "Dr. Astrid Lindqvist · Director of Polar Cryosphere Research"
    },
    takeaways: [
      { title: "CONTINUOUS REAL-TIME MONITORING", desc: "Autonomous sensors eliminate the need for dangerous mid-winter manual expedition runs." },
      { title: "HIGH-RESOLUTION DATA ARCHIVE", desc: "Deep ice core isotopes provide an uninterrupted climate chronology spanning 4,000 years." },
      { title: "GLOBAL CLIMATE IMPACT", desc: "Empirical ice dynamics models empower international climate policymakers with precise sea-level projections." }
    ]
  },
  {
    id: 103,
    name: "Maison de Haute Cuisine Monograph",
    title: "THE GASTRONOMY ARCHIVE",
    subcategory: "Culinary Arts",
    bg: "#180a0e",
    accent: "#f43f5e",
    font: "Playfair Display",
    desc: "Michelin three-star biodynamic gastronomy, seasonal terroir analysis, and culinary art monographs.",
    problem: {
      headline: "TERROIR DISCONNECTION & INDUSTRIALIZED FOOD",
      painPoints: [
        { label: "01 / LOSS OF BOTANICAL BIODIVERSITY", desc: "Monoculture agriculture has erased 75% of heirloom vegetable varietals from modern cuisine." },
        { label: "02 / CHEMICALLY DEPLETED SOIL VITALITY", desc: "Synthetic fertilizers destroy fungal mycorrhizae, degrading flavor complexity and nutrient density." },
        { label: "03 / DISCONNECTED DINING EXPERIENCES", desc: "Fine dining too often prioritizes theatrical gimmicks over agricultural provenance and terroir purity." }
      ],
      impactStat: "100%",
      impactLabel: "BIODYNAMIC INGREDIENT SOURCING",
      impactDesc: "All 18 menu courses sourced exclusively from our 40-hectare regenerative estate micro-farm."
    },
    solution: [
      { title: "REGENERATIVE ESTATE FARMING", desc: "Living soil cultivated using biodynamic compost preparations, ancient cover crops, and zero synthetic chemicals.", stat: "140 Heirloom Cultivars" },
      { title: "MICRO-SEASONAL CULINARY RHYTHM", desc: "Tasting menus that evolve weekly in strict synchronization with peak botanical harvest maturity.", stat: "52 Annual Micro-Menus" },
      { title: "ANCIENT FERMENTATION TECHNIQUES", desc: "Custom koji, wild vinegars, and barrel-aged garums unlocking deep umami profiles from estate botanicals.", stat: "3 Michelin Stars Retained" }
    ],
    stats: [
      { num: "3★", label: "Michelin Guide Distinction", desc: "Awarded three Michelin stars for exceptional culinary mastery and agricultural leadership.", tag: "Highest Distinction" },
      { num: "0km", label: "Farm-to-Kitchen Distance", desc: "Kitchen gardens located directly adjacent to the dining room ensuring immediate morning harvest.", tag: "100% On-Site Grown" },
      { num: "98.8%", label: "Zero-Waste Organic Circularity", desc: "Kitchen trimmings composted or fermented into botanical vinegars and nutrient-dense broth reductions.", tag: "Circular Kitchen" }
    ],
    roadmap: [
      { phase: "SEASON 01 · SPRING WAKE", title: "Emergence & Wild Foraging", desc: "Harvest of wild morels, birch sap reductions, and first-growth mountain herbs." },
      { phase: "SEASON 02 · SUMMER SOLAR", title: "Peak Estate Harvest", desc: "Preservation of 60 heirloom tomato varietals and open-fire estate grilling." },
      { phase: "SEASON 03 · AUTUMN CELLAR", title: "Ferments & Game Culinary", desc: "Release of barrel-aged vinegars, black truffle infusions, and slow-braised venison." }
    ],
    caseStudy: {
      client: "Maison Saint-Germain Tasting Room",
      location: "Burgundy, France · 40-Hectare Certified Biodynamic Estate",
      summary: "A revolutionary gastronomy installation where agricultural terroir, centuries-old wine cellars, and avant-garde culinary technique converge.",
      m1: "18", m1Label: "Seasonal Courses",
      m2: "100%", m2Label: "Estate Traceability",
      quote: "“Gastronomy at this level is no longer just food; it is an intimate philosophical dialogue with the earth and the seasons.”",
      author: "Chef Jean-Luc de Montmirail · Grand Master Chef"
    },
    takeaways: [
      { title: "SOIL AS CULINARY CANVAS", desc: "Uncompromising flavor complexity begins months before cooking in living biodynamic soil." },
      { title: "CIRCULAR ARTISANAL LUXURY", desc: "Zero-waste kitchen philosophy elevates discarded botanicals into profound fermentation reductions." },
      { title: "UNMATCHED GUEST RESONANCE", desc: "Story-led agricultural dining creates enduring emotional connections and year-long reservation queues." }
    ]
  }
];

// Generate remaining 33 templates dynamically using domain-specific parameters
const THEMES = [
  { id: 104, name: "Tokyo Nocturne Cyber Monograph", title: "SHINJUKU NOCTURNE 35MM", sub: "Urban Culture", bg: "#05050d", accent: "#ec4899", font: "Space Grotesk", desc: "35mm low-light analog street cinematography capturing midnight Tokyo urban density." },
  { id: 105, name: "Swiss Brutalist Modular Manifesto", title: "SWISS MODULAR GEOMETRY", sub: "Design Systems", bg: "#0d0d14", accent: "#ef4444", font: "Space Grotesk", desc: "Rigorous mathematical grid systems, grotesk typography, and brutalist spatial proportions." },
  { id: 106, name: "Nordic Interior & Spatial Architecture", title: "NORDIC SPATIAL BALANCE", sub: "Interior Design", bg: "#f1f5f9", accent: "#0284c7", font: "Outfit", desc: "Tactile natural timber, diffused daylighting, and functional Scandinavian minimalism." },
  { id: 107, name: "Contemporary Fine Art Curation", title: "FINE ART RETROSPECTIVE", sub: "Art Curation", bg: "#141418", accent: "#fbbf24", font: "Playfair Display", desc: "Museum-grade exhibition curation documenting spatial contemporary art installations." },
  { id: 108, name: "Editorial Typography & Type Design", title: "TYPE DESIGN MONOGRAPH", sub: "Typography", bg: "#fafaf9", accent: "#292524", font: "Playfair Display", desc: "Variable font optical axes, high-contrast serif terminals, and classical grid architecture." },
  { id: 109, name: "Neural AI Mesh & Autonomous Agents", title: "AUTONOMOUS NEURAL AGENTS", sub: "Artificial Intelligence", bg: "#050714", accent: "#38bdf8", font: "Space Grotesk", desc: "Multi-agent cognitive orchestrations, sub-millisecond vector streaming, and self-healing memory graphs." },
  { id: 110, name: "Zero-Trust Cyber Matrix Security", title: "ZERO-TRUST MATRIX PROTOCOL", sub: "Cybersecurity", bg: "#030712", accent: "#22c55e", font: "Space Grotesk", desc: "Post-quantum lattice cryptography, hardware security enclaves, and real-time behavioral telemetry." },
  { id: 111, name: "Autonomous Air Mobility System", title: "AIRBORNE AUTONOMY FLEET", sub: "Aviation & Robotics", bg: "#080c18", accent: "#f97316", font: "Space Grotesk", desc: "eVTOL urban airspace navigation, redundant flight control avionics, and vertiport routing." },
  { id: 112, name: "Quantum Silicon Wafer Architecture", title: "QUANTUM SILICON MICROCHIP", sub: "Semiconductors", bg: "#040914", accent: "#06b6d4", font: "Space Grotesk", desc: "Sub-2nm extreme ultraviolet lithography, gate-all-around nanosheets, and wafer interconnects." },
  { id: 113, name: "Global Banking & Asset Management", title: "GLOBAL CAPITAL & ASSETS", sub: "Institutional Finance", bg: "#091124", accent: "#3b82f6", font: "Outfit", desc: "Sovereign asset allocation, automated liquidity stress-testing, and multi-currency risk models." },
  { id: 114, name: "Clinical Precision Oncology", title: "PRECISION CLINICAL ONCOLOGY", sub: "Biotechnology", bg: "#061824", accent: "#0ea5e9", font: "Outfit", desc: "Single-cell mRNA diagnostics, targeted monoclonal therapies, and decentralized clinical trials." },
  { id: 115, name: "Clean Wind Grid Infrastructure", title: "CLEAN WIND GRID NETWORKS", sub: "Renewable Energy", bg: "#041c14", accent: "#10b981", font: "Space Grotesk", desc: "Offshore wind turbine telemetry, megawatt battery storage, and dynamic HVDC transmission." },
  { id: 116, name: "High-Bay Robotics Logistics Hub", title: "AUTONOMOUS HIGH-BAY LOGISTICS", sub: "Supply Chain", bg: "#0f172a", accent: "#f97316", font: "Space Grotesk", desc: "Automated guided vehicle swarms, dynamic container slotting, and predictive port routing." },
  { id: 117, name: "Technical Streetwear Capsule 2026", title: "TECHNICAL STREETWEAR CAPSULE", sub: "Fashion & Apparel", bg: "#0a0a0c", accent: "#a855f7", font: "Space Grotesk", desc: "3-layer waterproof membrane tailoring, modular magnetic closures, and limited drop architecture." },
  { id: 118, name: "Chrono-Shift Game Engine Rig", title: "CHRONO-SHIFT ENGINE ARCHITECTURE", sub: "Game Development", bg: "#0c0414", accent: "#ec4899", font: "Space Grotesk", desc: "Real-time raymarched spatial lighting, neural physics solvers, and deterministic multiplayer meshes." },
  { id: 119, name: "Resonance Audio-Visual Stage", title: "RESONANCE AUDIO-VISUAL STAGE", sub: "Experiential Media", bg: "#080414", accent: "#8b5cf6", font: "Space Grotesk", desc: "Volumetric spatial audio arrays, synchronized strobe laser mapping, and generative reactive visuals." },
  { id: 120, name: "Volt Performance Nootropic Lab", title: "VOLT PERFORMANCE NOOTROPICS", sub: "Consumer Health", bg: "#060e14", accent: "#84cc16", font: "Outfit", desc: "Liposomal cognitive bio-actives, sustained neurotransmitter focus, and carbon-neutral packaging." },
  { id: 121, name: "Haute Horlogerie Grand Tourbillon", title: "HAUTE HORLOGERIE GENEVA", sub: "Luxury Horology", bg: "#0c0a0c", accent: "#d97706", font: "Playfair Display", desc: "Hand-finished flying tourbillon escapements, hand-engraved rose gold bridges, and chronometric master certification." },
  { id: 122, name: "Oceanic Naval Architecture", title: "OCEANIC SUPERYACHT ENGINEERING", sub: "Naval Architecture", bg: "#03111c", accent: "#38bdf8", font: "Playfair Display", desc: "Slender displacement monohulls, hydrogen-electric hybrid propulsion, and carbon composite superstructures." },
  { id: 123, name: "Domaine Grand Cru Viticulture", title: "DOMAINE GRAND CRU TERROIR", sub: "Fine Viticulture", bg: "#1a080c", accent: "#f43f5e", font: "Playfair Display", desc: "Limestone bedrock geological profiling, native yeast barrel aging, and single-vineyard vintage releases." },
  { id: 124, name: "Cantilevered Mediterranean Villa", title: "MEDITERRANEAN CANTILEVER VILLA", sub: "Luxury Architecture", bg: "#0c0e14", accent: "#eab308", font: "Outfit", desc: "Post-tensioned concrete structural cantilevers suspended over dramatic coastal cliffs." },
  { id: 125, name: "Multi-Agent AI Protocol Pitch", title: "MULTI-AGENT PROTOCOL PITCH", sub: "AI Infrastructure", bg: "#050714", accent: "#06b6d4", font: "Space Grotesk", desc: "Decentralized consensus engines powering autonomous cognitive workforces at enterprise scale." },
  { id: 126, name: "Orbital Radar Satellite Array", title: "ORBITAL SAR RADAR ARRAY", sub: "Space Technology", bg: "#030612", accent: "#38bdf8", font: "Space Grotesk", desc: "Synthetic aperture radar imaging capturing all-weather 25cm resolution ground topography." },
  { id: 127, name: "Global Currency Settlement Engine", title: "GLOBAL CURRENCY SETTLEMENT", sub: "Fintech Core", bg: "#070c18", accent: "#10b981", font: "Space Grotesk", desc: "Atomic liquidity clearing engine settling cross-border enterprise payments in sub-second latency." },
  { id: 128, name: "Collaborative Robotics Fleet", title: "AUTONOMOUS ROBOTICS FLEET", sub: "Industrial Automation", bg: "#090d16", accent: "#6366f1", font: "Space Grotesk", desc: "6-axis precision robotic manipulators equipped with high-speed depth vision and tactile sensors." },
  { id: 129, name: "Spatial Genomics Cancer Atlas", title: "SPATIAL GENOMICS ATLAS", sub: "Genomic Medicine", bg: "#061820", accent: "#14b8a6", font: "Outfit", desc: "In situ sequencing mapping cellular gene expression profiles across intact tumor microenvironments." },
  { id: 130, name: "Mesoscale Atmospheric Physics", title: "ATMOSPHERIC PHYSICS SIMULATION", sub: "Climate Modeling", bg: "#060914", accent: "#38bdf8", font: "Space Grotesk", desc: "Turbulent fluid dynamics modeling resolving extreme convective storm formations at kilometer scale." },
  { id: 131, name: "Behavioral Market Alpha Survey", title: "QUANTITATIVE BEHAVIORAL ALPHA", sub: "Quantitative Finance", bg: "#080b18", accent: "#4f46e5", font: "Outfit", desc: "Order-book microstructure signals and natural language sentiment alpha strategies." },
  { id: 132, name: "Airborne Jungle LiDAR Survey", title: "JUNGLE LIDAR ARCHAEOLOGY", sub: "Archaeological Tech", bg: "#041a12", accent: "#34d399", font: "Space Grotesk", desc: "High-density airborne laser scanning penetrating dense tropical canopies to reveal lost cities." },
  { id: 133, name: "Flagship Retail Spatial Architecture", title: "FLAGSHIP SPATIAL RETAIL", sub: "Brand Architecture", bg: "#0c0d12", accent: "#f59e0b", font: "Playfair Display", desc: "Monolithic travertine marble pavilions merging physical craftsmanship with seamless digital checkout." },
  { id: 134, name: "Aerodynamic Hypercar Monocoque", title: "HYPERCAR AERODYNAMIC SURFACING", sub: "Automotive Engineering", bg: "#080608", accent: "#ef4444", font: "Space Grotesk", desc: "Active downforce venturi channels and pre-preg carbon fiber composite structural monocoques." },
  { id: 135, name: "Omnichannel Telemetry Analytics", title: "OMNICHANNEL TELEMETRY PLATFORM", sub: "Data Infrastructure", bg: "#060818", accent: "#8b5cf6", font: "Space Grotesk", desc: "Real-time distributed streaming engines processing 50M events/sec with guaranteed zero data loss." },
  { id: 136, name: "SaaS Enterprise Product Metrics", title: "ENTERPRISE SAAS VELOCITY", sub: "B2B SaaS Growth", bg: "#080c1c", accent: "#06b6d4", font: "Space Grotesk", desc: "Capital-efficient growth telemetry tracking net revenue retention, magic numbers, and unit economics." }
];

for (const t of THEMES) {
  DECK_DEFINITIONS.push({
    id: t.id,
    name: t.name,
    title: t.title,
    subcategory: t.sub,
    bg: t.bg,
    accent: t.accent,
    font: t.font,
    desc: t.desc,
    problem: {
      headline: `CHRONIC FRICTION IN ${t.sub.toUpperCase()} SYSTEMS`,
      painPoints: [
        { label: "01 / SYSTEM FRAGMENTATION & DATA SILOS", desc: `Legacy architectures fail to unify disparate workflows across distributed ${t.sub.toLowerCase()} pipelines.` },
        { label: "02 / LATENCY & BOTTLENECK ESCALATION", desc: "Manual intervention points introduce critical throughput delays during peak production cycles." },
        { label: "03 / SCALABILITY & COMPLIANCE CEILINGS", desc: "Rigid legacy infrastructures cannot maintain deterministic uptime under high concurrency demands." }
      ],
      impactStat: "3.6x",
      impactLabel: "VELOCITY ACCELERATION DELTA",
      impactDesc: `Measured across production pilot deployments over a 12-month evaluation period.`
    },
    solution: [
      { title: `AUTONOMOUS ${t.sub.toUpperCase()} CORE`, desc: `Engineered from the ground up for zero-latency execution, real-time telemetry, and self-healing reliability.`, stat: "99.99% Reliability" },
      { title: "INTEGRATED MESH PROTOCOL", desc: "Seamless orchestration across distributed endpoints with automated load-balancing and state recovery.", stat: "<1.4ms Global Latency" },
      { title: "ENTERPRISE GOVERNANCE ENGINE", desc: "Military-grade encryption, immutable audit trails, and strict policy enforcement at every boundary.", stat: "Zero-Trust Verified" }
    ],
    stats: [
      { num: "99.99%", label: "Operating Availability", desc: "Deterministic system uptime maintained continuously across multi-region production clusters.", tag: "Zero-Downtime SLA" },
      { num: "3.8x", label: "Throughput Acceleration", desc: "Measurable performance velocity improvement over legacy baseline architectures.", tag: "Empirically Validated" },
      { num: "$48.2M", label: "Realized Economic Value", desc: "Compounding operational efficiency and direct capital savings delivered across customer cohorts.", tag: "Audited ROI" }
    ],
    roadmap: [
      { phase: "PHASE 01 · SYSTEM AUDIT", title: "Baseline Architecture & Discovery", desc: "Comprehensive dependency mapping, technical parameter validation, and security clearances." },
      { phase: "PHASE 02 · CORE DEPLOYMENT", title: "Pilot Infrastructure & Telemetry", desc: "Staged deployment across designated test clusters with automated real-time telemetry." },
      { phase: "PHASE 03 · GLOBAL SCALE", title: "Enterprise Federation & Scale", desc: "Full multi-region scale-out with autonomous failure recovery and partner API integration." }
    ],
    caseStudy: {
      client: `${t.title} Production Cluster`,
      location: `Global Hub · Realized 2025/2026`,
      summary: `A landmark deployment validating that modern distributed architectures unlock unprecedented operational compounding at enterprise scale.`,
      m1: "99.99%", m1Label: "System Uptime",
      m2: "+148%", m2Label: "Throughput Velocity",
      quote: `“This architecture sets the definitive benchmark for reliability, speed, and elegance across the modern ${t.sub.toLowerCase()} landscape.”`,
      author: `Executive Vice President · Technology Infrastructure`
    },
    takeaways: [
      { title: "ARCHITECTURAL CLARITY AS A MOAT", desc: "Disciplined modular systems eliminate legacy technical debt and accelerate release velocity." },
      { title: "EMPIRICAL DETERMINISM", desc: "Real-time telemetry gives executive leaders absolute certainty over operating parameters." },
      { title: "IMMEDIATE CAPITAL COMPOUNDING", desc: "High-efficiency design delivers measurable unit economic gains from day one." }
    ]
  });
}

function buildDeckSlides(deck) {
  const photo = UNIQUE_PHOTOS[`p${deck.id}`];
  const isLight = deck.bg === '#ffffff' || deck.bg === '#f1f5f9' || deck.bg === '#fafaf9' || deck.bg === '#faf7f2';
  const textColor = isLight ? '#0f172a' : '#ffffff';
  const subColor = isLight ? '#475569' : '#94a3b8';
  const cardBg = isLight ? '#ffffff' : 'rgba(255,255,255,0.04)';
  const cardBorder = isLight ? '#e2e8f0' : 'rgba(255,255,255,0.08)';
  const cardBorderAccent = deck.accent;

  const slides = [];

  // ── Slide 1: Cover (Hero / Title) ──
  slides.push({
    id: `p${deck.id}-s1`,
    name: 'Cover',
    elements: [
      { id: `p${deck.id}-s1-bg`, type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: deck.bg, locked: true, visible: true },
      { id: `p${deck.id}-s1-img`, type: 'image', x: 0, y: 0, width: 1920, height: 1080, src: photo, opacity: isLight ? 0.15 : 0.35, locked: true, visible: true },
      { id: `p${deck.id}-s1-scrim`, type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: isLight ? 'linear-gradient(to top, rgba(241,245,249,0.98) 0%, rgba(241,245,249,0.7) 45%, rgba(241,245,249,0.2) 100%)' : 'linear-gradient(to top, rgba(10,13,20,0.98) 0%, rgba(10,13,20,0.65) 45%, rgba(10,13,20,0.2) 100%)', locked: true, visible: true },
      { id: `p${deck.id}-s1-tag`, type: 'text', x: 140, y: 440, width: 1200, height: 35, text: `✦  EXECUTIVE BRIEFING  ·  ${deck.subcategory.toUpperCase()} SPECIAL EDITION`, fontSize: 18, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, letterSpacing: 2, visible: true },
      { id: `p${deck.id}-s1-title`, type: 'text', x: 140, y: 490, width: 1640, height: 210, text: deck.title.toUpperCase(), fontSize: 86, fontFamily: deck.font, fontWeight: '900', fill: textColor, lineHeight: 1.05, visible: true },
      { id: `p${deck.id}-s1-bar`, type: 'rect', x: 140, y: 720, width: 160, height: 6, fill: deck.accent, visible: true },
      { id: `p${deck.id}-s1-desc`, type: 'text', x: 140, y: 750, width: 1300, height: 90, text: deck.desc, fontSize: 24, fontFamily: 'Inter', fill: subColor, lineHeight: 1.5, visible: true },
      { id: `p${deck.id}-s1-foot`, type: 'text', x: 140, y: 950, width: 1200, height: 30, text: `ORD STUDIO CANONICAL ARCHIVE  ·  CONFIDENTIAL  ·  2026/2027`, fontSize: 16, fontFamily: 'Inter', fontWeight: '700', fill: subColor, visible: true }
    ]
  });

  // ── Slide 2: Strategic Agenda & Chapter Breakdown ──
  slides.push({
    id: `p${deck.id}-s2`,
    name: 'Agenda',
    elements: [
      { id: `p${deck.id}-s2-bg`, type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: deck.bg, locked: true, visible: true },
      { id: `p${deck.id}-s2-photo`, type: 'image', x: 0, y: 0, width: 800, height: 1080, src: photo, locked: true, visible: true },
      { id: `p${deck.id}-s2-overlay`, type: 'rect', x: 560, y: 0, width: 240, height: 1080, fill: isLight ? 'linear-gradient(to right, transparent, #f1f5f9)' : 'linear-gradient(to right, transparent, #0a0d14)', locked: true, visible: true },
      { id: `p${deck.id}-s2-tag`, type: 'text', x: 880, y: 90, width: 900, height: 30, text: `✦  EXECUTIVE ROADMAP & CHAPTERS`, fontSize: 16, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, letterSpacing: 2, visible: true },
      { id: `p${deck.id}-s2-head`, type: 'text', x: 880, y: 130, width: 920, height: 60, text: 'TABLE OF CONTENTS & AGENDA', fontSize: 46, fontFamily: deck.font, fontWeight: '800', fill: textColor, visible: true },
      { id: `p${deck.id}-s2-bar`, type: 'rect', x: 880, y: 200, width: 120, height: 4, fill: deck.accent, visible: true },
      
      { id: `p${deck.id}-s2-c1`, type: 'rect', x: 880, y: 240, width: 900, height: 140, fill: cardBg, stroke: cardBorder, strokeWidth: 1, borderRadius: 12, visible: true },
      { id: `p${deck.id}-s2-c1-n`, type: 'text', x: 910, y: 265, width: 840, height: 35, text: '01 / FOUNDATIONAL CONTEXT & BASELINE FRICTION', fontSize: 22, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, visible: true },
      { id: `p${deck.id}-s2-c1-d`, type: 'text', x: 910, y: 305, width: 840, height: 55, text: 'Macro drivers, root inefficiencies, and baseline parameter constraints.', fontSize: 18, fontFamily: 'Inter', fill: subColor, lineHeight: 1.5, visible: true },

      { id: `p${deck.id}-s2-c2`, type: 'rect', x: 880, y: 410, width: 900, height: 140, fill: cardBg, stroke: cardBorder, strokeWidth: 1, borderRadius: 12, visible: true },
      { id: `p${deck.id}-s2-c2-n`, type: 'text', x: 910, y: 435, width: 840, height: 35, text: '02 / ARCHITECTURAL TOPOLOGY & SOLUTION CORE', fontSize: 22, fontFamily: deck.font, fontWeight: '800', fill: textColor, visible: true },
      { id: `p${deck.id}-s2-c2-d`, type: 'text', x: 910, y: 475, width: 840, height: 55, text: 'Unified platform design, component specs, and security enclaves.', fontSize: 18, fontFamily: 'Inter', fill: subColor, lineHeight: 1.5, visible: true },

      { id: `p${deck.id}-s2-c3`, type: 'rect', x: 880, y: 580, width: 900, height: 140, fill: cardBg, stroke: cardBorder, strokeWidth: 1, borderRadius: 12, visible: true },
      { id: `p${deck.id}-s2-c3-n`, type: 'text', x: 910, y: 605, width: 840, height: 35, text: '03 / EMPIRICAL BENCHMARKS & TELEMETRY', fontSize: 22, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, visible: true },
      { id: `p${deck.id}-s2-c3-d`, type: 'text', x: 910, y: 645, width: 840, height: 55, text: 'Measured performance gains, latency records, and economic compounding.', fontSize: 18, fontFamily: 'Inter', fill: subColor, lineHeight: 1.5, visible: true },

      { id: `p${deck.id}-s2-c4`, type: 'rect', x: 880, y: 750, width: 900, height: 140, fill: cardBg, stroke: cardBorder, strokeWidth: 1, borderRadius: 12, visible: true },
      { id: `p${deck.id}-s2-c4-n`, type: 'text', x: 910, y: 775, width: 840, height: 35, text: '04 / PHASED ROADMAP & REALIZED CASE STUDIES', fontSize: 22, fontFamily: deck.font, fontWeight: '800', fill: textColor, visible: true },
      { id: `p${deck.id}-s2-c4-d`, type: 'text', x: 910, y: 815, width: 840, height: 55, text: 'Step-by-step rollout schedule, SLA guarantees, and enterprise outcomes.', fontSize: 18, fontFamily: 'Inter', fill: subColor, lineHeight: 1.5, visible: true },

      { id: `p${deck.id}-s2-foot`, type: 'text', x: 880, y: 940, width: 900, height: 30, text: 'ESTIMATED BRIEFING RUNTIME: 25 MINUTES · INCLUDES Q&A', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', fill: subColor, visible: true }
    ]
  });

  // ── Slide 3: Problem & Market Challenge ──
  slides.push({
    id: `p${deck.id}-s3`,
    name: 'Problem Analysis',
    elements: [
      { id: `p${deck.id}-s3-bg`, type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: deck.bg, locked: true, visible: true },
      { id: `p${deck.id}-s3-tag`, type: 'text', x: 100, y: 80, width: 1200, height: 30, text: `✦  MARKET FRICTION  ·  THE STRATEGIC CHALLENGE`, fontSize: 16, fontFamily: deck.font, fontWeight: '800', fill: '#ef4444', letterSpacing: 2, visible: true },
      { id: `p${deck.id}-s3-head`, type: 'text', x: 100, y: 120, width: 1720, height: 60, text: deck.problem.headline, fontSize: 46, fontFamily: deck.font, fontWeight: '800', fill: textColor, visible: true },
      { id: `p${deck.id}-s3-bar`, type: 'rect', x: 100, y: 190, width: 140, height: 4, fill: '#ef4444', visible: true },

      // Left Column: 3 Structured Pain Points
      { id: `p${deck.id}-s3-p1`, type: 'rect', x: 100, y: 230, width: 1040, height: 210, fill: cardBg, stroke: cardBorder, strokeWidth: 1, borderRadius: 16, visible: true },
      { id: `p${deck.id}-s3-p1-t`, type: 'text', x: 140, y: 260, width: 960, height: 35, text: deck.problem.painPoints[0].label, fontSize: 22, fontFamily: deck.font, fontWeight: '800', fill: '#ef4444', visible: true },
      { id: `p${deck.id}-s3-p1-d`, type: 'text', x: 140, y: 305, width: 960, height: 110, text: deck.problem.painPoints[0].desc, fontSize: 19, fontFamily: 'Inter', fill: textColor, lineHeight: 1.6, visible: true },

      { id: `p${deck.id}-s3-p2`, type: 'rect', x: 100, y: 470, width: 1040, height: 210, fill: cardBg, stroke: cardBorder, strokeWidth: 1, borderRadius: 16, visible: true },
      { id: `p${deck.id}-s3-p2-t`, type: 'text', x: 140, y: 500, width: 960, height: 35, text: deck.problem.painPoints[1].label, fontSize: 22, fontFamily: deck.font, fontWeight: '800', fill: '#ef4444', visible: true },
      { id: `p${deck.id}-s3-p2-d`, type: 'text', x: 140, y: 545, width: 960, height: 110, text: deck.problem.painPoints[1].desc, fontSize: 19, fontFamily: 'Inter', fill: textColor, lineHeight: 1.6, visible: true },

      { id: `p${deck.id}-s3-p3`, type: 'rect', x: 100, y: 710, width: 1040, height: 210, fill: cardBg, stroke: cardBorder, strokeWidth: 1, borderRadius: 16, visible: true },
      { id: `p${deck.id}-s3-p3-t`, type: 'text', x: 140, y: 740, width: 960, height: 35, text: deck.problem.painPoints[2].label, fontSize: 22, fontFamily: deck.font, fontWeight: '800', fill: '#ef4444', visible: true },
      { id: `p${deck.id}-s3-p3-d`, type: 'text', x: 140, y: 785, width: 960, height: 110, text: deck.problem.painPoints[2].desc, fontSize: 19, fontFamily: 'Inter', fill: textColor, lineHeight: 1.6, visible: true },

      // Right Column: High-Impact Market Warning Card
      { id: `p${deck.id}-s3-stat-card`, type: 'rect', x: 1180, y: 230, width: 640, height: 690, fill: isLight ? '#fee2e2' : '#1c0a0d', stroke: '#ef4444', strokeWidth: 2, borderRadius: 20, visible: true },
      { id: `p${deck.id}-s3-stat-tag`, type: 'text', x: 1220, y: 280, width: 560, height: 30, text: 'CRITICAL INEFFICIENCY INDICATOR', fontSize: 16, fontFamily: deck.font, fontWeight: '800', fill: '#ef4444', letterSpacing: 2, visible: true },
      { id: `p${deck.id}-s3-stat-num`, type: 'text', x: 1220, y: 330, width: 560, height: 140, text: deck.problem.impactStat, fontSize: 110, fontFamily: deck.font, fontWeight: '900', fill: '#ef4444', visible: true },
      { id: `p${deck.id}-s3-stat-lbl`, type: 'text', x: 1220, y: 480, width: 560, height: 40, text: deck.problem.impactLabel, fontSize: 24, fontFamily: deck.font, fontWeight: '800', fill: textColor, visible: true },
      { id: `p${deck.id}-s3-stat-desc`, type: 'text', x: 1220, y: 535, width: 560, height: 220, text: deck.problem.impactDesc, fontSize: 20, fontFamily: 'Inter', fill: subColor, lineHeight: 1.7, visible: true },
      { id: `p${deck.id}-s3-stat-bar`, type: 'rect', x: 1220, y: 840, width: 560, height: 4, fill: '#ef4444', visible: true },
      { id: `p${deck.id}-s3-stat-foot`, type: 'text', x: 1220, y: 860, width: 560, height: 30, text: 'VERIFIED AGAINST 36 ENTERPRISE AUDIT DATASETS', fontSize: 13, fontFamily: 'Inter', fontWeight: '700', fill: '#ef4444', visible: true }
    ]
  });

  // ── Slide 4: Strategic Solution & System Architecture ──
  slides.push({
    id: `p${deck.id}-s4`,
    name: 'Solution Architecture',
    elements: [
      { id: `p${deck.id}-s4-bg`, type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: deck.bg, locked: true, visible: true },
      { id: `p${deck.id}-s4-tag`, type: 'text', x: 100, y: 80, width: 1200, height: 30, text: `✦  CORE SOLUTION ARCHITECTURE  ·  SYSTEM SPECIFICATION`, fontSize: 16, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, letterSpacing: 2, visible: true },
      { id: `p${deck.id}-s4-head`, type: 'text', x: 100, y: 120, width: 1720, height: 60, text: 'UNIFIED PLATFORM ARCHITECTURE & CAPABILITIES', fontSize: 46, fontFamily: deck.font, fontWeight: '800', fill: textColor, visible: true },
      { id: `p${deck.id}-s4-bar`, type: 'rect', x: 100, y: 190, width: 140, height: 4, fill: deck.accent, visible: true },

      // 3 Deep Feature Cards
      { id: `p${deck.id}-s4-c1`, type: 'rect', x: 100, y: 230, width: 540, height: 740, fill: cardBg, stroke: cardBorder, strokeWidth: 1, borderRadius: 20, visible: true },
      { id: `p${deck.id}-s4-c1-pill`, type: 'rect', x: 140, y: 270, width: 180, height: 36, fill: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)', borderRadius: 18, visible: true },
      { id: `p${deck.id}-s4-c1-pill-t`, type: 'text', x: 140, y: 278, width: 180, height: 20, text: '01 / CORE LAYER', fontSize: 14, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, alignment: 'center', visible: true },
      { id: `p${deck.id}-s4-c1-t`, type: 'text', x: 140, y: 330, width: 460, height: 70, text: deck.solution[0].title, fontSize: 26, fontFamily: deck.font, fontWeight: '900', fill: textColor, lineHeight: 1.2, visible: true },
      { id: `p${deck.id}-s4-c1-d`, type: 'text', x: 140, y: 420, width: 460, height: 320, text: `${deck.solution[0].desc}\n\n• Deterministic sub-millisecond query execution\n• Automated state replication across edge nodes\n• Zero-downtime hot reloading protocols`, fontSize: 18, fontFamily: 'Inter', fill: subColor, lineHeight: 1.7, visible: true },
      { id: `p${deck.id}-s4-c1-stat-box`, type: 'rect', x: 140, y: 840, width: 460, height: 90, fill: isLight ? '#f8fafc' : 'rgba(255,255,255,0.04)', stroke: deck.accent, strokeWidth: 1, borderRadius: 12, visible: true },
      { id: `p${deck.id}-s4-c1-stat-t`, type: 'text', x: 160, y: 868, width: 420, height: 35, text: `✦  ${deck.solution[0].stat}`, fontSize: 20, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, visible: true },

      { id: `p${deck.id}-s4-c2`, type: 'rect', x: 690, y: 230, width: 540, height: 740, fill: cardBg, stroke: cardBorderAccent, strokeWidth: 2, borderRadius: 20, visible: true },
      { id: `p${deck.id}-s4-c2-pill`, type: 'rect', x: 730, y: 270, width: 180, height: 36, fill: deck.accent, borderRadius: 18, visible: true },
      { id: `p${deck.id}-s4-c2-pill-t`, type: 'text', x: 730, y: 278, width: 180, height: 20, text: '02 / MESH LAYER', fontSize: 14, fontFamily: deck.font, fontWeight: '800', fill: isLight ? '#ffffff' : '#000000', alignment: 'center', visible: true },
      { id: `p${deck.id}-s4-c2-t`, type: 'text', x: 730, y: 330, width: 460, height: 70, text: deck.solution[1].title, fontSize: 26, fontFamily: deck.font, fontWeight: '900', fill: textColor, lineHeight: 1.2, visible: true },
      { id: `p${deck.id}-s4-c2-d`, type: 'text', x: 730, y: 420, width: 460, height: 320, text: `${deck.solution[1].desc}\n\n• Dynamic concurrency scaling without locks\n• Self-healing graph routing mesh\n• Direct telemetry audit logging`, fontSize: 18, fontFamily: 'Inter', fill: subColor, lineHeight: 1.7, visible: true },
      { id: `p${deck.id}-s4-c2-stat-box`, type: 'rect', x: 730, y: 840, width: 460, height: 90, fill: isLight ? '#f8fafc' : 'rgba(255,255,255,0.04)', stroke: deck.accent, strokeWidth: 1, borderRadius: 12, visible: true },
      { id: `p${deck.id}-s4-c2-stat-t`, type: 'text', x: 750, y: 868, width: 420, height: 35, text: `✦  ${deck.solution[1].stat}`, fontSize: 20, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, visible: true },

      { id: `p${deck.id}-s4-c3`, type: 'rect', x: 1280, y: 230, width: 540, height: 740, fill: cardBg, stroke: cardBorder, strokeWidth: 1, borderRadius: 20, visible: true },
      { id: `p${deck.id}-s4-c3-pill`, type: 'rect', x: 1320, y: 270, width: 180, height: 36, fill: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)', borderRadius: 18, visible: true },
      { id: `p${deck.id}-s4-c3-pill-t`, type: 'text', x: 1320, y: 278, width: 180, height: 20, text: '03 / TRUST LAYER', fontSize: 14, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, alignment: 'center', visible: true },
      { id: `p${deck.id}-s4-c3-t`, type: 'text', x: 1320, y: 330, width: 460, height: 70, text: deck.solution[2].title, fontSize: 26, fontFamily: deck.font, fontWeight: '900', fill: textColor, lineHeight: 1.2, visible: true },
      { id: `p${deck.id}-s4-c3-d`, type: 'text', x: 1320, y: 420, width: 460, height: 320, text: `${deck.solution[2].desc}\n\n• Hardware enclave isolation validation\n• Cryptographic access tokens & RBAC\n• SOC2 Type II & ISO 27001 verified compliance`, fontSize: 18, fontFamily: 'Inter', fill: subColor, lineHeight: 1.7, visible: true },
      { id: `p${deck.id}-s4-c3-stat-box`, type: 'rect', x: 1320, y: 840, width: 460, height: 90, fill: isLight ? '#f8fafc' : 'rgba(255,255,255,0.04)', stroke: deck.accent, strokeWidth: 1, borderRadius: 12, visible: true },
      { id: `p${deck.id}-s4-c3-stat-t`, type: 'text', x: 1340, y: 868, width: 420, height: 35, text: `✦  ${deck.solution[2].stat}`, fontSize: 20, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, visible: true }
    ]
  });

  // ── Slide 5: Validated Metrics & Empirical Velocity ──
  slides.push({
    id: `p${deck.id}-s5`,
    name: 'Empirical Metrics',
    elements: [
      { id: `p${deck.id}-s5-bg`, type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: deck.bg, locked: true, visible: true },
      { id: `p${deck.id}-s5-tag`, type: 'text', x: 100, y: 80, width: 1200, height: 30, text: `✦  QUANTITATIVE PERFORMANCE  ·  AUDITED BENCHMARKS`, fontSize: 16, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, letterSpacing: 2, visible: true },
      { id: `p${deck.id}-s5-head`, type: 'text', x: 100, y: 120, width: 1720, height: 60, text: 'VALIDATED OPERATING BENCHMARKS & METRICS', fontSize: 46, fontFamily: deck.font, fontWeight: '800', fill: textColor, visible: true },
      { id: `p${deck.id}-s5-bar`, type: 'rect', x: 100, y: 190, width: 140, height: 4, fill: deck.accent, visible: true },

      // 3 Massive Stat Cards
      { id: `p${deck.id}-s5-c1`, type: 'rect', x: 100, y: 230, width: 540, height: 740, fill: cardBg, stroke: cardBorder, strokeWidth: 1, borderRadius: 20, visible: true },
      { id: `p${deck.id}-s5-c1-n`, type: 'text', x: 140, y: 280, width: 460, height: 130, text: deck.stats[0].num, fontSize: 104, fontFamily: deck.font, fontWeight: '900', fill: deck.accent, visible: true },
      { id: `p${deck.id}-s5-c1-t`, type: 'text', x: 140, y: 430, width: 460, height: 40, text: deck.stats[0].label, fontSize: 26, fontFamily: deck.font, fontWeight: '800', fill: textColor, visible: true },
      { id: `p${deck.id}-s5-c1-d`, type: 'text', x: 140, y: 485, width: 460, height: 260, text: deck.stats[0].desc, fontSize: 20, fontFamily: 'Inter', fill: subColor, lineHeight: 1.7, visible: true },
      { id: `p${deck.id}-s5-c1-pill`, type: 'rect', x: 140, y: 860, width: 460, height: 48, fill: isLight ? '#f1f5f9' : 'rgba(255,255,255,0.06)', stroke: cardBorder, strokeWidth: 1, borderRadius: 24, visible: true },
      { id: `p${deck.id}-s5-c1-pill-t`, type: 'text', x: 160, y: 874, width: 420, height: 25, text: `✓  ${deck.stats[0].tag}`, fontSize: 16, fontFamily: 'Inter', fontWeight: '700', fill: deck.accent, visible: true },

      { id: `p${deck.id}-s5-c2`, type: 'rect', x: 690, y: 230, width: 540, height: 740, fill: cardBg, stroke: cardBorderAccent, strokeWidth: 2, borderRadius: 20, visible: true },
      { id: `p${deck.id}-s5-c2-n`, type: 'text', x: 730, y: 280, width: 460, height: 130, text: deck.stats[1].num, fontSize: 104, fontFamily: deck.font, fontWeight: '900', fill: textColor, visible: true },
      { id: `p${deck.id}-s5-c2-t`, type: 'text', x: 730, y: 430, width: 460, height: 40, text: deck.stats[1].label, fontSize: 26, fontFamily: deck.font, fontWeight: '800', fill: textColor, visible: true },
      { id: `p${deck.id}-s5-c2-d`, type: 'text', x: 730, y: 485, width: 460, height: 260, text: deck.stats[1].desc, fontSize: 20, fontFamily: 'Inter', fill: subColor, lineHeight: 1.7, visible: true },
      { id: `p${deck.id}-s5-c2-pill`, type: 'rect', x: 730, y: 860, width: 460, height: 48, fill: isLight ? '#f1f5f9' : 'rgba(255,255,255,0.06)', stroke: cardBorder, strokeWidth: 1, borderRadius: 24, visible: true },
      { id: `p${deck.id}-s5-c2-pill-t`, type: 'text', x: 750, y: 874, width: 420, height: 25, text: `✓  ${deck.stats[1].tag}`, fontSize: 16, fontFamily: 'Inter', fontWeight: '700', fill: textColor, visible: true },

      { id: `p${deck.id}-s5-c3`, type: 'rect', x: 1280, y: 230, width: 540, height: 740, fill: cardBg, stroke: cardBorder, strokeWidth: 1, borderRadius: 20, visible: true },
      { id: `p${deck.id}-s5-c3-n`, type: 'text', x: 1320, y: 280, width: 460, height: 130, text: deck.stats[2].num, fontSize: 104, fontFamily: deck.font, fontWeight: '900', fill: deck.accent, visible: true },
      { id: `p${deck.id}-s5-c3-t`, type: 'text', x: 1320, y: 430, width: 460, height: 40, text: deck.stats[2].label, fontSize: 26, fontFamily: deck.font, fontWeight: '800', fill: textColor, visible: true },
      { id: `p${deck.id}-s5-c3-d`, type: 'text', x: 1320, y: 485, width: 460, height: 260, text: deck.stats[2].desc, fontSize: 20, fontFamily: 'Inter', fill: subColor, lineHeight: 1.7, visible: true },
      { id: `p${deck.id}-s5-c3-pill`, type: 'rect', x: 1320, y: 860, width: 460, height: 48, fill: isLight ? '#f1f5f9' : 'rgba(255,255,255,0.06)', stroke: cardBorder, strokeWidth: 1, borderRadius: 24, visible: true },
      { id: `p${deck.id}-s5-c3-pill-t`, type: 'text', x: 1340, y: 874, width: 420, height: 25, text: `✓  ${deck.stats[2].tag}`, fontSize: 16, fontFamily: 'Inter', fontWeight: '700', fill: deck.accent, visible: true }
    ]
  });

  // ── Slide 6: Phased Strategic Roadmap ──
  slides.push({
    id: `p${deck.id}-s6`,
    name: 'Execution Roadmap',
    elements: [
      { id: `p${deck.id}-s6-bg`, type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: deck.bg, locked: true, visible: true },
      { id: `p${deck.id}-s6-tag`, type: 'text', x: 100, y: 80, width: 1200, height: 30, text: `✦  EXECUTION ROADMAP  ·  PHASED MILESTONES 2026/2027`, fontSize: 16, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, letterSpacing: 2, visible: true },
      { id: `p${deck.id}-s6-head`, type: 'text', x: 100, y: 120, width: 1720, height: 60, text: 'PHASED DEPLOYMENT ROADMAP & DELIVERABLES', fontSize: 46, fontFamily: deck.font, fontWeight: '800', fill: textColor, visible: true },
      { id: `p${deck.id}-s6-bar`, type: 'rect', x: 100, y: 190, width: 140, height: 4, fill: deck.accent, visible: true },

      // 3 Timeline Phase Cards
      { id: `p${deck.id}-s6-c1`, type: 'rect', x: 100, y: 230, width: 540, height: 740, fill: cardBg, stroke: cardBorder, strokeWidth: 1, borderRadius: 20, visible: true },
      { id: `p${deck.id}-s6-c1-pill`, type: 'rect', x: 140, y: 270, width: 260, height: 36, fill: deck.accent, borderRadius: 18, visible: true },
      { id: `p${deck.id}-s6-c1-pill-t`, type: 'text', x: 140, y: 278, width: 260, height: 20, text: deck.roadmap[0].phase, fontSize: 13, fontFamily: deck.font, fontWeight: '800', fill: isLight ? '#ffffff' : '#000000', alignment: 'center', visible: true },
      { id: `p${deck.id}-s6-c1-t`, type: 'text', x: 140, y: 330, width: 460, height: 70, text: deck.roadmap[0].title, fontSize: 26, fontFamily: deck.font, fontWeight: '900', fill: textColor, lineHeight: 1.2, visible: true },
      { id: `p${deck.id}-s6-c1-d`, type: 'text', x: 140, y: 420, width: 460, height: 380, text: `${deck.roadmap[0].desc}\n\n• Formal security clearance review\n• Baseline parameter calibration\n• Multi-node staging environment\n• Initial throughput benchmarks`, fontSize: 18, fontFamily: 'Inter', fill: subColor, lineHeight: 1.8, visible: true },
      { id: `p${deck.id}-s6-c1-status`, type: 'text', x: 140, y: 880, width: 460, height: 30, text: 'STATUS: VALIDATED & COMPLETED', fontSize: 14, fontFamily: 'Inter', fontWeight: '800', fill: deck.accent, visible: true },

      { id: `p${deck.id}-s6-c2`, type: 'rect', x: 690, y: 230, width: 540, height: 740, fill: cardBg, stroke: cardBorderAccent, strokeWidth: 2, borderRadius: 20, visible: true },
      { id: `p${deck.id}-s6-c2-pill`, type: 'rect', x: 730, y: 270, width: 260, height: 36, fill: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)', borderRadius: 18, visible: true },
      { id: `p${deck.id}-s6-c2-pill-t`, type: 'text', x: 730, y: 278, width: 260, height: 20, text: deck.roadmap[1].phase, fontSize: 13, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, alignment: 'center', visible: true },
      { id: `p${deck.id}-s6-c2-t`, type: 'text', x: 730, y: 330, width: 460, height: 70, text: deck.roadmap[1].title, fontSize: 26, fontFamily: deck.font, fontWeight: '900', fill: textColor, lineHeight: 1.2, visible: true },
      { id: `p${deck.id}-s6-c2-d`, type: 'text', x: 730, y: 420, width: 460, height: 380, text: `${deck.roadmap[1].desc}\n\n• Pilot customer cohort onboarding\n• Real-time SLA monitoring active\n• Dynamic failover simulation testing\n• Automated anomaly detection mesh`, fontSize: 18, fontFamily: 'Inter', fill: subColor, lineHeight: 1.8, visible: true },
      { id: `p${deck.id}-s6-c2-status`, type: 'text', x: 730, y: 880, width: 460, height: 30, text: 'STATUS: CURRENT ACTIVE PRODUCTION', fontSize: 14, fontFamily: 'Inter', fontWeight: '800', fill: textColor, visible: true },

      { id: `p${deck.id}-s6-c3`, type: 'rect', x: 1280, y: 230, width: 540, height: 740, fill: cardBg, stroke: cardBorder, strokeWidth: 1, borderRadius: 20, visible: true },
      { id: `p${deck.id}-s6-c3-pill`, type: 'rect', x: 1320, y: 270, width: 260, height: 36, fill: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)', borderRadius: 18, visible: true },
      { id: `p${deck.id}-s6-c3-pill-t`, type: 'text', x: 1320, y: 278, width: 260, height: 20, text: deck.roadmap[2].phase, fontSize: 13, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, alignment: 'center', visible: true },
      { id: `p${deck.id}-s6-c3-t`, type: 'text', x: 1320, y: 330, width: 460, height: 70, text: deck.roadmap[2].title, fontSize: 26, fontFamily: deck.font, fontWeight: '900', fill: textColor, lineHeight: 1.2, visible: true },
      { id: `p${deck.id}-s6-c3-d`, type: 'text', x: 1320, y: 420, width: 460, height: 380, text: `${deck.roadmap[2].desc}\n\n• Multi-region global cluster federation\n• Enterprise API developer ecosystem\n• Zero-trust audit certification renewal\n• Full autonomous self-healing scale`, fontSize: 18, fontFamily: 'Inter', fill: subColor, lineHeight: 1.8, visible: true },
      { id: `p${deck.id}-s6-c3-status`, type: 'text', x: 1320, y: 880, width: 460, height: 30, text: 'STATUS: TARGETED FOR EXPANSION', fontSize: 14, fontFamily: 'Inter', fontWeight: '800', fill: deck.accent, visible: true }
    ]
  });

  // ── Slide 7: Enterprise Case Study & Production Realization ──
  slides.push({
    id: `p${deck.id}-s7`,
    name: 'Case Study',
    elements: [
      { id: `p${deck.id}-s7-bg`, type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: deck.bg, locked: true, visible: true },
      { id: `p${deck.id}-s7-tag`, type: 'text', x: 100, y: 80, width: 1200, height: 30, text: `✦  PRODUCTION PROOF  ·  VERIFIED ENTERPRISE REALIZATION`, fontSize: 16, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, letterSpacing: 2, visible: true },
      { id: `p${deck.id}-s7-head`, type: 'text', x: 100, y: 120, width: 1720, height: 60, text: 'PRODUCTION REALIZATION & MEASURED OUTCOMES', fontSize: 46, fontFamily: deck.font, fontWeight: '800', fill: textColor, visible: true },
      { id: `p${deck.id}-s7-bar`, type: 'rect', x: 100, y: 190, width: 140, height: 4, fill: deck.accent, visible: true },

      // Left: Case Study Media & Location Card
      { id: `p${deck.id}-s7-img`, type: 'image', x: 100, y: 230, width: 800, height: 490, src: photo, borderRadius: 20, visible: true },
      { id: `p${deck.id}-s7-img-card`, type: 'rect', x: 100, y: 740, width: 800, height: 230, fill: cardBg, stroke: cardBorder, strokeWidth: 1, borderRadius: 16, visible: true },
      { id: `p${deck.id}-s7-cname`, type: 'text', x: 130, y: 770, width: 740, height: 40, text: deck.caseStudy.client, fontSize: 26, fontFamily: deck.font, fontWeight: '800', fill: textColor, visible: true },
      { id: `p${deck.id}-s7-cloc`, type: 'text', x: 130, y: 820, width: 740, height: 30, text: deck.caseStudy.location, fontSize: 16, fontFamily: deck.font, fontWeight: '700', fill: deck.accent, visible: true },
      { id: `p${deck.id}-s7-csum`, type: 'text', x: 130, y: 860, width: 740, height: 90, text: deck.caseStudy.summary, fontSize: 18, fontFamily: 'Inter', fill: subColor, lineHeight: 1.5, visible: true },

      // Right: 2 Highlight Metrics + Executive Testimonial
      { id: `p${deck.id}-s7-m1-card`, type: 'rect', x: 940, y: 230, width: 420, height: 210, fill: cardBg, stroke: cardBorderAccent, strokeWidth: 1.5, borderRadius: 16, visible: true },
      { id: `p${deck.id}-s7-m1-v`, type: 'text', x: 970, y: 265, width: 360, height: 80, text: deck.caseStudy.m1, fontSize: 64, fontFamily: deck.font, fontWeight: '900', fill: deck.accent, visible: true },
      { id: `p${deck.id}-s7-m1-l`, type: 'text', x: 970, y: 360, width: 360, height: 35, text: deck.caseStudy.m1Label, fontSize: 20, fontFamily: deck.font, fontWeight: '800', fill: textColor, visible: true },

      { id: `p${deck.id}-s7-m2-card`, type: 'rect', x: 1400, y: 230, width: 420, height: 210, fill: cardBg, stroke: cardBorder, strokeWidth: 1, borderRadius: 16, visible: true },
      { id: `p${deck.id}-s7-m2-v`, type: 'text', x: 1430, y: 265, width: 360, height: 80, text: deck.caseStudy.m2, fontSize: 64, fontFamily: deck.font, fontWeight: '900', fill: textColor, visible: true },
      { id: `p${deck.id}-s7-m2-l`, type: 'text', x: 1430, y: 360, width: 360, height: 35, text: deck.caseStudy.m2Label, fontSize: 20, fontFamily: deck.font, fontWeight: '800', fill: textColor, visible: true },

      // Testimonial Card
      { id: `p${deck.id}-s7-quote-card`, type: 'rect', x: 940, y: 470, width: 880, height: 500, fill: cardBg, stroke: cardBorder, strokeWidth: 1, borderRadius: 20, visible: true },
      { id: `p${deck.id}-s7-quote-t`, type: 'text', x: 980, y: 530, width: 800, height: 260, text: deck.caseStudy.quote, fontSize: 30, fontFamily: deck.font, fontWeight: '800', fill: textColor, lineHeight: 1.45, visible: true },
      { id: `p${deck.id}-s7-quote-bar`, type: 'rect', x: 980, y: 820, width: 120, height: 4, fill: deck.accent, visible: true },
      { id: `p${deck.id}-s7-quote-author`, type: 'text', x: 980, y: 850, width: 800, height: 40, text: deck.caseStudy.author, fontSize: 20, fontFamily: 'Inter', fontWeight: '800', fill: deck.accent, letterSpacing: 1, visible: true },
      { id: `p${deck.id}-s7-quote-cred`, type: 'text', x: 980, y: 895, width: 800, height: 30, text: 'VERIFIED INDEPENDENT PRODUCTION AUDIT · 2026', fontSize: 14, fontFamily: 'Inter', fontWeight: '700', fill: subColor, visible: true }
    ]
  });

  // ── Slide 8: Synthesis, Key Takeaways & Call to Action ──
  slides.push({
    id: `p${deck.id}-s8`,
    name: 'Conclusion & Directives',
    elements: [
      { id: `p${deck.id}-s8-bg`, type: 'rect', x: 0, y: 0, width: 1920, height: 1080, fill: deck.bg, locked: true, visible: true },
      { id: `p${deck.id}-s8-tag`, type: 'text', x: 100, y: 80, width: 1200, height: 30, text: `✦  STRATEGIC SYNTHESIS  ·  IMMEDIATE INITIATION DIRECTIVE`, fontSize: 16, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, letterSpacing: 2, visible: true },
      { id: `p${deck.id}-s8-head`, type: 'text', x: 100, y: 120, width: 1720, height: 60, text: 'KEY STRATEGIC TAKEAWAYS & NEXT ACTIONS', fontSize: 46, fontFamily: deck.font, fontWeight: '800', fill: textColor, visible: true },
      { id: `p${deck.id}-s8-bar`, type: 'rect', x: 100, y: 190, width: 140, height: 4, fill: deck.accent, visible: true },

      // 3 Key Takeaway Cards
      { id: `p${deck.id}-s8-c1`, type: 'rect', x: 100, y: 230, width: 540, height: 440, fill: cardBg, stroke: cardBorder, strokeWidth: 1, borderRadius: 20, visible: true },
      { id: `p${deck.id}-s8-c1-n`, type: 'text', x: 140, y: 270, width: 460, height: 30, text: 'TAKEAWAY 01', fontSize: 16, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, letterSpacing: 2, visible: true },
      { id: `p${deck.id}-s8-c1-t`, type: 'text', x: 140, y: 310, width: 460, height: 70, text: deck.takeaways[0].title, fontSize: 24, fontFamily: deck.font, fontWeight: '900', fill: textColor, lineHeight: 1.2, visible: true },
      { id: `p${deck.id}-s8-c1-d`, type: 'text', x: 140, y: 395, width: 460, height: 230, text: deck.takeaways[0].desc, fontSize: 19, fontFamily: 'Inter', fill: subColor, lineHeight: 1.7, visible: true },

      { id: `p${deck.id}-s8-c2`, type: 'rect', x: 690, y: 230, width: 540, height: 440, fill: cardBg, stroke: cardBorderAccent, strokeWidth: 1.5, borderRadius: 20, visible: true },
      { id: `p${deck.id}-s8-c2-n`, type: 'text', x: 730, y: 270, width: 460, height: 30, text: 'TAKEAWAY 02', fontSize: 16, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, letterSpacing: 2, visible: true },
      { id: `p${deck.id}-s8-c2-t`, type: 'text', x: 730, y: 310, width: 460, height: 70, text: deck.takeaways[1].title, fontSize: 24, fontFamily: deck.font, fontWeight: '900', fill: textColor, lineHeight: 1.2, visible: true },
      { id: `p${deck.id}-s8-c2-d`, type: 'text', x: 730, y: 395, width: 460, height: 230, text: deck.takeaways[1].desc, fontSize: 19, fontFamily: 'Inter', fill: subColor, lineHeight: 1.7, visible: true },

      { id: `p${deck.id}-s8-c3`, type: 'rect', x: 1280, y: 230, width: 540, height: 440, fill: cardBg, stroke: cardBorder, strokeWidth: 1, borderRadius: 20, visible: true },
      { id: `p${deck.id}-s8-c3-n`, type: 'text', x: 1320, y: 270, width: 460, height: 30, text: 'TAKEAWAY 03', fontSize: 16, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, letterSpacing: 2, visible: true },
      { id: `p${deck.id}-s8-c3-t`, type: 'text', x: 1320, y: 310, width: 460, height: 70, text: deck.takeaways[2].title, fontSize: 24, fontFamily: deck.font, fontWeight: '900', fill: textColor, lineHeight: 1.2, visible: true },
      { id: `p${deck.id}-s8-c3-d`, type: 'text', x: 1320, y: 395, width: 460, height: 230, text: deck.takeaways[2].desc, fontSize: 19, fontFamily: 'Inter', fill: subColor, lineHeight: 1.7, visible: true },

      // Bottom Action Directive Banner
      { id: `p${deck.id}-s8-action-box`, type: 'rect', x: 100, y: 700, width: 1720, height: 270, fill: isLight ? '#0f172a' : 'rgba(255,255,255,0.06)', stroke: deck.accent, strokeWidth: 2, borderRadius: 20, visible: true },
      { id: `p${deck.id}-s8-action-tag`, type: 'text', x: 150, y: 740, width: 800, height: 30, text: `✦  IMMEDIATE INITIATION PROTOCOL`, fontSize: 16, fontFamily: deck.font, fontWeight: '800', fill: deck.accent, letterSpacing: 2, visible: true },
      { id: `p${deck.id}-s8-action-h`, type: 'text', x: 150, y: 780, width: 900, height: 60, text: 'READY TO DEPLOY STRATEGIC ARCHITECTURE?', fontSize: 34, fontFamily: deck.font, fontWeight: '900', fill: '#ffffff', visible: true },
      { id: `p${deck.id}-s8-action-p`, type: 'text', x: 150, y: 850, width: 900, height: 80, text: 'Direct executive onboarding desk: strategy@ordstudio.ai · +1 (800) 555-0199\nExecutive briefing schedules open for Q2/Q3 cohort deployments.', fontSize: 18, fontFamily: 'Inter', fill: '#94a3b8', lineHeight: 1.6, visible: true },

      { id: `p${deck.id}-s8-cta-btn`, type: 'rect', x: 1240, y: 760, width: 520, height: 70, fill: deck.accent, borderRadius: 14, visible: true },
      { id: `p${deck.id}-s8-cta-btn-t`, type: 'text', x: 1240, y: 780, width: 520, height: 35, text: 'SCHEDULE EXECUTIVE INITIATION →', fontSize: 18, fontFamily: deck.font, fontWeight: '900', fill: isLight ? '#ffffff' : '#000000', alignment: 'center', visible: true },
      { id: `p${deck.id}-s8-confidential`, type: 'text', x: 1240, y: 860, width: 520, height: 50, text: 'CONFIDENTIAL EXECUTIVE PRESENTATION DECK\nORD STUDIO CANONICAL TEMPLATES · ALL RIGHTS RESERVED 2026', fontSize: 13, fontFamily: 'Inter', fontWeight: '700', fill: '#94a3b8', alignment: 'center', lineHeight: 1.5, visible: true }
    ]
  });

  return {
    id: deck.id,
    name: deck.name,
    title: deck.title,
    description: deck.desc,
    category: 'Presentation',
    subcategory: deck.subcategory,
    size: '1920×1080',
    canvasWidth: 1920,
    canvasHeight: 1080,
    orientation: 'landscape',
    tags: [deck.subcategory.toLowerCase(), 'presentation', 'canonical', 'multi-slide', 'pro-deck'],
    author: 'ORD Studio',
    premium: deck.id % 3 === 0,
    isPublished: true,
    likes: 8800 - (deck.id % 10) * 25,
    views: 94000 - (deck.id % 10) * 120,
    gradient: `linear-gradient(135deg, ${deck.bg} 0%, ${deck.accent} 100%)`,
    fonts: [deck.font, 'Inter'],
    colors: [deck.bg, deck.accent, textColor, subColor],
    elements: slides[0].elements,
    slides
  };
}

console.log('Generating 36 world-class presentation templates...');
const fullDecks = DECK_DEFINITIONS.map(d => buildDeckSlides(d));
console.log(`Successfully generated ${fullDecks.length} presentations with 8 rich slides each!`);

// Write to presentations.ts
const tsContent = `import { SeedTemplate } from '../templateSeedData';

// Pristine World-Class Presentation Templates (IDs 101 to 136)
// Generated with 8 Rich, Canva-Style Bespoke Slides per Deck (Zero Empty Space)
// Covers: Cover, Agenda, Problem, Solution Architecture, Key Metrics, Roadmap, Case Study, Conclusion CTA

export const PRESENTATION_TEMPLATES: SeedTemplate[] = ${JSON.stringify(fullDecks, null, 2)};
`;

fs.writeFileSync(targetFile, tsContent, 'utf-8');
console.log(`Saved ${fullDecks.length} templates to ${targetFile}`);
