import { React, useState, useEffect, Fragment } from "react";
import "./ItemListContainer.css";
import { NavLink, useParams } from "react-router-dom";
import categoriaDb from "./../helpers/categoriaDb.json";
import db from "./../helpers/db.json";
import Card from "./Card";
import Categorias from "./Categorias";
import Main from "./Main";
import { collection, getDocs } from "firebase/firestore";
import { db1 } from "./../firebase/config";

export default function ItemListContainer(props) {
  const [category, setCategory] = useState(false);
  const productosRef = collection(db1, "productos");
  const [productos, setProductos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setCategory(true);
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
    <Fragment>
      <Main />
      <div className="padre">
        {category ? (
          <Fragment>
            <div className="padre2">
              {categoriaDb.map((elm, index) => (
                <Categorias key={index} categorias={elm} />
              ))}
            </div>
            <div className="padre3">
              {id == 0
                ? productos.map((elm, index) => (
                    <Card key={index} productos={elm} />
                  ))
                : productos
                    .filter((elm) => elm.categoriaId == id)
                    .map((elm, index) => <Card key={index} productos={elm} />)}
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <div className="padre2">
              {categoriaDb.map((elm, index) => (
                <Categorias key={index} categorias={elm} />
              ))}
            </div>
            <div className="padre3">
              {productos.map((elm, index) => (
                <Card key={index} productos={elm} />
              ))}
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}
