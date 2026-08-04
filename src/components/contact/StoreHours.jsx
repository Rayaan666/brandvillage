import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const schedule = [
  { day: "Monday - Friday", hours: "10:00 AM - 10:00 PM", note: "Regular Hours" },
  { day: "Saturday", hours: "10:00 AM - 12:00 AM", note: "Extended Weekend Hours" },
  { day: "Sunday", hours: "10:00 AM - 12:00 AM", note: "Extended Weekend Hours" },
  { day: "Public Holidays", hours: "10:00 AM - 1:00 AM", note: "Special Timing" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const StoreHours = () => {
  return (
    <section className="w-full bg-[#FAF9F6] py-20 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-brandPrimary font-extrabold text-4xl lg:text-5xl tracking-tight mb-6"
          >
            Store Timings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brandMuted text-lg max-w-2xl leading-relaxed"
          >
            Plan your visit to Brand Village Outlet. We are open seven days a week to ensure you have ample time to discover exceptional pieces.
          </motion.p>
        </div>

        {/* Schedule Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white border border-brandBorder rounded-[24px] p-8 hover:border-brandYellow hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#FAF9F6] flex items-center justify-center text-brandMuted group-hover:bg-brandYellow group-hover:text-white transition-colors duration-300">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-brandPrimary font-bold text-lg">{item.day}</h3>
              </div>
              
              <div className="text-brandPrimary font-extrabold text-2xl tracking-tight mb-2 group-hover:text-brandYellow transition-colors duration-300">
                {item.hours}
              </div>
              <p className="text-brandMuted text-sm font-medium">
                {item.note}
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-brandYellow group-hover:w-full transition-all duration-500 ease-out"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default StoreHours;
