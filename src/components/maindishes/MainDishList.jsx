import React from "react";
import MainDishCard from "./MainDishCard";
import MapComponent from "../MapComponent";


function MainDishList({ maindishes }) {
    if (maindishes.length === 0) {
        return <p>No main dishes available.</p>;
    }

    const mainDishCards = maindishes.map(maindish => (
        <li key={maindish.id}>
            <MainDishCard maindish={maindish} />
        </li>
    ));

    return (
        <div className="maindish-grid">
            <ul className="maindish">
                {mainDishCards}
            </ul>
               <div className="bottom-info">
                <h1>El Sabor De Ecuador - Authentic Ecuadorian Food</h1>
                <h2>
                    <a 
                    href="https://maps.app.goo.gl/u1i91JqtZDAhzEPS8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="address-link"
                    >
                    96 Ochsner Place
                    </a>
                </h2>
                <h3>Bridgeport, CT 06606</h3>
                <a href="tel:+2038647521" className="phone-number">203-864-7521</a>
                <MapComponent />
                </div>
        </div>
    );
}

export default MainDishList;
