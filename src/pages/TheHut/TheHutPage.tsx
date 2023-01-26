import { images } from "../../api/images";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import PanoramaWithContent from "../../components/PanoramaWithContent/PanoramaWithContent";
import SectionWithTabs from "../../components/SectionWithTabs/SectionWithTabs";
import "./styles.scss";

const theOutsideSection = {
    sectionTitle: "The Outside",
    tabs: [
        {
            header: "Hot tube",
            paragraph:
                "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground.",
        },
        {
            header: "Electric car change",
            paragraph:
                "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen.",
        },
    ],
};
const theInsideSection = {
    sectionTitle: "The Inside",
    tabs: [
        {
            header: "Space",
            paragraph:
                "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
        },
        {
            header: "Kitchen",
            paragraph:
                "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
        },
        {
            header: "Bathroom",
            paragraph:
                "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
        },
    ],
};
const thePracticalitiesSection = {
    sectionTitle: "Practicalities",
    tabs: [
        {
            header: "Breakfast",
            paragraph:
                "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
        },
        {
            header: "Classic Dinner",
            paragraph:
                "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
        },
    ],
};

const TheHutPage = () => {
    return (
        <div className="hut-page">
            <div className="hut-page__panorama">
                <PanoramaWithContent
                    imageSource={images.insidePanorama}
                    maskColor="#333333"
                    maskOpacity={0.7}
                >
                    <h1 className="hut-page__panorama-head">The Hut</h1>
                </PanoramaWithContent>
            </div>
            <section className="hut-page__section">
                <ImageSlider
                    imagesSources={[
                        images.hotTube,
                        images.hutFromSide3,
                        images.hutFromSide2,
                        images.hutFromSide1,
                    ]}
                />
                <div className="right-section">
                    <SectionWithTabs {...theOutsideSection} />
                </div>
            </section>
            <section className="hut-page__section">
                <div className="left-section">
                    <SectionWithTabs {...theInsideSection} />
                </div>
                <ImageSlider
                    imagesSources={[
                        images.inside1,
                        images.inside3,
                        images.inside2,
                    ]}
                />
            </section>
            <section className="hut-page__section">
                <ImageSlider
                    imagesSources={[
                        images.breakfast1,
                        images.breakfast2,
                        images.dinner1,
                    ]}
                />
                <div className="right-section">
                    <SectionWithTabs {...thePracticalitiesSection} />
                </div>
            </section>
        </div>
    );
};

export default TheHutPage;
