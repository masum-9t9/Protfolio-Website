import React from 'react';
import { motion } from 'motion/react';
import { History, Calendar, MapPin, Briefcase } from 'lucide-react';
import { ExperienceItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#070A12] bg-mesh-pattern border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-xs text-sky-400 font-bold mb-4 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
            <History className="w-3.5 h-3.5" />
            <span>{t.experience.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            <span className="text-gradient-cyan">{t.experience.title}</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-normal max-w-xl mx-auto">
            {t.experience.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 sm:before:-translate-x-1/2 before:w-1 before:bg-gradient-to-b before:from-sky-500/80 before:via-indigo-500/50 before:to-sky-500/10">
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
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-indigo-600 border-4 border-[#070A12] text-white flex items-center justify-center z-10 shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Content Box */}
                <div className="ml-14 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                  <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-all pointer-events-none" />

                    {/* Year badge */}
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-xs text-sky-300 font-extrabold mb-4 shadow-sm">
                      <Calendar className="w-3.5 h-3.5 text-sky-400" />
                      <span>{exp.year}</span>
                    </div>

                    <h3 className="text-xl font-extrabold text-white mb-1 group-hover:text-sky-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-bold text-sky-400 mb-2">{exp.company}</p>

                    <div className="flex items-center gap-1.5 text-xs text-neutral-300 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-sky-400" />
                      <span>{exp.location}</span>
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed mb-5 font-normal">{exp.description}</p>

                    {/* Key Highlights */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                      {exp.keyProjects.map((proj, pIdx) => (
                        <span
                          key={pIdx}
                          className="text-[11px] font-semibold text-neutral-200 bg-neutral-950/90 px-3 py-1 rounded-lg border border-white/10"
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

