import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SliderControls = ({ nextSlide, prevSlide }) => {
  return (
    <>
      {/* Left Navigation Arrow */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-brandPrimary hover:bg-brandPrimary hover:text-white transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:scale-105"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Right Navigation Arrow */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-brandPrimary hover:bg-brandPrimary hover:text-white transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.05)] hover:scale-105"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default SliderControls;
