import { SettingOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Card, List } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { favContext } from "../../favContext";
import { partContext } from "../../partsContext";
import fav from "../Images/fav.png";
import undefined from "../Images//no_image.webp";
import "./SearchCss.css";

const SearchCart = ({ item }) => {
  console.log(item.good_picture);
  const { addProductToCart2, checkItemInCard2 } = useContext(favContext);
  const { getAllCategories, category } = useContext(partContext);
  useEffect(() => {
    getAllCategories();
  }, []);
  console.log(category);
  const params = useParams();
  console.log(params.id + "params");
  console.log(category.id);
  const [checkItem2, setCheckItem2] = useState(checkItemInCard2(item.id));
  let pic = item.good_picture;
  return (
    <div className="cards__block">
      <div className="cards">
        <div className="card">
          <div className="card_block">
            {pic ? (
              pic.map((img) => (
                <img className="card__img" src={img.picture} alt="image" />
              ))
            ) : (
              <img src={undefined} className="card__img" alt="image" />
            )}
            <img
              src={fav}
              onClick={() => {
                addProductToCart2(item);
                setCheckItem2(checkItemInCard2(item.id));
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
  );
};

export default SearchCart;
