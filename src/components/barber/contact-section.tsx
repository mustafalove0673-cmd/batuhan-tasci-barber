'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const contacts = [
  {
    label: 'whatsapp',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    label: 'instagram',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'telefon',
    href: 'tel:+90',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', message: '' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const lineY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const handleSubmit = async () => {
    if (!formData.name.trim() || !formData.message.trim()) return;
    setFormState('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormState('sent');
        setFormData({ name: '', message: '' });
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  return (
    <section ref={sectionRef} id="iletisim" className="relative py-14 md:py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/barber/hero-bg.png')" }} />
      </div>
      <div className="absolute inset-0 bg-deep-black/88" />
      {/* animated left line */}
      <motion.div className="absolute left-6 md:left-16 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent z-0" style={{ y: lineY }} />

      <div className="relative z-10 px-6 md:px-16 lg:px-24">
        {/* header — tight */}
        <div className="mb-10 md:mb-12">
          <motion.p className="text-gold/50 text-[10px] font-mono tracking-[0.5em]" initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            iletişim &bull; bize ulaşın
          </motion.p>
          <motion.h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-cream/90 mt-2 tracking-tight leading-[1]" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}>
            hemen randevu alın
          </motion.h2>
          <motion.p className="mt-3 text-sm text-cream/30 max-w-lg leading-relaxed" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.25 }}>
            whatsapp, instagram veya telefon ile bize ulaşın. aşağıdaki formu doldurun, size en kısa sürede dönelim.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {/* left — contact links, organic layout */}
          <div className="flex flex-col gap-6">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                className="group flex items-center gap-5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 flex items-center justify-center border border-dark-border group-hover:border-gold/30 transition-colors duration-500 group-hover:bg-gold/5">
                  {c.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-cream/80 group-hover:text-gold transition-colors duration-300">{c.label}</p>
                  <p className="text-[11px] text-cream/30 font-mono tracking-wider mt-0.5">bize ulaşın →</p>
                </div>
                <div className="ml-auto w-8 h-px bg-gold/0 group-hover:bg-gold/30 transition-colors duration-500" />
              </motion.a>
            ))}

            {/* persuasive quote */}
            <motion.div className="mt-2 flex gap-3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
              <div className="w-px h-10 bg-gold/30 flex-shrink-0" />
              <p className="text-sm text-cream/20 leading-relaxed italic">
                &ldquo;her ziyaretinizde kendinizi özel hissedeceksiniz.&rdquo;
              </p>
            </motion.div>
          </div>

          {/* right — email form, organic */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="relative">
              {/* form background accent */}
              <div className="absolute -top-3 -right-3 w-20 h-20 border border-gold/[0.06] rotate-12 pointer-events-none" />

              <div className="relative z-10">
                <p className="text-gold/50 text-[10px] font-mono tracking-[0.4em] mb-4">&bull; mesaj gönderin &bull;</p>

                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="adınız"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-dark-border focus:border-gold/40 text-cream text-sm py-3 px-1 font-mono tracking-wider outline-none placeholder:text-cream/15 transition-colors duration-300"
                  />
                  <textarea
                    placeholder="mesajınız..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-transparent border-b border-dark-border focus:border-gold/40 text-cream text-sm py-3 px-1 font-mono tracking-wider outline-none placeholder:text-cream/15 resize-none transition-colors duration-300"
                  />
                  <AnimatePresence mode="wait">
                    {formState === 'sent' ? (
                      <motion.p key="sent" className="text-gold text-xs font-mono tracking-wider py-2" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        mesajınız gönderildi ✓
                      </motion.p>
                    ) : formState === 'error' ? (
                      <motion.p key="error" className="text-destructive text-xs font-mono tracking-wider py-2" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        bir hata oluştu, tekrar deneyin
                      </motion.p>
                    ) : null}
                  </AnimatePresence>
                  <button
                    onClick={handleSubmit}
                    disabled={formState === 'sending'}
                    className="self-start text-gold text-xs font-mono tracking-[0.3em] border-b border-gold/30 pb-1 hover:border-gold/60 transition-colors duration-300 disabled:opacity-40 mt-1"
                  >
                    {formState === 'sending' ? 'gönderiliyor...' : 'gönder →'}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
