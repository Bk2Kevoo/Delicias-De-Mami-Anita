import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function MainDishCard({ maindish }) {
    const { id, name, image } = maindish;

    const [rating, setRating] = useState(() => {
        const savedRating = localStorage.getItem(`rating_${id}`);
        return savedRating ? parseFloat(savedRating) : 0; 
    });


    const ratingChanged = (newRating) => {
        setRating(newRating); 
        localStorage.setItem(`rating_${id}`, newRating); 

        console.log("Rating changed:", newRating);
    };

    // IF the webisite gets bigger and the rating starts changing massievely and alternative for this is using POST for the backend API


    // Optional: To simulate saving ratings to a backend (uncomment the below block if needed)
    // useEffect(() => {
    //     const saveRatingToServer = async () => {
    //         const response = await fetch('/api/save-rating', {
    //             method: 'POST',
    //             body: JSON.stringify({ id, rating }),
    //             headers: { 'Content-Type': 'application/json' },
    //         });
    //         // Handle server response
    //     };
    //     saveRatingToServer();
    // }, [rating]); // Trigger save when the rating changes

    return (
        <div className="main-dish-card" data-testid="maindish-item">
            <img
                src={image}
                alt={name}
                className="maindish-image"
                onError={(e) => { e.target.src = '/path/to/fallback/image.jpg'; }} // Fallback image
            />
            <div className="dish-info">
                <h3>{name}</h3>
                <ReactStars
                    count={5} 
                    onChange={ratingChanged} 
                    size={20} 
                    activeColor="#ffd700" 
                    value={rating} 
                />
            </div>
            <div className="details">
                <Link to={`/maindishes/${id}`}>
                    <button title={`View more about ${name}`}>View More</button>
                </Link>
            </div>
        </div>
    );
}

export default MainDishCard;
