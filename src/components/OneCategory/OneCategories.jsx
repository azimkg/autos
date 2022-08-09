import React, { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { favContext } from "../../favContext";
import { partContext } from "../../partsContext";
import { authContext } from "../../authContext";

import undefined from "../../components/Images/no_image.webp";
import { Link } from "react-router-dom";
import { Modal, message, Empty } from "antd";
import fav from "../Images/fav.png";

const OneCategories = ({ item, loc }) => {
  const { currentUser } = useContext(authContext);
  const params = useParams();
  const { addProductToCart2, checkItemInCard2 } = useContext(favContext);
  const [checkItem2, setCheckItem2] = useState(checkItemInCard2(item.id));
  const { getAllCategories, category } = useContext(partContext);
  useEffect(() => {
    getAllCategories();
  }, []);

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

  let pic = item.good_picture;
  let arr = item.description;
  let newArr = arr.split(" ").slice(0, 9);
  let str = newArr.join(" ");

  function clickCart() {
    addProductToCart2(item);
    setCheckItem2(checkItemInCard2(item.id));
    setTimeout(() => message.warning("Товар добавлен в корзину"));
  }

  return (
    <>
      {item ? (
        loc == item.category ? (
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

                  <h2 className="card__name">{item.good_name}</h2>
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
                        {Math.ceil(item.price_usd)} $
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
        ) : null
      ) : (
        <Empty />
      )}
    </>
  );
};

export default OneCategories;
