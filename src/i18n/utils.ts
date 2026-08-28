import { ui, defaultLang, languages, type SupportedLanguage, type UIKey } from './ui';

export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) {
    return lang as SupportedLanguage;
  }
  return defaultLang;
}

export function useTranslations(lang: SupportedLanguage) {
  return function t(key: UIKey): string {
    const langDict = ui[lang];
    if (langDict && key in langDict) {
      return (langDict as Record<string, string>)[key];
    }
    const defaultDict = ui[defaultLang];
    if (defaultDict && key in defaultDict) {
      return (defaultDict as Record<string, string>)[key];
    }
    return key;
  };
}

export function useTranslatedPath(lang: SupportedLanguage) {
  return function translatePath(path: string, targetLang: string = lang): string {
    // Remove any existing language prefix from path
    const cleanPath = path.replace(/^\/(en|es|pt|de|fr|ja)(\/|$)/, '/');
    if (targetLang === defaultLang) {
      return cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
    }
    const normalizedPath = cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
    return `/${targetLang}${normalizedPath === '/' ? '' : normalizedPath}`;
  };
}
