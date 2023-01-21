import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import BookingPage from "../pages/BookingPage";
import ErrorPage from "../pages/ErrorPage";
import FAQPage from "../pages/FAQPage";
import HomePage from "../pages/HomePage";
import PaymentPage from "../pages/PaymentPage";
import RootPage from "../pages/RootPage";
import TheAreaPage from "../pages/TheAreaPage";
import TheHutPage from "../pages/TheHutPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: RootPage(),
        errorElement: ErrorPage(),
        children: [
            {
                path: "",
                element: HomePage(),
            },
            {
                path: "booking",
                element: BookingPage(),
            },
            {
                path: "payment",
                element: PaymentPage(),
            },
            {
                path: "the_hut",
                element: TheHutPage(),
            },
            {
                path: "the_area",
                element: TheAreaPage(),
            },
            {
                path: "about",
                element: AboutPage(),
            },
            {
                path: "FAQ",
                element: FAQPage(),
            },
        ],
    },
]);
