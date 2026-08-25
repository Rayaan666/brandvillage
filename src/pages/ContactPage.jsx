import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactHero from '../components/contact/ContactHero';
import ContactCards from '../components/contact/ContactCards';
import ReachUs from '../components/contact/ReachUs';
import ContactForm from '../components/contact/ContactForm';
import WhatsAppBanner from '../components/contact/WhatsAppBanner';
import FAQ from '../components/contact/FAQ';
import { client } from '../../tina/__generated__/client';
import { useTina } from 'tinacms/dist/react';

const ContactPage = () => {
  const [cmsData, setCmsData] = useState(null);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    // Dynamic title
    document.title = "Contact Brand Village Outlet | Get in Touch";

    client.queries.contactpage({ relativePath: 'contactpage.json' })
      .then((res) => {
        setCmsData(res);
      })
      .catch((err) => {
        console.error('Error fetching contactpage CMS content:', err);
      });
  }, []);

  const { data } = useTina({
    query: cmsData?.query || '',
    variables: cmsData?.variables || {},
    data: cmsData?.data || {},
  });

  const contactpage = data?.contactpage;

  return (
    <div className="flex flex-col min-h-screen bg-brandLight w-full overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 w-full flex flex-col">
        <ContactHero content={contactpage?.heroSection} />
        <ContactCards content={contactpage?.contactCards} />
        <ReachUs content={contactpage?.reachUsSection} />
        <ContactForm content={contactpage?.formSection} />
        <WhatsAppBanner content={contactpage?.whatsappBanner} />
        <FAQ content={contactpage?.faqSection} />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
