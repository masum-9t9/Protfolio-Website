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
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-[#3A86FF] font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            {t.skills.title}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            {t.skills.subtitle}
          </p>
          <div className="w-16 h-1 bg-[#3A86FF] mx-auto rounded-full mt-4" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-[#3A86FF] text-white shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            {language === 'bn' ? `সব দক্ষতা (${skills.length})` : `All Skills (${skills.length})`}
          </button>
          <button
            onClick={() => setActiveCategory('software')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeCategory === 'software'
                ? 'bg-[#3A86FF] text-white shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
            }`}
          >
            {language === 'bn' ? 'সফটওয়্যার (Photoshop, Ibis, Pixellab)' : 'Software Tools'}
          </button>
          <button
            onClick={() => setActiveCategory('design_field')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeCategory === 'design_field'
                ? 'bg-[#3A86FF] text-white shadow-md'
                : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
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
                className="glass-card glass-card-hover p-6 rounded-2xl border border-neutral-800 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#3A86FF] group-hover:bg-[#3A86FF] group-hover:text-white transition-colors duration-300">
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
                    <span className="text-sm font-extrabold text-[#3A86FF]">
                      {skill.proficiency}%
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-6">{skill.description}</p>
                </div>

                <div>
                  {/* Proficiency Progress Bar */}
                  <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-[#3A86FF] rounded-full"
                    />
                  </div>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium text-neutral-400 bg-neutral-900/90 px-2.5 py-0.5 rounded-md border border-neutral-800"
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
