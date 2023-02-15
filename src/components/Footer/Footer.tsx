import { BankTransfer } from "../../assets/images/svg/BankTransfer";
import { MasterCard } from "../../assets/images/svg/MasterCard";
import { PayPol } from "../../assets/images/svg/PayPol";
import { RightArrow } from "../../assets/images/svg/RightArrow";
import { Visa } from "../../assets/images/svg/Visa";
import "./styles.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__cell">
                <span className="footer__newsletter-header">
                    {newsletterTitle}
                </span>
                <div>
                    <div className="footer__input-with-arrow">
                        <input
                            className="footer__input-with-arrow-email"
                            placeholder="Email address"
                        />
                        <div className="footer__input-with-arrow-arrow">
                            <RightArrow />
                        </div>
                    </div>
                    <hr />
                    <span className="footer__newsletter-caption">
                        {newsletterCaption}
                    </span>
                </div>
            </div>
            <div className="footer__cell">
                <div className="footer__faq-links">
                    {links.map(({ text, to }, index) => (
                        <a
                            className="footer__faq-links-link"
                            href={to}
                            key={index}
                        >
                            {text}
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

export default Footer;

const newsletterTitle = "Newsletter";
const newsletterCaption =
    "Sign up to our newsletter for special things and receive 10% off your next order.";
const copyright = "© 2021 The Glass Huts";
const links = [
    { to: "/", text: "Term and conditions" },
    { to: "/", text: "Cancellation policy" },
    { to: "/", text: "Privacy policy" },
];
