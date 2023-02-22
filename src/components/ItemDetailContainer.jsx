import db from "./../helpers/db.json";
import { React, useState, useEffect, Fragment, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import { collection, getDoc, doc } from "firebase/firestore";
import { db1 } from "./../firebase/config";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [item, setItem] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    // getDocs(productosRef).then((resp) => {
    //   const pr = resp.docs.map((doc) => doc.data());
    //   setProductos(pr);
    // });
    console.log(id);
    const productosRef = doc(db1, "productos", id);
    getDoc(productosRef).then((resp) => {
      setItem({ ...resp.data(), id: resp.id });
    });
  }, [id]);

  return <div>{item && <ItemDetail {...item} />}</div>;
}
