import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

type Tab = {
    header: string;
    paragraph: string;
};

type Props = {
    sectionTitle: string;
    tabs: Tab[];
};

export const SectionWithTabs: FC<Props> = ({ sectionTitle, tabs }) => {
    const { t } = useTranslation();
    const [selectedTab, setSelectedTab] = useState(0);
    const isActiveTab = (index: number) => index === selectedTab;

    const getTabClass = (index: number) => {
        return `section-with-tabs__tab ${
            isActiveTab(index) ? "section-with-tabs__tab_selected" : ""
        }`;
    };

    return (
        <section className="section-with-tabs">
            <h2 className="section-with-tabs__head">{t(sectionTitle)}</h2>
            <div className="section-with-tabs__tabs">
                {tabs.map((tab, index) => (
                    <span
                        className={getTabClass(index)}
                        onClick={() => setSelectedTab(index)}
                        key={index}
                    >
                        {t(tab.header)}
                    </span>
                ))}
            </div>
            <p>{t(tabs[selectedTab].paragraph)}</p>
        </section>
    );
};
