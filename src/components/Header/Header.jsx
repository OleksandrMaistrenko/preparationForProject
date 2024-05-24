import React from "react";
import Input from "../Input/Input";
import "./Header.css";
import { NavLink } from "react-router-dom";

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
      <NavLink className="logo" to="/ordernew">
        OrderNow
      </NavLink>

      <form>
        <Input placeholder="Search for the order #" />
      </form>
    </header>
  );
};

export default Header;
