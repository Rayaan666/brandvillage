import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { storeCategories } from '../../data/categories';

const CategoryNavigation = () => {
  return (
    <section id="categories" className="w-full bg-[#FAF9F6] py-16 lg:py-24 overflow-hidden border-t border-brandBorder/50">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-10"
        >
          <h2 className="text-brandPrimary font-extrabold text-2xl lg:text-3xl tracking-tight">Shop by Category</h2>
        </motion.div>

        {/* Scrollable Container */}
        <div className="flex overflow-x-auto no-scrollbar gap-4 lg:gap-6 pb-6 -mx-6 px-6 lg:mx-0 lg:px-0">
          {storeCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[260px] lg:w-[300px]"
            >
              <Link 
                to={`/store?category=${encodeURIComponent(category.name)}`}
                className="group block relative w-full h-[320px] lg:h-[380px] rounded-[24px] overflow-hidden bg-white shadow-sm border border-brandBorder/50 cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-[65%] overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${category.image})` }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
                </div>
                
                {/* Content Area */}
                <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-white p-6 flex flex-col justify-between group-hover:bg-[#FEFCF5] transition-colors duration-300">
                  {/* Subtle yellow underline indicator */}
                  <div className="absolute top-0 left-0 h-1 bg-brandYellow w-0 group-hover:w-full transition-all duration-500 ease-out"></div>
                  
                  <div>
                    <h3 className="text-brandPrimary font-extrabold text-xl lg:text-2xl tracking-tight mb-1">
                      {category.name}
                    </h3>
                    <p className="text-brandMuted text-sm font-medium">
                      {category.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between w-full">
                    <span className="text-brandMuted text-[10px] font-bold tracking-[0.2em] uppercase bg-brandLight px-3 py-1 rounded-full">
                      {category.itemCount} Items
                    </span>
                    <div className="w-8 h-8 rounded-full border border-brandBorder flex items-center justify-center bg-white group-hover:bg-brandPrimary group-hover:border-brandPrimary transition-colors duration-300 transform group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4 text-brandMuted group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryNavigation;
