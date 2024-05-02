import React from 'react';
import Home from "../pages/Home"
import Layout from "../layout"
import Login from "../pages/Login"
import Form from '../pages/Login/index'
import Urls from '../pages/Urls/index'
import Features from '../pages/Features/index'
import Pricing from '../pages/Pricing/index'
import Faqs from '../pages/Faqs/index'
import Analytics from '../pages/Analytics/index'

export const ROUTES = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home/>,
            },
            {
                path: "urls/",
                element: <Urls/>,
            },
            {
                path: "features/",
                element: <Features/>,
            },
            {
                path: "analytics/",
                element: <Analytics/>,
            },
            {
                path: "faq/",
                element: <Faqs/>,
            },
            {
                path: "pricing",
                element: <Pricing/>
            },
        ]
    },
    {
        path:"/login",
        elment: <Login/>,
        children: [
            {
                path: "",
                element: <Form/>,
            },
           
        ]
    }
]
