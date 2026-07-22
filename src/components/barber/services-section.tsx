'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'fade kesim',
    image: '/images/barber/gallery-1.png',
    description: 'yumuşak geçişli modern teknikler',
    animation: { initial: { x: -100, opacity: 0, rotate: -2 }, whileInView: { x: 0, opacity: 1, rotate: 0 } },
  },
  {
    title: 'klasik tıraş',
    image: '/images/barber/gallery-2.png',
    description: 'ustura ile otantik deneyim',
    animation: { initial: { y: 80, opacity: 0, scale: 0.9 }, whileInView: { y: 0, opacity: 1, scale: 1 } },
  },
  {
    title: 'sakal şekillendirme',
    image: '/images/barber/gallery-5.png',
    description: 'yüz hatlarınıza özel kesim',
    animation: { initial: { x: 100, opacity: 0, rotate: 2 }, whileInView: { x: 0, opacity: 1, rotate: 0 } },
  },
  {
    title: 'saç boyama',
    image: '/images/barber/gallery-3.png',
    description: 'doğal görünümlü profesyonel boyama',
    animation: { initial: { y: -60, opacity: 0, scale: 0.85 }, whileInView: { y: 0, opacity: 1, scale: 1 } },
  },
];

const clipPaths = [
  'polygon(0% 4%, 4% 0%, 20% 1%, 45% 0%, 70% 1.5%, 96% 0%, 100% 3%, 100% 96%, 97% 100%, 75% 98%, 50% 100%, 25% 99%, 3% 100%, 0% 97%)',
  'polygon(2% 0%, 18% 2%, 40% 0%, 60% 1.5%, 82% 0%, 100% 2%, 98% 20%, 100% 50%, 99% 80%, 100% 98%, 82% 100%, 60% 98%, 38% 100%, 18% 99%, 0% 100%, 2% 82%, 0% 50%, 1% 18%)',
  'polygon(0% 3%, 8% 0%, 30% 1%, 55% 0%, 80% 1%, 100% 0%, 100% 97%, 92% 100%, 70% 99%, 45% 100%, 20% 98%, 0% 100%)',
  'polygon(3% 0%, 25% 2%, 50% 0%, 75% 1%, 100% 0%, 97% 25%, 100% 50%, 98% 75%, 100% 100%, 75% 98%, 50% 100%, 25% 99%, 0% 100%, 2% 75%, 0% 50%, 3% 25%)',
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);

  return (
    <section ref={sectionRef} id="hizmetler" className="relative py-20 md:py-28 overflow-hidden">
      {/* special background with parallax texture */}
      <motion.div className="absolute inset-0 opacity-15" style={{ x: bgX }}>
        <div
          className="w-[115%] h-full bg-cover bg-center blur-sm"
          style={{ backgroundImage: "url('/images/barber/gallery-6.png')" }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-deep-black/85" />
      {/* organic gradient accents */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-gold/[0.03] to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-t from-gold/[0.02] to-transparent" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24">
        {/* header — left aligned, tight */}
        <div className="mb-10 md:mb-14">
          <motion.p
            className="text-orange/50 text-[10px] font-mono tracking-[0.5em]"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            &bull; hizmetlerimiz &bull;
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-cream/90 mt-2 tracking-tight leading-[1]"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            ne yapıyoruz
          </motion.h2>
        </div>

        {/* services — image strips with text, NOT boxes */}
        <div className="flex flex-col gap-4 md:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative overflow-hidden cursor-pointer"
              style={{ clipPath: clipPaths[i] }}
              initial={service.animation.initial}
              whileInView={service.animation.whileInView}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.9,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* background image */}
              <div className="relative w-full h-[140px] md:h-[180px] lg:h-[200px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="100vw"
                />
                {/* dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-deep-black/90 via-deep-black/60 to-deep-black/30 group-hover:from-deep-black/80 group-hover:via-deep-black/40 transition-all duration-500" />
                {/* noise grain on image */}
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")",
                  }}
                />
              </div>
              {/* text overlay — left aligned */}
              <div className="absolute inset-0 flex items-center px-8 md:px-14">
                <div>
                  <motion.h3
                    className="text-xl md:text-3xl font-bold text-cream group-hover:text-gold transition-colors duration-500 tracking-tight"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    className="text-xs md:text-sm text-cream/50 mt-1 font-mono tracking-wider"
                  >
                    {service.description}
                  </motion.p>
                </div>
              </div>
              {/* animated edge line */}
              <motion.div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gold/40 transition-all duration-700"
              />
              {/* hover light streak */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
