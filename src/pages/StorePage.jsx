import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StoreHero from '../components/store/StoreHero';
import CollectionShowcase from '../components/store/CollectionShowcase';
import StoreVisitBanner from '../components/store/StoreVisitBanner';
import StoreWhatsAppCTA from '../components/store/StoreWhatsAppCTA';
import FloatingWhatsAppButton from '../components/store/FloatingWhatsAppButton';

const StorePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-[88px]">
        <StoreHero />
        <CollectionShowcase />
        <StoreVisitBanner />
        <StoreWhatsAppCTA />
      </main>

      <Footer />

      <FloatingWhatsAppButton />
    </div>
  );
};

export default StorePage;
