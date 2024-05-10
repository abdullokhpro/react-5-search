import React from "react";
import { RiH3 } from "react-icons/ri";

const SearchModel = ({ data }) => {
  let searchItems = data?.map((el) => (
    <div className="search__detail__content" key={el.id}>
      <img src={el.images[0]} width={25} alt="" />
      <span>{el.title}</span>
    </div>
  ));
  return (
    <div className="search__detail">
      {data && data.length === 0 ? <h3>Malumot topilmadi</h3> : <></>}
      {searchItems}
    </div>
  );
};

export default SearchModel;
