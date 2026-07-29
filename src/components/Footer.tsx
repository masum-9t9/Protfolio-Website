import React from 'react';
import { ArrowUp, Facebook, Youtube, Send, MessageSquare, Heart, Sparkles, Mail, Phone, ExternalLink } from 'lucide-react';
import { SocialLinks } from '../types';

interface FooterProps {
  socials: SocialLinks;
}

export const Footer: React.FC<FooterProps> = ({ socials }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#090D16] via-neutral-950 to-black border-t border-neutral-800/80 pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#3A86FF]/5 blur-3xl pointer-events-none rounded-full" />
      
      {/* Subtle Background Watermark Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[120px] sm:text-[180px] font-black tracking-tighter text-neutral-900/20 select-none pointer-events-none whitespace-nowrap z-0">
        MASUM 9T9
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800/80">
          
          {/* Brand & Bio */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#3A86FF] to-indigo-500 text-white flex items-center justify-center font-black text-sm shadow-lg shadow-[#3A86FF]/20 border border-white/10">
                9T9
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight block">মাসুম ৯টি৯ (Masum 9T9)</span>
                <span className="text-[11px] text-[#3A86FF] font-medium flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  নতুন প্রজেক্টের জন্য এভেলেবল
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-md">
              প্রফেশনাল গ্রাফিক্স ডিজাইনার ও কন্টেন্ট ক্রিয়েটর। পোস্টার ডিজাইন, হাই-সিটিআর ইউটিউব থাম্বনেল, এডুকেশন ভিজ্যুয়াল এবং কাস্টম থিম ডিজাইনে বিশেষজ্ঞ।
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a 
                href={`mailto:masum.9t9.gd@gmail.com`} 
                className="px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 hover:border-[#3A86FF]/40 text-neutral-300 hover:text-white text-xs font-medium flex items-center gap-2 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#3A86FF]" />
                <span>masum.9t9.gd@gmail.com</span>
              </a>
              <a 
                href={`tel:01303623838`} 
                className="px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 hover:border-emerald-500/40 text-neutral-300 hover:text-white text-xs font-medium flex items-center gap-2 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>01303-623838</span>
              </a>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="md:col-span-6 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#3A86FF]" />
              <span>দ্রুত নেভিগেশন</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-neutral-400">
              <a href="#hero" className="p-2 rounded-lg bg-neutral-900/40 border border-neutral-800/60 hover:bg-neutral-800/60 hover:text-white transition-all">🏠 হোম</a>
              <a href="#about" className="p-2 rounded-lg bg-neutral-900/40 border border-neutral-800/60 hover:bg-neutral-800/60 hover:text-white transition-all">👨‍💻 আমার সম্পর্কে</a>
              <a href="#skills" className="p-2 rounded-lg bg-neutral-900/40 border border-neutral-800/60 hover:bg-neutral-800/60 hover:text-white transition-all">🎨 দক্ষতা</a>
              <a href="#services" className="p-2 rounded-lg bg-neutral-900/40 border border-neutral-800/60 hover:bg-neutral-800/60 hover:text-white transition-all">⚡ সেবা</a>
              <a href="#portfolio" className="p-2 rounded-lg bg-neutral-900/40 border border-neutral-800/60 hover:bg-neutral-800/60 hover:text-white transition-all">🖼️ প্রজেক্ট</a>
              <a href="#ecosystem" className="p-2 rounded-lg bg-neutral-900/40 border border-neutral-800/60 hover:bg-neutral-800/60 hover:text-white transition-all">🌐 ইকোসিস্টেম</a>
              <a href="#contact" className="p-2 rounded-lg bg-neutral-900/40 border border-neutral-800/60 hover:bg-neutral-800/60 hover:text-white transition-all col-span-2 sm:col-span-1">📩 যোগাযোগ</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar (Modernized) */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-400">
          
          {/* Copyright Info */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} <strong className="text-white font-semibold">Masum 9T9</strong>. সর্বস্বত্ব সংরক্ষিত।</span>
            <span className="hidden sm:inline text-neutral-700">•</span>
            <span className="flex items-center gap-1 text-neutral-500">
              crafted with <Heart className="w-3 h-3 text-rose-500 fill-rose-500 animate-pulse" /> for Design Excellence
            </span>
          </div>

          {/* Social Media Pills */}
          <div className="flex items-center gap-2.5">
            <a 
              href={socials.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-neutral-400 hover:text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2]/40 transition-all hover:scale-105 active:scale-95 group relative"
              title="ফেসবুক প্রোফাইল"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a 
              href={socials.youtube} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-neutral-400 hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/40 transition-all hover:scale-105 active:scale-95 group relative"
              title="ইউটিউব চ্যানেল"
            >
              <Youtube className="w-4 h-4" />
            </a>

            <a 
              href={socials.telegram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-neutral-400 hover:text-sky-400 hover:bg-sky-500/10 hover:border-sky-500/40 transition-all hover:scale-105 active:scale-95 group relative"
              title="টেলিগ্রাম চ্যানেল"
            >
              <Send className="w-4 h-4" />
            </a>

            <a 
              href={socials.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-neutral-400 hover:text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/40 transition-all hover:scale-105 active:scale-95 group relative"
              title="হোয়াটসঅ্যাপে মেসেজ দিন"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 hover:border-[#3A86FF] text-neutral-300 hover:text-white transition-all shadow-lg hover:shadow-[#3A86FF]/20 active:scale-95 hover:-translate-y-0.5"
            title="উপরে যান"
          >
            <span className="text-xs font-semibold">উপরে যান</span>
            <div className="w-6 h-6 rounded-lg bg-neutral-800 group-hover:bg-[#3A86FF] text-neutral-400 group-hover:text-white flex items-center justify-center transition-colors">
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </div>
          </button>

        </div>

      </div>
    </footer>
  );
};
