import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { categories } from "../helpers/categorie";

const Footer = () => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <footer className="footer-container typefooter-1">
        <div className="container">
          <div className="row footer-middle">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-10 col-style">
              <div className="box-footer box-infos">
                <div className="module">
                  <h3 className="modtitle">Наши контакты</h3>
                  <div className="modcontent">
                    <ul className="list-icon">
                      <li>
                        <span className="icon pe-7s-map-marker"></span>
                        Бишкек
                      </li>
                      <li>
                        <span className="icon pe-7s-call"></span>
                        <a className="forText" href="tel:+996504253345">
                          +996 (504) 253-345
                        </a>
                      </li>
                      <li>
                        <a className="forText" href="tel:+996880253545">
                          +996 (880) 253-545
                        </a>
                      </li>
                      <li>
                        <a className="forText" href="tel:+996221253545">
                          +996 (221) 253-545
                        </a>
                      </li>
                      <li>
                        <span className="icon pe-7s-mail"></span>
                        <a href="mailto:coautoray312@gmail.com">
                          autoray312@gmail.com
                        </a>
                      </li>
                      <li>
                        <span className="icon pe-7s-alarm"></span>
                        10-00 / 18-00
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-style">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-style">
                  <div className="box-information box-footer">
                    <div className="module clearfix">
                      <h3 className="modtitle">Информация</h3>
                      <div className="modcontent">
                        <ul className="menu">
                          <Link to="/about">
                            <li>
                              <a>О нас</a>
                            </li>
                          </Link>
                          <Link to="/contacts">
                            <li>
                              <a>Контакты</a>
                            </li>
                          </Link>
                          <Link to="/guarentees">
                            <li>
                              <a>Гарантии</a>
                            </li>
                          </Link>

                          <li>
                            <a className="forText" href="tel:+996504253345">
                              Поддержка 24/7
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-clear">
                  <div className="box-service box-footer">
                    <div className="module clearfix">
                      <h3 className="modtitle">Категории</h3>
                      <div className="modcontent">
                        {categories.slice(5, 11).map((item) => (
                          <ul className="menu" key={item.id}>
                            <Link to={`/category/${item.id}`}>
                              <li className="footer__liteg">{item.title}</li>
                            </Link>
                          </ul>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="copyright col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <p>
                  Autoray © 2022. All Rights Reserved. Designed by
                  <a
                    className="pixel"
                    target={"_blank"}
                    href="http://pixeldevs.club/"
                  >
                    pixeldevs.club
                  </a>
                </p>
              </div>
              <div className="payment-w col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
