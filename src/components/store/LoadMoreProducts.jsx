import React from 'react';

const LoadMoreProducts = ({ visibleCount, totalCount, onLoadMore }) => {
  if (visibleCount >= totalCount) return null;

  const progressPercentage = Math.min((visibleCount / totalCount) * 100, 100);

  return (
    <div className="w-full flex flex-col items-center mt-12 mb-8">
      <div className="mb-4 text-brandMuted text-xs font-bold tracking-wider uppercase">
        Showing {visibleCount} of {totalCount} products
      </div>
      
      {/* Refined Progress Line */}
      <div className="w-48 h-[2px] bg-brandBorder mb-8 overflow-hidden rounded-full">
        <div 
          className="h-full bg-brandPrimary transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      <button
        onClick={onLoadMore}
        className="px-8 py-4 bg-transparent border border-brandBorder text-brandPrimary font-bold text-sm hover:border-brandPrimary hover:bg-brandLight transition-all duration-300"
      >
        Load More Products
      </button>
    </div>
  );
};

export default LoadMoreProducts;
