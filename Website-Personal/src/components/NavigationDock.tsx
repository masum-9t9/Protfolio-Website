import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Home,
  User,
  Cpu,
  Briefcase,
  FolderKanban,
  History,
  MessageSquareQuote,
  Mail
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  faIconClass: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'হোম', icon: Home, faIconClass: 'fa-solid fa-house' },
  { id: 'about', label: 'আমার সম্পর্কে', icon: User, faIconClass: 'fa-solid fa-user' },
  { id: 'skills', label: 'দক্ষতা', icon: Cpu, faIconClass: 'fa-solid fa-code' },
  { id: 'services', label: 'সেবা', icon: Briefcase, faIconClass: 'fa-solid fa-briefcase' },
  { id: 'portfolio', label: 'প্রজেক্ট', icon: FolderKanban, faIconClass: 'fa-solid fa-diagram-project' },
  { id: 'experience', label: 'অভিজ্ঞতা', icon: History, faIconClass: 'fa-solid fa-clock-rotate-left' },
  { id: 'testimonials', label: 'মতামত', icon: MessageSquareQuote, faIconClass: 'fa-solid fa-comment-dots' },
  { id: 'contact', label: 'যোগাযোগ', icon: Mail, faIconClass: 'fa-solid fa-envelope' },
];

export const NavigationDock: React.FC = () => {
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
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center pointer-events-none px-2 sm:px-4">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        onMouseLeave={() => setHoveredIndex(null)}
        className={`pointer-events-auto flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3.5 py-1.5 sm:py-2 rounded-full backdrop-blur-2xl border transition-all duration-300 max-w-full overflow-x-auto no-scrollbar ${
          isScrolled
            ? 'bg-neutral-950/85 border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.15)_inset]'
            : 'bg-neutral-950/70 border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
        }`}
        role="navigation"
        aria-label="Apple Floating Dock Navigation"
      >
        {NAV_ITEMS.map((item, index) => {
          const isActive = activeSection === item.id;
          const scale = getScale(index);

          return (
            <div key={item.id} className="relative group shrink-0">
              <motion.button
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredIndex(index)}
                animate={{
                  scale,
                  y: isActive ? -4 : 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 450,
                  damping: 28,
                  mass: 0.6,
                }}
                className={`relative flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 select-none ${
                  isActive
                    ? 'bg-[#3A86FF] text-white shadow-[0_0_20px_rgba(58,134,255,0.45)] ring-1 ring-white/30'
                    : 'text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {/* Font Awesome Icon */}
                <i
                  className={`${item.faIconClass} text-sm sm:text-base transition-transform duration-200 ${
                    isActive ? 'scale-110' : 'group-hover:scale-110'
                  }`}
                  aria-hidden="true"
                />

                {/* Bengali Label (hidden on small mobile to preserve Apple dock compactness) */}
                <span className="hidden md:inline whitespace-nowrap text-xs font-bold tracking-wide">
                  {item.label}
                </span>

                {/* Active Indicator Light */}
                {isActive && (
                  <motion.span
                    layoutId="activeDockDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>

              {/* Tooltip on Mobile / Small Tablet hover */}
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-neutral-900/95 border border-white/10 text-white text-[11px] font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none md:hidden whitespace-nowrap z-50 shadow-xl backdrop-blur-md">
                {item.label}
              </div>
            </div>
          );
        })}
      </motion.nav>
    </header>
  );
};
