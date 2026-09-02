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
const DRIVE_FILE_ID_PATTERN = /^[A-Za-z0-9_-]{10,}$/;
const YOUTUBE_ID_PATTERN = /^[A-Za-z0-9_-]{6,32}$/;
const GOOGLE_DRIVE_HOST = 'drive.google.com';
const GOOGLE_USERCONTENT_SUFFIX = '.googleusercontent.com';

function isSafeInternalPath(value: string): boolean {
  return value.startsWith('/') && !value.startsWith('//') && !value.includes('\\') && !/[\r\n]/.test(value);
}

function imageFallback(fallback?: string): string {
  return fallback && isSafeInternalPath(fallback) ? fallback : DEFAULT_IMAGE_FALLBACK;
}

function isGoogleImageHost(hostname: string): boolean {
  return hostname === GOOGLE_DRIVE_HOST || hostname.endsWith(GOOGLE_USERCONTENT_SUFFIX);
}

export function sanitizeGoogleDriveFileId(fileId: string): string {
  const trimmed = fileId.trim();
  return DRIVE_FILE_ID_PATTERN.test(trimmed) ? trimmed : '';
}

export function sanitizeImageUrl(src: string | undefined, fallback = DEFAULT_IMAGE_FALLBACK): string {
  const safeFallback = imageFallback(fallback);
  if (!src) return safeFallback;

  if (isSafeInternalPath(src)) return src;

  try {
    const url = new URL(src);
    if (url.protocol === 'https:' && isGoogleImageHost(url.hostname.toLowerCase())) {
      return url.toString();
    }
  } catch {
    return safeFallback;
  }

  return safeFallback;
}

export function sanitizeExternalUrl(href: string | undefined, fallback = ''): string {
  if (!href) return fallback;

  if (isSafeInternalPath(href)) return href;

  try {
    const url = new URL(href);

    if (url.protocol === 'https:') return url.toString();

    if (url.protocol === 'mailto:' && !/[\r\n]/.test(href)) {
      return href;
    }
  } catch {
    return fallback;
  }

  return fallback;
}

export function googleDriveImageUrl(fileId: string, width = 1600): string {
  const safeFileId = sanitizeGoogleDriveFileId(fileId);
  if (!safeFileId) return DEFAULT_IMAGE_FALLBACK;

  const requestedWidth = Number.isFinite(width) ? width : 1600;
  const safeWidth = Math.min(Math.max(Math.round(requestedWidth), 200), 2400);
  return `https://drive.google.com/thumbnail?id=${encodeURIComponent(safeFileId)}&sz=w${safeWidth}`;
}

export function googleDriveFileUrl(fileId: string): string {
  const safeFileId = sanitizeGoogleDriveFileId(fileId);
  return safeFileId ? `https://drive.google.com/file/d/${encodeURIComponent(safeFileId)}/view` : '';
}

export function googleDrivePreviewUrl(fileId: string): string {
  const safeFileId = sanitizeGoogleDriveFileId(fileId);
  return safeFileId ? `https://drive.google.com/file/d/${encodeURIComponent(safeFileId)}/preview` : '';
}

export function resolveMediaImage(image: MediaImage, width = 1600): ResolvedMediaImage {
  const fallback = imageFallback(image.fallback || projectMedia.fallback);
  const explicitSrc = image.src ? sanitizeImageUrl(image.src, fallback) : '';
  const driveSrc = image.driveFileId ? googleDriveImageUrl(image.driveFileId, width) : '';
  const src = image.disabled
    ? fallback
    : explicitSrc || (driveSrc === DEFAULT_IMAGE_FALLBACK ? fallback : driveSrc) || fallback;

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

function normalizeYoutubeId(id: string | undefined | null): string {
  const trimmed = id?.trim() ?? '';
  return YOUTUBE_ID_PATTERN.test(trimmed) ? trimmed : '';
}

function youtubeIdFromUrl(value: string): string {
  try {
    const url = new URL(value);
    const hostname = url.hostname.toLowerCase();

    if (hostname === 'youtu.be') {
      return normalizeYoutubeId(url.pathname.split('/').filter(Boolean)[0]);
    }

    if (
      hostname === 'youtube.com' ||
      hostname === 'www.youtube.com' ||
      hostname === 'm.youtube.com' ||
      hostname === 'www.youtube-nocookie.com'
    ) {
      if (url.pathname.startsWith('/embed/')) {
        return normalizeYoutubeId(url.pathname.split('/').filter(Boolean)[1]);
      }

      if (url.pathname.startsWith('/shorts/')) {
        return normalizeYoutubeId(url.pathname.split('/').filter(Boolean)[1]);
      }

      return normalizeYoutubeId(url.searchParams.get('v'));
    }
  } catch {
    return '';
  }

  return '';
}

export function youtubeEmbedUrl(video: { youtubeId?: string; youtubeUrl?: string }): string {
  const directId = normalizeYoutubeId(video.youtubeId);
  const urlId = video.youtubeUrl ? youtubeIdFromUrl(video.youtubeUrl) : '';
  const id = directId || urlId;

  return id ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}` : '';
}
