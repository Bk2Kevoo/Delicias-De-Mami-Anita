import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/images/logo.png";

const Header = ({ onSearch }) => {
    // const [searchInput, setSearchInput] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    // const handleInputChange = (e) => {
    //     const query = e.target.value;
    //     setSearchInput(query);
    //     onSearch(query.toLowerCase()); 
    // };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Close the menu when a link is clicked
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header>
            <NavLink to="/" onClick={closeMenu}>
                <img src={logo} alt="Delicias De Mami Anita" className="logo" />
            </NavLink>

            {/* Hamburger Icon */}
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            {/* Navigation */}
            <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "active home-link" : "home-link"}
                    onClick={closeMenu}
                >
                    Home
                </NavLink>

                <NavLink 
                    end 
                    to="/maindishes" 
                    className={({ isActive }) => isActive ? "active maindish-link" : "maindish-link"}
                    onClick={closeMenu}
                >
                    Plato Principales
                </NavLink>

                <NavLink 
                    to="/sidedishes"
                    className={({ isActive }) => isActive ? "active sidedish-link" : "sidedish-link"}
                    onClick={closeMenu}
                >
                    Aperitivos
                </NavLink>

                <NavLink
                    to="/drinks"
                    className={({ isActive }) => isActive ? "active bebidas-link" : "bebidas-link"}
                    onClick={closeMenu}
                >
                    Bebidas
                </NavLink>

                {/* Uncomment for search input if needed
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchInput} 
                    onChange={handleInputChange} 
                    className="search-input"
                /> */}
            </nav>
        </header>
    );
};

export default Header;