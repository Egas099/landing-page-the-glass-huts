import { price } from "entities/price/model";
import { FC, PropsWithChildren } from "react";
import "./styles.scss";

export const PriceLabel: FC<PropsWithChildren> = () => (
    <span className="price-label">
        <span className="price-label__value">{price}</span>
        <span className="price-label__period"> / night</span>
    </span>
);
