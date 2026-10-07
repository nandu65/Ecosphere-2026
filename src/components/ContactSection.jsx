import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import BioloopLogo from './BioloopLogo';
import { CONTACT_DATA, BRAND_CONTENT } from '../content';
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles, Building, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#3FAE6A', '#F5A524', '#65C98E', '#FFB84D'],
      });
    } catch (err) {
      // offline safe
    }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-cream text-charcoal relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Contact Header + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-leaf/20 text-leaf-dark border border-leaf/30 uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-charcoal">
                Contact BioLoop
              </h2>
              <p className="mt-3 text-sm text-charcoal-muted leading-relaxed">
                Connect directly with our team regarding food waste diversion, canteen partnerships, slurry off-take, or carbon accounting inquiries.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="p-6 rounded-3xl bg-white border border-cream-border shadow-sm space-y-4">
              {/* Phone Link */}
              <a
                href={`tel:${CONTACT_DATA.phone}`}
                className="flex items-center gap-3 p-3 rounded-2xl bg-cream/50 hover:bg-cream border border-cream-border transition-colors group"
              >
                <div className="w-10 h-10 rounded-2xl bg-forest-dark text-leaf-light flex items-center justify-center font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-charcoal-muted uppercase">Phone (Tap to Call)</div>
                  <div className="text-base font-extrabold font-mono text-charcoal group-hover:text-forest transition-colors">
                    {CONTACT_DATA.phone}
                  </div>
                </div>
              </a>

              {/* Email Link */}
              <a
                href={`mailto:${CONTACT_DATA.email}`}
                className="flex items-center gap-3 p-3 rounded-2xl bg-cream/50 hover:bg-cream border border-cream-border transition-colors group"
              >
                <div className="w-10 h-10 rounded-2xl bg-forest-dark text-amber flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-charcoal-muted uppercase">Email (Mailto)</div>
                  <div className="text-base font-extrabold font-mono text-charcoal group-hover:text-forest transition-colors">
                    {CONTACT_DATA.email}
                  </div>
                </div>
              </a>

              {/* Company Identity */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-cream/50 border border-cream-border">
                <div className="w-10 h-10 rounded-2xl bg-forest-dark text-leaf-light flex items-center justify-center font-bold">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-charcoal-muted uppercase">Organization</div>
                  <div className="text-sm font-bold text-charcoal">{CONTACT_DATA.companyName}</div>
                </div>
              </div>
            </div>

            {/* Event & Location Badge */}
            <div className="p-4 rounded-2xl bg-forest-dark text-cream flex items-center justify-between text-xs font-mono">
              <span className="text-leaf-light font-bold">Event Presentation:</span>
              <span className="text-amber font-bold">{BRAND_CONTENT.eventTag}</span>
            </div>
          </div>

          {/* Right Column: Front-End Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white border border-cream-border shadow-xl relative overflow-hidden">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-cream-border pb-4 mb-4">
                  <h3 className="text-2xl font-bold font-heading text-charcoal">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-1">
                    Inquire about pilot onboarding, institutional collection, or emissions accounting.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-1 font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Verma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 rounded-2xl bg-cream/60 border border-cream-border text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-leaf font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-1 font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@institution.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 rounded-2xl bg-cream/60 border border-cream-border text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-leaf font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-1 font-mono">
                    Organisation / Institution
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Campus Living Dining Hall / City Canteen"
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    className="w-full p-3 rounded-2xl bg-cream/60 border border-cream-border text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-leaf font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-charcoal-muted mb-1 font-mono">
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Describe your kitchen volume or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 rounded-2xl bg-cream/60 border border-cream-border text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-leaf font-medium"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl font-bold text-sm bg-forest hover:bg-forest-light text-white shadow-lg transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-leaf-light transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-center text-[11px] text-charcoal-muted mt-2 font-mono">
                    * Static demo state. Instant confirmation.
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-leaf/20 text-forest mx-auto flex items-center justify-center border-2 border-leaf animate-bounce">
                  <CheckCircle2 className="w-8 h-8 text-leaf-dark" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-charcoal">
                  Thanks, we'll get back to you!
                </h3>
                <p className="text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name || 'Partner'}</strong>. Your inquiry for <strong>{formData.organisation || 'your kitchen'}</strong> has been registered. Our team will contact you shortly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', organisation: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-bold bg-cream text-charcoal hover:bg-forest hover:text-white border border-cream-border transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ========================================================
            FOOTER
        ======================================================== */}
        <footer className="pt-12 border-t border-cream-border text-xs text-charcoal-muted">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8">
            <div className="md:col-span-6 space-y-3">
              <BioloopLogo />
              <p className="text-xs text-charcoal-muted max-w-md mt-2 leading-relaxed">
                "{BRAND_CONTENT.tagline}" — {BRAND_CONTENT.heroSubheadline}
              </p>
            </div>

            <div className="md:col-span-3 space-y-2">
              <div className="font-bold uppercase tracking-wider text-charcoal font-mono text-[11px]">
                Quick Links
              </div>
              <ul className="space-y-1 text-xs">
                <li><button onClick={() => scrollTo('hero')} className="hover:text-forest">Home</button></li>
                <li><button onClick={() => scrollTo('about')} className="hover:text-forest">About & Team</button></li>
                <li><button onClick={() => scrollTo('products')} className="hover:text-forest">Products & Services</button></li>
                <li><button onClick={() => scrollTo('customers')} className="hover:text-forest">Customers & Industries</button></li>
                <li><button onClick={() => scrollTo('ask-bioloop')} className="hover:text-forest font-bold text-amber-dark">Ask BioLoop (Chatbot)</button></li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-2">
              <div className="font-bold uppercase tracking-wider text-charcoal font-mono text-[11px]">
                College Business Finale
              </div>
              <div className="p-3 rounded-xl bg-white border border-cream-border text-[11px] font-mono space-y-1">
                <div className="font-bold text-forest">{BRAND_CONTENT.eventTag}</div>
                <div>{BRAND_CONTENT.eventSubtitle}</div>
                <div className="text-leaf-dark font-semibold">100% Offline Projector Ready</div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-cream-border flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px]">
            <div>{CONTACT_DATA.copyright}</div>
            <div className="text-forest font-bold">
              {CONTACT_DATA.companyName}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
