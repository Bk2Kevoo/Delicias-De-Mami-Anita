import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const baseUrl = process.env.REACT_APP_API_BASE_URL + "/sidedishes";

function SideDishById() {   

    const [sidedish, setSideDish] = useState(null);
    const { sidedishId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${baseUrl}/${sidedishId}`)
        .then((response) => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => setSideDish(data))
        .catch((error) => console.error("Fetch error:", error))
    }, [sidedishId]);

    if(!sidedish) {
        return <h2>Loading../</h2>
    }

    const { id, image, name, price, description } = sidedish;

    return(
        <div className="sidedishid-card-grid">
            <div className="sidedishid-card" data-testid="sidedish-item">
                <img src={image} alt={name}/>
                <h3>{name}</h3>
                <p>{description}</p>
                <p className="price-sidedish">Price: ${price}</p>
                <div className="button-container">
                    <button onClick={() => navigate("/sidedishes")}>Back To Menu </button>
                    <a href="tel:+2038647521" className="order-link">Order Now</a>
                </div>
            </div>
        </div>
    )
}

export default SideDishById;