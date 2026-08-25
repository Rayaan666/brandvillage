import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { heroSlides } from '../data/heroSlides';
import HeroSlide from './HeroSlide';
import SliderControls from './SliderControls';

const HeroSlider = ({ slides }) => {
  const activeSlides = slides && slides.length > 0 ? slides : heroSlides;
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const totalSlides = activeSlides.length;
  const AUTOPLAY_TIME = 5500;
  
  // Preload images
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    activeSlides.forEach((slide) => {
      const img = new Image();
      img.src = isMobile && slide.mobileImage ? slide.mobileImage : slide.image;
    });
  }, [activeSlides]);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    setProgress(0);
  }, [totalSlides]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setProgress(0);
  };

  useEffect(() => {
    let interval;
    let progressInterval;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!isPaused && !prefersReducedMotion) {
      const startTime = Date.now();
      
      progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / AUTOPLAY_TIME) * 100, 100);
        setProgress(newProgress);
      }, 50);

      interval = setInterval(() => {
        nextSlide();
      }, AUTOPLAY_TIME);
    } else {
      setProgress(0);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isPaused, nextSlide, current]);

  // Handle swipe gestures
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) nextSlide();
    if (touchEndX - touchStartX > 50) prevSlide();
  };

  return (
    <div 
      className="relative w-full h-[620px] md:h-[650px] lg:h-[calc(100vh-130px)] lg:min-h-[680px] overflow-hidden bg-brandPrimary"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence initial={false}>
        {activeSlides.map((slide, index) => (
          index === current && (
            <HeroSlide 
              key={slide.id || index} 
              slide={slide} 
              isActive={true} 
            />
          )
        ))}
      </AnimatePresence>

      <SliderControls 
        currentSlide={current} 
        totalSlides={totalSlides} 
        nextSlide={nextSlide} 
        prevSlide={prevSlide} 
        progress={progress}
      />
    </div>
  );
};

export default HeroSlider;
