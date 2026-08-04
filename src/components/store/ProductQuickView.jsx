import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductImageGallery from './ProductImageGallery';
import AvailabilityBadge from './AvailabilityBadge';
import WhatsAppButton from './WhatsAppButton';

const ProductQuickView = ({ product, isOpen, onClose }) => {
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-12">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full md:h-auto max-h-full md:max-h-[90vh] max-w-[1200px] bg-white md:rounded-[32px] shadow-2xl flex flex-col md:flex-row overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-12 h-12 rounded-full bg-brandLight md:bg-white border border-brandBorder flex items-center justify-center hover:bg-brandPrimary hover:text-white hover:border-brandPrimary transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left: Image Gallery */}
          <div className="w-full md:w-1/2 p-4 md:p-8 bg-[#FAF9F6] h-[50vh] md:h-auto">
            <ProductImageGallery images={product.images} productName={product.name} />
          </div>

          {/* Right: Product Details */}
          <div className="w-full md:w-1/2 p-6 md:p-12 overflow-y-auto custom-scrollbar flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-brandMuted text-xs font-bold tracking-[0.2em] uppercase">
                {product.brand}
              </span>
              <span className="w-1 h-1 rounded-full bg-brandBorder"></span>
              <span className="text-brandMuted text-xs font-medium uppercase">
                {product.productCode}
              </span>
            </div>

            <h2 className="text-brandPrimary font-extrabold text-3xl lg:text-[40px] leading-tight mb-4 tracking-tight">
              {product.name}
            </h2>

            <div className="mb-6">
              <AvailabilityBadge status={product.availability} className="text-xs" />
            </div>

            <p className="text-brandMuted text-[15px] leading-relaxed mb-8 border-b border-brandBorder pb-8">
              {product.description}
            </p>

            <div className="space-y-6 mb-10">
              {product.colors && product.colors.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-brandPrimary mb-3 uppercase tracking-wider">Available Colours</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map(color => (
                      <span key={color} className="px-4 py-2 border border-brandBorder rounded-full text-sm font-medium text-brandMuted">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <h4 className="text-sm font-bold text-brandPrimary mb-3 uppercase tracking-wider">Available Sizes</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <span key={size} className="w-12 h-12 flex items-center justify-center border border-brandBorder rounded-full text-sm font-bold text-brandPrimary bg-[#FAF9F6]">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-auto space-y-4">
              <div className="bg-[#FAF9F6] border border-brandBorder rounded-xl p-4 flex gap-3 items-start">
                <Info className="w-5 h-5 text-brandMuted shrink-0 mt-0.5" />
                <p className="text-xs text-brandMuted leading-relaxed">
                  Contact us on WhatsApp to confirm current availability, sizes and product details. We're happy to help you find the perfect fit.
                </p>
              </div>

              <WhatsAppButton product={product} className="w-full py-4 text-base" />
              
              <Link 
                to={`/store/${product.slug}`}
                onClick={onClose}
                className="w-full block text-center py-4 text-brandPrimary font-bold text-sm tracking-widest uppercase hover:text-brandYellow transition-colors"
              >
                View Full Details
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductQuickView;
