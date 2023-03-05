import { FC, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { BookingFormStore, bookingStore } from "features/BookingForm/model";
import "./styles.scss";
import { formateInputDateToView } from "features/BookingForm/lib";

interface Props {
    store?: BookingFormStore;
}

const Form: FC<Props> = ({ store = bookingStore }) => {
    const { t } = useTranslation();

    const handleCheckInChanging = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            store.changeCheckIn(e.target.value);
        },
        [store]
    );
    const handleCheckOutChanging = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            store.changeCheckOut(e.target.value);
        },
        [store]
    );

    return (
        <form className="booking-form">
            <div className="booking-form__element">
                <span className="booking-form__element-head">
                    {t("Check in")}
                </span>
                <span className="booking-form__element-text">
                    <label
                        htmlFor="checkIn"
                        className="booking-form__date-label"
                    >
                        {formateInputDateToView(store.checkIn)}
                        <input
                            min={store.minCheckInDate}
                            max={store.maxCheckInDate}
                            type="date"
                            defaultValue={store.checkIn}
                            onChange={handleCheckInChanging}
                            id="checkIn"
                        />
                    </label>
                </span>
            </div>
            <div className="booking-form__divider" />
            <div className="booking-form__element">
                <span className="booking-form__element-head">
                    {t("Check out")}
                </span>
                <span className="booking-form__element-text">
                    <label
                        htmlFor="checkOut"
                        className="booking-form__date-label"
                    >
                        {formateInputDateToView(store.checkOut)}
                        <input
                            min={store.minCheckOutDate}
                            max={store.maxCheckOutDate}
                            type="date"
                            defaultValue={store.checkOut}
                            onChange={handleCheckOutChanging}
                            id="checkOut"
                        />
                    </label>
                </span>
            </div>
            <div className="booking-form__divider" />
            <div className="booking-form__element">
                <div className="booking-form__element">
                    <span className="booking-form__element-head">
                        {t("Guests")}
                    </span>
                    <div className="booking-form__guest">
                        <span
                            data-isDisabled={store.isMinGuest}
                            className="booking-form__guest-input"
                            onClick={() => store.decreaseGuestCount()}
                        >
                            -
                        </span>
                        <span className="booking-form__guest-counter">
                            {store.guestCount}
                        </span>
                        <span
                            data-isDisabled={store.isMaxGuest}
                            className="booking-form__guest-input"
                            onClick={() => store.increaseGuestCount()}
                        >
                            +
                        </span>
                    </div>
                </div>
            </div>
        </form>
    );
};

export const BookingForm = observer(Form);
