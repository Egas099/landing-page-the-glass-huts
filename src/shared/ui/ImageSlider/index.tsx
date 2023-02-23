import { FC, useState, useCallback } from "react";
import { iconService } from "shared/api";
import "./styles.scss";

type Props = {
    imagesSources: string[];
};

export const ImageSlider: FC<Props> = ({ imagesSources }) => {
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
            <img
                className="image-slider__image"
                alt="Slider"
                src={imagesSources[currentImageIndex]}
                height="100%"
            />
            <div className="image-slider__control-panel">
                <div className="image-slider__nav-arrows">
                    <div className="image-slider__arrow" onClick={prevImage}>
                        <img
                            src={
                                isFirstImage
                                    ? iconService.leftArrowDisabled
                                    : iconService.leftArrow
                            }
                            alt={"left arrow"}
                        />
                    </div>
                    <div className="image-slider__arrow" onClick={nextImage}>
                        <img
                            src={
                                isLastImage
                                    ? iconService.rightArrow
                                    : iconService.rightArrowDisabled
                            }
                            alt={"right arrow"}
                        />
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

function parseNumberAsStringWithZeros(n: number) {
    return `${Math.floor(n / 10)}${n % 10}`;
}
