import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "../header/Header";

function ErrorPage() {
    const { error } = useRouteError(); 
    // Accessing routing error using useRouteError hook.

    return (
        <div>
            <Header /> 
            {/* // Displaying the error message to the user. */}
        </div>
    );
}

export default ErrorPage;