import React from 'react';
import { Leaf, Flame, ShieldCheck, MapPin, Sparkles, Heart } from 'lucide-react';
import { BRAND } from '../data/mockData';

export default function Footer({ onOpenPitchMode, onNavigate }) {
  return (
    <footer className="mt-20 border-t border-emerald-950/10 dark:border-emerald-500/15 bg-white dark:bg-[#061510] text-slate-600 dark:text-slate-400 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-950 flex items-center justify-center text-white">
                <Leaf className="w-4 h-4 text-emerald-300" />
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                {BRAND.name}
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                Bengaluru Climate-Tech
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              "{BRAND.tagline}" — Decentralised organic waste infrastructure creating zero-landfill cities, distributed clean cooking energy, and high-integrity carbon removals.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
              <MapPin className="w-3.5 h-3.5" />
              <span>Pilot Plant: Singasandra 2.5 TPD Hub, Bengaluru South</span>
            </div>
          </div>

          {/* Pitch & Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white font-heading">
              Demo Navigation
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button onClick={() => onNavigate('loop')} className="hover:text-emerald-500 transition-colors">
                  • Hero & Interactive Loop
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('partner')} className="hover:text-emerald-500 transition-colors">
                  • Screen 1: Partner Portal (Hostel A)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('operator')} className="hover:text-emerald-500 transition-colors">
                  • Screen 2: Operator & Logistics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('investor')} className="hover:text-emerald-500 transition-colors">
                  • Screen 3: Impact & Investor Pitch
                </button>
              </li>
            </ul>
          </div>

          {/* Investor Pitch Badge & Demo Notice */}
          <div className="md:col-span-4 p-5 rounded-2xl bg-slate-50 dark:bg-forest-900/40 border border-slate-200 dark:border-emerald-800/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Offline Pitch Ready
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-600 dark:text-amber-300 font-bold">
                5-Min Demo
              </span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Keyboard shortcuts: Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-forest-800 font-mono font-bold">1</kbd>, <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-forest-800 font-mono font-bold">2</kbd>, <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-forest-800 font-mono font-bold">3</kbd> to jump screens. Press <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-forest-800 font-mono font-bold">P</kbd> for pitch timer.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenPitchMode}
                className="w-full py-2 px-3 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Launch Pitch Guide Mode</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Bioloop Energy & Climate Technologies Pvt. Ltd. All metrics labeled <em>Illustrative demo data</em> for investment evaluation.
          </div>
          <div className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            Decentralised · Zero-Landfill · 100% Offline Ready
          </div>
        </div>
      </div>
    </footer>
  );
}
