import { FC } from "react";
import { icons } from "../../../api/icons";
import Image from "../../Image/Image";
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
            <Image
                src={checked ? icons.checkMark : icons.plus}
                height={"15px"}
                width={"15px"}
            />
        </div>
    );
};

export default RadioIcon;
