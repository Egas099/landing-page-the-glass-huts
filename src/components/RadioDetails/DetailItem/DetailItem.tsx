import { FC } from "react";
import RadioIcon from "../RadioIcon/RadioIcon";
import "./styles.scss";

type Props = HeaderWithCaption & { onChange: () => void; checked: boolean };

const DetailItem: FC<Props> = ({ header, caption, checked, onChange }) => {
    return (
        <div className="detail-item">
            <div
                className={`detail-item__icon ${
                    checked ? "detail-item__icon--checked" : ""
                }`}
                onClick={() => onChange()}
            >
                <RadioIcon checked={checked} />
            </div>
            <section className="detail-item__header-with-caption">
                <div className="detail-item__header">{header}</div>
                <div className="detail-item__caption">{caption}</div>
            </section>
        </div>
    );
};

export default DetailItem;
