import { priceModel } from "entities/price";
import { FC } from "react";
import { Trans } from "react-i18next";
import "./styles.scss";
interface Props {
    store?: priceModel.PriceStore;
}

export const PriceLabel: FC<Props> = ({ store = priceModel.priceStore }) => {
    const { price, currency } = store;
    return (
        <span className="price-label">
            <Trans>
                {{ price }} {{ currency }}
                <span className="price-label__period"> / night</span>
            </Trans>
        </span>
    );
};
