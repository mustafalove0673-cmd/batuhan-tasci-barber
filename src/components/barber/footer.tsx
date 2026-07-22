'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/config';

const socialLinks = [
  { label: 'instagram', href: siteConfig.instagramUrl },
  { label: 'whatsapp', href: siteConfig.whatsappLink },
  { label: 'telefon', href: siteConfig.phoneHref },
  { label: 'e-posta', href: siteConfig.emailHref },
  { label: 'linkbio', href: siteConfig.linkbio },
  { label: 'google maps', href: siteConfig.googleMaps.directionsUrl },
];

export default function Footer() {
  return (
    <footer className="relative bg-deep-black overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-orange/30 to-transparent" />

      <motion.div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none" initial={{ opacity: 0 }} whileInView={{ opacity: 0.025 }} viewport={{ once: true }}>
        <div className="flex whitespace-nowrap marquee" style={{ animationDuration: '50s' }}>
          <span className="text-[14vw] font-black text-cream leading-none tracking-tighter">
            batuhan taşçı &bull; men's hair &bull;
          </span>
          <span className="text-[14vw] font-black text-cream leading-none tracking-tighter">
            batuhan taşçı &bull; men's hair &bull;
          </span>
        </div>
      </motion.div>

      <div className="relative z-10 px-5 md:px-16 lg:px-24 pt-16 pb-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <motion.h3 className="text-2xl md:text-3xl font-black text-cream/90 tracking-tight" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {siteConfig.businessName}
            </motion.h3>
            <motion.p className="text-xs text-cream/25 font-mono tracking-[0.2em] mt-2 font-bold" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              {siteConfig.tagline} — {siteConfig.workingStyle}
            </motion.p>
          </div>
          <motion.div className="flex flex-wrap gap-x-5 gap-y-1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-sm text-cream/30 hover:text-orange transition-colors duration-300 font-mono tracking-wider font-bold">
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        <div className="h-px bg-dark-border mb-10" />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            {siteConfig.hours.map((h, i) => (
              <motion.span key={h.day} className="text-xs font-mono tracking-wider font-bold" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                <span className="text-cream/30">{h.day}</span>
                <span className={`ml-2 ${h.closed ? 'text-orange/40' : 'text-cream/50'}`}>{h.time}</span>
              </motion.span>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <p className="text-xs text-cream/20 font-mono tracking-wider font-bold">{siteConfig.address.full}</p>
          <p className="text-xs text-cream/15 font-mono tracking-wider">&copy; {new Date().getFullYear()} {siteConfig.businessName}</p>
        </div>
      </div>
    </footer>
  );
}
