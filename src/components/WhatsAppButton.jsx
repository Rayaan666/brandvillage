import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/971581234560"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 flex items-center justify-center group relative cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Outer Ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 -z-10 group-hover:opacity-40 transition-opacity"></span>

      {/* SVG WhatsApp Icon */}
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.66.986 3.298 1.447 5.355 1.448 5.405 0 9.8-4.403 9.803-9.814.002-2.62-1.012-5.085-2.857-6.93C17.062 2.012 14.6 1 12.01 1 6.602 1 2.206 5.404 2.203 10.814c-.001 2.094.549 4.14 1.595 5.922l-.999 3.65 3.734-.98c1.782 1.01 3.238 1.45 4.966 1.45zm11.238-7.391c-.31-.156-1.838-.907-2.124-1.011-.285-.104-.492-.156-.7.156-.207.312-.803.104-1.01.312-.207.208-.415.052-.725-.104-.31-.156-1.313-.484-2.502-1.543-.925-.825-1.55-1.844-1.731-2.156-.182-.312-.019-.481.136-.635.139-.138.31-.362.466-.543.156-.181.207-.312.31-.52.104-.208.052-.389-.026-.546-.078-.156-.7-1.688-.959-2.313-.252-.61-.51-.527-.7-.537-.18-.01-.387-.012-.594-.012-.207 0-.544.078-.829.389-.285.31-1.088 1.064-1.088 2.593s1.114 3.011 1.27 3.22c.156.208 2.19 3.344 5.305 4.688.74.32 1.32.51 1.77.653.743.236 1.42.203 1.954.124.596-.089 1.838-.751 2.097-1.478.259-.728.259-1.35.181-1.477-.077-.127-.285-.205-.595-.361z" />
      </svg>

      {/* Tooltip */}
      <span className="absolute right-16 bg-[#111111] text-[#F7F7F5] text-xs font-semibold px-3 py-2 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 whitespace-nowrap border border-white/10">
        Chat on WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
