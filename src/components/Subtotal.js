import React, { useState } from 'react'
import '../style/Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStatevalue } from "./StateProvider";
function Subtotal() {
  const [{ basket }, dispatch] = useStatevalue();
  
  const total = basket.reduce((amount, item) => {
    return amount + item.price;
  }, 0);
  
 
  return (
    <div className='subtotal'>
    <CurrencyFormat renderText={(value)=>(
        <>
            <p>Subtotal {basket.length} items: <strong>{value}</strong></p>
            <small className='subtotal_gift'>
                <input type="checkbox"/>
                This order contains a gift
            </small>
        </>
    )}
    decimalScale={2}
    value={total}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"$"}
    />
    <button>Proceed to Checkout</button>
   </div>
  )
}

export default Subtotal