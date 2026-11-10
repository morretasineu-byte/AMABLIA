import React from 'react';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { LegalDocType } from '../types';

interface FooterProps {
  onOpenLegal: (type: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#filosofia' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Metodología', href: '#metodologia' },
    { label: 'Sectores', href: '#sectores' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#1C1917] text-[#FAF7F2] pt-20 pb-12 border-t border-[#2E2824]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2E2A27]">
          
          {/* Brand Presentation */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-xl font-medium tracking-[0.24em] text-[#FAF7F2]">
                  AMABLIA
                </span>
                <span className="text-[11px] font-light tracking-[0.3em] text-[#A69B90]">
                  AGENCY
                </span>
              </div>
              <p className="text-sm text-[#A69B90] leading-relaxed max-w-sm mb-6">
                Inteligencia artificial, automatización y soluciones digitales para empresas. Tecnología avanzada, pensada para las personas.
              </p>
              <div className="text-xs text-[#82766B] leading-relaxed">
                Diseñamos sistemas que reducen tareas mecánicas, mejoran la atención y potencian el crecimiento comercial sin fricciones.
              </div>
            </div>

            <div className="pt-6">
              <span className="text-[11px] text-[#6E6358] block">
                Presencia digital global · Operaciones en España
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#D8CEC4] font-medium mb-5">
              Navegación
            </h4>
            <ul className="space-y-3 text-sm text-[#A69B90]">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-[#FAF7F2] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialized Brands & Sectors */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#D8CEC4] font-medium mb-5">
                Marcas Especializadas
              </h4>
              <div className="p-4 rounded-2xl bg-[#26221F] border border-[#38322D] mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-[#FAF7F2]">
                    DentalIA Agency
                  </span>
                  <a
                    href="https://dentaliaagency.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C89B88] hover:text-[#FAF7F2] transition-colors inline-flex items-center gap-1 text-xs"
                  >
                    <span>dentaliaagency.com</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
                <p className="text-xs text-[#8A7D71] leading-relaxed">
                  Soluciones de IA y automatización para clínicas dentales. Agentes de WhatsApp, llamadas y gestión de citas.
                </p>
              </div>

              <div className="text-[11px] text-[#786C61]">
                Nuevas divisiones verticales en fase de desarrollo metodológico.
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-6 flex justify-start md:justify-end">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs text-[#A69B90] hover:text-[#FAF7F2] border border-[#3A332E] hover:border-[#524942] rounded-full transition-colors"
              >
                <span>Volver arriba</span>
                <ArrowUp size={13} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#7A6E63]">
          
          {/* Reserved corporate info placeholder */}
          <div className="text-center md:text-left">
            <p>
              © {new Date().getFullYear()} AMABLIA AGENCY · Todos los derechos reservados.
            </p>
            <p className="text-[11px] text-[#63574C] mt-0.5">
              [Datos societarios y fiscales: AMABLIA AGENCY S.L. — En trámite de inscripción mercantil]
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#9A8F84]">
            <button
              onClick={() => onOpenLegal('aviso-legal')}
              className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
            >
              Aviso Legal
            </button>
            <span className="text-[#3A342E]">·</span>
            <button
              onClick={() => onOpenLegal('privacidad')}
              className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
            >
              Política de Privacidad
            </button>
            <span className="text-[#3A342E]">·</span>
            <button
              onClick={() => onOpenLegal('cookies')}
              className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
            >
              Política de Cookies
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
