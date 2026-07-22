'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface AdBannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  bgImage?: string;
  reverse?: boolean;
}

export default function AdBanner({ title, subtitle, ctaText, ctaLink, bgImage, reverse = false }: AdBannerProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-[50vh] md:h-[60vh] overflow-hidden">
      {/* parallax background */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: bgScale }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${bgImage || "/images/barber/ad-bg.png"}')` }}
        />
      </motion.div>

      {/* overlays */}
      <div className="absolute inset-0 bg-deep-black/60" />
      <div className={`absolute inset-0 bg-gradient-to-r ${reverse ? 'from-transparent via-deep-black/40 to-deep-black/90' : 'from-deep-black/90 via-deep-black/40 to-transparent'}`} />

      {/* content */}
      <div className={`relative z-10 h-full flex items-center px-6 md:px-16 lg:px-24 ${reverse ? 'justify-start' : 'justify-end'}`}>
        <div className={`max-w-lg ${reverse ? '' : 'text-right'}`}>
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.p
              className={`text-gold/60 text-xs font-mono tracking-[0.5em] mb-4 ${reverse ? '' : 'text-right'}`}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              &bull; özel teklif &bull;
            </motion.p>
          </motion.div>

          <motion.h3
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-cream/95 leading-[0.95] tracking-tight ${reverse ? '' : 'text-right'}`}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            {title}
          </motion.h3>

          <motion.p
            className={`mt-4 text-sm text-cream/30 max-w-sm leading-relaxed ${reverse ? '' : 'ml-auto'}`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className={`mt-8 ${reverse ? '' : 'flex justify-end'}`}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <a
              href={ctaLink}
              className="group relative inline-flex items-center gap-3 border border-gold/30 px-8 py-4 text-gold text-xs tracking-[0.3em] font-mono overflow-hidden hover:bg-gold/10 transition-colors duration-500"
            >
              <span className="relative z-10">{ctaText}</span>
              <motion.span
                className="inline-block relative z-10"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                →
              </motion.span>
              <span className="absolute inset-0 bg-gold/5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* edge lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
    </section>
  );
}
