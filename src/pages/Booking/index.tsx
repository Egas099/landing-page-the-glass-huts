import { PriceLabel } from "entities/price";
import { AdditionalServicesForm } from "features/AdditionalServicesForm";
import { ApplyCoupon } from "features/ApplyCoupon";
import { Bill } from "features/Bill";
import { BookingForm } from "features/BookingForm";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { faqContent as content, ROUTES } from "shared/constants";
import { Button } from "shared/ui";
import "./styles.scss";

const endDateOfFreeCancellation = "Mar 27";
const endDateOfHalfRefundCancellation = "Apr 1";

const BookingPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="booking-page">
            <div className="booking-page__sections">
                <AdditionalServicesForm />
                <section>
                    <h2 className="booking-page__sections-head">
                        {t("Hut rules")}
                    </h2>
                    <p className="booking-page__sections-paragraph">
                        {content.hutRules.map((rule) => (
                            <>
                                {t(rule)}
                                <br />
                            </>
                        ))}
                    </p>
                </section>
                <section>
                    <h2 className="booking-page__sections-head">
                        {t("Cancellation policy")}
                    </h2>
                    <p className="booking-page__sections-paragraph">
                        <Trans>
                            Free cancellation until 1:00 PM on{" "}
                            {{ endDateOfFreeCancellation }}
                        </Trans>
                        <br />
                        <Trans>
                            After that, cancel before 2:00 PM on{" "}
                            {{ endDateOfHalfRefundCancellation }} and get a 50%
                            refund, minus the first night and service fee.
                        </Trans>
                    </p>
                </section>
                <section>
                    <h2 className="booking-page__sections-head">
                        {t("Important Information")}
                    </h2>
                    <p className="booking-page__sections-paragraph">
                        {t(content.roadToHuts)}
                    </p>
                </section>
            </div>
            <aside className="booking-page__aside">
                <PriceLabel />
                <BookingForm />
                <Button
                    text={t("Book")}
                    className="booking-page__aside-book-button"
                    onClick={() => navigate(ROUTES.PAYMENT)}
                />
                <Bill />
                <ApplyCoupon />
            </aside>
        </div>
    );
};

export default BookingPage;
