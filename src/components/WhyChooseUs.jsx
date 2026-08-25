import React from 'react';
import { motion } from 'framer-motion';
import FeatureGrid from './FeatureGrid';
import FeatureCTA from './FeatureCTA';

const WhyChooseUs = ({ content, featuresList, ctaSection }) => {
  const eyebrow = content?.eyebrow || "WHY CHOOSE US";
  const titleLine1 = content?.titleLine1 || "What Makes Brand Village";
  const titleLine2 = content?.titleLine2 || "Different";
  const description = content?.description || "Discover why thousands of shoppers continue returning for exceptional brands, exciting discoveries and unmatched everyday value.";

  return (
    <section
      id="why-choose-us"
      className="relative w-full bg-[#FDFCF9] overflow-hidden"
    >
      {/* Decorative large background word */}
      <div className="hidden md:block absolute top-[8%] left-1/2 -translate-x-1/2 text-[260px] lg:text-[420px] font-extrabold text-brandPrimary opacity-[0.025] pointer-events-none select-none tracking-tighter leading-none z-0 whitespace-nowrap">
        DISCOVER
      </div>

      {/* Subtle diagonal pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #111111 0px,
            #111111 1px,
            transparent 1px,
            transparent 48px
          )`,
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-0"
        style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}
      />

      {/* ── Section Header ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 lg:px-12 pt-10 pb-16 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-brandMuted text-[11px] font-bold tracking-[0.3em] uppercase mb-5 flex items-center gap-4"
        >
          <span className="w-8 h-px bg-brandYellow" />
          {eyebrow}
          <span className="w-8 h-px bg-brandYellow" />
        </motion.p>

        {/* Heading */}
        <h2 className="font-extrabold text-brandPrimary text-[36px] md:text-[56px] lg:text-[68px] leading-[1.05] tracking-tight max-w-[700px] mb-6">
          <span className="block overflow-hidden pb-1">
            <motion.span
              className="block"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              {titleLine1}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-2">
            <motion.span
              className="block"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <span className="text-brandYellow">{titleLine2}</span>
            </motion.span>
          </span>
        </h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-brandMuted text-[17px] lg:text-[19px] leading-relaxed max-w-[680px] mb-8 font-medium"
        >
          {description}
        </motion.p>

        {/* Animated yellow divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="w-16 h-[3px] bg-brandYellow origin-center rounded-full"
        />
      </div>

      {/* ── Feature Grid ── */}
      <FeatureGrid featuresList={featuresList} />

      {/* ── Bottom CTA ── */}
      <FeatureCTA content={ctaSection} />
    </section>
  );
};

export default WhyChooseUs;
