import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "berber — saç sanatının adresi",
  description: "profesyonel berber hizmetleri, modern kesimler, klasik tıraş deneyimi. kalite ve stil bir arada.",
  keywords: ["berber", "kuaför", "saç kesimi", "sakal tıraşı", "modern berber"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-deep-black text-cream film-grain`}
        style={{ fontFeatureSettings: '"kern" 1', letterSpacing: '-0.02em' }}
      >
        {children}
      </body>
    </html>
  );
}
