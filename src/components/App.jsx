import React, { useEffect, useState, createContext, useMemo } from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

// Create context for sharing the data
export const AppContext = createContext();

function App() {
    const [data, setData] = useState({
        maindishes: [],
        sidedishes: [],
        drinks: [],
        desserts: [],
    });
    const [error, setError] = useState(null);

    // Function to fetch data
    const fetchData = async (url, key) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error fetching data from ${url}`);
            }
            const data = await response.json();
            setData((prevData) => ({
                ...prevData,
                [key]: data,
            }));
        } catch (err) {
            setError(err.message);
            console.error("Error fetching data:", err);
        }
    };

    useEffect(() => {
        fetchData("https://delicias-de-mami-anita.onrender.com/maindishes", "maindishes");
        fetchData("https://delicias-de-mami-anita.onrender.com/sidedishes", "sidedishes");
        fetchData("https://delicias-de-mami-anita.onrender.com/drinks", "drinks");
        fetchData("https://delicias-de-mami-anita.onrender.com/desserts", "desserts");
    }, []); // Empty array ensures this runs only once when the component mounts

    const value = [...data, error];

    return (
        <AppContext.Provider value={value}>
            <div>
                <ScrollToTop />
                <Header />
                <Outlet />
            </div>
        </AppContext.Provider>
    );
}

export default App;
