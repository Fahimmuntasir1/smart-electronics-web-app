import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <h2>Selected Items</h2>
      <button className="choose-btn">Choose One</button>
      <br />
      <button className="reset-btn">Reset</button>
    </div>
  );
};

export default Cart;
