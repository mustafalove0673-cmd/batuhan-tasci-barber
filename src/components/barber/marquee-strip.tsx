'use client';

import { motion } from 'framer-motion';

interface MarqueeStripProps {
  text: string;
  speed?: number;
  opacity?: number;
}

export default function MarqueeStrip({ text, speed = 30, opacity = 0.04 }: MarqueeStripProps) {
  return (
    <div className="overflow-hidden py-3 md:py-4">
      <div className="flex whitespace-nowrap marquee" style={{ animationDuration: `${speed}s` }}>
        <motion.span className="text-2xl md:text-4xl lg:text-5xl font-bold text-cream tracking-tighter mx-3 select-none" style={{ opacity }}>
          {text} &bull; {text} &bull; {text} &bull; {text} &bull;
        </motion.span>
        <motion.span className="text-2xl md:text-4xl lg:text-5xl font-bold text-cream tracking-tighter mx-3 select-none" style={{ opacity }}>
          {text} &bull; {text} &bull; {text} &bull; {text} &bull;
        </motion.span>
      </div>
    </div>
  );
}
