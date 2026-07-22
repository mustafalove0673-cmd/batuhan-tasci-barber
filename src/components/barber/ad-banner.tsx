'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface AdBannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  bgImage: string;
}

export default function AdBanner({ title, subtitle, ctaText, ctaLink, bgImage }: AdBannerProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${bgImage}')` }} />
      </motion.div>
      <div className="absolute inset-0 bg-deep-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-black/60 via-transparent to-deep-black/40" />

      <div className="relative z-10 py-16 md:py-24 px-5 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-1 bg-gold" />
            <span className="text-gold/70 text-xs md:text-sm font-mono tracking-[0.4em] font-bold">özel teklif</span>
          </div>
          <motion.h3
            className="text-4xl md:text-5xl lg:text-6xl font-black text-cream leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="mt-4 text-base md:text-lg text-cream/50 max-w-md leading-relaxed font-bold"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {subtitle}
          </motion.p>
          <motion.div className="mt-8" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}>
            <a
              href={ctaLink}
              className="group inline-flex items-center gap-2 text-gold text-sm md:text-base tracking-[0.2em] font-mono font-bold border-b border-gold/30 hover:border-gold/60 pb-1 transition-colors duration-300"
            >
              <span>{ctaText}</span>
              <motion.span className="inline-block" animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>→</motion.span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
