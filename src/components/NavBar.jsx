import React from "react";
import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <div>
      <a href="">Menu</a>
      <a href="">Productos</a>
      <a href="">Nosotros</a>
      <CartWidget />
    </div>
  );
}
