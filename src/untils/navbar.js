import React from "react";

import Generic from "../components/Geniric/Geniric";
// import HomePage from "../pages/Home";
// import PropertiesPage from "../pages/Properties";
// import SelectedHouse from "../components/SelectedHouse";
// import SignIning from "../pages/SignIn";
// import Profile from "../components/Profile";
// import Register from "../pages/Register";
// import AddProperties from "../pages/AddPropery";
// import Sitebar from "../components/Sitebar";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    element: <Generic />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: "Properties",
    path: "/properties",
    element: <Generic />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    element: <Generic />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: "Sign in",
    path: "/signin",
    element: <Generic />,
    search: "?",
    hidden: true,
    useParams: true,
    private: false,
  },
  {
    id: 5,
    title: "Register",
    path: "/register",
    element: <Generic />,
    search: "?",
    hidden: true,
    useParams: true,
    private: false,
  },
  {
    id: 6,
    title: "Myproperties",
    path: "/properties/profile",
    element: <Generic />,
    search: "?",
    useParams: true,
    hidden: true,
    private: false,
  },
  {
    id: 7,
    title: "Selected House",
    path: "/properties/:id",
    element: <Generic />,
    search: "?",
    useParams: true,
    hidden: true,
    private: false,
  },
  {
    id: 8,
    title: "Add new House",
    path: "/profile/add",
    element: <Generic />,
    search: "?",
    useParams: true,
    hidden: true,
    private: false,
  },
  {
    id: 9,
    title: "Add new House",
    path: "/profile/add/:id",
    element: <Generic />,
    search: "?",
    useParams: true,
    hidden: true,
    private: false,
  },
  {
    id: 10,
    title: "Home",
    path: "/sidebar",
    element: <Generic />,
    search: "?",
    useParams: false,
    hidden: true,
    private: false,
  },
];
