import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Home,
  User,
  Wrench,
  Briefcase,
  FolderKanban,
  Globe2,
  History,
  MessageSquareQuote,
  Mail,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavItem {
  id: keyof typeof UI_TRANSLATIONS.bn.nav;
  href: string;
  icon: React.ElementType;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', href: '#hero', icon: Home },
  { id: 'about', href: '#about', icon: User },
  { id: 'skills', href: '#skills', icon: Wrench },
  { id: 'services', href: '#services', icon: Briefcase },
  { id: 'experience', href: '#experience', icon: History },
  { id: 'portfolio', href: '#portfolio', icon: FolderKanban },
  { id: 'ecosystem', href: '#ecosystem', icon: Globe2 },
  { id: 'testimonials', href: '#testimonials', icon: MessageSquareQuote },
  { id: 'contact', href: '#contact', icon: Mail },
];

export const NavigationDock: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      const offsetTop = elem.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header className="fixed bottom-6 left-0 right-0 z-50 flex justify-center items-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 25 }}
        className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-full bg-neutral-900/80 border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] ring-1 ring-white/5 max-w-[95vw] overflow-x-auto no-scrollbar scroll-smooth"
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const sectionId = item.href.substring(1);
          const isActive = activeSection === sectionId;
          const label = t.nav[item.id] || item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="relative group shrink-0"
              aria-label={label}
            >
              <motion.div
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-[#3A86FF] text-white shadow-[0_0_20px_rgba(58,134,255,0.6)]'
                    : 'text-neutral-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.2]" />

                {/* Active Indicator Dot */}
                {isActive && (
                  <motion.span
                    layoutId="activeDockDot"
                    className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.div>

              {/* Floating Tooltip */}
              <div className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-neutral-900/95 border border-white/10 text-white text-[11px] font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-50 shadow-xl backdrop-blur-md">
                {label}
              </div>
            </a>
          );
        })}

        {/* Vertical Separator */}
        <div className="w-[1px] h-5 bg-white/20 mx-1 shrink-0" />

        {/* Language Switcher Component on Apple Dock */}
        <LanguageSwitcher variant="dock" />

      </motion.nav>
    </header>
  );
};