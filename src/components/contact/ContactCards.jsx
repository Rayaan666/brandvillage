import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin, ArrowUpRight } from 'lucide-react';

const contactMethods = [
  {
    icon: <Phone className="w-6 h-6" strokeWidth={1.5} />,
    title: "Phone Support",
    description: "Landline: +971 4 335 3845",
    info: "+971 58 123 4560",
    actionText: "Call us",
    link: "tel:+971581234560"
  },
  {
    icon: <Mail className="w-6 h-6" strokeWidth={1.5} />,
    title: "Email",
    description: "Send us your enquiries",
    info: "info@brandvillage.ae",
    actionText: "Email us",
    link: "mailto:info@brandvillage.ae"
  },
  {
    icon: <MessageCircle className="w-6 h-6" strokeWidth={1.5} />,
    title: "WhatsApp",
    description: "Instant product assistance",
    info: "+971 58 123 4560",
    actionText: "Chat now",
    link: "https://wa.me/971581234560"
  },
  {
    icon: <MapPin className="w-6 h-6" strokeWidth={1.5} />,
    title: "Store Address",
    description: "Al Maktoum Rd, Deira, Dubai",
    info: "Brand Village Outlet",
    actionText: "Get directions",
    link: "https://www.google.com/maps/place/Brand+village+outlet/@25.2638788,55.3165515,17z/data=!4m6!3m5!1s0x3e5f5d0005e2ab7b:0xfc733466a6642162!8m2!3d25.2638788!4d55.3165515!16s%2Fg%2F11wsp0s4h2"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const ContactCards = () => {
  return (
    <section className="w-full bg-white pt-10 pb-12 lg:pt-12 lg:pb-16 px-6 lg:px-12 relative z-20 -mt-10 lg:-mt-20">
      <div className="w-full max-w-[1440px] mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              href={method.link}
              key={index}
              variants={itemVariants}
              className="group flex flex-col bg-white border border-brandBorder rounded-[32px] p-8 lg:p-10 hover:border-brandYellow transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(244,196,48,0.15)] relative overflow-hidden"
            >
              {/* Top Row: Icon & Arrow */}
              <div className="flex justify-between items-start mb-12">
                <div className="w-14 h-14 rounded-full bg-brandLight flex items-center justify-center text-brandPrimary group-hover:bg-brandYellow group-hover:text-white transition-colors duration-500">
                  {method.icon}
                </div>
                <div className="w-10 h-10 rounded-full border border-brandBorder flex items-center justify-center text-brandMuted group-hover:border-brandYellow group-hover:bg-brandYellow group-hover:text-white transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h3 className="text-brandPrimary font-bold text-xl mb-2">{method.title}</h3>
                <p className="text-brandMuted text-sm mb-6">{method.description}</p>
                <div className="text-brandPrimary font-bold text-lg border-t border-brandBorder pt-6 group-hover:text-brandYellow transition-colors duration-500">
                  {method.info}
                </div>
              </div>
              
              {/* Subtle background glow effect on hover */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brandYellow/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCards;
