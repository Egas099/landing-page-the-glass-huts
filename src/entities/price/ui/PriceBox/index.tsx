import { price } from "entities/price/model";
import { FC, PropsWithChildren } from "react";
import "./styles.scss";

export const PriceBox: FC<PropsWithChildren> = () => {
    return (
        <div className="price-box">
            <span className="price-box__label-from">from</span>
            <span className="price-box__value">{price}</span>
            <span className="price-box__label-unit">per night</span>
        </div>
    );
};
