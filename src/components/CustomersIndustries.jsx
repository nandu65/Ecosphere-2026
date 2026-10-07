import React from 'react';
import { CUSTOMERS_DATA } from '../content';
import { Utensils, Home, Building2, Users, Sprout, HeartHandshake, CheckCircle2, Activity } from 'lucide-react';

export default function CustomersIndustries() {
  const iconMap = {
    Utensils: Utensils,
    Home: Home,
    Building2: Building2,
    Users: Users,
    Sprout: Sprout,
    HeartHandshake: HeartHandshake,
  };

  return (
    <section id="customers" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream text-charcoal relative">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* ========================================================
            PART 1: PRIMARY CUSTOMERS (Canteens, Hostels, Small Hotels)
        ======================================================== */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-leaf/20 text-leaf-dark border border-leaf/30 uppercase tracking-wider">
              <Utensils className="w-3.5 h-3.5" />
              Direct Partners
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-charcoal mt-3">
              Primary Customers
            </h2>
            <p className="mt-3 text-base sm:text-lg text-charcoal-muted leading-relaxed">
              Institutional kitchen operators with daily bulk food scrap generation and active cooking fuel requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CUSTOMERS_DATA.primaryCustomers.map((cust, idx) => {
              const Icon = iconMap[cust.icon] || Utensils;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-cream-border shadow-sm card-hover-effect flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-forest-dark text-leaf-light flex items-center justify-center font-bold mb-4 shadow-md">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-2xl font-bold font-heading text-charcoal">
                      {cust.title}
                    </h3>

                    <p className="text-sm text-charcoal-muted mt-2 leading-relaxed">
                      {cust.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-cream-border flex items-center justify-between text-xs font-mono">
                    <span className="text-leaf-dark font-bold">100% Weighed Batches</span>
                    <span className="text-charcoal-muted">Target Group 0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            PART 2: WHO ELSE BENEFITS (Communities, Farmers, Collectors)
        ======================================================== */}
        <div className="p-8 sm:p-12 rounded-3xl bg-forest-dark text-cream border border-forest-border shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-amber font-mono">
              Ecosystem Multiplier
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading text-white mt-1">
              Who Else Benefits
            </h3>
            <p className="text-xs sm:text-sm text-cream/70 mt-1">
              Creating holistic environmental, agricultural, and socio-economic value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CUSTOMERS_DATA.whoElseBenefits.map((b, idx) => {
              const Icon = iconMap[b.icon] || Users;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-forest border border-forest-border flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-2xl bg-forest-dark text-amber flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-leaf-light">Beneficiary 0{idx + 1}</span>
                    </div>

                    <h4 className="text-lg font-bold font-heading text-white">
                      {b.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-cream/80 mt-2 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-forest-border text-[11px] font-mono text-cream/60">
                    Community & circular impact
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            PART 3: 5 IMPACT INDICATORS WE TRACK ROW
        ======================================================== */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-forest font-mono flex items-center justify-center gap-1.5">
              <Activity className="w-3.5 h-3.5" />
              Measurement & Verification
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-charcoal mt-1">
              5 Impact Indicators We Track
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-1">
              Empirical data collection at every stage of the waste conversion lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CUSTOMERS_DATA.impactIndicators.map((ind) => (
              <div
                key={ind.id}
                className="p-6 rounded-3xl bg-white border border-cream-border shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="w-8 h-8 rounded-xl bg-forest-dark text-amber font-mono font-extrabold text-xs flex items-center justify-center mb-3">
                    0{ind.id}
                  </span>
                  <h4 className="text-base font-bold font-heading text-charcoal">
                    {ind.title}
                  </h4>
                </div>
                <div className="mt-4 pt-3 border-t border-cream-border text-xs text-charcoal-muted leading-relaxed font-mono">
                  {ind.method}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
