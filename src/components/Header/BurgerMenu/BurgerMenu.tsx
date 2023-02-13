import React, { FC, useState } from "react";
import Button from "../../Button/Button";
import NavBar from "../NavBar/NavBar";
import "./styles.scss";

const BurgerMenu = () => {
    const [isMenuOpened, setIsMenuOpened] = useState(true);

    function toggleMenu() {
        setIsMenuOpened((prev) => !prev);
    }
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
