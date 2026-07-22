'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface AdBannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  bgImage: string;
}

export default function AdBanner({ title, subtitle, ctaText, ctaLink, bgImage }: AdBannerProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* full-bleed background */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${bgImage}')` }} />
      </motion.div>
      {/* heavy overlay for readability */}
      <div className="absolute inset-0 bg-deep-black/75" />
      {/* diagonal slash accent */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 border border-gold/[0.06] rotate-12" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] border border-gold/[0.04] -rotate-6" />
      </div>
      {/* content — tight, organic */}
      <div className="relative z-10 py-12 md:py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          <motion.p
            className="text-gold/60 text-[10px] font-mono tracking-[0.5em] mb-3"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            &bull; özel teklif &bull;
          </motion.p>
          <motion.h3
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-cream/95 leading-[1] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            {title}
          </motion.h3>
          <motion.p
            className="mt-3 text-sm text-cream/40 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <a
              href={ctaLink}
              className="group relative inline-flex items-center gap-2 text-gold text-xs tracking-[0.3em] font-mono border-b border-gold/30 pb-1 hover:border-gold/60 transition-colors duration-300"
            >
              <span>{ctaText}</span>
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </div>
      </div>
      {/* top/bottom thin lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
    </section>
  );
}
