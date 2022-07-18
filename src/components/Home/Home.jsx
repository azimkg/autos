import React from "react";
import BestSeller from "../BestSeller/BestSeller";
import Brends from "../Brends/Brends";
import Carouselll from "../carousel/Carouselll";
import Cart from "../ModelsCart/Cart";
import ShopByCategories from "../ShopByCategories/ShopByCategories";

const Home = () => {
  return (
    <div>
      <Carouselll />
      <Cart />
      <Brends />
      <ShopByCategories />
    </div>
  );
};

export default Home;
