'use client';

import dynamic from 'next/dynamic';
import HeroSection from '@/components/barber/hero-section';
import MarqueeStrip from '@/components/barber/marquee-strip';
import ServicesSection from '@/components/barber/services-section';
import PhoneMockups from '@/components/barber/phone-mockups';
import Gallery from '@/components/barber/gallery';
import AdBanner from '@/components/barber/ad-banner';
import ContactSection from '@/components/barber/contact-section';
import Footer from '@/components/barber/footer';

const Navigation = dynamic(() => import('@/components/barber/navigation'), { ssr: false });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-deep-black">
      <Navigation />

      <main className="flex-1">
        {/* hero - full viewport with parallax and text reveal */}
        <HeroSection />

        {/* marquee strip - divider */}
        <MarqueeStrip text="kesim tıraş stil sakal fade klasik modern" speed={25} />

        {/* services section */}
        <ServicesSection />

        {/* phone mockups - instagram videos */}
        <PhoneMockups />

        {/* marquee strip - divider */}
        <MarqueeStrip text="berber deneyim kalite profesyonel" speed={35} opacity={0.03} />

        {/* ad banner 1 */}
        <AdBanner
          title="ilk ziyaretinize özel"
          subtitle="%20 indirim. sınırlı süre. profesyonel ekipten first-class berber deneyimi. kaçırmayın."
          ctaText="hemen randevu al"
          ctaLink="#iletisim"
          bgImage="/images/barber/ad-bg.png"
        />

        {/* gallery - unique asymmetric layout */}
        <Gallery />

        {/* ad banner 2 - reversed */}
        <AdBanner
          title="sakal bakım paketi"
          subtitle="sakal kesimi, şekillendirme ve bakım birlikte. özel fiyat avantajı ile tam berber deneyimi."
          ctaText="detayları gör"
          ctaLink="#iletisim"
          bgImage="/images/barber/gallery-6.png"
          reverse
        />

        {/* contact section with whatsapp, instagram, phone */}
        <ContactSection />

        {/* final marquee */}
        <MarqueeStrip text="teşekkürler" speed={60} opacity={0.04} />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}
