import { makeAutoObservable } from "mobx";
import {
    DAY_IN_MS,
    MIN_GUEST,
    MAX_GUEST,
    MAX_BOOKING_PERIOD,
    MAX_BOOKING_DURATION,
} from "./constants";
import { fromInputDateValue, toInputDateValue } from "./lib";

export class BookingFormStore {
    constructor() {
        makeAutoObservable(this);
    }

    checkIn = toInputDateValue(Date.now());
    checkOut = toInputDateValue(Date.now() + 1000 * 3600 * 24);
    guestCount = 1;

    changeCheckIn = (time: string) => {
        this.checkIn = time;

        const checkInTime = fromInputDateValue(this.checkIn);
        const checkOutTime = fromInputDateValue(this.checkOut);
        if (checkInTime > checkOutTime) {
            this.checkOut = toInputDateValue(checkInTime + DAY_IN_MS);
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
        return toInputDateValue(
            fromInputDateValue(this.checkIn) + DAY_IN_MS * 2
        );
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
}

export const bookingStore = new BookingFormStore();