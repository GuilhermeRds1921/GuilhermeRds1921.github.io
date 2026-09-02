import { patoAJatoVideos, robotnikVideos, type PortfolioVideo } from './videos';

export type ProjectVideoAlbum = {
  slug: string;
  title: string;
  caption: string;
  description: string;
  projectHref: string;
  galleryHref: string;
  videos: PortfolioVideo[];
  tags: string[];
};

const placeholderVideos = (project: string, title: string, caption: string): PortfolioVideo[] => [
  {
    id: `${project}-placeholder`,
    title,
    caption,
    project,
  },
];

export const projectVideoAlbums: ProjectVideoAlbum[] = [
  {
    slug: 'robotnik',
    title: 'Robotnik',
    caption: 'Demonstrações, robôs, oficinas e divulgação científica.',
    description: 'Vídeos centralizados do projeto Robotnik, com espaço para demonstrações, apresentações e registros das atividades.',
    projectHref: '/projects/robotnik/',
    galleryHref: '/gallery/robotnik/',
    videos: robotnikVideos,
    tags: ['Robótica', 'Demonstrações', 'Extensão'],
  },
  {
    slug: 'pato-a-jato',
    title: 'Pato a Jato',
    caption: 'CNC, telemetria em bancada, sensores, eventos e competição.',
    description: 'Vídeos centralizados do Pato a Jato, incluindo CNC, telemetria, testes de bancada e registros do projeto.',
    projectHref: '/projects/pato-a-jato/',
    galleryHref: '/gallery/pato-a-jato/',
    videos: patoAJatoVideos,
    tags: ['Telemetria', 'CNC', 'ESP32'],
  },
  {
    slug: 'biometria-neonatal',
    title: 'Biometria Neonatal',
    caption: 'Explicações do TCC, execução dos modelos, testes e resultados.',
    description: 'Vídeos centralizados do projeto de Biometria Neonatal e do TCC, preparados para receber explicações e demonstrações.',
    projectHref: '/projects/biometria-neonatal/',
    galleryHref: '/gallery/biometria-neonatal/',
    videos: placeholderVideos(
      'biometria-neonatal',
      'Vídeos de Biometria Neonatal',
      'Seção pronta para receber explicações, demonstrações e apresentações do TCC via YouTube.',
    ),
    tags: ['TCC', 'IA Embarcada', 'Demonstração'],
  },
  {
    slug: 'geastro',
    title: 'GeAstro',
    caption: 'Eventos, observações e divulgação científica.',
    description: 'Vídeos centralizados do GeAstro, com espaço para registros de observações, eventos e ações de divulgação científica.',
    projectHref: '/projects/geastro/',
    galleryHref: '/gallery/geastro/',
    videos: placeholderVideos(
      'geastro',
      'Vídeos do GeAstro',
      'Seção pronta para receber registros de astronomia, observações e divulgação científica via YouTube.',
    ),
    tags: ['Astronomia', 'Eventos', 'Ciência'],
  },
  {
    slug: 'ball-balancing-robot',
    title: 'Ball Balancing Robot',
    caption: 'Demonstrações da mesa, controle, visão computacional e interface.',
    description: 'Vídeos centralizados da mesa de equilíbrio de bola, preparados para demonstrações, testes e explicações técnicas.',
    projectHref: '/projects/ball-balancing-robot/',
    galleryHref: '/gallery/robotnik/',
    videos: placeholderVideos(
      'ball-balancing-robot',
      'Vídeos do Ball Balancing Robot',
      'Seção pronta para receber demonstrações da mesa de equilíbrio de bola via YouTube.',
    ),
    tags: ['Controle', 'Robótica', 'OpenCV'],
  },
];

export function getProjectVideoAlbum(slug: string) {
  return projectVideoAlbums.find((album) => album.slug === slug);
}
