import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'Email',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    alert('Thank you for your enquiry. We will get back to you shortly.');
  };

  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="w-full max-w-[850px] mx-auto px-6">
        
        {/* Centered Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-brandPrimary font-extrabold text-4xl lg:text-5xl tracking-tight mb-4"
          >
            Need Assistance?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brandMuted text-base md:text-lg leading-relaxed max-w-xl"
          >
            Fill out the form below and our customer support team will assist you with any questions about products, availability, or store policies.
          </motion.p>
        </div>

        {/* Centered Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#FAF9F6] rounded-[32px] p-8 md:p-12 border border-brandBorder shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] w-full"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-brandPrimary font-bold text-sm tracking-wide">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white border border-brandBorder rounded-xl px-5 py-4 outline-none focus:border-brandYellow focus:ring-1 focus:ring-brandYellow transition-all duration-300 text-brandPrimary"
                  placeholder="John Doe"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-brandPrimary font-bold text-sm tracking-wide">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-white border border-brandBorder rounded-xl px-5 py-4 outline-none focus:border-brandYellow focus:ring-1 focus:ring-brandYellow transition-all duration-300 text-brandPrimary"
                  placeholder="+971 58 123 4560"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-brandPrimary font-bold text-sm tracking-wide">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white border border-brandBorder rounded-xl px-5 py-4 outline-none focus:border-brandYellow focus:ring-1 focus:ring-brandYellow transition-all duration-300 text-brandPrimary"
                placeholder="john@example.com"
              />
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-brandPrimary font-bold text-sm tracking-wide">Subject / Product Code</label>
              <input 
                type="text" 
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-white border border-brandBorder rounded-xl px-5 py-4 outline-none focus:border-brandYellow focus:ring-1 focus:ring-brandYellow transition-all duration-300 text-brandPrimary"
                placeholder="Product enquiry, size check, order status..."
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-brandPrimary font-bold text-sm tracking-wide">Your Message</label>
              <textarea 
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white border border-brandBorder rounded-xl px-5 py-4 outline-none focus:border-brandYellow focus:ring-1 focus:ring-brandYellow transition-all duration-300 text-brandPrimary resize-none"
                placeholder="How can we help you today?"
              ></textarea>
            </div>

            {/* Contact Method Preference */}
            <div className="flex flex-col gap-2">
              <label htmlFor="preference" className="text-brandPrimary font-bold text-sm tracking-wide">Preferred Contact Method</label>
              <select 
                id="preference"
                name="preference"
                value={formData.preference}
                onChange={handleChange}
                className="bg-white border border-brandBorder rounded-xl px-5 py-4 outline-none focus:border-brandYellow focus:ring-1 focus:ring-brandYellow transition-all duration-300 text-brandPrimary cursor-pointer"
              >
                <option value="Email">Email</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Phone Call">Phone Call</option>
              </select>
            </div>

            {/* Privacy Consent */}
            <div className="flex items-start gap-3 mt-2">
              <input 
                type="checkbox" 
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="mt-1 accent-brandYellow w-4 h-4 cursor-pointer"
              />
              <label htmlFor="consent" className="text-brandMuted text-sm leading-relaxed cursor-pointer select-none">
                I agree to be contacted regarding my enquiry and accept the Privacy Policy.
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="mt-4 bg-brandPrimary text-white font-bold text-sm tracking-wide py-5 rounded-full hover:bg-brandYellow hover:text-brandPrimary transition-colors duration-300 cursor-pointer"
            >
              Send Enquiry
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactForm;
