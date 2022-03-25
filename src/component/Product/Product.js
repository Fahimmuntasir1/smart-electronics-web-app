import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { name, price, img } = product;
  return (
    <div className="single-product">
      <div>
        <img src={img} alt=""></img>
        <div className="product-info">
          <p>{name}</p>
          <p>Price : <span className="rongila">{price} TK</span></p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
