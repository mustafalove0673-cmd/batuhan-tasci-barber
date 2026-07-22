'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const items = [
  { src: '/images/barber/gallery-1.png', alt: 'fade kesim', label: 'fade' },
  { src: '/images/barber/gallery-2.png', alt: 'klasik tıraş', label: 'tıraş' },
  { src: '/images/barber/gallery-3.png', alt: 'modern stil', label: 'stil' },
  { src: '/images/barber/gallery-4.png', alt: 'berber aletleri', label: 'aletler' },
  { src: '/images/barber/gallery-5.png', alt: 'sakal', label: 'sakal' },
  { src: '/images/barber/gallery-6.png', alt: 'mekan', label: 'mekan' },
  { src: '/images/barber/gallery-1.png', alt: 'detay', label: 'detay' },
  { src: '/images/barber/gallery-3.png', alt: 'portre', label: 'portre' },
];

/* unique organic clips for each item */
const clips = [
  'polygon(0% 3%, 6% 0%, 22% 1.5%, 45% 0%, 68% 1%, 88% 0%, 100% 3%, 100% 96%, 94% 100%, 78% 98%, 55% 100%, 32% 99%, 12% 100%, 0% 97%)',
  'polygon(2% 0%, 18% 2.5%, 40% 0%, 62% 1.5%, 84% 0%, 100% 2%, 98% 22%, 100% 52%, 99% 78%, 100% 97%, 82% 100%, 60% 98%, 38% 100%, 16% 99%, 0% 100%, 1% 78%, 0% 48%, 2% 18%)',
  'polygon(0% 4%, 8% 0%, 25% 1.5%, 48% 0%, 72% 1%, 92% 0%, 100% 3%, 100% 97%, 90% 100%, 70% 99%, 45% 100%, 22% 98%, 5% 100%, 0% 96%)',
  'polygon(3% 0%, 20% 2%, 42% 0%, 65% 1.5%, 88% 0%, 100% 3%, 97% 28%, 100% 58%, 98% 82%, 100% 98%, 80% 100%, 58% 99%, 35% 100%, 15% 98%, 0% 100%, 2% 80%, 0% 50%, 1% 22%)',
  'polygon(0% 2%, 10% 0%, 30% 1%, 55% 0%, 78% 1.5%, 95% 0%, 100% 2%, 100% 98%, 92% 100%, 72% 99%, 48% 100%, 25% 98%, 8% 100%, 0% 98%)',
  'polygon(1.5% 0%, 15% 3%, 35% 0%, 58% 2%, 80% 0%, 98% 1.5%, 100% 15%, 99% 45%, 100% 75%, 98% 100%, 78% 97%, 55% 100%, 32% 98%, 12% 100%, 0% 98%, 1% 70%, 0% 40%, 2% 15%)',
  'polygon(0% 5%, 7% 0%, 20% 2%, 40% 0%, 62% 1.5%, 82% 0%, 100% 4%, 100% 95%, 93% 100%, 75% 98%, 52% 100%, 30% 99%, 12% 100%, 0% 96%)',
  'polygon(2% 0%, 22% 1.5%, 45% 0%, 68% 2%, 90% 0%, 100% 2%, 99% 25%, 100% 55%, 98% 80%, 100% 98%, 85% 100%, 62% 99%, 38% 100%, 18% 98%, 0% 100%, 1% 75%, 0% 48%, 2% 20%)',
];

/* varied entrance animations */
const entranceAnims = [
  { initial: { y: 60, opacity: 0, scale: 0.9, rotate: -1.5 } },
  { initial: { x: -50, opacity: 0, scale: 0.92, rotate: 1 } },
  { initial: { y: -40, opacity: 0, scale: 0.88, rotate: 0.5 } },
  { initial: { x: 50, opacity: 0, scale: 0.91, rotate: -0.8 } },
  { initial: { scale: 0.8, opacity: 0, rotate: 2 } },
  { initial: { y: 35, x: -25, opacity: 0, scale: 0.93 } },
  { initial: { x: 35, y: -30, opacity: 0, scale: 0.87, rotate: -1.2 } },
  { initial: { scale: 0.85, rotate: 1.5, opacity: 0, y: 20 } },
];

/* varied heights for visual interest */
const heights = [
  'h-[180px] md:h-[240px]',
  'h-[200px] md:h-[260px]',
  'h-[160px] md:h-[220px]',
  'h-[190px] md:h-[250px]',
  'h-[170px] md:h-[230px]',
  'h-[210px] md:h-[270px]',
  'h-[175px] md:h-[235px]',
  'h-[195px] md:h-[255px]',
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgX = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);

  return (
    <section ref={sectionRef} id="galeri" className="relative py-14 md:py-20 overflow-hidden">
      <motion.div className="absolute inset-0 opacity-8" style={{ x: bgX }}>
        <div className="w-[115%] h-full bg-cover bg-center blur-sm" style={{ backgroundImage: "url('/images/barber/texture-bg.png')" }} />
      </motion.div>
      <div className="absolute inset-0 bg-deep-black/88" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange/[0.015] to-transparent" />
      </div>

      <div className="relative z-10 px-6 md:px-16 lg:px-24">
        {/* header */}
        <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <motion.div
              className="flex items-center gap-3 mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="w-6 h-px bg-gold" />
              <span className="text-gold/50 text-[10px] font-mono tracking-[0.4em]">galeri</span>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-cream/90 tracking-tight leading-[0.95]"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              işlerimiz
            </motion.h2>
          </div>
          <motion.p
            className="text-xs text-cream/20 font-mono tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            her detay özenle şekillendirilir
          </motion.p>
        </div>

        {/* masonry-style grid with offset rows */}
        <div className="flex flex-col gap-3 md:gap-4">
          {/* row 1 — 4 items, slight rotation on last */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {items.slice(0, 4).map((item, i) => {
              const anim = entranceAnims[i];
              const clip = clips[i];
              const h = heights[i];
              return (
                <motion.div
                  key={`${item.src}-r1-${i}`}
                  className={`relative overflow-hidden group cursor-pointer ${h}`}
                  style={{ clipPath: clip }}
                  initial={anim.initial}
                  whileInView={{ y: 0, x: 0, opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: 0.8 + (i % 3) * 0.12,
                    delay: (i % 4) * 0.07,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 25vw" />
                  {/* overlay layers */}
                  <div className="absolute inset-0 bg-deep-black/0 group-hover:bg-deep-black/50 transition-all duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  {/* grain */}
                  <div
                    className="absolute inset-0 z-10 pointer-events-none opacity-15"
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
                    }}
                  />
                  {/* label */}
                  <div className="absolute bottom-3 left-3 z-30 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                    <p className="text-orange text-[10px] font-mono tracking-[0.3em] bg-deep-black/60 px-2 py-0.5 backdrop-blur-sm">{item.label}</p>
                  </div>
                  {/* hover corner accent */}
                  <div className="absolute top-2 right-2 z-20 w-5 h-5 opacity-0 group-hover:opacity-50 transition-opacity duration-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#d4722a" strokeWidth="0.5">
                      <path d="M18 2c0 8-8 16-16 16" />
                    </svg>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* row 2 — 4 items, shifted/offset style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 md:pl-8">
            {items.slice(4, 8).map((item, i) => {
              const anim = entranceAnims[i + 4];
              const clip = clips[i + 4];
              const h = heights[i + 4];
              return (
                <motion.div
                  key={`${item.src}-r2-${i}`}
                  className={`relative overflow-hidden group cursor-pointer ${h}`}
                  style={{ clipPath: clip }}
                  initial={anim.initial}
                  whileInView={{ y: 0, x: 0, opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: 0.8 + (i % 3) * 0.12,
                    delay: (i % 4) * 0.07,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-deep-black/0 group-hover:bg-deep-black/50 transition-all duration-500 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <div
                    className="absolute inset-0 z-10 pointer-events-none opacity-15"
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
                    }}
                  />
                  <div className="absolute bottom-3 left-3 z-30 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                    <p className="text-gold text-[10px] font-mono tracking-[0.3em] bg-deep-black/60 px-2 py-0.5 backdrop-blur-sm">{item.label}</p>
                  </div>
                  <div className="absolute top-2 right-2 z-20 w-5 h-5 opacity-0 group-hover:opacity-50 transition-opacity duration-400">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="0.5">
                      <path d="M18 2c0 8-8 16-16 16" />
                    </svg>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* background marquee text */}
        <motion.div
          className="mt-10 md:mt-14 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
        >
          <div className="flex whitespace-nowrap marquee" style={{ animationDuration: '40s' }}>
            <span className="text-4xl md:text-6xl font-bold text-cream tracking-tighter mx-3">
              kesim &bull; tıraş &bull; stil &bull; sakal &bull; fade &bull; klasik &bull; modern &bull; berber &bull;
            </span>
            <span className="text-4xl md:text-6xl font-bold text-cream tracking-tighter mx-3">
              kesim &bull; tıraş &bull; stil &bull; sakal &bull; fade &bull; klasik &bull; modern &bull; berber &bull;
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
