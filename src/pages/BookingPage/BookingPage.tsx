import BookingWidget from "../../components/BookingWidget/BookingWidget";
import "./styles.scss";

const BookingPage = () => {
    return (
        <div className="booking-page">
            <div className="booking-page__section">
                <div className="booking-page__section-catalog"></div>
                <div className="booking-page__section-widget">
                    <BookingWidget />
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
