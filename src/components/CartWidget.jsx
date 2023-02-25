import React, { Fragment } from "react";
import carrito from "../assets/img/carrito-de-compras-white.png";
import { useCartContext } from "./CartContext";
import "./CartWidget.css";

export default function CartWidget() {
  const { cart, totalCantidad, removerItem, emptycart } = useCartContext();
  console.log(cart);
  return (
    <div className="d-flex content__3">
      <ul>
        <li className="submenu containerCarrito">
          <img src={carrito} id="img-carrito" />
          <div className="carrito" id="carrito">
            <table className="carrito__color" id="lista-carrito">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {cart
                  ? cart.map((item) => (
                      <tr>
                        <th>{item.nombre}</th>
                        <th>{item.precio * item.cantidad}</th>
                        <th>{item.cantidad}</th>
                        <buttom
                          className="btnX"
                          onClick={() => removerItem(item.id)}
                        >
                          X
                        </buttom>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </table>

            <a onClick={() => emptycart()} href="#" className="btnVaciar">
              Vaciar Carrito
            </a>
            <a href="/contacto" className="btnVaciar">
              Comprar
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}
