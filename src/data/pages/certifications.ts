import type { Lang } from '../../lib/i18n';

const certificates = [
  'CyberOps Associate',
  'Introduction to Cybersecurity',
  'Introduction to IoT',
  'Networking Academy Learn-A-Thon 2020',
  'Atlas Essentials',
];

export const certificationsContent = {
  pt: {
    meta: {
      title: 'Certificações | Guilherme Rodrigues',
      description: 'Cursos, certificações e trilhas de estudo em Segurança da Informação, IoT, redes e tecnologia.',
    },
    header: {
      eyebrow: 'Aprendizado',
      title: 'Certificações',
      description: 'Cursos, certificações e trilhas de estudo conectadas a Segurança da Informação, IoT, redes e tecnologia.',
    },
    cardDescription: 'Espaço para adicionar certificado, data, instituição, arquivo PDF ou link de validação.',
    certificates,
  },
  en: {
    meta: {
      title: 'Certifications | Guilherme Rodrigues',
      description: 'Courses, certifications and learning tracks in cybersecurity, IoT, networking and technology.',
    },
    header: {
      eyebrow: 'Learning',
      title: 'Certifications',
      description: 'Courses, certifications and learning tracks connected to cybersecurity, IoT, networking and technology.',
    },
    cardDescription: 'Space to add certificate, date, institution, PDF file or validation link.',
    certificates,
  },
} satisfies Record<Lang, object>;

export type CertificationsContent = typeof certificationsContent.pt;
