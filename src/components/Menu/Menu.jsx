import MenuList from "./MenuList/MenuList";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzas } from "../redux/slices/menuSlice";

const Menu = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.menu.pizzas);

  //const sortedPizzas = [...pizzas].sort((a, b) => b.soldOut - a.soldOut);

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);

  return (
    <div>
      <MenuList menu={pizzas} />
    </div>
  );
};

export default Menu;
