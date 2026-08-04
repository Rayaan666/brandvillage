import React, { useState } from 'react';
import { motion } from 'framer-motion';

const IdentityCard = ({ card, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={card.href}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative flex flex-col justify-end w-full min-h-[400px] lg:min-h-[460px] rounded-[24px] overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${card.image})` }}
        animate={{ scale: isHovered ? 1.04 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      
      {/* Dark Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent"
        animate={{ opacity: isHovered ? 1 : 0.85 }}
        transition={{ duration: 0.4 }}
      />

      {/* Thin Yellow Progress Line on Hover */}
      <motion.div 
        className="absolute top-0 left-0 h-1 bg-brandYellow z-20"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Small Yellow Corner Accent */}
      <div className="absolute top-6 right-6 w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-brandYellow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative z-10 p-8 flex flex-col h-full justify-between">
        {/* Top Info — number and label, position unchanged */}
        <div className="flex justify-between items-start w-full">
          <span className="text-white/80 font-mono text-sm tracking-widest">{card.number}</span>
          <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">{card.label}</span>
          </div>
        </div>

        {/* Bottom Content — shifted slightly up with mb-4 instead of mt-auto push */}
        <motion.div 
          className="mb-4"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-white font-bold text-3xl lg:text-[34px] tracking-tight leading-none mb-4">
            {card.title}
          </h3>
          
          <p className="text-white/85 text-[15px] leading-relaxed mb-5 max-w-[95%] font-medium">
            {card.description}
          </p>

          <p className="text-brandYellow text-[11px] font-bold tracking-[0.15em] uppercase">
            {card.supportingText}
          </p>
        </motion.div>
      </div>
    </motion.a>
  );
};

export default IdentityCard;
