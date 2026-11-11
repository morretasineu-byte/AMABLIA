import React from 'react';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';

interface BrandPhilosophyProps {
  onCtaClick?: () => void;
}

export const BrandPhilosophy: React.FC<BrandPhilosophyProps> = ({ onCtaClick }) => {
  return (
    <section
      id="filosofia-marca"
      className="py-28 md:py-36 bg-[#F3EDE5] border-y border-[#EDE3D9] relative overflow-hidden"
    >
      {/* Delicate warm ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full bg-[#E8DDD0]/50 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-2 text-xs tracking-[0.22em] uppercase text-[#A39A91] font-semibold mb-4">
            <span>NUESTRA FILOSOFÍA</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-[#292D32] leading-[1.12] text-balance mb-6">
            La inteligencia <span className="font-serif-editorial italic font-normal text-[#292D32]">puede ser amable.</span>
          </h2>

          <p className="text-lg sm:text-xl font-light text-[#59524A] leading-relaxed">
            AMABLIA nace de la unión de dos ideas: <strong className="font-medium text-[#292D32]">amable</strong> e <strong className="font-medium text-[#292D32]">inteligencia artificial</strong>.
          </p>
        </div>

        {/* Conceptual Name Origin Card (Visual Identity Showcase) */}
        <div className="mb-20 p-8 sm:p-14 rounded-3xl bg-[#F8F5F0] border border-[#DDD1C3] shadow-[0_6px_30px_rgba(41,45,50,0.03)] relative overflow-hidden">
          
          {/* Subtle architectural background line */}
          <div
            className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border border-[#D4B98C]/20 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Origin formula breakdown */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#8C8074] font-semibold mb-6 block">
                Origen conceptual del nombre
              </span>

              <div className="space-y-6">
                
                {/* AMABLE block */}
                <div className="p-5 rounded-2xl bg-[#F3EDE5] border border-[#E0D4C5] transition-all hover:border-[#D4B98C]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl sm:text-2xl font-light tracking-widest text-[#292D32] font-serif-editorial italic">
                        AMABL
                      </span>
                      <span className="text-base text-[#D4B98C] font-semibold tracking-wider font-sans">
                        · E
                      </span>
                      <span className="text-[11px] text-[#8C8074] font-sans font-normal ml-1">
                        (Amable)
                      </span>
                    </div>
                    <Heart size={18} className="text-[#D9BFC0]" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs sm:text-sm text-[#59524A] leading-relaxed">
                    Cercanía, empatía, naturalidad y sensibilidad humana en cada interacción.
                  </p>
                </div>

                {/* Plus operator with delicate connecting graphic */}
                <div className="flex items-center justify-center -my-2 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-[#EDE3D9] border border-[#DDD1C3] flex items-center justify-center text-xs font-serif-editorial italic text-[#8C8074]">
                    +
                  </div>
                </div>

                {/* IA block */}
                <div className="p-5 rounded-2xl bg-[#F3EDE5] border border-[#E0D4C5] transition-all hover:border-[#D4B98C]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl sm:text-2xl font-semibold tracking-wider text-[#292D32]">
                      IA <span className="text-xs font-normal text-[#8C8074] font-sans">/ Inteligencia Artificial</span>
                    </span>
                    <Sparkles size={18} className="text-[#D4B98C]" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs sm:text-sm text-[#59524A] leading-relaxed">
                    Tecnología, automatización de procesos y sistemas que aprenden y actúan con criterio.
                  </p>
                </div>

              </div>

              {/* Equals Result Result */}
              <div className="mt-8 pt-6 border-t border-[#E0D4C5] flex items-baseline justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#A39A91] block">Identidad resultante</span>
                  <span className="text-2xl sm:text-3xl font-medium tracking-[0.2em] text-[#292D32]">
                    AMABL<span className="text-[#D4B98C]">IA</span>
                  </span>
                </div>
                <span className="text-xs font-serif-editorial italic text-[#8C8074]">
                  Tecnología con sensibilidad humana
                </span>
              </div>
            </div>

            {/* Right: Narrative Editorial Manifesto */}
            <div className="lg:col-span-7 lg:pl-6 flex flex-col justify-between space-y-6 text-[#4A433B] text-base sm:text-lg leading-relaxed font-light">
              <p>
                Creemos que la tecnología más avanzada también puede ser <strong className="font-medium text-[#292D32]">cercana, natural y humana</strong>. Por eso diseñamos agentes inteligentes y sistemas de automatización que trabajan para las personas, no en su lugar.
              </p>

              <div className="p-6 rounded-2xl bg-[#EDE3D9]/50 border-l-2 border-[#D4B98C] space-y-3">
                <p className="text-sm sm:text-base text-[#3E3831] leading-relaxed">
                  <strong className="font-semibold text-[#292D32]">Agentes amables</strong> que escuchan, comprenden y ayudan. Que atienden a tus clientes, responden sus preguntas y facilitan sus gestiones con rapidez y empatía.
                </p>
                <p className="text-sm sm:text-base text-[#3E3831] leading-relaxed">
                  <strong className="font-semibold text-[#292D32]">Sistemas</strong> que liberan tiempo, simplifican procesos y permiten que las personas se concentren en lo que realmente importa.
                </p>
              </div>

              <p className="text-base sm:text-lg font-normal text-[#292D32]">
                Porque automatizar no significa perder el trato humano. Significa tener <span className="font-serif-editorial italic font-medium">más tiempo para ofrecerlo</span>.
              </p>

              {/* Highlighted Closing Brand Statement */}
              <div className="pt-6 border-t border-[#E0D4C5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg sm:text-xl font-medium text-[#292D32] tracking-tight">
                    AMABLIA. <span className="font-serif-editorial italic text-[#D4B98C] font-normal">Inteligencia artificial con sensibilidad humana.</span>
                  </h4>
                  <p className="text-xs text-[#8C8074] mt-1">
                    Automatizamos tareas. Humanizamos experiencias.
                  </p>
                </div>

                {onCtaClick && (
                  <button
                    onClick={onCtaClick}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide text-[#F8F5F0] bg-[#292D32] hover:bg-[#3D434A] rounded-full transition-all duration-200 shadow-xs shrink-0 cursor-pointer"
                  >
                    <span>Conoce cómo lo aplicamos</span>
                    <ArrowRight size={13} className="text-[#EDE3D9]" />
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* 3 Core Manifestation Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-[#F8F5F0] border border-[#DDD1C3]">
            <span className="text-xs font-serif-editorial italic text-[#D4B98C] block mb-2">01 / Cercanía</span>
            <h4 className="text-base font-semibold text-[#292D32] mb-2">
              Agentes amables. Negocios más humanos.
            </h4>
            <p className="text-xs text-[#59524A] leading-relaxed">
              Conversaciones que no parecen un formulario frío ni un robot mecánico. Diseñamos un tono respetuoso, cálido y útil.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#F8F5F0] border border-[#DDD1C3]">
            <span className="text-xs font-serif-editorial italic text-[#D4B98C] block mb-2">02 / Simplicidad</span>
            <h4 className="text-base font-semibold text-[#292D32] mb-2">
              Tecnología que entiende, ayuda y conecta.
            </h4>
            <p className="text-xs text-[#59524A] leading-relaxed">
              Herramientas que reducen fricciones en lugar de crear nuevas complicaciones. La técnica invisible que resuelve lo cotidiano.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#F8F5F0] border border-[#DDD1C3]">
            <span className="text-xs font-serif-editorial italic text-[#D4B98C] block mb-2">03 / Propósito</span>
            <h4 className="text-base font-semibold text-[#292D32] mb-2">
              Más tiempo para lo que realmente importa.
            </h4>
            <p className="text-xs text-[#59524A] leading-relaxed">
              Devolver horas de calidad a los equipos para que puedan mirar a sus clientes a los ojos y atenderles con la calma que merecen.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
