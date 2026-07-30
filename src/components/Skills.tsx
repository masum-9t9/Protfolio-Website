import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, Image, PenTool, Smartphone, Layout, Layers, Palette, Youtube, GraduationCap } from 'lucide-react';
import { SkillItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

interface SkillsProps {
  skills: SkillItem[];
}

const ICON_MAP: Record<string, React.ElementType> = {
  Image,
  PenTool,
  Smartphone,
  Layout,
  Layers,
  Palette,
  Youtube,
  GraduationCap
};

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];
  const [activeCategory, setActiveCategory] = useState<'all' | 'software' | 'design_field'>('all');

  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#090E1A] bg-mesh-pattern border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-xs text-sky-400 font-bold mb-4 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            <span className="text-gradient-cyan">{t.skills.title}</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-normal max-w-xl mx-auto">
            {t.skills.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 scale-105 ring-1 ring-white/30'
                : 'bg-neutral-900/80 text-neutral-300 hover:text-white border border-white/10 hover:border-sky-500/40 backdrop-blur-md'
            }`}
          >
            {language === 'bn' ? `সব দক্ষতা (${skills.length})` : `All Skills (${skills.length})`}
          </button>
          <button
            onClick={() => setActiveCategory('software')}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-300 ${
              activeCategory === 'software'
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 scale-105 ring-1 ring-white/30'
                : 'bg-neutral-900/80 text-neutral-300 hover:text-white border border-white/10 hover:border-sky-500/40 backdrop-blur-md'
            }`}
          >
            {language === 'bn' ? 'সফটওয়্যার টুলস' : 'Software Tools'}
          </button>
          <button
            onClick={() => setActiveCategory('design_field')}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-300 ${
              activeCategory === 'design_field'
                ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 scale-105 ring-1 ring-white/30'
                : 'bg-neutral-900/80 text-neutral-300 hover:text-white border border-white/10 hover:border-sky-500/40 backdrop-blur-md'
            }`}
          >
            {language === 'bn' ? 'ডিজাইন ফিল্ড' : 'Design Fields'}
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = ICON_MAP[skill.iconName] || Cpu;

            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card glass-card-hover p-6 rounded-3xl border border-white/10 flex flex-col justify-between group shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-xl group-hover:bg-sky-500/20 transition-all pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
                      {skill.iconName && skill.iconName.startsWith('http') ? (
                        <img 
                          src={skill.iconName} 
                          alt={skill.name} 
                          className="w-6 h-6 object-contain rounded-md" 
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <IconComponent className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-sm font-black text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                      {skill.proficiency}%
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-normal">
                    {skill.description}
                  </p>
                </div>

                <div>
                  {/* Proficiency Progress Bar */}
                  <div className="w-full h-2 bg-neutral-950 rounded-full overflow-hidden mb-4 p-0.5 border border-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full shadow-[0_0_10px_#38BDF8]"
                    />
                  </div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold text-neutral-300 bg-neutral-950/90 px-2.5 py-1 rounded-lg border border-white/10"
                      >
                        #{tag}
                      </span>
                    ))}
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

