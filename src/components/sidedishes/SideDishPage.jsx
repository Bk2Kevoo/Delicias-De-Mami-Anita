import { useOutletContext } from "react-router-dom"
import SideDishList from "./SideDishList";
import Header from "../header/Header";
import { useState } from "react";

function SideDishPage() {
    const { sidedishes } =useOutletContext();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (query) => setSearchQuery(query.toLowerCase());

    const filteredSideDishes = sidedishes.filter((sidedish) => {
        return sidedish.name.toLowerCase().includes(searchQuery)
    })

    return (
        <main>
            <Header onSearch={handleSearch}/>
            <SideDishList sidedishes={filteredSideDishes}/>
        </main>
    )
}

export default SideDishPage;