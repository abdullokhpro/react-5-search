import React from "react";
import Hero from "../hero/Hero";
import "./main.scss";
import Products from "../products/Products";
import Product from "../products/Products";
import About from "../about/About";

const Main = () => {
  return (
    <main className="main">
      <Hero />
      <Product />
      <About />
    </main>
  );
};

export default Main;
