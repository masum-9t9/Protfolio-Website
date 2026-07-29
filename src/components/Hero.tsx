import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, MessageCircle, Sparkles, Facebook, Youtube, Send, PhoneCall, Github } from 'lucide-react';
import { HeroData, SocialLinks } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

interface HeroProps {
  data: HeroData;
  socials: SocialLinks;
}

export const Hero: React.FC<HeroProps> = ({ data, socials }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % data.rotatingRoles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [data.rotatingRoles]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Subtle Lines & Ambient Geometry (No Glows) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(58,134,255,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 rounded-full border border-white/5 pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Info & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium">{data.statusBadge}</span>
          </motion.div>

          {/* Greeting & Name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-400 text-lg sm:text-xl font-normal mb-2"
          >
            {data.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-4"
          >
            {data.name}
          </motion.h1>

          {/* Rotating Role Text */}
          <div className="h-10 sm:h-12 overflow-hidden mb-6">
            <motion.div
              key={currentRoleIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#3A86FF] flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-[#3A86FF]" />
              <span>{data.rotatingRoles[currentRoleIndex]}</span>
            </motion.div>
          </div>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8"
          >
            {data.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <a
              href="#portfolio"
              className="px-7 py-3.5 rounded-xl bg-[#3A86FF] hover:bg-[#2b75ed] text-white font-semibold text-sm transition-all duration-200 flex items-center gap-2 shadow-lg shadow-black/40 group active:scale-95"
            >
              <span>{data.ctaPrimaryText}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 hover:border-neutral-700 font-semibold text-sm transition-all duration-200 flex items-center gap-2 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-[#3A86FF]" />
              <span>{data.ctaSecondaryText}</span>
            </a>
          </motion.div>

          {/* Social Icons Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3 pt-4 border-t border-neutral-800/80 w-full max-w-xl"
          >
            <span className="text-xs text-neutral-400 font-medium uppercase tracking-wider mr-2">
              {language === 'bn' ? 'সোশ্যাল মিডিয়া:' : 'Social Links:'}
            </span>
            
            <a
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-[#3A86FF] hover:border-[#3A86FF]/40 transition-all duration-200"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200"
              title="WhatsApp"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <a
              href={socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-sky-400 hover:border-sky-500/40 transition-all duration-200"
              title="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>

            <a
              href={socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-red-500 hover:border-red-500/40 transition-all duration-200"
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <a
              href={socials.behance || "https://www.behance.net/masum_9t9_official"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-[#0535FF] hover:border-[#0535FF]/40 transition-all duration-200"
              title="Behance Portfolio"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426h-3.033c-.085-.814-.808-1.571-2.177-1.571-1.394 0-2.383.967-2.383 2.68 0 1.776.97 2.755 2.456 2.755 1.341 0 2.18-.84 2.298-1.695h2.663zm-14.726-8.6h-5v3.13h4.63c.63 0 1.25-.23 1.25-.97 0-.79-.58-1.16-1.14-1.16zm.4 4.88h-5.4v3.72h5.4c.73 0 1.48-.28 1.48-1.19 0-.96-.75-1.28-1.48-1.28zm-8.4-7.28h8.841c2.147 0 3.823.824 3.823 2.784 0 1.15-.688 2.037-1.802 2.522 1.483.435 2.338 1.547 2.338 3.037 0 2.261-1.921 3.257-4.148 3.257h-9.052v-11.6zm0 0"/>
              </svg>
            </a>

            <a
              href={socials.fiverr || "https://www.fiverr.com/sellers/masum9t9/"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-[#1DBF73] hover:border-[#1DBF73]/40 transition-all duration-200"
              title="Fiverr Profile"
            >
              <span className="font-extrabold text-xs tracking-tighter leading-none text-[#1DBF73]">
                fi
              </span>
            </a>

            <a
              href={socials.github || "https://github.com/masum-9t9/"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white/40 transition-all duration-200"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </motion.div>

        </div>

        {/* Right Column: Profile Image Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md aspect-square"
          >
            {/* Outer Subtle Border Frame */}
            <div className="absolute -inset-1.5 rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

            {/* Profile Image Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden glass-card p-2 border border-neutral-800 shadow-2xl bg-neutral-900">
              <img
                src={data.profileImage || "https://i.postimg.cc/FzTMvwBb/Profile-pic.png"}
                alt={data.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://i.postimg.cc/FzTMvwBb/Profile-pic.png";
                }}
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Bottom Badge overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div className="overflow-hidden pr-2">
                  <p className="text-xs text-neutral-400 font-medium truncate">
                    {language === 'bn' ? 'অফিশিয়াল পোর্টফোলিও' : 'Official Portfolio'}
                  </p>
                  <p className="text-sm text-white font-bold truncate">{data.name} • {data.role}</p>
                </div>
                {data.logoImage ? (
                  <img 
                    src={data.logoImage} 
                    alt="Logo" 
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextElementSibling) {
                        (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                      }
                    }}
                    className="w-8 h-8 shrink-0 rounded-full object-cover border border-white/10" 
                  />
                ) : null}
                <div 
                  className="w-8 h-8 shrink-0 rounded-full bg-[#3A86FF]/20 text-[#3A86FF] flex items-center justify-center font-bold text-xs"
                  style={{ display: data.logoImage ? 'none' : 'flex' }}
                >
                  9T9
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
