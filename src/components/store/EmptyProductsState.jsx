import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { createWhatsAppGeneralUrl } from '../../utils/whatsapp';

const EmptyProductsState = ({ onClearFilters }) => {
  return (
    <div className="w-full py-20 flex flex-col items-center justify-center text-center">
      <div className="w-24 h-24 rounded-full bg-brandLight flex items-center justify-center mb-6">
        <ShoppingBag className="w-10 h-10 text-brandMuted" strokeWidth={1} />
      </div>
      
      <h3 className="text-brandPrimary font-extrabold text-2xl mb-3">
        No Products Found
      </h3>
      
      <p className="text-brandMuted max-w-[400px] mb-8">
        Try adjusting your filters or contact us on WhatsApp and we’ll help you find what you need.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button 
          onClick={onClearFilters}
          className="px-6 py-3 bg-brandPrimary text-white font-bold text-sm hover:bg-brandYellow hover:text-brandPrimary transition-colors"
        >
          Clear Filters
        </button>
        <a 
          href={createWhatsAppGeneralUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-transparent border border-brandBorder text-brandPrimary font-bold text-sm hover:border-brandPrimary transition-colors"
        >
          Ask on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default EmptyProductsState;
