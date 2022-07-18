import {
  FacebookFilled,
  HomeFilled,
  InstagramFilled,
  MailFilled,
  PhoneFilled,
  WhatsAppOutlined,
} from "@ant-design/icons";
import React from "react";
import "./Contacts.css";
import telega from "../Images/telega.svg";
const Contacts = () => {
  return (
    <div className="contacts_wrapper">
      <div className="contacts_inner">
        <div className="contacts_inner-top">
          <h3>Контакты</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.047357209453!2d74.52711741533959!3d42.871844579155905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec893867f4689%3A0x57588fb3f16ac928!2z0YPQu9C40YbQsCDQn9Cw0YLRgNC40YHQsCDQm9GD0LzRg9C80LHRiywg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1655966156225!5m2!1sru!2skg"
            width={"100%"}
            height={350}
            loading={"lazy"}
            title={"map"}
            referrerpolicy={"no-referrer-when-downgrade"}
          ></iframe>
        </div>
        <div className="contacts_inner-bottom">
          <h3>AutoRay</h3>
          <div className="inner-bottom-card">
            <HomeFilled className="social_icon" />
            <a className="forText">г. Бишкек, Рынок "Кудайберген"</a>
          </div>
          <div className="inner-bottom-card">
            <HomeFilled className="social_icon" />
            <a className="forText">г. Бишкек, 192 ул. Киевская</a>
          </div>

          <div className="inner-bottom-card">
            <PhoneFilled className="social_icon" />
            <a className="forText" href="tel:+996551081998">
              +996 (504) 253-345
            </a>
          </div>
          <div className="inner-bottom-card">
            <PhoneFilled className="social_icon" />
            <a className="forText" href="tel:+996501081998">
              +996 (880) 253-545
            </a>
          </div>
          <div className="inner-bottom-card">
            <WhatsAppOutlined className="social_icon" />

            <a className="forText" href="https://wa.me/996504253345">
              Мы в WhatsApp
            </a>
          </div>
          <div className="inner-bottom-card">
            <InstagramFilled className="social_icon" />

            <a
              className="forText"
              href="https://instagram.com/autoray.kg?igshid=YmMyMTA2M2Y="
            >
              Мы в instagram
            </a>
          </div>
          <div className="inner-bottom-card">
            <MailFilled className="social_icon" />

            <a className="forText" href="mailto:Autoray312@gmail.com">
              Наша почта
            </a>
          </div>
          <div className="inner-bottom-card">
            <FacebookFilled className="social_icon" />

            <a
              className="forText"
              href="https://m.facebook.com/groups/444315813721486/?ref=share_group_link"
            >
              Мы в facebook
            </a>
          </div>
          <div className="inner-bottom-card">
            <img
              className="social_icon"
              width={24}
              height={24}
              src={telega}
              alt="telegram"
            />

            <a className={"forText"} href="https://t.me/+dkNCTaM7gPI2Y2Uy">
              Мы в telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
