import React, { useState } from 'react';
import { X, Calendar as CalendarIcon, Clock, Check, ArrowRight } from 'lucide-react';

interface ConsultationCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmSlot: (dateStr: string, timeStr: string) => void;
}

export const ConsultationCalendarModal: React.FC<ConsultationCalendarModalProps> = ({
  isOpen,
  onClose,
  onConfirmSlot,
}) => {
  if (!isOpen) return null;

  // Next 5 business days
  const availableDates = [
    { label: 'Mañana', date: 'Miércoles, 11 Noviembre' },
    { label: 'Jueves', date: 'Jueves, 12 Noviembre' },
    { label: 'Viernes', date: 'Viernes, 13 Noviembre' },
    { label: 'Lunes', date: 'Lunes, 16 Noviembre' },
    { label: 'Martes', date: 'Martes, 17 Noviembre' },
  ];

  const availableHours = ['10:00 - 10:30', '11:30 - 12:00', '13:00 - 13:30', '16:00 - 16:30', '17:15 - 17:45'];

  const [selectedDate, setSelectedDate] = useState(availableDates[0].date);
  const [selectedHour, setSelectedHour] = useState(availableHours[1]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleBooking = () => {
    setBookingConfirmed(true);
    setTimeout(() => {
      onConfirmSlot(selectedDate, selectedHour);
      setBookingConfirmed(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#292D32]/65 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#F8F5F0] border border-[#DDD1C3] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#EDE3D9] mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CalendarIcon size={14} className="text-[#D4B98C]" />
              <span className="text-[11px] uppercase tracking-wider text-[#8C8074] font-semibold">
                Agenda de Diagnóstico Gratuito
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-light tracking-tight text-[#292D32]">
              Elige día y hora para tu consultoría
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#7A6F64] hover:text-[#292D32] hover:bg-[#EDE3D9] transition-colors cursor-pointer"
            aria-label="Cerrar calendario"
          >
            <X size={20} />
          </button>
        </div>

        {bookingConfirmed ? (
          <div className="py-8 text-center animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-[#EDE3D9] text-[#292D32] flex items-center justify-center mx-auto mb-4">
              <Check size={24} className="text-[#D4B98C]" />
            </div>
            <h4 className="text-lg font-medium text-[#292D32] mb-1">
              Horario pre-seleccionado
            </h4>
            <p className="text-xs text-[#59524A] mb-4">
              {selectedDate} a las {selectedHour} (CET).
            </p>
            <p className="text-xs text-[#8C8074]">
              Te redirigimos al formulario para confirmar tus datos de contacto...
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <p className="text-xs text-[#59524A] leading-relaxed">
              Selecciona el horario que mejor se adapte a tu agenda. La sesión dura 30 minutos por videollamada y revisamos tus procesos sin ningún compromiso.
            </p>

            {/* Date selection */}
            <div>
              <label className="block text-xs font-semibold text-[#3E3831] mb-2.5">
                1. Selecciona el día
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {availableDates.map((item) => {
                  const isSelected = selectedDate === item.date;
                  return (
                    <button
                      type="button"
                      key={item.date}
                      onClick={() => setSelectedDate(item.date)}
                      className={`p-2.5 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#292D32] text-[#F8F5F0] border-[#292D32]'
                          : 'bg-[#F3EDE5] text-[#4A433B] border-[#DDD1C3] hover:border-[#C5B7A6]'
                      }`}
                    >
                      <span className="block text-[10px] uppercase font-bold text-[#D4B98C] mb-0.5">
                        {item.label}
                      </span>
                      <span className="font-medium truncate block">{item.date.split(',')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time selection */}
            <div>
              <label className="block text-xs font-semibold text-[#3E3831] mb-2.5">
                2. Selecciona la franja horaria
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {availableHours.map((hour) => {
                  const isSelected = selectedHour === hour;
                  return (
                    <button
                      type="button"
                      key={hour}
                      onClick={() => setSelectedHour(hour)}
                      className={`py-2 px-3 rounded-xl border text-xs font-medium text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#292D32] text-[#F8F5F0] border-[#292D32]'
                          : 'bg-[#F3EDE5] text-[#4A433B] border-[#DDD1C3] hover:border-[#C5B7A6]'
                      }`}
                    >
                      <Clock size={12} className="inline mr-1 text-[#D4B98C]" />
                      {hour}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selection preview */}
            <div className="p-3.5 rounded-xl bg-[#EDE3D9]/60 border border-[#DDD1C3] text-xs text-[#4A433B] flex items-center justify-between">
              <span>Horario elegido:</span>
              <strong className="text-[#292D32]">{selectedDate} · {selectedHour}</strong>
            </div>

            {/* Submit */}
            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-[#7A6F64] hover:text-[#292D32] transition-colors"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleBooking}
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#F8F5F0] bg-[#292D32] hover:bg-[#3D434A] rounded-full transition-all cursor-pointer shadow-xs"
              >
                <span>Confirmar fecha y completar contacto</span>
                <ArrowRight size={14} className="text-[#EDE3D9]" />
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
