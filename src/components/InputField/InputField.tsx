import { FC, HTMLInputTypeAttribute } from "react";
import "./styles.scss";

type Props = {
    inputType?: HTMLInputTypeAttribute;
    placeholder?: string;
    required?: boolean;
    name?: string;
};

const InputField: FC<Props> = ({
    inputType = "text",
    placeholder,
    required,
    name,
}) => {
    return (
        <div className="input-field">
            <input
                type={inputType}
                className="input-field__input"
                placeholder=" "
                required={required}
                name={name}
            />
            <span className="input-field__input-hint">{placeholder}</span>
        </div>
    );
};

export default InputField;
