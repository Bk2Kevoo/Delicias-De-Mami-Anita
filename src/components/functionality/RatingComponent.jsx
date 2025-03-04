import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const RatingComponent = () => {
  // Step 1: Set the initial rating state to 0
  const [rating, setRating] = useState(0);

  // Step 2: Update the rating based on user selection
  const ratingChanged = (newRating) => {
    setRating(newRating); // Set the new rating to the state
    console.log("Rating changed:", newRating); // You can perform additional actions here (e.g., saving the rating to a server)
  }

  return (
    <div>
      <h2>Rate the dish</h2>
      <ReactStars
        count={5} // Number of stars
        onChange={ratingChanged} // Function to call when rating changes
        size={24} // Size of each star
        activeColor="#ffd700" // Color of the stars when selected
        value={rating} // Value to reflect the current rating
      />
      <p>Current Rating: {rating}</p> {/* Show the current rating */}
    </div>
  );
};

export default RatingComponent;
