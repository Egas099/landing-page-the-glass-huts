import BookingWidget from "../../components/BookingWidget/BookingWidget";
import RadioDetails from "../../components/RadioDetails/RadioDetails";
import "./styles.scss";

const BookingPage = () => {
    return (
        <div className="booking-page">
            <div className="booking-page__sections">
                <section className="booking-page__catalog">
                    <h2 className="booking-page__section-head booking-page__section-head-main">
                        Choose Additional Services
                    </h2>
                    {catalog.map((item, index) => (
                        <RadioDetails {...item} key={index} />
                    ))}
                </section>

                <section>
                    <h2 className="booking-page__section-head">Hut rules</h2>
                    <p className="booking-page__section-paragraph">
                        Check-in: 2:00 PM - 11:00 PM <br />
                        Checkout: 11:00 AM <br /> Not suitable for children and
                        infants <br /> No smoking <br /> No pets
                    </p>
                </section>

                <section>
                    <h2 className="booking-page__section-head">
                        Cancellation policy
                    </h2>
                    <p className="booking-page__section-paragraph">
                        Free cancellation until 1:00 PM on Mar 27 <br />
                        After that, cancel before 2:00 PM on Apr 1 and get a 50%
                        refund, minus the first night and service fee.
                    </p>
                </section>

                <section>
                    <h2 className="booking-page__section-head">
                        Important Information
                    </h2>
                    <p className="booking-page__section-paragraph">
                        You need to hike a steep hill to arrive at the glass
                        houses, it takes approx 20-30 minutes on a trail with
                        stairs and uneven ground.
                    </p>
                </section>
            </div>
            <aside>
                <BookingWidget />
            </aside>
        </div>
    );
};

export default BookingPage;

const catalog = [
    {
        summary: {
            header: "Fresh Breakfast",
            caption: "800kr",
        },
        details: [
            {
                header: "Classic Breakfast",
                caption:
                    "Bread, Coffee, milk, juice, and a selection of spreads + toppings.",
            },
        ],
    },
    {
        summary: {
            header: "Healthy Dinner",
            caption: "1.200kr",
        },
        details: [
            {
                header: "Classic Dinner",
                caption:
                    "Bread, Coffee, milk, juice, and a selection of spreads + toppings.",
            },
            {
                header: "Vegetarian stew",
                caption:
                    "Bread, Coffee, milk, juice, and a selection of spreads + toppings. ",
            },
            {
                header: "Vegetarian stew",
                caption:
                    "Bread, Coffee, milk, juice, and a selection of spreads + toppings.",
            },
        ],
    },
    {
        summary: {
            header: "Electric Car Charge",
            caption: "800kr",
        },
    },
];
