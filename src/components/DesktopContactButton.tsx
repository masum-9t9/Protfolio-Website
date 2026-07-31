import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Sparkles, Send, X, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DesktopContactButtonProps {
  whatsappNumber?: string;
  facebookUrl?: string;
}

const containerVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 420,
      damping: 26,
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.88,
    y: 12,
    transition: {
      duration: 0.18,
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 14, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 480, damping: 28 },
  },
  exit: {
    opacity: 0,
    x: 10,
    scale: 0.95,
    transition: { duration: 0.12 },
  },
};

export const DesktopContactButton: React.FC<DesktopContactButtonProps> = ({
  whatsappNumber = '8801303623838',
  facebookUrl = 'https://www.facebook.com/masum.9t9.official',
}) => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const cleanWhatsapp = whatsappNumber.replace(/[^0-9]/g, '');

  // Close on tap outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const scrollToContact = () => {
    setIsOpen(false);
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="hidden sm:flex fixed bottom-6 right-6 z-[90] flex-col items-end"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
            className="mb-3 p-3 rounded-2xl bg-neutral-950/95 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_25px_rgba(56,189,248,0.25)] backdrop-blur-2xl flex flex-col gap-2 min-w-[230px]"
          >
            {/* Header label */}
            <div className="flex items-center justify-between px-2 pt-1 pb-2 border-b border-white/10 text-xs font-bold text-neutral-300">
              <span className="flex items-center gap-1.5 text-sky-400">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>{language === 'bn' ? 'দ্রুত যোগাযোগ' : 'Quick Actions'}</span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Actions Container */}
            <div className="flex flex-col gap-1.5">
              {/* WhatsApp */}
              <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: -3 }}
                whileTap={{ scale: 0.98 }}
                style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
                href={`https://wa.me/${cleanWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 hover:text-white text-xs font-bold transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <i className="fa-brands fa-whatsapp text-base text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>

              {/* Facebook */}
              <motion.a
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: -3 }}
                whileTap={{ scale: 0.98 }}
                style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-blue-500/15 hover:bg-blue-500/30 border border-blue-500/30 text-blue-300 hover:text-white text-xs font-bold transition-colors group shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <i className="fa-brands fa-facebook text-base text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>Facebook</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>

              {/* Contact Smooth Scroll */}
              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: -3 }}
                whileTap={{ scale: 0.98 }}
                style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
                onClick={scrollToContact}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-sky-500/15 hover:bg-sky-500/30 border border-sky-500/30 text-sky-300 hover:text-white text-xs font-bold transition-colors group shadow-sm text-left"
              >
                <div className="flex items-center gap-2.5">
                  <Send className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                  <span>{language === 'bn' ? 'মেসেজ পাঠান' : 'Direct Message'}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ willChange: 'transform', backfaceVisibility: 'hidden' }}
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center gap-2.5 px-4 py-3 rounded-full border shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(56,189,248,0.25)] backdrop-blur-2xl transition-all duration-300 group ${
          isOpen
            ? 'bg-sky-600 text-white border-sky-400 ring-2 ring-sky-400/40 shadow-sky-500/30'
            : 'bg-neutral-950/85 hover:bg-neutral-900 border-white/20 text-white hover:border-sky-400'
        }`}
        title={language === 'bn' ? 'যোগাযোগ অপশনস' : 'Contact Shortcuts'}
      >
        <div className="relative flex items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
        </div>

        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-sky-400 group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-black tracking-wide">
            {language === 'bn' ? 'যোগাযোগ' : "Let's Talk"}
          </span>
        </div>

        <i
          className={`fa-solid fa-chevron-${isOpen ? 'down' : 'up'} text-[10px] text-neutral-400 group-hover:text-white transition-transform duration-300`}
        />
      </motion.button>
    </div>
  );
};

