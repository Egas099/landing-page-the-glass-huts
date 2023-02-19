import React from "react";
import BookingWidget from "../../components/BookingWidget/BookingWidget";
import Button from "../../components/Button/Button";
import InputArea from "../../components/InputArea/InputArea";
import InputField from "../../components/InputField/InputField";
import "./styles.scss";

const PaymentPage = () => {
    return (
        <div className="payment-page">
            <form className="payment-page__payment-form">
                <div className="">
                    <h2 className="payment-page__section-head">
                        Personal Information
                    </h2>
                    <hr className="payment-page__divider" />
                    <div className="payment-page__personal-info-inputs">
                        <InputField placeholder="First Name" />
                        <InputField placeholder="Last Name" />
                        <InputField placeholder="Email" />
                        <InputField placeholder="Phone number" />
                        <InputField placeholder="Address" />
                        <InputField placeholder="Postal code" />
                        <InputField placeholder="City" />
                        <InputField placeholder="Country" />
                    </div>
                </div>
                <div>
                    <h2 className="payment-page__section-head">Pay with</h2>
                    <hr className="payment-page__divider" />
                    <div className="payment-page__card-form">
                        <InputField placeholder="Credit or debit card" />
                        <InputField placeholder="Card number" />
                        <div className="payment-page__card-form-row">
                            <InputField placeholder="Expiration" />
                            <InputField placeholder="CCV" />
                        </div>
                        <div className="payment-page__card-form-row payment-page__card-form-row-with-gap">
                            <InputField placeholder="ZIP code" />
                            <InputField placeholder="Country" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="payment-page__section-head">
                        Additional Information
                    </h2>
                    <div className="payment-page__message">
                        <InputArea placeholder="Leave a message" />
                    </div>
                </div>
                <div className="payment-page__confirm">
                    <p className="payment-page__confirm-accepting">
                        I have read and accept{" "}
                        <span className="payment-page__confirm-terms-and-conditions">
                            Terms & Conditions
                        </span>
                    </p>
                    <div className="payment-page__confirm-button">
                        <Button text="confirm and pay" />
                    </div>
                </div>
            </form>
            <div className="payment-page__aside">
                <BookingWidget />
            </div>
        </div>
    );
};

export default PaymentPage;
