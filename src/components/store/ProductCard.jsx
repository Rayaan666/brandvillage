import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import AvailabilityBadge from './AvailabilityBadge';
import WhatsAppButton from './WhatsAppButton';
import ProductImage from './ProductImage';

const ProductCard = ({ product, onClick, priority = false }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-[#FAF9F6] rounded-[24px] overflow-hidden border border-brandBorder hover:border-brandYellow/50 transition-colors duration-300 flex flex-col h-full cursor-pointer shadow-sm"
      onClick={() => onClick(product)}
    >
      {/* Image Area - fixed 4:5 aspect ratio */}
      <div className="relative w-full aspect-[4/5] bg-[#F3F3F0] overflow-hidden">
        <ProductImage 
          publicId={product.images[0]} 
          alt={product.name} 
          priority={priority} 
        />

        {/* Availability Badge */}
        <div className="absolute top-4 left-4 z-10">
          <AvailabilityBadge status={product.availability} />
        </div>
        
        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
            isWishlisted ? 'text-brandPrimary shadow-sm' : 'text-brandMuted hover:text-brandPrimary'
          }`}
        >
          <Heart className="w-[18px] h-[18px]" fill={isWishlisted ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Product Info Area */}
      <div className="p-5 flex flex-col flex-1 bg-white relative z-10">

        
        <h3 className="text-brandPrimary font-bold text-[15px] leading-tight mb-2 flex-1">
          {product.name}
        </h3>

        <p className="text-brandMuted text-xs mb-4 line-clamp-1">
          {product.category} • {product.subcategory}
        </p>

        {/* Always Visible WhatsApp Action Button */}
        <div className="mt-auto pt-3 border-t border-brandBorder border-dashed">
          <WhatsAppButton product={product} className="py-2.5 text-xs rounded-full" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
