'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const services = [
  { title: 'fade kesim', image: '/images/barber/gallery-1.png', description: 'yumuşak geçişli modern teknikler', price: '₺150' },
  { title: 'klasik tıraş', image: '/images/barber/gallery-3.png', description: 'ustura ile otantik deneyim', price: '₺120' },
  { title: 'sakal şekillendirme', image: '/images/barber/gallery-4.png', description: 'yüz hatlarınıza özel kesim', price: '₺100' },
  { title: 'saç boyama', image: '/images/barber/gallery-2.png', description: 'doğal görünümlü profesyonel boyama', price: '₺250' },
];

const clips = [
  'polygon(0% 3%, 5% 0%, 20% 1%, 45% 0%, 70% 1%, 95% 0%, 100% 3%, 100% 97%, 95% 100%, 75% 98%, 50% 100%, 25% 99%, 5% 100%, 0% 96%)',
  'polygon(2% 0%, 18% 1.5%, 40% 0%, 62% 1%, 85% 0%, 100% 2%, 98% 22%, 100% 52%, 99% 78%, 100% 97%, 82% 100%, 60% 98%, 35% 100%, 15% 99%, 0% 100%, 1% 78%, 0% 48%, 2% 18%)',
  'polygon(0% 2%, 8% 0%, 25% 1%, 50% 0%, 72% 1%, 92% 0%, 100% 2%, 100% 98%, 90% 100%, 70% 99%, 48% 100%, 22% 99%, 5% 100%, 0% 97%)',
  'polygon(3% 0%, 22% 1.5%, 45% 0%, 68% 1%, 88% 0%, 100% 2%, 98% 28%, 100% 58%, 99% 82%, 100% 98%, 80% 100%, 58% 99%, 35% 100%, 12% 98%, 0% 100%, 2% 75%, 0% 48%, 1% 20%)',
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgX = useTransform(scrollYProgress, [0, 1], ['0%', '-6%']);

  return (
    <section ref={sectionRef} id="hizmetler" className="relative py-16 md:py-24 overflow-hidden">
      <motion.div className="absolute inset-0 opacity-10" style={{ x: bgX }}>
        <div className="w-[115%] h-full bg-cover bg-center blur-sm" style={{ backgroundImage: "url('/images/barber/texture-bg.png')" }} />
      </motion.div>
      <div className="absolute inset-0 bg-deep-black/90" />
      <div className="absolute inset-0 bg-gradient-to-br from-orange/[0.03] via-transparent to-gold/[0.02]" />

      <div className="relative z-10 px-5 md:px-16 lg:px-24">
        {/* header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-1 bg-gold" />
            <span className="text-gold/70 text-xs md:text-sm font-mono tracking-[0.4em] font-bold">hizmetlerimiz</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-cream tracking-tight leading-[0.9]">
            ne yapıyoruz
          </h2>
          <p className="mt-3 text-sm md:text-base text-cream/35 font-mono tracking-wider font-bold">
            her hizmet özenle ve profesyonelce verilir — detaylar için iletişime geçin
          </p>
        </div>

        {/* services grid — staggered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={service.title}
                className={`group relative cursor-pointer ${isEven ? '' : 'md:translate-y-10'}`}
                initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: isEven ? 0 : 40 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <div className="relative w-full h-[220px] md:h-[300px] overflow-hidden" style={{ clipPath: clips[i] }}>
                  <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-black/95 via-deep-black/50 to-deep-black/15 group-hover:from-deep-black/85 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-deep-black/60 via-transparent to-transparent" />

                  {/* number */}
                  <div className="absolute top-4 right-5 z-20">
                    <span className="text-6xl md:text-7xl font-black text-cream/[0.05] leading-none">0{i + 1}</span>
                  </div>

                  {/* text */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-20">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-cream group-hover:text-orange transition-colors duration-400 tracking-tight leading-tight">
                      {service.title}
                    </h3>
                    <div className="flex items-end justify-between mt-2">
                      <p className="text-sm text-cream/45 font-mono tracking-wider font-bold">{service.description}</p>
                      <span className="text-gold/70 text-lg md:text-xl font-mono font-black">{service.price}</span>
                    </div>
                  </div>

                  {/* bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange/0 via-orange/60 to-orange/0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>

                {/* hover light streak */}
                <div className="absolute inset-0 pointer-events-none" style={{ clipPath: clips[i] }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
