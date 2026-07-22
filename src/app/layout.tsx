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
  title: "batuhan taşçı | men's hair — premium erkek kuaförü",
  description: "profesyonel berber hizmetleri, modern kesimler, klasik tıraş. batuhan taşçı — kartal, istanbul.",
  keywords: ["berber", "kuaför", "erkek kuaförü", "saç kesimi", "sakal tıraşı", "batuhan taşçı", "kartal", "istanbul"],
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
