import { BookingFormStore } from "features/Booking/model/bookingFormStore";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

interface Props {
    store: BookingFormStore;
}

export const BookingForm: FC<Props> = observer(({ store }) => {
    const { t } = useTranslation();

    function handleCheckInChanging(e: React.ChangeEvent<HTMLInputElement>) {
        store.changeCheckIn(e.target.value);
    }
    function handleCheckOutChanging(e: React.ChangeEvent<HTMLInputElement>) {
        store.changeCheckOut(e.target.value);
    }

    console.log(store.nightCount);

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
                        {new Date(store.checkIn).toLocaleDateString()}
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
                        {new Date(store.checkOut).toLocaleDateString()}
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
                            className={`booking-form__guest-input ${
                                store.isMinGuest
                                    ? "booking-form__guest-input_disabled"
                                    : ""
                            }`}
                            onClick={() => store.decreaseGuestCount()}
                        >
                            -
                        </span>
                        <span className="booking-form__guest-counter">
                            {store.guestCount}
                        </span>
                        <span
                            className={`booking-form__guest-input ${
                                store.isMaxGuest
                                    ? "booking-form__guest-input_disabled"
                                    : ""
                            }`}
                            onClick={() => store.increaseGuestCount()}
                        >
                            +
                        </span>
                    </div>
                </div>
            </div>
        </form>
    );
});
