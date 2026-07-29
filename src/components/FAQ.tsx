import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';
import { FAQItem } from '../types';

interface FAQProps {
  faqs: FAQItem[];
}

export const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-950/40">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-[#3A86FF] font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>সাধারণ প্রশ্নাবলী (FAQ)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            সচরাচর জিজ্ঞাসিত প্রশ্নসমূহ
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            আপনার মনে থাকা যেকোনো প্রশ্নের দ্রুত ও স্পষ্ট উত্তর
          </p>
          <div className="w-16 h-1 bg-[#3A86FF] mx-auto rounded-full mt-4" />
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="প্রশ্ন খুঁজুন..."
            className="w-full pl-11 pr-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-500 text-xs focus:outline-none focus:border-[#3A86FF] transition-colors"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="glass-card rounded-2xl border border-neutral-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#3A86FF] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div className={`p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#3A86FF]' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-neutral-400 text-sm">
              কোনো প্রশ্ন পাওয়া যায়নি। সরাসরি ইমেইল বা হোয়াটসঅ্যাপে যোগাযোগ করুন।
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
