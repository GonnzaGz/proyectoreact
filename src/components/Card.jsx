import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  const { productos, index } = props;
  return (
    <div className="tarjetaProductoGral" key={`${index}${productos.nombre}`}>
      <img className="imgProducto" src={productos.imagen} />
      <p className="productoLetra">{productos.nombre}</p>
      <p className="catLetra">Categoría: {productos.categoria}</p>
      <NavLink className={"estilo detalle"} to={`/item/${productos.id}`}>
        Ver detalle
      </NavLink>
    </div>
  );
}
