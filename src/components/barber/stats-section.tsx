'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 500, suffix: '+', label: 'mutteri', color: 'text-orange' },
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
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black via-[#0f0f0f] to-deep-black" />
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/barber/texture-bg.png')" }} />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

      <div className="relative z-10 px-8 md:px-20 lg:px-32">
        <motion.p
          className="text-orange/40 text-[10px] font-mono tracking-[0.5em] mb-12"
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          &bull; rakamlarla biz &bull;
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <p className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter ${stat.color}`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-xs text-cream/30 font-mono tracking-wider">{stat.label}</p>
              <motion.div
                className="mt-3 h-px bg-gradient-to-r from-orange/20 to-transparent"
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12 + 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
