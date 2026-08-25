import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import AboutOverviewSection from '../components/AboutOverviewSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';
import { client } from '../../tina/__generated__/client';
import { useTina } from 'tinacms/dist/react';

const HomePage = () => {
  const [cmsData, setCmsData] = useState(null);

  useEffect(() => {
    client.queries.homepage({ relativePath: 'homepage.json' })
      .then((res) => {
        setCmsData(res);
      })
      .catch((err) => {
        console.error('Error fetching homepage CMS content:', err);
      });
  }, []);

  const { data } = useTina({
    query: cmsData?.query || '',
    variables: cmsData?.variables || {},
    data: cmsData?.data || {},
  });

  const homepage = data?.homepage;

  return (
    <div className="bg-brandLight overflow-x-hidden pt-[88px] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSlider slides={homepage?.heroSlides} />
        <AboutOverviewSection 
          aboutSection={homepage?.aboutSection} 
          purposeSection={homepage?.purposeSection} 
          identityCards={homepage?.identityCards} 
        />
        <WhyChooseUs content={homepage?.whyChooseUs} featuresList={homepage?.features} ctaSection={homepage?.ctaSection} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
