import React from 'react';
import { Sliders, GitMerge, Clock3, HeartHandshake } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const pillars = [
    {
      index: '01',
      icon: Sliders,
      title: 'Soluciones personalizadas',
      summary: 'Cada sistema se diseña teniendo en cuenta las necesidades reales de cada negocio.',
      detail: 'No creemos en paquetes cerrados que te obliguen a cambiar tu forma de trabajar. Estudiamos tus procesos y tus preguntas más habituales para configurar un sistema adaptado a tu día a día.',
      benefit: 'Qué obtienes: un sistema configurado exactamente para tu negocio, con tu tono y tus servicios.',
    },
    {
      index: '02',
      icon: GitMerge,
      title: 'Tecnología conectada',
      summary: 'Integramos herramientas y canales para que todo funcione como un único sistema.',
      detail: 'Buscamos que tus mensajes, agendas, formularios y programas de gestión compartan la información necesaria sin que tengas que introducir los mismos datos dos veces.',
      benefit: 'Qué obtienes: menos errores por traspaso manual y toda la información organizada en su lugar.',
    },
    {
      index: '03',
      icon: Clock3,
      title: 'Más tiempo para lo que realmente importa',
      summary: 'Automatizamos tareas para liberar recursos y humanizar las experiencias de tus clientes.',
      detail: 'Al delegar en sistemas inteligentes las respuestas rutinarias y las tareas administrativas repetitivas, tu equipo puede dedicar toda su atención al trato cercano, cálido y personal.',
      benefit: 'Qué obtienes: más tiempo libre para atender presencialmente y mejorar la calidad de servicio.',
    },
    {
      index: '04',
      icon: HeartHandshake,
      title: 'Acompañamiento continuo',
      summary: 'Seguimos trabajando contigo para optimizar y adaptar las soluciones.',
      detail: 'No nos limitamos a instalar una herramienta y marcharnos. Te acompañamos tras la puesta en marcha para resolver dudas, revisar el funcionamiento y ajustar las respuestas según lo que necesites.',
      benefit: 'Qué obtienes: tranquilidad de contar con un equipo técnico cercano ante cualquier necesidad.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F3EDE5] border-y border-[#EDE3D9] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#A39A91] font-medium mb-4">
          <span>06</span>
          <span className="text-[#D4B98C]">/</span>
          <span>Por Qué AMABLIA</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#292D32] leading-[1.18] mb-6 text-balance">
            No se trata de tener más tecnología. <span className="font-serif-editorial italic font-normal">Se trata de trabajar mejor.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#59524A] leading-relaxed">
            Nuestra propuesta no es añadir capas de herramientas complejas, sino simplificar el trabajo diario con soluciones inteligentes que aportan utilidad real.
          </p>
        </div>

        {/* 4 Pillars Grid with Concrete Client Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.index}
                className="group p-8 sm:p-10 rounded-3xl bg-[#F8F5F0] border border-[#DDD1C3] hover:border-[#D4B98C] transition-all duration-300 shadow-[0_2px_16px_rgba(41,45,50,0.02)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8DDD0]">
                    <div className="w-10 h-10 rounded-xl bg-[#EDE3D9] flex items-center justify-center text-[#292D32]">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <span className="font-serif-editorial italic text-xl text-[#A39A91]">
                      {item.index}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[#292D32] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-base text-[#3E3831] font-medium leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  <p className="text-xs sm:text-sm text-[#59524A] leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-[#E8DDD0] bg-[#F3EDE5]/60 -mx-8 -mb-8 sm:-mx-10 sm:-mb-10 p-5 rounded-b-3xl text-xs text-[#4A433B]">
                  <span className="font-semibold text-[#292D32]">{item.benefit}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
