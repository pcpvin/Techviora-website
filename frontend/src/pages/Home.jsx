import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { WhatWeDo } from '../components/WhatWeDo';
import { AIPoweredSection } from '../components/AIPoweredSection';
import { PricingSection } from '../components/PricingSection';
import { CaseStudies } from '../components/CaseStudies';
import { HowWeWork } from '../components/HowWeWork';
import { WhyTechviora } from '../components/WhyTechviora';
import { WhatWeBuild } from '../components/WhatWeBuild';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <WhatWeDo />
      <AIPoweredSection />
      <PricingSection />
      <CaseStudies />
      <HowWeWork />
      <WhyTechviora />
      <WhatWeBuild />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Home;
