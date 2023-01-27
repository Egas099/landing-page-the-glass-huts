import { FC } from "react";
import Button from "../Button/Button";
import "./styles.scss";

type Props = {
    text: string;
    price: string;
    onClick?: () => void;
};

const ButtonWithPrice: FC<Props> = ({ price, text, onClick }) => {
    return (
        <div className="button-with-price">
            <div className="button-with-price__button">
                <Button text={text} onClick={onClick} />
            </div>
            <div className="button-with-price__price-box">
                <span className="button-with-price__price-label-from">
                    from
                </span>
                <span className="button-with-price__price">{price}</span>
                <span className="button-with-price__price-label-unit">
                    per night
                </span>
            </div>
        </div>
    );
};

export default ButtonWithPrice;
