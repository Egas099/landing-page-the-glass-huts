import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import "./styles.scss";
import {
    additionalServiceModel,
    AdditionalServiceRadio,
} from "entities/additionalService";

const Form = () => {
    const { t } = useTranslation();
    const { additionalServicesStore: store } = additionalServiceModel;

    const handleServiceToggle = useCallback(
        (serviceId: number) => {
            store.toggleService(serviceId);
        },
        [store]
    );
    const handleOptionSelect = useCallback(
        (serviceId: number, optionId: number) => {
            store.selectOption(serviceId, optionId);
        },
        [store]
    );

    return (
        <section className="additional-services-form">
            <h2 className="additional-services-form__head">
                {t("Choose Additional Services")}
            </h2>
            {store.additionalServices.map((service, index) => (
                <AdditionalServiceRadio
                    key={index}
                    service={service}
                    onServiceSelect={handleServiceToggle}
                    onOptionSelect={handleOptionSelect}
                    isServiceSelected={service.selected}
                    selectedOption={service.selectedOption}
                />
            ))}
        </section>
    );
};

export const AdditionalServicesForm = observer(Form);
