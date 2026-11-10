import React, { useState } from 'react';
import { Mail, Check, Send, AlertCircle, Clock, MapPin } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactProps {
  onOpenPrivacy: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenPrivacy }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceInterest: ['Agentes de inteligencia artificial'],
    message: '',
    privacyAccepted: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const availableServices = [
    'Agentes de inteligencia artificial',
    'Automatización de procesos',
    'Atención al cliente inteligente',
    'Sistemas de captación y conversión',
    'Integraciones y soluciones a medida',
    'Solución para Clínicas Dentales (DentalIA)',
  ];

  const handleToggleService = (srv: string) => {
    setFormData((prev) => {
      const exists = prev.serviceInterest.includes(srv);
      if (exists) {
        // keep at least one or allow empty
        return { ...prev, serviceInterest: prev.serviceInterest.filter((s) => s !== srv) };
      } else {
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
      setErrorMessage('Por favor, indica el nombre de tu empresa.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Por favor, introduce un correo electrónico válido.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Por favor, cuéntanos brevemente qué necesitas.');
      return;
    }
    if (!formData.privacyAccepted) {
      setErrorMessage('Debes aceptar la política de privacidad para enviar el formulario.');
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
      serviceInterest: ['Agentes de inteligencia artificial'],
      message: '',
      privacyAccepted: false,
    });
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#887D73] font-medium mb-4">
          <span>06</span>
          <span className="text-[#C89B88]">/</span>
          <span>Contacto</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Contact Details */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#1C1917] leading-[1.18] mb-6 text-balance">
              Hablemos de tu <span className="font-serif-luxury italic font-normal">próximo paso.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#6A625B] leading-relaxed mb-10">
              Cada negocio tiene sus propios retos. Nos encantará conocer el tuyo.
              Analizaremos tu caso de forma personalizada y te explicaremos con honestidad cómo podemos ayudarte.
            </p>

            <div className="space-y-6 pt-6 border-t border-[#EAE0D4]">
              
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F4EFEB] border border-[#E0D5C7] flex items-center justify-center text-[#594F46] shrink-0 mt-0.5">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#918376] font-medium block">
                    Correo electrónico
                  </span>
                  <a
                    href="mailto:hola@amablia.agency"
                    className="text-sm font-medium text-[#1C1917] hover:text-[#C89B88] transition-colors"
                  >
                    hola@amablia.agency
                  </a>
                  <span className="text-[11px] text-[#A3968B] block mt-0.5">
                    (Dirección corporativa provisional de contacto)
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F4EFEB] border border-[#E0D5C7] flex items-center justify-center text-[#594F46] shrink-0 mt-0.5">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#918376] font-medium block">
                    Ubicación y Cobertura
                  </span>
                  <p className="text-sm font-medium text-[#1C1917]">
                    España · Servicio a empresas internacionales
                  </p>
                  <span className="text-[11px] text-[#A3968B] block mt-0.5">
                    Operamos de forma 100% digital y remota
                  </span>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F4EFEB] border border-[#E0D5C7] flex items-center justify-center text-[#594F46] shrink-0 mt-0.5">
                  <Clock size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#918376] font-medium block">
                    Horario de atención
                  </span>
                  <p className="text-sm font-medium text-[#1C1917]">
                    Lunes a Viernes · 09:00 - 18:00 (CET)
                  </p>
                </div>
              </div>

            </div>

            <div className="p-5 mt-10 rounded-2xl bg-[#F4ECE3] border border-[#DFD1C1] text-xs text-[#6B5F54] leading-relaxed">
              <span className="font-serif-luxury italic text-[#C89B88] text-sm block mb-1">
                Garantía de confidencialidad
              </span>
              Toda la información y datos de tus procesos operativos compartidos durante la consultoría están protegidos bajo estricto secreto profesional.
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] border border-[#E4D8CA] shadow-[0_4px_24px_rgba(28,25,23,0.03)]">
              
              {submitted ? (
                <div className="text-center py-10 animate-in fade-in duration-300">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#F3ECE4] border border-[#C89B88] text-[#1C1917] flex items-center justify-center mb-6">
                    <Check size={28} className="text-[#C89B88]" />
                  </div>
                  <h3 className="text-2xl font-light text-[#1C1917] mb-3">
                    Mensaje recibido con éxito
                  </h3>
                  <p className="text-sm text-[#665D53] max-w-md mx-auto leading-relaxed mb-6">
                    Gracias, <strong className="text-[#1C1917]">{formData.name}</strong>. Hemos registrado la solicitud de <strong className="text-[#1C1917]">{formData.company}</strong>. Nuestro equipo revisará los detalles y te responderá en menos de 24 horas a <span className="underline">{formData.email}</span>.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 text-xs font-semibold tracking-wide text-[#1C1917] hover:text-[#C89B88] border border-[#E0D5C7] rounded-full transition-colors"
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
                      <label htmlFor="name" className="block text-xs font-medium text-[#4A423B] mb-2">
                        Nombre completo <span className="text-[#C89B88]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Carmen Ortiz"
                        className="w-full px-4 py-3 rounded-xl bg-[#F6F0EA] border border-[#E2D5C6] text-sm text-[#1C1917] placeholder-[#A4978A] focus:outline-hidden focus:border-[#1C1917] focus:bg-[#FAF7F2] transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-medium text-[#4A423B] mb-2">
                        Empresa <span className="text-[#C89B88]">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Ej. Clínica Dental Ortiz"
                        className="w-full px-4 py-3 rounded-xl bg-[#F6F0EA] border border-[#E2D5C6] text-sm text-[#1C1917] placeholder-[#A4978A] focus:outline-hidden focus:border-[#1C1917] focus:bg-[#FAF7F2] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-[#4A423B] mb-2">
                        Correo electrónico <span className="text-[#C89B88]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nombre@empresa.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F6F0EA] border border-[#E2D5C6] text-sm text-[#1C1917] placeholder-[#A4978A] focus:outline-hidden focus:border-[#1C1917] focus:bg-[#FAF7F2] transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-[#4A423B] mb-2">
                        Teléfono <span className="text-[#96897D] text-[11px]">(opcional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+34 600 000 000"
                        className="w-full px-4 py-3 rounded-xl bg-[#F6F0EA] border border-[#E2D5C6] text-sm text-[#1C1917] placeholder-[#A4978A] focus:outline-hidden focus:border-[#1C1917] focus:bg-[#FAF7F2] transition-colors"
                      />
                    </div>
                  </div>

                  {/* ¿En qué podemos ayudarte? */}
                  <div>
                    <label className="block text-xs font-medium text-[#4A423B] mb-2.5">
                      ¿En qué podemos ayudarte? <span className="text-[#96897D] text-[11px]">(puedes seleccionar varios)</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((srv) => {
                        const selected = formData.serviceInterest.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => handleToggleService(srv)}
                            className={`px-3.5 py-2 text-xs rounded-lg transition-all duration-150 border text-left ${
                              selected
                                ? 'bg-[#1C1917] text-[#FAF7F2] border-[#1C1917]'
                                : 'bg-[#F5EFEB] text-[#554C43] border-[#E3D6C7] hover:border-[#D0C0B0]'
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-[#4A423B] mb-2">
                      Mensaje <span className="text-[#C89B88]">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntanos brevemente qué procesos te gustaría automatizar o qué objetivos quieres alcanzar..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F6F0EA] border border-[#E2D5C6] text-sm text-[#1C1917] placeholder-[#A4978A] focus:outline-hidden focus:border-[#1C1917] focus:bg-[#FAF7F2] transition-colors resize-y"
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
                      className="mt-1 h-4 w-4 rounded border-[#D4C5B5] text-[#1C1917] focus:ring-0 cursor-pointer"
                    />
                    <label htmlFor="privacy" className="text-xs text-[#70655B] leading-relaxed cursor-pointer">
                      He leído y acepto la{' '}
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="text-[#1C1917] underline hover:text-[#C89B88] font-medium"
                      >
                        política de privacidad
                      </button>{' '}
                      y el tratamiento de mis datos para responder a esta solicitud.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-xs font-semibold tracking-wider uppercase text-[#FAF7F2] bg-[#1C1917] hover:bg-[#2C2724] rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span>Enviando solicitud...</span>
                    ) : (
                      <>
                        <span>Enviar mensaje</span>
                        <Send size={14} className="text-[#E8DFD5]" />
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
