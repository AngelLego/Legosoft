'use client';

import { Container, Heading, Text, Card } from '@/components/ui';
import { useLanguage } from '@/lib/i18n';
import Image from 'next/image';
import { motion } from 'framer-motion';

const skills = [
  { name: 'AWS', level: 95, icon: '☁️' },
  { name: 'Google Cloud Platform', level: 95, icon: '🌐' },
  { name: 'React / Next.js', level: 92, icon: '⚛️' },
  { name: 'Data Engineering', level: 90, icon: '📊' },
  { name: 'Python', level: 88, icon: '🐍' },
  { name: 'Node.js / TypeScript', level: 88, icon: '🟢' },
  { name: 'Docker / Kubernetes', level: 85, icon: '🐳' },
  { name: 'DevOps / CI/CD', level: 85, icon: '🔄' },
];

const education = [
  {
    year: 'Maestría',
    title: 'Ingeniería en Sistemas Computacionales',
    titleEn: 'Master in Computer Systems Engineering',
    institution: 'Instituto Tecnológico de Orizaba',
    description: 'Especialización en arquitectura de software y sistemas distribuidos',
    descriptionEn: 'Specialization in software architecture and distributed systems',
    cedula: '13307746'
  },
  {
    year: 'Ingeniería',
    title: 'Ingeniería en Sistemas Computacionales',
    titleEn: 'Computer Systems Engineering',
    institution: 'Instituto Tecnológico de Orizaba',
    description: 'Formación integral en Ingenieria Web y desarrollo de software y sistemas',
    descriptionEn: 'Comprehensive training in software development and systems',
    cedula: '13307746',
  },
];

const certifications = [
  {
    name: 'AWS Certified',
    icon: '☁️',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    name: 'Google Cloud Platform Certified',
    icon: '🌐',
    color: 'from-blue-500 to-green-500',
  },
];

export function AboutSection() {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-20 bg-dark-900/50">
      <Container>
        <div className="text-center mb-16">
          <Heading as="h2" gradient className="mb-4">
            {t.about.title}
          </Heading>
          <Text size="xl" muted>
            {t.about.subtitle}
          </Text>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500/20 to-secondary-500/20 p-1">
              <div className="w-full h-full bg-dark-800 rounded-2xl flex items-center justify-center">
                <Image
                  src="/images/builder.jpg"
                  alt="Legosoft Dev"
                  width={400}
                  height={400}
                  className="object-contain p-8"
                />
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading as="h3" className="mb-4">
              Miguel Angel Trujillo Monrroy
            </Heading>
            <Text className="text-primary-400 mb-6 text-lg font-semibold">
              {t.about.description}
            </Text>
            
            <Text className="mb-4">{t.about.intro}</Text>
            <Text className="mb-4">{t.about.description1}</Text>
            <Text className="mb-6">{t.about.description2}</Text>

            {/* Certifications Badges */}
            <div className="mb-6">
              <Text className="font-semibold mb-3">{t.about.certifications.title}:</Text>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`px-4 py-2 rounded-lg bg-gradient-to-r ${cert.color} text-white font-medium flex items-center gap-2`}
                  >
                    <span>{cert.icon}</span>
                    <span>{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download CV Buttons */}
            <div className="flex gap-4 mt-8">
              <a
                href="/images/Curriculum Vitae CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                CV Español
              </a>
              <a
                href="/images/ENG Curriculum Vitae CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                CV English
              </a>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <Heading as="h3" className="text-center mb-8">
            {language === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}
          </Heading>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <Text className="font-semibold">{skill.name}</Text>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <Text size="sm" muted className="mt-2 text-right">
                    {skill.level}%
                  </Text>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <Heading as="h3" className="text-center mb-12">
            {t.about.education.title}
          </Heading>
          <div className="max-w-3xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card hoverable>
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-1/4">
                      <div className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg text-white font-semibold text-center">
                        {edu.year}
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <Heading as="h4" className="mb-2">
                        {language === 'es' ? edu.title : edu.titleEn}
                      </Heading>
                      <Text className="text-secondary-400 mb-2 flex items-center gap-2">
                        <span>🎓</span>
                        {edu.institution}
                      </Text>
                      <Text muted>
                        {language === 'es' ? edu.description : edu.descriptionEn}
                      </Text>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
