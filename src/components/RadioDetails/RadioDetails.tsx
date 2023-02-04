import { FC, PropsWithChildren, useState } from "react";
import { icons } from "../../api/icons";
import Image from "../Image/Image";
import DetailItem from "./DetailItem/DetailItem";
import RadioIcon from "./RadioIcon/RadioIcon";
import "./styles.scss";

type Props = {
    summary: HeaderWithCaption;
    details?: HeaderWithCaption[];
};

const RadioDetails: FC<PropsWithChildren<Props>> = ({
    summary,
    details = [],
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const [checkedForm, setCheckedForm] = useState(
        details.length
            ? details.map((value, index) => ({ id: index, checked: false }))
            : [{ id: 0, checked: false }]
    );

    function handleSummaryChecked() {
        setCheckedForm((prev) => {
            const someRadioChecked = prev.some(({ checked }) => checked);
            if (someRadioChecked) {
                return prev.map((radio) => ({ ...radio, checked: false }));
            } else {
                return prev.map((radio, index) => ({
                    ...radio,
                    checked: index === 0 ? true : false,
                }));
            }
        });
    }

    function handleDetailChecked(index: number) {
        setCheckedForm((prevForm) =>
            prevForm.map((radio) => ({
                id: radio.id,
                checked: radio.id === index ? !radio.checked : false,
            }))
        );
    }

    const isSummaryChecked = checkedForm.some((radio) => radio.checked);

    return (
        <div className="radio-details">
            <div className="radio-details__summary">
                <div className="radio-details__summary-row">
                    <div onClick={handleSummaryChecked}>
                        <RadioIcon
                            checked={isSummaryChecked}
                            withBorder={false}
                        />
                    </div>
                    <section>
                        <h2 className="radio-details__summary-header">
                            {summary.header}
                        </h2>
                        <div className="radio-details__summary-caption">
                            {summary.caption}
                        </div>
                    </section>
                </div>
                {details.length ? (
                    <div
                        className="radio-details__summary-row"
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <span className="radio-details__summary-choose-span">
                            Choose your option
                        </span>
                        <div
                            className={`radio-details__summary-icon ${
                                isOpen
                                    ? "radio-details__summary-icon--opened"
                                    : ""
                            }`}
                        >
                            <Image src={icons.arrowDown} width={"20px"} />
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>
            {isOpen &&
                details.map((detail, index) => (
                    <div className="radio-details__item" key={index}>
                        <DetailItem
                            caption={detail.caption}
                            header={detail.header}
                            checked={checkedForm[index].checked}
                            onChange={() => handleDetailChecked(index)}
                        />
                    </div>
                ))}
        </div>
    );
};

export default RadioDetails;
