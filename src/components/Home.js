import React from "react";
import "../style/Home.css";
import Product from "./Product";

function Home() {
  return (
    
      <div className="home">
        <div className="home_container">
          <img
            className="home_image"
            src="https://m.media-amazon.com/images/I/81pXJW9qztL.jpg"
            alt=""
          />

          <div className="home_row">
            <Product
              id="15424"
              title="Lenovo - 2022 - IdeaPad"
              image="https://m.media-amazon.com/images/I/7164pNtDrgL._AC_UY218_.jpg"
              price={899}
              rating={4}
            />
            <Product
              id="1546561524"
              title="Acer Predator Triton 500"
              image="https://m.media-amazon.com/images/I/71gk1oNNWqL._AC_UY218_.jpg"
              price={2984}
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id="2654"
              title="Razer Blade 17 Gaming Laptop"
              image="https://m.media-amazon.com/images/I/71CMCq8IMFL._AC_UY218_.jpg"
              price={4299}
              rating={3}
            />
            <Product
              id="7151"
              title="Acer Nitro 5"
              image="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY218_.jpg"
              price={736}
              rating={5}
            />
            <Product
              id="845"
              title="Acer Predator Helios 300"
              image="https://m.media-amazon.com/images/I/71nz3cIcFOL._AC_UY218_.jpg"
              price={1169}
              rating={3}
            />
          </div>
          <div className="home_row">
            <Product
              id="254"
              title="MSI GV15 15.6"
              image="https://m.media-amazon.com/images/I/81cP2qZckeL._AC_UY218_.jpg"
              price={749}
              rating={5}
            />
          </div>
        </div>
      </div>
   
  );
}

export default Home;
