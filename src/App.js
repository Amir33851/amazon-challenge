import "./App.css";

import Home from "./components/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Login from "./components/Login";
import { useEffect } from "react";
import {auth} from "./firebas.js";
import {useStatevalue} from "./components/StateProvider";
import Payment from "./components/Payment";
function App() {
  const[{},dispatch] = useStatevalue();
  useEffect(()=>{
    //will only run one when the app component loads....
    auth.onAuthStateChanged(authUser =>{
      // console.log(authUser);
      if(authUser){
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  },[]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/checkout" element={[<Header />,<Checkout />]} />
        <Route path="/payment" element={[<Header/>,<Payment/>]}/>
        <Route path="/" element={[<Header />,<Home />]} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
