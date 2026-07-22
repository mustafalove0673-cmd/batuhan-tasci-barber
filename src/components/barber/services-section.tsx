'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'fade kesim',
    image: '/images/barber/gallery-1.png',
    description: 'yumuşak geçişli modern teknikler',
    price: '₺150',
  },
  {
    title: 'klasik tıraş',
    image: '/images/barber/gallery-2.png',
    description: 'ustura ile otantik deneyim',
    price: '₺120',
  },
  {
    title: 'sakal şekillendirme',
    image: '/images/barber/gallery-5.png',
    description: 'yüz hatlarınıza özel kesim',
    price: '₺100',
  },
  {
    title: 'saç boyama',
    image: '/images/barber/gallery-3.png',
    description: 'doğal görünümlü profesyonel boyama',
    price: '₺250',
  },
];

const organicClips = [
  'polygon(0% 3%, 5% 0%, 18% 1.5%, 35% 0%, 55% 1%, 75% 0%, 92% 1.5%, 100% 4%, 100% 96%, 93% 100%, 78% 98%, 60% 100%, 40% 99%, 22% 100%, 5% 98%, 0% 95%)',
  'polygon(2% 0%, 20% 2%, 42% 0%, 65% 1.5%, 85% 0%, 100% 3%, 98% 25%, 100% 55%, 99% 78%, 100% 97%, 80% 100%, 58% 98%, 35% 100%, 15% 99%, 0% 100%, 1% 75%, 0% 45%, 2% 20%)',
  'polygon(0% 4%, 8% 0%, 28% 1%, 50% 0%, 72% 1.5%, 90% 0%, 100% 3%, 100% 97%, 92% 100%, 70% 99%, 48% 100%, 25% 98%, 5% 100%, 0% 96%)',
  'polygon(3% 0%, 22% 1.5%, 48% 0%, 70% 1%, 88% 0%, 100% 2%, 97% 30%, 100% 60%, 98% 85%, 100% 98%, 82% 100%, 60% 99%, 38% 100%, 18% 98%, 0% 100%, 2% 80%, 0% 50%, 1% 20%)',
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section ref={sectionRef} id="hizmetler" className="relative py-16 md:py-24 overflow-hidden">
      {/* parallax background texture */}
      <motion.div className="absolute inset-0 opacity-12" style={{ x: bgX }}>
        <div className="w-[120%] h-full bg-cover bg-center blur-sm" style={{ backgroundImage: "url('/images/barber/services-bg.png')" }} />
      </motion.div>
      <div className="absolute inset-0 bg-deep-black/88" />

      {/* diagonal accent stripes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-gradient-to-br from-orange/[0.02] via-transparent to-transparent rotate-12" />
        <div className="absolute -bottom-1/4 -right-1/4 w-[150%] h-[150%] bg-gradient-to-tl from-gold/[0.015] via-transparent to-transparent -rotate-6" />
      </div>

      <div className="relative z-10 px-6 md:px-16 lg:px-24">
        {/* header — industrial style */}
        <div ref={titleRef} className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <motion.div
              className="flex items-center gap-3 mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={titleInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <div className="w-6 h-px bg-orange" />
              <span className="text-orange/50 text-[10px] font-mono tracking-[0.5em]">hizmetlerimiz</span>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-cream/90 tracking-tight leading-[0.95]"
              initial={{ opacity: 0, y: 30 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              ne yapıyoruz
            </motion.h2>
          </div>
          <motion.p
            className="text-xs text-cream/25 font-mono tracking-wider max-w-xs md:text-right"
            initial={{ opacity: 0, y: 15 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            her hizmet özenle ve profesyonelce verilir &bull; detaylar için iletişime geçin
          </motion.p>
        </div>

        {/* services — staggered, asymmetric layout with skewed containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            const clip = organicClips[i];

            return (
              <motion.div
                key={service.title}
                className={`group relative cursor-pointer ${isEven ? 'md:translate-y-0' : 'md:translate-y-8'}`}
                initial={{ opacity: 0, [isEven ? 'x' : 'x']: isEven ? -60 : 60, y: isEven ? 30 : -20 }}
                whileInView={{ opacity: 1, x: 0, y: isEven ? 0 : 32 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                {/* image with organic clip */}
                <div
                  className="relative w-full h-[200px] md:h-[260px] overflow-hidden"
                  style={{ clipPath: clip }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* multi-layer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/95 via-deep-black/50 to-deep-black/20 group-hover:from-deep-black/85 group-hover:via-deep-black/30 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-deep-black/70 via-transparent to-transparent" />

                  {/* grain on image */}
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
                    }}
                  />

                  {/* service number */}
                  <div className="absolute top-4 right-5 z-20">
                    <span className="text-5xl md:text-6xl font-bold text-cream/[0.04] leading-none">
                      0{i + 1}
                    </span>
                  </div>

                  {/* text overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-20">
                    <motion.h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-cream group-hover:text-orange transition-colors duration-500 tracking-tight leading-tight">
                      {service.title}
                    </motion.h3>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-[11px] md:text-xs text-cream/40 font-mono tracking-wider">
                        {service.description}
                      </p>
                      <span className="text-gold/60 text-sm font-mono font-bold">{service.price}</span>
                    </div>
                  </div>

                  {/* animated bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-orange/0 via-orange/50 to-orange/0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                  />
                </div>

                {/* hover light streak */}
                <div className="absolute inset-0 pointer-events-none" style={{ clipPath: clip }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* bottom decorative — gear-like SVG element */}
        <motion.div
          className="mt-12 md:mt-16 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="opacity-60">
            <path
              d="M40 5 L43 15 L53 10 L49 20 L60 20 L52 27 L60 35 L50 33 L53 43 L43 38 L40 50 L37 38 L27 43 L30 33 L20 35 L28 27 L20 20 L31 20 L27 10 L37 15Z"
              stroke="#d4722a"
              strokeWidth="0.5"
              fill="none"
              strokeDasharray="300"
              strokeDashoffset="300"
              style={{ animation: 'dash-draw 3s ease-out forwards' }}
            />
            <circle cx="40" cy="28" r="6" stroke="#c9a96e" strokeWidth="0.5" fill="none" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
