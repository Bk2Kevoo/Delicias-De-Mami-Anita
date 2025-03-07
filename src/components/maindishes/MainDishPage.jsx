import React, { useState } from "react";
import MainDishList from "./MainDishList";
import { useOutletContext } from "react-router-dom";
import Header from "../header/Header";

function MaindishPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const { maindishes } = useOutletContext();

    // Handle the search query change
    const handleSearch = (query) => setSearchQuery(query.toLowerCase());

    // Ensure maindishes is available before filtering
    if (!maindishes) {
        return <div>Loading...</div>; // Or any other loading indication
    }

    const filteredMainDishes = maindishes.filter((maindish) => {
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
