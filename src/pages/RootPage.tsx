import { Outlet } from "react-router-dom";
import HeaderBar from "../components/HeaderBar/HeaderBar";

const RootPage = () => {
    return (
        <>
            <HeaderBar />
            <Outlet />
        </>
    );
};

export default RootPage;
