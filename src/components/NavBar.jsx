import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";
import home from "../assets/img/homegarage.png";
import logo from "../assets/img/logo.png";
import instagram from "../assets/img/instagram.png";
import whatsapp from "../assets/img/whatsapp.png";
import facebook from "../assets/img/facebook.png";
import youtube from "../assets/img/youtube.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <a className="navegadores" href="/">
        <img src={home} alt="home" />
      </a>
      <CartWidget />
      <div className="navbar2">
        <div className="navegacion">
          <a href="/">
            <p>Productos</p>
          </a>
          <a href="https://www.instagram.com">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=584269875634&text=Quiero+m%C3%A1s+informaci%C3%B3n%21&app_absent=0">
            <img src={whatsapp} alt="Whatsapp" />
          </a>
          <a href="https://www.facebook.com">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.youtube.com">
            <img src={youtube} alt="Youtube" />
          </a>
        </div>
      </div>
    </div>
  );
}
