import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../errorpage/Errorpage"
import App from "../App";
import Home from "../homepage/Home";
import MainDishById from "../maindishes/MainDishById";
import MaindishPage from "../maindishes/MainDishPage";


const projectRouter =  createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/maindishes",
                element: <MaindishPage />
            },
            {
                path: "/maindishes/:maindishId",
                element: <MainDishById />
            },
        ]
    }
])

export default projectRouter;
