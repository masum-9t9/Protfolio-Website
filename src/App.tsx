/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { loadPortfolioConfig, savePortfolioConfig } from './data/config';
import { PortfolioConfig, PortfolioItem } from './types';
import { subscribeTestimonials } from './firebase';

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
import { ConfigEditorModal } from './components/ConfigEditorModal';

export default function App() {
  const [config, setConfig] = useState<PortfolioConfig>(loadPortfolioConfig());
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isConfigEditorOpen, setIsConfigEditorOpen] = useState<boolean>(false);

  // Subscribe to Firebase Cloud Firestore for real-time global reviews
  useEffect(() => {
    const unsubscribe = subscribeTestimonials((firestoreReviews) => {
      if (firestoreReviews && firestoreReviews.length > 0) {
        setConfig((prevConfig) => {
          const initialReviews = prevConfig.testimonials || [];
          // Put firestore reviews first, filter out duplicates
          const firestoreIds = new Set(firestoreReviews.map((f) => f.id));
          const filteredInitial = initialReviews.filter((t) => !firestoreIds.has(t.id));
          const combined = [...firestoreReviews, ...filteredInitial];
          return {
            ...prevConfig,
            testimonials: combined,
          };
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSaveConfig = (updatedConfig: PortfolioConfig) => {
    setConfig(updatedConfig);
    savePortfolioConfig(updatedConfig);
  };

  const handleAddTestimonial = (newTestimonial: any) => {
    const updatedConfig = {
      ...config,
      testimonials: [newTestimonial, ...config.testimonials],
    };
    setConfig(updatedConfig);
    savePortfolioConfig(updatedConfig);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-neutral-100 font-['Hind_Siliguri',sans-serif] selection:bg-[#3A86FF] selection:text-white relative">
      
      {/* Floating Apple macOS Dock Navigation */}
      <NavigationDock />

      {/* Hero Section */}
      <Hero data={config.hero} socials={config.socials} />

      {/* About Section */}
      <About data={config.about} testimonials={config.testimonials} />

      {/* Skills Section */}
      <Skills skills={config.skills} />

      {/* Services Section */}
      <Services services={config.services} />

      {/* Experience Timeline */}
      <Experience experiences={config.experiences} />

      {/* Portfolio Showcase Grid */}
      <Portfolio items={config.portfolio} onSelectProject={setSelectedProject} />

      {/* Featured Web Platform & Ecosystem Showcase */}
      <FeaturedEcosystem items={config.featuredEcosystem} />

      {/* 25-30 Degree Angled Side-by-Side Scrolling Testimonials */}
      <Testimonials3D
        testimonials={config.testimonials}
        onAddTestimonial={handleAddTestimonial}
        contactConfig={config.contact}
      />

      {/* Achievements Counter Stats */}
      <Achievements achievements={config.achievements} />

      {/* FAQ Section */}
      <FAQ faqs={config.faqs} />

      {/* Glass Contact Section */}
      <Contact config={config.contact} socials={config.socials} />

      {/* Footer */}
      <Footer
        socials={config.socials}
        onOpenConfigEditor={() => setIsConfigEditorOpen(true)}
      />

      {/* Portfolio Item Detail Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Data Config & Blogger Exporter Modal */}
      <ConfigEditorModal
        isOpen={isConfigEditorOpen}
        onClose={() => setIsConfigEditorOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
      />

    </div>
  );
}
