import db from "./../helpers/db.json";
import { React, useState, useEffect, Fragment } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
  const [item, setItem] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setItem(true);
    }
  }, [id]);
  return (
    <div>
      {item ? (
        db
          .filter((elm) => elm.id == id)
          .map((elm, index) => (
            <div className="tarjetasExpandido" key={`${index}${elm.nombre}`}>
              <div className="panel1">
                <img className="imgProductoDetalle" src={elm.imagen} />
              </div>
              <div className="panel2">
                <p className="nombreDetalle">{elm.nombre}</p>
                <p className="precioDetalle">$ {elm.precio}</p>
                <p className="categoriaDetalle">Categoría: {elm.categoria}</p>
                <p className="descripcionTitDetalle">Descripción</p>
                <p className="descripcionDetalle">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Atque aspernatur vel itaque illo, et consequuntur quos
                  corrupti adipisci, animi odit natus labore molestiae odio
                  ratione? Necessitatibus blanditiis aliquam magni debitis.
                </p>
              </div>
            </div>
          ))
      ) : (
        <p>No hay datos</p>
      )}
    </div>
  );
}
