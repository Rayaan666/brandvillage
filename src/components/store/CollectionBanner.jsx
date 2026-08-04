import React from 'react';
import { motion } from 'framer-motion';
import CollectionImage from './CollectionImage';
import CollectionContent from './CollectionContent';

const CollectionBanner = ({ collection }) => {
  const { layout, bgWord, image, imageAlt, ...contentProps } = collection;
  
  const isRightImage = layout === 'content-left';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 mb-12 md:mb-16 last:mb-0 relative group perspective-1000"
    >
      {/* Banner Container */}
      <div 
        className="w-full rounded-[24px] md:rounded-[32px] overflow-hidden bg-gradient-to-br from-brandWarm to-white border border-brandBorder/60 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.03)] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_15px_40px_-10px_rgba(244,196,48,0.08)] relative"
      >
        
        {/* Large Transparent Background Word */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none select-none overflow-hidden z-0 opacity-[0.02]">
          <span className="text-[20vw] font-bold leading-none tracking-tighter text-black whitespace-nowrap">
            {bgWord}
          </span>
        </div>
        
        {/* Background Decorative Details */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_100%_100%,_rgba(244,196,48,0.1)_0%,_transparent_50%)]" />

        {/* Content & Image Flex Container */}
        <div className={`flex flex-col lg:flex-row items-center justify-between p-4 md:p-6 lg:p-8 gap-6 lg:gap-10 relative z-10 
          ${isRightImage ? 'lg:flex-row' : 'lg:flex-row-reverse'}
        `}>
          
          {/* We ensure on mobile image is always on top by using flex-col (default), and on desktop we use row or row-reverse */}
          {/* But wait, in flex-col, the first item in DOM comes first. We want Image above content on mobile ALWAYS. */}
          {/* We can use flex-col-reverse if Content is first in DOM, but it's better to manage order using flex order or just conditionally rendering the order. */}
          {/* Let's use CSS order utility for flexbox. */}
          
          <div className={`w-full lg:w-[40%] flex justify-center order-2 ${isRightImage ? 'lg:order-1' : 'lg:order-2'}`}>
            <CollectionContent {...contentProps} categoryId={collection.id} />
          </div>
          
          <div className={`w-full lg:w-[55%] order-1 ${isRightImage ? 'lg:order-2' : 'lg:order-1'}`}>
            <CollectionImage image={image} imageAlt={imageAlt} isRight={isRightImage} />
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default CollectionBanner;
