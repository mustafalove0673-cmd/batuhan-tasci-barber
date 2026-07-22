'use client';

import { motion } from 'framer-motion';

const links = [
  { label: 'hizmetler', href: '#hizmetler' },
  { label: 'galeri', href: '#galeri' },
  { label: 'iletişim', href: '#iletisim' },
  { label: 'instagram', href: '#' },
];

const hours = [
  { day: 'pzt — cum', time: '09:00 — 20:00' },
  { day: 'cmt', time: '09:00 — 18:00' },
  { day: 'paz', time: 'kapalı' },
];

export default function Footer() {
  return (
    <footer className="relative bg-deep-black overflow-hidden">
      {/* top dramatic line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* big background text */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        viewport={{ once: true }}
      >
        <div className="flex whitespace-nowrap marquee" style={{ animationDuration: '50s' }}>
          <span className="text-[15vw] font-bold text-cream leading-none tracking-tighter">
            berber &bull; saç &bull; sakal &bull; stil &bull;
          </span>
          <span className="text-[15vw] font-bold text-cream leading-none tracking-tighter">
            berber &bull; saç &bull; sakal &bull; stil &bull;
          </span>
        </div>
      </motion.div>

      <div className="relative z-10 px-6 md:px-16 lg:px-24 pt-14 pb-8">
        {/* top row — brand + socials horizontal */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-cream/90 tracking-tight"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              saç & sakal
            </motion.h3>
            <motion.p
              className="text-[10px] text-cream/20 font-mono tracking-[0.3em] mt-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              profesyonel berber deneyimi
            </motion.p>
          </div>

          {/* horizontal links — not a column list */}
          <motion.div
            className="flex flex-wrap gap-x-6 gap-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-cream/30 hover:text-gold transition-colors duration-300 font-mono tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* divider */}
        <motion.div
          className="h-px bg-dark-border mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* bottom row — hours left, copyright right, tight */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {hours.map((h, i) => (
              <motion.span
                key={h.day}
                className="text-[10px] font-mono tracking-wider"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <span className="text-cream/25">{h.day}</span>
                <span className={`ml-2 ${h.time === 'kapalı' ? 'text-gold/30' : 'text-cream/50'}`}>{h.time}</span>
              </motion.span>
            ))}
          </div>
          <p className="text-[9px] text-cream/10 font-mono tracking-wider">
            &copy; {new Date().getFullYear()} tüm hakları saklıdır
          </p>
        </div>
      </div>
    </footer>
  );
}
