import { icons } from "../../api/icons";
import { images } from "../../api/images";
import Button from "../../components/Button/Button";
import ContactForm, {
    ContactFormFields,
} from "../../components/ContactForm/ContactForm";
import Contacts from "../../components/Contacts/Contacts";
import Image from "../../components/Image/Image";
import PanoramaWithContent from "../../components/PanoramaWithContent/PanoramaWithContent";
import "./styles.scss";

const AboutPage = () => {
    const handleSubmit = (form: ContactFormFields) => {
        console.log(form);
    };

    return (
        <div className="about-page">
            <section className="about-page__panorama">
                <PanoramaWithContent
                    imageSource={images.peopleInside}
                    maskColor="var(--Grey-1)"
                    maskOpacity={0.6}
                >
                    <h1 className="about-page__panorama-head">About Us</h1>
                    <div className="about-page__panorama-buttons">
                        <Button text="get directions" type="transparent" />
                        <Button text="get directions" type="transparent" />
                    </div>
                </PanoramaWithContent>
            </section>
            <div className="about-page__section">
                <Image src={images.road2} height="100%" />
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
                <div className="about-page__collage-images">
                    <Image src={images.hutPicture} height="100%" />
                    <div className="about-page__collage-images-box">
                        <Image src={images.areaPanorama} height="100%" />
                    </div>
                    <Image src={images.womanPaintHut} height="100%" />
                    <div className="about-page__collage-text-box">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </div>
                    <Image src={images.hotTube} height="100%" />
                </div>
            </section>
            <section className="about-page__contacts">
                <h2 className="about-page__contacts-head">
                    Stay in touch with us
                </h2>
                <div className="about-page__contacts-box">
                    <Contacts />
                    <ContactForm onSubmit={handleSubmit} />
                </div>
            </section>
            <div className="about-page__from-love">
                <span className="about-page__from-love-text">
                    From Denmark, With love...
                </span>
                <div className="about-page__from-love-icon">
                    <Image src={icons.heart} />
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
