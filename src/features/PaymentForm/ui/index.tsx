import { FormEvent, useCallback } from "react";
import { Trans, useTranslation } from "react-i18next";
import { PayPol, MasterCard, Visa, BankTransfer } from "shared/svg";
import { Button, InputArea, InputField } from "shared/ui";
import "./styles.scss";

interface IPaymentForm {
    addition_message: string;
    address: string;
    card_number: string;
    ccv: string;
    city: string;
    country: string;
    email: string;
    expiration: string;
    first_name: string;
    last_name: string;
    phone: string;
    postal_code: string;
    zip_code: string;
}

// TODO: advanced form validation
const Form = () => {
    const { t } = useTranslation();

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.target as unknown as HTMLFormElement);
        const contactFormFields = Object.fromEntries(form);
        console.log(contactFormFields as unknown as IPaymentForm);
        alert("Test payment completed.");
    }, []);

    return (
        <form
            className="payment-form"
            id="payment-form"
            onSubmit={handleSubmit}
        >
            <h2 className="payment-form__section-head">
                {t("Personal Information")}
            </h2>
            <hr className="payment-form__divider" />
            <div className="payment-form__personal-info-inputs">
                <InputField
                    placeholder={t("First name")}
                    name="first_name"
                    required
                />
                <InputField
                    placeholder={t("Last name")}
                    name="last_name"
                    required
                />
                <InputField
                    placeholder={t("Email")}
                    name="email"
                    inputType="email"
                    required
                />
                <InputField
                    placeholder={t("Phone number")}
                    name="phone"
                    inputType="tel"
                    required
                />
                <InputField
                    placeholder={t("Address")}
                    name="address"
                    required
                />
                <InputField placeholder={t("Postal code")} name="postal_code" />
                <InputField placeholder={t("City")} name="city" required />
                <InputField
                    placeholder={t("Country")}
                    name="country"
                    required
                />
            </div>
            <div className="payment-form__space" />
            <div className="payment-form__pay-with-head">
                <h2 className="payment-form__section-head">{t("Pay with")}</h2>
                <div className="payment-form__pay-with-head-payment-icons">
                    <PayPol />
                    <MasterCard />
                    <Visa />
                    <BankTransfer />
                </div>
            </div>
            <hr className="payment-form__divider" />
            <div className="payment-form__card-form">
                {/* <InputField placeholder={t("Credit or debit card")} /> */}
                <InputField
                    placeholder={t("Card number")}
                    name="card_number"
                    required
                />
                <div className="payment-form__card-form-row">
                    <InputField
                        placeholder={t("Expiration")}
                        name="expiration"
                        required
                    />
                    <InputField placeholder={t("CCV")} name="ccv" required />
                </div>
                <div className="payment-form__card-form-row payment-form__card-form-row-with-gap">
                    <InputField
                        placeholder={t("ZIP code")}
                        name="zip_code"
                        required
                    />
                    <InputField
                        placeholder={t("Country")}
                        name="country"
                        required
                    />
                </div>
            </div>
            <div className="payment-form__space" />
            <h2 className="payment-form__section-head">
                {t("Additional Information")}
            </h2>
            <div className="payment-form__message">
                <InputArea
                    placeholder={t("Leave a message")}
                    name="addition_message"
                />
            </div>
            <div className="payment-form__confirm">
                <p className="payment-form__confirm-accepting">
                    <Trans>
                        I have read and accept{" "}
                        <b className="payment-form__confirm-terms-and-conditions">
                            Terms & Conditions
                        </b>
                    </Trans>
                </p>
                <Button
                    className="payment-form__confirm-button"
                    text={t("confirm and pay")}
                    formId="payment-form"
                />
            </div>
        </form>
    );
};

export const PaymentForm = Form;
