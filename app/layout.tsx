import type { Metadata } from 'next';
import { Poppins, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Legosoft Dev - Desarrollo de Software Innovador',
  description:
    'Portafolio profesional de Legosoft Dev. Especialistas en desarrollo web, apps, integraciones cloud, automatización e IA, y sistemas empresariales.',
  keywords: [
    'desarrollo web',
    'desarrollo de apps',
    'cloud',
    'automatización',
    'IA',
    'sistemas empresariales',
  ],
  authors: [{ name: 'Legosoft Dev' }],
  icons: {
    icon: '/images/logo Legosoft.png',
    shortcut: '/images/logo Legosoft.png',
    apple: '/images/logo Legosoft.png',
  },
  openGraph: {
    title: 'Legosoft Dev - Desarrollo de Software Innovador',
    description:
      'Portafolio profesional de Legosoft Dev. Especialistas en desarrollo de software moderno.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://legosoftdev.com',
    siteName: 'Legosoft Dev',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legosoft Dev - Desarrollo de Software Innovador',
    description:
      'Portafolio profesional de Legosoft Dev. Especialistas en desarrollo de software moderno.',
  },
};

import { LanguageProvider } from '@/lib/i18n/LanguageContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
