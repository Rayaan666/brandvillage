import React, { useState } from 'react';
import { generateSrcSet, generateImageUrl, CDN_CONFIG } from '../../utils/imageCDN';

const ProductImage = ({ 
  publicId, 
  alt, 
  priority = false, 
  className = "",
  objectFit = "cover"
}) => {
  const [hasError, setHasError] = useState(false);

  const srcSet = generateSrcSet(publicId);
  const fallbackSrc = generateImageUrl(publicId, 640);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#F3F3F0] ${className}`}>
      <img
        src={hasError ? '/images/fallback-image.svg' : fallbackSrc}
        srcSet={hasError ? undefined : srcSet}
        sizes={hasError ? undefined : CDN_CONFIG.sizes}
        alt={alt || "Product image"}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        onError={() => setHasError(true)}
        className="w-full h-full"
        style={{ objectFit }}
      />
    </div>
  );
};

export default ProductImage;
