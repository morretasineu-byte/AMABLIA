import React from 'react';
import { Sparkles, Cpu, Users } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Inteligencia',
      desc: 'Soluciones diseñadas para entender lo que tu cliente necesita y responder con criterio y agilidad.',
      highlight: 'Respuestas contextuales',
    },
    {
      icon: Cpu,
      title: 'Automatización',
      desc: 'Procesos que se ejecutan solos en segundo plano, evitando errores y liberando a tu equipo de tareas repetitivas.',
      highlight: 'Eficiencia en el día a día',
    },
    {
      icon: Users,
      title: 'Conexión',
      desc: 'Tecnología que facilita una comunicación fluida, inmediata y cercana entre tu negocio y tus clientes.',
      highlight: 'Trato humano reforzado',
    },
  ];

  return (
    <section id="filosofia" className="py-24 md:py-32 bg-[#F3EDE5] relative overflow-hidden border-y border-[#EDE3D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section kicker */}
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#A39A91] font-medium mb-4">
          <span>01</span>
          <span className="text-[#D4B98C]">/</span>
          <span>Nuestro Enfoque</span>
        </div>

        {/* Section title and main narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#292D32] leading-[1.18] text-balance">
              La tecnología tiene sentido cuando hace <span className="font-serif-editorial italic font-normal">tu vida más fácil.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-5 text-[#59524A] text-base sm:text-lg leading-relaxed">
            <p>
              Creemos que la inteligencia artificial no debería complicar las cosas, sino hacerlas mejores.
            </p>
            <p>
              Por eso diseñamos soluciones que trabajan en segundo plano para que tu equipo dedique menos tiempo a tareas repetitivas y más tiempo a lo que realmente importa: atender a tus pacientes y clientes con tranquilidad.
            </p>
            <p className="text-[#292D32] font-medium pt-1">
              No implementamos tecnología por implementar. Analizamos cada negocio, identificamos dónde se pierde tiempo y creamos sistemas que aportan valor real desde el primer día.
            </p>
          </div>
        </div>

        {/* PROMINENT CENTRAL VALUE PROPOSITION BANNER */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-[#F8F5F0] border border-[#DDD1C3] shadow-[0_4px_24px_rgba(41,45,50,0.03)] relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-[#A39A91] font-semibold block mb-3">
              Propuesta de valor central
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-[#292D32] leading-snug mb-5 text-balance">
              No necesitas adaptarte a la tecnología. <span className="font-serif-editorial italic font-normal">Diseñamos la tecnología para adaptarse a ti.</span>
            </h3>
            <p className="text-base text-[#59524A] leading-relaxed">
              Cada negocio tiene sus propios procesos, herramientas y necesidades. Por eso estudiamos cómo funciona tu empresa y diseñamos soluciones que se integran en tu forma de trabajar. No se trata de añadir más herramientas, sino de conseguir que las que necesitas trabajen juntas de forma inteligente.
            </p>
          </div>
        </div>

        {/* Visual composition + 3 concepts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          
          {/* Real Work & Tech Environment Visual */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#DDD1C3] bg-[#EAE0D4] relative shadow-xs min-h-[340px] lg:min-h-full">
            <img
              src="/src/assets/images/dentalia_agency_reception_1794314354082.jpg"
              alt="Recepción de DentalIA Agency con sistema de gestión digital de citas y atención al cliente"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#292D32]/60 via-[#292D32]/15 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
              <span className="font-serif-editorial italic text-base block text-[#F8F5F0] mb-1">
                Tecnología al servicio del equipo
              </span>
              <p className="text-[#EDE3D9] text-[12px] leading-relaxed">
                Herramientas que agilizan la gestión diaria para que el equipo humano se centre en la atención directa y personalizada.
              </p>
            </div>
          </div>

          {/* Three concept cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            {pillars.map((item, idx) => (
              <div
                key={item.title}
                className="group p-7 sm:p-8 rounded-2xl bg-[#F8F5F0] border border-[#E4D9CD] hover:border-[#D4B98C] transition-all duration-300 shadow-[0_2px_12px_rgba(41,45,50,0.02)]"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EDE3D9] text-[#292D32] flex items-center justify-center transition-colors">
                      <item.icon size={19} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-medium tracking-tight text-[#292D32]">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-serif-editorial italic text-[#A39A91] tracking-wider pt-1">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-[#59524A] text-sm leading-relaxed pl-0 sm:pl-[54px]">
                  {item.desc}
                </p>
                <div className="pt-3 pl-0 sm:pl-[54px] flex items-center gap-2 text-xs text-[#D4B98C] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4B98C]" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
