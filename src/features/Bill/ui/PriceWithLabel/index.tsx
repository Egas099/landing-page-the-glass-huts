import { FC, PropsWithChildren } from "react";
import "./styles.scss";

interface Props {
    price: string;
    isDiscount?: boolean;
    isTotal?: boolean;
}

export const PriceWithLabel: FC<PropsWithChildren<Props>> = ({
    price,
    children,
    isDiscount = false,
    isTotal = false,
}) => {
    return (
        <div
            className="price-with-label"
            data-isDiscount={isDiscount}
            data-isTotal={isTotal}
        >
            <span>{children}</span>
            <span>{price}</span>
        </div>
    );
};
