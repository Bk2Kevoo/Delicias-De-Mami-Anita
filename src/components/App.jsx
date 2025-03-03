import React, { useEffect, useState } from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom"; // use 'react-router-dom' instead of 'react-dom'

function App() {
    const [maindishes, setMaindishes] = useState([]);
    const [sidedishes, setSidedishes] = useState([]);
    const [drinks, setDrinks] = useState([]);

    // Main Dishes
    useEffect(() => {
        const fetchMaindishes = async () => {
            try {
                const response = await fetch("http://localhost:6001/maindishes");
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
        const fetchSide = async () => {
            try {
                const response = await fetch("http://localhost:6001/sidedishes");
                const data = await response.json();
                setSidedishes(data);
            } catch (error) {
                console.log("Error", error);
            }
        };

        fetchSide();
    }, []);

    // Drinks
    useEffect(() => {
        const fetchDrinks = async () => {
            try {
                const response = await fetch("http://localhost:6001/drinks");
                const data = await response.json();
                setDrinks(data);
            } catch (error) {
                console.log("Error", error);
            }
        };

        fetchDrinks();
    }, []);

    return (
        <div>
            <Header /> 
            <Outlet context={{ maindishes, sidedishes, drinks }} />
        </div>
    );
}

export default App;
