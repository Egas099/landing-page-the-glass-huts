import { Trans, useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import "./styles.scss";
import { priceModel } from "entities/price";
import { BookingFormModel } from "features/BookingForm";
import { PriceWithLabel } from "../PriceWithLabel";
import { BillModel } from "features/Bill";
import { DiscountModel } from "entities/discount";

const List = () => {
    const { t } = useTranslation();
    const {
        nightCount,
        guestCount,
        totalPrice: bookingPrice,
    } = BookingFormModel.bookingStore;
    const { currency, price: pricePerNight } = priceModel.priceStore;
    const { discount, name: discountName } = DiscountModel.discountStore;
    const { additionalServicesBill, totalBookingPrice } = BillModel.billStore;

    return (
        <div className="bill">
            <PriceWithLabel price={`${bookingPrice} ${currency}`}>
                <Trans>
                    {{ pricePerNight }} {{ currency }} x {{ nightCount }} night
                    x {{ guestCount }} guests
                </Trans>
            </PriceWithLabel>
            {additionalServicesBill.map((item) => (
                <PriceWithLabel price={`${item.price} ${currency}`}>
                    {t(item.name)}
                </PriceWithLabel>
            ))}
            {discount ? (
                <PriceWithLabel price={`${discount} %`} isDiscount>
                    {t(discountName)}
                </PriceWithLabel>
            ) : null}
            <hr className="bill__divider" />
            <PriceWithLabel price={`${totalBookingPrice} ${currency}`} isTotal>
                {t("Total")}
            </PriceWithLabel>
        </div>
    );
};

export const Bill = observer(List);
