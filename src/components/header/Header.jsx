import React, { useState, useEffect } from "react";
import "./header.scss";
import logo from "../../assets/header/logo.svg";
import { RiSearchLine } from "react-icons/ri";
import { CiMenuFries } from "react-icons/ci";
import SearchModel from "./SearchModel";
import axios from "../../api";

const Header = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!value.trim()) return;
    axios
      .get(`/products/search?q=${value}`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, [value]);

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <ul className={`header__list ${show ? "header__show" : ""}`}>
            <li className="header__item">
              <a className="header__link" href="#">
                Home
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#">
                Shop All
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#">
                Blog
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#">
                About us
              </a>
            </li>
          </ul>
          <div className="header__logo">
            <a href="#">
              <img src={logo} width={150} alt="here is the logo of website" />
            </a>
          </div>
          <div className="header__right">
            <form className="header__form">
              <input
                value={value}
                onChange={(e) => setValue(e.target.value.trim())}
                type="search"
                placeholder="Search Product"
              />
              <RiSearchLine className="header__form__icon" />

              {value.trim() ? <SearchModel data={data} /> : <></>}
            </form>

            <CiMenuFries
              onClick={() => setShow(true)}
              className="header__menu"
            />

            {show ? (
              <div
                onClick={() => setShow(false)}
                className="header__menu__overlay"
              ></div>
            ) : (
              <></>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
