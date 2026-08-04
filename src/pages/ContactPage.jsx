import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHero from '../components/contact/ContactHero';
import ContactCards from '../components/contact/ContactCards';
import ReachUs from '../components/contact/ReachUs';
import ContactForm from '../components/contact/ContactForm';
import WhatsAppBanner from '../components/contact/WhatsAppBanner';
import FAQ from '../components/contact/FAQ';

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Dynamic title
    document.title = "Contact Brand Village Outlet | Get in Touch";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-brandLight w-full overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 w-full flex flex-col">
        <ContactHero />
        <ContactCards />
        <ReachUs />
        <ContactForm />
        <WhatsAppBanner />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
