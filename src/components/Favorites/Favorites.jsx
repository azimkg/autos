import { Empty, List, Modal } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { favContext } from "../../favContext";
import "./Favorites.css";
import cart__empty from "../Images/empty.jpg";
import { authContext } from "../../authContext";
import empty from "../Images/empty.jpg";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { getCart2, cart, deleteFromCart, changeProductCount } =
    useContext(favContext);
  const { currentUser } = useContext(authContext);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [none, setNone] = useState(0);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  useEffect(() => {
    getCart2();
    window.scrollTo(0, 0);
  }, []);
  return currentUser ? (
    none < cart.totalPrice ? (
      cart.products ? (
        <>
          <div className="container">
            <div className="favorite_main">
              {cart.products.map((item) => (
                <div
                  className="favorite_block card_block card"
                  key={item.item.id}
                >
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
                  <h4 className="card__desc">
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
                    <h4 className="card__desc">{item.item.description}</h4>
                  </Modal>
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
            <div className="footer_cart">
              <h2>
                <span>Итоговая цена:</span> {+cart.totalPrice}kgs
              </h2>
            </div>
          </div>
        </>
      ) : (
        <div className="container">
          <div className="empty__null">
            <h3>Ваша корзина пуста.</h3>
            <img src={empty} alt="image" className="empty__img-1" />
          </div>
        </div>
      )
    ) : (
      <div className="container empty__not">
        <h3>Ваша корзина пуста</h3>
        <img src={empty} alt="image" className="empty__img-1" />
      </div>
    )
  ) : (
    <div className="container">
      <div className="empty__null">
        <h3>
          Чтобы посмотреть товары добавленные в корзину, вам надо
          <Link to="/login">
            <span className="all__info">зарегистрироваться</span>.
          </Link>
        </h3>
        <img src={empty} alt="image" className="empty__img-1" />
      </div>
    </div>
  );
};

export default Favorites;
