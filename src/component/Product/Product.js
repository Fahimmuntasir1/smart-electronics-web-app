import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const { name, price, img } = product;
  // const handleAddToCart=(product)=>{
  //   console.log(product);
  // }

  return (
    <div className="single-product-container">
      <div>
        <img src={img} alt=""></img>
        <div className="product-info">
          <p>{name}</p>
          <p>
            Price : <span className="rongila">{price} TK</span>
          </p>
          <button onClick={() => handleAddToCart(product)}>
            {" "}
            <p>Add to Cart</p> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> {" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
