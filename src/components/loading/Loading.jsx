import React from "react";
import "./loading.scss";

const Loading = () => {
  let loadingItems = (
    <div className="product__loading__card">
      <div className="product__loading__top bg__animation"></div>
      <div className="product__loading__title bg__animation"></div>
      <div className="product__loading__subtitle bg__animation"></div>
    </div>
  );

  return (
    <section className="loading">
      <div className="container loading__container">
        {loadingItems}
        {loadingItems}
        {loadingItems}
      </div>
    </section>
  );
};

export default Loading;
