import { List } from "antd";
import React, { useContext, useEffect } from "react";
import { favContext } from "../../favContext";
import "./Favorites.css";
import cart__empty from "../Images/empty.jpg";

const Favorites = () => {
  const { getCart2, fav, deleteFromCart } = useContext(favContext);

  const { favorite } = fav;
  useEffect(() => {
    getCart2();
  }, []);
  return fav.favorite ? (
    <>
      <div className="container">
        <div className="favorite_main">
          {fav.favorite.map((item) => (
            <div className="favorite_block card_block card" key={item.item.id}>
              <List
                itemLayout="horizontal"
                dataSource={item.item.good_picture}
                renderItem={(item) => (
                  <img
                    className="card__img cart__img-fav"
                    src={item.picture}
                    alt="image"
                  />
                )}
              />

              <h1 className="card__name">{item.item.good_name}</h1>
              <h4 className="card__desc">{item.item.description}</h4>
              <p className="card__block-vincode">
                Винкод: <span className="vincode">{item.item.vincode}</span>
              </p>
              <div className="card__block-price">
                <h2 className="card__price-kgs">
                  {Math.ceil(item.item.price_kgs)} KGZ
                </h2>
                <h2 className="card__price-usd">
                  {Math.ceil(item.item.price_kgs)} $
                </h2>
              </div>
              <div>
                <button
                  className="custom-btn btn-5"
                  onClick={() => deleteFromCart(item.item.id)}
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <div>
      <img src={cart__empty} alt="" />
    </div>
  );
};

export default Favorites;
