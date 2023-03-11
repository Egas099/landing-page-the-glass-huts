import { makeAutoObservable } from "mobx";
import { additionalServiceModel } from "entities/additionalService";
import { DiscountModel } from "entities/discount";
import { BookingFormModel } from "features/BookingForm";

const { additionalServicesStore } = additionalServiceModel;

export class BillStore {
    constructor() {
        makeAutoObservable(this);
    }
    get additionalServicesBill() {
        return additionalServicesStore.selectedServices.map((service) => {
            const price = service.price;
            let selectedServiceName = service.options.find(
                (option) => option.id === service.selectedOption
            )?.name;
            if (!selectedServiceName) {
                selectedServiceName = service.name;
            }
            return { name: selectedServiceName, price };
        });
    }
    get totalBookingPrice() {
        return Math.ceil(
            (BookingFormModel.bookingStore.totalPrice +
                additionalServicesStore.totalPrice) *
            ((100 - DiscountModel.discountStore.discount) / 100)
        );
    }
}

export const billStore = new BillStore();
