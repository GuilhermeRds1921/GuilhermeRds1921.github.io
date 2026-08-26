import { googleDriveImageUrl } from '../../lib/media';

const driveFileUrl = (id: string) => `https://drive.google.com/file/d/${id}/view`;

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

export const robotnikMedia = {
  cover: image(
    '13sSY-8t9n3W1nFjwr7fGsGNEqxlJeB-J',
    'Capa do projeto Robotnik',
    'Imagem de capa usada para representar a Robotnik como projeto de robótica e divulgação científica.',
    'Imagem de capa do projeto Robotnik',
    'capa',
    true,
  ),
  gallery: [
    image(
      '13sSY-8t9n3W1nFjwr7fGsGNEqxlJeB-J',
      'Robotnik',
      'Registro visual do projeto Robotnik.',
      'Registro do projeto Robotnik',
      'capa',
      true,
    ),
    image(
      '16iLgapOKkb3Qq-9JLEzgNrLItm1W5a7w',
      'Robô hexapod azul',
      'Protótipo de robô hexapod desenvolvido em atividades de robótica.',
      'Robô hexapod azul do projeto Robotnik',
      'protótipos',
      true,
    ),
    image(
      '1asPVMJk94WDILhpGAyd9upVKeJDP74V7',
      'Cubo de LED 8x8x8',
      'Demonstração visual de eletrônica, programação e montagem.',
      'Cubo de LED 8x8x8 usado em demonstrações do Robotnik',
      'eletrônica',
      true,
    ),
    image(
      '1-c0DpATbtrTFyNtXEO7BKtw-6EwiSjCH',
      'Controle por gamepad do hexapod',
      'Registro do robô hexapod com controle por gamepad, usado nas demonstrações do projeto.',
      'Robô hexapod azul ao lado de um controle por gamepad',
      'protótipos',
      true,
    ),
    image(
      '1Drk5SFieM6Dk5lzZwL00Z7PikO2_Vd6O',
      'Cubo em montagem',
      'Registro de montagem e testes de projeto eletrônico.',
      'Montagem de projeto eletrônico do Robotnik',
      'eletrônica',
    ),
    image(
      '1DODf83IZSyvlBtbXNQTPl9LAx4h1i6sX',
      'Hexapod em desenvolvimento',
      'Registro de montagem e evolução do robô hexapod.',
      'Robô hexapod em desenvolvimento no Robotnik',
      'protótipos',
    ),
    image(
      '1SQdTfh7W5FiKOEPOx3A2TAoJ9AQgVlAX',
      'Hexapod azul em detalhe',
      'Detalhe do protótipo de robô hexapod usado em testes e demonstrações.',
      'Detalhe do robô hexapod azul do projeto Robotnik',
      'protótipos',
    ),
    image(
      '1sBKnQiiceG4OeC5N-y4xqscz3GwvrTwg',
      'Hexapod em teste',
      'Registro do robô hexapod durante etapa de montagem, testes ou demonstração.',
      'Robô hexapod azul durante teste do projeto Robotnik',
      'protótipos',
    ),
    image(
      '1j7lpC83iduqbgfFVODV0-KcIObwAwaQt',
      'Base do hexapod',
      'Detalhe mecânico do protótipo de robô hexapod.',
      'Detalhe inferior do robô hexapod do Robotnik',
      'mecânica',
    ),
    image(
      '1tW71B8dqGgVHH5Q0k9JiaXqu7IvTMczC',
      'Mesa de equilíbrio de bola',
      'Protótipo de controle com integração entre percepção, eletrônica e atuação.',
      'Mesa robótica de equilíbrio de bola do projeto Robotnik',
      'controle',
      true,
    ),
  ],
};
