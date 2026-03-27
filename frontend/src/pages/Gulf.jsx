import React from 'react';
import { Header } from '../components/Header';
import { HeroSectionGulf } from '../components/gulf/HeroSectionGulf';
import { WhatWeDoGulf } from '../components/gulf/WhatWeDoGulf';
import { CoreOfferGulf } from '../components/gulf/CoreOfferGulf';
import { CaseStudies } from '../components/CaseStudies';
import { HowWeWork } from '../components/HowWeWork';
import { AIPoweredSection } from '../components/AIPoweredSection';
import { WhyTechviora } from '../components/WhyTechviora';
import { FinalCTA } from '../components/FinalCTA';
import { FooterGulf } from '../components/gulf/FooterGulf';

const Gulf = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSectionGulf />
      <WhatWeDoGulf />
      <CoreOfferGulf />
      <CaseStudies />
      <HowWeWork />
      <AIPoweredSection />
      <WhyTechviora />
      <FinalCTA />
      <FooterGulf />
    </div>
  );
};

export default Gulf;
