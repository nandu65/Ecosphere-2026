import React from 'react';
import { CUSTOMERS_DATA } from '../content';
import { Building2, Utensils, Factory, Home, ShoppingBag, Users, Check, X, Sparkles, Heart } from 'lucide-react';

export default function CustomersSection() {
  const iconMap = {
    Building2: Building2,
    Utensils: Utensils,
    Factory: Factory,
    Home: Home,
    ShoppingBag: ShoppingBag,
  };

  return (
    <section id="customers" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream text-charcoal relative">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* ========================================================
            PART 1: WHO WE SERVE
        ======================================================== */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-leaf/20 text-leaf-dark border border-leaf/30 uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              Target Ecosystem
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-charcoal mt-3">
              Who We Serve
            </h2>
            <p className="mt-3 text-base sm:text-lg text-charcoal-muted leading-relaxed">
              Institutional bulk food waste generators generating 100 kg to 2,000+ kg daily across Bengaluru.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CUSTOMERS_DATA.whoWeServe.map((cust, idx) => {
              const Icon = iconMap[cust.icon] || Building2;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-cream-border shadow-sm card-hover-effect flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-cream text-forest flex items-center justify-center font-bold mb-4 border border-cream-border">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold font-heading text-charcoal">
                      {cust.title}
                    </h3>
                    <p className="text-xs text-charcoal-muted mt-2 leading-relaxed">
                      {cust.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-cream-border text-[11px] font-mono text-leaf-dark font-semibold">
                    Zero-landfill compliant
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            PART 2: WHO BUYS OUR OUTPUTS
        ======================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-forest-dark text-cream border border-forest-border shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber font-mono">
              Tri-Partite Off-Take Network
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white mt-1">
              Who Buys Our Outputs
            </h3>
            <p className="text-xs sm:text-sm text-cream/70 mt-1">
              Guaranteed long-term off-take contracts across commercial energy, agriculture, and corporate sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CUSTOMERS_DATA.whoBuysOutputs.map((buyer, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-forest border border-forest-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-forest-dark text-amber border border-forest-border">
                      {buyer.product}
                    </span>
                    <span className="text-xs text-leaf-light font-mono font-bold">0{idx + 1}</span>
                  </div>

                  <h4 className="text-lg font-bold font-heading text-white">
                    {buyer.buyer}
                  </h4>

                  <p className="text-xs sm:text-sm text-cream/80 mt-2 leading-relaxed">
                    {buyer.benefit}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-forest-border text-[11px] font-mono text-cream/60">
                  Direct B2B off-take agreement
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            PART 3: BENEFICIARIES STRIP
        ======================================================== */}
        <div className="p-8 rounded-3xl bg-white border border-cream-border shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-forest font-mono mb-4 text-center">
            City-Wide Multiplier Impact
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {CUSTOMERS_DATA.beneficiaries.map((b, i) => (
              <div key={i} className="p-4 rounded-2xl bg-cream/50 border border-cream-border">
                <div className="text-base font-bold font-heading text-charcoal">{b.name}</div>
                <div className="text-xs text-charcoal-muted mt-1 leading-relaxed">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            PART 4: "WHY US VS ALTERNATIVES" COMPARISON TABLE
        ======================================================== */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-forest font-mono">
              Competitive Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-charcoal mt-1">
              Why Bioloop vs Alternatives
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
              How decentralized biomethanation compares to status-quo options in Bengaluru.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-cream-border bg-white shadow-md">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-forest-dark text-white border-b border-forest-border">
                  <th className="p-4 sm:p-5 font-heading text-sm">Key Evaluation Dimension</th>
                  <th className="p-4 sm:p-5 bg-leaf text-forest-dark font-heading font-extrabold text-sm">Bioloop</th>
                  <th className="p-4 sm:p-5 font-heading text-sm text-cream/90">Empanelled City Vendors</th>
                  <th className="p-4 sm:p-5 font-heading text-sm text-cream/90">Informal Haulers</th>
                  <th className="p-4 sm:p-5 font-heading text-sm text-cream/90">Composting-Only</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-cream-border">
                {CUSTOMERS_DATA.comparisonTable.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-cream/30'}>
                    <td className="p-4 sm:p-5 font-bold text-charcoal font-heading">
                      {row.parameter}
                    </td>
                    <td className="p-4 sm:p-5 font-bold text-forest bg-leaf/10 border-x border-leaf/20">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-leaf-dark flex-shrink-0" />
                        <span>{row.bioloop}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-5 text-charcoal-muted">
                      {row.empanelled}
                    </td>
                    <td className="p-4 sm:p-5 text-charcoal-muted">
                      {row.informal}
                    </td>
                    <td className="p-4 sm:p-5 text-charcoal-muted">
                      {row.compostOnly}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
