import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { addUsers, removeUser } from "./store/userSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // Shows Login on "/"
  },
  {
    path: "/browse",
    element: <Browse />, // Shows Browse on "/browse"
  },
]);
const Body = () => {
  const dispatch = useDispatch();
 
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("users",user);
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUsers({ uid: uid, email: email, displayName: displayName, photoURL:photoURL })
        );
       
      } else {
        dispatch(removeUser());
       
      }
    });
  }, []);
  return <RouterProvider router={router} />;
};

export default Body;
