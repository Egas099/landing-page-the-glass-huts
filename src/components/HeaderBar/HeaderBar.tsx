import "./styles.scss";
import logo from "../../assets/icons/logo.png";
import NavBar from "./NavBar/NavBar";
import Button from "../Button/Button";

const HeaderBar = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" height={40} width={40} />
            <NavBar />
            <div className="header__button">
                <Button text="Book now" />
            </div>
        </header>
    );
};

export default HeaderBar;
