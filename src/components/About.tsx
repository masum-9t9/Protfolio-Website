import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Target, Compass, Award, GraduationCap, Download, FileText, CheckCircle, X } from 'lucide-react';
import { AboutData, TestimonialItem } from '../types';

interface AboutProps {
  data: AboutData;
  testimonials?: TestimonialItem[];
}

const toBengaliNumerals = (numStr: string | number): string => {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(numStr).replace(/\d/g, (d) => bnDigits[parseInt(d, 10)]);
};

export const About: React.FC<AboutProps> = ({ data, testimonials }) => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Dynamic average rating from all reviews
  const dynamicAvgRating = React.useMemo(() => {
    if (!testimonials || testimonials.length === 0) return '5.0';
    const sum = testimonials.reduce((acc, t) => acc + (Number(t.rating) || 5), 0);
    return (sum / testimonials.length).toFixed(1);
  }, [testimonials]);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-950/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-[#3A86FF] font-semibold mb-3">
            <User className="w-3.5 h-3.5" />
            <span>{data.title}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            {data.subtitle}
          </h2>
          <div className="w-16 h-1 bg-[#3A86FF] mx-auto rounded-full" />
        </div>

        {/* Highlights Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {data.highlights.map((item, idx) => {
            const displayVal = item.label === 'রেটিং'
              ? `${toBengaliNumerals(dynamicAvgRating)} / ৫.০`
              : item.value;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-neutral-800 text-center"
              >
                <p className="text-3xl sm:text-4xl font-extrabold text-[#3A86FF] mb-1">{displayVal}</p>
                <p className="text-xs sm:text-sm text-neutral-400 font-medium">{item.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Story & Vision (Left Column - 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="glass-card p-8 rounded-2xl border border-neutral-800">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Compass className="w-6 h-6 text-[#3A86FF]" />
                <span>{data.storyHeading}</span>
              </h3>
              <div className="space-y-4 text-neutral-300 text-base leading-relaxed">
                {data.storyParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Vision & Goals Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl border border-neutral-800">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-[#3A86FF]" />
                  <span>{data.visionHeading}</span>
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">{data.visionText}</p>
              </div>

              <div className="glass-card p-6 rounded-2xl border border-neutral-800">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#3A86FF]" />
                  <span>{data.careerGoalsHeading}</span>
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">{data.careerGoalsText}</p>
              </div>
            </div>

            {/* Resume Button */}
            <div>
              <button
                onClick={() => setShowResumeModal(true)}
                className="px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm border border-neutral-800 hover:border-neutral-700 flex items-center gap-3 transition-all duration-200 shadow-md active:scale-95"
              >
                <FileText className="w-4 h-4 text-[#3A86FF]" />
                <span>বায়োডাটা / রেজুমি দেখুন (Resume)</span>
                <Download className="w-4 h-4 text-neutral-400" />
              </button>
            </div>
          </div>

          {/* Education & Certification Timeline (Right Column - 5 Cols) */}
          <div className="lg:col-span-5">
            <div className="glass-card p-8 rounded-2xl border border-neutral-800 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-[#3A86FF]" />
                <span>শিক্ষা ও পেশাদার প্রশিক্ষণ</span>
              </h3>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-neutral-800">
                {data.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-8">
                    <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#3A86FF] ring-4 ring-neutral-950 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    <span className="text-xs font-semibold text-[#3A86FF] bg-[#3A86FF]/10 px-2.5 py-0.5 rounded-full border border-[#3A86FF]/20">
                      {edu.year}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1.5">{edu.degree}</h4>
                    <p className="text-xs font-medium text-neutral-400 mb-2">{edu.institution}</p>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setShowResumeModal(false)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border-b border-neutral-800 pb-4 mb-6">
                <p className="text-xs text-[#3A86FF] font-semibold uppercase tracking-wider">অফিশিয়াল জীবনবৃত্তান্ত</p>
                <h3 className="text-2xl font-bold text-white">মাসুম ৯টি৯ (Masum 9T9) - Resume</h3>
                <p className="text-xs text-neutral-400 mt-1">Professional Graphics Designer & Content Creator</p>
              </div>

              <div className="space-y-6 text-sm text-neutral-300">
                <div>
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3A86FF]" /> মূল দক্ষতা
                  </h4>
                  <p>Photoshop, Illustrator, Ibis Paint X, Pixellab, PS CC 2019, Poster Compositing, High CTR YouTube Thumbnails, Educational Graphics.</p>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3A86FF]" /> অভিজ্ঞতা
                  </h4>
                  <p>৫+ বছর ধরে ৫০০+ সাকসেসফুল ডিজাইন প্রজেক্ট সম্পন্ন করেছি। বাংলাদেশ ও আন্তর্জাতিক বিভিন্ন ক্রিয়েটরদের সাথে কাজ করার অভিজ্ঞতা।</p>
                </div>

                <div>
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3A86FF]" /> যোগাযোগ
                  </h4>
                  <p>ফোন: 01303-623838 | ইমেইল: masum.9t9.gd@gmail.com / parahinacademy@gmail.com</p>
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-3 pt-4 border-t border-neutral-800">
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="px-4 py-2 rounded-lg bg-neutral-800 text-neutral-300 text-xs font-semibold hover:bg-neutral-700"
                >
                  বন্ধ করুন
                </button>
                <a
                  href="mailto:masum.9t9.gd@gmail.com?subject=Requesting%20Full%20Resume%20PDF"
                  className="px-5 py-2 rounded-lg bg-[#3A86FF] text-white text-xs font-semibold hover:bg-[#2b75ed] flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>রেজুমি রিকোয়েস্ট করুন</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
