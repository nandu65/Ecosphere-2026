import React, { useState } from 'react';
import { 
  Building2, 
  Flame, 
  Leaf, 
  Award, 
  Calendar, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  HelpCircle,
  Truck,
  QrCode,
  ShieldCheck,
  ChevronRight,
  AlertCircle
} from 'lucide-react';
import { PARTNER_PROFILES, HOSTEL_30_DAYS } from '../data/mockData';

export default function PartnerDashboard() {
  const [selectedPartner, setSelectedPartner] = useState(PARTNER_PROFILES[0]);
  const [kgToday, setKgToday] = useState(120);
  const [cleanScore, setCleanScore] = useState(92);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingSlot, setBookingSlot] = useState("06:30 AM - 07:30 AM");
  const [bookingNotes, setBookingNotes] = useState("");
  const [hoveredDay, setHoveredDay] = useState(null);

  // Live output formulas per prompt requirements:
  // 1. Fee at Rs 1.5/kg
  const feeEarned = (kgToday * 1.5).toFixed(2);
  
  // 2. Biogas = 25 kg LPG-equivalent per tonne of waste (kgToday * 25 / 1000)
  const biogasLpgEq = ((kgToday / 1000) * 25).toFixed(2);
  
  // 3. CO2e avoided = 0.484 t per tonne of waste (kgToday * 0.484 / 1000 = kgToday * 0.000484 t = kgToday * 0.484 kg)
  const co2eAvoidedTonnes = ((kgToday / 1000) * 0.484).toFixed(4);
  const co2eAvoidedKg = (kgToday * 0.484).toFixed(1);
  
  // 4. Reward points = kg * clean score (92%)
  const pointsEarnedToday = Math.round(kgToday * (cleanScore / 100));

  // Chart max value calculation
  const maxChartKg = Math.max(...HOSTEL_30_DAYS.map(d => d.kg)) + 20;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingConfirmed(true);
    setTimeout(() => {
      // Keep modal open with confirmation
    }, 400);
  };

  const handlePartnerChange = (partner) => {
    setSelectedPartner(partner);
    setKgToday(partner.defaultKg);
    setCleanScore(partner.cleanScore);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header & Partner Selector */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-forest-card p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
              SCREEN 1 · PARTNER PORTAL
            </span>
            <span className="text-xs text-slate-400 font-mono">* Illustrative demo data</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-heading mt-1">
            {selectedPartner.name}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-2">
            <span>{selectedPartner.type}</span>
            <span>•</span>
            <span>{selectedPartner.location}</span>
            <span>•</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{selectedPartner.residents} residents</span>
          </p>
        </div>

        {/* Quick Partner Switcher for Demo */}
        <div className="flex items-center gap-2 bg-slate-50 dark:bg-forest-900/60 p-1.5 rounded-2xl border border-slate-200 dark:border-emerald-800/40">
          <span className="text-xs text-slate-500 font-medium px-2 hidden sm:inline">Demo Partner:</span>
          {PARTNER_PROFILES.map((p) => (
            <button
              key={p.id}
              onClick={() => handlePartnerChange(p)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedPartner.id === p.id
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-forest-800'
              }`}
            >
              {p.id === 'hostel-a' ? 'Hostel A' : p.id === 'hotel-orchid' ? 'Hotel Orchid' : 'Apartment D'}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Slider & Computed Outputs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Interactive Daily Collection Input */}
        <div className="lg:col-span-5 bg-white dark:bg-forest-card p-6 sm:p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-md flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Daily Waste Log
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                  Waste Collected Today
                </h3>
              </div>
              <span className="text-xs font-mono bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-lg text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800">
                Live Input
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Adjust the slider or enter actual weighed canteen bins to observe instantaneous output calculations.
            </p>

            {/* Slider & Number Display */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-forest-900/60 border border-slate-200 dark:border-emerald-800/50">
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Measured Mass (kg)
                </span>
                <div className="flex items-center gap-1">
                  <input
                    type="number"
                    min="10"
                    max="1000"
                    step="5"
                    value={kgToday}
                    onChange={(e) => setKgToday(Math.max(1, Number(e.target.value)))}
                    className="w-24 text-right text-3xl font-extrabold font-mono bg-white dark:bg-forest-card px-2 py-1 rounded-xl border border-emerald-300 dark:border-emerald-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <span className="text-lg font-bold text-slate-400">kg</span>
                </div>
              </div>

              <input
                type="range"
                min="10"
                max="500"
                step="5"
                value={kgToday}
                onChange={(e) => setKgToday(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 dark:bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />

              <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-2">
                <span>10 kg (Min)</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">120 kg (Default)</span>
                <span>500 kg (Max)</span>
              </div>
            </div>

            {/* Clean Score Input */}
            <div className="mt-4 p-4 rounded-2xl bg-slate-50/70 dark:bg-forest-900/40 border border-slate-200 dark:border-emerald-800/30 flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Cleanliness & Purity Score
                </div>
                <div className="text-[11px] text-slate-400">
                  Assessed during bin optical scan
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min="50"
                  max="100"
                  value={cleanScore}
                  onChange={(e) => setCleanScore(Number(e.target.value))}
                  className="w-20 h-2 bg-slate-200 dark:bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <span className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  {cleanScore}%
                </span>
              </div>
            </div>
          </div>

          {/* Request Pickup Action Button */}
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-emerald-800/40">
            <button
              onClick={() => {
                setBookingConfirmed(false);
                setShowBookingModal(true);
              }}
              className="w-full py-3.5 px-6 rounded-2xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center gap-2 group"
            >
              <Truck className="w-4 h-4 text-emerald-200 transition-transform group-hover:translate-x-1" />
              <span>Request Tomorrow's Pickup</span>
            </button>
            <p className="text-center text-[11px] text-slate-400 mt-2 font-mono">
              Next scheduled slot: Tomorrow, 06:30 AM · Electric Fleet
            </p>
          </div>
        </div>

        {/* Right Column: 4 Real-time Reactive Output Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card 1: Gate Fee */}
          <div className="bg-white dark:bg-forest-card p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm relative overflow-hidden group hover:border-emerald-400 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Gate Fee Credit
              </span>
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <span className="font-bold text-sm">₹</span>
              </div>
            </div>
            <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
              ₹{feeEarned}
            </div>
            <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">@ ₹1.50 / kg</span>
              <span>• Credited to monthly invoice</span>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-emerald-800/40 text-[11px] text-slate-400 flex justify-between">
              <span>30-day projected:</span>
              <span className="font-mono font-bold text-slate-700 dark:text-slate-300">₹{(Number(feeEarned) * 30).toFixed(0)}</span>
            </div>
          </div>

          {/* Card 2: Biogas Equivalent */}
          <div className="bg-white dark:bg-forest-card p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm relative overflow-hidden group hover:border-amber-400 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Biogas Output
              </span>
              <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <Flame className="w-5 h-5 fill-amber-500/20 text-amber-500" />
              </div>
            </div>
            <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
              {biogasLpgEq} <span className="text-lg font-sans font-semibold text-amber-600 dark:text-amber-400">kg LPG-eq</span>
            </div>
            <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Equivalent to <span className="font-mono font-semibold text-amber-600 dark:text-amber-400">25 kg LPG/tonne</span>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-emerald-800/40 text-[11px] text-slate-400 flex justify-between">
              <span>Canteen meals cooked:</span>
              <span className="font-mono font-bold text-slate-700 dark:text-slate-300">~{Math.round(Number(biogasLpgEq) * 18)} meals</span>
            </div>
          </div>

          {/* Card 3: CO2e Avoided */}
          <div className="bg-white dark:bg-forest-card p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm relative overflow-hidden group hover:border-emerald-400 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                CO₂e Avoided Today
              </span>
              <div className="w-9 h-9 rounded-xl bg-teal-500/15 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
              {co2eAvoidedKg} <span className="text-lg font-sans font-semibold text-teal-600 dark:text-teal-400">kg CO₂e</span>
            </div>
            <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Factor: <span className="font-mono font-semibold text-teal-600 dark:text-teal-400">0.484 t CO₂e / tonne</span>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-emerald-800/40 text-[11px] text-slate-400 flex justify-between">
              <span>Metric tonnage:</span>
              <span className="font-mono font-bold text-slate-700 dark:text-slate-300">{co2eAvoidedTonnes} tCO₂e</span>
            </div>
          </div>

          {/* Card 4: Reward Points */}
          <div className="bg-white dark:bg-forest-card p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm relative overflow-hidden group hover:border-emerald-400 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Circularity Points
              </span>
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
              +{pointsEarnedToday} <span className="text-lg font-sans font-semibold text-emerald-600 dark:text-emerald-400">pts</span>
            </div>
            <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Formula: <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400">kg × {cleanScore}% clean score</span>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-emerald-800/40 text-[11px] text-slate-400 flex justify-between">
              <span>Total balance:</span>
              <span className="font-mono font-bold text-slate-700 dark:text-slate-300">{(selectedPartner.lifetimePoints + pointsEarnedToday).toLocaleString('en-IN')} pts</span>
            </div>
          </div>
        </div>
      </div>

      {/* 30-Day Trend Chart & Clean-Score Ring Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 30-Day Waste Trend Area / Bar Chart */}
        <div className="lg:col-span-8 bg-white dark:bg-forest-card p-6 sm:p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Historical Log
                </span>
                <span className="text-xs text-slate-400 font-mono">30 Days · Hostel A</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                Daily Waste Diverted (kg)
              </h3>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-emerald-500"></span>
                <span className="text-slate-600 dark:text-slate-300">Daily kg</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-amber-400"></span>
                <span className="text-slate-600 dark:text-slate-300">30d Avg (126 kg)</span>
              </div>
            </div>
          </div>

          {/* Custom SVG Responsive Interactive Chart */}
          <div className="h-64 w-full relative">
            <div className="absolute inset-0 flex items-end justify-between gap-1 pt-6 pb-6 px-1">
              {HOSTEL_30_DAYS.map((d, index) => {
                const heightPct = Math.round((d.kg / maxChartKg) * 100);
                const isToday = index === HOSTEL_30_DAYS.length - 1;
                const isHovered = hoveredDay === index;

                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredDay(index)}
                    onMouseLeave={() => setHoveredDay(null)}
                    className="flex-1 flex flex-col items-center h-full justify-end group relative cursor-pointer"
                  >
                    {/* Tooltip */}
                    {isHovered && (
                      <div className="absolute -top-14 z-30 bg-slate-900 text-white text-[11px] p-2 rounded-xl shadow-xl whitespace-nowrap pointer-events-none border border-emerald-500/40">
                        <div className="font-bold">{d.date}: {d.kg} kg</div>
                        <div className="text-emerald-300 font-mono text-[10px]">
                          Clean: {d.cleanScore}% | {d.biogasLpgEq} kg LPG
                        </div>
                      </div>
                    )}

                    {/* Bar */}
                    <div
                      style={{ height: `${heightPct}%` }}
                      className={`w-full rounded-t-md transition-all duration-200 ${
                        isToday
                          ? 'bg-gradient-to-t from-emerald-600 to-amber-400 ring-2 ring-amber-400'
                          : isHovered
                          ? 'bg-emerald-400'
                          : 'bg-emerald-600/70 hover:bg-emerald-500'
                      }`}
                    ></div>

                    {/* Date label on every 5th item */}
                    {index % 5 === 0 && (
                      <span className="text-[9px] text-slate-400 font-mono mt-1 whitespace-nowrap">
                        {d.date.split(' ')[0]}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Average baseline overlay line */}
            <div 
              className="absolute left-0 right-0 border-b border-dashed border-amber-400 pointer-events-none"
              style={{ bottom: `${Math.round((126 / maxChartKg) * 100)}%` }}
            >
              <span className="absolute right-0 -top-4 text-[9px] font-mono font-bold text-amber-500 bg-amber-50 dark:bg-forest-900 px-1 rounded">
                Avg: 126 kg/d
              </span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-emerald-800/40 flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <div>
              Total 30-Day Waste Diverted: <strong className="text-slate-900 dark:text-white font-mono">3,780 kg (3.78 t)</strong>
            </div>
            <div>
              Total Biogas Created: <strong className="text-amber-600 dark:text-amber-400 font-mono">94.5 kg LPG-eq</strong>
            </div>
          </div>
        </div>

        {/* Clean-Score Ring & Quality Breakdown */}
        <div className="lg:col-span-4 bg-white dark:bg-forest-card p-6 sm:p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Purity Verification
              </span>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-full">
                Grade A+
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-4">
              Clean-Score Ring
            </h3>

            {/* Circular Ring Gauge */}
            <div className="flex items-center justify-center my-4">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="text-slate-100 dark:text-emerald-950 stroke-current"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="text-emerald-500 stroke-current transition-all duration-1000 ease-out"
                    strokeWidth="10"
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 - (251.2 * cleanScore) / 100}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
                    {cleanScore}%
                  </span>
                  <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 tracking-wider">
                    Purity Score
                  </span>
                </div>
              </div>
            </div>

            {/* Breakdown Bars */}
            <div className="space-y-2.5 mt-4">
              <div>
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300 font-medium mb-1">
                  <span>Zero Plastics & Packaging</span>
                  <span className="font-mono font-bold text-emerald-600">99.1%</span>
                </div>
                <div className="h-1.5 bg-slate-100 dark:bg-forest-900 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '99.1%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300 font-medium mb-1">
                  <span>Moisture & Organic Density</span>
                  <span className="font-mono font-bold text-emerald-600">94.0%</span>
                </div>
                <div className="h-1.5 bg-slate-100 dark:bg-forest-900 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300 font-medium mb-1">
                  <span>Sorting Compliance (Mess Staff)</span>
                  <span className="font-mono font-bold text-emerald-600">92.0%</span>
                </div>
                <div className="h-1.5 bg-slate-100 dark:bg-forest-900 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-emerald-800/40 text-[11px] text-slate-400">
            Scores ≥ 90% receive maximum gate fee rebate and 1.5x loyalty points multiplier.
          </div>
        </div>
      </div>

      {/* Rewards & Circular Incentives Panel */}
      <div className="bg-gradient-to-br from-emerald-900 via-forest-900 to-forest-dark text-white p-6 sm:p-8 rounded-3xl border border-emerald-700/40 shadow-xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Circularity Loyalty Tier
              </span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">
              {selectedPartner.tier} · {(selectedPartner.lifetimePoints + pointsEarnedToday).toLocaleString('en-IN')} Points
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/90 mt-1 max-w-xl">
              Hostel A has maintained a 44-day zero-contamination streak. Your next reward unlocks at {selectedPartner.nextTierPoints.toLocaleString('en-IN')} points.
            </p>

            {/* Progress bar to next reward */}
            <div className="mt-4 max-w-xl">
              <div className="flex justify-between text-xs text-emerald-200 font-mono mb-1.5">
                <span>Next Perk: {selectedPartner.nextReward}</span>
                <span className="font-bold text-amber-300">
                  {Math.round(((selectedPartner.lifetimePoints + pointsEarnedToday) / selectedPartner.nextTierPoints) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-emerald-950/80 rounded-full overflow-hidden p-0.5 border border-emerald-700/50">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.round(((selectedPartner.lifetimePoints + pointsEarnedToday) / selectedPartner.nextTierPoints) * 100))}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-700/40 backdrop-blur-sm">
              <div className="text-[11px] text-emerald-300 font-medium">Available Redeemable Value</div>
              <div className="text-xl font-bold font-mono text-white mt-0.5">
                ₹{((selectedPartner.lifetimePoints + pointsEarnedToday) * 0.25).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
              </div>
              <div className="text-[10px] text-emerald-400/80 mt-1">
                Usable for campus compost or canteen biogas fuel credits
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pickup Request Modal Dialog */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-forest-card rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-emerald-200 dark:border-emerald-700 shadow-2xl relative">
            {!bookingConfirmed ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-emerald-800 pb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Smart Dispatch
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                      Request Tomorrow's Pickup
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowBookingModal(false)}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-white text-lg"
                  >
                    ✕
                  </button>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Pickup Location
                  </label>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-forest-900 border border-slate-200 dark:border-emerald-800 text-xs font-medium text-slate-800 dark:text-slate-200">
                    Hostel A (RVCE Campus Residences) · Mysore Road Gate 3
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Target Slot
                    </label>
                    <select
                      value={bookingSlot}
                      onChange={(e) => setBookingSlot(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-forest-900 border border-slate-200 dark:border-emerald-800 text-xs font-semibold text-slate-800 dark:text-white focus:outline-none"
                    >
                      <option>06:00 AM - 07:00 AM</option>
                      <option>07:00 AM - 08:00 AM</option>
                      <option>08:00 AM - 09:00 AM</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Estimated Weight (kg)
                    </label>
                    <input
                      type="number"
                      defaultValue={kgToday}
                      className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-forest-900 border border-slate-200 dark:border-emerald-800 text-xs font-bold font-mono text-slate-800 dark:text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Special Batch Notes (Optional)
                  </label>
                  <textarea
                    rows="2"
                    placeholder="e.g., Weekend special banquet waste, pure vegetable cuttings..."
                    value={bookingNotes}
                    onChange={(e) => setBookingNotes(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-forest-900 border border-slate-200 dark:border-emerald-800 text-xs text-slate-800 dark:text-white focus:outline-none"
                  ></textarea>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-[11px] text-emerald-800 dark:text-emerald-300 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>Electric EV collection vehicle dispatched. Digital scales automatically sign off on weights for gate-fee credit and carbon minting.</span>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowBookingModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-forest-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all"
                  >
                    Confirm Dispatch
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center border-2 border-emerald-500 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                  Pickup Confirmed!
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                  Route assigned to <strong>Driver Ramesh K. (Tata Ace EV-04)</strong> for slot <strong>{bookingSlot}</strong> tomorrow morning.
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-forest-900 border border-slate-200 dark:border-emerald-800 max-w-xs mx-auto text-left flex items-center gap-3">
                  <div className="p-2 bg-white rounded-lg">
                    <QrCode className="w-10 h-10 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400">DISPATCH TICKET</div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white font-mono">#BL-2026-8842</div>
                    <div className="text-[11px] text-emerald-600 font-semibold">Priority Verification</div>
                  </div>
                </div>

                <button
                  onClick={() => setShowBookingModal(false)}
                  className="w-full py-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
