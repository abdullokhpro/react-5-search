import React, { useEffect, useState } from "react";
import "./prodcuts.scss";
import mainUrl from "../../api";
import Loading from "../loading/loading";
import { CiCircleMore } from "react-icons/ci";

function Product() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(1);
  const [more, setMore] = useState(null);
  let perPageCount = 3;

  document.body.style.overflow = more ? "hidden" : "auto";

  useEffect(() => {
    setLoading(true);
    mainUrl
      .get(`/products`, {
        params: {
          limit: offset * perPageCount,
        },
      })
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [offset]);

  let productCard = products?.map((el) => (
    <div key={el.id} className="product__card">
      <div className="product__card__top">
        <img src={el.images[0]} alt={el.title} />
      </div>
      <h4 className="product__card__title">{el.title}</h4>
      <div className="product__card__cost">
        <p className="product__new__price">${el.stock}</p>
      </div>
    </div>
  ));
  return (
    <section className="product">
      <div className="container">
        <div className="product__cards">{productCard}</div>
        {loading ? <Loading /> : <></>}

        <button
          onClick={() => setOffset((p) => p + 1)}
          className="product__btn"
        >
          add more
        </button>
      </div>
      {/* {more ? <More data={more} close={setMore} /> : <></>} */}
    </section>
  );
}

export default Product;
