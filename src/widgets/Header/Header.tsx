import { Logo } from "shared/svg/Logo";
import NavBar from "./NavBar/NavBar";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { Button } from "shared/ui";
import "./styles.scss";
import { LocaleSelect } from "features/LocaleSelect";
import { useTranslation } from "react-i18next";

const Header = () => {
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

export default Header;
