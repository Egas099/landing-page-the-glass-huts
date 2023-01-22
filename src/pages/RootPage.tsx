import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import HeaderBar from "../components/HeaderBar/HeaderBar";

const RootPage = () => {
    return (
        <>
            <HeaderBar />
            <Outlet />
            <Footer />
        </>
    );
};

export default RootPage;
