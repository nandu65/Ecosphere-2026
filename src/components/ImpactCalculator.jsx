import React, { useState } from 'react';
import { Sliders, Flame, Leaf, ShieldCheck, Zap, ArrowRight, RotateCw, Sparkles } from 'lucide-react';

export default function ImpactCalculator() {
  const [tonnesPerDay, setTonnesPerDay] = useState(2.5);

  // Calculations:
  const annualWasteTonnes = Math.round(tonnesPerDay * 365);
  
  // 1. LPG-equivalent produced per year: 25 kg per tonne of waste
  const annualLpgEqKg = Math.round(annualWasteTonnes * 25);
  const annualLpgEqTonnes = (annualLpgEqKg / 1000).toFixed(2);

  // 2. Carbon credits: ~0.4835 credits per tonne of waste per year (440 credits for 910 t)
  const annualCarbonCredits = Math.round(annualWasteTonnes * (440 / 910));

  // 3. Annual revenues by stream:
  // Collection @ ₹1.5/kg -> ₹1,500 / tonne
  const collectionRevenueLakhs = Number(((annualWasteTonnes * 1000 * 1.5) / 100000).toFixed(2));

  // Biogas @ ₹50 per kg LPG-eq -> 25 kg * ₹50 = ₹1,250 / tonne
  const biogasRevenueLakhs = Number(((annualLpgEqKg * 50) / 100000).toFixed(2));

  // Carbon credits @ ₹1,500 / credit
  const carbonRevenueLakhs = Number(((annualCarbonCredits * 1500) / 100000).toFixed(2));

  // Fertiliser @ ~₹1.8L for 2.5 TPD basis (~₹197.8 / tonne)
  const fertiliserRevenueLakhs = Number(((annualWasteTonnes * 197.8) / 100000).toFixed(2));

  const totalWithCreditsLakhs = Number((collectionRevenueLakhs + biogasRevenueLakhs + carbonRevenueLakhs + fertiliserRevenueLakhs).toFixed(2));
  const totalWithoutCreditsLakhs = Number((collectionRevenueLakhs + biogasRevenueLakhs + fertiliserRevenueLakhs).toFixed(2));

  // Spin speed calculated dynamically: higher waste -> faster loop animation
  const spinDuration = Math.max(1.2, 12 / (tonnesPerDay / 2));

  return (
    <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-forest-dark text-cream relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber/20 text-amber border border-amber/30 uppercase tracking-wider mb-3">
            <Sliders className="w-3.5 h-3.5" />
            Interactive Scale Simulator
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            Bioloop Impact Calculator
          </h2>
          <p className="mt-3 text-base sm:text-lg text-cream/80 leading-relaxed">
            Drag the slider to project clean energy generation, carbon credit volume, and unit revenue at any scale from 0.5 to 50 tonnes/day.
          </p>
        </div>

        {/* Main Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive Slider & Animated Loop Speed Graphic */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-forest-card border border-forest-border shadow-xl space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-leaf-light font-mono">
                  Input Parameter
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-forest-dark text-amber border border-forest-border">
                  Daily Throughput
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-forest-dark/80 border border-forest-border">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xs font-semibold text-cream/70">
                    Food Waste Processed
                  </span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold font-mono text-amber">
                      {tonnesPerDay}
                    </span>
                    <span className="text-sm font-bold text-cream/70">tonnes/day</span>
                  </div>
                </div>

                <input
                  type="range"
                  min="0.5"
                  max="50"
                  step="0.5"
                  value={tonnesPerDay}
                  onChange={(e) => setTonnesPerDay(Number(e.target.value))}
                  className="w-full h-3 bg-forest rounded-lg appearance-none cursor-pointer accent-amber"
                />

                <div className="flex justify-between text-[11px] font-mono text-cream/60 mt-2">
                  <span>0.5 TPD (Hostel)</span>
                  <span className="text-leaf-light font-bold">2.5 TPD (Pilot)</span>
                  <span>50 TPD (Cluster Hub)</span>
                </div>
              </div>

              {/* Annual Waste Diverted Badge */}
              <div className="mt-4 p-4 rounded-2xl bg-forest border border-forest-border flex items-center justify-between text-xs">
                <span className="text-cream/80">Annual Waste Diverted:</span>
                <strong className="text-sm font-mono text-white font-bold">{annualWasteTonnes.toLocaleString('en-IN')} tonnes / year</strong>
              </div>
            </div>

            {/* Small Animated Loop Graphic that speeds up with slider */}
            <div className="p-6 rounded-2xl bg-forest-dark/90 border border-forest-border flex items-center gap-5">
              <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full"
                  style={{ animation: `spin ${spinDuration}s linear infinite` }}
                >
                  <circle cx="50" cy="50" r="42" stroke="#1E4D36" strokeWidth="6" fill="none" />
                  <path
                    d="M 50,8 A 42,42 0 0,1 92,50"
                    stroke="#F5A524"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M 50,92 A 42,42 0 0,1 8,50"
                    stroke="#3FAE6A"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <Flame className="w-5 h-5 text-amber absolute animate-pulse" />
              </div>

              <div>
                <div className="text-xs font-bold text-white font-heading">
                  Dynamic Circular Velocity
                </div>
                <div className="text-[11px] text-cream/70 mt-0.5 font-mono">
                  Cycle speed: {(50 / tonnesPerDay).toFixed(1)}x nominal rotation
                </div>
                <div className="text-[10px] text-leaf-light font-mono mt-1">
                  Higher throughput accelerates local carbon drawdown
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live-Updating Output Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Output 1: LPG-Equivalent Clean Fuel */}
            <div className="p-6 rounded-3xl bg-forest-card border border-forest-border shadow-md">
              <div className="flex items-center justify-between mb-3 text-xs text-amber font-mono font-bold uppercase">
                <span>Clean Biogas Fuel</span>
                <Flame className="w-4 h-4" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                {annualLpgEqKg.toLocaleString('en-IN')} <span className="text-sm font-sans font-bold text-amber">kg LPG-eq / yr</span>
              </div>
              <p className="text-xs text-cream/70 mt-2">
                Yield: <strong className="text-cream">25 kg LPG-eq</strong> per tonne of food waste ({annualLpgEqTonnes} tonnes/yr).
              </p>
              <div className="mt-4 pt-3 border-t border-forest-border text-[11px] text-cream/60 flex justify-between font-mono">
                <span>Biogas Revenue:</span>
                <strong className="text-amber">₹{biogasRevenueLakhs} Lakhs/yr</strong>
              </div>
            </div>

            {/* Output 2: Carbon Credits Avoided */}
            <div className="p-6 rounded-3xl bg-forest-card border border-forest-border shadow-md">
              <div className="flex items-center justify-between mb-3 text-xs text-cyan-400 font-mono font-bold uppercase">
                <span>Carbon Credits Issued</span>
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                ~{annualCarbonCredits.toLocaleString('en-IN')} <span className="text-sm font-sans font-bold text-cyan-300">credits / yr</span>
              </div>
              <p className="text-xs text-cream/70 mt-2">
                Factor: <strong className="text-cream">~0.48 credits</strong> per tonne of waste avoided from open rotting.
              </p>
              <div className="mt-4 pt-3 border-t border-forest-border text-[11px] text-cream/60 flex justify-between font-mono">
                <span>Credit Value (@ ₹1.5k):</span>
                <strong className="text-cyan-300">₹{carbonRevenueLakhs} Lakhs/yr</strong>
              </div>
            </div>

            {/* Output 3: Gate Collection Fee */}
            <div className="p-6 rounded-3xl bg-forest-card border border-forest-border shadow-md">
              <div className="flex items-center justify-between mb-3 text-xs text-leaf-light font-mono font-bold uppercase">
                <span>Collection Fee Retainer</span>
                <Leaf className="w-4 h-4" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white">
                ₹{collectionRevenueLakhs} <span className="text-sm font-sans font-bold text-leaf-light">Lakhs / yr</span>
              </div>
              <p className="text-xs text-cream/70 mt-2">
                Fee baseline: <strong className="text-cream">₹1.5 / kg</strong> charged to bulk kitchen waste generators.
              </p>
              <div className="mt-4 pt-3 border-t border-forest-border text-[11px] text-cream/60 flex justify-between font-mono">
                <span>Share of revenue:</span>
                <strong className="text-leaf-light">~41% guaranteed base</strong>
              </div>
            </div>

            {/* Output 4: Total Annual Plant Revenue */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-forest-card to-forest border-2 border-amber/40 shadow-xl">
              <div className="flex items-center justify-between mb-3 text-xs text-amber font-mono font-bold uppercase">
                <span>Total Annual Gross Revenue</span>
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber">
                ₹{totalWithCreditsLakhs} <span className="text-sm font-sans font-bold text-cream">Lakhs / yr</span>
              </div>
              <p className="text-xs text-cream/80 mt-2">
                Combines gate fees, cooking gas sales, bio-fertiliser (₹{fertiliserRevenueLakhs}L), and carbon credits.
              </p>
              <div className="mt-4 pt-3 border-t border-forest-border text-[11px] text-cream/60 flex justify-between font-mono">
                <span>Without carbon credits:</span>
                <strong className="text-cream">₹{totalWithoutCreditsLakhs} Lakhs/yr</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Global Estimate Label Notice */}
        <div className="text-center text-xs text-cream/60 font-mono">
          * All figures are our engineering and economic model estimates based on Bengaluru market assumptions.
        </div>
      </div>
    </section>
  );
}
