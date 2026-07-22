// tüm iletişim bilgileri buradan yönetilir
// bu dosyadaki değişiklikler tüm siteye otomatik yansır

export const siteConfig = {
  businessName: 'batuhan taşçı | men\'s hair',
  businessNameShort: 'men\'s hair',
  tagline: 'premium erkek kuaförü',
  workingStyle: 'yalnızca randevu ile hizmet',

  phone: '+90 531 350 24 66',
  phoneClean: '0531 350 24 66',
  phoneHref: 'tel:+905313502466',

  whatsapp: '+905313502466',
  whatsappLink: 'https://wa.me/905313502466',

  email: 'benbatuhantasci@icloud.com',
  emailHref: 'mailto:benbatuhantasci@icloud.com',

  instagram: '@batuhantaschi',
  instagramUrl: 'https://www.instagram.com/batuhantaschi',

  linkbio: 'https://linkbio.co/batuhantasci',

  address: {
    full: 'soğanlık orta mahallesi, kazım orbay sokak, kartal / İstanbul',
    short: 'kartal, İstanbul',
  },

  googleMaps: {
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48158.305462977965!2d29.1640035!3d40.8903841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9b1c5b1a1a1%3A0x1c0c1c0c1c0c1c0c!2sKartal%2C%20Istanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Kaz%C4%B1m+Orbay+Sokak,+So%C4%9Fanl%C4%B1k+Orta+Mahallesi,+Kartal+%C4%B0stanbul',
  },

  hours: [
    { day: 'pzt — cum', time: '09:00 — 20:00', closed: false },
    { day: 'cmt', time: '09:00 — 18:00', closed: false },
    { day: 'paz', time: 'kapalı', closed: true },
  ],
} as const;
