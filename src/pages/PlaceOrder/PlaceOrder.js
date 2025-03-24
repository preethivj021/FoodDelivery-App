import React, { useContext } from "react";
import "./PlaceOrder.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p>Delivery Information</p>
        <div className="multi-input-field">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="Email Address" required />
        <input type="text" placeholder="Street" required />
        <div className="multi-input-field">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>
        <div className="multi-input-field">
          <input type="text" placeholder="Zip Code" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="number" placeholder="Phone" required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹ {getTotalCartAmount() === 0 ? 0 : 30}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ₹ {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 30}
              </b>
            </div>
          </div>
          <Link to={getTotalCartAmount() === 0 ? "/problem" : "/payment"}>
            <button>PROCEED TO Payment</button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
