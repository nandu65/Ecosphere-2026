import React, { useState, useEffect } from 'react';
import BioloopLogo from './BioloopLogo';
import { BRAND_CONTENT } from '../content';
import { Menu, X, MessageSquareCode, ArrowUpRight, Flame } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'products', 'customers', 'ask-bioloop', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About & Team' },
    { id: 'products', label: 'Products & Services' },
    { id: 'customers', label: 'Customers & Industries' },
    { id: 'ask-bioloop', label: 'Ask BioLoop' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-forest-dark/95 backdrop-blur-md py-3 border-b border-forest-border shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="cursor-pointer transition-transform hover:scale-105 active:scale-95"
            onClick={() => scrollTo('hero')}
          >
            <BioloopLogo />
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-forest/80 backdrop-blur-sm px-4 py-1.5 rounded-full border border-forest-border shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-forest-light font-semibold shadow-sm'
                      : 'text-cream/80 hover:text-white hover:bg-forest-light/50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-leaf rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA: Ask BioLoop Assistant */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scrollTo('ask-bioloop')}
              className="group relative px-4 py-2 rounded-full text-xs font-bold text-forest-dark bg-amber hover:bg-amber-glow shadow-md shadow-amber/20 transition-all duration-200 flex items-center gap-1.5 hover:scale-[1.03] active:scale-[0.98]"
            >
              <MessageSquareCode className="w-3.5 h-3.5 fill-forest-dark" />
              <span>Ask BioLoop</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => scrollTo('ask-bioloop')}
              className="px-3 py-1.5 rounded-full text-xs font-bold text-forest-dark bg-amber"
            >
              Ask Bot
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-cream hover:text-white bg-forest border border-forest-border"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-forest-dark/95 backdrop-blur-xl border border-forest-border shadow-2xl space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="w-full text-left px-4 py-2 rounded-xl text-sm font-medium text-cream hover:text-white hover:bg-forest transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-forest-border">
              <button
                onClick={() => scrollTo('contact')}
                className="w-full py-2.5 rounded-xl text-xs font-bold bg-leaf hover:bg-leaf-dark text-white text-center transition-colors"
              >
                Contact Team
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
