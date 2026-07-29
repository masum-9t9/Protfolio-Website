import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Home,
  User,
  Wrench,
  Briefcase,
  FolderGit2,
  Globe as GlobeIcon,
  Award,
  History,
  MessageSquareQuote,
  Mail,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavItem {
  id: keyof typeof UI_TRANSLATIONS.bn.nav;
  labelKey: keyof typeof UI_TRANSLATIONS.bn.nav;
  icon: React.FC<{ className?: string }>;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', labelKey: 'hero', icon: Home, href: '#hero' },
  { id: 'about', labelKey: 'about', icon: User, href: '#about' },
  { id: 'skills', labelKey: 'skills', icon: Wrench, href: '#skills' },
  { id: 'services', labelKey: 'services', icon: Briefcase, href: '#services' },
  { id: 'portfolio', labelKey: 'portfolio', icon: FolderGit2, href: '#portfolio' },
  { id: 'ecosystem', labelKey: 'ecosystem', icon: GlobeIcon, href: '#ecosystem' },
  { id: 'experience', labelKey: 'experience', icon: History, href: '#experience' },
  { id: 'testimonials', labelKey: 'testimonials', icon: MessageSquareQuote, href: '#testimonials' },
  { id: 'contact', labelKey: 'contact', icon: Mail, href: '#contact' },
];

export const NavigationDock: React.FC = () => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <header className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
      <motion.nav
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-neutral-950/85 backdrop-blur-xl border border-neutral-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const isHovered = hoveredId === item.id;
          const label = t.nav[item.labelKey] || item.id;

          return (
            <div key={item.id} className="relative group">
              <a
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#3A86FF] text-white shadow-[0_0_15px_rgba(58,134,255,0.5)] scale-110'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900/80'
                }`}
                aria-label={label}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />

                {isActive && (
                  <motion.div
                    layoutId="activeDockIndicator"
                    className="absolute -bottom-1 w-1.5 h-1.5 bg-white rounded-full shadow-sm"
                  />
                )}
              </a>

              <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-neutral-900/95 border border-neutral-800 text-white text-[11px] font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-xl backdrop-blur-md">
                {label}
              </div>
            </div>
          );
        })}

        <div className="w-[1px] h-5 bg-white/20 mx-1 shrink-0" />

        <LanguageSwitcher variant="dock" />
      </motion.nav>
    </header>
  );
};