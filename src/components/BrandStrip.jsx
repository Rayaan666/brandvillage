import React from 'react';

const categories = [
  "Fashion", "Footwear", "Accessories", "Home", "Kids", "Sports", "Beauty"
];

const BrandStrip = () => {
  return (
    <div className="bg-[#FAF9F6] border-b border-brandBorder pt-[88px]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center overflow-x-auto no-scrollbar py-3.5 space-x-6 lg:space-x-12 text-[11px] font-bold tracking-[0.15em] uppercase text-brandMuted">
          {categories.map((cat, idx) => (
            <React.Fragment key={cat}>
              <a href="#" className="whitespace-nowrap hover:text-brandPrimary transition-colors">
                {cat}
              </a>
              {idx < categories.length - 1 && (
                <span className="w-px h-3.5 bg-brandBorder/80 flex-shrink-0"></span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandStrip;
