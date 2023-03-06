import { Trans, useTranslation } from "react-i18next";
import { Collapse } from "shared/ui";
import "./styles.scss";

const price = "€3.200";

const FAQPage = () => {
    const { t } = useTranslation();

    return (
        <div className="faq-page">
            <div className="faq-page__list">
                <Collapse summary={t("Prices")}>
                    <p className="faq-page__paragraph">
                        <Trans>
                            <>From</> {{ price }} <>per night</>
                        </Trans>
                    </p>
                </Collapse>
                <Collapse summary={t("Cancellation policy")}>
                    <p className="faq-page__paragraph">
                        {t("Cancellation four weeks prior = 100% refund")}
                    </p>
                    <p className="faq-page__paragraph">
                        {t("Cancellation two weeks prior = 50% refund")}
                    </p>
                    <p className="faq-page__paragraph">
                        {t("Cancellation later than two weeks = full payment")}
                    </p>
                </Collapse>
                <Collapse summary={t("The walk up to grass huts")}>
                    <p className="faq-page__paragraph">
                        {t(
                            "You need to hike a steep hill to arrive at the glass houses, it takes approx 20-30 minutes on a trail with stairs and uneven ground."
                        )}
                    </p>
                </Collapse>
                <Collapse summary={t("Pets")}>
                    <p className="faq-page__paragraph">{t("No pets")}</p>
                </Collapse>
                <Collapse summary={t("Check-in / Check-out")}>
                    <p className="faq-page__paragraph">
                        {t("Check-in: 2:00 PM - 11:00 PM")}
                    </p>
                    <p className="faq-page__paragraph">
                        {t("Checkout: 11:00 AM")}
                    </p>
                </Collapse>
            </div>
        </div>
    );
};

export default FAQPage;
