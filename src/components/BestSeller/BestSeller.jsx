import React from "react";
import "../BestSeller/BestSeller.css";
import { Badge } from "antd";

const BestSeller = () => {
  return (
    <div className="container">
      <div className="conatainer-BestSeller">
        <div className="main-content-BestSeller">
          <div className="shopByCategories__title bestseller__title">
            <h4 className="shopByCategories__title-h4">
              ЛУЧШИЕ ПРОДАЖИ НЕДЕЛИ
            </h4>
            <div style={{ display: "flex" }}>
              <span className="shopByCategories__span"></span>
              <h3 className="shopByCategories__title-h3">БЕСТСЕЛЛЕРЫ</h3>
              <span className="shopByCategories__span"></span>
            </div>
          </div>
          <div className="contain-BestSeller">
            <Badge.Ribbon text="New" className="sale-BestSeller">
              {/* <Card title="Pushes open the window" size="small"> */}
              <div className="card-BestSeller">
                <div className="BestSeller-img">
                  <img
                    src="https://steklafar.com.ua/public/img/fara.png"
                    alt=""
                  />
                </div>
                <div className="BestSeller-description">
                  <h3 className="best-h3">Светодиодные</h3>
                  <h2>$48.00</h2>
                </div>
                <button className="btn-BestSeller">Подробнее</button>
              </div>
              {/* </Card> */}
            </Badge.Ribbon>

            <Badge.Ribbon text="  -20%" className="sale-BestSeller" color="red">
              {/* <Card title="Pushes open the window" size="small"> */}
              <div className="card-BestSeller">
                <div className="BestSeller-img">
                  <img
                    src="https://tmpekar.ru/upload/iblock/4ad/4ad516450e28aa93c5f6716e1df7ddd3.png"
                    alt=""
                  />
                </div>
                <div className="BestSeller-description">
                  <h3 className="best-h3">Полуметалличесские</h3>
                  <h2>
                    <del>$25.00</del>
                  </h2>
                </div>
                <button className="btn-BestSeller">Подробнее</button>
              </div>
              {/* </Card> */}
            </Badge.Ribbon>

            <Badge.Ribbon text="New" className="sale-BestSeller">
              {/* <Card title="Pushes open the window" size="small"> */}
              <div className="card-BestSeller">
                <div className="BestSeller-img">
                  <img
                    src="https://gazpromneft-oil.ru/render/storage/2b/ed/9188339d4c5fab961622e36b6600f44d4e524795.png?w=380&h=380"
                    alt=""
                  />
                </div>
                <div className="BestSeller-description">
                  <h3 className="best-h3">Масла газпром</h3>
                  <h2>$20.00</h2>
                </div>
                <button className="btn-BestSeller">Подробнее</button>
              </div>
              {/* </Card> */}
            </Badge.Ribbon>

            <Badge.Ribbon text="Sale" className="sale-BestSeller" color="red">
              {/* <Card title="Pushes open the window" size="small"> */}
              <div className="card-BestSeller">
                <div className="BestSeller-img">
                  <img
                    src="https://zubr-rus.ru/wa-data/public/shop/products/07/88/8807/images/10053/10053.970.png"
                    alt=""
                  />
                </div>
                <div className="BestSeller-description">
                  <h3 className="best-h3">сделано в Germany</h3>
                  <h2>
                    <del>$33.00</del>
                  </h2>
                </div>
                <button className="btn-BestSeller">Подробнее</button>
              </div>
              {/* </Card> */}
            </Badge.Ribbon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
