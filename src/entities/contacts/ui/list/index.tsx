import { contactsModel } from "entities/contacts/model";
import { IconButton } from "shared/ui";
import "./styles.scss";
const { email, links, telephone } = contactsModel;

export const ContactList = () => {
    return (
        <div className="contact-list">
            <address>
                <p className="contact-list__paragraph">Vesterborg, Denmark</p>
                <p className="contact-list__paragraph">
                    <a href={`tel:${telephone}`}>{telephone}</a>
                    <br />
                    <a href={`mailto:${email}`}>{email}</a>
                </p>
            </address>
            <div className="contact-list__icons">
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
