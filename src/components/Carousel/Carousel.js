import React from "react";
import Image_1 from "../../assets/images/jeans.jpg";
import Image_2 from "../../assets/images/woman-1.jpg";
import Image_3 from "../../assets/images/woman-2.jpg";
import Image_4 from "../../assets/images/woman-3.jpg";
import Instagram_icon from "../../assets/images/instagram-icon2.png"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "./Carousel.css";

const Carousel = () => {
  return (
    <Splide
      options={{
        rewind: true,
        width: "100%",
        autoheight: true,
      }}
    >
      <SplideSlide>
        <img className="imagen-slide" src={Image_1} alt="a" />
        <div className="container">
          <div className="container-text">
            <h1 className="title">SHOWROOMS Y MARCAS EN BUENOS AIRES</h1>
            <p className="subtitle">
              Toda la informacion sobre tendencias, marcas y donde encontrarlo,
              esta en Infoshowrooms
            </p>
          </div>
          <div className="container-buttons">
            <button className="button-info">MÁS INFO</button>
            <div className="container-icons">
              <a href="#"><img className="instagram-icon" src={Instagram_icon} alt="icon-instagram" /></a>
              <span className="text-icon">SEGUINOS EN</span>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <img className="imagen-slide rotation-image" src={Image_3} alt="b" />
        <div className="container">
          <div className="container-text">
            <h1 className="title">SHOWROOMS Y MARCAS EN BUENOS AIRES</h1>
            <p className="subtitle">
              Toda la informacion sobre tendencias, marcas y donde encontrarlo,
              esta en Infoshowrooms
            </p>
          </div>
          <div className="container-buttons">
            <button className="button-info">MAS INFO</button>
            <div className="container-icons">
              <a href="#"><img className="instagram-icon" src={Instagram_icon} alt="icon-instagram" /></a>
              <span className="text-icon">SEGUINOS EN</span>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <img className="imagen-slide rotation-image" src={Image_4} alt="b" />
        <div className="container">
          <div className="container-text">
            <h1 className="title">SHOWROOMS Y MARCAS EN BUENOS AIRES</h1>
            <p className="subtitle">
              Toda la informacion sobre tendencias, marcas y donde encontrarlo,
              esta en Infoshowrooms
            </p>
          </div>
          <div className="container-buttons">
            <button className="button-info">MAS INFO</button>
            <div className="container-icons">
              <a href="#"><img className="instagram-icon" src={Instagram_icon} alt="icon-instagram" /></a>
              <span className="text-icon">SEGUINOS EN</span>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <img className="imagen-slide" src={Image_2} alt="b" />
        <div className="container">
          <div className="container-text">
            <h1 className="title">SHOWROOMS Y MARCAS EN BUENOS AIRES</h1>
            <p className="subtitle">
              Toda la informacion sobre tendencias, marcas y donde encontrarlo,
              esta en Infoshowrooms
            </p>
          </div>
          <div className="container-buttons">
            <button className="button-info">MAS INFO</button>
            <div className="container-icons">
              <a href="#"><img className="instagram-icon" src={Instagram_icon} alt="icon-instagram" /></a>
              <span className="text-icon">SEGUINOS EN</span>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
