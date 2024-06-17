import { useDispatch } from "react-redux";
import CartItem from "./CartItem/CartItem";
import { useSelector } from "react-redux";
import { clearCart } from "../redux/slices/CartSlices";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const navigate = useNavigate();

  const handleMakeOrder = () => {
    navigate("/order-now");
  };

  return (
    <div className="containerCart">
      {items.length === 0 ? (
        <div className="emptyCart">Your cart is empty, time to eat</div>
      ) : (
        <div className="window">
          <div className="hut">
            <div className="yourOrder">Your Order</div>
            <div className="clearAllCart">
              <button onClick={() => dispatch(clearCart())}>Clear All</button>
            </div>
          </div>
          <div>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="total">
            <div className="allOrder">Your Orders</div>
            <div className="sum">{totalPrice}$</div>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleMakeOrder}
            >
              Make Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
