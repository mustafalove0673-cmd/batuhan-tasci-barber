'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const contactMethods = [
  {
    label: 'whatsapp',
    sublabel: 'hemen yazın',
    href: '#',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'instagram',
    sublabel: 'bizi takip edin',
    href: '#',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'telefon',
    sublabel: 'aramak için tıklayın',
    href: 'tel:+90',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const lineY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section
      ref={sectionRef}
      id="iletisim"
      className="relative py-24 md:py-40 overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/images/barber/hero-bg.png')" }}
        />
      </div>
      <div className="absolute inset-0 bg-deep-black/85" />

      {/* animated decorative line on left */}
      <motion.div
        className="absolute left-6 md:left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent z-0"
        style={{ y: lineY }}
      />

      <div className="relative z-10 px-6 md:px-16 lg:px-24">
        {/* section header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            className="text-gold/50 text-xs font-mono tracking-[0.4em]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            iletişim &bull; bize ulaşın
          </motion.p>
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream/90 mt-4 tracking-tight leading-[0.95]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            hemen randevu alın
          </motion.h2>
          <motion.p
            className="mt-4 text-sm md:text-base text-cream/30 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            en iyi hizmeti almak için bugün bize ulaşın. whatsapp, instagram veya telefon ile hemen iletişime geçin.
          </motion.p>
        </div>

        {/* contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative block p-8 md:p-10 bg-dark-card/50 border border-dark-border hover:border-gold/30 transition-all duration-700 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {/* hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* icon */}
              <div className="relative z-10 mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {method.icon}
              </div>

              {/* label */}
              <h3 className="relative z-10 text-lg md:text-xl font-bold text-cream/90 tracking-tight">
                {method.label}
              </h3>

              {/* sublabel */}
              <p className="relative z-10 mt-2 text-xs text-cream/30 font-mono tracking-wider">
                {method.sublabel}
              </p>

              {/* animated bottom line */}
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gold/40 transition-all duration-700 ease-out" />

              {/* corner decoration */}
              <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <svg viewBox="0 0 48 48" fill="none" stroke="#c9a96e" strokeWidth="0.5">
                  <path d="M48 0C48 26.509 26.509 48 0 48" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* persuasive text */}
        <motion.div
          className="mt-16 md:mt-20 flex items-start gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="w-px h-12 bg-gold/30 flex-shrink-0 mt-1" />
          <p className="text-sm md:text-base text-cream/25 leading-relaxed max-w-xl">
            &ldquo;her ziyaretinizde kendinizi özel hissedeceksiniz. detaylara olan tutkumuz, sizi tekrar getirecek.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
