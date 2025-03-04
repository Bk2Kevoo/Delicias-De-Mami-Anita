import React, { useState, useEffect } from "react";
import MainDishList from "./MainDishList";
import { useOutletContext } from "react-router-dom";
import SortByRating from "../functionality/SortByRating";
import Dropdowns from "../functionality/Dropdowns";
import Header from "../header/Header";

function MaindishPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedRating, setSelectedRating] = useState("All");
    const [sortByRating, setSortByRating] = useState(false);
    const { maindishes } = useOutletContext();

    const getDishRating = (id) => {
        const rating = localStorage.getItem(`rating_${id}`);
        return rating ? parseFloat(rating) : 0; 
    };

    const filteredMainDishes = maindishes.filter((maindish) => {
        const matchesSearch = maindish.name.toLowerCase().includes(searchQuery.toLowerCase());
        const ratingFromLocalStorage = getDishRating(maindish.id);
        const matchesRating =
            selectedRating === "All" || ratingFromLocalStorage === parseInt(selectedRating);
        return matchesSearch && matchesRating;
    });

    const sortedMaindishes = sortByRating
        ? filteredMainDishes.sort((a, b) => {
              const ratingA = getDishRating(a.id);
              const ratingB = getDishRating(b.id);
              return ratingB - ratingA; 
          })
        : filteredMainDishes;

    const handleSearch = (query) => setSearchQuery(query.toLowerCase());
    const handleSort = () => setSortByRating(!sortByRating);

    return (
        <main>
            <Header onSearch={handleSearch} />
            <div className="sort-rating-container">
                <SortByRating handleSort={handleSort} sort={sortByRating} />
            </div>
            <MainDishList maindishes={sortedMaindishes} />
            <Dropdowns handleRatingChange={setSelectedRating} />
        </main>
    );
}

export default MaindishPage;
