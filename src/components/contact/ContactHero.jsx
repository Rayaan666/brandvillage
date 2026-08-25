import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

const ContactHero = ({ content }) => {
  const eyebrow = content?.eyebrow || "Contact Brand Village";
  const titleLine1 = content?.titleLine1 || "Let's Start";
  const titleLine2 = content?.titleLine2 || "A Conversation.";
  const description = content?.description || "Whether you're looking for a product, need assistance, or simply have a question, our team is always ready to help you experience the best of outlet retail.";
  const button1Text = content?.button1Text || "Visit Our Store";
  const button1Url = content?.button1Url || "https://www.google.com/maps/place/Brand+village+outlet/@25.2638788,55.3165515,17z/data=!4m6!3m5!1s0x3e5f5d0005e2ab7b:0xfc733466a6642162!8m2!3d25.2638788!4d55.3165515!16s%2Fg%2F11wsp0s4h2";
  const button2Text = content?.button2Text || "Chat on WhatsApp";
  const button2Url = content?.button2Url || "https://wa.me/971581234560";
  const image = content?.image || "https://res.cloudinary.com/n185h1km/image/upload/f_auto,q_auto/MFD05529_portrait_square_euzcq7";
  const imageAlt = content?.imageAlt || "Brand Village Outlet Store";

  return (
    <section className="relative w-full bg-[#FAF9F6] pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Floating Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span className="text-[20vw] font-black text-black/[0.02] tracking-tighter leading-none whitespace-nowrap">
          CONNECT
        </span>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="w-8 h-px bg-brandYellow"></span>
              <span className="text-brandMuted text-xs font-bold tracking-[0.25em] uppercase">
                {eyebrow}
              </span>
            </motion.div>

            <h1 className="text-brandPrimary font-extrabold text-5xl md:text-6xl lg:text-[72px] leading-[1.05] tracking-tight mb-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block"
              >
                {titleLine1}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block text-brandYellow"
              >
                {titleLine2}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-brandMuted text-lg md:text-xl leading-relaxed mb-10"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              {button1Text && (
                <a 
                  href={button1Url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-brandPrimary text-white px-8 py-4 font-bold text-sm tracking-wide hover:bg-brandYellow hover:text-brandPrimary transition-colors duration-300 w-full sm:w-auto rounded-full"
                >
                  {button1Text}
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
              
              {button2Text && (
                <a 
                  href={button2Url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-brandPrimary text-white px-8 py-4 font-bold text-sm tracking-wide hover:bg-brandYellow hover:text-brandPrimary transition-colors duration-300 w-full sm:w-auto rounded-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  {button2Text}
                </a>
              )}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[700px] w-full"
          >
            {/* Curved mask container */}
            <div 
              className="absolute inset-0 overflow-hidden bg-[#F3F3F0]"
              style={{ borderRadius: '140px 24px 24px 140px' }}
            >
              <img 
                src={image} 
                alt={imageAlt} 
                className="w-full h-full object-cover object-right"
              />
              <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-4 border-brandYellow rounded-full z-[-1]"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;
