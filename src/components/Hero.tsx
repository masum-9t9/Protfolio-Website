import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, MessageCircle, Sparkles, Facebook, Youtube, Send, PhoneCall, Github, ShieldCheck, Award, Zap } from 'lucide-react';
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

  const roles = data?.rotatingRoles || (data?.role ? [data.role] : ['Graphics Designer']);

  useEffect(() => {
    if (!roles || roles.length === 0) return;
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[radial-gradient(circle_at_25%_40%,#0d1e36_0%,#070b12_70%)]">
      {/* Concentric Orbital Vector Rings (স্ক্রিনশটের মতো নিখুঁতভাবে বাম পাশের আলোর সাথে অ্যালাইন করা) */}
      <div className="absolute top-[45%] left-[-15%] -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none opacity-[0.12] select-none z-0">
        <svg className="w-full h-full" viewBox="0 0 900 900" fill="none" xmlns="http://w3.org">
          <circle cx="450" cy="450" r="180" stroke="#38BDF8" strokeWidth="1" strokeDasharray="6 6" className="animate-spin-slower origin-center" />
          <circle cx="450" cy="450" r="280" stroke="#818CF8" strokeWidth="1" opacity="0.6" />
          <circle cx="450" cy="450" r="390" stroke="#38BDF8" strokeWidth="1" strokeDasharray="12 8" opacity="0.5" />
          <circle cx="450" cy="450" r="440" stroke="#34D399" strokeWidth="1" opacity="0.3" />
          {/* Accent vector nodes on the rings */}
          <circle cx="450" cy="270" r="3.5" fill="#38BDF8" />
          <circle cx="730" cy="450" r="3.5" fill="#818CF8" />
          <circle cx="450" cy="840" r="3.5" fill="#34D399" />
          <circle cx="170" cy="450" r="3" fill="#38BDF8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Text Info & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-xs sm:text-sm text-sky-300 font-medium mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.2)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#10B981]" />
            </span>
            <span className="tracking-wide font-semibold">{data.statusBadge}</span>
          </motion.div>
          
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-400 text-lg sm:text-xl font-medium tracking-wide mb-2 flex items-center gap-2"
          >
            <span>{data.greeting}</span>
            <span className="inline-block animate-bounce">👋</span>
          </motion.p>

          {/* Name Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-4"
          >
            <span className="text-gradient-cyan">{data.name}</span>
          </motion.h1>

          {/* Rotating Role Text */}
          <div className="h-10 sm:h-12 overflow-hidden mb-6">
            <motion.div
              key={currentRoleIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-sky-400 flex items-center gap-2.5"
            >
              <div className="p-1 rounded-lg bg-sky-500/20 border border-sky-400/30">
                <Sparkles className="w-5 h-5 text-sky-400 animate-pulse" />
              </div>
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                {roles[currentRoleIndex] || data?.role || ''}
              </span>
            </motion.div>
          </div>

          {/* Bio Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal"
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
              className="glow-button px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-sm tracking-wide transition-all duration-300 flex items-center gap-2.5 shadow-[0_10px_30px_rgba(56,189,248,0.35)] active:scale-95 group"
            >
              <span>{data.ctaPrimaryText}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-white/15 hover:border-sky-500/40 font-bold text-sm transition-all duration-300 flex items-center gap-2.5 active:scale-95 shadow-lg backdrop-blur-md"
            >
              <MessageCircle className="w-4 h-4 text-sky-400" />
              <span>{data.ctaSecondaryText}</span>
            </a>
          </motion.div>

          {/* Social Links Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3 pt-5 border-t border-white/10 w-full max-w-xl"
          >
            <span className="text-xs text-neutral-400 font-semibold uppercase tracking-wider mr-2">
              {language === 'bn' ? 'সোশ্যাল লিংকসমূহ:' : 'Social Links:'}
            </span>
            
            <a
              href={socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-neutral-900/80 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-sky-400 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all duration-300 shadow-md"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-neutral-900/80 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 shadow-md"
              title="WhatsApp"
            >
              <PhoneCall className="w-4 h-4" />
            </a>

            <a
              href={socials.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-neutral-900/80 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 shadow-md"
              title="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>

            <a
              href={socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-neutral-900/80 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-rose-500 hover:border-rose-500/50 hover:bg-rose-500/10 transition-all duration-300 shadow-md"
              title="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <a
              href={socials.behance || "https://www.behance.net/masum_9t9_official"}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-neutral-900/80 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 shadow-md"
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
              className="w-10 h-10 rounded-xl bg-neutral-900/80 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300 shadow-md"
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
              className="w-10 h-10 rounded-xl bg-neutral-900/80 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-white hover:border-white/40 hover:bg-white/10 transition-all duration-300 shadow-md"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </motion.div>

        </div>

        {/* Right Column: Profile Image Frame with Luxury Glows & Floating Badges */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md aspect-square"
          >
            {/* Ambient Background Glow Behind Avatar */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-sky-500/30 via-indigo-500/20 to-emerald-500/30 blur-3xl opacity-70 animate-pulse pointer-events-none" />

            {/* Profile Image Glass Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card p-2.5 border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] bg-neutral-900/90 group">
              <img
                src={data.profileImage || "https://i.postimg.cc/FzTMvwBb/Profile-pic.png"}
                alt={data.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://i.postimg.cc/FzTMvwBb/Profile-pic.png";
                }}
                className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
              
              {/* Top Floating Badge */}
              <div className="absolute top-5 right-5 px-3 py-1.5 rounded-xl bg-neutral-950/80 backdrop-blur-xl border border-white/20 flex items-center gap-2 shadow-2xl">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white tracking-wide">
                  {language === 'bn' ? 'ভেরিফাইড প্রফেশনাল' : 'Verified Professional'}
                </span>
              </div>

              {/* Bottom Badge Overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-neutral-950/85 backdrop-blur-xl border border-white/15 flex items-center justify-between shadow-2xl">
                <div className="overflow-hidden pr-2">
                  <p className="text-[11px] uppercase tracking-wider text-sky-400 font-bold mb-0.5 truncate">
                    {language === 'bn' ? 'অফিশিয়াল পোর্টফোলিও' : 'Official Portfolio'}
                  </p>
                  <p className="text-sm text-white font-extrabold truncate">{data.name} • {data.role}</p>
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
                    className="w-10 h-10 shrink-0 rounded-xl object-cover border border-white/20 shadow-md" 
                  />
                ) : null}
                <div 
             className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 text-white flex items-center justify-center font-black text-xs shadow-md border border-white/20 overflow-hidden"
  style={{ display: data.logoImage ? 'none' : 'flex' }}
>
              <img 
               src="https://i.postimg.cc/gJT7B3XX/Profile-pic.png" 
             alt="Profile pic" 
              className="w-full h-full object-cover" 
            />
            </div>

              </div>

            </div>

            {/* Bottom Floating Stat pill */}
            <div className="absolute -bottom-6 -left-4 px-4 py-3 rounded-2xl bg-neutral-900/90 backdrop-blur-2xl border border-white/15 shadow-2xl flex items-center gap-3 hidden sm:flex">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-medium">{language === 'bn' ? 'অভিজ্ঞতা' : 'Experience'}</p>
                <p className="text-sm font-extrabold text-white">{language === 'bn' ? '৩+ বছর' : '3+ Years'}</p>
              </div>
            </div>

            <div className="absolute -top-6 -left-4 px-4 py-3 rounded-2xl bg-neutral-900/90 backdrop-blur-2xl border border-white/15 shadow-2xl flex items-center gap-3 hidden sm:flex">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-medium">{language === 'bn' ? 'সফল প্রজেক্ট' : 'Projects Done'}</p>
                <p className="text-sm font-extrabold text-white">{language === 'bn' ? '১০০+ সাকসেস' : '100+ Completed'}</p>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

