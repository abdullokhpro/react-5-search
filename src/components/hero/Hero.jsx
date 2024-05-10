import React from "react";
import "./hero.scss";
import heroImg from "../../assets/hero/hero-img.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <div className="hero__left">
          <h2 className="hero__subtitle">Mobile</h2>
          <h1 className="hero__title">Backcover Tempered Glass</h1>
          <button className="hero__btn">Shop all !</button>
        </div>
        <div className="hero__right">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
