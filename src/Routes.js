import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Task from "./pages/Task/index.jsx";

const ProjectRoutes = () => {

    let element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "*", element: <NotFound /> },
        {
            path: "/",
            element: <Task />,
        },
    ]);

    return element;
};

export default ProjectRoutes;
