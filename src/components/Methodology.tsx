import React from 'react';
import { Ear, Compass, Cog, TrendingUp } from 'lucide-react';

export const Methodology: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Escuchamos',
      icon: Ear,
      description: 'Conocemos tu empresa, tus procesos diarios y los problemas concretos que quieres resolver.',
      detail: 'Nos sumergimos en la operativa real: qué canales consumen más tiempo, qué dudas se repiten y dónde se escapan oportunidades.',
    },
    {
      number: '02',
      title: 'Diseñamos',
      icon: Compass,
      description: 'Identificamos las oportunidades y creamos una solución adaptada a tus necesidades.',
      detail: 'Modelamos la arquitectura conversacional, los flujos lógicos y las conexiones entre herramientas antes de tocar una sola línea técnica.',
    },
    {
      number: '03',
      title: 'Implementamos',
      icon: Cog,
      description: 'Configuramos e integramos los sistemas para que empiecen a trabajar en tu negocio.',
      detail: 'Conectamos tus sistemas en un entorno seguro, realizamos pruebas de rigor y desplegamos la solución con acompañamiento a tu equipo.',
    },
    {
      number: '04',
      title: 'Evolucionamos',
      icon: TrendingUp,
      description: 'Supervisamos, optimizamos y mejoramos las soluciones para acompañar el crecimiento de tu empresa.',
      detail: 'Analizamos las conversaciones reales y la eficiencia operativa mes a mes, afinando respuestas y expandiendo capacidades.',
    },
  ];

  return (
    <section id="metodologia" className="py-24 md:py-32 bg-[#F5EFEB] border-y border-[#EAE0D4] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#887D73] font-medium mb-4">
          <span>03</span>
          <span className="text-[#C89B88]">/</span>
          <span>Cómo Trabajamos</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#1C1917] leading-[1.18] mb-6 text-balance">
            Tecnología diseñada <span className="font-serif-luxury italic font-normal">alrededor de tu negocio.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6A625B] leading-relaxed">
            Una metodología clara y transparente donde la técnica está al servicio de la estrategia, no al revés.
            Sin cajas negras ni sorpresas.
          </p>
        </div>

        {/* Minimalist Visual Stepper Timeline */}
        <div className="relative">
          
          {/* Subtle connecting hairline on desktop */}
          <div
            className="hidden lg:block absolute top-[52px] left-[60px] right-[60px] h-[1px] bg-gradient-to-r from-[#D8C7B5] via-[#C89B88] to-[#D8C7B5]"
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
                    <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#D9CDBF] text-[#1C1917] flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:border-[#C89B88]">
                      <Icon size={18} strokeWidth={1.5} className="text-[#594F45] group-hover:text-[#1C1917]" />
                    </div>
                    <span className="text-sm font-serif-luxury italic tracking-widest text-[#948477]">
                      Etapa {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium tracking-tight text-[#1C1917] mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#4E463E] font-medium leading-relaxed mb-3">
                    {step.description}
                  </p>

                  {/* Granular detail */}
                  <p className="text-xs text-[#7B7065] leading-relaxed mt-auto pt-2 border-t border-[#E6DBCF]">
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
