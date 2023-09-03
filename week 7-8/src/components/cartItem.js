import { cartActions } from "../store/cartSlice";
import { useDispatch } from "react-redux";

export default function CartItem(props) {
  const {id, name, quantity,total,price}=props.item;
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
    alert("Item added");
  };

  const removeHandler = () => {
    dispatch(cartActions.removeFromCart(id));
    alert("Item removed");
  };

  return (
    <li className="card">
      <header>
        <h3>{name}</h3>
        <div>Total amount :Rs.{total}</div>
      </header>
      <div>quantity: {quantity}</div>
      <div>
        <button onClick={addHandler}>+</button>
        <button onClick={removeHandler}>-</button>
      </div>
    </li>
  );
}
