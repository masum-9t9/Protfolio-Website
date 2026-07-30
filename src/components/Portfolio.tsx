import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderKanban, ExternalLink, Eye, Github, Info, Trophy, Layers, Code2, Sparkles, CheckCircle2, Copy, Check, Link2 } from 'lucide-react';
import { PortfolioItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';
import { copyToClipboard, getProjectShareUrl } from '../utils/clipboard';

interface PortfolioProps {
  items: PortfolioItem[];
  onSelectProject: (item: PortfolioItem) => void;
}

interface TiltCardProps {
  item: PortfolioItem;
  index: number;
  onSelectProject: (item: PortfolioItem) => void;
}

const TiltCard: React.FC<TiltCardProps> = ({ item, index, onSelectProject }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = getProjectShareUrl(item.id, item.liveUrl);
    const success = await copyToClipboard(url);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable heavy 3D calculations on touch/mobile screens to guarantee 60 FPS
    if (window.innerWidth < 768 || ('ontouchstart' in window && window.innerWidth < 1024)) return;
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rY = ((mouseX - width / 2) / (width / 2)) * 12; // max 12deg tilt
    const rX = -((mouseY - height / 2) / (height / 2)) * 12;

    setRotateX(rX);
    setRotateY(rY);

    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;
    setGlarePos({ x: glareX, y: glareY, opacity: 0.2 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      className="perspective-1000 group will-change-transform"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: rotateX || rotateY
            ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1)`
            : isHovered
            ? 'scale3d(1.02, 1.02, 1)'
            : 'none',
          transition: isHovered
            ? 'transform 0.1s ease-out, box-shadow 0.25s ease-out'
            : 'transform 0.4s ease-out, box-shadow 0.4s ease-out',
        }}
        onClick={() => onSelectProject(item)}
        className={`relative rounded-3xl bg-neutral-900/90 border border-neutral-800/90 overflow-hidden flex flex-col justify-between transition-all duration-300 cursor-pointer ${
          isHovered
            ? 'shadow-[0_20px_40px_rgba(58,134,255,0.2)] border-[#3A86FF]/50 ring-1 ring-[#3A86FF]/30'
            : 'shadow-lg shadow-black/50'
        }`}
      >
        {/* Dynamic Glare & Gentle Glow Effect */}
        {glarePos.opacity > 0 && (
          <div
            className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-200"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}), transparent 60%)`,
            }}
          />
        )}

        {/* Card Header Image Container */}
        {(() => {
          const isPoster = (item.category || '').toLowerCase().includes('poster') || (item.categoryLabel || '').toLowerCase().includes('পোস্টার');
          return (
            <div className="relative overflow-hidden bg-neutral-950 border-b border-neutral-800/80 aspect-video flex items-center justify-center">
              {isPoster ? (
                <>
                  {/* Ambient blurred backdrop so poster fills 16:9 box gracefully without cropping */}
                  <img
                    src={item.imageUrl}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 scale-125 pointer-events-none"
                  />
                  {/* Full uncropped poster centered */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800";
                    }}
                    className="relative z-10 h-full w-auto max-w-full object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out drop-shadow-2xl"
                  />
                </>
              ) : (
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800";
                  }}
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              )}

              {/* Category Badge overlay */}
              <div className="absolute top-3 left-3 z-20 px-3 py-1 rounded-lg bg-neutral-950/80 backdrop-blur-md border border-white/10 text-[11px] font-bold text-[#3A86FF] shadow-md pointer-events-none">
                {item.categoryLabel}
              </div>

              {/* Design Version or Completion Progress Badge Overlay */}
              {(() => {
                const isCoding = item.category === 'custom_theme' || item.completionProgress !== undefined || item.technologies.some(t => ['HTML5', 'CSS3', 'Tailwind', 'JavaScript', 'React', 'TypeScript'].some(tech => t.toLowerCase().includes(tech.toLowerCase())));
                if (isCoding) {
                  const val = item.completionProgress ? (typeof item.completionProgress === 'number' ? item.completionProgress : parseInt(String(item.completionProgress))) : 100;
                  return (
                    <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-lg bg-neutral-950/90 backdrop-blur-md border border-emerald-500/40 text-[10px] font-extrabold text-emerald-400 shadow-md flex items-center gap-1.5 pointer-events-none">
                      <Code2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{val}% Complete</span>
                    </div>
                  );
                } else if (item.designVersion) {
                  return (
                    <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-lg bg-neutral-950/90 backdrop-blur-md border border-sky-400/40 text-[10px] font-extrabold text-sky-300 shadow-md flex items-center gap-1.5 pointer-events-none">
                      <Layers className="w-3 h-3 text-sky-400 shrink-0" />
                      <span>{item.designVersion}</span>
                    </div>
                  );
                }
                return null;
              })()}

              {/* Smooth Overlay on Hover */}
              <div
                className={`absolute inset-0 bg-neutral-950/70 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center p-4 z-20 ${
                  isHovered ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.liveUrl ? (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl bg-[#3A86FF] hover:bg-[#2b75ed] text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-[#3A86FF]/30 transition-all hover:scale-105"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.portfolio.livePreview}</span>
                    </a>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(item);
                      }}
                      className="px-3.5 py-2 rounded-xl bg-[#3A86FF] hover:bg-[#2b75ed] text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-[#3A86FF]/30 transition-all hover:scale-105"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{t.portfolio.viewDetails}</span>
                    </button>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(item);
                    }}
                    className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 text-xs font-semibold transition-all hover:scale-105"
                    title={t.portfolio.viewDetails}
                  >
                    <Info className="w-4 h-4 text-[#3A86FF]" />
                  </button>

                  <button
                    onClick={handleCopyLink}
                    className={`p-2 rounded-xl border text-xs font-semibold transition-all hover:scale-105 ${
                      isCopied
                        ? 'bg-emerald-950 border-emerald-500/50 text-emerald-400'
                        : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border-neutral-700'
                    }`}
                    title={isCopied ? (language === 'bn' ? 'কপি হয়েছে!' : 'Copied!') : (language === 'bn' ? 'লিংক কপি করুন' : 'Copy Link')}
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-sky-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })()}

        {/* Card Body Details */}
        <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <h3 className="text-xl font-extrabold text-white group-hover:text-[#3A86FF] transition-colors leading-snug">
                {item.title}
              </h3>
              {item.year && (
                <span className="text-[10px] font-bold text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800 shrink-0">
                  {item.year}
                </span>
              )}
            </div>

            <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed mb-3 min-h-[2.25rem]">
              {item.description}
            </p>

            {/* Achievements & Views Badge */}
            {(item.viewsCount || item.achievement) && (
              <div className="flex flex-wrap items-center gap-2 mb-3 px-3 py-1.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs">
                {item.viewsCount && (
                  <span className="flex items-center gap-1 text-emerald-400 font-bold text-[11px]">
                    <Eye className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item.viewsCount}</span>
                  </span>
                )}
                {item.viewsCount && item.achievement && <span className="text-neutral-700">|</span>}
                {item.achievement && (
                  <span className="flex items-center gap-1 text-amber-400 font-bold text-[11px] truncate">
                    <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span className="truncate">{item.achievement}</span>
                  </span>
                )}
              </div>
            )}

            {/* Completion Progress Bar for Coding Projects OR Design Version Badge for Graphic Projects */}
            {(() => {
              const isCoding = item.category === 'custom_theme' || item.completionProgress !== undefined || item.technologies.some(t => ['HTML5', 'CSS3', 'Tailwind', 'JavaScript', 'React', 'TypeScript'].some(tech => t.toLowerCase().includes(tech.toLowerCase())));
              if (isCoding) {
                const val = item.completionProgress ? (typeof item.completionProgress === 'number' ? item.completionProgress : parseInt(String(item.completionProgress))) : 100;
                return (
                  <div className="mb-3.5 p-2.5 rounded-xl bg-neutral-950/90 border border-sky-500/20">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-[10px] font-extrabold tracking-wider uppercase text-sky-400 flex items-center gap-1">
                        <Code2 className="w-3.5 h-3.5 text-sky-400" />
                        <span>{language === 'bn' ? 'কোডিং প্রগ্রেস' : 'Completion Progress'}</span>
                      </span>
                      <span className="text-xs font-black text-emerald-400 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{val}%</span>
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-neutral-900 rounded-full overflow-hidden p-[1px] border border-white/10 relative">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-emerald-400 shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                      />
                    </div>
                  </div>
                );
              } else if (item.designVersion) {
                return (
                  <div className="mb-3.5 px-3 py-1.5 rounded-xl bg-neutral-950/80 border border-indigo-500/25 flex items-center justify-between text-xs">
                    <span className="text-[10px] font-extrabold tracking-wider uppercase text-indigo-400 flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{language === 'bn' ? 'ডিজাইন ভার্সন' : 'Design Version'}</span>
                    </span>
                    <span className="text-[11px] font-black text-sky-300 bg-sky-950/80 px-2 py-0.5 rounded-md border border-sky-400/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-sky-400" />
                      <span>{item.designVersion}</span>
                    </span>
                  </div>
                );
              }
              return null;
            })()}
          </div>

          <div>
            {/* Technologies Pills */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/80 mb-4">
              {item.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[11px] font-medium text-neutral-300 bg-neutral-950 px-2.5 py-1 rounded-md border border-neutral-800/80"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons: Live Preview, GitHub, Details */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <a
                href={item.liveUrl || '#portfolio'}
                onClick={(e) => {
                  e.stopPropagation();
                  if (!item.liveUrl) {
                    e.preventDefault();
                    onSelectProject(item);
                  }
                }}
                target={item.liveUrl ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="px-2.5 py-2 rounded-xl bg-neutral-950 hover:bg-[#3A86FF] text-neutral-300 hover:text-white border border-neutral-800 hover:border-[#3A86FF] text-[11px] font-bold flex items-center justify-center gap-1 transition-all duration-200"
              >
                <ExternalLink className="w-3 h-3 text-[#3A86FF] group-hover:text-white" />
                <span className="truncate">{language === 'bn' ? 'লাইভ' : 'Live'}</span>
              </a>

              <a
                href={item.githubUrl || 'https://github.com/masum-9t9/'}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-2 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-[11px] font-bold flex items-center justify-center gap-1 transition-all duration-200"
              >
                <Github className="w-3 h-3 text-neutral-400" />
                <span className="truncate">GitHub</span>
              </a>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProject(item);
                }}
                className="px-2.5 py-2 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-[11px] font-bold flex items-center justify-center gap-1 transition-all duration-200"
              >
                <Info className="w-3 h-3 text-emerald-400" />
                <span className="truncate">{language === 'bn' ? 'ডিটেইলস' : 'Details'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Portfolio: React.FC<PortfolioProps> = ({ items, onSelectProject }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = React.useMemo(() => {
    const defaultCats = [
      { id: 'all', label: t.portfolio.filterAll },
      { id: 'natok_poster', label: t.portfolio.filterPoster },
      { id: 'natok_thumbnail', label: t.portfolio.filterYtThumbnail },
      { id: 'education', label: t.portfolio.filterEducation },
      { id: 'custom_theme', label: t.portfolio.filterCustomTheme },
    ];
    
    const catMap = new Map<string, string>();
    defaultCats.forEach(c => catMap.set(c.id, c.label));

    items.forEach(item => {
      if (item.category && !catMap.has(item.category)) {
        catMap.set(item.category, item.categoryLabel || item.category);
      }
    });

    return Array.from(catMap.entries()).map(([id, label]) => ({ id, label }));
  }, [items, t]);

  const filteredItems = items.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#090E1A] bg-mesh-pattern border-t border-b border-white/5">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-xs text-sky-400 font-bold mb-4 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>{t.portfolio.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            <span className="text-gradient-cyan">{t.portfolio.title}</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-normal max-w-xl mx-auto">
            {t.portfolio.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 scale-105 ring-1 ring-white/30'
                  : 'bg-neutral-900/80 text-neutral-300 hover:text-white border border-white/10 hover:border-sky-500/40 backdrop-blur-md'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid with 3D Tilt Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <TiltCard
                key={item.id}
                item={item}
                index={index}
                onSelectProject={onSelectProject}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
