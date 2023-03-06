import { FC } from "react";
import { useTranslation } from "react-i18next";
import { NAV_BAR_LINKS } from "widgets/Header/constants";
import RouterLink from "../RouterLink";
import "./styles.scss";

interface Props {
    direction: "row" | "column";
}

const NavBar: FC<Props> = ({ direction }) => {
    const { t } = useTranslation();

    return (
        <nav className={`nav-bar nav-bar_${direction}`}>
            {NAV_BAR_LINKS.map(({ to, text }) => (
                <RouterLink key={text} to={to} text={t(text)} />
            ))}
        </nav>
    );
};

export default NavBar;
