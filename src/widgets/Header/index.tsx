import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";
import { Logo } from "shared/svg";
import { LocaleSelect } from "features/LocaleSelect";
import NavBar from "./ui/NavBar";
import BurgerMenu from "./ui/BurgerMenu";
import "./styles.scss";

export const Header = () => {
    const { t } = useTranslation();

    return (
        <header className="header">
            <a className="header__logo" href="/">
                <Logo />
            </a>
            <div className="header__nav">
                <NavBar direction="row" />
            </div>
            <div className="header__row">
                <LocaleSelect />
                <div className="header__button">
                    <Button text={t("Book now")} />
                </div>
                <div className="header__burger">
                    <BurgerMenu />
                </div>
            </div>
        </header>
    );
};
