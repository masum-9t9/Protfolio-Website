import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Layers, Link2, Globe, Smartphone, Sparkles } from 'lucide-react';
import { FeaturedEcosystemItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

interface FeaturedEcosystemProps {
  items?: FeaturedEcosystemItem[];
}

interface EcosystemCardProps {
  item: FeaturedEcosystemItem;
  isReversed?: boolean;
}

const EcosystemCard: React.FC<EcosystemCardProps> = ({ item, isReversed = false }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  const gallery = item.galleryImages && item.galleryImages.length > 0
    ? item.galleryImages
    : ["https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200"];

  const [activeImage, setActiveImage] = useState<string>(gallery[0]);

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
        
        {/* Gallery Screenshot Viewer Box */}
        <div className={`lg:col-span-6 space-y-4 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="relative bg-neutral-950 border border-neutral-800/90 rounded-2xl p-2.5 shadow-2xl overflow-hidden group/frame">
            {/* Top Browser Header Mockup Dots */}
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-neutral-800/80 mb-2 bg-neutral-900/50 rounded-lg">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <div className="ml-2 text-[10px] font-mono text-neutral-500 truncate max-w-[200px]">
                {item.mainUrl || 'https://codervai.com'}
              </div>
            </div>

            {/* Main Screenshot Image */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-900">
              <motion.img
                key={activeImage}
                initial={{ opacity: 0.8, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={activeImage}
                alt={item.title}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200";
                }}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </div>
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
          {/* Header Row: Badge & External Link */}
          <div className="flex items-center justify-between gap-2">
            <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-extrabold tracking-wider text-[#3A86FF] uppercase">
              {item.badge}
            </span>

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

export const FeaturedEcosystem: React.FC<FeaturedEcosystemProps> = ({ items }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  if (!items || items.length === 0) return null;

  return (
    <section id="ecosystem" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-neutral-950/60 border-t border-neutral-900">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3A86FF]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-[#3A86FF] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.ecosystem.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.ecosystem.title}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            {t.ecosystem.subtitle}
          </p>
          <div className="w-16 h-1 bg-[#3A86FF] mx-auto rounded-full mt-4 shadow-[0_0_10px_#3A86FF]" />
        </div>

        {/* Ecosystem Platform Cards */}
        <div className="space-y-10">
          {items.map((item, index) => (
            <EcosystemCard key={item.id} item={item} isReversed={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};
