import { HeartOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../authContext";
import "./HeaderTop.css";

const HeaderTop = () => {
  const { currentUser, handleLogout } = useContext(authContext);
  return (
    <div>
      <div className="header__top">
        <div className="container">
          <div className="header__top-block">
            <ul className="header__top-social">
              <a
                href="https://m.facebook.com/groups/444315813721486/?ref=share_group_link"
                target="_blank"
              >
                <li className="header__top-items">
                  <svg
                    width="18"
                    height="20"
                    fill="rgb(211, 211, 211)"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                  </svg>
                </li>
              </a>
              <a
                href="https://instagram.com/autoray.kg?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <li className="header__top-items">
                  <svg
                    fill="rgb(211, 211, 211)"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="18"
                    height="20"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </li>
              </a>
              <a href="https://t.me/+dkNCTaM7gPI2Y2Uy" target="_blank">
                <li className="header__top-items">
                  <svg
                    className="telegram_from_top-header"
                    width="18"
                    height="20"
                    viewBox="0 0 448 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z" />
                  </svg>
                </li>
              </a>
            </ul>
            <div className="header__top-log">
              <Link to="/favorites">
                <Tooltip
                  className="header__top-items"
                  placement="bottom"
                  title="Избранное"
                >
                  <HeartOutlined className="header_top_heart" />
                </Tooltip>
              </Link>
              <div className="auth__registr">
                {currentUser ? (
                  <>
                    <span>{currentUser}</span>/
                    <span className="auth__registret" onClick={handleLogout}>
                      Выйти
                    </span>
                  </>
                ) : (
                  <>
                    <Link className="auth__registret" to="/login">
                      <span>Вход</span>
                    </Link>
                    /
                    <Link className="auth__registret" to="/login">
                      <span>Регистрация</span>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
