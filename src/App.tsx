/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import InteractiveTriage from "./components/InteractiveTriage";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import FaqSection from "./components/FaqSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500/30 selection:text-amber-200 flex flex-col font-sans">
      {/* Strict Top Bar Contract Header */}
      <Navbar />

      {/* Main Page Flow following the Proposition -> Mechanism -> Proof -> Conversion sequence */}
      <main className="flex-1">
        {/* 1. Hero Section with immediate value proposition and WhatsApp CTAs */}
        <Hero />

        {/* 2. Áreas de Atuação (Services) with interactive tabs and detailed modals */}
        <ServicesSection />

        {/* 3. Interactive Case Triage / Legal Diagnosis Tool for high conversion */}
        <InteractiveTriage />

        {/* 4. Sobre o Dr. Yago Rangel Ramos (Social Proof, 10+ years, OAB/RJ 209.621) */}
        <AboutSection />

        {/* 5. Como Funciona o Atendimento (Step-by-step 1, 2, 3) */}
        <ProcessSection />

        {/* 6. Perguntas Frequentes (FAQ Interactive Accordion) */}
        <FaqSection />
      </main>

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />

      {/* Comprehensive Legal Footer with OAB ethics notice */}
      <Footer />
    </div>
  );
}
