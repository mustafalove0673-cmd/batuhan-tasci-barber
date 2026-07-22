'use client';

import { motion } from 'framer-motion';

interface InlineAdProps {
  text: string;
  subtext: string;
}

export default function InlineAd({ text, subtext }: InlineAdProps) {
  return (
    <motion.div
      className="relative py-5 md:py-6 px-6 md:px-16 lg:px-24 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange/[0.03] via-transparent to-orange/[0.02]" />
      {/* animated slash line */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-px bg-orange/20"
        initial={{ scaleY: 0, originY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <p className="text-sm md:text-base font-bold text-cream/80 tracking-tight">{text}</p>
          <p className="text-[11px] text-cream/25 font-mono tracking-wider mt-0.5">{subtext}</p>
        </div>
        <motion.a
          href="#iletisim"
          className="text-orange text-[10px] font-mono tracking-[0.3em] border-b border-orange/20 hover:border-orange/50 pb-0.5 transition-colors duration-300 self-start"
        >
          randevu →
        </motion.a>
      </div>
    </motion.div>
  );
}
