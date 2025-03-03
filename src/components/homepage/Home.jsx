import React from "react";
import { Link } from "react-router-dom";
import MapComponent from "../MapComponent";

function Home() {
    return (
        <div className="Home">
  <div className="house-container">
    <div className="house-left">
      <img src="/images/houseleft.jpg" alt="House Left Picture" />
    </div>
    <div className="house-right">
      <img src="/images/houseright.jpg" alt="House Right Picture" />
    </div>
    <div className="overlay">Prueba el sabor de Ecuador </div>
  </div>

  <div className="content-box">
    <h1 className="centered">Menu</h1>
    <hr></hr>
    {/* <p className="centered">Experience the flavors of Ecuador with our delicious dishes!</p> */}

    <div className="menu-grid">
      <Link to="/maindishes" className="menu-item">
        <img src="/images/encebollado.jpg" alt="Plato Principal" />
        <h3> Platos Principales (Main Dishes) </h3>
        <p>Visitar</p>
      </Link>

      <Link to="/sidedishes" className="menu-item">
        <img src="/images/salchipapa.jpg" alt="Guarniciones" />
        <h3>Aperitivos (Appetizers)</h3>
        <p>Visitar</p>
      </Link>

      <Link to="/drinks" className="menu-item">
        <img src="/images/inca.jpg" alt="Bebidas" />
        <h3>Bebidas (Drinks)</h3> 
        <p>Visitar</p>
      </Link>
    </div>
  </div>
    <div className="bottom-info">
      <h1>El Sabor De Ecuador - Authentic Ecuadorian Food</h1>
      <h2>96 Ochsner Place</h2>
      <h3>Bridgeport, CT</h3>
      {/* <p>203-</p> */}
      <MapComponent />
    </div>
</div>
    );
}

export default Home;
