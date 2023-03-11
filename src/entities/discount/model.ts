import { makeAutoObservable } from "mobx";
import { coupons } from "./constants";

class DiscountStore {
    constructor() {
        makeAutoObservable(this);
    }
    name = "";
    discount = 0;

    addDiscount(couponName: string) {
        const coupon = coupons[couponName];
        if (coupon) {
            this.discount = coupon.discount;
            this.name = coupon.name;
        }
    }
}

export const discountStore = new DiscountStore();
