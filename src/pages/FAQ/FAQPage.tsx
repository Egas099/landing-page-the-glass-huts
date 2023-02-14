import FAQDetails from "../../components/FAQDetails/FAQDetails";
import "./styles.scss";

const FAQPage = () => {
    return (
        <div className="faq-page">
            <div className="faq-page__list">
                <FAQDetails summary={"PRICES"}>
                    <p className="faq-page__paragraph">From €3.200 per night</p>
                </FAQDetails>
                <FAQDetails summary={"CANCELLATION POLICY"}>
                    <p className="faq-page__paragraph">
                        Cancellation four weeks prior = 100% refund
                    </p>
                    <p className="faq-page__paragraph">
                        Cancellation two weeks prior = 50% refund
                    </p>
                    <p className="faq-page__paragraph">
                        Cancellation later than two weeks = full payment
                    </p>
                </FAQDetails>
                <FAQDetails summary={"THE WALK UP TO GLASS HUT"}>
                    <p className="faq-page__paragraph">
                        You need to hike a steep hill to arrive at the
                        treehouses, it takes approx 20-30 minutes on a trail
                        with stairs and uneven ground.
                    </p>
                </FAQDetails>
                <FAQDetails summary={"CAPACITY"}>
                    <p className="faq-page__paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </FAQDetails>
                <FAQDetails summary={"PETS"}>
                    <p className="faq-page__paragraph">No pets</p>
                </FAQDetails>
                <FAQDetails summary={"CHECK-IN / CHECK-OUT"}>
                    <p className="faq-page__paragraph">
                        Check-in: 2:00 PM - 11:00 PM
                    </p>
                    <p className="faq-page__paragraph">Checkout: 11:00 AM</p>
                </FAQDetails>
            </div>
        </div>
    );
};

export default FAQPage;