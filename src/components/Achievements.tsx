import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, Smile, Layers, Coffee } from 'lucide-react';
import { AchievementItem } from '../types';

interface AchievementsProps {
  achievements: AchievementItem[];
}

const ICON_MAP: Record<string, React.ElementType> = {
  CheckCircle2,
  Smile,
  Award,
  Layers,
  Coffee
};

const AnimatedNumber: React.FC<{ value: number; suffix: string }> = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-b border-neutral-800/80 bg-neutral-950/30">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
          {achievements.map((item, index) => {
            const IconComponent = ICON_MAP[item.iconName] || Award;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-neutral-800 flex flex-col items-center justify-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#3A86FF] mb-3 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>

                <p className="text-2xl sm:text-4xl font-extrabold text-white mb-1">
                  <AnimatedNumber value={item.number} suffix={item.suffix} />
                </p>

                <p className="text-xs sm:text-sm font-semibold text-neutral-400">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
