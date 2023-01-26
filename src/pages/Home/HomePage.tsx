import { icons } from "../../api/icons";
import { images } from "../../api/images";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import ButtonWithPrice from "../../components/ButtonWithPrice/ButtonWithPrice";
import Contacts from "../../components/Contacts/Contacts";
import Geolocation from "../../components/Geolocation/Geolocation";
import IconWithCaption from "../../components/IconWithCaption/IconWithCaption";
import Image from "../../components/Image/Image";
import PanoramaWithContent from "../../components/PanoramaWithContent/PanoramaWithContent";
import "./styles.scss";

const facilities = [
    { iconSrc: icons.fridge, caption: "Mini fridge" },
    { iconSrc: icons.kitchen, caption: "Kitchenette" },
    { iconSrc: icons.coffee_machine, caption: "Coffee machine" },
    { iconSrc: icons.electric_tea_kettle, caption: "Electric tea kettle" },
    { iconSrc: icons.parking, caption: "Parking" },
    { iconSrc: icons.breathtaking_views, caption: "Breathtaking views" },
    { iconSrc: icons.floor_heating, caption: "Floor heating" },
    { iconSrc: icons.plug, caption: "230V" },
    { iconSrc: icons.wifi, caption: "Wi-Fi" },
    { iconSrc: icons.shower, caption: "Shower" },
    { iconSrc: icons.flushing_toilets, caption: "Flushing toilets" },
    { iconSrc: icons.bedding_and_towels, caption: "Bedding & towels" },
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

const HomePage = () => {
    return (
        <div className="page">
            <div className="page__intro-container">
                <PanoramaWithContent
                    imageSource={images.intro}
                    maskColor="#333333"
                    maskOpacity={0.35}
                >
                    <section className="page__intro-section">
                        <h1 className="page__intro-head">
                            {introSection.head}
                        </h1>
                        <p className="page__intro-paragraph">
                            {introSection.paragraph}
                        </p>
                    </section>
                    <div className="page__book-button">
                        <ButtonWithPrice price={price} text="Book now" />
                    </div>
                </PanoramaWithContent>
            </div>
            <section className="page__section">
                <div className="">
                    <h2 className="page__section-head">
                        {theCabinsSection.head}
                    </h2>
                    <p className="page__section-paragraph">
                        {theCabinsSection.paragraph}
                    </p>
                </div>
                <Image
                    src={images.inside3}
                    alt="Inside The Hut"
                    height="100%"
                />
            </section>
            <div className="page__media-collage">
                <Image src={images.hutFromSide1} alt="The Hut" />
                <Image src={images.inside1} alt="Inside the Hut" />
                <Image src={images.video} alt="video" />
            </div>
            <div className="page__geolocation">
                <Geolocation />
                <section className="page__about-forest">
                    <h2 className="page__section-head">
                        {theForestSection.head}
                    </h2>
                    <p className="page__section-paragraph">
                        {theForestSection.paragraph}
                    </p>
                </section>
            </div>
            <section className="page__facilities">
                <h2 className="page__facilities-head">Facilities</h2>
                <div className="page__grid">
                    {facilities.map(({ iconSrc, caption }) => (
                        <IconWithCaption src={iconSrc} caption={caption} />
                    ))}
                </div>
            </section>
            <div className="page__about">
                <Image src={images.hutFromSide3} alt="Outside" height="100%" />
                <Image src={images.inside2} alt="Inside" height="100%" />
                <div className="page__more-button">
                    <ButtonPrimary text="More about us" />
                </div>
            </div>
            <div className="page__contacts">
                <Contacts />
                <div>
                    <Image src={images.hutFromSide2} alt="Outside" />
                    <ButtonWithPrice price={price} text="Book a hut" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
