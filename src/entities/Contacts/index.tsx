import { iconService } from "shared/api";
import IconButton from "./IconButton/IconButton";
import "./styles.scss";

const email = "info@theglasshuts.com";
const telephone = "+1 (234) 567 89 00";
const links = [
    {
        name: "Instagram",
        url: "https://www.instagram.com",
        iconSource: iconService.instagram,
    },
    {
        name: "Facebook",
        url: "https://facebook.com",
        iconSource: iconService.facebook,
    },
    {
        name: "Twitter",
        url: "https://twitter.com",
        iconSource: iconService.twitter,
    },
];

const Contacts = () => {
    return (
        <div className="contacts">
            <address>
                <p className="contacts__paragraph">Vesterborg, Denmark</p>
                <p className="contacts__paragraph">
                    <a href={`tel:${telephone}`}>{telephone}</a>
                    <br />
                    <a href={`mailto:${email}`}>{email}</a>
                </p>
            </address>
            <div className="contacts__icons">
                {links.map(({ iconSource, name, url }) => (
                    <IconButton
                        key={name}
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
