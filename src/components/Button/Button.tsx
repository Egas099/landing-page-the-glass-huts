import React, { FC } from "react";
import "./styles.scss";

type Props = {
    text: string;
};

const Button: FC<Props> = ({ text }) => {
    return (
        <div className="button" role="button">
            {text}
        </div>
    );
};

export default Button;
