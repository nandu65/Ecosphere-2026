import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROBLEM_DATA, ABOUT_WHAT_WE_ARE, STAT_STRIP_DATA, IMPACT_AT_SCALE, FOUNDERS_DATA } from '../content';
import { AlertOctagon, Flame, Leaf, ShieldAlert, CheckCircle2, TrendingUp, Layers, Users, ArrowRight, Sparkles } from 'lucide-react';

export default function HomepageAbout() {
  const [activeScaleIndex, setActiveScaleIndex] = useState(0);
  const activeScale = IMPACT_AT_SCALE.tiers[activeScaleIndex];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-cream text-charcoal relative overflow-hidden">
      {/* Subtle organic background motifs */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-leaf/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {/* ========================================================
            PART 1: THE PROBLEM
        ======================================================== */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber/20 text-amber-dark border border-amber/30 uppercase tracking-wider shadow-sm">
              <AlertOctagon className="w-3.5 h-3.5" />
              The Waste Dilemma
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-charcoal mt-3 tracking-tight">
              {PROBLEM_DATA.heading}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-2xl mx-auto">
              {PROBLEM_DATA.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {PROBLEM_DATA.points.map((pt, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-white border border-cream-border hover:border-amber/50 shadow-sm hover:shadow-xl transition-all duration-300 card-hover-effect flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber/5 to-transparent rounded-bl-full pointer-events-none transition-transform group-hover:scale-125" />
                
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber/20 to-amber/5 text-amber-dark flex items-center justify-center font-bold mb-6 border border-amber/20 shadow-sm group-hover:scale-110 transition-transform">
                    {idx === 0 ? <ShieldAlert className="w-7 h-7" /> : idx === 1 ? <TrendingUp className="w-7 h-7" /> : <Flame className="w-7 h-7" />}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-charcoal group-hover:text-forest transition-colors">
                    {pt.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-cream-border flex items-center justify-between text-xs font-mono text-amber-dark font-semibold">
                  <span>Challenge 0{idx + 1}</span>
                  <span className="text-[10px] text-charcoal-muted font-normal">Unresolved in dumps</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            PART 2: WHAT ARE WE? (CORE EXPLANATION)
        ======================================================== */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-forest-dark via-forest to-forest-dark text-cream relative overflow-hidden shadow-2xl border border-forest-border">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-leaf/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-leaf/20 text-leaf-light border border-leaf/30 uppercase tracking-wider shadow-md">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Core Closed Loop
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              {ABOUT_WHAT_WE_ARE.title}
            </h2>

            <p className="text-base sm:text-xl text-cream/90 leading-relaxed font-normal">
              {ABOUT_WHAT_WE_ARE.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {ABOUT_WHAT_WE_ARE.flowSteps.map((st) => (
                <div key={st.step} className="group p-5 rounded-2xl bg-forest-card/80 hover:bg-forest border border-forest-border hover:border-leaf/50 transition-all flex flex-col justify-between shadow-md">
                  <div>
                    <span className="w-7 h-7 rounded-xl bg-leaf/20 text-leaf-light font-mono font-bold text-xs flex items-center justify-center mb-3 border border-leaf/30 group-hover:scale-110 transition-transform">
                      {st.step}
                    </span>
                    <h4 className="text-base font-bold text-white font-heading">{st.title}</h4>
                    <p className="text-xs text-cream/75 mt-2 leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 3: ANIMATED STAT STRIP
        ======================================================== */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-cream-border shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-cream-border">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-leaf-dark font-mono flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Baseline Plant Yields
              </span>
              <h3 className="text-2xl font-bold font-heading text-charcoal mt-1">
                {STAT_STRIP_DATA.title}
              </h3>
            </div>
            <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-cream text-charcoal-muted border border-cream-border font-medium shadow-sm">
              * Engineering Estimates
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
            {STAT_STRIP_DATA.stats.map((st, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gradient-to-b from-cream/80 to-cream/40 border border-cream-border flex flex-col justify-between hover:border-leaf/40 transition-all hover:shadow-md">
                <div>
                  <div className="text-4xl font-extrabold font-mono text-charcoal tracking-tight">
                    {st.value} <span className="text-xs font-sans font-bold text-leaf-dark block sm:inline mt-1 sm:mt-0">{st.unit}</span>
                  </div>
                  <div className="text-sm font-bold text-charcoal mt-2.5 font-heading">{st.label}</div>
                </div>
                <div className="text-xs text-charcoal-muted mt-3 font-mono border-t border-cream-border/80 pt-2.5">
                  {st.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            PART 4: IMPACT AT SCALE (1 → 5 → 20 Plants)
            * Stating 20x capacity growth (2.5 to 50 t/day), NOT 10x!
        ======================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-forest-dark text-cream border border-forest-border shadow-2xl space-y-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-forest-border">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber font-mono">
                Expansion Trajectory
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white mt-1">
                Impact at Scale
              </h3>
              <p className="text-xs sm:text-sm text-leaf-light font-mono mt-1 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-leaf animate-pulse" />
                <span>{IMPACT_AT_SCALE.growthNote}</span>
              </p>
            </div>

            {/* Toggle buttons between 1, 5, 20 plants */}
            <div className="flex items-center gap-2 bg-forest p-1.5 rounded-2xl border border-forest-border shadow-inner">
              {IMPACT_AT_SCALE.tiers.map((tier, idx) => (
                <button
                  key={tier.id}
                  onClick={() => setActiveScaleIndex(idx)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activeScaleIndex === idx
                      ? 'bg-gradient-to-r from-amber to-amber-glow text-forest-dark shadow-md scale-105'
                      : 'text-cream/80 hover:bg-forest-card hover:text-white'
                  }`}
                >
                  {tier.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Scale Readout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-forest border border-forest-border shadow-md">
              <div className="text-xs font-mono text-cream/70 uppercase">Daily Capacity</div>
              <div className="text-4xl font-extrabold font-mono text-amber mt-2">
                {activeScale.capacityLabel}
              </div>
              <div className="text-xs text-leaf-light font-mono mt-1.5 font-semibold">{activeScale.scaleMultiplier}</div>
            </div>

            <div className="p-6 rounded-2xl bg-forest border border-forest-border shadow-md">
              <div className="text-xs font-mono text-cream/70 uppercase">Annual Waste Diverted</div>
              <div className="text-4xl font-extrabold font-mono text-white mt-2">
                {activeScale.wasteDivertedYear}
              </div>
              <div className="text-xs text-cream/60 mt-1.5">Food waste kept from dumps</div>
            </div>

            <div className="p-6 rounded-2xl bg-forest border border-forest-border shadow-md">
              <div className="text-xs font-mono text-cream/70 uppercase">Biogas Produced</div>
              <div className="text-4xl font-extrabold font-mono text-leaf-light mt-2">
                {activeScale.biogasLpgEqYear}
              </div>
              <div className="text-xs text-cream/60 mt-1.5">LPG-equivalent cooking fuel</div>
            </div>

            <div className="p-6 rounded-2xl bg-forest border border-forest-border shadow-md">
              <div className="text-xs font-mono text-cream/70 uppercase">Carbon Credits Net</div>
              <div className="text-4xl font-extrabold font-mono text-cyan-300 mt-2">
                {activeScale.carbonCreditsNet}
              </div>
              <div className="text-xs text-cream/60 mt-1.5">Net emissions reduction once verified</div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PART 5: FOUNDERS ("Meet the team")
            Order:
            1. Nandu Naidu
            2. Lakshmi Narayanan
            3. Lissieux Abraham
            Subtitle: "Team BioLoop, ECOSPHERE 2026"
        ======================================================== */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-leaf/20 text-leaf-dark border border-leaf/30 uppercase tracking-wider font-mono">
              <Users className="w-3.5 h-3.5" />
              Core Founders
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-charcoal mt-2 tracking-tight">
              {FOUNDERS_DATA.title}
            </h2>
            <p className="text-sm font-bold text-leaf-dark mt-1 font-mono">
              {FOUNDERS_DATA.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {FOUNDERS_DATA.members.map((founder, idx) => (
              <div
                key={idx}
                className="group p-8 sm:p-9 rounded-3xl bg-white border border-cream-border hover:border-leaf/50 shadow-sm hover:shadow-2xl transition-all duration-300 card-hover-effect flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle gradient hover glow in background of card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-leaf/10 to-transparent rounded-bl-full pointer-events-none transition-transform group-hover:scale-125" />

                <div>
                  {/* Avatar Initial Circle with Glowing Border */}
                  <div className="relative w-20 h-20 mb-6">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-leaf via-leaf-light to-amber opacity-60 blur-sm group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-full h-full rounded-2xl bg-forest-dark text-leaf-light font-heading font-extrabold text-2xl flex items-center justify-center border-2 border-leaf-light shadow-md">
                      {founder.initials}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cream text-charcoal-muted border border-cream-border">
                      0{idx + 1}
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-charcoal group-hover:text-forest transition-colors">
                      {founder.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-muted mt-3.5 leading-relaxed font-normal">
                    {founder.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-cream-border flex items-center justify-between text-xs font-mono text-charcoal-muted">
                  <span className="flex items-center gap-1 text-leaf-dark font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-leaf" />
                    Founder 0{idx + 1}
                  </span>
                  <span className="text-charcoal-muted font-medium">ECOSPHERE 2026</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
