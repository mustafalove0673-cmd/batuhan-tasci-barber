'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
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

/* each image gets a unique entrance animation */
const animations = [
  { initial: { y: 50, opacity: 0, scale: 0.92 } },
  { initial: { x: -40, opacity: 0, rotate: -1.5 } },
  { initial: { y: -40, opacity: 0, scale: 0.88 } },
  { initial: { x: 40, opacity: 0, rotate: 1.5 } },
  { initial: { scale: 0.8, opacity: 0 } },
  { initial: { y: 30, x: -20, opacity: 0 } },
  { initial: { x: 30, y: -20, opacity: 0, rotate: -1 } },
  { initial: { scale: 0.85, rotate: 2, opacity: 0 } },
];

const clips = [
  'polygon(0% 4%, 4% 0%, 20% 1%, 45% 0%, 70% 1.5%, 96% 0%, 100% 3%, 100% 96%, 97% 100%, 75% 98%, 50% 100%, 25% 99%, 3% 100%, 0% 97%)',
  'polygon(2% 0%, 18% 2%, 40% 0%, 60% 1.5%, 82% 0%, 100% 2%, 98% 20%, 100% 50%, 99% 80%, 100% 98%, 82% 100%, 60% 98%, 38% 100%, 18% 99%, 0% 100%, 2% 82%, 0% 50%, 1% 18%)',
  'polygon(0% 3%, 8% 0%, 30% 1%, 55% 0%, 80% 1%, 100% 0%, 100% 97%, 92% 100%, 70% 99%, 45% 100%, 20% 98%, 0% 100%)',
  'polygon(3% 0%, 25% 2%, 50% 0%, 75% 1%, 100% 0%, 97% 25%, 100% 50%, 98% 75%, 100% 100%, 75% 98%, 50% 100%, 25% 99%, 0% 100%, 2% 75%, 0% 50%, 3% 25%)',
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgX = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);

  return (
    <section ref={sectionRef} id="galeri" className="relative py-14 md:py-20 overflow-hidden">
      <motion.div className="absolute inset-0 opacity-10" style={{ x: bgX }}>
        <div className="w-[115%] h-full bg-cover bg-center blur-sm" style={{ backgroundImage: "url('/images/barber/texture-bg.png')" }} />
      </motion.div>
      <div className="absolute inset-0 bg-deep-black/85" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24">
        <div className="mb-8 md:mb-10">
          <motion.p
            className="text-gold/50 text-[10px] font-mono tracking-[0.4em]"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            &bull; galeri &bull;
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-cream/90 mt-2 tracking-tight"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            işlerimiz
          </motion.h2>
        </div>

        {/* dense grid — small images, 4 cols on lg, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {items.map((item, i) => {
            const anim = animations[i % animations.length];
            const clip = clips[i % clips.length];
            const heights = ['h-[160px] md:h-[200px]', 'h-[180px] md:h-[220px]', 'h-[150px] md:h-[190px]', 'h-[170px] md:h-[210px]'];
            const h = heights[i % heights.length];

            return (
              <motion.div
                key={`${item.src}-${i}`}
                className={`relative overflow-hidden group cursor-pointer ${h}`}
                initial={anim.initial}
                whileInView={{ y: 0, x: 0, opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.7 + (i % 3) * 0.15,
                  delay: (i % 4) * 0.06,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div
                  className="absolute inset-0 transition-transform duration-600 ease-out group-hover:scale-105"
                  style={{ clipPath: clip }}
                >
                  <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <div className="absolute inset-0 bg-deep-black/0 group-hover:bg-deep-black/40 transition-all duration-500 z-10" />
                {/* grain */}
                <div className="absolute inset-0 z-10 pointer-events-none opacity-15"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
                  }}
                />
                {/* label on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-3 z-30">
                  <p className="text-gold text-[10px] font-mono tracking-[0.3em] translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out">
                    {item.label}
                  </p>
                </div>
                {/* corner accent */}
                <div className="absolute top-2 right-2 z-20 w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity duration-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="0.5">
                    <path d="M18 2c0 8-8 16-16 16" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* background marquee text */}
        <motion.div
          className="mt-10 md:mt-14 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.06 }}
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
