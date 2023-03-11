import { DiscountModel } from "entities/discount";
import { observer } from "mobx-react-lite";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button, InputField } from "shared/ui";
import "./styles.scss";

const Form = () => {
    const { t } = useTranslation();
    const { discountStore } = DiscountModel;

    const handleCoupon = useCallback(
        (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const form = e.target as unknown as HTMLFormElement;
            const coupon = Object.fromEntries(new FormData(form))
                .coupon.toString()
                .toLowerCase();
            discountStore.addDiscount(coupon);
            form.reset();
        },
        [discountStore]
    );

    return (
        <div>
            <form
                className="apply-coupon"
                id="apply-coupon"
                onSubmit={handleCoupon}
            >
                <InputField
                    required
                    name="coupon"
                    placeholder={t("Coupon Code")}
                />
                <Button text={t("apply")} formId="apply-coupon" />
            </form>
        </div>
    );
};

export const ApplyCoupon = observer(Form);
