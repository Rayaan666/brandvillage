import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const FeatureCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8 }}
      className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 pb-28 flex flex-col items-center text-center"
    >
      {/* Fine divider above */}
      <div className="w-16 h-px bg-brandYellow mb-10" />

      <p className="text-brandMuted text-xs font-bold tracking-[0.25em] uppercase mb-6">
        VISIT US IN STORE
      </p>

      <h3 className="font-extrabold text-brandPrimary text-[34px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-tight mb-5 max-w-[700px]">
        Experience the{' '}
        <span className="text-brandYellow">Difference</span>{' '}
        Yourself
      </h3>

      <p className="text-brandMuted text-[17px] lg:text-[19px] leading-relaxed max-w-[520px] mb-10 font-medium">
        Visit Brand Village Outlet and discover why every visit feels like finding something new.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-5">
        <a
          href="https://www.google.com/maps/place/Brand+village+outlet/@25.2638788,55.3165515,17z/data=!4m6!3m5!1s0x3e5f5d0005e2ab7b:0xfc733466a6642162!8m2!3d25.2638788!4d55.3165515!16s%2Fg%2F11wsp0s4h2"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-brandPrimary text-white px-9 py-4 font-bold text-sm tracking-wide hover:bg-brandYellow hover:text-brandPrimary transition-all duration-300"
        >
          <MapPin className="w-4 h-4" />
          Explore Our Stores
        </a>
        <a
          href="/store"
          className="flex items-center gap-2.5 bg-brandPrimary text-white px-9 py-4 font-bold text-sm tracking-wide hover:bg-brandYellow hover:text-brandPrimary transition-all duration-300"
        >
          Store
        </a>
      </div>
    </motion.div>
  );
};

export default FeatureCTA;
