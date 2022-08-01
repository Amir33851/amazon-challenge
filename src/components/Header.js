import React from "react";
import "../style/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link, useNavigate } from "react-router-dom";
import { useStatevalue } from "./StateProvider";
import { auth } from "../firebas.js";
function Header() {
  const [{ basket, user }, dispatch] = useStatevalue();

  const navigate = useNavigate();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        {/* <Link to="/login"> */}
        <div className="header_option" onClick={handleAuthentication}>
          <span className="header_optionLineOne">
            Hello {user ? user.email : "Guest"}
          </span>

          <span className="header_optionLineTwo">
            {user ? "Sign Out" : "Sign In"}
          </span>
        </div>
        {/* </Link> */}
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
