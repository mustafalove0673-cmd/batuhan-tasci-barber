'use client';

import { motion } from 'framer-motion';

const footerLinks = [
  { label: 'hizmetlerimiz', href: '#hizmetler' },
  { label: 'galeri', href: '#galeri' },
  { label: 'iletişim', href: '#iletisim' },
  { label: 'instagram', href: '#' },
];

const hours = [
  { day: 'pazartesi — cuma', time: '09:00 — 20:00' },
  { day: 'cumartesi', time: '09:00 — 18:00' },
  { day: 'pazar', time: 'kapalı' },
];

export default function Footer() {
  return (
    <footer className="relative bg-deep-black border-t border-dark-border">
      {/* top decorative line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="px-6 md:px-16 lg:px-24 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* brand column */}
          <div className="md:col-span-5">
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-cream/90 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              saç & sakal
            </motion.h3>
            <motion.p
              className="mt-3 text-xs text-cream/25 font-mono tracking-[0.2em]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              profesyonel berber deneyimi
            </motion.p>
            <motion.div
              className="mt-4 h-px w-12 bg-gold/30"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.p
              className="mt-4 text-sm text-cream/20 leading-relaxed max-w-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              her kesim bir sanat eseridir. detaylara gösterdiğimiz özen ile fark yaratıyoruz.
            </motion.p>
          </div>

          {/* links column */}
          <div className="md:col-span-3">
            <motion.p
              className="text-gold/50 text-xs font-mono tracking-[0.3em] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              bağlantılar
            </motion.p>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-cream/40 hover:text-gold transition-colors duration-300 w-fit"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* hours column */}
          <div className="md:col-span-4">
            <motion.p
              className="text-gold/50 text-xs font-mono tracking-[0.3em] mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              çalışma saatleri
            </motion.p>
            <div className="flex flex-col gap-3">
              {hours.map((item, i) => (
                <motion.div
                  key={item.day}
                  className="flex justify-between items-center gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                >
                  <span className="text-xs text-cream/40 font-mono">{item.day}</span>
                  <span className={`text-xs font-mono ${item.time === 'kapalı' ? 'text-gold/40' : 'text-cream/60'}`}>
                    {item.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-16 pt-8 border-t border-dark-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[10px] text-cream/15 font-mono tracking-wider">
            &copy; {new Date().getFullYear()} tüm hakları saklıdır
          </p>
          <p className="text-[10px] text-cream/15 font-mono tracking-wider">
            tasarım &bull; berber
          </p>
        </div>
      </div>
    </footer>
  );
}
