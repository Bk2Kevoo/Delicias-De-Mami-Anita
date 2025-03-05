import { Link } from "react-router-dom";

function MainDishCard({ maindish }) {
    const { id, name, image } = maindish;


    return (
        <div className="main-dish-card" data-testid="maindish-item">
            <img
                src={image}
                alt={name}
                className="maindish-image"
                onError={(e) => { e.target.src = '/path/to/fallback/image.jpg'; }} 
            />
                <h3>{name}</h3>
            <div className="details">
                <Link to={`/maindishes/${id}`}>
                    <button className="view-more">View More</button>
                </Link>
            </div>
        </div>
    );
}

export default MainDishCard;
