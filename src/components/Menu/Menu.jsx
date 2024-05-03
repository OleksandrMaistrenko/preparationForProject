import MenuList from "./MenuList/MenuList";
import React, { useState, useEffect } from "react";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getAllPizzas = async () => {
      try {
        const res = await fetch(
          "https://react-fast-pizza-api.onrender.com/api/menu"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch");
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
    <div>
      <MenuList menu={menu} />
    </div>
  );
};

export default Menu;
