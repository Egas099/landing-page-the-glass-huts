import { FC } from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import SectionWithTabs from "../SectionWithTabs/SectionWithTabs";
import "./styles.scss";

type Props = {
    sectionTitle: string;
    tabs: Section[];
    imagesSources: string[];
    sliderFromLeft: boolean;
};

const ImageSliderWithSectionWithTabs: FC<Props> = ({
    sectionTitle,
    tabs,
    imagesSources,
    sliderFromLeft,
}) => {
    return (
        <section
            className={`image-slider-with-section-with-tabs ${
                sliderFromLeft ? "" : "reverse"
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

export default ImageSliderWithSectionWithTabs;
