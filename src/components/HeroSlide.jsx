import React from 'react';
import { motion } from 'framer-motion';

const HeroSlide = ({ slide, isActive }) => {
  if (!isActive) return null;

  return (
    <motion.div
      className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#FAF9F6]"
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <picture className="w-full h-full">
        {slide.mobileImage && (
          <source media="(max-width: 767px)" srcSet={slide.mobileImage} />
        )}
        <img
          src={slide.image}
          alt={slide.imageAlt}
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority={slide.id === 1 ? "high" : "auto"}
        />
      </picture>
    </motion.div>
  );
};

export default HeroSlide;
