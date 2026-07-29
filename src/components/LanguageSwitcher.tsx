import React from 'react';
import { motion } from 'motion/react';
import { Globe, Languages, Check } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

interface LanguageSwitcherProps {
  variant?: 'dock' | 'pill' | 'dropdown' | 'compact';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'dock',
  className = '',
}) => {
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const [isOpen, setIsOpen] = React.useState(false);

  const isBn = language === 'bn';

  if (variant === 'dropdown') {
    return (
      <div className={`relative inline-block text-left ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-800 hover:border-[#3A86FF]/50 text-xs font-bold text-white transition-all shadow-sm active:scale-95"
          aria-expanded={isOpen}
          aria-label="Select Language"
        >
          <Languages className="w-3.5 h-3.5 text-[#3A86FF]" />
          <span>{isBn ? 'BD বাংলা' : 'US English'}</span>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-36 rounded-xl bg-neutral-900 border border-neutral-800 shadow-2xl py-1 z-50 overflow-hidden backdrop-blur-xl">
            <button
              onClick={() => {
                setLanguage('bn');
                setIsOpen(false);
              }}
              className={`w-full text-left px-3.5 py-2 text-xs font-bold flex items-center justify-between transition-colors ${
                isBn ? 'bg-[#3A86FF]/15 text-[#3A86FF]' : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">🇧🇩 বাংলা</span>
              {isBn && <Check className="w-3.5 h-3.5 text-[#3A86FF]" />}
            </button>
            <button
              onClick={() => {
                setLanguage('en');
                setIsOpen(false);
              }}
              className={`w-full text-left px-3.5 py-2 text-xs font-bold flex items-center justify-between transition-colors ${
                !isBn ? 'bg-[#3A86FF]/15 text-[#3A86FF]' : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">🇺🇸 English</span>
              {!isBn && <Check className="w-3.5 h-3.5 text-[#3A86FF]" />}
            </button>
          </div>
        )}
      </div>
    );
  }

  // 'dock' & 'pill' & 'compact' variants
  return (
    <div className={`relative group shrink-0 ${className}`}>
      <motion.button
        onClick={toggleLanguage}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-extrabold transition-all duration-200 select-none shadow-md ${
          isBn
            ? 'bg-gradient-to-r from-emerald-950/80 via-neutral-900 to-neutral-900 border border-emerald-500/40 text-emerald-300 hover:border-emerald-400 hover:text-white'
            : 'bg-gradient-to-r from-blue-950/80 via-neutral-900 to-neutral-900 border border-[#3A86FF]/40 text-blue-300 hover:border-[#3A86FF] hover:text-white'
        }`}
        aria-label={t.switchLanguageTooltip}
        title={t.switchLanguageTooltip}
      >
        <Globe className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45 ${isBn ? 'text-emerald-400' : 'text-[#3A86FF]'}`} />
        
        <div className="flex items-center gap-1">
          <span className="text-[11px] font-black uppercase tracking-wider">
            {isBn ? '🇧🇩 বাংলা' : '🇺🇸 EN'}
          </span>
        </div>

        {/* Subtle glowing pill indicator */}
        <span
          className={`w-1.5 h-1.5 rounded-full animate-pulse ml-0.5 ${
            isBn ? 'bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'bg-[#3A86FF] shadow-[0_0_8px_#3a86ff]'
          }`}
        />
      </motion.button>

      {/* Floating Tooltip */}
      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-neutral-900/95 border border-white/10 text-white text-[11px] font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap z-50 shadow-xl backdrop-blur-md">
        {t.switchLanguageTooltip}
      </div>
    </div>
  );
};
