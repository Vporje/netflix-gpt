import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/browse",
      element: <Browse />,
      errorElement: <Error />,
    },
    {
      path: "/error",
      errorElement: <Error />,
    },
  ]);

  

  return (
    <RouterProvider router={appRouter}>
      <div>
        <Login />
        <Browse />
      </div>
    </RouterProvider>
  );
};

export default Body;
