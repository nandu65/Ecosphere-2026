import React, { useState } from 'react';
import { PRODUCTS_SERVICES, REVENUE_MIX } from '../content';
import { Truck, Flame, Leaf, ShieldCheck, ArrowRight, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(0);

  const iconMap = {
    Truck: Truck,
    Flame: Flame,
    Leaf: Leaf,
    ShieldCheck: ShieldCheck,
  };

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream text-charcoal relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-leaf/20 text-leaf-dark border border-leaf/30 uppercase tracking-wider mb-3">
            <Flame className="w-3.5 h-3.5 text-amber-dark" />
            Circular Monetisation Engine
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-charcoal">
            Products & Revenue Streams
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Bioloop creates value at gate-in, clean energy out, agricultural enhancement, and digitized climate asset issuance.
          </p>
        </div>

        {/* 4 Animated Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRODUCTS_SERVICES.map((prod, idx) => {
            const Icon = iconMap[prod.icon] || Flame;
            const isSelected = selectedProduct === idx;

            return (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(idx)}
                className={`p-8 rounded-3xl bg-white border transition-all duration-300 shadow-sm cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'border-leaf ring-2 ring-leaf/30 shadow-xl'
                    : 'border-cream-border hover:border-leaf/50'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Pricing Tag */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-forest-dark text-leaf-light flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 rounded-xl text-xs font-bold font-mono bg-cream text-charcoal border border-cream-border">
                        {prod.pricing}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-charcoal">
                    {prod.title}
                  </h3>
                  <div className="text-xs font-semibold text-leaf-dark mt-1 font-mono">
                    {prod.tagline}
                  </div>

                  <p className="text-xs sm:text-sm text-charcoal-muted mt-3 leading-relaxed">
                    {prod.details}
                  </p>

                  {/* Carbon credit route mini-diagram if applicable */}
                  {prod.creditRouteSteps && (
                    <div className="mt-5 p-4 rounded-2xl bg-forest-dark text-cream">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-leaf-light mb-3 font-mono">
                        Carbon Certification Pipeline (Verra VM0022)
                      </div>
                      <div className="grid grid-cols-5 gap-1 text-center">
                        {prod.creditRouteSteps.map((st, i) => (
                          <div key={st.step} className="p-1.5 rounded-lg bg-forest border border-forest-border flex flex-col justify-between">
                            <span className="text-[9px] font-mono text-amber">{st.step}</span>
                            <span className="text-[10px] font-bold text-white line-clamp-1">{st.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Pricing Assumption Subtext */}
                  <div className="mt-4 p-3 rounded-2xl bg-cream/70 border border-cream-border text-xs text-charcoal-muted">
                    <strong>Economic Assumption:</strong> {prod.pricingSubtext}
                  </div>
                </div>

                {/* Who Pays Footer */}
                <div className="mt-6 pt-4 border-t border-cream-border flex items-start gap-2 text-xs">
                  <strong className="text-charcoal whitespace-nowrap font-mono">Who pays:</strong>
                  <span className="text-charcoal-muted">{prod.whoPays}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Revenue Mix Animated Donut & Breakdown Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-forest-dark text-cream border border-forest-border shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-forest-border">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber font-mono">
                Pilot Economics (2.5 TPD Singasandra Hub)
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                Annual Revenue Mix & Stream Distribution
              </h3>
            </div>
            <div className="text-right">
              <div className="text-3xl font-extrabold font-mono text-amber">
                ~₹{REVENUE_MIX.totalAnnualWithCreditsLakhs} Lakhs
              </div>
              <div className="text-xs text-cream/70 mt-0.5">
                Annual gross revenue with carbon credits
              </div>
            </div>
          </div>

          {/* Revenue Multi-Segment Progress Bar */}
          <div className="mt-8 space-y-4">
            <div className="h-6 w-full rounded-2xl bg-forest-card overflow-hidden flex shadow-inner p-1 border border-forest-border">
              {REVENUE_MIX.streams.map((st) => (
                <div
                  key={st.name}
                  style={{ width: `${st.percentage}%`, backgroundColor: st.color }}
                  className="h-full transition-all duration-700 rounded-lg first:rounded-l-lg last:rounded-r-lg"
                  title={`${st.name}: ${st.percentage}% (₹${st.amountLakhs}L)`}
                />
              ))}
            </div>

            {/* Stream Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
              {REVENUE_MIX.streams.map((st) => (
                <div key={st.name} className="p-4 rounded-2xl bg-forest border border-forest-border">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: st.color }} />
                    <span className="text-xs font-bold text-cream">{st.name}</span>
                  </div>
                  <div className="text-2xl font-extrabold font-mono text-white">
                    {st.percentage}%
                  </div>
                  <div className="text-xs font-mono text-cream/70 mt-0.5">
                    ₹{st.amountLakhs} Lakhs / yr
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footnote per exact requirements */}
          <div className="mt-8 pt-4 border-t border-forest-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-cream/70 font-mono">
            <div>
              * {REVENUE_MIX.footnote}
            </div>
            <div className="text-amber">
              Baseline without credits: ₹{REVENUE_MIX.totalAnnualWithoutCreditsLakhs} Lakhs/yr
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
