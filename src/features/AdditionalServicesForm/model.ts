import { additionalServiceModel } from "entities/additionalService";
import { makeAutoObservable } from "mobx";

interface AdditionalServicesForm {
    [serviceId: number]: {
        selected: boolean;
        option: number;
    };
}

const initialState = additionalServiceModel.LIST.reduce((form, service) => {
    form[service.id] = {
        selected: false,
        option: 1,
    };
    return form;
}, {} as AdditionalServicesForm);

export class AdditionalServicesStore {
    constructor() {
        makeAutoObservable(this);
    }
    form = initialState;

    toggleService(serviceId: number) {
        this.form[serviceId].selected = !this.form[serviceId].selected;
    }
    selectOption(serviceId: number, optionId: number) {
        if (this.form[serviceId].option === optionId) {
            this.form[serviceId].selected = false;
        } else {
            this.form[serviceId].selected = true;
            this.form[serviceId].option = optionId;
        }
    }
}

export const additionalServicesStore = new AdditionalServicesStore();
