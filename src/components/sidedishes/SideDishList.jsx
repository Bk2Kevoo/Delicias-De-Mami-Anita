import MapComponent from "../MapComponent";
import SideDishCard from "./SideDishCard";



function SideDishList({ sidedishes }) {
    if (sidedishes.length === 0) {
        return <p>No Side Dishes Avaliable.</p>
    }
    
    const sideDishCards = sidedishes.map(sidedish => (
        <li key={sidedish.id}>
            <SideDishCard sidedish={sidedish}/>
        </li>
    ))

    return (
        <div className="sidedish-grid">
            <ul className="sidedish">
                {sideDishCards}
            </ul>
            <div className="bottom-info">
            <h1>El Sabor De Ecuador - Authentic Ecuadorian Food</h1>
            <h2>
                <a 
                href="https://maps.app.goo.gl/u1i91JqtZDAhzEPS8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="address-link"
                >
                96 Ochsner Place
                </a>
            </h2>
            <h3>Bridgeport, CT 06606</h3>
            <a href="tel:+12038647521" className="phone-number">203-864-7521</a>
            <MapComponent />
            </div>
        </div>
    )
}

export default SideDishList;