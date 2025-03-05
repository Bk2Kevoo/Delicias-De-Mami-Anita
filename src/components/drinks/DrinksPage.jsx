import Header from "../header/Header";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import DrinksList from "./DrinksList"

function DrinksPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const { drinks } = useOutletContext();

    const handleSearch = (query) => setSearchQuery(query.toLowerCase());

    const filteredDrinks = drinks.filter((drink) => {
        return drink.name.toLowerCase().includes(searchQuery);
    });

    return ( 
        <main>
            <Header onSearch={handleSearch}/>
            <DrinksList drinks={filteredDrinks}/>
        </main>
    )
}

export default DrinksPage;