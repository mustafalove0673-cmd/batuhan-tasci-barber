'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const services = [
  {
    title: 'fade kesim',
    description: 'yumuşak geçişli modern fade teknikleri ile kusursuz bir görünüm.',
    tag: 'popüler',
  },
  {
    title: 'klasik tıraş',
    description: 'sıcak havlu, köpük ve ustura ile otantik berber deneyimi.',
    tag: 'klasik',
  },
  {
    title: 'sakal şekillendirme',
    description: 'yüz hatlarınıza özel sakal kesimi ve şekillendirme.',
    tag: 'uzmanlık',
  },
  {
    title: 'saç boyama',
    description: 'doğal görünümlü profesyonel saç boyama hizmeti.',
    tag: 'yeni',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);

  return (
    <section ref={sectionRef} id="hizmetler" className="relative py-24 md:py-32 overflow-hidden">
      {/* background */}
      <motion.div className="absolute inset-0 opacity-10" style={{ x: bgX }}>
        <div
          className="w-[110%] h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/barber/gallery-6.png')" }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-deep-black/90" />

      <div className="relative z-10 px-6 md:px-16 lg:px-24">
        {/* header */}
        <div className="mb-12 md:mb-16">
          <motion.p
            className="text-gold/50 text-xs font-mono tracking-[0.4em]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            &bull; hizmetlerimiz &bull;
          </motion.p>
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-cream/90 mt-3 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            ne yapıyoruz
          </motion.h2>
          <motion.div
            className="mt-4 h-px bg-gold/20 max-w-[80px]"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>

        {/* service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative p-8 md:p-10 border border-dark-border/50 hover:border-gold/20 transition-all duration-700 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* hover bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* tag */}
              <motion.span
                className="relative z-10 inline-block text-[10px] font-mono text-gold/50 tracking-[0.3em] border border-gold/20 px-3 py-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.3 }}
              >
                {service.tag}
              </motion.span>

              {/* title */}
              <h3 className="relative z-10 mt-5 text-xl md:text-2xl font-bold text-cream/90 tracking-tight group-hover:text-gold transition-colors duration-500">
                {service.title}
              </h3>

              {/* description */}
              <p className="relative z-10 mt-3 text-sm text-cream/30 leading-relaxed">
                {service.description}
              </p>

              {/* bottom line */}
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gold/20 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
