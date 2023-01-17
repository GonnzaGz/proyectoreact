import React from "react";
import CartWidget from "./CartWidget";
import "./NavBar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <a className="navegadores" href="">
        Menu
      </a>
      <a className="navegadores" href="">
        Productos
      </a>
      <a className="navegadores" href="">
        Nosotros
      </a>
      <CartWidget />
    </div>
  );
}
