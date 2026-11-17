import React from 'react';

interface BrandLogoProps {
  size?: 'header' | 'sm' | 'md';
  tone?: 'light' | 'dark';
  className?: string;
}

const LOGO_SRC = '/assets/aistudio/Cinta_abstracta_de_seda_en_bucle__1__d8aecb1b.png';

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'header',
  tone = 'light',
  className = '',
}) => {
  const isDark = tone === 'dark';

  const sizeStyles = {
    header: {
      img: 'h-8 sm:h-9 -mt-1 -mb-1',
      wordmark: 'text-[19px] sm:text-[22px]',
      agencyRow: 'mt-1 gap-2',
      line: 'w-4 sm:w-5 h-[1px]',
      agency: 'text-[7.5px] sm:text-[8.5px] tracking-[0.38em] pl-[0.38em]',
    },
    sm: {
      img: 'h-7 -mt-1 -mb-1',
      wordmark: 'text-[18px]',
      agencyRow: 'mt-1 gap-1.5',
      line: 'w-3.5 h-[1px]',
      agency: 'text-[7px] tracking-[0.36em] pl-[0.36em]',
    },
    md: {
      img: 'h-11 sm:h-12 -mt-1.5 -mb-1.5',
      wordmark: 'text-[26px] sm:text-[28px]',
      agencyRow: 'mt-1.5 gap-2.5',
      line: 'w-6 sm:w-7 h-[1px]',
      agency: 'text-[9px] sm:text-[10px] tracking-[0.42em] pl-[0.42em]',
    },
  }[size];

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      <img
        src={LOGO_SRC}
        alt="AMABLIA AGENCY"
        className={`w-auto object-contain ${sizeStyles.img}`}
      />
      <span
        className={`font-serif-editorial lowercase leading-none tracking-[-0.02em] font-normal ${sizeStyles.wordmark} ${
          isDark ? 'text-[#F8F5F0]' : 'text-[#292D32]'
        }`}
      >
        amablia
      </span>
      <div className={`flex items-center justify-center ${sizeStyles.agencyRow}`}>
        <span
          aria-hidden="true"
          className={`block ${sizeStyles.line} ${isDark ? 'bg-[#C98A74]' : 'bg-[#B97B67]'}`}
        />
        <span
          className={`font-sans-refined font-light uppercase leading-none ${sizeStyles.agency} ${
            isDark ? 'text-[#EDE3D9]' : 'text-[#3D3A36]'
          }`}
        >
          AGENCY
        </span>
        <span
          aria-hidden="true"
          className={`block ${sizeStyles.line} ${isDark ? 'bg-[#C98A74]' : 'bg-[#B97B67]'}`}
        />
      </div>
    </div>
  );
};
