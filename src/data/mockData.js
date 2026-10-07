// Bioloop Master Sample Data & Logic Engine
// Fully in-memory, zero-latency offline execution for investor pitch demo

export const BRAND = {
  name: "Bioloop",
  tagline: "Waste that earns twice",
  city: "Bengaluru, India",
  pilotLocation: "Singasandra Decentralised Digester Hub #01",
  pilotCapacityTPD: 2.5, // 2,500 kg/day
  pilotAnnualCapacityTonnes: 910, // 2.5 * 364 days
};

export const PARTNER_PROFILES = [
  {
    id: "hostel-a",
    name: "Hostel A (RVCE Campus Residences)",
    type: "Student Housing",
    location: "Mysore Road / RR Nagar",
    residents: 480,
    cleanScore: 92,
    defaultKg: 120,
    tier: "Emerald Partner",
    lifetimePoints: 11040,
    nextTierPoints: 15000,
    nextReward: "Free 100 kg Organic Soil Enhancer + Biogas Canteen Rebate",
    streakDays: 44,
  },
  {
    id: "hotel-orchid",
    name: "Hotel Orchid Grand",
    type: "Hospitality & Banquet",
    location: "Indiranagar 100ft Road",
    residents: 220,
    cleanScore: 96,
    defaultKg: 800,
    tier: "Platinum Circular Champion",
    lifetimePoints: 68400,
    nextTierPoints: 80000,
    nextReward: "Zero-Waste Hospitality ESG Verification Certificate",
    streakDays: 128,
  },
  {
    id: "apartment-d",
    name: "Apartment Complex D (Palm Meadows)",
    type: "Residential Gated Community (420 Units)",
    location: "Whitefield Inner Circle",
    residents: 1400,
    cleanScore: 89,
    defaultKg: 600,
    tier: "Gold Community",
    lifetimePoints: 42300,
    nextTierPoints: 50000,
    nextReward: "Community Garden Compost Dispenser Unit",
    streakDays: 61,
  },
];

// 30-day realistic historical waste collection data for Hostel A
export const HOSTEL_30_DAYS = [
  { day: "Day 1", date: "Sep 08", kg: 112, cleanScore: 91, biogasLpgEq: 2.80, co2eKg: 54.2 },
  { day: "Day 2", date: "Sep 09", kg: 118, cleanScore: 90, biogasLpgEq: 2.95, co2eKg: 57.1 },
  { day: "Day 3", date: "Sep 10", kg: 135, cleanScore: 94, biogasLpgEq: 3.37, co2eKg: 65.3 },
  { day: "Day 4", date: "Sep 11", kg: 122, cleanScore: 92, biogasLpgEq: 3.05, co2eKg: 59.0 },
  { day: "Day 5", date: "Sep 12", kg: 128, cleanScore: 93, biogasLpgEq: 3.20, co2eKg: 61.9 },
  { day: "Day 6", date: "Sep 13", kg: 145, cleanScore: 88, biogasLpgEq: 3.62, co2eKg: 70.1 }, // Saturday banquet
  { day: "Day 7", date: "Sep 14", kg: 152, cleanScore: 89, biogasLpgEq: 3.80, co2eKg: 73.5 }, // Sunday feast
  { day: "Day 8", date: "Sep 15", kg: 115, cleanScore: 92, biogasLpgEq: 2.87, co2eKg: 55.6 },
  { day: "Day 9", date: "Sep 16", kg: 110, cleanScore: 94, biogasLpgEq: 2.75, co2eKg: 53.2 },
  { day: "Day 10", date: "Sep 17", kg: 124, cleanScore: 95, biogasLpgEq: 3.10, co2eKg: 60.0 },
  { day: "Day 11", date: "Sep 18", kg: 119, cleanScore: 91, biogasLpgEq: 2.97, co2eKg: 57.5 },
  { day: "Day 12", date: "Sep 19", kg: 121, cleanScore: 93, biogasLpgEq: 3.02, co2eKg: 58.5 },
  { day: "Day 13", date: "Sep 20", kg: 140, cleanScore: 90, biogasLpgEq: 3.50, co2eKg: 67.7 },
  { day: "Day 14", date: "Sep 21", kg: 148, cleanScore: 91, biogasLpgEq: 3.70, co2eKg: 71.6 },
  { day: "Day 15", date: "Sep 22", kg: 116, cleanScore: 93, biogasLpgEq: 2.90, co2eKg: 56.1 },
  { day: "Day 16", date: "Sep 23", kg: 120, cleanScore: 92, biogasLpgEq: 3.00, co2eKg: 58.0 },
  { day: "Day 17", date: "Sep 24", kg: 114, cleanScore: 94, biogasLpgEq: 2.85, co2eKg: 55.1 },
  { day: "Day 18", date: "Sep 25", kg: 126, cleanScore: 93, biogasLpgEq: 3.15, co2eKg: 60.9 },
  { day: "Day 19", date: "Sep 26", kg: 122, cleanScore: 91, biogasLpgEq: 3.05, co2eKg: 59.0 },
  { day: "Day 20", date: "Sep 27", kg: 142, cleanScore: 90, biogasLpgEq: 3.55, co2eKg: 68.7 },
  { day: "Day 21", date: "Sep 28", kg: 150, cleanScore: 92, biogasLpgEq: 3.75, co2eKg: 72.6 },
  { day: "Day 22", date: "Sep 29", kg: 118, cleanScore: 95, biogasLpgEq: 2.95, co2eKg: 57.1 },
  { day: "Day 23", date: "Sep 30", kg: 123, cleanScore: 93, biogasLpgEq: 3.07, co2eKg: 59.5 },
  { day: "Day 24", date: "Oct 01", kg: 117, cleanScore: 92, biogasLpgEq: 2.92, co2eKg: 56.6 },
  { day: "Day 25", date: "Oct 02", kg: 105, cleanScore: 96, biogasLpgEq: 2.62, co2eKg: 50.8 }, // Holiday low
  { day: "Day 26", date: "Oct 03", kg: 121, cleanScore: 94, biogasLpgEq: 3.02, co2eKg: 58.5 },
  { day: "Day 27", date: "Oct 04", kg: 139, cleanScore: 90, biogasLpgEq: 3.47, co2eKg: 67.2 },
  { day: "Day 28", date: "Oct 05", kg: 144, cleanScore: 91, biogasLpgEq: 3.60, co2eKg: 69.6 },
  { day: "Day 29", date: "Oct 06", kg: 119, cleanScore: 94, biogasLpgEq: 2.97, co2eKg: 57.5 },
  { day: "Day 30", date: "Today", kg: 120, cleanScore: 92, biogasLpgEq: 3.00, co2eKg: 58.0 },
];

// Operator Bengaluru Collection Route (Total: 2,500 kg / day)
export const OPERATOR_ROUTE = [
  {
    id: "stop-1",
    partnerName: "Hotel Orchid",
    category: "Hospitality",
    address: "Indiranagar 100ft Road, Bengaluru",
    expectedKg: 800,
    slot: "05:30 AM - 06:15 AM",
    status: "collected",
    collectedKg: 812,
    purityScore: 97.5,
    contaminationNotes: "Pure pre-consumer kitchen prep, zero plastics.",
    driver: "Ramesh K. (EV Truck 01)",
    coords: { x: 62, y: 38 }, // map percentage
    geoTag: "12.9784° N, 77.6408° E",
  },
  {
    id: "stop-2",
    partnerName: "Restaurant E",
    category: "Commercial Kitchen",
    address: "80ft Road, 4th Block Koramangala",
    expectedKg: 530,
    slot: "06:30 AM - 07:15 AM",
    status: "collected",
    collectedKg: 526,
    purityScore: 94.2,
    contaminationNotes: "Minor paper napkins separated at bin chute.",
    driver: "Ramesh K. (EV Truck 01)",
    coords: { x: 55, y: 52 },
    geoTag: "12.9352° N, 77.6245° E",
  },
  {
    id: "stop-3",
    partnerName: "Apartment complex D",
    category: "Residential Society",
    address: "Palm Meadows, Whitefield",
    expectedKg: 600,
    slot: "07:30 AM - 08:30 AM",
    status: "in-transit",
    collectedKg: null,
    purityScore: 91.0,
    contaminationNotes: "Multi-tower doorstep segregated organic waste.",
    driver: "Ramesh K. (EV Truck 01)",
    coords: { x: 82, y: 44 },
    geoTag: "12.9698° N, 77.7499° E",
  },
  {
    id: "stop-4",
    partnerName: "Canteen block C",
    category: "Corporate Tech Park",
    address: "Infosys Campus Gate 2, Electronic City",
    expectedKg: 450,
    slot: "08:45 AM - 09:30 AM",
    status: "pending",
    collectedKg: null,
    purityScore: 95.8,
    contaminationNotes: "Automated dining tray scrape system.",
    driver: "Ramesh K. (EV Truck 01)",
    coords: { x: 60, y: 78 },
    geoTag: "12.8399° N, 77.6770° E",
  },
  {
    id: "stop-5",
    partnerName: "Hostel A",
    category: "Student Residency",
    address: "RVCE Campus, Mysore Road",
    expectedKg: 120,
    slot: "09:45 AM - 10:15 AM",
    status: "pending",
    collectedKg: null,
    purityScore: 92.0,
    contaminationNotes: "Mess hall preparation + plate scraping.",
    driver: "Ramesh K. (EV Truck 01)",
    coords: { x: 30, y: 64 },
    geoTag: "12.9237° N, 77.4987° E",
  },
];

// Singasandra Pilot Plant Telemetry
export const PLANT_TELEMETRY = {
  name: "Singasandra Pilot Digester Hub #01",
  dailyCapacityKg: 2500,
  dailyBiogasLpgEqKg: 62.5,
  dailySlurryLitres: 1875,
  coreSensors: {
    tempC: 37.4,
    methanePurity: 61.2, // %
    phLevel: 7.24,
    chamberPressureMbar: 24.8,
    h2sPpmPostScrubber: 0.2, // very clean
    hydraulicRetentionDays: 21,
    gasStorageTankPct: 78,
  },
  uptime30Days: "99.4%",
};

// Investor Financial Baseline Engine
export const FINANCIAL_BASE = {
  annualTonnes: 910, // 2.5 tonnes/day * 364 days
  collectionFeePerKg: 1.5, // Rs 1.5/kg -> Rs 1,500/tonne -> 13.65 Lakhs
  lpgPricePerKg: 80, // Commercial LPG Rs 80-90/kg -> 25 kg LPG eq * 910 * 80 / 1000 = ~11.4L
  fertiliserRatePerLitre: 1.0, // Liquid organic extract / slurry enrichment
  baseCarbonCredits: 440, // tCO2e / year (range 290 to 600)
  defaultCarbonPrice: 1500, // Rs 1,500 per credit (approx $18/t)
  
  // Baseline Revenue breakdown (in Lakhs INR at default credit price)
  baselineRevenueLakhs: {
    collection: 13.7,
    biogas: 11.4,
    credits: 6.6, // at Rs 1,500/credit
    fertiliser: 1.8,
    totalWithCredits: 33.5,
    totalWithoutCredits: 26.9,
  },

  // Break-even metrics
  breakEven: {
    tonnesWithCredits: 495, // 54% of 910t capacity
    tonnesWithoutCredits: 650, // 71% of 910t capacity
    capexPerPlantLakhs: 48.0,
    opexAnnualLakhs: 18.2,
  },

  // Roadmap Stages
  roadmap: [
    {
      stage: "Phase 1: Singasandra Pilot (Now)",
      scale: "1 Plant · 2.5 TPD",
      divertedYear: "910 Tonnes/yr",
      revenueYear: "₹33.5 Lakhs",
      capex: "₹48 Lakhs (Funded)",
      status: "Operational",
      metrics: "Commercial kitchens & hostels across 5 km cluster radius",
    },
    {
      stage: "Phase 2: Decentralised City Clusters (Months 6–18)",
      scale: "5 Plants · 12.5 TPD",
      divertedYear: "4,550 Tonnes/yr",
      revenueYear: "₹1.67 Crores",
      capex: "₹2.1 Crores",
      status: "Permitting / Pipeline",
      metrics: "Whitefield, Electronic City, Koramangala, Peenya, Hebbal",
    },
    {
      stage: "Phase 3: Central Bio-CNG Hub + Grid (Months 18–36)",
      scale: "1 Shared CBG Hub · 50+ TPD",
      divertedYear: "18,200+ Tonnes/yr",
      revenueYear: "₹7.4+ Crores",
      capex: "₹7.8 Crores",
      status: "Design Phase",
      metrics: "Direct dispensing to electric/CNG 3W logistics fleets (Swiggy/Zomato/Porter)",
    },
  ],
};

// Interactive Financial Recalculation Function for Investor Slider
export function calculateImpactAndEconomics(carbonCreditPrice = 1500) {
  const annualTonnes = FINANCIAL_BASE.annualTonnes;
  const creditsYear = FINANCIAL_BASE.baseCarbonCredits; // 440 credits

  const collectionLakhs = FINANCIAL_BASE.baselineRevenueLakhs.collection;
  const biogasLakhs = FINANCIAL_BASE.baselineRevenueLakhs.biogas;
  const fertiliserLakhs = FINANCIAL_BASE.baselineRevenueLakhs.fertiliser;

  // Carbon revenue dynamically based on slider
  const creditRevenueLakhs = Number(((creditsYear * carbonCreditPrice) / 100000).toFixed(2));
  const totalWithCredits = Number((collectionLakhs + biogasLakhs + fertiliserLakhs + creditRevenueLakhs).toFixed(2));
  const totalWithoutCredits = FINANCIAL_BASE.baselineRevenueLakhs.totalWithoutCredits; // 26.9 Lakhs

  // Total revenue per tonne processed
  const revenuePerTonneWith = (totalWithCredits * 100000) / annualTonnes;
  const revenuePerTonneWithout = (totalWithoutCredits * 100000) / annualTonnes;

  const opex = FINANCIAL_BASE.breakEven.opexAnnualLakhs * 100000;
  const breakEvenTonnesWith = Math.round(opex / revenuePerTonneWith);
  const breakEvenTonnesWithout = Math.round(opex / revenuePerTonneWithout);

  const breakEvenPctWith = Math.min(100, Math.round((breakEvenTonnesWith / annualTonnes) * 100));
  const breakEvenPctWithout = Math.min(100, Math.round((breakEvenTonnesWithout / annualTonnes) * 100));

  // Payback and IRR estimate
  const capex = FINANCIAL_BASE.breakEven.capexPerPlantLakhs * 100000;
  const netProfitAnnual = totalWithCredits * 100000 - opex;
  const paybackYears = Number((capex / Math.max(netProfitAnnual, 100000)).toFixed(1));
  const irrEstimatePct = Math.round((netProfitAnnual / capex) * 100 + 3);

  return {
    annualTonnes,
    creditsYear,
    carbonCreditPrice,
    collectionLakhs,
    biogasLakhs,
    creditRevenueLakhs,
    fertiliserLakhs,
    totalWithCredits,
    totalWithoutCredits,
    breakEvenTonnesWith,
    breakEvenTonnesWithout,
    breakEvenPctWith,
    breakEvenPctWithout,
    paybackYears,
    irrEstimatePct,
    shares: {
      collectionPct: Math.round((collectionLakhs / totalWithCredits) * 100),
      biogasPct: Math.round((biogasLakhs / totalWithCredits) * 100),
      creditPct: Math.round((creditRevenueLakhs / totalWithCredits) * 100),
      fertiliserPct: Math.max(1, 100 - Math.round((collectionLakhs / totalWithCredits) * 100) - Math.round((biogasLakhs / totalWithCredits) * 100) - Math.round((creditRevenueLakhs / totalWithCredits) * 100)),
    }
  };
}
