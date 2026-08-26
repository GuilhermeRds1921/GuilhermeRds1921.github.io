import { patoAJatoMedia } from '../media/patoAJato';

export const patoAJatoPageContent = {
  meta: {
    title: 'Pato a Jato | Guilherme Rodrigues',
    description:
      'Página detalhada do projeto Pato a Jato, com participação em telemetria, ESP32, PCBs, CNC, testes, competição e aprendizados em engenharia.',
  },
  hero: {
    category: 'Eficiência energética · Telemetria · Competição',
    title: 'Pato a Jato',
    description:
      'Equipe de competição da UTFPR-PB voltada a protótipos de alta eficiência, com atuação em carro a combustão, conceito de carro elétrico, telemetria e eletrônica embarcada.',
    tags: ['Telemetria', 'ESP32', 'PCB', 'CNC', 'Sensores', 'Competição'],
    image: patoAJatoMedia.cover,
  },
  summary:
    'O Pato a Jato foi uma experiência prática de engenharia em equipe, unindo eletrônica embarcada, fabricação de placas, telemetria, testes de bancada e a pressão real de preparar um protótipo para competição.',
  whatIs: {
    title: 'O que é o Pato a Jato',
    paragraphs: [
      'O Pato a Jato é uma equipe de competição da UTFPR - Campus Pato Branco voltada ao desenvolvimento de protótipos de eficiência energética. O projeto envolve mecânica, elétrica, eletrônica, software embarcado, gestão de equipe, testes e participação em competições.',
      'Dentro da equipe, cada subsistema precisa funcionar como parte de um veículo real. Isso torna o projeto uma ponte direta entre teoria e prática: sensores precisam entregar dados confiáveis, placas precisam resistir ao uso, o firmware precisa ser estável e as decisões técnicas precisam considerar tempo, custo, segurança e manutenção.',
    ],
  },
  participation: {
    title: 'Minha participação',
    paragraphs: [
      'Minha atuação no Pato a Jato passou principalmente pela área de telemetria e eletrônica. Trabalhei com o protótipo a combustão, apoiando a leitura e organização de dados do veículo, e também participei do desenvolvimento eletrônico ligado ao primeiro conceito de protótipo elétrico da equipe.',
      'A experiência envolveu ESP32, sensores, validação de circuitos, fabricação de placas de circuito impresso, usinagem em CNC, montagem, testes em bancada e ajustes iterativos. Foi um ambiente em que pequenos detalhes de projeto, soldagem, roteamento, alimentação e comunicação podiam mudar completamente o comportamento do sistema.',
      'Em 2023, participei da competição no Rio de Janeiro, onde a equipe conquistou o 2º lugar na categoria combustão. Também participei de atividades de exibição do projeto, apresentando o carro, os sistemas embarcados e a proposta da equipe para visitantes e estudantes.',
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
      title: 'Competição no Rio de Janeiro',
      description:
        'Participação na competição em que a equipe alcançou o 2º lugar na categoria combustão, consolidando a experiência de projeto em ambiente competitivo.',
    },
  ],
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
      concepts: 'ESP32, sistemas embarcados, firmware, entradas e saídas, comunicação e integração hardware-software.',
      tags: ['ESP32', 'Elétrico', 'Embarcados'],
      imageId: 'pato-esp32',
    },
    {
      title: 'Placas de circuito impresso',
      description:
        'Desenvolvimento e validação de PCBs para organizar conexões, reduzir improvisos e deixar os sistemas eletrônicos mais confiáveis.',
      concepts: 'Roteamento, soldagem, alimentação, conectores, testes elétricos, revisão e documentação.',
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
        'Validação dos circuitos e módulos antes de levar o sistema para o protótipo, buscando falhas de alimentação, conexão, leitura e comunicação.',
      concepts: 'Multímetro, depuração, medições, prototipagem, isolamento de falhas e confiabilidade.',
      tags: ['Bancada', 'Testes', 'Depuração'],
      imageId: 'pato-bancada',
    },
    {
      title: 'Competição e exibição',
      description:
        'Participação na competição de 2023 no Rio de Janeiro e em momentos de exibição do projeto para apresentar o veículo e seus sistemas ao público.',
      concepts: 'Trabalho em equipe, comunicação técnica, logística, apresentação, competição e melhoria contínua.',
      tags: ['Competição', 'Eventos', 'Equipe'],
      imageId: 'pato-competicao',
    },
  ],
  gallery: {
    title: 'Galeria de imagens',
    description:
      'Área preparada para receber fotos externas do Google Drive quando os registros do Pato a Jato forem organizados.',
    empty:
      'As fotos ainda serão adicionadas. Os arquivos podem seguir nomes como pato-oficina, pato-telemetria, pato-pcb, pato-cnc, pato-bancada, pato-competicao, pato-prototipo-combustao e pato-prototipo-eletrico.',
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
  ],
  learnings: [
    'Projetos de competição exigem decisões técnicas rápidas, mas baseadas em teste, evidência e confiabilidade.',
    'Uma placa bem pensada reduz improvisos e facilita manutenção, depuração e montagem dentro do veículo.',
    'Telemetria só é útil quando os dados são confiáveis, interpretáveis e conectados a decisões práticas da equipe.',
    'A experiência de competição ensina engenharia sob pressão: prazo, logística, falhas reais, retrabalho e colaboração entre áreas.',
  ],
  externalLinks: [],
};
