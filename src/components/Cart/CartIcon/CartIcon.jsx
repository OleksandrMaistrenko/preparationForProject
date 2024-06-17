import React from "react";
import "./CartIcon.css";
import cart from "../../../pictures/cart/cart.jpg";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const count = useSelector((state) => state.cart.totalCount);

  return (
    <div className="item">
      <button className="cart" id="cart">
        <img className="cart__image" src={cart} alt="Cart" />
        <div className="cart__num" id="cart_num">
          {count}
        </div>
      </button>
    </div>
  );
};

export default CartIcon;
