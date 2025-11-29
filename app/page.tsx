'use client';

import { Button, Card, Container, Heading, Text } from '@/components/ui';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen py-12">
      {/* Header con logo y selector de idioma */}
      <Container>
        <div className="flex justify-between items-center mb-12">
          <Link href="/">
            <Image
              src="/images/Logo Blanco.png"
              alt="Legosoft Dev Logo"
              width={1200}
              height={90}
              className="h-16 md:h-20 w-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
          </Link>
          <LanguageSwitcher />
        </div>
      </Container>

      {/* Hero Section */}
      <Container>
        <div className="text-center mb-16 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Heading as="h1" gradient className="mb-6">
              {t.hero.title}
            </Heading>
            <Text size="xl" className="mb-4">
              {t.hero.subtitle}
            </Text>
            <Text size="lg" muted className="mb-8 max-w-2xl mx-auto">
              {t.hero.description}
            </Text>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/portfolio">
                <Button variant="primary">{t.hero.cta.portfolio}</Button>
              </Link>
              <a href={`tel:${t.contact.phone}`}>
                <Button variant="secondary">{t.hero.cta.contact}</Button>
              </a>
              <Link href="/about">
                <Button variant="outline">{t.hero.cta.about}</Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <Card variant="glass" className="max-w-4xl mx-auto">
            <div className="text-center p-8">
              <Heading as="h2" className="mb-6">
                {language === 'es' ? '¿Qué es Legosoft Dev?' : 'What is Legosoft Dev?'}
              </Heading>
              <Text size="lg" className="mb-4">
                {language === 'es'
                  ? 'Legosoft Dev es una empresa especializada en soluciones tecnológicas empresariales, ofreciendo servicios integrales de desarrollo de software, consultoría tecnológica, ingeniería de datos y arquitectura cloud.'
                  : 'Legosoft Dev is a company specialized in enterprise technology solutions, offering comprehensive software development services, technology consulting, data engineering and cloud architecture.'}
              </Text>
              <Text muted>
                {language === 'es'
                  ? 'Nuestro enfoque se centra en entregar soluciones escalables, seguras y de alto rendimiento, utilizando las mejores prácticas de la industria y las tecnologías más avanzadas del mercado.'
                  : 'Our focus is on delivering scalable, secure and high-performance solutions, using industry best practices and the most advanced technologies in the market.'}
              </Text>
            </div>
          </Card>
        </motion.div>

        {/* Services Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              {t.services.title}
            </Heading>
            <Text size="lg" muted>
              {t.services.subtitle}
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card hoverable>
                <div className="text-4xl mb-4">💻</div>
                <Heading as="h3" className="mb-4">
                  {t.services.web.title}
                </Heading>
                <Text muted>{t.services.web.description}</Text>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card hoverable variant="outlined">
                <div className="text-4xl mb-4">💡</div>
                <Heading as="h3" className="mb-4">
                  {t.services.consulting.title}
                </Heading>
                <Text muted>{t.services.consulting.description}</Text>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card hoverable variant="glass">
                <div className="text-4xl mb-4">📊</div>
                <Heading as="h3" className="mb-4">
                  {t.services.data.title}
                </Heading>
                <Text muted>{t.services.data.description}</Text>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card hoverable variant="glass">
                <div className="text-4xl mb-4">☁️</div>
                <Heading as="h3" className="mb-4">
                  {t.services.cloud.title}
                </Heading>
                <Text muted>{t.services.cloud.description}</Text>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card hoverable variant="outlined">
                <div className="text-4xl mb-4">🔄</div>
                <Heading as="h3" className="mb-4">
                  {t.services.automation.title}
                </Heading>
                <Text muted>{t.services.automation.description}</Text>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card hoverable>
                <div className="text-4xl mb-4">🏢</div>
                <Heading as="h3" className="mb-4">
                  {t.services.enterprise.title}
                </Heading>
                <Text muted>{t.services.enterprise.description}</Text>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <Card variant="glass" className="max-w-3xl mx-auto">
            <div className="p-8">
              <Heading as="h2" className="mb-4">
                {language === 'es'
                  ? '¿Listo para transformar tu negocio?'
                  : 'Ready to transform your business?'}
              </Heading>
              <Text size="lg" muted className="mb-8">
                {language === 'es'
                  ? 'Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.'
                  : 'Contact us today and discover how we can help you achieve your technology goals.'}
              </Text>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href={`tel:${t.contact.phone}`}>
                  <Button variant="primary" size="lg">
                    {t.hero.cta.contact}
                  </Button>
                </a>
                <Link href="/about">
                  <Button variant="outline" size="lg">
                    {language === 'es' ? 'Conoce al Fundador' : 'Meet the Founder'}
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16"
        >
          <div className="text-center mb-12">
            <Heading as="h2" className="mb-4">
              {t.contact.title}
            </Heading>
            <Text size="lg" muted>
              {t.contact.description}
            </Text>
          </div>

          <Card variant="outlined" className="max-w-4xl mx-auto">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Phone */}
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary-500/10 rounded-full">
                      <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <Heading as="h3" className="mb-2 text-lg">
                    {language === 'es' ? 'Teléfono' : 'Phone'}
                  </Heading>
                  <a href={`tel:${t.contact.phone}`} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {t.contact.phone}
                  </a>
                </div>

                {/* Email */}
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary-500/10 rounded-full">
                      <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <Heading as="h3" className="mb-2 text-lg">
                    Email
                  </Heading>
                  <a href={`mailto:${t.contact.email}`} className="text-gray-300 hover:text-primary-400 transition-colors break-all">
                    {t.contact.email}
                  </a>
                </div>

                {/* Location */}
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary-500/10 rounded-full">
                      <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <Heading as="h3" className="mb-2 text-lg">
                    {language === 'es' ? 'Ubicación' : 'Location'}
                  </Heading>
                  <Text className="text-gray-300">
                    {t.contact.location}
                  </Text>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </main>
  );
}
