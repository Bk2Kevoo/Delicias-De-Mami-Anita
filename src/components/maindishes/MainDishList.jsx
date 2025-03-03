import React from "react";
import MainDishCard from "./MainDishCard";

function MainDishList({ maindishes }) {
    // Handle empty state
    if (maindishes.length === 0) {
        return <p>No main dishes available.</p>;
    }

    const mainDishCards = maindishes.map(maindish => (
        <li key={maindish.id}>
            <MainDishCard maindish={maindish} />
        </li>
    ));

    return (
        <ul className="maindish">
            {mainDishCards}
        </ul>
    );
}

export default MainDishList;
