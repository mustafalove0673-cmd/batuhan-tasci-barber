'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/lib/config';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const lineY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const handleSubmit = async () => {
    if (!form.name.trim() || !form.message.trim()) return;
    setFormState('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) { setFormState('sent'); setForm({ name: '', phone: '', email: '', message: '' }); }
      else setFormState('error');
    } catch { setFormState('error'); }
  };

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  return (
    <section ref={sectionRef} id="iletisim" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0"><div className="w-full h-full bg-cover bg-center opacity-8" style={{ backgroundImage: "url('/images/barber/hero-bg.png')" }} /></div>
      <div className="absolute inset-0 bg-deep-black/90" />
      <motion.div className="absolute left-8 md:left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange/15 to-transparent z-0" style={{ y: lineY }} />

      <div className="relative z-10 px-8 md:px-20 lg:px-32">
        {/* header */}
        <div className="mb-14 md:mb-18">
          <motion.p className="text-orange/50 text-[10px] font-mono tracking-[0.5em]" initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            iletişim &bull; bize ulaşın
          </motion.p>
          <motion.h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-cream/90 mt-3 tracking-tight leading-[1]" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}>
            hemen randevu alın
          </motion.h2>
        </div>

        {/* two column: left = contact info + map, right = form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-20">
          {/* left */}
          <div className="flex flex-col gap-8">
            {/* contact links */}
            <div className="flex flex-col gap-5">
              {[
                { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>), label: 'telefon', value: siteConfig.phoneClean, href: siteConfig.phoneHref },
                { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" /></svg>), label: 'whatsapp', value: siteConfig.phoneClean, href: siteConfig.whatsappLink },
                { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>), label: 'e-posta', value: siteConfig.email, href: siteConfig.emailHref },
                { icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>), label: 'instagram', value: siteConfig.instagram, href: siteConfig.instagramUrl },
              ].map((c, i) => (
                <motion.a
                  key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center text-gold border border-dark-border group-hover:border-orange/30 group-hover:bg-orange/5 transition-all duration-400">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-[11px] text-cream/30 font-mono tracking-wider">{c.label}</p>
                    <p className="text-sm text-cream/70 group-hover:text-orange transition-colors duration-300 mt-0.5">{c.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* address */}
            <motion.div className="flex gap-3" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
              <div className="w-px h-10 bg-orange/30 flex-shrink-0" />
              <div>
                <p className="text-[10px] text-cream/25 font-mono tracking-wider mb-1">adres</p>
                <p className="text-sm text-cream/50">{siteConfig.address.full}</p>
                <a href={siteConfig.googleMaps.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-orange text-[11px] font-mono tracking-wider hover:text-orange-light transition-colors">
                  yol tarifi al →
                </a>
              </div>
            </motion.div>

            {/* working style */}
            <motion.p className="text-xs text-gray-light font-mono tracking-wider" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }}>
              {siteConfig.workingStyle}
            </motion.p>

            {/* google maps embed */}
            <motion.div className="relative overflow-hidden" style={{ clipPath: 'polygon(0% 2%, 3% 0%, 20% 1%, 80% 0%, 97% 1%, 100% 2%, 100% 98%, 97% 100%, 80% 99%, 20% 100%, 3% 99%, 0% 98%)' }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <iframe
                src={siteConfig.googleMaps.embedUrl}
                width="100%" height="200"
                style={{ border: 0, filter: 'brightness(0.7) contrast(1.1) saturate(0.3)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="konum"
              />
            </motion.div>
          </div>

          {/* right — form */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className="text-orange/50 text-[10px] font-mono tracking-[0.4em] mb-6">&bull; mesaj gönderin &bull;</p>
            <div className="flex flex-col gap-5">
              <div>
                <label className="text-[10px] text-cream/20 font-mono tracking-wider block mb-1">ad soyad</label>
                <input type="text" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="adınız soyadınız" className="w-full bg-transparent border-b border-dark-border focus:border-orange/40 text-cream text-sm py-3 px-1 outline-none placeholder:text-cream/10 transition-colors duration-300" />
              </div>
              <div>
                <label className="text-[10px] text-cream/20 font-mono tracking-wider block mb-1">telefon numarası</label>
                <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="0xxx xxx xx xx" className="w-full bg-transparent border-b border-dark-border focus:border-orange/40 text-cream text-sm py-3 px-1 outline-none placeholder:text-cream/10 transition-colors duration-300" />
              </div>
              <div>
                <label className="text-[10px] text-cream/20 font-mono tracking-wider block mb-1">e-posta</label>
                <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="email@ornek.com" className="w-full bg-transparent border-b border-dark-border focus:border-orange/40 text-cream text-sm py-3 px-1 outline-none placeholder:text-cream/10 transition-colors duration-300" />
              </div>
              <div>
                <label className="text-[10px] text-cream/20 font-mono tracking-wider block mb-1">mesaj</label>
                <textarea value={form.message} onChange={(e) => update('message', e.target.value)} rows={4} placeholder="mesajınız..." className="w-full bg-transparent border-b border-dark-border focus:border-orange/40 text-cream text-sm py-3 px-1 outline-none placeholder:text-cream/10 resize-none transition-colors duration-300" />
              </div>
              <AnimatePresence mode="wait">
                {formState === 'sent' ? (
                  <motion.p key="ok" className="text-green-400 text-xs font-mono tracking-wider py-1" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>✅ mesajınız başarıyla gönderildi.</motion.p>
                ) : formState === 'error' ? (
                  <motion.p key="err" className="text-destructive text-xs font-mono tracking-wider py-1" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>❌ gönderilemedi. lütfen tekrar deneyiniz.</motion.p>
                ) : null}
              </AnimatePresence>
              <button onClick={handleSubmit} disabled={formState === 'sending'} className="self-start text-orange text-xs font-mono tracking-[0.3em] border-b border-orange/30 hover:border-orange/60 pb-1 transition-colors duration-300 disabled:opacity-40 mt-2">
                {formState === 'sending' ? 'gönderiliyor...' : 'gönder →'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
