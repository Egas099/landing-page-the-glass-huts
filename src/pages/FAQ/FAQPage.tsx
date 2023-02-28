import { Trans, useTranslation } from "react-i18next";
import { Collapse } from "shared/ui";
import "./styles.scss";

const price = "€3.200";

const FAQPage = () => {
    const { t } = useTranslation();

    return (
        <div className="faq-page">
            <div className="faq-page__list">
                <Collapse summary={"PRICES"}>
                    <p className="faq-page__paragraph">
                        <Trans>
                            <>From</> {{ price }} <>per night</>
                        </Trans>
                    </p>
                </Collapse>
                <Collapse summary={"CANCELLATION POLICY"}>
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
                <Collapse summary={"THE WALK UP TO GLASS HUT"}>
                    <p className="faq-page__paragraph">
                        {t(
                            "You need to hike a steep hill to arrive at the treehouses, it takes approx 20-30 minutes on a trail with stairs and uneven ground."
                        )}
                    </p>
                </Collapse>
                <Collapse summary={"CAPACITY"}>
                    <p className="faq-page__paragraph">
                        {t(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        )}
                    </p>
                </Collapse>
                <Collapse summary={"PETS"}>
                    <p className="faq-page__paragraph">{t("No pets")}</p>
                </Collapse>
                <Collapse summary={"CHECK-IN / CHECK-OUT"}>
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
