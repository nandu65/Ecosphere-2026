import React, { useState } from 'react';
import { PRODUCTS_SERVICES } from '../content';
import { Truck, Flame, Leaf, ShieldCheck, Sliders, Sparkles, Scale, Droplets, ArrowRight } from 'lucide-react';

export default function ProductsServices() {
  const [tonnesPerDay, setTonnesPerDay] = useState(2.5);

  const iconMap = {
    Truck: Truck,
    Flame: Flame,
    Leaf: Leaf,
    ShieldCheck: ShieldCheck,
  };

  // 1. Waste diverted = tonnes/day * 364
  const annualWasteTonnes = Math.round(tonnesPerDay * 364);

  // 2. LPG-equivalent biogas = 25 kg per tonne of waste
  const annualLpgEqTonnes = Number(((annualWasteTonnes * 25) / 1000).toFixed(2));
  const annualLpgEqKg = Math.round(annualWasteTonnes * 25);

  // 3. Slurry = ~0.1 tonne per tonne of waste
  const annualSlurryTonnes = Number((annualWasteTonnes * 0.1).toFixed(1));

  // 4. Estimated carbon credits = ~0.48 per tonne of waste
  const annualCarbonCredits = Math.round(annualWasteTonnes * 0.48);

  // Loop spin duration speeds up with higher tonnage input
  const loopSpinDuration = Math.max(0.8, 8 / (tonnesPerDay / 2));

  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-forest-dark text-cream relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-leaf/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {/* ========================================================
            PART 1: 4 PRODUCTS / SERVICES CARDS
        ======================================================== */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-leaf/20 text-leaf-light border border-leaf/30 uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Core Offerings
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white mt-3 tracking-tight">
              Products & Services
            </h2>
            <p className="mt-3 text-base sm:text-lg text-cream/80 leading-relaxed max-w-2xl mx-auto">
              Converting institutional kitchen waste into clean cooking fuel, enriched organic fertiliser, and verifiable carbon assets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS_SERVICES.map((prod, idx) => {
              const Icon = iconMap[prod.icon] || Flame;
              return (
                <div
                  key={prod.id}
                  className="group p-8 rounded-3xl bg-forest-card/90 border border-forest-border hover:border-leaf/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden backdrop-blur-md"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-leaf/10 to-transparent rounded-bl-full pointer-events-none transition-transform group-hover:scale-125" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-forest-dark text-leaf-light flex items-center justify-center font-bold border border-forest-border shadow-md group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-forest text-amber border border-forest-border shadow-sm">
                        {prod.highlight}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-leaf-light transition-colors">
                      {prod.title}
                    </h3>
                    <div className="text-xs font-semibold text-leaf-light mt-1.5 font-mono">
                      {prod.tagline}
                    </div>

                    <p className="text-xs sm:text-sm text-cream/75 mt-3.5 leading-relaxed">
                      {prod.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-forest-border flex items-center justify-between text-[11px] font-mono text-cream/60">
                    <span>Offering 0{idx + 1}</span>
                    <span className="text-leaf-light">Estimates (2.5 TPD)</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            PART 2: BIOLOOP IMPACT CALCULATOR (LIVE DEMO)
        ======================================================== */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-forest to-forest-card border border-forest-border shadow-2xl space-y-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-amber/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-forest-border relative z-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber font-mono flex items-center gap-2">
                <Sliders className="w-4 h-4" />
                Live Demo Simulation
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white mt-1.5 tracking-tight">
                BioLoop Impact Calculator
              </h3>
              <p className="text-xs sm:text-sm text-cream/80 mt-1">
                Adjust the daily waste tonnage to compute annual clean fuel, slurry, and carbon credit estimates.
              </p>
            </div>
            <span className="text-xs font-mono px-4 py-1.5 rounded-full bg-forest-dark text-leaf-light border border-forest-border font-bold shadow-md self-start sm:self-auto">
              * All figures labeled estimates
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Column: Tonnage Slider + Speed Loop Graphic */}
            <div className="lg:col-span-5 p-7 rounded-3xl bg-forest-dark/95 border border-forest-border shadow-xl space-y-6">
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xs font-semibold text-cream/80">
                    Daily Waste Feedstock
                  </span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-4xl font-extrabold font-mono text-amber">
                      {tonnesPerDay}
                    </span>
                    <span className="text-sm font-bold text-cream/70">tonnes / day</span>
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

                <div className="flex justify-between text-[11px] font-mono text-cream/60 mt-2.5">
                  <span>0.5 t/d (Min)</span>
                  <span className="text-leaf-light font-bold">2.5 t/d (Default)</span>
                  <span>50 t/d (Max)</span>
                </div>
              </div>

              {/* Animated loop graphic that speeds up with slider */}
              <div className="p-5 rounded-2xl bg-forest border border-forest-border flex items-center gap-5 shadow-inner">
                <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full drop-shadow-md"
                    style={{ animation: `spin ${loopSpinDuration}s linear infinite` }}
                  >
                    <circle cx="50" cy="50" r="40" stroke="#1E4D36" strokeWidth="6" fill="none" />
                    <path
                      d="M 50,10 A 40,40 0 0,1 90,50"
                      stroke="#F5A524"
                      strokeWidth="8"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M 50,90 A 40,40 0 0,1 10,50"
                      stroke="#3FAE6A"
                      strokeWidth="8"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <Flame className="w-5 h-5 text-amber absolute animate-pulse" />
                </div>

                <div>
                  <div className="text-sm font-bold text-white font-heading">
                    Dynamic Conversion Speed
                  </div>
                  <div className="text-xs text-cream/70 font-mono mt-0.5">
                    Speed multiplier: {(50 / tonnesPerDay).toFixed(1)}x nominal rate
                  </div>
                  <div className="text-[11px] text-leaf-light font-mono mt-1">
                    Continuous methane destruction
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Live Annual Outputs */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* 1. Waste Diverted */}
              <div className="p-6 rounded-3xl bg-forest-dark border border-forest-border shadow-md hover:border-leaf/40 transition-all">
                <div className="text-[11px] font-mono uppercase text-leaf-light font-bold flex items-center gap-2">
                  <Scale className="w-4 h-4" />
                  <span>Waste Diverted (Estimate)</span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white mt-2.5">
                  {annualWasteTonnes.toLocaleString('en-IN')} <span className="text-xs font-sans font-bold text-leaf-light">t / yr</span>
                </div>
                <div className="text-xs text-cream/60 mt-1.5 font-mono">
                  {tonnesPerDay} t/day × 364 days
                </div>
              </div>

              {/* 2. LPG-Equivalent Biogas */}
              <div className="p-6 rounded-3xl bg-forest-dark border border-forest-border shadow-md hover:border-amber/40 transition-all">
                <div className="text-[11px] font-mono uppercase text-amber font-bold flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  <span>Biogas Produced (Estimate)</span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber mt-2.5">
                  {annualLpgEqTonnes} <span className="text-xs font-sans font-bold text-cream">t LPG-eq / yr</span>
                </div>
                <div className="text-xs text-cream/60 mt-1.5 font-mono">
                  {annualLpgEqKg.toLocaleString('en-IN')} kg (25 kg/t waste)
                </div>
              </div>

              {/* 3. Slurry Produced */}
              <div className="p-6 rounded-3xl bg-forest-dark border border-forest-border shadow-md hover:border-leaf/40 transition-all">
                <div className="text-[11px] font-mono uppercase text-leaf-light font-bold flex items-center gap-2">
                  <Droplets className="w-4 h-4" />
                  <span>Organic Slurry (Estimate)</span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white mt-2.5">
                  ~{annualSlurryTonnes} <span className="text-xs font-sans font-bold text-leaf-light">t / yr</span>
                </div>
                <div className="text-xs text-cream/60 mt-1.5 font-mono">
                  ~0.1 tonne slurry / tonne waste
                </div>
              </div>

              {/* 4. Estimated Carbon Credits */}
              <div className="p-6 rounded-3xl bg-forest-dark border border-forest-border shadow-md hover:border-cyan-400/40 transition-all">
                <div className="text-[11px] font-mono uppercase text-cyan-400 font-bold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Carbon Credits (Estimate)</span>
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan-300 mt-2.5">
                  ~{annualCarbonCredits.toLocaleString('en-IN')} <span className="text-xs font-sans font-bold text-cream">credits / yr</span>
                </div>
                <div className="text-xs text-cream/60 mt-1.5 font-mono">
                  ~0.48 credits/t (once verified)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
