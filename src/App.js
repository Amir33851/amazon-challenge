import "./App.css";

import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Login from "./components/Login";
import { useEffect } from "react";
import { auth } from "./firebas.js";
import { useStatevalue } from "./components/StateProvider";
import Payment from "./components/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51HoNAJJ6zlhCKixlreKcTiKlV9jEOnSHwDSYrmGCVjTspdsQ1XDIOEjXi4caUSossI4cQc4WyDB789JUH9axYKlz006i36UcPx"
);
function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "sk_test_51HoNAJJ6zlhCKixlzSQC8QM9v1b1HMkm7pcTMihSWl3ZIKxRZWvvGf6OeksYXJD8WmU9RED40myPGTSm8t0ef91s00e3v4n4FP",
  };

  const [{}, dispatch] = useStatevalue();
  useEffect(() => {
    //will only run one when the app component loads....
    auth.onAuthStateChanged((authUser) => {
      // console.log(authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={[<Header />, <Checkout />]} />
        <Route path = "/payment" element={<Elements stripe={stripePromise}><Header/> <Payment/> </Elements>} exact/>
       
        <Route path="/" element={[<Header />, <Home />]} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
