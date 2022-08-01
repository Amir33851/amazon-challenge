import React from "react";
import "../style/CheckoutProducts.css";
import GradeIcon from "@mui/icons-material/Grade";
import { yellow } from "@mui/material/colors";
import { useStatevalue } from "./StateProvider";
const CheckoutProducts = ({ id, image, title, price, rating }) => {
    const[{basket},dispatch] = useStatevalue();
    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        });
   }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <GradeIcon sx={{ color: yellow[400] }} />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProducts;
