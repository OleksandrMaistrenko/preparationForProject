import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import pizzas from "../../../server/Data/Data";

const MenuList = () => {
  return (
    <ul>
      {pizzas.map((pizza) => (
        <MenuItem key={pizza.id} item={pizza} />
      ))}
    </ul>
  );
};

export default MenuList;
3;
