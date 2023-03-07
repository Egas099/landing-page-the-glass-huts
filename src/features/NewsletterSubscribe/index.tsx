import { FormEvent, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { RightArrow } from "shared/svg";
import "./styles.scss";

export const NewsletterSubscribe = () => {
    const { t } = useTranslation();

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.target as unknown as HTMLFormElement);
        const email = Object.fromEntries(form).email as unknown as string;

        // TODO: request to server
        // console.log(email);
        alert(email);
    }, []);

    return (
        <div className="newsletter">
            <span className="newsletter__header">{t(newsletterTitle)}</span>
            <div>
                <form className="newsletter__input" onSubmit={handleSubmit}>
                    <input
                        className="newsletter__input-email"
                        placeholder={t("Email address") || "Email address"}
                        type="email"
                        name="email"
                        required
                    />
                    <button className="newsletter__input-arrow" type="submit">
                        <RightArrow />
                    </button>
                </form>
                <hr />
                <span className="newsletter__caption">
                    {t(newsletterCaption)}
                </span>
            </div>
        </div>
    );
};

const newsletterTitle = "Newsletter";
const newsletterCaption =
    "Sign up to our newsletter for special things and receive 10% off your next order.";
