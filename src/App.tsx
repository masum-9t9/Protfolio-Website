import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { FeaturedEcosystem } from './components/FeaturedEcosystem';
import { Experience } from './components/Experience';
import { Testimonials3D } from './components/Testimonials3D';
import { Achievements } from './components/Achievements';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NavigationDock } from './components/NavigationDock';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { BANGLA_PORTFOLIO_CONFIG } from './data/portfolioData';
import { ENGLISH_PORTFOLIO_CONFIG } from './data/translations';

const PortfolioApp: React.FC = () => {
  const { language } = useLanguage();

  const currentConfig = language === 'bn' ? BANGLA_PORTFOLIO_CONFIG : ENGLISH_PORTFOLIO_CONFIG;

  return (
    <div className="min-h-screen bg-[#090D16] text-neutral-100 font-sans selection:bg-[#3A86FF] selection:text-white">
      <Hero config={currentConfig.hero} socials={currentConfig.socials} />
      <About config={currentConfig.about} />
      <Skills skills={currentConfig.skills} />
      <Services services={currentConfig.services} />
      <Portfolio items={currentConfig.portfolio} />
      <FeaturedEcosystem items={currentConfig.featuredEcosystem} />
      <Experience experiences={currentConfig.experiences} />
      <Testimonials3D testimonials={currentConfig.testimonials} contactConfig={currentConfig.contact} />
      <Achievements achievements={currentConfig.achievements} />
      <FAQ faqs={currentConfig.faqs} />
      <Contact config={currentConfig.contact} socials={currentConfig.socials} />
      <Footer socials={currentConfig.socials} />
      
      <NavigationDock />
    </div>
  );
};

export function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}

export default App;