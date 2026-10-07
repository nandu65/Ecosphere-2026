import React from 'react';
import { motion } from 'framer-motion';
import { PROBLEM_DATA, ABOUT_WHAT_WE_ARE, PILOT_STATS, FOUNDERS } from '../content';
import { AlertOctagon, TrendingDown, Flame, Leaf, ShieldAlert, CheckCircle2, User, Globe, ArrowUpRight } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream text-charcoal relative">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* ========================================================
            PART 1: THE BENGALURU CRISIS / THE PROBLEM
        ======================================================== */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber/20 text-amber-dark border border-amber/30 uppercase tracking-wider">
              <AlertOctagon className="w-3.5 h-3.5" />
              The Market Bottleneck
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-charcoal mt-3">
              Bengaluru's Bulk Food Waste Crisis
            </h2>
            <p className="mt-3 text-base sm:text-lg text-charcoal-muted leading-relaxed">
              Urban kitchens face an unsustainable dual penalty: paying steep fees to haul waste, then paying soaring rates for commercial LPG.
            </p>
          </div>

          {/* 3 Key Problem Fact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Fact 1 */}
            <div className="p-8 rounded-3xl bg-white border border-cream-border shadow-sm card-hover-effect flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-dark font-mono">
                    Daily Waste Load
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-amber/15 text-amber-dark flex items-center justify-center font-bold">
                    <TrendingDown className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold font-heading text-charcoal font-mono">
                  {PROBLEM_DATA.bengaluruDailyBulkWasteTonnes} <span className="text-lg font-sans font-bold text-charcoal-muted">t/day</span>
                </div>
                <h3 className="text-base font-bold text-charcoal mt-2">
                  Bulk Food Waste Generated Daily
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Produced across tech parks, hostels, university messes, hotels, and large apartment complexes in Bengaluru.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-cream-border text-xs text-charcoal-muted font-mono">
                Source: BBMP Bulk Generator Baseline
              </div>
            </div>

            {/* Fact 2 */}
            <div className="p-8 rounded-3xl bg-white border border-cream-border shadow-sm card-hover-effect flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-red-600 font-mono">
                    Severe Capacity Deficit
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold font-heading text-charcoal font-mono">
                  ~{PROBLEM_DATA.empanelledCapacityTonnes} <span className="text-lg font-sans font-bold text-charcoal-muted">t/day</span>
                </div>
                <h3 className="text-base font-bold text-charcoal mt-2">
                  Only 4 Empanelled Vendors Active
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Current authorized capacity handles barely 30% of daily bulk waste. Over 1,000 tonnes/day spills over to unmanaged landfills.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-cream-border text-xs text-charcoal-muted font-mono">
                Capacity gap: ~1,050 t/day unaddressed
              </div>
            </div>

            {/* Fact 3 */}
            <div className="p-8 rounded-3xl bg-white border border-cream-border shadow-sm card-hover-effect flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-forest font-mono">
                    Double Penalty on Kitchens
                  </span>
                  <div className="w-10 h-10 rounded-2xl bg-leaf/20 text-forest flex items-center justify-center font-bold">
                    <Flame className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold font-heading text-charcoal font-mono">
                  Up to ₹12 <span className="text-lg font-sans font-bold text-charcoal-muted">/ kg</span>
                </div>
                <h3 className="text-base font-bold text-charcoal mt-2">
                  Disposal Cost + Fossil LPG Bills
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Kitchens pay municipal vendors up to ₹12/kg to haul scraps away, while concurrently buying expensive fossil LPG cylinders for daily cooking.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-cream-border text-xs text-charcoal-muted font-mono">
                Methane leakage at landfill + high fuel costs
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 2: "WHAT ARE WE?" (BIOLOOP SOLUTION)
        ======================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-forest-dark text-cream relative overflow-hidden shadow-2xl">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-leaf/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-leaf/20 text-leaf-light border border-leaf/30 uppercase tracking-wider mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" />
              The Bioloop Solution
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              {ABOUT_WHAT_WE_ARE.title}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-cream/90 leading-relaxed">
              {ABOUT_WHAT_WE_ARE.summary}
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {ABOUT_WHAT_WE_ARE.keyPillars.map((pillar, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-forest border border-forest-border">
                  <span className="text-amber font-mono font-bold text-sm block mb-1">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-base font-bold text-white font-heading">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-cream/75 mt-2 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 3: ANIMATED STAT STRIP (Pilot Estimates)
        ======================================================== */}
        <div className="p-8 rounded-3xl bg-white border border-cream-border shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-cream-border">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-leaf-dark font-mono">
                Pilot Plant Telemetry & Capacity
              </span>
              <h3 className="text-xl font-bold font-heading text-charcoal mt-0.5">
                Singasandra Pilot Facility Estimates
              </h3>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cream text-charcoal-muted border border-cream-border font-medium">
              * {PILOT_STATS.label}
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {/* Stat 1 */}
            <div className="p-4 rounded-2xl bg-cream/60 border border-cream-border">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-charcoal">
                {PILOT_STATS.pilotCapacityTPD} <span className="text-sm font-sans font-bold text-leaf-dark">t / day</span>
              </div>
              <div className="text-xs font-bold text-charcoal mt-1">Pilot Capacity</div>
              <div className="text-[11px] text-charcoal-muted mt-0.5">Continuous mesophilic feed</div>
            </div>

            {/* Stat 2 */}
            <div className="p-4 rounded-2xl bg-cream/60 border border-cream-border">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-charcoal">
                ~{PILOT_STATS.pilotAnnualWasteTonnes} <span className="text-sm font-sans font-bold text-leaf-dark">t / yr</span>
              </div>
              <div className="text-xs font-bold text-charcoal mt-1">Waste Diverted</div>
              <div className="text-[11px] text-charcoal-muted mt-0.5">Zero methane to landfill</div>
            </div>

            {/* Stat 3 */}
            <div className="p-4 rounded-2xl bg-cream/60 border border-cream-border">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-amber-dark">
                ~{PILOT_STATS.pilotAnnualBiogasLpgEqTonnes} <span className="text-sm font-sans font-bold text-charcoal">t / yr</span>
              </div>
              <div className="text-xs font-bold text-charcoal mt-1">LPG-Equivalent Clean Fuel</div>
              <div className="text-[11px] text-charcoal-muted mt-0.5">25 kg LPG-eq per tonne waste</div>
            </div>

            {/* Stat 4 */}
            <div className="p-4 rounded-2xl bg-cream/60 border border-cream-border">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-forest">
                ~{PILOT_STATS.pilotAnnualCarbonCredits} <span className="text-sm font-sans font-bold text-leaf-dark">tCO₂e / yr</span>
              </div>
              <div className="text-xs font-bold text-charcoal mt-1">Verified Carbon Credits</div>
              <div className="text-[11px] text-charcoal-muted mt-0.5">0.484 tCO₂e avoided per tonne</div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 4: FOUNDERS & LEADERSHIP TEAM
        ======================================================== */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-forest font-mono">
              Leadership & Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-charcoal mt-1">
              Meet the Team
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
              Engineered by specialists across urban circular waste, biochemical anaerobic digestion, and carbon finance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FOUNDERS.map((founder, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-cream-border shadow-sm card-hover-effect flex flex-col justify-between"
              >
                <div>
                  {/* Avatar Placeholder Initial Circle */}
                  <div className="w-16 h-16 rounded-2xl bg-forest-dark text-leaf-light font-heading font-extrabold text-xl flex items-center justify-center border-2 border-leaf shadow-md mb-4">
                    {founder.initials}
                  </div>

                  <h3 className="text-base font-bold font-heading text-charcoal">
                    {founder.name}
                  </h3>
                  <div className="text-xs font-semibold text-leaf-dark mt-0.5">
                    {founder.role}
                  </div>
                  <p className="text-xs text-charcoal-muted mt-3 leading-relaxed">
                    {founder.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-cream-border flex items-center justify-between text-xs font-mono text-charcoal-muted">
                  <span>Founder Card {idx + 1}</span>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-forest hover:text-leaf flex items-center gap-1 transition-colors font-semibold"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Bio Profile</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
