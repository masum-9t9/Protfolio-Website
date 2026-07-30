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
  { id: 'services', faIconClass: 'fa-solid fa-briefcase', labelKey: 'services' },
  { id: 'portfolio', faIconClass: 'fa-solid fa-palette', labelKey: 'designProjects' },
  { id: 'ecosystem', faIconClass: 'fa-solid fa-laptop-code', labelKey: 'codingProjects' },
  { id: 'skills', faIconClass: 'fa-solid fa-code', labelKey: 'skills' },
  { id: 'experience', faIconClass: 'fa-solid fa-clock-rotate-left', labelKey: 'experience' },
  { id: 'testimonials', faIconClass: 'fa-solid fa-comment-dots', labelKey: 'testimonials' },
  { id: 'contact', faIconClass: 'fa-solid fa-envelope', labelKey: 'contact' },
];

export const NavigationDock: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Rock-solid scroll spy using getBoundingClientRect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sectionIds = NAV_ITEMS.map((item) => item.id);
      const viewportThreshold = window.innerHeight * 0.38;

      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportThreshold) {
            current = id;
          }
        }
      }

      // Bottom of page check for contact
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (isAtBottom) {
        current = 'contact';
      }

      setActiveSection(current);
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

  // Calculate Apple macOS Dock magnification scale
  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(hoveredIndex - index);
    if (distance === 0) return 1.2;
    if (distance === 1) return 1.1;
    if (distance === 2) return 1.04;
    return 1;
  };

  return (
    <header className="fixed top-2 sm:top-4 left-0 right-0 z-[100] flex justify-center pointer-events-none px-1.5 xs:px-3 sm:px-4">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        onMouseLeave={() => setHoveredIndex(null)}
        className={`glass-dock pointer-events-auto flex items-center gap-0.5 xs:gap-1 sm:gap-1.5 px-1.5 xs:px-2.5 sm:px-3.5 py-1 xs:py-1.5 rounded-full backdrop-blur-2xl border transition-all duration-300 max-w-[99vw] sm:max-w-max overflow-x-auto no-scrollbar ${
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
                className={`relative flex items-center justify-center gap-1 xs:gap-1.5 p-1.5 xs:p-2 sm:p-2.5 lg:px-3 lg:py-1.5 xl:px-3.5 xl:py-2 rounded-full text-xs sm:text-sm font-semibold select-none shrink-0 dock-icon-anim ${
                  isActive
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
                style={{ animationDelay: `${index * 0.22}s` }}
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
                  className={`${item.faIconClass} text-xs xs:text-sm sm:text-base relative z-10 transition-transform duration-200 ${
                    isActive ? 'scale-110 text-white' : 'group-hover:scale-110'
                  }`}
                  aria-hidden="true"
                />

                {/* Localized Label - Desktop only (lg+) */}
                <span className="hidden lg:inline whitespace-nowrap text-xs xl:text-sm font-bold tracking-wide relative z-10">
                  {label}
                </span>

                {/* Active Indicator Dot under pill */}
                {isActive && (
                  <motion.span
                    layoutId="activeDockDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 xs:w-1.5 h-1 xs:h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>

              {/* Mobile / Compact Tooltip */}
              <div className="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-neutral-950/95 border border-white/20 text-white text-[11px] font-extrabold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none lg:hidden whitespace-nowrap z-50 shadow-2xl backdrop-blur-xl">
                <span>{label}</span>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-950 border-t border-l border-white/20 rotate-45" />
              </div>
            </div>
          );
        })}

        {/* Vertical Separator */}
        <div className="w-[1px] h-4 xs:h-5 bg-white/20 mx-0.5 xs:mx-1 shrink-0" />

        {/* Language Switcher Component on Navigation Dock */}
        <LanguageSwitcher variant="dock" />

      </motion.nav>
    </header>
  );
};
