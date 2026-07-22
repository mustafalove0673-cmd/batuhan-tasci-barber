'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const items = [
  { src: '/images/barber/gallery-1.png', alt: 'fade kesim', label: 'fade kesim', sub: 'yumuşak geçişli modern teknik' },
  { src: '/images/barber/gallery-2.png', alt: 'saç kesimi', label: 'saç kesimi', sub: 'profesyonel el ile kesim' },
  { src: '/images/barber/gallery-3.png', alt: 'klasik tıraş', label: 'klasik tıraş', sub: 'ustura ile otantik deneyim' },
  { src: '/images/barber/gallery-4.png', alt: 'sakal bakımı', label: 'sakal bakımı', sub: 'yüz hatlarınıza özel şekillendirme' },
  { src: '/images/barber/gallery-5.png', alt: 'aletler', label: 'profesyonel aletler', sub: 'en kaliteli ekipmanlar' },
  { src: '/images/barber/gallery-6.png', alt: 'mekan', label: 'mekanımız', sub: 'luks ve rahat ortam' },
];

const organicClips = [
  'polygon(0% 2%, 4% 0%, 18% 1%, 40% 0%, 65% 1%, 88% 0%, 100% 3%, 100% 97%, 92% 100%, 72% 99%, 48% 100%, 22% 99%, 5% 100%, 0% 97%)',
  'polygon(1.5% 0%, 15% 2%, 35% 0%, 58% 1.5%, 82% 0%, 100% 2%, 99% 20%, 100% 55%, 98% 80%, 100% 98%, 82% 100%, 60% 98%, 35% 100%, 12% 99%, 0% 100%, 1% 78%, 0% 45%, 2% 15%)',
  'polygon(0% 3%, 6% 0%, 22% 1.5%, 48% 0%, 72% 1%, 90% 0%, 100% 3%, 100% 96%, 93% 100%, 75% 98%, 50% 100%, 28% 99%, 8% 100%, 0% 96%)',
  'polygon(2% 0%, 20% 1.5%, 45% 0%, 68% 2%, 88% 0%, 100% 2%, 98% 25%, 100% 58%, 99% 82%, 100% 98%, 85% 100%, 62% 99%, 38% 100%, 15% 98%, 0% 100%, 1% 75%, 0% 48%, 2% 18%)',
  'polygon(0% 2%, 8% 0%, 28% 1.5%, 52% 0%, 78% 1%, 94% 0%, 100% 2%, 100% 98%, 90% 100%, 70% 99%, 45% 100%, 20% 98%, 5% 100%, 0% 97%)',
  'polygon(1% 0%, 18% 2%, 42% 0%, 65% 1%, 85% 0%, 100% 1.5%, 99% 22%, 100% 52%, 98% 78%, 100% 97%, 80% 100%, 55% 99%, 30% 100%, 10% 99%, 0% 100%, 1% 80%, 0% 50%, 2% 20%)',
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end end'] });

  return (
    <section ref={sectionRef} id="galeri" className="relative overflow-hidden">
      <div className="relative z-10">
        {/* header */}
        <div className="px-6 md:px-16 lg:px-24 pt-16 md:pt-24 pb-10 md:pb-14">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-1 bg-orange" />
            <span className="text-orange/70 text-xs md:text-sm font-mono tracking-[0.4em] font-bold">galeri</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-cream tracking-tight leading-[0.9]">
            işlerimiz
          </h2>
          <p className="mt-3 text-sm md:text-base text-cream/40 font-mono tracking-wider">
            her detay özenle şekillendirilir
          </p>
        </div>

        {/* full-width scroll items — phone pull-up style */}
        <div className="relative">
          {items.map((item, i) => {
            const isEven = i % 2 === 0;
            const clip = organicClips[i];

            return (
              <ScrollRevealItem
                key={item.src}
                item={item}
                index={i}
                isEven={isEven}
                clipPath={clip}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* individual scroll-reveal gallery item */
function ScrollRevealItem({
  item,
  index,
  isEven,
  clipPath,
}: {
  item: { src: string; alt: string; label: string; sub: string };
  index: number;
  isEven: boolean;
  clipPath: string;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['start end', 'end start'],
  });

  /* phone pull-up: image slides up from below as you scroll */
  const y = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [120, 0, 0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.92, 1, 1, 0.97]);
  const textX = useTransform(scrollYProgress, [0.1, 0.4], [isEven ? -50 : 50, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <div ref={itemRef} className={`relative py-4 md:py-6 ${isEven ? '' : 'md:pl-[15%]'}`}>
      <motion.div
        className="relative w-full overflow-hidden"
        style={{
          y,
          opacity,
          scale,
          clipPath,
          height: 'clamp(280px, 55vh, 600px)',
        }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 via-deep-black/30 to-transparent" />
        {!isEven && <div className="absolute inset-0 bg-gradient-to-r from-deep-black/60 via-transparent to-transparent" />}
        {isEven && <div className="absolute inset-0 bg-gradient-to-l from-deep-black/50 via-transparent to-transparent" />}

        {/* number */}
        <div className={`absolute top-6 ${isEven ? 'right-8' : 'left-8'} z-20`}>
          <span className="text-6xl md:text-8xl font-black text-cream/[0.06] leading-none">
            0{index + 1}
          </span>
        </div>

        {/* text content */}
        <motion.div
          className={`absolute bottom-0 left-0 right-0 z-20 p-8 md:p-12 lg:p-16 ${isEven ? 'text-left' : 'text-left md:text-right'}`}
          style={{ x: textX, opacity: textOpacity }}
        >
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-cream tracking-tight leading-tight">
            {item.label}
          </h3>
          <p className="mt-2 text-sm md:text-base text-cream/50 font-mono tracking-wider">
            {item.sub}
          </p>
          <div className={`mt-4 h-0.5 w-20 bg-orange/60 ${isEven ? '' : 'md:ml-auto'}`} />
        </motion.div>
      </motion.div>
    </div>
  );
}
