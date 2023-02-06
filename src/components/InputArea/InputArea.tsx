import { FC } from "react";
import "./styles.scss";

type Props = {
    placeholder?: string;
    required?: boolean;
    name?: string;
};

const InputArea: FC<Props> = ({
    placeholder,
    required,
    name,
}) => {
    return (
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
};

export default InputArea;
