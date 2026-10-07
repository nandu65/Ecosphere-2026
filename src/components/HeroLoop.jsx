import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Flame, 
  Leaf, 
  Sparkles, 
  RotateCw, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Activity, 
  Layers, 
  HelpCircle,
  Database,
  Building,
  CheckCircle2,
  ChevronRight,
  Info
} from 'lucide-react';
import { BRAND, PLANT_TELEMETRY } from '../data/mockData';

export default function HeroLoop({ onNavigate }) {
  // Live ticking state (illustrating real-time diversion & CO2 avoided)
  const [divertedKg, setDivertedKg] = useState(2420.4);
  const [co2eAvoidedKg, setCo2eAvoidedKg] = useState(1171.4);
  const [activeStep, setActiveStep] = useState('digester'); // 'waste' | 'digester' | 'biogas' | 'slurry' | 'credits'

  useEffect(() => {
    const timer = setInterval(() => {
      // Tick up realistically based on real-time continuous digester feed
      setDivertedKg(prev => +(prev + 0.12).toFixed(2));
      setCo2eAvoidedKg(prev => +(prev + 0.058).toFixed(3));
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  const stepDetails = {
    waste: {
      title: "1. Segregated Bulk Food Waste",
      actor: "Hostels, Hotels, Tech Park Canteens & Gated Societies",
      metric: "2,500 kg / day collected across 5-point route",
      color: "from-emerald-600 to-teal-700",
      accent: "text-emerald-400",
      description: "Organic kitchen preparation and post-meal scrap collected daily at source. Smart QR-weighed bins ensure sorting hygiene and zero landfill disposal.",
      badge: "Feedstock · Pre-sorted",
      stats: [
        { label: "Gate collection fee", value: "₹1.50 / kg" },
        { label: "Moisture target", value: "70–78%" },
        { label: "Average clean score", value: "93.4%" },
      ]
    },
    digester: {
      title: "2. Sealed Decentralised Digester",
      actor: "Singasandra Hub · Continuous Mesophilic Digestion",
      metric: "37.5°C Controlled Temp · 21-Day Retention",
      color: "from-forest-900 via-emerald-950 to-forest-dark",
      accent: "text-amber-400",
      description: "Sealed airtight anaerobic tanks where naturally occurring methanogenic bacteria break down organics with zero odor, zero smoke, and zero methane leakage.",
      badge: "Core Conversion Plant",
      stats: [
        { label: "Methane concentration", value: "61.2% CH₄" },
        { label: "Post-scrubber H₂S", value: "< 0.2 ppm" },
        { label: "Digester capacity", value: "2.5 TPD" },
      ]
    },
    biogas: {
      title: "3A. Clean Biogas to Commercial Kitchens",
      actor: "Piped / Modular pressurised canisters to institutional kitchens",
      metric: "62.5 kg LPG-equivalent per day",
      color: "from-amber-600 to-orange-600",
      accent: "text-amber-300",
      description: "Direct displacement of expensive fossil LPG cylinders. Burns with a clean, high-calorific blue/amber flame at 20% lower cost for partner canteens.",
      badge: "Revenue Stream 1",
      stats: [
        { label: "Annual Biogas Revenue", value: "₹11.4 Lakhs" },
        { label: "LPG displacement", value: "22,800 kg/yr" },
        { label: "Canteen cost cut", value: "~20% vs LPG" },
      ]
    },
    slurry: {
      title: "3B. Bio-Slurry to Peri-Urban Farmers",
      actor: "Direct farm off-take across Mandya, Hosur & Kolar districts",
      metric: "1,875 Litres/day nutrient-rich organic extract",
      color: "from-lime-600 to-emerald-700",
      accent: "text-lime-400",
      description: "Pathogen-free, live probiotic bio-fertiliser rich in bio-available Nitrogen, Phosphorus and Potassium. Restores micro-biome health in depleted soils.",
      badge: "Revenue Stream 2",
      stats: [
        { label: "Annual slurry yield", value: "6.8 Lakh Litres" },
        { label: "NPK Ratio (liquid)", value: "2.8 : 1.4 : 1.9" },
        { label: "Chemical fertilizer cut", value: "Up to 35%" },
      ]
    },
    credits: {
      title: "3C. Verified Digital Carbon Credits (MRV)",
      actor: "Automated IoT Telemetry -> Verra VM0022 Methodology",
      metric: "440 Verified tCO2e / year (range 290–600)",
      color: "from-cyan-700 to-blue-800",
      accent: "text-cyan-300",
      description: "Methane avoidance data is cryptographically anchored from flow meters and mass scales. Turns compliance avoidance into institutional-grade carbon credits.",
      badge: "Revenue Stream 3 · High Margin",
      stats: [
        { label: "Avoidance intensity", value: "0.484 t CO2e / tonne" },
        { label: "Credit Revenue (at ₹1.5k)", value: "₹6.6 Lakhs/yr" },
        { label: "Audit standard", value: "Gold Std / Verra" },
      ]
    }
  };

  const activeData = stepDetails[activeStep];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8 border-b border-emerald-950/10 dark:border-emerald-500/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-br from-emerald-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Main Pitch Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span>Decentralised Organic Waste Infrastructure · Bengaluru</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-heading leading-[1.12]">
            Waste that <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 dark:from-emerald-400 dark:via-teal-300 dark:to-amber-400">earns twice</span>.
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
            Bioloop transforms bulk food waste from Bengaluru hostels, hotels, and tech canteens into clean cooking biogas, certified organic fertilizer, and auditable carbon credits — within a 5 km closed loop.
          </p>

          {/* Real-time Telemetry Bar */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-2xl bg-white dark:bg-forest-card border border-emerald-100 dark:border-emerald-800/40 shadow-lg shadow-emerald-900/5">
            <div className="text-left">
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Waste diverted today
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white">
                {divertedKg.toLocaleString('en-IN', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} <span className="text-xs font-sans text-emerald-600 dark:text-emerald-400 font-semibold">kg</span>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-200 dark:bg-emerald-800/60"></div>

            <div className="text-left">
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                CO₂e avoided today
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-slate-900 dark:text-white">
                {co2eAvoidedKg.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span className="text-xs font-sans text-amber-600 dark:text-amber-400 font-semibold">kg</span>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-200 dark:bg-emerald-800/60 hidden sm:block"></div>

            <div className="text-left hidden sm:block">
              <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                Pilot Hub Status
              </div>
              <div className="text-xs font-bold text-emerald-600 dark:text-emerald-300 flex items-center gap-1 mt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Singasandra 2.5 TPD · 100% Load</span>
              </div>
            </div>
          </div>
          
          <div className="mt-2 text-[11px] text-slate-400 dark:text-emerald-400/60 font-mono">
            * Illustrative demo data streaming live from digester telemetry
          </div>
        </div>

        {/* The Core Hero Interactive Animated Loop Diagram */}
        <div className="bg-white/80 dark:bg-forest-card/90 rounded-3xl p-6 sm:p-8 lg:p-10 border border-emerald-100 dark:border-emerald-800/50 shadow-xl dark:shadow-2xl dark:shadow-black/50 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-600 text-white">
                  CIRCULAR VALUE ENGINE
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Click any stage to inspect live chemistry and commercial yield
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-heading mt-1">
                The Decentralised Bioloop Ecosystem
              </h2>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => onNavigate('partner')}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-forest-900/60 hover:bg-slate-200 dark:hover:bg-forest-800 text-slate-800 dark:text-slate-200 transition-colors flex items-center gap-1.5"
              >
                <span>Partner Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('operator')}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-forest-900/60 hover:bg-slate-200 dark:hover:bg-forest-800 text-slate-800 dark:text-slate-200 transition-colors flex items-center gap-1.5"
              >
                <span>Logistics Route</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('investor')}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-700/20 transition-all flex items-center gap-1.5"
              >
                <span>Unit Economics & Pitch</span>
                <TrendingUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Loop Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 relative">
            {/* Stage 1: Waste Input */}
            <div 
              onClick={() => setActiveStep('waste')}
              className={`cursor-pointer rounded-2xl p-4 transition-all duration-200 relative overflow-hidden border ${
                activeStep === 'waste'
                  ? 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-500 ring-2 ring-emerald-500/30 shadow-lg'
                  : 'bg-slate-50/70 dark:bg-forest-900/40 border-slate-200 dark:border-emerald-900/40 hover:border-emerald-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  Input 01
                </span>
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Leaf className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                Bulk Food Waste
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Hostels, Hotels & Tech Canteens
              </p>
              <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-emerald-800/40 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500">Gate Fee:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">₹1.5 / kg</span>
              </div>
            </div>

            {/* Connecting Chevron/Arrow */}
            <div className="hidden md:flex absolute left-[19%] top-1/2 -translate-y-1/2 z-10 -ml-2 text-emerald-500 pointer-events-none">
              <ChevronRight className="w-5 h-5 animate-pulse" />
            </div>

            {/* Stage 2: Central Digester */}
            <div 
              onClick={() => setActiveStep('digester')}
              className={`cursor-pointer rounded-2xl p-4 transition-all duration-200 relative overflow-hidden border ${
                activeStep === 'digester'
                  ? 'bg-emerald-900 text-white border-amber-400 ring-2 ring-amber-400/40 shadow-xl shadow-emerald-950/40'
                  : 'bg-forest-900/80 text-white border-emerald-800/60 hover:border-amber-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                  Core Plant 02
                </span>
                <div className="w-7 h-7 rounded-lg bg-amber-500/30 text-amber-300 flex items-center justify-center">
                  <Flame className="w-4 h-4 fill-amber-300" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-white font-heading flex items-center gap-1">
                <span>Sealed Digester</span>
              </h3>
              <p className="text-xs text-emerald-200/80 mt-1 line-clamp-2">
                2.5 TPD Anaerobic Hub (Singasandra)
              </p>
              <div className="mt-3 pt-2 border-t border-emerald-800 flex items-center justify-between text-[11px] font-mono">
                <span className="text-emerald-300/70">Methane:</span>
                <span className="font-bold text-amber-300">61.2% CH₄</span>
              </div>
            </div>

            {/* Connecting Chevron/Arrow */}
            <div className="hidden md:flex absolute left-[39%] top-1/2 -translate-y-1/2 z-10 -ml-2 text-amber-500 pointer-events-none">
              <ChevronRight className="w-5 h-5 animate-pulse" />
            </div>

            {/* Stage 3A: Biogas */}
            <div 
              onClick={() => setActiveStep('biogas')}
              className={`cursor-pointer rounded-2xl p-4 transition-all duration-200 relative overflow-hidden border ${
                activeStep === 'biogas'
                  ? 'bg-amber-50 dark:bg-amber-950/50 border-amber-500 ring-2 ring-amber-500/30 shadow-lg'
                  : 'bg-slate-50/70 dark:bg-forest-900/40 border-slate-200 dark:border-emerald-900/40 hover:border-amber-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  Output 3A
                </span>
                <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                  <Flame className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                Biogas to Kitchens
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Displaces commercial LPG cylinders
              </p>
              <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-emerald-800/40 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500">Yield:</span>
                <span className="font-bold text-amber-600 dark:text-amber-400">62.5 kg LPG-eq/d</span>
              </div>
            </div>

            {/* Stage 3B: Bio-slurry */}
            <div 
              onClick={() => setActiveStep('slurry')}
              className={`cursor-pointer rounded-2xl p-4 transition-all duration-200 relative overflow-hidden border ${
                activeStep === 'slurry'
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 border-lime-500 ring-2 ring-lime-500/30 shadow-lg'
                  : 'bg-slate-50/70 dark:bg-forest-900/40 border-slate-200 dark:border-emerald-900/40 hover:border-lime-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-lime-700 dark:text-lime-400">
                  Output 3B
                </span>
                <div className="w-7 h-7 rounded-lg bg-lime-500/20 text-lime-600 dark:text-lime-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                Slurry to Farmers
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                Living bio-organic fertilizer
              </p>
              <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-emerald-800/40 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500">Output:</span>
                <span className="font-bold text-lime-600 dark:text-lime-400">1,875 L / day</span>
              </div>
            </div>

            {/* Stage 3C: Carbon credits */}
            <div 
              onClick={() => setActiveStep('credits')}
              className={`cursor-pointer rounded-2xl p-4 transition-all duration-200 relative overflow-hidden border ${
                activeStep === 'credits'
                  ? 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-500 ring-2 ring-cyan-500/30 shadow-lg'
                  : 'bg-slate-50/70 dark:bg-forest-900/40 border-slate-200 dark:border-emerald-900/40 hover:border-cyan-400'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                  Output 3C
                </span>
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                  <Database className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white font-heading">
                Carbon Credits
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                IoT telemetry & Verra standard
              </p>
              <div className="mt-3 pt-2 border-t border-slate-200/60 dark:border-emerald-800/40 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500">Volume:</span>
                <span className="font-bold text-cyan-600 dark:text-cyan-400">440 tCO₂e / yr</span>
              </div>
            </div>
          </div>

          {/* Active Stage Deep-Dive Card */}
          <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-emerald-50/40 dark:from-emerald-950/50 dark:to-forest-900/60 border border-slate-200 dark:border-emerald-800/60 transition-all">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-emerald-800/50">
              <div>
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                  {activeData.badge}
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-heading">
                  {activeData.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {activeData.actor}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-white dark:bg-forest-900 text-slate-900 dark:text-emerald-300 border border-slate-200 dark:border-emerald-800 font-bold">
                  {activeData.metric}
                </span>
              </div>
            </div>

            <p className="mt-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {activeData.description}
            </p>

            {/* Mini stat pills */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {activeData.stats.map((st, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white dark:bg-forest-900/80 border border-slate-200/80 dark:border-emerald-800/40">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    {st.label}
                  </div>
                  <div className="text-sm font-bold font-mono text-slate-900 dark:text-emerald-300 mt-0.5">
                    {st.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
