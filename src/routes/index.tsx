import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/main-layout";
import Dashboard from "../pages/dashboard";
import Login from "../pages/login";
import Admines from "../pages/admins";
import Students from "../pages/students";
import Groups from "../pages/groups";
import Course from "../pages/courses";
import Payment from "../pages/payment";
import Profile from "../pages/profile";
import { PrivateRout } from "./private-rout";
import Teachers from "../pages/teachers";
import Menegers from "../pages/menegers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRout />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "/menegers",
            element: <Menegers />,
          },
          {
            path: "/admins",
            element: <Admines />,
          },

          {
            path: "/teachers",
            element: <Teachers />,
          },
          {
            path: "/students",
            element: <Students />,
          },
          {
            path: "/groups",
            element: <Groups />,
          },
          {
            path: "/courses",
            element: <Course />,
          },
          {
            path: "/payment",
            element: <Payment />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);