import { BankTransfer } from "../../assets/images/svg/BankTransfer";
import { MasterCard } from "../../assets/images/svg/MasterCard";
import { PayPol } from "../../assets/images/svg/PayPol";
import { RightArrow } from "../../assets/images/svg/RightArrow";
import { Visa } from "../../assets/images/svg/Visa";
import "./styles.scss";

const newsletterTitle = "Newsletter";
const newsletterCaption =
    "Sign up to our newsletter for special things and receive 10% off your next order.";
const copyright = "© 2021 The Glass Huts";
const links = [
    { to: "/", text: "Term and conditions" },
    { to: "/", text: "Cancellation policy" },
    { to: "/", text: "Privacy policy" },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__first-column">
                <span>{newsletterTitle}</span>
                <div>
                    <div className="footer__input-with-arrow">
                        <input
                            className="footer__input-email"
                            placeholder="Email address"
                        />
                        <RightArrow />
                    </div>
                    <hr />
                    <span className="footer__newsletter-caption">
                        {newsletterCaption}
                    </span>
                </div>
                <span className="footer__copyright">{copyright}</span>
            </div>
            <div className="footer__second-column">
                <div className="footer__links">
                    {links.map(({ text, to }) => (
                        <a className="footer__link" href={to}>
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
        </footer>
    );
};

export default Footer;
