import type { Lang } from '../../lib/i18n';

const sharedImages = {
  biometria: '/images/projects/biometria-neonatal/cover.jpg',
  pato: '/images/projects/pato-a-jato/cover.jpg',
  robotnik: '/images/projects/robotnik/cover.png',
  geastro: '/images/projects/geastro/cover.jpg',
};

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
        image: sharedImages.biometria,
      },
      {
        title: 'Pato a Jato',
        href: '/projects/pato-a-jato/',
        text: 'Telemetria, desenvolvimento com ESP32, fabricação e validação de PCBs em equipe de competição de eficiência energética.',
        tags: ['Competição', 'Telemetria', 'PCB', 'ESP32'],
        media: 'car',
        image: sharedImages.pato,
      },
      {
        title: 'Robotnik',
        href: '/projects/robotnik/',
        text: 'Robótica, divulgação científica e protótipos como hexapod, cubo de LED, robô Otto e mesa robótica de equilíbrio de bola.',
        tags: ['Robótica', 'Extensão', 'Protótipos'],
        media: 'robotics',
        image: sharedImages.robotnik,
      },
      {
        title: 'GeAstro',
        href: '/projects/geastro/',
        text: 'Astronomia, observações e divulgação científica para aproximar tecnologia, ciência e comunidade.',
        tags: ['Astronomia', 'Extensão', 'Ciência'],
        media: 'control',
        image: sharedImages.geastro,
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
        image: sharedImages.biometria,
      },
      {
        title: 'Pato a Jato',
        href: '/en/projects/pato-a-jato/',
        text: 'Telemetry, ESP32 development, PCB fabrication and validation for an energy efficiency student competition team.',
        tags: ['Competition', 'Telemetry', 'PCB', 'ESP32'],
        media: 'car',
        image: sharedImages.pato,
      },
      {
        title: 'Robotnik',
        href: '/en/projects/robotnik/',
        text: 'Robotics, scientific outreach and prototypes such as a hexapod, LED cube, Otto robot and ball balancing table.',
        tags: ['Robotics', 'Outreach', 'Prototypes'],
        media: 'robotics',
        image: sharedImages.robotnik,
      },
      {
        title: 'GeAstro',
        href: '/en/projects/geastro/',
        text: 'Astronomy, observations and scientific outreach to connect technology, science and the community.',
        tags: ['Astronomy', 'Outreach', 'Science'],
        media: 'control',
        image: sharedImages.geastro,
      },
    ],
  },
} satisfies Record<Lang, object>;

export type ProjectListContent = typeof projectListContent.pt;
