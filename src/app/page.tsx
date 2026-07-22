'use client';

import dynamic from 'next/dynamic';
import HeroSection from '@/components/barber/hero-section';
import MarqueeStrip from '@/components/barber/marquee-strip';
import SectionDivider from '@/components/barber/section-divider';
import EyeCatcher from '@/components/barber/eye-catcher';
import InlineAd from '@/components/barber/inline-ad';
import StatsSection from '@/components/barber/stats-section';
import ServicesSection from '@/components/barber/services-section';
import PhoneMockups from '@/components/barber/phone-mockups';
import Gallery from '@/components/barber/gallery';
import AdBanner from '@/components/barber/ad-banner';
import ContactSection from '@/components/barber/contact-section';
import Footer from '@/components/barber/footer';
import StickyButtons from '@/components/barber/sticky-buttons';

const Navigation = dynamic(() => import('@/components/barber/navigation'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-deep-black">
      <Navigation />
      <StickyButtons />

      <main className="flex-1">
        <HeroSection />

        <EyeCatcher variant="barcode" />

        <StatsSection />

        <EyeCatcher variant="dashed-line" />

        <ServicesSection />

        <MarqueeStrip text="kesim tıraş stil sakal fade klasik modern" speed={22} opacity={0.04} />

        <InlineAd text="ilk ziyaretinize %20 indirim" subtext="sınırlı süre — kaçırmayın" />

        <EyeCatcher variant="number-ticker" />

        <SectionDivider variant="text" label="instagram" />

        <PhoneMockups />

        <EyeCatcher variant="slash-accent" />

        <MarqueeStrip text="berber deneyim kalite profesyonel" speed={35} opacity={0.03} />

        <InlineAd text="sakal bakım paketi — özel fiyat" subtext="kesim + şekillendirme + bakım birlikte" />

        <EyeCatcher variant="smoke-divider" />

        <Gallery />

        <EyeCatcher variant="dashed-line" />

        <SectionDivider variant="text" label="teklifler" />

        <AdBanner
          title="özel berber deneyimi"
          subtitle="profesyonel ekipten first-class hizmet. detaylar ve randevu için hemen iletişime geçin."
          ctaText="hemen randevu al"
          ctaLink="#iletisim"
          bgImage="/images/barber/ad-bg.png"
        />

        <EyeCatcher variant="barcode" />

        <InlineAd text="her cuma özel indirim" subtext="takip edin, fırsatları kaçırmayın" />

        <EyeCatcher variant="slash-accent" />

        <ContactSection />

        <EyeCatcher variant="smoke-divider" />

        <MarqueeStrip text="teşekkürler" speed={50} opacity={0.03} />
      </main>

      <Footer />
    </div>
  );
}
