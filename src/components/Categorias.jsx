import React from "react";
import "./Categorias.css";
import { NavLink } from "react-router-dom";

export default function Categorias(props) {
  const { categorias, index } = props;
  return (
    <div className="categoriaGral" key={`${index}${categorias.categoria}`}>
      <NavLink
        className={"estilo2 cat"}
        to={`/category/${categorias.categoriaId}`}
      >
        {categorias.categoria}
      </NavLink>
    </div>
  );
}
