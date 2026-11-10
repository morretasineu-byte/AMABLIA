import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { Sectors } from './components/Sectors';
import { WhyUs } from './components/WhyUs';
import { CtaBanner } from './components/CtaBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LegalDocType, ServiceItem } from './types';

export default function App() {
  const [legalDoc, setLegalDoc] = useState<LegalDocType>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const scrollToContact = () => {
    const contactElem = document.querySelector('#contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Focus on the first input after a brief delay
      setTimeout(() => {
        const nameInput = document.getElementById('name') as HTMLInputElement | null;
        if (nameInput) {
          nameInput.focus();
        }
      }, 400);
    }
  };

  const scrollToSection = (selector: string) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectServiceForConsultation = (serviceTitle: string) => {
    scrollToContact();
    // After scrolling, pre-select or notify if applicable
    setTimeout(() => {
      const messageField = document.getElementById('message') as HTMLTextAreaElement | null;
      if (messageField && !messageField.value) {
        messageField.value = `Hola, me interesa conocer más detalles sobre la implementación de ${serviceTitle} para mi empresa.`;
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1917] flex flex-col font-sans-refined selection:bg-[#EAE0D4] selection:text-[#1C1917]">
      
      {/* Top Navigation */}
      <Header onOpenConsultation={scrollToContact} />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          onDiscoverClick={() => scrollToSection('#soluciones')}
          onAboutClick={() => scrollToSection('#filosofia')}
        />

        {/* Section 2: Nuestra Filosofía */}
        <Philosophy />

        {/* Section 3: Qué Hacemos */}
        <Services onSelectService={(srv) => setSelectedService(srv)} />

        {/* Section 4: Cómo Trabajamos */}
        <Methodology />

        {/* Section 5: Nuestras Soluciones por Sector */}
        <Sectors />

        {/* Section 6: Por Qué AMABLIA */}
        <WhyUs />

        {/* Section 7: Llamada a la Acción */}
        <CtaBanner onCtaClick={scrollToContact} />

        {/* Section 8: Contacto */}
        <Contact onOpenPrivacy={() => setLegalDoc('privacidad')} />
      </main>

      {/* Section 9: Footer */}
      <Footer onOpenLegal={(type) => setLegalDoc(type)} />

      {/* Interactive Modals */}
      <LegalModal type={legalDoc} onClose={() => setLegalDoc(null)} />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForConsultation={handleSelectServiceForConsultation}
      />

    </div>
  );
}
