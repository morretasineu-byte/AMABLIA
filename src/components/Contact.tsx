import React, { useState } from 'react';
import { Mail, Check, Send, AlertCircle, MapPin, Calendar } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactProps {
  onOpenPrivacy: () => void;
  onOpenScheduleModal?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenPrivacy, onOpenScheduleModal }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceInterest: ['No lo tengo claro, necesito asesoramiento'],
    message: '',
    privacyAccepted: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const availableServices = [
    'No lo tengo claro, necesito asesoramiento',
    'Agentes de inteligencia artificial (voz y WhatsApp)',
    'Automatización de procesos y tareas administrativas',
    'Atención al cliente inteligente 24/7',
    'Sistemas de captación y conversión de clientes',
    'Integraciones con software actual',
    'Solución para Clínicas Dentales (DentalIA)',
  ];

  const handleToggleService = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.serviceInterest.includes(srv);
      if (exists) {
        // If unchecking, leave at least one or empty
        const filtered = prev.serviceInterest.filter((s) => s !== srv);
        return { ...prev, serviceInterest: filtered };
      } else {
        // If selecting "No lo tengo claro", optionally keep or combine
        return { ...prev, serviceInterest: [...prev.serviceInterest, srv] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Por favor, indica tu nombre.');
      return;
    }
    if (!formData.company.trim()) {
      setErrorMessage('Por favor, indica el nombre de tu empresa o clínica.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Por favor, introduce un correo electrónico válido.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Por favor, cuéntanos brevemente qué necesitas o qué problema te gustaría resolver.');
      return;
    }
    if (!formData.privacyAccepted) {
      setErrorMessage('Debes aceptar la política de privacidad para enviar la solicitud.');
      return;
    }

    setIsSubmitting(true);
    // Simulate real network submission with realistic settling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      serviceInterest: ['No lo tengo claro, necesito asesoramiento'],
      message: '',
      privacyAccepted: false,
    });
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-[#F8F5F0] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#A39A91] font-medium mb-4">
          <span>07</span>
          <span className="text-[#D4B98C]">/</span>
          <span>Contacto & Consultoría</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#292D32] leading-[1.18] mb-6 text-balance">
              Hablemos de tu <span className="font-serif-editorial italic font-normal">próximo paso.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#59524A] leading-relaxed mb-8">
              Cada negocio tiene sus propios retos. Nos encantará conocer el tuyo.
              Analizaremos tu caso de forma personalizada y te explicaremos con total sinceridad cómo la inteligencia artificial puede ayudarte.
            </p>

            {/* Quick direct calendar reservation option */}
            {onOpenScheduleModal && (
              <div className="p-5 rounded-2xl bg-[#EDE3D9] border border-[#DDD1C3] mb-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F8F5F0] flex items-center justify-center text-[#292D32]">
                    <Calendar size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-[#292D32]">
                      ¿Prefieres agendar día y hora?
                    </h4>
                    <p className="text-[11px] text-[#6E6357]">
                      Elige directamente en nuestro calendario digital.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onOpenScheduleModal}
                  className="px-4 py-2 text-xs font-semibold text-[#292D32] bg-[#F8F5F0] hover:bg-white border border-[#DDD1C3] rounded-full transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
                >
                  Ver agenda
                </button>
              </div>
            )}

            <div className="space-y-6 pt-4 border-t border-[#EDE3D9]">
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F3EDE5] border border-[#DDD1C3] flex items-center justify-center text-[#292D32] shrink-0 mt-0.5">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#8C8074] font-semibold block">
                    Correo electrónico
                  </span>
                  <a
                    href="mailto:hola@amablia.agency"
                    className="text-sm font-semibold text-[#292D32] hover:text-[#D4B98C] transition-colors"
                  >
                    hola@amablia.agency
                  </a>
                  <span className="text-[11px] text-[#A39A91] block mt-0.5">
                    (Dirección corporativa provisional de contacto)
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F3EDE5] border border-[#DDD1C3] flex items-center justify-center text-[#292D32] shrink-0 mt-0.5">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#8C8074] font-semibold block">
                    Ubicación y Cobertura
                  </span>
                  <p className="text-sm font-medium text-[#292D32]">
                    España · Servicio a empresas y clínicas
                  </p>
                  <span className="text-[11px] text-[#A39A91] block mt-0.5">
                    Consultorías y reuniones por videollamada
                  </span>
                </div>
              </div>

            </div>

            <div className="p-5 mt-8 rounded-2xl bg-[#EDE3D9]/70 border border-[#DDD1C3] text-xs text-[#59524A] leading-relaxed">
              <span className="font-serif-editorial italic text-[#D4B98C] text-sm block mb-1">
                Atención sin compromiso
              </span>
              Puedes consultarnos aunque todavía no tengas claro qué solución necesitas. Nuestro primer paso siempre es escucharte y analizar si la automatización tiene sentido para tu caso.
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#F3EDE5] border border-[#DDD1C3] shadow-[0_4px_24px_rgba(41,45,50,0.03)]">
              
              {submitted ? (
                <div className="text-center py-10 animate-in fade-in duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#F8F5F0] border border-[#D4B98C] text-[#292D32] flex items-center justify-center mb-6">
                    <Check size={28} className="text-[#D4B98C]" />
                  </div>
                  <h3 className="text-2xl font-light text-[#292D32] mb-3">
                    Solicitud recibida correctamente
                  </h3>
                  <p className="text-sm text-[#59524A] max-w-md mx-auto leading-relaxed mb-6">
                    Gracias, <strong className="text-[#292D32]">{formData.name}</strong>. Hemos registrado los datos para <strong className="text-[#292D32]">{formData.company}</strong>. Nuestro equipo revisará los detalles y te responderá en menos de 24 horas laborables a <span className="underline">{formData.email}</span>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 text-xs font-semibold tracking-wide text-[#292D32] hover:text-[#D4B98C] border border-[#DDD1C3] rounded-full transition-colors bg-[#F8F5F0]"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[#3E3831] mb-2">
                        Nombre completo <span className="text-[#D4B98C]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Carmen Ortiz"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F5F0] border border-[#DDD1C3] text-sm text-[#292D32] placeholder-[#A39A91] focus:outline-hidden focus:border-[#292D32] transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-[#3E3831] mb-2">
                        Empresa o Clínica <span className="text-[#D4B98C]">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ej. Clínica Dental Ortiz"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F5F0] border border-[#DDD1C3] text-sm text-[#292D32] placeholder-[#A39A91] focus:outline-hidden focus:border-[#292D32] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#3E3831] mb-2">
                        Correo electrónico <span className="text-[#D4B98C]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nombre@empresa.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F5F0] border border-[#DDD1C3] text-sm text-[#292D32] placeholder-[#A39A91] focus:outline-hidden focus:border-[#292D32] transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-[#3E3831] mb-2">
                        Teléfono <span className="text-[#A39A91] text-[11px] font-normal">(opcional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+34 600 000 000"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F5F0] border border-[#DDD1C3] text-sm text-[#292D32] placeholder-[#A39A91] focus:outline-hidden focus:border-[#292D32] transition-colors"
                      />
                    </div>
                  </div>

                  {/* ¿En qué podemos ayudarte? With explicit "No lo tengo claro" option */}
                  <div>
                    <label className="block text-xs font-semibold text-[#3E3831] mb-2.5">
                      ¿En qué podemos ayudarte? <span className="text-[#8C8074] text-[11px] font-normal">(puedes marcar varias opciones)</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((srv) => {
                        const selected = formData.serviceInterest.includes(srv);
                        const isAdviceOption = srv.includes('No lo tengo claro');

                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => handleToggleService(srv)}
                            className={`px-3.5 py-2 text-xs rounded-lg transition-all duration-150 border text-left cursor-pointer ${
                              selected
                                ? 'bg-[#292D32] text-[#F8F5F0] border-[#292D32]'
                                : isAdviceOption
                                ? 'bg-[#EDE3D9] text-[#292D32] border-[#D4B98C] font-medium'
                                : 'bg-[#F8F5F0] text-[#4A433B] border-[#DDD1C3] hover:border-[#C5B7A6]'
                            }`}
                          >
                            {selected ? '✓ ' : ''}
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#3E3831] mb-2">
                      ¿Qué te gustaría mejorar o qué dudas tienes? <span className="text-[#D4B98C]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntanos brevemente qué tareas te quitan tiempo o qué objetivos te gustaría alcanzar..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F5F0] border border-[#DDD1C3] text-sm text-[#292D32] placeholder-[#A39A91] focus:outline-hidden focus:border-[#292D32] transition-colors resize-y"
                      required
                    />
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={formData.privacyAccepted}
                      onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
                      className="mt-1 h-4 w-4 rounded border-[#D4B98C] text-[#292D32] focus:ring-0 cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-xs text-[#59524A] leading-relaxed cursor-pointer">
                      He leído y acepto la{' '}
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="text-[#292D32] underline hover:text-[#D4B98C] font-semibold"
                      >
                        política de privacidad
                      </button>{' '}
                      y el tratamiento de mis datos para responder a esta solicitud de consultoría.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-xs font-semibold tracking-wider uppercase text-[#F8F5F0] bg-[#292D32] hover:bg-[#3D434A] rounded-full transition-all duration-200 shadow-xs hover:shadow active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Enviando solicitud...</span>
                    ) : (
                      <>
                        <span>Solicitar consultoría gratuita</span>
                        <Send size={14} className="text-[#EDE3D9]" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
