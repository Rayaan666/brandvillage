import React from 'react';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppGeneralUrl } from '../../utils/whatsapp';

const FloatingWhatsAppButton = () => {
  return (
    <a
      href={createWhatsAppGeneralUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Need Help? Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[100] flex items-center gap-3 bg-[#25D366] text-white p-4 lg:px-6 lg:py-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:scale-105 hover:shadow-[0_8px_40px_rgba(37,211,102,0.4)] transition-all duration-300 group"
    >
      <div className="relative">
        <MessageCircle className="w-7 h-7 lg:w-6 lg:h-6" />
        {/* Refined pulse animation */}
        <span className="absolute inset-0 rounded-full border-2 border-white animate-ping opacity-75 hidden lg:block"></span>
      </div>
      <span className="hidden lg:block font-bold text-sm tracking-wide">
        Need Help?
      </span>
    </a>
  );
};

export default FloatingWhatsAppButton;
