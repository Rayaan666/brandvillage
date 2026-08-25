import React from 'react';
import SectionIntro from './SectionIntro';
import PurposeFeature from './PurposeFeature';
import IdentityCards from './IdentityCards';

const AboutOverviewSection = ({ aboutSection, purposeSection, identityCards }) => {
  return (
    <section id="about-overview" className="relative w-full bg-[#F5F4F0] overflow-hidden">
      {/* Decorative oversized background word */}
      <div className="hidden md:block absolute top-[10%] -right-[5%] text-[200px] lg:text-[350px] font-extrabold text-brandPrimary opacity-[0.03] pointer-events-none select-none tracking-tighter leading-none z-0">
        VILLAGE
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-brandPrimary"></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brandPrimary"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-brandPrimary"></div>
      </div>

      {/* Decorative Soft Grain Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-0" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>

      {/* Vertical Label */}
      <div className="hidden 2xl:flex absolute top-[40%] left-8 z-20 rotate-180" style={{ writingMode: 'vertical-rl' }}>
        <span className="text-brandPrimary text-[10px] font-bold tracking-[0.25em] uppercase flex items-center gap-6">
          DISCOVER <span className="w-1.5 h-1.5 rounded-full bg-brandYellow"></span> EXPERIENCE <span className="w-1.5 h-1.5 rounded-full bg-brandYellow"></span> VALUE
        </span>
      </div>

      {/* Content Layers */}
      <SectionIntro content={aboutSection} />
      <PurposeFeature content={purposeSection} />
      <IdentityCards cards={identityCards} />
    </section>
  );
};

export default AboutOverviewSection;
