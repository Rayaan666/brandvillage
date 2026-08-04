import React from 'react';
import { motion } from 'framer-motion';

const CollectionImage = ({ image, imageAlt, isRight }) => {
  return (
    <div className="w-full h-[260px] md:h-[360px] lg:h-[460px] relative group overflow-hidden">
      
      {/* Scroll Reveal Mask */}
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // smooth revealing ease
        className="w-full h-full relative"
      >
        {/* Curved / Organic Container for Image */}
        <div 
          className={`w-full h-full relative overflow-hidden bg-white 
            ${isRight 
              ? 'rounded-tl-[80px] rounded-br-[80px] rounded-tr-3xl rounded-bl-3xl' 
              : 'rounded-tr-[80px] rounded-bl-[80px] rounded-tl-3xl rounded-br-3xl'
            }
            shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]
            transition-transform duration-700 ease-out group-hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.15)]
          `}
        >
          {/* Main Image with Zoom on Hover */}
          <motion.img 
            src={image} 
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
          />
          
          {/* Glass Overlay Accent */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none mix-blend-overlay" />
          
          {/* Decorative layered geometric shape */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`absolute bottom-[-10%] ${isRight ? 'left-[-5%]' : 'right-[-5%]'} w-[30%] h-[30%] bg-[#F4C430]/20 rounded-full blur-3xl pointer-events-none`}
          />
          
          {/* Border accent overlay */}
          <div className="absolute inset-0 border border-white/40 pointer-events-none mix-blend-overlay rounded-inherit" />
        </div>
      </motion.div>
      
    </div>
  );
};

export default CollectionImage;
