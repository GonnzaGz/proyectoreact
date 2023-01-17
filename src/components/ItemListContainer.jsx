import { React, useState, useEffect, Fragment } from "react";
import "./ItemListContainer.css";
import { NavLink, useParams } from "react-router-dom";
import categoriaDb from "./../helpers/categoriaDb.json";
import db from "./../helpers/db.json";

export default function ItemListContainer(props) {
  const [category, setCategory] = useState(false);
  const { id } = useParams();
  const { greeting } = props;
  useEffect(() => {
    if (id) {
      setCategory(true);
    }
  }, [id]);
  console.log(id);
  return (
    <div>
      {category ? (
        <Fragment>
          {categoriaDb.map((elm, index) => (
            <div key={`${index}${elm.categoria}`}>
              <NavLink to={`/category/${elm.categoriaId}`}>
                {elm.categoria}
              </NavLink>
            </div>
          ))}
          {db
            .filter((elm) => elm.categoriaId == id)
            .map((elm, index) => (
              <div key={`${index}${elm.nombre}`}>
                <p>{elm.nombre}</p>
                <p>{elm.categoria}</p>
                <NavLink to={`/item/${elm.id}`}>Ver detalle</NavLink>
              </div>
            ))}
        </Fragment>
      ) : (
        <Fragment>
          {categoriaDb.map((elm, index) => (
            <div className="categoriaGral" key={`${index}${elm.categoria}`}>
              <NavLink to={`/category/${elm.categoriaId}`}>
                {elm.categoria}
              </NavLink>
            </div>
          ))}
          {db.map((elm, index) => (
            <div className="tarjetaProductoGral" key={`${index}${elm.nombre}`}>
              <img className="imgProducto" src={elm.imagen} />
              <p>{elm.nombre}</p>
              <p>{elm.categoria}</p>
              <NavLink to={`/item/${elm.id}`}>Ver detalle</NavLink>
            </div>
          ))}
        </Fragment>
      )}
    </div>
  );
}
