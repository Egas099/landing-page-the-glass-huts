import { FC, useCallback, useState } from "react";
import "./styles.scss";

type Tab = {
    header: string;
    paragraph: string;
};

type Props = {
    sectionTitle: string;
    tabs: Tab[];
};

const SectionWithTabs: FC<Props> = ({ sectionTitle, tabs }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const isActiveTab = (index: number) => index === selectedTab;

    return (
        <section className="section-with-tabs">
            <h2 className="section-with-tabs__head">{sectionTitle}</h2>
            <div className="section-with-tabs__tabs">
                {tabs.map((tab, index) => (
                    <span
                        className={`section-with-tabs__tab ${
                            isActiveTab(index)
                                ? "section-with-tabs__tab_selected"
                                : ""
                        }`}
                        onClick={() => setSelectedTab(index)}
                    >
                        {tab.header}
                    </span>
                ))}
            </div>
            <p className="section-with-tabs__paragraph">
                {tabs[selectedTab].paragraph}
            </p>
        </section>
    );
};

export default SectionWithTabs;
