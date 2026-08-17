import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Para publicar em https://GuilhermeRds1921.github.io, mantenha base: '/'.
// Para publicar como projeto, ex.: https://GuilhermeRds1921.github.io/portfolio,
// troque para base: '/portfolio'.
export default defineConfig({
  site: 'https://GuilhermeRds1921.github.io',
  base: '/',
  integrations: [
    starlight({
      title: 'Guilherme Rodrigues',
      description:
        'Portfólio e biblioteca técnica de Engenharia de Computação, sistemas embarcados, IoT, IA aplicada e cybersecurity.',
      customCss: ['./src/styles/custom.css'],
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/GuilhermeRds1921',
        },
        {
          icon: 'linkedin',
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/guilherme-rodrigues-b39a751a7/',
        },
      ],
      sidebar: [
        {
          label: 'Biblioteca',
          items: [
            { label: 'Início da biblioteca', link: '/biblioteca/' },
            { label: 'Modelo de página', link: '/biblioteca/templates/modelo-projeto-completo/' },
          ],
        },
        {
          label: 'Projetos',
          items: [{ autogenerate: { directory: 'biblioteca/projetos' } }],
        },
        {
          label: 'IA Embarcada',
          items: [{ autogenerate: { directory: 'biblioteca/ia-embarcada' } }],
        },
        {
          label: 'Segurança da Informação',
          items: [{ autogenerate: { directory: 'biblioteca/seguranca-informacao' } }],
        },
      ],
    }),
  ],
});
