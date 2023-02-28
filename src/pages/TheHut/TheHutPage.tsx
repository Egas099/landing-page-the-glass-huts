import { imageService } from "shared/api";
import { PanoramaWithContent } from "shared/ui";
import { ImageSliderWithSectionWithTabs } from "widgets";
import "./styles.scss";

const TheHutPage = () => {
    return (
        <div className="hut-page">
            <div className="hut-page__panorama">
                <PanoramaWithContent
                    imageSource={imageService.insidePanorama}
                    maskOpacity={0.7}
                >
                    <h1 className="hut-page__panorama-head">The Hut</h1>
                </PanoramaWithContent>
            </div>
            <ImageSliderWithSectionWithTabs {...theOutsideSection} />
            <ImageSliderWithSectionWithTabs {...theInsideSection} />
            <ImageSliderWithSectionWithTabs {...thePracticalitiesSection} />
        </div>
    );
};

export default TheHutPage;

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
    imagesSources: [
        imageService.hotTube,
        imageService.outside3,
        imageService.outside2,
        imageService.outside1,
    ],
    sliderFromLeft: true,
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
    imagesSources: [
        imageService.inside1,
        imageService.inside3,
        imageService.inside2,
    ],
    sliderFromLeft: false,
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
    imagesSources: [
        imageService.breakfast1,
        imageService.breakfast2,
        imageService.dinner1,
    ],
    sliderFromLeft: true,
};
