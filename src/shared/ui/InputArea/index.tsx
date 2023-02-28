import { FC } from "react";
import "./styles.scss";

type Props = {
    placeholder?: string | null;
    required?: boolean;
    name?: string;
};

export const InputArea: FC<Props> = ({ placeholder, required, name }) => (
    <div className="input-area">
        <textarea
            className="input-area__input"
            placeholder=" "
            required={required}
            name={name}
        />
        <span className="input-area__input-hint">{placeholder}</span>
    </div>
);
