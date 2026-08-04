import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppProductUrl } from '../../utils/whatsapp';

const WhatsAppButton = ({ product, label = "Buy Now on WhatsApp", className = "", iconOnly = false }) => {
  const handleClick = (e) => {
    e.stopPropagation(); // Prevent triggering the card's open modal action
    window.open(createWhatsAppProductUrl(product), "_blank", "noopener,noreferrer");
  };

  if (iconOnly) {
    return (
      <button
        onClick={handleClick}
        aria-label={`Buy ${product.name} on WhatsApp`}
        className={`w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 shadow-sm flex-shrink-0 ${className}`}
      >
        <MessageCircle className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      aria-label={`Buy ${product.name} on WhatsApp`}
      className={`flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-md font-bold text-sm tracking-wide hover:bg-[#20bd5a] transition-all duration-300 shadow-sm w-full ${className}`}
    >
      <MessageCircle className="w-4 h-4" />
      {label}
    </button>
  );
};

export default WhatsAppButton;
