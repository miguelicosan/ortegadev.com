// i18n configuration for bilingual support (ES/EN)

export const languages = {
    es: 'Español',
    en: 'English',
};

export const defaultLang = 'es';

export type Language = keyof typeof languages;

// Helper function to determine language from URL
export function getLangFromUrl(url: URL): Language {
    const [, lang] = url.pathname.split('/');
    if (lang in languages) return lang as Language;
    return defaultLang;
}

// Helper to get translations
export async function getTranslations(lang: Language) {
    const translations = await import(`./locales/${lang}.json`);
    return translations.default;
}

// Helper to generate alternate language URL
export function getAlternateUrl(currentPath: string, targetLang: Language): string {
    const currentLang = currentPath.startsWith('/en') ? 'en' : 'es';

    if (currentLang === targetLang) return currentPath;

    if (targetLang === 'es') {
        // Remove /en prefix
        return currentPath.replace(/^\/en/, '') || '/';
    } else {
        // Add /en prefix
        return currentPath === '/' ? '/en' : `/en${currentPath}`;
    }
}

// Get route for a given page in a language
export function getRoute(page: string, lang: Language = defaultLang): string {
    if (lang === 'es') {
        return page === 'home' ? '/' : `/${page}`;
    }
    return page === 'home' ? '/en' : `/en/${page}`;
}
