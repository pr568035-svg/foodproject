import React, { useContext } from "react";
import { StoreContext } from "../../components/Context/StoreContext";
import "./Placeorder.css";

function Placeorder() {

  const { subtotal } = useContext(StoreContext);

  
  const deliveryFee = subtotal === 0 ? 0 : 40;


  const finalTotal = subtotal + deliveryFee;

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className='multi-fields'>
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Street' />
        </div>

        <input type="text" placeholder='City' />
        <input type="text" placeholder='State' />

        <div className='multi-fields'>
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>

        <input type="text" placeholder='Phone number' />
      </div>

     <div className="place-order-right">
  <div className="cart-summary">
    <h2>Cart Totals</h2>

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

    <button type="submit">PROCEED TO PAYMENT</button>
  </div>
</div>
 
    </form>
  );
}

export default Placeorder;
