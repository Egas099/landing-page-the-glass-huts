import { icons } from "../../api/icons";
import { images } from "../../api/images";
import Button from "../../components/Button/Button";
import Geolocation from "../../components/Geolocation/Geolocation";
import Image from "../../components/Image/Image";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import ImageSliderWithSectionWithTabs from "../../components/ImageSliderWithSectionWithTabs/ImageSliderWithSectionWithTabs";
import PanoramaWithContent from "../../components/PanoramaWithContent/PanoramaWithContent";
import "./styles.scss";

const TheAreaPage = () => {
    return (
        <div className="area-page">
            <div className="area-page__panorama">
                <PanoramaWithContent
                    imageSource={images.areaPanorama}
                    maskColor="#333333"
                    maskOpacity={0.5}
                >
                    <h1 className="area-page__panorama-head">The Area</h1>
                    <a
                        className="area-page__panorama-location"
                        href="https://goo.gl/maps/5L37Z7CZYYJYrkey9"
                    >
                        <Image src={icons.geopoint} width="17px" />
                        Vesterborg, Denmark
                    </a>
                    <div className="area-page__panorama-button">
                        <Button text="get directions" type="transparent" />
                    </div>
                </PanoramaWithContent>
            </div>
            <section className="area-page__vesterborg">
                <ImageSlider imagesSources={vesterborg.imagesSources} />
                <div className="area-page__vesterborg-section">
                    <h2 className="area-page__vesterborg-section-head">
                        {vesterborg.header}
                    </h2>
                    <span className="area-page__vesterborg-section-sub-head">
                        {vesterborg.subHeader}
                    </span>
                    <p className="area-page__vesterborg-section-paragraph">
                        {vesterborg.paragraph}
                    </p>
                </div>
            </section>
            <div className="area-page__map">
                <h2 className="area-page__map-head">
                    Lorem ipsum dolor sit amet, consectetur adipiscing...
                </h2>
                <Image src={images.map} />
            </div>
            <h2 className="area-page__sections-head">Activities</h2>
            <ImageSliderWithSectionWithTabs {...restaurantsAndShopping} />
            <ImageSliderWithSectionWithTabs {...experiencesInNature} />
            <ImageSliderWithSectionWithTabs {...goForDrive} />
            <ImageSliderWithSectionWithTabs {...smallTownCharm} />
            <div className="area-page__geolocation">
                <Geolocation />
            </div>
        </div>
    );
};

export default TheAreaPage;

const vesterborg = {
    header: "Vesterborg",
    subHeader: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
    paragraph:
        "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground.",
    imagesSources: [images.nature2],
};
const restaurantsAndShopping = {
    sectionTitle: "Restaurants & shopping",
    tabs: [
        {
            header: "Lorem Impus",
            paragraph:
                "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground.",
        },
        {
            header: "Lorem Impus",
            paragraph:
                "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen.",
        },
    ],
    imagesSources: [images.restaurant1],
    sliderFromLeft: false,
};
const experiencesInNature = {
    sectionTitle: "Experiences in nature",
    tabs: [
        {
            header: "Lorem Impus",
            paragraph:
                "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
        },
        {
            header: "Lorem Impus",
            paragraph:
                "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
        },
    ],
    imagesSources: [images.nature1],
    sliderFromLeft: true,
};
const goForDrive = {
    sectionTitle: "Go for a drive",
    tabs: [
        {
            header: "Lorem Impus",
            paragraph:
                "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
        },
        {
            header: "Lorem Impus",
            paragraph:
                "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
        },
    ],
    imagesSources: [images.road1],
    sliderFromLeft: false,
};
const smallTownCharm = {
    sectionTitle: "Small-town charm",
    tabs: [
        {
            header: "Lorem Impus",
            paragraph:
                "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
        },
        {
            header: "Lorem Impus",
            paragraph:
                "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
        },
    ],
    imagesSources: [images.town1],
    sliderFromLeft: true,
};
