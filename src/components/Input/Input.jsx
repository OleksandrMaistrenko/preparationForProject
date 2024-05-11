import React, { useContext } from "react";
import "./Input.css";
import { UserContext } from "../Form/Form";

const Input = () => {
  const data = useContext(UserContext);
  return (
    <input
      type="text"
      placeholder={data?.placeholder}
      value={data?.value}
      onChange={(e) => data?.onChange(e.target.value)}
    />
  );
};

export default Input;
