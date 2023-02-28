import { Outlet } from "react-router-dom";
import { Header, Footer } from "widgets";

const RootPage = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default RootPage;
