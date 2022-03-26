import "./Cart.css";

const Cart = (props) => {
  const { name, price, img } = props.item;
  return (
    <div className="cart">
      <div className="container">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <p>{name}</p>
          <p className="price-txt">Price : {price} TK</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
