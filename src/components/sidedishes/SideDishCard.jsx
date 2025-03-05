import { Link } from "react-router-dom";

function SideDishCard({ sidedish }) {
    const { id, name, image } = sidedish;

    return (
        <div className="side-dish-card" data-testid="sidedish-item">
            <div className="context-box">
                <img src={image} alt={name} className="sidedish-image" />
                <h3>{name}</h3>
                <div className="sidedish-details">
                    <Link to={`/sidedishes/${id}`}>
                        <button>View More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SideDishCard;
