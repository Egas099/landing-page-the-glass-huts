import { price } from "entities/price/model";
import { FC, PropsWithChildren } from "react";
import { Trans } from "react-i18next";
import "./styles.scss";

export const PriceLabel: FC<PropsWithChildren> = () => (
    <span className="price-label">
        <Trans>
            {{price}}
            <span className="price-label__period"> / night</span>
        </Trans>
    </span>
);
