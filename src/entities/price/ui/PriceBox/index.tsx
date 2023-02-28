import { price } from "entities/price/model";
import { Trans } from "react-i18next";
import "./styles.scss";

export const PriceBox = () => {
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
