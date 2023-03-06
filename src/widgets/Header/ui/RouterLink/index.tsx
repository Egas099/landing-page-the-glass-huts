import  { FC } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

type Props = {
    to: string;
    text: string;
};

const RouterLink: FC<Props> = ({ to, text }) => {
    return (
        <Link className="link" to={to}>
            {text.toUpperCase()}
        </Link>
    );
};

export default RouterLink;
