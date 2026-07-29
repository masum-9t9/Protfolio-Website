import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderKanban, ExternalLink, Eye, Github, Info, Sparkles, Trophy } from 'lucide-react';
import { PortfolioItem } from '../types';

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
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

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
                      <span>লাইভ প্রিভিউ</span>
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
                      <span>প্রিভিউ দেখুন</span>
                    </button>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(item);
                    }}
                    className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 text-xs font-semibold transition-all hover:scale-105"
                    title="বিস্তারিত"
                  >
                    <Info className="w-4 h-4 text-[#3A86FF]" />
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
                <span className="truncate">লাইভ</span>
              </a>

              <a
                href={item.githubUrl || 'https://github.com'}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-2 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-[11px] font-bold flex items-center justify-center gap-1 transition-all duration-200"
              >
                <Github className="w-3 h-3 text-neutral-400" />
                <span className="truncate">গিটহাব</span>
              </a>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProject(item);
                }}
                className="px-2.5 py-2 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 text-[11px] font-bold flex items-center justify-center gap-1 transition-all duration-200"
              >
                <Info className="w-3 h-3 text-emerald-400" />
                <span className="truncate">ডিটেইলস</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Portfolio: React.FC<PortfolioProps> = ({ items, onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = React.useMemo(() => {
    const defaultCats = [
      { id: 'all', label: 'সব প্রজেক্ট' },
      { id: 'poster', label: 'পোস্টার ডিজাইন' },
      { id: 'yt_thumbnail', label: 'ইউটিউব থাম্বনেল' },
      { id: 'education', label: 'এডুকেশন থাম্বনেল' },
      { id: 'custom_theme', label: 'কাস্টম থিম' },
    ];
    
    const catMap = new Map<string, string>();
    defaultCats.forEach(c => catMap.set(c.id, c.label));

    items.forEach(item => {
      if (item.category && !catMap.has(item.category)) {
        catMap.set(item.category, item.categoryLabel || item.category);
      }
    });

    return Array.from(catMap.entries()).map(([id, label]) => ({ id, label }));
  }, [items]);

  const filteredItems = items.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#3A86FF]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-[#3A86FF] font-semibold mb-3">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>আমার পোর্টফোলিও প্রজেক্টস</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            সেরা ক্রিয়েটিভ ওয়ার্কস
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            ফটোরিয়ালিস্টিক পোস্টার ডিজাইন, হাই-সিটিআর থাম্বনেল ও ব্র্যান্ড ভিজ্যুয়াল সমাহার
          </p>
          <div className="w-16 h-1 bg-[#3A86FF] mx-auto rounded-full mt-4 shadow-[0_0_10px_#3A86FF]" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-[#3A86FF] text-white shadow-lg shadow-[#3A86FF]/30 scale-105 ring-1 ring-white/20'
                  : 'bg-neutral-900/90 text-neutral-400 hover:text-white border border-neutral-800/80 hover:border-neutral-700'
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
