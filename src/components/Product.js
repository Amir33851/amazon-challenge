import React from "react";
import "../style/Product.css";
import GradeIcon from "@mui/icons-material/Grade";
import { yellow } from "@mui/material/colors";
import { useStatevalue } from "./StateProvider";
function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStatevalue();

  const addToBasket = () => {
    //add items to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <GradeIcon sx={{ color: yellow[400] }} />
              </p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
