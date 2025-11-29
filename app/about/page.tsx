'use client';

import { Container, Heading, Text } from '@/components/ui';
import { AboutSection } from '@/components/sections/AboutSection';
import { useLanguage } from '@/lib/i18n';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Header con logo y selector de idioma */}
      <Container>
        <div className="flex justify-between items-center py-6">
          <Link href="/">
            <Image
              src="/images/Logo Blanco.png"
              alt="Legosoft Dev Logo"
              width={1200}
              height={90}
              className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
          <LanguageSwitcher />
        </div>
      </Container>

      {/* About Section */}
      <AboutSection />
    </main>
  );
}
