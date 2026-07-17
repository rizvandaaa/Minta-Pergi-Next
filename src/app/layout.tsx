import type { Metadata } from 'next';
import { Montserrat, Outfit } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MINTA.PERGI | Jasa Antar Jemput & Jastip Mahasiswa Tasikmalaya',
  description: 'MINTA.PERGI - Layanan antar jemput dan jasa titip suruh khusus mahasiswa di Kota Tasikmalaya. Praktis, aman, transparan, dan ramah kantong mahasiswa.',
  keywords: 'antar jemput, jastip, mahasiswa, tasikmalaya, universitas siliwangi, unsili, transportasi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${montserrat.variable} ${outfit.variable}`}>
      <head>
        {/* FontAwesome CSS CDN for premium icons */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          precedence="default"
        />
        {/* Leaflet CSS CDN for Map styling */}
        <link 
          rel="stylesheet" 
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
          precedence="default"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
