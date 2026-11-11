import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Filosofía', href: '#filosofia-marca' },
    { label: 'Soluciones', href: '#soluciones' },
    { label: 'Ejemplos', href: '#ejemplos' },
    { label: 'Metodología', href: '#metodologia' },
    { label: 'Sectores', href: '#sectores' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F5F0]/95 backdrop-blur-md border-b border-[#EDE3D9]/90 py-3.5 shadow-[0_2px_12px_rgba(41,45,50,0.04)]'
          : 'bg-[#F8F5F0]/80 backdrop-blur-xs border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#inicio"
          className="group flex items-baseline gap-1.5 text-[#292D32] tracking-[0.2em] text-lg font-medium whitespace-nowrap shrink-0 transition-opacity hover:opacity-85"
        >
          <span className="font-semibold tracking-[0.22em]">AMABLIA</span>
          <span className="text-[11px] font-normal tracking-[0.28em] text-[#A39A91]">AGENCY</span>
        </a>

        {/* Zone 2: clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-wide text-[#59524A] font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#292D32] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4B98C] hover:after:w-full after:transition-all after:duration-250 whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 text-xs font-semibold tracking-wide text-[#F8F5F0] bg-[#292D32] hover:bg-[#3D434A] rounded-full transition-all duration-200 shadow-xs hover:shadow active:scale-[0.99] whitespace-nowrap shrink-0"
          >
            Solicitar una consultoría gratuita
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#1C1917] hover:text-[#C89B88] transition-colors"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFD5] px-6 py-6 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col gap-4 text-sm font-medium text-[#6A625B]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 hover:text-[#1C1917] border-b border-[#F0E8DE]/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 text-xs tracking-wide font-semibold text-[#F8F5F0] bg-[#292D32] rounded-full text-center"
              >
                Solicitar una consultoría gratuita
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
