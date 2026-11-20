import type { Metadata } from 'next';
import React from 'react';
import {
  Geist,
  Geist_Mono,
  Courier_Prime,
  Space_Grotesk,
  Inter,
} from 'next/font/google';
import './globals.css';
import Footer from './components/footer';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const courierPrime = Courier_Prime({
  variable: '--font-courier-prime',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'HMDTIF FILKOM UB',
    template: '%s | HMDTIF FILKOM UB',
  },
  description:
    'Himpunan Mahasiswa Departemen Teknik Informatika, Fakultas Ilmu Komputer, Universitas Brawijaya. Kabinet Bahtera Gatra 2026.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${courierPrime.variable} ${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[#FFF4D6] focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-[#1e3a5f]">
          Lompat ke konten utama
        </a>
        <SmoothScroll />
        <Navbar />
        <main id="konten" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
