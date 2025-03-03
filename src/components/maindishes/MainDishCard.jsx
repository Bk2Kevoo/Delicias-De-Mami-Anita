import React from "react";
import { Link } from "react-router-dom";

function MainDishCard({ maindish }) {
    const { id, name, image, description, likes, dislikes } = maindish;

    return (
        <div className="main-dish-card" data-testid="maindish-item">
            <img
                src={image}
                alt={name}
                className="maindish-image"
                onError={(e) => { e.target.src = '/path/to/fallback/image.jpg'; }} // Fallback image
            />
            <h3>{name}</h3>

            {/* Route To View More on the Certain Dish */}
            <div className="details">
                <Link to={`/maindishes/${id}`}>
                    <button title={`View more about ${name}`}>View More</button>
                </Link>
            </div>
        </div>
    );
}

export default MainDishCard;
