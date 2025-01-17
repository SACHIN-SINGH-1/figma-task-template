import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Task from "./pages/Task";

const ProjectRoutes = () => {

    let element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "*", element: <NotFound /> },
        {
            path: "figma-task-template",
            element: <Task />,
        },
    ]);

    return element;
};

export default ProjectRoutes;
