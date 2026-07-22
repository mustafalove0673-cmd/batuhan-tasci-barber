'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '80px']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.8]);

  const lineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      originX: 0,
      transition: { duration: 1.5, ease: [0.77, 0, 0.175, 1], delay: 0.8 },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* parallax background image */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y: bgY, scale: bgScale }}
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/barber/hero-bg.png')" }}
        />
      </motion.div>

      {/* animated dark overlay */}
      <motion.div
        className="absolute inset-0 bg-deep-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* organic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-deep-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-black/80 via-transparent to-deep-black/80" />

      {/* vertical decorative text (left edge) */}
      <motion.div
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 hidden md:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <p className="vertical-text text-gold text-xs tracking-[0.3em] font-mono">
          saç &bull; sakal &bull; stil &bull; sanat &bull; berber &bull; klasik &bull; modern
        </p>
      </motion.div>

      {/* vertical decorative text (right edge) */}
      <motion.div
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 hidden md:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1.5, delay: 1.8 }}
      >
        <p className="vertical-text text-cream text-xs tracking-[0.3em] font-mono">
          est. &bull; profesyonel &bull; deneyim &bull; kalite &bull; güven
        </p>
      </motion.div>

      {/* main content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-16 lg:px-24 pb-24 md:pb-32">
        <motion.div style={{ y: textY }}>
          {/* small label above title */}
          <motion.div
            className="overflow-hidden mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p
              className="text-gold text-xs md:text-sm tracking-[0.4em] font-mono"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
            >
              profesyonel berber deneyimi
            </motion.p>
          </motion.div>

          {/* main title - character by character reveal */}
          <div className="overflow-hidden">
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tighter">
              <span className="inline-flex flex-wrap">
                {'saç'.split('').map((char, i) => (
                  <motion.span
                    key={`sac-${i}`}
                    className="inline-block"
                    initial={{ y: '120%', rotateX: -80, opacity: 0 }}
                    animate={{ y: '0%', rotateX: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + i * 0.08,
                      ease: [0.77, 0, 0.175, 1],
                    }}
                    style={{ perspective: '500px' }}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  className="inline-block mx-2 md:mx-4 text-gold"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: [0.77, 0, 0.175, 1] }}
                >
                  &
                </motion.span>
                {'sakal'.split('').map((char, i) => (
                  <motion.span
                    key={`sakal-${i}`}
                    className="inline-block"
                    initial={{ y: '120%', rotateX: -80, opacity: 0 }}
                    animate={{ y: '0%', rotateX: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.0 + i * 0.08,
                      ease: [0.77, 0, 0.175, 1],
                    }}
                    style={{ perspective: '500px' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            </h1>
          </div>

          {/* subtitle line */}
          <div className="overflow-hidden mt-3">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-cream/60 leading-[0.9] tracking-tight">
              <motion.span
                className="inline-block"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.6, ease: [0.77, 0, 0.175, 1] }}
              >
                sanatın buluşma noktası
              </motion.span>
            </h2>
          </div>

          {/* golden decorative line */}
          <motion.div
            className="mt-8 h-px bg-gold/40 max-w-xs"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />

          {/* description text */}
          <motion.p
            className="mt-6 text-sm md:text-base text-cream/40 max-w-md leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            her kesim bir hikaye anlatır, her tıraş bir deneyimdir.
            <br />
            detaylara gösterdiğimiz özen, farkımızı yaratır.
          </motion.p>

          {/* cta area */}
          <motion.div
            className="mt-10 flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <a
              href="#iletisim"
              className="group relative inline-flex items-center gap-3 text-gold text-sm tracking-widest font-mono overflow-hidden"
            >
              <span className="relative z-10">randevu al</span>
              <motion.span
                className="inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              >
                →
              </motion.span>
              <span className="absolute bottom-0 left-0 h-px w-full bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* bottom edge organic shape */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-black to-transparent z-20 pointer-events-none" />

      {/* scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <span className="text-xs font-mono text-cream/40 tracking-widest">scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
