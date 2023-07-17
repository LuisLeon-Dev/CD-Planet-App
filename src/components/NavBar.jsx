import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/logo.png";

/*Bootstrap component */
import "bootstrap/dist/css/bootstrap.css";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <div className="nav">
      <nav className="navBar">
        <Link to="/" className="navBar__logo">
          <img src={logo} alt="logo de la marca" className="navBar__logo" />
        </Link>

        <ul className="navBar__options">
          <li>
            <Link to="/allproducts/">All Products</Link>
          </li>

          <NavDropdown title="Categories" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/category/popRock">
              Pop Rock
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/popPunk">
              Pop Punk
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/category/punkRock">
              Punk Rock
            </NavDropdown.Item>
          </NavDropdown>

          {/* <li>
            <Link to="/category/">Categories</Link>
          </li> */}
          <li>
            <Link to="/aboutus/">About Us</Link>
          </li>
        </ul>

        <CartWidget />
      </nav>
    </div>
  );
};

export default NavBar;
