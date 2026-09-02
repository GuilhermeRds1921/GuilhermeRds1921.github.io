import type { Lang } from '../../lib/i18n';
import { projectImage } from '../../lib/media';

export const homeContent = {
  pt: {
    meta: {
      title: 'Guilherme Rodrigues | Portfólio',
      description:
        'Portfólio de Guilherme Rodrigues: Engenharia de Computação, sistemas embarcados, IoT, IA aplicada, automação, projetos e Segurança da Informação.',
    },
    hero: {
      name: 'Guilherme Rodrigues',
      rolePrefix: 'Estudante de',
      roleHighlight: 'Engenharia de Computação',
      summary:
        'Portfólio e arquivo de projetos. Um espaço para organizar protótipos, vídeos, fotos, anotações de pesquisa e tudo que venho construindo com software, hardware, IoT, inteligência artificial e Segurança da Informação.',
      image: projectImage('portfolioHero'),
    },
    about: {
      title: 'Sobre',
      heading: 'Estudante de Engenharia de Computação com foco em tecnologia aplicada.',
      paragraphs: [
        'Sou estudante de Engenharia de Computação na UTFPR - Campus Pato Branco. Minha trajetória foi construída principalmente na prática, participando de projetos de robótica, extensão, competição, pesquisa e desenvolvimento de protótipos.',
        'Tenho bastante interesse pela área onde software e hardware se encontram: sistemas embarcados, sensores, telemetria, IoT, dashboards, Linux, C/C++, Python, inteligência artificial aplicada e Segurança da Informação.',
        'Atualmente participo do Grupo de Biometria Neonatal e desenvolvo meu TCC sobre integração de machine learning em plataformas embarcadas, avaliando inferência de modelos em dispositivos como Raspberry Pi.',
      ],
      info: [
        ['Cidade:', 'Pato Branco, Paraná, Brasil'],
        ['Formação:', 'Engenharia de Computação · UTFPR-PB'],
        ['Foco:', 'Automação, IoT e Machine Learning'],
        ['Buscando:', 'oportunidades de estágio em tecnologia'],
      ],
    },
    projects: {
      title: 'Projetos em destaque',
      description:
        'Cada página de projeto foi pensada para reunir histórias mais completas, explicações técnicas, galerias de imagens, vídeos, diagramas, links de código e aprendizados.',
    },
    contentMap: {
      title: 'Estrutura do portfólio',
      description: 'Este site foi pensado como um grande arquivo pessoal e técnico, não apenas como um currículo online.',
      items: [
        ['Projetos', 'Páginas técnicas com objetivos, arquitetura, mídias, resultados e aprendizados.', '/projects/'],
        ['Galeria', 'Coleções de fotos de protótipos, eventos, laboratórios, oficinas e experimentos.', '/gallery/'],
        ['Certificações', 'Cursos, certificados, materiais da Cisco e formações complementares.', '/certifications/'],
      ],
    },
    skills: {
      title: 'Habilidades',
      description: 'Ferramentas, tecnologias e áreas que aparecem nos meus projetos, estudos e experiências.',
      items: [
        'C',
        'C++',
        'TypeScript',
        'JavaScript',
        'NodeJS',
        'Python',
        'Linux',
        'Git/GitHub',
        'Raspberry Pi',
        'ESP32',
        'IoT',
        'MQTT',
        'AWS IoT Core',
        'Lambda',
        'DynamoDB',
        'Telemetria',
        'Firmware',
        'Microcontroladores',
        'Prototipagem',
        'Sensores',
        'Dashboards',
        'OpenCV',
        'React',
        'Next.js',
        'Tailwind',
        'FastAPI',
        'SQL',
        'MongoDB',
        'PostgreSQL',
        'PowerBI',
        'SharePoint',
        'Office 360',
        'Observabilidade',
        'Redes',
        'Fusion 360',
        'PCB',
        'Modelagem 3D',
      ],
    },
    contact: {
      title: 'Contato',
      description:
        'Aberto a oportunidades de estágio em tecnologia, sistemas embarcados, automação, IA aplicada, IoT e Segurança da Informação.',
    },
  },
  en: {
    meta: {
      title: 'Guilherme Rodrigues | Portfolio',
      description:
        'Portfolio of Guilherme Rodrigues: Computer Engineering, embedded systems, IoT, applied AI, automation, projects and cybersecurity.',
    },
    hero: {
      name: 'Guilherme Rodrigues',
      rolePrefix: "I'm a",
      roleHighlight: 'Computer Engineering student',
      summary:
        'Portfolio and project archive. A place to organize prototypes, videos, photos, research notes and what I have been building with software, hardware, IoT, artificial intelligence and cybersecurity.',
      image: projectImage('portfolioHero'),
    },
    about: {
      title: 'About',
      heading: 'Computer Engineering student focused on applied technology.',
      paragraphs: [
        'I study Computer Engineering at UTFPR - Pato Branco Campus. My path has been shaped mostly through hands-on work in robotics, outreach, competition teams, research and prototype development.',
        'I am especially interested in the place where software and hardware meet: embedded systems, sensors, telemetry, IoT, dashboards, Linux, C/C++, Python, applied artificial intelligence and cybersecurity.',
        'I currently work with the Neonatal Biometrics group and develop my undergraduate thesis on machine learning integration in embedded platforms, evaluating model inference on devices such as Raspberry Pi.',
      ],
      info: [
        ['City:', 'Pato Branco, Parana, Brazil'],
        ['Education:', 'Computer Engineering · UTFPR-PB'],
        ['Focus:', 'Automation, IoT and Machine Learning'],
        ['Looking for:', 'technology internship opportunities'],
      ],
    },
    projects: {
      title: 'Featured Projects',
      description:
        'Each project page is designed to gather fuller stories, technical explanations, image galleries, videos, diagrams, code links and lessons learned.',
    },
    contentMap: {
      title: 'Portfolio Structure',
      description: 'This site is designed as a personal and technical archive, not only as an online resume.',
      items: [
        ['Projects', 'Technical pages with goals, architecture, media, results and lessons learned.', '/en/projects/'],
        ['Gallery', 'Photo collections from prototypes, events, labs, workshops and experiments.', '/en/gallery/'],
        ['Certifications', 'Courses, certificates, Cisco material and complementary learning.', '/en/certifications/'],
      ],
    },
    skills: {
      title: 'Skills',
      description: 'Tools, technologies and areas that show up in my projects, studies and experiences.',
      items: [
        'C',
        'C++',
        'TypeScript',
        'JavaScript',
        'NodeJS',
        'Python',
        'Linux',
        'Git/GitHub',
        'Raspberry Pi',
        'ESP32',
        'IoT',
        'MQTT',
        'AWS IoT Core',
        'Lambda',
        'DynamoDB',
        'Telemetry',
        'Firmware',
        'Microcontrollers',
        'Prototyping',
        'Sensors',
        'Dashboards',
        'OpenCV',
        'React',
        'Next.js',
        'Tailwind',
        'FastAPI',
        'SQL',
        'MongoDB',
        'PostgreSQL',
        'PowerBI',
        'SharePoint',
        'Office 360',
        'Observability',
        'Networks',
        'Fusion 360',
        'PCB',
        '3D Modeling',
      ],
    },
    contact: {
      title: 'Contact',
      description:
        'Open to internship opportunities in technology, embedded systems, automation, applied AI, IoT and cybersecurity.',
    },
  },
} satisfies Record<Lang, object>;

export type HomeContent = typeof homeContent.pt;
