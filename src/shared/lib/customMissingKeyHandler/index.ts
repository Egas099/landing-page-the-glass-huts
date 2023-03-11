import { i18n } from "i18next";
import { MissingTranslations } from "./missingTranslationsHelper";

const missingTranslations = MissingTranslations();
const { downloadAll, downloadLanguage } = missingTranslations;
console.log({ downloadAll, downloadLanguage });

export const customMissingKeyHandler =
    (i18n: i18n) => (key: string, defaultValue?: string | undefined) => {
        try {
            missingTranslations.addMissingKey(
                i18n.language,
                defaultValue || key
            );
        } catch (error) {
            console.error("MissingTranslationManager error: ", error);
        }
        return key;
    };
