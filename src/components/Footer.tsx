import React from 'react';
import { ArrowUp, Facebook, Youtube, Send, MessageSquare, Heart, Sparkles, Mail, Phone, Github, ExternalLink, ShieldCheck, Zap, Code2, Palette } from 'lucide-react';
import { SocialLinks } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

interface FooterProps {
  socials: SocialLinks;
}

export const Footer: React.FC<FooterProps> = ({ socials }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const behanceUrl = socials.behance || "https://www.behance.net/masum_9t9_official";
  const fiverrUrl = socials.fiverr || "https://www.fiverr.com/sellers/masum9t9/";

  return (
    <footer className="relative bg-[#040711] border-t border-white/10 pt-20 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
      
      {/* Decorative Vector Light Rays (Static) */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Call To Action Vector Card */}
        <div className="relative mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-sky-950/60 via-neutral-900/80 to-indigo-950/60 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(56,189,248,0.1)] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Vector corner ornament */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-500/15 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-3 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-black uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              <span>{language === 'bn' ? 'নতুন প্রজেক্ট বা ক্লায়েন্ট ডিল?' : 'Let\'s Create Something Iconic'}</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {language === 'bn' ? 'আপনার ব্র্যান্ড ও ওয়েবসাইটকে প্রফেশনাল লেভেলে নিয়ে যান' : 'Ready to Elevate Your Brand & Digital Web Product?'}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl font-normal">
              {language === 'bn'
                ? 'গ্রাফিক ডিজাইন, ইউটিউব থাম্বনেইল, ব্র্যান্ডিং কিংবা আধুনিক ফুল-স্ট্যাক ওয়েবসাইট তৈরি করতে আজই সরাসরি যোগাযোগ করুন।'
                : 'Available for freelance graphic design projects, YouTube thumbnails, logo branding, and full-stack web applications.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 relative z-10 shrink-0">
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-black text-xs sm:text-sm shadow-xl shadow-sky-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 border border-white/20"
            >
              <Sparkles className="w-4 h-4 text-sky-200" />
              <span>{language === 'bn' ? 'মেসেজ পাঠান' : 'Start a Project'}</span>
            </a>

            <a
              href={`https://wa.me/${socials.whatsapp ? socials.whatsapp.replace(/[^0-9]/g, '') : '8801303623838'}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-400/40 text-emerald-300 hover:text-white font-bold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 4-Column Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Profile (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-400 via-blue-600 to-indigo-600 flex items-center justify-center shadow-xl shadow-sky-500/30 border border-white/20 p-2 shrink-0">
              <img 
                  src="https://i.postimg.cc/gJT7B3XX/Profile-pic.png" 
                  alt="Logo" 
                  className="w-full h-full object-contain" 
               />
             </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight block">Masum 9T9</span>
                <span className="text-xs text-sky-400 font-bold flex items-center gap-2 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Graphics Designer • Web Developer • Content Creator</span>
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed font-normal pr-4">
              {t.footer.brandBio}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <div className="px-3 py-1.5 rounded-xl bg-neutral-900/90 border border-white/10 text-neutral-300 text-[11px] font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                <span>{t.footer.availableForProjects}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Design Services (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-sky-400 uppercase tracking-widest flex items-center gap-2">
              <Palette className="w-3.5 h-3.5 text-sky-400" />
              <span>{language === 'bn' ? 'ডিজাইন এক্সপার্টিজ' : 'Design Services'}</span>
            </h4>
            <ul className="space-y-2 text-xs font-medium text-neutral-300">
              <li className="flex items-center gap-2 hover:text-sky-300 transition-colors">
                <span className="text-sky-400 font-bold">•</span>
                <span>YouTube Thumbnails (Pixellab/PS)</span>
              </li>
              <li className="flex items-center gap-2 hover:text-sky-300 transition-colors">
                <span className="text-sky-400 font-bold">•</span>
                <span>Social Media Posters & Banners</span>
              </li>
              <li className="flex items-center gap-2 hover:text-sky-300 transition-colors">
                <span className="text-sky-400 font-bold">•</span>
                <span>Logo & Brand Identity Design</span>
              </li>
              <li className="flex items-center gap-2 hover:text-sky-300 transition-colors">
                <span className="text-sky-400 font-bold">•</span>
                <span>Manipulations & Photo Editing</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech & Engineering (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black text-indigo-400 uppercase tracking-widest flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>{language === 'bn' ? 'প্রগ্রামিং ও ওয়েব' : 'Tech Stack & Engineering'}</span>
            </h4>
            <ul className="space-y-2 text-xs font-medium text-neutral-300">
              <li className="flex items-center gap-2 hover:text-indigo-300 transition-colors">
                <span className="text-indigo-400 font-bold">•</span>
                <span>React 18 & Vite Web Apps</span>
              </li>
              <li className="flex items-center gap-2 hover:text-indigo-300 transition-colors">
                <span className="text-indigo-400 font-bold">•</span>
                <span>TypeScript & Express API Routes</span>
              </li>
              <li className="flex items-center gap-2 hover:text-indigo-300 transition-colors">
                <span className="text-indigo-400 font-bold">•</span>
                <span>Tailwind CSS Modern Cyber UI</span>
              </li>
              <li className="flex items-center gap-2 hover:text-indigo-300 transition-colors">
                <span className="text-indigo-400 font-bold">•</span>
                <span>Full-Stack App Architecture</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Navigation & Contact (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'bn' ? 'কুইক লিংক' : 'Quick Nav'}</span>
            </h4>
            <div className="flex flex-col gap-1.5 text-xs font-semibold text-neutral-300">
              <a href="#hero" className="hover:text-white hover:translate-x-1 transition-all">🏠 {t.nav.home}</a>
              <a href="#about" className="hover:text-white hover:translate-x-1 transition-all">👨‍💻 {t.nav.about}</a>
              <a href="#portfolio" className="hover:text-white hover:translate-x-1 transition-all">🎨 {t.nav.designProjects}</a>
              <a href="#ecosystem" className="hover:text-white hover:translate-x-1 transition-all">💻 {t.nav.codingProjects}</a>
              <a href="#services" className="hover:text-white hover:translate-x-1 transition-all">⚡ {t.nav.services}</a>
              <a href="#contact" className="hover:text-white hover:translate-x-1 transition-all">📩 {t.nav.contact}</a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Social Icons Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-300">
          
          {/* Copyright Info */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} <strong className="text-white font-black">Masum 9T9</strong>. {t.footer.rightsReserved}</span>
            <span className="hidden sm:inline text-neutral-600">•</span>
            <span className="flex items-center gap-1.5 text-neutral-400">
              crafted with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" /> for Design & Code Excellence
            </span>
          </div>

          {/* Social Media Pills & Scroll to top */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <a 
              href={socials.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-neutral-900/90 border border-white/10 text-neutral-300 hover:text-[#1877F2] hover:bg-[#1877F2]/15 hover:border-[#1877F2]/40 transition-all hover:scale-110 active:scale-95 group relative shadow-md"
              title="Facebook Profile"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a 
              href={socials.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-neutral-900/90 border border-white/10 text-neutral-300 hover:text-red-500 hover:bg-red-500/15 hover:border-red-500/40 transition-all hover:scale-110 active:scale-95 group relative shadow-md"
              title="YouTube Channel"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <a 
              href={socials.telegram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-neutral-900/90 border border-white/10 text-neutral-300 hover:text-sky-400 hover:bg-sky-500/15 hover:border-sky-500/40 transition-all hover:scale-110 active:scale-95 group relative shadow-md"
              title="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>

            <a 
              href={socials.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-neutral-900/90 border border-white/10 text-neutral-300 hover:text-emerald-400 hover:bg-emerald-500/15 hover:border-emerald-500/40 transition-all hover:scale-110 active:scale-95 group relative shadow-md"
              title="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a 
              href={behanceUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-neutral-900/90 border border-white/10 text-neutral-300 hover:text-[#0535FF] hover:bg-[#0535FF]/15 hover:border-[#0535FF]/40 transition-all hover:scale-110 active:scale-95 group relative shadow-md"
              title="Behance Portfolio"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426h-3.033c-.085-.814-.808-1.571-2.177-1.571-1.394 0-2.383.967-2.383 2.68 0 1.776.97 2.755 2.456 2.755 1.341 0 2.18-.84 2.298-1.695h2.663zm-14.726-8.6h-5v3.13h4.63c.63 0 1.25-.23 1.25-.97 0-.79-.58-1.16-1.14-1.16zm.4 4.88h-5.4v3.72h5.4c.73 0 1.48-.28 1.48-1.19 0-.96-.75-1.28-1.48-1.28zm-8.4-7.28h8.841c2.147 0 3.823.824 3.823 2.784 0 1.15-.688 2.037-1.802 2.522 1.483.435 2.338 1.547 2.338 3.037 0 2.261-1.921 3.257-4.148 3.257h-9.052v-11.6zm0 0"/>
              </svg>
            </a>

            <a 
              href={fiverrUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-neutral-900/90 border border-white/10 text-neutral-300 hover:text-[#1DBF73] hover:bg-[#1DBF73]/15 hover:border-[#1DBF73]/40 transition-all hover:scale-110 active:scale-95 group relative flex items-center justify-center shadow-md"
              title="Fiverr Profile"
            >
              <span className="font-extrabold text-xs tracking-tighter leading-none text-[#1DBF73] group-hover:brightness-125">
                fi
              </span>
            </a>

            <a 
              href={socials.github || "https://github.com/masum-9t9/"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all hover:scale-105 active:scale-95 group relative flex items-center justify-center"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-sky-500/10 border border-sky-400/30 hover:border-sky-400 text-sky-300 hover:text-white transition-all shadow-lg active:scale-95 hover:-translate-y-0.5 ml-2"
              title={t.footer.scrollTop}
            >
              <span className="text-xs font-bold">{t.footer.scrollTop}</span>
              <div className="w-5 h-5 rounded-lg bg-sky-500/20 group-hover:bg-sky-500 text-sky-300 group-hover:text-white flex items-center justify-center transition-colors">
                <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
              </div>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
