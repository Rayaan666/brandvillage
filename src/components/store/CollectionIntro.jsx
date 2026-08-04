import React from 'react';
import { motion } from 'framer-motion';

const CollectionIntro = () => {
  return (
    <section className="w-full bg-brandWarm pt-6 pb-4 md:pt-10 md:pb-6 px-6 relative flex flex-col items-center justify-center">
      <div className="max-w-[700px] w-full text-center flex flex-col items-center relative z-10">
        
        {/* Label */}
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xs md:text-sm tracking-[0.2em] font-medium text-brandMuted uppercase mb-3 block"
        >
          EXPLORE OUR COLLECTIONS
        </motion.span>
        
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-brandPrimary mb-4 leading-[1.1]"
        >
          Find Something<br />For <span className="text-[#F4C430] italic font-semibold">Everyone.</span>
        </motion.h2>
        
        {/* Supporting Text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-sm md:text-base text-brandMuted leading-relaxed mb-6 max-w-[600px]"
        >
          From everyday essentials to stylish fashion and home inspiration, discover carefully curated collections designed for every member of the family.
        </motion.p>
        
        {/* Animated Divider */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "60px", opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          className="h-[2px] bg-[#F4C430] rounded-full"
        />
        
      </div>
      
      {/* Background abstract shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,50 C20,20 80,80 100,50 L100,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};

export default CollectionIntro;
