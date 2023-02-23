import { Button, InputField } from "shared/ui";
import "./styles.scss";

const BookingWidget = () => {
    return (
        <div className="booking-widget">
            <span className="booking-widget__price">
                <span className="booking-widget__price-value">3.200kr</span>
                <span className="booking-widget__price-unit"> / night</span>
            </span>
            <div className="booking-widget__form">
                <div className="booking-widget__form-element">
                    <span className="booking-widget__form-element-head">
                        Check in
                    </span>
                    <span className="booking-widget__form-element-text">
                        4/29/2021
                    </span>
                </div>
                <div className="booking-widget__form-divider"></div>
                <div className="booking-widget__form-element">
                    <span className="booking-widget__form-element-head">
                        Check in
                    </span>
                    <span className="booking-widget__form-element-text">
                        4/30/2021
                    </span>
                </div>
                <div className="booking-widget__form-divider"></div>
                <div className="booking-widget__form-element">
                    <span className="booking-widget__form-element-head">
                        Guests
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
                        Total
                    </div>
                    <div className="booking-widget__list-item-total-value">
                        7.000kr
                    </div>
                </div>
            </div>
            <div className="booking-widget__coupon-input">
                <InputField placeholder="Coupon Code" />
                <Button text="apply" />
            </div>
        </div>
    );
};

export default BookingWidget;
