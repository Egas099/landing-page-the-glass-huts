import { FC, PropsWithChildren } from "react";
import Image from "../Image/Image";
import "./styles.scss";

type Props = {
    imageSource: string;
};

const PanoramaWithContent: FC<PropsWithChildren<Props>> = ({
    imageSource,
    children,
}) => {
    return (
        <div className="panorama">
            <div className="panorama__background-image">
                <Image src={imageSource} alt="Panorama" />
            </div>
            {children}
        </div>
    );
};

export default PanoramaWithContent;
