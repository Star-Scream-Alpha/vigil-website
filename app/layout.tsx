import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import '../styles/globals.css';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VIGIL-EARTH | Satellite Intelligence for Physical Asset Risk',
  description:
    'Satellite-derived ground displacement, geospatial AI and evidence-grade risk signals for insurers, operators and governments monitoring critical infrastructure.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Navigation />
        <div className="pt-16">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
