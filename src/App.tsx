import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Services } from './components/Services';
import { PracticalExamples } from './components/PracticalExamples';
import { BrandPhilosophy } from './components/BrandPhilosophy';
import { Methodology } from './components/Methodology';
import { Sectors } from './components/Sectors';
import { WhyUs } from './components/WhyUs';
import { CtaBanner } from './components/CtaBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ConsultationCalendarModal } from './components/ConsultationCalendarModal';
import { ServiceItem } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const scrollToContact = () => {
    const contactElem = document.querySelector('#contacto');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
    setTimeout(() => {
      const messageField = document.getElementById('message') as HTMLTextAreaElement | null;
      if (messageField) {
        messageField.value = `Hola, me interesa conocer más detalles sobre la implementación de ${serviceTitle} para mi empresa o clínica.`;
      }
    }, 450);
  };

  const handleConfirmSlot = (dateStr: string, timeStr: string) => {
    scrollToContact();
    setTimeout(() => {
      const messageField = document.getElementById('message') as HTMLTextAreaElement | null;
      if (messageField) {
        messageField.value = `Hola, me gustaría solicitar la consultoría gratuita para el ${dateStr} en el horario de ${timeStr}.`;
      }
    }, 450);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#292D32] flex flex-col font-sans-refined selection:bg-[#EDE3D9] selection:text-[#292D32]">
      
      {/* Top Navigation */}
      <Header onOpenConsultation={() => setIsScheduleModalOpen(true)} />

      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero
          onDiscoverClick={() => scrollToSection('#soluciones')}
          onAboutClick={() => scrollToSection('#filosofia')}
        />

        {/* Section 2: Nuestra Filosofía (with central value proposition) */}
        <Philosophy />

        {/* Section 3: Qué Hacemos (Services) */}
        <Services
          onSelectService={(srv) => setSelectedService(srv)}
          onCtaClick={() => setIsScheduleModalOpen(true)}
        />

        {/* Section 4: Ejemplos Prácticos (New Illustrative Section) */}
        <PracticalExamples onCtaClick={() => setIsScheduleModalOpen(true)} />

        {/* Section 5: La Filosofía AMABLIA (Brand Origin & Concept) */}
        <BrandPhilosophy onCtaClick={() => scrollToSection('#metodologia')} />

        {/* Section 6: Cómo Trabajamos (Methodology) */}
        <Methodology />

        {/* Section 6: Nuestras Soluciones por Sector (DentalIA & Architecture) */}
        <Sectors />

        {/* Section 7: Por Qué AMABLIA */}
        <WhyUs />

        {/* Section 8: Llamada a la Acción (CTA Banner) */}
        <CtaBanner onCtaClick={() => setIsScheduleModalOpen(true)} />

        {/* Section 9: Contacto */}
        <Contact
          onOpenScheduleModal={() => setIsScheduleModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForConsultation={handleSelectServiceForConsultation}
      />

      <ConsultationCalendarModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
        onConfirmSlot={handleConfirmSlot}
      />

    </div>
  );
}
