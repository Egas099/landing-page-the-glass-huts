import { Logo } from "shared/svg/Logo";
import NavBar from "./NavBar/NavBar";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { Button } from "shared/ui";
import "./styles.scss";
import { LocaleSelect } from "features/LocaleSelect";

const Header = () => {
    return (
        <header className="header">
            <a className="header__logo" href="/">
                <Logo />
            </a>
            <div className="header__nav">
                <NavBar direction="row" />
            </div>
            <LocaleSelect />
            <div className="header__button">
                <Button text="Book now" />
            </div>
            <div className="header__burger">
                <BurgerMenu />
            </div>
        </header>
    );
};

export default Header;
