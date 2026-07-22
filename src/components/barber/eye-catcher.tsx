'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/config';

/* deterministic barcode heights */
const barcodeHeights = [92,45,78,33,88,50,70,25,95,40,65,55,80,30,90,48,73,35,85,42,68,28,93,38,75,52,82,32,87,46,71,27,96,36,77,53,84,31,91,44,67,29,89,47,74,34,86,41,69,26,94,37,76,54,81,33,88,49];

interface EyeCatcherProps {
  variant: 'barcode' | 'dashed-line' | 'number-ticker' | 'slash-accent' | 'smoke-divider';
}

export default function EyeCatcher({ variant }: EyeCatcherProps) {
  if (variant === 'barcode') {
    return (
      <div className="relative py-5 md:py-6 overflow-hidden">
        <div className="absolute inset-0 bg-deep-black" />
        <motion.div
          className="flex items-end justify-center gap-[2px] h-6 md:h-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {barcodeHeights.map((h, i) => (
            <div
              key={i}
              className="w-[1px] bg-gold"
              style={{ height: `${h}%` }}
            />
          ))}
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-[9px] font-mono text-orange/60 tracking-[0.5em] bg-deep-black px-4 relative z-10">
            {siteConfig.businessNameShort}
          </span>
        </motion.div>
      </div>
    );
  }

  if (variant === 'dashed-line') {
    return (
      <div className="py-4 md:py-5 px-6 md:px-16 lg:px-24">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex-1 border-t border-dashed border-gold/15"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, rotate: -90 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <div className="w-1.5 h-1.5 bg-orange/50 rotate-45" />
            <span className="text-[9px] font-mono text-cream/15 tracking-[0.4em]">est. 2018</span>
            <div className="w-1.5 h-1.5 bg-orange/50 rotate-45" />
          </motion.div>
          <motion.div
            className="flex-1 border-t border-dashed border-gold/15"
            initial={{ scaleX: 0, originX: 1 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </motion.div>
      </div>
    );
  }

  if (variant === 'number-ticker') {
    const numbers = ['01', '02', '03', '04', '05', '06', '07', '08'];
    return (
      <div className="py-4 md:py-5 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap ticker"
          style={{ animationDuration: '18s' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.08 }}
          viewport={{ once: true }}
        >
          {[...numbers, ...numbers].map((n, i) => (
            <span key={i} className="text-3xl md:text-5xl font-bold text-cream tracking-tight mx-4 md:mx-8 font-mono">
              {n}
              <span className="text-orange mx-4 md:mx-8">/</span>
            </span>
          ))}
        </motion.div>
      </div>
    );
  }

  if (variant === 'slash-accent') {
    return (
      <div className="py-4 md:py-5 px-6 md:px-16 lg:px-24 flex items-center gap-4 overflow-hidden">
        <motion.div
          className="h-px flex-1 bg-gradient-to-r from-transparent to-orange/20"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.5, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 14 L14 2" stroke="#d4722a" strokeWidth="0.5" />
            <path d="M8 2 L14 2 L14 8" stroke="#c9a96e" strokeWidth="0.5" />
          </svg>
        </motion.div>
        <motion.div
          className="h-px flex-1 bg-gradient-to-l from-transparent to-orange/20"
          initial={{ scaleX: 0, originX: 1 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    );
  }

  if (variant === 'smoke-divider') {
    return (
      <div className="relative py-6 md:py-8 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-px h-20 md:h-28 bg-gradient-to-b from-transparent via-gold/20 to-transparent"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          />
        </div>
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange/20 rounded-full blur-sm"
          animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gold/30"
          animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
        />
      </div>
    );
  }

  return null;
}
