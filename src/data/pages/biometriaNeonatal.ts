import { projectImage } from '../../lib/media';

export const biometriaNeonatalPageContent = {
  meta: {
    title: 'Biometria Neonatal / TCC | Guilherme Rodrigues',
    description:
      'Página detalhada do projeto de Biometria Neonatal, com foco no TCC de Guilherme Rodrigues sobre inferência de redes neurais em Raspberry Pi, ARM Linux, ONNX Runtime e OpenCV.',
  },
  hero: {
    category: 'Pesquisa · TCC · IA embarcada',
    title: 'Biometria Neonatal',
    description:
      'Participação no Grupo de Biometria Neonatal da UTFPR-PB, com foco no meu TCC sobre machine learning em plataformas embarcadas e inferência de modelos de redes neurais fora de um computador convencional.',
    tags: ['TCC', 'IA Embarcada', 'Raspberry Pi', 'ONNX Runtime', 'OpenCV', 'ARM Linux'],
    image: projectImage('biometriaCover'),
  },
  summary:
    'A Biometria Neonatal reúne pesquisa aplicada, visão computacional, inteligência artificial e identificação segura de recém-nascidos. Dentro desse contexto, meu trabalho se concentra em estudar como modelos de redes neurais podem ser executados em plataformas embarcadas, especialmente Raspberry Pi, buscando tornar parte do sistema mais autônoma, portátil e viável fora de um PC tradicional.',
  context: {
    title: 'Contexto da Biometria Neonatal',
    paragraphs: [
      'O Grupo de Pesquisas em Biometria Neonatal da UTFPR - Campus Pato Branco atua em identificação biométrica infantil, qualidade biométrica, envelhecimento de padrões digitais e inteligência artificial aplicada à identificação de recém-nascidos.',
      'Segundo uma notícia institucional da UTFPR, a pesquisa mantém colaboração com a InfantID, startup voltada à tecnologia biométrica para identificação segura de bebês. O objetivo geral é avançar em soluções seguras, precisas e aplicáveis a ambientes reais.',
      'Esse cenário cria um desafio técnico interessante: modelos de visão computacional precisam ser úteis fora do ambiente controlado de laboratório, lidando com limitações de hardware, desempenho, energia, manutenção e operação.',
    ],
  },
  participation: {
    title: 'Minha participação',
    paragraphs: [
      'Minha participação no grupo se conecta principalmente ao desenvolvimento e avaliação de uma etapa embarcada do sistema. O foco é entender se dispositivos compactos, como Raspberry Pi, conseguem executar modelos de machine learning com desempenho suficiente para apoiar tarefas de processamento e análise de imagens biométricas.',
      'No projeto, trabalho com Python, OpenCV, ONNX Runtime, Linux em ARM, organização de experimentos, medição de tempo de inferência e comparação entre execução em computador convencional e plataforma embarcada.',
      'A ideia não é apenas fazer o modelo rodar em uma placa pequena, mas avaliar o comportamento real da solução: tempo de resposta, estabilidade, limitações de memória, gargalos do pipeline de imagem e impacto das escolhas de modelo e runtime.',
    ],
  },
  development: {
    title: 'Em desenvolvimento',
    description:
      'Esta parte da página será detalhada conforme o TCC avançar e os resultados ficarem prontos para publicação.',
  },
  technologies: [
    'Python',
    'C++',
    'OpenCV',
    'ONNX Runtime',
    'Raspberry Pi',
    'ARM Linux',
    'Linux',
    'Visão Computacional',
    'Machine Learning',
    'Redes Neurais',
    'Inferência',
    'Benchmark',
    'Métricas de desempenho',
    'Sistemas embarcados',
  ],
  learnings: [
    'Executar IA em ambiente embarcado exige olhar para o pipeline completo, não apenas para o modelo isolado.',
    'Comparar PC e Raspberry Pi ajuda a separar gargalos de pré-processamento, runtime, memória e inferência.',
    'ONNX Runtime torna os testes mais portáveis, mas o desempenho final ainda depende muito do modelo, do hardware e da forma como os dados são preparados.',
    'Projetos aplicados em saúde e identificação exigem cuidado técnico, organização experimental e responsabilidade com dados sensíveis.',
  ],
  externalLinks: [
    {
      label: 'Instagram da Biometria Neonatal',
      href: 'https://www.instagram.com/utfprbiometria/',
    },
  ],
};
