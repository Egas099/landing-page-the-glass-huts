import { FormEvent, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { InputField, Button, InputArea } from "shared/ui";
import "./styles.scss";

export interface ContactFormFields {
    first_name: string;
    last_name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm = () => {
    const { t } = useTranslation();

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.target as unknown as HTMLFormElement);
        const contactFormFields = Object.fromEntries(
            form
        ) as unknown as ContactFormFields;
        console.log(contactFormFields);
        alert("Message can not be sent.");
    }, []);

    return (
        <form
            className="contact-form"
            onSubmit={handleSubmit}
            id="contact-form"
        >
            <div className="contact-form__name">
                <InputField
                    placeholder={t("First name")}
                    required
                    name="first_name"
                />
                <InputField
                    placeholder={t("Last name")}
                    required
                    name="last_name"
                />
            </div>
            <InputField
                placeholder={t("Email")}
                inputType="email"
                required
                name="email"
            />
            <InputField placeholder={t("Subject")} required name="subject" />
            <div className="contact-form__message">
                <InputArea placeholder={t("Message")} required name="message" />
            </div>
            <div className="contact-form__submit-button">
                <Button text={t("Send")} formId="contact-form" />
            </div>
        </form>
    );
};

export default ContactForm;
