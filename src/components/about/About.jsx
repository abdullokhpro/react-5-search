import React from "react";
import "./about.scss";
import aboutImg from "../../assets/about/about-img.png";
import aboutBottom from "../../assets/about/about-bottom.png";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__top">
          <div className="about__icon"></div>
          <p className="about__subtitle">about us</p>
          <h2 className="about__title">
            If you’re looking for a Premium Quality Tempered Glass or Back-cover
            for your Device{" "}
          </h2>
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. 
          </p>

          <img className="about__img" src={aboutImg} alt="" />
        </div>
        <div className="about__bottom">
          <div className="about__bottom__left">
            <h2 className="about__bottom__title">
              Shop Premium Tempered Glass in wholesale Price !
            </h2>
            <p className="about__bottom__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.  LKR : 299
            </p>
            <button className="about__bottom__btn">Shop Tempered Glass</button>
          </div>
          <div className="about__bottom__right">
            <img src={aboutBottom} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
