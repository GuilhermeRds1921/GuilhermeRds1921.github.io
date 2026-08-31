import { projectGallery, projectImage, type ResolvedMediaImage } from '../../lib/media';
import { patoAJatoMedia } from './patoAJato';
import { robotnikMedia } from './robotnik';

export type GalleryImage = ResolvedMediaImage & {
  title?: string;
  description?: string;
  category?: string;
  fullUrl?: string;
  disabled?: boolean;
};

export type GalleryVideo = {
  id: string;
  title: string;
  description: string;
  category: string;
  driveFileId: string;
  driveUrl: string;
  embedUrl: string;
};

export type ProjectAlbum = {
  slug: string;
  title: string;
  caption: string;
  description: string;
  projectHref: string;
  videoHref: string;
  cover: GalleryImage;
  images: GalleryImage[];
  videos?: GalleryVideo[];
  tags: string[];
};

const fallback = '/images/projects/placeholder.svg';
const driveFileUrl = (id: string) => `https://drive.google.com/file/d/${id}/view`;
const drivePreviewUrl = (id: string) => `https://drive.google.com/file/d/${id}/preview`;

const normalizeImage = (image: any): GalleryImage => ({
  src: image.thumbnailUrl || image.src || fallback,
  alt: image.alt || image.title || image.caption || 'Imagem do projeto',
  caption: image.title || image.caption || image.description,
  title: image.title || image.caption,
  description: image.description || image.caption,
  category: image.category,
  fullUrl: image.fullUrl || image.driveUrl || image.src || image.thumbnailUrl,
  fallback: image.fallback || fallback,
  disabled: image.disabled,
});

const uniqueImages = (images: GalleryImage[]): GalleryImage[] => {
  const seen = new Set<string>();

  return images.filter((image) => {
    if (image.disabled || image.src === fallback) return false;

    const key = image.fullUrl || image.src;
    if (!key || seen.has(key)) return false;

    seen.add(key);
    return true;
  });
};

const biometriaImages: GalleryImage[] = [
  normalizeImage({ ...projectImage('biometriaCover'), title: 'Biometria Neonatal' }),
  ...projectGallery('biometriaNeonatal')
    .filter((image) => image.src !== fallback)
    .map((image) => normalizeImage(image)),
];

const patoImages: GalleryImage[] = [
  normalizeImage(patoAJatoMedia.cover),
  ...patoAJatoMedia.gallery.map((image) => normalizeImage(image)),
];

const robotnikImages: GalleryImage[] = [
  normalizeImage(robotnikMedia.cover),
  ...robotnikMedia.gallery.map((image) => normalizeImage(image)),
];

const ballBalancingImages: GalleryImage[] = [
  normalizeImage({
    src: 'https://drive.google.com/thumbnail?id=1tW71B8dqGgVHH5Q0k9JiaXqu7IvTMczC&sz=w1600',
    fullUrl: driveFileUrl('1tW71B8dqGgVHH5Q0k9JiaXqu7IvTMczC'),
    title: 'Mesa de equilíbrio de bola',
    description: 'Registro da mesa robótica de equilíbrio de bola usada em testes e demonstrações.',
    alt: 'Mesa robótica de equilíbrio de bola',
    category: 'controle',
  }),
];

const ballBalancingVideos: GalleryVideo[] = [
  {
    id: 'robotnik-mesa-equilibrio-00',
    title: 'Mesa de equilíbrio de bola - vídeo 1',
    description: 'Registro em vídeo da mesa robótica de equilíbrio de bola.',
    category: 'demonstração',
    driveFileId: '1qk1LnI7Id4bqUY_BoICqiofEznGMaN1G',
    driveUrl: driveFileUrl('1qk1LnI7Id4bqUY_BoICqiofEznGMaN1G'),
    embedUrl: drivePreviewUrl('1qk1LnI7Id4bqUY_BoICqiofEznGMaN1G'),
  },
  {
    id: 'robotnik-mesa-equilibrio-01',
    title: 'Mesa de equilíbrio de bola - vídeo 2',
    description: 'Registro em vídeo da mesa robótica de equilíbrio de bola.',
    category: 'demonstração',
    driveFileId: '1ECioEwHrzEOC-kausjCz8pIl78LjZaHL',
    driveUrl: driveFileUrl('1ECioEwHrzEOC-kausjCz8pIl78LjZaHL'),
    embedUrl: drivePreviewUrl('1ECioEwHrzEOC-kausjCz8pIl78LjZaHL'),
  },
  {
    id: 'robotnik-mesa-equilibrio-02',
    title: 'Mesa de equilíbrio de bola - vídeo 3',
    description: 'Registro em vídeo da mesa robótica de equilíbrio de bola.',
    category: 'demonstração',
    driveFileId: '1-Sa9nHhCQLuUmVhI1PI7WK93E7yor617',
    driveUrl: driveFileUrl('1-Sa9nHhCQLuUmVhI1PI7WK93E7yor617'),
    embedUrl: drivePreviewUrl('1-Sa9nHhCQLuUmVhI1PI7WK93E7yor617'),
  },
  {
    id: 'robotnik-mesa-equilibrio-03',
    title: 'Mesa de equilíbrio de bola - vídeo 4',
    description: 'Registro em vídeo da mesa robótica de equilíbrio de bola.',
    category: 'demonstração',
    driveFileId: '15J7sVmeQ97myM-_31V1Z1y11SRLF1ge2',
    driveUrl: driveFileUrl('15J7sVmeQ97myM-_31V1Z1y11SRLF1ge2'),
    embedUrl: drivePreviewUrl('15J7sVmeQ97myM-_31V1Z1y11SRLF1ge2'),
  },
];

const geastroImages: GalleryImage[] = [
  normalizeImage({ ...projectImage('geastroCover'), title: 'GeAstro' }),
];

export const projectAlbums: ProjectAlbum[] = [
  {
    slug: 'robotnik',
    title: 'Robotnik',
    caption: 'Robôs, cubo de LED, hexapod, mesa de equilíbrio e divulgação científica.',
    description:
      'Álbum centralizado com registros do projeto Robotnik, protótipos de robótica, eletrônica aplicada e ações de divulgação tecnológica.',
    projectHref: '/projects/robotnik/',
    videoHref: '/videos/robotnik/',
    cover: normalizeImage(robotnikMedia.cover),
    images: uniqueImages(robotnikImages),
    tags: ['Robótica', 'Extensão', 'Protótipos'],
  },
  {
    slug: 'pato-a-jato',
    title: 'Pato a Jato',
    caption: 'Telemetria, ESP32, PCBs, CNC, competição, bancada e protótipos.',
    description:
      'Álbum centralizado com registros do Pato a Jato, incluindo competição, eletrônica embarcada, telemetria, sensores e bastidores de desenvolvimento.',
    projectHref: '/projects/pato-a-jato/',
    videoHref: '/videos/pato-a-jato/',
    cover: normalizeImage(patoAJatoMedia.cover),
    images: uniqueImages(patoImages),
    tags: ['Telemetria', 'ESP32', 'PCB', 'CNC'],
  },
  {
    slug: 'biometria-neonatal',
    title: 'Biometria Neonatal',
    caption: 'TCC, pesquisa, testes de inferência, Raspberry Pi e visão computacional.',
    description:
      'Álbum centralizado para imagens do projeto de Biometria Neonatal, execução de modelos, resultados e documentação visual da pesquisa.',
    projectHref: '/projects/biometria-neonatal/',
    videoHref: '/videos/biometria-neonatal/',
    cover: biometriaImages[0],
    images: uniqueImages(biometriaImages),
    tags: ['TCC', 'IA Embarcada', 'OpenCV', 'ONNX'],
  },
  {
    slug: 'geastro',
    title: 'GeAstro',
    caption: 'Astronomia, eventos, observações e divulgação científica.',
    description:
      'Álbum centralizado para registros do GeAstro, eventos, atividades de divulgação científica e ações com a comunidade.',
    projectHref: '/projects/geastro/',
    videoHref: '/videos/geastro/',
    cover: geastroImages[0],
    images: uniqueImages(geastroImages),
    tags: ['Astronomia', 'Extensão', 'Ciência'],
  },
  {
    slug: 'ball-balancing-robot',
    title: 'Ball Balancing Robot',
    caption: 'Robótica, controle, visão computacional, Raspberry Pi e interface web.',
    description:
      'Álbum preparado para receber imagens da mesa robótica de equilíbrio de bola, arquitetura, testes, interface e demonstrações.',
    projectHref: '/projects/ball-balancing-robot/',
    videoHref: '/videos/ball-balancing-robot/',
    cover: ballBalancingImages[0],
    images: uniqueImages(ballBalancingImages),
    videos: ballBalancingVideos,
    tags: ['Controle', 'OpenCV', 'Raspberry Pi'],
  },
];

export function getProjectAlbum(slug: string) {
  return projectAlbums.find((album) => album.slug === slug);
}
