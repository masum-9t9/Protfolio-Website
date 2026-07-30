import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Calendar, User, CheckCircle, Maximize2, ZoomIn, Eye, Trophy, Award, Sparkles, Code2, Layers, Copy, Check, Share2, Link2 } from 'lucide-react';
import { PortfolioItem } from '../types';
import { copyToClipboard, getProjectShareUrl } from '../utils/clipboard';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onOpenCreatorProfile?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenCreatorProfile }) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  if (!project) return null;

  const handleCopyLink = async () => {
    const url = getProjectShareUrl(project.id, project.liveUrl);
    const success = await copyToClipboard(url);
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  return (
    <AnimatePresence>
      {/* Outer scrollable overlay using grid place-items-center so top of modal is always accessible */}
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md p-3 sm:p-6 grid place-items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative my-auto"
        >
            {/* Top Right Controls: Copy Link & Close */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className={`p-2.5 rounded-full backdrop-blur-md border transition-all shadow-lg flex items-center justify-center ${
                  isCopied
                    ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-400 scale-105'
                    : 'bg-neutral-950/80 border-white/10 text-white hover:bg-neutral-800'
                }`}
                title={isCopied ? 'লিংক কপি হয়েছে!' : 'প্রজেক্ট লিংক কপি করুন'}
              >
                {isCopied ? <Check className="w-5 h-5 text-emerald-400 animate-bounce" /> : <Link2 className="w-5 h-5 text-sky-400" />}
              </button>

              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-neutral-950/80 border border-white/10 text-white hover:bg-neutral-800 transition-colors shadow-lg"
                title="বন্ধ করুন"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

          {/* Project Showcase Image Container */}
          <div className="relative bg-neutral-950 flex flex-col items-center justify-center p-4 border-b border-neutral-800 group">
            <div className="relative max-h-[65vh] w-full flex items-center justify-center overflow-hidden rounded-xl">
              <img
                src={project.imageUrl || 'https://i.postimg.cc/rsFF9mFd/fbd8b403-9dba-42c1-a984-1293f50492cd.jpg'}
                alt={project.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "https://i.postimg.cc/rsFF9mFd/fbd8b403-9dba-42c1-a984-1293f50492cd.jpg";
                }}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
              
              {/* Full poster lightbox trigger overlay button */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-neutral-950/80 hover:bg-[#3A86FF] text-white border border-white/10 text-xs font-bold flex items-center gap-1.5 backdrop-blur-md transition-all shadow-lg hover:scale-105"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#3A86FF] group-hover:text-white" />
                <span>ফুল পোস্টার ভিউ</span>
              </button>
            </div>
          </div>

          {/* Details Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#3A86FF]/10 text-[#3A86FF] text-xs font-bold border border-[#3A86FF]/20">
                    {project.categoryLabel}
                  </div>

                  <button
                    onClick={onOpenCreatorProfile}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-sky-950/80 hover:bg-sky-900 border border-sky-400/30 text-sky-300 text-xs font-bold transition-all hover:scale-105 group"
                    title="ক্রিয়েটর প্রোফাইল লিংক ও সোশ্যাল মিডিয়া খুলুন"
                  >
                    <User className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" />
                    <span>Designer: <strong className="text-white underline">{project.designerName || "Masum 9T9"}</strong></span>
                  </button>
                </div>
                
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="text-xs text-[#3A86FF] hover:underline font-semibold flex items-center gap-1"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>সম্পূর্ণ ইমেজ জুম করে দেখুন</span>
                </button>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">{project.title}</h3>
              
              {/* Detailed Description */}
              <div className="bg-neutral-950/60 p-4 rounded-2xl border border-neutral-800/80 mb-4">
                <h4 className="text-xs font-bold text-[#3A86FF] mb-2 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>প্রজেক্ট ওভারভিউ ও বিস্তারিত</span>
                </h4>
                <p className="text-neutral-200 text-sm leading-relaxed whitespace-pre-line">
                  {project.longDescription || project.description}
                </p>
              </div>
            </div>

            {/* Achievements & Views Section */}
            {(project.viewsCount || project.achievement) && (
              <div className="p-4 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-amber-500/30 text-xs space-y-2">
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>অর্জন, ভিউজ ও পারফরম্যান্স (Achievements & Views)</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {project.viewsCount && (
                    <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <Eye className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-neutral-400 text-[11px]">মোট ভিউজ / রিচ (Views & Reach)</p>
                        <p className="text-base font-extrabold text-white">{project.viewsCount}</p>
                      </div>
                    </div>
                  )}

                  {project.achievement && (
                    <div className="p-3 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-neutral-400 text-[11px]">প্রধান অর্জন / রেকর্ড (Key Achievement)</p>
                        <p className="text-sm font-extrabold text-amber-300">{project.achievement}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-neutral-950 border border-neutral-800/80 text-xs">
              {project.clientName && (
                <div>
                  <p className="text-neutral-400 font-medium mb-1">ক্লায়েন্ট / চ্যানেল</p>
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#3A86FF]" />
                    <span>{project.clientName}</span>
                  </p>
                </div>
              )}

              {project.year && (
                <div>
                  <p className="text-neutral-400 font-medium mb-1">প্রজেক্ট সাল</p>
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#3A86FF]" />
                    <span>{project.year}</span>
                  </p>
                </div>
              )}

              {project.designVersion && (
                <div>
                  <p className="text-neutral-400 font-medium mb-1">ডিজাইন ভার্সন</p>
                  <p className="font-bold text-sky-300 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-sky-400" />
                    <span>{project.designVersion}</span>
                  </p>
                </div>
              )}

              <div>
                <p className="text-neutral-400 font-medium mb-1">স্ট্যাটাস</p>
                <p className="font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>সম্পন্ন (Completed)</span>
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-bold text-neutral-300 mb-2 uppercase tracking-wider">ব্যবহৃত সফটওয়্যার ও প্রযুক্তি</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-neutral-950 text-neutral-300 text-xs font-medium border border-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="px-4 py-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 text-xs font-semibold flex items-center gap-1.5 transition-all"
                >
                  <Eye className="w-4 h-4 text-[#3A86FF]" />
                  <span>ফুল সাইজ দেখুন</span>
                </button>

                {/* Copy Link Action Button */}
                <button
                  onClick={handleCopyLink}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all active:scale-95 ${
                    isCopied
                      ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-400 font-bold shadow-lg shadow-emerald-500/20'
                      : 'bg-neutral-950 hover:bg-neutral-800 border-neutral-700 text-neutral-200 hover:text-white'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400 animate-pulse" />
                      <span>লিংক কপি হয়েছে!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-sky-400" />
                      <span>লিংক কপি করুন</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold"
                >
                  বন্ধ করুন
                </button>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#3A86FF] hover:bg-[#2b75ed] text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-[#3A86FF]/20"
                >
                  <span>এই ধরণের প্রজেক্ট অর্ডার করুন</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal for HD Poster Inspection */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 overflow-y-auto">
          {/* Lightbox Header */}
          <div className="w-full max-w-6xl flex items-center justify-between py-2 px-4 bg-neutral-900/80 border border-neutral-800 rounded-2xl mb-4">
            <h4 className="text-sm font-bold text-white truncate max-w-md">{project.title} — এইচডি পোস্টার ভিউ</h4>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-bold flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              <span>বন্ধ করুন</span>
            </button>
          </div>

          {/* Lightbox Image Container */}
          <div className="flex-grow w-full max-w-5xl flex items-center justify-center overflow-y-auto my-auto p-2">
            <img
              src={project.imageUrl}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="max-h-[85vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-neutral-800"
            />
          </div>

          <div className="mt-4 text-center text-xs text-neutral-400">
            পোস্টারের সম্পূর্ণ ডিজাইন দেখতে ওপর-নিচে স্ক্রোল করুন
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
