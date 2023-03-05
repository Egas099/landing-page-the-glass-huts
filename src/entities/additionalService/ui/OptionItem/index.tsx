import { FC } from "react";
import RadioIcon from "../RadioIcon";
import "./styles.scss";

type Props = HeaderWithCaption & { onChange: () => void; checked: boolean };

const AdditionalServiceOption: FC<Props> = ({
    header,
    caption,
    checked,
    onChange,
}) => {
    return (
        <div className="additional-service-option">
            <RadioIcon isChecked={checked} onClick={onChange} />
            <section className="additional-service-option__header-with-caption">
                <div className="additional-service-option__header">{header}</div>
                <div className="additional-service-option__caption">{caption}</div>
            </section>
        </div>
    );
};

export default AdditionalServiceOption;
