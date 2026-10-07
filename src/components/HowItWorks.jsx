import React, { useState } from 'react';
import { HOW_IT_WORKS_STEPS } from '../content';
import { Scale, Flame, Droplets, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const iconMap = {
    Scale: Scale,
    Flame: Flame,
    Droplets: Droplets,
    ShieldCheck: ShieldCheck,
  };

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-forest-dark text-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-leaf/20 text-leaf-light border border-leaf/30 uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Closed Loop Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white">
            How BioLoop Works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-cream/80 leading-relaxed">
            A 4-stage process converting bulk organic waste into verified clean cooking fuel and bio-slurry.
          </p>
        </div>

        {/* 4 Pinned Stepper Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = iconMap[step.icon] || Flame;
            const isActive = activeStep === idx;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-3xl cursor-pointer border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isActive
                    ? 'bg-forest-card border-leaf ring-2 ring-leaf/40 shadow-2xl shadow-black/50 -translate-y-1'
                    : 'bg-forest/60 border-forest-border hover:border-leaf/50 hover:bg-forest'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-lg bg-forest-dark text-amber border border-forest-border">
                      Stage {step.step}
                    </span>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-leaf text-forest-dark' : 'bg-forest-border text-cream/70'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-cream/75 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 h-1.5 w-full bg-forest-dark rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-500 ${
                    isActive ? 'bg-gradient-to-r from-leaf to-amber w-full' : 'w-0'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Stage Detailed Spotlight */}
        <div className="p-8 sm:p-10 rounded-3xl bg-forest-card border border-forest-border shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber/20 text-amber font-mono border border-amber/30">
                ACTIVE STEP {HOW_IT_WORKS_STEPS[activeStep].step} OF 04
              </span>
              <span className="text-xs text-leaf-light font-mono font-bold">
                {HOW_IT_WORKS_STEPS[activeStep].title}
              </span>
            </div>
            <p className="text-sm sm:text-base text-cream/90 max-w-2xl leading-relaxed">
              {HOW_IT_WORKS_STEPS[activeStep].desc}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              disabled={activeStep === 0}
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-forest border border-forest-border disabled:opacity-30 text-white"
            >
              Previous
            </button>
            <button
              disabled={activeStep === HOW_IT_WORKS_STEPS.length - 1}
              onClick={() => setActiveStep(prev => Math.min(HOW_IT_WORKS_STEPS.length - 1, prev + 1))}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-leaf text-forest-dark disabled:opacity-30 font-mono"
            >
              Next Step
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
