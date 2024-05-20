import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContex/UserContex";
import { useContext } from "react";

const Form = () => {
  const usenavigate = useNavigate();
  const { userName, onChange, placeholder } = useContext(UserContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(userName, "username");
    if (!userName) {
      alert("Fill in the form");
      return;
    }
    usenavigate("/menu");
  };

  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      <Input value={userName} onChange={onChange} placeholder={placeholder} />
      <Button />
    </form>
  );
};

export default Form;
