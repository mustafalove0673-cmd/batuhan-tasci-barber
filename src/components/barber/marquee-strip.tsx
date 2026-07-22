'use client';

import { motion } from 'framer-motion';

interface MarqueeStripProps {
  text: string;
  speed?: number;
  className?: string;
  opacity?: number;
}

export default function MarqueeStrip({ text, speed = 30, className = '', opacity = 0.05 }: MarqueeStripProps) {
  return (
    <div className={`overflow-hidden py-6 md:py-8 ${className}`}>
      <div className="flex whitespace-nowrap marquee" style={{ animationDuration: `${speed}s` }}>
        <motion.span
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-cream tracking-tighter mx-4 select-none`}
          style={{ opacity }}
        >
          {text} &bull; {text} &bull; {text} &bull; {text} &bull;
        </motion.span>
        <motion.span
          className={`text-4xl md:text-6xl lg:text-7xl font-bold text-cream tracking-tighter mx-4 select-none`}
          style={{ opacity }}
        >
          {text} &bull; {text} &bull; {text} &bull; {text} &bull;
        </motion.span>
      </div>
    </div>
  );
}
