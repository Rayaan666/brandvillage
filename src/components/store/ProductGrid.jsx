import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';

const ProductGrid = ({ products, viewMode, onOpenQuickView, isLoading }) => {
  // Determine grid classes based on viewMode
  // Default desktop: 4 columns
  // Medium desktop: 3 columns
  // Tablet: 2 columns
  // Mobile: 1 or 2 depending on width (we'll use responsive grid cols)
  const gridClasses = viewMode === 'grid'
    ? "grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
    : "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"; // List view is basically 2 cols on desktop/tablet for large cards

  if (isLoading) {
    return (
      <div className={gridClasses}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <motion.div layout className={gridClasses}>
      <AnimatePresence mode="popLayout">
        {products.map((product, index) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={onOpenQuickView} 
            priority={index < 4}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProductGrid;
