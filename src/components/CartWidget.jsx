import React from "react";
import carrito from "../assets/img/carrito-de-compras.png";
import "./CartWidget.css";

export default function CartWidget() {
  return (
    <div className="containerCarrito">
      <img src={carrito} alt="" />
      <p>3</p>
    </div>
  );
}
