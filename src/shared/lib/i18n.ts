import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import HttpBackend, { HttpBackendOptions } from "i18next-http-backend";
import { customMissingKeyHandler } from "./customMissingKeyHandler";

i18n.use(LanguageDetector)
    .use(HttpBackend)
    .use(initReactI18next)
    .init<HttpBackendOptions>({
        backend: {
            loadPath: "/locales/{{lng}}.json",
        },
        // debug: true,
        load: "languageOnly",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        parseMissingKeyHandler: customMissingKeyHandler(i18n),
    });

export default i18n;
