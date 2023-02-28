import { iconService } from "shared/api";

export const availableLanguages = [
    { code: "en", icon: iconService.greatBritain }, // fallback language
    { code: "de", icon: iconService.germany },
    { code: "dk", icon: iconService.denmark },
    { code: "ru", icon: iconService.russia },
];
