import { useContext } from "react";
import { AppContext } from "../App";
import SideDishList from "./SideDishList";
import Header from "../header/Header";
import { useState } from "react";

function SideDishPage() {
    const [data, error] = useContext(AppContext); 
    const { sidedishes } = data; 
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => setSearchQuery(query.toLowerCase());

    const filteredSideDishes = sidedishes.filter((sidedish) => {
        return sidedish.name.toLowerCase().includes(searchQuery);
    });

    return (
        <main>
            <Header onSearch={handleSearch} />
            <SideDishList sidedishes={filteredSideDishes} />
        </main>
    );
}

export default SideDishPage;
