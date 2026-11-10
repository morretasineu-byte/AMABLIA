import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { LegalDocType } from '../types';

interface LegalModalProps {
  type: LegalDocType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#292D32]/65 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative bg-[#F8F5F0] border border-[#DDD1C3] rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl z-10 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-[#EDE3D9] mb-6">
          <div className="flex items-center gap-2.5">
            <ShieldCheck size={20} className="text-[#D4B98C]" />
            <span className="text-xs uppercase tracking-wider text-[#8C8074] font-semibold">
              Información Legal y Regulatoria
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#7A6F64] hover:text-[#292D32] hover:bg-[#EDE3D9] transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content switch */}
        {type === 'aviso-legal' && (
          <div className="prose text-xs sm:text-sm text-[#5C534B] leading-relaxed space-y-4">
            <h3 className="text-xl font-medium text-[#1C1917] tracking-tight">
              Aviso Legal
            </h3>
            <p>
              El presente sitio web es propiedad y está gestionado por <strong>AMABLIA AGENCY</strong> (en proceso de formalización e inscripción societaria mercantil en España).
            </p>
            <h4 className="font-semibold text-[#1C1917] text-sm pt-2">
              1. Condiciones de uso y aceptación
            </h4>
            <p>
              El acceso y utilización de este portal atribuye la condición de usuario, implicando la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios de acuerdo con las leyes aplicables, la buena fe y el orden público.
            </p>
            <h4 className="font-semibold text-[#1C1917] text-sm pt-2">
              2. Propiedad Intelectual e Industrial
            </h4>
            <p>
              Todos los derechos de propiedad industrial e intelectual de la web (incluyendo textos, composiciones visuales, marcas, logotipos, código fuente y estructura) son titularidad de AMABLIA AGENCY o de terceros que han autorizado debidamente su uso. Queda expresamente prohibida la reproducción, distribución o comunicación pública con fines comerciales sin autorización previa por escrito.
            </p>
            <h4 className="font-semibold text-[#1C1917] text-sm pt-2">
              3. Limitación de responsabilidad
            </h4>
            <p>
              AMABLIA AGENCY no garantiza la ausencia de interrupciones o errores en el acceso a la web, aunque adoptará todas las medidas técnicas necesarias para evitarlo y subsanarlo con la mayor diligencia posible.
            </p>
            <p className="text-[11px] text-[#8A7D71] pt-4 border-t border-[#EAE0D4]">
              Contacto para cuestiones legales: hola@amablia.agency
            </p>
          </div>
        )}

        {type === 'privacidad' && (
          <div className="prose text-xs sm:text-sm text-[#5C534B] leading-relaxed space-y-4">
            <h3 className="text-xl font-medium text-[#1C1917] tracking-tight">
              Política de Privacidad
            </h3>
            <p>
              En cumplimiento del Reglamento General de Protección de Datos (RGPD UE 2016/679) y de la Ley Orgánica 3/2018 (LOPDGDD), te informamos de manera transparente sobre el tratamiento de tus datos personales.
            </p>
            <h4 className="font-semibold text-[#1C1917] text-sm pt-2">
              1. Responsable del tratamiento
            </h4>
            <p>
              <strong>AMABLIA AGENCY</strong> · Correo de contacto y ejercicio de derechos: <em>hola@amablia.agency</em>.
            </p>
            <h4 className="font-semibold text-[#1C1917] text-sm pt-2">
              2. Finalidad del tratamiento
            </h4>
            <p>
              Tratamos los datos que nos facilitas a través del formulario de contacto exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responder a tu consulta de consultoría y evaluar las necesidades operativas de tu empresa.</li>
              <li>Elaborar y remitir propuestas comerciales adaptadas a tu solicitud.</li>
              <li>Gestionar la relación profesional en caso de contratación posterior.</li>
            </ul>
            <h4 className="font-semibold text-[#1C1917] text-sm pt-2">
              3. Base jurídica y conservación
            </h4>
            <p>
              La base legal es el consentimiento explícito manifestado al marcar la casilla de verificación antes de remitir el formulario. Los datos se conservarán durante el tiempo estrictamente necesario para atender la consulta o durante los plazos legales aplicables.
            </p>
            <h4 className="font-semibold text-[#1C1917] text-sm pt-2">
              4. Tus derechos
            </h4>
            <p>
              Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición enviando un correo electrónico a <em>hola@amablia.agency</em> acompañado de copia de tu documento identificativo.
            </p>
          </div>
        )}

        {type === 'cookies' && (
          <div className="prose text-xs sm:text-sm text-[#5C534B] leading-relaxed space-y-4">
            <h3 className="text-xl font-medium text-[#1C1917] tracking-tight">
              Política de Cookies
            </h3>
            <p>
              Este sitio web utiliza cookies técnicas esenciales y mecanismos de almacenamiento local estrictamente necesarios para su correcto funcionamiento y para recordar las preferencias de navegación.
            </p>
            <h4 className="font-semibold text-[#1C1917] text-sm pt-2">
              ¿Qué son las cookies?
            </h4>
            <p>
              Una cookie es un pequeño archivo de texto que un sitio web descarga en tu dispositivo al navegar, permitiendo reconocer tu sesión y recordar parámetros básicos de visualización.
            </p>
            <h4 className="font-semibold text-[#1C1917] text-sm pt-2">
              Tipos de cookies empleadas
            </h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Cookies técnicas:</strong> Garantizan la correcta navegación, la seguridad de la sesión y la transmisión fluida de formularios. No requieren consentimiento previo.</li>
              <li><strong>Cookies de rendimiento/analítica anónima:</strong> Permiten conocer patrones de tráfico agregados sin almacenar direcciones IP personales identificables.</li>
            </ul>
            <h4 className="font-semibold text-[#1C1917] text-sm pt-2">
              Gestión y revocación
            </h4>
            <p>
              Puedes configurar tu navegador web en cualquier momento para bloquear o alertar sobre la presencia de cookies. Ten en cuenta que algunas funcionalidades del sitio podrían verse afectadas.
            </p>
          </div>
        )}

        <div className="pt-6 mt-6 border-t border-[#EDE3D9] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-semibold tracking-wide text-[#F8F5F0] bg-[#292D32] hover:bg-[#3D434A] rounded-full transition-colors cursor-pointer"
          >
            Entendido y cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
