import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../pages/Root';
import ErrorPage from '../pages/ErrorPage';
import Home from '../Home/Home';


export const router = createBrowserRouter([
  {
    path: "/",
   Component: Root,
   errorElement:<ErrorPage/>,
   children:[
    {
     index:true,
     loader:()=>fetch('bookData.json'),
     path:"/",
     Component:Home
    }
   ]
  },
]);