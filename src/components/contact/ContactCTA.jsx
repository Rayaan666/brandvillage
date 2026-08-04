import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="w-full bg-[#111111] py-32 lg:py-48 relative overflow-hidden">
      
      {/* Background Decorative Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span className="text-[25vw] font-black text-white/[0.03] tracking-tighter leading-none whitespace-nowrap">
          HELLO
        </span>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="w-8 h-px bg-brandYellow"></span>
          <span className="text-white/60 text-[11px] font-bold tracking-[0.25em] uppercase">
            Let's Connect
          </span>
          <span className="w-8 h-px bg-brandYellow"></span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-white font-extrabold text-5xl md:text-6xl lg:text-[80px] leading-[1.05] tracking-tight mb-8"
        >
          We'd Love<br />
          To <span className="text-brandYellow">Hear</span><br />
          From You.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 font-medium text-lg lg:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          Whether you're visiting our store or contacting us online, we're here to make your Brand Village Outlet experience exceptional.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a 
            href="https://www.google.com/maps/place/Brand+village+outlet/@25.2638788,55.3165515,17z/data=!4m6!3m5!1s0x3e5f5d0005e2ab7b:0xfc733466a6642162!8m2!3d25.2638788!4d55.3165515!16s%2Fg%2F11wsp0s4h2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-brandYellow text-brandPrimary px-10 py-5 font-bold text-sm tracking-wide hover:bg-white transition-colors duration-300 w-full sm:w-auto rounded-full"
          >
            Visit Store
            <ArrowRight className="w-4 h-4" />
          </a>
          <a 
            href="https://wa.me/971581234560"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-brandYellow text-brandPrimary px-10 py-5 font-bold text-sm tracking-wide hover:bg-white transition-colors duration-300 w-full sm:w-auto rounded-full"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactCTA;
