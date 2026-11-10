import React from 'react';
import { Sparkles, Cpu, Users } from 'lucide-react';

export const Philosophy: React.FC = () => {
  const pillars = [
    {
      icon: Sparkles,
      title: 'Inteligencia',
      desc: 'Soluciones diseñadas para entender y actuar con criterio y contexto real de tu negocio.',
      highlight: 'Comprensión contextual',
    },
    {
      icon: Cpu,
      title: 'Automatización',
      desc: 'Procesos que funcionan de forma eficiente en segundo plano, liberando horas de trabajo manual.',
      highlight: 'Eficiencia invisible',
    },
    {
      icon: Users,
      title: 'Conexión',
      desc: 'Tecnología que mejora las relaciones humanas, agilizando la comunicación sin perder la calidez.',
      highlight: 'Sensibilidad y cercanía',
    },
  ];

  return (
    <section id="filosofia" className="py-24 md:py-32 bg-[#F5EFEB] relative overflow-hidden border-y border-[#EAE0D4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section kicker */}
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#887D73] font-medium mb-4">
          <span>01</span>
          <span className="text-[#C89B88]">/</span>
          <span>Nuestra Filosofía</span>
        </div>

        {/* Section title and main narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#1C1917] leading-[1.18] text-balance">
              La tecnología tiene sentido cuando hace <span className="font-serif-luxury italic font-normal">tu vida más fácil.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-5 text-[#635B54] text-base sm:text-lg leading-relaxed">
            <p>
              Creemos que la inteligencia artificial no debería complicar las cosas, sino hacerlas mejores.
            </p>
            <p>
              Por eso diseñamos soluciones que trabajan en segundo plano para que las empresas puedan dedicar menos tiempo a las tareas repetitivas y más tiempo a lo que realmente importa: sus clientes, su equipo y su crecimiento.
            </p>
            <p className="text-[#3A342E] font-medium pt-1">
              No implementamos tecnología por implementar. Analizamos cada negocio, identificamos oportunidades y creamos sistemas que aportan valor real.
            </p>
          </div>
        </div>

        {/* Visual composition + 3 concepts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Still life artwork */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-[#E2D6C7] bg-[#EAE2D7] relative shadow-sm min-h-[320px] lg:min-h-full">
            <img
              src="/src/assets/images/amablia_craft_philosophy_1794311287893.jpg"
              alt="Bodegón de cerámica orgánica y texturas naturales que representa la serenidad y la dedicación artesanal de AMABLIA"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/35 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs">
              <span className="font-serif-luxury italic text-base block text-[#F7EFE6] mb-1">
                Calma y precisión
              </span>
              <p className="text-[#E8DDD2] text-[11px] leading-relaxed">
                Diseñamos flujos con el mimo de un artesano y el rigor de la ingeniería moderna.
              </p>
            </div>
          </div>

          {/* Three concept cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            {pillars.map((item, idx) => (
              <div
                key={item.title}
                className="group p-8 rounded-2xl bg-[#FAF7F2] border border-[#E7DDD1] hover:border-[#D5C6B6] transition-all duration-300 shadow-[0_2px_12px_rgba(28,25,23,0.02)]"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#F0E8DE] text-[#6E6359] group-hover:text-[#1C1917] group-hover:bg-[#E8DFD3] flex items-center justify-center transition-colors">
                      <item.icon size={19} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-medium tracking-tight text-[#1C1917]">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-serif-luxury italic text-[#9B8C80] tracking-wider pt-1">
                    0{idx + 1}
                  </span>
                </div>
                <p className="text-[#686058] text-sm leading-relaxed pl-0 sm:pl-[54px]">
                  {item.desc}
                </p>
                <div className="pt-3 pl-0 sm:pl-[54px] flex items-center gap-2 text-xs text-[#C89B88] font-medium">
                  <span className="w-1 h-1 rounded-full bg-[#C89B88]" />
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
