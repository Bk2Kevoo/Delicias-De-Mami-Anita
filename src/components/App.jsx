import React, { useEffect, useState, createContext, useMemo } from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";


export const AppContext = createContext();

function App() {
    const [data, setData] = useState({
        maindishes: [],
        sidedishes: [],
        drinks: [],
        desserts: [],
    });
    const [error, setError] = useState(null);

    const fetchData = async (url, key) => {
        const apiUrl = "https://delicias-de-mami-anita.onrender.com"; 
        try {
            const response = await fetch(`${apiUrl}${url}`);
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
        useEffect(() => {
        fetchData("/maindishes", "maindishes");
        fetchData("/sidedishes", "sidedishes");
        fetchData("/drinks", "drinks");
        fetchData("/desserts", "desserts");
        }, []);
        
    }, []); 

    const value = useMemo(() => [data, error], [data, error]); // Only recompute when data or error changes

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
