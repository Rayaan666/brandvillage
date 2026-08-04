import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const FeatureCard = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = feature.icon;

  return (
    <motion.a
      href="/contact"
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group rounded-[26px] overflow-hidden cursor-pointer flex flex-col"
      style={{
        background: isHovered ? '#FEFCF5' : '#FFFFFF',
        boxShadow: isHovered
          ? '0 20px 60px rgba(244,196,48,0.12), 0 8px 30px rgba(0,0,0,0.08)'
          : '0 2px 20px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.04)',
        transition: 'box-shadow 0.5s ease, background 0.4s ease, transform 0.4s ease',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* Yellow Top Accent Line */}
      <motion.div
        className="absolute top-0 left-0 h-[3px] bg-brandYellow rounded-t-[26px] z-10"
        animate={{ width: isHovered ? '100%' : '32px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />

      {/* Yellow Corner Accent */}
      <div className="absolute top-5 right-5 w-4 h-4 border-t-2 border-r-2 border-brandYellow opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

      {/* Translucent Background Number */}
      <span className="absolute bottom-4 right-5 text-[110px] font-extrabold text-brandPrimary opacity-[0.04] leading-none pointer-events-none select-none transition-transform duration-500 group-hover:-translate-x-1">
        {feature.number}
      </span>

      {/* Soft Yellow Glow */}
      <div
        className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-brandYellow/20 blur-3xl pointer-events-none transition-opacity duration-500"
        style={{ opacity: isHovered ? 1 : 0 }}
      />

      {/* Card Body */}
      <div className="relative z-10 flex flex-col flex-1 px-7 pt-10 pb-8 gap-4">
        {/* Top Icon & Label Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-brandYellow font-bold text-[10px] tracking-[0.25em] uppercase">
              {feature.number}
            </span>
            <span className="w-5 h-px bg-brandBorder" />
            <span className="text-brandMuted text-[10px] font-bold tracking-[0.2em] uppercase">
              {feature.label}
            </span>
          </div>
          
          <motion.div
            className="w-10 h-10 rounded-2xl bg-brandLight border border-brandBorder flex items-center justify-center"
            animate={{ rotate: isHovered ? 12 : 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <Icon className="w-5 h-5 text-brandPrimary" strokeWidth={1.5} />
          </motion.div>
        </div>

        {/* Heading */}
        <h3 className="text-brandPrimary font-extrabold text-xl lg:text-[22px] leading-snug tracking-tight">
          {feature.title}
        </h3>

        {/* Fine Divider */}
        <div className="w-8 h-px bg-brandYellow" />

        {/* Description */}
        <p className="text-brandMuted text-[15px] leading-relaxed font-medium flex-1">
          {feature.description}
        </p>

        {/* Animated Arrow */}
        <div className="mt-2 flex items-center gap-2">
          <motion.div
            className="w-9 h-9 rounded-full border border-brandBorder flex items-center justify-center bg-white group-hover:bg-brandPrimary group-hover:border-brandPrimary transition-colors duration-300"
            animate={{ x: isHovered ? 4 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight
              className="w-4 h-4 transition-colors duration-300 text-brandMuted group-hover:text-white"
              strokeWidth={2}
            />
          </motion.div>
          <motion.span
            className="text-[11px] font-bold uppercase tracking-[0.15em] text-brandMuted"
            animate={{ x: isHovered ? 4 : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Learn More
          </motion.span>
        </div>
      </div>
    </motion.a>
  );
};

export default FeatureCard;
