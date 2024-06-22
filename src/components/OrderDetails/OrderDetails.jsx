import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/CartSlices";

import axios from "axios";
import "./OrderDetails.css";

function OrderDetails() {
  const { id } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [purchaseCompleted, setPurchaseCompleted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(
          `https://react-fast-pizza-api.onrender.com/api/order/${id}`
        );
        setOrderDetails(response.data.data);
      } catch (error) {
        console.error("Error fetching order details", error);
      }
    };

    fetchOrderDetails();
  }, [id]);

  const handlePrioritize = async () => {
    try {
      const response = await axios.patch(
        `https://react-fast-pizza-api.onrender.com/api/order/${id}`,
        { priority: true }
      );
      const { data, status } = response.data;

      if (status === "success") {
        setOrderDetails(data);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error updating priority", error);
      alert("Something went wrong");
    }
  };

  const buy = async () => {
    try {
      await axios.patch(
        `https://react-fast-pizza-api.onrender.com/api/order/${id}`,
        { cart: [] }
      );
      setOrderDetails((prevDetails) => ({
        ...prevDetails,
        cart: [],
      }));
      setPurchaseCompleted(true);
    } catch (error) {
      alert("Something went wrong with another action");
    }
    dispatch(clearCart());
  };
  if (!orderDetails) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="order-details-container">
      {purchaseCompleted ? (
        <h1 className="success-message">
          You have successfully completed your purchase
        </h1>
      ) : (
        <>
          <h1 className="order-title">
            Order #{id} status: {orderDetails.status}
          </h1>
          <p className="delivery-time">
            Only {orderDetails.estimatedDelivery} minutes left 😃
          </p>
          <ul className="order-items">
            {orderDetails.cart.map((item, index) => (
              <li key={index} className="order-item">
                {item.quantity}× {item.name} ({item.unitPrice * item.quantity}€)
                <br />
                {item.ingredients}
              </li>
            ))}
          </ul>
          <p className="price-info">Price pizza: {orderDetails.orderPrice}€</p>
          {orderDetails.priorityPrice && (
            <p className="price-info">
              Price priority: {orderDetails.priorityPrice}€
            </p>
          )}
          <p className="total-price">
            To pay on delivery:{" "}
            {orderDetails.orderPrice + (orderDetails.priorityPrice || 0)}€
          </p>
          <div className="button-container">
            <button
              className={`priority-button ${
                orderDetails.priority ? "disabled" : ""
              }`}
              onClick={handlePrioritize}
              disabled={orderDetails.priority}
            >
              {orderDetails.priority ? "PRIORITY" : "PRIORITIZE"}
            </button>
            <button className="button" onClick={buy}>
              Pay
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default OrderDetails;
