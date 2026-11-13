import React from 'react';
import { MessageSquare, CalendarCheck, Network, Check, ArrowRight } from 'lucide-react';
import whatsappAgentImg from '../assets/images/whatsapp_agent_mockup_1794312905417.jpg';
import smartCalendarImg from '../assets/images/smart_calendar_booking_1794312904165.jpg';
import connectedWorkflowsImg from '../assets/images/connected_workflows_apps_1794312905583.jpg';

interface PracticalExamplesProps {
  onCtaClick: () => void;
}

export const PracticalExamples: React.FC<PracticalExamplesProps> = ({ onCtaClick }) => {
  const examples = [
    {
      number: '01',
      tag: 'Atención 24/7',
      title: 'Atención al cliente automatizada',
      subtitle: 'Un cliente escribe por WhatsApp fuera del horario comercial.',
      icon: MessageSquare,
      image: whatsappAgentImg,
      imageAlt: 'Mockup de conversación de WhatsApp con asistente virtual resolviendo dudas de citas',
      bullets: [
        'Responde inmediatamente a cualquier hora del día o de la noche.',
        'Resuelve sus dudas utilizando la información específica de tu negocio.',
        'Identifica qué necesita y qué servicio solicita.',
        'Registra toda la conversación en tu panel o sistema habitual.',
        'Deriva al equipo humano cuando es necesario para casos particulares.',
      ],
      deliverableNotice: 'Configurado con el vocabulario, tarifas y pautas de tu empresa.',
    },
    {
      number: '02',
      tag: 'Gestión de Agendas',
      title: 'Gestión inteligente de citas',
      subtitle: 'Un cliente solicita reservar o cambiar una cita.',
      icon: CalendarCheck,
      image: smartCalendarImg,
      imageAlt: 'Interfaz de agenda digital con citas y horarios sincronizados',
      bullets: [
        'Consulta la disponibilidad cuando existe una integración compatible con tu software.',
        'Ofrece las opciones horarias disponibles sin solapes.',
        'Registra la reserva directamente en el calendario.',
        'Envía una confirmación inmediata al cliente con los detalles.',
        'Gestiona recordatorios previos y solicitudes de cambio según las funcionalidades de la integración.',
      ],
      deliverableNotice: 'Evita ausencias y reduce las llamadas repetitivas en recepción.',
    },
    {
      number: '03',
      tag: 'Operativa Sin Fricción',
      title: 'Automatización administrativa',
      subtitle: 'Una empresa recibe solicitudes de diferentes canales.',
      icon: Network,
      image: connectedWorkflowsImg,
      imageAlt: 'Representación visual de aplicaciones conectadas en un flujo automatizado continuo',
      bullets: [
        'Recoge los datos introducidos en formularios, mensajes o correos.',
        'Los organiza automáticamente en las categorías correspondientes.',
        'Los registra en las herramientas de gestión que ya utilizas.',
        'Notifica al equipo responsable solo cuando es necesario intervenir.',
        'Evita duplicar tareas manuales y copiar datos de una aplicación a otra.',
      ],
      deliverableNotice: 'Tus aplicaciones conectadas trabajando como un único sistema coordinado.',
    },
  ];

  return (
    <section id="ejemplos" className="py-24 md:py-32 bg-[#F8F5F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#A39A91] font-medium mb-4">
          <span>03</span>
          <span className="text-[#D4B98C]">/</span>
          <span>Casos Prácticos</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#292D32] leading-[1.18] mb-6 text-balance">
            Así puede trabajar la inteligencia artificial <span className="font-serif-editorial italic font-normal">en tu negocio.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#59524A] leading-relaxed">
            La tecnología cobra sentido cuando resuelve problemas concretos. Estos son algunos ejemplos de lo que podemos implementar para mejorar la atención y ahorrar tiempo.
          </p>
        </div>

        {/* 3 Detailed Showcase Cards */}
        <div className="space-y-12 mb-16">
          {examples.map((item, idx) => {
            const Icon = item.icon;
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={item.number}
                className="p-8 sm:p-12 rounded-3xl bg-[#F3EDE5] border border-[#DDD1C3] shadow-[0_4px_20px_rgba(41,45,50,0.03)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Content Column */}
                <div className={`lg:col-span-7 flex flex-col justify-between ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    {/* Top Tag & Number */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#E0D4C5] mb-6">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-[#F8F5F0] border border-[#D9CEBF] flex items-center justify-center text-[#292D32]">
                          <Icon size={16} strokeWidth={1.5} />
                        </div>
                        <span className="text-xs uppercase tracking-wider font-semibold text-[#8C8074]">
                          EJEMPLO {item.number} · {item.tag}
                        </span>
                      </div>
                      <span className="font-serif-editorial italic text-sm text-[#A39A91]">
                        Caso ilustrativo
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#292D32] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-[#73675B] mb-6">
                      {item.subtitle}
                    </p>

                    {/* Bullet List */}
                    <div className="space-y-3 mb-8">
                      {item.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3 text-sm text-[#4A433B]">
                          <div className="w-5 h-5 rounded-full bg-[#E8DDD0] flex items-center justify-center text-[#292D32] shrink-0 mt-0.5">
                            <Check size={12} strokeWidth={2.5} className="text-[#292D32]" />
                          </div>
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Note */}
                  <div className="pt-4 border-t border-[#E0D4C5] flex items-center justify-between text-xs text-[#7A6F64]">
                    <span>{item.deliverableNotice}</span>
                  </div>
                </div>

                {/* Visual Image Column */}
                <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="rounded-2xl overflow-hidden border border-[#D9CEBF] bg-[#EAE0D4] shadow-xs relative aspect-[4/3] group">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#292D32]/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-[#F8F5F0]/90 backdrop-blur-xs border border-[#F8F5F0]/70 text-[11px] text-[#4A433B]">
                      <span className="font-medium text-[#292D32]">Visualización de la solución:</span> {item.title}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prudent notice & Strategic CTA */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#EDE3D9]/70 border border-[#DDD1C3] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs text-[#7A6F64] leading-relaxed">
              * Nota: Estos ejemplos son ilustrativos para mostrar posibles casos de uso. Las funcionalidades concretas (como la lectura de calendarios o el envío de confirmaciones) se configuran según las herramientas y compatibilidad técnica de cada negocio.
            </p>
          </div>
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-semibold tracking-wide text-[#F8F5F0] bg-[#292D32] hover:bg-[#3D434A] rounded-full transition-all duration-200 shadow-xs whitespace-nowrap"
          >
            <span>Solicitar una consultoría gratuita</span>
            <ArrowRight size={14} className="text-[#EDE3D9]" />
          </button>
        </div>

      </div>
    </section>
  );
};
