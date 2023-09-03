import React from "react";
import { useSelector } from "react-redux";

import CartItem from "../components/cartItem";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <>
      <div className="headline">Your Shopping Cart</div>
      
        <ul>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                name: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </ul>
      
    </>
  );
}
