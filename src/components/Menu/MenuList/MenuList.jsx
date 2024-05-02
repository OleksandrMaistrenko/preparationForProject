import React, { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";
//import pizzas from "../../../server/Data/Data";
import { useEffect } from "react";

const MenuList = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getAllPizzas = async () => {
      try {
        const res = await fetch(
          "https://react-fast-pizza-api.onrender.com/api/menu"
        );
        if (!res.ok) {
          throw new Error("Failed to feth");
        }
        const data = await res.json();

        setMenu(data.data);
      } catch (e) {
        console.log(e.message);
      }
    };
    getAllPizzas();
  }, []);

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} item={pizza} />
      ))}
    </ul>
  );
};

export default MenuList;
