import React, { useState } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Flame, 
  Leaf, 
  Award, 
  ArrowUpRight, 
  ShieldCheck, 
  Sparkles, 
  Gauge, 
  Layers, 
  Target, 
  PieChart, 
  HelpCircle,
  Sliders,
  CheckCircle2,
  Building,
  BarChart4
} from 'lucide-react';
import { FINANCIAL_BASE, calculateImpactAndEconomics } from '../data/mockData';

export default function InvestorView() {
  const [carbonPrice, setCarbonPrice] = useState(1500); // default Rs 1,500 / tCO2e
  const [selectedRoadmapIdx, setSelectedRoadmapIdx] = useState(0);

  // Dynamically calculate revenue, break-even, shares, and payback based on slider
  const econ = calculateImpactAndEconomics(carbonPrice);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="bg-white dark:bg-forest-card p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700">
              SCREEN 3 · IMPACT & INVESTOR VIEW
            </span>
            <span className="text-xs text-slate-400 font-mono">* Illustrative demo data</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-heading mt-1">
            Unit Economics & Scaled Impact
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            5-Minute Pitch Deck model for 1 Pilot Decentralised Plant (2.5 TPD Singasandra, Bengaluru)
          </p>
        </div>

        {/* Real-time IRR & Payback Badge */}
        <div className="flex items-center gap-3">
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/60 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 text-center min-w-[120px]">
            <div className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-300">Projected IRR</div>
            <div className="text-xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400">
              {econ.irrEstimatePct}%
            </div>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-forest-900/60 rounded-2xl border border-slate-200 dark:border-emerald-800/40 text-center min-w-[120px]">
            <div className="text-[10px] uppercase font-bold text-slate-400">CapEx Payback</div>
            <div className="text-xl font-extrabold font-mono text-slate-900 dark:text-white">
              {econ.paybackYears} <span className="text-xs font-normal text-slate-400">yrs</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Core Required KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: 910 t/year Diverted */}
        <div className="bg-white dark:bg-forest-card p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm relative overflow-hidden group hover:border-emerald-400 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Annual Waste Diverted
            </span>
            <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Leaf className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
            {econ.annualTonnes} <span className="text-base font-sans font-bold text-emerald-600 dark:text-emerald-400">t / year</span>
          </div>
          <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            2.5 TPD continuous pilot plant capacity
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-emerald-800/40 text-[11px] font-mono text-slate-400">
            Zero methane landfill emission
          </div>
        </div>

        {/* KPI 2: ~440 Carbon Credits/year */}
        <div className="bg-white dark:bg-forest-card p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm relative overflow-hidden group hover:border-cyan-400 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              Verified Carbon Credits
            </span>
            <div className="w-8 h-8 rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
            ~{econ.creditsYear} <span className="text-base font-sans font-bold text-cyan-600 dark:text-cyan-400">tCO₂e / yr</span>
          </div>
          <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Range: <span className="font-mono font-semibold text-slate-700 dark:text-slate-300">290 to 600 tCO₂e</span>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-emerald-800/40 text-[11px] font-mono text-slate-400">
            Verra VM0022 methodology
          </div>
        </div>

        {/* KPI 3: Yearly Revenue With Credits */}
        <div className="bg-white dark:bg-forest-card p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm relative overflow-hidden group hover:border-amber-400 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Annual Revenue (w/ Credits)
            </span>
            <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
            ₹{econ.totalWithCredits} <span className="text-base font-sans font-bold text-amber-600 dark:text-amber-400">Lakhs</span>
          </div>
          <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            At ₹{carbonPrice.toLocaleString('en-IN')}/credit benchmark
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-emerald-800/40 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            +{(econ.totalWithCredits - econ.totalWithoutCredits).toFixed(1)}L (+{Math.round(((econ.totalWithCredits - econ.totalWithoutCredits) / econ.totalWithoutCredits) * 100)}%) credit uplift
          </div>
        </div>

        {/* KPI 4: Yearly Revenue Without Credits */}
        <div className="bg-white dark:bg-forest-card p-6 rounded-3xl border border-slate-200 dark:border-emerald-900/50 shadow-sm relative overflow-hidden group hover:border-slate-400 transition-colors">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Baseline Revenue (No Credits)
            </span>
            <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-forest-900 text-slate-600 dark:text-slate-400 flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
            ₹{econ.totalWithoutCredits} <span className="text-base font-sans font-bold text-slate-500">Lakhs</span>
          </div>
          <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Gate fees + Biogas + Fertiliser only
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-emerald-800/40 text-[11px] font-mono text-slate-400">
            Viable even at ₹0 carbon market
          </div>
        </div>
      </div>

      {/* Carbon Credit Price Sensitivity Slider (Live Recalculation) */}
      <div className="bg-gradient-to-br from-slate-900 via-forest-950 to-forest-dark text-white p-6 sm:p-8 rounded-3xl border border-emerald-700/40 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Live Sensitivity Engine
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
              Carbon Credit Price Sensitivity
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200/80 mt-0.5">
              Drag the carbon credit price to stress-test unit economics and plant payback
            </p>
          </div>

          <div className="flex items-baseline gap-2 bg-forest-card/80 p-3 px-5 rounded-2xl border border-emerald-600/40">
            <span className="text-xs text-emerald-300 font-medium">Active Price:</span>
            <span className="text-2xl font-extrabold font-mono text-amber-300">
              ₹{carbonPrice.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-emerald-400 font-mono">/ tCO₂e</span>
          </div>
        </div>

        {/* Interactive Range Slider */}
        <div className="space-y-4">
          <input
            type="range"
            min="250"
            max="1500"
            step="50"
            value={carbonPrice}
            onChange={(e) => setCarbonPrice(Number(e.target.value))}
            className="w-full h-3 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />

          <div className="flex flex-wrap justify-between text-xs font-mono text-emerald-300/80 gap-2">
            <button 
              onClick={() => setCarbonPrice(250)}
              className={`px-2.5 py-1 rounded-lg border transition-colors ${carbonPrice === 250 ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold' : 'border-emerald-800 hover:border-emerald-600'}`}
            >
              ₹250 (Conservative Floor)
            </button>
            <button 
              onClick={() => setCarbonPrice(600)}
              className={`px-2.5 py-1 rounded-lg border transition-colors ${carbonPrice === 600 ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold' : 'border-emerald-800 hover:border-emerald-600'}`}
            >
              ₹600 (India Domestic VCM)
            </button>
            <button 
              onClick={() => setCarbonPrice(1000)}
              className={`px-2.5 py-1 rounded-lg border transition-colors ${carbonPrice === 1000 ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold' : 'border-emerald-800 hover:border-emerald-600'}`}
            >
              ₹1,000 (CORSIA Benchmark)
            </button>
            <button 
              onClick={() => setCarbonPrice(1500)}
              className={`px-2.5 py-1 rounded-lg border transition-colors ${carbonPrice === 1500 ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold' : 'border-emerald-800 hover:border-emerald-600'}`}
            >
              ₹1,500 (Verra / High-Integrity Methane)
            </button>
          </div>
        </div>

        {/* Dynamic Impact Readout Bar */}
        <div className="mt-6 pt-6 border-t border-emerald-800/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-2xl bg-forest-900/60 border border-emerald-700/30">
            <div className="text-[11px] text-emerald-300 font-medium">Carbon Credit Revenue</div>
            <div className="text-xl font-bold font-mono text-white mt-1">
              ₹{econ.creditRevenueLakhs} L <span className="text-xs text-emerald-400">/ yr</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-forest-900/60 border border-emerald-700/30">
            <div className="text-[11px] text-emerald-300 font-medium">Total Plant Revenue</div>
            <div className="text-xl font-bold font-mono text-amber-300 mt-1">
              ₹{econ.totalWithCredits} L <span className="text-xs text-amber-400">/ yr</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-forest-900/60 border border-emerald-700/30">
            <div className="text-[11px] text-emerald-300 font-medium">Break-Even Point</div>
            <div className="text-xl font-bold font-mono text-white mt-1">
              {econ.breakEvenTonnesWith} t <span className="text-xs text-emerald-400 font-normal">({econ.breakEvenPctWith}%)</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-forest-900/60 border border-emerald-700/30">
            <div className="text-[11px] text-emerald-300 font-medium">CapEx Payback</div>
            <div className="text-xl font-bold font-mono text-white mt-1">
              {econ.paybackYears} yrs
            </div>
          </div>
        </div>
      </div>

      {/* Revenue Split Breakdown & Break-Even Gauge Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Revenue Split Donut / Multi-Bar Breakdown */}
        <div className="lg:col-span-6 bg-white dark:bg-forest-card p-6 sm:p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Unit Economics Streams
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                  Revenue Split Breakdown
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-forest-900 px-2.5 py-1 rounded-xl">
                ₹{econ.totalWithCredits} Lakhs Total
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Unlike single-revenue waste companies, Bioloop captures value at gate-in, energy-out, fertiliser-out, and digital credit issuance.
            </p>

            {/* Visual Multi-Segment Revenue Bar */}
            <div className="h-6 w-full rounded-2xl overflow-hidden flex shadow-inner p-0.5 bg-slate-100 dark:bg-forest-900 mb-6">
              <div 
                style={{ width: `${econ.shares.collectionPct}%` }}
                className="h-full bg-emerald-700 transition-all duration-300 rounded-l-xl"
                title={`Collection Fees: ₹${econ.collectionLakhs}L (${econ.shares.collectionPct}%)`}
              ></div>
              <div 
                style={{ width: `${econ.shares.biogasPct}%` }}
                className="h-full bg-amber-500 transition-all duration-300"
                title={`Biogas Sales: ₹${econ.biogasLakhs}L (${econ.shares.biogasPct}%)`}
              ></div>
              <div 
                style={{ width: `${econ.shares.creditPct}%` }}
                className="h-full bg-cyan-600 transition-all duration-300"
                title={`Carbon Credits: ₹${econ.creditRevenueLakhs}L (${econ.shares.creditPct}%)`}
              ></div>
              <div 
                style={{ width: `${econ.shares.fertiliserPct}%` }}
                className="h-full bg-lime-500 transition-all duration-300 rounded-r-xl"
                title={`Fertiliser: ₹${econ.fertiliserLakhs}L (${econ.shares.fertiliserPct}%)`}
              ></div>
            </div>

            {/* 4 Item Breakdown List */}
            <div className="space-y-3">
              {/* Stream 1 */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-forest-900/40 border border-slate-100 dark:border-emerald-800/30">
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-lg bg-emerald-700 flex-shrink-0"></span>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Collection Fees (₹1.5/kg)</div>
                    <div className="text-[10px] text-slate-400">Guaranteed institutional service retainer</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold font-mono text-slate-900 dark:text-white">₹{econ.collectionLakhs}L</div>
                  <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">{econ.shares.collectionPct}%</div>
                </div>
              </div>

              {/* Stream 2 */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-forest-900/40 border border-slate-100 dark:border-emerald-800/30">
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-lg bg-amber-500 flex-shrink-0"></span>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Biogas (LPG Equivalent)</div>
                    <div className="text-[10px] text-slate-400">Offloaded to canteens & kitchens @ ₹50/kg eq</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold font-mono text-slate-900 dark:text-white">₹{econ.biogasLakhs}L</div>
                  <div className="text-[10px] font-mono text-amber-600 dark:text-amber-400 font-bold">{econ.shares.biogasPct}%</div>
                </div>
              </div>

              {/* Stream 3 */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-forest-900/40 border border-slate-100 dark:border-emerald-800/30">
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-lg bg-cyan-600 flex-shrink-0"></span>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Carbon Credits (MRV Verified)</div>
                    <div className="text-[10px] text-slate-400">440 tCO₂e issued annually via Verra methodology</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold font-mono text-slate-900 dark:text-white">₹{econ.creditRevenueLakhs}L</div>
                  <div className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold">{econ.shares.creditPct}%</div>
                </div>
              </div>

              {/* Stream 4 */}
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-forest-900/40 border border-slate-100 dark:border-emerald-800/30">
                <div className="flex items-center gap-2.5">
                  <span className="w-3.5 h-3.5 rounded-lg bg-lime-500 flex-shrink-0"></span>
                  <div>
                    <div className="text-xs font-bold text-slate-900 dark:text-white">Liquid Bio-Fertiliser Slurry</div>
                    <div className="text-[10px] text-slate-400">Sold in bulk tankers to peri-urban farmers</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold font-mono text-slate-900 dark:text-white">₹{econ.fertiliserLakhs}L</div>
                  <div className="text-[10px] font-mono text-lime-600 dark:text-lime-400 font-bold">{econ.shares.fertiliserPct}%</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-emerald-800/40 text-[11px] text-slate-400">
            High gross margin product mix (~68% contribution margin post-logistics).
          </div>
        </div>

        {/* Break-Even Capacity Gauge Card */}
        <div className="lg:col-span-6 bg-white dark:bg-forest-card p-6 sm:p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Risk & Downside Defense
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">
                  Break-Even Plant Utilization
                </h3>
              </div>
              <Gauge className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Compare required annual throughput capacity to break even with vs. without digital carbon credits.
            </p>

            {/* Visual Gauge Comparison */}
            <div className="space-y-6">
              {/* Gauge 1: With Credits */}
              <div className="p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300">
                    With Carbon Credits (Active Model)
                  </span>
                  <span className="text-sm font-extrabold font-mono text-emerald-600 dark:text-emerald-400">
                    {econ.breakEvenTonnesWith} t/yr · {econ.breakEvenPctWith}% Capacity
                  </span>
                </div>

                <div className="h-4 bg-emerald-200/50 dark:bg-forest-900 rounded-full overflow-hidden p-0.5">
                  <div 
                    className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: `${econ.breakEvenPctWith}%` }}
                  ></div>
                </div>

                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1.5">
                  <span>0 t</span>
                  <span className="font-bold text-emerald-600">Break-even at {econ.breakEvenTonnesWith} t</span>
                  <span>910 t (100%)</span>
                </div>
                <div className="text-[11px] text-emerald-700 dark:text-emerald-300/80 mt-2 font-medium">
                  ✓ Safety Buffer: <strong className="font-mono">{910 - econ.breakEvenTonnesWith} tonnes ({100 - econ.breakEvenPctWith}%)</strong> of headroom
                </div>
              </div>

              {/* Gauge 2: Without Credits */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-forest-900/40 border border-slate-200 dark:border-emerald-800/40">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Without Carbon Credits (Gate + Energy only)
                  </span>
                  <span className="text-sm font-extrabold font-mono text-slate-800 dark:text-slate-200">
                    {econ.breakEvenTonnesWithout} t/yr · {econ.breakEvenPctWithout}% Capacity
                  </span>
                </div>

                <div className="h-4 bg-slate-200 dark:bg-forest-900 rounded-full overflow-hidden p-0.5">
                  <div 
                    className="h-full bg-amber-500 rounded-full transition-all duration-500"
                    style={{ width: `${econ.breakEvenPctWithout}%` }}
                  ></div>
                </div>

                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1.5">
                  <span>0 t</span>
                  <span className="font-bold text-slate-600 dark:text-slate-300">Break-even at {econ.breakEvenTonnesWithout} t</span>
                  <span>910 t (100%)</span>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                  Even with zero carbon revenue, plant operations achieve profitability at 71% capacity.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-emerald-800/40 text-[11px] text-slate-400">
            Fixed OpEx: ₹18.2 Lakhs/year (electric vehicle lease, 2 operators, power & maintenance).
          </div>
        </div>
      </div>

      {/* Scale Roadmap: 1 Pilot Plant -> 5 Plants -> Shared CBG Hub */}
      <div className="bg-white dark:bg-forest-card p-6 sm:p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Expansion Strategy
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading mt-1">
              Bengaluru Scale Roadmap
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">* 36-Month Capital Deployment</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FINANCIAL_BASE.roadmap.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedRoadmapIdx(idx)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                idx === 0
                  ? 'bg-emerald-50/70 dark:bg-emerald-950/50 border-emerald-400 ring-2 ring-emerald-500/20 shadow-md'
                  : 'bg-slate-50/70 dark:bg-forest-900/40 border-slate-200 dark:border-emerald-800/40 hover:border-emerald-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase font-mono ${
                  item.status === 'Operational'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-200 dark:bg-forest-800 text-slate-700 dark:text-slate-300'
                }`}>
                  {item.status}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  {item.scale}
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-900 dark:text-white font-heading">
                {item.stage}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4">
                {item.metrics}
              </p>

              <div className="space-y-2 pt-3 border-t border-slate-200/60 dark:border-emerald-800/40 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Waste Diverted:</span>
                  <span className="font-mono font-bold text-slate-900 dark:text-white">{item.divertedYear}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Annual Revenue:</span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">{item.revenueYear}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">CapEx Required:</span>
                  <span className="font-mono font-bold text-slate-700 dark:text-slate-300">{item.capex}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
