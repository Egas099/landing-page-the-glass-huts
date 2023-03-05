import { FC } from "react";
import { iconService } from "shared/api";
import "./styles.scss";

interface Props {
    onClick: () => void;
    isChecked: boolean;
    withBorder?: boolean;
}

const RadioIcon: FC<Props> = ({ isChecked, withBorder = true, onClick }) => {
    return (
        <div
            onClick={onClick}
            data-isChecked={isChecked}
            data-withBorder={withBorder}
            className="radio-icon"
        >
            <img
                className="radio-icon__img"
                src={isChecked ? iconService.checkMark : iconService.plus}
                alt="Radio button"
            />
        </div>
    );
};

export default RadioIcon;
