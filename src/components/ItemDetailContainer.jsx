import db from "./../helpers/db.json";
import { React, useState, useEffect, Fragment } from "react";
import { NavLink, useParams } from "react-router-dom";

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
              <p>
                {elm.nombre}-{elm.precio}-{elm.categoria}
              </p>
            </div>
          ))
      ) : (
        <p>No hay datos</p>
      )}
    </div>
  );
}
