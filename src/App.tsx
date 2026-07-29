import React, { useState } from 'react';
import { loadPortfolioConfig, savePortfolioConfig, getLocalizedPortfolioConfig } from './data/config';
import { PortfolioConfig, PortfolioItem } from './types';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

import { NavigationDock } from './components/NavigationDock';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { FeaturedEcosystem } from './components/FeaturedEcosystem';
import { Testimonials3D } from './components/Testimonials3D';
import { Achievements } from './components/Achievements';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

function MainContent() {
  const { language } = useLanguage();
  const [baseConfig, setBaseConfig] = useState<PortfolioConfig>(loadPortfolioConfig());
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  // Dynamically get English or Bengali config
  const activeConfig = getLocalizedPortfolioConfig(baseConfig, language);

  const handleAddTestimonial = (newTestimonial: any) => {
    const updatedConfig = {
      ...baseConfig,
      testimonials: [newTestimonial, ...baseConfig.testimonials],
    };
    setBaseConfig(updatedConfig);
    savePortfolioConfig(updatedConfig);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-neutral-100 font-['Inter','Hind_Siliguri',sans-serif] selection:bg-[#3A86FF] selection:text-white relative">
      
      {/* Floating Apple macOS Dock Navigation */}
      <NavigationDock />

      {/* Hero Section */}
      <Hero data={activeConfig.hero} socials={activeConfig.socials} />

      {/* About Section */}
      <About data={activeConfig.about} testimonials={activeConfig.testimonials} />

      {/* Skills Section */}
      <Skills skills={activeConfig.skills} />

      {/* Services Section */}
      <Services services={activeConfig.services} />

      {/* Experience Timeline */}
      <Experience experiences={activeConfig.experiences} />

      {/* Portfolio Showcase Grid */}
      <Portfolio items={activeConfig.portfolio} onSelectProject={setSelectedProject} />

      {/* Featured Web Platform & Ecosystem Showcase */}
      <FeaturedEcosystem items={activeConfig.featuredEcosystem} />

      {/* 25-30 Degree Angled Side-by-Side Scrolling Testimonials */}
      <Testimonials3D
        testimonials={activeConfig.testimonials}
        onAddTestimonial={handleAddTestimonial}
        contactConfig={activeConfig.contact}
      />

      {/* Achievements Counter Stats */}
      <Achievements achievements={activeConfig.achievements} />

      {/* FAQ Section */}
      <FAQ faqs={activeConfig.faqs} />

      {/* Glass Contact Section */}
      <Contact config={activeConfig.contact} socials={activeConfig.socials} />

      {/* Footer */}
      <Footer socials={activeConfig.socials} />

      {/* Portfolio Item Detail Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
