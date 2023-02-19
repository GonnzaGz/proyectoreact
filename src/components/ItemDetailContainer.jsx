import db from "./../helpers/db.json";
import { React, useState, useEffect, Fragment } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { collection, getDocs } from "firebase/firestore";
import { db1 } from "./../firebase/config";

export default function ItemDetailContainer() {
  const [item, setItem] = useState(false);
  const productosRef = collection(db1, "productos");
  const [productos, setProductos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setItem(true);
    }
  }, [id]);

  useEffect(() => {
    getDocs(productosRef).then((resp) => {
      const pr = resp.docs.map((doc) => doc.data());
      setProductos(pr);
    });
  }, []);
  console.log(productos);

  return (
    <div>
      {item ? (
        productos
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
