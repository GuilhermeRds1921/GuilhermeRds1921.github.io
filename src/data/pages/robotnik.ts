import { robotnikMedia } from '../media/robotnik';

export const robotnikPageContent = {
  meta: {
    title: 'Robotnik | Guilherme Rodrigues',
    description:
      'Página detalhada do projeto Robotnik, com história, participação, protótipos, imagens, vídeos e aprendizados em robótica e divulgação científica.',
  },
  hero: {
    category: 'Robótica · Extensão · Divulgação científica',
    title: 'Robotnik',
    description:
      'Projeto de robótica e divulgação científica da UTFPR-PB, com protótipos, demonstrações tecnológicas e ações voltadas à comunidade.',
    tags: ['Robótica', 'Extensão', 'Protótipos', 'Eletrônica', 'Programação Embarcada'],
    image: robotnikMedia.cover,
  },
  summary:
    'A Robotnik marcou o início da minha trajetória prática dentro da Engenharia de Computação, aproximando robótica, eletrônica, programação embarcada, montagem, testes e apresentações para o público.',
  whatIs: {
    title: 'O que é a Robotnik',
    paragraphs: [
      'A Robotnik é um projeto de robótica e divulgação científica da UTFPR - Campus Pato Branco. O grupo desenvolve protótipos, demonstrações e atividades voltadas à aproximação entre universidade, escolas e comunidade externa.',
      'A proposta do projeto é transformar conceitos de robótica, eletrônica, programação e automação em experiências visuais e interativas. Em eventos e visitas, os protótipos ajudam o público a enxergar tecnologia de forma concreta, curiosa e acessível.',
    ],
  },
  participation: {
    title: 'Minha participação',
    paragraphs: [
      'Minha participação na Robotnik marcou o início da minha trajetória prática dentro da Engenharia de Computação. Foi nesse ambiente que tive contato com prototipagem, eletrônica, programação embarcada, montagem, testes, apresentações e atividades de divulgação tecnológica.',
      'Durante o ciclo de bolsa 2022-2023, participei do desenvolvimento e da documentação de protótipos usados pelo grupo, com destaque para o robô Hexapod e o Cubo de LED 8x8x8. Esse trabalho também foi relatado no SEI-SICITE 2023, no artigo “Robotnik: Divulgação robótica e científica para comunidade”.',
      'A vivência no grupo ajudou a consolidar uma forma de aprender que aparece até hoje nos meus projetos: construir, testar, observar o comportamento real do sistema, corrigir detalhes e explicar o funcionamento para outras pessoas. Também participei de eventos como o Dia da Tecnologia e a Feira de Profissões da UTFPR-PB.',
    ],
  },
  sicite: {
    title: 'SEI-SICITE 2023',
    description:
      'No SEI-SICITE 2023, participei como bolsista no trabalho “Robotnik: Divulgação robótica e científica para comunidade”, ligado ao ciclo 2022-2023 do projeto. Na época, eu estava entre o 4º e o 5º período da faculdade. O texto apresenta a Robotnik como uma iniciativa para aproximar universidade, escolas e comunidade por meio de protótipos de robótica com forte apelo visual e didático.',
    highlights: [
      'O trabalho teve como foco a divulgação tecnológica dos cursos de Engenharia de Computação e Análise e Desenvolvimento de Sistemas da UTFPR-PB.',
      'Foram apresentados dois protótipos funcionais: o robô Hexapod e o Cubo de LED 8x8x8.',
      'O Hexapod explorou eletrônica, programação embarcada, servomotores, comunicação Bluetooth, controle por gamepad, modelagem e impressão 3D.',
      'O Cubo de LED 8x8x8 reuniu 512 LEDs controlados por Arduino para gerar padrões de iluminação e efeitos visuais em demonstrações.',
      'Os protótipos foram utilizados em ações como a Feira de Profissões e o Dia da Tecnologia, ajudando a apresentar a área de computação para estudantes e visitantes.',
    ],
  },
  timeline: [
    {
      period: 'Início da graduação',
      title: 'Primeiro contato prático com robótica',
      description:
        'Entrada em atividades extracurriculares e primeiros experimentos com montagem, eletrônica e prototipagem.',
    },
    {
      period: 'Introdução à Engenharia',
      title: 'Robô hexapod',
      description:
        'Contato com o desenvolvimento de um robô hexapod, integrando estrutura mecânica, eletrônica e programação.',
    },
    {
      period: '2022',
      title: 'Feira de Profissões e Dia da Tecnologia',
      description:
        'Exposição de protótipos da Robotnik em eventos da UTFPR-PB, com demonstrações para estudantes do ensino médio e comunidade.',
    },
    {
      period: '2023',
      title: 'SEI-SICITE 2023',
      description:
        'Participação como bolsista no relato “Robotnik: Divulgação robótica e científica para comunidade”, documentando o ciclo 2022-2023 do projeto.',
    },
    {
      period: 'Evolução técnica',
      title: 'Projetos integrando hardware e software',
      description:
        'Experiências com sistemas embarcados, controle, sensores, LEDs, servos, montagem e validação prática.',
    },
  ],
  prototypes: [
    {
      title: 'Robô hexapod azul',
      description:
        'Protótipo de robô de seis pernas usado para explorar movimento, montagem mecânica, acionamento e programação embarcada.',
      concepts: 'Cinemática, servomotores, estrutura mecânica, controle de movimento e prototipagem.',
      tags: ['Robótica', 'Servos', 'Prototipagem'],
      imageId: '16iLgapOKkb3Qq-9JLEzgNrLItm1W5a7w',
    },
    {
      title: 'Cubo de LED 8x8x8',
      description:
        'Demonstração visual com matriz tridimensional de LEDs, útil para apresentar eletrônica digital e programação de efeitos.',
      concepts: 'Matrizes, multiplexação, soldagem, temporização, eletrônica digital e programação.',
      tags: ['LED', 'Eletrônica', 'Demonstração'],
      imageId: '1asPVMJk94WDILhpGAyd9upVKeJDP74V7',
    },
    {
      title: 'Mesa de equilíbrio de bola',
      description:
        'Projeto desenvolvido na disciplina de Oficina 1: uma mesa robótica para equilibrar uma bola, conectando percepção, controle e atuação em um sistema físico.',
      concepts:
        'Controle, visão computacional, servomotores, calibração, latência, malha fechada e integração hardware-software.',
      tags: ['Oficina 1', 'Controle', 'Visão', 'Servos'],
      imageId: '1tW71B8dqGgVHH5Q0k9JiaXqu7IvTMczC',
    },
    {
      title: 'EggBot para pintura de ovos',
      description:
        'Projeto desenvolvido na disciplina de Oficina 2: uma máquina de desenho em superfície curva, usada para demonstrar automação, coordenadas e movimento controlado.',
      concepts: 'Motores, controle de posição, desenho vetorial, automação e repetibilidade.',
      tags: ['Oficina 2', 'Automação', 'Motores', 'Desenho'],
    },
    {
      title: 'Eventos',
      description:
        'Participação em eventos de divulgação científica da UTFPR-PB, especialmente o Dia da Tecnologia e a Feira de Profissões.',
      concepts: 'Comunicação técnica, demonstração, extensão universitária, apresentação para público e aprendizagem prática.',
      tags: ['Eventos', 'UTFPR-PB', 'Divulgação'],
    },
  ],
  technologies: [
    'Sistemas embarcados',
    'Eletrônica aplicada',
    'Programação embarcada',
    'Servomotores',
    'Sensores',
    'Controle',
    'Prototipagem',
    'Montagem e testes',
    'Robótica educacional',
    'Divulgação científica',
  ],
  learnings: [
    'Aprender robótica exige lidar com o comportamento real do hardware, não apenas com a lógica planejada no código.',
    'Prototipagem ensina a testar cedo, ajustar montagem, revisar conexões e aceitar que pequenos detalhes físicos mudam o resultado.',
    'Apresentar projetos para escolas e eventos melhora a capacidade de explicar tecnologia com clareza para públicos diferentes.',
    'Projetos de extensão conectam engenharia com comunidade, mostrando que uma boa demonstração também é uma forma de ensino.',
  ],
  externalLinks: [
    {
      label: 'GitHub da Robotnik',
      href: 'https://github.com/DAINF-PB-Robotnik',
    },
  ],
};
