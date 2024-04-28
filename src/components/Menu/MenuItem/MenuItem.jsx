import React from "react";
import "./MenuItem.css";

const MenuItem = ({ item }) => {
  const { name, unitPrice, imageUrl, ingredients, soldOut } = item;
  function handleClick() {
    console.log("Added to cart");
  }
  return (
    <ul>
      <li className="pizza">
        <img
          src={imageUrl}
          className={soldOut ? "pizza__image" : "pizza_sold-out"}
          alt="Pizza"
        />
        <div className="pizza__info">
          <p className="pizza__name">{name}</p>
          <p className="pizza__ingredients">{ingredients.join(", ")}</p>
          <div className="pizza__actions">
            <p className="pizza__price">${unitPrice}</p>
            {soldOut && (
              <button onClick={handleClick} className="button">
                Add to cart
              </button>
            )}
          </div>
        </div>
      </li>
    </ul>
  );
};

export default MenuItem;
