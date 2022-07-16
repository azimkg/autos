import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { brandes } from "../../helpers/BrandCar";
import { partContext } from "../../partsContext";

import "./Cart.css";
const Cart = () => {
  const { getAllBrands, brands } = useContext(partContext);
  useEffect(() => {
    getAllBrands();
  }, []);

  return (
    <section class="container" id="catalog">
      <div className="catalog_wrapper">
        {brandes.map((item) =>
          brands.map((brands) =>
            item.id === brands.id ? (
              <Link to={`/models/${item.id}`} class="catalog-link" href="#">
                <img width={300} src={item.img} alt="" />
              </Link>
            ) : null
          )
        )}
      </div>
    </section>
  );
};

export default Cart;
