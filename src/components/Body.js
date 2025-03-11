import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,  // Shows Login on "/"
  },
  {
    path: "/browse",
    element: <Browse />, // Shows Browse on "/browse"
  },
]);

const Body = () => {
  return <RouterProvider router={router} />;
};

export default Body;
