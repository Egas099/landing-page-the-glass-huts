import { Bill } from "features/Bill";
import { BookingForm } from "features/BookingForm";
import { PaymentForm } from "features/PaymentForm/ui";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "shared/constants";
import { RightArrow } from "shared/svg";
import "./styles.scss";

const PaymentPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="payment-page">
            <div
                className="payment-page__back-link"
                onClick={() => navigate(ROUTES.BOOKING)}
            >
                <div className="payment-page__back-link-icon">
                    <RightArrow />
                </div>
                <span className="payment-page__back-link-text">
                    Confirm & Pay
                </span>
            </div>
            <PaymentForm />
            <aside className="payment-page__aside">
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
            </aside>
        </div>
    );
};

export default PaymentPage;
