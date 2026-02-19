import "./Cart.css";
import React, { useContext } from "react";
import { StoreContext } from "../../components/Context/StoreContext";
import { useNavigate } from "react-router-dom";


function Cart() {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  const navigate = useNavigate();


  const subtotal = food_list.reduce((total, item) => {
    if (cartItems[item.id] > 0) {
      return total + item.price * cartItems[item.id];
    }
    return total;
  }, 0);

  const deliveryFee = subtotal > 0 ? 2 : 0;
  const finalTotal = subtotal + deliveryFee;

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-header">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {food_list
          .filter((item) => cartItems[item.id] > 0)
          .map((item) => (
            <div key={item.id}>
              <div className="cart-item-row">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item.id]}</p>
                <p>${item.price * cartItems[item.id]}</p>
                <p
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                  style={{ cursor: "pointer" }}
                >
                  x
                </p>
              </div>
              <hr />
            </div>
          ))}
      </div>

      <div className="cart-summary">
        <h2>Cart Totals</h2>
        <div className="totals">
          <div className="totals-row">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <hr />
          <div className="totals-row">
            <span>Delivery Fee</span>
            <span>${deliveryFee}</span>
          </div>
          <hr />
          <div className="totals-row total">
            <span>Total</span>
            <span>${finalTotal}</span>
          </div>
        </div>
        <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
      </div>

      <div className="promo-code">
        <p>Have a promo code?</p>
        <div className="promo-input">
          <input type="text" placeholder="Enter promo code" />
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
