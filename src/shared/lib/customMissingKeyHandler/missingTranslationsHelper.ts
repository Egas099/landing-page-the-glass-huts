import { downloadAsJSON } from "./downloadAsJSON";

interface MissingTranslation {
    [key: string]: Set<string>;
}

interface NormalizedTranslation {
    [key: string]: string;
}

const normalizeTranslation = (
    translation: NormalizedTranslation,
    key: string
) => {
    translation[key] = key;
    return translation;
};

export function MissingTranslations() {
    const misTranslation: MissingTranslation = {};

    const addMissingKey = (language: string, key: string) => {
        if (misTranslation[language]) {
            misTranslation[language].add(key);
        } else {
            misTranslation[language] = new Set([key]);
        }
    };
    const downloadAll = () => {
        Object.keys(misTranslation).forEach((lng) => downloadLanguage(lng));
    };
    const downloadLanguage = (language: string) => {
        const misTranslationByLanguage = Array.from(
            misTranslation[language]
        ).reduce(normalizeTranslation, {});

        downloadAsJSON(language, JSON.stringify(misTranslationByLanguage));
    };

    return { addMissingKey, downloadAll, downloadLanguage };
}
