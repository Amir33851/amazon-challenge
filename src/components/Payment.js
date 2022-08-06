import React from "react";
import "../style/Payment.css";
import { useStatevalue } from "./StateProvider";
import CheckoutProducts from "./CheckoutProducts";
import { Link } from "react-router-dom";
const Payment = () => {
  const [{ basket, user }, dispatch] = useStatevalue();
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
            Checkout (<Link to='/checkout'>{basket ?  basket.length : 0} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user ? user.email : ""}</p>
            <p>123 React Js</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment_item">
            {basket.map(item => (
              <CheckoutProducts
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
            <div className="payment_title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment_detail">

            </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
