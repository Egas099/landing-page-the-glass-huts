import ButtonWithPrice from "entities/ButtonWithPrice";
import Contacts from "entities/Contacts";
import { iconService, imageService } from "shared/api";

import Geolocation from "entities/Geolocation";
import {
    PanoramaWithContent,
    ImageSlider,
    IconWithCaption,
    Button,
} from "shared/ui";
import "./styles.scss";

const HomePage = () => {
    return (
        <div className="page">
            <div className="page__intro">
                <PanoramaWithContent
                    imageSource={imageService.intro}
                    maskOpacity={0.35}
                >
                    <section className="page__intro-section">
                        <h1 className="page__intro-section-head">
                            {introSection.head}
                        </h1>
                        <p className="page__intro-section-paragraph">
                            {introSection.paragraph}
                        </p>
                    </section>
                    <div className="page__intro-book-button">
                        <ButtonWithPrice price={price} text="Book now" />
                    </div>
                </PanoramaWithContent>
            </div>
            <section className="page__cabins-section">
                <div className="">
                    <h2>{theCabinsSection.head}</h2>
                    <p>{theCabinsSection.paragraph}</p>
                </div>
                <div className="page__cabins-section-image">
                    <img
                        src={imageService.inside3}
                        alt="Inside The Hut"
                        height="100%"
                    />
                </div>
                <div className="page__cabins-section-slider">
                    <ImageSlider
                        imagesSources={[
                            imageService.inside3,
                            imageService.outside1,
                            imageService.inside1,
                            imageService.video,
                        ]}
                    />
                </div>
            </section>
            <div className="page__media-collage">
                <img src={imageService.outside1} alt="The Hut" />
                <img src={imageService.inside1} alt="Inside the Hut" />
                <img src={imageService.video} alt="video" />
            </div>
            <div className="page__geolocation">
                <div className="page__geolocation-map">
                    <Geolocation />
                </div>
                <section className="page__geolocation-about">
                    <h2>{theForestSection.head}</h2>
                    <p>{theForestSection.paragraph}</p>
                </section>
            </div>
            <section className="page__facilities">
                <h2 className="page__facilities-head">Facilities</h2>
                <div className="page__facilities-grid">
                    {facilities.map(({ iconSrc, caption }) => (
                        <IconWithCaption
                            src={iconSrc}
                            caption={caption}
                            key={iconSrc}
                        />
                    ))}
                </div>
            </section>
            <div className="page__about">
                <img src={imageService.outside3} alt="Outside" height="100%" />
                <img src={imageService.inside2} alt="Inside" height="100%" />
                <div className="page__about-more-button">
                    <Button text="More about us" />
                </div>
            </div>
            <div className="page__contacts">
                <div className="">
                    <h2 className="page__section-head">
                        Stay in touch with us
                    </h2>
                    <Contacts />
                </div>
                <div>
                    <img src={imageService.outside2} alt="Outside" />
                    <div className="page__contacts-book-button">
                        <ButtonWithPrice price={price} text="Book a hut" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

const facilities = [
    { iconSrc: iconService.fridge, caption: "Mini fridge" },
    { iconSrc: iconService.kitchen, caption: "Kitchenette" },
    { iconSrc: iconService.coffee_machine, caption: "Coffee machine" },
    {
        iconSrc: iconService.electric_tea_kettle,
        caption: "Electric tea kettle",
    },
    { iconSrc: iconService.parking, caption: "Parking" },
    { iconSrc: iconService.breathtaking_views, caption: "Breathtaking views" },
    { iconSrc: iconService.floor_heating, caption: "Floor heating" },
    { iconSrc: iconService.plug, caption: "230V" },
    { iconSrc: iconService.wifi, caption: "Wi-Fi" },
    { iconSrc: iconService.shower, caption: "Shower" },
    { iconSrc: iconService.flushing_toilets, caption: "Flushing toilets" },
    { iconSrc: iconService.bedding_and_towels, caption: "Bedding & towels" },
];
const theCabinsSection = {
    head: "The Cabins",
    paragraph:
        "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
};
const theForestSection = {
    head: "The Forest",
    paragraph:
        "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
};
const introSection = {
    head: "Find peace in the Forest",
    paragraph: "Come and stay in out hut hotel near Mariager Fjord in Denmark",
};
const price = "€3.200";
