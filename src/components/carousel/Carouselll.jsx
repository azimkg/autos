import React from "react";
import { Carousel } from "antd";
import "./Carouselll.css";
import carousel1 from "../Images/carousel1.webp";
import carousel2 from "../Images/carousel2.webp";
import carousel3 from "../Images/carousel3.webp";
import carousel4 from "../Images/carousel1-320.webp";
import carousel5 from "../Images/carousel2-320.webp";
import carousel6 from "../Images/carousel3-320.webp";

const contentStyle = {
  height: "480px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "grey",
};

const Carouselll = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="carusel">
      <Carousel autoplay>
        <div>
          <img className="carousel__images" src={carousel1} alt="image" />
          <img className="carousel__images320" src={carousel4} alt="image" />
        </div>
        <div>
          <img className="carousel__images" src={carousel2} alt="image2" />
          <img className="carousel__images320" src={carousel5} alt="image" />
        </div>
        <div>
          <img className="carousel__images" src={carousel3} alt="image3" />
          <img className="carousel__images320" src={carousel6} alt="image" />
        </div>
      </Carousel>
    </div>
  );
};

export default Carouselll;
