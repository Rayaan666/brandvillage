import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Car, Landmark, CheckCircle2 } from 'lucide-react';

const StoreLocation = () => {
  return (
    <section id="location" className="w-full bg-white py-20 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-24 items-start">
          
          {/* Left: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full h-[500px] lg:h-[700px] rounded-[32px] overflow-hidden border border-brandBorder shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] relative"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d8582.01906252036!2d55.31341334054834!3d25.26067568761613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3e5f5d0005e2ab7b%3A0xfc733466a6642162!2sBrand%20village%20outlet%20-%20Al%20Maktoum%20Rd%20-%20Al%20Muraqqabat%20-%20Deira%20-%20Dubai%20-%20United%20Arab%20Emirates!3m2!1d25.2638788!2d55.316551499999996!5e0!3m2!1sen!2ssa!4v1785853177506!5m2!1sen!2ssa" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Brand Village Store Location"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </motion.div>

          {/* Right: Details */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-8 h-px bg-brandYellow"></span>
              <span className="text-brandMuted text-[11px] font-bold tracking-[0.25em] uppercase">
                Find Us
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-brandPrimary font-extrabold text-4xl lg:text-5xl tracking-tight mb-12"
            >
              Store Location
            </motion.h2>

            <div className="flex flex-col gap-10">
              
              {/* Address */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#FAF9F6] border border-brandBorder flex items-center justify-center text-brandPrimary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-brandPrimary font-bold text-lg mb-2">Address</h3>
                  <p className="text-brandMuted text-base leading-relaxed">
                    Brand Village Outlet<br />
                    Al Maktoum Rd, Al Muraqqabat, Deira<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </motion.div>

              {/* Parking */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#FAF9F6] border border-brandBorder flex items-center justify-center text-brandPrimary">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-brandPrimary font-bold text-lg mb-2">Parking Information</h3>
                  <p className="text-brandMuted text-base leading-relaxed">
                    Ample free parking is available in the main visitor car park. VIP valet parking is accessible via the West Entrance.
                  </p>
                </div>
              </motion.div>

              {/* Landmarks */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-[#FAF9F6] border border-brandBorder flex items-center justify-center text-brandPrimary">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-brandPrimary font-bold text-lg mb-2">Nearby Landmarks</h3>
                  <p className="text-brandMuted text-base leading-relaxed">
                    Located just 5 minutes from the Central Station and opposite the Grand Plaza Hotel.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 pt-10 border-t border-brandBorder"
            >
              <h3 className="text-brandPrimary font-bold text-lg mb-6">Store Features</h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                {['Air Conditioned', 'Family Friendly', 'Wheelchair Accessible', 'Large Parking'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brandYellow" />
                    <span className="text-brandPrimary font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="https://www.google.com/maps/place/Brand+village+outlet/@25.2638788,55.3165515,17z/data=!4m6!3m5!1s0x3e5f5d0005e2ab7b:0xfc733466a6642162!8m2!3d25.2638788!4d55.3165515!16s%2Fg%2F11wsp0s4h2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brandPrimary text-white px-8 py-4 font-bold text-sm tracking-wide hover:bg-brandYellow hover:text-brandPrimary transition-colors duration-300 rounded-full"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps
              </a>
              <a 
                href="https://www.google.com/maps/dir//Brand+village+outlet+-+Al+Maktoum+Rd+-+Al+Muraqqabat+-+Deira+-+Dubai+-+United+Arab+Emirates" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brandPrimary text-white px-8 py-4 font-bold text-sm tracking-wide hover:bg-brandYellow hover:text-brandPrimary transition-colors duration-300 rounded-full"
              >
                <Navigation className="w-4 h-4" />
                Get Driving Directions
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;
