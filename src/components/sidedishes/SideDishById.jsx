import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const baseUrl = "https://delicias-de-mami-anita.onrender.com"; 


function SideDishById() {
    const [sidedish, setSideDish] = useState(null);
    const [error, setError] = useState(null);
    const { sidedishId } = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        if (sidedishId) {
            fetch(`${baseUrl}/sidedishes/${sidedishId}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Response was not ok");
                    }
                    return response.json();
                })
                .then((data) => setSideDish(data)) 
                .catch((error) => {
                    setError(error.message);  
                    console.error("Fetch error:", error);
                });
        }
    }, [sidedishId]);  

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    if (!sidedish) {
        return <h2>Loading...</h2>;
    }

    const { image, name, price, description } = sidedish;

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

export default SideDishById;
