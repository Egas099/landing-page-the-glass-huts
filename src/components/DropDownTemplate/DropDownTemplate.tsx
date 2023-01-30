import { FC, PropsWithChildren } from "react";
import { icons } from "../../api/icons";
import Image from "../Image/Image";
import "./styles.scss";

type Props = {
    summary: string;
};

const FAQDetails: FC<PropsWithChildren<Props>> = ({ summary, children }) => {
    return (
        <details className="drop-down-template">
            <summary className="drop-down-template__summary">
                {summary}
                <div className="drop-down-template__summary-icon">
                    <Image src={icons.arrowDown} width={"20px"} />
                </div>
            </summary>
            <div className={"drop-down-template__content"}>{children}</div>
        </details>
    );
};

export default FAQDetails;
