import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { createContext } from "react";

export const UserContext = createContext(null);

const Form = () => {
  const usenavigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userName, "username");
    if (!userName) {
      alert("Fill in the form");
      return;
    }
    usenavigate("/menu");
  };
  const userContextValue = useMemo(
    () => ({
      userName: userName,
      onChange: (e) => handleNameChange(e),
      placeholder: "Your full name",
    }),
    []
  );

  const handleNameChange = (name) => {
    setUserName(name);
  };
  return (
    <UserContext.Provider value={userContextValue}>
      <form className="login-form" onSubmit={handleFormSubmit}>
        <Input />
        <Button />
      </form>
    </UserContext.Provider>
  );
};

export default Form;
