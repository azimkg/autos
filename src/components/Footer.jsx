import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { categories } from "../helpers/categorie";

const Footer = () => {
  return (
    <div style={{ paddingTop: "50px" }}>
      <footer class="footer-container typefooter-1">
        <div class="container">
          <div class="row footer-middle">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-10 col-style">
              <div class="box-footer box-infos">
                <div class="module">
                  <h3 class="modtitle">Наши контакты</h3>
                  <div class="modcontent">
                    <ul class="list-icon">
                      <li>
                        <span class="icon pe-7s-map-marker"></span>
                        Бишкек
                      </li>
                      <li>
                        <span class="icon pe-7s-call"></span>
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
                        <span class="icon pe-7s-mail"></span>
                        <a href="mailto:coautoray312@gmail.com">
                          autoray312@gmail.com
                        </a>
                      </li>
                      <li>
                        <span class="icon pe-7s-alarm"></span>
                        10-00 / 18-00
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-style">
              <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-style">
                  <div class="box-information box-footer">
                    <div class="module clearfix">
                      <h3 class="modtitle">Информация</h3>
                      <div class="modcontent">
                        <ul class="menu">
                          <li>
                            <a href="/about">О нас</a>
                          </li>
                          <li>
                            <a href="/contacts">Контакты</a>
                          </li>
                          <li>
                            <a href="/guarentees">Гарантии</a>
                          </li>
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
                {/* <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-style">
                  <div class="box-account box-footer">
                    <div class="module clearfix">
                      <h3 class="modtitle">Основные партнеры</h3>
                      <div class="modcontent">
                        <ul class="menu">
                          <li>
                            <a href="#">BMW</a>
                          </li>
                          <li>
                            <a href="#">Mercedes</a>
                          </li>
                          <li>
                            <a href="#">Audi</a>
                          </li>
                          <li>
                            <a href="#">Toyota</a>
                          </li>
                          <li>
                            <a href="#">Chevrolet</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-clear">
                  <div class="box-service box-footer">
                    <div class="module clearfix">
                      <h3 class="modtitle">Категории</h3>
                      <div class="modcontent">
                        {categories.slice(5, 11).map((item) => (
                          <ul class="menu">
                            <Link to={`/category/${item.id}`}>
                              <li key={item.id} className="footer__liteg">
                                {item.title}
                              </li>
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
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="copyright col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <p>
                  Autoray © 2022. All Rights Reserved. Designed by
                  <a
                    class="pixel"
                    target={"_blank"}
                    href="http://pixeldevs.club/"
                  >
                    pixeldevs.club
                  </a>
                </p>
              </div>
              <div class="payment-w col-lg-4 col-md-4 col-sm-12 col-xs-12"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
