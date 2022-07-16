import React, { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { favContext } from "../../favContext";
import { partContext } from "../../partsContext";
import fav from "../Images/fav.png";

const OneCategories = ({ item, loc }) => {
  const params = useParams();
  const { addProductToCart2, checkItemInCard2 } = useContext(favContext);
  const [checkItem2, setCheckItem2] = useState(checkItemInCard2(item.id));
  const { getAllCategories, category } = useContext(partContext);
  useEffect(() => {
    getAllCategories();
  }, []);
  return (
    <>
      {loc == item.category ? (
        <div className="cards__block">
          <div className="cards">
            <div className="card">
              <div className="card_block">
                <img
                  className="card__img"
                  src="https://images.prom.ua/2035853805_podvesnoj-podshipnik-mercedes.jpg"
                  alt=""
                />
                <img
                  src={fav}
                  onClick={() => {
                    addProductToCart2(item);
                    setCheckItem2(checkItemInCard2(item.id));
                  }}
                  style={{
                    fontSize: "25px",
                    color: checkItem2 ? "red" : "none",
                  }}
                  key="shopping"
                  className="shopping-icon"
                />
                <h2 className="card__name">{item.good_name}</h2>
                <h4 className="card__desc">{item.description}</h4>
                <p className="card__block-vincode">
                  Винкод: <span className="vincode">{item.vincode}</span>
                </p>
                <div className="card__block-cat">
                  {category.map((elem) =>
                    elem.id == params.id ? (
                      <p className="card__block-category">
                        {elem.category_name}
                      </p>
                    ) : null
                  )}
                  <div className="card__block-price">
                    <h2 className="card__price-kgs">
                      {Math.ceil(item.price_kgs)} KGZ
                    </h2>
                    <h2 className="card__price-usd">
                      {Math.ceil(item.price_kgs)} $
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default OneCategories;
