import { FC } from "react";
import { iconService } from "shared/api";
import "./styles.scss";

interface Props {
    checked: boolean;
    withBorder?: boolean;
}

const RadioIcon: FC<Props> = ({ checked, withBorder = true }) => {
    return (
        <div
            className={`radio-icon ${checked ? "radio-icon--checked" : ""} ${
                withBorder ? "radio-icon--with-border" : ""
            }`}
        >
            <img
                src={checked ? iconService.checkMark : iconService.plus}
                height={"15px"}
                width={"15px"}
                alt="Radio button"
            />
        </div>
    );
};

export default RadioIcon;
