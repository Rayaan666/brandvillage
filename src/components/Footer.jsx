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
          {/* Social Links */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://www.facebook.com/61591586302172/?http_ref=eyJ0cyI6MTc4NzAyNjYzNzAwMCwiciI6IiJ9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-brandYellow hover:bg-white/10 hover:border-brandYellow/30 transition-all duration-300"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/brandsvillageoutlet/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-brandYellow hover:bg-white/10 hover:border-brandYellow/30 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@brandsvillgaeoutlet"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-brandYellow hover:bg-white/10 hover:border-brandYellow/30 transition-all duration-300"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.21-.42-.45-.61-.7-.02 3.68-.01 7.36-.02 11.04-.1 2.44-1.14 4.86-3.14 6.3-2.23 1.64-5.27 2.02-7.85 1.05-2.73-1-4.79-3.52-5-6.42-.42-4.11 2.62-8.06 6.7-8.62.94-.14 1.89-.07 2.82.19v4.07c-1.22-.38-2.61-.17-3.6.57-.96.72-1.45 1.94-1.33 3.14.1 1.72 1.48 3.19 3.2 3.32 1.63.14 3.23-1.01 3.51-2.62.09-.52.07-1.06.07-1.6V0h2.47z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/UCttlkvX7cTY3D-DEASDVudw"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-brandYellow hover:bg-white/10 hover:border-brandYellow/30 transition-all duration-300"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.003 3.003 0 0 0-2.11 2.107C0 8.053 0 12 0 12s0 3.947.502 5.837a3.003 3.003 0 0 0 2.11 2.107c1.883.511 9.388.511 9.388.511s7.505 0 9.388-.511a3.003 3.003 0 0 0 2.11-2.107c.502-1.89.502-5.837.502-5.837s0-3.947-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
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
