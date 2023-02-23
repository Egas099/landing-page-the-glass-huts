import { FC } from "react";
import "./styles.scss";

type ButtonType = "primary" | "transparent";

type Props = {
    text: string;
    onClick?: () => void;
    type?: ButtonType;
    formId?: string;
};

export const Button: FC<Props> = ({ text, onClick, type = "primary", formId }) => {
    return (
        <button
            form={formId}
            className={`button button-${type}`}
            onClick={onClick}
            type={formId ? "submit" : "button"}
        >
            {text}
        </button>
    );
};
