import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StoreHero from '../components/store/StoreHero';
import CollectionShowcase from '../components/store/CollectionShowcase';
import StoreVisitBanner from '../components/store/StoreVisitBanner';
import StoreWhatsAppCTA from '../components/store/StoreWhatsAppCTA';
import { client } from '../../tina/__generated__/client';
import { useTina } from 'tinacms/dist/react';

const StorePage = () => {
  const [cmsData, setCmsData] = useState(null);

  useEffect(() => {
    client.queries.storepage({ relativePath: 'storepage.json' })
      .then((res) => {
        setCmsData(res);
      })
      .catch((err) => {
        console.error('Error fetching storepage CMS content:', err);
      });
  }, []);

  const { data } = useTina({
    query: cmsData?.query || '',
    variables: cmsData?.variables || {},
    data: cmsData?.data || {},
  });

  const storepage = data?.storepage;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-[88px]">
        <StoreHero content={storepage?.heroSection} />
        <CollectionShowcase content={storepage?.collectionsShowcase} />
        <StoreVisitBanner content={storepage?.visitBanner} />
        <StoreWhatsAppCTA content={storepage?.whatsappCta} />
      </main>

      <Footer />
    </div>
  );
};

export default StorePage;

