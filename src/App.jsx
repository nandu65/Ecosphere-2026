import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomepageAbout from './components/HomepageAbout';
import HowItWorks from './components/HowItWorks';
import ProductsServices from './components/ProductsServices';
import CustomersIndustries from './components/CustomersIndustries';
import AskBioLoop from './components/AskBioLoop';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-forest-dark text-cream selection:bg-leaf selection:text-forest-dark flex flex-col font-sans">
      {/* Sticky Translucent Navigation Bar */}
      <Navbar />

      {/* Main Single Page Content Flow */}
      <main className="flex-1 w-full">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Homepage (Problem, What Are We, Stat Strip, Scale 20x, Founders) */}
        <HomepageAbout />

        {/* 3. How It Works (4-Stage Pinned Stepper) */}
        <HowItWorks />

        {/* 4. Products & Services + Impact Calculator Live Demo */}
        <ProductsServices />

        {/* 5. Customers & Industries + 5 Impact Indicators */}
        <CustomersIndustries />

        {/* 6. Ask BioLoop (Dedicated Offline Knowledge Chatbot) */}
        <AskBioLoop />

        {/* 7. Contact & Footer (ECOSPHERE 2026) */}
        <ContactSection />
      </main>
    </div>
  );
}
