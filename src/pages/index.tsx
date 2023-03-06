import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { BASE_URL, ROUTES } from "../shared/constants/routerPaths";
import AboutPage from "./About";
import BookingPage from "./Booking";
import ErrorPage from "./ErrorPage";
import FAQPage from "./FAQ";
import HomePage from "./Home";
import PaymentPage from "./Payment";
import RootLayout from "./RootLayout";
import TheAreaPage from "./TheArea";
import TheHutPage from "./TheHut";

const router = createBrowserRouter([
    {
        path: BASE_URL,
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: ROUTES.HOME,
                element: <HomePage />,
            },
            {
                path: ROUTES.BOOKING,
                element: <BookingPage />,
            },
            {
                path: ROUTES.PAYMENT,
                element: <PaymentPage />,
            },
            {
                path: ROUTES.THE_HUT,
                element: <TheHutPage />,
            },
            {
                path: ROUTES.THE_AREA,
                element: <TheAreaPage />,
            },
            {
                path: ROUTES.ABOUT,
                element: <AboutPage />,
            },
            {
                path: ROUTES.FAQ,
                element: <FAQPage />,
            },
        ],
    },
]);

const Routing = () => {
    return <RouterProvider router={router} />;
};

export default Routing;
