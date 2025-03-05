import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



const baseUrl = "http://localhost:6001/drinks"


function DrinksById () {
    const [drink, setDrinks] = useState(null);
    const { drinkId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${baseUrl}/${drinkId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Response Was not ok")
                }
                return response.json();
            })
            .then((data) => setDrinks(data))
            .catch((error) => console.error("Fetch error:", error))
    }, [drinkId]);
    

    if (!drink) {
        return <h2>Loading...</h2>
    }

    const { image, name, price, description } = drink;

    return (
        <div className="specific-card-grid">
        <div className="specific-card" data-testid="maindish-item">
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
    )
};

export default DrinksById;