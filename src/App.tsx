import React, { useState, Component, ErrorInfo, ReactNode } from 'react';
import { loadPortfolioConfig, savePortfolioConfig, getLocalizedPortfolioConfig, INITIAL_PORTFOLIO_CONFIG } from './data/config';
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
import { GlobalSearchModal } from './components/GlobalSearchModal';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public props: ErrorBoundaryProps;
  public state: ErrorBoundaryState;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.props = props;
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught rendering error:", error, errorInfo);
  }

  private handleReset = () => {
    try {
      localStorage.clear();
    } catch (e) {
      console.error("Failed to clear localStorage:", e);
    }
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#090D16] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md bg-neutral-900/90 border border-neutral-800 p-8 rounded-2xl shadow-2xl">
            <h1 className="text-2xl font-bold text-red-400 mb-3">App Recovery Mode</h1>
            <p className="text-sm text-neutral-400 mb-6">
              A temporary issue occurred while displaying the application. Click below to clear stored cache and load fresh data.
            </p>
            {this.state.error && (
              <pre className="text-xs bg-black/60 p-3 rounded text-red-300 overflow-x-auto mb-6 text-left max-h-32 border border-red-500/20">
                {this.state.error.toString()}
              </pre>
            )}
            <button
              onClick={this.handleReset}
              className="px-6 py-2.5 rounded-xl bg-[#3A86FF] hover:bg-blue-600 font-bold text-white transition-all shadow-lg active:scale-95"
            >
              Clear Cache & Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function MainContent() {
  const { language } = useLanguage();
  const [baseConfig, setBaseConfig] = useState<PortfolioConfig>(() => {
    try {
      return loadPortfolioConfig();
    } catch (e) {
      console.error("Error initial load:", e);
      return INITIAL_PORTFOLIO_CONFIG;
    }
  });
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Dynamically get English or Bengali config safely
  const activeConfig = getLocalizedPortfolioConfig(baseConfig || INITIAL_PORTFOLIO_CONFIG, language || 'bn');

  const handleAddTestimonial = (newTestimonial: any) => {
    const currentTestimonials = baseConfig?.testimonials || INITIAL_PORTFOLIO_CONFIG.testimonials || [];
    const updatedConfig = {
      ...baseConfig,
      testimonials: [newTestimonial, ...currentTestimonials],
    };
    setBaseConfig(updatedConfig);
    savePortfolioConfig(updatedConfig);
  };

  return (
    <div className="min-h-screen bg-[#070A12] text-neutral-100 font-['Inter','Hind_Siliguri',sans-serif] selection:bg-sky-500 selection:text-white relative overflow-x-hidden">
      
      {/* High-Performance Animated Vector Background */}
      <AnimatedVectorBG />

      {/* Floating Apple macOS Dock Navigation */}
      <NavigationDock onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Hero Section */}
      <Hero data={activeConfig.hero} socials={activeConfig.socials} />

      {/* About Section */}
      <About data={activeConfig.about} testimonials={activeConfig.testimonials} />

      {/* Services Section */}
      <Services services={activeConfig.services} />

      {/* Portfolio Showcase Grid (Design Projects) */}
      <Portfolio items={activeConfig.portfolio} onSelectProject={setSelectedProject} />

      {/* Featured Web Platform & Ecosystem Showcase (Coding Projects) */}
      <FeaturedEcosystem items={activeConfig.featuredEcosystem} />

      {/* Skills Section */}
      <Skills skills={activeConfig.skills} />

      {/* Experience Timeline */}
      <Experience experiences={activeConfig.experiences} />

      {/* 25-30 Degree Angled Side-by-Side Scrolling Testimonials (Reviews) */}
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

      {/* Global Project & Code Search Modal */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        portfolioItems={activeConfig.portfolio}
        ecosystemItems={activeConfig.featuredEcosystem}
        servicesItems={activeConfig.services}
        skillsItems={activeConfig.skills}
        onSelectProject={setSelectedProject}
      />

    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <MainContent />
      </LanguageProvider>
    </ErrorBoundary>
  );
}

