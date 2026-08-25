import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';

const IconMap = {
  Phone: Phone,
  Mail: Mail,
  MessageCircle: MessageCircle,
};

const defaultMethods = [
  {
    iconName: "Phone",
    title: "Call Us",
    description: "Speak directly with our customer support team for immediate assistance.",
    primaryText: "+971 58 123 4560",
    primaryLink: "tel:+971581234560",
    secondaryText: "Landline: +971 4 335 3845",
    secondaryLink: "tel:+97143353845"
  },
  {
    iconName: "Mail",
    title: "Email Us",
    description: "We'll get back to you as quickly as possible with detailed information.",
    primaryText: "info@brandvillage.ae",
    primaryLink: "mailto:info@brandvillage.ae"
  },
  {
    iconName: "MessageCircle",
    title: "WhatsApp",
    description: "Instant assistance for product enquiries and stock availability.",
    primaryText: "Start Chat",
    primaryLink: "https://wa.me/971581234560"
  }
];

const ReachUs = ({ content }) => {
  const eyebrow = content?.eyebrow || "How To Connect";
  const title = content?.title || "Ways To Reach Us";
  const methods = content?.methods || defaultMethods;

  return (
    <section className="w-full bg-[#FAF9F6] py-10 lg:py-16 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-8 h-px bg-brandYellow"></span>
            <span className="text-brandMuted text-[11px] font-bold tracking-[0.25em] uppercase">
              {eyebrow}
            </span>
            <span className="w-8 h-px bg-brandYellow"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brandPrimary font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight"
          >
            {title}
          </motion.h2>
        </div>

        {/* Dynamic Editorial Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 lg:gap-y-0 lg:gap-x-12 divide-y lg:divide-y-0 lg:divide-x divide-brandBorder/60">
          {methods.map((method, index) => {
            const IconComponent = IconMap[method.iconName] || Phone;
            const isWhatsApp = method.iconName === 'MessageCircle';
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="flex flex-col items-center text-center pt-8 lg:pt-0 lg:px-8 group"
              >
                <div className={`w-20 h-20 rounded-full border border-brandBorder flex items-center justify-center mb-8 text-brandPrimary ${isWhatsApp ? 'group-hover:border-[#25D366] group-hover:bg-[#25D366]' : 'group-hover:border-brandYellow group-hover:bg-brandYellow'} group-hover:text-white transition-all duration-500`}>
                  <IconComponent className="w-8 h-8" strokeWidth={1} />
                </div>
                <h3 className="text-brandPrimary font-bold text-2xl mb-4 tracking-tight">{method.title}</h3>
                <p className="text-brandMuted text-base mb-8 max-w-[280px] leading-relaxed">
                  {method.description}
                </p>
                {method.primaryText && (
                  <a 
                    href={method.primaryLink} 
                    target={isWhatsApp ? "_blank" : undefined}
                    rel={isWhatsApp ? "noopener noreferrer" : undefined}
                    className={`inline-flex items-center gap-2 text-brandPrimary font-bold text-sm tracking-wide ${isWhatsApp ? 'group-hover:text-[#25D366]' : 'group-hover:text-brandYellow'} transition-colors duration-300 mt-auto`}
                  >
                    {method.primaryText} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                )}
                {method.secondaryText && (
                  <a href={method.secondaryLink} className="inline-flex items-center gap-2 text-brandPrimary/70 font-semibold text-xs tracking-wide hover:text-brandYellow transition-colors duration-300 mt-1">
                    {method.secondaryText}
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReachUs;
