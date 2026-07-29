import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Maximize2, PlayCircle, BookOpen, Share2, Code2, Check, Clock, PackageCheck } from 'lucide-react';
import { ServiceItem } from '../types';

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
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-neutral-950/40">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-[#3A86FF] font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>আমার সেবাসমূহ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            যা যা অফার করছি
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base">
            আপনার অনলাইন ব্র্যান্ডিং ও কন্টেন্টের ভিজ্যুয়াল রিচ বাড়াতে হাই-কোয়ালিটি সার্ভিসেস
          </p>
          <div className="w-16 h-1 bg-[#3A86FF] mx-auto rounded-full mt-4" />
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
                className="glass-card glass-card-hover p-8 rounded-2xl border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#3A86FF] mb-6">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-6">{service.shortDesc}</p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8 border-t border-b border-neutral-800/80 py-4">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-[#3A86FF] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Service Meta info */}
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-6 bg-neutral-900/60 p-3 rounded-xl border border-neutral-800">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#3A86FF]" />
                      <span>{service.turnaroundTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <PackageCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{service.deliverables}</span>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <a
                    href={`#contact?service=${encodeURIComponent(service.title)}`}
                    className="w-full py-3 rounded-xl bg-neutral-900 hover:bg-[#3A86FF] text-white text-xs font-bold border border-neutral-800 hover:border-[#3A86FF] flex items-center justify-center gap-2 transition-all duration-200 active:scale-95"
                  >
                    <span>অর্ডার অথবা বিস্তারিত জানুন</span>
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
