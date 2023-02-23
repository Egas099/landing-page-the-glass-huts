import { Outlet } from "react-router-dom";
import Footer from "widgets/Footer/Footer";
import Header from "widgets/Header/Header";

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
