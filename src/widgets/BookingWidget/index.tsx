import { PriceLabel } from "entities/price";
import { useTranslation } from "react-i18next";
import { Button, InputField } from "shared/ui";
import "./styles.scss";

export const BookingWidget = () => {
    const { t } = useTranslation();

    return (
        <div className="booking-widget">
            <PriceLabel />
            <div className="booking-widget__form">
                <div className="booking-widget__form-element">
                    <span className="booking-widget__form-element-head">
                        {t("Check in")}
                    </span>
                    <span className="booking-widget__form-element-text">
                        4/29/2021
                    </span>
                </div>
                <div className="booking-widget__form-divider"></div>
                <div className="booking-widget__form-element">
                    <span className="booking-widget__form-element-head">
                        {t("Check out")}
                    </span>
                    <span className="booking-widget__form-element-text">
                        4/30/2021
                    </span>
                </div>
                <div className="booking-widget__form-divider"></div>
                <div className="booking-widget__form-element">
                    <span className="booking-widget__form-element-head">
                        {t("Guests")}
                    </span>
                    <span className="booking-widget__form-element-text">
                        - 1 +
                    </span>
                </div>
            </div>
            <div className="booking-widget__book-button">
                <Button text="Book" />
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
