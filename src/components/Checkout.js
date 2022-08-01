import React from "react";

import "../style/Checkout.css";
import Subtotal from './Subtotal'
import  CheckoutProducts  from "./CheckoutProducts";
import { useStatevalue } from "./StateProvider";
function Checkout() {
  const[{basket},dispatch] = useStatevalue();
  return (
    <div className="checkout">
      <div className="checkout_lef">
        <img
          className="checkout_ad"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg"
        />
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {basket.map(item=>(
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

      <div className="checkout_right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;
