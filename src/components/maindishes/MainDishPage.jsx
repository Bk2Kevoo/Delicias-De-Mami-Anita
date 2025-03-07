import React, { useState, useContext } from "react";
import MainDishList from "./MainDishList";
import { AppContext } from "../App"; // Import the context
import Header from "../header/Header";

function MaindishPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [data, error] = useContext(AppContext);  // Get data from AppContext

    // Handle the search query change
    const handleSearch = (query) => setSearchQuery(query.toLowerCase());

    // Ensure maindishes is available before filtering
    if (error) {
        return <div>Error: {error}</div>; // Show error message if any
    }

    if (!data || !data.maindishes) {
        return <div>Loading...</div>; // Or any other loading indication
    }

    const filteredMainDishes = data.maindishes.filter((maindish) => {
        return maindish.name.toLowerCase().includes(searchQuery);
    });

    return (
        <main>
            <Header onSearch={handleSearch} />
            <MainDishList maindishes={filteredMainDishes} />
        </main>
    );
}

export default MaindishPage;
