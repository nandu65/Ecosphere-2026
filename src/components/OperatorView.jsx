import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  CheckCircle2, 
  AlertTriangle, 
  Flame, 
  Droplets, 
  Activity, 
  RefreshCw, 
  ShieldAlert, 
  ShieldCheck, 
  Gauge, 
  Cpu, 
  Navigation,
  Check,
  X,
  Sparkles,
  Info
} from 'lucide-react';
import { OPERATOR_ROUTE, PLANT_TELEMETRY } from '../data/mockData';

export default function OperatorView() {
  const [routes, setRoutes] = useState(OPERATOR_ROUTE);
  const [selectedStopForCheck, setSelectedStopForCheck] = useState(null);
  const [activeInspectorPurity, setActiveInspectorPurity] = useState(96.4);
  const [opticalCheckResult, setOpticalCheckResult] = useState(null); // 'accepted' | 'rejected' | null

  // Calculate live collected mass vs target
  const targetTotalKg = routes.reduce((acc, curr) => acc + curr.expectedKg, 0); // 2,500 kg
  const collectedTotalKg = routes.reduce((acc, curr) => acc + (curr.status === 'collected' ? (curr.collectedKg || curr.expectedKg) : 0), 0);
  const completedStopsCount = routes.filter(r => r.status === 'collected').length;

  const handleStatusToggle = (id, newStatus) => {
    setRoutes(prev => prev.map(r => {
      if (r.id === id) {
        return {
          ...r,
          status: newStatus,
          collectedKg: newStatus === 'collected' ? (r.collectedKg || r.expectedKg) : null,
        };
      }
      return r;
    }));
  };

  const handleOpenContaminationCheck = (stop) => {
    setSelectedStopForCheck(stop);
    setActiveInspectorPurity(stop.purityScore || 95.0);
    setOpticalCheckResult(null);
  };

  const handleContaminationDecision = (decision) => {
    setOpticalCheckResult(decision);
    if (selectedStopForCheck) {
      if (decision === 'accepted') {
        handleStatusToggle(selectedStopForCheck.id, 'collected');
      }
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="bg-white dark:bg-forest-card p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
              SCREEN 2 · OPERATOR & LOGISTICS
            </span>
            <span className="text-xs text-slate-400 font-mono">* Illustrative demo data</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-heading mt-1">
            Bengaluru Central Collection Route
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-2">
            <span>Electric Fleet: Tata Ace EV-01</span>
            <span>•</span>
            <span>Driver: Ramesh K.</span>
            <span>•</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">5 Hub Stops (Total 2,500 kg)</span>
          </p>
        </div>

        {/* Route Summary KPI Badges */}
        <div className="flex items-center gap-3">
          <div className="p-3 bg-slate-50 dark:bg-forest-900/60 rounded-2xl border border-slate-200 dark:border-emerald-800/40 text-center min-w-[100px]">
            <div className="text-[10px] uppercase font-bold text-slate-400">Total Route Target</div>
            <div className="text-lg font-bold font-mono text-slate-900 dark:text-white">2,500 <span className="text-xs font-normal text-slate-400">kg</span></div>
          </div>
          <div className="p-3 bg-emerald-50 dark:bg-emerald-950/60 rounded-2xl border border-emerald-200 dark:border-emerald-800/60 text-center min-w-[110px]">
            <div className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-300">Collected So Far</div>
            <div className="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400">
              {collectedTotalKg} <span className="text-xs font-normal text-emerald-500">kg</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Route List + Stylised Map */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Stops List with Contamination Action */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between px-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Today's 5 Dispatch Checkpoints
            </span>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold">
              {completedStopsCount} / {routes.length} Completed
            </span>
          </div>

          {routes.map((stop, index) => {
            const isCollected = stop.status === 'collected';
            const isInTransit = stop.status === 'in-transit';

            return (
              <div
                key={stop.id}
                className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  isCollected
                    ? 'bg-emerald-50/70 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60'
                    : isInTransit
                    ? 'bg-amber-50/70 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800/80 shadow-md ring-1 ring-amber-400/30'
                    : 'bg-white dark:bg-forest-card border-slate-200 dark:border-emerald-900/40'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  {/* Left stop details */}
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-xl font-bold font-mono text-xs flex items-center justify-center flex-shrink-0 ${
                      isCollected
                        ? 'bg-emerald-600 text-white'
                        : isInTransit
                        ? 'bg-amber-500 text-slate-950 animate-pulse'
                        : 'bg-slate-100 dark:bg-forest-900 text-slate-600 dark:text-slate-300'
                    }`}>
                      {index + 1}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white font-heading">
                          {stop.partnerName}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-forest-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-emerald-800">
                          {stop.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{stop.address}</span>
                      </p>
                      <div className="text-[11px] font-mono text-slate-400 mt-1">
                        Slot: {stop.slot}
                      </div>
                    </div>
                  </div>

                  {/* Right: Mass & Actions */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100 dark:border-emerald-900/40">
                    <div className="text-right">
                      <div className="text-lg font-bold font-mono text-slate-900 dark:text-white">
                        {isCollected && stop.collectedKg ? stop.collectedKg : stop.expectedKg} <span className="text-xs font-normal text-slate-400">kg</span>
                      </div>
                      {isCollected && (
                        <div className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
                          ✓ Purity {stop.purityScore}%
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Contamination Inspector Button */}
                      <button
                        onClick={() => handleOpenContaminationCheck(stop)}
                        className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-forest-900 hover:bg-slate-200 dark:hover:bg-forest-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-emerald-800 transition-colors flex items-center gap-1"
                        title="Run Optical Contamination Scan"
                      >
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="hidden sm:inline">Purity Check</span>
                      </button>

                      {/* Status Toggle Button */}
                      {isCollected ? (
                        <button
                          onClick={() => handleStatusToggle(stop.id, 'pending')}
                          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Done</span>
                        </button>
                      ) : (
                        <button
                          onClick={() => handleStatusToggle(stop.id, 'collected')}
                          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-600 text-slate-950 flex items-center gap-1 shadow-sm"
                        >
                          <span>Mark Done</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Stylised Bengaluru Route Map */}
        <div className="lg:col-span-5 bg-white dark:bg-forest-card p-6 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Live Dispatch Grid
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                  Bengaluru Route Vector Map
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
                <Navigation className="w-3.5 h-3.5 text-emerald-500" />
                <span>GPS Live</span>
              </div>
            </div>

            {/* Stylised SVG Map Container */}
            <div className="relative w-full h-80 bg-slate-900 rounded-2xl overflow-hidden border border-emerald-950/60 shadow-inner">
              {/* Subtle map grid lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#163326_1px,transparent_1px),linear-gradient(to_bottom,#163326_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>

              {/* Bengaluru Outer Ring Road stylised curve SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Central Ring Road Route */}
                <path
                  d="M 20,40 Q 50,15 80,35 T 75,80 T 30,75 Z"
                  fill="none"
                  stroke="#1E4D38"
                  strokeWidth="0.7"
                  strokeDasharray="2,2"
                />

                {/* Today's Active Route Connected Path */}
                <path
                  d="M 62,38 L 55,52 L 82,44 L 60,78 L 30,64"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="1.8"
                  className="animate-flow"
                />

                {/* Singasandra Hub Connection */}
                <line x1="30" y1="64" x2="52" y2="70" stroke="#F59E0B" strokeWidth="1.2" strokeDasharray="3,2" />
              </svg>

              {/* Central Digester Hub Node */}
              <div 
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{ left: '52%', top: '70%' }}
              >
                <div className="relative">
                  <span className="w-5 h-5 rounded-full bg-amber-500/40 animate-ping absolute inset-0"></span>
                  <div className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-[9px] shadow-lg border-2 border-white">
                    <Flame className="w-3 h-3 fill-slate-950" />
                  </div>
                </div>
                <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-amber-950/90 text-amber-200 border border-amber-500/40 text-[9px] font-mono px-1.5 py-0.5 rounded whitespace-nowrap">
                  Singasandra Digester Hub
                </div>
              </div>

              {/* Route Markers for each stop */}
              {routes.map((st, i) => {
                const isCollected = st.status === 'collected';
                const isInTransit = st.status === 'in-transit';

                return (
                  <div
                    key={st.id}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    style={{ left: `${st.coords.x}%`, top: `${st.coords.y}%` }}
                    onClick={() => handleOpenContaminationCheck(st)}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold font-mono text-[10px] shadow-md border-2 border-slate-900 transition-transform group-hover:scale-125 ${
                      isCollected
                        ? 'bg-emerald-500 text-white'
                        : isInTransit
                        ? 'bg-amber-400 text-slate-950 ring-4 ring-amber-400/30 animate-bounce'
                        : 'bg-slate-400 text-slate-950'
                    }`}>
                      {i + 1}
                    </div>

                    {/* Tooltip on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-7 left-1/2 -translate-x-1/2 bg-slate-900/95 text-white text-[10px] p-1.5 rounded-lg border border-emerald-500/50 whitespace-nowrap shadow-xl pointer-events-none">
                      <div className="font-bold">{st.partnerName}</div>
                      <div className="text-emerald-300 font-mono">{st.expectedKg} kg · {st.slot}</div>
                    </div>
                  </div>
                );
              })}

              {/* Bottom Map Legend */}
              <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-emerald-900/50 flex items-center justify-between text-[10px] font-mono text-slate-300">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Collected
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span> In Transit
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-slate-400"></span> Pending
                </span>
                <span className="flex items-center gap-1 text-amber-300">
                  <Flame className="w-3 h-3 text-amber-400" /> Pilot Hub
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-emerald-800/40 text-[11px] text-slate-400">
            Route dynamically optimised for minimal transit emissions: <strong>14.2 km total electric EV loop</strong>.
          </div>
        </div>
      </div>

      {/* Plant Output Telemetry Card (Required: 62.5 kg LPG-eq Biogas + Slurry) */}
      <div className="bg-white dark:bg-forest-card p-6 sm:p-8 rounded-3xl border border-emerald-100 dark:border-emerald-800/50 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-600 text-white">
                CORE CONVERSION TELEMETRY
              </span>
              <span className="text-xs text-slate-400 font-mono">Singasandra Pilot Plant #01</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading mt-1">
              Daily Plant Yield & Digester Health
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
              30-Day Uptime: {PLANT_TELEMETRY.uptime30Days}
            </span>
          </div>
        </div>

        {/* 4 Core Output Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Output 1: Biogas */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/40 dark:from-amber-950/40 dark:to-forest-900/40 border border-amber-200 dark:border-amber-800/50">
            <div className="flex items-center justify-between text-xs text-amber-700 dark:text-amber-400 font-semibold mb-2">
              <span>Daily Biogas Produced</span>
              <Flame className="w-4 h-4 fill-amber-500/30 text-amber-500" />
            </div>
            <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
              62.5 <span className="text-sm font-sans font-bold text-amber-600 dark:text-amber-400">kg LPG-eq</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              ~105 m³ high-calorific biomethane (61.2% CH₄)
            </p>
          </div>

          {/* Output 2: Bio-Slurry */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/40 dark:from-emerald-950/40 dark:to-forest-900/40 border border-emerald-200 dark:border-emerald-800/50">
            <div className="flex items-center justify-between text-xs text-emerald-700 dark:text-emerald-400 font-semibold mb-2">
              <span>Bio-Slurry Output</span>
              <Droplets className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
              1,875 <span className="text-sm font-sans font-bold text-emerald-600 dark:text-emerald-400">Litres/day</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Pathogen-free liquid organic fertilizer for peri-urban farms
            </p>
          </div>

          {/* Output 3: Temperature */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-forest-900/60 border border-slate-200 dark:border-emerald-800/40">
            <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-semibold mb-2">
              <span>Mesophilic Temperature</span>
              <Gauge className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
              {PLANT_TELEMETRY.coreSensors.tempC}°C
            </div>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
              ✓ Optimal microbial anaerobic digestion band (37–38°C)
            </p>
          </div>

          {/* Output 4: Post-Scrubber Purity */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-forest-900/60 border border-slate-200 dark:border-emerald-800/40">
            <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 font-semibold mb-2">
              <span>Post-Scrubber H₂S</span>
              <Cpu className="w-4 h-4 text-slate-500" />
            </div>
            <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white">
              &lt; 0.2 <span className="text-sm font-sans font-bold text-slate-500">ppm</span>
            </div>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
              ✓ 100% odor-free, non-corrosive burner delivery
            </p>
          </div>
        </div>
      </div>

      {/* Contamination Inspector Modal Dialog (Accept / Reject) */}
      {selectedStopForCheck && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-forest-card rounded-3xl max-w-md w-full p-6 border border-emerald-200 dark:border-emerald-700 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-emerald-800 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  AI Optical Purity Inspection
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                  {selectedStopForCheck.partnerName}
                </h3>
              </div>
              <button
                onClick={() => setSelectedStopForCheck(null)}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Simulated Optical Scan View */}
            <div className="p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs space-y-2 border border-emerald-800 relative overflow-hidden">
              <div className="flex justify-between items-center text-emerald-400 pb-2 border-b border-slate-800">
                <span>Scanner: BioVision-X1</span>
                <span>Geo: {selectedStopForCheck.geoTag}</span>
              </div>

              <div className="py-2 space-y-1">
                <div className="flex justify-between">
                  <span className="text-slate-400">Organic Fraction:</span>
                  <span className="font-bold text-emerald-400">{activeInspectorPurity}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Moisture Index:</span>
                  <span className="font-bold text-cyan-400">74.2%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Inert/Plastic Contaminants:</span>
                  <span className="font-bold text-amber-400">&lt; 0.4% (Permissible)</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-300">
                Notes: {selectedStopForCheck.contaminationNotes}
              </div>
            </div>

            {opticalCheckResult === null ? (
              <div className="space-y-3">
                <div className="text-xs text-slate-600 dark:text-slate-300">
                  Confirm optical classification before emptying into electric collection hopper:
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleContaminationDecision('rejected')}
                    className="py-2.5 px-4 rounded-xl text-xs font-bold bg-red-100 dark:bg-red-950/60 hover:bg-red-200 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-800 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <X className="w-4 h-4" />
                    <span>Reject Batch</span>
                  </button>

                  <button
                    onClick={() => handleContaminationDecision('accepted')}
                    className="py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <Check className="w-4 h-4" />
                    <span>Accept & Load</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-3 space-y-3">
                <div className={`text-sm font-bold ${opticalCheckResult === 'accepted' ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}`}>
                  {opticalCheckResult === 'accepted' ? '✓ Batch Accepted & Loaded to Truck' : '✕ Batch Rejected (Contamination logged to partner report)'}
                </div>
                <button
                  onClick={() => setSelectedStopForCheck(null)}
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-slate-900 text-white dark:bg-forest-900"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
