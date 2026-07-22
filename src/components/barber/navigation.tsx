'use client';

import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/lib/config';

const navLinks = [
  { label: 'hizmetler', href: '#hizmetler' },
  { label: 'galeri', href: '#galeri' },
  { label: 'iletişim', href: '#iletisim' },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      if (latest > window.innerHeight * 0.8) setShow(true);
      else setShow(false);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          className="fixed top-0 left-0 right-0 z-40"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="mx-4 md:mx-8 mt-4 md:mt-6 px-6 md:px-8 py-4 bg-deep-black/85 backdrop-blur-md border border-dark-border/50 flex items-center justify-between">
            <a href="#" className="text-sm font-bold text-cream/90 tracking-tight">{siteConfig.businessNameShort}</a>
            <div className="flex items-center gap-6 md:gap-8">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-[11px] font-mono text-cream/40 hover:text-orange transition-colors duration-300 tracking-wider hidden md:block">{link.label}</a>
              ))}
              <a href="#iletisim" className="text-[11px] font-mono text-orange tracking-wider border border-orange/30 px-4 py-2 hover:bg-orange/10 transition-colors duration-300">randevu</a>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}