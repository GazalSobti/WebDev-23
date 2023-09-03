import { cartActions } from "../store/cartSlice";
import { useDispatch } from "react-redux";

export default function Product({ name, price, description, id }) {
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
    alert("Item added");
  };

  return (
    <>
      <li className="card">
        <header>
          <h3>{name}</h3>
          <div>Cost : Rs.{price}</div>
        </header>
        <p>About : {description}</p>
        <div>
          <button onClick={addToCartHandler}>ADD TO CART</button>
        </div>
      </li>
    </>
  );
}
