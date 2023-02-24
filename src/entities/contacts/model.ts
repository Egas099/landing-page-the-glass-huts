import { iconService } from "shared/api";

export const contactsModel = {
    email: "info@theglasshuts.com",
    telephone: "+1 (234) 567 89 00",
    links: [
        {
            name: "Instagram",
            url: "https://www.instagram.com",
            iconSource: iconService.instagram,
        },
        {
            name: "Facebook",
            url: "https://facebook.com",
            iconSource: iconService.facebook,
        },
        {
            name: "Twitter",
            url: "https://twitter.com",
            iconSource: iconService.twitter,
        },
    ],
};
