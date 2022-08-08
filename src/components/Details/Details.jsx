import { List } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { partContext } from "../../partsContext";
import "./Details.css";

const Details = () => {
  const { onePart, getOneParts } = useContext(partContext);
  const [editOne, setEditOne] = useState("");
  const params = useParams();
  useEffect(() => {
    getOneParts(params.id);
    window.scrollTo(0, 0);
  }, []);
  console.log(onePart);
  return onePart ? (
    <div className="container">
      <div className="details__main">
        <div className="details__main-right">
          <List
            itemLayout="horizontal"
            dataSource={onePart.good_picture}
            renderItem={(item) => (
              <img
                className="details__main-right-img"
                src={item.picture}
                alt="image"
              />
            )}
          />
        </div>
        <div className="details__main-left">
          <h2 className="details__main-left-title">{`Название товара: ${onePart.good_name}`}</h2>
          <div className="details__main-border"></div>
          <div className="details__main-left-text">
            <div className="details__main-left-right-border"></div>
            <div>
              <h3 className="details__main-left-h33">Информация о товаре</h3>
              <h3 className="details__main-left-h3">{`Vin-код: ${onePart.vincode}`}</h3>
            </div>
          </div>
          <div className="details__main-border"></div>
          <h3 className="details__main-left-price">
            {`Цена в сомах: ${Math.ceil(onePart.price_kgs)} сом`}
          </h3>
          {onePart.price_usd ? (
            <h3 className="details__main-left-price">
              {`Цена в долларах: ${Math.ceil(onePart.price_usd)} $`}
            </h3>
          ) : null}
        </div>
      </div>
      <div className="details__desc">
        <div className="details__desc-1">Описание</div>
        <div className="details__desc-2">{onePart.description}</div>
      </div>
    </div>
  ) : null;
};

export default Details;
