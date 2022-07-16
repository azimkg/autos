import React, { useContext, useEffect } from "react";
import { favContext } from "../../favContext";
import "./Favorites.css";

const Favorites = () => {
  const { getCart2, fav, deleteFromCart } = useContext(favContext);

  const { favorite } = fav;
  useEffect(() => {
    getCart2();
  }, []);
  return fav.favorite ? (
    <>
      {" "}
      <div className="container">
        <div className="favorite_main">
          {fav.favorite.map((item) => (
            <div className="favorite_block">
              {item.item.img ? (
                <img src={item.item.img} alt="" />
              ) : (
                <img src="https://www.alfasolare.ru/a_solar_restyle/wp-content/themes/consultix/images/no-image-found-360x260.png" />
              )}

              <h1>{item.item.good_name}</h1>
              <h4>{item.item.description}</h4>
              <h1>{item.item.price_kgs}</h1>
              <div>
                <button onClick={() => deleteFromCart(item.item.id)}>
                  delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <h1>Loading</h1>
  );
};

export default Favorites;
