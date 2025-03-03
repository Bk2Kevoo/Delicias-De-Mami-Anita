import React, { useState } from "react";
import MainDishList from "./MainDishList";
import { useOutletContext } from "react-router-dom";
import Search from "../functionality/Search";
import SortByRating from "../functionality/SortByRating";
import Dropdowns from "../functionality/Dropdowns";

function MaindishPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedRating, setSelectedRating] = useState("All");
    const [sortByRating, setSortByRating] = useState(false);
    const { maindishes } = useOutletContext();

    const handleSearch = (query) => setSearchQuery(query.toLowerCase());

    const filteredMainDishes = maindishes.filter(maindish => {
        const matchesSearch = maindish.name.toLowerCase().includes(searchQuery);
        const matchesRating = selectedRating === "All" || maindish.rating === parseInt(selectedRating);
        return matchesSearch && matchesRating;
    });

    const sortedMaindishes = sortByRating 
        ? filteredMainDishes.sort((a, b) => b.rating - a.rating) 
        : filteredMainDishes;

    const handleSort = () => setSortByRating(!sortByRating);

    return (
        <main>
            <Search onSearch={handleSearch} />
            <SortByRating handleSort={handleSort} sort={sortByRating} />
            <MainDishList maindishes={sortedMaindishes} />
            <Dropdowns handleRatingChange={setSelectedRating}/>
        </main>
    );
}

export default MaindishPage;
