import { NewsletterSubscribe } from "features/NewsletterSubscribe";
import { useTranslation } from "react-i18next";
import { PayPol, MasterCard, Visa, BankTransfer } from "shared/svg";
import "./styles.scss";

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <div className="footer__cell">
                <NewsletterSubscribe />
            </div>
            <div className="footer__cell">
                <div className="footer__faq-links">
                    {links.map(({ text, to }, index) => (
                        <a
                            className="footer__faq-links-link"
                            href={to}
                            key={index}
                        >
                            {t(text)}
                        </a>
                    ))}
                </div>
                <div className="footer__payment-icons">
                    <PayPol />
                    <MasterCard />
                    <Visa />
                    <BankTransfer />
                </div>
            </div>
            <span className="footer__cell footer__copyright">{copyright}</span>
        </footer>
    );
};

const copyright = "© 2021 The Glass Huts";
const links = [
    { to: "/", text: "Term and conditions" },
    { to: "/", text: "Cancellation policy" },
    { to: "/", text: "Privacy policy" },
];
