import React, { FC } from "react";
import "./styles.scss";

type Props = {
    src: string;
    alt?: string;
    width?: string;
    height?: string;
};

const Image: FC<Props> = ({ src, alt = "", width = "100%", height = "initial" }) => {
    return (
        <img
            className="image"
            src={src}
            alt={alt}
            height={height}
            width={width}
        />
    );
};

export default Image;
