import { AdditionalService } from "entities/additionalService/model";
import { FC, PropsWithChildren, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { iconService } from "shared/api";
import useBoolean from "shared/lib/hooks/useBoolean";
import OptionItem from "../OptionItem";
import RadioIcon from "../RadioIcon";
import "./styles.scss";

type Props = {
    service: AdditionalService;
    onServiceSelect: (serviceId: number) => void;
    onOptionSelect: (serviceId: number, optionId: number) => void;
    isServiceSelected: boolean;
    selectedOption: number;
};

export const AdditionalServiceRadio: FC<PropsWithChildren<Props>> = ({
    service,
    onServiceSelect,
    onOptionSelect,
    isServiceSelected,
    selectedOption,
}) => {
    const { t } = useTranslation();
    const { value: isOptionsOpen, toggle: toggleIsOptionOpen } =
        useBoolean(false);

    const isOptionsAvailable = service.options.length || null;

    const isOptionSelected = useCallback(
        (optionId: number) => isServiceSelected && selectedOption === optionId,
        [isServiceSelected, selectedOption]
    );

    return (
        <div className="additional-service-radio">
            <div className="additional-service-radio__summary">
                <div className="additional-service-radio__summary-row">
                    <RadioIcon
                        onClick={() => onServiceSelect(service.id)}
                        isChecked={isServiceSelected}
                        withBorder={false}
                    />
                    <section>
                        <h2 className="additional-service-radio__summary-header">
                            {service.name}
                        </h2>
                        <div className="additional-service-radio__summary-caption">
                            {service.price}
                        </div>
                    </section>
                </div>
                {isOptionsAvailable && (
                    <div
                        className="additional-service-radio__summary-row"
                        onClick={toggleIsOptionOpen}
                    >
                        <span className="additional-service-radio__summary-choose-span">
                            {t("Choose your option")}
                        </span>
                        <img
                            data-isOpened={isOptionsOpen}
                            className="additional-service-radio__summary-icon"
                            src={iconService.arrowDown}
                            alt="Arrow"
                        />
                    </div>
                )}
            </div>
            {isOptionsOpen && (
                <div className="additional-service-radio__option-list">
                    {service.options.map((option, index) => (
                        <OptionItem
                            key={index}
                            header={option.name}
                            caption={option.caption}
                            checked={isOptionSelected(option.id)}
                            onChange={() =>
                                onOptionSelect(service.id, option.id)
                            }
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
