export function toInputDateValue(time: number) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
}
export function fromInputDateValue(date: string) {
    return new Date(date).getTime();
}

export function formateInputDateToView(dateFromInput: string) {
    return new Date(dateFromInput).toLocaleDateString()
}