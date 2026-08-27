import { patoAJatoMedia } from '../media/patoAJato';

export const patoAJatoPageContent = {
  meta: {
    title: 'Pato a Jato | Guilherme Rodrigues',
    description:
      'Página detalhada do projeto Pato a Jato, com Shell Eco-marathon 2023, telemetria, ESP32, PCBs, CNC, testes e aprendizados em engenharia.',
  },
  hero: {
    category: 'Eficiência energética · Shell Eco-marathon · Telemetria',
    title: 'Pato a Jato',
    description:
      'Equipe de competição da UTFPR-PB voltada a protótipos de alta eficiência, com atuação em carro a combustão, conceito elétrico, telemetria, eletrônica embarcada e participação no Shell Eco-marathon.',
    tags: ['Shell 2023', 'Telemetria', 'ESP32', 'PCB', 'CNC', 'Sensores'],
    image: patoAJatoMedia.cover,
  },
  summary:
    'O Pato a Jato foi uma experiência prática de engenharia em equipe, unindo eletrônica embarcada, fabricação de placas, telemetria, testes de bancada e a pressão real de preparar um protótipo para competição. Em 2023, a equipe conquistou o 2º lugar na categoria Prototype Internal Combustion Engine no Shell Eco-marathon Brazil Challenger, no Rio de Janeiro.',
  whatIs: {
    title: 'O que é o Pato a Jato',
    paragraphs: [
      'O Pato a Jato é uma equipe de competição da UTFPR - Campus Pato Branco voltada ao desenvolvimento de protótipos de eficiência energética. O projeto envolve mecânica, elétrica, eletrônica, software embarcado, gestão de equipe, testes e participação em competições como o Shell Eco-marathon.',
      'Dentro da equipe, cada subsistema precisa funcionar como parte de um veículo real. Isso torna o projeto uma ponte direta entre teoria e prática: sensores precisam entregar dados confiáveis, placas precisam resistir ao uso, o firmware precisa ser estável e as decisões técnicas precisam considerar tempo, custo, segurança e manutenção.',
    ],
  },
  participation: {
    title: 'Minha participação',
    paragraphs: [
      'Minha atuação no Pato a Jato passou principalmente pela área de telemetria e eletrônica. Trabalhei com o protótipo a combustão, apoiando a leitura e organização de dados do veículo, e também participei do desenvolvimento eletrônico ligado ao primeiro conceito de protótipo elétrico da equipe.',
      'A experiência envolveu ESP32, sensores, validação de circuitos, fabricação de placas de circuito impresso, usinagem em CNC, montagem, testes em bancada e ajustes iterativos. Foi um ambiente em que pequenos detalhes de projeto, soldagem, roteamento, alimentação e comunicação podiam mudar completamente o comportamento do sistema.',
      'Em 2023, fui para o Shell Eco-marathon Brazil Challenger no Rio de Janeiro como membro da célula de eletrônica, em uma edição em que a equipe conquistou o 2º lugar na categoria Prototype Internal Combustion Engine com 647,14 km/l. Também participei de atividades de exibição do projeto, apresentando o carro, os sistemas embarcados e a proposta da equipe para visitantes e estudantes.',
    ],
  },
  timeline: [
    {
      period: 'Entrada na equipe',
      title: 'Contato com competição universitária',
      description:
        'Início da participação em uma equipe multidisciplinar, com foco em protótipos reais e decisões técnicas orientadas por prazo, teste e desempenho.',
    },
    {
      period: 'Combustão',
      title: 'Telemetria do protótipo',
      description:
        'Apoio ao sistema de telemetria do carro a combustão, lidando com sensores, coleta de dados e integração com eletrônica embarcada.',
    },
    {
      period: 'Eletrônica',
      title: 'PCB e fabricação em CNC',
      description:
        'Desenvolvimento, fabricação e validação de placas de circuito impresso, incluindo usinagem na CNC da universidade e testes em bancada.',
    },
    {
      period: 'Elétrico',
      title: 'Primeiro conceito de protótipo elétrico',
      description:
        'Apoio ao desenvolvimento eletrônico com ESP32 e integração de hardware e software para o primeiro protótipo elétrico da equipe.',
    },
    {
      period: '2023',
      title: 'Shell Eco-marathon no Rio de Janeiro',
      description:
        'Participação no Shell Eco-marathon Brazil Challenger 2023, no Pier Mauá, como membro da célula de eletrônica da equipe.',
    },
  ],
  competition: {
    title: '2º lugar no Rio de Janeiro',
    description:
      'O evento de 2023 aconteceu no Pier Mauá, no Rio de Janeiro, entre 29 de agosto e 1º de setembro. A Pato a Jato competiu com o protótipo a combustão e conquistou o 2º lugar na categoria Prototype Internal Combustion Engine, com resultado de 647,14 km/l.',
    sourceLabel: 'Resultado oficial Shell Eco-marathon',
    sourceHref:
      'https://www.shellecomarathon.com/about/previous-seasons/2023-programme-on-track/challenger-brazil.html',
    highlights: [
      {
        value: '2023',
        label: 'Temporada Shell Eco-marathon Brazil Challenger',
      },
      {
        value: 'RJ',
        label: 'Competição realizada no Pier Mauá, Rio de Janeiro',
      },
      {
        value: '2º',
        label: 'Colocação na categoria Prototype Internal Combustion Engine',
      },
      {
        value: '647,14',
        label: 'Resultado oficial registrado em km/l',
      },
    ],
  },
  prototypes: [
    {
      title: 'Telemetria do carro a combustão',
      description:
        'Sistema voltado à leitura e acompanhamento de dados do protótipo a combustão, apoiando testes, diagnóstico e compreensão do comportamento do veículo.',
      concepts: 'Sensores, aquisição de dados, comunicação, firmware, organização de medições e validação em campo.',
      tags: ['Telemetria', 'Combustão', 'Sensores'],
      imageId: 'pato-telemetria',
    },
    {
      title: 'ESP32 no conceito elétrico',
      description:
        'Apoio ao desenvolvimento eletrônico do primeiro conceito de protótipo elétrico da equipe, com uso de ESP32 para controle, leitura e comunicação.',
      concepts: 'Placa modelada por Satil Pereira, gerente da célula de eletrônica, e fabricada por mim na CNC. ESP32, sistemas embarcados, firmware e integração hardware-software.',
      tags: ['ESP32', 'Elétrico', 'Embarcados'],
      imageId: 'pato-esp32',
    },
    {
      title: 'Placas de circuito impresso',
      description:
        'Desenvolvimento, fabricação e validação de PCBs para organizar conexões, reduzir improvisos e deixar os sistemas eletrônicos mais confiáveis.',
      concepts: 'Modelagem por Satil Pereira, gerente da célula de eletrônica, e fabricação por mim na CNC.',
      tags: ['PCB', 'Eletrônica', 'Validação'],
      imageId: 'pato-pcb',
    },
    {
      title: 'Usinagem de placas em CNC',
      description:
        'Fabricação de placas na CNC da universidade, conectando projeto eletrônico digital, preparação de arquivos e execução física.',
      concepts: 'CNC, fabricação, trilhas, furação, tolerância, acabamento e retrabalho.',
      tags: ['CNC', 'Fabricação', 'PCB'],
      imageId: 'pato-cnc',
    },
    {
      title: 'Testes em bancada',
      description:
        'Validação feita com o protótipo na oficina, antes dos testes de pista, buscando falhas de alimentação, conexão, leitura e comunicação.',
      concepts: 'Bancada de oficina, protótipo montado, medições, depuração, isolamento de falhas e confiabilidade.',
      tags: ['Bancada', 'Testes', 'Depuração'],
      imageId: 'pato-bancada',
    },
    {
      title: 'Competição e exibição',
      description:
        'Participação no Shell Eco-marathon Brazil Challenger 2023 e em momentos de exibição do projeto para apresentar o veículo e seus sistemas ao público.',
      concepts: 'Trabalho em equipe, comunicação técnica, logística, apresentação, competição e melhoria contínua.',
      tags: ['Shell 2023', 'Eventos', 'Equipe'],
      imageId: 'pato-competicao',
    },
  ],
  gallery: {
    title: 'Galeria de imagens',
    description:
      'Fotos externas do Google Drive concentradas na galeria geral do portfólio.',
    empty:
      'As fotos do Pato a Jato ficam agrupadas na aba Galeria para manter esta página mais leve.',
  },
  technologies: [
    'ESP32',
    'Telemetria',
    'Sensores',
    'Sistemas embarcados',
    'PCB',
    'CNC',
    'Soldagem',
    'Testes em bancada',
    'Aquisição de dados',
    'Carro a combustão',
    'Conceito de carro elétrico',
    'Eficiência energética',
    'Shell Eco-marathon',
  ],
  learnings: [
    'Projetos de competição exigem decisões técnicas rápidas, mas baseadas em teste, evidência e confiabilidade.',
    'Uma placa bem pensada reduz improvisos e facilita manutenção, depuração e montagem dentro do veículo.',
    'Telemetria só é útil quando os dados são confiáveis, interpretáveis e conectados a decisões práticas da equipe.',
    'A experiência de competição ensina engenharia sob pressão: prazo, logística, falhas reais, retrabalho e colaboração entre áreas.',
  ],
  externalLinks: [],
};
