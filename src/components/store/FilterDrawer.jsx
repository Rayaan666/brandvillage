import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const FilterDrawer = ({ isOpen, onClose, filters, setFilters, filterOptions }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex lg:hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Drawer */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
          className="absolute top-0 right-0 h-full w-full max-w-[320px] bg-white shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-brandBorder">
            <h3 className="font-extrabold text-lg text-brandPrimary tracking-tight">Filter Products</h3>
            <button onClick={onClose} className="p-2 -mr-2 text-brandPrimary" aria-label="Close filters">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-8">
            
            {/* Category Filter */}
            <div>
              <h4 className="font-bold text-sm tracking-wide text-brandPrimary uppercase mb-4">Category</h4>
              <div className="flex flex-col gap-3">
                {filterOptions.categories.map(cat => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-sm border flex items-center justify-center transition-colors ${filters.category === cat ? 'bg-brandPrimary border-brandPrimary' : 'border-brandBorder group-hover:border-brandPrimary'}`}>
                      {filters.category === cat && <div className="w-2.5 h-2.5 bg-white"></div>}
                    </div>
                    <span className={`text-sm ${filters.category === cat ? 'font-bold text-brandPrimary' : 'font-medium text-brandMuted group-hover:text-brandPrimary'}`}>
                      {cat}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Gender Filter */}
            <div>
              <h4 className="font-bold text-sm tracking-wide text-brandPrimary uppercase mb-4">Gender</h4>
              <div className="flex flex-col gap-3">
                {filterOptions.genders.map(gen => (
                  <label key={gen} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-sm border flex items-center justify-center transition-colors ${filters.gender === gen ? 'bg-brandPrimary border-brandPrimary' : 'border-brandBorder group-hover:border-brandPrimary'}`}>
                      {filters.gender === gen && <div className="w-2.5 h-2.5 bg-white"></div>}
                    </div>
                    <span className={`text-sm ${filters.gender === gen ? 'font-bold text-brandPrimary' : 'font-medium text-brandMuted group-hover:text-brandPrimary'}`}>
                      {gen}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability Filter */}
            <div>
              <h4 className="font-bold text-sm tracking-wide text-brandPrimary uppercase mb-4">Availability</h4>
              <div className="flex flex-col gap-3">
                {filterOptions.availabilities.map(avail => (
                  <label key={avail} className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-sm border flex items-center justify-center transition-colors ${filters.availability === avail ? 'bg-brandPrimary border-brandPrimary' : 'border-brandBorder group-hover:border-brandPrimary'}`}>
                      {filters.availability === avail && <div className="w-2.5 h-2.5 bg-white"></div>}
                    </div>
                    <span className={`text-sm ${filters.availability === avail ? 'font-bold text-brandPrimary' : 'font-medium text-brandMuted group-hover:text-brandPrimary'}`}>
                      {avail}
                    </span>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* Footer CTA */}
          <div className="p-6 border-t border-brandBorder bg-[#FAF9F6] flex gap-4">
             <button
                onClick={() => {
                  setFilters({ category: 'All Categories', gender: 'All', availability: 'All Products', brand: 'All' });
                }}
                className="flex-1 py-3 border border-brandBorder text-brandPrimary font-bold text-sm bg-white hover:bg-brandLight transition-colors"
             >
                Clear
             </button>
             <button
                onClick={onClose}
                className="flex-1 py-3 bg-brandPrimary text-white font-bold text-sm hover:bg-brandYellow hover:text-brandPrimary transition-colors"
             >
                Apply
             </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default FilterDrawer;
