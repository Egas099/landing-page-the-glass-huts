import { PriceLabel } from "entities/price";
import { AdditionalServicesForm } from "features/AdditionalServicesForm";
import { ApplyCoupon } from "features/ApplyCoupon";
import { Bill } from "features/Bill";
import { BookingForm } from "features/BookingForm";
import { Trans, useTranslation } from "react-i18next";
import { Button } from "shared/ui";
import "./styles.scss";

const endDateOfFreeCancellation = "Mar 27";
const endDateOfHalfRefundCancellation = "Apr 1";

const BookingPage = () => {
    const { t } = useTranslation();

    return (
        <div className="booking-page">
            <div className="booking-page__sections">
                <AdditionalServicesForm />
                <section>
                    <h2 className="booking-page__sections-head">
                        {t("Hut rules")}
                    </h2>
                    <p className="booking-page__sections-paragraph">
                        <Trans>
                            Check-in: 2:00 PM - 11:00 PM <br />
                            Checkout: 11:00 AM <br /> Not suitable for children
                            and infants <br /> No smoking <br /> No pets
                        </Trans>
                    </p>
                </section>
                <section>
                    <h2 className="booking-page__sections-head">
                        {t("Cancellation policy")}
                    </h2>
                    <p className="booking-page__sections-paragraph">
                        <Trans>
                            Free cancellation until 1:00 PM on{" "}
                            {{ endDateOfFreeCancellation }} <br />
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
                        <Trans>
                            You need to hike a steep hill to arrive at the glass
                            houses, it takes approx 20-30 minutes on a trail
                            with stairs and uneven ground.
                        </Trans>
                    </p>
                </section>
            </div>
            <aside className="booking-page__aside">
                <PriceLabel />
                <BookingForm />
                <Button
                    text={t("Book")}
                    className="booking-page__aside-book-button"
                />
                <Bill />
                <ApplyCoupon />
            </aside>
        </div>
    );
};

export default BookingPage;
