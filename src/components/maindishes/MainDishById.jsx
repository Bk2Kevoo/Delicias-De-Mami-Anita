import React, { useEffect, useState } from "react"; 
import { useParams, useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:6001/maindishes";

function MainDishById() {
    const [maindish, setMainDish] = useState(null);
    const { maindishId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${baseUrl}/${maindishId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setMainDish(data))
            .catch((error) => console.error("Fetch error:", error));
    }, [maindishId]);

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
                <a href="tel:+2038647521" className="order-link">Order Now</a>
            </div>
        </div>
    </div>
    
    );
};

export default MainDishById;
