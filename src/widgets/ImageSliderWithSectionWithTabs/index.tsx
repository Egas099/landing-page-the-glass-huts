import { FC } from "react";
import { SectionWithTabs, ImageSlider } from "shared/ui";
import "./styles.scss";

type Props = {
    sectionTitle: string;
    tabs: Section[];
    imagesSources: string[];
    sliderFromLeft: boolean;
};

export const ImageSliderWithSectionWithTabs: FC<Props> = ({
    sectionTitle,
    tabs,
    imagesSources,
    sliderFromLeft,
}) => {
    return (
        <section
            className={`image-slider-with-section-with-tabs ${
                sliderFromLeft ? "obverse" : "reverse"
            }`}
        >
            <div
                className={`image-slider-with-section-with-tabs${
                    sliderFromLeft ? "__left-section" : "__right-section"
                }`}
            >
                <SectionWithTabs sectionTitle={sectionTitle} tabs={tabs} />
            </div>
            <div className="image-slider-with-section-with-tabs__slider">
                <ImageSlider imagesSources={imagesSources} />
            </div>
        </section>
    );
};
