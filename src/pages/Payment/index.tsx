import { Bill } from "features/Bill";
import { BookingForm } from "features/BookingForm";
import { Trans, useTranslation } from "react-i18next";
import { InputField, InputArea, Button } from "shared/ui";
import "./styles.scss";

const PaymentPage = () => {
    const { t } = useTranslation();

    return (
        <div className="payment-page">
            <form className="payment-page__payment-form">
                <div>
                    <h2 className="payment-page__section-head">
                        {t("Personal Information")}
                    </h2>
                    <hr className="payment-page__divider" />
                    <div className="payment-page__personal-info-inputs">
                        <InputField placeholder={t("First name")} />
                        <InputField placeholder={t("Last name")} />
                        <InputField placeholder={t("Email")} />
                        <InputField placeholder={t("Phone number")} />
                        <InputField placeholder={t("Address")} />
                        <InputField placeholder={t("Postal code")} />
                        <InputField placeholder={t("City")} />
                        <InputField placeholder={t("Country")} />
                    </div>
                </div>
                <div>
                    <h2 className="payment-page__section-head">
                        {t("Pay with")}
                    </h2>
                    <hr className="payment-page__divider" />
                    <div className="payment-page__card-form">
                        <InputField placeholder={t("Credit or debit card")} />
                        <InputField placeholder={t("Card number")} />
                        <div className="payment-page__card-form-row">
                            <InputField placeholder={t("Expiration")} />
                            <InputField placeholder={t("CCV")} />
                        </div>
                        <div className="payment-page__card-form-row payment-page__card-form-row-with-gap">
                            <InputField placeholder={t("ZIP code")} />
                            <InputField placeholder={t("Country")} />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="payment-page__section-head">
                        {t("Additional Information")}
                    </h2>
                    <div className="payment-page__message">
                        <InputArea placeholder={t("Leave a message")} />
                    </div>
                </div>
                <div className="payment-page__confirm">
                    <p className="payment-page__confirm-accepting">
                        <Trans>
                            I have read and accept{" "}
                            <span className="payment-page__confirm-terms-and-conditions">
                                Terms & Conditions
                            </span>
                        </Trans>
                    </p>
                    <div className="payment-page__confirm-button">
                        <Button text={t("confirm and pay")} />
                    </div>
                </div>
            </form>
            <div className="payment-page__aside">
                <div className="payment-page__aside-head">
                    <span className="payment-page__aside-head-name">
                        The Glass Hut
                    </span>{" "}
                    <span className="payment-page__aside-head-location">
                        {t("Vesterborg, Denmark")}
                    </span>
                </div>
                <BookingForm />
                <Bill />
            </div>
        </div>
    );
};

export default PaymentPage;
