import { PriceBox } from "entities/price/ui/PriceBox";
import { FC } from "react";
import { Button } from "shared/ui";
import "./styles.scss";

type Props = {
    text: string;
};

export const ButtonWithPrice: FC<Props> = ({ text }) => {
    return (
        <div className="button-with-price">
            <div className="button-with-price__button">
                <Button
                    text={text}
                    onClick={() => alert("Booking unavailable.")}
                />
            </div>
            <PriceBox />
        </div>
    );
};
