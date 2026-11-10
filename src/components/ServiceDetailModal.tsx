import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForConsultation: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForConsultation,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#292D32]/65 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#F8F5F0] border border-[#DDD1C3] rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#EDE3D9] mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-serif-editorial italic text-[#D4B98C]">
                Área {service.number}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#8C8074]">
                · AMABLIA AGENCY
              </span>
            </div>
            <h3 className="text-2xl font-light tracking-tight text-[#292D32]">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#7A6F64] hover:text-[#292D32] hover:bg-[#EDE3D9] transition-colors cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X size={20} />
          </button>
        </div>

        {/* Narrative */}
        <div className="space-y-6 text-xs sm:text-sm text-[#4A433B] leading-relaxed">
          <p className="text-base text-[#292D32] leading-relaxed">
            {service.fullDesc}
          </p>

          {/* Use Cases */}
          <div className="p-5 rounded-2xl bg-[#F3EDE5] border border-[#DDD1C3]">
            <h4 className="text-xs uppercase tracking-wider text-[#8C8074] font-semibold mb-3">
              Aplicaciones habituales en el día a día
            </h4>
            <div className="space-y-2.5">
              {service.useCases.map((uc, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="font-serif-editorial italic text-[#D4B98C] text-base leading-none">✦</span>
                  <span>{uc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#8C8074] font-semibold mb-3">
              ¿Qué incluye la implementación?
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {service.deliverables.map((del, i) => (
                <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8F5F0] border border-[#DDD1C3]">
                  <Check size={15} className="text-[#D4B98C] shrink-0" />
                  <span className="text-xs font-medium text-[#292D32]">{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Channels */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#8C8074] font-semibold mb-2">
              Canales y herramientas habituales
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.channels.map((ch) => (
                <span key={ch} className="px-3 py-1 bg-[#EDE3D9] border border-[#D9CEBF] rounded-lg text-xs text-[#4A433B]">
                  {ch}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="pt-6 mt-8 border-t border-[#EDE3D9] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs text-[#7A6F64] hover:text-[#292D32] transition-colors order-2 sm:order-1 cursor-pointer"
          >
            Cerrar ficha
          </button>
          <button
            onClick={() => {
              onSelectForConsultation(service.title);
              onClose();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wide text-[#F8F5F0] bg-[#292D32] hover:bg-[#3D434A] rounded-full transition-all order-1 sm:order-2 shadow-xs cursor-pointer"
          >
            <span>Consultar sobre este servicio</span>
            <ArrowRight size={14} className="text-[#EDE3D9]" />
          </button>
        </div>

      </div>
    </div>
  );
};
