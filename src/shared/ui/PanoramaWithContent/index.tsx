import { FC, PropsWithChildren } from "react";
import "./styles.scss";

type Props = {
    imageSource: string;
    maskOpacity?: number;
};

export const PanoramaWithContent: FC<PropsWithChildren<Props>> = ({
    imageSource,
    maskOpacity = 0,
    children,
}) => (
    <div className="panorama">
        <img
            className="panorama__background-image"
            src={imageSource}
            alt="Panorama"
        />
        <div
            className="panorama__image-mask"
            style={{ opacity: maskOpacity }}
        />
        {children}
    </div>
);
