import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppBanner = () => {
  return (
    <section className="w-full bg-brandYellow py-10 lg:py-16 relative overflow-hidden">
      
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-end -mr-20 opacity-10 pointer-events-none overflow-hidden select-none">
        <MessageCircle className="w-96 h-96 lg:w-[600px] lg:h-[600px] text-brandPrimary" strokeWidth={0.5} />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-full bg-brandPrimary text-brandYellow flex items-center justify-center mb-8"
        >
          <MessageCircle className="w-8 h-8" strokeWidth={1.5} />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-brandPrimary font-extrabold text-3xl md:text-5xl lg:text-6xl tracking-tight mb-6"
        >
          Need A Faster Response?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-brandPrimary/80 font-medium text-lg lg:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          Our dedicated team is available on WhatsApp to help you with product enquiries, store information and stock availability in real-time.
        </motion.p>

        <motion.a
          href="https://wa.me/971581234560"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center justify-center gap-3 bg-brandPrimary text-white px-10 py-5 font-bold text-base tracking-wide hover:bg-white hover:text-brandPrimary transition-colors duration-300 rounded-full"
        >
          <MessageCircle className="w-5 h-5" />
          Chat With Us
        </motion.a>

      </div>
    </section>
  );
};

export default WhatsAppBanner;
