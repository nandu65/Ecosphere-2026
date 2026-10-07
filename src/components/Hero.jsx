import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BRAND_CONTENT } from '../content';
import { ArrowRight, Flame, Leaf, MessageSquareCode, ChevronDown, Sparkles, Activity, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [liveCounter, setLiveCounter] = useState(242.6);

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveCounter(prev => +(prev + 0.08).toFixed(2));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  const headlineWords = BRAND_CONTENT.tagline.split(" ");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[94vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-forest-dark text-cream overflow-hidden"
    >
      {/* 1. Animated Rising Biogas Bubbles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-t from-leaf/25 to-amber/35 border border-amber/30 blur-[1px] animate-bubble-rise"
            style={{
              left: `${(i * 6.5 + 3) % 94}%`,
              width: `${12 + (i % 5) * 14}px`,
              height: `${12 + (i % 5) * 14}px`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${4.5 + (i % 4) * 2.2}s`,
              bottom: '-40px',
            }}
          />
        ))}
      </div>

      {/* 2. Background Glows with subtle mouse parallax */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-gradient-to-br from-leaf/20 via-forest/50 to-amber/15 rounded-full blur-3xl pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x}px), calc(-50% + ${mousePos.y}px))`,
        }}
      />

      {/* 3. Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Event Badge with Luminous Accent */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-forest-card/90 border border-forest-border text-xs text-cream/90 shadow-xl shadow-black/40 mb-6 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-leaf animate-ping" />
          <span className="font-bold text-leaf-light">{BRAND_CONTENT.legalName}</span>
          <span className="text-forest-border">|</span>
          <span className="text-amber font-mono font-bold">{BRAND_CONTENT.eventTag}</span>
          <span className="text-forest-border hidden sm:inline">|</span>
          <span className="text-cream/80 hidden sm:inline font-medium">{BRAND_CONTENT.eventSubtitle}</span>
        </motion.div>

        {/* Word-by-Word Headline Reveal */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.12] max-w-4xl">
          {headlineWords.map((word, i) => {
            const isAccent = word.toLowerCase().includes('clean') || word.toLowerCase().includes('fuel') || word.toLowerCase().includes('future');
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`inline-block mr-3 ${
                  isAccent
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-leaf-light via-leaf to-amber drop-shadow-sm'
                    : 'text-white'
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </h1>

        {/* One-line Problem + Solution Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-6 text-base sm:text-xl text-cream/85 max-w-3xl font-normal leading-relaxed"
        >
          {BRAND_CONTENT.heroSubheadline}
        </motion.p>

        {/* 4. Self-Drawing Circular Loop Motif Card with Radiant Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative my-8 sm:my-10 w-full max-w-2xl"
        >
          <div className="relative p-7 sm:p-9 rounded-3xl bg-forest/90 border border-forest-border shadow-2xl backdrop-blur-xl overflow-hidden group hover:border-leaf/50 transition-all">
            {/* Luminous edge glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber/15 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Animated SVG Circular Loop Ring */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center flex-shrink-0">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="48"
                    stroke="#1E4D36"
                    strokeWidth="8"
                    fill="none"
                  />
                  <motion.circle
                    cx="60"
                    cy="60"
                    r="48"
                    stroke="url(#loopGradientHero)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                  />
                  <defs>
                    <linearGradient id="loopGradientHero" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3FAE6A" />
                      <stop offset="50%" stopColor="#65C98E" />
                      <stop offset="100%" stopColor="#F5A524" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
                  <Flame className="w-6 h-6 text-amber animate-pulse" />
                  <span className="text-[12px] font-bold uppercase tracking-wider text-leaf-light mt-0.5 font-heading">
                    {BRAND_CONTENT.name}
                  </span>
                  <span className="text-[9px] text-cream/70 font-mono">100% Loop</span>
                </div>
              </div>

              {/* Loop Sequence Summary with hover lift */}
              <div className="flex-1 space-y-2.5 text-left w-full">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-forest-dark/80 border border-forest-border/70 shadow-sm hover:border-leaf/40 transition-colors">
                  <div className="w-7 h-7 rounded-xl bg-leaf/20 text-leaf-light flex items-center justify-center font-bold text-xs font-mono">
                    1
                  </div>
                  <div className="text-xs">
                    <strong className="text-white block font-heading">Food Waste Collected Separately</strong>
                    <span className="text-cream/70 text-[11px]">Canteens, hostels and hotels — weighed at source</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-forest-dark/80 border border-forest-border/70 shadow-sm hover:border-amber/40 transition-colors">
                  <div className="w-7 h-7 rounded-xl bg-amber/20 text-amber flex items-center justify-center font-bold text-xs font-mono">
                    2
                  </div>
                  <div className="text-xs">
                    <strong className="text-white block font-heading">Anaerobic Digestion</strong>
                    <span className="text-cream/70 text-[11px]">Clean cooking biogas + organic slurry fertiliser</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-forest-dark/80 border border-forest-border/70 shadow-sm hover:border-cyan-400/40 transition-colors">
                  <div className="w-7 h-7 rounded-xl bg-cyan-400/20 text-cyan-300 flex items-center justify-center font-bold text-xs font-mono">
                    3
                  </div>
                  <div className="text-xs">
                    <strong className="text-white block font-heading">Verified Climate Impact</strong>
                    <span className="text-cream/70 text-[11px]">Batch records convert reductions into carbon credits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Two CTAs with Magnetic Glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollTo('how-it-works')}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-leaf to-leaf-light hover:from-leaf-light hover:to-leaf text-forest-dark shadow-xl shadow-leaf/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 group"
          >
            <span>See how it works</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => scrollTo('ask-bioloop')}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-amber to-amber-glow hover:from-amber-glow hover:to-amber text-forest-dark shadow-xl shadow-amber/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5"
          >
            <MessageSquareCode className="w-4 h-4 fill-forest-dark" />
            <span>Ask BioLoop</span>
          </button>
        </motion.div>
      </div>

      {/* Down indicator */}
      <div 
        onClick={() => scrollTo('about')}
        className="cursor-pointer mt-8 text-cream/50 hover:text-leaf-light transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
