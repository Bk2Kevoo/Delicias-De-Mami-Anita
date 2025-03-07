import { useContext, useState } from "react";
import { AppContext } from "../App"; 
import Header from "../header/Header";
import DrinksList from "./DrinksList";

function DrinksPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [data, error] = useContext(AppContext); 
    const { drinks } = data; 

    const handleSearch = (query) => setSearchQuery(query.toLowerCase());

    const filteredDrinks = drinks.filter((drink) => {
        return drink.name.toLowerCase().includes(searchQuery);
    });

    return ( 
        <main>
            <Header onSearch={handleSearch}/>
            <DrinksList drinks={filteredDrinks}/>
        </main>
    );
}

export default DrinksPage;
