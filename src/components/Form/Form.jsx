import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Form.css";

const Form = () => {
  return (
    <form className="login-form">
      <Input placeholder="Your full name" />
      <Button />
    </form>
  );
};

export default Form;
