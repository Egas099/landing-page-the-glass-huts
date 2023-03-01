import { useTranslation } from "react-i18next";
import "./styles.scss";

export const PaymentWidget = () => {
    const { t } = useTranslation();

    return (
        <div className="payment-widget">
            <span className="payment-widget__header">
                <span className="payment-widget__header-name">
                    The Glass Hut
                </span>{" "}
                <span className="payment-widget__header-location">
                    {t("Vesterborg, Denmark")}
                </span>
            </span>
            <div className="payment-widget__form">
                <div className="payment-widget__form-element">
                    <span className="payment-widget__form-element-head">
                        {t("Check in")}
                    </span>
                    <span className="payment-widget__form-element-text">
                        4/29/2021
                    </span>
                </div>
                <div className="payment-widget__form-divider"></div>
                <div className="payment-widget__form-element">
                    <span className="payment-widget__form-element-head">
                        {t("Check out")}
                    </span>
                    <span className="payment-widget__form-element-text">
                        4/30/2021
                    </span>
                </div>
                <div className="payment-widget__form-divider"></div>
                <div className="payment-widget__form-element">
                    <span className="payment-widget__form-element-head">
                        {t("Guests")}
                    </span>
                    <span className="payment-widget__form-element-text">
                        - 1 +
                    </span>
                </div>
            </div>
            <div className="payment-widget__list">
                <div className="payment-widget__list-item">
                    <div className="payment-widget__list-item-label">
                        3.200kr x 2 nights
                    </div>
                    <div className="payment-widget__list-item-value">
                        6.400kr
                    </div>
                </div>
                <div className="payment-widget__list-item">
                    <div className="payment-widget__list-item-label">
                        Classic Dinner for one
                    </div>
                    <div className="payment-widget__list-item-value">600kr</div>
                </div>
                <div className="payment-widget__list-item">
                    <div className="payment-widget__list-item-label">
                        Electric Car Charge
                    </div>
                    <div className="payment-widget__list-item-value">800kr</div>
                </div>
                <div className="payment-widget__list-item">
                    <div className="payment-widget__list-item-label payment-widget__list-item--discount">
                        10% discount
                    </div>
                    <div className="payment-widget__list-item-value payment-widget__list-item--discount">
                        -200kr
                    </div>
                </div>
                <hr className="payment-widget__list-divider" />
                <div className="payment-widget__list-item">
                    <div className="payment-widget__list-item-total-label">
                        {t("Total")}
                    </div>
                    <div className="payment-widget__list-item-total-value">
                        7.000kr
                    </div>
                </div>
            </div>
        </div>
    );
};
