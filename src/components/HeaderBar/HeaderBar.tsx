import "./styles.scss";
import NavBar from "./NavBar/NavBar";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { Logo } from "../../assets/images/svg/Logo";

const HeaderBar = () => {
    return (
        <header className="header">
            <div>
                <Logo />
            </div>
            <NavBar />
            <div className="header__button">
                <ButtonPrimary text="Book now" />
            </div>
        </header>
    );
};

export default HeaderBar;
