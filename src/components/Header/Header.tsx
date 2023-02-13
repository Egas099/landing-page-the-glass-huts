import "./styles.scss";
import NavBar from "./NavBar/NavBar";
import Button from "../Button/Button";
import { Logo } from "../../assets/images/svg/Logo";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const Header = () => {
    return (
        <header className="header">
            <a className="header__logo" href="/">
                <Logo />
            </a>
            <div className="header__nav">
                <NavBar direction="row" />
            </div>
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
