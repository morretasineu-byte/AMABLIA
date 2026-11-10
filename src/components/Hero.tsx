import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

interface HeroProps {
  onDiscoverClick: () => void;
  onAboutClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscoverClick, onAboutClick }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF7F2]"
    >
      {/* Subtle warm architectural atmospheric glow */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#F3ECE4]/80 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-[#EFE6DC]/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand statement & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean unboxed kicker with typographic separator */}
            <div className="flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-[#887D73] mb-6 font-medium">
              <span>AMABLIA</span>
              <span className="text-[#C89B88]">·</span>
              <span>Inteligencia Artificial & Automatización</span>
            </div>

            {/* Main Headline with balanced luxury serif touch */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl tracking-tight text-[#1C1917] font-light leading-[1.12] mb-8 max-w-2xl text-balance">
              La <span className="font-serif-luxury italic font-normal text-[#1C1917]">inteligencia artificial</span> que trabaja para tu negocio.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#6A625B] font-normal leading-relaxed mb-10 max-w-xl">
              Diseñamos sistemas inteligentes que automatizan procesos, mejoran la atención al cliente y ayudan a las empresas a crecer. Tecnología avanzada, pensada para las personas.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onDiscoverClick}
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-medium tracking-wide text-[#FAF7F2] bg-[#1C1917] hover:bg-[#2C2724] rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.99] whitespace-nowrap"
              >
                <span>Descubre lo que podemos hacer por tu negocio</span>
                <ArrowDown size={16} className="text-[#E8DFD5] transition-transform duration-200 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onAboutClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium tracking-wide text-[#4A423B] bg-transparent hover:bg-[#F2EAE0] border border-[#E0D5C7] rounded-full transition-all duration-200 whitespace-nowrap"
              >
                <span>Conoce AMABLIA</span>
                <ArrowUpRight size={15} className="text-[#8C8074]" />
              </button>
            </div>

            {/* Quiet human-centric philosophy trust note */}
            <div className="pt-12 mt-10 border-t border-[#EAE2D8]/80 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-[#80756B]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C89B88]" />
                <span>Sensibilidad humana</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                <span>Sistemas a medida</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#968A7D]" />
                <span>Metodología probada</span>
              </div>
            </div>
          </div>

          {/* Right Column: Abstract Art Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative soft border */}
              <div className="relative p-2.5 sm:p-3 bg-gradient-to-b from-[#F3ECE4] to-[#EAE0D4] rounded-3xl shadow-[0_12px_40px_rgba(28,25,23,0.06)] border border-[#E4D8CA]">
                <div className="relative aspect-[4/5] sm:aspect-[16/18] overflow-hidden rounded-2xl bg-[#EFE8DF]">
                  <img
                    src="/src/assets/images/hero_amablia_abstract_1794311286476.jpg"
                    alt="Escultura abstracta que simboliza la conexión armónica entre tecnología, inteligencia y personas"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle warm scrim for luxury depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/25 via-transparent to-transparent pointer-events-none" />

                  {/* Tactile overlay caption */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#FAF7F2]/90 backdrop-blur-md border border-[#FAF7F2]/60 text-xs text-[#524B44] shadow-sm">
                    <p className="font-serif-luxury italic text-sm text-[#1C1917] mb-0.5">
                      "Tecnología con sensibilidad humana"
                    </p>
                    <p className="text-[11px] text-[#7C7166]">
                      Sistemas que comprenden el contexto y potencian a las personas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Minimal floating geometric accent */}
              <div className="absolute -bottom-4 -left-4 hidden sm:block p-3.5 bg-[#FAF7F2] border border-[#E2D6C7] rounded-2xl shadow-sm text-xs text-[#5C534B]">
                <span className="font-serif-luxury italic text-[#C89B88] text-base mr-1.5">✦</span>
                <span className="tracking-wide">Diseño e integración a medida</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
