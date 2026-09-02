import type { Lang } from '../../lib/i18n';
import { projectImage } from '../../lib/media';

export const projectListContent = {
  pt: {
    meta: {
      title: 'Projetos | Guilherme Rodrigues',
      description:
        'Projetos de Guilherme Rodrigues em sistemas embarcados, IoT, robótica, IA aplicada, telemetria e divulgação científica.',
    },
    header: {
      eyebrow: 'Portfólio',
      title: 'Projetos',
      description:
        'Uma área central para páginas detalhadas de projetos com texto, fotos, vídeos, arquitetura, resultados e aprendizados.',
    },
    intro: {
      title: 'Arquivo de projetos',
      description:
        'Estas páginas foram pensadas para serem mais completas que uma entrada simples de currículo. Cada uma pode incluir história, contexto técnico, imagens, vídeos, diagramas, links de código, documentos, limitações, resultados e aprendizados.',
    },
    projects: [
      {
        title: 'Biometria Neonatal / TCC',
        href: '/projects/biometria-neonatal/',
        text: 'Integração de machine learning em plataformas embarcadas, avaliando inferência de redes neurais em Raspberry Pi e ARM Linux.',
        tags: ['TCC', 'Aprendizado de Máquina', 'Raspberry Pi', 'ONNX'],
        media: 'ai',
        image: projectImage('biometriaCover'),
      },
      {
        title: 'Pato a Jato',
        href: '/projects/pato-a-jato/',
        text: 'Telemetria, desenvolvimento com ESP32, fabricação e validação de PCBs em equipe de competição de eficiência energética.',
        tags: ['Competição', 'Telemetria', 'PCB', 'ESP32'],
        media: 'car',
        image: projectImage('patoCover'),
      },
      {
        title: 'Robotnik',
        href: '/projects/robotnik/',
        text: 'Robótica, divulgação científica e protótipos como hexapod, cubo de LED, mesa robótica de equilíbrio de bola e eventos na UTFPR-PB.',
        tags: ['Robótica', 'Extensão', 'Protótipos'],
        media: 'robotics',
        image: projectImage('robotnikCover'),
      },
      {
        title: 'GEAstro',
        href: '/projects/geastro/',
        text: 'Astronomia, observações e divulgação científica para aproximar tecnologia, ciência e comunidade.',
        tags: ['Astronomia', 'Extensão', 'Ciência'],
        media: 'control',
        image: projectImage('geastroCover'),
      },
    ],
  },
  en: {
    meta: {
      title: 'Projects | Guilherme Rodrigues',
      description:
        'Projects by Guilherme Rodrigues in embedded systems, IoT, robotics, applied AI, telemetry and scientific outreach.',
    },
    header: {
      eyebrow: 'Portfolio',
      title: 'Projects',
      description:
        'A central area for detailed project pages with text, photos, videos, architecture, results and lessons learned.',
    },
    intro: {
      title: 'Project Archive',
      description:
        'These pages are designed to be more complete than a simple resume entry. Each one can include a story, technical context, images, videos, diagrams, code links, documents, limitations, results and lessons learned.',
    },
    projects: [
      {
        title: 'Neonatal Biometrics / Thesis',
        href: '/en/projects/biometria-neonatal/',
        text: 'Machine learning integration in embedded platforms, evaluating neural network inference on Raspberry Pi and ARM Linux.',
        tags: ['Thesis', 'Machine Learning', 'Raspberry Pi', 'ONNX'],
        media: 'ai',
        image: projectImage('biometriaCover'),
      },
      {
        title: 'Pato a Jato',
        href: '/en/projects/pato-a-jato/',
        text: 'Telemetry, ESP32 development, PCB fabrication and validation for an energy efficiency student competition team.',
        tags: ['Competition', 'Telemetry', 'PCB', 'ESP32'],
        media: 'car',
        image: projectImage('patoCover'),
      },
      {
        title: 'Robotnik',
        href: '/en/projects/robotnik/',
        text: 'Robotics, scientific outreach and prototypes such as a hexapod, LED cube, ball balancing table and UTFPR-PB events.',
        tags: ['Robotics', 'Outreach', 'Prototypes'],
        media: 'robotics',
        image: projectImage('robotnikCover'),
      },
      {
        title: 'GEAstro',
        href: '/en/projects/geastro/',
        text: 'Astronomy, observations and scientific outreach to connect technology, science and the community.',
        tags: ['Astronomy', 'Outreach', 'Science'],
        media: 'control',
        image: projectImage('geastroCover'),
      },
    ],
  },
} satisfies Record<Lang, object>;

export type ProjectListContent = typeof projectListContent.pt;
