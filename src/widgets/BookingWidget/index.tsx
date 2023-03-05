import { PriceLabel } from "entities/price";
import { BookingForm } from "features/BookingForm";
import { useTranslation } from "react-i18next";
import { Button, InputField } from "shared/ui";
import "./styles.scss";

export const BookingWidget = () => {
    const { t } = useTranslation();

    return (
        <div className="booking-widget">
            <PriceLabel />
            <BookingForm />
            <div className="booking-widget__book-button">
                <Button text={t("Book")} />
            </div>
            <div className="booking-widget__list">
                <div className="booking-widget__list-item">
                    <div className="booking-widget__list-item-label">
                        3.200kr x 2 nights
                    </div>
                    <div className="booking-widget__list-item-value">
                        6.400kr
                    </div>
                </div>
                <div className="booking-widget__list-item">
                    <div className="booking-widget__list-item-label">
                        Classic Dinner for one
                    </div>
                    <div className="booking-widget__list-item-value">600kr</div>
                </div>
                <div className="booking-widget__list-item">
                    <div className="booking-widget__list-item-label">
                        Electric Car Charge
                    </div>
                    <div className="booking-widget__list-item-value">800kr</div>
                </div>
                <div className="booking-widget__list-item">
                    <div className="booking-widget__list-item-label booking-widget__list-item--discount">
                        10% discount
                    </div>
                    <div className="booking-widget__list-item-value booking-widget__list-item--discount">
                        -200kr
                    </div>
                </div>
                <hr className="booking-widget__list-divider" />
                <div className="booking-widget__list-item">
                    <div className="booking-widget__list-item-total-label">
                        {t("Total")}
                    </div>
                    <div className="booking-widget__list-item-total-value">
                        7.000kr
                    </div>
                </div>
            </div>
            <div className="booking-widget__coupon-input">
                <InputField placeholder={t("Coupon Code")} />
                <Button text={t("apply")} />
            </div>
        </div>
    );
};
