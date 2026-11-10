import React, { useState } from 'react';
import { Bot, Workflow, Headphones, Zap, Network, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
  onCtaClick?: () => void;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'agentes-ia',
    number: '01',
    title: 'Agentes de inteligencia artificial',
    shortDesc: 'Asistentes inteligentes de voz y texto que atienden dudas, conversan de manera natural y realizan tareas habituales automáticamente.',
    fullDesc: 'Diseñamos asistentes digitales configurados con la información, el vocabulario y las pautas de atención de tu empresa. Ya sea por mensaje o por voz, tus clientes reciben respuestas claras de inmediato y tu equipo se libera de responder las mismas preguntas una y otra vez.',
    channels: ['WhatsApp', 'Llamadas de voz', 'Chat web', 'Mensajería directa', 'Email'],
    useCases: [
      'Proporcionar información sobre horarios, tratamientos, precios orientativos y requisitos.',
      'Gestionar solicitudes de cita y registrar la información para el equipo de recepción.',
      'Preguntar al cliente qué necesita y clasificar la consulta para el departamento adecuado.',
      'Enviar recordatorios amistosos para evitar citas olvidadas y confirmaciones de asistencia.'
    ],
    deliverables: [
      'Configuración de las respuestas y conocimientos clave de tu negocio',
      'Conexión con las herramientas de agenda o registro disponibles',
      'Ajuste del tono de voz y pruebas de conversación previas a la puesta en marcha'
    ]
  },
  {
    id: 'automatizacion-procesos',
    number: '02',
    title: 'Automatización de procesos',
    shortDesc: 'Conectamos tus programas habituales para eliminar tareas manuales repetitivas y reducir errores en el día a día.',
    fullDesc: 'Revisamos dónde pierde tiempo tu equipo copiando datos de un sitio a otro, redactando mensajes rutinarios o confirmando información. Creamos conexiones automáticas para que las tareas administrativas se completen al instante sin esfuerzo humano.',
    channels: ['Gestores de tareas', 'Bases de datos', 'Hojas de cálculo', 'Herramientas de oficina'],
    useCases: [
      'Enviar automáticamente los datos de un nuevo contacto a tu lista de gestión o agenda.',
      'Generar presupuestos y documentos estándar en segundos a partir de los datos del cliente.',
      'Organizar y extraer la información básica de documentos y solicitudes entrantes.',
      'Avisar a la persona adecuada del equipo cuando entra un caso prioritario que requiere atención.'
    ],
    deliverables: [
      'Revisión sencilla de las tareas manuales que más tiempo consumen',
      'Configuración de los flujos de conexión entre tus herramientas',
      'Pruebas de funcionamiento y comprobación con tu equipo'
    ]
  },
  {
    id: 'atencion-cliente',
    number: '03',
    title: 'Atención al cliente inteligente',
    shortDesc: 'Sistemas que responden con rapidez, informan con claridad y ofrecen una atención continua sin tiempos de espera.',
    fullDesc: 'Tus clientes esperan una respuesta rápida cuando tienen una duda o necesitan una cita. Diseñamos sistemas que les atienden al segundo, responden preguntas frecuentes y, cuando una situación lo requiere, avisan al equipo de tu clínica o empresa para un trato personalizado.',
    channels: ['Canales de mensajería', 'Formularios web', 'Centralita telefónica', 'Bandejas de soporte'],
    useCases: [
      'Atención rápida las 24 horas para que ningún cliente se quede sin respuesta.',
      'Información sobre el estado de citas, pedidos o trámites habituales.',
      'Paso inmediato a una persona del equipo con todo el contexto de lo conversado.',
      'Preguntas de valoración para conocer cómo ha sido la experiencia de atención.'
    ],
    deliverables: [
      'Definición de las preguntas frecuentes y las reglas de respuesta',
      'Protocolo claro de derivación al equipo humano ante casos sensibles',
      'Revisión periódica de la calidad de las conversaciones'
    ]
  },
  {
    id: 'captacion-conversion',
    number: '04',
    title: 'Sistemas de captación y conversión',
    shortDesc: 'Conectamos tus anuncios, páginas web y canales de contacto para que las personas interesadas se conviertan en clientes sin demoras.',
    fullDesc: 'Cuando una persona muestra interés en un servicio y tarda horas en recibir respuesta, a menudo busca otra opción. Diseñamos un recorrido fluido: desde que hace clic en una campaña o visita tu web, hasta que recibe atención inmediata y puede agendar una cita o llamada.',
    channels: ['Campañas de publicidad', 'Páginas web', 'Mensajería de ventas', 'Sistemas de gestión comercial'],
    useCases: [
      'Contacto inmediato con personas interesadas en menos de un minuto desde su solicitud.',
      'Identificación de los servicios específicos que busca el cliente y su preferencia de horario.',
      'Facilitar la elección de día y hora para una primera visita o llamada informativa.',
      'Mensajes de seguimiento para reactivar a personas que solicitaron información previa.'
    ],
    deliverables: [
      'Diseño del recorrido de contacto entre tu web/anuncios y el canal de mensajería',
      'Configuración de mensajes de bienvenida y preguntas guiadas',
      'Seguimiento visual de cuántas personas solicitan cita y completan el proceso'
    ]
  },
  {
    id: 'integraciones-medida',
    number: '05',
    title: 'Integraciones y soluciones a medida',
    shortDesc: 'Conectamos las aplicaciones y programas que tu negocio ya tiene en marcha para que trabajen juntos sin complicaciones.',
    fullDesc: 'No necesitas cambiar de programas ni pagar por herramientas innecesarias. Trabajamos sobre el software que ya conoces (tu programa de gestión de clínica, tus calendarios, correo o facturación) y creamos los puentes necesarios para que compartan la información que necesitas.',
    channels: ['Programas de gestión especializados', 'Calendarios digitales', 'Sistemas de cobro', 'Bases de datos'],
    useCases: [
      'Vincular tu programa de gestión con tus canales de atención al paciente o cliente.',
      'Unificar la información de contacto para que no tengas datos dispersos en diferentes lugares.',
      'Automatizar recordatorios de pagos, vencimientos o revisiones periódicas.',
      'Desarrollar soluciones específicas para la forma concreta en que trabaja tu negocio.'
    ],
    deliverables: [
      'Estudio previo de compatibilidad técnica con las herramientas que utilizas',
      'Configuración de conexiones seguras y respetuosas con tus datos',
      'Explicación clara y práctica a tu equipo para utilizar la solución con total comodidad'
    ]
  }
];

export const Services: React.FC<ServicesProps> = ({ onSelectService, onCtaClick }) => {
  const [activeTab, setActiveTab] = useState(servicesData[0].id);
  const activeService = servicesData.find((s) => s.id === activeTab) || servicesData[0];

  const iconsMap: Record<string, React.ElementType> = {
    'agentes-ia': Bot,
    'automatizacion-procesos': Workflow,
    'atencion-cliente': Headphones,
    'captacion-conversion': Zap,
    'integraciones-medida': Network,
  };

  return (
    <section id="soluciones" className="py-24 md:py-32 bg-[#F8F5F0] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#A39A91] font-medium mb-4">
          <span>02</span>
          <span className="text-[#D4B98C]">/</span>
          <span>Qué Hacemos</span>
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#292D32] leading-[1.18] mb-6 text-balance">
            Soluciones inteligentes. <span className="font-serif-editorial italic font-normal">Resultados reales.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#59524A] leading-relaxed mb-6">
            Diseñamos e implementamos soluciones de inteligencia artificial adaptadas a la realidad de cada empresa.
            Sin complicaciones técnicas innecesarias: trabajamos sobre tu forma habitual de trabajar.
          </p>

          {/* Central Highlight Message as requested in Section 5 */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#EDE3D9]/60 border border-[#DDD1C3] text-sm font-medium text-[#292D32]">
            ✦ Cada solución puede funcionar por separado o formar parte de un sistema inteligente completamente conectado.
          </div>
        </div>

        {/* Desktop Interactive Layout: Split List + Active Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left Column: Numbered Services List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {servicesData.map((service) => {
              const isSelected = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`text-left p-5 sm:p-6 rounded-2xl transition-all duration-200 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#F3EDE5] border-[#D4B98C] shadow-xs translate-x-1'
                      : 'bg-transparent border-transparent hover:bg-[#F3EDE5]/60 hover:border-[#EDE3D9]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-serif-editorial italic text-[#A39A91]">
                        {service.number}.
                      </span>
                      <h3 className={`text-base font-medium tracking-tight ${isSelected ? 'text-[#292D32]' : 'text-[#4A433B]'}`}>
                        {service.title}
                      </h3>
                    </div>
                    {isSelected && (
                      <span className="text-xs text-[#D4B98C] font-serif-editorial italic">
                        Detalle
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#73675B] line-clamp-2 leading-relaxed pl-6">
                    {service.shortDesc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Card Focus */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F3EDE5] border border-[#DDD1C3] shadow-[0_4px_24px_rgba(41,45,50,0.03)] flex flex-col justify-between min-h-[500px]">
              <div>
                
                {/* Header with icon and tags */}
                <div className="flex items-center justify-between pb-6 border-b border-[#E0D4C5] mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#F8F5F0] border border-[#DDD1C3] flex items-center justify-center text-[#292D32]">
                      {React.createElement(iconsMap[activeService.id], { size: 22, strokeWidth: 1.5 })}
                    </div>
                    <div>
                      <span className="text-xs tracking-wider text-[#8C8074] uppercase font-semibold">
                        Área {activeService.number}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-medium tracking-tight text-[#292D32]">
                        {activeService.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base text-[#4A433B] leading-relaxed mb-8">
                  {activeService.fullDesc}
                </p>

                {/* Practical Use Cases */}
                <div className="mb-8">
                  <h5 className="text-xs uppercase tracking-[0.16em] text-[#8C8074] font-semibold mb-3">
                    Qué resuelve en tu día a día
                  </h5>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeService.useCases.map((uc, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#F8F5F0]/90 border border-[#E4D9CD] text-xs text-[#4A433B]">
                        <span className="font-serif-editorial italic text-[#D4B98C] text-sm leading-none mt-0.5">✦</span>
                        <span>{uc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Channels or Tools Integrated with Compatibility note */}
                <div className="mb-8">
                  <h5 className="text-xs uppercase tracking-[0.16em] text-[#8C8074] font-semibold mb-1">
                    Canales y herramientas habituales
                  </h5>
                  <p className="text-[11px] text-[#8A7E72] mb-2.5">
                    * Los canales disponibles se estudian según las necesidades y la compatibilidad técnica de cada caso.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-[#59524A]">
                    {activeService.channels.map((ch) => (
                      <span key={ch} className="px-3 py-1 bg-[#F8F5F0] border border-[#DDD1C3] rounded-md font-medium">
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom CTA to consult details */}
              <div className="pt-6 border-t border-[#E0D4C5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-xs text-[#7A6F64]">
                  Integración adaptada a tus programas actuales · Sin ataduras
                </span>
                <button
                  onClick={() => onSelectService(activeService)}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#292D32] hover:text-[#D4B98C] transition-colors group cursor-pointer"
                >
                  <span>Ver ficha detallada</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Strategic CTA banner after services */}
        {onCtaClick && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[#EDE3D9]/60 border border-[#DDD1C3] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="text-base font-semibold text-[#292D32] mb-1">
                ¿No estás seguro de qué combinación de servicios necesita tu empresa?
              </h4>
              <p className="text-xs text-[#6B6156]">
                Analizamos tus procesos actuales y te recomendamos exactamente qué conviene automatizar primero.
              </p>
            </div>
            <button
              onClick={onCtaClick}
              className="px-6 py-3 text-xs font-semibold tracking-wide text-[#F8F5F0] bg-[#292D32] hover:bg-[#3D434A] rounded-full transition-all duration-200 shadow-xs shrink-0"
            >
              Solicitar una consultoría gratuita
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
