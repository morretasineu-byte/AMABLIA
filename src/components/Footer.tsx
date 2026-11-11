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
    { label: 'Filosofía', href: '#filosofia-marca' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Ejemplos Prácticos', href: '#ejemplos' },
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
    <footer className="bg-[#292D32] text-[#F8F5F0] pt-20 pb-12 border-t border-[#3D434A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#3D434A]/80">
          
          {/* Brand Presentation & Sub-brand badge */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-xl font-medium tracking-[0.22em] text-[#F8F5F0]">
                  AMABLIA
                </span>
                <span className="text-[11px] font-light tracking-[0.28em] text-[#A39A91]">
                  AGENCY
                </span>
              </div>

              {/* Explicit Mention as requested in Section 12 */}
              <div className="inline-block px-3 py-1 rounded-md bg-[#383E45] border border-[#484F57] text-[11px] font-medium text-[#D4B98C] mb-4">
                An AMABLIA AGENCY brand
              </div>

              <p className="text-sm text-[#A39A91] leading-relaxed max-w-sm mb-4">
                Inteligencia artificial con sensibilidad humana. Porque la tecnología también puede ser amable.
              </p>
              <div className="text-xs text-[#8C8074] leading-relaxed">
                Automatizamos tareas. Humanizamos experiencias. Diseñamos sistemas inteligentes que trabajan para las personas, no en su lugar.
              </div>
            </div>

            <div className="pt-6">
              <span className="text-[11px] text-[#7A7167] block">
                Presencia digital en España y proyectos telemáticos
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#EDE3D9] font-semibold mb-5">
              Navegación
            </h4>
            <ul className="space-y-3 text-sm text-[#A39A91]">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="hover:text-[#F8F5F0] transition-colors"
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
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#EDE3D9] font-semibold mb-5">
                Marcas Especializadas
              </h4>
              <div className="p-4 rounded-2xl bg-[#33383E] border border-[#424850] mb-4">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-[#F8F5F0]">
                    DentalIA Agency
                  </span>
                  <a
                    href="https://dentaliaagency.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4B98C] hover:text-[#F8F5F0] transition-colors inline-flex items-center gap-1 text-xs"
                  >
                    <span>dentaliaagency.com</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
                <p className="text-xs text-[#8C8074] leading-relaxed">
                  Soluciones de IA y automatización para clínicas dentales. Agentes de WhatsApp, llamadas y apoyo en la recepción.
                </p>
              </div>

              <div className="text-[11px] text-[#7A7167]">
                Nuevas divisiones verticales en fase de desarrollo metodológico.
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-6 flex justify-start md:justify-end">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs text-[#A39A91] hover:text-[#F8F5F0] border border-[#484F57] hover:border-[#636C77] rounded-full transition-colors cursor-pointer"
              >
                <span>Volver arriba</span>
                <ArrowUp size={13} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#8C8074]">
          
          {/* Reserved corporate info placeholder */}
          <div className="text-center md:text-left">
            <p>
              © {new Date().getFullYear()} AMABLIA AGENCY · Todos los derechos reservados.
            </p>
            <p className="text-[11px] text-[#6E6357] mt-0.5">
              [Datos societarios y fiscales: AMABLIA AGENCY S.L. — En trámite de formalización e inscripción mercantil]
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#A39A91]">
            <button
              onClick={() => onOpenLegal('aviso-legal')}
              className="hover:text-[#F8F5F0] transition-colors cursor-pointer"
            >
              Aviso Legal
            </button>
            <span className="text-[#484F57]">·</span>
            <button
              onClick={() => onOpenLegal('privacidad')}
              className="hover:text-[#F8F5F0] transition-colors cursor-pointer"
            >
              Política de Privacidad
            </button>
            <span className="text-[#484F57]">·</span>
            <button
              onClick={() => onOpenLegal('cookies')}
              className="hover:text-[#F8F5F0] transition-colors cursor-pointer"
            >
              Política de Cookies
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
