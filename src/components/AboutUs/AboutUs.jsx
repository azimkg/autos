import React from "react";
import price from "../Images/price.png";
import choice from "../Images/choice.png";
import deliver from "../Images/deliver.png";
import return1 from "../Images/return.png";
import imgs from "../Images/41808.webp";

import garant from "../Images/garant.png";

import "./AboutUs.css";

// const { Panel } = Collapse;

const AboutUs = () => {
  return (
    <div className="container">
      <div className="about_cols">
        <div className="about_cols_1">
          <h1 className="about-3_1-title">О нас</h1>
          <img id="about_cols_1_img" src={imgs} alt="image" />
          <p id="about_cols_text">
            AutoRay - интернет-магазин автозапчастей в Бишкеке,
            специализирующийся на продаже всех видов запасных частей,
            аксессуаров к автомобильной технике российского и импортного
            производства. Нашими поставщиками являются крупные и известные
            заводы производители автокомпонентов автомобильной техники. Наша
            политика продаж подразумевает внимательное и предупредительное
            отношение к клиенту. Мы действительно заинтересованы в том, чтобы
            купленные у нас автозапчасти, служили долго, всегда готовы помочь с
            выбором автозапчасти путем технических консультаций. Мы ставим своей
            задачей продажу автозапчастей с минимальными усилиями для
            покупателя, а также предоставление потенциальным клиентам
            информации, необходимой для успешного выбора той или иной запасной
            части в режиме онлайн. Мы гарантируем вам лучшее обслуживание, самый
            большой ассортимент в наличии и безусловно низкие цены. Независимо
            от того, выполняете ли вы регламентное техническое обслуживание или
            внеплановый ремонт изношенных узлов, оснащаете автомобиль
            аксессуарами или добавляете высокотехнологичное оборудование, наш
            профессиональный опыт в данной области обеспечит успех всех ваших
            автомобильных проектов. Наша цель — кардинально изменить условия
            онлайн-покупок автозапчастей и аксессуаров для автомобилей и сделать
            их понятными, точными и быстрыми.
          </p>
        </div>
        <div className="about_cols_2">
          <h1 className="about-3_1-title">Наши преимущества</h1>

          <div className="about__panel">
            <img className="about__panel-img" src={price} alt="" />
            <p className="about__panel-text">Доступные цены</p>
          </div>
          <div className="about__panel">
            <img className="about__panel-img" src={choice} alt="" />
            <p className="about__panel-text">Широкий выбор</p>
          </div>
          <div className="about__panel">
            <img className="about__panel-img" src={deliver} alt="" />
            <p className="about__panel-text">Быстрая доставка</p>
          </div>
          <div className="about__panel">
            <img className="about__panel-img" src={garant} alt="" />
            <p className="about__panel-text">Гарантия на товары</p>
          </div>
          <div className="about__panel">
            <img className="about__panel-img" src={return1} alt="" />
            <p className="about__panel-text">Простой возврат</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
