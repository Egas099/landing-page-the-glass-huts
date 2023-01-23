import React, { FC } from "react";
import "./styles.scss";

type Props = {
    text: string;
};

const ButtonPrimary: FC<Props> = ({ text }) => {
    return (
        <div className="button" role="button">
            {text}
        </div>
    );
};

export default ButtonPrimary;
