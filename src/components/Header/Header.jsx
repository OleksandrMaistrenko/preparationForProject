import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import CartIcon from "../Cart/CartIcon/CartIcon";
//import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <header className="header">
      <NavLink className="logo" to="/about">
        Pizza Day
      </NavLink>

      <NavLink className="logo" to="/">
        Authorisation
      </NavLink>
      <NavLink className="logo" to="/menu">
        Menu
      </NavLink>
      <NavLink className="logo" to="/cart">
        <CartIcon />
      </NavLink>
    </header>
  );
};

export default Header;
