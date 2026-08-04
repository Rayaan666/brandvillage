import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#111111] text-white pt-20 pb-10 border-t border-white/10 mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
        
        {/* Brand Section */}
        <div className="flex flex-col items-start gap-6">
          <Link to="/">
            <img src="/logo.png" alt="Brand Village" className="h-20 w-auto object-contain" />
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Dubai's premium outlet destination. Discover luxury, fashion, and lifestyle items at unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-5">
          <h3 className="text-brandYellow font-bold text-sm tracking-wider uppercase">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-white/70 text-sm font-medium">
            <li>
              <Link to="/" className="hover:text-brandYellow transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/store" className="hover:text-brandYellow transition-colors">Store Catalogue</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brandYellow transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-5">
          <h3 className="text-brandYellow font-bold text-sm tracking-wider uppercase">Get In Touch</h3>
          <ul className="flex flex-col gap-4 text-white/70 text-sm font-medium">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-brandYellow shrink-0" />
              <span>Al Maktoum Rd, Al Muraqqabat, Deira, Dubai, UAE</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-brandYellow shrink-0" />
              <div className="flex flex-col gap-1">
                <a href="tel:+971581234560" className="hover:text-brandYellow transition-colors">+971 58 123 4560</a>
                <a href="tel:+97143353845" className="hover:text-brandYellow transition-colors">+971 4 335 3845</a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-brandYellow shrink-0" />
              <a href="mailto:info@brandvillage.ae" className="hover:text-brandYellow transition-colors">info@brandvillage.ae</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-medium">
        <p>&copy; {new Date().getFullYear()} Brand Village Outlet. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
