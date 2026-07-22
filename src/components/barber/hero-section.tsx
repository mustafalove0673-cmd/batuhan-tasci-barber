'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '@/lib/config';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100px']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.4, 0.85]);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* parallax background */}
      <motion.div className="absolute inset-0 w-full h-[130%] -top-[15%]" style={{ y: bgY }}>
        <div className="w-full h-full bg-cover bg-center scale-105" style={{ backgroundImage: "url('/images/barber/hero-bg.png')" }} />
      </motion.div>

      {/* dark overlay - stronger for readability */}
      <motion.div className="absolute inset-0 bg-deep-black" style={{ opacity: overlayOpacity }} />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-deep-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-black/70 via-transparent to-deep-black/50" />

      {/* left vertical text */}
      <motion.div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 hidden lg:block" initial={{ opacity: 0 }} animate={{ opacity: 0.12 }} transition={{ duration: 2, delay: 2 }}>
        <p className="vertical-text text-orange text-[10px] tracking-[0.4em] font-mono">{siteConfig.tagline}</p>
      </motion.div>

      {/* main content — spacious, left-aligned, bottom */}
      <div className="relative z-10 flex flex-col justify-end h-full px-8 md:px-20 lg:px-32 pb-28 md:pb-36">
        <motion.div style={{ y: textY }}>
          {/* tagline */}
          <motion.p className="text-orange/70 text-[11px] md:text-xs tracking-[0.5em] font-mono" initial={{ y: 25, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.4, ease: [0.77, 0, 0.175, 1] }}>
            {siteConfig.tagline}
          </motion.p>

          {/* business name — full line wipe reveal */}
          <div className="overflow-hidden mt-5 md:mt-8">
            <motion.h1 className="text-5xl md:text-7xl lg:text-[7rem] xl:text-[8.5rem] font-bold leading-[0.85] tracking-tighter text-cream" initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 1.2, delay: 0.7, ease: [0.77, 0, 0.175, 1] }}>
              {siteConfig.businessNameShort}
            </motion.h1>
          </div>

          {/* name — different weight, orange accent */}
          <div className="overflow-hidden mt-1 md:mt-2">
            <motion.h2 className="text-2xl md:text-4xl lg:text-5xl font-extralight text-orange/80 tracking-tight" initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 1.2, delay: 1.0, ease: [0.77, 0, 0.175, 1] }}>
              batuhan taşçı
            </motion.h2>
          </div>

          {/* decorative line */}
          <motion.div className="mt-8 md:mt-12 h-px w-32 bg-gradient-to-r from-orange/50 via-gold/30 to-transparent" initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.5, delay: 1.5, ease: [0.77, 0, 0.175, 1] }} />

          {/* working style note */}
          <motion.p className="mt-5 text-xs md:text-sm text-cream/25 font-mono tracking-wider max-w-sm" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2 }}>
            {siteConfig.workingStyle}
          </motion.p>

          {/* cta */}
          <motion.div className="mt-8" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 2.3 }}>
            <a href="#iletisim" className="group inline-flex items-center gap-3 text-cream/70 hover:text-orange text-sm tracking-[0.3em] font-mono transition-colors duration-400">
              <span>randevu al</span>
              <motion.span className="inline-block" animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>→</motion.span>
              <span className="absolute bottom-0 left-0 h-px w-full bg-orange/40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-deep-black to-transparent z-20 pointer-events-none" />

      {/* scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 0.35 }} transition={{ duration: 1, delay: 3 }}>
        <span className="text-[10px] font-mono text-cream/30 tracking-[0.3em]">scroll</span>
        <motion.div className="w-px h-8 bg-gradient-to-b from-orange/50 to-transparent" animate={{ scaleY: [0, 1, 0], originY: 0 }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }} />
      </motion.div>
    </section>
  );
}
