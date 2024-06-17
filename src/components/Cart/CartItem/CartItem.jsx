import "./CartItem.css";
import { addToCart, decreaseCountItem } from "../../redux/slices/CartSlices";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(decreaseCountItem({ ...item, count: 1 }));
  };

  return (
    <div className="functionalWindow">
      <div className="blockImage">
        <div>
          <img src={item.imageUrl} />
        </div>
        <p className="pizza__name">{item.name}</p>
      </div>
      <div className="blockCounter">
        <button
          className="minusM"
          onClick={() => dispatch(decreaseCountItem(item))}
        >
          -
        </button>
        <div className="count">{item.count}</div>
        <button className="plusP" onClick={() => dispatch(addToCart(item))}>
          +
        </button>
      </div>
      <div className="blockPrice">{item.price}</div>
      <div className="clear">
        <button className="btn_clear" onClick={handleRemoveItem}>
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
