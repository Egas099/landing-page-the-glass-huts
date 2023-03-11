import { PriceLabel } from "entities/price";
import { ApplyCoupon } from "features/ApplyCoupon";
import { Bill } from "features/Bill";
import { BookingForm } from "features/BookingForm";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui";
import "./styles.scss";

export const BookingWidget = () => {
    const { t } = useTranslation();

    return (
        <div className="booking-widget">
            <PriceLabel />
            <BookingForm />
            <div className="booking-widget__book-button">
                <Button text={t("Book")} />
            </div>
            <Bill />
            <ApplyCoupon />
        </div>
    );
};
