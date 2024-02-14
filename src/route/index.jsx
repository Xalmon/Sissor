import React from 'react';
import Layout from "../Layout";
import Login from "../pages/Login"
import Form from '../pages/Login/Form'

export const ROUTES = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home/>
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