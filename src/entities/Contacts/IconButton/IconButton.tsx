import { FC } from "react";
import "./styles.scss";

type Props = {
    iconSource: string;
    alternativeText: string;
    link: string;
};

const IconButton: FC<Props> = ({ iconSource, link, alternativeText }) => {
    return (
        <a className="icon-button" href={link}>
            <img
                src={iconSource}
                alt={alternativeText}
                width="initial"
                height="20px"
            />
        </a>
    );
};

export default IconButton;
