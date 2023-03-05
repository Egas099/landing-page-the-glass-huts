export interface AdditionalService {
    id: number;
    name: string;
    price: string;
    options: OptionItem[];
}

export interface OptionItem {
    id: number;
    name: string;
    caption: string;
}

export const LIST: AdditionalService[] = [
    {
        id: 1,
        name: "Fresh Breakfast",
        price: "800kr",
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
        price: "1.200kr",
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
        price: "800kr",
        options: [],
    },
];
