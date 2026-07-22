'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface PhoneMockupProps {
  model: string;
  year: string;
  hasNotch?: boolean;
  hasHomeButton?: boolean;
  videoUrl?: string;
 index: number;
}

function IPhoneFrame({ model, year, hasNotch = false, hasHomeButton = false, videoUrl, index }: PhoneMockupProps) {
  return (
    <motion.div
      className="flex-shrink-0 relative group"
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* phone body */}
      <motion.div
        className="relative w-[180px] h-[370px] md:w-[200px] md:h-[410px] bg-[#1a1a1a] p-[6px]"
        style={{
          boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 1px rgba(201,169,110,0.3)',
        }}
        whileHover={{
          rotateY: 8,
          rotateX: -3,
          scale: 1.05,
          transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
        }}
      >
        {/* outer bezel - metallic edge */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#2a2a2a]" style={{ clipPath: 'polygon(0% 3%, 3% 0%, 15% 1.5%, 50% 0%, 85% 1.5%, 97% 0%, 100% 3%, 100% 97%, 97% 100%, 85% 98.5%, 50% 100%, 15% 98.5%, 3% 100%, 0% 97%)' }} />
        
        {/* inner frame */}
        <div className="relative z-10 w-full h-full bg-[#0a0a0a] overflow-hidden">
          {/* screen area */}
          <div className="absolute inset-[3px] overflow-hidden bg-[#111] screen-glow">
            {/* notch / dynamic island */}
            {hasNotch && (
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[70px] h-[22px] bg-[#0a0a0a] z-20">
                <div className="absolute top-[7px] right-[8px] w-[8px] h-[8px] bg-[#1a1a2e]" />
              </div>
            )}

            {/* top speaker grille (non-notch phones) */}
            {!hasNotch && (
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-[#222] z-20" />
            )}

            {/* camera dot */}
            {!hasNotch && (
              <div className="absolute top-2 left-[25%] w-[5px] h-[5px] bg-[#1a1a2e] z-20" />
            )}

            {/* video / placeholder content */}
            <div className="w-full h-full bg-gradient-to-br from-[#111] to-[#0a0a0a] flex items-center justify-center relative">
              {videoUrl ? (
                <video
                  src={videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 opacity-30">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
                    <path d="M8 5l8 7-8 7" />
                  </svg>
                  <span className="text-[9px] font-mono text-cream/40 tracking-wider">yakında</span>
                </div>
              )}

              {/* screen reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* home button (iphone 7/8) */}
          {hasHomeButton && (
            <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-10 h-10 border border-[#333] z-20">
              <div className="w-4 h-4 border border-[#333] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          )}

          {/* bottom bar (iphone 14 - no home button) */}
          {!hasHomeButton && (
            <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-24 h-[3px] bg-[#333] z-20" />
          )}
        </div>
      </motion.div>

      {/* label below phone */}
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 + 0.5 }}
      >
        <p className="text-gold/60 text-[10px] font-mono tracking-[0.3em]">{model}</p>
        <p className="text-cream/20 text-[9px] font-mono mt-0.5">{year}</p>
      </motion.div>
    </motion.div>
  );
}

export default function PhoneMockups() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const phones: PhoneMockupProps[] = [
    { model: 'iphone 14', year: 'pro', hasNotch: true, hasHomeButton: false, index: 0 },
    { model: 'iphone 8', year: 'plus', hasNotch: false, hasHomeButton: true, index: 1 },
    { model: 'iphone 7', year: '', hasNotch: false, hasHomeButton: true, index: 2 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* section background texture */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/barber/texture-bg.png')" }}
        />
      </div>
      <div className="absolute inset-0 bg-deep-black/70" />

      <div className="relative z-10">
        {/* section header */}
        <div className="px-6 md:px-16 lg:px-24 mb-12 md:mb-16">
          <motion.p
            className="text-gold/50 text-xs font-mono tracking-[0.4em]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            instagram &bull; videolar
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-cream/90 mt-3 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            en son çalışmamız
          </motion.h2>
          <motion.div
            className="mt-4 h-px bg-gold/20 max-w-[80px]"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>

        {/* phone horizontal scroll */}
        <div className="overflow-x-auto no-scrollbar px-6 md:px-16 lg:px-24">
          <div className="flex gap-8 md:gap-12 lg:gap-16 pb-8 w-max">
            {phones.map((phone) => (
              <IPhoneFrame key={phone.model} {...phone} />
            ))}
          </div>
        </div>

        {/* scroll hint */}
        <motion.div
          className="flex items-center gap-2 mt-8 px-6 md:px-16 lg:px-24 opacity-30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <span className="text-xs font-mono text-cream/50 tracking-wider">kaydır →</span>
        </motion.div>
      </div>
    </section>
  );
}
