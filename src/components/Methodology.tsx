import React from 'react';
import { Ear, Compass, Cog, TrendingUp } from 'lucide-react';

export const Methodology: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Escuchamos',
      icon: Ear,
      description: 'Conocemos tu empresa o clínica, tus procesos diarios y los problemas que quieres resolver.',
      detail: 'Hablamos contigo para entender qué tareas quitan más tiempo a tu equipo, qué dudas se repiten y dónde se pierden oportunidades de atención.',
    },
    {
      number: '02',
      title: 'Diseñamos',
      icon: Compass,
      description: 'Diseñamos cómo funcionará el sistema, qué responderá y qué tareas realizará.',
      detail: 'Definimos de forma visual las respuestas, los momentos en los que interviene y cómo se conectará con las herramientas que ya utilizas habitualmente.',
    },
    {
      number: '03',
      title: 'Implementamos',
      icon: Cog,
      description: 'Configuramos e integramos los sistemas para que comiencen a trabajar en tu negocio.',
      detail: 'Ponemos en marcha la solución de manera segura, realizamos pruebas conjuntas y enseñamos a tu equipo a utilizarla con total sencillez.',
    },
    {
      number: '04',
      title: 'Evolucionamos',
      icon: TrendingUp,
      description: 'Te acompañamos continuamente para supervisar, resolver dudas y mejorar las soluciones.',
      detail: 'Revisamos periódicamente cómo está respondiendo el sistema, afinamos detalles y añadimos nuevas funciones a medida que tu empresa crece.',
    },
  ];

  return (
    <section id="metodologia" className="py-24 md:py-32 bg-[#F3EDE5] border-y border-[#EDE3D9] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#A39A91] font-medium mb-4">
          <span>04</span>
          <span className="text-[#D4B98C]">/</span>
          <span>Cómo Trabajamos</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#292D32] leading-[1.18] mb-6 text-balance">
            Tecnología diseñada <span className="font-serif-editorial italic font-normal">alrededor de tu negocio.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#59524A] leading-relaxed">
            Un proceso paso a paso, cercano y transparente. Te acompañamos desde la primera conversación para que la tecnología se adapte a ti y no al revés.
          </p>
        </div>

        {/* Minimalist Visual Stepper Timeline */}
        <div className="relative">
          
          {/* Subtle connecting hairline on desktop */}
          <div
            className="hidden lg:block absolute top-[52px] left-[60px] right-[60px] h-[1px] bg-gradient-to-r from-[#DDD1C3] via-[#D4B98C] to-[#DDD1C3]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="group relative flex flex-col pt-3"
                >
                  {/* Step header node with index and icon */}
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-[#F8F5F0] border border-[#DDD1C3] text-[#292D32] flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:border-[#D4B98C]">
                      <Icon size={18} strokeWidth={1.5} className="text-[#59524A] group-hover:text-[#292D32]" />
                    </div>
                    <span className="text-sm font-serif-editorial italic tracking-widest text-[#8C8074]">
                      Paso {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium tracking-tight text-[#292D32] mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#3E3831] font-medium leading-relaxed mb-3">
                    {step.description}
                  </p>

                  {/* Granular detail */}
                  <p className="text-xs text-[#73675B] leading-relaxed mt-auto pt-2 border-t border-[#E0D4C5]">
                    {step.detail}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
