import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../errorpage/Errorpage"
import App from "../App";
import Home from "../homepage/Home";
import MainDishById from "../maindishes/MainDishById";
import MaindishPage from "../maindishes/MainDishPage";
import SideDishPage from "../sidedishes/SideDishPage";
import SideDishById from "../sidedishes/SideDishById";
import DrinksPage from "../drinks/DrinksPage";
import DrinksById from "../drinks/DrinksById"


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
            {
                path: "/sidedishes",
                element: <SideDishPage />
            },
            {
                path: "/sidedishes/:sidedishId",
                element: <SideDishById />
            },
            {
                path: "/drinks",
                element: <DrinksPage />
            },
            {
                path: "/drinks/:drinkId",
                element: <DrinksById />
            }
        ]
    }
])

export default projectRouter;
