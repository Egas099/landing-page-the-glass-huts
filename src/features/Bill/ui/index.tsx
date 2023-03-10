import { FC } from "react";
import { additionalServiceModel } from "entities/additionalService";
import { BookingFormModel } from "features/BookingForm";
import { priceModel } from "entities/price";
import { Trans, useTranslation } from "react-i18next";
import "./styles.scss";
import { observer } from "mobx-react-lite";
interface Props {
    priceStore?: priceModel.PriceStore;
    bookingForm?: BookingFormModel.BookingFormStore;
    additionalServices?: additionalServiceModel.AdditionalServicesStore;
}
type BillList = additionalServiceModel.ServiceWithPrice[];

const discountsList: BillList = [
    {
        name: "First booking discount",
        price: -200,
    },
];

const List: FC<Props> = ({
    priceStore = priceModel.priceStore,
    bookingForm = BookingFormModel.bookingStore,
    additionalServices = additionalServiceModel.additionalServicesStore,
}) => {
    const { t } = useTranslation();
    const { nightCount, guestCount } = bookingForm;
    const { currency, price: pricePerNight } = priceStore;
    const bookingPrice = priceStore.price * nightCount * guestCount;
    const totalPrice = bookingPrice + additionalServices.totalPrice;

    return (
        <div className="bill">
            <div className="bill__item">
                <div className="bill__item-label">
                    <Trans>
                        {{ pricePerNight }} {{ currency }} x {{ nightCount }}{" "}
                        night x {{ guestCount }} guests
                    </Trans>
                </div>
                <div className="bill__item-value">
                    {`${bookingPrice} ${currency}`}
                </div>
            </div>
            {additionalServices.bill.map((item) => (
                <div className="bill__item">
                    <div className="bill__item-label">{t(item.name)}</div>
                    <div className="bill__item-value">
                        {`${item.price} ${currency}`}
                    </div>
                </div>
            ))}
            {discountsList.map((item) => (
                <div className="bill__item" data-isDiscount>
                    <div className="bill__item-label">{t(item.name)}</div>
                    <div className="bill__item-value">
                        {`${item.price} ${currency}`}
                    </div>
                </div>
            ))}
            <hr className="bill__divider" />
            <div className="bill__item">
                <div className="bill__item-total-label">{t("Total")}</div>
                <div className="bill__item-total-value">
                    {`${totalPrice} ${currency}`}
                </div>
            </div>
        </div>
    );
};

export const Bill = observer(List);
