import { NewsletterSubscribe } from "features/NewsletterSubscribe";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { PayPol, MasterCard, Visa, BankTransfer } from "shared/svg";
import "./styles.scss";

export const Footer = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <footer className="footer">
            <NewsletterSubscribe />
            <div className="footer__cell">
                <div className="footer__faq-links">
                    {links.map(({ text, to }, index) => (
                        <div
                            className="footer__faq-links-link"
                            onClick={() => navigate(to)}
                            key={index}
                        >
                            {t(text)}
                        </div>
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
    { to: "/faq", text: "Term and conditions" },
    { to: "/faq", text: "Cancellation policy" },
    { to: "/faq", text: "Privacy policy" },
];
