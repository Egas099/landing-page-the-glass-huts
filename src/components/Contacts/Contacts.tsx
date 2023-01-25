import { icons } from "../../api/icons";
import IconButton from "./IconButton/IconButton";
import "./styles.scss";

const email = "info@theglasshuts.com";
const telephone = "+1 (234) 567 89 00";
const links = [
    {
        name: "Instagram",
        url: "https://www.instagram.com",
        iconSource: icons.instagram,
    },
    {
        name: "Facebook",
        url: "https://facebook.com",
        iconSource: icons.facebook,
    },
    {
        name: "Twitter",
        url: "https://twitter.com",
        iconSource: icons.twitter,
    },
];

const Contacts = () => {
    return (
        <div className="contacts">
            <h2 className="contacts__head">Stay in touch with us</h2>
            <address>
                <p className="contacts__paragraph">Vesterborg, Denmark</p>
                <p className="contacts__paragraph">
                    <a href={`mailto:${email}`}>{email}</a>
                    <br />
                    <a href={`tel:${telephone}`}>{telephone}</a>
                </p>
            </address>
            <div className="contacts__icons">
                {links.map(({ iconSource, name, url }) => (
                    <IconButton
                        alternativeText={name}
                        iconSource={iconSource}
                        link={url}
                    />
                ))}
            </div>
        </div>
    );
};

export default Contacts;