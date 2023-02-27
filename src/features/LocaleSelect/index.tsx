import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { awaitableLanguages } from "shared/constants/i18n";
import "./styles.scss";

export const LocaleSelect = () => {
    const { i18n } = useTranslation();

    const handleLanguageSelect = useCallback(
        (e: { target: { value: string } }) => {
            i18n.changeLanguage(e.target.value);
        },
        [i18n]
    );

    return (
        <select
            className="locale-select"
            onChange={handleLanguageSelect}
            defaultValue={i18n.language}
        >
            {awaitableLanguages.map((lng) => (
                <option key={lng} value={lng}>
                    {lng}
                </option>
            ))}
        </select>
    );
};
