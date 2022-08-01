import React from "react";
import { ReactSVG } from "react-svg";
import { Col, Row } from "antd";
import icons from "../../assets/icons/icons";
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__top">
          <div className="left">
            <a href="#">
              <ReactSVG wrapper="span" src={icons.phone}></ReactSVG>
              <span>(225) 555-0118</span>
            </a>
            <a href="#">
              <ReactSVG wrapper="span" src={icons.mail}></ReactSVG>
              <span>michelle.rivera@example.com</span>
            </a>
          </div>
          <div className="mid">
            <a href="#">Follow Us and get a chance to win 80% off</a>
          </div>
          <div className="right">
            <p>Follow us: </p>
            <a href="#">
              <ReactSVG wrapper="span" src={icons.instagram}></ReactSVG>
            </a>
            <a href="#">
              <ReactSVG wrapper="span" src={icons.facebook}></ReactSVG>
            </a>
            <a href="#">
              <ReactSVG wrapper="span" src={icons.youtube}></ReactSVG>
            </a>
            <a href="#">
              <ReactSVG wrapper="span" src={icons.twitter}></ReactSVG>
            </a>
          </div>
        </div>
        <div className="header__bottom">
          <div className="logo">
            <p>Bandage</p>
          </div>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Shop
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Blog
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Contact
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__link">
                  Pages
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
