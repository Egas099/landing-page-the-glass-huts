import { FC } from "react";
import Image from "../../Image/Image";
import "./styles.scss";

type Props = {
    iconSource: string;
    alternativeText: string;
    link: string;
};

const IconButton: FC<Props> = ({ iconSource, link, alternativeText }) => {
    return (
        <a className="icon-button" href={link}>
            <Image
                src={iconSource}
                alt={alternativeText}
                width="initial"
                height="20px"
            />
        </a>
    );
};

export default IconButton;
