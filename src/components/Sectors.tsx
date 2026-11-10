import React from 'react';
import { ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';

export const Sectors: React.FC = () => {
  const dentaliaFeatures = [
    'Agentes IA conversacionales en WhatsApp Business 24/7',
    'Agentes de voz para llamadas telefónicas y desvío de citas',
    'Gestión, confirmación y reprogramación automática de citas',
    'Triaje preliminar y atención inmediata de urgencias dentales',
    'Recordatorios inteligentes y reactivación de pacientes inactivos',
    'Integración fluida con el software de gestión de la clínica',
  ];

  return (
    <section id="sectores" className="py-24 md:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#887D73] font-medium mb-4">
          <span>04</span>
          <span className="text-[#C89B88]">/</span>
          <span>Especialización Sectorial</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#1C1917] leading-[1.18] mb-6 text-balance">
            Cada negocio es diferente. <span className="font-serif-luxury italic font-normal">Su tecnología también debería serlo.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6A625B] leading-relaxed">
            Desarrollamos soluciones especializadas para distintos sectores, adaptándonos a sus procesos, necesidades y formas de trabajar.
            Como marca matriz, AMABLIA aporta la metodología, el rigor tecnológico y la visión global de negocio que sustenta cada división especializada.
          </p>
        </div>

        {/* Brand Architecture Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Showcase: DentalIA Agency */}
          <div className="lg:col-span-8 p-8 sm:p-12 rounded-3xl bg-[#F6F0EA] border border-[#E4D7C8] shadow-[0_8px_32px_rgba(28,25,23,0.03)] flex flex-col justify-between">
            <div>
              {/* Brand hierarchy tag */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E6DCCF] mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#DDD0C1] flex items-center justify-center font-serif-luxury italic text-lg text-[#1C1917]">
                    D
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#8F8174] font-medium block">
                      Marca especializada de AMABLIA
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#1C1917]">
                      DentalIA Agency
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-serif-luxury italic text-[#C89B88] tracking-wide">
                  Solución activa
                </span>
              </div>

              {/* Grid with Photography + Capabilities */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-8">
                
                {/* Photo of Modern Clinic Reception */}
                <div className="md:col-span-5 rounded-2xl overflow-hidden border border-[#E0D3C4] aspect-[4/3] bg-[#EBE2D7]">
                  <img
                    src="/src/assets/images/dentalia_specialty_sector_1794311287865.jpg"
                    alt="Espacio contemporáneo y luminoso de clínica dental, representando la especialización de DentalIA Agency"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Scope Description */}
                <div className="md:col-span-7">
                  <h4 className="text-base sm:text-lg font-medium text-[#1C1917] mb-2">
                    Inteligencia artificial y automatización para clínicas dentales.
                  </h4>
                  <p className="text-sm text-[#665D54] leading-relaxed mb-4">
                    Agentes IA de WhatsApp y voz, gestión de citas, atención inmediata, seguimiento de pacientes y automatización de procesos diseñados específicamente para el ecosistema odontológico.
                  </p>
                  <p className="text-xs text-[#807469] leading-relaxed">
                    Resuelve la saturación telefónica en recepción, evita pérdidas de pacientes por esperas y optimiza la ocupación de sillones.
                  </p>
                </div>

              </div>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 pt-4 border-t border-[#E8DDD0]">
                {dentaliaFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#524941]">
                    <CheckCircle2 size={15} className="text-[#C89B88] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-6 border-t border-[#E6DCCF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-[#83776C]">
                Desarrollado y operado bajo los estándares de ingeniería de AMABLIA
              </span>
              <a
                href="https://dentaliaagency.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-wide text-[#FAF7F2] bg-[#1C1917] hover:bg-[#302B27] rounded-full transition-all duration-200 shadow-sm whitespace-nowrap"
              >
                <span>Descubrir DentalIA Agency</span>
                <ArrowUpRight size={14} className="text-[#E8DFD5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Scalable Multi-Brand Architecture Card */}
          <div className="lg:col-span-4 p-8 sm:p-10 rounded-3xl bg-[#F3ECE4] border border-[#E0D3C3] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#DDD0BF] flex items-center justify-center text-[#7A6E63] mb-6">
                <Layers size={22} strokeWidth={1.5} />
              </div>

              <h4 className="text-xl font-medium tracking-tight text-[#1C1917] mb-3">
                Arquitectura de Marcas Especializadas
              </h4>

              <p className="text-sm text-[#665D54] leading-relaxed mb-6">
                La experiencia de AMABLIA nos permite identificar las particularidades operativas de industrias clave para configurar modelos que comprenden su vocabulario técnico y sus normativas.
              </p>

              <div className="p-4 rounded-2xl bg-[#FAF7F2]/80 border border-[#E4D7C8] mb-6">
                <span className="text-xs uppercase tracking-wider text-[#988A7D] font-medium block mb-1">
                  Metodología Compartida
                </span>
                <p className="text-xs text-[#524A42] leading-relaxed">
                  Cada solución sectorial hereda nuestra base tecnológica común: fiabilidad, protección estricta de datos y trato humano.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-dashed border-[#CFBEAC] text-xs text-[#807264] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[#4A423B]">Próximas marcas sectoriales</span>
                  <span className="font-serif-luxury italic text-[#C89B88]">En desarrollo</span>
                </div>
                <p className="text-[11px] leading-relaxed text-[#857769]">
                  Estructura preparada para la incorporación de nuevas áreas profesionales bajo la misma garantía de calidad.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#DFD1C1] text-xs text-[#887B6F]">
              ¿Perteneces a otro sector? Diseñamos integraciones adaptadas a tu modelo de negocio particular.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
