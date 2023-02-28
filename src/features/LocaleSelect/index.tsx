import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { availableLanguages } from "shared/constants/i18n";
import { byCode, omitCode } from "./lib";
import "./styles.scss";

export const LocaleSelect = () => {
    const { i18n } = useTranslation();
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const toggleDropDownVisibility = useCallback(
        () => setIsDropDownOpen((prev) => !prev),
        []
    );
    const handleLanguageSelect = useCallback(
        (code: string) => () => {
            i18n.changeLanguage(code);
            setIsDropDownOpen(false);
        },
        [i18n]
    );

    const currentLanguage = useMemo(
        () =>
            availableLanguages.find(byCode(i18n.language)) ||
            availableLanguages[0],
        [i18n.language]
    );

    const availableToChooseLanguages = useMemo(
        () => availableLanguages.filter(omitCode(currentLanguage.code)),
        [currentLanguage.code]
    );

    return (
        <div className="locale-select">
            <img
                className="locale-select__flag"
                src={currentLanguage.icon}
                alt={currentLanguage.code}
                onClick={toggleDropDownVisibility}
            />
            {isDropDownOpen && (
                <div className="locale-select__drop-down">
                    {availableToChooseLanguages.map(({ code, icon }) => (
                        <img
                            className="locale-select__flag"
                            key={code}
                            src={icon}
                            alt={code}
                            onClick={handleLanguageSelect(code)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
