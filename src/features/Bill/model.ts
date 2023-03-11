import { additionalServiceModel } from "entities/additionalService";
import { makeAutoObservable } from "mobx";

export class BillStore {
    constructor() {
        makeAutoObservable(this);
    }
    get additionalServicesBill() {
        return additionalServiceModel.additionalServicesStore.selectedServices.map(
            (service) => {
                const price = service.price;
                let selectedServiceName = service.options.find(
                    (option) => option.id === service.selectedOption
                )?.name;
                if (!selectedServiceName) {
                    selectedServiceName = service.name;
                }
                return { name: selectedServiceName, price };
            }
        );
    }
}

export const billStore = new BillStore();
