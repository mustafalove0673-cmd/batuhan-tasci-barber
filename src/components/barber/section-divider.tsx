'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
  variant?: 'line' | 'dots' | 'slash' | 'text' | 'cross' | 'zigzag';
  label?: string;
}

export default function SectionDivider({ variant = 'line', label }: SectionDividerProps) {
  if (variant === 'dots') {
    return (
      <div className="flex items-center justify-center gap-2 py-6 md:py-8">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 bg-gold/40"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'text' && label) {
    return (
      <div className="flex items-center gap-4 py-6 md:py-8 px-6 md:px-16 lg:px-24">
        <motion.div
          className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/20"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.span
          className="text-[10px] font-mono text-gold/30 tracking-[0.4em] whitespace-nowrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {label}
        </motion.span>
        <motion.div
          className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/20"
          initial={{ scaleX: 0, originX: 1 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    );
  }

  if (variant === 'slash') {
    return (
      <div className="py-4 md:py-6 px-6 md:px-16 lg:px-24 overflow-hidden">
        <motion.div
          className="w-full h-px bg-gold/15"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
        />
      </div>
    );
  }

  if (variant === 'cross') {
    return (
      <div className="flex items-center justify-center py-6 md:py-8">
        <motion.div
          initial={{ rotate: -45, opacity: 0, scale: 0 }}
          whileInView={{ rotate: 0, opacity: 0.4, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#c9a96e" strokeWidth="0.8">
            <line x1="6" y1="0" x2="6" y2="12" />
            <line x1="0" y1="6" x2="12" y2="6" />
          </svg>
        </motion.div>
      </div>
    );
  }

  if (variant === 'zigzag') {
    return (
      <div className="py-4 md:py-6 flex justify-center overflow-hidden">
        <motion.svg width="200" height="12" viewBox="0 0 200 12" fill="none" className="opacity-20">
          <motion.path
            d="M0 6 L20 2 L40 10 L60 2 L80 10 L100 2 L120 10 L140 2 L160 10 L180 2 L200 6"
            stroke="#c9a96e" strokeWidth="0.5" fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </motion.svg>
      </div>
    );
  }

  // default: animated line
  return (
    <div className="py-4 md:py-6 px-6 md:px-16 lg:px-24">
      <motion.div
        className="h-px bg-gradient-to-r from-gold/30 via-gold/10 to-transparent max-w-xl"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.77, 0, 0.175, 1] }}
      />
    </div>
  );
}
