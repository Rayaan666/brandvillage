import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do you have all products available in store?",
    answer: "While we feature a wide selection of premium products in our physical location, some items shown online may be exclusive to specific collections or have limited availability. We recommend checking with our team via WhatsApp for real-time stock updates."
  },
  {
    question: "Can I reserve products?",
    answer: "Yes, we offer a reservation service for up to 48 hours. You can request a reservation by contacting our customer support team through WhatsApp or by calling the store directly. Please have the product code ready."
  },
  {
    question: "How can I enquire about availability?",
    answer: "The fastest way to check availability is by using the 'Chat on WhatsApp' button found on any product page. This will automatically pre-fill a message with the product details for our team to check instantly."
  },
  {
    question: "Do you accept returns?",
    answer: "We offer a 14-day exchange policy for all items purchased in-store, provided they are in their original condition with tags attached and accompanied by the original receipt. Refunds are issued as store credit only."
  },
  {
    question: "How do I contact customer support?",
    answer: "Our customer support team is available via Phone (+971 58 123 4560), Email (info@brandvillage.ae), and WhatsApp during regular store hours. For the quickest response regarding products, we recommend using WhatsApp."
  }
];

const FAQItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-brandBorder">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 lg:py-8 text-left focus:outline-none group"
      >
        <span className={`font-bold text-lg lg:text-xl pr-8 transition-colors duration-300 ${isOpen ? 'text-brandYellow' : 'text-brandPrimary group-hover:text-brandYellow'}`}>
          {faq.question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-brandYellow bg-brandYellow text-white' : 'border-brandBorder text-brandPrimary group-hover:border-brandYellow group-hover:text-brandYellow'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-brandMuted text-base lg:text-lg leading-relaxed pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white pt-6 pb-12 lg:pt-8 lg:pb-16">
      <div className="w-full max-w-[900px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-8 h-px bg-brandYellow"></span>
            <span className="text-brandMuted text-[11px] font-bold tracking-[0.25em] uppercase">
              Support
            </span>
            <span className="w-8 h-px bg-brandYellow"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brandPrimary font-extrabold text-4xl lg:text-5xl tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* Accordion List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
