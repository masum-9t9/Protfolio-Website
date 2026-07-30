import React from 'react';
import { ArrowUp, Facebook, Youtube, Send, PhoneCall } from 'lucide-react';
import { SocialLinks } from '../types';

interface FooterProps {
  socials: SocialLinks;
}

export const Footer: React.FC<FooterProps> = ({ socials }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-neutral-950 border-t border-neutral-800/80 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Brand Col */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-2">

             <div className="w-8 h-8 rounded-lg bg-[#3A86FF] text-white flex items-center justify-center font-bold text-xs overflow-hidden">
                 <img 
                  src="https://postimg.cc" 
                  alt="Profile pic" 
                  className="w-full h-full object-cover"
                  />
             </div>


              <span className="text-xl font-bold text-white tracking-tight">Masum 9T9</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-md">
              প্রফেশনাল গ্রাফিক্স ডিজাইনার, ওয়েব ডেভেলপার ও কন্টেন্ট ক্রিয়েটর। পোস্টার ডিজাইন, হাই-সিটিআর ইউটিউব থাম্বনেল, এডুকেশন ভিজ্যুয়াল এবং কাস্টম থিম ডিজাইনে বিশেষজ্ঞ।
            </p>
            <p className="text-xs text-[#3A86FF] font-medium">
              ফোন: 01303-623838 | ইমেইল: masum.9t9.gd@gmail.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">দ্রুত নেভিগেশন</h4>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-400">
              <li><a href="#hero" className="hover:text-white transition-colors">হোম</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">আমার সম্পর্কে</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">দক্ষতা</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">সেবা</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">প্রজেক্ট</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">ইকোসিস্টেম</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">যোগাযোগ</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Masum 9T9. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href={socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#3A86FF] transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href={socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors"><Youtube className="w-4 h-4" /></a>
            <a href={socials.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Send className="w-4 h-4" /></a>
            <a href={socials.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors"><PhoneCall className="w-4 h-4" /></a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-all active:scale-95"
            title="উপরে যান"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
