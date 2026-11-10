import React, { useState } from 'react';
import { Bot, Workflow, Headphones, Zap, Network, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'agentes-ia',
    number: '01',
    title: 'Agentes de inteligencia artificial',
    shortDesc: 'Asistentes inteligentes de voz y texto que atienden consultas, mantienen conversaciones naturales y realizan tareas de forma autónoma.',
    fullDesc: 'Desplegamos agentes conversacionales avanzados configurados con el tono, conocimiento y procedimientos exactos de tu empresa. Ya sea por WhatsApp, telefonía de voz o chat web, tus clientes reciben respuestas precisas las 24 horas y tus sistemas registran cada interacción.',
    channels: ['WhatsApp Business', 'Telefonía IP / Voz', 'Web Chat', 'Instagram DM', 'Email'],
    useCases: [
      'Agendamiento y reprogramación de citas en tiempo real con confirmación automática',
      'Resolución de dudas frecuentes sobre tarifas, servicios y requerimientos previos',
      'Cualificación inicial de peticiones entrantes y derivación inteligente a tu equipo',
      'Seguimiento automático de presupuestos y propuestas pendientes'
    ],
    deliverables: [
      'Modelado de base de conocimiento corporativa',
      'Conexión con agendas y calendarios en directo',
      'Pruebas exhaustivas de tono y resolución de excepciones'
    ]
  },
  {
    id: 'automatizacion-procesos',
    number: '02',
    title: 'Automatización de procesos',
    shortDesc: 'Conectamos herramientas y sistemas para eliminar tareas manuales, reducir errores y optimizar el funcionamiento diario de los negocios.',
    fullDesc: 'Mapeamos los cuellos de botella operativos donde tu equipo pierde horas introduciendo datos, redactando correos repetitivos o cotejando información entre distintas plataformas. Construimos tuberías automáticas que hacen el trabajo sucio en milisegundos.',
    channels: ['Make / n8n', 'Google Workspace', 'Bases de datos', 'Webhooks', 'ERPs'],
    useCases: [
      'Sincronización instantánea entre formularios web y tu CRM de ventas',
      'Generación y envío automático de contratos y presupuestos estandarizados',
      'Extracción inteligente de datos de facturas y documentos PDF',
      'Notificaciones internas a responsables de departamento cuando ocurre un evento crítico'
    ],
    deliverables: [
      'Auditoría y diagrama de flujos operativos',
      'Implementación de pipelines de datos y validaciones',
      'Protocolos de redundancia y registro de logs de ejecución'
    ]
  },
  {
    id: 'atencion-cliente',
    number: '03',
    title: 'Atención al cliente inteligente',
    shortDesc: 'Sistemas capaces de responder, informar, gestionar solicitudes y ofrecer atención inmediata a través de distintos canales.',
    fullDesc: 'Transformamos la experiencia de tus usuarios reduciendo el tiempo de espera a cero segundos. Los clientes reciben una atención fluida y personalizada, con la capacidad de consultar el estado de sus trámites o recibir asistencia guiada en cualquier momento.',
    channels: ['Omnicanalidad', 'Ticketing', 'WhatsApp', 'Helpdesk', 'Centralitas'],
    useCases: [
      'Atención 24/7 de incidencias y solicitudes con categorización automática',
      'Consulta de estado de envíos, trámites o citas sin intervención manual',
      'Escalado suave a un agente humano con el historial completo de la conversación',
      'Encuestas de satisfacción automatizadas tras cada resolución'
    ],
    deliverables: [
      'Diseño de árbol de decisiones y matriz de escalado',
      'Integración con plataformas de tickets y soporte existentes',
      'Monitorización de calidad conversacional y satisfacción'
    ]
  },
  {
    id: 'captacion-conversion',
    number: '04',
    title: 'Sistemas de captación y conversión',
    shortDesc: 'Diseñamos experiencias digitales que conectan publicidad, páginas web, agentes inteligentes y procesos comerciales para convertir oportunidades en clientes.',
    fullDesc: 'Un lead que espera horas en ser contactado suele enfriarse. Diseñamos un engranaje continuo: desde el clic en un anuncio hasta la conversación interactiva inmediata, la cualificación del prospecto y el agendamiento directo en el calendario de tu equipo comercial.',
    channels: ['Meta Ads', 'Google Ads', 'Funnels Web', 'WhatsApp Sales', 'HubSpot / Pipedrive'],
    useCases: [
      'Respuesta inmediata en menos de 60 segundos a cualquier lead entrante',
      'Cualificación dinámica mediante preguntas clave según presupuesto e interés',
      'Reserva directa de reunión en la agenda del consultor adecuado',
      'Reactivación inteligente de oportunidades comerciales frías o pausadas'
    ],
    deliverables: [
      'Estrategia de conversión y flujos de nutrición rápida',
      'Conexión entre plataformas publicitarias y agentes interactivos',
      'Métricas de embudo transparentes y atribución clara'
    ]
  },
  {
    id: 'integraciones-medida',
    number: '05',
    title: 'Integraciones y soluciones a medida',
    shortDesc: 'Conectamos las herramientas que ya utiliza cada empresa y desarrollamos flujos de trabajo adaptados a sus necesidades.',
    fullDesc: 'No te obligamos a cambiar de software ni a pagar por licencias innecesarias. Trabajamos sobre tu ecosistema actual: conectamos tu CRM, software de gestión específico de tu sector, herramientas contables y canales de mensajería para que cooperen sin fricciones.',
    channels: ['APIs REST', 'CRMs Verticales', 'Gestores Clínicos / Legales', 'Pasarelas de Pago'],
    useCases: [
      'Conexión entre software de gestión especializado y mensajería instantánea',
      'Centralización de datos dispersos en paneles claros para toma de decisiones',
      'Automatización de cobros, recordatorios de vencimiento y facturación recurrente',
      'Flujos personalizados para casos de uso específicos y únicos de tu empresa'
    ],
    deliverables: [
      'Consultoría de arquitectura tecnológica existente',
      'Desarrollo y configuración de conectores seguros',
      'Documentación técnica y formación práctica al equipo'
    ]
  }
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
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
    <section id="soluciones" className="py-24 md:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#887D73] font-medium mb-4">
          <span>02</span>
          <span className="text-[#C89B88]">/</span>
          <span>Qué Hacemos</span>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#1C1917] leading-[1.18] mb-6 text-balance">
            Soluciones inteligentes. <span className="font-serif-luxury italic font-normal">Resultados reales.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6A625B] leading-relaxed">
            Diseñamos e implementamos soluciones de inteligencia artificial adaptadas a la realidad de cada empresa.
            Sin complejidades artificiales ni dependencias forzadas: integramos y optimizamos sobre tu forma de trabajar.
          </p>
        </div>

        {/* Desktop Interactive Layout: Split List + Active Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Numbered Services List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {servicesData.map((service) => {
              const Icon = iconsMap[service.id];
              const isSelected = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`text-left p-5 sm:p-6 rounded-2xl transition-all duration-200 border ${
                    isSelected
                      ? 'bg-[#F4EFEB] border-[#D9CCBF] shadow-sm translate-x-1'
                      : 'bg-transparent border-transparent hover:bg-[#F8F2EC] hover:border-[#E8DFD5]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-serif-luxury italic text-[#9B8C80]">
                        {service.number}.
                      </span>
                      <h3 className={`text-base font-medium tracking-tight ${isSelected ? 'text-[#1C1917]' : 'text-[#4A423B]'}`}>
                        {service.title}
                      </h3>
                    </div>
                    {isSelected && (
                      <span className="text-xs text-[#C89B88] font-serif-luxury italic">
                        Activo
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-[#736A61] line-clamp-2 leading-relaxed pl-6">
                    {service.shortDesc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Card Focus */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F6F0EB] border border-[#E2D6C8] shadow-[0_4px_24px_rgba(28,25,23,0.03)] flex flex-col justify-between min-h-[520px]">
              <div>
                
                {/* Header with icon and tags */}
                <div className="flex items-center justify-between pb-6 border-b border-[#E6DBCF] mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E4D8CA] flex items-center justify-center text-[#1C1917]">
                      {React.createElement(iconsMap[activeService.id], { size: 22, strokeWidth: 1.5 })}
                    </div>
                    <div>
                      <span className="text-xs tracking-wider text-[#96897E] uppercase font-medium">
                        Servicio {activeService.number}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-medium tracking-tight text-[#1C1917]">
                        {activeService.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base text-[#5C534B] leading-relaxed mb-8">
                  {activeService.fullDesc}
                </p>

                {/* Practical Use Cases */}
                <div className="mb-8">
                  <h5 className="text-xs uppercase tracking-[0.16em] text-[#8C7F73] font-semibold mb-3">
                    Casos prácticos de aplicación
                  </h5>
                  <div className="grid grid-cols-1 gap-2.5">
                    {activeService.useCases.map((uc, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF7F2]/80 border border-[#E9DFD3] text-xs text-[#4E463F]">
                        <span className="font-serif-luxury italic text-[#C89B88] text-sm leading-none mt-0.5">✦</span>
                        <span>{uc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Channels or Tools Integrated */}
                <div className="mb-8">
                  <h5 className="text-xs uppercase tracking-[0.16em] text-[#8C7F73] font-semibold mb-2">
                    Canales y ecosistemas habituales
                  </h5>
                  <div className="flex flex-wrap gap-2 text-xs text-[#6A6056]">
                    {activeService.channels.map((ch) => (
                      <span key={ch} className="px-3 py-1 bg-[#FAF7F2] border border-[#E4D7CA] rounded-md">
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom CTA to consult details */}
              <div className="pt-6 border-t border-[#E6DBCF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <span className="text-xs text-[#7A6F64]">
                  Integrado con tu infraestructura actual · Sin software cautivo
                </span>
                <button
                  onClick={() => onSelectService(activeService)}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#1C1917] hover:text-[#C89B88] transition-colors group"
                >
                  <span>Explorar ficha técnica completa</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
