import { React, useState, useEffect, Fragment } from "react";
import "./ItemListContainer.css";
import { NavLink, useParams } from "react-router-dom";
import categoriaDb from "./../helpers/categoriaDb.json";
import db from "./../helpers/db.json";
import Card from "./Card";
import Categorias from "./Categorias";
import Main from "./Main";

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
                ? db.map((elm, index) => <Card key={index} productos={elm} />)
                : db
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
              {db.map((elm, index) => (
                <Card key={index} productos={elm} />
              ))}
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
}
