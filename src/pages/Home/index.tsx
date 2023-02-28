import { imageService } from "shared/api";
import {
    PanoramaWithContent,
    ImageSlider,
    IconWithCaption,
    Button,
} from "shared/ui";
import "./styles.scss";
import { ContactList } from "entities/contacts";
import { EmbeddedMap } from "entities/map";
import {
    introSection,
    theCabinsSection,
    theForestSection,
    facilities,
} from "./content";
import { useTranslation } from "react-i18next";
import { ButtonWithPrice } from "widgets";

const HomePage = () => {
    const { t } = useTranslation();

    return (
        <div className="page">
            <div className="page__intro">
                <PanoramaWithContent
                    imageSource={imageService.intro}
                    maskOpacity={0.35}
                >
                    <section className="page__intro-section">
                        <h1 className="page__intro-section-head">
                            {t(introSection.head)}
                        </h1>
                        <p className="page__intro-section-paragraph">
                            {t(introSection.paragraph)}
                        </p>
                    </section>
                    <div className="page__intro-book-button">
                        <ButtonWithPrice text={t("Book now")} />
                    </div>
                </PanoramaWithContent>
            </div>
            <section className="page__cabins-section">
                <div className="">
                    <h2>{t(theCabinsSection.head)}</h2>
                    <p>{t(theCabinsSection.paragraph)}</p>
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
                    <EmbeddedMap />
                </div>
                <section className="page__geolocation-about">
                    <h2>{t(theForestSection.head)}</h2>
                    <p>{t(theForestSection.paragraph)}</p>
                </section>
            </div>
            <section className="page__facilities">
                <h2 className="page__facilities-head">{t("Facilities")}</h2>
                <div className="page__facilities-grid">
                    {facilities.map(({ iconSrc, caption }) => (
                        <IconWithCaption
                            src={iconSrc}
                            caption={t(caption)}
                            key={iconSrc}
                        />
                    ))}
                </div>
            </section>
            <div className="page__about">
                <img src={imageService.outside3} alt="Outside" height="100%" />
                <img src={imageService.inside2} alt="Inside" height="100%" />
                <div className="page__about-more-button">
                    <Button text={t("More about us")} />
                </div>
            </div>
            <div className="page__contacts">
                <div className="">
                    <h2 className="page__section-head">
                        {t("Stay in touch with us")}
                    </h2>
                    <ContactList />
                </div>
                <div>
                    <img src={imageService.outside2} alt="Outside" />
                    <div className="page__contacts-book-button">
                        <ButtonWithPrice text={t("Book a hut")} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
