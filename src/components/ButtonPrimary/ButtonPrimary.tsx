import React, { FC } from "react";
import "./styles.scss";

type Props = {
    text: string; 
    onClick?: () => void;
};

const ButtonPrimary: FC<Props> = ({ text,onClick }) => {
    return (
        <div className="button" role="button" onClick={onClick}>
            {text}
        </div>
    );
};

export default ButtonPrimary;
