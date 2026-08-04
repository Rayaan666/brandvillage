import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { createWhatsAppGeneralUrl } from '../../utils/whatsapp';

const StoreWhatsAppCTA = () => {
  return (
    <div className="w-full bg-[#1B1B1B] py-10 md:py-14 relative overflow-hidden">
      {/* Large outlined WhatsApp icon as background */}
      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <MessageCircle className="w-[400px] h-[400px] text-white" strokeWidth={1} />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-white font-extrabold text-[32px] md:text-[42px] lg:text-[48px] tracking-tight mb-5"
        >
          Looking for Something Specific?
        </motion.h3>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/80 text-[17px] lg:text-[19px] leading-relaxed max-w-[600px] mb-8 font-medium"
        >
          Send us a message with the product, category, size, colour or style you are looking for, and our team will assist you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href={createWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-[#20bd5a] hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Chat With Us on WhatsApp
          </a>
          <span className="text-white/50 text-[11px] uppercase tracking-wider font-semibold">
            We’ll help you check availability and product details.
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default StoreWhatsAppCTA;
