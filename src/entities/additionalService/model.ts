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

export function getServiceById(serviceId: number) {
    return LIST.find((service) => service.id === serviceId);
}

export function getOptionById(serviceId: number, optionId: number) {
    return LIST.find((service) => service.id === serviceId)?.options.find(
        (option) => option.id === optionId
    );
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
