import React, { useState, useEffect } from "react";
import "./MenuItem.css";

const MenuItem = ({ item }) => {
  const { name, unitPrice, imageUrl, ingredients, soldOut } = item;
  const [count, setCount] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    if (count > 0) {
      setShowButtons(true);
    } else {
      setShowButtons(false);
    }
  }, [count]);

  function handleClick() {
    setCount(1);
  }

  function decreaseCount() {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  }

  function increaseCount() {
    setCount(count + 1);
  }

  function handleDelete() {
    setCount(0);
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

            {!showButtons ? (
              <button onClick={handleClick} className="button">
                Add to cart
              </button>
            ) : (
              <>
                <button className="button" onClick={decreaseCount}>
                  -
                </button>
                <div>{count}</div>
                <button className="button" onClick={increaseCount}>
                  +
                </button>
                <button className="button" onClick={handleDelete}>
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </li>
    </ul>
  );
};

export default MenuItem;
