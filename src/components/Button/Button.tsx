import React, { FC } from "react";
import "./styles.scss";

type ButtonType = "primary" | "transparent";

type Props = {
    text: string;
    onClick?: () => void;
    type?: ButtonType;
};

const Button: FC<Props> = ({ text, onClick, type = "primary" }) => {
    return (
        <div className={`button ${type}`} role="button" onClick={onClick}>
            {text}
        </div>
    );
};

export default Button;
