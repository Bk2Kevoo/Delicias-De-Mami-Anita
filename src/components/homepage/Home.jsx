import React from "react";
import { Link } from "react-router-dom";
import MapComponent from "../MapComponent";

function Home() {
    return (
        <div className="Home">
  <div className="house-container">
    <div className="house-left">
      <img src="/images/left.jpg" alt="House Left Picture" />
    </div>
    <div className="house-right">
      <img src="/images/right.jpg" alt="House Right Picture" />
    </div>
    <div className="overlay">Prueba el sabor de Ecuador </div>
  </div>

  <div className="content-box">
    <h1 className="centered-menu">Menu</h1>
    <hr></hr>

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

      {/* <Link to="/desserts" className="menu-item">
        <img src="/images/fresasconcrema.jpg" alt="Desserts" />
        <h3>Postres (Desserts)</h3> 
        <p>Visitar</p>
      </Link> */}
    </div>
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
  <a href="tel:+2038647521" className="phone-number">203-864-7521</a>
  <MapComponent />
</div>

  </div>
</div>
    );
}

export default Home;
