import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import BookingPage from "../pages/BookingPage";
import ErrorPage from "../pages/ErrorPage";
import FAQPage from "../pages/FAQPage";
import HomePage from "../pages/Home/HomePage";
import PaymentPage from "../pages/PaymentPage";
import RootPage from "../pages/RootPage";
import TheAreaPage from "../pages/TheArea/TheAreaPage";
import TheHutPage from "../pages/TheHut/TheHutPage";
import { ROUTES } from "./constants";

export const router = createBrowserRouter([
    {
        path: "",
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
