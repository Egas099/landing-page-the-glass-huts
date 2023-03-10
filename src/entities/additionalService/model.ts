import { makeAutoObservable } from "mobx";

export interface AdditionalService {
    id: number;
    name: string;
    price: number;
    options: OptionItem[];
}

export interface OptionItem {
    id: number;
    name: string;
    caption: string;
}

export interface ServiceWithPrice {
    name: string;
    price: number;
}

export const LIST: AdditionalService[] = [
    {
        id: 1,
        name: "Fresh Breakfast",
        price: 800,
        options: [
            {
                id: 1,
                name: "Classic Breakfast",
                caption:
                    "Bread, Coffee, milk, juice, and a selection of spreads + toppings.",
            },
            {
                id: 2,
                name: "Classic Breakfast",
                caption:
                    "Bread, Coffee, milk, juice, and a selection of spreads + toppings.",
            },
        ],
    },
    {
        id: 2,
        name: "Healthy Dinner",
        price: 1200,
        options: [
            {
                id: 1,
                name: "Classic Dinner",
                caption:
                    "Bread, Coffee, milk, juice, and a selection of spreads + toppings.",
            },
            {
                id: 2,
                name: "Vegetarian stew",
                caption:
                    "Bread, Coffee, milk, juice, and a selection of spreads + toppings. ",
            },
            {
                id: 3,
                name: "Vegetarian stew",
                caption:
                    "Bread, Coffee, milk, juice, and a selection of spreads + toppings.",
            },
        ],
    },
    {
        id: 3,
        name: "Electric Car Charge",
        price: 800,
        options: [],
    },
];

const initialState = LIST.map((service) => ({
    ...service,
    selected: false,
    selectedOption: 1,
}));

export class AdditionalServicesStore {
    constructor() {
        makeAutoObservable(this);
    }
    additionalServices = initialState;

    findServiceById(serviceId: number) {
        return this.additionalServices.find(
            (service) => service.id === serviceId
        );
    }
    findOptionById(serviceId: number, optionId: number) {
        return this.additionalServices
            .find((service) => service.id === serviceId)
            ?.options.find((option) => option.id === optionId);
    }
    isServiceSelected(serviceId: number) {
        return Boolean(this.findServiceById(serviceId)?.selected);
    }
    findSelectedOption(serviceId: number) {
        return this.findServiceById(serviceId)?.selectedOption || 1;
    }
    toggleService(serviceId: number) {
        const service = this.findServiceById(serviceId);
        if (!service) throw new Error(`Service not found (${serviceId})`);

        service.selected = !service.selected;
    }
    selectOption(serviceId: number, optionId: number) {
        const service = this.findServiceById(serviceId);
        if (!service) throw new Error(`Service not found (${serviceId})`);

        if (service.selectedOption === optionId) {
            service.selected = false;
        } else {
            service.selected = true;
            service.selectedOption = optionId;
        }
    }
    get selectedServices() {
        return this.additionalServices.filter((service) => service.selected);
    }
    get bill() {
        return this.selectedServices
            .map((service) => {
                const price = service.price;
                let selectedServiceName = this.findOptionById(
                    service.id,
                    service.selectedOption
                )?.name;
                if (!selectedServiceName) {
                    selectedServiceName = service.name;
                }
                if (selectedServiceName && price) {
                    return { name: selectedServiceName, price };
                }
                return undefined;
            })
            .filter((item): item is ServiceWithPrice => item !== undefined);
    }
    get totalPrice() {
        return this.selectedServices.reduce((sum, item) => sum + item.price, 0);
    }
}

export const additionalServicesStore = new AdditionalServicesStore();
