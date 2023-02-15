import { FC, PropsWithChildren } from "react";
import Image from "../Image/Image";
import "./styles.scss";

type Props = {
    imageSource: string;
    maskOpacity?: number;
};

const PanoramaWithContent: FC<PropsWithChildren<Props>> = ({
    imageSource,
    maskOpacity = 0,
    children,
}) => {
    return (
        <div className="panorama">
            <div className="panorama__background-image">
                <Image src={imageSource} alt="Panorama" />
            </div>
            <div
                className="panorama__image-mask"
                style={{ opacity: maskOpacity }}
            />
            {children}
        </div>
    );
};

export default PanoramaWithContent;
