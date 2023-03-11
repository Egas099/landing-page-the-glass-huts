import { makeAutoObservable } from "mobx";
import { AdditionalServicesList } from "./constants";

export interface AdditionalService {
    id: number;
    name: string;
    price: number;
    options: OptionItem[];
}
interface OptionItem {
    id: number;
    name: string;
    caption: string;
}
export interface ServiceWithPrice {
    name: string;
    price: number;
}

const initialState = AdditionalServicesList.map((service) => ({
    ...service,
    selected: false,
    selectedOption: 1,
}));

export class AdditionalServicesStore {
    constructor() {
        makeAutoObservable(this);
    }
    additionalServices = initialState;

    private findServiceById(serviceId: number) {
        return this.additionalServices.find(
            (service) => service.id === serviceId
        );
    }
    toggleService(serviceId: number) {
        const service = this.findServiceById(serviceId);
        if (!service) throw new Error(`Service not found (${serviceId})`);

        service.selected = !service.selected;
    }
    selectOption(serviceId: number, optionId: number) {
        const service = this.findServiceById(serviceId);
        if (!service) throw new Error(`Service not found (${serviceId})`);

        if (service.selected && service.selectedOption === optionId) {
            service.selected = false;
        } else {
            service.selected = true;
            service.selectedOption = optionId;
        }
    }
    get selectedServices() {
        return this.additionalServices.filter((service) => service.selected);
    }
    get totalPrice() {
        return this.selectedServices.reduce((sum, item) => sum + item.price, 0);
    }
}

export const additionalServicesStore = new AdditionalServicesStore();
