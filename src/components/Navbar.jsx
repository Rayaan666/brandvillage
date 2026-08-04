import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Store', href: '/store' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          scrolled || mobileMenuOpen
            ? 'bg-white shadow-sm border-b border-brandBorder h-[88px]'
            : 'bg-white/70 backdrop-blur-md h-[88px]'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src="/logo.png" alt="Brand Village" className="h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 h-full">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
              
              return (
                <div key={link.name} className="relative h-full flex items-center">
                  <Link
                    to={link.href}
                    className={`text-sm font-semibold tracking-wide flex items-center transition-colors duration-200 ${
                      isActive ? 'text-brandYellow' : 'text-brandPrimary hover:text-brandYellow'
                    }`}
                  >
                    {link.name}
                  </Link>
                  
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-brandYellow rounded-t-sm"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="https://www.google.com/maps/place/Brand+village+outlet/@25.2638788,55.3165515,17z/data=!4m6!3m5!1s0x3e5f5d0005e2ab7b:0xfc733466a6642162!8m2!3d25.2638788!4d55.3165515!16s%2Fg%2F11wsp0s4h2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brandPrimary text-white px-5 py-2.5 rounded-none font-semibold text-sm hover:bg-brandYellow hover:text-brandPrimary transition-all duration-300"
            >
              <MapPin className="w-4 h-4" />
              Visit Our Store
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-6 lg:hidden">
            <button
              className="text-brandPrimary"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-brandBorder">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <img src="/logo.png" alt="Brand Village" className="h-12 w-auto object-contain" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-brandPrimary p-1"
                aria-label="Close Menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-10 px-6 flex flex-col gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href || (link.href !== '/' && location.pathname.startsWith(link.href));
                return (
                  <div key={link.name}>
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-2xl font-bold block ${
                        isActive ? 'text-brandYellow' : 'text-brandPrimary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="p-6 border-t border-brandBorder">
              <a
                href="https://www.google.com/maps/place/Brand+village+outlet/@25.2638788,55.3165515,17z/data=!4m6!3m5!1s0x3e5f5d0005e2ab7b:0xfc733466a6642162!8m2!3d25.2638788!4d55.3165515!16s%2Fg%2F11wsp0s4h2"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-brandPrimary text-white py-4 rounded-none font-semibold text-lg"
              >
                <MapPin className="w-5 h-5" />
                Visit Our Store
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
