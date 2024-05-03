import React from "react";
import MenuItem from "../MenuItem/MenuItem";

const MenuList = ({ menu }) => {
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} item={pizza} />
      ))}
    </ul>
  );
};

export default MenuList;
