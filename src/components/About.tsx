import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Target, Compass, Award, GraduationCap, Download, FileText, CheckCircle, X, Sparkles, Eye, Loader2 } from 'lucide-react';
import { AboutData, TestimonialItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';
import { viewResume, downloadResume } from '../utils/resume';

interface AboutProps {
  data: AboutData;
  testimonials?: TestimonialItem[];
}

const toBengaliNumerals = (numStr: string | number): string => {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(numStr).replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
};

export const About: React.FC<AboutProps> = ({ data, testimonials }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [downloadingLang, setDownloadingLang] = useState<'bn' | 'en' | null>(null);

  const handleDownload = (lang: 'bn' | 'en') => {
    setDownloadingLang(lang);
    setTimeout(() => {
      downloadResume(lang);
      setTimeout(() => {
        setDownloadingLang(null);
      }, 700);
    }, 150);
  };

  // Dynamic average rating from all reviews
  const dynamicAvgRating = React.useMemo(() => {
    if (!testimonials || testimonials.length === 0) return '5.0';
    const sum = testimonials.reduce((acc, t) => acc + (Number(t.rating) || 5), 0);
    return (sum / testimonials.length).toFixed(1);
  }, [testimonials]);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090E1A] bg-mesh-pattern border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-xs text-sky-400 font-bold mb-4 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
            <User className="w-3.5 h-3.5" />
            <span>{data.title}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            <span className="text-gradient-cyan">{data.subtitle}</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Highlights Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {(data?.highlights || []).map((item, idx) => {
            let displayVal = item.value;
            if (item.label === 'রেটিং' || item.label === 'Rating') {
              displayVal = language === 'bn'
                ? `${toBengaliNumerals(dynamicAvgRating)} / ৫.০`
                : `${dynamicAvgRating} / 5.0`;
            }

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 text-center relative overflow-hidden group"
              >
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-sky-500/10 rounded-full blur-xl group-hover:bg-sky-500/20 transition-all pointer-events-none" />
                <p className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent mb-1">
                  {displayVal}
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 font-semibold">{item.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Story & Vision (Left Column - 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
              <h3 className="text-2xl font-extrabold text-white mb-5 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-sky-500/20 border border-sky-400/30 text-sky-400">
                  <Compass className="w-5 h-5" />
                </div>
                <span>{data.storyHeading}</span>
              </h3>
              <div className="space-y-4 text-neutral-300 text-base leading-relaxed font-normal">
                {(data?.storyParagraphs || []).map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Vision & Goals Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2.5">
                  <Target className="w-5 h-5 text-sky-400" />
                  <span>{data.visionHeading}</span>
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">{data.visionText}</p>
              </div>

              <div className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-emerald-400" />
                  <span>{data.careerGoalsHeading}</span>
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">{data.careerGoalsText}</p>
              </div>
            </div>

            {/* Resume Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-neutral-900/90 p-1.5 rounded-xl border border-white/15 shadow-xl">
                <span className="text-xs font-bold text-neutral-300 px-2 flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-[#3A86FF]" />
                  <span>👁 View:</span>
                </span>
                <button
                  onClick={() => viewResume('bn')}
                  className="px-3.5 py-2 rounded-lg bg-neutral-800 hover:bg-[#3A86FF] text-white text-xs font-bold border border-white/10 transition-colors"
                  title="View Bangla Resume in a new tab"
                >
                  🇧🇩 বাংলা
                </button>
                <button
                  onClick={() => viewResume('en')}
                  className="px-3.5 py-2 rounded-lg bg-neutral-800 hover:bg-[#3A86FF] text-white text-xs font-bold border border-white/10 transition-colors"
                  title="View English Resume in a new tab"
                >
                  🇬🇧 English
                </button>
              </div>

              <div className="flex items-center gap-2 bg-gradient-to-r from-[#3A86FF] to-blue-600 p-1.5 rounded-xl shadow-lg shadow-blue-500/20">
                <span className="text-xs font-bold text-white px-2 flex items-center gap-1.5">
                  <Download className="w-4 h-4 text-white" />
                  <span>⬇ Download:</span>
                </span>
                <button
                  onClick={() => handleDownload('bn')}
                  disabled={downloadingLang === 'bn'}
                  className="px-3.5 py-2 rounded-lg bg-black/25 hover:bg-black/40 text-white text-xs font-bold transition-all border border-white/10 flex items-center gap-1.5 disabled:opacity-80 cursor-pointer disabled:cursor-wait"
                  title="Download Bangla Resume"
                >
                  {downloadingLang === 'bn' ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-sky-300" />
                  ) : null}
                  <span>🇧🇩 বাংলা</span>
                </button>
                <button
                  onClick={() => handleDownload('en')}
                  disabled={downloadingLang === 'en'}
                  className="px-3.5 py-2 rounded-lg bg-black/25 hover:bg-black/40 text-white text-xs font-bold transition-all border border-white/10 flex items-center gap-1.5 disabled:opacity-80 cursor-pointer disabled:cursor-wait"
                  title="Download English Resume"
                >
                  {downloadingLang === 'en' ? (
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-sky-300" />
                  ) : null}
                  <span>🇬🇧 English</span>
                </button>
              </div>
            </div>
          </div>

          {/* Education & Certification Timeline (Right Column - 5 Cols) */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 rounded-3xl border border-white/10 h-full flex flex-col shadow-2xl relative">
              <h3 className="text-2xl font-extrabold text-white mb-6 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span>{t.about.educationHeading}</span>
              </h3>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-white/10">
                {(data?.education || []).map((edu, idx) => (
                  <div key={idx} className="relative pl-8">
                    <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-sky-400 ring-4 ring-neutral-950 flex items-center justify-center shadow-[0_0_10px_#38BDF8]">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    <span className="text-xs font-bold text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                      {edu.year}
                    </span>
                    <h4 className="text-lg font-extrabold text-white mt-2">{edu.degree}</h4>
                    <p className="text-xs font-semibold text-neutral-400 mb-2">{edu.institution}</p>
                    <p className="text-xs text-neutral-300 leading-relaxed">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-neutral-950 border border-white/20 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setShowResumeModal(false)}
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border-b border-white/10 pb-4 mb-6">
                <p className="text-xs text-sky-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {language === 'bn' ? 'অফিশিয়াল জীবনবৃত্তান্ত' : 'Official Resume'}
                </p>
                <h3 className="text-2xl font-black text-white mt-1">Masum 9T9 — Resume</h3>
                <p className="text-xs text-neutral-400 mt-1 font-medium">Professional Graphics Designer & Content Creator</p>
              </div>

              <div className="space-y-6 text-sm text-neutral-300">
                <div>
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2 text-sky-400">
                    <CheckCircle className="w-4 h-4" />
                    {language === 'bn' ? 'মূল দক্ষতা' : 'Core Skills'}
                  </h4>
                  <p className="text-neutral-300 leading-relaxed">Photoshop, Illustrator, Ibis Paint X, Pixellab, PS CC 2019, Poster Compositing, High CTR YouTube Thumbnails, Educational Graphics.</p>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2 text-sky-400">
                    <CheckCircle className="w-4 h-4" />
                    {language === 'bn' ? 'অভিজ্ঞতা' : 'Experience'}
                  </h4>
                  <p className="text-neutral-300 leading-relaxed">
                    {language === 'bn'
                      ? '৩+ বছর ধরে ১০০+ সাকসেসফুল ডিজাইন প্রজেক্ট সম্পন্ন করেছি। বাংলাদেশ ও আন্তর্জাতিক বিভিন্ন ক্রিয়েটরদের সাথে কাজ করার অভিজ্ঞতা।'
                      : 'Completed 100+ successful design projects over 3+ years. Experienced in working with Bangladeshi and international content creators.'}
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2 text-sky-400">
                    <CheckCircle className="w-4 h-4" />
                    {language === 'bn' ? 'যোগাযোগ' : 'Contact'}
                  </h4>
                  <p className="text-neutral-300">Phone: +8801303-623838 | Email: masum.9t9.gd@gmail.com / parahinacademy@gmail.com</p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-neutral-900 text-neutral-300 text-xs font-bold hover:bg-neutral-800 border border-white/10"
                >
                  {language === 'bn' ? 'বন্ধ করুন' : 'Close'}
                </button>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => viewResume('bn')}
                    className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-[#3A86FF] text-white text-xs font-bold border border-white/15 flex items-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-sky-400" />
                    <span>👁 View 🇧🇩</span>
                  </button>
                  <button
                    onClick={() => viewResume('en')}
                    className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-[#3A86FF] text-white text-xs font-bold border border-white/15 flex items-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-sky-400" />
                    <span>👁 View 🇬🇧</span>
                  </button>
                  <button
                    onClick={() => handleDownload('bn')}
                    disabled={downloadingLang === 'bn'}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#3A86FF] to-blue-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-blue-500/20 disabled:opacity-80 cursor-pointer disabled:cursor-wait"
                  >
                    {downloadingLang === 'bn' ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                    ) : (
                      <Download className="w-3.5 h-3.5" />
                    )}
                    <span>{downloadingLang === 'bn' ? 'ডাউনলোড হচ্ছে...' : '⬇ Download 🇧🇩'}</span>
                  </button>
                  <button
                    onClick={() => handleDownload('en')}
                    disabled={downloadingLang === 'en'}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#3A86FF] to-blue-600 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-blue-500/20 disabled:opacity-80 cursor-pointer disabled:cursor-wait"
                  >
                    {downloadingLang === 'en' ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                    ) : (
                      <Download className="w-3.5 h-3.5" />
                    )}
                    <span>{downloadingLang === 'en' ? 'Downloading...' : '⬇ Download 🇬🇧'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

