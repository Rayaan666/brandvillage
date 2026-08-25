import React from 'react';
import { motion } from 'framer-motion';

const StoreHero = ({ content }) => {
  const eyebrow = content?.eyebrow || "BRAND VILLAGE STORE";
  const titleLine1 = content?.titleLine1 || "Discover More.";
  const titleLine2 = content?.titleLine2 || "Choose What Speaks to You.";
  const description = content?.description || "Explore fashion, footwear, accessories, beauty, home and lifestyle products from a curated selection of recognised brands.";
  const buttonText = content?.buttonText || "Explore Products";
  const buttonUrl = content?.buttonUrl || "https://www.google.com/maps/place/Brand+village+outlet/@25.2638788,55.3165515,17z/data=!4m6!3m5!1s0x3e5f5d0005e2ab7b:0xfc733466a6642162!8m2!3d25.2638788!4d55.3165515!16s%2Fg%2F11wsp0s4h2";
  const availabilityText = content?.availabilityText || "Product availability may vary. Contact us on WhatsApp for current details.";
  const image = content?.image || "https://res.cloudinary.com/n185h1km/image/upload/f_auto,q_auto/MFD05534.jpg_rzilbv";
  const imageAlt = content?.imageAlt || "Premium retail interior with shoppers and fashion items";

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
    <section className="relative w-full h-[520px] md:h-[580px] lg:h-[720px] bg-brandLight overflow-hidden pt-24 lg:pt-[88px]">
      {/* Decorative oversized background word */}
      <div className="absolute top-[30%] left-[-5%] text-[150px] md:text-[250px] lg:text-[400px] font-extrabold text-brandPrimary opacity-[0.03] pointer-events-none select-none tracking-tighter leading-none z-0">
        STORE
      </div>

      <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 pb-12 lg:pb-0">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brandPrimary text-[11px] lg:text-xs font-bold tracking-[0.25em] uppercase mb-4 flex items-center gap-4"
          >
            <span className="w-8 h-px bg-brandYellow"></span>
            {eyebrow}
          </motion.p>
 
          <h1 className="text-brandPrimary font-extrabold text-[42px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-tight mb-6">
            <span className="block overflow-hidden pb-1">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                {titleLine1}
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-2">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                {renderHighlightedText(titleLine2, "Choose")}
              </motion.span>
            </span>
          </h1>
 
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-brandMuted text-[17px] lg:text-[19px] leading-relaxed mb-8 max-w-[500px] font-medium"
          >
            {description}
          </motion.p>
 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 mb-6 lg:mb-8"
          >
            <a 
              href={buttonUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-9 py-4 bg-brandPrimary text-white font-bold text-sm hover:bg-brandYellow hover:text-brandPrimary transition-colors duration-300 shadow-md text-center"
            >
              {buttonText}
            </a>
          </motion.div>
 
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-brandMuted text-[11px] uppercase tracking-wider"
          >
            {availabilityText}
          </motion.p>
        </div>
 
        {/* Right Editorial Image */}
        <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-full relative overflow-hidden flex items-end lg:items-center justify-end">
          <motion.div 
            className="relative w-full lg:w-[90%] h-full lg:h-[85%] rounded-[32px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <img 
              src={image} 
              alt={imageAlt} 
              className="w-full h-full object-cover"
              fetchPriority="high"
              loading="eager"
            />
            {/* Subtle Gradient Mask for blending */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brandPrimary/10 to-transparent"></div>
          </motion.div>
        </div>
 
      </div>

    </section>
  );
};

export default StoreHero;
