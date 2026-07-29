import React from 'react';
import { motion } from 'motion/react';
import { History, Calendar, MapPin, Briefcase } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-[#3A86FF] font-semibold mb-3">
            <History className="w-3.5 h-3.5" />
            <span>কর্মজীবন ও অভিজ্ঞতা</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            পেশাদার অভিজ্ঞতার সময়রেখা
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            বিভিন্ন ব্র্যান্ড, এজেন্সি ও কন্টেন্ট ক্রিয়েটরদের সাথে কাজের মাইলফলক
          </p>
          <div className="w-16 h-1 bg-[#3A86FF] mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 sm:before:-translate-x-1/2 before:w-0.5 before:bg-neutral-800">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative mb-12 flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node Point */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-[#3A86FF] border-4 border-neutral-950 text-white flex items-center justify-center z-10 shadow-lg">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                {/* Content Box */}
                <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                  <div className="glass-card p-6 sm:p-8 rounded-2xl border border-neutral-800">
                    
                    {/* Year badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3A86FF]/10 border border-[#3A86FF]/20 text-xs text-[#3A86FF] font-bold mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <p className="text-sm font-semibold text-neutral-300 mb-2">{exp.company}</p>

                    <div className="flex items-center gap-1 text-xs text-neutral-400 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-[#3A86FF]" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed mb-4">{exp.description}</p>

                    {/* Key Highlights */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/80">
                      {exp.keyProjects.map((proj, pIdx) => (
                        <span
                          key={pIdx}
                          className="text-[11px] font-medium text-neutral-300 bg-neutral-900 px-2.5 py-1 rounded-md border border-neutral-800"
                        >
                          ✓ {proj}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
