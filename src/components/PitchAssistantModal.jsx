import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  ChevronRight, 
  Flame, 
  Leaf, 
  TrendingUp, 
  HelpCircle,
  Sparkles,
  Award
} from 'lucide-react';

export default function PitchAssistantModal({ isOpen, onClose, onJumpToTab }) {
  const [secondsLeft, setSecondsLeft] = useState(300); // 5 minutes = 300s
  const [isRunning, setIsRunning] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, secondsLeft]);

  if (!isOpen) return null;

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const elapsed = 300 - secondsLeft;

  const pitchTracks = [
    {
      minute: "0:00 - 1:00",
      title: "1. The Hook & The Problem",
      targetTab: "loop",
      talkPoints: [
        "Bengaluru generates 4,000+ tonnes of solid waste daily, of which 50%+ is bulk food waste from hostels, tech parks, and commercial hotels.",
        "Generators pay high waste pickup costs and suffer costly LPG cooking fuel bills while landfill methane triggers severe GHG penalties.",
        "Bioloop introduces 'Waste that earns twice' — a high-margin closed-loop decentralized bio-conversion network.",
      ],
      demoAction: "Show Hero Loop animated diagram and live diverted kg counter ticking up."
    },
    {
      minute: "1:00 - 2:15",
      title: "2. Partner Portal (Hostel A)",
      targetTab: "partner",
      talkPoints: [
        "Bulk generators log waste daily. At ₹1.5/kg gate fee, 120 kg waste returns instant fee credits + 3.0 kg LPG-equivalent clean biogas.",
        "Zero-contamination incentive: Mess staff maintain 92% clean score to unlock reward points, free organic soil enhancer and audit certs.",
        "Simple 1-click pickup dispatch assigns electric EV collection instantly.",
      ],
      demoAction: "Drag the Daily Waste slider (10 -> 250 kg) to show live reactive outputs."
    },
    {
      minute: "2:15 - 3:30",
      title: "3. Logistics & Plant Conversion",
      targetTab: "operator",
      talkPoints: [
        "Decentralized 5 km electric loop collects 2,500 kg daily from 5 key commercial nodes across Bengaluru.",
        "Built-in optical AI scanner verifies organic purity before loading.",
        "Singasandra Hub converts 2.5 TPD waste into 62.5 kg LPG-equivalent gas and 1,875 Litres/day bio-slurry with 99.4% uptime.",
      ],
      demoAction: "Click 'Purity Check' on Hotel Orchid and review 62.5 kg LPG output card."
    },
    {
      minute: "3:30 - 5:00",
      title: "4. Unit Economics, Carbon Multiplier & Scale",
      targetTab: "investor",
      talkPoints: [
        "4 diversified revenue streams: Collection fees (41%), Biogas (34%), Carbon credits (20%), Fertiliser (5%).",
        "Total plant revenue: ₹33.5 Lakhs/year at ₹1,500/credit vs ₹26.9L baseline. Plant breaks even at just 54% capacity.",
        "Expansion: 1 Pilot (Singasandra) -> 5 City Hubs (12.5 TPD, ₹1.67 Cr ARR) -> Central Bio-CNG fleet dispensing.",
      ],
      demoAction: "Move Carbon Price Slider from ₹250 to ₹1,500 to show live break-even recalculation."
    }
  ];

  const currentTrack = pitchTracks[currentSlideIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white dark:bg-[#0E2920] rounded-3xl max-w-3xl w-full border border-emerald-300 dark:border-emerald-600/60 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header with Pitch Timer */}
        <div className="p-6 bg-gradient-to-r from-emerald-950 via-forest-900 to-forest-dark text-white border-b border-emerald-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold font-heading">
                  5-Minute Investor Pitch Mode
                </h3>
                <span className="text-[10px] uppercase font-bold font-mono px-2 py-0.5 rounded bg-emerald-500/30 text-emerald-300 border border-emerald-400/40">
                  Live Teleprompter
                </span>
              </div>
              <p className="text-xs text-emerald-200/80 mt-0.5">
                Pacing assistant & talk-track cue cards for pitching Bioloop
              </p>
            </div>
          </div>

          {/* Timer Controls */}
          <div className="flex items-center gap-3 bg-emerald-950/90 px-4 py-2 rounded-2xl border border-emerald-700/60">
            <div className={`text-2xl font-bold font-mono ${secondsLeft < 60 ? 'text-amber-400 animate-pulse' : 'text-white'}`}>
              {formattedTime}
            </div>

            <div className="flex items-center gap-1.5 border-l border-emerald-800 pl-3">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className="p-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-transform active:scale-95"
                title={isRunning ? 'Pause' : 'Start Timer'}
              >
                {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-slate-950" />}
              </button>
              <button
                onClick={() => {
                  setIsRunning(false);
                  setSecondsLeft(300);
                }}
                className="p-2 rounded-xl bg-forest-900 hover:bg-forest-800 text-slate-200 transition-colors"
                title="Reset Timer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Pitch Track Tabs */}
        <div className="p-3 bg-slate-100 dark:bg-forest-950/70 border-b border-slate-200 dark:border-emerald-900 flex gap-2 overflow-x-auto">
          {pitchTracks.map((pt, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentSlideIndex(i);
                onJumpToTab(pt.targetTab);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                currentSlideIndex === i
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-forest-900'
              }`}
            >
              <span className="font-mono text-[10px] opacity-75 mr-1.5">{pt.minute}</span>
              {pt.title.split('. ')[1]}
            </button>
          ))}
        </div>

        {/* Active Cue Card Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-slate-800 dark:text-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                PITCH SEGMENT {currentSlideIndex + 1} OF 4 ({currentTrack.minute})
              </span>
              <h4 className="text-2xl font-bold font-heading text-slate-900 dark:text-white mt-1">
                {currentTrack.title}
              </h4>
            </div>

            <button
              onClick={() => onJumpToTab(currentTrack.targetTab)}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 shadow-sm"
            >
              <span>Jump to Screen</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Talk Points */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Key Pitch Talking Points (Voiceover)
            </h5>
            <div className="space-y-2.5">
              {currentTrack.talkPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-forest-900/50 border border-slate-200 dark:border-emerald-800/40">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Live Demo Action Suggestion */}
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs text-amber-900 dark:text-amber-200 flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <div>
              <strong className="font-bold">Live Demo Action to Show Judges:</strong> {currentTrack.demoAction}
            </div>
          </div>

          {/* Judge FAQs / Defense Quick Reference */}
          <div className="pt-4 border-t border-slate-200 dark:border-emerald-800/50">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Potential Judge Questions & Defense
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-forest-900/30 border border-slate-200 dark:border-emerald-800/30">
                <strong className="text-slate-900 dark:text-white block mb-1">"Why decentralised vs massive 500 TPD landfill plants?"</strong>
                <span className="text-slate-500 dark:text-slate-400">Massive plants suffer 40% transport costs and severe odor NIMBY disputes. 2.5 TPD hubs sit within 5 km radius with zero transit lag.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-forest-900/30 border border-slate-200 dark:border-emerald-800/30">
                <strong className="text-slate-900 dark:text-white block mb-1">"How are carbon credits verified?"</strong>
                <span className="text-slate-500 dark:text-slate-400">Continuous IoT flow meters and weighbridges feed automated Verra VM0022 MRV telemetry with cryptographic tamper-proofing.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-slate-50 dark:bg-forest-950 border-t border-slate-200 dark:border-emerald-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              disabled={currentSlideIndex === 0}
              onClick={() => {
                const prev = currentSlideIndex - 1;
                setCurrentSlideIndex(prev);
                onJumpToTab(pitchTracks[prev].targetTab);
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-forest-900 border border-slate-200 dark:border-emerald-800 disabled:opacity-40"
            >
              Previous Slide
            </button>
            <button
              disabled={currentSlideIndex === pitchTracks.length - 1}
              onClick={() => {
                const next = currentSlideIndex + 1;
                setCurrentSlideIndex(next);
                onJumpToTab(pitchTracks[next].targetTab);
              }}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-forest-900 border border-slate-200 dark:border-emerald-800 disabled:opacity-40"
            >
              Next Slide
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md"
          >
            Close Teleprompter
          </button>
        </div>
      </div>
    </div>
  );
}
