import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Maximize2, PlayCircle, BookOpen, Share2, Code2, Check, Clock, PackageCheck, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/translations';

interface ServicesProps {
  services: ServiceItem[];
}

const ICON_MAP: Record<string, React.ElementType> = {
  Maximize2,
  PlayCircle,
  BookOpen,
  Share2,
  Code2
};

export const Services: React.FC<ServicesProps> = ({ services }) => {
  const { language } = useLanguage();
  const t = UI_TRANSLATIONS[language];

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-[#070A12] bg-mesh-pattern border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/30 text-xs text-sky-400 font-bold mb-4 shadow-[0_0_12px_rgba(56,189,248,0.2)]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            <span className="text-gradient-cyan">{t.services.title}</span>
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-normal max-w-xl mx-auto">
            {t.services.subtitle}
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName] || Briefcase;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden group shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/25 transition-all pointer-events-none" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-sky-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8 border-t border-b border-white/10 py-5">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs text-neutral-200 font-medium">
                        <div className="p-0.5 rounded-full bg-sky-500/20 text-sky-400 mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Service Meta info */}
                  <div className="flex items-center justify-between text-xs text-neutral-300 mb-6 bg-neutral-950/70 p-3.5 rounded-2xl border border-white/10 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-sky-400" />
                      <span className="font-semibold">{service.turnaroundTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <PackageCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-semibold">{service.deliverables}</span>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <a
                    href={`#contact?service=${encodeURIComponent(service.title)}`}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-extrabold border border-white/20 flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-sky-500/20 active:scale-95"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{t.services.orderButton}</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

