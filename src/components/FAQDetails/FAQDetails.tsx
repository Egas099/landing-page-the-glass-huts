import { FC, PropsWithChildren } from "react";
import { icons } from "../../api/icons";
import Image from "../Image/Image";
import "./styles.scss";

type Props = {
    summary: string;
};

const FAQDetails: FC<PropsWithChildren<Props>> = ({ summary, children }) => {
    return (
        <details className="faq-details">
            <summary className="faq-details__summary">
                {summary}
                <div className="faq-details__summary-icon">
                    <Image src={icons.arrowDown} width={"20px"} />
                </div>
            </summary>
            <div className={"faq-details__content"}>{children}</div>
        </details>
    );
};

export default FAQDetails;
