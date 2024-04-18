import React from "react";
import "./MainContent.css";
import Form from "../Form/Form";

const MainContent = () => {
  return (
    <main className="content">
      <h1 className="title">
        The best pizza.
        <br />
        <span className="text-yellow">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <p className="sub-title">
        👋 Welcome! Please start by telling us your name:
      </p>
      <Form />
    </main>
  );
};

export default MainContent;
