import React, { FC } from "react";
import "./styles.scss";

type Props = {
    src: string;
    caption: string;
};

const IconWithCaption: FC<Props> = ({ src, caption }) => {
    return (
        <figure className="icon-with-caption">
            <img src={src} alt={caption} />
            <figcaption className="icon-with-caption__caption">
                {caption}
            </figcaption>
        </figure>
    );
};

export default IconWithCaption;
