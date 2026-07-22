'use client';

import { motion } from 'framer-motion';

interface InlineAdProps {
  text: string;
  subtext: string;
}

export default function InlineAd({ text, subtext }: InlineAdProps) {
  return (
    <motion.div
      className="relative py-6 md:py-8 px-5 md:px-16 lg:px-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange/[0.04] via-transparent to-gold/[0.02]" />
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange/40 via-orange/20 to-transparent"
        initial={{ scaleY: 0, originY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      />
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <p className="text-base md:text-lg font-black text-cream/85 tracking-tight">{text}</p>
          <p className="text-xs text-cream/30 font-mono tracking-wider mt-1 font-bold">{subtext}</p>
        </div>
        <motion.a
          href="#iletisim"
          className="text-orange text-xs font-mono tracking-[0.25em] font-bold border-b border-orange/30 hover:border-orange/60 pb-1 self-start transition-colors duration-300"
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          randevu →
        </motion.a>
      </div>
    </motion.div>
  );
}
