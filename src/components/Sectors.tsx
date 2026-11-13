import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import dentaliaReceptionImg from '../assets/images/dentalia_agency_reception_1794314354082.jpg';

export const Sectors: React.FC = () => {
  const dentaliaFeatures = [
    'Atención y respuestas inmediatas por WhatsApp para pacientes que escriben a cualquier hora.',
    'Asistentes de voz para resolver dudas frecuentes sobre horarios o ubicación.',
    'Gestión de solicitudes de cita y recordatorios para reducir ausencias (según el software de la clínica).',
    'Identificación de situaciones que requieren atención humana y aviso prioritario al equipo de la clínica.',
    'Respuestas automáticas a preguntas habituales sobre servicios, cuidados previos o tarifas orientativas.',
    'Estudio de integración técnica con el programa de gestión que utilice la clínica.',
  ];

  return (
    <section id="sectores" className="py-24 md:py-32 bg-[#F8F5F0] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#A39A91] font-medium mb-4">
          <span>05</span>
          <span className="text-[#D4B98C]">/</span>
          <span>Especialización Sectorial</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#292D32] leading-[1.18] mb-6 text-balance">
            Cada negocio es diferente. <span className="font-serif-editorial italic font-normal">Su tecnología también debería serlo.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#59524A] leading-relaxed">
            Desarrollamos soluciones adaptadas a los procesos y necesidades concretas de sectores específicos.
            <strong> AMABLIA</strong> desarrolla la metodología y diseña las soluciones tecnológicas, mientras que <strong>DentalIA Agency</strong> aplica esa metodología a la operativa real de las clínicas dentales.
          </p>
        </div>

        {/* Specialized Brand Showcase: DentalIA Agency */}
        <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#F3EDE5] border border-[#DDD1C3] shadow-[0_8px_32px_rgba(41,45,50,0.03)] flex flex-col justify-between">
          <div>
            {/* Brand hierarchy tag */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E0D4C5] mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F8F5F0] border border-[#D9CEBF] flex items-center justify-center font-serif-editorial italic text-lg text-[#292D32]">
                  D
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#8C8074] font-medium block">
                    Marca especializada de AMABLIA
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#292D32]">
                    DentalIA Agency
                  </h3>
                </div>
              </div>

              <span className="text-xs font-serif-editorial italic text-[#D4B98C] tracking-wide">
                Solución especializada para clínicas dentales
              </span>
            </div>

            {/* Grid with Photography + Capabilities */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center mb-8">
              
              {/* Photo of Modern Clinic Reception & Tech */}
              <div className="md:col-span-5 rounded-2xl overflow-hidden border border-[#D9CEBF] aspect-[4/3] bg-[#EAE0D4]">
                <img
                  src={dentaliaReceptionImg}
                  alt="Espacio contemporáneo y luminoso de clínica dental con la identidad de DentalIA Agency"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Scope Description */}
              <div className="md:col-span-7">
                <h4 className="text-lg sm:text-xl font-medium text-[#292D32] mb-2.5">
                  Inteligencia artificial y automatización para clínicas dentales.
                </h4>
                <p className="text-sm text-[#59524A] leading-relaxed mb-4">
                  Agentes amables para WhatsApp y llamadas, atención continua de dudas y automatización de avisos diseñados para el ritmo diario de una clínica dental.
                </p>
                <p className="text-xs sm:text-sm text-[#7A6F64] leading-relaxed">
                  Ayuda a aliviar el teléfono de recepción en horas punta, responde fuera de horario y coordina las solicitudes de los pacientes con el equipo de la clínica.
                </p>
              </div>

            </div>

            {/* Bullet Points with prudent medical wording */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10 pt-6 border-t border-[#E0D4C5]">
              {dentaliaFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A433B]">
                  <CheckCircle2 size={16} className="text-[#D4B98C] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-[#E0D4C5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="text-xs text-[#7A6F64]">
              * Las funciones de agenda dependen de la compatibilidad con el software de la clínica. No realiza diagnósticos médicos.
            </span>
            <a
              href="https://dentaliaagency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-wide text-[#F8F5F0] bg-[#292D32] hover:bg-[#3D434A] rounded-full transition-all duration-200 shadow-xs whitespace-nowrap"
            >
              <span>Descubrir DentalIA Agency</span>
              <ArrowUpRight size={14} className="text-[#EDE3D9] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
