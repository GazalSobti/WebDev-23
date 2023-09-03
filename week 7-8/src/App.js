import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
//import {useState} from "react";

import Items from "./pages/items";
import Cart from "./pages/cart";
import NoPage from "./pages/nopage";
import "./App.css";
//import { fetch_cart } from './store/cartSlice';
//import { cartActions } from "./store/cartSlice";
import { sendCartData } from "./store/cartSlice";

function App() {
  const cart = useSelector((state) => state.cart);
  // const [item,setItem]=useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendCartData(cart));
    //dispatch(fetch_cart(cart));
  }, [cart, dispatch]);

  // useEffect(() => {
  //
  //  fetch("https://redux-cart-88c8a-default-rtdb.firebaseio.com/cart.json", {
  //    method: "PUT",
  //    body: JSON.stringify(cart),
  //  })
  //    .then((response) => {
  //      return response.json();
  //    })
  //    .then((data) => {
  //      setItem(data.totalQuantity);
  //    })
  //    .catch((e) => {
  //      console.log(e);
  //    });
  //  console.log(item);
  //}, [cart]);

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <ul className="link-list">
            <li className="link">
              <NavLink to="items.js" className="linkitem">
                HOME
              </NavLink>
            </li>
            <li className="link">
              <NavLink to="cart.js" className="linkitem">
                CART
              </NavLink>
            </li>
          </ul>
        </header>
        <Routes>
          <Route index path="/" element={<Items />} />
          <Route path="items.js" element={<Items />} />
          <Route path="cart.js" element={<Cart />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
