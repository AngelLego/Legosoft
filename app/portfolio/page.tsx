'use client';

import { Button, Card, Container, Heading, Text } from '@/components/ui';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const { t, language } = useLanguage();

  const projects = [
    {
      id: 'fumiver',
      title: t.portfolio.projects.fumiver.title,
      description: t.portfolio.projects.fumiver.description,
      fullDescription: t.portfolio.projects.fumiver.fullDescription,
      url: 'https://www.fumiver.com',
      image: '/images/FUMIVER.png',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      category: language === 'es' ? 'Sitio Web Corporativo' : 'Corporate Website',
    },
    {
      id: 'maxiservicios',
      title: t.portfolio.projects.maxiservicios.title,
      description: t.portfolio.projects.maxiservicios.description,
      fullDescription: t.portfolio.projects.maxiservicios.fullDescription,
      url: 'https://maxi-aba.vercel.app/',
      image: '/images/MAXIABA.png',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
      category: language === 'es' ? 'Plataforma Web' : 'Web Platform',
    },
  ];

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

      {/* Portfolio Header */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Heading as="h1" gradient className="mb-6">
            {t.portfolio.title}
          </Heading>
          <Text size="xl" muted className="max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </Text>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card variant="glass" className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Project Image */}
                  <div className="relative h-64 lg:h-full min-h-[300px]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-2 bg-primary-500/90 text-white rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8 flex flex-col justify-center">
                    <Heading as="h2" className="mb-4">
                      {project.title}
                    </Heading>
                    <Text size="lg" className="mb-4">
                      {project.description}
                    </Text>
                    <Text muted className="mb-6">
                      {project.fullDescription}
                    </Text>

                    {/* Technologies */}
                    <div className="mb-6">
                      <Text className="mb-3 font-semibold text-primary-400">
                        {t.portfolio.technologies}:
                      </Text>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="primary" size="lg">
                          {t.portfolio.visitWebsite} →
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-16 mt-16"
        >
          <Card variant="outlined" className="max-w-3xl mx-auto">
            <div className="p-8">
              <Heading as="h2" className="mb-4">
                {language === 'es'
                  ? '¿Tienes un proyecto en mente?'
                  : 'Have a project in mind?'}
              </Heading>
              <Text size="lg" muted className="mb-8">
                {language === 'es'
                  ? 'Trabajemos juntos para hacer realidad tu visión'
                  : "Let's work together to make your vision a reality"}
              </Text>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href={`tel:${t.contact.phone}`}>
                  <Button variant="primary" size="lg">
                    {t.hero.cta.contact}
                  </Button>
                </a>
                <Link href="/">
                  <Button variant="outline" size="lg">
                    {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </main>
  );
}
