import "./styles.scss";
import NavBar from "./NavBar/NavBar";
import Button from "../Button/Button";
import { Logo } from "../../assets/images/svg/Logo";

const Header = () => {
    return (
        <header className="header">
            <div>
                <Logo />
            </div>
            <NavBar />
            <div className="header__button">
                <Button text="Book now" />
            </div>
        </header>
    );
};

export default Header;
