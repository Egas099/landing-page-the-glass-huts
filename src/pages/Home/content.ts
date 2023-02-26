import { iconService } from "shared/api";

export const introSection = {
    head: "Find peace in the Forest",
    paragraph: "Come and stay in out hut hotel near Mariager Fjord in Denmark",
};
export const theCabinsSection = {
    head: "The Cabins",
    paragraph:
        "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
};
export const theForestSection = {
    head: "The Forest",
    paragraph:
        "Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.",
};

export const facilities = [
    { iconSrc: iconService.fridge, caption: "Mini fridge" },
    { iconSrc: iconService.kitchen, caption: "Kitchenette" },
    { iconSrc: iconService.coffee_machine, caption: "Coffee machine" },
    {
        iconSrc: iconService.electric_tea_kettle,
        caption: "Electric tea kettle",
    },
    { iconSrc: iconService.parking, caption: "Parking" },
    { iconSrc: iconService.breathtaking_views, caption: "Breathtaking views" },
    { iconSrc: iconService.floor_heating, caption: "Floor heating" },
    { iconSrc: iconService.plug, caption: "230V" },
    { iconSrc: iconService.wifi, caption: "Wi-Fi" },
    { iconSrc: iconService.shower, caption: "Shower" },
    { iconSrc: iconService.flushing_toilets, caption: "Flushing toilets" },
    { iconSrc: iconService.bedding_and_towels, caption: "Bedding & towels" },
];
