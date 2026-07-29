import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavItem {
  id: string;
  faIconClass: string;
  labelKey: keyof typeof UI_TRANSLATIONS.bn.nav;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', faIconClass: 'fa-solid fa-house', labelKey: 'hero' },
  { id: 'about', faIconClass: 'fa-solid fa-user', labelKey: 'about' },
  { id: 'skills', faIconClass: 'fa-solid fa-code', labelKey: 'skills' },
  { id: 'services', faIconClass: 'fa-solid fa-briefcase', labelKey: 'services' },
  { id: 'portfolio', faIconClass: 'fa-solid fa-palette', labelKey: 'designProjects' },
  { id: 'ecosystem', faIconClass: 'fa-solid fa-laptop-code', labelKey: 'codingProjects' },
  { id: 'experience', faIconClass: 'fa-solid fa-clock-rotate-left', labelKey: 'experience' },
  { id: 'testimonials', faIconClass: 'fa-solid fa-comment-dots', labelKey: 'testimonials' },
  { id: 'contact', faIconClass: 'fa-solid fa-envelope', labelKey: 'contact' },
];

export const NavigationDock: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Spy Effect with Intersection / Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sectionIds = NAV_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top - 80) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Calculate Apple macOS Dock magnification scale for 60 FPS spring effect
  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(hoveredIndex - index);
    if (distance === 0) return 1.28;
    if (distance === 1) return 1.14;
    if (distance === 2) return 1.05;
    return 1;
  };

  return (
    <header className="fixed top-2 sm:top-4 left-0 right-0 z-[100] flex justify-center pointer-events-none px-2 sm:px-4">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        onMouseLeave={() => setHoveredIndex(null)}
        className={`glass-dock pointer-events-auto flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 rounded-full backdrop-blur-2xl border transition-all duration-300 max-w-[98vw] sm:max-w-full overflow-x-auto no-scrollbar ${
          isScrolled
            ? 'bg-neutral-950/85 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.2)_inset]'
            : 'bg-neutral-950/70 border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.6),0_1px_0_rgba(255,255,255,0.15)_inset]'
        }`}
        role="navigation"
        aria-label="Top Navigation Header"
      >
        {NAV_ITEMS.map((item, index) => {
          const isActive = activeSection === item.id;
          const scale = getScale(index);
          const label = t.nav[item.labelKey] || item.id;

          return (
            <div key={item.id} className="relative group shrink-0">
              <motion.button
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredIndex(index)}
                animate={{
                  scale,
                  y: isActive ? -1 : 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 450,
                  damping: 28,
                  mass: 0.6,
                }}
                className={`relative flex items-center justify-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 md:px-3.5 md:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 select-none shrink-0 ${
                  isActive
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
                title={label}
              >
                {/* Sliding Active Background Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeDockPill"
                    className="absolute inset-0 bg-gradient-to-r from-[#3A86FF] to-[#2563EB] rounded-full shadow-[0_0_20px_rgba(58,134,255,0.5)] ring-1 ring-white/30 -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Font Awesome Icon */}
                <i
                  className={`${item.faIconClass} text-sm sm:text-base relative z-10 transition-transform duration-200 ${
                    isActive ? 'scale-110 text-white' : 'group-hover:scale-110'
                  }`}
                  aria-hidden="true"
                />

                {/* Localized Label - Desktop only (md+) */}
                <span className="hidden md:inline whitespace-nowrap text-xs sm:text-sm font-bold tracking-wide relative z-10">
                  {label}
                </span>

                {/* Active Indicator Dot under pill */}
                {isActive && (
                  <motion.span
                    layoutId="activeDockDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>

              {/* Mobile Tooltip */}
              <div className="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-neutral-900/95 border border-white/20 text-white text-[11px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none md:hidden whitespace-nowrap z-50 shadow-2xl backdrop-blur-md">
                {label}
              </div>
            </div>
          );
        })}

        {/* Vertical Separator */}
        <div className="w-[1px] h-5 bg-white/20 mx-1 shrink-0" />

        {/* Language Switcher Component on Navigation Dock */}
        <LanguageSwitcher variant="dock" />

      </motion.nav>
    </header>
  );
};
