import React from 'react';

export const WhyUs: React.FC = () => {
  const pillars = [
    {
      index: '01',
      title: 'Soluciones personalizadas',
      summary: 'Cada sistema se diseña teniendo en cuenta las necesidades reales de cada negocio.',
      detail: 'Rechazamos las plantillas clónicas. Analizamos tu lenguaje corporativo, tu catálogo de servicios y tus reglas operativas para crear una solución ajustada a tu medida.',
    },
    {
      index: '02',
      title: 'Tecnología conectada',
      summary: 'Integramos herramientas y canales para que todo funcione como un único sistema.',
      detail: 'Tus canales de mensajería, agendas, hojas de cálculo, sistemas de cobro y CRMs se comunican en tiempo real sin requerir traspasos manuales de información.',
    },
    {
      index: '03',
      title: 'Más tiempo para lo importante',
      summary: 'Automatizamos tareas para liberar recursos y mejorar la eficiencia.',
      detail: 'Tu equipo recupera horas críticas para enfocarse en la estrategia, el trato cálido presencial y el crecimiento de la empresa, dejando las tareas mecánicas a la IA.',
    },
    {
      index: '04',
      title: 'Acompañamiento continuo',
      summary: 'Seguimos trabajando contigo para optimizar y adaptar las soluciones.',
      detail: 'No entregamos un sistema y nos desentendemos. Evaluamos conversaciones reales, detectamos nuevas oportunidades y refinamos las respuestas mes tras mes.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F5EFEB] border-y border-[#EAE0D4] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#887D73] font-medium mb-4">
          <span>05</span>
          <span className="text-[#C89B88]">/</span>
          <span>Por Qué AMABLIA</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#1C1917] leading-[1.18] mb-6 text-balance">
            No se trata de tener más tecnología. <span className="font-serif-luxury italic font-normal">Se trata de trabajar mejor.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6A625B] leading-relaxed">
            Nuestra propuesta no es añadir capas de herramientas complejas, sino simplificar tu día a día con sistemas inteligentes que realmente resuelven problemas.
          </p>
        </div>

        {/* 4 Pillars Grid with Editorial Typographic Hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((item) => (
            <div
              key={item.index}
              className="group p-8 sm:p-10 rounded-3xl bg-[#FAF7F2] border border-[#E7DDD0] hover:border-[#D8C7B5] transition-all duration-300 shadow-[0_2px_16px_rgba(28,25,23,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-[#EFE5DA]">
                  <span className="font-serif-luxury italic text-2xl text-[#C89B88]">
                    {item.index}
                  </span>
                  <span className="text-[11px] tracking-widest uppercase text-[#96897E] font-medium">
                    Pilar Operativo
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#1C1917] mb-3">
                  {item.title}
                </h3>

                <p className="text-base text-[#4F463F] font-medium leading-relaxed mb-4">
                  {item.summary}
                </p>

                <p className="text-xs sm:text-sm text-[#736A60] leading-relaxed">
                  {item.detail}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F2E8DC] flex items-center gap-2 text-xs text-[#988B7F]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
                <span>Compromiso de calidad AMABLIA</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
