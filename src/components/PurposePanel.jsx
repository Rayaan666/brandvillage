import React from 'react';

const PurposePanel = ({ number, label, text, onHoverStart, onHoverEnd, isFirst }) => {
  return (
    <div 
      className={`relative flex-1 p-8 lg:p-12 flex flex-col justify-center group transition-colors duration-500 hover:bg-[#EFE8D3] ${!isFirst ? 'border-t border-brandBorder/50 lg:border-t-0' : ''}`}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      {/* Background Number */}
      <span className="absolute right-8 bottom-4 text-[100px] lg:text-[140px] font-extrabold text-brandPrimary opacity-[0.04] leading-none pointer-events-none select-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-x-2">
        {number}
      </span>
      
      {/* Quotation Mark Decorative */}
      <span className="absolute left-6 lg:left-8 top-6 lg:top-8 text-brandYellow text-6xl lg:text-8xl font-serif opacity-30 pointer-events-none select-none leading-none">
        "
      </span>

      <div className="relative z-10 lg:pl-4">
        <div className="flex items-center gap-4 mb-4 lg:mb-6">
          <div className="w-6 h-[2px] bg-brandYellow group-hover:w-12 transition-all duration-500 ease-out"></div>
          <span className="text-brandPrimary text-[11px] font-bold tracking-[0.25em] uppercase">
            {label}
          </span>
        </div>
        
        <p className="text-brandPrimary text-[24px] lg:text-[30px] leading-[1.35] font-medium tracking-tight group-hover:text-black transition-colors duration-300">
          {text}
        </p>
      </div>
    </div>
  );
};

export default PurposePanel;
