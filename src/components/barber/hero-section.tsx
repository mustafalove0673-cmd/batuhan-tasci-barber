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

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '150px']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.35, 0.88]);
  const topBarY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-100%']);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* parallax background */}
      <motion.div className="absolute inset-0 w-full h-[140%] -top-[20%]" style={{ y: bgY }}>
        <div
          className="w-full h-full bg-cover bg-center scale-110"
          style={{ backgroundImage: "url('/images/barber/hero-bg.png')" }}
        />
      </motion.div>

      {/* dark overlay */}
      <motion.div className="absolute inset-0 bg-deep-black" style={{ opacity: overlayOpacity }} />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-deep-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-black/60 via-transparent to-deep-black/40" />

      {/* scan line effect */}
      <div className="absolute inset-0 scan-line overflow-hidden pointer-events-none z-20" />

      {/* top bar — always visible, fills the top */}
      <motion.div className="absolute top-0 left-0 right-0 z-30" style={{ y: topBarY }}>
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 md:py-5">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-orange animate-pulse" />
            <span className="text-[10px] font-mono text-cream/50 tracking-[0.4em]">
              {siteConfig.tagline}
            </span>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 md:gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono text-cream/40 hover:text-green-400 tracking-[0.2em] transition-colors duration-300 border border-dark-border/60 hover:border-green-400/30 px-3 py-1.5"
            >
              whatsapp
            </a>
            <a
              href={siteConfig.phoneHref}
              className="text-[10px] font-mono text-cream/40 hover:text-orange tracking-[0.2em] transition-colors duration-300 border border-dark-border/60 hover:border-orange/30 px-3 py-1.5"
            >
              ara
            </a>
            <a
              href="#iletisim"
              className="text-[10px] font-mono text-deep-black bg-orange hover:bg-orange-light tracking-[0.2em] transition-colors duration-300 px-4 py-1.5"
            >
              randevu
            </a>
          </motion.div>
        </div>
        {/* thin gold line under top bar */}
        <motion.div
          className="h-px bg-gradient-to-r from-orange/40 via-gold/20 to-transparent"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.77, 0, 0.175, 1] }}
        />
      </motion.div>

      {/* left vertical decorative text */}
      <motion.div
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2, delay: 1.5 }}
      >
        <p className="vertical-text text-orange text-[9px] tracking-[0.5em] font-mono">
          {siteConfig.tagline} &bull; {siteConfig.address.short}
        </p>
      </motion.div>

      {/* right vertical decorative text */}
      <motion.div
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 hidden xl:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 2, delay: 1.8 }}
      >
        <p className="vertical-text text-gold text-[9px] tracking-[0.5em] font-mono">
          {siteConfig.instagram} &bull; {siteConfig.phoneClean}
        </p>
      </motion.div>

      {/* floating decorative elements — top left area */}
      <motion.div
        className="absolute top-24 left-6 md:left-16 z-20 hidden md:block"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M5 30 Q15 5 30 5 Q45 5 55 30 Q45 55 30 55 Q15 55 5 30Z" stroke="#d4722a" strokeWidth="0.5" fill="none" />
          <path d="M15 30 Q22 15 30 15 Q38 15 45 30 Q38 45 30 45 Q22 45 15 30Z" stroke="#c9a96e" strokeWidth="0.3" fill="none" strokeDasharray="200" strokeDashoffset="200" style={{ animation: 'dash-draw 3s ease-out 1.5s forwards' }} />
        </svg>
      </motion.div>

      {/* floating decorative elements — top right area */}
      <motion.div
        className="absolute top-32 right-8 md:right-20 z-20 hidden md:block"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 0.1, rotate: 0 }}
        transition={{ duration: 1.5, delay: 1.3, ease: 'easeOut' }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M2 20 C2 10 10 2 20 2 C30 2 38 10 38 20 C38 30 30 38 20 38 C10 38 2 30 2 20" stroke="#c9a96e" strokeWidth="0.4" fill="none" strokeDasharray="150" strokeDashoffset="150" style={{ animation: 'dash-draw 2.5s ease-out 2s forwards' }} />
        </svg>
      </motion.div>

      {/* main content — fills the viewport */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 lg:px-24 xl:px-32">
        <motion.div style={{ y: textY }}>
          {/* top label */}
          <motion.div
            className="flex items-center gap-3 mb-6 md:mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
          >
            <div className="w-8 md:w-12 h-px bg-gradient-to-r from-orange to-orange/20" />
            <span className="text-orange/60 text-[10px] md:text-xs tracking-[0.4em] font-mono">
              {siteConfig.workingStyle}
            </span>
          </motion.div>

          {/* huge name — fills space */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-bold leading-[0.88] tracking-tighter text-cream"
              initial={{ y: '105%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.4, delay: 0.5, ease: [0.77, 0, 0.175, 1] }}
            >
              men&rsquo;s hair
            </motion.h1>
          </div>

          {/* business name with orange accent */}
          <div className="overflow-hidden mt-1 md:mt-2">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extralight text-orange/85 tracking-tight"
              initial={{ y: '105%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.4, delay: 0.75, ease: [0.77, 0, 0.175, 1] }}
            >
              batuhan taşçı
            </motion.h2>
          </div>

          {/* subline */}
          <div className="overflow-hidden mt-2">
            <motion.p
              className="text-sm md:text-base lg:text-lg text-cream/25 font-mono tracking-[0.15em]"
              initial={{ y: '105%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.2, delay: 1.0, ease: [0.77, 0, 0.175, 1] }}
            >
              {siteConfig.address.short} &bull; premium erkek kuaförü
            </motion.p>
          </div>

          {/* animated decorative line */}
          <motion.div
            className="mt-6 md:mt-10 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div
              className="h-px bg-gradient-to-r from-orange/50 via-gold/30 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: '160px' }}
              transition={{ duration: 1.5, delay: 1.6, ease: [0.77, 0, 0.175, 1] }}
            />
            <motion.span
              className="text-[9px] font-mono text-cream/15 tracking-[0.3em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
              est. 2018
            </motion.span>
          </motion.div>

          {/* CTA buttons row */}
          <motion.div
            className="mt-8 md:mt-12 flex flex-wrap items-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <a
              href="#iletisim"
              className="group relative inline-flex items-center gap-3 text-cream/80 hover:text-orange text-xs md:text-sm tracking-[0.25em] font-mono transition-colors duration-400"
            >
              <span className="relative">
                randevu al
                <span className="absolute bottom-0 left-0 h-px w-full bg-orange/0 group-hover:bg-orange/50 transition-all duration-500" />
              </span>
              <motion.span
                className="inline-block text-orange"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </a>
            <span className="text-cream/10 font-mono text-[10px]">|</span>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/40 hover:text-gold text-xs font-mono tracking-[0.2em] transition-colors duration-300"
            >
              {siteConfig.instagram}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* bottom section — phone + hours visible */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <div className="bg-gradient-to-t from-deep-black via-deep-black/90 to-transparent pt-20 pb-6 px-6 md:px-16 lg:px-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
              <a href={siteConfig.phoneHref} className="text-lg md:text-xl font-bold text-cream/70 hover:text-orange transition-colors duration-300 tracking-tight">
                {siteConfig.phoneClean}
              </a>
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[11px] font-mono text-green-400/60 hover:text-green-400 tracking-wider transition-colors duration-300">
                whatsapp &rarr;
              </a>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              {siteConfig.hours.slice(0, 2).map((h) => (
                <span key={h.day} className="text-[10px] font-mono text-cream/20 tracking-wider">
                  <span className="text-cream/30">{h.day}</span>
                  <span className="ml-1.5 text-cream/40">{h.time}</span>
                </span>
              ))}
              <span className="text-[10px] font-mono text-cream/20 tracking-wider">
                <span className="text-cream/30">paz</span>
                <span className="ml-1.5 text-orange/40">kapalı</span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <span className="text-[8px] font-mono text-cream/20 tracking-[0.4em]">scroll</span>
        <motion.div
          className="w-px h-5 bg-gradient-to-b from-gold/40 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
