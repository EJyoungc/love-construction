/**
 * LOVE CONSTRUCTION - Design Options Engine
 * Powers Design 1 (Crafted Confidence), Design 2 (Rooted & Welcoming), and Design 3 (Clear & Considered)
 * With deep immersive project case studies, interactive before/after sliders, live estimator, and animations.
 */

// --- 1. DESIGN THEME DEFINITIONS ---
const siteDesigns = {
  'design-1': {
    id: 'design-1',
    name: 'Crafted Confidence',
    badge: 'Industrial Luxury & Master Builder',
    body: 'bg-[#121316] text-white',
    contentBg: 'bg-[#181a1f] text-neutral-100',
    header: 'bg-[#121316]/95 border-b border-white/10 text-white',
    topBar: 'bg-black text-xs text-neutral-400 border-b border-white/5',
    logo: 'font-display font-extrabold tracking-[.18em] text-white',
    logoIcon: 'bg-love-gold text-black',
    nav: 'text-neutral-300 hover:text-love-gold',
    navActive: 'text-love-gold font-bold',
    accent: 'text-love-gold',
    accentBg: 'bg-love-gold text-black hover:bg-amber-400',
    accentBorder: 'border-love-gold',
    button: 'bg-love-gold text-black font-bold hover:bg-amber-400 shadow-glow-gold transition-all duration-300',
    buttonOutline: 'border border-love-gold/50 text-love-gold hover:bg-love-gold/10 font-bold transition-all',
    surface: 'bg-[#121316] text-white',
    card: 'bg-[#1c1e24] border border-white/10 hover:border-love-gold/60 transition-all duration-300 shadow-lg',
    cardLight: 'bg-[#22252c] border border-white/10 text-white',
    imageStyle: 'rounded-sm',
    display: 'font-display',
    editorial: 'font-editorial italic',
    heroGradient: 'bg-gradient-to-r from-black/95 via-black/75 to-black/25',
    paletteTag: 'CHARCOAL & AMBER GOLD'
  },
  'design-2': {
    id: 'design-2',
    name: 'Rooted & Welcoming',
    badge: 'Warm Earth & Artisan Craftsmanship',
    body: 'bg-love-linen text-[#261E1A]',
    contentBg: 'bg-love-linen text-[#261E1A]',
    header: 'bg-love-linen/95 border-b border-[#261E1A]/10 text-[#261E1A]',
    topBar: 'bg-[#EFE8DA] text-xs text-[#6B5E55] border-b border-[#261E1A]/5',
    logo: 'font-editorial text-2xl text-[#261E1A]',
    logoIcon: 'bg-love-clay text-white',
    nav: 'text-[#4A3E37] hover:text-love-clay',
    navActive: 'text-love-clay font-bold underline decoration-2 underline-offset-8',
    accent: 'text-love-clay',
    accentBg: 'bg-love-clay text-white hover:bg-[#a94f2b]',
    accentBorder: 'border-love-clay',
    button: 'bg-love-clay text-white font-bold hover:bg-[#a94f2b] shadow-glow-clay transition-all duration-300 rounded-full',
    buttonOutline: 'border border-love-clay text-love-clay hover:bg-love-clay/10 font-bold transition-all rounded-full',
    surface: 'bg-[#261E1A] text-love-linen',
    card: 'bg-white/90 border border-[#261E1A]/10 hover:border-love-clay/50 hover:shadow-xl transition-all duration-300 rounded-2xl',
    cardLight: 'bg-[#EFE8DA] border border-[#261E1A]/10 text-[#261E1A] rounded-2xl',
    imageStyle: 'rounded-2xl',
    display: 'font-editorial',
    editorial: 'font-editorial italic',
    heroGradient: 'bg-gradient-to-t from-[#261E1A]/95 via-[#261E1A]/35 to-transparent',
    paletteTag: 'TERRACOTTA CLAY & LINEN'
  },
  'design-3': {
    id: 'design-3',
    name: 'Clear & Considered',
    badge: 'Architectural Vanguard & High-Tech Precision',
    body: 'bg-white text-[#181A1B]',
    contentBg: 'bg-white text-[#181A1B]',
    header: 'bg-white/95 border-b border-neutral-200 text-[#181A1B]',
    topBar: 'bg-[#0F172A] text-xs text-neutral-300 border-b border-neutral-800',
    logo: 'font-display font-extrabold tracking-[.14em] text-[#181A1B]',
    logoIcon: 'bg-love-sage text-white',
    nav: 'text-neutral-700 hover:text-love-sage',
    navActive: 'text-love-sage font-extrabold border-b-2 border-love-sage',
    accent: 'text-love-sage',
    accentBg: 'bg-love-sage text-white hover:bg-[#1E4D38]',
    accentBorder: 'border-love-sage',
    button: 'bg-love-sage text-white font-bold hover:bg-[#1E4D38] shadow-glow-sage transition-all duration-300 rounded-none tracking-wider uppercase text-xs',
    buttonOutline: 'border-2 border-love-sage text-love-sage hover:bg-love-sage hover:text-white font-bold transition-all rounded-none text-xs tracking-wider uppercase',
    surface: 'bg-[#0F172A] text-white',
    card: 'bg-[#F8FAF9] border border-neutral-200 hover:border-love-sage transition-all duration-300 shadow-sm',
    cardLight: 'bg-white border border-neutral-200 text-[#181A1B]',
    imageStyle: 'rounded-none',
    display: 'font-display',
    editorial: 'font-display font-bold',
    heroGradient: 'bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent',
    paletteTag: 'ARCHITECTURAL SAGE & SLATE'
  }
};

// --- 2. COMPLETE GALLERY IMAGES ---
const imageFiles = [
  'WhatsApp Image 2026-11-13 at 12.45.55 PM (1).jpeg', // 0: Foundation / Trenching
  'WhatsApp Image 2026-11-13 at 12.45.55 PM (2).jpeg', // 1: Paving Sub-base
  'WhatsApp Image 2026-11-13 at 12.45.55 PM (3).jpeg', // 2: Ceiling Battens
  'WhatsApp Image 2026-11-13 at 12.45.55 PM.jpeg',     // 3: Brickwork Lintels
  'WhatsApp Image 2026-11-13 at 12.45.56 PM (1).jpeg', // 4: Living Room Structure
  'WhatsApp Image 2026-11-13 at 12.45.56 PM (2).jpeg', // 5: Plumbing Pipework
  'WhatsApp Image 2026-11-13 at 12.45.56 PM.jpeg',     // 6: Exterior Patio
  'WhatsApp Image 2026-11-13 at 12.45.57 PM (1).jpeg', // 7: Interior Framing
  'WhatsApp Image 2026-11-13 at 12.45.57 PM (2).jpeg', // 8: Bathroom Rough-in
  'WhatsApp Image 2026-11-13 at 12.45.57 PM.jpeg',     // 9: Stripped Wall Prep
  'WhatsApp Image 2026-11-13 at 12.45.58 PM (1).jpeg', // 10: Plaster Float Work
  'WhatsApp Image 2026-11-13 at 12.45.58 PM.jpeg',     // 11: Roof Flashing & Trusses
  'WhatsApp Image 2026-11-13 at 12.45.59 PM (1).jpeg', // 12: Kitchen Demolition
  'WhatsApp Image 2026-11-13 at 12.45.59 PM (2).jpeg', // 13: Exterior Coating
  'WhatsApp Image 2026-11-13 at 12.45.59 PM.jpeg',     // 14: Cabinetry Alignment
  'WhatsApp Image 2026-11-13 at 12.46.00 PM (1).jpeg', // 15: Extension Tie-in
  'WhatsApp Image 2026-11-13 at 12.46.00 PM (2).jpeg', // 16: Concrete Slab Pour
  'WhatsApp Image 2026-11-13 at 12.46.00 PM.jpeg',     // 17: Waterproofing Screed
  'WhatsApp Image 2026-11-13 at 12.46.01 PM (1).jpeg', // 18: Excavation Gradients
  'WhatsApp Image 2026-11-13 at 12.46.01 PM.jpeg',     // 19: Masonry Corner Level
  'WhatsApp Image 2026-11-13 at 12.46.02 PM (1).jpeg', // 20: Ceiling Plastering
  'WhatsApp Image 2026-11-13 at 12.46.02 PM (2).jpeg', // 21: High-end Interior Finish
  'WhatsApp Image 2026-11-13 at 12.46.02 PM.jpeg',     // 22: Outdoor Paving Interlock
  'WhatsApp Image 2026-11-13 at 12.46.03 PM (1).jpeg', // 23: Weathered Roof Deck
  'WhatsApp Image 2026-11-13 at 12.46.03 PM (2).jpeg', // 24: Painting Undercoat
  'WhatsApp Image 2026-11-13 at 12.46.03 PM.jpeg',     // 25: Membrane Torch-on
  'WhatsApp Image 2026-11-13 at 12.46.04 PM (1).jpeg', // 26: Timber Rafters
  'WhatsApp Image 2026-11-13 at 12.46.04 PM.jpeg',     // 27: Wall Plaster Skim
  'WhatsApp Image 2026-11-13 at 12.46.05 PM (1).jpeg', // 28: Completed Extension
  'WhatsApp Image 2026-11-13 at 12.46.05 PM (2).jpeg', // 29: Pool Retaining Wall
  'WhatsApp Image 2026-11-13 at 12.46.05 PM.jpeg',     // 30: Electrical Conduit
  'WhatsApp Image 2026-11-13 at 12.46.06 PM (1).jpeg', // 31: Parapet Waterproofing
  'WhatsApp Image 2026-11-13 at 12.46.06 PM (2).jpeg', // 32: Luxury Facade & Villa
  'WhatsApp Image 2026-11-13 at 12.46.06 PM.jpeg',     // 33: Master En-Suite Tiling
  'WhatsApp Image 2026-11-13 at 12.46.07 PM (1).jpeg', // 34: Plaster Float Level
  'WhatsApp Image 2026-11-13 at 12.46.07 PM (2).jpeg', // 35: Foundation Curing
  'WhatsApp Image 2026-11-13 at 12.46.07 PM.jpeg',     // 36: Camps Bay Villa Roofline
  'WhatsApp Image 2026-11-13 at 12.46.08 PM.jpeg'      // 37: Finished Paved Driveway & Pool
];

const photo = (file) => `../../image/${encodeURIComponent(file)}`;

// --- 3. IMMERSIVE COMPLETED PROJECTS DATA ---
const completedProjects = [
  {
    id: 'stellenbosch-villa',
    title: 'The Stellenbosch Modern Contemporary Villa',
    subtitle: 'Ground-Up Turnkey Residential Build & Structural Engineering',
    category: 'Turnkey Construction',
    categoryKey: 'turnkey',
    location: 'Stellenbosch, Western Cape',
    year: '2025 - 2026',
    featured: true,
    specs: {
      area: '380 m²',
      duration: '6 Months',
      scope: 'Groundwork to Final Handover',
      municipality: 'Stellenbosch Municipal Approved',
      structure: '30MPa Reinforced Concrete & Cavity Masonry'
    },
    heroImage: photo(imageFiles[32]),
    beforeImage: photo(imageFiles[18]),
    afterImage: photo(imageFiles[32]),
    gallery: [photo(imageFiles[32]), photo(imageFiles[21]), photo(imageFiles[16]), photo(imageFiles[4])],
    summary: 'A signature residential masterpiece built on the sloping foothills of Stellenbosch. Love Construction managed every phase from excavation and deep reinforced strip footings to double-volume steel trusses, seamless ceiling bulkheads, and master porcelain finishes.',
    challenge: 'The building site presented an 8-degree gradient with seasonal subsurface water runoff. The client required expansive double-volume open spaces without obtrusive internal load-bearing pillars.',
    solution: 'Engineered a perimeter French drainage trench system combined with a stepped 30MPa reinforced concrete foundation slab. Concealed heavy-duty structural steel universal beams (RSJs) within the ceiling bulkheads, enabling an unbroken 14-meter open-concept living area.',
    phases: [
      { phase: '01. Substructure & Groundwork', desc: 'Laser topographical survey, 1.8m excavation, engineered gravel compaction, and 30MPa reinforced strip footings.' },
      { phase: '02. Superstructure & Framing', desc: 'Cavity double-brick walls with damp-proof coursing, lintel casting, and structural timber trusses treated to SABS standards.' },
      { phase: '03. Mechanicals & Interior Shell', desc: 'Full conduit rough-ins for plumbing and electrics, suspended gypsum bulkhead ceilings with recessed LED perimeter lighting.' },
      { phase: '04. Luxury Finishes & Handover', desc: 'Italian porcelain floor tiling, diamond-float interior plaster skimming, satin washable paint, and custom joinery cabinetry.' }
    ],
    materials: ['30MPa SABS Concrete', 'Treated Pine Engineered Trusses', 'Corobrik Clay Facing & Plaster Bricks', '1200x600 Rectified Porcelain Tiles', 'Waterproof Bitumen Membranes'],
    testimonial: {
      quote: 'Philip Love Banda and his crew worked with absolute integrity. Every milestone was explained beforehand, costs stayed strictly transparent, and the finished home exceeds our wildest expectations.',
      author: 'David & Heloise van der Merwe',
      role: 'Homeowners · Stellenbosch'
    }
  },
  {
    id: 'camps-bay-waterproofing',
    title: 'The Camps Bay Coastal Villa & Roof Overhaul',
    subtitle: 'Marine-Grade Roofing, Parapet Waterproofing & Structural Restoration',
    category: 'Roofing & Waterproofing',
    categoryKey: 'roofing',
    location: 'Camps Bay, Atlantic Seaboard',
    year: '2025',
    featured: true,
    specs: {
      area: '320 m²',
      duration: '5 Weeks',
      scope: 'Torch-On Membrane & Coastal Re-Roofing',
      municipality: 'City of Cape Town Compliant',
      structure: '4mm Dual-Layer Polymer Bitumen Membrane'
    },
    heroImage: photo(imageFiles[36]),
    beforeImage: photo(imageFiles[23]),
    afterImage: photo(imageFiles[36]),
    gallery: [photo(imageFiles[36]), photo(imageFiles[31]), photo(imageFiles[25]), photo(imageFiles[11])],
    summary: 'High-exposure coastal home subject to intense South-Easter gale winds and Atlantic salt mist. Love Construction stripped defective older roofing, reinforced timber trusses, and installed a certified 4mm torch-on waterproofing membrane system with marine-grade Zincalume flashings.',
    challenge: 'Water was penetrating multiple upper balcony parapet seams and rotting concealed rafters during heavy winter storms, risking electrical shorts in the lower suites.',
    solution: 'Stripped degraded layers back to bare concrete deck, smoothed screed slopes to 1:40 fall ratios, torched double-layer 4mm SBS elastomeric bitumen membranes with 100mm overlaps, and fabricated custom Zincalume counter-flashing with polyurethane sealant seams.',
    phases: [
      { phase: '01. Diagnostic & Stripping', desc: 'Thermal moisture inspection to identify wet zones, safe disposal of rotted materials, and structural timber treatment.' },
      { phase: '02. Deck Preparation', desc: 'Re-screeding concrete deck with polymer-modified bonding mortar to ensure continuous rainwater runoff to drainage scuppers.' },
      { phase: '03. Double Torch-On Application', desc: 'Application of high-penetration bitumen primer followed by dual 4mm polyester-reinforced torch-on membranes.' },
      { phase: '04. 48-Hour Flood Test & Coating', desc: 'Standing water flood verification test for 48 hours with 0% leak rate, followed by UV-protective aluminium solar-reflective topcoat.' }
    ],
    materials: ['Derbigum 4mm SBS Membrane', 'Zincalume AZ150 Coastal Flashings', 'Sikaflex Marine Polyurethane Sealant', 'Aluminium Bituminous Solar Shield'],
    testimonial: {
      quote: 'We battled water leaks for three winters before hiring Love Construction. Philip pinpointed the structural flaw immediately. Two harsh Cape storms later, our ceilings are completely dry.',
      author: 'Marcus & Catherine Ross',
      role: 'Property Owners · Camps Bay'
    }
  },
  {
    id: 'franschhoek-renovation',
    title: 'Franschhoek Vineyard Estate Kitchen & Bulkheads',
    subtitle: 'Interior Structural Alteration, Designer Bulkheads & Custom Cabinetry',
    category: 'Interior Remodel & Ceilings',
    categoryKey: 'interior',
    location: 'Franschhoek, Cape Winelands',
    year: '2025',
    featured: true,
    specs: {
      area: '185 m²',
      duration: '7 Weeks',
      scope: 'Structural Knock-Through & Luxury Joinery',
      municipality: 'Stellenbosch Local Municipality',
      structure: 'Engineered RSJ Steel Girder & Gypsum Bulkhead'
    },
    heroImage: photo(imageFiles[21]),
    beforeImage: photo(imageFiles[12]),
    afterImage: photo(imageFiles[21]),
    gallery: [photo(imageFiles[21]), photo(imageFiles[20]), photo(imageFiles[14]), photo(imageFiles[7])],
    summary: 'A transformative renovation turning a dark, segmented 1980s farmhouse kitchen and living wing into a seamless architectural showpiece. Featured custom suspended ceiling bulkheads with cove lighting, quartz countertops, and engineered wood-look tile floors.',
    challenge: 'Removing two major load-bearing interior brick walls while supporting the roof weight above without visible downward ceiling pillars.',
    solution: 'Designed and installed a concealed 254x146mm universal steel I-beam supported by brick pier padstones, allowing a flush ceiling finish with custom architectural bulkheads that house ambient recessed lighting.',
    phases: [
      { phase: '01. Propping & Demolition', desc: 'Temporary steel Acrow-prop installation, precision dust-controlled masonry breakdown, and debris clearing.' },
      { phase: '02. Steel Beam Insertion', desc: 'Hoisting and securing structural steel girder onto cast concrete padstones with non-shrink structural grout.' },
      { phase: '03. Ceilings & Electrics', desc: 'Framing multi-level drywall bulkheads with acoustic insulation, running concealed conduits for downlights and pendant pendants.' },
      { phase: '04. Cabinetry & Tile Finishes', desc: 'Precision cabinetry installation with soft-close hinges, quartz slab fabrication, and large-format porcelain floor tiling.' }
    ],
    materials: ['Structural Grade 350W Steel Beams', '12.5mm RhinoBoard Moisture-Resistant Plasterboard', 'Caesarstone Calacatta Nuvo Quartz', 'Recessed Warm LED Architectural Strips'],
    testimonial: {
      quote: 'The craftsmanship on the bulkheads and cabinetry lines is millimeter-perfect. Philip’s team were tidy, courteous, and took absolute pride in every detail.',
      author: 'Annelise Blom',
      role: 'Estate Owner · Franschhoek'
    }
  },
  {
    id: 'somerset-west-paving',
    title: 'The Somerset West Heritage Paving & Pool Patio',
    subtitle: 'Heavy-Duty Interlocking Paving, Pool Coping & Retaining Hardscaping',
    category: 'Paving & Outdoor',
    categoryKey: 'outdoor',
    location: 'Somerset West, Western Cape',
    year: '2026',
    featured: true,
    specs: {
      area: '460 m²',
      duration: '4 Weeks',
      scope: 'Driveway, Pool Surrounds & Garden Terraces',
      municipality: 'Helderberg District Compliant',
      structure: 'G5 Compacted Base + 60mm Bevelled Pavers'
    },
    heroImage: photo(imageFiles[37]),
    beforeImage: photo(imageFiles[1]),
    afterImage: photo(imageFiles[37]),
    gallery: [photo(imageFiles[37]), photo(imageFiles[29]), photo(imageFiles[22]), photo(imageFiles[6])],
    summary: 'Complete exterior transformation featuring 460 m² of precision interlocking vehicular paving, bullnose swimming pool coping, integrated drainage channels, and plastered garden retaining walls.',
    challenge: 'Expansive clay ground conditions prone to seasonal heaving, which had shattered the previous owner’s concrete slab.',
    solution: 'Excavated 300mm of unstable soil, laid non-woven bidim geotextile fabric, placed 150mm G5 sub-base compacted to 98% Mod AASHTO density with plate compactors, and laid pavers on river sand with concrete edge restraint beams.',
    phases: [
      { phase: '01. Earthworks & Drainage', desc: 'Excavation to fall lines, laying subsoil perforated agricultural drain pipes, and geotextile stabilization membrane.' },
      { phase: '02. G5 Compaction', desc: 'Layered placement and mechanical plate compaction of crushed stone aggregate to eliminate future vehicle tire rutting.' },
      { phase: '03. Paving Laying & Cutting', desc: 'Precision herringbone pattern laying with laser-guided straight lines and diamond wet-saw perimeter cuts.' },
      { phase: '04. Edge Beams & Sealing', desc: 'Cast-in-place concrete edge haunching, silica joint sand vibration, and application of wet-look penetrating acrylic sealer.' }
    ],
    materials: ['60mm Heavy-Duty Interlocking Pavers', 'G5 Crushed Hornfels Aggregate', 'Class 1 Washed River Sand', 'Slip-Resistant Pool Coping Tiles'],
    testimonial: {
      quote: 'Heavy delivery trucks and our family SUVs drive on this paving every day. Not a millimeter of sag. The pool surround looks like a five-star resort.',
      author: 'Gavin & Tanya Wright',
      role: 'Homeowners · Somerset West'
    }
  },
  {
    id: 'durbanville-extension',
    title: 'The Durbanville Master Suite & Home Extension',
    subtitle: 'Two-Story Bedroom Wing, En-Suite Bathrooms & Seamless Roof Tie-In',
    category: 'Building Extension',
    categoryKey: 'turnkey',
    location: 'Durbanville, Cape Town',
    year: '2025 - 2026',
    featured: false,
    specs: {
      area: '140 m²',
      duration: '10 Weeks',
      scope: 'Foundation, Superstructure & Full En-Suites',
      municipality: 'City of Cape Town Approved Plans',
      structure: 'Double Brick Cavity & Matching Concrete Tile Roof'
    },
    heroImage: photo(imageFiles[28]),
    beforeImage: photo(imageFiles[0]),
    afterImage: photo(imageFiles[28]),
    gallery: [photo(imageFiles[28]), photo(imageFiles[19]), photo(imageFiles[15]), photo(imageFiles[3])],
    summary: 'A generous two-bedroom master suite extension seamlessly stitched onto an existing residential home. The project included matching roof trusses, seamless plaster blend, custom aluminum sliding doors, and private luxury bathroom suites.',
    challenge: 'Connecting to a 20-year-old house structure without settling cracks appearing at the junction seams, while matching discontinued clay roof tiles.',
    solution: 'Utilized stainless steel expansion ties anchored into chemical epoxy resin along the junction, installed matching reclaimed profile roof tiles, and applied flexible elastomeric exterior coatings across the union line.',
    phases: [
      { phase: '01. Foundation & Slab', desc: 'Precision excavation, damp-proof polyethylene sheeting, steel rebar reinforcement, and monolithic concrete floor slab.' },
      { phase: '02. Brickwork & Tie-ins', desc: 'Double-skin brick masonry tied to existing walls using chemical anchors, cast lintels, and timber roof pitch match.' },
      { phase: '03. Electrical & Plumbing', desc: 'In-slab piping, geyser installation, modern waste stacks, and warm-white LED downlight wiring.' },
      { phase: '04. Finishing & Painting', desc: 'Flawless gypsum skimming, walk-in shower tile waterproofing, frameless glass fitting, and colour-matched paint.' }
    ],
    materials: ['SABS Imperial Bricks', 'Rebar Y10 & Y12 High-Tensile Steel', 'Grohe & Hansgrohe Sanitary Fixtures', 'Mapei Waterproofing Mortar'],
    testimonial: {
      quote: 'Visitors are astonished to hear this was an extension. It looks as if the house was built this way originally. Philip was always available and managed his team brilliantly.',
      author: 'Dr. Johan de Klerk',
      role: 'Homeowner · Durbanville'
    }
  },
  {
    id: 'paarl-bathrooms',
    title: 'The Paarl Luxury Spa Bathrooms & Precision Tiling',
    subtitle: 'Walk-In Curbless Showers, Frameless Glass & 1200x600 Porcelain Tiling',
    category: 'Tiling & Plumbing',
    categoryKey: 'interior',
    location: 'Paarl, Western Cape',
    year: '2025',
    featured: false,
    specs: {
      area: '65 m²',
      duration: '3 Weeks',
      scope: 'Demolition, Complete Tanking & Master Tiling',
      municipality: 'Drakenstein Municipality Compliant',
      structure: 'Full Waterproof Tanking & Mitred Tile Edges'
    },
    heroImage: photo(imageFiles[33]),
    beforeImage: photo(imageFiles[9]),
    afterImage: photo(imageFiles[33]),
    gallery: [photo(imageFiles[33]), photo(imageFiles[17]), photo(imageFiles[8]), photo(imageFiles[5])],
    summary: 'A boutique luxury bathroom renovation featuring walk-in wet-room showers, concealed Geberit cisterns, custom recessed wall niches with LED strips, and 45-degree mitred porcelain tile corner joints with zero metal trim.',
    challenge: 'Existing walls were out of plumb by 22mm from top to bottom, which would cause severe visual defects with large-format rectified tiles if not corrected.',
    solution: 'Stripped walls back to bare brick, applied plumb guide screeds to achieve 100% laser-level plumb, applied dual-coat liquid rubber waterproofing membrane with corner joint banding, and installed 1200x600 tiles with mechanical spin-levelling spacers.',
    phases: [
      { phase: '01. Demolition & Rough-In', desc: 'Stripping old tiles and pipes, chasing wall recesses for concealed thermostatic valves and wall-hung cisterns.' },
      { phase: '02. Plumb Screeding & Tanking', desc: 'Applying fiber-reinforced leveling mortar to walls and floor, followed by two-coat elastomeric waterproofing.' },
      { phase: '03. Precision Tile Installation', desc: 'Laser-guided tile layout with 45-degree hand-mitred external corners for an authentic monolithic stone aesthetic.' },
      { phase: '04. Sanitaryware & Sealing', desc: 'Installing floating vanity, concealed LED mirrors, wall-hung WC, and antimicrobial epoxy grout.' }
    ],
    materials: ['1200x600 Rectified Italian Porcelain', 'Geberit Sigma In-Wall Cisterns', 'Sikalastic Tanking Membrane', 'Epoxy High-Performance Grout'],
    testimonial: {
      quote: 'The mitred tile corners are absolute works of art. Zero leaks, whisper-quiet plumbing, and pure hotel-grade luxury every morning.',
      author: 'Theresa & Pieter Malan',
      role: 'Homeowners · Paarl'
    }
  }
];

// --- 4. SERVICES LIST (12 Core Trades) ---
const serviceItems = [
  { name: 'General building & construction', cat: 'structural', icon: 'hammer', desc: 'Complete ground-up residential construction, structural alterations, foundation casting, and boundary wall installations.', time: '4–16 Weeks' },
  { name: 'Roofing & structural timber', cat: 'structural', icon: 'home', desc: 'New roof truss installations, re-roofing, corrugated and tile roofing, timber rafters, and storm-damage structural repairs.', time: '1–3 Weeks' },
  { name: 'Waterproofing & damp-proofing', cat: 'structural', icon: 'shield-check', desc: 'Certified 4mm torch-on bitumen membranes, parapet sealing, balcony tanking, rising damp prevention, and flood testing.', time: '3–10 Days' },
  { name: 'Plastering & structural rendering', cat: 'structural', icon: 'layers', desc: 'Exterior weather-resistant rendering, smooth interior diamond skimming, decorative cornices, and crack repair.', time: '1–2 Weeks' },
  { name: 'Ceiling installation & bulkheads', cat: 'interior', icon: 'panels-top', desc: 'Architectural flush-plastered suspended ceilings, custom bulkheads with LED shadowline recesses, and thermal insulation.', time: '4–10 Days' },
  { name: 'Tiling & stone masonry', cat: 'interior', icon: 'grid', desc: 'Large-format rectified porcelain tiling, natural slate, subway splashbacks, 45-degree mitred corners, and epoxy grouting.', time: '1–3 Weeks' },
  { name: 'Cupboards & custom cabinetry', cat: 'interior', icon: 'layout', desc: 'Fitted kitchen cupboards, quartz/granite worktops, bedroom built-in wardrobes, bathroom vanities, and soft-close hardware.', time: '2–4 Weeks' },
  { name: 'Interior & exterior painting', cat: 'interior', icon: 'paint-roller', desc: 'Surface preparation, anti-fungal primers, UV-resistant exterior elastomeric coats, and washable satin interior enamels.', time: '1–2 Weeks' },
  { name: 'Plumbing & sanitary systems', cat: 'infrastructure', icon: 'droplet', desc: 'Full hot and cold copper/PEX water supply, concealed cisterns, walk-in shower drainage, geysers, and waste stack routing.', time: '3–14 Days' },
  { name: 'Residential electrical work', cat: 'infrastructure', icon: 'zap', desc: 'Electrical conduits, downlight planning, sub-distribution boards, dedicated appliance feeds, and safety compliance checks.', time: '3–10 Days' },
  { name: 'Paving & driveway hardscaping', cat: 'outdoor', icon: 'component', desc: 'Interlocking concrete pavers, permeable stone driveways, patio terraces, French drains, and concrete edge restraints.', time: '1–3 Weeks' },
  { name: 'Swimming pool installation', cat: 'outdoor', icon: 'waves', desc: 'In-ground concrete swimming pool construction, pool coping, filtration plumbing, pump surrounds, and decorative pool decks.', time: '3–6 Weeks' }
];

const serviceGroups = [
  ['Structural & General Construction', [0, 1, 2, 3]],
  ['Interior Finishing & Craftsmanship', [4, 5, 6, 7]],
  ['Property Infrastructure & Systems', [8, 9]],
  ['Exterior Hardscaping & Outdoor Living', [10, 11]]
];

// --- 5. GLOBAL NAVIGATION & LINKS ---
const navPages = [
  ['Home', 'index.html', 'home'],
  ['About Us', 'about.html', 'about'],
  ['Services', 'services.html', 'services'],
  ['Our Work & Projects', 'projects.html', 'projects'],
  ['Contact & Quotes', 'contact.html', 'contact']
];

const waLink = 'https://wa.me/27812987328?text=Hello%20LOVE%20CONSTRUCTION%2C%20I%20would%20like%20to%20enquire%20about%20your%20construction%20services.%20Please%20assist%20me%20with%20a%20quotation.';
const phoneLink = 'tel:+27812987328';
const emailLink = 'mailto:lovebanda1990@gmail.com';

const designId = document.body.dataset.design || 'design-1';
const pageId = document.body.dataset.page || 'home';
const theme = siteDesigns[designId] || siteDesigns['design-1'];

// --- 6. SVG ICONS HELPER (100% Reliable Offline & Online) ---
function svgIcon(name, extraClass = 'w-4 h-4') {
  const icons = {
    'arrow-right': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>`,
    'arrow-up-right': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"/></svg>`,
    'check': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"/></svg>`,
    'star': `<svg class="${extraClass} fill-current text-amber-400" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,
    'shield-check': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/></svg>`,
    'phone': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg>`,
    'mail': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>`,
    'map-pin': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>`,
    'message-circle': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a.75.75 0 0 1-.974-.974 5.972 5.972 0 0 1 1.057-4.035C4.53 14.82 4 13.468 4 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/></svg>`,
    'calendar': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 9v7.5"/></svg>`,
    'ruler': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21 21 3.75M16.5 3.75 20.25 7.5M12.75 7.5 16.5 11.25M9 11.25 12.75 15M5.25 15 9 18.75"/></svg>`,
    'hammer': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25V9m10.5 0a2.25 2.25 0 0 1 2.25 2.25v.75a2.25 2.25 0 0 1-2.25 2.25h-1.5a2.25 2.25 0 0 0-1.5.56l-6.31 5.68a2.25 2.25 0 0 1-3.01 0l-.88-.79a2.25 2.25 0 0 1 0-3.01l5.68-6.31a2.25 2.25 0 0 0 .56-1.5V11.25A2.25 2.25 0 0 1 13.5 9h2.25Z"/></svg>`,
    'home': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>`,
    'panels-top': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h18v18H3V3zm0 6h18M9 9v12"/></svg>`,
    'grid': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/></svg>`,
    'layout': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h12A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6ZM3.75 10.5h16.5M10.5 10.5v9.75"/></svg>`,
    'paint-roller': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 4.5v3a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 7.5v-3A1.5 1.5 0 0 1 6 3h12a1.5 1.5 0 0 1 1.5 1.5ZM4.5 6h15M12 9v4.5a1.5 1.5 0 0 0 1.5 1.5H15a1.5 1.5 0 0 1 1.5 1.5V21"/></svg>`,
    'droplet': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25c-5.25 7.5-7.5 11.25-7.5 14.25a7.5 7.5 0 0 0 15 0c0-3-2.25-6.75-7.5-14.25Z"/></svg>`,
    'zap': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/></svg>`,
    'waves': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75c3 0 4.5-1.5 7.5-1.5s4.5 1.5 7.5 1.5 4.5-1.5 4.5-1.5m-19.5 4.5c3 0 4.5-1.5 7.5-1.5s4.5 1.5 7.5 1.5 4.5-1.5 4.5-1.5"/></svg>`,
    'layers': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m12 3 9 4.5-9 4.5-9-4.5L12 3Zm9 9-9 4.5-9-4.5m18 4.5-9 4.5-9-4.5"/></svg>`,
    'calculator': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75H8.25m7.5-3H8.25m7.5-3H8.25M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"/></svg>`,
    'component': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.75.75 0 0 1-.75.75H4.875c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25h5.625a.75.75 0 0 1 .75.75v0c0 .355-.186.676-.401.959a2.25 2.25 0 0 0-.349 1.003c0 1.036 1.007 1.875 2.25 1.875s2.25-.84 2.25-1.875c0-.369-.128-.713-.349-1.003a2.25 2.25 0 0 1-.401-.959v0a.75.75 0 0 1 .75-.75h5.625c1.035 0 1.875-1.007 1.875-2.25s-.84-2.25-1.875-2.25h-5.625a.75.75 0 0 1-.75-.75v0Z"/></svg>`,
    'sparkles': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"/></svg>`,
    'close': `<svg class="${extraClass}" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>`
  };
  return icons[name] || icons['arrow-right'];
}

// --- 7. HEADER COMPONENT ---
function renderHeader() {
  const navLinksHtml = navPages.map(([label, href, key]) => {
    const isActive = pageId === key;
    const activeClass = isActive ? theme.navActive : theme.nav;
    return `<a href="${href}" ${isActive ? 'aria-current="page"' : ''} class="inline-flex items-center text-sm font-semibold transition-colors duration-200 ${activeClass}">${label}</a>`;
  }).join('');

  const brandLogo = designId === 'design-2'
    ? `<div class="flex items-center gap-3">
        <span class="w-10 h-10 rounded-full ${theme.logoIcon} grid place-items-center font-bold text-white shadow-md">L</span>
        <div>
          <span class="${theme.logo}">LOVE <em class="italic text-love-clay">Construction</em></span>
          <span class="block text-[10px] tracking-widest text-[#7D6E63] font-sans font-semibold uppercase">Philip · Western Cape</span>
        </div>
      </div>`
    : designId === 'design-3'
      ? `<div class="flex items-center gap-3">
          <span class="w-10 h-10 ${theme.logoIcon} grid place-items-center font-mono font-black text-white text-base">LC</span>
          <div>
            <span class="${theme.logo} text-base block leading-tight">LOVE <span class="text-love-sage">CONSTRUCTION</span></span>
            <span class="block font-mono text-[9px] tracking-[.25em] text-neutral-500 uppercase">PHILIP / BUILD ENGINE</span>
          </div>
        </div>`
      : `<div class="flex items-center gap-3">
          <span class="w-10 h-10 ${theme.logoIcon} grid place-items-center font-display text-lg font-black shadow-glow-gold">L</span>
          <div>
            <span class="${theme.logo} text-base block leading-tight">LOVE <span class="text-love-gold">CONSTRUCTION</span></span>
            <span class="block text-[9px] font-bold tracking-[.22em] text-neutral-400 uppercase">General Contractor · WC</span>
          </div>
        </div>`;

  return `
    <!-- Top Announcement Strip -->
    <div class="${theme.topBar} py-2 px-5 md:px-10">
      <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3">
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px]">
            <span class="w-2 h-2 rounded-full ${designId==='design-2'?'bg-love-clay':designId==='design-3'?'bg-love-sage':'bg-love-gold'} animate-pulse"></span>
            Philip, Western Cape · Residential Specialists
          </span>
          <span class="hidden md:inline text-neutral-500">•</span>
          <span class="hidden md:inline text-[11px]">SABS-Compliant Building & Finishing</span>
        </div>
        <div class="flex items-center gap-5 text-[11px] font-semibold">
          <a href="${phoneLink}" class="inline-flex items-center gap-1.5 hover:underline">
            ${svgIcon('phone', 'w-3.5 h-3.5')} +27 81 298 7328
          </a>
          <a href="${waLink}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 text-emerald-400 hover:underline">
            ${svgIcon('message-circle', 'w-3.5 h-3.5')} WhatsApp Quote
          </a>
          ${designId === 'design-3' ? `
            <button id="blueprint-toggle-btn" class="ml-2 inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-800 text-sky-400 border border-sky-500/30 font-mono text-[10px] tracking-wider uppercase hover:bg-slate-700 transition">
              ${svgIcon('layout', 'w-3 h-3')} <span id="blueprint-btn-label">CAD Mode</span>
            </button>
          ` : ''}
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <header class="sticky top-0 z-40 ${theme.header} backdrop-blur-md transition-all">
      <div class="max-w-7xl mx-auto flex items-center justify-between px-5 py-3.5 md:px-10">
        <a href="index.html" class="flex items-center" aria-label="LOVE CONSTRUCTION Home">
          ${brandLogo}
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          ${navLinksHtml}
          <a href="contact.html" class="${theme.button} inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold">
            <span>Free Quote</span>
            ${svgIcon('arrow-up-right', 'w-4 h-4')}
          </a>
        </nav>

        <!-- Mobile Menu Toggle Button -->
        <button id="menu-button" class="lg:hidden p-2.5 border border-current/20 rounded-md focus:outline-none" aria-expanded="false" aria-controls="mobile-navigation" aria-label="Toggle navigation menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
        </button>
      </div>

      <!-- Mobile Navigation Drawer -->
      <nav id="mobile-navigation" class="hidden flex-col gap-3 px-6 py-5 border-t border-current/10 ${designId==='design-1'?'bg-[#16181e]':designId==='design-2'?'bg-[#efe7da]':'bg-white'} lg:hidden shadow-2xl" aria-label="Mobile Navigation">
        ${navPages.map(([label, href, key]) => `<a href="${href}" class="py-2.5 text-base font-bold border-b border-current/10 ${pageId === key ? theme.accent : ''}">${label}</a>`).join('')}
        <div class="pt-3 flex flex-col gap-2">
          <a href="contact.html" class="${theme.button} w-full py-3.5 text-center text-sm font-bold justify-center inline-flex items-center gap-2">
            Request an Itemized Quote ${svgIcon('arrow-up-right', 'w-4 h-4')}
          </a>
          <a href="${waLink}" class="w-full py-3 bg-[#168f52] text-white text-center text-sm font-bold rounded-lg inline-flex items-center justify-center gap-2">
            ${svgIcon('message-circle', 'w-4 h-4')} Quick Chat on WhatsApp
          </a>
        </div>
      </nav>
    </header>
  `;
}

// --- 8. FOOTER COMPONENT ---
function renderFooter() {
  return `
    <footer class="${theme.surface} pt-16 pb-28 md:pb-16 px-5 md:px-10 border-t border-white/10">
      <div class="max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.2fr]">
        
        <!-- Column 1: Company Profile -->
        <div>
          <a href="index.html" class="inline-block">
            <span class="${theme.display} text-2xl font-black tracking-wider block">LOVE <span class="${theme.accent}">CONSTRUCTION</span></span>
            <span class="text-xs uppercase tracking-[.25em] text-neutral-400 block mt-1">General Contractor & Remodeling</span>
          </a>
          <p class="mt-4 text-sm leading-6 opacity-75 max-w-sm">
            Dependable, high-spec residential building, full turnkey construction, structural roofing, and precision interior finishing across Philip and the Western Cape.
          </p>
          <div class="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full">
              ${svgIcon('shield-check', 'w-3.5 h-3.5 text-emerald-400')} SABS Materials
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full">
              ${svgIcon('check', 'w-3.5 h-3.5 text-emerald-400')} Work Guaranteed
            </span>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-full">
              ${svgIcon('star', 'w-3.5 h-3.5 text-amber-400')} 5-Star Reputation
            </span>
          </div>
        </div>

        <!-- Column 2: Navigation Links -->
        <div>
          <h3 class="text-xs font-extrabold uppercase tracking-widest text-neutral-400 mb-4">Explore Site</h3>
          <ul class="space-y-2.5 text-sm">
            ${navPages.map(([label, href]) => `<li><a href="${href}" class="opacity-80 hover:opacity-100 hover:underline transition">${label}</a></li>`).join('')}
            <li><a href="../../designs.html" class="font-bold ${theme.accent} hover:underline inline-flex items-center gap-1">Compare 3 Website Designs ↗</a></li>
          </ul>
        </div>

        <!-- Column 3: 12 Core Services -->
        <div>
          <h3 class="text-xs font-extrabold uppercase tracking-widest text-neutral-400 mb-4">Core Trades</h3>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2 text-xs opacity-80">
            ${serviceItems.map(s => `<li><a href="services.html" class="hover:underline hover:opacity-100">${s.name}</a></li>`).join('')}
          </ul>
        </div>

        <!-- Column 4: Direct Builder Contact -->
        <div>
          <h3 class="text-xs font-extrabold uppercase tracking-widest text-neutral-400 mb-4">Talk To Philip Directly</h3>
          <div class="space-y-3 text-sm">
            <a href="${phoneLink}" class="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <span class="w-8 h-8 rounded-full ${theme.accentBg} grid place-items-center text-current">${svgIcon('phone', 'w-4 h-4')}</span>
              <div>
                <span class="text-[10px] block opacity-60 uppercase font-bold">Call Contractor</span>
                <span class="font-bold">+27 81 298 7328</span>
              </div>
            </a>
            <a href="${emailLink}" class="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition">
              <span class="w-8 h-8 rounded-full ${theme.accentBg} grid place-items-center text-current">${svgIcon('mail', 'w-4 h-4')}</span>
              <div class="overflow-hidden">
                <span class="text-[10px] block opacity-60 uppercase font-bold">Email Enquiry</span>
                <span class="font-bold text-xs truncate block">lovebanda1990@gmail.com</span>
              </div>
            </a>
            <div class="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
              <span class="w-8 h-8 rounded-full ${theme.accentBg} grid place-items-center text-current shrink-0">${svgIcon('map-pin', 'w-4 h-4')}</span>
              <div>
                <span class="text-[10px] block opacity-60 uppercase font-bold">Primary Service Hub</span>
                <span class="text-xs">Philip, Western Cape & Surrounds</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Copyright & Bottom Bar -->
      <div class="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-wrap justify-between items-center gap-4 text-xs opacity-60">
        <p>© ${new Date().getFullYear()} LOVE CONSTRUCTION (Pty) Ltd. All rights reserved.</p>
        <div class="flex items-center gap-6">
          <span>Stellenbosch • Franschhoek • Camps Bay • Somerset West • Paarl • Durbanville</span>
          <a href="../../designs.html" class="underline font-bold text-white hover:text-amber-400">Website Options</a>
        </div>
      </div>
    </footer>

    <!-- Global Floating Action Buttons & Design Switcher -->
    ${renderFloatingBar()}
  `;
}

// --- 9. FLOATING DESIGN SWITCHER & WHATSAPP QUICK DIAL ---
function renderFloatingBar() {
  return `
    <!-- Floating Bottom Dock -->
    <aside class="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-1.5 bg-[#121316]/95 text-white border border-white/20 rounded-full shadow-2xl backdrop-blur-md max-w-[95vw]">
      
      <!-- Design Switcher Pills -->
      <div class="flex items-center gap-1 text-[11px] font-bold px-2">
        <span class="hidden sm:inline text-neutral-400 uppercase text-[9px] mr-1 tracking-wider">Choose Design:</span>
        <a href="../design-1/${pageId}.html" class="px-3 py-1.5 rounded-full transition ${designId==='design-1' ? 'bg-love-gold text-black shadow-glow-gold' : 'hover:bg-white/10 text-neutral-300'}" title="Design 1: Charcoal & Gold (Industrial Luxury)">
          01 <span class="hidden md:inline">· Luxury</span>
        </a>
        <a href="../design-2/${pageId}.html" class="px-3 py-1.5 rounded-full transition ${designId==='design-2' ? 'bg-love-clay text-white shadow-glow-clay' : 'hover:bg-white/10 text-neutral-300'}" title="Design 2: Earth & Terracotta (Artisan Craft)">
          02 <span class="hidden md:inline">· Artisan</span>
        </a>
        <a href="../design-3/${pageId}.html" class="px-3 py-1.5 rounded-full transition ${designId==='design-3' ? 'bg-love-sage text-white shadow-glow-sage' : 'hover:bg-white/10 text-neutral-300'}" title="Design 3: Slate & Sage (Architectural Vanguard)">
          03 <span class="hidden md:inline">· Vanguard</span>
        </a>
      </div>

      <div class="h-4 w-px bg-white/20"></div>

      <!-- Compare Hub Link -->
      <a href="../../designs.html" class="px-2.5 py-1 text-[11px] font-bold text-amber-400 hover:text-amber-300 hover:underline flex items-center gap-1">
        <span>Hub</span>
        ${svgIcon('arrow-up-right', 'w-3 h-3')}
      </a>

      <!-- Direct WhatsApp Action -->
      <a href="${waLink}" target="_blank" rel="noopener" class="px-3 py-1.5 bg-[#168f52] hover:bg-[#127945] text-white font-bold text-xs rounded-full flex items-center gap-1.5 shadow-md transition transform hover:scale-105" aria-label="WhatsApp Philip directly">
        ${svgIcon('message-circle', 'w-3.5 h-3.5')}
        <span class="hidden sm:inline">WhatsApp</span>
      </a>

    </aside>
  `;
}

// --- 10. COMPLETED PROJECTS SECTION (THE BLOG-LIKE IMMERSIVE SHOWCASE) ---
function renderCompletedProjectsSection(isStandalonePage = false) {
  const projectsToDisplay = isStandalonePage ? completedProjects : completedProjects.slice(0, 4);

  return `
    <section id="completed-projects" class="py-16 md:py-24 px-5 md:px-10 ${designId === 'design-2' ? 'bg-[#f3ede1]' : designId === 'design-3' ? 'bg-[#F4F6F5] border-y border-neutral-200' : 'bg-[#15171c]'}">
      <div class="max-w-7xl mx-auto">
        
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.25em] ${theme.accent} mb-3">
              <span class="w-6 h-px bg-current"></span>
              Verified Portfolio · Western Cape
            </div>
            <h2 class="${theme.display} text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Featured <span class="${theme.editorial} ${theme.accent}">Completed Projects.</span>
            </h2>
            <p class="mt-3 text-sm md:text-base opacity-75 max-w-2xl leading-relaxed">
              Explore real-world case studies detailing our engineering solutions, milestone timelines, before-and-after transformations, and verified homeowner reviews.
            </p>
          </div>

          ${!isStandalonePage ? `
            <a href="projects.html" class="${theme.buttonOutline} px-6 py-3 text-sm inline-flex items-center gap-2">
              View All 6 Case Studies ${svgIcon('arrow-right', 'w-4 h-4')}
            </a>
          ` : ''}
        </div>

        <!-- Filter Tabs for Completed Projects -->
        <div class="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-current/10" role="tablist" aria-label="Project Categories">
          <button class="project-cat-filter px-4 py-2 text-xs font-bold rounded-full transition ${theme.accentBg}" data-filter="all">All Projects (${completedProjects.length})</button>
          <button class="project-cat-filter px-4 py-2 text-xs font-bold rounded-full border border-current/20 hover:bg-black/5 dark:hover:bg-white/5 transition" data-filter="turnkey">Turnkey Builds</button>
          <button class="project-cat-filter px-4 py-2 text-xs font-bold rounded-full border border-current/20 hover:bg-black/5 dark:hover:bg-white/5 transition" data-filter="roofing">Roofing & Waterproofing</button>
          <button class="project-cat-filter px-4 py-2 text-xs font-bold rounded-full border border-current/20 hover:bg-black/5 dark:hover:bg-white/5 transition" data-filter="interior">Interior Finishing</button>
          <button class="project-cat-filter px-4 py-2 text-xs font-bold rounded-full border border-current/20 hover:bg-black/5 dark:hover:bg-white/5 transition" data-filter="outdoor">Paving & Hardscaping</button>
        </div>

        <!-- Project Cards Grid -->
        <div id="projects-showcase-grid" class="grid gap-8 md:grid-cols-2">
          ${projectsToDisplay.map((p, idx) => `
            <article class="project-card group ${theme.card} overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5" data-category="${p.categoryKey}">
              <div>
                <!-- Project Image & Overlay Badges -->
                <div class="relative aspect-[16/10] overflow-hidden bg-neutral-900 cursor-pointer project-open-trigger" data-project-id="${p.id}">
                  <img src="${p.heroImage}" alt="${p.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <!-- Top Floating Badges -->
                  <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span class="px-3 py-1 bg-black/75 backdrop-blur-md text-white font-mono text-[10px] uppercase font-bold tracking-wider rounded">
                      ${p.category}
                    </span>
                    <span class="px-2.5 py-1 ${designId==='design-2'?'bg-love-clay':'bg-love-gold'} text-black font-bold text-[10px] uppercase tracking-wider rounded">
                      ${p.specs.duration}
                    </span>
                  </div>

                  <!-- Bottom Hover Banner -->
                  <div class="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                    <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-300">
                      ${svgIcon('map-pin', 'w-3.5 h-3.5 text-amber-400')} ${p.location}
                    </span>
                    <span class="inline-flex items-center gap-1 text-xs font-bold ${theme.accent} group-hover:translate-x-1 transition-transform">
                      Read Case Study ${svgIcon('arrow-up-right', 'w-3.5 h-3.5')}
                    </span>
                  </div>
                </div>

                <!-- Project Body Details -->
                <div class="p-6 md:p-8">
                  <h3 class="${theme.display} text-xl md:text-2xl font-bold tracking-tight mb-2 group-hover:${theme.accent} transition-colors">
                    ${p.title}
                  </h3>
                  <p class="text-xs font-semibold ${theme.accent} uppercase tracking-wider mb-4">
                    ${p.subtitle}
                  </p>
                  <p class="text-sm opacity-80 leading-relaxed mb-6 line-clamp-3">
                    ${p.summary}
                  </p>

                  <!-- Technical Specs Pill Grid -->
                  <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 ${designId==='design-1'?'bg-[#121316]':designId==='design-2'?'bg-[#F8F5EE]':'bg-white'} border border-current/10 rounded-lg text-xs mb-6">
                    <div>
                      <span class="block opacity-60 text-[10px] uppercase font-bold">Floor Area</span>
                      <strong class="font-bold">${p.specs.area}</strong>
                    </div>
                    <div>
                      <span class="block opacity-60 text-[10px] uppercase font-bold">Timeline</span>
                      <strong class="font-bold">${p.specs.duration}</strong>
                    </div>
                    <div>
                      <span class="block opacity-60 text-[10px] uppercase font-bold">Status</span>
                      <strong class="text-emerald-500 font-bold">100% Signed-Off</strong>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Card Action Footer -->
              <div class="px-6 pb-6 md:px-8 md:pb-8 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-current/10 pt-4">
                <button type="button" class="project-open-trigger text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-2 ${theme.accent} hover:underline" data-project-id="${p.id}">
                  <span>Immersive Case Study & Specs</span>
                  ${svgIcon('arrow-right', 'w-3.5 h-3.5')}
                </button>
                <a href="${waLink}&text=I%20am%20interested%20in%20a%20project%20like%20${encodeURIComponent(p.title)}" target="_blank" rel="noopener" class="text-xs opacity-70 hover:opacity-100 inline-flex items-center gap-1 font-semibold">
                  ${svgIcon('message-circle', 'w-3.5 h-3.5')} Enquire Similar
                </a>
              </div>
            </article>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

// --- 11. INTERACTIVE BEFORE & AFTER TRANSFORMATION SLIDER ---
function renderBeforeAfterSection() {
  const p = completedProjects[0]; // Stellenbosch Villa

  return `
    <section class="py-16 md:py-24 px-5 md:px-10 ${designId === 'design-2' ? 'bg-[#EDE4D4]' : designId === 'design-3' ? 'bg-white' : 'bg-[#121316]'}">
      <div class="max-w-7xl mx-auto">
        <div class="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          
          <div>
            <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.25em] ${theme.accent} mb-3">
              <span class="w-6 h-px bg-current"></span>
              Live Before & After Comparison
            </div>
            <h2 class="${theme.display} text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Witness the <span class="${theme.editorial} ${theme.accent}">Transformation.</span>
            </h2>
            <p class="mt-4 text-sm md:text-base opacity-80 leading-relaxed">
              Drag the interactive slider across the image to reveal how LOVE CONSTRUCTION turns bare excavations and raw brickwork into master-finished architectural residences.
            </p>

            <div class="mt-8 space-y-4">
              <div class="flex items-start gap-4 p-4 ${theme.card}">
                <span class="w-8 h-8 rounded-full ${theme.accentBg} grid place-items-center font-bold text-xs shrink-0">01</span>
                <div>
                  <h4 class="font-bold text-sm">Rigorous Substructure Groundwork</h4>
                  <p class="text-xs opacity-75 mt-0.5">Excavation, engineered compaction, and laser-guided reinforced strip footings.</p>
                </div>
              </div>
              <div class="flex items-start gap-4 p-4 ${theme.card}">
                <span class="w-8 h-8 rounded-full ${theme.accentBg} grid place-items-center font-bold text-xs shrink-0">02</span>
                <div>
                  <h4 class="font-bold text-sm">Flawless Finishing & Turnkey Delivery</h4>
                  <p class="text-xs opacity-75 mt-0.5">Flush-skimmed ceilings, Italian porcelain tiling, certified roofing, and handover.</p>
                </div>
              </div>
            </div>

            <div class="mt-8 flex flex-wrap gap-4 items-center">
              <button type="button" class="project-open-trigger ${theme.button} px-6 py-3.5 text-sm inline-flex items-center gap-2" data-project-id="${p.id}">
                Read This Project's Full Story ${svgIcon('arrow-up-right', 'w-4 h-4')}
              </button>
            </div>
          </div>

          <!-- Interactive Drag Slider -->
          <div class="relative">
            <div class="relative aspect-[16/10] overflow-hidden rounded-xl shadow-2xl before-after-container border border-current/20 select-none cursor-ew-resize" id="hero-before-after">
              <!-- After Image (Base) -->
              <img src="${p.afterImage}" alt="Completed Villa by Love Construction" class="absolute inset-0 w-full h-full object-cover">
              <span class="absolute bottom-4 right-4 z-10 px-3 py-1 bg-black/80 text-white font-mono text-[10px] uppercase font-bold tracking-wider rounded">
                COMPLETED FINISH
              </span>

              <!-- Before Image (Overlay clipped) -->
              <div class="before-after-overlay" id="ba-overlay">
                <img src="${p.beforeImage}" alt="Before construction groundwork" class="absolute inset-0 w-full h-full object-cover max-w-none" id="ba-before-img">
                <span class="absolute bottom-4 left-4 z-10 px-3 py-1 bg-love-clay/90 text-white font-mono text-[10px] uppercase font-bold tracking-wider rounded">
                  RAW GROUNDWORK
                </span>
              </div>

              <!-- Draggable Handle -->
              <div class="before-after-handle" id="ba-handle" aria-label="Drag to compare before and after">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"/></svg>
              </div>
            </div>
            <p class="text-center text-xs opacity-60 mt-3 font-semibold">
              ↔ Drag handle left or right to inspect the transformation
            </p>
          </div>

        </div>
      </div>
    </section>
  `;
}

// --- 12. DESIGN 3 SPECIAL: LIVE INTERACTIVE ESTIMATOR & TIMELINE CALCULATOR ---
function renderEstimatorWidget() {
  return `
    <section class="py-16 md:py-24 px-5 md:px-10 bg-[#0B1320] text-white border-t border-slate-800">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-3xl mb-12">
          <div class="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[.25em] text-emerald-400 mb-3">
            <span class="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
            Interactive Tool · Real-Time Calculation
          </div>
          <h2 class="font-display text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Instant Project Scope & <span class="text-love-sage">Timeline Estimator.</span>
          </h2>
          <p class="mt-3 text-sm md:text-base text-slate-300 leading-relaxed">
            Select your scope of work and floor area below. Our live calculation engine provides realistic execution timelines, phased milestone breakdowns, and a direct link to lock in your written quote with Philip.
          </p>
        </div>

        <div class="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          
          <!-- Controls -->
          <div class="p-6 md:p-8 bg-slate-900 border border-slate-700 rounded-lg space-y-6">
            <div>
              <label class="block font-mono text-xs uppercase tracking-wider text-slate-400 mb-2 font-bold">1. Select Project Type</label>
              <div class="grid grid-cols-2 gap-2" id="calc-type-selector">
                <button type="button" class="calc-type-btn p-3 text-left border border-emerald-500 bg-emerald-950/40 text-white font-bold text-xs rounded transition active-type" data-rate="22" data-timeline-base="6" data-type="Turnkey Residential Build">
                  🏗️ Turnkey Build
                </button>
                <button type="button" class="calc-type-btn p-3 text-left border border-slate-700 bg-slate-800 text-slate-300 font-bold text-xs rounded transition hover:border-slate-500" data-rate="14" data-timeline-base="4" data-type="Full Home Renovation">
                  🔨 Full Renovation
                </button>
                <button type="button" class="calc-type-btn p-3 text-left border border-slate-700 bg-slate-800 text-slate-300 font-bold text-xs rounded transition hover:border-slate-500" data-rate="8" data-timeline-base="2" data-type="Roofing & Waterproofing">
                  🛡️ Roofing & Damp
                </button>
                <button type="button" class="calc-type-btn p-3 text-left border border-slate-700 bg-slate-800 text-slate-300 font-bold text-xs rounded transition hover:border-slate-500" data-rate="6" data-timeline-base="2" data-type="Paving & Pool Patio">
                  🧱 Paving & Outdoor
                </button>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between mb-2">
                <label class="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold">2. Approximate Floor Area</label>
                <span class="font-mono text-base font-extrabold text-emerald-400" id="calc-area-val">180 m²</span>
              </div>
              <input type="range" id="calc-area-range" min="30" max="600" step="10" value="180" class="w-full accent-emerald-500 bg-slate-800 h-2.5 rounded-lg cursor-pointer">
              <div class="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                <span>30 m² (Room)</span>
                <span>250 m² (Medium Home)</span>
                <span>600 m² (Villa Estate)</span>
              </div>
            </div>

            <div>
              <label class="block font-mono text-xs uppercase tracking-wider text-slate-400 mb-2 font-bold">3. Site Location (Western Cape)</label>
              <select id="calc-location-select" class="w-full p-3 bg-slate-800 border border-slate-700 rounded text-sm text-white font-semibold focus:outline-none focus:border-emerald-500">
                <option value="Stellenbosch">Stellenbosch & Winelands</option>
                <option value="Franschhoek">Franschhoek Valley</option>
                <option value="Camps Bay">Camps Bay / Atlantic Seaboard</option>
                <option value="Somerset West">Somerset West / Helderberg</option>
                <option value="Paarl">Paarl & Drakenstein</option>
                <option value="Durbanville">Durbanville & Northern Suburbs</option>
                <option value="Cape Town Metro">Cape Town Metro & Surrounds</option>
              </select>
            </div>
          </div>

          <!-- Dynamic Output Card -->
          <div class="p-6 md:p-8 bg-slate-900/90 border border-emerald-500/30 rounded-lg flex flex-col justify-between relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 font-mono text-[9px] uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border-b border-l border-emerald-500/30">
              ESTIMATE ENGINE V2.4
            </div>

            <div>
              <span class="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-1">Estimated Turnaround</span>
              <div class="text-3xl md:text-4xl font-black text-white font-display mb-4" id="calc-timeline-output">
                6 – 8 Weeks
              </div>

              <div class="space-y-3 border-t border-slate-800 pt-4 text-xs font-mono">
                <div class="flex justify-between">
                  <span class="text-slate-400">Selected Scope:</span>
                  <strong class="text-white" id="calc-summary-type">Turnkey Residential Build</strong>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Total Measured Area:</span>
                  <strong class="text-white" id="calc-summary-area">180 m²</strong>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Target Region:</span>
                  <strong class="text-white" id="calc-summary-loc">Stellenbosch</strong>
                </div>
                <div class="flex justify-between">
                  <span class="text-slate-400">Standard:</span>
                  <strong class="text-emerald-400">SABS Certified Materials</strong>
                </div>
              </div>
            </div>

            <div class="mt-8 pt-6 border-t border-slate-800 space-y-3">
              <a id="calc-wa-btn" href="#" target="_blank" rel="noopener" class="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center text-sm rounded flex items-center justify-center gap-2 shadow-lg transition">
                ${svgIcon('message-circle', 'w-4 h-4')} Lock In Written Quote on WhatsApp
              </a>
              <p class="text-[11px] text-center text-slate-500">
                Official quotes confirmed after a complimentary site inspection in Western Cape.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

// --- 13. HOME PAGE BUILDER ---
function renderHomePage() {
  const heroSection = designId === 'design-1'
    ? `
      <section class="relative min-h-[700px] lg:min-h-[760px] flex items-center ${theme.surface} overflow-hidden">
        <img src="${photo(imageFiles[32])}" alt="Luxury Construction Villa by Love Construction" class="absolute inset-0 w-full h-full object-cover opacity-45 transform scale-105 transition-transform duration-1000" fetchpriority="high">
        <div class="absolute inset-0 ${theme.heroGradient}"></div>
        
        <div class="relative max-w-7xl mx-auto px-5 md:px-10 py-24 w-full">
          <div class="max-w-3xl">
            
            <div class="inline-flex items-center gap-3 px-3.5 py-1.5 bg-black/60 border border-love-gold/40 rounded-full text-xs font-bold text-love-gold tracking-widest uppercase mb-6 backdrop-blur-md">
              <span class="w-2 h-2 rounded-full bg-love-gold animate-ping"></span>
              Philip · Western Cape General Contractor
            </div>

            <h1 class="${theme.display} text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.96] text-white">
              Building Your Vision.<br>
              <span class="${theme.editorial} text-love-gold">Delivering Quality.</span>
            </h1>

            <p class="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
              From heavy-duty concrete foundations to precision architectural finishes, LOVE CONSTRUCTION brings dependable building, turnkey renovation, and structural excellence to premier properties across the Western Cape.
            </p>

            <div class="mt-10 flex flex-wrap gap-4 items-center">
              <a href="contact.html" class="${theme.button} px-8 py-4 text-sm font-extrabold inline-flex items-center gap-3">
                <span>Request Free Itemized Quote</span>
                ${svgIcon('arrow-up-right', 'w-4 h-4')}
              </a>
              <a href="#completed-projects" class="px-7 py-4 border border-white/30 text-white hover:bg-white/10 text-sm font-bold transition inline-flex items-center gap-2">
                <span>Explore Completed Projects</span>
                ${svgIcon('arrow-right', 'w-4 h-4')}
              </a>
            </div>

            <!-- Live Credibility Metrics -->
            <div class="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <span class="block font-display text-3xl font-extrabold text-love-gold">120+</span>
                <span class="text-xs uppercase tracking-wider text-neutral-400 mt-1 block font-semibold">Projects Built</span>
              </div>
              <div>
                <span class="block font-display text-3xl font-extrabold text-white">12</span>
                <span class="text-xs uppercase tracking-wider text-neutral-400 mt-1 block font-semibold">Specialist Trades</span>
              </div>
              <div>
                <span class="block font-display text-3xl font-extrabold text-love-gold">100%</span>
                <span class="text-xs uppercase tracking-wider text-neutral-400 mt-1 block font-semibold">SABS Compliance</span>
              </div>
              <div>
                <span class="block font-display text-3xl font-extrabold text-white">Philip, WC</span>
                <span class="text-xs uppercase tracking-wider text-neutral-400 mt-1 block font-semibold">Regional Coverage</span>
              </div>
            </div>

          </div>
        </div>
      </section>
    `
    : designId === 'design-2'
      ? `
        <section class="max-w-7xl mx-auto px-5 md:px-10 py-12 md:py-20 grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.25em] text-love-clay mb-4">
              <span class="w-6 h-px bg-love-clay"></span>
              A Local Team · Master Craftsmanship
            </div>

            <h1 class="${theme.display} text-4xl sm:text-6xl lg:text-7xl leading-[0.98] text-[#261E1A]">
              A better home<br>
              starts <em class="italic text-love-clay">with care.</em>
            </h1>

            <p class="mt-6 text-base text-[#5C4F46] leading-relaxed max-w-xl">
              Thoughtful residential building, bespoke renovations, and property improvement for the spaces where family life happens. Direct communication with Philip Love Banda, practical solutions, and meticulous attention to every joint and surface.
            </p>

            <div class="mt-8 flex flex-wrap gap-4 items-center">
              <a href="contact.html" class="${theme.button} px-8 py-4 text-sm font-bold inline-flex items-center gap-2">
                <span>Start Your Home Project</span>
                ${svgIcon('arrow-right', 'w-4 h-4')}
              </a>
              <a href="#completed-projects" class="${theme.buttonOutline} px-6 py-4 text-sm font-bold">
                View Real Work & Stories
              </a>
            </div>

            <div class="mt-12 p-6 bg-[#EFE8DA] rounded-2xl flex items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <span class="w-12 h-12 rounded-full bg-love-clay text-white grid place-items-center font-bold text-lg">LC</span>
                <div>
                  <h4 class="font-bold text-sm text-[#261E1A]">Philip Love Banda</h4>
                  <p class="text-xs text-[#6B5E55]">Lead Builder & Project Manager</p>
                </div>
              </div>
              <a href="${waLink}" target="_blank" rel="noopener" class="text-xs font-bold text-love-clay hover:underline inline-flex items-center gap-1">
                Direct WhatsApp ↗
              </a>
            </div>
          </div>

          <!-- Hero Image with Organic Rounded Border -->
          <div class="relative">
            <div class="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-[#DCD4C4] border-8 border-white">
              <img src="${photo(imageFiles[32])}" alt="Warm residential home built by Love Construction" class="w-full h-full object-cover" fetchpriority="high">
            </div>
            <div class="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-[#261E1A]/10 max-w-xs">
              <div class="flex items-center gap-1 text-amber-500 mb-1">
                ${svgIcon('star', 'w-4 h-4')}${svgIcon('star', 'w-4 h-4')}${svgIcon('star', 'w-4 h-4')}${svgIcon('star', 'w-4 h-4')}${svgIcon('star', 'w-4 h-4')}
              </div>
              <p class="text-xs font-bold text-[#261E1A]">"Flawless workmanship from foundation to paint."</p>
              <span class="text-[10px] text-[#7A6C63] mt-1 block">David & Heloise · Stellenbosch</span>
            </div>
          </div>
        </section>
      `
      : `
        <section class="max-w-7xl mx-auto px-5 md:px-10 py-12 md:py-20 grid gap-12 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <div class="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[.25em] text-love-sage mb-4 font-bold">
              <span class="w-2.5 h-2.5 bg-love-sage"></span>
              ARCHITECTURAL ENGINEERING · WESTERN CAPE
            </div>

            <h1 class="${theme.display} text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.94] text-[#181A1B]">
              Engineered for the way <span class="text-love-sage">you live.</span>
            </h1>

            <p class="mt-6 text-base text-neutral-600 leading-relaxed max-w-xl">
              Precision building systems, certified structural engineering, and contemporary finishes calibrated for Western Cape climate durability and long-term asset value.
            </p>

            <div class="mt-8 flex flex-wrap gap-4 items-center">
              <a href="contact.html" class="${theme.button} px-8 py-4 text-xs font-bold inline-flex items-center gap-3">
                <span>COMMISSION A PROJECT</span>
                ${svgIcon('arrow-right', 'w-4 h-4')}
              </a>
              <a href="#completed-projects" class="${theme.buttonOutline} px-6 py-4 text-xs font-bold">
                VIEW ARCHITECTURAL DOSSIER
              </a>
            </div>

            <!-- Technical Spec Coordinates -->
            <div class="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-neutral-200 pt-6 font-mono text-xs">
              <div>
                <span class="text-neutral-400 block text-[10px] uppercase">COORDINATES</span>
                <strong class="font-bold">33.9321° S, 18.8602° E</strong>
              </div>
              <div>
                <span class="text-neutral-400 block text-[10px] uppercase">SABS STANDARDS</span>
                <strong class="font-bold">SANS 10400 COMPLIANT</strong>
              </div>
              <div>
                <span class="text-neutral-400 block text-[10px] uppercase">DIRECT CONTRACTOR</span>
                <strong class="font-bold">+27 81 298 7328</strong>
              </div>
            </div>
          </div>

          <div class="relative bg-slate-100 border border-neutral-200 p-2">
            <div class="aspect-[4/3] bg-slate-900 overflow-hidden relative">
              <img src="${photo(imageFiles[21])}" alt="Architectural build by Love Construction" class="w-full h-full object-cover" fetchpriority="high">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between text-xs font-mono">
                <span>SPEC: 380m² CONTEMPORARY VILLA</span>
                <span class="text-emerald-400 font-bold">VERIFIED 2026</span>
              </div>
            </div>
          </div>
        </section>
      `;

  return `
    ${heroSection}
    ${renderCompletedProjectsSection(false)}
    ${renderBeforeAfterSection()}
    ${designId === 'design-3' ? renderEstimatorWidget() : ''}
    ${renderServicesPreview()}
    ${renderValuesSection()}
    ${renderTestimonialsSection()}
    ${renderCtaBanner()}
  `;
}

// --- 14. SERVICES PREVIEW SECTION ---
function renderServicesPreview() {
  const featuredServices = serviceItems.slice(0, 6);

  return `
    <section class="py-16 md:py-24 px-5 md:px-10 ${designId === 'design-2' ? 'bg-love-linen' : designId === 'design-3' ? 'bg-[#FAFBFB]' : 'bg-[#181a1f]'}">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.25em] ${theme.accent} mb-3">
              <span class="w-6 h-px bg-current"></span>
              All-In-One Contractor
            </div>
            <h2 class="${theme.display} text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Comprehensive <span class="${theme.editorial} ${theme.accent}">Building Trades.</span>
            </h2>
            <p class="mt-3 text-sm md:text-base opacity-75 max-w-xl">
              From heavy ground construction to exquisite interior carpentry and tilework, we manage the entire build under one experienced supervisor.
            </p>
          </div>
          <a href="services.html" class="${theme.buttonOutline} px-6 py-3 text-sm inline-flex items-center gap-2">
            See All 12 Services ${svgIcon('arrow-right', 'w-4 h-4')}
          </a>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          ${featuredServices.map((s, i) => `
            <article class="${theme.card} p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
              <div>
                <div class="flex items-center justify-between mb-6">
                  <span class="w-12 h-12 rounded-lg ${designId==='design-1'?'bg-[#121316] text-love-gold':designId==='design-2'?'bg-[#EFE8DA] text-love-clay':'bg-white text-love-sage border border-neutral-200'} grid place-items-center shadow-sm">
                    ${svgIcon(s.icon, 'w-6 h-6')}
                  </span>
                  <span class="font-mono text-xs font-bold opacity-50">0${i+1}</span>
                </div>
                <h3 class="${theme.display} text-xl font-bold mb-3">${s.name}</h3>
                <p class="text-xs md:text-sm opacity-75 leading-relaxed mb-6">${s.desc}</p>
              </div>
              <div class="pt-4 border-t border-current/10 flex items-center justify-between">
                <span class="text-[11px] font-semibold opacity-60">Avg. Timeline: ${s.time}</span>
                <a href="services.html" class="text-xs font-bold ${theme.accent} hover:underline inline-flex items-center gap-1">
                  Details ${svgIcon('arrow-right', 'w-3 h-3')}
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// --- 15. VALUES & REASONS SECTION ---
function renderValuesSection() {
  const reasons = [
    { num: '01', title: 'Single Point of Accountability', desc: 'Philip Love Banda oversees every site directly. You deal with the actual builder, not an intermediary sales agent.' },
    { num: '02', title: 'SABS Certified Materials Only', desc: 'From 30MPa structural concrete to coastal grade roof flashings and SABS-approved timber trusses.' },
    { num: '03', title: 'Clear Itemized Quotations', desc: 'Transparent scope of work, fixed material breakdowns, and milestone schedules so you know exactly where every Rand goes.' },
    { num: '04', title: 'Western Cape Weather Proofing', desc: 'Specialized techniques designed to withstand intense Cape winter rains, high summer heat, and coastal salt mist.' }
  ];

  return `
    <section class="py-16 md:py-24 px-5 md:px-10 ${theme.surface} border-t border-white/10">
      <div class="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.25em] ${theme.accent} mb-3">
            <span class="w-6 h-px bg-current"></span>
            Why Choose Love Construction
          </div>
          <h2 class="${theme.display} text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Solid Work.<br>
            <span class="${theme.editorial} ${theme.accent}">Lasting Confidence.</span>
          </h2>
          <p class="mt-4 text-sm md:text-base opacity-75 leading-relaxed max-w-md">
            Building or renovating your home is a major milestone. We treat your property with absolute care, maintain clean worksites, and complete every detail to the highest trade standard.
          </p>
          <div class="mt-8">
            <a href="about.html" class="${theme.button} px-6 py-3.5 text-sm inline-flex items-center gap-2">
              Our Building Philosophy ${svgIcon('arrow-right', 'w-4 h-4')}
            </a>
          </div>
        </div>

        <div class="grid gap-6 sm:grid-cols-2">
          ${reasons.map(r => `
            <div class="p-6 md:p-8 ${designId==='design-1'?'bg-[#181a1f]':designId==='design-2'?'bg-[#342923]':'bg-slate-900'} border border-white/10 rounded-xl">
              <span class="font-mono text-xs font-black ${theme.accent} block mb-3">${r.num} / GUARANTEE</span>
              <h3 class="${theme.display} text-lg font-bold text-white mb-2">${r.title}</h3>
              <p class="text-xs md:text-sm text-neutral-300 leading-relaxed">${r.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// --- 16. CLIENT TESTIMONIALS SECTION ---
function renderTestimonialsSection() {
  const testimonials = [
    { quote: "Philip and his team built our Franschhoek residence from bare dirt to a luxury home. The ceiling bulkheads and tile lines are masterpieces.", author: "David & Heloise van der Merwe", loc: "Stellenbosch" },
    { quote: "We dealt with winter roof leaks for years. Love Construction diagnosed the problem, re-torched the membranes, and not a drop has leaked since.", author: "Marcus & Catherine Ross", loc: "Camps Bay" },
    { quote: "The paving around our pool and driveway looks incredible. Clean work, respectful crew, and they finished exactly when promised.", author: "Gavin & Tanya Wright", loc: "Somerset West" }
  ];

  return `
    <section class="py-16 md:py-24 px-5 md:px-10 ${designId==='design-2'?'bg-[#EFE8DA]':designId==='design-3'?'bg-white':'bg-[#14161b]'}">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-14">
          <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.25em] ${theme.accent} mb-3">
            <span class="w-6 h-px bg-current"></span>
            Homeowner Testimonials
            <span class="w-6 h-px bg-current"></span>
          </div>
          <h2 class="${theme.display} text-3xl md:text-4xl font-black tracking-tight">
            Trusted by Homeowners Across <span class="${theme.editorial} ${theme.accent}">Western Cape.</span>
          </h2>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          ${testimonials.map(t => `
            <div class="${theme.card} p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-1 text-amber-400 mb-4">
                  ${svgIcon('star', 'w-4 h-4')}${svgIcon('star', 'w-4 h-4')}${svgIcon('star', 'w-4 h-4')}${svgIcon('star', 'w-4 h-4')}${svgIcon('star', 'w-4 h-4')}
                </div>
                <p class="text-sm italic opacity-90 leading-relaxed mb-6">"${t.quote}"</p>
              </div>
              <div class="pt-4 border-t border-current/10 flex items-center justify-between">
                <div>
                  <strong class="block text-sm font-bold">${t.author}</strong>
                  <span class="text-xs opacity-60">${t.loc}, Western Cape</span>
                </div>
                <span class="w-8 h-8 rounded-full ${theme.accentBg} grid place-items-center text-xs font-bold">LC</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// --- 17. HIGH CONVERSION CTA BANNER ---
function renderCtaBanner() {
  return `
    <section class="py-16 px-5 md:px-10 ${designId==='design-1'?'bg-love-gold text-black':designId==='design-2'?'bg-love-clay text-white':'bg-love-sage text-white'}">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <span class="text-xs font-bold uppercase tracking-[.25em] block mb-2 opacity-80">Ready to Build or Renovate?</span>
          <h2 class="${theme.display} text-3xl md:text-5xl font-black tracking-tight leading-tight">
            Let’s Discuss Your Next Project Today.
          </h2>
          <p class="mt-2 text-sm md:text-base opacity-90 max-w-xl">
            Get in touch directly with Philip Love Banda for advice, on-site measurements, and an itemized quotation.
          </p>
        </div>
        <div class="flex flex-wrap gap-4 shrink-0">
          <a href="${waLink}" target="_blank" rel="noopener" class="px-7 py-4 bg-black text-white hover:bg-neutral-800 font-bold text-sm rounded-lg inline-flex items-center gap-2 shadow-xl transition">
            ${svgIcon('message-circle', 'w-4 h-4')} WhatsApp Philip Now
          </a>
          <a href="${phoneLink}" class="px-7 py-4 border-2 border-current hover:bg-black/10 font-bold text-sm rounded-lg inline-flex items-center gap-2 transition">
            ${svgIcon('phone', 'w-4 h-4')} Call +27 81 298 7328
          </a>
        </div>
      </div>
    </section>
  `;
}

// --- 18. ABOUT PAGE BUILDER ---
function renderAboutPage() {
  return `
    <!-- About Hero -->
    <section class="${theme.surface} py-16 md:py-24 px-5 md:px-10 border-b border-white/10">
      <div class="max-w-7xl mx-auto max-w-3xl">
        <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.25em] ${theme.accent} mb-4">
          <span class="w-6 h-px bg-current"></span>
          Company Profile & Philosophy
        </div>
        <h1 class="${theme.display} text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          A Hands-On Builder You Can <span class="${theme.editorial} ${theme.accent}">Trust.</span>
        </h1>
        <p class="mt-6 text-base sm:text-lg opacity-80 leading-relaxed">
          LOVE CONSTRUCTION is an independent residential building and renovation contractor based in Philip, Western Cape, founded on the principle that honest craftsmanship and direct client communication make all the difference.
        </p>
      </div>
    </section>

    <!-- Company Story & Leadership -->
    <section class="py-16 md:py-24 px-5 md:px-10 ${designId==='design-2'?'bg-love-linen':designId==='design-3'?'bg-white':'bg-[#181a1f]'}">
      <div class="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <div class="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl bg-neutral-900 border border-current/10">
            <img src="${photo(imageFiles[32])}" alt="Philip Love Banda Construction Project" class="w-full h-full object-cover">
          </div>
        </div>
        <div>
          <span class="text-xs font-bold uppercase tracking-[.25em] ${theme.accent} block mb-2">Our Founder's Commitment</span>
          <h2 class="${theme.display} text-3xl md:text-4xl font-bold mb-6">Building Relationships as Strong as Our Concrete.</h2>
          <p class="text-sm md:text-base opacity-80 leading-relaxed mb-4">
            Under the leadership of Philip Love Banda, LOVE CONSTRUCTION has developed a reputation throughout the Western Cape for tackling both challenging ground-up builds and intricate interior remodeling with equal dedication.
          </p>
          <p class="text-sm md:text-base opacity-80 leading-relaxed mb-6">
            We do not subcontract your peace of mind to random workers. Philip is actively on site, checking elevations, checking mortar consistencies, aligning tiles, and ensuring your plans are followed down to the millimeter.
          </p>
          <div class="grid grid-cols-2 gap-4 border-t border-current/10 pt-6">
            <div>
              <span class="block text-2xl font-bold ${theme.accent}">100%</span>
              <span class="text-xs opacity-75">Workmanship Accountability</span>
            </div>
            <div>
              <span class="block text-2xl font-bold ${theme.accent}">SABS</span>
              <span class="text-xs opacity-75">Regulated Material Standards</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5-Step Process -->
    <section class="py-16 md:py-24 px-5 md:px-10 ${designId==='design-2'?'bg-[#EDE3D3]':designId==='design-3'?'bg-slate-50':'bg-[#121316]'} border-t border-current/10">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-12">
          <span class="text-xs font-bold uppercase tracking-[.25em] ${theme.accent} block mb-2">Our Proven Workflow</span>
          <h2 class="${theme.display} text-3xl md:text-4xl font-black">How We Execute Your Build.</h2>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          ${[
            { step: '01', title: 'Consultation & Site Walk', desc: 'We visit your property in Philip or Western Cape to inspect levels, access, and discuss your exact vision.' },
            { step: '02', title: 'Detailed Transparent Quote', desc: 'You receive an itemized proposal detailing labor, materials, timeline, and milestone payment schedules.' },
            { step: '03', title: 'Groundwork & Structural Phase', desc: 'Excavation, footings, reinforced brickwork, and roof framing under direct supervisor control.' },
            { step: '04', title: 'Precision Interior Finishing', desc: 'Ceiling bulkheads, electrical, plumbing, waterproofing, and meticulous tile installation.' },
            { step: '05', title: 'Quality Sign-Off & Handover', desc: 'Comprehensive client walkthrough, snag list completion, and ongoing craftsmanship warranty.' }
          ].map(s => `
            <div class="${theme.card} p-6 flex flex-col justify-between">
              <div>
                <span class="font-mono text-2xl font-black ${theme.accent} block mb-3">${s.step}</span>
                <h3 class="font-bold text-base mb-2">${s.title}</h3>
                <p class="text-xs opacity-75 leading-relaxed">${s.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    ${renderCtaBanner()}
  `;
}

// --- 19. SERVICES PAGE BUILDER ---
function renderServicesPage() {
  return `
    <!-- Services Hero -->
    <section class="${theme.surface} py-16 md:py-24 px-5 md:px-10 border-b border-white/10">
      <div class="max-w-7xl mx-auto max-w-3xl">
        <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.25em] ${theme.accent} mb-4">
          <span class="w-6 h-px bg-current"></span>
          12 Core Construction Trades
        </div>
        <h1 class="${theme.display} text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          Master Workmanship at <span class="${theme.editorial} ${theme.accent}">Every Stage.</span>
        </h1>
        <p class="mt-6 text-base sm:text-lg opacity-80 leading-relaxed">
          Explore our complete range of residential building, structural repair, and luxury finishing services across Philip and Western Cape.
        </p>
      </div>
    </section>

    <!-- Grouped Services -->
    <section class="py-16 md:py-24 px-5 md:px-10 ${designId==='design-2'?'bg-love-linen':designId==='design-3'?'bg-white':'bg-[#181a1f]'}">
      <div class="max-w-7xl mx-auto space-y-20">
        ${serviceGroups.map(([groupTitle, itemIndexes], gIdx) => `
          <div>
            <div class="flex items-center gap-3 pb-4 border-b border-current/15 mb-8">
              <span class="font-mono text-xs font-bold px-2.5 py-1 ${theme.accentBg} rounded">GROUP 0${gIdx+1}</span>
              <h2 class="${theme.display} text-2xl md:text-3xl font-black">${groupTitle}</h2>
            </div>

            <div class="grid gap-6 md:grid-cols-2">
              ${itemIndexes.map(idx => {
                const s = serviceItems[idx];
                return `
                  <article id="service-${idx+1}" class="${theme.card} p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between mb-4">
                        <span class="w-10 h-10 rounded-lg ${designId==='design-1'?'bg-[#121316] text-love-gold':designId==='design-2'?'bg-[#EFE8DA] text-love-clay':'bg-slate-100 text-love-sage'} grid place-items-center">
                          ${svgIcon(s.icon, 'w-5 h-5')}
                        </span>
                        <span class="text-xs font-mono font-bold opacity-60">Timeline: ${s.time}</span>
                      </div>
                      <h3 class="${theme.display} text-xl font-bold mb-2">${s.name}</h3>
                      <p class="text-sm opacity-80 leading-relaxed mb-6">${s.desc}</p>
                      
                      <div class="space-y-1.5 text-xs opacity-75 mb-6">
                        <div class="flex items-center gap-2">
                          ${svgIcon('check', 'w-3.5 h-3.5 text-emerald-400')} Direct oversight by Philip Love Banda
                        </div>
                        <div class="flex items-center gap-2">
                          ${svgIcon('check', 'w-3.5 h-3.5 text-emerald-400')} SABS-approved building materials
                        </div>
                        <div class="flex items-center gap-2">
                          ${svgIcon('check', 'w-3.5 h-3.5 text-emerald-400')} Clean worksite & debris removal included
                        </div>
                      </div>
                    </div>

                    <div class="pt-4 border-t border-current/10 flex items-center justify-between">
                      <a href="contact.html?service=${encodeURIComponent(s.name)}" class="${theme.accent} font-bold text-xs inline-flex items-center gap-1.5 hover:underline">
                        Request Quote for ${s.name} ${svgIcon('arrow-right', 'w-3.5 h-3.5')}
                      </a>
                      <a href="${waLink}&text=I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(s.name)}" target="_blank" rel="noopener" class="text-xs font-semibold opacity-70 hover:opacity-100">
                        Quick WhatsApp
                      </a>
                    </div>
                  </article>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    ${renderCtaBanner()}
  `;
}

// --- 20. PROJECTS PAGE BUILDER (OUR WORK & GALLERY) ---
function renderProjectsPage() {
  const galleryItems = imageFiles.slice(0, 18);

  return `
    <!-- Projects Page Hero -->
    <section class="${theme.surface} py-16 md:py-24 px-5 md:px-10 border-b border-white/10">
      <div class="max-w-7xl mx-auto max-w-3xl">
        <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.25em] ${theme.accent} mb-4">
          <span class="w-6 h-px bg-current"></span>
          Verified Project Dossiers & Gallery
        </div>
        <h1 class="${theme.display} text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          Real Homes. <span class="${theme.editorial} ${theme.accent}">Master Finishes.</span>
        </h1>
        <p class="mt-6 text-base sm:text-lg opacity-80 leading-relaxed">
          Review our in-depth case studies with structural challenges, execution milestones, before-and-after comparisons, and complete photographic archives.
        </p>
      </div>
    </section>

    <!-- Case Studies Showcase (All 6) -->
    ${renderCompletedProjectsSection(true)}

    <!-- Interactive Before & After -->
    ${renderBeforeAfterSection()}

    <!-- 18-Photo Archive Gallery -->
    <section class="py-16 md:py-24 px-5 md:px-10 ${designId==='design-2'?'bg-love-linen':designId==='design-3'?'bg-white':'bg-[#181a1f]'} border-t border-current/10">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-10">
          <span class="text-xs font-bold uppercase tracking-[.25em] ${theme.accent} block mb-2">Extended Photographic Archive</span>
          <h2 class="${theme.display} text-3xl md:text-4xl font-black">On-Site Work in Focus.</h2>
          <p class="text-sm opacity-75 mt-2">Supplied directly from active Love Construction building sites across Western Cape.</p>
        </div>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          ${galleryItems.map((file, i) => `
            <div class="gallery-photo-item group ${theme.card} overflow-hidden cursor-pointer" data-full-image="${photo(file)}" data-caption="Love Construction Site Photo 0${i+1}">
              <div class="aspect-[4/3] overflow-hidden relative">
                <img src="${photo(file)}" alt="Construction site photo ${i+1}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span class="px-4 py-2 bg-white/90 text-black text-xs font-bold rounded-full shadow-lg">
                    Enlarge Photo
                  </span>
                </div>
              </div>
              <div class="p-4 flex items-center justify-between text-xs">
                <span class="font-bold opacity-80">Photo Archive #${String(i+1).padStart(2, '0')}</span>
                <span class="font-mono text-[10px] opacity-60">Western Cape</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    ${renderCtaBanner()}
  `;
}

// --- 21. CONTACT PAGE BUILDER ---
function renderContactPage() {
  return `
    <!-- Contact Hero -->
    <section class="${theme.surface} py-16 md:py-24 px-5 md:px-10 border-b border-white/10">
      <div class="max-w-7xl mx-auto max-w-3xl">
        <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.25em] ${theme.accent} mb-4">
          <span class="w-6 h-px bg-current"></span>
          Start Your Project
        </div>
        <h1 class="${theme.display} text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          Let’s Talk About <span class="${theme.editorial} ${theme.accent}">What’s Next.</span>
        </h1>
        <p class="mt-6 text-base sm:text-lg opacity-80 leading-relaxed">
          Reach Philip Love Banda directly by phone, WhatsApp, or request an itemized quotation draft using the verified form below.
        </p>
      </div>
    </section>

    <!-- Contact Grid -->
    <section class="py-16 md:py-24 px-5 md:px-10 ${designId==='design-2'?'bg-love-linen':designId==='design-3'?'bg-white':'bg-[#181a1f]'}">
      <div class="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        
        <!-- Contractor Details -->
        <div>
          <span class="text-xs font-bold uppercase tracking-[.25em] ${theme.accent} block mb-2">Direct Contractor Access</span>
          <h2 class="${theme.display} text-2xl md:text-3xl font-bold mb-6">Philip Love Banda</h2>
          
          <div class="space-y-4 mb-8">
            <a href="${phoneLink}" class="flex items-center gap-4 p-4 ${theme.card}">
              <span class="w-10 h-10 rounded-full ${theme.accentBg} grid place-items-center shrink-0">${svgIcon('phone', 'w-5 h-5')}</span>
              <div>
                <span class="text-[10px] opacity-60 uppercase font-bold block">Mobile & Direct Call</span>
                <strong class="text-base font-bold">+27 81 298 7328</strong>
              </div>
            </a>

            <a href="${waLink}" target="_blank" rel="noopener" class="flex items-center gap-4 p-4 bg-[#168f52] text-white rounded-lg shadow-lg hover:bg-[#127945] transition">
              <span class="w-10 h-10 rounded-full bg-white/20 grid place-items-center shrink-0">${svgIcon('message-circle', 'w-5 h-5')}</span>
              <div>
                <span class="text-[10px] uppercase font-bold block text-white/80">Instant WhatsApp Chat</span>
                <strong class="text-base font-bold">Chat with Philip on WhatsApp ↗</strong>
              </div>
            </a>

            <a href="${emailLink}" class="flex items-center gap-4 p-4 ${theme.card}">
              <span class="w-10 h-10 rounded-full ${theme.accentBg} grid place-items-center shrink-0">${svgIcon('mail', 'w-5 h-5')}</span>
              <div class="overflow-hidden">
                <span class="text-[10px] opacity-60 uppercase font-bold block">Direct Email</span>
                <strong class="text-sm font-bold truncate block">lovebanda1990@gmail.com</strong>
              </div>
            </a>

            <div class="flex items-center gap-4 p-4 ${theme.card}">
              <span class="w-10 h-10 rounded-full ${theme.accentBg} grid place-items-center shrink-0">${svgIcon('map-pin', 'w-5 h-5')}</span>
              <div>
                <span class="text-[10px] opacity-60 uppercase font-bold block">Base & Coverage</span>
                <strong class="text-sm font-bold block">Philip, Western Cape, South Africa</strong>
                <span class="text-xs opacity-75">Serving Stellenbosch, Franschhoek, Camps Bay, Paarl, Somerset West & Cape Metro</span>
              </div>
            </div>
          </div>

          <div class="p-5 ${designId==='design-1'?'bg-[#121316]':designId==='design-2'?'bg-[#EFE8DA]':'bg-slate-50'} border border-current/10 rounded-xl text-xs space-y-2">
            <h4 class="font-bold uppercase tracking-wider text-[11px]">Free On-Site Inspection</h4>
            <p class="opacity-80 leading-relaxed">
              We provide free initial consultations and on-site measurements across the Western Cape region for qualified residential scopes.
            </p>
          </div>
        </div>

        <!-- Validated Enquiry Form -->
        <div class="${theme.card} p-6 sm:p-10">
          <span class="text-xs font-bold uppercase tracking-[.25em] ${theme.accent} block mb-2">Online Project Enquiry</span>
          <h2 class="${theme.display} text-2xl md:text-3xl font-bold mb-3">Tell Us About Your Project.</h2>
          <p class="text-xs md:text-sm opacity-75 mb-6">
            Fill out the details below. This form prepares a pre-formatted email draft or WhatsApp message ready to send directly to Philip.
          </p>

          <form id="enquiry-form" class="space-y-4" novalidate>
            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label class="block text-xs font-bold mb-1">Your Full Name *</label>
                <input type="text" name="name" required minlength="2" placeholder="e.g. David van der Merwe" class="w-full p-3 bg-current/5 border border-current/20 rounded text-sm focus:outline-none focus:border-amber-500">
                <span class="field-error text-[10px] text-red-500 font-semibold mt-1 block"></span>
              </div>
              <div>
                <label class="block text-xs font-bold mb-1">Email Address *</label>
                <input type="email" name="email" required placeholder="e.g. david@example.com" class="w-full p-3 bg-current/5 border border-current/20 rounded text-sm focus:outline-none focus:border-amber-500">
                <span class="field-error text-[10px] text-red-500 font-semibold mt-1 block"></span>
              </div>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label class="block text-xs font-bold mb-1">Contact Phone Number *</label>
                <input type="tel" name="phone" required minlength="7" placeholder="e.g. +27 82 123 4567" class="w-full p-3 bg-current/5 border border-current/20 rounded text-sm focus:outline-none focus:border-amber-500">
                <span class="field-error text-[10px] text-red-500 font-semibold mt-1 block"></span>
              </div>
              <div>
                <label class="block text-xs font-bold mb-1">Primary Trade Required *</label>
                <select name="service" required class="w-full p-3 bg-current/5 border border-current/20 rounded text-sm focus:outline-none focus:border-amber-500">
                  <option value="">Choose a Service Scope</option>
                  ${serviceItems.map(s => `<option value="${s.name}">${s.name}</option>`).join('')}
                  <option value="Complete Home Build">Full Turnkey Home Construction</option>
                  <option value="Multiple Trades">Multiple Trades / Renovation</option>
                </select>
                <span class="field-error text-[10px] text-red-500 font-semibold mt-1 block"></span>
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold mb-1">Project Location / Area in Western Cape</label>
              <input type="text" name="location" placeholder="e.g. Stellenbosch, Franschhoek, Camps Bay, etc." class="w-full p-3 bg-current/5 border border-current/20 rounded text-sm focus:outline-none focus:border-amber-500">
            </div>

            <div>
              <label class="block text-xs font-bold mb-1">Describe Project Scope & Plans *</label>
              <textarea name="message" required minlength="10" rows="4" placeholder="Tell us about the property, approximate dimensions, timeline, and any specific materials you have in mind..." class="w-full p-3 bg-current/5 border border-current/20 rounded text-sm focus:outline-none focus:border-amber-500"></textarea>
              <span class="field-error text-[10px] text-red-500 font-semibold mt-1 block"></span>
            </div>

            <button type="submit" class="${theme.button} w-full py-4 text-sm font-extrabold flex items-center justify-center gap-2">
              <span>Generate Official Email Draft</span>
              ${svgIcon('arrow-up-right', 'w-4 h-4')}
            </button>

            <p id="form-status" class="text-xs text-center font-bold" role="status" aria-live="polite"></p>
          </form>
        </div>

      </div>
    </section>

    ${renderCtaBanner()}
  `;
}

// --- 22. IMMERSIVE CASE STUDY MODAL (BLOG-LIKE INTERACTIVE DOSSIER) ---
function renderCaseStudyModal() {
  return `
    <div id="project-case-modal" class="fixed inset-0 z-50 hidden bg-black/90 backdrop-blur-md overflow-y-auto p-3 sm:p-6 md:p-10" role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
      <div class="max-w-5xl mx-auto bg-[#181a1f] text-neutral-100 rounded-2xl border border-white/20 shadow-2xl overflow-hidden my-6 animate-modal-in">
        
        <!-- Modal Top Sticky Navigation -->
        <div class="sticky top-0 z-20 bg-[#121316]/95 border-b border-white/10 px-6 py-4 flex items-center justify-between backdrop-blur-md">
          <div class="flex items-center gap-3 overflow-hidden">
            <span class="px-3 py-1 bg-love-gold text-black text-[10px] font-bold uppercase tracking-widest rounded shrink-0">
              CASE STUDY DOSSIER
            </span>
            <span id="modal-project-title-short" class="text-sm font-bold text-neutral-300 truncate">
              Project Name
            </span>
          </div>
          <button id="modal-close-btn" class="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center text-white transition focus:outline-none" aria-label="Close Case Study">
            ${svgIcon('close', 'w-5 h-5')}
          </button>
        </div>

        <!-- Modal Hero Image -->
        <div class="relative aspect-[16/9] md:aspect-[21/9] bg-black overflow-hidden">
          <img id="modal-hero-img" src="" alt="" class="w-full h-full object-cover">
          <div class="absolute inset-0 bg-gradient-to-t from-[#181a1f] via-black/40 to-transparent"></div>
          
          <div class="absolute bottom-6 left-6 right-6">
            <span id="modal-category-badge" class="px-3 py-1 bg-black/80 text-love-gold font-mono text-[10px] uppercase font-bold tracking-wider rounded inline-block mb-2">
              Category
            </span>
            <h2 id="modal-project-title" class="font-display text-2xl sm:text-4xl font-black text-white leading-tight">
              Project Title
            </h2>
            <p id="modal-project-subtitle" class="text-xs sm:text-sm text-neutral-300 mt-1 font-semibold">
              Project Subtitle
            </p>
          </div>
        </div>

        <!-- Modal Quick Specs Bar -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-[#121316] border-b border-white/10 text-xs font-mono">
          <div>
            <span class="text-neutral-400 block text-[10px] uppercase">AREA</span>
            <strong id="modal-spec-area" class="text-white font-bold">-</strong>
          </div>
          <div>
            <span class="text-neutral-400 block text-[10px] uppercase">DURATION</span>
            <strong id="modal-spec-duration" class="text-love-gold font-bold">-</strong>
          </div>
          <div>
            <span class="text-neutral-400 block text-[10px] uppercase">LOCATION</span>
            <strong id="modal-spec-location" class="text-white font-bold">-</strong>
          </div>
          <div>
            <span class="text-neutral-400 block text-[10px] uppercase">STATUS</span>
            <strong class="text-emerald-400 font-bold">Completed & Certified</strong>
          </div>
        </div>

        <!-- Modal Body Content -->
        <div class="p-6 sm:p-10 space-y-10">
          
          <!-- Executive Summary -->
          <div>
            <h3 class="font-display text-lg font-bold text-love-gold uppercase tracking-wider text-xs mb-3">
              01. Executive Summary & Scope
            </h3>
            <p id="modal-summary" class="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Summary text goes here.
            </p>
          </div>

          <!-- Challenge & Solution Grid -->
          <div class="grid gap-6 md:grid-cols-2">
            <div class="p-6 bg-[#121316] border border-red-500/20 rounded-xl">
              <h4 class="font-bold text-sm text-red-400 uppercase tracking-wider text-xs mb-2 flex items-center gap-2">
                <span>⚠️</span> The Site Challenge
              </h4>
              <p id="modal-challenge" class="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Challenge details.
              </p>
            </div>
            <div class="p-6 bg-[#121316] border border-emerald-500/20 rounded-xl">
              <h4 class="font-bold text-sm text-emerald-400 uppercase tracking-wider text-xs mb-2 flex items-center gap-2">
                <span>✓</span> Engineering Solution
              </h4>
              <p id="modal-solution" class="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Solution details.
              </p>
            </div>
          </div>

          <!-- Phased Execution Timeline -->
          <div>
            <h3 class="font-display text-lg font-bold text-love-gold uppercase tracking-wider text-xs mb-4">
              02. Phased Execution Milestones
            </h3>
            <div id="modal-phases" class="grid gap-3 sm:grid-cols-2">
              <!-- Rendered via JS -->
            </div>
          </div>

          <!-- Materials Table -->
          <div>
            <h3 class="font-display text-lg font-bold text-love-gold uppercase tracking-wider text-xs mb-4">
              03. Certified Materials & SABS Standards
            </h3>
            <div id="modal-materials" class="flex flex-wrap gap-2">
              <!-- Rendered via JS -->
            </div>
          </div>

          <!-- Project Gallery Grid -->
          <div>
            <h3 class="font-display text-lg font-bold text-love-gold uppercase tracking-wider text-xs mb-4">
              04. Photographic Progress Archive
            </h3>
            <div id="modal-gallery-grid" class="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <!-- Rendered via JS -->
            </div>
          </div>

          <!-- Client Testimonial -->
          <div class="p-6 bg-gradient-to-r from-amber-950/30 to-[#121316] border border-love-gold/30 rounded-xl">
            <div class="flex items-center gap-1 text-amber-400 mb-2">
              ${svgIcon('star', 'w-4 h-4')}${svgIcon('star', 'w-4 h-4')}${svgIcon('star', 'w-4 h-4')}${svgIcon('star', 'w-4 h-4')}${svgIcon('star', 'w-4 h-4')}
            </div>
            <p id="modal-testimonial-quote" class="text-sm italic text-neutral-200 leading-relaxed mb-3">
              Quote
            </p>
            <div class="flex items-center justify-between text-xs">
              <strong id="modal-testimonial-author" class="text-white font-bold">Author</strong>
              <span id="modal-testimonial-role" class="text-neutral-400">Role</span>
            </div>
          </div>

        </div>

        <!-- Modal Footer CTA -->
        <div class="p-6 bg-[#121316] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <span class="text-xs text-neutral-400">Inspired by this project?</span>
            <h4 class="font-bold text-sm text-white">Request a Consultation with Philip</h4>
          </div>
          <div class="flex items-center gap-3">
            <a id="modal-wa-cta" href="#" target="_blank" rel="noopener" class="px-5 py-2.5 bg-[#168f52] hover:bg-[#127945] text-white text-xs font-bold rounded-lg inline-flex items-center gap-1.5 transition">
              ${svgIcon('message-circle', 'w-4 h-4')} WhatsApp Philip
            </a>
            <button id="modal-close-footer-btn" class="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg transition">
              Close Dossier
            </button>
          </div>
        </div>

      </div>
    </div>
  `;
}

// --- 23. PHOTO LIGHTBOX MODAL ---
function renderLightboxModal() {
  return `
    <div id="photo-lightbox" class="fixed inset-0 z-50 hidden bg-black/95 backdrop-blur-md p-4 flex flex-col items-center justify-center" role="dialog" aria-modal="true">
      <button id="lightbox-close-btn" class="absolute top-4 right-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20 focus:outline-none">
        ${svgIcon('close', 'w-6 h-6')}
      </button>
      <img id="lightbox-img" src="" alt="Enlarged construction photo" class="max-h-[82vh] max-w-[95vw] object-contain rounded shadow-2xl">
      <p id="lightbox-caption" class="text-neutral-300 text-xs sm:text-sm font-semibold mt-4 text-center"></p>
    </div>
  `;
}

// --- 24. INITIALIZE PAGE RENDERING ---
function initSite() {
  document.body.className = `min-h-screen font-body antialiased ${theme.body}`;

  const headerContainer = document.querySelector('#site-header');
  if (headerContainer) headerContainer.innerHTML = renderHeader();

  const mainContainer = document.querySelector('#main-content');
  if (mainContainer) {
    if (pageId === 'about') mainContainer.innerHTML = renderAboutPage();
    else if (pageId === 'services') mainContainer.innerHTML = renderServicesPage();
    else if (pageId === 'projects') mainContainer.innerHTML = renderProjectsPage();
    else if (pageId === 'contact') mainContainer.innerHTML = renderContactPage();
    else mainContainer.innerHTML = renderHomePage();
  }

  const footerContainer = document.querySelector('#site-footer');
  if (footerContainer) footerContainer.innerHTML = renderFooter();

  // Inject Modals into body
  const modalWrapper = document.createElement('div');
  modalWrapper.innerHTML = renderCaseStudyModal() + renderLightboxModal();
  document.body.appendChild(modalWrapper);

  // Wire Interactions
  wireNavigation();
  wireCaseStudyModals();
  wireBeforeAfterSlider();
  wireEstimator();
  wireEnquiryForm();
  wireLightbox();
  wireBlueprintToggle();
}

// --- 25. INTERACTIONS & EVENT LISTENERS ---

// A. Mobile Navigation Drawer
function wireNavigation() {
  const menuBtn = document.querySelector('#menu-button');
  const mobileNav = document.querySelector('#mobile-navigation');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', String(!isOpen));
      mobileNav.classList.toggle('hidden', isOpen);
      mobileNav.classList.toggle('flex', !isOpen);
    });
  }
}

// B. Immersive Case Study Modal Opening & Closing
function wireCaseStudyModals() {
  const modal = document.querySelector('#project-case-modal');
  if (!modal) return;

  const closeBtns = [document.querySelector('#modal-close-btn'), document.querySelector('#modal-close-footer-btn')];
  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  closeBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', closeModal);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Attach click listener to all project triggers
  document.querySelectorAll('.project-open-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const projId = trigger.dataset.projectId;
      const proj = completedProjects.find(p => p.id === projId) || completedProjects[0];

      // Populate Modal Content
      document.querySelector('#modal-hero-img').src = proj.heroImage;
      document.querySelector('#modal-category-badge').textContent = proj.category;
      document.querySelector('#modal-project-title').textContent = proj.title;
      document.querySelector('#modal-project-title-short').textContent = proj.title;
      document.querySelector('#modal-project-subtitle').textContent = proj.subtitle;
      document.querySelector('#modal-spec-area').textContent = proj.specs.area;
      document.querySelector('#modal-spec-duration').textContent = proj.specs.duration;
      document.querySelector('#modal-spec-location').textContent = proj.location;
      document.querySelector('#modal-summary').textContent = proj.summary;
      document.querySelector('#modal-challenge').textContent = proj.challenge;
      document.querySelector('#modal-solution').textContent = proj.solution;

      // Populate Phases
      const phasesContainer = document.querySelector('#modal-phases');
      phasesContainer.innerHTML = proj.phases.map(ph => `
        <div class="p-3 bg-[#121316] border border-white/5 rounded-lg">
          <strong class="text-xs text-love-gold block mb-1">${ph.phase}</strong>
          <span class="text-xs text-neutral-300 leading-relaxed block">${ph.desc}</span>
        </div>
      `).join('');

      // Populate Materials
      const materialsContainer = document.querySelector('#modal-materials');
      materialsContainer.innerHTML = proj.materials.map(m => `
        <span class="px-2.5 py-1 bg-white/10 text-white font-mono text-[11px] rounded">${m}</span>
      `).join('');

      // Populate Gallery
      const galleryContainer = document.querySelector('#modal-gallery-grid');
      galleryContainer.innerHTML = proj.gallery.map(img => `
        <div class="aspect-[4/3] rounded overflow-hidden cursor-pointer gallery-modal-thumb">
          <img src="${img}" alt="Progress photo" class="w-full h-full object-cover hover:scale-105 transition">
        </div>
      `).join('');

      // Populate Testimonial
      document.querySelector('#modal-testimonial-quote').textContent = `"${proj.testimonial.quote}"`;
      document.querySelector('#modal-testimonial-author').textContent = proj.testimonial.author;
      document.querySelector('#modal-testimonial-role').textContent = proj.testimonial.role;

      // Update CTA Link
      const waCta = document.querySelector('#modal-wa-cta');
      if (waCta) {
        waCta.href = `${waLink}&text=Hello%20LOVE%20CONSTRUCTION%2C%20I%20am%20enquiring%20about%20a%20project%20similar%20to%20${encodeURIComponent(proj.title)}`;
      }

      // Show Modal
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  // Category Filtering
  document.querySelectorAll('.project-cat-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      document.querySelectorAll('.project-cat-filter').forEach(b => {
        b.className = 'project-cat-filter px-4 py-2 text-xs font-bold rounded-full border border-current/20 hover:bg-black/5 dark:hover:bg-white/5 transition';
      });
      btn.className = `project-cat-filter px-4 py-2 text-xs font-bold rounded-full transition ${theme.accentBg}`;

      document.querySelectorAll('.project-card').forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// C. Interactive Before & After Transformation Slider
function wireBeforeAfterSlider() {
  const container = document.querySelector('#hero-before-after');
  const overlay = document.querySelector('#ba-overlay');
  const handle = document.querySelector('#ba-handle');
  const beforeImg = document.querySelector('#ba-before-img');
  if (!container || !overlay || !handle || !beforeImg) return;

  let isDragging = false;

  const updateSlider = (clientX) => {
    const rect = container.getBoundingClientRect();
    let posX = clientX - rect.left;
    if (posX < 0) posX = 0;
    if (posX > rect.width) posX = rect.width;

    const percentage = (posX / rect.width) * 100;
    overlay.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
    beforeImg.style.width = `${rect.width}px`;
  };

  window.addEventListener('resize', () => {
    const rect = container.getBoundingClientRect();
    beforeImg.style.width = `${rect.width}px`;
  });
  // Initial size sync
  const rect = container.getBoundingClientRect();
  beforeImg.style.width = `${rect.width}px`;

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });
  window.addEventListener('mouseup', () => { isDragging = false; });
  window.addEventListener('mousemove', (e) => {
    if (isDragging) updateSlider(e.clientX);
  });

  // Touch Support for mobile
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });
  window.addEventListener('touchend', () => { isDragging = false; });
  window.addEventListener('touchmove', (e) => {
    if (isDragging) updateSlider(e.touches[0].clientX);
  }, { passive: true });
}

// D. Design 3 Special: Live Estimator Tool
function wireEstimator() {
  const areaRange = document.querySelector('#calc-area-range');
  const areaVal = document.querySelector('#calc-area-val');
  const timelineOutput = document.querySelector('#calc-timeline-output');
  const summaryType = document.querySelector('#calc-summary-type');
  const summaryArea = document.querySelector('#calc-summary-area');
  const summaryLoc = document.querySelector('#calc-summary-loc');
  const locationSelect = document.querySelector('#calc-location-select');
  const waBtn = document.querySelector('#calc-wa-btn');

  if (!areaRange || !timelineOutput) return;

  let currentRate = 22;
  let currentBaseWeeks = 6;
  let currentTypeName = 'Turnkey Residential Build';

  const recalculate = () => {
    const area = parseInt(areaRange.value, 10);
    areaVal.textContent = `${area} m²`;
    summaryArea.textContent = `${area} m²`;

    // Dynamic timeline math
    const addedWeeks = Math.round((area / 100) * 1.5);
    const minWeeks = currentBaseWeeks + addedWeeks;
    const maxWeeks = minWeeks + 2;

    timelineOutput.textContent = `${minWeeks} – ${maxWeeks} Weeks`;
    summaryType.textContent = currentTypeName;
    summaryLoc.textContent = locationSelect.value;

    const message = `Hello LOVE CONSTRUCTION, I calculated an estimate on your website for a ${currentTypeName} (${area} m²) in ${locationSelect.value}. Approximate timeline: ${minWeeks}-${maxWeeks} weeks. Please provide an itemized formal quote.`;
    waBtn.href = `https://wa.me/27812987328?text=${encodeURIComponent(message)}`;
  };

  areaRange.addEventListener('input', recalculate);
  if (locationSelect) locationSelect.addEventListener('change', recalculate);

  document.querySelectorAll('.calc-type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.calc-type-btn').forEach(b => {
        b.className = 'calc-type-btn p-3 text-left border border-slate-700 bg-slate-800 text-slate-300 font-bold text-xs rounded transition hover:border-slate-500';
      });
      btn.className = 'calc-type-btn p-3 text-left border border-emerald-500 bg-emerald-950/40 text-white font-bold text-xs rounded transition active-type';

      currentRate = parseInt(btn.dataset.rate, 10);
      currentBaseWeeks = parseInt(btn.dataset.timelineBase, 10);
      currentTypeName = btn.dataset.type;
      recalculate();
    });
  });

  recalculate();
}

// E. Validated Email Draft Form
function wireEnquiryForm() {
  const form = document.querySelector('#enquiry-form');
  if (!form) return;

  // Pre-fill service from URL if provided
  const params = new URLSearchParams(location.search);
  if (params.get('service') && form.elements.service) {
    form.elements.service.value = params.get('service');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('.field-error').forEach(el => el.textContent = '');

    form.querySelectorAll('[required]').forEach(field => {
      let msg = '';
      if (!field.value.trim()) {
        msg = 'Please complete this required field.';
      } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        msg = 'Enter a valid email address.';
      } else if (field.minLength > 0 && field.value.trim().length < field.minLength) {
        msg = `Please provide at least ${field.minLength} characters.`;
      }

      const errorEl = field.parentElement.querySelector('.field-error');
      if (msg && errorEl) {
        valid = false;
        errorEl.textContent = msg;
        field.setAttribute('aria-invalid', 'true');
      } else {
        field.removeAttribute('aria-invalid');
      }
    });

    const statusEl = document.querySelector('#form-status');
    if (!valid) {
      if (statusEl) {
        statusEl.className = 'text-xs text-center font-bold text-red-500';
        statusEl.textContent = 'Please fill in all required fields accurately.';
      }
      return;
    }

    const data = new FormData(form);
    const subject = `Construction Enquiry: ${data.get('service') || 'Residential Project'} (${data.get('location') || 'Western Cape'})`;
    const body = `Hello Philip (LOVE CONSTRUCTION),\n\nI would like to request an itemized quotation for my construction project.\n\nClient Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nTrade Required: ${data.get('service')}\nLocation: ${data.get('location') || 'Western Cape'}\n\nProject Scope & Notes:\n${data.get('message')}\n\nPlease contact me to arrange an on-site visit or estimate.\n\nKind regards,\n${data.get('name')}`;

    if (statusEl) {
      statusEl.className = 'text-xs text-center font-bold text-emerald-400';
      statusEl.textContent = 'Opening your mail client with pre-filled draft. Press Send to deliver!';
    }

    setTimeout(() => {
      location.href = `mailto:lovebanda1990@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }, 600);
  });
}

// F. Photo Lightbox
function wireLightbox() {
  const lightbox = document.querySelector('#photo-lightbox');
  const imgEl = document.querySelector('#lightbox-img');
  const captionEl = document.querySelector('#lightbox-caption');
  const closeBtn = document.querySelector('#lightbox-close-btn');
  if (!lightbox) return;

  const closeLightbox = () => { lightbox.classList.add('hidden'); };
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

  document.querySelectorAll('.gallery-photo-item').forEach(item => {
    item.addEventListener('click', () => {
      imgEl.src = item.dataset.fullImage;
      captionEl.textContent = item.dataset.caption;
      lightbox.classList.remove('hidden');
    });
  });
}

// G. Blueprint / Wireframe Mode Toggle (Design 3 Feature)
function wireBlueprintToggle() {
  const toggleBtn = document.querySelector('#blueprint-toggle-btn');
  const label = document.querySelector('#blueprint-btn-label');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const isBlueprint = document.body.classList.toggle('blueprint-grid-dark');
    document.body.classList.toggle('bg-[#0B1320]', isBlueprint);
    if (label) {
      label.textContent = isBlueprint ? 'Active CAD' : 'CAD Mode';
    }
  });
}

// --- 26. RUN SCRIPT ON LOAD ---
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSite);
} else {
  initSite();
}
