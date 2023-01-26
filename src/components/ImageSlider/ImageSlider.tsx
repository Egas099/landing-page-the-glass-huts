import { FC, useState, useCallback } from "react";
import { icons } from "../../api/icons";
import Image from "../Image/Image";
import "./styles.scss";

type Props = {
    imagesSources: string[];
};

const ImageSlider: FC<Props> = ({ imagesSources }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = useCallback(() => {
        setCurrentImageIndex((prev) =>
            Math.min(prev + 1, imagesSources.length - 1)
        );
    }, [imagesSources.length]);
    const prevImage = useCallback(() => {
        setCurrentImageIndex((prev) => Math.max(prev - 1, 0));
    }, []);

    const isFirstImage = currentImageIndex < 1;
    const isLastImage = currentImageIndex < imagesSources.length - 1;

    return (
        <div className="image-slider">
            <div className="image-slider__image">
                <Image
                    alt="Image in slider"
                    src={imagesSources[currentImageIndex]}
                    height="100%"
                />
            </div>
            <div className="image-slider__control-panel">
                <div className="image-slider__nav-arrows">
                    <div className="image-slider__arrow" onClick={prevImage}>
                        {isFirstImage ? (
                            <Image src={icons.leftArrowDisabled} />
                        ) : (
                            <Image src={icons.leftArrow} />
                        )}
                    </div>
                    <div className="image-slider__arrow" onClick={nextImage}>
                        {isLastImage ? (
                            <Image src={icons.rightArrow} />
                        ) : (
                            <Image src={icons.rightArrowDisabled} />
                        )}
                    </div>
                </div>
                <div className="image-slider__progress">
                    <span className="image-slider__progress-label">
                        {parseNumberAsStringWithZeros(currentImageIndex + 1)}
                    </span>
                    <progress
                        value={currentImageIndex + 1}
                        max={imagesSources.length}
                    />
                    <span className="image-slider__progress-label">
                        {parseNumberAsStringWithZeros(imagesSources.length)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;

function parseNumberAsStringWithZeros(n: number) {
    return `${Math.floor(n / 10)}${n % 10}`;
}
