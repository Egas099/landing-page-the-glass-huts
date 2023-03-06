import { useCallback, useState } from "react";
import { Button } from "shared/ui";
import NavBar from "../NavBar";
import "./styles.scss";

const BurgerMenu = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsMenuOpened((prev) => !prev);
    }, []);

    return (
        <div
            className={`burger ${isMenuOpened ? "burger_opened" : ""}`}
            onClick={toggleMenu}
        >
            <div className="burger__icon">
                <hr className="burger__icon-line" />
                <hr className="burger__icon-line" />
                <hr className="burger__icon-line" />
            </div>
            {isMenuOpened && (
                <div className="burger__menu">
                    <NavBar direction="column" />
                    <Button text="Book now" />
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;
