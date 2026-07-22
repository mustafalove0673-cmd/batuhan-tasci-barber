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
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '120px']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.85]);
  const topBarY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-100%']);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* parallax background */}
      <motion.div className="absolute inset-0 w-full h-[130%] -top-[15%]" style={{ y: bgY }}>
        <div
          className="w-full h-full bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/barber/hero-bg.png')" }}
        />
      </motion.div>

      {/* dark overlay */}
      <motion.div className="absolute inset-0 bg-deep-black" style={{ opacity: overlayOpacity }} />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/30 to-deep-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-black/70 via-transparent to-deep-black/50" />

      {/* top action bar — fills the top */}
      <motion.div className="absolute top-0 left-0 right-0 z-30" style={{ y: topBarY }}>
        <div className="flex items-center justify-between px-5 md:px-12 lg:px-20 py-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-orange rounded-full animate-pulse" />
            <span className="text-xs font-mono text-cream/60 tracking-[0.3em] font-bold">
              {siteConfig.tagline}
            </span>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cream/50 hover:text-green-400 tracking-[0.15em] font-bold transition-colors duration-300 border border-cream/10 hover:border-green-400/30 px-3 py-1.5"
            >
              whatsapp
            </a>
            <a
              href={siteConfig.phoneHref}
              className="text-xs font-mono text-cream/50 hover:text-orange tracking-[0.15em] font-bold transition-colors duration-300 border border-cream/10 hover:border-orange/30 px-3 py-1.5"
            >
              ara
            </a>
            <a
              href="#iletisim"
              className="text-xs font-mono text-deep-black bg-orange hover:bg-orange-light tracking-[0.15em] font-bold transition-colors duration-300 px-4 py-1.5"
            >
              randevu
            </a>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-orange/50 via-gold/20 to-transparent" />
      </motion.div>

      {/* left vertical decorative text */}
      <motion.div
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1.5 }}
      >
        <p className="vertical-text text-orange text-[10px] tracking-[0.5em] font-mono font-bold">
          {siteConfig.tagline} — {siteConfig.address.short}
        </p>
      </motion.div>

      {/* main content — centered vertically, fills viewport */}
      <div className="relative z-10 flex flex-col justify-center h-full px-5 md:px-16 lg:px-24 xl:px-32">
        <motion.div style={{ y: textY }}>
          {/* top label */}
          <motion.div
            className="flex items-center gap-4 mb-6 md:mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="w-10 h-1 bg-orange" />
            <span className="text-orange/70 text-xs md:text-sm tracking-[0.35em] font-mono font-bold">
              {siteConfig.workingStyle}
            </span>
          </motion.div>

          {/* huge title */}
          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[11rem] font-black leading-[0.85] tracking-tighter text-cream"
              initial={{ y: '105%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.77, 0, 0.175, 1] }}
            >
              men&rsquo;s hair
            </motion.h1>
          </div>

          {/* name with orange */}
          <div className="overflow-hidden mt-1 md:mt-2">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-orange/90 tracking-tight"
              initial={{ y: '105%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.77, 0, 0.175, 1] }}
            >
              batuhan taşçı
            </motion.h2>
          </div>

          {/* subline — bigger, more readable */}
          <div className="overflow-hidden mt-3">
            <motion.p
              className="text-sm md:text-lg lg:text-xl text-cream/40 font-mono tracking-[0.12em] font-bold"
              initial={{ y: '105%' }}
              animate={{ y: '0%' }}
              transition={{ duration: 1, delay: 0.95 }}
            >
              {siteConfig.address.short} — premium erkek kuaförü
            </motion.p>
          </div>

          {/* decorative line */}
          <motion.div
            className="mt-8 md:mt-10 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <motion.div
              className="h-0.5 bg-gradient-to-r from-orange/60 via-gold/30 to-transparent"
              initial={{ width: 0 }}
              animate={{ width: '180px' }}
              transition={{ duration: 1.5, delay: 1.5 }}
            />
            <span className="text-xs font-mono text-cream/20 tracking-[0.3em] font-bold">est. 2018</span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="mt-8 md:mt-10 flex flex-wrap items-center gap-5 md:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <a
              href="#iletisim"
              className="group inline-flex items-center gap-3 text-cream text-sm md:text-base tracking-[0.2em] font-mono font-bold"
            >
              <span className="relative">
                randevu al
                <span className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-orange transition-all duration-500" />
              </span>
              <motion.span
                className="text-orange text-lg"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </a>
            <span className="text-cream/10 font-mono text-sm">|</span>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/50 hover:text-gold text-sm font-mono tracking-[0.15em] font-bold transition-colors duration-300"
            >
              {siteConfig.instagram}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* bottom info strip */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        <div className="bg-gradient-to-t from-deep-black via-deep-black/95 to-transparent pt-24 pb-5 px-5 md:px-16 lg:px-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <a href={siteConfig.phoneHref} className="text-xl md:text-2xl font-black text-cream/80 hover:text-orange transition-colors duration-300 tracking-tight">
                {siteConfig.phoneClean}
              </a>
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-green-400/70 hover:text-green-400 tracking-wider font-bold transition-colors duration-300">
                whatsapp →
              </a>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              {siteConfig.hours.slice(0, 2).map((h) => (
                <span key={h.day} className="text-xs font-mono text-cream/30 tracking-wider font-bold">
                  <span className="text-cream/50">{h.day}</span>
                  <span className="ml-1.5 text-cream/60">{h.time}</span>
                </span>
              ))}
              <span className="text-xs font-mono text-cream/20 tracking-wider font-bold">
                <span className="text-cream/40">paz</span>
                <span className="ml-1.5 text-orange/50">kapalı</span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-30 hidden md:flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 3 }}
      >
        <span className="text-[9px] font-mono text-cream/25 tracking-[0.4em] font-bold">scroll</span>
        <motion.div
          className="w-px h-5 bg-gradient-to-b from-gold/50 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
