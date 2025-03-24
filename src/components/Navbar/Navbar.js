import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar">
      <Link to="/">
        <h2 className="nav-logo">FoodApp</h2>
      </Link>
      <ul className="navbar-menu">
        <li>
          <Link
            to="/"
            onClick={() => setMenu("Home")}
            className={menu === "Home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#explore-menu"
            onClick={() => setMenu("Menu")}
            className={menu === "Menu" ? "active" : ""}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="#footer"
            onClick={() => setMenu("Contact")}
            className={menu === "Contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar-right">
        <img
          src={assets.search_icon}
          alt="search"
          className="navbar-search-icon"
        />
        <div className="navbar-cart-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
          </Link>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
