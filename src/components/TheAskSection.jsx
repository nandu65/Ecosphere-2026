import React from 'react';
import { THE_ASK_DATA } from '../content';
import { Sparkles, ArrowRight, Target, TrendingUp, Calendar, CheckCircle2 } from 'lucide-react';

export default function TheAskSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="ask" className="py-24 px-4 sm:px-6 lg:px-8 bg-forest-dark text-cream relative overflow-hidden">
      {/* Background dramatic lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-br from-amber/15 via-leaf/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Dramatic Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber/20 text-amber border border-amber/30 text-xs font-bold uppercase tracking-wider mb-4 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 fill-amber" />
            <span>Investment Round</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
            {THE_ASK_DATA.headlineAmount}
          </h2>

          <p className="mt-4 text-base sm:text-xl text-cream/80 leading-relaxed font-normal">
            {THE_ASK_DATA.subheadline}
          </p>

          <div className="mt-8 flex justify-center">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 rounded-full font-extrabold text-sm bg-amber hover:bg-amber-glow text-forest-dark shadow-xl shadow-amber/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2.5 group"
            >
              <span>Invest with us</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Use of Funds Breakdown */}
        <div className="p-8 sm:p-12 rounded-3xl bg-forest-card border border-forest-border shadow-2xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-forest-border">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-leaf-light font-mono">
                Capital Allocation
              </span>
              <h3 className="text-2xl font-bold font-heading text-white mt-0.5">
                Use of Funds Breakdown
              </h3>
            </div>
            <span className="text-xs font-mono text-cream/70">* All allocations configurable in src/content.js</span>
          </div>

          {/* Segmented Bar */}
          <div className="h-6 w-full rounded-2xl bg-forest-dark overflow-hidden flex shadow-inner p-1 border border-forest-border">
            {THE_ASK_DATA.useOfFunds.map((item, idx) => (
              <div
                key={idx}
                style={{ width: `${item.sharePct}%`, backgroundColor: item.color }}
                className="h-full transition-all duration-700 rounded-lg first:rounded-l-lg last:rounded-r-lg"
                title={`${item.label}: ${item.sharePct}%`}
              />
            ))}
          </div>

          {/* Grid of Use of Funds */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {THE_ASK_DATA.useOfFunds.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-forest border border-forest-border flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="text-xs font-bold text-cream line-clamp-1">{item.label}</span>
                  </div>
                  <div className="text-3xl font-extrabold font-mono text-white">
                    {item.sharePct}%
                  </div>
                </div>
                <div className="text-[10px] font-mono text-cream/60 mt-2">
                  Target expenditure category
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* "What this unlocks" Timeline with 3 Milestones */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-amber font-mono">
              36-Month Scale Trajectory
            </span>
            <h3 className="text-3xl font-bold font-heading text-white mt-1">
              What This Capital Unlocks
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {THE_ASK_DATA.milestones.map((m, idx) => (
              <div
                key={m.id}
                className="p-8 rounded-3xl bg-forest-card border border-forest-border hover:border-leaf/50 transition-all shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-forest-dark text-leaf-light border border-forest-border">
                      {m.timeline}
                    </span>
                    <span className="text-xs font-mono text-amber font-bold">Phase 0{idx + 1}</span>
                  </div>

                  <h4 className="text-xl font-bold font-heading text-white">
                    {m.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-cream/80 mt-3 leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-forest-border space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-amber font-mono">
                    Expected Impact Target:
                  </div>
                  <div className="text-xs font-mono font-bold text-white bg-forest-dark p-3 rounded-xl border border-forest-border">
                    {m.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
