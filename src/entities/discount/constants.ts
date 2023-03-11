type DiscountPercent = number;
interface Discount {
    name: string;
    discount: DiscountPercent;
}

interface Coupons {
    [couponName: string]: Discount;
}

// TODO, WARN: the client must not know about coupons, the coupon must be sent to the server
export const coupons: Coupons = {
    first: {
        name: "First booking discount",
        discount: 10,
    },
    legacy: {
        name: "Legacy customer",
        discount: 5,
    },
    gold: {
        name: "Gold customer",
        discount: 30,
    },
};
