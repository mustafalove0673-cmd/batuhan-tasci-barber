'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

const galleryItems = [
  { src: '/images/barber/gallery-1.png', alt: 'fade kesim', label: 'fade', clipClass: 'organic-clip' },
  { src: '/images/barber/gallery-2.png', alt: 'klasik tıraş', label: 'tıraş', clipClass: 'organic-clip-alt' },
  { src: '/images/barber/gallery-3.png', alt: 'modern stil', label: 'stil', clipClass: 'organic-clip' },
  { src: '/images/barber/gallery-4.png', alt: 'berber aletleri', label: 'aletler', clipClass: 'organic-clip-alt' },
  { src: '/images/barber/gallery-5.png', alt: 'sakal şekillendirme', label: 'sakal', clipClass: 'organic-clip' },
  { src: '/images/barber/gallery-6.png', alt: 'berber dükkanı', label: 'mekan', clipClass: 'organic-clip-alt' },
];

function GalleryItem({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  // alternate sizes for asymmetric layout
  const sizeClasses = index === 0
    ? 'col-span-2 md:col-span-2 row-span-2 h-[400px] md:h-[500px]'
    : index === 3
    ? 'col-span-2 h-[250px] md:h-[300px]'
    : 'col-span-1 h-[300px] md:h-[350px]';

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden group cursor-pointer ${sizeClasses}`}
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 1,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* image container with organic clip */}
      <div className={`absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105 ${item.clipClass}`}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* dark overlay on hover */}
      <div className="absolute inset-0 bg-deep-black/0 group-hover:bg-deep-black/50 transition-all duration-700 z-10" />

      {/* developing effect - bright flash on first view */}
      <motion.div
        className="absolute inset-0 bg-cream z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={isInView ? [{ opacity: 0.8, transition: { duration: 0.1 } }, { opacity: 0, transition: { duration: 1.5, delay: 0.1 } }] : {}}
      />

      {/* grain texture on image */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-30"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
        }}
      />

      {/* label - appears on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-30"
        initial={false}
      >
        <div className="overflow-hidden">
          <motion.p
            className="text-gold text-xs font-mono tracking-[0.4em] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
          >
            {item.label}
          </motion.p>
        </div>
        <div className="overflow-hidden mt-1">
          <motion.div
            className="h-px bg-gold/50 w-0 group-hover:w-12 transition-all duration-700 ease-out delay-100"
          />
        </div>
      </motion.div>

      {/* corner accent - organic line */}
      <div className="absolute top-3 right-3 z-20 w-6 h-6 opacity-0 group-hover:opacity-40 transition-opacity duration-500">
        <svg viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="0.5">
          <path d="M18 2c0 8-8 16-16 16" />
          <path d="M22 6c0 8-8 16-16 16" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ x: bgX }}
      >
        <div
          className="w-[120%] h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/barber/texture-bg.png')" }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-deep-black/80" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24">
        {/* section header */}
        <div className="mb-12 md:mb-16">
          <motion.p
            className="text-gold/50 text-xs font-mono tracking-[0.4em]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            &bull; galeri &bull;
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-cream/90 mt-3 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            işlerimiz
          </motion.h2>
          <motion.div
            className="mt-4 h-px bg-gold/20 max-w-[80px]"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>

        {/* asymmetric grid - not a standard grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-auto">
          {galleryItems.map((item, i) => (
            <GalleryItem key={item.src} item={item} index={i} />
          ))}
        </div>

        {/* bottom marquee text */}
        <motion.div
          className="mt-16 md:mt-24 overflow-hidden opacity-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex whitespace-nowrap marquee">
            <span className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-cream tracking-tighter mx-4">
              kesim &bull; tıraş &bull; stil &bull; sakal &bull; fade &bull; klasik &bull; modern &bull; berber &bull;
            </span>
            <span className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-cream tracking-tighter mx-4">
              kesim &bull; tıraş &bull; stil &bull; sakal &bull; fade &bull; klasik &bull; modern &bull; berber &bull;
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
