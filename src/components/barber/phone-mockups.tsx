'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function PhoneFrame({ index }: { index: number }) {
  const hasNotch = index % 3 === 0;
  const hasHomeButton = !hasNotch;
  const w = 130;
  const h = 265;

  return (
    <div className="flex-shrink-0 relative mx-2 md:mx-3">
      <motion.div
        className="relative bg-[#1a1a1a] p-[4px]"
        style={{
          width: w,
          height: h,
          boxShadow: '0 15px 40px rgba(0,0,0,0.7), 0 0 1px rgba(201,169,110,0.2)',
        }}
        whileHover={{
          rotateY: 6,
          scale: 1.04,
          transition: { duration: 0.4 },
        }}
      >
        {/* metallic bezel */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#2a2a2a] via-[#1a1a1a] to-[#2a2a2a]"
          style={{ clipPath: 'polygon(0% 3%, 3% 0%, 15% 1.5%, 50% 0%, 85% 1.5%, 97% 0%, 100% 3%, 100% 97%, 97% 100%, 85% 98.5%, 50% 100%, 15% 98.5%, 3% 100%, 0% 97%)' }}
        />
        <div className="relative z-10 w-full h-full bg-[#0a0a0a] overflow-hidden">
          <div className="absolute inset-[2px] overflow-hidden bg-[#111] screen-glow">
            {hasNotch && (
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[55px] h-[18px] bg-[#0a0a0a] z-20">
                <div className="absolute top-[6px] right-[6px] w-[6px] h-[6px] bg-[#1a1a2e]" />
              </div>
            )}
            {!hasNotch && (
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#222] z-20" />
            )}
            <div className="w-full h-full bg-gradient-to-br from-[#111] to-[#0a0a0a] flex items-center justify-center">
              <div className="flex flex-col items-center gap-2 opacity-20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
                  <path d="M8 5l8 7-8 7" />
                </svg>
                <span className="text-[7px] font-mono text-cream/40 tracking-wider">yakında</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
          {hasHomeButton && (
            <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-7 h-7 border border-[#333] z-20">
              <div className="w-3 h-3 border border-[#333] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          )}
          {!hasHomeButton && (
            <div className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#333] z-20" />
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function PhoneMockups() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });
  const phoneCount = 8;

  return (
    <section ref={sectionRef} className="relative py-14 md:py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/barber/texture-bg.png')" }} />
      </div>
      <div className="absolute inset-0 bg-deep-black/75" />

      <div className="relative z-10">
        <div className="px-6 md:px-16 lg:px-24 mb-8 md:mb-10">
          <motion.p
            className="text-gold/50 text-[10px] font-mono tracking-[0.4em]"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            instagram &bull; videolar
          </motion.p>
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-cream/90 mt-2 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            en son çalışmamız
          </motion.h2>
        </div>

        {/* row 1 — scrolls right */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-0"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            {[...Array(phoneCount * 2)].map((_, i) => (
              <PhoneFrame key={`r1-${i}`} index={i} />
            ))}
          </motion.div>
        </div>

        {/* row 2 — scrolls left (reverse direction) */}
        <div className="overflow-hidden mt-4">
          <motion.div
            className="flex gap-0"
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          >
            {[...Array(phoneCount * 2)].map((_, i) => (
              <PhoneFrame key={`r2-${i}`} index={i + 1} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
