import React from 'react';

const ProductSkeleton = () => {
  return (
    <div className="w-full bg-[#FAF9F6] rounded-[24px] overflow-hidden border border-brandBorder h-full flex flex-col">
      {/* Image Skeleton */}
      <div className="w-full aspect-[4/5] bg-gray-200 animate-pulse"></div>
      
      {/* Content Skeleton */}
      <div className="p-5 flex flex-col flex-1">
        <div className="w-1/3 h-3 bg-gray-200 rounded animate-pulse mb-3"></div>
        <div className="w-3/4 h-5 bg-gray-200 rounded animate-pulse mb-4"></div>
        <div className="w-1/2 h-3 bg-gray-200 rounded animate-pulse mb-4"></div>
        
        {/* Button Skeleton for mobile */}
        <div className="mt-auto pt-4 border-t border-brandBorder border-dashed flex justify-between items-center lg:hidden">
           <div className="w-20 h-3 bg-gray-200 rounded animate-pulse"></div>
           <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
