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

interface NavigationDockProps {
  onOpenSearch?: () => void;
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

export const NavigationDock: React.FC<NavigationDockProps> = ({ onOpenSearch }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check window width for mobile responsiveness
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-hide on scroll down for desktop, reveal on scroll up or top mouse hover
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);

      // On mobile view, NEVER hide the navigation dock!
      if (window.innerWidth < 640) {
        setIsNavHidden(false);
      } else {
        // Scroll Direction Detection for Desktop/Tablet
        if (currentScrollY > lastScrollY && currentScrollY > 150) {
          setIsNavHidden(true);
        } else if (currentScrollY < lastScrollY - 8 || currentScrollY <= 80) {
          setIsNavHidden(false);
        }
      }

      lastScrollY = currentScrollY;

      // Active Section Scroll Spy
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

  // Mouse near top edge detection (clientY < 80)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 80) {
        setIsNavHidden(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setIsNavHidden(false);
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

  const isCollapsed = !isMobile && isNavHidden && !isHovered;
  const activeItemObj = NAV_ITEMS.find((item) => item.id === activeSection) || NAV_ITEMS[0];
  const activeLabel = t.nav[activeItemObj.labelKey] || activeItemObj.id;

  return (
    <header className="fixed top-1.5 sm:top-4 left-0 right-0 z-[100] flex justify-center pointer-events-none px-1 xs:px-2 sm:px-4">
      
      <motion.div
        onMouseEnter={() => {
          setIsHovered(true);
          if (!isMobile) setIsNavHidden(false);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredIndex(null);
        }}
        animate={{
          y: isCollapsed ? -8 : 0,
          scale: isCollapsed ? 0.94 : 1,
          opacity: 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        className="pointer-events-auto flex items-center justify-center max-w-full"
      >
        {isCollapsed ? (
          /* Sleek Collapsed Minimal Capsule State (Desktop only) */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={() => setIsNavHidden(false)}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-950/90 border border-sky-500/40 text-white shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(56,189,248,0.25)] backdrop-blur-2xl cursor-pointer hover:border-sky-400 hover:bg-neutral-900 transition-all group"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_#38bdf8]" />
              <i className={`${activeItemObj.faIconClass} text-sky-400 text-sm`} />
              <span className="text-xs font-black tracking-wide text-white">
                {activeLabel}
              </span>
            </div>

            <div className="w-[1px] h-3.5 bg-white/20" />

            {/* Quick Contact trigger in collapsed pill */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                scrollToSection('contact');
              }}
              className="px-2 py-0.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-300 hover:text-white transition-all flex items-center gap-1 text-[11px] font-bold"
              title={language === 'bn' ? 'যোগাযোগ করুন' : 'Contact Me'}
            >
              <i className="fa-solid fa-paper-plane text-xs text-emerald-400" />
              <span>{language === 'bn' ? 'যোগাযোগ' : 'Contact'}</span>
            </button>

            <div className="w-[1px] h-3.5 bg-white/20" />

            <span className="text-[10px] text-neutral-400 font-bold group-hover:text-white flex items-center gap-1">
              <span>Menu</span>
              <i className="fa-solid fa-chevron-down text-[9px] group-hover:translate-y-0.5 transition-transform" />
            </span>
          </motion.div>
        ) : (
          /* Full Expanded Floating Dock - Always visible on Mobile & Responsive on all screens */
          <motion.nav
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className={`glass-dock flex items-center gap-0.5 xs:gap-1 sm:gap-1.5 px-1 xs:px-2 sm:px-3.5 py-1 xs:py-1.5 rounded-full backdrop-blur-2xl border transition-all duration-300 max-w-[98vw] sm:max-w-max overflow-x-auto no-scrollbar ${
              isScrolled
                ? 'bg-neutral-950/95 border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_1px_0_rgba(255,255,255,0.2)_inset]'
                : 'bg-neutral-950/85 border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.75),0_1px_0_rgba(255,255,255,0.15)_inset]'
            }`}
            role="navigation"
            aria-label="Top Navigation Header"
          >
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeSection === item.id;
              const scale = isMobile ? 1 : getScale(index);
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
                    className={`relative flex items-center justify-center gap-1 xs:gap-1.5 p-1 xs:p-1.5 sm:p-2.5 lg:px-3 lg:py-1.5 xl:px-3.5 xl:py-2 rounded-full text-xs sm:text-sm font-semibold select-none shrink-0 ${
                      isActive
                        ? 'text-white'
                        : 'text-neutral-400 hover:text-white hover:bg-white/10'
                    }`}
                    title={label}
                  >
                    {/* Sliding Active Background Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="activeDockPill"
                        className="absolute inset-0 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)] ring-1 ring-white/40 -z-10"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}

                    {/* Font Awesome Icon */}
                    <i
                      className={`${item.faIconClass} text-[13px] xs:text-sm sm:text-base relative z-10 transition-transform duration-200 ${
                        isActive ? 'scale-105 text-white' : 'group-hover:scale-110'
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

                  {/* Desktop Tooltip */}
                  <div className="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-neutral-950/95 border border-white/20 text-white text-[11px] font-extrabold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none lg:hidden whitespace-nowrap z-50 shadow-2xl backdrop-blur-xl">
                    <span>{label}</span>
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-950 border-t border-l border-white/20 rotate-45" />
                  </div>
                </div>
              );
            })}

            {/* Global Project Search Trigger Button - Hidden on mobile view */}
            <div className="hidden sm:flex items-center">
              <div className="w-[1px] h-4 xs:h-5 bg-white/20 mx-1 shrink-0" />
              <button
                id="global-search-trigger"
                onClick={onOpenSearch}
                className="relative flex items-center gap-1.5 px-2 xs:px-2.5 py-1 xs:py-1.5 rounded-full bg-sky-500/15 hover:bg-sky-500/25 border border-sky-400/40 text-sky-300 hover:text-white text-xs font-bold transition-all shrink-0 active:scale-95 group shadow-[0_0_12px_rgba(56,189,248,0.25)] ml-0.5"
                title={language === 'bn' ? 'প্রজেক্ট ও কোডিং সার্চ করুন (F / ⌘K)' : 'Search Projects & Skills (F / ⌘K)'}
              >
                <i className="fa-solid fa-magnifying-glass text-xs xs:text-sm text-sky-400 group-hover:scale-110 transition-transform" />
                <span className="whitespace-nowrap text-xs font-bold">
                  {language === 'bn' ? 'সার্চ' : 'Search'}
                </span>
                <span className="inline-flex items-center text-[10px] bg-black/60 text-sky-300 font-mono px-1.5 py-0.5 rounded border border-sky-400/30 font-extrabold">
                  F
                </span>
              </button>
            </div>

            {/* Vertical Separator */}
            <div className="w-[1px] h-4 xs:h-5 bg-white/20 mx-0.5 xs:mx-1 shrink-0" />

            {/* Language Switcher Component on Navigation Dock */}
            <LanguageSwitcher variant="dock" />

          </motion.nav>
        )}
      </motion.div>

    </header>
  );
};
