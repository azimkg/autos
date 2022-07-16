import { CarOutlined, RetweetOutlined, TeamOutlined } from "@ant-design/icons";
import React from "react";
import "./Support.css";

const Support = () => {
  return (
    <div className="form_bottom">
      <div className="form_bottom-wrapper">
        <div className="bottom_card">
          <CarOutlined className="bottom_card-img" />
          <div className="bottom_card-txt">
            <h4>БЕСПЛАТНАЯ ДОСТАВКА</h4>
            <p>Для постоянных клиентов</p>
          </div>
        </div>
        <div className="bottom_card">
          <TeamOutlined className="bottom_card-img" />
          <div className="bottom_card-txt">
            <h4>ОНЛАЙН ПОДДЕРЖКА</h4>
            <p>24/7</p>
          </div>
        </div>
        <div className="bottom_card">
          <RetweetOutlined className="bottom_card-img" />
          <div className="bottom_card-txt">
            <h4>7 ДНЕЙ ВОЗВРАТ</h4>
            <p>При сохранении качества</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
