import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

// Context API for sharing data across the app
import { createContext } from 'react';

// Create context for sharing the data
export const AppContext = createContext();

function App() {
    const [maindishes, setMaindishes] = useState([]);
    const [sidedishes, setSidedishes] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [error, setError] = useState(null);

    // Function to fetch data
    const fetchData = async (url, setter) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error fetching data from ${url}`);
            }
            const data = await response.json();
            setter(data);
        } catch (err) {
            setError(err.message); 
            console.error("Error fetching data:", err);
        }
    };

    // Main Dishes
    useEffect(() => {
        fetchData("https://delicias-de-mami-anita.onrender.com/maindishes", setMaindishes);
    }, []);

    // Side Dishes
    useEffect(() => {
        fetchData("https://delicias-de-mami-anita.onrender.com/sidedishes", setSidedishes);
    }, []);

    // Drinks
    useEffect(() => {
        fetchData("https://delicias-de-mami-anita.onrender.com/drinks", setDrinks);
    }, []);

    // Desserts
    useEffect(() => {
        fetchData("https://delicias-de-mami-anita.onrender.com/desserts", setDesserts);
    }, []);

    return (
        <AppContext.Provider value={{ maindishes, sidedishes, drinks, desserts, error }}>
            <div>
                <ScrollToTop />
                <Header />
                <Outlet />
            </div>
        </AppContext.Provider>
    );
}

export default App;
