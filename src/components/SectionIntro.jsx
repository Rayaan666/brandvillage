import React from 'react';
import { motion } from 'framer-motion';

const SectionIntro = () => {
  return (
    <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-24 pb-16">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
        {/* Left Side */}
        <div className="lg:w-[55%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-brandMuted text-xs font-bold tracking-[0.2em] uppercase">01 — ABOUT BRAND VILLAGE</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brandPrimary text-[11px] lg:text-xs font-bold tracking-[0.25em] uppercase mb-5 flex items-center gap-4"
          >
            <span className="w-8 h-px bg-brandYellow"></span>
            BEYOND OUTLET SHOPPING
          </motion.p>
          
          <h2 className="text-brandPrimary font-extrabold text-[38px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-tight">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                More Than <span className="text-brandYellow">Great Prices.</span>
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                A Better Way to Discover Brands.
              </motion.span>
            </span>
          </h2>
        </div>

        {/* Right Side */}
        <div className="lg:w-[40%] flex flex-col items-start lg:items-start lg:pl-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-brandMuted text-[17px] lg:text-[20px] leading-relaxed mb-8 font-medium"
          >
            Brand Village Outlet brings together recognised brands, exciting discoveries, and exceptional outlet value in one welcoming destination designed for everyone.
          </motion.p>
          
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-brandPrimary font-bold text-[13px] uppercase tracking-[0.15em] hover:text-brandYellow transition-colors flex items-center gap-2 group"
          >
            Discover Our Story
            <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </motion.a>
        </div>
      </div>
      
      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        className="w-full h-px bg-brandBorder mt-16 origin-left"
      />
    </div>
  );
};

export default SectionIntro;
