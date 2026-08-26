import { googleDriveImageUrl } from '../../lib/media';

const driveFileUrl = (id: string) => `https://drive.google.com/file/d/${id}/view`;
const placeholder = '/images/projects/placeholder.svg';

const image = (
  id: string,
  title: string,
  description: string,
  alt: string,
  category: string,
  featured = false,
) => ({
  id,
  title,
  description,
  alt,
  category,
  driveUrl: driveFileUrl(id),
  fullUrl: driveFileUrl(id),
  thumbnailUrl: googleDriveImageUrl(id, featured ? 1800 : 1000),
  featured,
});

const pendingImage = (
  imageName: string,
  title: string,
  description: string,
  alt: string,
  category: string,
  featured = false,
) => ({
  id: imageName,
  imageName,
  title,
  description,
  alt,
  category,
  driveUrl: '',
  fullUrl: '',
  thumbnailUrl: placeholder,
  featured,
});

export const patoAJatoMedia = {
  cover: image(
    '1H2UgUvgxqdrGZOi-MEJ4g3DU98vSB-Fl',
    'Capa do projeto Pato a Jato',
    'Imagem de capa usada para representar o projeto Pato a Jato.',
    'Imagem de capa do projeto Pato a Jato',
    'capa',
    true,
  ),
  cards: [
    pendingImage(
      'pato-telemetria',
      'Telemetria do protótipo a combustão',
      'Imagem planejada para o card de telemetria do carro a combustão.',
      'Sistema de telemetria do protótipo a combustão do Pato a Jato',
      'telemetria',
      true,
    ),
    pendingImage(
      'pato-esp32',
      'ESP32 no protótipo elétrico',
      'Imagem planejada para o card de desenvolvimento com ESP32.',
      'Desenvolvimento com ESP32 para o conceito de protótipo elétrico do Pato a Jato',
      'embarcados',
      true,
    ),
    pendingImage(
      'pato-pcb',
      'Placas de circuito impresso',
      'Imagem planejada para o card de PCBs do projeto.',
      'Placa de circuito impresso desenvolvida para o Pato a Jato',
      'eletrônica',
      true,
    ),
    pendingImage(
      'pato-cnc',
      'Usinagem CNC',
      'Imagem planejada para o card de fabricação de placas em CNC.',
      'Usinagem de placa de circuito impresso em CNC para o Pato a Jato',
      'fabricação',
    ),
    pendingImage(
      'pato-bancada',
      'Testes em bancada',
      'Imagem planejada para o card de validação em bancada.',
      'Testes de bancada de eletrônica e telemetria do Pato a Jato',
      'testes',
    ),
    pendingImage(
      'pato-competicao',
      'Competição',
      'Imagem planejada para o card de competição.',
      'Protótipo do Pato a Jato durante competição de eficiência energética',
      'competição',
    ),
  ],
  gallery: [
    /*
      Fotos futuras devem seguir nomes como:
      pato-oficina, pato-telemetria, pato-pcb, pato-cnc, pato-bancada,
      pato-competicao, pato-prototipo-combustao, pato-prototipo-eletrico.
    */
  ],
};
