import { FC } from "react";
import { ROUTES } from "shared/constants/routerPaths";
import RouterLink from "../RouterLink/RouterLink";
import "./styles.scss";

const NAV_BAR_LINKS = [
    { to: ROUTES.HOME, text: "Home" },
    { to: ROUTES.THE_HUT, text: "The Hut" },
    { to: ROUTES.THE_AREA, text: "The Area" },
    { to: ROUTES.BOOKING, text: "Booking" },
    { to: ROUTES.ABOUT, text: "About us" },
    { to: ROUTES.FAQ, text: "FAQ" },
];

interface Props {
    direction: "row" | "column";
}

const NavBar: FC<Props> = ({ direction }) => {
    return (
        <nav className={`nav-bar nav-bar_${direction}`}>
            {NAV_BAR_LINKS.map(({ to, text }) => (
                <RouterLink key={text} to={to} text={text} />
            ))}
        </nav>
    );
};

export default NavBar;
