import { FC } from "react";
// TODO merge additional services list and forms in store
import { AdditionalServicesFormModel } from "features/AdditionalServicesForm";
import { additionalServiceModel } from "entities/additionalService";
import { BookingFormModel } from "features/BookingForm";
import { priceModel } from "entities/price";
import { Trans, useTranslation } from "react-i18next";
import "./styles.scss";
import { observer } from "mobx-react-lite";

interface Props {
    priceStore?: priceModel.PriceStore;
    bookingForm?: BookingFormModel.BookingFormStore;
    additionalServicesForm?: AdditionalServicesFormModel.AdditionalServicesStore;
}
type BillList = ServiceWithPrice[];

interface ServiceWithPrice {
    name: string;
    price: number;
}
const discountsList: BillList = [
    {
        name: "First booking discount",
        price: -200,
    },
];

const List: FC<Props> = ({
    priceStore = priceModel.priceStore,
    bookingForm = BookingFormModel.bookingStore,
    additionalServicesForm = AdditionalServicesFormModel.additionalServicesStore,
}) => {
    const { t } = useTranslation();
    const { nightCount, guestCount } = bookingForm;
    const { currency, price: pricePerNight } = priceStore;
    const bookingPrice = priceStore.price * nightCount * guestCount;
    const { form } = additionalServicesForm;

    const additionalServicesList: BillList = Object.keys(form)
        .map(Number)
        .filter((serviceId) => form[serviceId].selected)
        .map((serviceId) => {
            const currentService =
                additionalServiceModel.getServiceById(serviceId);
            const price = currentService?.price;
            let selectedServiceName = additionalServiceModel.getOptionById(
                serviceId,
                form[serviceId].option
            )?.name;
            if (!selectedServiceName) {
                selectedServiceName = currentService?.name;
            }
            if (selectedServiceName && price) {
                return { name: selectedServiceName, price };
            }
            return undefined;
        })
        .filter((item): item is ServiceWithPrice => item !== undefined);

    console.log(additionalServicesList);

    const totalPrice =
        bookingPrice +
        additionalServicesList.reduce((sum, item) => sum + item.price, 0);

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
            {additionalServicesList.map((item) => (
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
