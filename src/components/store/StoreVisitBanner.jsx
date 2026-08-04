import React from 'react';
import { motion } from 'framer-motion';

const StoreVisitBanner = () => {
  return (
    <div className="w-full bg-[#111111] py-10 md:py-14 lg:py-16 relative overflow-hidden">
      {/* Decorative oversized background word */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] md:text-[250px] lg:text-[400px] font-extrabold text-white opacity-[0.02] pointer-events-none select-none tracking-tighter leading-none z-0 whitespace-nowrap">
        EXPERIENCE
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-brandYellow text-[11px] lg:text-xs font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-4"
          >
            <span className="w-8 h-px bg-brandYellow"></span>
            VISIT BRAND VILLAGE OUTLET
          </motion.p>

          <h2 className="text-white font-extrabold text-[42px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-tight mb-6">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                See It. Try It.
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="block text-brandYellow"
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                Take It Home.
              </motion.span>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/80 text-[17px] lg:text-[19px] leading-relaxed mb-10 max-w-[500px] font-medium"
          >
            Visit our store to explore current collections, discover new arrivals and receive personalised assistance from our team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6"
          >
            <a 
              href="https://www.google.com/maps/place/Brand+village+outlet/@25.2638788,55.3165515,17z/data=!4m6!3m5!1s0x3e5f5d0005e2ab7b:0xfc733466a6642162!8m2!3d25.2638788!4d55.3165515!16s%2Fg%2F11wsp0s4h2" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 bg-brandYellow text-brandPrimary font-bold text-sm hover:bg-white transition-colors duration-300 text-center"
            >
              Get Directions
            </a>
            <a 
              href="https://wa.me/971581234560" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 bg-transparent border border-white/30 text-white font-bold text-sm hover:border-white transition-colors duration-300 text-center"
            >
              Contact the Store
            </a>
          </motion.div>
        </div>

        {/* Right Image Mask */}
        <div className="w-full lg:w-1/2 relative h-[280px] lg:h-[380px] flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-[500px] h-full rounded-[40px] rounded-tl-none overflow-hidden relative"
          >
            <img 
              src="https://res.cloudinary.com/n185h1km/image/upload/f_auto,q_auto/MFD053771.jpg_yps3xh" 
              alt="Premium outlet interior with warm lighting" 
              className="w-full h-full object-cover"
            />
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-brandYellow/10 mix-blend-overlay"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StoreVisitBanner;
