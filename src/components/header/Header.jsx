import { NavLink } from "react-router-dom";
import logo from "/images/logo.png"

const Header = () => {
    return (
        <header>
            <NavLink to="/">
                <img src={logo} alt="Delicias De Mami Anita" className="logo" />
            </NavLink>
            <nav>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "active home-link" : "home-link"}>
                    Home
                </NavLink>

                <NavLink 
                    end 
                    to="/maindishes" 
                    className={({ isActive }) => isActive ? "active movies-link" : "movies-link"}>
                    Plato Principales (Maindishes)
                </NavLink>

                {/* Nav Link for add new movie
                <NavLink
                    end to="/movies/new"
                    className={({ isActive }) => isActive ? "active add-link" : "add-link"}>
                    Add New Movie
                </NavLink> */}
            </nav>
        </header>
    );
}

export default Header;
