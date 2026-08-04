import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Info, MessageCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import ProductImageGallery from '../components/store/ProductImageGallery';
import AvailabilityBadge from '../components/store/AvailabilityBadge';
import WhatsAppButton from '../components/store/WhatsAppButton';
import { storeProducts } from '../data/products';
import { createWhatsAppProductUrl } from '../utils/whatsapp';

const ProductPage = () => {
  const { productSlug } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    // Find product
    const foundProduct = storeProducts.find(p => p.slug === productSlug);
    setProduct(foundProduct);
  }, [productSlug]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="pt-32 pb-20 px-6 text-center">
          <h2 className="text-2xl font-bold text-brandPrimary mb-4">Product Not Found</h2>
          <Link to="/store" className="text-brandYellow font-bold hover:underline">Return to Store</Link>
        </div>
      </>
    );
  }

  const handleAskAboutProduct = () => {
    const message = `Hello Brand Village Outlet,

I would like to ask a question about the following product:

Product: ${product.name}
Product Code: ${product.productCode}

My question is: `;
    window.open(`https://wa.me/971581234560?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Navbar />
      <div className="w-full bg-white pt-24 pb-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brandMuted mb-8 md:mb-12">
            <Link to="/store" className="hover:text-brandPrimary transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Store
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link to={`/store?category=${encodeURIComponent(product.category)}`} className="hover:text-brandPrimary transition-colors">
              {product.category}
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brandPrimary">{product.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            
            {/* Left: Image Gallery */}
            <div className="w-full lg:w-1/2 h-[500px] lg:h-[700px]">
              <ProductImageGallery images={product.images} productName={product.name} />
            </div>

            {/* Right: Details */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <span className="text-brandMuted text-sm font-bold tracking-[0.2em] uppercase">
                  {product.brand}
                </span>
                <span className="text-brandMuted text-sm font-medium uppercase">
                  {product.productCode}
                </span>
              </div>

              <h1 className="text-brandPrimary font-extrabold text-4xl lg:text-5xl leading-tight mb-6 tracking-tight">
                {product.name}
              </h1>

              <div className="mb-8">
                <AvailabilityBadge status={product.availability} />
              </div>

              <p className="text-brandMuted text-[17px] leading-relaxed mb-8 border-b border-brandBorder pb-8">
                {product.description}
              </p>

              {/* Product Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                {product.colors && product.colors.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold text-brandPrimary mb-3 uppercase tracking-wider">Available Colours</h4>
                    <div className="flex flex-wrap gap-3">
                      {product.colors.map(color => (
                        <span key={color} className="px-5 py-2.5 border border-brandBorder rounded-full text-sm font-medium text-brandMuted bg-[#FAF9F6]">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {product.sizes && product.sizes.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold text-brandPrimary mb-3 uppercase tracking-wider">Available Sizes</h4>
                    <div className="flex flex-wrap gap-3">
                      {product.sizes.map(size => (
                        <span key={size} className="w-12 h-12 flex items-center justify-center border border-brandBorder rounded-full text-sm font-bold text-brandPrimary bg-[#FAF9F6]">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info Accordions (Static for now) */}
              <div className="mb-10 space-y-4">
                {product.material && (
                  <div className="border-b border-brandBorder pb-4">
                    <h4 className="text-sm font-bold text-brandPrimary uppercase tracking-wider mb-2">Material</h4>
                    <p className="text-sm text-brandMuted">{product.material}</p>
                  </div>
                )}
                {product.careInstructions && (
                  <div className="border-b border-brandBorder pb-4">
                    <h4 className="text-sm font-bold text-brandPrimary uppercase tracking-wider mb-2">Care Instructions</h4>
                    <p className="text-sm text-brandMuted">{product.careInstructions}</p>
                  </div>
                )}
              </div>

              {/* CTAs */}
              <div className="mt-auto flex flex-col gap-4 bg-[#FAF9F6] p-6 lg:p-8 rounded-[24px] border border-brandBorder">
                <div className="flex gap-3 items-start mb-2">
                  <Info className="w-5 h-5 text-brandMuted shrink-0 mt-0.5" />
                  <p className="text-sm text-brandMuted leading-relaxed">
                    Contact us on WhatsApp to confirm current availability, sizes and product details.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <WhatsAppButton product={product} className="py-4 text-base sm:w-2/3" />
                  <button 
                    onClick={handleAskAboutProduct}
                    className="flex items-center justify-center gap-2 bg-white border border-brandBorder text-brandPrimary px-5 py-4 rounded-md font-bold text-sm tracking-wide hover:border-brandPrimary transition-all duration-300 sm:w-1/3"
                  >
                    <MessageCircle className="w-4 h-4 text-brandMuted" />
                    Ask a Question
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
