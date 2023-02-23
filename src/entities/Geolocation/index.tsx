import "./styles.scss";

const Geolocation = () => (
    <iframe
        className="geolocation"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8903.658453714073!2d10.208960774100518!3d56.089394190707196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5847ee2a51ccf39e!2zNTbCsDA1JzIxLjEiTiAxMMKwMTInNTIuMSJF!5e0!3m2!1sru!2sru!4v1674499247058!5m2!1sru!2sru"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="The Glass Huts"
    />
);

export default Geolocation;
