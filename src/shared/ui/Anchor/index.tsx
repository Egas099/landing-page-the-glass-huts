import { FC } from "react";
import "./styles.scss";

type Props = {
    id: string;
};

export const Anchor: FC<Props> = ({ id }) => {
    return <div className="anchor">
        <div id={id}></div>
    </div>;
};
