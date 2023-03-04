import { bookingStore } from "./model/bookingFormStore";
import { BookingForm as Form } from "./ui/Form";

export const BookingForm = () => <Form store={bookingStore}></Form>;
export { bookingStore } from "./model/bookingFormStore";
