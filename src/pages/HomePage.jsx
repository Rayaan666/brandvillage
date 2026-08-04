import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import AboutOverviewSection from '../components/AboutOverviewSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="bg-brandLight overflow-x-hidden pt-[88px] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSlider />
        <AboutOverviewSection />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
