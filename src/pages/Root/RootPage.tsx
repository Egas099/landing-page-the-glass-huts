import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "widgets";

const RootPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default RootPage;
