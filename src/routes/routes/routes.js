import { createBrowserRouter } from "react-router-dom";
import { Account, Home, Login, Profile, Register } from "../../components";
import Main from "../../layouts/Main";

export const routes = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/home",
            element: <Home />,
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/register",
            element: <Register />,
         },
         {
            path: "/profile",
            element: <Profile />,
         },
         {
            path: "/account",
            element: <Account />,
         },
      ],
   },
]);
