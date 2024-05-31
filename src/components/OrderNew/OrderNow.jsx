import React from "react";
import { useForm } from "react-hook-form";
import "./OrderNow.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OrderNow = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const orderData = {
      address: data.address,
      customer: data.username,
      phone: data.phone,
      priority: data.priority || false,
      position: "",
      cart: [
        {
          name: "Pizza Margherita",
          pizzaId: "1",
          quantity: 1,
          totalPrice: 39.0,
          unitPrice: 39.0,
        },
      ],
    };

    try {
      const response = await axios.post(
        "https://react-fast-pizza-api.onrender.com/api/order",
        orderData
      );

      const { status, data: responseData } = response.data;

      if (status === "success") {
        navigate(`/order/${responseData.id}`, { state: responseData });
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error creating order", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="order-form-container">
      <h2>Ready to order? Let's go!</h2>
      <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="username">First Name</label>
          <input
            id="username"
            type="text"
            {...register("username", { required: "First Name is required" })}
          />
          {errors.username && (
            <p className="error-message">{errors.username.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\+?\d{10,14}$/,
                message: "Invalid phone number",
              },
            })}
          />
          {errors.phone && (
            <p className="error-message">{errors.phone.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && (
            <p className="error-message">{errors.address.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="priority">Want to give your order priority?</label>
          <input id="priority" type="checkbox" {...register("priority")} />
        </div>
        <button type="submit">ORDER NOW FOR €39.00</button>
      </form>
    </div>
  );
};

export default OrderNow;
