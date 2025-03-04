import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/images/logo.png";

const Header = ({ maindishes, onSearch }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchInput(query);
        onSearch(query.toLowerCase()); // Trigger the search in the parent component
    };

    return (
        <header>
            <NavLink to="/">
                <img src={logo} alt="Delicias De Mami Anita" className="logo" />
            </NavLink>
            <nav>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "active home-link" : "home-link"}>
                    Home
                </NavLink>

                <NavLink 
                    end 
                    to="/maindishes" 
                    className={({ isActive }) => isActive ? "active movies-link" : "movies-link"}>
                    Plato Principales (Maindishes)
                </NavLink>

                {/* Search Input */}
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchInput} 
                    onChange={handleInputChange} 
                    className="search-input"
                />
            </nav>
        </header>
    );
};

export default Header;
