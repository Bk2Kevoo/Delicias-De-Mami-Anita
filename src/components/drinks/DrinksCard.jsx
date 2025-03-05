import { Link } from "react-router-dom";

function DrinksCard({ drink }) {
    const { id, name, image } = drink;

    return (
        <div className="drinks-card" data-testid="drinks-item">
            <div className="content-box"> 
                <img src={image} alt={name} className="drinks-image" />
                <h3>{name}</h3>
                <div className="drink-details">
                    <Link to={`/drinks/${id}`}>
                        <button className="view-more">View More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DrinksCard;
