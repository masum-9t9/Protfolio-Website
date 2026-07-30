import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Layers, Link2, Globe, Smartphone, Sparkles, Code2, CheckCircle2, Copy, Check, User } from 'lucide-react';
import { FeaturedEcosystemItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';
import { copyToClipboard, getProjectShareUrl } from '../utils/clipboard';

interface FeaturedEcosystemProps {
  items?: FeaturedEcosystemItem[];
  onOpenCreatorProfile?: () => void;
}

interface EcosystemCardProps {
  item: FeaturedEcosystemItem;
  isReversed?: boolean;
  onOpenCreatorProfile?: () => void;
}

const EcosystemCard: React.FC<EcosystemCardProps> = ({ item, isReversed = false, onOpenCreatorProfile }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const [isCopied, setIsCopied] = useState(false);

  const gallery = item.galleryImages && item.galleryImages.length > 0
    ? item.galleryImages
    : ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"];

  const [activeImage, setActiveImage] = useState<string>(gallery[0]);

  const handleCopyLink = async () => {
    const url = getProjectShareUrl(item.id, item.mainUrl);
    const success = await copyToClipboard(url);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="bg-[#10141e] border border-neutral-800/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group hover:border-[#3A86FF]/40 transition-all duration-300"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#3A86FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Gallery Screenshot Viewer Box - Ultra-Realistic 16" MacBook Pro Mockup */}
        <div className={`lg:col-span-6 space-y-4 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
          {/* MacBook Frame Container */}
          <div className="relative mx-auto w-full group/macbook select-none">
            {/* Ambient Backlight Glow behind MacBook */}
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/20 via-sky-500/10 to-indigo-600/20 rounded-3xl blur-2xl opacity-60 group-hover/macbook:opacity-90 transition-opacity duration-500 pointer-events-none" />

            {/* MacBook Display Lid (Anodized Space Black Aluminum Frame) */}
            <div className="relative bg-gradient-to-b from-[#1c1e24] via-[#121318] to-[#0a0b0d] border border-neutral-600/40 rounded-t-[20px] sm:rounded-t-[26px] p-2 sm:p-3 pb-1.5 sm:pb-2.5 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)] ring-1 ring-white/15">
              
              {/* Outer Metallic Bezel Highlight */}
              <div className="absolute inset-[1px] rounded-t-[19px] sm:rounded-t-[25px] border-t border-white/20 pointer-events-none" />

              {/* Liquid Retina XDR Display Box */}
              <div className="relative aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden bg-black border border-neutral-900 shadow-2xl group/screen">
                
                {/* Authentic Display Notch (Top Center) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 w-16 sm:w-20 h-3 sm:h-4 bg-black rounded-b-lg border-x border-b border-neutral-800/60 flex items-center justify-center gap-1.5 shadow-md">
                  {/* Camera Lens */}
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#050b18] ring-1 ring-neutral-700/80 flex items-center justify-center">
                    <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-blue-500/90 blur-[0.2px]" />
                  </div>
                  {/* Privacy LED Dot */}
                  <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-emerald-400/80 shadow-[0_0_4px_#34d399]" />
                </div>

                {/* macOS Menu / Window Bar Mockup with Red, Yellow, Green Control Dots */}
                <div className="absolute top-0 inset-x-0 h-5 sm:h-6 bg-neutral-950/80 backdrop-blur-md z-20 flex items-center justify-between px-2.5 sm:px-3 border-b border-white/5 text-[9px] sm:text-[10px] text-neutral-300 font-medium">
                  {/* macOS 3 Window Control Buttons */}
                  <div className="flex items-center gap-1.5 sm:gap-2 z-30">
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] shadow-[0_0_6px_rgba(255,95,86,0.6)] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                      <span className="text-[7px] text-black/70 opacity-0 hover:opacity-100 font-bold leading-none">×</span>
                    </div>
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] shadow-[0_0_6px_rgba(255,189,46,0.6)] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                      <span className="text-[7px] text-black/70 opacity-0 hover:opacity-100 font-bold leading-none">-</span>
                    </div>
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#27c93f] border border-[#1aab29] shadow-[0_0_6px_rgba(39,201,63,0.6)] flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                      <span className="text-[6px] text-black/70 opacity-0 hover:opacity-100 font-bold leading-none">+</span>
                    </div>
                  </div>

                  {/* Apple & Domain branding */}
                  <div className="flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] text-neutral-400 bg-black/50 px-2 py-0.5 rounded-full border border-white/10">
                    <span className="font-bold text-white/90"></span>
                    <span className="text-neutral-300 truncate max-w-[120px] sm:max-w-[200px]">{item.mainUrl || 'https://www.9t9.pro.bd'}</span>
                  </div>

                  {/* Status indicator */}
                  <div className="flex items-center gap-1.5 text-[8px] sm:text-[9px] text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="hidden sm:inline text-emerald-400 font-semibold">Live</span>
                  </div>
                </div>

                {/* Display Glass Glare Gloss Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] z-20 pointer-events-none" />

                {/* Main Screenshot Image inside Retina Display */}
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0.85, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  src={activeImage}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200";
                  }}
                  className="w-full h-full object-cover object-top pt-5 sm:pt-6 group-hover/screen:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>

              {/* MacBook Pro Logo / Text branding on bottom display chin */}
              <div className="mt-1 flex items-center justify-center">
                <span className="text-[8px] sm:text-[9.5px] font-semibold tracking-[0.28em] uppercase text-neutral-500/80 select-none font-sans">
                  MacBook Pro
                </span>
              </div>
            </div>

            {/* MacBook Unibody Aluminum Base / Hinge Lip */}
            <div className="relative h-3 sm:h-4 bg-gradient-to-b from-[#2a2d36] via-[#1a1b20] to-[#0d0e11] rounded-b-[12px] sm:rounded-b-[16px] border-t border-neutral-500/60 border-b border-black shadow-[0_15px_35px_rgba(0,0,0,0.9)] flex items-center justify-center px-4 sm:px-8">
              {/* Metallic Chamfer Top Highlight */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-300/40 to-transparent" />
              
              {/* Display Opening Thumb Notch cutout in center */}
              <div className="w-14 sm:w-20 h-1.5 sm:h-2 bg-[#0a0b0d] rounded-b-md shadow-inner border-x border-b border-neutral-700/60 flex items-center justify-center">
                <div className="w-8 sm:w-12 h-[1px] bg-white/20" />
              </div>
            </div>

            {/* MacBook Bottom Feet & Shadow */}
            <div className="relative flex justify-between px-8 sm:px-12 -mt-0.5">
              <div className="w-6 sm:w-8 h-1 bg-neutral-900 rounded-b-full shadow-md" />
              <div className="w-6 sm:w-8 h-1 bg-neutral-900 rounded-b-full shadow-md" />
            </div>

            {/* Surface Drop Shadow */}
            <div className="h-3 w-[94%] mx-auto bg-black/90 blur-lg rounded-full -mt-1" />
          </div>

          {/* Thumbnail Preview Strip */}
          {gallery.length > 1 && (
            <div className="flex items-center justify-center gap-3 pt-1">
              {gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative w-20 sm:w-24 aspect-video rounded-xl overflow-hidden border-2 transition-all duration-200 bg-neutral-900 ${
                    activeImage === imgUrl
                      ? 'border-[#3A86FF] ring-2 ring-[#3A86FF]/40 scale-105 shadow-lg'
                      : 'border-neutral-800/80 opacity-60 hover:opacity-100 hover:border-neutral-700'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`Thumbnail ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Details Box */}
        <div className={`lg:col-span-6 space-y-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
          {/* Header Row: Badge, Creator Credits & Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-extrabold tracking-wider text-[#3A86FF] uppercase">
                {item.badge}
              </span>
              {item.designVersion && (
                <span className="px-2.5 py-0.5 rounded-full bg-sky-950/80 border border-sky-400/30 text-[10px] font-black text-sky-300 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-sky-400" />
                  <span>{item.designVersion}</span>
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {/* Copy Link Button */}
              <button
                onClick={handleCopyLink}
                className={`p-2.5 rounded-full border transition-all shadow-md flex items-center justify-center ${
                  isCopied
                    ? 'bg-emerald-950 border-emerald-500 text-emerald-400 scale-105'
                    : 'bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white border-neutral-800'
                }`}
                title={isCopied ? (language === 'bn' ? 'কপি হয়েছে!' : 'Copied!') : (language === 'bn' ? 'প্রজেক্ট লিংক কপি করুন' : 'Copy Project Link')}
              >
                {isCopied ? <Check className="w-4 h-4 text-emerald-400 animate-bounce" /> : <Copy className="w-4 h-4 text-sky-400" />}
              </button>

              {item.mainUrl && (
                <a
                  href={item.mainUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-neutral-900/90 hover:bg-[#3A86FF] text-neutral-300 hover:text-white border border-neutral-800 hover:border-[#3A86FF] transition-all duration-200 shadow-md hover:scale-110"
                  title={t.ecosystem.visitWebsite}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Dual Editable Creator Credit Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              onClick={onOpenCreatorProfile}
              className="px-3 py-1 rounded-xl bg-neutral-950 hover:bg-sky-950/80 border border-neutral-800 hover:border-sky-500/40 text-[11px] font-semibold text-neutral-300 hover:text-white transition-all flex items-center gap-1.5 shadow-sm group"
            >
              <User className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" />
              <span>UI-UX Designer:</span>
              <strong className="text-sky-300 group-hover:underline font-bold">{item.uiuxDesignerName || 'Masum 9T9'}</strong>
            </button>

            <button
              onClick={onOpenCreatorProfile}
              className="px-3 py-1 rounded-xl bg-neutral-950 hover:bg-indigo-950/80 border border-neutral-800 hover:border-indigo-500/40 text-[11px] font-semibold text-neutral-300 hover:text-white transition-all flex items-center gap-1.5 shadow-sm group"
            >
              <Code2 className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform" />
              <span>Developer:</span>
              <strong className="text-indigo-300 group-hover:underline font-bold">{item.developerName || 'Masum 9T9'}</strong>
            </button>
          </div>

          {/* Completion Progress Bar */}
          <div className="p-3 rounded-2xl bg-neutral-950/90 border border-sky-500/25">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-[10px] font-black tracking-wider uppercase text-sky-400 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-sky-400" />
                <span>{language === 'bn' ? 'কমপ্লিশন প্রগ্রেস' : 'Completion Progress'}</span>
              </span>
              <span className="text-xs font-black text-emerald-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{item.completionProgress || 100}%</span>
              </span>
            </div>
            <div className="w-full h-2 bg-neutral-900 rounded-full overflow-hidden p-[1px] border border-white/10 relative">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.completionProgress || 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-emerald-400 shadow-[0_0_10px_rgba(56,189,248,0.6)]"
              />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
            {item.title}
          </h3>

          {/* Key Metrics / Stat Badges */}
          {item.stats && item.stats.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              {item.stats.map((st, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-neutral-950/90 border border-neutral-800/90 rounded-2xl px-4 py-2.5 flex-1 min-w-[120px] max-w-[200px]"
                >
                  <p className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase mb-0.5">
                    {st.label}
                  </p>
                  <p className="text-base sm:text-lg font-black text-white tracking-tight">
                    {st.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="text-neutral-300 text-sm leading-relaxed">
            {item.description}
          </p>

          {/* KEY FEATURES Box */}
          {item.keyFeatures && item.keyFeatures.length > 0 && (
            <div className="bg-neutral-950/70 border border-neutral-800/80 rounded-2xl p-4 sm:p-5 space-y-3">
              <h4 className="text-xs font-bold text-[#3A86FF] uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#3A86FF]" />
                <span>KEY FEATURES</span>
              </h4>

              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                {item.keyFeatures.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 leading-snug">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3A86FF] shrink-0 mt-1.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* LINKS Section */}
          {item.links && item.links.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-extrabold text-neutral-400 uppercase tracking-wider mr-2 flex items-center gap-1">
                <Link2 className="w-3.5 h-3.5 text-[#3A86FF]" />
                <span>LINKS:</span>
              </span>

              {item.links.map((link, lIdx) => (
                <a
                  key={lIdx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-950 hover:bg-[#3A86FF] text-neutral-300 hover:text-white border border-neutral-800 hover:border-[#3A86FF] text-xs font-semibold transition-all duration-200"
                >
                  {link.type === 'android' || link.type === 'playstore' ? (
                    <Smartphone className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white" />
                  ) : (
                    <Globe className="w-3.5 h-3.5 text-[#3A86FF] group-hover:text-white" />
                  )}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          )}

        </div>

      </div>
    </motion.div>
  );
};

export const FeaturedEcosystem: React.FC<FeaturedEcosystemProps> = ({ items, onOpenCreatorProfile }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  if (!items || items.length === 0) return null;

  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#070A12] bg-mesh-pattern border-t border-b border-white/5">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-xs text-sky-400 font-bold mb-4 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.ecosystem.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            <span className="text-gradient-cyan">{t.ecosystem.title}</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-normal max-w-xl mx-auto">
            {t.ecosystem.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Ecosystem Platform Cards */}
        <div className="space-y-10">
          {items.map((item, index) => (
            <EcosystemCard key={item.id} item={item} isReversed={index % 2 !== 0} onOpenCreatorProfile={onOpenCreatorProfile} />
          ))}
        </div>
      </div>
    </section>
  );
};
