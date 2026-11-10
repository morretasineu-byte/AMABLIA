import React from 'react';
import { ArrowDown, Calendar } from 'lucide-react';

interface CtaBannerProps {
  onCtaClick: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onCtaClick }) => {
  return (
    <section className="py-24 md:py-28 bg-gradient-to-b from-[#FAF7F2] via-[#F4ECE3] to-[#FAF7F2] relative overflow-hidden">
      {/* Delicate warm ambient highlights */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#EBDDD0]/50 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        
        {/* Subtle decorative accent */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF7F2]/80 border border-[#E3D4C4] text-xs text-[#7A6C60] mb-8 shadow-xs">
          <Calendar size={13} className="text-[#C89B88]" />
          <span>Sesión de diagnóstico inicial sin compromiso</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#1C1917] leading-[1.2] mb-6 text-balance">
          ¿Y si tu negocio pudiera funcionar de una forma <span className="font-serif-luxury italic font-normal">más inteligente?</span>
        </h2>

        {/* Text */}
        <p className="text-base sm:text-lg text-[#635A52] leading-relaxed mb-10 max-w-2xl mx-auto">
          Cuéntanos qué necesitas. Estudiaremos tu caso y descubriremos juntos cómo la inteligencia artificial puede ayudarte a trabajar mejor.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onCtaClick}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-medium tracking-wide text-[#FAF7F2] bg-[#1C1917] hover:bg-[#2E2824] rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] whitespace-nowrap"
          >
            <span>Solicitar una consultoría gratuita</span>
            <ArrowDown size={16} className="text-[#E8DFD5] transition-transform duration-200 group-hover:translate-y-0.5" />
          </button>
        </div>

        <p className="text-xs text-[#8F8175] mt-6">
          Análisis personalizado · Respuesta en menos de 24 horas laborales
        </p>

      </div>
    </section>
  );
};
