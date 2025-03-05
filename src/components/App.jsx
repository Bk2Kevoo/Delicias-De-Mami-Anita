import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom"; // use 'react-router-dom' instead of 'react-dom'
import ScrollToTop from "./ScrollToTop";

function App() {
    const [maindishes, setMaindishes] = useState([]);
    const [sidedishes, setSidedishes] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [desserts, setDesserts] = useState([]);

    // Main Dishes
    useEffect(() => {
        const fetchMaindishes = async () => {
            try {
                const response = await fetch("https://delicias-de-mami-anita.onrender.com/maindishes");
                const data = await response.json();
                setMaindishes(data);
            } catch (error) {
                console.log("Error", error);
            }
        };

        fetchMaindishes();
    }, []);

    // Side Dishes
    useEffect(() => {
        const fetchSidedishes = async () => {
            try {
                const response = await fetch("https://delicias-de-mami-anita.onrender.com/sidedishes");
                const data = await response.json();
                setSidedishes(data);
            } catch (error) {
                console.log("Error", error);
            }
        };

        fetchSidedishes();
    }, []);

    // Drinks
    useEffect(() => {
        const fetchDrinks = async () => {
            try {
                const response = await fetch("https://delicias-de-mami-anita.onrender.com/drinks");
                const data = await response.json();
                setDrinks(data);
            } catch (error) {
                console.log("Error", error);
            }
        };

        fetchDrinks();
    }, []);

    // Desserts
    useEffect(() => {
        const fetchDesserts = async () => {
            try {
                const response = await fetch("https://delicias-de-mami-anita.onrender.com/desserts");
                const data = await response.json();
                setDesserts(data);
            } catch (error) {
                console.log("Error", error);
            }
        };

        fetchDesserts();
    }, []);


    return (
        <div>
            <ScrollToTop />
            <Header /> 
            <Outlet context={{ maindishes, sidedishes, drinks, desserts }} />
        </div>
    );
}

export default App;
