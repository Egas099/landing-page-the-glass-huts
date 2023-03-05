import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import "./styles.scss";
import {
    additionalServiceModel,
    AdditionalServiceRadio,
} from "entities/additionalService";
import { additionalServicesStore, AdditionalServicesStore } from "../model";

interface Props {
    store?: AdditionalServicesStore;
}
const Form: FC<Props> = ({ store = additionalServicesStore }) => {
    const { t } = useTranslation();

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
            {additionalServiceModel.LIST.map((service, index) => (
                <AdditionalServiceRadio
                    key={index}
                    service={service}
                    onServiceSelect={handleServiceToggle}
                    onOptionSelect={handleOptionSelect}
                    isServiceSelected={store.form[service.id].selected}
                    selectedOption={store.form[service.id].option}
                />
            ))}
        </section>
    );
};

export const AdditionalServicesForm = observer(Form);
