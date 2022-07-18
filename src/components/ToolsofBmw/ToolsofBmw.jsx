import React, { useContext, useState } from "react";
import "./ToolsofBmw.css";
import fav from "../Images/fav.png";
import { Card, List } from "antd";
import { Link, useParams } from "react-router-dom";
import { favContext } from "../../favContext";
import { partContext } from "../../partsContext";
import { useEffect } from "react";
const { Meta } = Card;

const ToolsofBmw = ({ item }) => {
  let pic = item.good_picture;
  const { addProductToCart2, checkItemInCard2 } = useContext(favContext);
  const { getAllCategories, category } = useContext(partContext);
  useEffect(() => {
    getAllCategories();
    window.scrollTo(0, 0);
  }, []);
  const params = useParams();
  const [checkItem2, setCheckItem2] = useState(checkItemInCard2(item.id));

  return (
    <div className="cards__block">
      <div className="cards">
        <Link to={`/details/${item.id}`}>
          <div className="card">
            <div className="card_block">
              {pic.map((img) => (
                <img className="card__img" src={img.picture} alt="image" />
              ))}
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
              <h1 className="card__name">{item.good_name}</h1>
              <h4 className="card__desc">{item.description}</h4>
              <p className="card__block-vincode">
                Винкод: <span className="vincode">{item.vincode}</span>
              </p>
              <div className="card__block-cat">
                {category.map((elem) =>
                  elem.id == params.id ? (
                    <p className="card__block-category">{elem.category_name}</p>
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
        </Link>
      </div>
    </div>
  );
};

export default ToolsofBmw;
