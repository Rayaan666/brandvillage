import React from 'react';
import { motion } from 'framer-motion';

const SectionIntro = ({ content }) => {
  const eyebrow = content?.eyebrow || "01 — ABOUT BRAND VILLAGE";
  const subTitle = content?.subTitle || "BEYOND OUTLET SHOPPING";
  const titleLine1 = content?.titleLine1 || "More Than Great Prices.";
  const titleLine2 = content?.titleLine2 || "A Better Way to Discover Brands.";
  const description = content?.description || "Brand Village Outlet brings together recognised brands, exciting discoveries, and exceptional outlet value in one welcoming destination designed for everyone.";
  const linkText = content?.linkText || "Discover Our Story";

  const renderHighlightedText = (text, highlight) => {
    if (!text) return "";
    if (!highlight || !text.includes(highlight)) return text;
    const parts = text.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-brandYellow">{highlight}</span>
        {parts[1]}
      </>
    );
  };

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
            <span className="text-brandMuted text-xs font-bold tracking-[0.2em] uppercase">{eyebrow}</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brandPrimary text-[11px] lg:text-xs font-bold tracking-[0.25em] uppercase mb-5 flex items-center gap-4"
          >
            <span className="w-8 h-px bg-brandYellow"></span>
            {subTitle}
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
                {renderHighlightedText(titleLine1, "Great Prices.")}
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
                {titleLine2}
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
            {description}
          </motion.p>
          
          <motion.a
            href="https://www.google.com/maps/place/Brand+village+outlet/@25.2638788,55.3165515,17z/data=!4m6!3m5!1s0x3e5f5d0005e2ab7b:0xfc733466a6642162!8m2!3d25.2638788!4d55.3165515!16s%2Fg%2F11wsp0s4h2"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-brandPrimary font-bold text-[13px] uppercase tracking-[0.15em] hover:text-brandYellow transition-colors flex items-center gap-2 group"
          >
            {linkText}
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
