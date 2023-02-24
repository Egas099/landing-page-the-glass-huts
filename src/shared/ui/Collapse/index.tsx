import { FC, PropsWithChildren } from "react";
import { iconService } from "shared/api";
import "./styles.scss";

type Props = {
    summary: string;
};

const Collapse: FC<PropsWithChildren<Props>> = ({ summary, children }) => {
    return (
        <details className="collapse">
            <summary className="collapse__summary">
                {summary}
                <div className="collapse__summary-icon">
                    <img
                        src={iconService.arrowDown}
                        width={"20px"}
                        alt="Arrow"
                    />
                </div>
            </summary>
            <div className={"collapse__content"}>{children}</div>
        </details>
    );
};

export default Collapse;
