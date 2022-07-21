import React from "react";
import "./ShopByCategories.css";
import wheels from "../Images/4977.webp";
import videorecorder from "../Images/P2PDHX0.webp";
import oil from "../Images/oil.webp";
import thumb from "../Images/thumb.webp";
import { Link } from "react-router-dom";
import { categories } from "../../helpers/categorie";

const ShopByCategories = () => {
  return (
    <div className="shopByCategories">
      <div className="container">
        <div className="shopByCategories__title">
          <h4 className="shopByCategories__title-h4">
            САМЫЕ ПОПУЛЯРНЫЕ КОЛЛЕКЦИИ
          </h4>
          <div style={{ display: "flex" }}>
            <span className="shopByCategories__span"></span>
            <h3 className="shopByCategories__title-h3">
              МАГАЗИН ПО КАТЕГОРИЯМ
            </h3>
            <span className="shopByCategories__span"></span>
          </div>
        </div>

        <div className="shopByCategories__card">
          <div className="shopByCategories__divchik">
            <div className="shopByCategories__cards">
              <div
                style={{
                  width: "210px",
                  display: "inline-block",
                  overflow: "hidden",
                }}
              >
                <img
                  className="shopByCategories__cards-img"
                  src={wheels}
                  alt="image"
                />
              </div>
              <div>
                <h3 className="shopByCategories__cards-h3">КОЛЕСА И ШИНЫ</h3>
                <ul className="shopByCategories__cards-ul">
                  <li className="shopByCategories__cards-li">Шины</li>
                  <li className="shopByCategories__cards-li">Цепи для шин</li>
                  <li className="shopByCategories__cards-li">
                    Аксессуары для шин
                  </li>
                  <li className="shopByCategories__cards-li">Колеса</li>
                  <li className="shopByCategories__cards-li">
                    Аксессуары для колес
                  </li>
                </ul>
              </div>
            </div>
            {categories.slice(0, 1).map((item) => (
              <Link to={`/category/${item.id}`}>
                <button className="btn-BestSeller">Посмотреть</button>
              </Link>
            ))}
          </div>
          <div className="shopByCategories__divchik">
            <div className="shopByCategories__cards">
              <div
                style={{
                  width: "210px",
                  display: "inline-block",
                  overflow: "hidden",
                }}
              >
                <img
                  className="shopByCategories__cards-img"
                  src={videorecorder}
                  alt="image"
                />
              </div>
              <div>
                <h3 className="shopByCategories__cards-h3">УМНЫЕ УСТРОЙСТВА</h3>
                <ul className="shopByCategories__cards-ul">
                  <li className="shopByCategories__cards-li">
                    Bluetooth-устройства
                  </li>
                  <li className="shopByCategories__cards-li">
                    Видеорегистратор
                  </li>
                  <li className="shopByCategories__cards-li">Экран ТВ</li>
                  <li className="shopByCategories__cards-li">Умные часы</li>
                  <li className="shopByCategories__cards-li">
                    USB-подключение
                  </li>
                </ul>
              </div>
            </div>
            {categories.slice(2, 3).map((item) => (
              <Link to={`/category/${item.id}`}>
                <button className="btn-BestSeller">Посмотреть</button>
              </Link>
            ))}
          </div>
          <div className="shopByCategories__divchik">
            <div className="shopByCategories__cards">
              <div
                style={{
                  width: "210px",
                  display: "inline-block",
                  overflow: "hidden",
                }}
              >
                <img
                  className="shopByCategories__cards-img"
                  src={oil}
                  alt="image"
                />
              </div>
              <div>
                <h3 className="shopByCategories__cards-h3">
                  МАСЛЯНЫЕ ЖИДКОСТИ
                </h3>
                <ul className="shopByCategories__cards-ul">
                  <li className="shopByCategories__cards-li">Эсдиписсинг</li>
                  <li className="shopByCategories__cards-li">Reprehenderit</li>
                  <li className="shopByCategories__cards-li">Duis aute</li>
                  <li className="shopByCategories__cards-li">
                    Пустынный моллит
                  </li>
                  <li className="shopByCategories__cards-li">Лаудантиум</li>
                </ul>
              </div>
            </div>
            {categories.slice(1, 2).map((item) => (
              <Link to={`/category/${item.id}`}>
                <button className="btn-BestSeller">Посмотреть</button>
              </Link>
            ))}
          </div>
          <div className="shopByCategories__divchik">
            <div className="shopByCategories__cards">
              <div
                style={{
                  width: "210px",
                  display: "inline-block",
                  overflow: "hidden",
                }}
              >
                <img
                  className="shopByCategories__cards-img"
                  src={thumb}
                  alt="image"
                />
              </div>
              <div>
                <h3 className="shopByCategories__cards-h3">ОСВЕЩЕНИЕ</h3>
                <ul className="shopByCategories__cards-ul">
                  <li className="shopByCategories__cards-li">
                    Светодиодные задние фонари
                  </li>
                  <li className="shopByCategories__cards-li">Передние фары</li>
                  <li className="shopByCategories__cards-li">Асперинг</li>
                  <li className="shopByCategories__cards-li">
                    Внутренний свет
                  </li>
                  <li className="shopByCategories__cards-li">
                    Освещение и электрика
                  </li>
                </ul>
              </div>
            </div>
            {categories.slice(11, 12).map((item) => (
              <Link to={`/category/${item.id}`}>
                <button className="btn-BestSeller">Посмотреть</button>
              </Link>
            ))}
          </div>
          <div className="shopByCategories__divchik">
            <div className="shopByCategories__cards">
              <div
                style={{
                  width: "210px",
                  display: "inline-block",
                  overflow: "hidden",
                }}
              >
                <img
                  className="shopByCategories__cards-img"
                  src="https://i0.wp.com/storemark.by/wp-content/uploads/2017/08/%D0%A0%D0%B5%D0%BC%D0%BE%D0%BD%D1%82-%D1%82%D0%BE%D1%80%D0%BC%D0%BE%D0%B7%D0%BD%D0%BE%D0%B9-%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B.jpg?fit=900%2C500"
                  alt="image"
                />
              </div>
              <div>
                <h3 className="shopByCategories__cards-h3">ЗАПАСНЫЕ ЧАСТИ</h3>
                <ul className="shopByCategories__cards-ul">
                  <li className="shopByCategories__cards-li">
                    Запасные детали
                  </li>
                  <li className="shopByCategories__cards-li">
                    Тормозные детали
                  </li>
                  <li className="shopByCategories__cards-li">Шок и подвеска</li>
                  <li className="shopByCategories__cards-li">Верхняя одежда</li>
                  <li className="shopByCategories__cards-li">
                    Выхлоп и выбросы
                  </li>
                </ul>
              </div>
            </div>
            {categories.slice(6, 7).map((item) => (
              <Link to={`/category/${item.id}`}>
                <button className="btn-BestSeller">Посмотреть</button>
              </Link>
            ))}
          </div>
          <div className="shopByCategories__divchik">
            <div className="shopByCategories__cards">
              <div
                style={{
                  width: "210px",
                  display: "inline-block",
                  overflow: "hidden",
                }}
              >
                <img
                  className="shopByCategories__cards-img"
                  src="https://redtool.pro/images/thumbnails/698/611/detailed/2/%D0%BA%D0%B5%D0%B9%D1%81_%D0%BA%D0%B5%D1%82%D0%B5%D1%80_1.JPG"
                  alt="image"
                />
              </div>
              <div>
                <h3 className="shopByCategories__cards-h3">
                  ИНСТРУМЕНТ И ОБОРУДОВАНИЕ
                </h3>
                <ul className="shopByCategories__cards-ul">
                  <li className="shopByCategories__cards-li">
                    Ящики для инструментов
                  </li>
                  <li className="shopByCategories__cards-li">
                    Наборы инструментов
                  </li>
                  <li className="shopByCategories__cards-li">
                    Ударные гайковерты
                  </li>
                  <li className="shopByCategories__cards-li">
                    Шинные воздушные компрессоры
                  </li>
                  <li className="shopByCategories__cards-li">
                    Ручной инструмент
                  </li>
                </ul>
              </div>
            </div>
            {categories.slice(17, 18).map((item) => (
              <Link to={`/category/${item.id}`}>
                <button className="btn-BestSeller">Посмотреть</button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategories;
