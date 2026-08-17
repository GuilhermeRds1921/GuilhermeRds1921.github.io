export type Lang = 'pt' | 'en';

export function getLangFromUrl(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'pt';
}

export function getPathWithoutLang(pathname: string): string {
  if (pathname === '/en' || pathname === '/en/') return '/';

  if (pathname.startsWith('/en/')) {
    return pathname.replace(/^\/en/, '') || '/';
  }

  return pathname || '/';
}

export function getLocalizedPath(pathname: string, targetLang: Lang): string {
  const cleanPath = getPathWithoutLang(pathname);

  if (targetLang === 'pt') {
    return cleanPath === '/' ? '/' : cleanPath.replace(/\/$/, '');
  }

  if (cleanPath === '/') {
    return '/en';
  }

  return `/en${cleanPath}`.replace(/\/$/, '');
}