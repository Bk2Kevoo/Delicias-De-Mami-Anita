import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const baseUrl = "https://delicias-de-mami-anita.onrender.com"; 


function DrinksById() {
    const [drink, setDrinks] = useState(null);
    const [error, setError] = useState(null);
    const { drinkId } = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        if (drinkId) {
            fetch(`${baseUrl}/drinks/${drinkId}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Response was not ok");
                    }
                    return response.json();
                })
                .then((data) => setDrinks(data)) 
                .catch((error) => {
                    setError(error.message);  
                    console.error("Fetch error:", error);
                });
        }
    }, [drinkId]);  

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    if (!drink) {
        return <h2>Loading...</h2>;
    }

    const { image, name, price, description } = drink;

    return (
        <div className="specific-card-grid">
            <div className="specific-card" data-testid="drink-item">
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>{description}</p>
                <p className="price">Price: ${price}</p>
                <div className="button-container">
                    <button onClick={() => navigate("/drinks")}>Back to Menu</button>
                    <a href="tel:+2038647521" className="order-link">Order Now</a>
                </div>
            </div>
        </div>
    );
}

export default DrinksById;
