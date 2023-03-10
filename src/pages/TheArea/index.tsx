import { iconService, imageService } from "shared/api";

import "./styles.scss";
import { PanoramaWithContent, Button, ImageSlider } from "shared/ui";
import { EmbeddedMap } from "entities/map";
import { ImageSliderWithSectionWithTabs } from "widgets";
import { useTranslation } from "react-i18next";

const TheAreaPage = () => {
    const { t } = useTranslation()
    
    return (
        <div className="area-page">
            <div className="area-page__panorama">
                <PanoramaWithContent
                    imageSource={imageService.areaPanorama}
                    maskOpacity={0.5}
                >
                    <h1 className="area-page__panorama-head">{t("The Area")}</h1>
                    <a
                        className="area-page__panorama-location"
                        href="https://goo.gl/maps/5L37Z7CZYYJYrkey9"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <img
                            src={iconService.geopoint}
                            width="17px"
                            alt="location"
                        />
                        {t("Vesterborg, Denmark")}
                    </a>
                    <div className="area-page__panorama-button">
                        <Button text={t("get directions")} type="transparent" />
                    </div>
                </PanoramaWithContent>
            </div>
            <section className="area-page__vesterborg">
                <ImageSlider imagesSources={vesterborg.imagesSources} />
                <div className="area-page__vesterborg-section">
                    <h2 className="area-page__vesterborg-section-head">
                        {t(vesterborg.header)}
                    </h2>
                    <span className="area-page__vesterborg-section-sub-head">
                        {t(vesterborg.subHeader)}
                    </span>
                    <p className="area-page__vesterborg-section-paragraph">
                        {t(vesterborg.paragraph)}
                    </p>
                </div>
            </section>
            <div className="area-page__map">
                <h2 className="area-page__map-head">
                    {t("Lorem ipsum dolor sit amet, consectetur adipiscing...")}
                </h2>
                <img src={imageService.map} alt="map" />
            </div>
            <h2 className="area-page__sections-head">{t("Activities")}</h2>
            <ImageSliderWithSectionWithTabs {...restaurantsAndShopping} />
            <ImageSliderWithSectionWithTabs {...experiencesInNature} />
            <ImageSliderWithSectionWithTabs {...goForDrive} />
            <ImageSliderWithSectionWithTabs {...smallTownCharm} />
            <div className="area-page__geolocation">
                <EmbeddedMap />
            </div>
        </div>
    );
};

export default TheAreaPage;

const vesterborg = {
    header: "Vesterborg",
    subHeader: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
    paragraph:
        "L??vtag???s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground.",
    imagesSources: [imageService.nature2],
};
const restaurantsAndShopping = {
    sectionTitle: "Restaurants & shopping",
    tabs: [
        {
            header: "Lorem Impus",
            paragraph:
                "L??vtag???s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground.",
        },
        {
            header: "Lorem Impus",
            paragraph:
                "L??vtag???s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen.",
        },
    ],
    imagesSources: [imageService.restaurant1],
    sliderFromLeft: false,
};
const experiencesInNature = {
    sectionTitle: "Experiences in nature",
    tabs: [
        {
            header: "Lorem Impus",
            paragraph:
                "L??vtag???s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
        },
        {
            header: "Lorem Impus",
            paragraph:
                "L??vtag???s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
        },
    ],
    imagesSources: [imageService.nature1],
    sliderFromLeft: true,
};
const goForDrive = {
    sectionTitle: "Go for a drive",
    tabs: [
        {
            header: "Lorem Impus",
            paragraph:
                "L??vtag???s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
        },
        {
            header: "Lorem Impus",
            paragraph:
                "L??vtag???s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
        },
    ],
    imagesSources: [imageService.road1],
    sliderFromLeft: false,
};
const smallTownCharm = {
    sectionTitle: "Small-town charm",
    tabs: [
        {
            header: "Lorem Impus",
            paragraph:
                "L??vtag???s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
        },
        {
            header: "Lorem Impus",
            paragraph:
                "L??vtag???s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
        },
    ],
    imagesSources: [imageService.town1],
    sliderFromLeft: true,
};
