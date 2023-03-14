import { useTranslation } from "react-i18next";
import { faqContent as content } from "shared/constants";
import { Collapse } from "shared/ui";
import "./styles.scss";
const FAQPage = () => {
    const { t } = useTranslation();

    return (
        <div className="faq-page">
            <div className="faq-page__list">
                <Collapse summary={t("Cancellation policy")}>
                    {content.cancellation.map((text) => (
                        <p className="faq-page__paragraph">{t(text)}</p>
                    ))}
                </Collapse>
                <Collapse summary={t("The walk up to grass huts")}>
                    <p className="faq-page__paragraph">
                        {t(content.roadToHuts)}
                    </p>
                </Collapse>
                <Collapse summary={t("Hut rules")}>
                    {content.hutRules.map((rule) => (
                        <p className="faq-page__paragraph">
                            {t(rule)}
                            <br />
                        </p>
                    ))}
                </Collapse>
            </div>
        </div>
    );
};

export default FAQPage;
