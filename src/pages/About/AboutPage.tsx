import { ContactList } from "entities/contacts";
import ContactForm from "features/ContactForm";
import { iconService, imageService } from "shared/api";
import { PanoramaWithContent, Button } from "shared/ui";
import "./styles.scss";

const AboutPage = () => {
    return (
        <div className="about-page">
            <section className="about-page__panorama">
                <PanoramaWithContent
                    imageSource={imageService.peopleInside}
                    maskOpacity={0.6}
                >
                    <h1 className="about-page__panorama-head">About Us</h1>
                    <div className="about-page__panorama-buttons">
                        <Button text="contact us" type="transparent" />
                        <Button text="read FAQ" type="transparent" />
                    </div>
                </PanoramaWithContent>
            </section>
            <div className="about-page__section">
                <img src={imageService.road2} height="100%" alt="Road" />
                <div className="about-page__section-text">
                    <p className="about-page__section-citation">
                        {aboutSection.citation}
                    </p>
                    <p className="about-page__section-paragraph">
                        {aboutSection.paragraph}
                    </p>
                </div>
            </div>
            <section className="about-page__collage">
                <h2 className="about-page__collage-head">
                    Lorem ipsum dolor sit amet, consectetur adipiscing...
                </h2>
                <div className="about-page__collage-images-grid">
                    <img src={imageService.hutPicture} alt="The hut" />
                    <img
                        className="about-page__collage-images-grid-wide"
                        src={imageService.areaPanorama}
                        alt="The area"
                    />
                    <img src={imageService.womanPaintHut} alt="Painting" />
                    <div className="about-page__collage-text-box">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </div>
                    <img src={imageService.hotTube} alt="Hot tube" />
                </div>
            </section>
            <section className="about-page__contacts">
                <h2 className="about-page__contacts-head">
                    Stay in touch with us
                </h2>
                <div className="about-page__contacts-box">
                    <ContactList />
                    <ContactForm />
                </div>
            </section>
            <div className="about-page__from-love">
                <span className="about-page__from-love-text">
                    From Denmark, With love...
                </span>
                <div className="about-page__from-love-icon">
                    <img src={iconService.heart} alt="Heart" />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

const aboutSection = {
    citation:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”",
    paragraph:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
};
