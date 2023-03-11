import { Trans, useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import "./styles.scss";
import { priceModel } from "entities/price";
import { additionalServiceModel } from "entities/additionalService";
import { BookingFormModel } from "features/BookingForm";
import { discountsList } from "features/Bill/constants";
import { PriceWithLabel } from "../PriceWithLabel";
import { BillModel } from "features/Bill";

const List = () => {
    const { t } = useTranslation();
    const { totalPrice: additionalServicesPrice } =
        additionalServiceModel.additionalServicesStore;
    const {
        nightCount,
        guestCount,
        totalPrice: bookingPrice,
    } = BookingFormModel.bookingStore;
    const { currency, price: pricePerNight } = priceModel.priceStore;
    const { additionalServicesBill } = BillModel.billStore;

    const totalBookingPrice = bookingPrice + additionalServicesPrice;

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
            {discountsList.map((item) => (
                <PriceWithLabel price={`${item.price} ${currency}`} isDiscount>
                    {t(item.name)}
                </PriceWithLabel>
            ))}
            <hr className="bill__divider" />
            <PriceWithLabel price={`${totalBookingPrice} ${currency}`} isTotal>
                {t("Total")}
            </PriceWithLabel>
        </div>
    );
};

export const Bill = observer(List);
