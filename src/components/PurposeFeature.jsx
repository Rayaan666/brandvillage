import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PurposePanel from './PurposePanel';

const PurposeFeature = () => {
  const [hoveredPanel, setHoveredPanel] = useState(null);

  const imageScale = hoveredPanel === 'vision' ? 1.02 : hoveredPanel === 'mission' ? 1.04 : 1;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 mb-32 relative z-10"
    >
      <div className="flex flex-col lg:flex-row w-full min-h-[560px] rounded-[24px] lg:rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-brandBorder/80 bg-[#F9F8F4]">
        
        {/* Left Visual Area */}
        <div className="lg:w-[55%] relative overflow-hidden min-h-[350px] lg:min-h-full">
          <motion.img
            src="https://res.cloudinary.com/n185h1km/image/upload/f_auto,q_auto/brandvillage_uzxku7"
            alt="About Brand Village"
            className="absolute inset-0 w-full h-full object-cover"
            animate={{ scale: imageScale }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          
          {/* Floating Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg border border-white/20"
          >
            <p className="text-[10px] font-bold tracking-[0.2em] text-brandMuted uppercase mb-1">Our Purpose</p>
            <p className="font-serif italic text-brandPrimary text-lg">Since Our Beginning</p>
          </motion.div>
        </div>

        {/* Right Content Area */}
        <div className="lg:w-[45%] flex flex-col relative bg-[#F9F8F4]">
          {/* Divider line between the two panels for desktop */}
          <div className="hidden lg:block absolute left-12 right-12 top-1/2 h-px bg-brandBorder -translate-y-1/2 z-20 pointer-events-none"></div>

          <PurposePanel 
            number="01"
            label="OUR VISION"
            text="To become a destination where discovering respected brands, exceptional value, and everyday style always feels exciting."
            onHoverStart={() => setHoveredPanel('vision')}
            onHoverEnd={() => setHoveredPanel(null)}
            isFirst={true}
          />
          
          <PurposePanel 
            number="02"
            label="OUR MISSION"
            text="To make recognised brands more accessible by combining genuine savings, variety, convenience, and an enjoyable shopping experience."
            onHoverStart={() => setHoveredPanel('mission')}
            onHoverEnd={() => setHoveredPanel(null)}
            isFirst={false}
          />
        </div>

      </div>
    </motion.div>
  );
};

export default PurposeFeature;
