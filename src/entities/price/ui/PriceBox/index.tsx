import { priceModel } from "entities/price";
import { FC } from "react";
import { Trans } from "react-i18next";
import "./styles.scss";

interface Props {
    store?: priceModel.PriceStore;
}

export const PriceBox: FC<Props> = ({ store = priceModel.priceStore }) => {
    const { price, currency } = store;

    return (
        <div className="price-box">
            <Trans>
                <span className="price-box__label-from">from</span>
                {{ price }}
                <span className="price-box__label-unit">per night</span>
            </Trans>
        </div>
    );
};
