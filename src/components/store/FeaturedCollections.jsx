import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { storeCollections } from '../../data/collections';

const FeaturedCollections = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-28 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-brandMuted text-[11px] font-bold tracking-[0.25em] uppercase mb-4 flex items-center justify-center gap-4"
          >
            <span className="w-8 h-px bg-brandYellow"></span>
            CURATED FOR YOU
            <span className="w-8 h-px bg-brandYellow"></span>
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brandPrimary font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-5"
          >
            Collections Worth Exploring
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brandMuted text-base lg:text-lg max-w-[500px]"
          >
            Discover selected edits built around style, versatility, comfort and everyday living.
          </motion.p>
        </div>

        {/* Collections Grid - Uneven layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Collection 1: Large Left */}
          {storeCollections[0] && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 h-[450px] lg:h-[600px] relative rounded-[28px] overflow-hidden group cursor-pointer"
            >
              <img src={storeCollections[0].image} alt={storeCollections[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
              
              <div className="absolute inset-x-0 bottom-0 p-8 lg:p-12 flex flex-col items-start">
                <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                  {storeCollections[0].categoryLabel}
                </span>
                <h3 className="text-white font-bold text-3xl lg:text-[42px] tracking-tight mb-3">
                  {storeCollections[0].title}
                </h3>
                <p className="text-white/80 text-[15px] max-w-[400px] mb-6 font-medium">
                  {storeCollections[0].description}
                </p>
                <Link to={`/store?collection=${storeCollections[0].slug}`} className="flex items-center gap-3 bg-brandYellow text-brandPrimary px-7 py-3 font-bold text-sm hover:bg-white transition-colors duration-300">
                  {storeCollections[0].ctaText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}

          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            {/* Collection 2: Top Right */}
            {storeCollections[1] && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="h-[450px] lg:h-[284px] relative rounded-[28px] overflow-hidden group cursor-pointer"
              >
                <img src={storeCollections[1].image} alt={storeCollections[1].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-8 lg:p-8 flex flex-col items-start">
                  <span className="text-brandYellow text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
                    {storeCollections[1].categoryLabel}
                  </span>
                  <h3 className="text-white font-bold text-2xl lg:text-[28px] tracking-tight mb-2">
                    {storeCollections[1].title}
                  </h3>
                  <Link to={`/store?collection=${storeCollections[1].slug}`} className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-brandYellow transition-colors duration-300 mt-2">
                    {storeCollections[1].ctaText} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )}

            {/* Collection 3: Bottom Right */}
            {storeCollections[2] && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-[450px] lg:h-[284px] relative rounded-[28px] overflow-hidden group cursor-pointer"
              >
                <img src={storeCollections[2].image} alt={storeCollections[2].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                
                <div className="absolute inset-x-0 bottom-0 p-8 lg:p-8 flex flex-col items-start">
                  <span className="text-brandYellow text-[10px] font-bold tracking-[0.2em] uppercase mb-2">
                    {storeCollections[2].categoryLabel}
                  </span>
                  <h3 className="text-white font-bold text-2xl lg:text-[28px] tracking-tight mb-2">
                    {storeCollections[2].title}
                  </h3>
                  <Link to={`/store?collection=${storeCollections[2].slug}`} className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest hover:text-brandYellow transition-colors duration-300 mt-2">
                    {storeCollections[2].ctaText} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
