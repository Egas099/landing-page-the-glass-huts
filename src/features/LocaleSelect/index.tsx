import { useTranslation } from "react-i18next";
import "./styles.scss";

const languages = ["en", "ru"];

export const LocaleSelect = () => {
    const { i18n } = useTranslation();

    function handleLanguageSelect(e: { target: { value: string } }) {
        i18n.changeLanguage(e.target.value).then((t) => {
            console.log(`Language changed to ${e.target.value}`);
        });
    }

    return (
        <select className="locale-select" onChange={handleLanguageSelect}>
            {languages.map((lng) => (
                <option key={lng} value={lng}>
                    {lng}
                </option>
            ))}
        </select>
    );
};
