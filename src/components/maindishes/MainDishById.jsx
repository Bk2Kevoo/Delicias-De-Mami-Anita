import React, { useEffect, useState } from "react"; 
import { useParams, useNavigate } from "react-router-dom";

const baseUrl = "https://delicias-de-mami-anita.onrender.com"; 
// const baseUrl = "http://localhost:3000";


function MainDishById() {
    const [maindish, setMainDish] = useState(null);
    const [error, setError] = useState(null);  
    const { maindishId } = useParams();  
    const navigate = useNavigate();

    useEffect(() => {
        if (maindishId) {
            fetch(`${baseUrl}/maindishes/${maindishId}`)  
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((data) => setMainDish(data))  
                .catch((error) => {
                    setError(error.message); 
                    console.error("Fetch error:", error);
                });
        }
    }, [maindishId]);  


    if (error) {
        return <h2>Error: {error}</h2>;
    }

    if (!maindish) {
        return <h2>Loading...</h2>;
    }

    const { id, image, name, price, description } = maindish;

    return (
        <div className="specific-card-grid">
            <div className="specific-card" data-testid="maindish-item">
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>{description}</p>
                <p className="price">Price: ${price}</p>
                <div className="button-container">
                    <button onClick={() => navigate("/maindishes")}>Back to Menu</button>
                    <a href="tel:+12038647521" className="order-link">Order Now</a>
                </div>
            </div>
        </div>
    );
}

export default MainDishById;
