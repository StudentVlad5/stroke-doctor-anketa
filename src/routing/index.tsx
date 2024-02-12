import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "../view/layouts/AppLayout";
import { StartPage } from "../view/pages/StartPage";
import { FirstPage } from "../view/pages/FirstPage";
import { SecondPage } from "../view/pages/SecondPage";
import { ThirdPage } from "../view/pages/ThirdPage";
import {FourthPage} from "../view/pages/FourthPage";
import {FifthPage} from "../view/pages/FifthPage";
import {CheckIdProvider} from "../common/providers/CheckIdProvider";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <CheckIdProvider> <StartPage /> </CheckIdProvider>
            },
            {
                path: '/1',
                element: <CheckIdProvider> <FirstPage /> </CheckIdProvider>
            },
            {
                path: '/2',
                element: <CheckIdProvider> <SecondPage /> </CheckIdProvider>
            },
            {
                path: '/3',
                element: <CheckIdProvider> <ThirdPage /> </CheckIdProvider>
            },
            {
                path: '/4',
                element: <CheckIdProvider> <FourthPage /> </CheckIdProvider>
            },
            {
                path: '/5',
                element: <CheckIdProvider> <FifthPage /> </CheckIdProvider>
            }
        ]
    }
])
