import { priceModel } from "entities/price";
import { makeAutoObservable } from "mobx";
import {
    DAY_IN_MS,
    MIN_GUEST,
    MAX_GUEST,
    MAX_BOOKING_PERIOD,
    MAX_BOOKING_DURATION,
    MAX_NIGHT_COUNT,
    MIN_NIGHT_COUNT,
} from "./constants";
import { fromInputDateValue, toInputDateValue } from "./lib";

export class BookingFormStore {
    constructor() {
        makeAutoObservable(this);
    }

    checkIn = this.minCheckInDate;
    checkOut = this.minCheckOutDate;
    guestCount = 1;

    changeCheckIn = (time: string) => {
        this.checkIn = time;
        const checkInTime = fromInputDateValue(time);

        if (this.nightCount <= MIN_NIGHT_COUNT) {
            this.checkOut = toInputDateValue(checkInTime + DAY_IN_MS);
        } else if (this.nightCount > MAX_NIGHT_COUNT) {
            this.checkOut = toInputDateValue(
                checkInTime + MAX_BOOKING_DURATION
            );
        }
    };
    changeCheckOut = (time: string) => {
        this.checkOut = time;
    };
    decreaseGuestCount = () => {
        this.guestCount = Math.max(this.guestCount - 1, MIN_GUEST);
    };
    increaseGuestCount = () => {
        this.guestCount = Math.min(this.guestCount + 1, MAX_GUEST);
    };
    get isMinGuest() {
        return this.guestCount === MIN_GUEST;
    }
    get isMaxGuest() {
        return this.guestCount === MAX_GUEST;
    }
    get minCheckInDate() {
        return toInputDateValue(Date.now() + DAY_IN_MS);
    }
    get maxCheckInDate() {
        return toInputDateValue(Date.now() + MAX_BOOKING_PERIOD);
    }
    get minCheckOutDate() {
        return toInputDateValue(fromInputDateValue(this.checkIn) + DAY_IN_MS);
    }
    get maxCheckOutDate() {
        return toInputDateValue(
            fromInputDateValue(this.checkIn) + MAX_BOOKING_DURATION
        );
    }
    get nightCount() {
        const timeDiff =
            fromInputDateValue(this.checkOut) -
            fromInputDateValue(this.checkIn);
        return Math.ceil(timeDiff / DAY_IN_MS);
    }
    get totalPrice() {
        return priceModel.priceStore.price * this.guestCount * this.nightCount;
    }
}

export const bookingStore = new BookingFormStore();
