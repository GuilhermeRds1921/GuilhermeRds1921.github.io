import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://GuilhermeRds1921.github.io',
  integrations: [
    starlight({
      title: 'Guilherme Rodrigues',
      social: {
        github: 'https://github.com/GuilhermeRds1921',
        linkedin: 'https://www.linkedin.com/in/guilherme-rodrigues-b39a751a7/',
      },
      sidebar: [
        {
          label: 'Biblioteca',
          link: '/biblioteca/',
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
        {
          label: 'Templates',
          items: [{ autogenerate: { directory: 'biblioteca/templates' } }],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});