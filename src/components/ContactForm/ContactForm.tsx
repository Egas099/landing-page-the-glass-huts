import { FC, FormEvent, useCallback } from "react";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import "./styles.scss";

export interface ContactFormFields {
    first_name: string;
    last_name: string;
    email: string;
    subject: string;
    message: string;
}

type Props = {
    onSubmit: (contactFormFields: ContactFormFields) => void;
};

const ContactForm: FC<Props> = ({ onSubmit }) => {
    const handleSubmit = useCallback(
        (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const form = new FormData(e.target as unknown as HTMLFormElement);
            const contactFormFields = Array.from(
                form
            ) as unknown as ContactFormFields;
            onSubmit(contactFormFields);
        },
        [onSubmit]
    );

    return (
        <form
            className="contact-form"
            onSubmit={handleSubmit}
            id="contact-form"
        >
            <div className="contact-form__name">
                <InputField
                    placeholder="First name"
                    required
                    name="first_name"
                />
                <InputField placeholder="Last name" required name="last_name" />
            </div>
            <InputField
                placeholder="Email"
                inputType="email"
                required
                name="email"
            />
            <InputField placeholder="Subject" required name="subject" />
            <InputField placeholder="Message" required name="message" />
            <div className="contact-form__submit-button">
                <Button text="Send" formId="contact-form" />
            </div>
        </form>
    );
};

export default ContactForm;
