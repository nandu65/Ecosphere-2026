/**
 * =======================================================================
 * BIOLOOP CLIMATE SOLUTIONS — MASTER CONTENT & KNOWLEDGE BASE
 * =======================================================================
 * ALL editable text, team members, contact details, statistics,
 * and chatbot knowledge base live in this single file for easy updates.
 *
 * Prototype built for ECOSPHERE 2026 (College Business-Plan Finale)
 */

export const BRAND_CONTENT = {
  name: "BioLoop",
  legalName: "BioLoop Climate Solutions",
  tagline: "Turning food waste into clean fuel and a cleaner future.",
  heroSubheadline:
    "We collect food waste from canteens, hostels and hotels, digest it into clean cooking biogas and organic fertiliser, and measure avoided emissions for verified carbon credits.",
  eventTag: "ECOSPHERE 2026",
  eventSubtitle: "College Business-Plan Finale",
};

// ==========================================
// 1. THE PROBLEM
// ==========================================
export const PROBLEM_DATA = {
  heading: "The Food Waste Dilemma",
  subheading: "A dual penalty on institutional kitchens and urban ecosystems.",
  description:
    "Food waste from canteens, hostels and hotels is sent to dumps, where it produces methane, odour and pollution. Meanwhile kitchens still rely on LPG despite available waste, paying for disposal and for fuel.",
  points: [
    {
      title: "Landfill Methane & Pollution",
      desc: "Rotting organic scraps in open dumps release potent methane gas, noxious odors, and toxic leachate.",
    },
    {
      title: "High Disposal Fees",
      desc: "Hostels and canteens pay waste haulers to transport bulk food waste away every single day.",
    },
    {
      title: "Rising LPG Cooking Costs",
      desc: "Kitchens continue purchasing fossil LPG fuel while discarding high-energy organic material daily.",
    },
  ],
};

// ==========================================
// 2. WHAT ARE WE? (CORE EXPLANATION)
// ==========================================
export const ABOUT_WHAT_WE_ARE = {
  title: "What are we?",
  summary:
    "BioLoop collects food waste separately, weighs it, and takes it to a biogas plant. There, anaerobic digestion turns it into biogas for cooking and organic slurry for farmers. Every batch is recorded, so we can measure the emissions we avoid and, after proper verification, convert those reductions into carbon credits. Clean energy today, verified climate impact tomorrow.",
  flowSteps: [
    {
      step: "1",
      title: "Collect & Weigh",
      desc: "Separate source collection from canteens and hostels; every batch is weighed and logged.",
    },
    {
      step: "2",
      title: "Anaerobic Digestion",
      desc: "Sealed digester breakdown producing biogas and nutrient-rich organic slurry without air.",
    },
    {
      step: "3",
      title: "Dual Output",
      desc: "Biogas replaces commercial LPG in kitchens; slurry nourishes regional agricultural soils.",
    },
    {
      step: "4",
      title: "Verified Impact",
      desc: "Batch records support emissions accounting, converting reductions into carbon credits once verified.",
    },
  ],
};

// ==========================================
// 3. STATS STRIP (Per 2.5 t/day plant estimates)
// ==========================================
export const STAT_STRIP_DATA = {
  title: "Per 2.5 tonne/day plant (estimates)",
  stats: [
    {
      value: "910",
      unit: "tonnes / year",
      label: "Food Waste Diverted",
      subtext: "Diverted from open landfills",
    },
    {
      value: "22.75",
      unit: "tonnes / year",
      label: "LPG-Equivalent Biogas",
      subtext: "Clean cooking fuel replacement",
    },
    {
      value: "~91",
      unit: "tonnes / year",
      label: "Organic Slurry Produced",
      subtext: "For agricultural & soil use",
    },
    {
      value: "~523",
      unit: "t CO₂e gross reduction",
      label: "Emissions Reduction",
      subtext: "~440 carbon credits/year net, once verified",
    },
  ],
};

// ==========================================
// 4. IMPACT AT SCALE (1 → 5 → 20 Plants)
// ==========================================
export const IMPACT_AT_SCALE = {
  growthNote: "20x capacity growth (from 2.5 to 50 tonnes/day)",
  tiers: [
    {
      id: "1-plant",
      name: "1 Plant (Pilot)",
      capacityTPD: 2.5,
      capacityLabel: "2.5 t/day",
      wasteDivertedYear: "910 t/yr",
      biogasLpgEqYear: "22.75 t/yr",
      slurryYear: "~91 t/yr",
      carbonCreditsNet: "~440 credits/yr",
      scaleMultiplier: "1x Base Facility",
    },
    {
      id: "5-plants",
      name: "5 Plants (Cluster)",
      capacityTPD: 12.5,
      capacityLabel: "12.5 t/day",
      wasteDivertedYear: "4,550 t/yr",
      biogasLpgEqYear: "113.75 t/yr",
      slurryYear: "~455 t/yr",
      carbonCreditsNet: "~2,200 credits/yr",
      scaleMultiplier: "5x Cluster Scale",
    },
    {
      id: "20-plants",
      name: "20 Plants (City-Wide)",
      capacityTPD: 50.0,
      capacityLabel: "50 t/day",
      wasteDivertedYear: "18,200 t/yr",
      biogasLpgEqYear: "455.0 t/yr",
      slurryYear: "~1,820 t/yr",
      carbonCreditsNet: "~8,800 credits/yr",
      scaleMultiplier: "20x Full Scale (NOT 10x)",
    },
  ],
};

// ==========================================
// 5. FOUNDERS ("Meet the team")
// ==========================================
export const FOUNDERS_DATA = {
  title: "Meet the Team",
  subtitle: "Team BioLoop, ECOSPHERE 2026",
  members: [
    {
      initials: "NN",
      name: "Nandu Naidu",
      role: "",
      desc: "Overseeing logistics, client onboarding for canteens & hostels, and tech telemetry.",
    },
    {
      initials: "LN",
      name: "Lakshmi Narayanan",
      role: "",
      desc: "Directing biomethanation process engineering and carbon emission verification protocols.",
    },
    {
      initials: "LA",
      name: "Lissieux Abraham",
      role: "",
      desc: "Leading operational architecture and partnerships for decentralized institutional waste diversion.",
    },
  ],
};

// ==========================================
// 6. PRODUCTS & SERVICES
// ==========================================
export const PRODUCTS_SERVICES = [
  {
    id: "collection",
    title: "Food-Waste Collection & Weigh-In",
    tagline: "Separate collection, every batch weighed and recorded.",
    desc: "We collect organic kitchen waste separately from canteens, hostels, and hotels. Every container is weighed on digital scales and logged into the batch database.",
    icon: "Truck",
    highlight: "100% Batch Traceability",
  },
  {
    id: "biogas",
    title: "Biogas (Clean Cooking Fuel)",
    tagline: "~22.75 tonnes/year LPG-equivalent from one 2.5 t/day plant.",
    desc: "Methane gas generated through airtight anaerobic digestion replaces fossil LPG cylinders in commercial kitchens, cutting fuel dependencies directly.",
    icon: "Flame",
    highlight: "Displaces Commercial LPG",
  },
  {
    id: "slurry",
    title: "Organic Fertiliser (Slurry)",
    tagline: "~91 tonnes/year for agricultural and soil health.",
    desc: "The byproduct of anaerobic digestion is nutrient-rich, pathogen-free organic slurry supplied to farmers for agricultural use and soil conditioning.",
    icon: "Leaf",
    highlight: "Rich Organic Manure",
  },
  {
    id: "carbon-credits",
    title: "Carbon Credits & Impact Reporting",
    tagline: "Batch records support emissions accounting; credits only after proper verification.",
    desc: "Continuous weigh-in logs and methane flow measurement provide auditable proof of emissions avoided, allowing conversion into carbon credits once verified.",
    icon: "ShieldCheck",
    highlight: "Credits Once Verified",
  },
];

// ==========================================
// 7. HOW IT WORKS 4-STAGE PINNED SEQUENCE
// ==========================================
export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Collect & Weigh",
    desc: "Food waste is collected separately from kitchens and weighed at pickup to create an immutable batch record.",
    icon: "Scale",
  },
  {
    step: "02",
    title: "Anaerobic Digestion",
    desc: "Waste enters sealed digester tanks where microorganisms break down organic matter in the absence of oxygen.",
    icon: "Flame",
  },
  {
    step: "03",
    title: "Biogas + Organic Slurry",
    desc: "Produces high-calorific biogas for kitchen cooking and nutrient-dense organic slurry for farmer use.",
    icon: "Droplets",
  },
  {
    step: "04",
    title: "Verified Climate Impact",
    desc: "Emissions avoided from landfill diversion are calculated from batch records and converted to carbon credits once verified.",
    icon: "ShieldCheck",
  },
];

// ==========================================
// 8. CUSTOMERS & INDUSTRIES
// ==========================================
export const CUSTOMERS_DATA = {
  primaryCustomers: [
    {
      title: "Canteens",
      desc: "College, institutional and corporate dining kitchens producing high-volume daily food scraps.",
      icon: "Utensils",
    },
    {
      title: "Hostels",
      desc: "Student and residential living mess halls seeking clean, odor-free daily waste removal.",
      icon: "Home",
    },
    {
      title: "Small Hotels",
      desc: "Hospitality kitchens aiming to reduce waste disposal costs and access clean biogas.",
      icon: "Building2",
    },
  ],
  whoElseBenefits: [
    {
      title: "Local Communities",
      desc: "Cleaner surroundings, zero open garbage piles, and elimination of foul landfill odors.",
      icon: "Users",
    },
    {
      title: "Farmers",
      desc: "Access to affordable, nutrient-rich organic slurry for agricultural soil regeneration.",
      icon: "Sprout",
    },
    {
      title: "Waste Collectors",
      desc: "Dignified, structured employment opportunities with modern collection equipment.",
      icon: "HeartHandshake",
    },
  ],
  impactIndicators: [
    {
      id: "1",
      title: "Waste Diverted",
      method: "Measured by digital weigh-ins at every pickup",
    },
    {
      id: "2",
      title: "CO₂e Avoided",
      method: "Verified emissions accounting from landfill methane avoidance",
    },
    {
      id: "3",
      title: "Fossil Fuel Replaced",
      method: "LPG-equivalent biogas tracked through partner utilization records",
    },
    {
      id: "4",
      title: "Partners Onboarded",
      method: "Number of active canteens, hostels, and hotels served",
    },
    {
      id: "5",
      title: "Organic Fertiliser Produced",
      method: "Volume of slurry supplied to regional farmer networks",
    },
  ],
};

// ==========================================
// 9. CHATBOT KNOWLEDGE BASE (ASK BIOLOOP)
// Offline rule-based fuzzy matching
// ==========================================
export const CHATBOT_SUGGESTIONS = [
  "What do you do?",
  "Who can use BioLoop?",
  "How do carbon credits work?",
  "What happens to the waste?",
  "Impact of one plant?",
  "Biogas vs LPG?",
  "Why not landfill?",
  "How do I get started?",
];

export const CHATBOT_KNOWLEDGE_BASE = [
  {
    keywords: ["what do you do", "what is bioloop", "about bioloop", "overview", "who are you", "what are we", "explain bioloop"],
    answer:
      "We collect food waste separately, weigh it, and take it to a biogas plant, where we turn it into biogas for cooking and organic slurry for farmers. We record every batch to measure avoided emissions.",
  },
  {
    keywords: ["who can use", "customers", "target", "who is it for", "clients", "who can join", "audience"],
    answer:
      "BioLoop is mainly for canteens, hostels and small hotels. Local communities, farmers (who receive organic slurry) and waste collectors benefit too.",
  },
  {
    keywords: ["what happens to the waste", "process", "digestion", "how does it work", "mechanism", "anaerobic"],
    answer:
      "Anaerobic digestion breaks down the food waste in sealed tanks without air, producing biogas (clean cooking fuel) and nutrient-rich organic slurry (fertiliser).",
  },
  {
    keywords: ["impact of one plant", "one plant", "pilot", "plant capacity", "stats", "estimates", "how much", "2.5"],
    answer:
      "A 2.5 tonne/day plant processes about 910 tonnes of food waste a year, produces about 22.75 tonnes of LPG-equivalent biogas and ~91 tonnes of slurry, and could generate around 440 carbon credits a year once verified.",
  },
  {
    keywords: ["carbon credits", "carbon credit", "credits", "carbon", "mrv", "emissions", "offsets"],
    answer:
      "We record every batch, use it to measure emissions avoided, and after proper verification convert reductions into carbon credits. They are not issued until verified.",
  },
  {
    keywords: ["why not landfill", "landfill", "dumps", "dump", "rotting", "problem", "methane", "odour", "pollution"],
    answer:
      "Food waste in dumps produces methane (a potent greenhouse gas), foul odour and environmental pollution.",
  },
  {
    keywords: ["biogas vs lpg", "lpg", "biogas", "fuel", "cooking fuel", "gas", "cooking"],
    answer:
      "Biogas made from waste can replace LPG used for cooking; one 2.5 t/day plant could replace more than 20 tonnes of LPG a year.",
  },
  {
    keywords: ["fertiliser", "fertilizer", "slurry", "farmers", "manure", "agriculture", "soil"],
    answer:
      "The organic slurry byproduct goes to farmers for agricultural use and soil conditioning.",
  },
  {
    keywords: ["scaling", "scale", "expansion", "growth", "20 plants", "5 plants", "50 t/day"],
    answer:
      "Our roadmap scales from 1 plant (2.5 t/day, ~440 credits/yr) → 5 plants (12.5 t/day, ~2,200 credits/yr) → 20 plants (50 t/day, 18,200 t/yr, ~8,800 credits/year). That represents a 20x capacity growth.",
  },
  {
    keywords: ["pricing", "cost", "pickup schedule", "service areas", "how to start", "get started", "price", "fee", "rates", "how do i start", "sign up", "contact"],
    answer:
      "These depend on your kitchen's volume and location. Please contact us at Contact@bioloop.com or 9975869245 and we'll get back to you.",
  },
];

export const CHATBOT_FALLBACK =
  "I don't have that detail yet. Please reach us at Contact@bioloop.com or 9975869245 and our team will help.";

// ==========================================
// 10. CONTACT & COMPANY DETAILS
// ==========================================
export const CONTACT_DATA = {
  companyName: "BioLoop Climate Solutions",
  brandName: "BioLoop",
  phone: "9975869245",
  email: "Contact@bioloop.com",
  copyright: "© 2026 BioLoop Climate Solutions. Prototype built for ECOSPHERE 2026.",
};
