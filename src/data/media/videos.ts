export type PortfolioVideo = {
  id: string;
  title: string;
  youtubeId?: string;
  youtubeUrl?: string;
  caption: string;
  project?: string;
};

export const robotnikVideos: PortfolioVideo[] = [
  {
    id: 'robotnik-placeholder',
    title: 'Vídeos do Robotnik',
    caption: 'Seção pronta para receber demonstrações, apresentações e registros do projeto via YouTube.',
    project: 'robotnik',
  },
];

