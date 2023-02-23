import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { BASE_URL, ROUTES } from "../shared/constants/routerPaths";
import AboutPage from "./About/AboutPage";
import BookingPage from "./Booking/BookingPage";
import ErrorPage from "./ErrorPage/ErrorPage";
import FAQPage from "./FAQ/FAQPage";
import HomePage from "./Home/HomePage";
import PaymentPage from "./Payment/PaymentPage";
import RootPage from "./Root/RootPage";
import TheAreaPage from "./TheArea/TheAreaPage";
import TheHutPage from "./TheHut/TheHutPage";

const router = createBrowserRouter([
    {
        path: BASE_URL,
        element: RootPage(),
        errorElement: ErrorPage(),
        children: [
            {
                path: ROUTES.HOME,
                element: HomePage(),
            },
            {
                path: ROUTES.BOOKING,
                element: BookingPage(),
            },
            {
                path: ROUTES.PAYMENT,
                element: PaymentPage(),
            },
            {
                path: ROUTES.THE_HUT,
                element: TheHutPage(),
            },
            {
                path: ROUTES.THE_AREA,
                element: TheAreaPage(),
            },
            {
                path: ROUTES.ABOUT,
                element: AboutPage(),
            },
            {
                path: ROUTES.FAQ,
                element: FAQPage(),
            },
        ],
    },
]);

const Routing = () => {
    return <RouterProvider router={router} />;
};

export default Routing;
