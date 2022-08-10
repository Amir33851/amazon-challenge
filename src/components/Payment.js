import React, { useEffect, useState } from "react";
import "../style/Payment.css";
import { useStatevalue } from "./StateProvider";
import CheckoutProducts from "./CheckoutProducts";
import { Link, useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import {
  useStripe,
  useElements,
  CardElement,
  PaymentElement,
} from "@stripe/react-stripe-js";
const Payment = () => {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStatevalue();
  const [error, setError] = useState(null);
  const [disable, setDisabled] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  const total = basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);

  useEffect(() => {
    const getClientSecret = async () => {
      // const response = await axios
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${total * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      }.then(({ paymentIntent }) => {
        //paymentIntent = peyment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        navigate("/orders");
      }),
    });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (
          <Link to="/checkout">{basket ? basket.length : 0} items</Link>)
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
            {basket.map((item) => (
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
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_pricecontainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={total}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disable || succeeded}>
                  {processing ? <p>Processing</p> : "Buy Now"}
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
