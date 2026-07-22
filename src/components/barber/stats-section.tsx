'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 500, suffix: '+', label: 'müteri', color: 'text-orange' },
  { value: 7, suffix: '+', label: 'yıllık deneyim', color: 'text-gold' },
  { value: 100, suffix: '%', label: 'memnuniyet', color: 'text-orange' },
  { value: 5, suffix: '', label: 'yıldız hizmet', color: 'text-gold' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-[#0e0e0e] to-deep-black" />
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/barber/texture-bg.png')" }} />
      </div>

      <div className="relative z-10 px-5 md:px-16 lg:px-24">
        <div className="flex items-center gap-4 mb-10 md:mb-14">
          <div className="w-8 h-1 bg-orange" />
          <span className="text-orange/60 text-xs md:text-sm font-mono tracking-[0.4em] font-bold">rakamlarla biz</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <p className={`text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter ${stat.color}`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-cream/40 font-mono tracking-wider font-bold">{stat.label}</p>
              <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-orange/30 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
