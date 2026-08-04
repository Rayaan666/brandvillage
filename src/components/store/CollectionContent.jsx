import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const slideUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.4 } }
};

const CollectionContent = ({ label, heading, supportingText, ctaText, categoryId }) => {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full flex flex-col justify-center px-6 lg:px-12 py-12 lg:py-0 relative z-10"
    >
      {/* Label */}
      <motion.span 
        variants={slideUp}
        className="text-xs tracking-[0.25em] font-semibold text-brandMuted uppercase mb-3 flex items-center gap-3"
      >
        <span className="w-6 h-[1px] bg-[#F4C430]" />
        {label}
      </motion.span>
      
      {/* Heading */}
      <motion.h3 
        variants={slideUp}
        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-brandPrimary mb-4 leading-[1.1] whitespace-pre-line"
      >
        {heading}
      </motion.h3>
      
      {/* Supporting Text */}
      <motion.p 
        variants={slideUp}
        className="text-sm md:text-base text-brandMuted leading-relaxed mb-6 max-w-[420px]"
      >
        {supportingText}
      </motion.p>
      
      {/* CTAs */}
      <motion.div 
        variants={fadeUp}
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        {/* Primary CTA */}
        <a 
          href="https://www.google.com/maps/place/Brand+village+outlet/@25.2638788,55.3165515,17z/data=!4m6!3m5!1s0x3e5f5d0005e2ab7b:0xfc733466a6642162!8m2!3d25.2638788!4d55.3165515!16s%2Fg%2F11wsp0s4h2"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center h-12 px-6 overflow-hidden rounded-full border border-brandPrimary text-brandPrimary bg-transparent transition-all duration-300 hover:border-[#F4C430] focus:outline-none focus:ring-2 focus:ring-[#F4C430] focus:ring-offset-2 focus:ring-offset-white"
        >
          {/* Hover background fill */}
          <span className="absolute inset-0 w-full h-full bg-[#F4C430] transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          
          <span className="relative flex items-center gap-2 font-medium z-10 transition-colors duration-300 group-hover:text-brandPrimary">
            {ctaText}
            <ArrowRight size={18} className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </a>
      </motion.div>
      
    </motion.div>
  );
};

export default CollectionContent;
