import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';
import { LanguageSwitcher } from './LanguageSwitcher';
import { X, Palette, Code2, Sparkles, Search } from 'lucide-react';

interface NavItem {
  id: string;
  faIconClass: string;
  labelKey: keyof typeof UI_TRANSLATIONS.bn.nav;
  isProjectsToggle?: boolean;
}

interface NavigationDockProps {
  onOpenSearch?: () => void;
}

// Complete items list for Desktop
const DESKTOP_NAV_ITEMS: NavItem[] = [
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

// Clean 6 items list for Mobile Dock Redesign
const MOBILE_NAV_ITEMS: NavItem[] = [
  { id: 'hero', faIconClass: 'fa-solid fa-house', labelKey: 'hero' },
  { id: 'about', faIconClass: 'fa-solid fa-user', labelKey: 'about' },
  { id: 'services', faIconClass: 'fa-solid fa-briefcase', labelKey: 'services' },
  { id: 'projects', faIconClass: 'fa-solid fa-folder-open', labelKey: 'projects', isProjectsToggle: true },
  { id: 'experience', faIconClass: 'fa-solid fa-clock-rotate-left', labelKey: 'experience' },
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
  const [isProjectsBottomSheetOpen, setIsProjectsBottomSheetOpen] = useState(false);

  // Check window width for mobile responsiveness
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll spy & auto-hide handling
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);

      // On mobile view, NEVER hide the dock!
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
      const sectionIds = ['hero', 'about', 'services', 'portfolio', 'ecosystem', 'skills', 'experience', 'testimonials', 'contact'];
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

  // Reveal dock on mouse near top
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

  const getScale = (index: number) => {
    if (hoveredIndex === null) return 1;
    const distance = Math.abs(hoveredIndex - index);
    if (distance === 0) return 1.2;
    if (distance === 1) return 1.1;
    if (distance === 2) return 1.04;
    return 1;
  };

  const isCollapsed = !isMobile && isNavHidden && !isHovered;
  const currentNavItems = isMobile ? MOBILE_NAV_ITEMS : DESKTOP_NAV_ITEMS;

  const activeItemObj = DESKTOP_NAV_ITEMS.find((item) => item.id === activeSection) || DESKTOP_NAV_ITEMS[0];
  const activeLabel = t.nav[activeItemObj.labelKey] || activeItemObj.id;

  const isProjectsActive = activeSection === 'portfolio' || activeSection === 'ecosystem';

  return (
    <>
      {/* Header Dock Container — Moved slightly lower with top-3 sm:top-6 */}
      <header className="fixed top-3 sm:top-6 left-0 right-0 z-[100] flex justify-center pointer-events-none px-1 xs:px-2 sm:px-4">
        
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
            /* Desktop Collapsed Pill */
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
            /* Full Floating Dock */
            <motion.nav
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className={`glass-dock flex items-center gap-0.5 xs:gap-1 sm:gap-1.5 px-1.5 xs:px-2 sm:px-3.5 py-1.5 xs:py-2 rounded-full backdrop-blur-2xl border transition-all duration-300 max-w-[98vw] sm:max-w-max ${
                isScrolled
                  ? 'bg-neutral-950/95 border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_1px_0_rgba(255,255,255,0.2)_inset]'
                  : 'bg-neutral-950/85 border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.75),0_1px_0_rgba(255,255,255,0.15)_inset]'
              }`}
              role="navigation"
              aria-label="Navigation Dock"
            >
              {currentNavItems.map((item, index) => {
                const isActive = item.isProjectsToggle
                  ? isProjectsActive
                  : activeSection === item.id;
                const scale = isMobile ? 1 : getScale(index);
                const label = t.nav[item.labelKey] || item.id;

                return (
                  <div key={item.id} className="relative group shrink-0">
                    <motion.button
                      onClick={() => {
                        if (item.isProjectsToggle) {
                          setIsProjectsBottomSheetOpen(true);
                        } else {
                          scrollToSection(item.id);
                        }
                      }}
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
                      className={`relative flex items-center justify-center gap-1 xs:gap-1.5 p-2 xs:p-2.5 sm:p-2.5 lg:px-3 lg:py-1.5 xl:px-3.5 xl:py-2 rounded-full text-xs sm:text-sm font-semibold select-none shrink-0 ${
                        isActive
                          ? 'text-white'
                          : 'text-neutral-400 hover:text-white hover:bg-white/10'
                      }`}
                      title={label}
                    >
                      {/* Active Background Pill */}
                      {isActive && (
                        <motion.div
                          layoutId="activeDockPill"
                          className="absolute inset-0 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)] ring-1 ring-white/40 -z-10"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}

                      {/* Font Awesome Icon */}
                      <i
                        className={`${item.faIconClass} text-[14px] xs:text-base sm:text-base relative z-10 transition-transform duration-200 ${
                          isActive ? 'scale-105 text-white' : 'group-hover:scale-110'
                        }`}
                        aria-hidden="true"
                      />

                      {/* Localized Label - Desktop only (lg+) */}
                      <span className="hidden lg:inline whitespace-nowrap text-xs xl:text-sm font-bold tracking-wide relative z-10">
                        {label}
                      </span>

                      {/* Active Dot */}
                      {isActive && (
                        <motion.span
                          layoutId="activeDockDot"
                          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 xs:w-1.5 h-1 xs:h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]"
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.button>

                    {/* Tooltip for desktop non-lg views */}
                    <div className="absolute top-full mt-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-neutral-950/95 border border-white/20 text-white text-[11px] font-extrabold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none lg:hidden whitespace-nowrap z-50 shadow-2xl backdrop-blur-xl">
                      <span>{label}</span>
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-950 border-t border-l border-white/20 rotate-45" />
                    </div>
                  </div>
                );
              })}

              {/* Global Search Button — Desktop only */}
              {!isMobile && (
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
              )}

              {/* Separator */}
              <div className="w-[1px] h-4 xs:h-5 bg-white/20 mx-0.5 xs:mx-1 shrink-0" />

              {/* Language Switcher */}
              <LanguageSwitcher variant="dock" />

            </motion.nav>
          )}
        </motion.div>

      </header>

      {/* Mobile Floating Search Button — Requirement 3 */}
      <AnimatePresence>
        {isMobile && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileTap={{ scale: 0.9 }}
            onClick={onOpenSearch}
            className="fixed bottom-5 right-4 z-[90] sm:hidden w-12 h-12 rounded-full bg-neutral-950/90 border border-sky-500/40 text-sky-400 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(56,189,248,0.3)] backdrop-blur-xl flex items-center justify-center transition-all group"
            title={language === 'bn' ? 'সার্চ করুন' : 'Search'}
          >
            <i className="fa-solid fa-magnifying-glass text-lg group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500" />
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Projects Mobile Bottom Sheet Modal — Requirement 2 */}
      <AnimatePresence>
        {isProjectsBottomSheetOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsProjectsBottomSheetOpen(false)}
              className="fixed inset-0 z-[110] bg-black/75 backdrop-blur-md"
            />

            {/* Bottom Sheet Panel */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              className="fixed bottom-0 left-0 right-0 z-[120] p-5 pb-8 bg-neutral-950/95 border-t border-white/20 rounded-t-3xl shadow-[0_-15px_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl max-w-lg mx-auto"
            >
              {/* Handle Bar */}
              <div className="w-12 h-1.5 bg-white/30 rounded-full mx-auto mb-5" />

              {/* Sheet Header */}
              <div className="flex items-center justify-between mb-5 px-1">
                <div>
                  <h3 className="text-lg font-black text-white flex items-center gap-2">
                    <i className="fa-solid fa-folder-open text-sky-400" />
                    <span>{language === 'bn' ? 'প্রজেক্ট বিভাগ নির্বাচন করুন' : 'Select Project Category'}</span>
                  </h3>
                  <p className="text-xs text-neutral-400 font-medium mt-0.5">
                    {language === 'bn' ? 'আপনার পছন্দের প্রজেক্ট টাইপে যান' : 'Navigate to your desired projects section'}
                  </p>
                </div>
                <button
                  onClick={() => setIsProjectsBottomSheetOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Options Grid */}
              <div className="flex flex-col gap-3">
                {/* Design Projects */}
                <button
                  onClick={() => {
                    setIsProjectsBottomSheetOpen(false);
                    scrollToSection('portfolio');
                  }}
                  className="w-full p-4 rounded-2xl bg-gradient-to-r from-sky-950/60 to-blue-950/40 hover:from-sky-900/80 hover:to-blue-900/60 border border-sky-500/30 flex items-center justify-between group transition-all text-left shadow-lg"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                      <Palette className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-white group-hover:text-sky-300 transition-colors">
                        {t.nav.designProjects}
                      </h4>
                      <p className="text-xs text-neutral-400">
                        {language === 'bn' ? 'নাটক পোস্টার, থাম্বনেল ও গ্রাফিক্স' : 'Poster, thumbnail & graphic artworks'}
                      </p>
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-right text-xs text-sky-400 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Coding Projects */}
                <button
                  onClick={() => {
                    setIsProjectsBottomSheetOpen(false);
                    scrollToSection('ecosystem');
                  }}
                  className="w-full p-4 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-purple-950/40 hover:from-indigo-900/80 hover:to-purple-900/60 border border-indigo-500/30 flex items-center justify-between group transition-all text-left shadow-lg"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                        {t.nav.codingProjects}
                      </h4>
                      <p className="text-xs text-neutral-400">
                        {language === 'bn' ? 'ওয়েব প্ল্যাটফর্ম ও প্রজেক্ট ইকোসিস্টেম' : 'Web apps, themes & coding projects'}
                      </p>
                    </div>
                  </div>
                  <i className="fa-solid fa-arrow-right text-xs text-indigo-400 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
