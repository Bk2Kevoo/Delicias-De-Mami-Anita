import React, { useEffect, useState } from "react"; // importing hooks
import { useParams, useNavigate } from "react-router-dom"; // importing routing hooks

const baseUrl = "http://localhost:6001/maindishes";

const MainDishById = () => {
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
        <div className="maindish-card" data-testid="maindish-item">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
            <p className="price">Price: ${price}</p>
            <button onClick={() => navigate("/maindishes")}>Back to Menu</button>
        </div>
    );
};

export default MainDishById;
