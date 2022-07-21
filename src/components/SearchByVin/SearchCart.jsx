import React, { useContext, useEffect, useState } from "react";
import { Modal, message, Empty } from "antd";
import { Link } from "react-router-dom";
import { favContext } from "../../favContext";
import { partContext } from "../../partsContext";
import { authContext } from "../../authContext";
import fav from "../Images/fav.png";
import undefined from "../Images//no_image.webp";
import "./SearchCss.css";

const SearchCart = ({ item }) => {
  const { currentUser } = useContext(authContext);
  const { addProductToCart2, checkItemInCard2 } = useContext(favContext);
  const { getAllCategories, category } = useContext(partContext);
  useEffect(() => {
    getAllCategories();
    window.scrollTo(0, 0);
  }, []);

  const [checkItem2, setCheckItem2] = useState(checkItemInCard2(item.id));
  let pic = item.good_picture;

  function clickCart() {
    addProductToCart2(item);
    setCheckItem2(checkItemInCard2(item.id));
    setTimeout(() => message.warning("Товар добавлен в корзину"));
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  let arr = item.description;
  let newArr = arr.split(" ").slice(0, 9);
  let str = newArr.join(" ");

  return (
    <>
      {item ? (
        <div className="cards__block">
          <div className="cards">
            <div className="card">
              <div className="card_block">
                <Link to={`/details/${item.id}`}>
                  {pic ? (
                    pic.map((img) => (
                      <img
                        className="card__img"
                        src={img.picture}
                        alt="image"
                      />
                    ))
                  ) : (
                    <img src={undefined} className="card__img" alt="image" />
                  )}
                </Link>

                <h1 className="card__name">{item.good_name}</h1>
                <h4 className="card__desc">
                  {str}...
                  <a className="all__info" onClick={showModal}>
                    подробнее
                  </a>
                </h4>
                <Modal
                  title="Описание"
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  footer={null}
                >
                  <h4 className="card__desc">{item.description}</h4>
                </Modal>
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
                <button
                  className="card__btn custom-btn btn-5 "
                  onClick={() => {
                    currentUser
                      ? clickCart()
                      : setTimeout(() =>
                          message.warning("Вам надо зарегистрироваться!")
                        );
                  }}
                >
                  Добавить в корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default SearchCart;
