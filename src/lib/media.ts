import projectMedia from '../data/media/projects.json';

export type MediaImage = {
  src?: string;
  driveFileId?: string;
  disabled?: boolean;
  alt: string;
  caption?: string;
  fallback?: string;
};

export type ResolvedMediaImage = {
  src: string;
  alt: string;
  caption?: string;
  fallback: string;
};

const DEFAULT_IMAGE_FALLBACK = '/images/projects/placeholder.svg';

export function googleDriveImageUrl(fileId: string, width = 1600): string {
  return `https://drive.google.com/thumbnail?id=${encodeURIComponent(fileId)}&sz=w${width}`;
}

export function resolveMediaImage(image: MediaImage, width = 1600): ResolvedMediaImage {
  const fallback = image.fallback || projectMedia.fallback || DEFAULT_IMAGE_FALLBACK;
  const src = image.disabled
    ? fallback
    : image.src || (image.driveFileId ? googleDriveImageUrl(image.driveFileId, width) : fallback);

  return {
    src,
    alt: image.alt,
    caption: image.caption,
    fallback,
  };
}

export function projectImage(key: keyof typeof projectMedia.images): ResolvedMediaImage {
  return resolveMediaImage(projectMedia.images[key]);
}

export function projectGallery(key: keyof typeof projectMedia.galleries): ResolvedMediaImage[] {
  return projectMedia.galleries[key].map((image) => resolveMediaImage(image));
}

export function youtubeEmbedUrl(video: { youtubeId?: string; youtubeUrl?: string }): string {
  if (video.youtubeId) {
    return `https://www.youtube.com/embed/${encodeURIComponent(video.youtubeId)}`;
  }

  if (!video.youtubeUrl) return '';

  try {
    const url = new URL(video.youtubeUrl);
    if (url.hostname.includes('youtu.be')) {
      const id = url.pathname.replace('/', '');
      return id ? `https://www.youtube.com/embed/${encodeURIComponent(id)}` : '';
    }

    if (url.hostname.includes('youtube.com')) {
      if (url.pathname.startsWith('/embed/')) return video.youtubeUrl;

      const id = url.searchParams.get('v');
      return id ? `https://www.youtube.com/embed/${encodeURIComponent(id)}` : '';
    }
  } catch {
    return '';
  }

  return '';
}
