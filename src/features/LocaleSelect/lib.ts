interface WithCode {
    code: string;
}

export const byCode =
    (countryCode: string) =>
    ({ code }: WithCode) =>
        countryCode === code;

export const omitCode =
    (countryCode: string) =>
    ({ code }: WithCode) =>
        countryCode !== code;
