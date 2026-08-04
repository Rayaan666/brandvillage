import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';

const ReachUs = () => {
  return (
    <section className="w-full bg-[#FAF9F6] py-10 lg:py-16 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-8 h-px bg-brandYellow"></span>
            <span className="text-brandMuted text-[11px] font-bold tracking-[0.25em] uppercase">
              How To Connect
            </span>
            <span className="w-8 h-px bg-brandYellow"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brandPrimary font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight"
          >
            Ways To Reach Us
          </motion.h2>
        </div>

        {/* 3 Editorial Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 lg:gap-y-0 lg:gap-x-12 divide-y lg:divide-y-0 lg:divide-x divide-brandBorder/60">
          
          {/* Call Us */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center pt-8 lg:pt-0 lg:px-8 group"
          >
            <div className="w-20 h-20 rounded-full border border-brandBorder flex items-center justify-center mb-8 text-brandPrimary group-hover:border-brandYellow group-hover:bg-brandYellow group-hover:text-white transition-all duration-500">
              <Phone className="w-8 h-8" strokeWidth={1} />
            </div>
            <h3 className="text-brandPrimary font-bold text-2xl mb-4 tracking-tight">Call Us</h3>
            <p className="text-brandMuted text-base mb-8 max-w-[280px] leading-relaxed">
              Speak directly with our customer support team for immediate assistance.
            </p>
            <a href="tel:+971581234560" className="inline-flex items-center gap-2 text-brandPrimary font-bold text-sm tracking-wide group-hover:text-brandYellow transition-colors duration-300 mt-auto">
              +971 58 123 4560 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="tel:+97143353845" className="inline-flex items-center gap-2 text-brandPrimary/70 font-semibold text-xs tracking-wide hover:text-brandYellow transition-colors duration-300 mt-1">
              Landline: +971 4 335 3845
            </a>
          </motion.div>

          {/* Email Us */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col items-center text-center pt-16 lg:pt-0 lg:px-8 group"
          >
            <div className="w-20 h-20 rounded-full border border-brandBorder flex items-center justify-center mb-8 text-brandPrimary group-hover:border-brandYellow group-hover:bg-brandYellow group-hover:text-white transition-all duration-500">
              <Mail className="w-8 h-8" strokeWidth={1} />
            </div>
            <h3 className="text-brandPrimary font-bold text-2xl mb-4 tracking-tight">Email Us</h3>
            <p className="text-brandMuted text-base mb-8 max-w-[280px] leading-relaxed">
              We'll get back to you as quickly as possible with detailed information.
            </p>
            <a href="mailto:info@brandvillage.ae" className="inline-flex items-center gap-2 text-brandPrimary font-bold text-sm tracking-wide group-hover:text-brandYellow transition-colors duration-300 mt-auto">
              info@brandvillage.ae <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col items-center text-center pt-16 lg:pt-0 lg:px-8 group"
          >
            <div className="w-20 h-20 rounded-full border border-brandBorder flex items-center justify-center mb-8 text-brandPrimary group-hover:border-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all duration-500">
              <MessageCircle className="w-8 h-8" strokeWidth={1} />
            </div>
            <h3 className="text-brandPrimary font-bold text-2xl mb-4 tracking-tight">WhatsApp</h3>
            <p className="text-brandMuted text-base mb-8 max-w-[280px] leading-relaxed">
              Instant assistance for product enquiries and stock availability.
            </p>
            <a href="https://wa.me/971581234560" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brandPrimary font-bold text-sm tracking-wide group-hover:text-[#25D366] transition-colors duration-300 mt-auto">
              Start Chat <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ReachUs;
