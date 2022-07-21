import React, { useState } from "react";
import "./Header.css";
import image1 from "../Images/logo11.svg";
import image2 from "../Images/search.png";
import image3 from "../Images/down.png";
import image4 from "../Images/account.png";
import image5 from "../Images/close123.svg";
import image11 from "../Images/menu.png";

import { Link, useLocation } from "react-router-dom";
import { categories } from "../../helpers/categorie";
import { useContext } from "react";
import { partContext } from "../../partsContext";
import { useEffect } from "react";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge, Button, Tooltip } from "antd";
import { authContext } from "../../authContext";
import { favContext } from "../../favContext";

const NAVBAR_ITEMS = [
  {
    title: "Главная",
    link: "/",
    id: 1,
  },
  {
    title: "О нас",
    link: "/about",
    id: 2,
  },
  {
    title: "Контакты",
    link: "/contacts",
    id: 4,
  },
  {
    title: "Гарантии",
    link: "/guarentees",
    id: 5,
  },
  {
    title: "FAQ",
    link: "/qa",
    id: 6,
  },
];

const Header = () => {
  const [features, setFeatures] = useState(false);
  const [all, setAll] = useState(false);
  const [active, setActive] = useState("header2-block4");
  const { brands, getAllBrands } = useContext(partContext);
  const { currentUser, handleLogout } = useContext(authContext);
  const { favLength1 } = useContext(favContext);

  useEffect(() => {
    getAllBrands();
  }, []);
  const navToggle = () => {
    active === "header2-block4"
      ? setActive("header2-block4 nav-active")
      : setActive("header2-block4");
  };
  const location = useLocation();

  return (
    <>
      <div className="header">
        <div className="container-header">
          <div className="header1">
            <div className="header1-block1">
              <Link to="/">
                <img className="header-logo" src={image1} alt="" />
              </Link>
            </div>
            <div className="header1-block2">
              {currentUser ? (
                <Link className="favorites_link" to="/favorites">
                  <Tooltip placement="bottom" title="Корзина">
                    <Badge style={{ marginRight: "30px" }} count={+favLength1}>
                      <ShoppingCartOutlined className="HeartFilled" />
                    </Badge>
                  </Tooltip>
                </Link>
              ) : (
                <Link className="favorites_link" to="/favorites">
                  <Tooltip placement="bottom" title="Корзина">
                    <ShoppingCartOutlined className="HeartFilled" />
                  </Tooltip>
                </Link>
              )}

              <Link to="/search">
                <Tooltip placement="bottom" title="поиск по VIN-code">
                  <Button
                    className="header_search_1"
                    icon={<SearchOutlined />}
                    size="large"
                  >
                    Поиск
                  </Button>
                </Tooltip>
              </Link>
            </div>
          </div>
          <div className="header2">
            <div
              onClick={() => {
                setAll(!all);
                setFeatures(false);
              }}
              className="header2-block1 header2-block2-category"
            >
              <h5 className="header-h5">ВСЕ КАТЕГОРИИ</h5>
              <img className="burger" src={image3} alt="" />
              {all ? (
                <div className="all">
                  {categories.map((item) => (
                    <div className="category-link">
                      <Link to={`/category/${item.id}`}>
                        <h4 key={item.id} className="all-link">
                          {item.title}
                        </h4>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <div
              onClick={() => {
                setAll(!all);
                setFeatures(false);
              }}
              className="header2-block1 header2-navbar2"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "10px",
                }}
              >
                <h5 className="header-h5" style={{ marginLeft: "10px" }}>
                  МЕНЮ
                </h5>
                <img
                  style={{ marginLeft: "100px" }}
                  className="burger"
                  src={image11}
                  alt="image"
                />
              </div>
              {all ? (
                <div className="all">
                  {NAVBAR_ITEMS.map((item) => (
                    <div className="category-link">
                      <Link to={item.link} key={item.id}>
                        <h4 className="all-link">{item.title}</h4>
                      </Link>
                    </div>
                  ))}
                  {currentUser ? (
                    <>
                      <h4 className="all-link">{currentUser}</h4>
                      <h4 className="all-link" onClick={handleLogout}>
                        Выйти
                      </h4>
                    </>
                  ) : (
                    <>
                      <Link className="all-link" to="/login">
                        <h4>Вход</h4>
                      </Link>
                      <Link className="all-link" to="/login">
                        <h4>Регистрация</h4>
                      </Link>
                    </>
                  )}
                </div>
              ) : null}
            </div>

            <div className="header2-block2">
              <div className="header-media"></div>
              <div className={active}>
                <img src={image5} alt="image" className="close" />

                {NAVBAR_ITEMS.map((navLink) => (
                  <Link
                    onClick={() => {
                      navToggle();
                      setAll(false);
                    }}
                    className={
                      location.pathname === navLink.link
                        ? "header2-active"
                        : "header2-a"
                    }
                    key={navLink.id}
                    to={navLink.link}
                  >
                    {navLink.title}
                  </Link>
                ))}
              </div>
              {features ? (
                <div className="features">
                  <div className="features-block1">
                    {brands.map((item) => (
                      <Link to={`/models/${item.id}`} key={item.id}>
                        <h4
                          onClick={() => setFeatures(false)}
                          className="features-h4"
                        >
                          {item.brand_name}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="border__lines-12"></div>
    </>
  );
};

export default Header;
