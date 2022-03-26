import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [accessories, setAccessories] = useState([]);
  const [randomCart, setRandomCart] = useState([]);
  console.log(randomCart);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleAddToCart = (singleProduct) => {
    const newCart = [...accessories, singleProduct];
    if (newCart.length <= 4) {
      setAccessories(newCart);
    } else {
      alert("You can not add more item");
    }
  };
  const randomGenarator = () => {
    const random = Math.floor(Math.random() * accessories.length);
    setRandomCart(accessories[random]);
  };
  const reset = () => {
    setAccessories([]);
  };
  return (
    <div className="products-container">
      <div className="single-product">
        {products.map((product) => (
          <Product
            key={product.id}
            handleAddToCart={handleAddToCart}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="cart-section">
        <div className="cart">
          <h1>Selected Items</h1>
          {accessories.map((item) => (
            <Cart key={item.id} item={item}></Cart>
          ))}
          <button onClick={randomGenarator} className="choose-btn">
            Choose One
          </button>
          <br />
          <button onClick={reset} className="reset-btn">
            Reset
          </button>
          <div className="random-product">
              <img src={randomCart.img} alt=""></img>
            <div>
              <p>{randomCart.price}</p>
              <p>{randomCart.name }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
